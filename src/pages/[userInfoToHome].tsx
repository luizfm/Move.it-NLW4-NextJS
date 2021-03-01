import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeProvider } from '../contexts/ChallengesContext';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from '../contexts/CountdownContext';
import { getGithubUserInfo } from '../services/api';

interface UserProps {
  name: string;
  avatar_url: string;
}

interface userInfoToHomeProps {
  user: UserProps;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

import styles from '../styles/pages/userInfoToHome.module.css';

export default function userInfoToHome({ user, level, currentExperience, challengesCompleted }: userInfoToHomeProps) {

  return (
    <ChallengeProvider level={level} currentExperience={currentExperience} challengesCompleted={challengesCompleted} >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile userInfo={user}/>
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  )
}

  export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    const { userInfoToHome } = ctx.params
    const user = await getGithubUserInfo(userInfoToHome);
  
    return {
      props: {
        user,
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted)
      }
    }
  }