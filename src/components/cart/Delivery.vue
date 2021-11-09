<template>
  <div class="delivery">
    <div class="button--go-back">
      <button @click.prevent="$router.go(-1)">{{ '< ' }}Go back</button>
    </div>

    <h2>Delivery</h2>

    <div class="delivery--container">
      <div class="delivery--inner">
        <div class="contact-info">
          <h3>Type your full name and contacts</h3>
          <div class="contact-info--inner">
            <div class="position-relative">
              <label for="first-name">First name:</label>
              <input
                type="text"
                id="first-name"
                v-model.trim="firstName"
                placeholder="Peter"
              />
              <div class="error-field"></div>
            </div>
            <div class="position-relative">
              <label for="last-name">Last name:</label>
              <input
                type="text"
                id="last-name"
                v-model.trim="lastName"
                placeholder="Parker"
              />
              <div class="error-field"></div>
            </div>
          </div>
          <div class="contact-info--inner">
            <div class="phone-number position-relative">
              <label for="phone-number">Phone number:</label>
              <input
                type="text"
                id="phone-number"
                v-model="phoneNum"
                @input="onAcceptNumber"
                @change="onVerifyNumber"
                placeholder="(111) 111-1111"
                data-phone-block="contactBlock"
              />
              <div class="error-field"></div>
            </div>
            <div class="email position-relative">
              <label for="email">E-mail:</label>
              <input
                type="email"
                id="email"
                v-model.trim="email"
                placeholder="yourmail@mail.com"
                @change="onValidateEmail"
              />
              <div class="error-field"></div>
            </div>
          </div>
        </div>

        <div class="delivery-type">
          <h3>Check type of delivery</h3>

          <div class="radio-button">
            <input
              type="radio"
              id="pickup"
              name="delivery-type"
              value="pickup"
              v-model="checkedDeliveryType"
            />
            <div class="radio-button--image"></div>

            <label for="pickup">Self-pickup</label>
          </div>

          <div class="radio-button">
            <input
              type="radio"
              name="delivery-type"
              id="delivery-service"
              value="delivery-service"
              v-model="checkedDeliveryType"
            />
            <div class="radio-button--image"></div>

            <label for="delivery-service">Delivery Service</label>
          </div>
        </div>
        <div class="go-back">
          <button @click="$router.go(-1)">{{ '< ' }}Go back</button>
        </div>
      </div>

      <div class="vertical-line"></div>

      <div class="delivery--inner ">
        <div v-if="checkedDeliveryType === 'pickup'" class="pickup">
          <div class="branch">
            <h3>Choose the branch of self-pickup</h3>
            <div class="radio-button">
              <input
                type="radio"
                name="branch-pickup"
                id="branch-pickup--1"
                v-model="checkedBranchPickup"
                value="khreschatik"
              />
              <div class="radio-button--image"></div>
              <label for="branch-pickup--1">Khreschatik street, 22</label>
            </div>
            <div class="radio-button">
              <input
                type="radio"
                name="branch-pickup"
                id="branch-pickup--2"
                v-model="checkedBranchPickup"
                value="dream-town"
              />
              <div class="radio-button--image"></div>

              <label for="branch-pickup--2">"Dream Town", 3-rd floor</label>
            </div>
          </div>
          <div
            v-show="checkedBranchPickup === 'khreschatik'"
            class="google-map"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5300580206085!2d30.520962115455138!3d50.44985349528939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56884f4f6f%3A0xcd06ffbc5e9276c0!2sKhreschatyk%20St%2C%2022%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1636102418245!5m2!1sen!2sua"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div v-show="checkedBranchPickup === 'dream-town'" class="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.4152132280133!2d30.496075415457266!3d50.50784069110933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d213a46b9971%3A0xd43b0c9ed64a4a97!2sDREAM%20yellow!5e0!3m2!1sen!2sua!4v1636102528365!5m2!1sen!2sua"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div
          v-if="checkedDeliveryType === 'delivery-service'"
          class="delivery-service"
        >
          <div class="city position-relative">
            <h3>City</h3>
            <select name="" id="city" v-model="cityName">
              <option disabled value="">Choose your city</option>
              <option value="Kyiv">Kyiv</option>
              <option value="Odessa">Odessa</option>
              <option value="Lviv">Lviv</option>
              <option value="Kharkiv">Kharkiv</option>
            </select>
            <div class="error-field"></div>
          </div>
          <div class="branch position-relative">
            <h3>Branch number</h3>
            <select name="" id="branch" v-model="branchNum">
              <option disabled value="">Select branch number</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div class="error-field"></div>
          </div>

          <div class="recipient">
            <div>Are you the recipient?</div>
            <div class="recipient--buttons">
              <button
                @click="isRecipient = true"
                :class="{ active: isRecipient }"
              >
                Yes
              </button>
              <button
                @click="isRecipient = false"
                :class="{ active: !isRecipient }"
              >
                No
              </button>
            </div>
          </div>

          <div class="contact-delivery">
            <div class="contact-info--inner">
              <div class="contact-delivery--item position-relative">
                <label for="first-name">First name:</label>
                <input
                  type="text"
                  id="first-name"
                  v-model.trim="firstNameDelivery"
                  placeholder="Peter"
                />
                <div class="error-field"></div>
              </div>
              <div class="contact-delivery--item position-relative">
                <label for="last-name">Last name:</label>
                <input
                  type="text"
                  id="last-name"
                  v-model.trim="lastNameDelivery"
                  placeholder="Parker"
                />
                <div class="error-field"></div>
              </div>
            </div>

            <div class="phone-number position-relative">
              <label for="phone-number">Phone number:</label>
              <input
                type="text"
                id="phone-number"
                v-model="phoneNumDelivery"
                @input="onAcceptNumber"
                @change="onVerifyNumber"
                placeholder="(111) 111-1111"
                data-phone-block="deliveryBlock"
              />
              <div class="error-field"></div>
            </div>
          </div>
        </div>

        <div
          class="continue"
          v-if="
            checkedDeliveryType === 'delivery-service' ||
              checkedDeliveryType === 'pickup'
          "
        >
          <button @click="onVerifyAllInputs">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const checkedDeliveryType = ref(''),
      checkedBranchPickup = ref('khreschatik');

    const lastName = ref(''),
      firstName = ref(''),
      phoneNum = ref(''),
      email = ref('');

    const lastNameDelivery = ref(''),
      firstNameDelivery = ref(''),
      phoneNumDelivery = ref(''),
      branchNum = ref(''),
      cityName = ref('');

    const isRecipient = ref(false);

    watch(isRecipient, (value) => {
      if (value) {
        lastNameDelivery.value = lastName.value;
        firstNameDelivery.value = firstName.value;
        phoneNumDelivery.value = phoneNum.value;
      } else {
        lastNameDelivery.value = '';
        firstNameDelivery.value = '';
        phoneNumDelivery.value = '';
      }
    });

    onMounted(() => {});

    // PHONE NUMBERS CHECK

    const acceptNumber = (num) => {
      let x = num.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    };

    const onAcceptNumber = ({ target }) => {
      target.dataset.phoneBlock === 'contactBlock'
        ? (phoneNum.value = acceptNumber(phoneNum.value))
        : (phoneNumDelivery.value = acceptNumber(phoneNumDelivery.value));
    };

    // INPUTS VERIFYING

    const onVerifyAllInputs = () => {
      const inputs = document.querySelectorAll('.delivery input'),
        selects = document.querySelectorAll('.delivery select');
      let isValid = true;

      const validation = (item) => {
        let errorField = item.nextSibling;

        item.classList.remove('error');
        if (errorField.classList.contains('error-field')) {
          errorField.textContent = '';
        }

        if (!item.value) {
          item.classList.add('error');
          isValid = false;
          errorField.textContent = 'This field must be filled';
        } else if (item.classList.contains('error-num')) {
          isValid = false;
        }
      };

      Array.from(inputs).forEach((item) => {
        validation(item);
      });

      Array.from(selects).forEach((item) => {
        validation(item);
      });

      if (isValid) {
        setOrderDetails();
        router.push({ name: 'Order Confirmation' });
      }
    };

    const onVerifyNumber = ({ target }) => {
      let errorField = target.nextSibling;
      if (target.value.toString().length === 14) {
        target.classList.remove('error-num');
        errorField.textContent = '';
      } else {
        target.classList.add('error-num');
        errorField.textContent = 'Your number is not correct';
      }
    };

    const onValidateEmail = ({ target }) => {
      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      const errorField = target.nextSibling;

      if (!EMAIL_REGEXP.test(email.value) && email.value !== '') {
        errorField.textContent = 'Your e-mail is not correct';
        target.classList.add('error');
        console.log('into if');
      } else {
        errorField.textContent = '';
        target.classList.remove('error');
      }
    };

    // ORDER DETAILS

    const orderDetails = ref({
      firstName: '',
      lastName: '',
      phoneNum: '',
      deliveryType: '',
      email: '',

      mailDelivery: {
        lastNameDelivery: '',
        firstNameDelivery: '',
        phoneNumDelivery: '',

        branchNum: '',
        cityName: '',
      },
      pickupDelivery: {
        branchPickup: '',
      },
    });

    const setOrderDetails = () => {
      orderDetails.value.firstName = firstName.value;
      orderDetails.value.lastName = lastName.value;
      orderDetails.value.phoneNum = phoneNum.value;
      orderDetails.value.email = email.value;

      orderDetails.value.deliveryType = checkedDeliveryType.value;

      if (checkedDeliveryType.value === 'delivery-service') {
        orderDetails.value.mailDelivery.firstNameDelivery =
          firstNameDelivery.value;
        orderDetails.value.mailDelivery.lastNameDelivery =
          lastNameDelivery.value;
        orderDetails.value.mailDelivery.phoneNumDelivery =
          phoneNumDelivery.value;
        orderDetails.value.mailDelivery.branchNum = branchNum.value;
        orderDetails.value.mailDelivery.cityName = cityName.value;
      } else {
        orderDetails.value.pickupDelivery.branchPickup =
          checkedBranchPickup.value;
      }

      store.commit('setOrderDetails', orderDetails.value);

      let deliverySumPrice =
        checkedDeliveryType.value === 'delivery-service' ? 20 : 0;
      store.commit('setDeliveryPrice', deliverySumPrice);
    };

    return {
      checkedDeliveryType,
      checkedBranchPickup,

      lastName,
      firstName,
      phoneNum,
      email,

      lastNameDelivery,
      firstNameDelivery,
      phoneNumDelivery,
      branchNum,
      cityName,

      isRecipient,

      onAcceptNumber,
      onVerifyAllInputs,
      onVerifyNumber,
      onValidateEmail,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

h3 {
  color: $font-color;
}

.delivery-type,
.contact-info,
.recipient,
.branch,
.city,
.contact-info--inner {
  margin-bottom: 25px;
}

.delivery {
  &--container {
    display: flex;
    justify-content: space-between;
  }

  input[type='text'],
  input[type='email'] {
    margin-left: 0;
    width: 170px;
    margin-top: 8px;
  }

  label {
    display: block;
  }
}

.delivery--inner {
  width: 40%;
}

.contact-info--inner {
  display: flex;
  justify-content: space-between;

  input {
    margin-top: 8px;
  }
}

.recipient {
  display: flex;
  align-items: center;

  &--buttons {
    display: flex;

    button {
      border: none;
    }

    button:hover {
      background-color: $background-color;
      color: $accent-color;
    }
  }

  .active::after {
    content: '';

    display: block;
    height: 2px;
    width: inherit;
    background-color: $accent-color;
  }
}

select {
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;

  border: 2px solid $primary-color;
  border-radius: 0.25em;

  padding: 0.25em 0.5em;

  font-family: 'Lato', sans-serif;
  cursor: pointer;
  line-height: 1.1;

  background-image: linear-gradient(
    to top,
    $primary-color-light,
    $background-color 33%
  );
}

.vertical-line {
  height: inherit;
  width: 1px;
  background-color: lightgray;
}

.continue {
  margin-top: 40px;

  button {
    border-color: $primary-color;
    padding: 15px 30px;
  }

  button:focus {
    border-color: $accent-color;
    background-color: $accent-color-light;
  }
}

.go-back button {
  border: none;
}

.error {
  border-color: red;
}

.error-field {
  position: absolute;
  bottom: -15px;
  left: 0;

  color: red;
  font-size: 12px;
}

.position-relative {
  position: relative;
}

.google-map iframe {
  width: 100%;
  height: 300px;
}

.radio-button {
  display: flex;
  align-items: center;
  width: inherit;

  margin-bottom: 15px;

  input {
    display: none;
    cursor: pointer;
  }

  label {
    padding-left: 15px;
    cursor: pointer;
  }

  &--image {
    width: 15px;
    height: 15px;

    background-image: url('../../assets/icons/radio-buttons/non-active.png');
    background-size: contain;
  }

  &:hover &--image {
    background-image: url('../../assets/icons/radio-buttons/hover.png');
  }

  input[type='radio']:checked + &--image {
    background-image: url('../../assets/icons/radio-buttons/active.png');
  }

  &:hover input[type='radio']:checked + &--image {
    background-image: url('../../assets/icons/radio-buttons/active2.png');
  }
}
</style>
