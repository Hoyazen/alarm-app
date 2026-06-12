import { DarkModeProvider } from './context/DarkModeProvider';
import Background from './components/app-bg/appBg';

export default function Home() {
  return (
    <main>
      <DarkModeProvider>
        <Background>

        </Background>
      </DarkModeProvider>
    </main>
  );
}
