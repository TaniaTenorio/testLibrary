/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {font} from '../../res';

import {
  BrandHeader,
  Input,
  ProductList,
  PickingList,
  Button,
  PickingHeader,
} from '@zubale/app-components';

const products = [
  //
  {
    id: 2,
    name: 'Pan Blanco Familiar Grande 500 Gr',
    sku: '12345678901235',
    image: null,
    status: 'incomplete',
  },
  {
    id: 3,
    name: 'Pan Blanco sin Orillas Mediano 250 Gr',
    sku: '12345678901236',
    image: {
      small:
        'https://user-images.githubusercontent.com/51387597/80034712-77604900-84b4-11ea-8fb0-b35c7ca210b2.png',
    },
    status: 'incomplete',
  },
  {
    id: 4,
    name: 'Pan Artesanal Mediano 250 gr',
    sku: '12345678901237',
    image: {
      small:
        'https://user-images.githubusercontent.com/51387597/80035010-e342b180-84b4-11ea-8f19-82150e3a9d58.png',
    },
    status: 'completed',
  },
];

const pickingProducts = [
  {
    title: 'Panadería',
    data: [
      {
        id: 1,
        name: 'Pan Integral Multigrano Bimbo Familiar Grande 500 Gramos',
        sku: '12345678901234',
        image: {
          small:
            'https://images.squarespace-cdn.com/content/v1/5bd0d4fbca525b6d0fcbca2f/1543944918480-SE2DA28D64H5TAE35J2P/ke17ZwdGBToddI8pDm48kELoLHa0YZhLpP5VOGlV9LRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzZGFjhu5zEnotZ9uqSZdkbNZt2J4xMlCbfKQhC_cTt7gmjm7LZUS8Ztrwuwfb0m6s/Allende+Golden+Ale.png?format=750w',
        },
        productState: 'IN_LIST',
        quantity: 0.5, // quantity from chedraui
        alternative_quantity: 3,
        currency: '$',
        attributes: {
          department: 'Orgánicos', // aisle chedraui
          suggested_price: null, // price
          units_per_box: '16', // not from chedraui
          comments: 'rebanadas delgadas', // new field from chedraui
          units: 'Kg', // new field from chedraui
          weightable: true, // pesable from chedraui
        },
      },
      {
        id: 2,
        name: 'Pan de caja multigrano bajo en grasa 500gr',
        sku: '12345678901234',
        //image: {
        //   small:
        //     'https://images.squarespace-cdn.com/content/v1/5bd0d4fbca525b6d0fcbca2f/1543944918480-SE2DA28D64H5TAE35J2P/ke17ZwdGBToddI8pDm48kELoLHa0YZhLpP5VOGlV9LRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzZGFjhu5zEnotZ9uqSZdkbNZt2J4xMlCbfKQhC_cTt7gmjm7LZUS8Ztrwuwfb0m6s/Allende+Golden+Ale.png?format=750w',
        //},
        productState: 'IN_LIST',
        parentId: '34569',
        quantity: 0.25, // quantity from chedraui
        currency: '$',
        attributes: {
          department: 'Orgánicos', // aisle chedraui
          suggested_price: '957.89', // price
          units_per_box: '16', // not from chedraui
          comments: 'rebanadas delgadas', // new field from chedraui
          units: 'Kgm', // new field from chedraui
          weightable: true, // pesable from chedraui
        },
      },
    ],
  },
  {
    title: 'Vinos y licores',
    data: [
      {
        id: 3,
        name: 'Pan Integral Familiar Grande 500 Gr',
        sku: '12345678901234',
        image: {
          small:
            'https://images.squarespace-cdn.com/content/v1/5bd0d4fbca525b6d0fcbca2f/1543944918480-SE2DA28D64H5TAE35J2P/ke17ZwdGBToddI8pDm48kELoLHa0YZhLpP5VOGlV9LRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzZGFjhu5zEnotZ9uqSZdkbNZt2J4xMlCbfKQhC_cTt7gmjm7LZUS8Ztrwuwfb0m6s/Allende+Golden+Ale.png?format=750w',
        },
        productState: 'NOT_AVAILABLE',
        showText: true,
        quantity: 2, // quantity from chedraui
        //currency: '$',
        attributes: {
          department: 'Orgánicos', // aisle chedraui
          suggested_price: '157', // price
          units_per_box: '16', // not from chedraui
          comments: 'rebanadas delgadas', // new field from chedraui
          units: 'Bolsa', // new field from chedraui
          weightable: false, // pesable from chedraui
        },
      },
      {
        id: 4,
        name: 'Pan Integral Familiar Grande 500 Gr',
        sku: '12345678901234',
        image: {
          small:
            'https://images.squarespace-cdn.com/content/v1/5bd0d4fbca525b6d0fcbca2f/1543944918480-SE2DA28D64H5TAE35J2P/ke17ZwdGBToddI8pDm48kELoLHa0YZhLpP5VOGlV9LRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzZGFjhu5zEnotZ9uqSZdkbNZt2J4xMlCbfKQhC_cTt7gmjm7LZUS8Ztrwuwfb0m6s/Allende+Golden+Ale.png?format=750w',
        },
        productState: 'NOT_AVAILABLE',
        showText: false,
        quantity: 2, // quantity from chedraui
        attributes: {
          department: 'Orgánicos', // aisle chedraui
          suggested_price: '57', // price
          units_per_box: '16', // not from chedraui
          comments: 'rebanadas delgadas', // new field from chedraui
          units: 'Unidades', // new field from chedraui
          weightable: false, // pesable from chedraui
        },
      },
    ],
  },
  {
    title: 'Frutas y verduras',
    data: [
      {
        id: 5,
        name: 'Alimento para gatos Whiskas Souffle Salmon y pescado 85g',
        sku: '12345678901234',
        image: {
          small:
            'https://images.squarespace-cdn.com/content/v1/5bd0d4fbca525b6d0fcbca2f/1543944918480-SE2DA28D64H5TAE35J2P/ke17ZwdGBToddI8pDm48kELoLHa0YZhLpP5VOGlV9LRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzZGFjhu5zEnotZ9uqSZdkbNZt2J4xMlCbfKQhC_cTt7gmjm7LZUS8Ztrwuwfb0m6s/Allende+Golden+Ale.png?format=750w',
        },
        productState: 'IN_CART',
        //inCartQuantity: 4,
        quantity: 0.25, // quantity from chedraui
        attributes: {
          department: 'Orgánicos', // aisle chedraui
          suggested_price: '$57', // price
          units_per_box: '16', // not from chedraui
          comments: 'rebanadas delgadas', // new field from chedraui
          units: 'Kg', // new field from chedraui
          weightable: true, // pesable from chedraui
        },
      },
    ],
  },
];

