import { createStore } from 'vuex'
// import { homePage } from './modules/home.js'

export default createStore({
  state: {
    menu: ['Home', 'Shop', 'About'],
    infoData: [
      {
        id: 1,
        img: 'https://thumb.tildacdn.com/tild6632-3163-4238-b531-343233653062/-/format/webp/DSCF0007.jpg',
        title: 'Why flowers are a good present?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus.',
        
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.'
      },
      {
        id: 2,
        img: 'https://thumb.tildacdn.com/tild3739-3336-4465-b334-383261623938/-/format/webp/2020-09-11-34215-PM.jpg',
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
        tags: ['Lilacs', 'Any day', 'Large'],
        isBestseller: true
      },
      {
        "id": 1,
        "title": "Passion",
        "price": 30,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-ranunculus-white__0903022_pe596723_s5.jpg?f=xl",
        "images": [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-ranunculus-white__0903022_pe596723_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-ranunculus-white__1038015_pe839379_s5.jpg?f=xl"
        ],
        tags: ['Lilacs', 'Any day', 'Small'],
        isBestseller: false

      },
      {
        "id": 2,
        "title": "33 Roses",
        "price": 50,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg",
        "images": [
          "https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg",
          "https://static.tildacdn.com/tild3039-3862-4962-b036-663438376535/roses2.jpg"
        ],
        tags: ['Roses', 'Any day', 'Medium'],
        isBestseller: false

      },
      {
        "id": 3,
        "title": "Nesquik",
        "price": 35,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild6663-6137-4639-b163-643233656364/4.jpg",
        "images": [
          "https://static.tildacdn.com/tild6663-6137-4639-b163-643233656364/4.jpg",
          "https://static.tildacdn.com/tild3064-6465-4733-b032-363439623132/3.jpg",
        ],
        tags: ['Lilacs', 'Any day', 'Small', 'Medium'],
        isBestseller: false

      },
      {
        "id": 4,
        "title": "Flora",
        "price": 45,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lisianthus-dark-pink__0903925_pe685439_s5.jpg?f=xl",
        "images": [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lisianthus-dark-pink__0903925_pe685439_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lisianthus-dark-pink__0611441_pe685440_s5.jpg?f=xl"
        ],
        tags: ['Lilacs', 'Any day', 'Medium'],
        isBestseller: false

      },
      {
        "id": 5,
        "title": "Last summer days",
        "price": 35,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-in-outdoor-poppy-orange__0967126_pe810061_s5.jpg?f=xl",
        "images": [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-in-outdoor-poppy-orange__0967126_pe810061_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-in-outdoor-poppy-orange__0967127_pe810060_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-in-outdoor-poppy-orange__0949796_pe800013_s5.jpg?f=xl"
        ],
        tags: ['Lilacs', 'Any day', 'Small'],
        isBestseller: false

      },
      {
        "id": 6,
        "title": "My valentine",
        "price": 60,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3861-3739-4136-b330-336137383632/XL1.jpg",
        "images": [
          "https://static.tildacdn.com/tild3861-3739-4136-b330-336137383632/XL1.jpg",
          "https://static.tildacdn.com/tild3537-3234-4338-b863-643939393737/XL2.jpg"
        ],
        tags: ['Lilacs', 'Wedding', 'Date', 'Large'],
        isBestseller: true

      },
      {
        "id": 7,
        "title": "Milk cocktail",
        "price": 38,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-eucalyptus-pink__0903064_pe685442_s5.jpg?f=xl",
        "images": [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-eucalyptus-pink__0903064_pe685442_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-eucalyptus-pink__0903050_pe685441_s5.jpg?f=xl"
        ],
        tags: ['Lilacs', 'Any day', 'Large', 'Medium'],
        isBestseller: false

      },
      {
        "id": 8,
        "title": "My handsome",
        "price": 50,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lily-white__0744649_pe743361_s5.jpg?f=xl",
        "images": [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lily-white__0744649_pe743361_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lily-white__0744650_pe743344_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lily-white__0903008_pe596780_s5.jpg?f=xl"
        ],
        tags: ['Lilacs', 'Date', 'Medium', 'Small'],
        isBestseller: false

      },
      {
        "id": 9,
        "title": "Famous",
        "price": 25,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lupin-dark-pink__0744789_pe743401_s5.jpg?f=xl",
        "images": [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lupin-dark-pink__0744789_pe743401_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lupin-dark-pink__0903717_pe685454_s5.jpg?f=xl"
        ],
        tags: ['Lilacs', 'Wedding', 'Small'],
        isBestseller: false

      },
      {
        "id": 10,
        "title": "Happy Birthday",
        "price": 48,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild6236-3863-4539-b662-353034383437/M2.jpg",
        "images": [
          "https://static.tildacdn.com/tild6236-3863-4539-b662-353034383437/M2.jpg"
        ],
        tags: ['Lilacs', 'B-day', 'Large'],
        isBestseller: true

      },
      {
        "id": 11,
        "title": "100 Roses",
        "price": 150,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg",
        "images": [
          "https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg",
          "https://static.tildacdn.com/tild3039-3862-4962-b036-663438376535/roses2.jpg"
        ],
        tags: ['Roses', 'Any day', 'Large'],
        isBestseller: true

      },
      {
        "id": 12,
        "title": "Amazing view",
        "price": 25,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-baby-s-breath-white__0903541_pe595516_s5.jpg?f=xl",
        "images": [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-baby-s-breath-white__0903541_pe595516_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-baby-s-breath-white__0903552_pe725364_s5.jpg?f=xl"
        ],
        tags: ['Lilacs', 'Orchids', 'B-day', 'Large'],
        isBestseller: false

      },
      {
        "id": 13,
        "title": "Little student",
        "price": 20,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        "image": "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-pasqueflower-pink__0903489_pe685443_s5.jpg?f=xl",
        "images": [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-pasqueflower-pink__0903489_pe685443_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-pasqueflower-pink__0611432_pe685431_s5.jpg?f=xl"
        ],
        tags: ['Daisies', 'Any day', 'Small', 'Date'],
        isBestseller: false
      }
    ],

    cart: [{"title":"Gorgeous","price":23,"image":"https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg","id":0,"cartID":0,"quantity":1}],
    cartID: 0,

    generalHeaderSlider: [
      {
        id: 0,
        blockInfo: {
          header: 'The great nature',
          text: 'Welcome to the garden specialize in all kind of species from the most areas in the world. A total of 800 types of plants and flowers you can find here.'
        },
        sliderBlock: {
          imgSrc: 'https://images.pexels.com/photos/4272611/pexels-photo-4272611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
      },
      {
        id: 1,
        blockInfo: {
          header: 'The great nature 2',
          text: 'Welcome to the garden specialize in all kind of species from the most areas in the world. A total of 800 types of plants and flowers you can find here.'
        },
        sliderBlock: {
          imgSrc: 'https://images.pexels.com/photos/4557466/pexels-photo-4557466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
      },
      {
        id: 2,
        blockInfo: {
          header: 'The great nature 3',
          text: 'Welcome to the garden specialize in all kind of species from the most areas in the world. A total of 800 types of plants and flowers you can find here.'
        },
        sliderBlock: {
          imgSrc: 'https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
      }
    ],

    promocodes: [
      {
        id: 0,
        name: 'SALE25',
        sum: 25
      }
    ],

    order: {
      price: {},
      orderDetails: {}
    },

    isShowModal: false,
    isScrollMenu: false,
    isHomePage: true,
    isTabletScreen: innerWidth <= 768,
    isMobileScreen: innerWidth <= 425,

    selectedFilters: [],

    windowHeight: innerHeight

  },
  mutations: {
    setInnerHeight(state, payload) {
      state.windowHeight = payload;
    },

    setQuantity(state, payload) {
      state.cart = payload;
    },

    deleteCartItem(state, id) {
      state.cart = state.cart.filter(item => item.cartID != id);
    },

    addCartItem(state, payload) {
      let index = state.cart.findIndex(item => item.id === payload.id);
      
      if (index === -1) {
        payload.cartID = state.cartID;
        payload.quantity = 1;

        state.cart.push(payload);
        state.cartID++;

      } else {
        state.cart[index].quantity += 1;
      }
      
    },

    // ORDER

    setOrderPrice(state, payload) {
      state.order.price = payload;
    },

    setDeliveryPrice(state, payload) {
      state.order.price.delivery = payload;
    },

    setOrderDetails(state, payload) {
      state.order.orderDetails = payload;
    },

    clearOrder(state) {
      state.order.orderDetails = {};
      state.order.price = {};
    },

    // MODAL

    changeModalValue(state) {
      state.isShowModal = !state.isShowModal;
    },

    // CART

    clearCart(state) {
      state.cart = [];
    },
    
    // MENU SETTINGS

    changeMenuValue(state, payload) {
      state.isScrollMenu = payload;
    },

    changeIsHomePage(state, payload) {
      state.isHomePage = payload;
    },

    // SCREEN
    changeIsTabletScreen(state, payload) {
      state.isTabletScreen = payload;
    },

    changeIsMobileScreen(state, payload) {
      state.isMobileScreen = payload;
    },

    // FILTERS BLOCK

    addSelectedFilters(state, { filterName, option, filterType }) {
      if (state.selectedFilters.find(item => item.filterName === filterName)) {
        state.selectedFilters.map(item => {
          if (item.filterName === filterName) { 
            item.options.push(option);
          }

          return item;
        });
      } else {
        state.selectedFilters.push({filterName, options: [option], filterType});
      }
    },

     deleteSelectedFilters(state, { filterName, option }) {
      let currentFilter = state.selectedFilters
        .find(item => item.filterName === filterName)
        .options.includes(option);
      
      if (currentFilter) {
        let index = state.selectedFilters
          .find(item => item.filterName === filterName)
          .options.indexOf(option);

        state.selectedFilters = state.selectedFilters.map(item => {
          if (item.filterName === filterName) {
            item.options.splice(index, 1);
          }
          return item;
        });
      }

      state.selectedFilters = state.selectedFilters.filter(item => item.options.length);
     }
  },
  
  actions: {

  },

  getters: {
    getInfo: (state) => (id) => {
      return state.infoData.find((item) => item.id === id);
    },

    //BESTSELLERS
    getBestsellers: (state) => (quantity) => {
      let counter = 0;
      return state.products.sort(() => Math.random() - 0.5).filter(item => {
        if (item.isBestseller && counter < quantity) {
          counter++;
          return true;
        } else return false;
         
      });
    },

     // FILTERS AND SORT

    getFilteredProducts: (state) => (sortType = 'No sort') => {
      if (state.selectedFilters.length === 0 && sortType === 'No sort') {
        return state.products;
      } 

      let filteredProductsByType = [],
          filteredProductsByEvent = [],
          filteredProductsBySize = [];

      let isTypeFilter = false,
          isEventFilter = false,
          isSizeFilter = false;

      const getFilteredByFilterName = (filter, productsForFiltration) => {
          let filteredByFilterName = [];
          filter.options.forEach(option => {
            let filterCycle = productsForFiltration.filter(product => product.tags.includes(option));
            filteredByFilterName = [...filteredByFilterName, ...filterCycle];
          })

          return filteredByFilterName;
      }

      state.selectedFilters.forEach(filter => {
        if (filter.filterName === 'Type of flowers') {
          isTypeFilter = true;
          filteredProductsByType = getFilteredByFilterName(filter, state.products);
        
        } else {
          filteredProductsByType = isTypeFilter ? filteredProductsByType : state.products;
        }
        
        if (filter.filterName === 'Event') {
          isEventFilter = true;
          filteredProductsByEvent = getFilteredByFilterName(filter, filteredProductsByType);
        
        } else {

          filteredProductsByEvent = isEventFilter ? filteredProductsByEvent :
            isTypeFilter ? filteredProductsByType : state.products;
        }
        
        if (filter.filterName === 'Size') {
          isSizeFilter = true;
          filteredProductsBySize = getFilteredByFilterName(filter, filteredProductsByEvent);
        
        } else {
          filteredProductsBySize = isSizeFilter ? filteredProductsBySize :
            isTypeFilter || isEventFilter ? filteredProductsByEvent: state.products;
        }
      })

      if (!isTypeFilter && !isEventFilter && !isSizeFilter) {
        filteredProductsBySize = state.products;
      }

      const getUniqueProducts = (product) => {
        let index = uniqueFilteredProducts.findIndex(item => item.id === product.id);

        if (index === -1) {
          uniqueFilteredProducts.push(product);
          return true;

        } else return false;
      }

      let uniqueFilteredProducts = [];

      filteredProductsBySize.filter(getUniqueProducts);

        // SORT BLOCK

      if (sortType === 'Higher price') {
        return uniqueFilteredProducts.sort((a, b) => b.price - a.price);
  
      } else if (sortType === 'Lower price'){
        return uniqueFilteredProducts.sort((a, b) => a.price - b.price);

      } else {
        return uniqueFilteredProducts;
      }
    }
  },
  modules: {
    // homePage
  }
})

