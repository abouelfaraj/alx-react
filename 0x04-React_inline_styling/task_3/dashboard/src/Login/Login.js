import React from 'react';
import { css, StyleSheet } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" className={css(styles.inputs)} id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" className={css(styles.inputs)} id="password" name="password" />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  appBody: {
    padding: '36px 24px',
		'@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  inputs: {
		margin: '0 16px 0 8px'
  }
});

export default Login;
