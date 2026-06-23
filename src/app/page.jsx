"use client";

import { useEffect, useState } from "react";
import { DarkModeProvider } from './context/DarkModeProvider';
import Background from './components/background/background';
import DarkModeButton from './components/dark-mode-button/darkModeButton';
import styles from './page.module.css';
import SongsList from './components/songs-list/songsList';
import Clock from './components/clock/clock';
import Buttons from './components/buttons/buttons';
import TimerProvider from './context/TimerProvider';

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
      // création d'un objet Audio
      const audio = new Audio(`sound/${selectedSong["song_file_name"]}`);
      setAlarmOn(true);
      // play de l'audio
      audio.play();
    }
  }
  
  // version en fonction flêchée anonyme
  // const startSound = () => {}

  return (
    <main>
      <DarkModeProvider>
        <Background>
          <div className={styles.app}>
            <DarkModeButton />
            <SongsList songs={songs} setSelectedSong={setSelectedSong}/>
            <TimerProvider endFunction={startSound}>
              <Clock />
              {
                // si alarmOn alors on affiche le bouton stop alarm
                // sinon le set de boutons de réglage du timer
                alarmOn ? <button onClick={() => { /* TODO arrêter audio */ }}>TODO</button> : <Buttons />
              }
            </TimerProvider>
          </div>
        </Background>
      </DarkModeProvider>
    </main >
  );
}
