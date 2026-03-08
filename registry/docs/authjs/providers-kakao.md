[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")kakao

# providers/kakao

Built-in **Kakao** integration.[![](https://authjs.dev/img/providers/kakao.svg)](https://www.kakaocorp.com/page/)

## KakaoProfile[](#kakaoprofile)

[https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info) type from : [https://gist.github.com/ziponia/cdce1ebd88f979b2a6f3f53416b56a77](https://gist.github.com/ziponia/cdce1ebd88f979b2a6f3f53416b56a77)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### connected\_at?[](#connected_at)

```
optional connected_at: string;
```

#### has\_signed\_up?[](#has_signed_up)

```
optional has_signed_up: boolean;
```

#### id[](#id)

```
id: number;
```

#### kakao\_account?[](#kakao_account)

```
optional kakao_account: {
  age_range: AgeRange;
  age_range_needs_agreement: boolean;
  birthday: string;
  birthday_needs_agreement: boolean;
  birthday_type: Birthday;
  birthyear: string;
  birthyear_needs_agreement: boolean;
  ci: string;
  ci_authenticated_at: string;
  ci_needs_agreement: boolean;
  email: string;
  email_needs_agreement: boolean;
  gender: Gender;
  gender_needs_agreement: boolean;
  is_email_valid: boolean;
  is_email_verified: boolean;
  name: string;
  name_needs_agreement: boolean;
  phone_number: string;
  phone_number_needs_agreement: boolean;
  profile: {
     is_default_image: boolean;
     nickname: string;
     profile_image_url: string;
     thumbnail_image_url: string;
    };
  profile_image_needs_agreement: boolean;
  profile_needs_agreement: boolean;
  profile_nickname_needs_agreement: boolean;
};
```

##### age\_range?[](#age_range)

```
optional age_range: AgeRange;
```

##### age\_range\_needs\_agreement?[](#age_range_needs_agreement)

```
optional age_range_needs_agreement: boolean;
```

##### birthday?[](#birthday)

```
optional birthday: string;
```

##### birthday\_needs\_agreement?[](#birthday_needs_agreement)

```
optional birthday_needs_agreement: boolean;
```

##### birthday\_type?[](#birthday_type)

```
optional birthday_type: Birthday;
```

##### birthyear?[](#birthyear)

```
optional birthyear: string;
```

##### birthyear\_needs\_agreement?[](#birthyear_needs_agreement)

```
optional birthyear_needs_agreement: boolean;
```

##### ci?[](#ci)

```
optional ci: string;
```

##### ci\_authenticated\_at?[](#ci_authenticated_at)

```
optional ci_authenticated_at: string;
```

##### ci\_needs\_agreement?[](#ci_needs_agreement)

```
optional ci_needs_agreement: boolean;
```

##### email?[](#email)

```
optional email: string;
```

##### email\_needs\_agreement?[](#email_needs_agreement)

```
optional email_needs_agreement: boolean;
```

##### gender?[](#gender)

```
optional gender: Gender;
```

##### gender\_needs\_agreement?[](#gender_needs_agreement)

```
optional gender_needs_agreement: boolean;
```

##### is\_email\_valid?[](#is_email_valid)

```
optional is_email_valid: boolean;
```

##### is\_email\_verified?[](#is_email_verified)

```
optional is_email_verified: boolean;
```

##### name?[](#name)

```
optional name: string;
```

##### name\_needs\_agreement?[](#name_needs_agreement)

```
optional name_needs_agreement: boolean;
```

##### phone\_number?[](#phone_number)

```
optional phone_number: string;
```

##### phone\_number\_needs\_agreement?[](#phone_number_needs_agreement)

```
optional phone_number_needs_agreement: boolean;
```

##### profile?[](#profile)

```
optional profile: {
  is_default_image: boolean;
  nickname: string;
  profile_image_url: string;
  thumbnail_image_url: string;
};
```

###### profile.is\_default\_image?[](#profileis_default_image)

```
optional profile.is_default_image: boolean;
```

###### profile.nickname?[](#profilenickname)

```
optional profile.nickname: string;
```

###### profile.profile\_image\_url?[](#profileprofile_image_url)

```
optional profile.profile_image_url: string;
```

###### profile.thumbnail\_image\_url?[](#profilethumbnail_image_url)

```
optional profile.thumbnail_image_url: string;
```

##### profile\_image\_needs\_agreement?[](#profile_image_needs_agreement)

```
optional profile_image_needs_agreement: boolean;
```

##### profile\_needs\_agreement?[](#profile_needs_agreement)

```
optional profile_needs_agreement: boolean;
```

##### profile\_nickname\_needs\_agreement?[](#profile_nickname_needs_agreement)

```
optional profile_nickname_needs_agreement: boolean;
```

#### properties?[](#properties-1)

```
optional properties: {
  id: string;
  msg_blocked: boolean;
  nickname: string;
  profile_image: string;
  registered_at: string;
  status: string;
  thumbnail_image: string;
};
```

##### id?[](#id-1)

```
optional id: string;
```

##### msg\_blocked?[](#msg_blocked)

```
optional msg_blocked: boolean;
```

##### nickname?[](#nickname)

```
optional nickname: string;
```

##### profile\_image?[](#profile_image)

```
optional profile_image: string;
```

##### registered\_at?[](#registered_at)

```
optional registered_at: string;
```

##### status?[](#status)

```
optional status: string;
```

##### thumbnail\_image?[](#thumbnail_image)

```
optional thumbnail_image: string;
```

#### synched\_at?[](#synched_at)

```
optional synched_at: string;
```

* * *

## AgeRange[](#agerange)

```
type AgeRange = 
  | "1-9"
  | "10-14"
  | "15-19"
  | "20-29"
  | "30-39"
  | "40-49"
  | "50-59"
  | "60-69"
  | "70-79"
  | "80-89"
  | "90-";
```

* * *

## Birthday[](#birthday-1)

```
type Birthday = "SOLAR" | "LUNAR";
```

* * *

## DateTime[](#datetime)

```
type DateTime = string;
```

* * *

## Gender[](#gender-1)

```
type Gender = "female" | "male";
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Kakao login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/kakao
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Kakao from "@auth/core/providers/kakao"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Kakao({ clientId: KAKAO_CLIENT_ID, clientSecret: KAKAO_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Kakao OAuth documentation](https://developers.kakao.com/product/kakaoLogin)
-   [Kakao OAuth configuration](https://developers.kakao.com/docs/latest/en/kakaologin/common)

## Configuration[](#configuration-1)

Create a provider and a Kakao application at [https://developers.kakao.com/console/app](https://developers.kakao.com/console/app). In the settings of the app under Kakao Login, activate web app, change consent items and configure callback URL.

### Notes[](#notes)

By default, Auth.js assumes that the Kakao provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

The “Authorized redirect URIs” used when creating the credentials must include your full domain and end in the callback path. For example;

![스크린샷 2023-11-28 오후 9 27 41](https://github.com/nextauthjs/next-auth/assets/66895208/7d4c2df6-45a6-4937-bb10-4b47c987bff4)

-   For production: `https://{YOUR_DOMAIN}/api/auth/callback/kakao`
-   For development: `http://localhost:3000/api/auth/callback/kakao`

💡

The Kakao provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/kakao.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

💡

Kakao’s client key is in **Summary(It is written as 요약정보 in Korean.) tab’s App Keys Field** (My Application > App Settings > Summary)

![스크린샷 2023-11-28 오후 9 47 17](https://github.com/nextauthjs/next-auth/assets/66895208/a87e5705-26b9-4f83-99d7-6df097a3632c)

Kakao’s clientSecret key is in **Security(It is written as 보안 in Korean.) tab’s App Keys Field** (My Application > Product Settings > Kakao Login > Security)

![스크린샷 2023-11-28 오후 9 38 25](https://github.com/nextauthjs/next-auth/assets/66895208/6a763921-4f70-40f4-a3e1-9abc78276d45)

💡

Kakao dev console has a button at the top right to change from KR to ENG

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`KakaoProfile`](kakao#kakaoprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[instagram](/reference/core/providers/instagram "instagram")[keycloak](/reference/core/providers/keycloak "keycloak")
