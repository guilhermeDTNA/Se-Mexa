import ExperienceBar from '../components/ExperienceBar';
import {Profile} from '../components/Profile';
import {CompletedChallenges} from '../components/CompletedChallenges';
import {Countdown} from '../components/Countdown';
import {ChallengeBox} from '../components/ChallengeBox';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';


export default function Home() {

  /* Insere na head do index.html*/
  return (
    <div className="styles.container"> 

    <Head>
    <title>Início | Se Mexa</title>
    </Head>

    
    <ExperienceBar />

    <section>
    <div>
    <Profile />
    <CompletedChallenges />
    <Countdown />

    </div>

    <div>
    <ChallengeBox />
    </div>
    </section>

    </div>
    )
}