const headerProduct = {
  id: 1,
  name: 'Pan Integral Multigrani Bimbo Familiar Grande 500 Gramos',
  sku: '12345678901234',
  currency: '¢',
  image: {
    small:
      'https://images.squarespace-cdn.com/content/v1/5bd0d4fbca525b6d0fcbca2f/1543944918480-SE2DA28D64H5TAE35J2P/ke17ZwdGBToddI8pDm48kELoLHa0YZhLpP5VOGlV9LRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzZGFjhu5zEnotZ9uqSZdkbNZt2J4xMlCbfKQhC_cTt7gmjm7LZUS8Ztrwuwfb0m6s/Allende+Golden+Ale.png?format=750w',
  },
  productState: 'IN_LIST',
  quantity: 98, // quantity from chedraui,
  alternative_quantity: 5, //unidades para el zubalero (productos pesables)
  //inCartQuantity: 5,
  attributes: {
    department: 'Orgánicos', // aisle chedraui
    suggested_price: '57', // price
    units_per_box: '1.25', // not from chedraui
    comments: 'rebanadas delgadas', // new field from chedraui
    units: 'unidad', // new field from chedraui
    weightable: false, // pesable from chedraui
  },
};

const productStatus = [{id: 1, status: 'CLOSED'}];

const ProductLoop = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = newInputValue => {
    setInputValue(newInputValue);
  };
  const filterProducts = products.filter(product => {
    return product.name.toLowerCase().includes(inputValue.toLowerCase());
  });
  // const filterPickingProducts = pickingProducts.filter(product => {
  //   return product.name.toLowerCase().includes(inputValue.toLowerCase());
  // });

  return (
    <View style={styles.mainView}>
      <PickingHeader
        product={headerProduct}
        regularFont={font.AppRegular}
        boldFont={font.AppBold}
        //onDeleteHandler={() => console.log('delete')}
        onPressHandler={value => console.log(value)}
      />
      {/* <Text style={styles.header}>Reemplazos disponibles</Text> */}
      {/* <BrandHeader
        image={
          'https://user-images.githubusercontent.com/51387597/85954409-cefbb480-b93c-11ea-9899-c45d2b809ce4.jpeg'
        }
        supplierNumber={'36053'}
        numberOfProducts={'4'}
      /> */}

      {/* <Input
        placeholder={'Buscar por nombre o código'}
        isDark
        mainContainerStyle={styles.searchInput}
        placeHolderTextColor={styles.placeholder}
        onChangeText={onChange}
        value={inputValue}
      /> */}
      {/* <ProductList
        products={filterProducts}
        onProductPressHandler={() =>
          navigation.navigate('Form', {
            productName: 'Pan Integral Familiar Grande 500gr',
          })
        }
        onEditHandler={value => console.log(value)}
        extraData={productStatus}
        regularFont={font.AppRegular}
        boldFont={font.AppBold}
        buttonText="Siguiente"
      /> */}
      <PickingList
        products={pickingProducts}
        onProductPressHandler={() =>
          navigation.navigate('Form', {
            productName: 'Pan Integral Familiar Grande 500gr',
          })
        }
        onSustitutePressHandler={value => console.log(value)}
        onImagePressHandler={value => console.log(value)}
        extraData={productStatus}
        regularFont={font.AppRegular}
        boldFont={font.AppBold}
        buttonText="Llamar al cliente"
      />
      {/* <View style={styles.footerButtons}>
        <Button
          text="Escanear producto"
          containerStyle={styles.whiteButton}
          textStyle={styles.blueText}
        />
        <Button text="Llamar al cliente" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 30,
    paddingBottom: 30,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginHorizontal: 0,
    paddingHorizontal: 24,
  },
  placeholder: {
    color: '#252525',
    opacity: 0.2,
  },
  header: {
    fontSize: 18,
    fontFamily: font.AppBold,
    marginLeft: 25,
    marginTop: 18,
  },
  footerButtons: {
    flexDirection: 'row',
    //justifyContent: 'space-evenly',
  },
  whiteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '48%',
    height: 46,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#042F93',
  },
  blueText: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 14,
    color: '#042F93',
    fontWeight: '600',
    textAlign: 'center',
  },
});
export default ProductLoop;
