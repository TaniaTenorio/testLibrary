import React, {useState, useContext} from 'react';
import {View, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import {font, color, image} from '../../res';
import {Header} from '../components';
import {Button} from '@zubale/app-components';

const MyBalance = ({navigation, route}) => {
  const [balance, setBalance] = useState(10);
  const routeName = route.name;

  const boldFontFamily = {fontFamily: font.AppBold};
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
        <View style={styles.notificationContainer}>
          <View style={styles.balanceContainer}>
            <Text style={[styles.dolarSign, boldFontFamily]}>
              $<Text style={styles.balance}>{balance}</Text>
            </Text>
            <Text style={[styles.balanceText, regularFontFamily]}>
              Saldo actual
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.topInfoContainer}>
              <Text style={[styles.infoText, boldFontFamily]}>
                ¡COMINEZA A GANAR! Haz tu primer tarea y desbloquea muchas más
              </Text>
              <Text
                style={[
                  styles.infoBalance,
                  boldFontFamily,
                ]}>{`+$${balance}`}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Noviembre 02, 2019</Text>
            </View>
          </View>
        </View>
        <Button
          onPress={() => {}}
          text={'Canjear'}
          textStyle={[styles.textButton, boldFontFamily]}
          containerStyle={styles.buttonStyle}
          image={image.icon.Redeem}
          imageStyle={styles.imageButton}
        />
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
    flex: 1,
    justifyContent: 'space-between',
    padding: '16rem',
  },
  notificationContainer: {
    borderRadius: '5rem',
  },
  balanceContainer: {
    backgroundColor: color.seriousBlue,
    borderTopLeftRadius: '5rem',
    borderTopRightRadius: '5rem',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '24rem',
  },
  dolarSign: {
    color: color.yellowSummer,
    fontSize: '14rem',
  },
  balance: {
    fontSize: '40rem',
  },
  balanceText: {
    color: color.white,
    fontSize: '12rem',
  },
  infoContainer: {
    backgroundColor: color.white,
    borderBottomLeftRadius: '5rem',
    borderBottomRightRadius: '5rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '12rem',
    paddingHorizontal: '6rem',
  },
  topInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    width: '90%',
    fontSize: '12rem',
  },
  infoBalance: {
    fontSize: '12rem',
  },
  textButton: {
    color: color.seriousBlue,
    fontSize: '14rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginLeft: '12rem',
  },
  dateContainer: {
    alignSelf: 'flex-start',
    marginBottom: '20rem',
  },
  dateText: {
    fontSize: '10rem',
    marginLeft: '3rem',
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: color.yellowSummer,
    height: '36rem',
    width: '80%',
    borderRadius: '5rem',
  },
  imageStyle: {
    height: '10rem',
    resizeMode: 'contain',
  },
});

export default MyBalance;
