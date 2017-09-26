/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text } from 'react-native';

export default class Recipe extends Component {
  static navigationOptions = {
    title: 'Detalhe da receita'
  };

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>Você acessou a receita: {params.recipe}</Text>
      </View>
    );
  }
}
