import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import List from './pages/list';
import Recipe from './pages/recipe';

const Router = StackNavigator({
  List: { screen: List },
  Recipe: {
    screen: Recipe,
    path: 'recipe/:recipe',
  },
});

const prefix = (Platform.OS === 'ios')
  ? 'receitafacil://'
  : 'receitafacil://receitafacil/';

export default () => <Router uriPrefix={prefix} />;
