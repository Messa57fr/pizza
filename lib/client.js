import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url'
export const client = sanityClient({
  projectId: "l7ei6hag",
  dataset: 'production',
  apiVersion: "2022-07-16",
  useCdn: true,
  token: "skcn7TEogTyNXIfNUciZTjCC18dIRfep2zLGLe6UzawTZVfrRnhAd8BunojwOSrmGei6stQSIsw8f9wLsX9WvopXUQLKK2z14QXd45JEiVbCmXASVFwkB66hgUHTov7Z5vOOqGvxvUKyeZAt6Jqwi1OKEi6pMaJrDjRyFprcoDCkK1uKDpQO"
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)
