// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import searchAPI from './searchAPI';

export function App() {
  return (
    <div>
      <NxWelcome title="app" /><searchAPI />
      </div>
  );
}

export default App;
