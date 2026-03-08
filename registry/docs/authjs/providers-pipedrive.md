[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")pipedrive

# providers/pipedrive

Built-in **Pipedrive** integration.[![](https://authjs.dev/img/providers/pipedrive.svg)](https://www.pipedrive.com/)

## PipedriveProfile[](#pipedriveprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### data[](#data)

```
data: {
  activated: boolean;
  active_flag: boolean;
  company_country: string;
  company_domain: string;
  company_id: number;
  company_industry: string;
  company_name: string;
  created: Date;
  default_currency: string;
  email: string;
  has_created_company: boolean;
  icon_url: string;
  id: number;
  is_admin: number;
  is_you: boolean;
  lang: number;
  language: {
     country_code: string;
     language_code: string;
    };
  last_login: Date;
  locale: string;
  modified: Date;
  name: string;
  phone: string;
  role_id: number;
  signup_flow_variation: string;
  timezone_name: string;
  timezone_offset: string;
};
```

##### activated?[](#activated)

```
optional activated: boolean;
```

##### active\_flag?[](#active_flag)

```
optional active_flag: boolean;
```

##### company\_country?[](#company_country)

```
optional company_country: string;
```

##### company\_domain?[](#company_domain)

```
optional company_domain: string;
```

##### company\_id?[](#company_id)

```
optional company_id: number;
```

##### company\_industry?[](#company_industry)

```
optional company_industry: string;
```

##### company\_name?[](#company_name)

```
optional company_name: string;
```

##### created?[](#created)

```
optional created: Date;
```

##### default\_currency?[](#default_currency)

```
optional default_currency: string;
```

##### email[](#email)

```
email: string;
```

##### has\_created\_company?[](#has_created_company)

```
optional has_created_company: boolean;
```

##### icon\_url?[](#icon_url)

```
optional icon_url: string;
```

##### id[](#id)

```
id: number;
```

##### is\_admin?[](#is_admin)

```
optional is_admin: number;
```

##### is\_you?[](#is_you)

```
optional is_you: boolean;
```

##### lang?[](#lang)

```
optional lang: number;
```

##### language?[](#language)

```
optional language: {
  country_code: string;
  language_code: string;
};
```

###### language.country\_code?[](#languagecountry_code)

```
optional language.country_code: string;
```

###### language.language\_code?[](#languagelanguage_code)

```
optional language.language_code: string;
```

##### last\_login?[](#last_login)

```
optional last_login: Date;
```

##### locale?[](#locale)

```
optional locale: string;
```

##### modified?[](#modified)

```
optional modified: Date;
```

##### name[](#name)

```
name: string;
```

##### phone?[](#phone)

```
optional phone: string;
```

##### role\_id?[](#role_id)

```
optional role_id: number;
```

##### signup\_flow\_variation?[](#signup_flow_variation)

```
optional signup_flow_variation: string;
```

##### timezone\_name?[](#timezone_name)

```
optional timezone_name: string;
```

##### timezone\_offset?[](#timezone_offset)

```
optional timezone_offset: string;
```

#### success[](#success)

```
success: boolean;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Pipedrive login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/pipedrive
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Pipedrive from "@auth/core/providers/pipedrive"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Pipedrive({
      clientId: PIPEDRIVE_CLIENT_ID,
      clientSecret: PIPEDRIVE_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Pipedrive OAuth documentation](https://pipedrive.readme.io/docs/marketplace-oauth-authorization)

### Notes[](#notes)

By default, Auth.js assumes that the Pipedrive provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Pipedrive provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/pipedrive.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`PipedriveProfile`](pipedrive#pipedriveprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[pinterest](/reference/core/providers/pinterest "pinterest")[postmark](/reference/core/providers/postmark "postmark")
