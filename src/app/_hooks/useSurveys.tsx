import { useMemo } from 'react';

import surveysSource from '../../../survey-sample.json';

export interface Survey {
  title: string;
  image: string;
  questions: Question[];
}

export interface Question {
  text: string;
  image: string;
  lifetimeSeconds: number;
  options: Option[];
}

export interface Option {
  text: string;
}

const useSurveys: any = () => {
  const surveysData: Survey = useMemo(() => surveysSource, [surveysSource]);

  return surveysData;
};

export default useSurveys;
