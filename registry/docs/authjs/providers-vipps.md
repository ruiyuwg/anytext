[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")vipps

# providers/vipps

## VippsProfile[](#vippsprofile)

### See[](#see)

[User Profile Structure](https://developer.vippsmobilepay.com/api/userinfo/#operation/userinfoAuthorizationCode)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### accounts[](#accounts)

```
accounts: {
  account_name: string;
  account_number: number;
  bank_name: string;
 }[];
```

##### account\_name[](#account_name)

```
account_name: string;
```

##### account\_number[](#account_number)

```
account_number: number;
```

##### bank\_name[](#bank_name)

```
bank_name: string;
```

#### address[](#address)

```
address: Address;
```

#### birthdate[](#birthdate)

```
birthdate: string;
```

#### delegatedConsents[](#delegatedconsents)

```
delegatedConsents: {
  confirmConsentButtonText: string;
  consents: {
     accepted: boolean;
     id: string;
     required: boolean;
     textDisplayedToUser: string;
    }[];
  heading: string;
  language: string;
  links: {
     privacyStatementLinkText: string;
     privacyStatementLinkUrl: string;
     termsLinkText: string;
     termsLinkUrl: string;
    };
  termsDescription: string;
  timeOfConsent: string;
};
```

##### confirmConsentButtonText[](#confirmconsentbuttontext)

```
confirmConsentButtonText: string;
```

##### consents[](#consents)

```
consents: {
  accepted: boolean;
  id: string;
  required: boolean;
  textDisplayedToUser: string;
 }[];
```

##### heading[](#heading)

```
heading: string;
```

##### language[](#language)

```
language: string;
```

##### links[](#links)

```
links: {
  privacyStatementLinkText: string;
  privacyStatementLinkUrl: string;
  termsLinkText: string;
  termsLinkUrl: string;
};
```

###### links.privacyStatementLinkText[](#linksprivacystatementlinktext)

```
links.privacyStatementLinkText: string;
```

###### links.privacyStatementLinkUrl[](#linksprivacystatementlinkurl)

```
links.privacyStatementLinkUrl: string;
```

###### links.termsLinkText[](#linkstermslinktext)

```
links.termsLinkText: string;
```

###### links.termsLinkUrl[](#linkstermslinkurl)

```
links.termsLinkUrl: string;
```

##### termsDescription[](#termsdescription)

```
termsDescription: string;
```

##### timeOfConsent[](#timeofconsent)

```
timeOfConsent: string;
```

#### email[](#email)

```
email: string;
```

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

#### family\_name[](#family_name)

```
family_name: string;
```

#### given\_name[](#given_name)

```
given_name: string;
```

#### name[](#name)

```
name: string;
```

#### nin[](#nin)

```
nin: string;
```

#### other\_addresses[](#other_addresses)

```
other_addresses: Address[];
```

#### phone\_number[](#phone_number)

```
phone_number: string;
```

#### sid[](#sid)

```
sid: string;
```

#### sub[](#sub)

```
sub: string;
```

* * *

## default()[](#default)

```
function default(options): OIDCConfig<VippsProfile>
```

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`VippsProfile`](vipps#vippsprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`VippsProfile`](vipps#vippsprofile)\>

### See[](#see-1)

[Vipps Login API](https://developer.vippsmobilepay.com/docs/APIs/login-api/api-guide)

## Example[](#example)

```
import Vipps from "@auth/core/providers/vipps"
...
providers: [
 Vipps({
   clientId: process.env.AUTH_VIPPS_ID,
   clientSecret: process.env.AUTH_VIPPS_SECRET,
 })
]
...
```

**note** If you’re testing, make sure to override the issuer option with apitest.vipps.no

[united-effects](/reference/core/providers/united-effects "united-effects")[vk](/reference/core/providers/vk "vk")
