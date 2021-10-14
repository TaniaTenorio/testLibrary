import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {font} from '../../res';
import {Header} from '../components';
import {
  ReservationHeader,
  TaskList,
  CustomModal,
  ShopperWarningModal,
  OsAlertModal,
  ModalComponent,
  TaskItem,
  TaskCard,
} from '@zubale/app-components';
import {DATA} from '../../res/Data';
import {Dimensions} from 'react-native';
import {width} from '../components/Header';

const Quests = ({navigation, route}) => {
  const [modal, setModal] = useState(false);
  const [walmartModalVisibility, setWalmartModalVisibility] = useState(false);
  const [osModalVisibility, setOsModalVisibility] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [balance, setBalance] = useState(10);
  const routeName = route.name;

  const task = {
    id: '123Gyz',
    title: 'en salchichoneria',
    product: 'Harley Pompadoury',
    currency: '$',
    reward: '400',
    status: 'WITHOUT_TRAINING',
  };

  const width = Dimensions.get('window').width;

  const handleOnPress = dispatch => {
    console.log(dispatch);
    switch (dispatch.type) {
      case 'START':
        navigation.navigate('Products');
        break;
      case 'GO_TO_TRAINING':
        navigation.navigate('Profile');
    }
  };

  return (
    <View style={styles.fillParent}>
      <Header
        route={routeName}
        balance={balance}
        boldFont={{fontFamily: font.AppBold}}
        onChangeHandler={() => {}}
        onPressHandler={() => console.log('Lista')}
      />

      {/* <ReservationHeader
        normalTextStyle={font.AppRegular}
        valuesTextStyle={font.AppBold}
        currentBookings={5}
        limitOfBookings={5}
        dueTime={'9:00'}
        pmOrAm={'p.m.'}
        completedBookings={2}
        rewardLevel={'BLOCKED'}
        buttonFontStyle={font.AppBold}
        onPressHandler={() => console.log('ir a cumplimiento de tareas')}
      /> */}
      <View style={styles.listParent}>
        {/* <TaskCard
          task={task}
          onPressHandler={() => console.log('Upper Button Tap')}
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
        /> */}
        <TaskList
          tasks={DATA}
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
          //onPressHandler={() => navigation.navigate('Products')}
          onPressHandler={handleOnPress}
        />
      </View>
      {/*{modal && (
        <CustomModal
          reservationsLimit={5}
          lockTime={'7:00 p.m.'}
          unlockTime={'8:01 p.m.'}
          handleUnderstandButton={() => {
            setModalVisibility(false);
          }}
        />
      )}
      {walmartModalVisibility && (
        <ShopperWarningModal
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
          onPressHandler={() => {
            setWalmartModalVisibility(false);
          }}
        />
      )}
      {osModalVisibility && (
        <OsAlertModal
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
          onPressHandler={() => {
            setOsModalVisibility(false);
          }}
        />
      )}
      {modalVisibility && (
        <ModalComponent
          mainContainerStyle={styles.modalMainContainer}
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
          image={null}
          //imageStyle={imageStyle}
          bodyText={
            'Si resevas y no cumples esta tarea serás penalizado con 2 días sin poder usar la app'
          }
          bodyView={
            <View>
              <Text> Esta es mi view </Text>
            </View>
          }
          bodyViewStyle={styles.modalViewStyle}
          //bodyTextStyle={textStyle}
          upperButtonText={'Actualizar al información'}
          //upperButtonTextStyle={buttonText}
          //upperButtonStyle={updateButton}
          bottomButtonText={'Regresar'}
          // bottomButtonTextStyle={buttonText}
          // bottomButtonStyle={backButton}
          upperButtonHandler={() => console.log('Upper Button Tap')}
          bottomButtonhandler={() => console.log('Bottom Button Tap')}
        />
      )}*/}
      {/* <View style={styles.body}>
        <View style={styles.bodyChild}>
          <View style={styles.bodyChild}>
            <TaskItem
              task={task}
              regularFont={font.AppRegular}
              boldFont={font.AppBold}
              onPressHandler={() => console.log('Upper Button Tap')}
              // text={text}
            />
          </View>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  fillParent: {
    flex: 1,
    width: width,
  },
  listParent: {
    flex: 1,
    marginHorizontal: 14,
    marginTop: 16,
  },
  modalMainContainer: {
    borderWidth: 1,
    borderColor: 'red',
  },
  modalViewStyle: {
    backgroundColor: 'blue',
  },
});

export default Quests;
