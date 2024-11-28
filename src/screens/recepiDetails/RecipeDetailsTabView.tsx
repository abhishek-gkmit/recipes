import {
  FlatList,
  ScrollView,
  View
} from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';

import TextBlock from '@components/customText';
import FadeInSlideUp from '@components/fadeInSlideUp';
import IngredientCard from '@components/ingredientCard';
import useThemeContext from '@hooks/useThemeContext';
import { removeHtmlTags } from '@utility/helpers';
import useStyles from '@hooks/useStyles';

import { useRecipeDetails } from './RecipeDetailsContext';
import recepiDetailsStyles from './styles';

function RecipeDescription() {
  const { summary } = useRecipeDetails();

  const styles = useStyles(recepiDetailsStyles);

  return (
    <TextBlock style={styles.recipeDescription}>{removeHtmlTags(summary)}</TextBlock>
  );
}

function IngredientList() {
  const { ingredients, servings } = useRecipeDetails();

  const styles = useStyles(recepiDetailsStyles);

  return (
    <FadeInSlideUp delay={400}>
      <FlatList
        data={ingredients}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <IngredientCard {...item} servings={servings} />
        )}
        contentContainerStyle={styles.ingredientListContent}
        style={styles.ingredientList}
        showsVerticalScrollIndicator={false}
      />
    </FadeInSlideUp>
  );
}

function RecipeInstruction({ stepNumber, description }: InstructionStep) {
  const styles = useStyles(recepiDetailsStyles);

  return (
    <View style={styles.recipeInstruction}>
      <TextBlock style={styles.recipeInstructionStep}>{'Step ' + stepNumber}</TextBlock>
      <TextBlock style={styles.recipeInstructionDesc}>{description}</TextBlock>
    </View>
  );
}

function RecipeInstructionsList() {
  const { steps: instructions, servings } = useRecipeDetails();

  const styles = useStyles(recepiDetailsStyles);

  const serves = servings + (servings > 1 ? ' serves' : ' serve');
  const steps = instructions.length || '' + ' Steps'

  return (
    <ScrollView contentContainerStyle={styles.recipeInstructionList}>
      <View style={styles.recipeInstructionListHeading}>
        <TextBlock>{serves}</TextBlock>
        <TextBlock>{steps}</TextBlock>
      </View>

      {instructions?.map(instruction => (
        <RecipeInstruction {...instruction} />
      ))}
    </ScrollView>
  );
}

const tabViewNavigationState = {
  index: 0,
  routes: [
    { key: 'ingredients', title: 'Ingredients' },
    { key: 'instructions', title: 'Instructions' },
    { key: 'description', title: 'Description' },
  ],
};

function renderScene(props: any) {
  const { route } = props;

  switch (route.key) {
    case 'description':
      return <RecipeDescription />
    case 'ingredients':
      return (
        <IngredientList />
      );
    case 'instructions':
      return <RecipeInstructionsList />;
    default:
      return null;
  }
}

function RecipeDetailsTabView() {
  const { colors } = useThemeContext();

  return (
    <TabView
      navigationState={tabViewNavigationState}
      onIndexChange={index => (tabViewNavigationState.index = index)}
      renderScene={renderScene}
      renderTabBar={props => (
        <TabBar
          style={{ backgroundColor: colors.white }}
          activeColor={colors.primary}
          inactiveColor={colors.foreground}
          pressColor={colors.primary}
          indicatorStyle={{ backgroundColor: colors.primary }}
          {...props}
        />
      )}
      commonOptions={{
        label({ color, labelText }) {
          return <TextBlock style={{ color }}>{labelText}</TextBlock>;
        },
      }}
    />
  );
}

export default RecipeDetailsTabView;
