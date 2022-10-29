import Wrapper from './components/UI/Wrapper';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import 'animate.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import styles from './App.module.css';
import ModalContainer from './components/UI/ModalContainer';

function App() {
  const [switchBtn, setSwitch] = useState(false);

  const switchHandler = () => {
    setSwitch(prevSwitch => !prevSwitch);
  };

  return (
    <div className={styles.app}>
      <Wrapper>
        <BrowserRouter>
          <Header onSwitch={switchHandler} switchBtn={switchBtn} />
          <ModalContainer>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
          </ModalContainer>
        </BrowserRouter>
      </Wrapper>
    </div>
  );
}

export default App;
