<template>
  <div class="delivery">
    <h2>Delivery</h2>

    <form @submit.prevent="onSubmit">
      <div class="delivery--container">
        <div class="delivery--inner">
          <div class="contact-info">
            <h3>Your contacts</h3>
            <div class="contact-info--inner">
              <div class="position-relative">
                <BaseInput
                  type="text"
                  id="first-name"
                  label="First name"
                  placeholder="Peter"
                  class="input-style"
                  data-option="firstName"
                  v-model.trim="firstName.value"
                  :error="firstName.error"
                  @change="checkOnEmpty"
                  isVertical
                />
              </div>
              <div class="position-relative">
                <BaseInput
                  type="text"
                  id="last-name"
                  placeholder="Parker"
                  label="Last name"
                  class="input-style"
                  data-option="lastName"
                  v-model.trim="lastName.value"
                  :error="lastName.error"
                  @change="checkOnEmpty"
                  isVertical
                />
              </div>
            </div>
            <div class="contact-info--inner">
              <div class="phone-number position-relative">
                <BaseInput
                  type="tel"
                  id="phone-number"
                  placeholder="(111) 111-1111"
                  data-phone-block="contactBlock"
                  class="input-style"
                  v-model="phoneNum.value"
                  :error="phoneNum.error"
                  label="Phone number"
                  @change="onVerifyNumber"
                  @input="onAcceptNumber"
                  eventType="input"
                  isVertical
                />
              </div>
              <div class="email position-relative">
                <BaseInput
                  type="email"
                  id="email"
                  v-model.trim="email.value"
                  :error="email.error"
                  label="E-mail"
                  placeholder="yourmail@mail.com"
                  @change="onValidateEmail"
                  class="input-style"
                  isVertical
                />
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

            <div
              v-show="checkedBranchPickup === 'dream-town'"
              class="google-map"
            >
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
              <BaseSelect
                id="city"
                v-model="cityNameDelivery.value"
                :error="cityNameDelivery.error"
                disableOption="Choose your city"
                :options="['Kyiv', 'Odessa', 'Lviv', 'Kharkiv']"
                data-option="cityNameDelivery"
                @change="checkOnEmpty"
              />
            </div>
            <div class="branch position-relative">
              <h3>Branch number</h3>
              <BaseSelect
                id="branch"
                v-model="branchNumDelivery.value"
                :error="branchNumDelivery.error"
                disableOption="Select branch number"
                :options="[1, 2, 3, 4]"
                data-option="branchNumDelivery"
                @change="checkOnEmpty"
              />
            </div>

            <div class="recipient">
              <div>Are you the recipient?</div>
              <div class="recipient--buttons">
                <button
                  type="button"
                  @click="isRecipient = true"
                  :class="{ active: isRecipient }"
                >
                  Yes
                </button>
                <button
                  type="button"
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
                  <BaseInput
                    type="text"
                    id="first-name"
                    label="First name"
                    placeholder="Peter"
                    class="input-style"
                    v-model.trim="firstNameDelivery.value"
                    :error="firstNameDelivery.error"
                    @change="checkOnEmpty"
                    data-option="firstNameDelivery"
                    isVertical
                  />
                </div>
                <div class="contact-delivery--item position-relative">
                  <BaseInput
                    type="text"
                    id="last-name"
                    label="Last name"
                    placeholder="Parker"
                    class="input-style"
                    v-model.trim="lastNameDelivery.value"
                    :error="lastNameDelivery.error"
                    @change="checkOnEmpty"
                    data-option="lastNameDelivery"
                    isVertical
                  />
                </div>
              </div>

              <div class="phone-number position-relative">
                <BaseInput
                  type="tel"
                  id="phone-number"
                  label="Phone number"
                  placeholder="(111) 111-1111"
                  data-phone-block="deliveryBlock"
                  class="input-style"
                  v-model="phoneNumDelivery.value"
                  :error="phoneNumDelivery.error"
                  @change="onVerifyNumber"
                  @input="onAcceptNumberDelivery"
                  eventType="input"
                />
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
            <button type="submit">
              Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BaseInput from '@/components/base_elements/BaseInput.vue';
import BaseSelect from '@/components/base_elements/BaseSelect.vue';

