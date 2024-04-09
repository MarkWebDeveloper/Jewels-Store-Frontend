// stripe.js
import { loadStripe } from '@stripe/stripe-js';

const stripePK: string = import.meta.env.VITE_APP_STRIPE_PK

const stripePromise = loadStripe(stripePK);
export default stripePromise;