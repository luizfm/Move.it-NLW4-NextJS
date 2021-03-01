import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

interface UserInfoProps {
    name: string;
    avatar_url: string;
}

interface ProfileProps {
    userInfo: UserInfoProps
}

export function Profile({ userInfo }: ProfileProps) {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src={userInfo.avatar_url} alt="Luiz Fernando" />
            <div>
                <strong>{userInfo.name}</strong>

                <p>
                    <img src="icons/level.svg" alt="Level Icon" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}