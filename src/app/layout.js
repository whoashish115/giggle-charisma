import Layout from "../components/layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
};

export const metadata = {
  title: {
    template: '%s | Giggle Charisma - Meme Maker for the Bold',
    default: 'Giggle Charisma',
  },
  description:
    'Giggle Charisma is your go-to meme maker for chaos, charm, and charisma. Cook up bold, witty memes with style and zero effort using modern tech and killer UI.',
  keywords: [
    'meme maker',
    'funny memes',
    'GIFs',
    'internet culture',
    'meme generator',
    'React',
    'Next.js',
    'meme editor',
    'instant meme',
    'Giggle Charisma',
  ],
  authors: [{ name: 'Giggle Charisma Team' }],
  creator: 'Giggle Charisma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gigglecharisma.vercel.app',
    title: 'Giggle Charisma',
    description:
      'Unleash your sarcasm and creativity with Giggle Charisma – the meme generator for unapologetically funny humans. Built with Next.js & good vibes.',
    images: [
      {
        url: 'https://gigglecharisma.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Giggle Charisma Meme Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giggle Charisma',
    description:
      'Meme like a legend. Giggle Charisma is your meme generator built with modern tools like React, Next.js, and chaos.',
    images: ['https://gigglecharisma.vercel.app/og-image.png'],
    creator: '@GiggleCharisma',
  },
  metadataBase: new URL('https://gigglecharisma.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
