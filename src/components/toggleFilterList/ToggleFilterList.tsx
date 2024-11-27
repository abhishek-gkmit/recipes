import {useCallback, useMemo, memo} from 'react';
import {View, ScrollView} from 'react-native';
import uuid from 'react-native-uuid';

import ToggleButton from '@components/toggleButton';
import TextBlock from '@components/customText';
import useStyles from '@hooks/useStyles';

import toggleFilterListStyles from './styles';

function renderFilters(
  handleFilterToggle: any,
  showIcon: boolean,
  filters?: string[],
  activeFilters?: string[],
) {
  return filters?.map(filter => (
    <ToggleButton
      key={uuid.v1().toString()}
      title={filter}
      toggleState={Boolean(
        activeFilters?.find(oldFilter => oldFilter === filter),
      )}
      onToggle={toggleState => handleFilterToggle(filter, toggleState)}
      showIcon={showIcon}
    />
  ));
}

function ToggleFilterList({
  title,
  filters,
  activeFilters,
  selectMultipleFilters,
  onFiltersChange,
}: ToggleFilterListProps) {
  const styles = useStyles(toggleFilterListStyles);

  const handleFilterToggle = useCallback(
    (filter: string, toggleState: boolean) => {
      let newActiveFilters: string[] = [];

      const isFilterPresent = Boolean(
        activeFilters.find(oldFilter => oldFilter === filter),
      );

      if (toggleState && !isFilterPresent) {
        newActiveFilters = selectMultipleFilters
          ? [...activeFilters, filter]
          : [filter];
      } else {
        newActiveFilters = activeFilters.filter(
          oldFilter => oldFilter !== filter,
        );
      }

      onFiltersChange && onFiltersChange(newActiveFilters);
    },
    [onFiltersChange, activeFilters],
  );

  const filtersToRender = useMemo(() => {
    return renderFilters(
      handleFilterToggle,
      Boolean(selectMultipleFilters),
      filters,
      activeFilters,
    );
  }, [filters, handleFilterToggle]);

  return (
    <View style={styles.scrollViewContainer}>
      <TextBlock style={styles.title}>{title || 'Select item'}</TextBlock>

      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}>
        {filtersToRender}
      </ScrollView>
    </View>
  );
}

export default memo(ToggleFilterList);
