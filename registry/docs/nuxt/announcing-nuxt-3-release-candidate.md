# Announcing Nuxt 3 Release Candidate

We are excited to open source Nuxt 3 after more than a year of intense development. The repository is available on GitHub on [nuxt/nuxt](https://go.nuxt.com/github){rel=""nofollow""} under the [MIT](https://go.nuxt.com/license){rel=""nofollow""} license.

::tip
The documentation is available on <https://nuxt.com>{rel=""nofollow""}.
::

## A new foundation

On top of supporting [Vue 3](https://vuejs.org){rel=""nofollow""} or [Vite](https://vitejs.dev){rel=""nofollow""}, Nuxt 3 contains a new [server engine](https://nuxt.com/docs/guide/concepts/server-engine){rel=""nofollow""}, unlocking new full-stack capabilities to Nuxt server and beyond. It's the first JavaScript application server that is portable across a variety of modern cloud hosting providers.

In production, it builds your Vue application and server into one universal `.output` directory. This output is light: minified and without any other Node.js dependencies (except polyfills). You can deploy this output on any system supporting JavaScript, whether Node.js, Serverless, Workers, Edge-side rendering or purely static.

**Bonus:** this server engine can be used on existing Nuxt 2 projects with [Nuxt Bridge](https://nuxt.com/docs/getting-started/bridge){rel=""nofollow""} 🚀

Head over the [Nuxt 3 homepage](https://nuxt.com){rel=""nofollow""} to learn more about Nuxt Nitro and Nuxt Bridge.

## Important notes

Nuxt 3 is currently in beta, so expect things to break (and be fixed quickly). We have [plenty of work left](https://github.com/nuxt/nuxt/issues){rel=""nofollow""} but we want to open it publicly to gather feedback and contributions from the community 💚

**Do not use it for production until we reach the first release candidate.**

During the beta, almost every commit will [trigger a new npm release](https://github.com/nuxt/nuxt/blob/main/.github/workflows/ci.yml#L111-L119){rel=""nofollow""}; you may want to look at the [merged pull requests](https://github.com/nuxt/nuxt/pulls?q=is%3Apr+is%3Amerged){rel=""nofollow""} until we begin generating automated changelogs in the documentation.

We are working every day to improve the documentation, explaining as much as possible all the concepts, features and usage of Nuxt 3.

Check out the community section of the Nuxt 3 website for [getting help](https://nuxt.com/docs/community/getting-help){rel=""nofollow""}, [reporting bugs](https://nuxt.com/docs/community/reporting-bugs){rel=""nofollow""} or [contributing to the framework](https://nuxt.com/docs/community/contribution){rel=""nofollow""}.

## Timeline

Here some major milestones we've achieved on the way to Nuxt 3:

- **Jul 2, 2020**: Nuxt 3 first commit with full TypeScript rewrite
- **Aug 7, 2020**: Webpack 5 support
- **Sep 15, 2020**: [`pages/`](https://nuxt.com/docs/guide/directory-structure/pages){rel=""nofollow""} support
- **Oct 29, 2020**: [Vue 3](https://vuejs.org){rel=""nofollow""} support with bundle-renderer
- **Nov 2, 2020**: [Nuxt Nitro](https://nuxt.com/guide/concepts/server-engine){rel=""nofollow""} initial work
- **Jan 22, 2021**: Initial [Vite](https://vitejs.dev){rel=""nofollow""} support
- **Feb 4, 2021**: Nuxt can deploy on [major serverless platforms](https://nuxt.com/docs/getting-started/deployment){rel=""nofollow""}
- **Mar 6, 2021**: [UnJS](https://github.com/unjs){rel=""nofollow""} organisation created on GitHub
- **Mar 28, 2021**: Init Nuxt Kit and Nuxt CLI ([nuxi](https://nuxt.com/docs/api/commands/add){rel=""nofollow""})
- **May 20, 2021**: [`app.vue`](https://nuxt.com/docs/guide/directory-structure/app){rel=""nofollow""} support (`pages/` becomes optional)
- **Jun 30, 2021**: [`layouts/`](https://nuxt.com/docs/guide/directory-structure/layouts){rel=""nofollow""} support
- **Jul 15, 2021**: Native ESM support
- **Aug 10, 2021**: Auto import of composables and components
- **Sep 5, 2021**: Init [Nuxt Bridge](https://nuxt.com/docs/bridge/overview){rel=""nofollow""} for improving Nuxt 2 experience
- **Sep 7, 2021**: Support Vite build for production
- **Oct 11, 2021**: Add [`useState`](https://nuxt.com/docs/getting-started/state-management){rel=""nofollow""} and [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch){rel=""nofollow""} composables

So far, we've merged [385 pull requests](https://github.com/nuxt/nuxt/pulls?q=is%3Apr+is%3Amerged){rel=""nofollow""}, closed [229 issues](https://github.com/nuxt/nuxt/issues?q=is%3Aissue+is%3Aclosed){rel=""nofollow""} and made [925+ commits](https://github.com/nuxt/nuxt/commits/main){rel=""nofollow""}.

We are excited to hear your thoughts and we thank you for your patience.

Now you can go over the [Nuxt 3 documentation](https://nuxt.com){rel=""nofollow""} 😊

Don't forget to follow us on [Twitter](https://x.com/nuxt_js){rel=""nofollow""} to get the latest news about Nuxt!
