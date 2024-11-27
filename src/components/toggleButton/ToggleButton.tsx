import {memo, useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TextBlock from '@components/customText';
import useStyles from '@hooks/useStyles';
import {fontSize} from '@constants/fonts';

import toggleButtonStyles from './styles';

function ToggleButton({
  title,
  toggleState,
  showIcon,
  onToggle,
}: ToggleButtonProps) {
  const styles = useStyles(toggleButtonStyles);

  const handleToggle = () => {
    const newToggleState = !toggleState;

    onToggle && onToggle(newToggleState);
  };

  const toggleIcon = useMemo(() => {
    return showIcon ? (
      <MaterialIcons name="cancel" size={fontSize.eighteen} />
    ) : null;
  }, [showIcon]);

  return (
    <TouchableOpacity
      onPress={handleToggle}
      activeOpacity={0.6}
      style={[styles.toggleButton, toggleState ? styles.on : null]}>
      <TextBlock
        style={[styles.text, toggleState ? styles.textOn : null]}
        ellipsizeMode="tail"
        numberOfLines={1}>
        {title || 'Toggle'}
      </TextBlock>

      {toggleIcon}
    </TouchableOpacity>
  );
}

export default memo(ToggleButton);
