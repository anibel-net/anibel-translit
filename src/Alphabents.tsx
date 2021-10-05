import React from 'react';
import {View} from 'react-native';
import {JapaneseAlphabets} from './translits/japanese/alphabets';

const LANGUAGE_ALPHABETS = {
  ja: <JapaneseAlphabets />,
};

interface IAlphabents {
  language: string;
}

export const Alphabents = ({language}: IAlphabents) => {
  return <View>{LANGUAGE_ALPHABETS[language]}</View>;
};
