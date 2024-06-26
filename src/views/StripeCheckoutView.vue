<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { loadStripe, type Appearance, type Stripe, type StripeElements} from "@stripe/stripe-js";
import StripeService from "@/core/payments/stripe/StripeService";
import StripeMessages from "@/components/payments/stripe/StripeMessages.vue";

const service: StripeService = new StripeService()

const isLoading = ref(false)
const messages = ref<string[]>([])

let stripe: Stripe
let elements: StripeElements
let appearance: Appearance

const cart = reactive({
    "items": [
        {
            "id": 1,
            "productName": "Earring",
            "price": 1699
        },
        {
            "id": 2,
            "productName": "Necklace",
            "price": 3499
        }
    ]
})

onMounted(async () => {

  const publishableKey: string = import.meta.env.VITE_APP_STRIPE_PK
  stripe = (await loadStripe(publishableKey))!

  const clientSecret: string = (await service.post(cart)).clientSecret

  appearance = {
  theme: 'flat',
  variables: {
    fontFamily: ' "Gill Sans", sans-serif',
    fontLineHeight: '1.5',
    borderRadius: '10px',
    colorBackground: '#F6F8FA',
    accessibleColorOnColorPrimary: '#262626'
  },
  rules: {
    '.Block': {
      backgroundColor: 'var(--colorBackground)',
      boxShadow: 'none',
      padding: '12px'
    },
    '.Input': {
      padding: '12px'
    },
    '.Input:disabled, .Input--invalid:disabled': {
      color: 'lightgray'
    },
    '.Tab': {
      padding: '10px 12px 8px 12px',
      border: 'none'
    },
    '.Tab:hover': {
      border: 'none',
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
      border: 'none',
      backgroundColor: '#fff',
      boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Label': {
      fontWeight: '500',
    }
  }
}

  // if (backendError) {
  //   messages.value.push(backendError.message);
  // }
  // messages.value.push(`Client secret returned.`);

  elements = stripe?.elements({clientSecret, appearance});
  const paymentElement = elements.create('payment');
  paymentElement.mount("#payment-element");
  const linkAuthenticationElement = elements.create("linkAuthentication");
  linkAuthenticationElement.mount("#link-authentication-element");
  isLoading.value = false;
})

const handleSubmit = async (): Promise<void> => {
  if (isLoading.value) {
    return;
  }

  isLoading.value = true;

  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${window.location.origin}/return`
    }
  })

  if (error.type === "card_error" || error.type === "validation_error") {
    messages.value.push(error.message!);
  } else {
    messages.value.push("An unexpected error occured.");
  }

  isLoading.value = false;
}
</script>
<template>
  <main>
    <h1>Payment</h1>

    <form
      id="payment-form"
      @submit.prevent="handleSubmit"
    >
      <div id="link-authentication-element" />
      <div id="payment-element" />
      <button
        id="submit"
        :disabled="isLoading"
      >
        Pay now
      </button>
      <StripeMessages :messages="messages" />
    </form>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-family: "Alex Brush", cursive;
  font-size: 2rem;
  padding: 2%;
}
main {
  background-color: white;
  min-height: 100vh;
}

#payment-element, #link-authentication-element {
  width: 60%;
  margin: auto;
}

button {
  background-color: darkcyan;
  padding: 0.5rem;
  // border: 1px solid black;
  border-radius: 1rem;
  margin-left: 20%;
  margin-top: 2%;
  color: white;
}
</style>