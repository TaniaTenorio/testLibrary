import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import {image, color} from '../../res';
import {Button} from '@zubale/app-components';

const Header = ({
  boldFont,
  balance,
  onChangeHandler,
  onPressHandler,
  route,
}) => {
  let screenName;
  switch (route) {
    case 'Map':
      screenName = 'zubale';
      break;
    case 'Quests':
      screenName = 'Reservadas';
      break;
    case 'Balance':
      screenName = 'Saldo';
      break;
    case 'Notifications':
      screenName = 'Notificaciones';
      break;
    case 'Profile':
      screenName = 'Perfil';
      break;
  }

  return (
    <View style={[styles.gradient, styles.shadowStyle]}>
      <LinearGradient
        useAngle={true}
        angle={93.08}
        angleCenter={{
          x: 0.5,
          y: 0.5,
        }}
        colors={[color.lighterBlue, color.lightBlue]}>
        <View style={styles.headerStyle}>
          <Text style={[styles.screenName, boldFont]}>{screenName}</Text>
          <View style={styles.rightHeader}>
            {route === 'Map' && (
              <Button
                onPress={onPressHandler}
                containerStyle={styles.headerButton}
                text="Lista"
                textStyle={[styles.textButton, boldFont]}
                image={image.icon.List}
                imageStyle={styles.imageButton}
              />
            )}
            <TextInput
              onChangeText={onChangeHandler}
              value={`$${balance}`}
              style={[styles.textInput, boldFont]}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export const {width} = Dimensions.get('screen');
EStyleSheet.build({$rem: width / 375});

const styles = EStyleSheet.create({
  mainContainer: {
    shadowColor: 'black',
  },
  shadowStyle: {
    shadowOffset: {
      width: '1rem',
      height: '7rem',
    },
    shadowOpacity: 0.2,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: color.mainBlue,
    height: '75rem',
    paddingHorizontal: '20rem',
    paddingBottom: '14rem',
  },
  screenName: {
    fontSize: '24rem',
    color: 'white',
    textAlign: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    height: '24rem',
    width: '87rem',
    backgroundColor: 'white',
    borderRadius: '100rem',
    textAlign: 'center',
    fontSize: '14rem',
    marginBottom: '6rem',
  },
  headerButton: {
    backgroundColor: 'transparent',
    width: '64rem',
    height: '24rem',
    marginRight: '10rem',
  },
  textButton: {
    color: 'white',
    fontSize: '14rem',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  imageButton: {
    width: '21rem',
    height: '16rem',
    resizeMode: 'contain',
    marginRight: '8rem',
  },
});

export default Header;
