"use client";

import { DarkModeProvider } from './context/DarkModeProvider';
import Background from './components/background/background';
import DarkModeButton from './components/dark-mode-button/darkModeButton';
import styles from './page.module.css';
import SongsList from './components/songs-list/songsList';
import Clock from './components/clock/clock';
import Buttons from './components/buttons/buttons';
import TimerProvider from './context/TimerProvider';

export default function Home() {
  
  /**
   * Démarre le son du réveil.
   * A pour objectif d'ête appelée par TimerProvider.
   */
  function startSound() {
    const audio = new Audio('/sound/reggaeton-reggae.mp3');

    audio.play();
  }
  
  // version en fonction flêchée anonyme
  // const startSound = () => {}

  return (
    <main>
      <DarkModeProvider>
        <Background>
          <div className={styles.app}>
            <DarkModeButton />
            <SongsList />
            <TimerProvider endFunction={startSound}>
              <Clock />
              <Buttons />
            </TimerProvider>
          </div>
        </Background>
      </DarkModeProvider>
    </main >
  );
}
