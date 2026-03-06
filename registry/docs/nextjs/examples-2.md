## Examples

### Styling images

Styling the Image component is similar to styling a normal `<img>` element, but there are a few guidelines to keep in mind:

Use `className` or `style`, not `styled-jsx`. In most cases, we recommend using the `className` prop. This can be an imported [CSS Module](/docs/app/getting-started/css), a [global stylesheet](/docs/app/getting-started/css#global-css), etc.

```jsx
import styles from './styles.module.css'

export default function MyImage() {
  return <Image className={styles.image} src="/my-image.png" alt="My Image" />
}
```

You can also use the `style` prop to assign inline styles.

```jsx
export default function MyImage() {
  return (
    <Image style={{ borderRadius: '8px' }} src="/my-image.png" alt="My Image" />
  )
}
```

When using `fill`, the parent element must have `position: relative` or `display: block`. This is necessary for the proper rendering of the image element in that layout mode.

```jsx
<div style={{ position: 'relative' }}>
  <Image fill src="/my-image.png" alt="My Image" />
</div>
```

You cannot use [styled-jsx](/docs/app/guides/css-in-js) because it's scoped to the current component (unless you mark the style as `global`).

### Responsive images with a static export

When you import a static image, Next.js automatically sets its width and height based on the file. You can make the image responsive by setting the style:

![Responsive image filling the width and height of its parent container](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/responsive-image.png)

```jsx
import Image from 'next/image'
import mountains from '../public/mountains.jpg'

export default function Responsive() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt="Mountains"
        // Importing an image will
        // automatically set the width and height
        src={mountains}
        sizes="100vw"
        // Make the image display full width
        // and preserve its aspect ratio
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}
```

### Responsive images with a remote URL

If the source image is a dynamic or a remote URL, you must provide the width and height props so Next.js can calculate the aspect ratio:

```jsx filename="components/page.js"
import Image from 'next/image'

export default function Page({ photoUrl }) {
  return (
    <Image
      src={photoUrl}
      alt="Picture of the author"
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    />
  )
}
```

Try it out:

- [Demo the image responsive to viewport](https://image-component.nextjs.gallery/responsive)

### Responsive image with `fill`

If you don't know the aspect ratio of the image, you can add the [`fill` prop](#fill) with the `objectFit` prop set to `cover`. This will make the image fill the full width of its parent container.

![Grid of images filling parent container width](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/fill-container.png)

```jsx
import Image from 'next/image'
import mountains from '../public/mountains.jpg'

export default function Fill() {
  return (
    <div
      style={{
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))',
      }}
    >
      <div style={{ position: 'relative', width: '400px' }}>
        <Image
          alt="Mountains"
          src={mountains}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />
      </div>
      {/* And more images in the grid... */}
    </div>
  )
}
```

### Background Image

Use the `fill` prop to make the image cover the entire screen area:

![Background image taking full width and height of page](https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/docs/light/background-image.png)

```jsx
import Image from 'next/image'
import mountains from '../public/mountains.jpg'

export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}
```

For examples of the Image component used with the various styles, see the [Image Component Demo](https://image-component.nextjs.gallery).

### Remote images

To use a remote image, the `src` property should be a URL string.

```jsx filename="app/page.js"
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
```

Since Next.js does not have access to remote files during the build process, you'll need to provide the [`width`](/docs/app/api-reference/components/image#width-and-height), [`height`](/docs/app/api-reference/components/image#width-and-height) and optional [`blurDataURL`](/docs/app/api-reference/components/image#blurdataurl) props manually.

The `width` and `height` attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The `width` and `height` do *not* determine the rendered size of the image file.

To safely allow optimizing images, define a list of supported URL patterns in `next.config.js`. Be as specific as possible to prevent malicious usage. For example, the following configuration will only allow images from a specific AWS S3 bucket:

```js filename="next.config.js"
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
        search: '',
      },
    ],
  },
}
```

### Theme detection

If you want to display a different image for light and dark mode, you can create a new component that wraps two `<Image>` components and reveals the correct one based on a CSS media query.

```css filename="components/theme-image.module.css"
.imgDark {
  display: none;
}

@media (prefers-color-scheme: dark) {
  .imgLight {
    display: none;
  }
  .imgDark {
    display: unset;
  }
}
```

```tsx filename="components/theme-image.tsx" switcher
import styles from './theme-image.module.css'
import Image, { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'src' | 'preload' | 'loading'> & {
  srcLight: string
  srcDark: string
}

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest} src={srcLight} className={styles.imgLight} />
      <Image {...rest} src={srcDark} className={styles.imgDark} />
    </>
  )
}
```

```jsx filename="components/theme-image.js" switcher
import styles from './theme-image.module.css'
import Image from 'next/image'

const ThemeImage = (props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest} src={srcLight} className={styles.imgLight} />
      <Image {...rest} src={srcDark} className={styles.imgDark} />
    </>
  )
}
```

> **Good to know**: The default behavior of `loading="lazy"` ensures that only the correct image is loaded. You cannot use `preload` or `loading="eager"` because that would cause both images to load. Instead, you can use [`fetchPriority="high"`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/fetchPriority).

Try it out:

- [Demo light/dark mode theme detection](https://image-component.nextjs.gallery/theme)

### Art direction

If you want to display a different image for mobile and desktop, sometimes called [Art Direction](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#art_direction), you can provide different `src`, `width`, `height`, and `quality` props to `getImageProps()`.

```jsx filename="app/page.js"
import { getImageProps } from 'next/image'

export default function Home() {
  const common = { alt: 'Art Direction Example', sizes: '100vw' }
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 80,
    src: '/desktop.jpg',
  })
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 70,
    src: '/mobile.jpg',
  })

  return (
    <picture>
      <source media="(min-width: 1000px)" srcSet={desktop} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img {...rest} style={{ width: '100%', height: 'auto' }} />
    </picture>
  )
}
```

### Background CSS

You can even convert the `srcSet` string to the [`image-set()`](https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set) CSS function to optimize a background image.

```jsx filename="app/page.js"
import { getImageProps } from 'next/image'

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({ alt: '', width: 128, height: 128, src: '/img.png' })
  const backgroundImage = getBackgroundImage(srcSet)
  const style = { height: '100vh', width: '100vw', backgroundImage }

  return (
    <main style={style}>
      <h1>Hello World</h1>
    </main>
  )
}
```
