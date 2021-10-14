import React, {useState, useLayoutEffect} from 'react';
import {View, ScrollView, Platform, Dimensions, Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {font} from '../../res';
import moment from 'moment';

import {
  ProductHeader,
  Dropdown,
  Input,
  Textarea,
  Checkbox,
  Photo,
  PreviewModal,
  ProgressBar,
  PickingInput,
  RatingScale,
  Calendar,
  TimePicker,
} from '@zubale/app-components';

const selectOptions = [
  {id: '111', value: 'Disponible'},
  {id: '123', value: 'Agotado'},
  {id: '124', value: 'No catalogado'},
  {id: '125', value: 'Michoacan'},
  {id: '126', value: 'Durango'},
  {id: '127', value: 'Zacatecas'},
  {id: '128', value: 'Sinaloa'},
  {id: '129', value: 'Monterrey'},
  {id: '120', value: 'Chiapas'},
  {id: '121', value: 'Mérida'},
  {id: '131', value: 'Producto catalogado pero no ha llegado a la tienda'},
  {id: '132', value: 'Veracruz Ignacio de la Llave'},
];

const Form = ({navigation, route}) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const [checkValue, setCheckValue] = useState('');
  const [headerVisibility, setHeaderVisibility] = useState(true);
  const [hiddenHeader, setHiddenHeader] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [productUnits, setProductUnits] = useState('0');
  const [ratingValue, setRatingValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTimeValue] = useState('');

  const {productName} = route.params;

  const options = [
    {status: '', id: 'No vovler a mostar', value: 'No volver a mostrar'},
    {status: 'initial', id: '0', value: '0%'},
    {status: 'initial', id: '25', value: '25%'},
    {status: 'initial', id: '50', value: '50%'},
    {status: 'initial', id: '75', value: '75%'},
    {status: 'initial', id: '100', value: '100%'},
  ];
  const photos = [
    'https://user-images.githubusercontent.com/51387597/79890683-78ff1380-83c5-11ea-975d-f10ec94c5f07.png',
    'https://user-images.githubusercontent.com/51387597/79891543-badc8980-83c6-11ea-98c2-106e22cbdf83.png',
    'https://user-images.githubusercontent.com/51387597/79891619-de073900-83c6-11ea-9697-f93f99043c61.png',
    'https://user-images.githubusercontent.com/51387597/79891746-0db64100-83c7-11ea-8f74-eb49db604f10.png',
  ];
  const textForHelper =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at tristique magna, vitae pulvinar tortor. Nunc aliquam, orci et venenatis tempus, nunc odio laoreet risus, in accumsan ante nisi quis urna.';
  const productUrl =
    'https://user-images.githubusercontent.com/51387597/80034586-454ee700-84b4-11ea-8087-658c9dc5f3cc.png';

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Quests')}
          title="Tareas"
          color="white"
        />
      ),
    });
  });

  const onChange = newInputValue => {
    setInputValue(newInputValue);
  };
  const onChangeUnits = newInputValue => {
    setProductUnits(newInputValue);
  };
  const handleModalVisibility = url => {
    setModalVisibility(!modalVisibility);
    setPreviewPhoto(url);
  };

  const onIncrease = () => {
    setProductUnits(parseInt(productUnits, 10) + 1);
  };
  const onDecrease = () => {
    setProductUnits(parseInt(productUnits, 10) - 1);
  };

  const handleRating = value => {
    console.log(value);
    setRatingValue(value);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ProductHeader
        url={productUrl}
        //codeUrl={productCodeUrl}
        regularFont={font.AppRegular}
        boldFont={font.AppBold}
        codeNumber={''}
        units={'340'}
        price={'290.09'}
        //currency={'¢'}
        product={productName}
        completeView={headerVisibility}
        hiddenHeader={hiddenHeader}
        leftString={'Piezas por corrugado'}
      />
      <KeyboardAwareScrollView
        // behavior={Platform.OS === 'ios' ? 'padding' : null}
        // enabled={true}
        // style={{flex: 1, marginTop: 0}}
        //onScroll={handleScroll}
        onScrollBeginDrag={() => setHeaderVisibility(false)}
        scrollEventThrottle={16}
        style={{flex: 1, marginTop: 0}}>
        {/* <Checkbox
          question={'¿Qué porcentaje de producto hay en anaqueles?'}
          questionFont={font.AppBold}
          //questionSize={22}
          inputFont={font.AppRegular}
          helper={'¿Cómo calculo el porcentaje?'}
          helperContent={textForHelper}
          checkItems={options}
          onCheckButtonPress={value => console.log(value)}
          isDark
          //error={'Lorem ipsum letra letra'}
        /> */}
        {/* <Textarea
          value={commentValue}
          onChangeText={newCommentValue => setCommentValue(newCommentValue)}
          placeholder={'Escribe tus comentarios'}
          question={'¿Algún comentario adicional que la marca debería saber?'}
          questionFont={font.AppBold}
          //questionSize={22}
          inputFont={font.AppRegular}
          helper={'¿Qué puedo agregar?'}
          helperContent={textForHelper}
          isDark
          behavior={'height'}
          onFocus={() => setHiddenHeader(true)}
          onBlur={() => setHiddenHeader(false)}
          //error={'Lorem ipsum letra letra'}
        /> */}
        {/* <Dropdown
          selectOptions={selectOptions}
          onSelect={({payload}) => setDropdownValue(payload.value)}
          question={'Disponibilidad del producto '}
          questionFont={font.AppBold}
          //questionSize={22}
          inputFont={font.AppRegular}
          helper={'¿Qué significa esto?'}
          helperContent={textForHelper}
          dropdownValue={dropdownValue}
          placeholder={'-Selecciona una opción-'}
          isDark
          //error={'Lorem ipsum letra letra'}
          withSearchBar
          //searchBarPlaceholder="Buscar vehículo"
          listContainerStyle={{minHeight: '50%'}}
        /> */}
        {/* <Input
          value={inputValue}
          questionFont={font.AppBold}
          onChangeText={onChange}
          placeholder={'Nombre'}
          question={'Nombre'}
          //questionSize={22}
          inputFont={font.AppRegular}
          helper={'Helper'}
          helperContent={textForHelper}
          isDark
          onFocus={() => setHiddenHeader(true)}
          onBlur={() => setHiddenHeader(false)}
          //error={'Lorem ipsum letra letra'}
        /> */}
        {/* <Photo
          question={'Sube foto de todos los anaqueles'}
          questionFont={font.AppBold}
          //questionSize={22}
          helper={'¿Qué es un anaquel?'}
          helperContent={textForHelper}
          buttonText={'Tomar foto de evidencia'}
          buttonFont={font.AppRegular}
          photoData={photos}
          discardPhoto={value => console.log(value)}
          capturePhoto={value => console.log(value)}
          previewPhoto={({payload}) => handleModalVisibility(payload)}
          isDark
          //error={'Lorem ipsum letra letra'}
        /> */}
        {/* {modalVisibility && (
          <PreviewModal
            url={previewPhoto}
            handleCloseButton={() => {
              setModalVisibility(false);
            }}
            buttonText={'cierra esta mierda'}
          />
        )} */}
        {/* {loading && (
          <ProgressBar
            width={null}
            height={8}
            progress={10}
            total={10}
            barColor={'#0F56FB'}
            //error={'Hubo un error al subir tus fotos, intenta nuevamente'}
          />
        )}*/}
        {/* <PickingInput
          value={productUnits}
          questionFont={font.AppBold}
          onChangeText={onChangeUnits}
          //placeholder={'Nombre'}
          question={'Unidades disponibles'}
          //questionSize={22}
          inputFont={font.AppRegular}
          helper={'Helper'}
          helperContent={textForHelper}
          isDark
          onFocus={() => setHiddenHeader(true)}
          onBlur={() => setHiddenHeader(false)}
          //onIncreaseHandler={onIncrease}
          //onDecreaseHandler={onDecrease}
          error={'Lorem ipsum letra letra'}
          incrementValue={0.1}
        /> */}
        <Calendar
          date={dateValue}
          isDark
          question={'Captura la fecha del ticket'}
          questionFont={font.AppBold}
          helper={'Fechas aceptables'}
          error={'Texto indicando error'}
          minDate={3}
          // minDateFormat={'day'}
          // maxDate={1}
          // maxDateFormat={'years'}
          getDate={date => setDateValue(date)}
          //customProps={{placeholder: 'fecha', disabled: true}}
        />
        <TimePicker
          time={timeValue}
          isDark
          question={'Captura la hora del ticket'}
          questionFont={font.AppBold}
          helper={'Fechas aceptables'}
          error={'Texto indicando error'}
          getTime={time => setTimeValue(time)}
          //customProps={{placeholder: 'fecha', disabled: true}}
        />
        {/* <RatingScale
          question="¿Cómo calificarías el servicio de delivery?"
          isDark
          questionFont={font.AppBold}
          onPressHandler={value => handleRating(value.payload)}
          ratingValue={ratingValue}
          error="Debes elegir una opción"
        /> */}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Form;
