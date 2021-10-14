import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components';
import {font, color} from '../../res';
import {
  Button,
  Input,
  Dropdown,
  CredentialModal,
  TrainingCard,
} from '@zubale/app-components';

const REQUIRED_DATA = [
  {
    id: '123asd',
    title: 'Jumbo Picker',
    completed: true,
    url: 'https://www.edume.com',
  },
];
const OPTIONAL_DATA = [
  {
    id: '123dfg',
    title: 'Buenas prácticas en Jumbo',
    completed: false,
    url: 'https://www.edume.com',
  },
  {
    id: '123fgh',
    title: 'Jumbo basics',
    completed: false,
    url: 'https://www.edume.com',
  },
];

const Profile = ({navigation, route}) => {
  const [balance, setBalance] = useState(10);
  const [userGender, setUserGender] = useState('');
  const [openModal, setOpenModal] = useState(true);
  const routeName = route.name;

  const boldFontFamily = {fontFamily: font.AppBold};
  const regularFontFamily = {fontFamily: font.AppRegular};

  const genderOptions = [
    {id: 'Male', value: 'Masculino'},
    {id: 'Female', value: 'Femenino'},
  ];

  return (
    // <LinearGradient
    //   useAngle={true}
    //   angle={93.08}
    //   angleCenter={{
    //     x: 0.5,
    //     y: 0.5,
    //   }}
    //   colors={[color.lighterBlue, color.lightBlue]}
    //   style={styles.screenStyle}>
    //   <Header
    //     route={routeName}
    //     balance={balance}
    //     boldFont={{fontFamily: font.AppBold}}
    //     onChangeHandler={() => {}}
    //     onPressHandler={() => console.log('Lista')}
    //   />
    //   <ScrollView>
    //     <View style={styles.mainContainer}>
    //       <Button
    //         onPress={() => {}}
    //         containerStyle={styles.inviteButton}
    //         text={'Invita a tus amigos'}
    //         textStyle={[styles.inviteText, boldFontFamily]}
    //       />
    //       <Input
    //         value={'Tania'}
    //         questionFont={font.AppBold}
    //         onChangeText={() => {}}
    //         question={'Nombre(s)'}
    //         inputFont={font.AppRegular}
    //         mainContainerStyle={styles.fillWidth}
    //       />
    //       <Input
    //         value={'Tenorio'}
    //         questionFont={font.AppBold}
    //         onChangeText={() => {}}
    //         question={'Apellido Paterno'}
    //         inputFont={font.AppRegular}
    //         mainContainerStyle={styles.fillWidth}
    //       />
    //       <Input
    //         value={'Aparicio'}
    //         questionFont={font.AppBold}
    //         onChangeText={() => {}}
    //         question={'Apellido Materno'}
    //         inputFont={font.AppRegular}
    //         mainContainerStyle={styles.fillWidth}
    //       />
    //       <Dropdown
    //         selectOptions={genderOptions}
    //         onSelect={({payload}) => setUserGender(payload.value)}
    //         question={'Género'}
    //         questionFont={font.AppBold}
    //         inputFont={font.AppRegular}
    //         dropdownValue={userGender}
    //         placeholder={'-Selecciona una opción-'}
    //         mainContainerStyle={styles.fillWidth}
    //       />
    //       <Input
    //         value={''}
    //         questionFont={font.AppBold}
    //         onChangeText={() => {}}
    //         question={'Fecha de nacimiento'}
    //         inputFont={font.AppRegular}
    //         mainContainerStyle={styles.fillWidth}
    //       />
    //       <Input
    //         value={'taniatenorio@hotmail.com'}
    //         questionFont={font.AppBold}
    //         onChangeText={() => {}}
    //         question={'Correo electrónico'}
    //         inputFont={font.AppRegular}
    //         mainContainerStyle={styles.fillWidth}
    //       />
    //       <Button
    //         onPress={() => {}}
    //         containerStyle={styles.logoutButton}
    //         text={'Cerrar sesión'}
    //         textStyle={[styles.logoutText, boldFontFamily]}
    //       />
    //       {openModal && (
    //         <CredentialModal
    //           regularFont={font.AppRegular}
    //           boldFont={font.AppBold}
    //           onPressHandler={() => setOpenModal(false)}
    //         />
    //       )}
    //     </View>
    //   </ScrollView>
    //   <Button
    //     onPress={() => navigation.navigate('Onboarding')}
    //     containerStyle={styles.updateButton}
    //     text={'Actualizar Datos'}
    //     textStyle={[styles.updateText, boldFontFamily]}
    //   />
    // </LinearGradient>
    <View>
      <Header
        route={routeName}
        balance={balance}
        boldFont={{fontFamily: font.AppBold}}
        onChangeHandler={() => {}}
        onPressHandler={() => console.log('Lista')}
      />
      <View style={{marginHorizontal: 16}}>
        <Text style={{marginVertical: 16, fontWeight: 'bold', fontSize: 16}}>
          Jumbo
        </Text>
        <TrainingCard
          type="Obligatorios"
          trainings={REQUIRED_DATA}
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
          onPressHandler={payload => console.log(payload)}
        />
        <TrainingCard
          type="Opcionales"
          trainings={OPTIONAL_DATA}
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
          onPressHandler={payload => console.log(payload)}
        />
      </View>
    </View>
  );
};

const {width} = Dimensions.get('screen');
EStyleSheet.build({$rem: width / 375});
const styles = EStyleSheet.create({
  screenStyle: {
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: '16rem',
    paddingBottom: '16rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inviteButton: {
    backgroundColor: color.seriousBlue,
    borderRadius: '5rem',
    width: '100%',
    height: '36rem',
    marginTop: '16rem',
    marginBottom: '20rem',
  },
  inviteText: {
    color: color.white,
    fontSize: '14rem',
  },
  fillWidth: {
    width: '100%',
  },
  logoutButton: {
    backgroundColor: 'transparent',
  },
  logoutText: {
    color: color.white,
    fontSize: '14rem',
  },
  updateButton: {
    backgroundColor: color.yellowSummer,
    width: '92%',
    height: '36rem',
    borderRadius: '5rem',
    marginVertical: '16rem',
    alignSelf: 'center',
  },
  updateText: {
    color: color.seriousBlue,
    fontSize: '14rem',
    textTransform: 'uppercase',
  },
});

export default Profile;
