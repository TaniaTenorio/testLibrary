import createDataContext from './createDataContext';

const questsData = [
  // {
  //   id: '123xyz',
  //   title: 'en infusiones',
  //   product: 'Harley Pompadour',
  //   reward: '40',
  //   status: 'AVAILABLE',
  // },
  // {
  //   id: '223abd',
  //   title: 'en infusiones',
  //   product: 'Horley Pompadour',
  //   reward: '150',
  //   dueTime: '11:59 a.m.',
  //   status: 'RESERVED',
  //   cancelDisabled: true,
  // },
  // {
  //   id: '223abre',
  //   title: 'en cervezas',
  //   product: 'Grupo Modelo',
  //   reward: '150',
  //   dueTime: '9:00 p.m.',
  //   status: 'PENDING',
  // },
  // {
  //   id: '223abd1',
  //   title: 'Lácteos',
  //   product: 'Lala',
  //   reward: '150',
  //   store: 'Asturias',
  //   dueTime: '',
  //   status: 'RESERVED_BY_ME',
  //   cancelDisabled: true,
  // },
  {
    id: '213abd1',
    title: 'Shopper',
    product: 'Walmart San Rafael',
    reward: '888',
    dueTime: '',
    status: 'WALMART_RESERVED_BY_ME',
    walmartData: {
      orderStatus: 'SHOPPER_OPEN',
      pickingTime: '03:15 p.m.',
      deliveryTime: '05:15 p.m.',
      address: 'Eugenio Zue 316, Polanco',
      cancelEnabled: false,
      cancelTime: 'una hora',
    },
  },
  // {
  //   id: '123abc',
  //   title: 'Shopper',
  //   product: 'Walmart',
  //   reward: '40',
  //   status: 'DISABLED',
  //   text: 'Tarea exclusiva para Zubaleros cool',
  // },
  // {
  //   id: '123abf',
  //   title: 'en infusiones',
  //   product: 'Horley Pompadour',
  //   reward: '150',
  //   status: 'JUST_RESERVED_BY_OTHER',
  // },
  // {
  //   id: '123abe',
  //   title: 'en infusiones',
  //   product: 'Horley Pompadour',
  //   reward: '150',
  //   status: 'RESERVED_BY_OTHER',
  // },
  // {
  //   id: '123abg',
  //   title: 'en infusiones',
  //   product: 'Horley Pompadour',
  //   reward: '150',
  //   taskLimit: 16,
  //   status: 'LIMIT',
  // },
  // {
  //   id: '123aby',
  //   title: 'Picker',
  //   product: 'Walmart La Concha',
  //   reward: '150',
  //   taskLimit: 8,
  //   status: 'LIMIT_WALMART',
  // },
  // {
  //   id: '123aby1',
  //   title: 'Picker',
  //   product: 'Walmart La Conchita',
  //   reward: '150',
  //   status: 'WALMART',
  // },
  {
    id: '123abz1',
    title: 'Shopper',
    product: 'Walmart San Rafael',
    reward: '150',
    status: 'WALMART_SHOPPER',
    walmartData: {
      orderStatus: 'SHOPPER_OPEN',
      orderId: '12345-6789',
      pickingTime: '03:15 p.m.',
      deliveryTime: '05:15 p.m.',
      onTime: null,
      cancelEnabled: null,
    },
  },
  // {
  //   id: '123abs2',
  //   title: 'Shopper',
  //   product: 'Walmart San Rafael',
  //   reward: '150',
  //   status: 'WALMART_SHOPPER',
  //   walmartData: {
  //     orderStatus: 'SHOPPER_STARTED',
  //     pickingTime: '03:15 p.m.',
  //     deliveryTime: '05:15 p.m.',
  //     onTime: true,
  //     cancelEnabled: true,
  //     cancelTime: '60 minutos',
  //   },
  // },
  // {
  //   id: '123abz2',
  //   title: 'Shopper',
  //   product: 'Walmart San Rafael',
  //   reward: '150',
  //   status: 'WALMART_SHOPPER',
  //   walmartData: {
  //     orderStatus: 'SHOPPER_STARTED',
  //     pickingTime: '03:15 p.m.',
  //     deliveryTime: '05:15 p.m.',
  //     onTime: false,
  //     cancelEnabled: false,
  //   },
  // },
  // {
  //   id: '123abz3',
  //   title: 'Shopper',
  //   product: 'Walmart San Rafael',
  //   reward: '150',
  //   status: 'WALMART_SHOPPER',
  //   walmartData: {
  //     orderStatus: 'IN_PROGRESS',
  //     pickingTime: '03:15 p.m.',
  //     deliveryTime: '05:15 p.m.',
  //     onTime: false,
  //     cancelEnabled: false,
  //   },
  // },
  {
    id: '123abz4',
    title: 'Shopper',
    product: 'Walmart San Rafael',
    reward: '150',
    status: 'WALMART_SHOPPER',
    walmartData: {
      orderStatus: 'SHOPPER_DELIVERED',
      pickingTime: '03:15 p.m.',
      deliveryTime: '05:15 p.m.',
      onTime: false,
      cancelEnabled: false,
    },
  },
  // {
  //   id: '223abe',
  //   title: 'en infusiones',
  //   product: 'Horley Pompadour',
  //   reward: '150',
  //   status: 'UNDER_REVIEW',
  // },
  // {
  //   id: '323abe',
  //   title: 'en infusiones',
  //   product: 'Horley Pompadour',
  //   reward: '150',
  //   status: 'COMPLETED',
  // },
  // {
  //   id: '423abe',
  //   title: 'en infusiones',
  //   product: 'Horley Pompadour',
  //   reward: '150',
  //   status: 'REJECTED',
  //   rejectionReason:
  //     'Las fotos del anaquel están borrosas y no se ven los precios en las etiquetas',
  // },
];

const appReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, {title: `Blogpost #${state.length + 1}`}];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({type: 'add_blogpost'});
  };
};

export const {Context, Provider} = createDataContext(
  appReducer,
  {addBlogPost},
  [],
);
