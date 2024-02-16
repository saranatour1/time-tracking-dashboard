import iconWork from '../assets/icon-work.svg';
import iconPlay from '../assets/icon-play.svg';
import iconStudy from '../assets/icon-study.svg';
import iconExercise from '../assets/icon-exercise.svg';
import iconSocial from '../assets/icon-social.svg';
import iconSelfCare from '../assets/icon-self-care.svg';

export interface Activity{
  title:string;
  color:string;
  icon:string;
  timeframes:{
    current:number;
    previous:number;
  }
}

export interface RegActivity{
  title: string;
  color: string;
  icon: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

export const icons: Record<string, string> = {
  "Work": iconWork,
  "Play": iconPlay,
  "Study": iconStudy,
  "Exercise": iconExercise,
  "Social": iconSocial,
  "Self Care": iconSelfCare
};


export interface Timeframe {
  daily: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
}

export interface Activities{}