[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Battlenet

![](/img/providers/battlenet.svg)

# Battle.net Provider

## Resources[](#resources)

-   [BattleNet OAuth documentation](https://develop.battle.net/documentation/guides/using-oauth)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/battlenet
```

```
https://example.com/auth/callback/battlenet
```

```
https://example.com/auth/callback/battlenet
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/battlenet.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_BATTLENET_ID
AUTH_BATTLENET_SECRET
AUTH_BATTLENET_ISSUER
```

issuer must be one of these values, based on the available regions:

```
type BattleNetIssuer =
| "https://www.battlenet.com.cn/oauth"
| "https://us.battle.net/oauth"
| "https://eu.battle.net/oauth"
| "https://kr.battle.net/oauth"
| "https://tw.battle.net/oauth"
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth";
import BattleNet from "next-auth/providers/battlenet";
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [BattleNet({
    clientId: AUTH_BATTLENET_CLIENT_ID
    clientSecret: AUTH_BATTLENET_CLIENT_SECRET
    issuer: AUTH_BATTLENET_ISSUER
  })]
});
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import BattleNet from "@auth/qwik/providers/battlenet";
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [BattleNet({
      clientId: import.meta.env.AUTH_BATTLENET_CLIENT_ID
      clientSecret: import.meta.env.AUTH_BATTLENET_CLIENT_SECRET
      issuer: import.meta.env.AUTH_BATTLENET_ISSUER
    })]
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit";
import BattleNet from "@auth/sveltekit/providers/battlenet";
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [BattleNet({
    clientId: AUTH_BATTLENET_CLIENT_ID
    clientSecret: AUTH_BATTLENET_CLIENT_SECRET
    issuer: AUTH_BATTLENET_ISSUER
  })]
});
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express";
import BattleNet from "@auth/express/providers/battlenet";
 
app.use("/auth/*", ExpressAuth({
  providers: [BattleNet({
    clientId: AUTH_BATTLENET_CLIENT_ID
    clientSecret: AUTH_BATTLENET_CLIENT_SECRET
    issuer: AUTH_BATTLENET_ISSUER
  })]
}));
```

[BankID Norge](/getting-started/providers/bankid-no "BankID Norge")[Beyondidentity](/getting-started/providers/beyondidentity "Beyondidentity")
