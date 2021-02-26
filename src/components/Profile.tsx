import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/proctux.png" alt="Luiz Fernando" />
            <div>
                <strong>Luiz Fernando de Morais</strong>

                <p>
                    <img src="icons/level.svg" alt="Level Icon" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}