import React from 'react';

import styles from './App.module.scss';
import Advice from './components/Advice/Advice';
import { Container } from './components/UI';

function App() {
  return (
    <Container className={styles.container}>
      <Advice />
    </Container>
  );
}

export default App;
