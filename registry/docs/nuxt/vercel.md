# Vercel

::tip
**Zero Configuration ✨**

:br

Integration with Vercel is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel=""nofollow""}.
::

## Deploy using Git

1. Push your code to your git repository (GitHub, GitLab, Bitbucket).
2. [Import your project](https://vercel.com/new){rel=""nofollow""} into Vercel.
3. Vercel will detect that you are using Nitro and will enable the correct settings for your deployment.
4. Your application is deployed!

After your project has been imported and deployed, all subsequent pushes to branches will generate [Preview Deployments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production){rel=""nofollow""}, and all changes made to the Production Branch (commonly “main”) will result in a [Production Deployment](https://vercel.com/docs/deployments/environments#production-environment){rel=""nofollow""}.

Learn more about Vercel’s [Git Integration](https://vercel.com/docs/git){rel=""nofollow""}.

## Custom Build Output Configuration

You can provide additional [build output configuration](https://vercel.com/docs/build-output-api){rel=""nofollow""} using `nitro.vercel.config` key inside `nuxt.config.ts`. It will be merged with built-in auto generated config.

## Templates

::card-group
:::card
-------

ui:
icon:
base: text-black dark:text-white
icon: i-simple-icons-github
target: \_blank
title: Nuxt Vercel ISR
to: https://github.com/danielroe/nuxt-vercel-isr
------------------------------------------------

Example of a Nuxt application with hybrid rendering deployed on Vercel.
:::

## :::card

ui:
icon:
base: text-black dark:text-white
icon: i-simple-icons-github
target: \_blank
title: Nuxt on the Edge on Vercel
to: https://github.com/pi0/nuxt-on-the-edge
-------------------------------------------

Example of a Nuxt application running on Vercel Edge Functions.
:::
::

## Learn More

::read-more{target="\_blank" to="https://nitro.unjs.io/deploy/providers/vercel"}
Head over **Nitro documentation** to learn more about On-Demand Incremental Static Regeneration or more advanced options.
::

# Zeabur

Nuxt supports deploying on [Zeabur](https://zeabur.com){rel=""nofollow""} with minimal configuration.

## Setup

1. Create a new Zeabur app for Nuxt following the [guide](https://zeabur.com/docs/guides/nodejs/nuxt){rel=""nofollow""}.
2. During the deployment process, you can configure environment variables in Zeabur dashboard. In your service page, open the variables tab set the following [environment variable](https://zeabur.com/docs/deploy/variables){rel=""nofollow""}:
   ```bash
   SERVER_PRESET=zeabur
   ```

## Learn more

::read-more{target="\_blank" to="https://nitro.unjs.io/deploy/providers/zeabur"}
Head over **Nitro documentation** to learn more about the Zeabur deployment preset.
::
