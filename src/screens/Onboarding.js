import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {font} from '../../res';
import {UserTypeButton, VehicleSelector} from '@zubale/app-components';

const Onboarding = ({navigation, route}) => {
  const [vehicle, setVehicle] = useState('');
  const [userType, setUserType] = useState('Shopper');

  return (
    <View style={styles.view}>
      <Text style={styles.title}>¿Qué tipo de tarea quieres realizar?</Text>
      <UserTypeButton
        selected={true}
        userType={userType}
        userDescription="Prepararás pedidos en la tienda y se los llevarás al cliente"
        regularFont={font.AppRegular}
        boldFont={font.AppBold}
        onPressHandler={value => console.log(value)}
      />
      <VehicleSelector
        question="Tipo de vehículo"
        questionFont={font.AppBold}
        vehicle={vehicle}
        isDark
        onPressHandler={value => setVehicle(value.payload)}
        error="Selecciona un vehículo"
      />
    </View>
  );
};

const {width} = Dimensions.get('screen');
EStyleSheet.build({$rem: width / 375});

const styles = EStyleSheet.create({
  view: {
    paddingHorizontal: '16rem',
    paddingVertical: '16rem',
  },
  title: {
    fontFamily: font.AppBold,
    fontSize: '16rem',
    marginBottom: '24rem',
  },
});

export default Onboarding;
