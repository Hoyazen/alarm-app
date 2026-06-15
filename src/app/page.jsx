import { DarkModeProvider } from './context/DarkModeProvider';
import Background from './components/background/background';
import DarkModeButton from './components/dark-mode-button/darkModeButton';
import styles from './page.module.css';
import SongsList from './components/songs-list/songsList';

export default function Home() {
  return (
    <main>
      <DarkModeProvider>
        <Background />
          <div className={styles.app}>
            <DarkModeButton />
            <SongsList />
          </div>
      </DarkModeProvider>
    </main>
  );
}
