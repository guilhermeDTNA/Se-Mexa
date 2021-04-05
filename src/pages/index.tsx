import ExperienceBar from '../components/ExperienceBar';
import {Profile} from '../components/Profile';
import {CompletedChallenges} from '../components/CompletedChallenges';
import {Countdown} from '../components/Countdown';
import {ChallengeBox} from '../components/ChallengeBox';

import Head from 'next/head';
import {GetServerSideProps} from 'next'

import styles from '../styles/pages/Home.module.css';
import {CountdownProvider} from '../contexts/CountdownContext';
import {ChallengesProvider} from '../contexts/ChallengesContext';


interface HomeProps{
    level: number,
    currentExperience: number,
    challengesCompleted: number
}

export default function Home(props: HomeProps) {

    /* Insere na head do index.html*/
    return (

        <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.level}
        >

        <div className="styles.container"> 

        <Head>
        <title>Início | Se Mexa</title>
        </Head>


        <ExperienceBar />

        <CountdownProvider>
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
        </CountdownProvider>
        </div>

        </ChallengesProvider>
        )
}

/*Essa função existe para que indexadores (como o da Google) indexem as props da aplicação mesmo
que ela não tenha carregado completamente, já que essas ferramentas não esperam o carregamento da página
*/
export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const user = {
        level: 1,
        currentExperience: 50,
        challengesCompleted: 2
    }

    const {level, currentExperience, challengesCompleted} = ctx.req.cookies; 

    return{
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
} 