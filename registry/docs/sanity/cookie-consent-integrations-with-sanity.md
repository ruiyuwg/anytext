# Cookie consent integrations with Sanity

This guide explains how to integrate cookie consent management with a Sanity-powered website. We'll cover how to implement a cookie banner that operates on the frontend layer while keeping your Sanity content management workflow intact.

Popular cookie consent management platforms like CookieYes, Cookiebot, or OneTrust provide ready-to-use solutions that can be easily integrated into any frontend framework that displays your Sanity content. These solutions offer customizable banners, consent tracking, and compliance with major privacy regulations.

\*\*Cookie banners operate entirely on the frontend layer, so you'll need to implement the banner in your frontend framework of choice that consumes the Sanity content, rather than within Sanity itself. \*\*

While Sanity serves as your content management system and handles your content in the backend, cookie consent management happens in the browser where user interactions take place. This separation means you can implement any cookie consent solution alongside your Sanity-powered website without affecting your content management workflow.

## How to Add a Cookie Banner

We are going to use the Next.js frontend framework, but you can use any other modern frontend framework like React, Vue.js, or Angular to implement the cookie consent banner. The key is to follow the specific installation guidelines provided by your chosen cookie consent platform for your particular framework. The implementation process will be similar across frameworks, typically involving adding a script tag or component to your application's main template or `layout` file.

- Obtain your unique banner code that will be used in the Next.js implementation process. We will be using [Cookiebot](https://www.cookiebot.com/) but you can also use other popular solutions like CookieYes or OneTrust.
  Once you register your domain with Cookiebot, it will give you a script like this:

```javascript
<script id="usercentrics-cmp" src="https://web.cmp.usercentrics.eu/ui/loader.js" data-settings-id="YOUR-UNIQUE-ID" async></script>
```

- Replace `"YOUR-UNIQUE-ID"` with the actual **id** from Cookiebot.
- Install the cookie banner code by following the version-specific guidelines:
- For Next.js 13 and above: Add the cookie banner script to the **Root** `layout.tsx` file within the `<head></head>` HTML tag. Make sure it is placed before any third-party script that requires user consent.

```typescript
export default async function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
      <script id="usercentrics-cmp" src="https://web.cmp.usercentrics.eu/ui/loader.js" data-settings-id="0wSYESNlZz7kJj" async></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

- Verify the installation by checking if the cookie banner appears on your website and using the verification tool provided by your cookie consent service. If verification fails, check your implementation code and console for errors.
- Depending on the platform you're using, you can customize various aspects of your cookie banner including: appearance and layout, banner position, color schemes and branding, consent categories and descriptions, language localization, button text and behavior, privacy policy links, and cookie scanning settings.
