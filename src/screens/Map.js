import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  FlatList,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';
import {Context} from '../context/AppContext';
import {Header} from '../components';
import {font} from '../../res';
import {
  DeliveryPoints,
  NavigationOptions,
  TaskFilters,
  ShopperMenu,
} from '@zubale/app-components';

const taskTypes = [
  {
    id: 1,
    name: 'Merchandising',
    switch: false,
  },
  {
    id: 4,
    name: 'Picking',
    switch: false,
  },
  {
    id: 8,
    name: 'Walmart Shopper',
    switch: false,
  },
  {
    id: 6,
    name: 'Tienda de conveniencia',
    switch: false,
  },
  {
    id: 3,
    name: 'Mystery shopper',
    switch: false,
  },
  {
    id: 5,
    name: 'Inventario',
    switch: false,
  },
  {
    id: 9,
    name: 'Sales',
    switch: false,
  },
  {
    id: 10,
    name: 'Bait referral',
    switch: false,
  },
  {
    id: 7,
    name: 'Shopper',
    switch: false,
  },
  {
    id: 11,
    name: 'Chedraui shopper',
    switch: false,
  },
];

const Map = ({navigation, route}) => {
  const [balance, setBalance] = useState(10);
  const routeName = route.name;
  const {state, addBlogPost} = useContext(Context);
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Header
        route={routeName}
        balance={balance}
        boldFont={{fontFamily: font.AppBold}}
        onChangeHandler={() => {}}
        onPressHandler={() => console.log('Lista')}
      /> */}
      {/* <Button title="New post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      /> */}
      {/* <DeliveryPoints
        regularFont={font.AppRegular}
        boldFont={font.AppBold}
        pickingPoint="Éxito Wow Colina"
        deliveryPoint="Eugenio Sue 316, Polanco"
        maxDeliveryTime="4:00 p.m."
      /> */}
      {/* <NavigationOptions
        containerStyle={{marginBottom: 120}}
        onPressHandler={value => console.log(value)}
      /> */}
      {/* <TaskFilters
        regularFont={font.AppRegular}
        boldFont={font.AppBold}
        containerStyle={{flex: 1}}
        data={taskTypes}
        onPressHandler={value => console.log(value)}
        buttonStyle={{marginTop: 40}}
        //buttonText="dale con todo"
      /> */}
      <View style={styles.menuContainer}>
        <ShopperMenu
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
          clientName="Tania"
          clientAddress="Juárez Oriente 136 Circuito Poetas, 53100 Naucalpan de Juárez, Estado de México, México"
          orderId="asgytf345678765"
          paymentMethod="Tarjeta de crédito"
          withNavigation
          withScan
          withOrderSummary
          helCenterTitle="Intercom"
          onPressHandler={value => console.log(value)}
          containerStyle={styles.menuStyle}
          addressComments="Entre Circuito Economistas y Calle Mario Fernandez de Lizardi, el portón es de rejas blancas con puerta naranja a lado de una casa con letrero de Se Vende..."
          appVersion="v3.12.0"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexGrow: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  menuStyle: {
    height: '100%',
    width: 300,
    alignSelf: 'flex-end',
    backgroundColor: 'white',
  },
});

export default Map;
