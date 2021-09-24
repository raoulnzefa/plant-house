export const homePage = {
  state: () => {
    infoData: [
      {
        id: 1,
        img: 'https://www.ikea.com/kr/en/images/products/smycka-artificial-flower-carnation-pink__0903360_pe685418_s5.jpg?f=xl',
        title: 'Why flowers is a good present?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus. Aenean volutpat accumsan neque ac elementum. Vivamus ultricies rhoncus imperdiet. Maecenas id volutpat purus. Curabitur aliquet nibh vel enim lacinia fringilla feugiat at tellus. Proin a aliquet nisl, id fringilla metus. Fusce tempor sapien enim, nec consectetur felis aliquam sed.'
      },
      {
        id: 2,
        img: 'https://www.ikea.com/kr/en/images/products/smycka-artificial-bouquet-in-outdoor-green__0948705_pe799223_s5.jpg?f=xl',
        title: 'There are a lot of different flowers on the planet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa et nibh porttitor, et tristique urna sagittis. Vestibulum id efficitur risus. Proin accumsan dolor ut orci consectetur consequat. Sed diam tortor, dignissim ut mauris nec, ornare scelerisque risus.'
      },

    ]
  },
  getters: {
    getInfo: (state) => (id) => {
      return state.infoData.find((item) => item.id === id);
    }
  }
}

