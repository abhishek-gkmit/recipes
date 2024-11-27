import {ReactElement} from 'react';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import {
  StyleProp,
  TextInputProps,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native/types';

declare global {
  interface TextBlockProps extends TextProps {
    style?: StyleProp<TextStyle>;
    children: string;
  }

  interface Icon {
    name: string;
    color?: string;
    size?: number;
  }

  interface BottomTabProps {
    isFocused: boolean;
    title: string;
    onPress: () => void;
  }

  interface InputProps extends TextInputProps {
    value?: string;
    setValue?: (value: string) => void;
    icon?: Icon;
  }

  interface ButtonWithIconProps extends TouchableOpacityProps {
    text: string;
    icon?: Icon;
    iconPosition?: 'start' | 'end';
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
  }

  interface IconButtonProps extends TouchableOpacityProps {
    icon: Icon;
    btnStyle?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<ViewStyle>;
  }

  type RecipeCardProps = RandomRecipe;

  interface RecipeCardListProps extends FlatListProps {
    data: RandomRecipe[];
    title?: string;
    loading?: boolean;
    listContainerStyles?: StyleProp<ViewStyle>;
    titleStyles?: StyleProp<TextStyle>;
    listStyles?: StyleProp<ViewStyle>;
    listContentContainerStyles?: StyleProp<ViewStyle>;
  }

  interface ToggleButtonProps {
    title?: string;
    toggleState?: boolean;
    showIcon?: boolean;
    onToggle?: (toggleState: boolean) => void;
  }

  interface ToggleFilterListProps {
    filters: string[];
    activeFilters: string[];
    title?: string;
    selectMultipleFilters?: boolean;
    onFiltersChange?: (filters: string[]) => void;
  }
}
