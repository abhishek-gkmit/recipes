import { ReactElement } from 'react';
import { StyleProp, TextStyle } from 'react-native/types';

declare global {
  interface TextBlockProps {
    style?: StyleProp<TextStyle>;
    children: string;
  }
}
