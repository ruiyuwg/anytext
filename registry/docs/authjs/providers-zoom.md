[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")zoom

# providers/zoom

Built-in **Zoom** integration.[![](https://authjs.dev/img/providers/zoom.svg)](https://zoom.us/)

## ZoomProfile[](#zoomprofile)

See: [https://developers.zoom.us/docs/integrations/oauth/#using-an-access-token](https://developers.zoom.us/docs/integrations/oauth/#using-an-access-token)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### account\_id[](#account_id)

```
account_id: string;
```

#### created\_at[](#created_at)

```
created_at: string;
```

#### dept[](#dept)

```
dept: string;
```

#### email[](#email)

```
email: string;
```

#### first\_name[](#first_name)

```
first_name: string;
```

#### group\_ids[](#group_ids)

```
group_ids: string[];
```

#### host\_key[](#host_key)

```
host_key: string;
```

#### id[](#id)

```
id: string;
```

#### im\_group\_ids[](#im_group_ids)

```
im_group_ids: string[];
```

#### jid[](#jid)

```
jid: string;
```

#### language[](#language)

```
language: string;
```

#### last\_client\_version[](#last_client_version)

```
last_client_version: string;
```

#### last\_login\_time[](#last_login_time)

```
last_login_time: string;
```

#### last\_name[](#last_name)

```
last_name: string;
```

#### personal\_meeting\_url[](#personal_meeting_url)

```
personal_meeting_url: string;
```

#### phone\_country[](#phone_country)

```
phone_country: string;
```

#### phone\_number[](#phone_number)

```
phone_number: string;
```

#### pic\_url[](#pic_url)

```
pic_url: string;
```

#### pmi[](#pmi)

```
pmi: number;
```

#### role\_name[](#role_name)

```
role_name: string;
```

#### status[](#status)

```
status: string;
```

#### timezone[](#timezone)

```
timezone: string;
```

#### type[](#type)

```
type: number;
```

#### use\_pmi[](#use_pmi)

```
use_pmi: boolean;
```

#### vanity\_url[](#vanity_url)

```
vanity_url: string;
```

#### verified[](#verified)

```
verified: number;
```

* * *

## default()[](#default)

```
function default(config): OAuthConfig<ZoomProfile>
```

Add Zoom login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/zoom
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Zoom from "@auth/core/providers/zoom"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Zoom({ clientId: ZOOM_CLIENT_ID, clientSecret: ZOOM_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Zoom OAuth 2.0 Integration Guide](https://developers.zoom.us/docs/integrations/oauth/)

### Notes[](#notes)

By default, Auth.js assumes that the Zoom provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Zoom provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/zoom.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`ZoomProfile`](zoom#zoomprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`ZoomProfile`](zoom#zoomprofile)\>

[zoho](/reference/core/providers/zoho "zoho")[types](/reference/core/types "types")
