# Introducing Nuxt Scripts

The Nuxt team, in collaboration with the [Chrome Aurora](https://developer.chrome.com/aurora){rel=""nofollow""} team at Google, is excited to announce the public beta release of [Nuxt Scripts](https://scripts.nuxt.com){rel=""nofollow""}.

Nuxt Scripts is a better way to work with third-party scripts, providing improved performance, privacy, security, and developer experience.

![Nuxt Scripts Banner](https://nuxt.com/assets/blog/nuxt-scripts/banner.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

## Getting to Nuxt Scripts

Over a year ago, Daniel published the initial [Nuxt Scripts RFC](https://github.com/nuxt/nuxt/discussions/22016){rel=""nofollow""}. The RFC proposed a module that would "allow third-party scripts to be managed and optimized, following best practices for performant and compliant websites".

Having [personal experience](https://github.com/harlan-zw/nuxt-delay-hydration){rel=""nofollow""} with solving performance issues related to third-party scripts, I knew how difficult these performance optimizations could be. Nonetheless, I was keen to tackle the problem and took over the project.

With the RFC as the seed of the idea, I started prototyping what it could [look like](https://github.com/nuxt/nuxt/discussions/22016#discussioncomment-6527001){rel=""nofollow""} using [Unhead](https://unhead.unjs.io/){rel=""nofollow""}.

Thinking about what I wanted to build exactly, I found that the real issue wasn't just how to load "optimized" third-party scripts but how to make working with third-party scripts a better experience overall.

## Why Build a Third-Party Script Module?

[94% of sites use at least one third-party provider](https://almanac.httparchive.org/en/2022/third-parties#prevalence){rel=""nofollow""}, with the average site having [five third-party providers](https://docs.google.com/spreadsheets/d/1YqoRRsyiNsrEabVLu2nRU98JIG_0zLLuoQhC2nX8xbM/edit?gid=1428106498#gid=1428106498){rel=""nofollow""}.

We know that third-party scripts aren't perfect; they [slow down the web](https://web.dev/articles/optimizing-content-efficiency-loading-third-party-javascript#){rel=""nofollow""}, cause privacy and security issues, and are a pain to work with.

However, they are fundamentally useful and aren't going anywhere soon.

By exploring the issues with third-party scripts, we can see where improvements can be made.

### 😒 Developer Experience: A Full-Stack Headache

Let's walk through adding a third-party script to your Nuxt app using a fictional `tracker.js` script that adds a `track` function to the window.

We start by loading the script using `useHead`.

```ts
useHead({ script: [{ src: '/tracker.js', defer: true }] })
```

However, let's now try to get the script functionality working in our app.

The following steps are common when working with third-party scripts in Nuxt:

- Everything has to be wrapped for SSR safety.
- Flaky checks for if the script has loaded.
- Augmenting the window object for types.

::code-group

```vue [1: SSR Safety]
<script setup>
// ❌ Oops, window is not defined! 
// 💡 The window can't be directly accessed if we use SSR in Nuxt.
// 👉 We need to make this SSR safe
window.track('page_view', useRoute().path)
</script>
```

```vue [2: Script Timing]
<script setup>
if (import.meta.client) {
  // ❌ Oops, the script hasn't finished loading yet!
  // 💡 A `defer` script may not be available while our Nuxt app hydrates.
  // 👉 We need to wait for the script to be loaded
  window.track('page_view', useRoute().path)
}
</script>
```

```vue [3: Broken types]
<script lang="ts" setup>
if (import.meta.client) {
  useTimeoutFn(() => {
    // ✅ It's working!
    // ❌ Oops, types are broken.
    // 💡 The `window` has strict types and nothing is defined yet.
    // 👉 We need to manually augment the window
    window.track('page_view', useRoute().path)
  }, 1000 /* should be loaded in 1 second!? */)
}
</script>
```

```vue [4: It works?]
<script lang="ts" setup>
declare global {
  interface Window {
    track: (e: string, p: string) => void
  }
}
if (import.meta.client) {
  useTimeoutFn(() => {
    // ✅ It's working and types are valid! 
    // ❌ Oops, ad-blockers, GDPR and duplicate scripts
    // 💡 There's a lot of hidden complexity in third-party scripts
    // 👉 We need a better API
    window.track('page_view', useRoute().path)
  }, 1000)
}
</script>
```

::

### 🐌 Performance: "Why can't I get 100 on Lighthouse?"

For a visitor to start interacting with your Nuxt site, the app bundle needs to be downloaded and Vue needs to hydrate the app instance.

Loading third-party scripts can interfere with this hydration process, even when using `async` or `defer`. This slows down the network and blocks the main thread, leading to a degraded user experience and poor [Core Web Vitals](https://web.dev/vitals/){rel=""nofollow""}.

The [Chrome User Experience Report](https://developer.chrome.com/docs/crux){rel=""nofollow""} shows Nuxt sites with numerous third-party resources typically have poorer [Interaction to Next Paint (INP)](https://web.dev/articles/inp){rel=""nofollow""} and [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp){rel=""nofollow""} scores.

To see how third-party scripts degrade performance, we can look at the [Web Almanac 2022](https://almanac.httparchive.org/en/2022/third-parties#impact-on-performance){rel=""nofollow""}. The report shows that the top 10 third-party scripts **average median blocking time is 1.4 seconds**.

### 🛡️ Privacy & Security: Do *no* evil?

Of the top 10,000 sites, 58% of them have third-party scripts that [exchange tracking IDs stored in external cookies](https://www3.cs.stonybrook.edu/~mikepo/papers/firstparty.www21.pdf){rel=""nofollow""}, meaning they can track users across sites even with third-party cookies disabled.

While in many cases our hands are tied with the providers we use, we should try to minimize the amount of our end-users' data that we're leaking where possible.

When we do take on the privacy implications, it can then be difficult to accurately convey these in our privacy policies and build the consent management required to comply with regulations such as GDPR.

Security when using third-party scripts is also a concern. Third-party scripts are common attack vectors for malicious actors, most do not provide `integrity` hashes for their scripts, meaning they can be compromised and inject malicious code into your app at any time.

## What does Nuxt Scripts do about these issues?

### Composable: useScript

This composable sits between the `<script>` tag and the functionality added to `window.{thirdPartyKey}`.

For the `<script>` tag, the composable:

- Gives full visibility into the script's loading and error states
- Loads scripts as Nuxt is hydrating the app by default, for slightly better performance.
- Restricts `crossorigin` and `referrerpolicy` to improve privacy and security.
- Provides a way to [delay loading the script](https://scripts.nuxt.com/docs/guides/script-triggers){rel=""nofollow""} until you need it.

For the scripts API, it:

- Provides full type-safety around the script's functions
- Adds a proxy layer allowing your app to run when the script functions in unsafe contexts (SSR, before the script is loaded, the script is blocked)

::code-group

```ts [hello.ts]
const { proxy, onLoaded } = useScript('/hello.js', {
  trigger: 'onNuxtReady',
  use() {
    return window.helloWorld
  }
})

onLoaded(({ greeting }) => {
  // ✅ script is loaded! Hooks into Vue lifecycle
})

// ✅ OR use the proxy API - SSR friendly, called when script is loaded
proxy.greeting() // Hello, World!

declare global {
  interface Window {
    helloWorld: {
      greeting: () => 'Hello World!'
    }
  }
}
```

```ts [hello.js]
window.helloWorld = {
  greeting() {
    console.log('Hello, World!')
  }
}
```

::

### Script Registry

The [script registry](https://scripts.nuxt.com/scripts){rel=""nofollow""} is a collection of first-party integrations for common third-party scripts. As of release, we support 21 scripts, with more to come.

![Nuxt Scripts Registry](https://nuxt.com/assets/blog/nuxt-scripts/registry.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

These registry scripts are fine-tuned wrappers around `useScript` with full type-safety, runtime validation of the script options (dev only) and environment variable support

For example, we can look at the [Fathom Analytics](https://scripts.nuxt.com/scripts/analytics/fathom-analytics){rel=""nofollow""} script.

```ts
const { proxy } = useScriptFathomAnalytics({
  // ✅ options are validated at runtime
  site: undefined
})
// ✅ typed
proxy.trackPageview()
```

### Facade Components

The registry includes several [facade components](https://scripts.nuxt.com/docs/guides/facade-components){rel=""nofollow""}, such as
[Google Maps](https://scripts.nuxt.com/scripts/content/google-maps){rel=""nofollow""}, [YouTube](https://scripts.nuxt.com/scripts/content/youtube-player){rel=""nofollow""} and [Intercom](https://scripts.nuxt.com/scripts/support/intercom){rel=""nofollow""}.

Facade components are "fake" components that get hydrated when the third-party script loads. Facade components
have trade-offs but can drastically improve your performance. See the [What are Facade Components?](https://scripts.nuxt.com/docs/guides/facade-components#what-are-facade-components){rel=""nofollow""}
guide for more information.

Nuxt Scripts provides facade components as accessible but headless, meaning they are not styled by default but add the necessary
a16y data.

::tabs
:::tabs-item{label="Output"}
:youtube-demo
:::

:::tabs-item{label="Input"}

```vue

const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()
function play() {
  video.value?.player.playVideo()
}
function stateChange(state) {
  isPlaying.value = state.data === 1
}



  
    
      
        
      
    
  

```

:::
::

### Consent Management & Element Event Triggers

The `useScript` composable gives you full control over how and when your scripts are loaded, by either providing a custom `trigger` or manually calling the `load()` function.

Building on top of this, Nuxt Scripts provides advanced triggers to make it even easier.

- [Consent Management](https://scripts.nuxt.com/docs/guides/consent){rel=""nofollow""} - Load scripts only after the user has given consent such as with a cookie banner.
- [Element Event Triggers](https://scripts.nuxt.com/docs/guides/script-triggers#element-event-triggers){rel=""nofollow""} - Load scripts based on user interactions such as scrolling, clicking, or form submissions.

```ts
const cookieConsentTrigger = useScriptTriggerConsent()
const { proxy } = useScript<{ greeting: () => void }>('/hello.js', {
  // script will only be loaded once the consent has been accepted
  trigger: cookieConsentTrigger
})
// ...
function acceptCookies() {
  cookieConsentTrigger.accept()
}
// greeting() is queued until the user accepts cookies
proxy.greeting()
```

### Bundling Scripts

In many cases, we're loading third-party scripts from a domain that we don't control. This can lead to a number of issues:

- Privacy: The third-party script can track users across sites.
- Security: The third-party script can be compromised and inject malicious code.
- Performance: Extra DNS lookups will slow down the page load.
- Developer Experience: Consented scripts may be blocked by ad blockers.

To mitigate this, Nuxt Scripts provides a way to bundle third-party scripts into your public directory without any extra work.

```ts
useScript('https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js', {
  bundle: true,
})
```

The script will now be served from `/_scripts/{hash}` on your own domain.

## To be continued

As we saw, there are many opportunities to improve third-party scripts for developers and end-users.

The initial release of Nuxt Scripts has solved *some* of these issues, but there's still a lot of work ahead of us.

The next items on the roadmap are:

- [Add web worker support (Partytown)](https://github.com/nuxt/scripts/issues/182){rel=""nofollow""}
- [More Live Chat Facade Components](https://github.com/nuxt/scripts/issues/44){rel=""nofollow""}
- [Offload Scripts To Nuxt Server Proxy](https://github.com/nuxt/scripts/issues/87){rel=""nofollow""}
- [Iframe Script Sandboxing](https://github.com/nuxt/scripts/issues/131){rel=""nofollow""}

We'd love to have your contribution and support.

## Getting started

To get started with Nuxt Scripts, we've created a [tutorial](https://scripts.nuxt.com/docs/getting-started/confetti-tutorial){rel=""nofollow""} to help you get up and running.

## Credits

- [Harlan Wilton - Nuxt](https://github.com/harlan-zw){rel=""nofollow""} (author)
- [Julien Huang - Nuxt](https://github.com/huang-julien){rel=""nofollow""} (contributor)
- [Daniel Roe - Nuxt](https://github.com/danielroe){rel=""nofollow""} (contributor)
- [Chrome Aurora - Google](https://developer.chrome.com/aurora){rel=""nofollow""} (contributor)

And a big thank you to the early contributors.

![Nuxt Scripts Contributors](https://nuxt.com/assets/blog/nuxt-scripts/contributors.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}
