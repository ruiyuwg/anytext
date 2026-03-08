## Prerequisites

You need to do some setup to get started with Sign in with Google:

- Prepare a Google Cloud project. Go to the [Google Cloud Platform](https://console.cloud.google.com/home/dashboard) and create a new project if necessary.
- Use the [Google Auth Platform console](https://console.cloud.google.com/auth/overview) to register and set up your application's:
  - [**Audience**](https://console.cloud.google.com/auth/audience) by configuring which Google users are allowed to sign in to your application.
  - [**Data Access (Scopes)**](https://console.cloud.google.com/auth/scopes) define what your application can do with your user's Google data and APIs, such as access profile information or more.
  - [**Branding**](https://console.cloud.google.com/auth/branding) and [**Verification**](https://console.cloud.google.com/auth/verification) show a logo and name instead of the Supabase project ID in the consent screen, improving user retention. Brand verification may take a few business days.

### Setup required scopes

Supabase Auth needs a few scopes granting access to profile data of your end users, which you have to configure in the [**Data Access (Scopes)**](https://console.cloud.google.com/auth/scopes) screen:

- `openid` (add manually)
- `.../auth/userinfo.email` (added by default)
- `.../auth/userinfo.profile` (added by default)

If you add more scopes, especially those on the sensitive or restricted list your application might be subject to verification which may take a long time.

### Setup consent screen branding

It's strongly recommended you set up a custom domain and optionally verify your brand information with Google, as this makes phishing attempts easier to spot by your users.

Google's consent screen is shown to users when they sign in. Optionally configure one of the following to improve the appearance of the screen, increasing the perception of trust by your users:

1. Verify your application's brand (logo and name) by configuring it in the [Branding](https://console.cloud.google.com/auth/branding) section of the Google Auth Platform console. Brand verification is not automatic and may take a few business days.
2. Set up a [custom domain for your project](/docs/guides/platform/custom-domains) to present the user with a clear relationship to the website they clicked Sign in with Google on.
   - A good approach is to use `auth.example.com` or `api.example.com`, if your application is hosted on `example.com`.
   - If you don't set this up, users will see `<project-id>.supabase.co` which does not inspire trust and can make your application more susceptible to successful phishing attempts.
