import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeProviderData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeProviderData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setLevel(level + 1)
    }

    const startNewChallenge = () => {
        const randonChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randonChallengeIndex];

        setActiveChallenge(challenge);
    }

    const resetChallenge = () => {
        setActiveChallenge(null);
    }

    return (
        <ChallengeContext.Provider 
            value={{ 
                level, 
                currentExperience, 
                challengesCompleted, 
                activeChallenge,
                experienceToNextLevel,
                levelUp, 
                startNewChallenge,
                resetChallenge
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}

