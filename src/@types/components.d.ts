import { ReactElement } from 'react';
import { StyleProp, TextStyle } from 'react-native/types';

declare global {
  interface TextBlockProps {
    style?: StyleProp<TextStyle>;
    children: string;
  }

  interface Icon {
    name: string;
    color?: string;
    size?: string;
  }

  interface BottomTabProps {
    isFocused: boolean;
    title: string;
    onPress: () => void;
  }
}
