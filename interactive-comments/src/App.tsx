import React from "react";

import styles from "./App.module.scss";
import Comments from "./components/Comments";

function App() {
  return (
    <main className={styles.main}>
      <Comments />
    </main>
  );
}

export default App;