export default {
  components: {
    BaseInput,
    BaseSelect,
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    const checkedDeliveryType = ref(''),
      checkedBranchPickup = ref('khreschatik');

    const lastName = reactive({
        value: '',
        error: '',
      }),
      firstName = reactive({
        value: '',
        error: '',
      }),
      phoneNum = reactive({
        value: '',
        error: '',
      }),
      email = reactive({
        value: '',
        error: '',
      });

    const lastNameDelivery = reactive({
        value: '',
        error: '',
      }),
      firstNameDelivery = reactive({
        value: '',
        error: '',
      }),
      phoneNumDelivery = reactive({
        value: '',
        error: '',
      }),
      branchNumDelivery = reactive({
        value: '',
        error: '',
      }),
      cityNameDelivery = reactive({
        value: '',
        error: '',
      });

    const userData = reactive({
      lastName,
      firstName,
      phoneNum,
      email,

      lastNameDelivery,
      firstNameDelivery,
      phoneNumDelivery,
      branchNumDelivery,
      cityNameDelivery,
    });

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

    // GENERAL CHECK

    const checkOnEmpty = ({ target }) => {
      userData[target.dataset.option].value === ''
        ? (userData[target.dataset.option].error = 'This field is required')
        : (userData[target.dataset.option].error = '');
    };

    // PHONE NUMBERS CHECK

    const acceptNumber = (num) => {
      let x = num.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    };

    const onAcceptNumber = ({ target }) => {
      phoneNum.value = acceptNumber(phoneNum.value);
      target.value = phoneNum.value;
    };

    const onAcceptNumberDelivery = ({ target }) => {
      phoneNumDelivery.value = acceptNumber(phoneNumDelivery.value);
      target.value = phoneNumDelivery.value;
    };

    // INPUTS VERIFYING

    const onSubmit = () => {
      let isValid = true;

      for (let item in userData) {
        if (
          checkedDeliveryType.value !== 'delivery-service' &&
          item.includes('Delivery')
        ) {
          continue;
        }

        if (userData[item].value === '') {
          userData[item].error = 'This field is required';
          isValid = false;
        } else if (userData[item]?.error) {
          userData[item].error = '';
        }

        if (userData[item].error) {
          isValid = false;
        }
      }

      if (isValid) {
        setOrderDetails();
        router.push({ name: 'Order Confirmation' });
      }
    };

    const onVerifyNumber = () => {
      if (phoneNum.value.toString().length !== 14) {
        phoneNum.error = 'Your number is not correct';
      } else {
        phoneNum.error = '';
      }
    };

    const onValidateEmail = () => {
      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

      if (!EMAIL_REGEXP.test(email.value) && email.value !== '') {
        email.error = 'Your e-mail is not correct';
      } else {
        email.error = '';
      }
    };

    // ORDER DETAILS

    const orderDetails = reactive({
      firstName: '',
      lastName: '',
      phoneNum: '',
      deliveryType: '',
      email: '',

      mailDelivery: {
        lastNameDelivery: '',
        firstNameDelivery: '',
        phoneNumDelivery: '',

        branchNumDelivery: '',
        cityNameDelivery: '',
      },
      pickupDelivery: {
        branchPickup: '',
      },
    });

    const setOrderDetails = () => {
      orderDetails.firstName = firstName.value;
      orderDetails.lastName = lastName.value;
      orderDetails.phoneNum = phoneNum.value;
      orderDetails.email = email.value;

      orderDetails.deliveryType = checkedDeliveryType.value;

      if (checkedDeliveryType.value === 'delivery-service') {
        orderDetails.mailDelivery.firstNameDelivery = firstNameDelivery.value;
        orderDetails.mailDelivery.lastNameDelivery = lastNameDelivery.value;
        orderDetails.mailDelivery.phoneNumDelivery = phoneNumDelivery.value;
        orderDetails.mailDelivery.branchNumDelivery = branchNumDelivery.value;
        orderDetails.mailDelivery.cityNameDelivery = cityNameDelivery.value;
      } else {
        orderDetails.pickupDelivery.branchPickup = checkedBranchPickup.value;
      }

      store.commit('setOrderDetails', orderDetails);

      let deliverySumPrice =
        checkedDeliveryType.value === 'delivery-service' ? 20 : 0;
      store.commit('setDeliveryPrice', deliverySumPrice);
    };

    return {
      userData,

      checkedDeliveryType,
      checkedBranchPickup,

      lastName,
      firstName,
      phoneNum,
      email,

      lastNameDelivery,
      firstNameDelivery,
      phoneNumDelivery,
      branchNumDelivery,
      cityNameDelivery,

      isRecipient,

      onSubmit,
      onVerifyNumber,
      onValidateEmail,
      onAcceptNumber,
      onAcceptNumberDelivery,
      checkOnEmpty,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

h3 {
  font-size: 18px;
  color: $green-color;
}

form {
  margin-bottom: 55px;
}

.delivery-type,
.contact-info,
.recipient,
.branch,
.city,
.contact-info--inner {
  margin-bottom: 25px;

  @include media('<=788px') {
    margin-bottom: 35px;
  }
}

.delivery {
  &--container {
    display: flex;
    justify-content: space-between;

    @include media('<=788px') {
      flex-direction: column;
    }
  }
}

.delivery--inner {
  width: 40%;

  @include media('<=788px') {
    width: 100%;
  }
}

.contact-info--inner {
  display: flex;
  justify-content: space-between;

  @include media('<=360px') {
    flex-direction: column;
    margin-bottom: 0;
  }
}

.position-relative {
  @include media('<=360px') {
    margin-bottom: 25px;
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
    background-color: $orange-color;
  }
}

.vertical-line {
  height: inherit;
  width: 1px;
  background-color: lightgray;
}

.continue {
  margin-top: 40px;

  @include media('<=788px') {
    display: flex;
    justify-content: center;
  }

  button {
    border-color: $primary-color;
    padding: 15px 30px;
  }

  button:focus {
    border-color: $accent-color;
    background-color: $accent-color-light;
  }
}

.google-map iframe {
  width: 100%;
  height: 300px;

  @include media('<=788px') {
    margin-top: 25px;
  }
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

<style lang="scss">
@import '@/style/variables.scss';
@import '@/style/media/breakpoints.scss';

.input-style {
  margin-left: 0;
  min-width: 170px;
  margin-top: 8px;

  @include media('<=930px', '>788px') {
    min-width: 140px;
  }

  @include media('<=788px', '>630px') {
    min-width: 270px;
  }

  @include media('<=630px', '>360px') {
    min-width: 150px;
  }

  @include media('<=360px') {
    min-width: 100%;
  }
}
</style>
