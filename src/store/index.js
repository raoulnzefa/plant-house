import { createStore } from 'vuex'

export default createStore({
  state: {
    menu: [{name: 'Home', submenu: []}, 
      {name: 'Shop', submenu: ['Plants', 'Flowers']}, 
      {name: 'About', submenu: []}],

    infoData: [
      {
        id: 1,
        img: 'https://images.pexels.com/photos/7354467/pexels-photo-7354467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Why flowers are a good present?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus.',
      },
      {
        id: 2,
        img: 'https://images.pexels.com/photos/3771666/pexels-photo-3771666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'This is a good choice for your home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus.',
      },
    ],

    products: [
      {
        id: 0,
        title: "Gorgeous",
        priceInfo: [
          {
            type: 'small',
            price: 68,
          },
          {
            type: 'medium',
            price: 76,
          },
          {
            type: 'large',
            price: 92,
          },
        ],
        type: 'flowers',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
        images: [ "https://static.tildacdn.com/tild3831-6533-4234-b732-356336303437/R0028458.jpg",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-bouquet-in-outdoor-green__0948705_pe799223_s5.jpg?f=xl",
          "https://static.tildacdn.com/tild3939-6466-4131-b835-356131623939/R0028462.jpg"
        ],

        details: {
          size: ['small', 'medium', 'large'],
          typesOfFlowers: ['daisies', 'roses'],
          events: ['any day', 'date'],
        },
        isBestseller: true
      },
      {
        id: 1,
        type: 'flowers',
        title: "Passion",
        priceInfo: [
          {
            type: 'medium',
            price: 62,
          },
          {
            type: 'large',
            price: 78,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-ranunculus-white__0903022_pe596723_s5.jpg?f=xl",
        images: [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-ranunculus-white__0903022_pe596723_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-ranunculus-white__1038015_pe839379_s5.jpg?f=xl"
        ],

        details: {
          size: ['medium', 'large'],
          typesOfFlowers: ['lilacs'],
          events: ['any day'],
        },
        isBestseller: false

      },
      {
        id: 2,
        type: 'flowers',
        title: "33 Roses",
        priceInfo: [
          {
            type: 'medium',
            price: 79,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg",
        images: [
          "https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg",
          "https://static.tildacdn.com/tild3039-3862-4962-b036-663438376535/roses2.jpg"
        ],

        details: {
          size: ['medium'],
          typesOfFlowers: ['roses'],
          events: ['any day'],
        },
        isBestseller: false

      },
      {
        id: 3,
        type: 'flowers',
        title: "Nesquik",
        priceInfo: [
          {
            type: 'small',
            price: 67,
          },
          {
            type: 'medium',
            price: 75,
          },
          {
            type: 'large',
            price: 89,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://static.tildacdn.com/tild6663-6137-4639-b163-643233656364/4.jpg",
        images: [
          "https://static.tildacdn.com/tild6663-6137-4639-b163-643233656364/4.jpg",
          "https://static.tildacdn.com/tild3064-6465-4733-b032-363439623132/3.jpg",
        ],

        details: {
          size: ['small', 'medium'],
          typesOfFlowers: ['lilacs'],
          events: ['any day'],
        },
        isBestseller: false

      },
      {
        id: 4,
        type: 'flowers',
        title: "Flora",
        priceInfo: [
          {
            type: 'small',
            price: 34,
          },
          {
            type: 'medium',
            price: 48,
          },

        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lisianthus-dark-pink__0903925_pe685439_s5.jpg?f=xl",
        images: [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lisianthus-dark-pink__0903925_pe685439_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lisianthus-dark-pink__0611441_pe685440_s5.jpg?f=xl"
        ],

        details: {
          size: ['small', 'medium'],
          typesOfFlowers: ['lilacs'],
          events: ['any day'],
        },
        isBestseller: false

      },
      {
        id: 5,
        type: 'flowers',
        title: "Last summer days",
        priceInfo: [
          {
            type: 'small',
            price: 47,
          },
          {
            type: 'medium',
            price: 58,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-in-outdoor-poppy-orange__0967126_pe810061_s5.jpg?f=xl",
        images: [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-in-outdoor-poppy-orange__0967126_pe810061_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-in-outdoor-poppy-orange__0967127_pe810060_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-in-outdoor-poppy-orange__0949796_pe800013_s5.jpg?f=xl"
        ],

        details: {
          size: ['small', 'medium'],
          typesOfFlowers: ['lilacs'],
          events: ['any day'],
        },
        isBestseller: false

      },
      {
        id: 6,
        type: 'flowers',
        title: "My valentine",
        priceInfo: [
          {
            type: 'small',
            price: 50,
          },
          {
            type: 'medium',
            price: 60,
          },
          {
            type: 'large',
            price: 78,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://static.tildacdn.com/tild3861-3739-4136-b330-336137383632/XL1.jpg",
        images: [
          "https://static.tildacdn.com/tild3861-3739-4136-b330-336137383632/XL1.jpg",
          "https://static.tildacdn.com/tild3537-3234-4338-b863-643939393737/XL2.jpg"
        ],

        details: {
          size: ['small', 'medium', 'large'],
          typesOfFlowers: ['lilacs'],
          events: ['wedding', 'date'],
        },
        isBestseller: true

      },
      {
        id: 7,
        type: 'flowers',
        title: "Milk cocktail",
        priceInfo: [
          {
            type: 'small',
            price: 42,
          },
          {
            type: 'medium',
            price: 54,
          },
          {
            type: 'large',
            price: 66,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-eucalyptus-pink__0903064_pe685442_s5.jpg?f=xl",
        images: [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-eucalyptus-pink__0903064_pe685442_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-eucalyptus-pink__0903050_pe685441_s5.jpg?f=xl"
        ],

        details: {
          size: ['small', 'medium', 'large'],
          typesOfFlowers: ['lilacs'],
          events: ['any day'],
        },
        isBestseller: false

      },
      {
        id: 8,
        type: 'flowers',
        title: "My handsome",
        priceInfo: [
          {
            type: 'small',
            price: 35,
          },
          {
            type: 'medium',
            price: 52,
          }
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lily-white__0744649_pe743361_s5.jpg?f=xl",
        images: [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lily-white__0744649_pe743361_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lily-white__0744650_pe743344_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lily-white__0903008_pe596780_s5.jpg?f=xl"
        ],

        details: {
          size: ['small', 'medium'],
          typesOfFlowers: ['lilacs'],
          events: ['date'],
        },
        isBestseller: false

      },
      {
        id: 9,
        type: 'flowers',
        title: "Famous",
        priceInfo: [
          {
            type: 'small',
            price: 75,
          },
          {
            type: 'medium',
            price: 92,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lupin-dark-pink__0744789_pe743401_s5.jpg?f=xl",
        images: [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lupin-dark-pink__0744789_pe743401_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-lupin-dark-pink__0903717_pe685454_s5.jpg?f=xl"
        ],

        details: {
          size: ['small', 'medium'],
          typesOfFlowers: ['lilacs'],
          events: ['wedding'],
        },
        isBestseller: false

      },
      {
        id: 10,
        type: 'flowers',
        title: "Happy Birthday",
        priceInfo: [
          {
            type: 'small',
            price: 52,
          },
          {
            type: 'medium',
            price: 68,
          },
          {
            type: 'large',
            price: 79,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://static.tildacdn.com/tild6236-3863-4539-b662-353034383437/M2.jpg",
        images: [
          "https://static.tildacdn.com/tild6236-3863-4539-b662-353034383437/M2.jpg"
        ],
        details: {
          size: ['small', 'medium', 'large'],
          typesOfFlowers: ['lilacs'],
          events: ['b-day'],
        },
        isBestseller: true

      },
      {
        id: 11,
        type: 'flowers',
        title: "100 Roses",
        priceInfo: [
          {
            type: 'large',
            price: 189,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg",
        images: [
          "https://static.tildacdn.com/tild3235-6563-4134-a362-363938376262/roses.jpg",
          "https://static.tildacdn.com/tild3039-3862-4962-b036-663438376535/roses2.jpg"
        ],
        details: {
          size: ['large'],
          typesOfFlowers: ['roses'],
          events: ['any day'],
        },
        isBestseller: true

      },
      {
        id: 12,
        type: 'flowers',
        title: "Amazing view",
        priceInfo: [
          {
            type: 'medium',
            price: 62,
          },
          {
            type: 'large',
            price: 78,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-baby-s-breath-white__0903541_pe595516_s5.jpg?f=xl",
        images: [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-baby-s-breath-white__0903541_pe595516_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-baby-s-breath-white__0903552_pe725364_s5.jpg?f=xl"
        ],
        details: {
          size: ['medium', 'large'],
          typesOfFlowers: ['lilacs', 'orchids'],
          events: ['b-day'],
        },
        isBestseller: false
      },
      {
        id: 13,
        type: 'flowers',
        title: "Little student",
        priceInfo: [
          {
            type: 'small',
            price: 57,
          },
          {
            type: 'medium',
            price: 72,
          },
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.",
        image: "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-pasqueflower-pink__0903489_pe685443_s5.jpg?f=xl",
        images: [
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-pasqueflower-pink__0903489_pe685443_s5.jpg?f=xl",
          "https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-pasqueflower-pink__0611432_pe685431_s5.jpg?f=xl"
        ],
        details: {
          size: ['small', 'medium'],
          typesOfFlowers: ['daisies'],
          events: ['any day', 'date'],
        },
        isBestseller: false
      },
      {
        id: 14,
        title: "Snake Plant Laurentii",
        priceInfo: [
          {
            type: 'small',
            price: 57,
            quantity: 10
          },
          {
            type: 'medium',
            price: 72,
            quantity: 15
          },
        ],

        type : 'plants',

        description: `Don't let the name fool (or more likely, scare the crap out of) you. Marino explains that the snake plant simply gets its name from the thin, upright leaves with "irregular green banding" that look like—you guessed it—snakeskin. 

        Besides looking cool, it's a low-maintenance plant that's known for surviving droughts, making it perfect for newbies living in almost any environment. "Although the snake plant prefers bright light, it can survive lower light levels," she adds.
        
        Snake plants have also been shown to filter out nasty chemicals, like benzene, formaldehyde, trichloroethylene, xylene, and toluene, so you can breathe easy having this in your home.`,

        image: "https://images.pexels.com/photos/8936386/pexels-photo-8936386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        images: [ 'https://images.pexels.com/photos/8936386/pexels-photo-8936386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/4505469/pexels-photo-4505469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          "https://images.pexels.com/photos/7301930/pexels-photo-7301930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/9412357/pexels-photo-9412357.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          
        ],
        details: {
          size: ['small', 'medium'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: true,
        },
        isBestseller: true,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]
      },
      {
        id: 15,
        type: 'plants',
        title: "Dracaena Gold Star",
        priceInfo: [
          { 
            type: 'small',
            price: 123,
            quantity: 12
          },
          { 
            type: 'medium',
            price: 155,
            quantity: 10
          },
          { 
            type: 'large',
            price: 195,
            quantity: 4
          }
        ],

        "description": `If you live a high-maintenance life—always on the go, out at all hours—you need an "easy going, low-maintenance plant, like the Dracaena," says Juliette Vassilkioti, co-founder and president of My City Plants. The Dracaena is great, she explains, because it can easily adapt to different light environments, though it's best to keep it away from direct sun. 

        "The hardiest of of these group is Draacena Lisa," she explains. "It can deal with indoor temperature and season changes better than others." When it comes to purifying the air, though, the Dracaena Marginata Plant is your best bet. It removes benzene, formaldehyde, trichloroethylene, and xylene. `,

        image: "https://static.havenly.com/product/production/sha256_60c97755f75d0a1c5bc8005b96eb35ac7b0704aba710f3cbb4dca1acfdbac01b.jpeg",
        images: [
          "https://static.havenly.com/product/production/sha256_60c97755f75d0a1c5bc8005b96eb35ac7b0704aba710f3cbb4dca1acfdbac01b.jpeg",
          "https://cdn.shopify.com/s/files/1/0212/1030/0480/products/DSC_1710.thumb.JPG.5906e1f69a4513cc0dcfec1ebc1cb934.jpg?v=1627854106",
          'https://cdn.shopify.com/s/files/1/2375/8087/products/image_118f2f51-8da5-4323-a0d7-c4fb13a71daa.jpg?v=1608581608'
        ],
        details: {
          size: ['small', 'medium', 'large'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: false,
        },
        isBestseller: false,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]
      },
      {
        id: 16,
        type: 'plants',
        title: "Rubber Tree",
        priceInfo: [{
          type: 'small',
          price: 46,
          quantity: 12
        },
        {
          type: 'medium',
          price: 90,
          quantity: 11
        },
        {
          type: 'large',
          price: 143,
          quantity: 0
        }],

        description: `If you have a tendency to forget about your plants, or are new to the whole "plant parent" lifestyle, get a rubber tree. According to Vassilkioti, they're "tolerant to some degree of neglect" (phew!) and "handle under-watering better than over-watering."

        Sound like your kind of plant? Great, just know that a rubber tree needs bright light (can take some partial sunlight) and a good amount of space around for it to be happy, grow, and remove carbon dioxide from your home.`,
        
        image: "http://cdn.shopify.com/s/files/1/0056/8970/4482/products/B_D_Day1-037.jpg?v=1607707062",
        images: [
          'http://cdn.shopify.com/s/files/1/0056/8970/4482/products/B_D_Day1-037.jpg?v=1607707062',
          "https://images.pexels.com/photos/1048035/pexels-photo-1048035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/2354399/pexels-photo-2354399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ],
        details: {
          size: ['small', 'medium', 'large'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: true,
        },
        isBestseller: false,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]
      },
      {
        id: 17,
        type: 'plants',
        title: "Aloe Vera",
        priceInfo: [
          {
            type: 'small',
            price: 83,
            quantity: 12
          },
          {
            type: 'medium',
            price: 99,
            quantity: 6
          }
        ],

        description: `"This plant isn't just easy to care for, it's also known as a healer," says Vassilkioti. "Aloe vera juice has anti-inflammatory and anti-bacterial properties." So not only can you use this plant to brighten up your home, but you can also use it to heal wounds and different skin conditions.Put your aloe vera plant in a bright, sunny spot and don't worry about keeping it alive. 

        "This guy likes to get its soil very, very dry before watering," she adds. And even if you don't use aloe vera for its healing properties, you can still reap all its air-purification benefits as it removes formaldehyde. `,
        image: "https://i.pinimg.com/originals/03/78/f5/0378f56bce8a5c5b4f5b1a765cdb8af4.png",
        images: [
          "https://i.pinimg.com/originals/03/78/f5/0378f56bce8a5c5b4f5b1a765cdb8af4.png",
          "https://images.pexels.com/photos/1589904/pexels-photo-1589904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          'https://images.pexels.com/photos/1578504/pexels-photo-1578504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          'https://images.pexels.com/photos/904621/pexels-photo-904621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ],

        details: {
          size: ['small', 'medium'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: false,
        },
        isBestseller: false,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]
      },
      {
        id: 18,
        type: 'plants',
        title: "Monstera Deliciosa",
        priceInfo: [
          {
            type: 'medium',
            price: 50,
            quantity: 12
          },
          {
            type: 'large',
            price: 160,
            quantity: 2
          }
        ],
        description: `These trendy plants are one of Horton's faves not just because their eye-catching look is oh-so-'grammable, but because "once you get them going, they're easy growing." Especially during the warmer season, expect to see a new leaf weekly. Plus, you can easily propagate them (a.k.a. split off a leaf with a node and give it to a friend to grow their own).

        Best part: You only need to water a monstera deliciosa every one to two weeks, letting the soil dry out between waterings, per The Sill. Plus, it's perfect if your place doesn't get direct sunlight—all it needs is a spot that receives bright to medium indirect light.
        
        In general, large-leafed philodendron plants, including the monstera deliciosa, were shown to be one of the most effective at reducing air pollutants, like benzene, trichloroethylene, and formaldehyde, according to a NASA study. `,

        image: "https://images.pexels.com/photos/6297518/pexels-photo-6297518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        images: [
          'https://images.pexels.com/photos/6297518/pexels-photo-6297518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          "https://images.pexels.com/photos/4740591/pexels-photo-4740591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          'https://images.pexels.com/photos/5393611/pexels-photo-5393611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
        details: {
          size: ['medium', 'large'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: false,
        },
        isBestseller: false,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]

      },
      {
        id: 19,
        type: 'plants',
        title: "Pothos",
        priceInfo: [
          {
            type: 'small',
            price: 41,
            quantity: 20
          },
          {
            type: 'medium',
            price: 58,
            quantity: 12
          }
        ],
        description: `"Sometimes referred to as the 'cubicle plant,' the pothos is a great pick if you're a self-proclaimed 'black thumb,' says Marino. (Just so you know, a 'black thumb' is the total opposite of a 'green thumb.') And while this plant starts out small, its trailing vines can grow to over 10 feet long (WOW), even indoors where lower light and dry air make conditions less than ideal. 

        As an added bonus, this plant is super easy to grow, adds Marino, and propagates (translation: breeds more pothos) in water. While you'll need to learn how to propagate a Pothos plant, you can basically get as many plants as you want for the price of one. And like the snake plant, the pothos filters benzene, formaldehyde, xylene, and toluene.`,

        image: "https://www.delineateyourdwelling.com/wp-content/uploads/Pothos-Care-5-600x900.jpg",
        images: [
          "https://www.delineateyourdwelling.com/wp-content/uploads/Pothos-Care-5-600x900.jpg",
          "https://cdn11.bigcommerce.com/s-pnuk8o2l3q/images/stencil/1280x1280/products/3211/11617/apifxadwn__60038.1623801106.jpg?c=1",
          "https://lh4.googleusercontent.com/9wUR6eCwbteGJ1u9A8JLsLr2ACiHzcndaCu47rolSdmw5loEnsoaFkV6cjauaaq6tQofS7EHRa5AAFt1_624wj4RHzRvX6Yx-g2PWZ3m2spmfeuzmiAWSnNW2TvhEVveHX-TyjRF"
        ],
        details: {
          size: ['small', 'medium'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: true,
        },
        isBestseller: false,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]
      },
      {
        id: 20,
        type: 'plants',
        title: "ZZ Plant",
        priceInfo: [
          {
            type: 'small',
            price: 35,
            quantity: 19
          },
          {
            type: 'medium',
            price: 52,
            quantity: 12
          },
          {
            type: 'large',
            price: 80,
            quantity: 10
          }
        ],
        description: `If you live in a lower light environment, Marino and Horton suggest getting a ZZ Plant because they're drought tolerant and incredibly low maintenance. You might notice the ZZ has large potato-like rhizomes (a.k.a. horizontal stems that continuously grow) under the surface of its surrounding potting mix.

        These rhizomes, Horton explains, are "hearty," storing water that helps the plant survive drought in its natural environment. She recommends watering it once a month during the growing season (spring and summer) and once every two months when it goes dormant in the fall. "It's a great plant to have if you're somebody who happens to travel a lot," Horton adds. 
        
         Oh, and Marino notes that many cultures believe a ZZ Plant "symbolizes prosperity and friendship," making it a great housewarming gift. `,

        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551638261-gallery_the-sill_zz-plant-plant_3_4_7fcfbb35-419e-42d3-8cb5-3d7f8295312b_2230x.progressive.jpg?crop=1xw:0.773xh;center,top&resize=768:*",
        images: [
          'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551638261-gallery_the-sill_zz-plant-plant_3_4_7fcfbb35-419e-42d3-8cb5-3d7f8295312b_2230x.progressive.jpg?crop=1xw:0.773xh;center,top&resize=768:*',
          "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/ZZplant_3_650x.jpg?v=1624972437",
          "https://images.pexels.com/photos/7513150/pexels-photo-7513150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          'https://images.pexels.com/photos/7513151/pexels-photo-7513151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ],
        details: {
          size: ['small', 'medium', 'large'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: false,
        },
        isBestseller: true,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]

      },
      {
        id: 21,
        type: 'plants',
        title: "Spider Plant",
        priceInfo: [
          {
            type: 'small',
            price: 10,
            quantity: 26
          },
          {
            type: 'medium',
            price: 18,
            quantity: 16
          },
          {
            type: 'large',
            price: 25,
            quantity: 5
          }
        ],

        description: `Plants that give off "instant jungle vibes," like the spider plant, are having a serious moment right now, according to Marino. And they're super easy to care for, says Vassilkioti. These plants need bright light, but no direct sun, so they're perfect to put in a room with big windows. Just keep it away from the windowsill.  

        Vassilkioti adds that this plant is fun to have around because it grows "baby spiders" (spiderettes), which can be easily propagated. It's also a strong air purifier, removing both formaldehyde and xylene.`,

        image: "https://i.insider.com/61005a640d35a9001825734b?width=1136&format=jpeg",
        images: [
          "https://i.insider.com/61005a640d35a9001825734b?width=1136&format=jpeg",
          "https://thehabitat.mblycdn.com/th/resized/2019/09/730x487/shutterstock_1403951570.jpg",
          'https://gardenerspath.com/wp-content/uploads/2020/12/Spider-Plant-with-an-Offset.jpg'
        ],
        details: {
          size: ['small', 'medium', 'large'],
          isPetFriendly: true,
          isIndoors: true,
          isOutdoors: true,
        },
        isBestseller: false,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]

      },
      {
        id: 22,
        type: 'plants',
        title: "Bird’s Nest Fern",
        priceInfo: [
          {
            type: 'small',
            price: 46,
            quantity: 6
          },
          {
            type: 'medium',
            price: 61,
            quantity: 13
          }
        ],

        description: `Having a bird’s nest fern in your home is an instant conversation starter, thanks to its bright green, ripple-edged fronds. You'll score major cool points with this signature-looking plant, especially if you put it in a hanging planter, as Marino recommends. 

        Because the bird's nest fern thrives in medium indirect light and a humid environment, Marino says, "it would do great in a bathroom with a shower, as long as there are windows that receive natural light." 
        
        Ferns have been shown to filter formaldehyde, xylene, and toluene, so it's not a bad idea to put one in your bathroom. After all, that's where you're likely to use household toxins, like harsh cleaners, hairspray, and nail polish remover that often contain these chemicals.`,

        image: "https://d3gkbidvk2xej.cloudfront.net/images/products/v2/5450c3fd-ffaa-46e6-85d0-08df8c638342/s/bird39s-nest-fern-white-mid-century-ceramic-light-wood-stand.png?version=1607303623.55590019800",
        images: [
          "https://d3gkbidvk2xej.cloudfront.net/images/products/v2/5450c3fd-ffaa-46e6-85d0-08df8c638342/s/bird39s-nest-fern-white-mid-century-ceramic-light-wood-stand.png?version=1607303623.55590019800",
          "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_birds-nest-fern-1_detail.jpg?ver=278949",
          "https://d3gkbidvk2xej.cloudfront.net/images/products/93df8ef2-0922-4c10-9cfe-306555e97e4f.jpeg?version=1633135939.6390019800"
        ],
        details: {
          size: ['small', 'medium'],
          isPetFriendly: true,
          isIndoors: true,
          isOutdoors: false,
        },
        isBestseller: false,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]
      },
      {
        id: 23,
        type: 'plants',
        title: "Peace Lily",
        priceInfo: [
          {
            type: 'small',
            price: 15,
            quantity: 26
          },
          {
            type: 'medium',
            price: 40,
            quantity: 16
          },
          {
            type: 'large',
            price: 80,
            quantity: 5
          }
        ],
        description: `If you already have experience keeping an indoor plant alive (congrats), then it might be time to add a peace lily into the mix.  Vassilkioti says this one requires more attention compared to other indoor plants. That means keeping it moist without over-watering and placing it in a bright but shady spot, she explains. 

        One thing to note: "The peace lily's flowers have pollen, so this plant might not be the best choice for people who struggle with allergies," says Vassilkioti. 
        
        If that's not a problem for you, she recommends putting a peace lily in your bedroom since it produces oxygen at night, while most other plants do that during the day. Besides producing oxygen, this plant also removes ammonia, benzene, formaldehyde, and trichloroethylene. `,

        image: "https://i.pinimg.com/originals/29/7f/a5/297fa532d0eedb6f249431363d903689.jpg",
        images: [
          "https://i.pinimg.com/originals/29/7f/a5/297fa532d0eedb6f249431363d903689.jpg",
          "https://www.naturescolours.com.au/wp-content/uploads/2019/03/Peace-Lily-Plant-Care.jpg",
          'https://www.yates.com.au/media/plants/indoor/pr-tn-indoor-peace-lily.png'
        ],
        details: {
          size: ['small', 'medium', 'large'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: false,
        },
        isBestseller: false,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]

      },
      {
        "id": 24,
        'type' : 'plants',
        "title": "Philodendron Green",
        priceInfo: [
          {
            type: 'medium',
            price: 62,
            quantity: 8
          }
        ],

        "description": `"In the right indoor conditions, the philodendron’s heart-shaped leaves and trailing vines can grow to over 10 feet long, like the pothos," says Marino. This makes it a great plant if you've got high shelves, or want to add a hanging planter to your home decor (the ultimate in #adulting). 

        Also like the pothos, it's "incredibly easy to prune and propagate, if you prefer a more compact shape," she adds. It's also one of the easiest houseplants to grow. 
        
        Though it's not the most air-purifying plant out there, philodendrons do filter formaldehyde. Not too shabby for a low-maintenance plant that's perfect for newbies. `,

        "image": "https://www.daun.com.my/wp-content/uploads/2020/06/20200602_142730.jpg",
        "images": [
          'https://www.daun.com.my/wp-content/uploads/2020/06/20200602_142730.jpg',
          "http://cdn.shopify.com/s/files/1/1780/8157/products/Philodendron-Imperial-Green-14cm_Cubo-L_1200x1200.jpg?v=1629103376",
          'http://cdn.shopify.com/s/files/1/0509/1193/6720/products/JKo9XCc6EemMfAZPhI1_dQ-IiWUvsdwEeqomXts6ZbUlQ_997c3419-e253-4395-be60-13c7e0ee4918.jpg?v=1614191687'
        ],
        details: {
          size: ['medium'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: false,
        },
        isBestseller: true,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]

      },
      {
        id: 25,
        type: 'plants',
        title: "Hydrangea",
        priceInfo: [
          {
            type: 'small',
            price: 30,
            quantity: 26
          },
          {
            type: 'medium',
            price: 80,
            quantity: 16
          }
        ],
        description: `This hydrangea has tougher branches than many of the other arborescens types, which means that as they mature they will stand up better in more exposed positions and will rarely flop over when laden with flowers. The glorious bundles of white flowers will also get larger as the plant grows older, but even when they are still quite young, they will put on a dazzling and long-lasting display from mid summer.`,
        image: "https://images.pexels.com/photos/6913051/pexels-photo-6913051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        images: [
          "https://images.pexels.com/photos/6913051/pexels-photo-6913051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/5069478/pexels-photo-5069478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          'https://images.pexels.com/photos/2518828/pexels-photo-2518828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          'https://images.pexels.com/photos/6079575/pexels-photo-6079575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ],
        details: {
          size: ['small', 'medium'],
          isPetFriendly: false,
          isIndoors: false,
          isOutdoors: true,
        },
        isBestseller: true,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]

      },
      {
        id: 26,
        type: 'plants',
        title: "Succulent plant",
        priceInfo: [
          {
            type: 'small',
            price: 7,
            quantity: 26
          },
        ],
        description: `Succulents are a group of plants with some of the most diverse forms, colors, and blooms. These easy to care for indoor and outdoor specimens are a dream for the busy gardener. What is a succulent plant? Succulents are specialized plants that store water in their leaves and/or stems. They are remarkably adapted to harsh climates where water is scarce or comes sporadically. Merriam Webster defines a succulent as “full of juice” or “juicy.” Read on for some fun succulent plant info so you can get started collecting the myriad of varieties available in this special class of plant.`,
        image: "https://images.pexels.com/photos/4507705/pexels-photo-4507705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        images: [
          "https://images.pexels.com/photos/4507705/pexels-photo-4507705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/4507747/pexels-photo-4507747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          'https://images.pexels.com/photos/4507735/pexels-photo-4507735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          'https://images.pexels.com/photos/1011302/pexels-photo-1011302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ],
        details: {
          size: ['small'],
          isPetFriendly: false,
          isIndoors: true,
          isOutdoors: true,
        },
        isBestseller: false,
        plantCare: [
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_light.svg?v=4400775217377875679',
            description: 'Medium to low indirect light'
          },
          {
            icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/380/assets/pdp_icon_water.svg?v=18168889493737383852',
            description: 'Water every 2–3 weeks'
          }
        ]
      },
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

    selectedFilters: {
      plants: [],
      flowers: []
    },

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

    addSelectedFilters(state, { filterName, option, classification }) {
      if (state.selectedFilters[classification].find(item => item.filterName === filterName)) {
        state.selectedFilters[classification].map(item => {
          if (item.filterName === filterName) { 
            item.options.push(option);
          }

          return item;
        });
      } else {
        state.selectedFilters[classification].push({filterName, options: [option]});
      }
    },

    deleteSelectedFilters(state, { filterName, option, classification }) {
      let currentFilter = state.selectedFilters[classification]
        .find(item => item.filterName === filterName)
        .options.includes(option);
      
      if (currentFilter) {
        let index = state.selectedFilters[classification]
          .find(item => item.filterName === filterName)
          .options.indexOf(option);

        state.selectedFilters[classification] = state.selectedFilters[classification].map(item => {
          if (item.filterName === filterName) {
            item.options.splice(index, 1);
          }
          return item;
        });
      }

      state.selectedFilters[classification] = state.selectedFilters[classification].filter(item => item.options.length);
    }
  },
  
  actions: {

  },

  getters: {
    //BOUQUETS AND PLANTS

    getProductsByType: (state) => (type) => {
      return state.products.filter(product => product.type.toLowerCase() === type);
    },

    //
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

    getFilteredProducts: (state) => (sortType = 'No sort', products = state.products, classification) => {
      if (state.selectedFilters[classification].length === 0 && sortType === 'No sort') {
        return products;
      } 

      let filteredProducts = products;

      const filterByDetailsName = (detailsName, filter) => {
        filter.options.forEach((option) => {
          filteredProducts = filteredProducts.filter((item) => item.details[detailsName].includes(option.toLowerCase()));
        });
      }
    
      state.selectedFilters[classification].forEach(filter => {

        // TYPE OF FLOWERS
        if (filter.filterName.toLowerCase() === 'type of flowers') {
          filterByDetailsName('typesOfFlowers', filter);
        } 

        // EVENT
        if (filter.filterName.toLowerCase() === 'event') {
          filterByDetailsName('events', filter);
        } 

        // LOCATION
        if (filter.filterName.toLowerCase() === 'location') {
          filter.options.forEach((option) => {
            filteredProducts = filteredProducts.filter((item) => option.toLowerCase() === 'outdoors'? item.details.isOutdoors : item.details.isIndoors );
          });
        } 

        // PET FRIENDLY
        if (filter.filterName.toLowerCase() === 'pet friendly?') {
          filteredProducts = filteredProducts.filter((item) => item.details.isPetFriendly);
        } 


        // SIZE
        if (filter.filterName.toLowerCase() === 'size') {
          filterByDetailsName('size', filter);
        } 
      })
    
      let uniqueFilteredProducts = [];

      const getUniqueProducts = (product) => {
        let index = uniqueFilteredProducts.findIndex(item => item.id === product.id);

        if (index === -1) {
          uniqueFilteredProducts.push(product);
          return true;

        } else return false;
      }

      filteredProducts.filter(getUniqueProducts);

      // SORT BLOCK

      if (sortType === 'Higher price') {
        return uniqueFilteredProducts.sort((a, b) => b.priceInfo[0].price - a.priceInfo[0].price);
  
      } else if (sortType === 'Lower price'){
        return uniqueFilteredProducts.sort((a, b) => a.priceInfo[0].price - b.priceInfo[0].price);

      } else {
        return uniqueFilteredProducts;
      }
    }
  },

  modules: {
    // homePage
  }
})

