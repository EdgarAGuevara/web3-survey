import { useMemo } from 'react';

import surveysSource from '../../../survey-sample.json';

export interface Survey {
  id: number;
  title: string;
  image: string;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  image: string;
  lifetimeSeconds: number;
  options: Option[];
}

export interface Option {
  id: number;
  text: string;
}

const useSurveys: any = () => {
  const surveysData: Survey = useMemo(() => surveysSource, [surveysSource]);

  return surveysData;
};

export default useSurveys;
