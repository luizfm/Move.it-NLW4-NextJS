import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const [userInfoToHome, setUserInfoToHome] = useState(null);

  const { push } = useRouter();

  const handleSubmit = data => {
    data.preventDefault();
    if(userInfoToHome) {
      push(`/${userInfoToHome}`);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Move.it</title>
      </Head>

      <div className={styles.loginContainer}>
        <img src="/logo-full.svg"/>

        <strong>Bem-vindo</strong>

        <div>
          <img src="/icons/github.svg" />

          <p>Faça seu login com o Github</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <input 
              placeholder="Usuário do github"
              onChange={(e) => setUserInfoToHome(e.target.value)}
            />

            <button type="submit">
              <img src="/icons/right-arrow.svg" alt="Login button" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}