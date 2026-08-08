import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  seeker_pro: "price_1TgRpvLRXVRq2oOW7CXJ6DbA",
  seeker_premium: "price_1TgTvYLRXVRq2oOWPqWyQboP",
  recruiter_enterprise: "price_1TgTxgLRXVRq2oOWzigqQoA7",
  recruiter_growth: "price_1TgTvvLRXVRq2oOWKgZ1fcdk"
};
