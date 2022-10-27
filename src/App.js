import Wrapper from './components/UI/Wrapper';
import Header from './components/Header';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Wrapper>
        <Header />
      </Wrapper>
    </div>
  );
}

export default App;
