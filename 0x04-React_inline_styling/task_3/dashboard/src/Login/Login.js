import React from 'react';
import { css, StyleSheet } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" className={css(styles.input)} id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" className={css(styles.input)} id="password" name="password" />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },

  input: {
    margin: "10px",
  },
});

export default Login;
