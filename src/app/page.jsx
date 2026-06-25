"use client";

import { useRef, useState } from "react";
import { DarkModeProvider } from './context/DarkModeProvider';
import Background from './components/background/background';
import DarkModeButton from './components/dark-mode-button/darkModeButton';
import styles from './page.module.css';
import SongsList from './components/songs-list/songsList';
import Clock from './components/clock/clock';
import Buttons from './components/buttons/buttons';
import TimerProvider from './context/TimerProvider';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const songs = [
  {
    "name": "Reggeaton",
    "artist": "Random",
    "song_file_name": "reggaeton-reggae.mp3",
    "img_file_name": "album.jpg"
  },
  {
    "name": "La merguez party",
    "artist": "Les musclés",
    "song_file_name": "reggaeton-reggae.mp3",
    "img_file_name": "album.jpg"
  },
  {
    "name": "Un super morceau",
    "artist": "On sait pas",
    "song_file_name": "reggaeton-reggae.mp3",
    "img_file_name": "album.jpg"
  }
];

export default function Home() {

  const audioRef = useRef(null);

  /**
   * Moreau sélectionné, va être utilisé pour l'alarme.
   * 
   * JSON de la forme :
   * {
   *    "name": "Reggeaton",
   *    "artist": "Random",
   *    "file_name": "reggaeton-reggae.mp3"
   *  }
   */
  const [selectedSong, setSelectedSong] = useState(songs[0]);

  /**
   * State de sonnerie
   */
  const [alarmOn, setAlarmOn] = useState(false);

  // Code de test de changement du morceau sélectionné
  // uniquement pour tester
  // useEffect(() => {
  //   if (selectedSong == null) {
  //     console.log("Premier coup, pas de morceau sélectionné");
  //   } else {
  //     console.log(selectedSong);
  //   }
  // }, [selectedSong]);

  /**
   * Démarre le son du réveil.
   * A pour objectif d'ête appelée par TimerProvider.
   */
  function startSound() {
    if (selectedSong != null) {
      audioRef.current = new Audio(`${basePath}/sound/${selectedSong["song_file_name"]}`);

      setAlarmOn(true);
      audioRef.current.play();
    }
  }

  function stopSound() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setAlarmOn(false);
  }

  // version en fonction flêchée anonyme
  // const startSound = () => {}

  return (
    <main>
      <DarkModeProvider>
        <Background>
          <div className={styles.app}>
            <DarkModeButton />
            <SongsList songs={songs} setSelectedSong={setSelectedSong} />
            <TimerProvider endFunction={startSound}>
              <Clock />
              <Buttons
                alarmOn={alarmOn}
                stopSound={stopSound}
              />
            </TimerProvider>
          </div>
        </Background>
      </DarkModeProvider>
    </main >
  );
}
