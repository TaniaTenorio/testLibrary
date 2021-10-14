import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {color} from '../../res';

const Icon = ({icon, isFocused}) => {
  const iconColor = isFocused ? styles.whiteIcon : styles.grayIcon;
  return (
    <View>
      <Image source={icon} style={[styles.iconStyle, iconColor]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
  },
  whiteIcon: {
    tintColor: color.white,
  },
  grayIcon: {
    tintColor: color.mediumGray,
  },
});

export default Icon;
