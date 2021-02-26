import { createContext, ReactNode, useEffect, useState } from 'react';
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
    completeChallenge: () => void;
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

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function levelUp() {
        setLevel(level + 1)
    }

    const startNewChallenge = () => {
        const randonChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randonChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === "granted") {
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    const resetChallenge = () => {
        setActiveChallenge(null);
    }

    const completeChallenge = () => {
        if(!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
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
                resetChallenge,
                completeChallenge
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}

