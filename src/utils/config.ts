export const cvLink =
  process.env.NODE_ENV === 'production'
    ? 'https://hellberg-io.netlify.app/.netlify/functions/cv'
    : 'http://localhost:9999/.netlify/functions/cv'
