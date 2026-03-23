# Add analytics to Sanity Studio

Sanity Studio is a React application, so you can't add `<script>` tags to its HTML `<head>` directly. This is true for both Sanity-hosted Studios (`*.sanity.studio`) and self-hosted deployments. Instead, you can use a React component that injects the script at runtime when the Studio loads.

This approach works with any analytics provider: Google Tag Manager, Google Analytics, Plausible, PostHog, Fathom, and others.

## Create an analytics component

Create a component that uses `useEffect` to inject a script tag into the document `<head>` when it mounts. The following example uses Google Tag Manager, but you can replace the script source and initialization logic with any provider.

**components/Analytics.tsx**

```typescript
import {useEffect} from 'react'

export function Analytics() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }
      gtag('js', new Date())
      gtag('config', 'G-XXXXXXX')
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
```

Replace `G-XXXXXXX` with your actual measurement ID. The component renders nothing visible (`return null`) and cleans up the script tag when it unmounts.

## Add the component to your Studio layout

Use the `studio.components.layout` override in your Studio configuration to mount the analytics component alongside the default layout.

**sanity.config.ts**

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {Analytics} from './components/Analytics'

export default defineConfig({
  name: 'default',
  title: 'My Studio',
  projectId: '<your-project-id>',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      layout: (props) => (
        <>
          <Analytics />
          {props.renderDefault(props)}
        </>
      ),
    },
  },
})
```

The `layout` component wraps the entire Studio. By rendering `<Analytics />` before `props.renderDefault(props)`, the analytics script loads once when the Studio initializes and persists across all navigation within the Studio.

> \[!NOTE]
> JSX in config files
> Because this configuration uses JSX, the file extension must be `.tsx` (or `.jsx`). If your config file currently uses `.ts`, rename it before adding the layout override.

## Deploy

Deploy your Studio as usual. If you use Sanity-hosted deployments, run `npx sanity deploy`. The script injection happens in the browser at runtime, so no changes to the hosting configuration are needed.

Open the deployed Studio and verify that your analytics provider is receiving events. In Google Tag Manager, you can check the Tag Assistant or real-time reports to confirm the script is active.

## Using environment variables

To avoid hardcoding your measurement ID, use an environment variable. Sanity Studio supports environment variables prefixed with `SANITY_STUDIO_` which are embedded at build time.

```typescript
// components/Analytics.tsx
import {useEffect} from 'react'

const measurementId = process.env.SANITY_STUDIO_GTAG_ID

export function Analytics() {
  useEffect(() => {
    if (!measurementId) return

    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }
      gtag('js', new Date())
      gtag('config', measurementId)
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
```

Add the variable to your `.env` file:

```bash
SANITY_STUDIO_GTAG_ID=G-XXXXXXX
```

With this approach, the analytics script will only load when the environment variable is set. This lets you skip analytics in local development while keeping it active in deployed environments.
