# Fonts

The [`next/font`](/docs/app/api-reference/components/font) module automatically optimizes your fonts and removes external network requests for improved privacy and performance.

It includes **built-in self-hosting** for any font file. This means you can optimally load web fonts with no layout shift.

To start using `next/font`, import it from [`next/font/local`](#local-fonts) or [`next/font/google`](#google-fonts), call it as a function with the appropriate options, and set the `className` of the element you want to apply the font to. For example, you can apply fonts globally in your [Custom App](/docs/pages/building-your-application/routing/custom-app) (`pages/_app`):

```tsx filename="pages/_app.tsx" highlight={1,4-6,10} switcher
import { Geist } from 'next/font/google'
import type { AppProps } from 'next/app'

const geist = Geist({
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

```jsx filename="pages/_app.js" highlight={1,3-5,9} switcher
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

If you want to apply the font to the `<html>` element, you can use a [Custom Document](/docs/pages/building-your-application/routing/custom-document) (`pages/_document`):

```tsx filename="pages/_document.tsx" highlight={2,4-6,10} switcher
import { Html, Head, Main, NextScript } from 'next/document'
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function Document() {
  return (
    <Html lang="en" className={geist.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

```jsx filename="pages/_document.js" highlight={2,4-6,10} switcher
import { Html, Head, Main, NextScript } from 'next/document'
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function Document() {
  return (
    <Html lang="en" className={geist.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

## Google fonts

You can automatically self-host any Google Font. Fonts are included stored as static assets and served from the same domain as your deployment, meaning no requests are sent to Google by the browser when the user visits your site.

To start using a Google Font, import your chosen font from `next/font/google`:

```tsx filename="pages/_app.tsx" switcher
import { Geist } from 'next/font/google'
import type { AppProps } from 'next/app'

const geist = Geist({
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

```jsx filename="pages/_app.js" switcher
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

We recommend using [variable fonts](https://fonts.google.com/variablefonts) for the best performance and flexibility. But if you can't use a variable font, you will need to specify a weight:

```tsx filename="pages/_app.tsx" highlight={5} switcher
import { Roboto } from 'next/font/google'
import type { AppProps } from 'next/app'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

```jsx filename="pages/_app.js" highlight={4} switcher
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

## Local fonts

To use a local font, import your font from `next/font/local` and specify the [`src`](/docs/pages/api-reference/components/font#src) of your local font file. Fonts can be stored in the [`public`](/docs/pages/api-reference/file-conventions/public-folder) folder or inside the `pages` folder. For example:

```tsx filename="pages/_app.tsx" switcher
import localFont from 'next/font/local'
import type { AppProps } from 'next/app'

const myFont = localFont({
  src: './my-font.woff2',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

```jsx filename="pages/_app.js" switcher
import localFont from 'next/font/local'

const myFont = localFont({
  src: './my-font.woff2',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

If you want to use multiple files for a single font family, `src` can be an array:

```js
const roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})
```

## API Reference

See the API Reference for the full feature set of Next.js Font

- [Font](/docs/app/api-reference/components/font)
  - Optimizing loading web fonts with the built-in `next/font` loaders.

# CSS
