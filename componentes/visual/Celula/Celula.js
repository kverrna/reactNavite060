import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from "prop-types";

import Style from './Celula.style';

const Celula = textLabel => {
  const x = textLabel;
  return (
    <View style={Style.backgroundMainColor}>
      <Text style={Style.textBody}>{textLabel}</Text>
    </View>
  );
};

Celula.prototype = {
  textLabel: PropTypes.string.isRequired,
};

export default Celula;
