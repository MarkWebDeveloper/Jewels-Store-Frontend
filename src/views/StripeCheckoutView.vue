<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { loadStripe, type StripeElement } from "@stripe/stripe-js";

import SrMessages from "@/components/payments/stripe/StripeMessages.vue";
import StripeService from "@/core/payments/stripe/StripeService";

const service = new StripeService();

const isLoading = ref(false);
const messages = ref([]);

let stripe;
let elements;

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
  // const { publishableKey } = await fetch("/api/config").then((res) => res.json());
  const publishableKey: string = import.meta.env.VITE_APP_STRIPE_PK
  stripe = await loadStripe(publishableKey);

  // const uri: string = import.meta.env.VITE_APP_API_STRIPE_PAYMENT

  // const clientSecret = await fetch(uri).then((res) => res.json());

  const clientSecret = (await service.post(cart)).clientSecret

 

  // if (backendError) {
  //   messages.value.push(backendError.message);
  // }
  // messages.value.push(`Client secret returned.`);

  elements = stripe.elements({clientSecret});
  const paymentElement = elements.create('payment');
  paymentElement.mount("#payment-element");
  const linkAuthenticationElement = elements.create("linkAuthentication");
  linkAuthenticationElement.mount("#link-authentication-element");
  isLoading.value = false;
});

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
  });

  if (error.type === "card_error" || error.type === "validation_error") {
    messages.value.push(error.message);
  } else {
    messages.value.push("An unexpected error occured.");
  }

  isLoading.value = false;
}
</script>
<template>
  <main>
    <h1>Payment</h1>

    <p>
      Enable more payment method types
      <a
        href="https://dashboard.stripe.com/settings/payment_methods"
        target="_blank"
      >in your dashboard</a>.
    </p>

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
      <sr-messages :messages="messages" />
    </form>
  </main>
</template>