import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import {font, color} from '../../res';
import {Header} from '../components';

const Notifications = ({navigation, route}) => {
  const [balance, setBalance] = useState(10);
  const routeName = route.name;

  const regularFontFamily = {fontFamily: font.AppRegular};
  return (
    <LinearGradient
      useAngle={true}
      angle={93.08}
      angleCenter={{
        x: 0.5,
        y: 0.5,
      }}
      colors={[color.lighterBlue, color.lightBlue]}
      style={styles.screenStyle}>
      <Header
        route={routeName}
        balance={balance}
        boldFont={{fontFamily: font.AppBold}}
        onChangeHandler={() => {}}
        onPressHandler={() => console.log('Lista')}
      />
      <View style={styles.mainContainer}>
        <Text style={[styles.notificationText, regularFontFamily]}>
          Aquí aparecerán notificaciones con información para ti
        </Text>
      </View>
    </LinearGradient>
  );
};

const {width} = Dimensions.get('screen');
EStyleSheet.build({$rem: width / 375});
const styles = EStyleSheet.create({
  screenStyle: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: color.white,
    margin: '16rem',
    borderRadius: '10rem',
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: '10rem',
    paddingVertical: '12rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    textAlign: 'center',
    fontSize: '14rem',
  },
});

export default Notifications;
