import { createStore } from 'vuex'
// import { homePage } from './modules/home.js'

export default createStore({
  state: {
    menu: ['Home', 'Shop', 'About'],
    infoData: [
      {
        id: 1,
        img: 'https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-carnation-pink__0903360_pe685418_s5.jpg?f=xl',
        title: 'Why flowers are a good present?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.'
      },
      {
        id: 2,
        img: 'https://www.ikea.com/kr/en/images/products/smycka-artificial-bouquet-in-outdoor-green__0948705_pe799223_s5.jpg?f=xl',
        title: 'This is a good choice for your home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus.',
      },
    ],

    products: [
      {
        "id": 0,
        "title": "Gorgeous",
        "price": 23,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [ "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-bouquet-in-outdoor-green__0948705_pe799223_s5.jpg?f=xl",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 1,
        "title": "Passion",
        "price": 30,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 2,
        "title": "33 Roses",
        "price": 50,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 3,
        "title": "Nesquik",
        "price": 35,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 4,
        "title": "Flora",
        "price": 45,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 5,
        "title": "Last summer days",
        "price": 35,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 6,
        "title": "My valentine",
        "price": 60,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 7,
        "title": "Milk cocktail",
        "price": 38,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 9,
        "title": "My handsome",
        "price": 50,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 10,
        "title": "Famous",
        "price": 25,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 11,
        "title": "Happy Birthday",
        "price": 48,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 12,
        "title": "100 Roses",
        "price": 150,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Any day']
      },
      {
        "id": 13,
        "title": "Amazing view",
        "price": 25,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Lilacs', 'Orchids', 'Any day', 'Large']
      },
      {
        "id": 14,
        "title": "Little student",
        "price": 20,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        "images": [
          "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],
        tags: ['Daisies', 'Any day', 'Small', 'Date']
      }
    ],

    cart: [],
    cartID: 0,

    promocodes: [
      {
        id: 0,
        name: 'SALE25',
        sum: 25
      }
    ]
      
  },
  mutations: {
    setQuantity(state, payload) {
      state.cart = payload;
    },

    deleteCartItem(state, id) {
      state.cart = state.cart.filter(item => item.cartID != id);
    },

    addCartItem(state, payload) {
      payload.cartID = state.cartID;
      payload.quantity = 1;
      state.cart.push(payload);

      state.cartID++;
    }

  },
  actions: {

  },
  getters: {
    getInfo: (state) => (id) => {
      return state.infoData.find((item) => item.id === id);
    }
  },
  modules: {
    // homePage
  }
})



