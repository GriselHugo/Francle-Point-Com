import Main from './pages/Main';
import { ThemeProvider } from './utils/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
