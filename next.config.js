module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],
  },
  // Just for public keys
  env: {
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
  },
};
