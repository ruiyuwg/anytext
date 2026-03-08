[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")mailgun

# providers/mailgun

Built-in **Mailgun** integration.[![](https://authjs.dev/img/providers/mailgun.svg)](https://www.mailgun.com/)

## default()[](#default)

```
function default(config): EmailConfig
```

Add Mailgun login to your page.

### Setup[](#setup)

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Mailgun from "@auth/core/providers/mailgun"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Mailgun({
      from: MAILGUN_DOMAIN,
      region: "EU", // Optional
    }),
  ],
})
```

### Resources[](#resources)

-   [Mailgun documentation](https://documentation.mailgun.com/docs/mailgun)

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`EmailUserConfig`](email#emailuserconfig) & { `region`: `"US"` | `"EU"`; }

### Returns[](#returns)

[`EmailConfig`](email#emailconfig)

[mailchimp](/reference/core/providers/mailchimp "mailchimp")[mailru](/reference/core/providers/mailru "mailru")
