export default function manifest() {
  return {
    name: 'Giggle Charisma',
    short_name: 'Giggle',
    description:
      'Create bold, hilarious memes in seconds. Giggle Charisma is your meme-making sidekick built with Next.js, React, and unstoppable charisma.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff6e0',
    theme_color: '#ffcc00',
    icons: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
      {
        rel: 'android-chrome-icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  };
}
