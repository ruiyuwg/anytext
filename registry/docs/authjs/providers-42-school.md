[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")42-school

# providers/42-school

Built-in **42School** integration.[![](https://authjs.dev/img/providers/42-school.svg)](https://api.intra.42.fr//)

## Achievement[](#achievement)

### Properties[](#properties)

#### description[](#description)

```
description: string;
```

#### id[](#id)

```
id: number;
```

#### image[](#image)

```
image: null | string;
```

#### kind[](#kind)

```
kind: "scolarity" | "project" | "pedagogy";
```

#### name[](#name)

```
name: string;
```

#### nbr\_of\_success[](#nbr_of_success)

```
nbr_of_success: null | number;
```

#### tier[](#tier)

```
tier: "medium" | "none" | "challenge" | "easy" | "hard";
```

#### users\_url[](#users_url)

```
users_url: string;
```

#### visible[](#visible)

```
visible: boolean;
```

* * *

## Campus[](#campus)

### Properties[](#properties-1)

#### active[](#active)

```
active: boolean;
```

#### address[](#address)

```
address: string;
```

#### city[](#city)

```
city: string;
```

#### country[](#country)

```
country: string;
```

#### default\_hidden\_phone[](#default_hidden_phone)

```
default_hidden_phone: boolean;
```

#### email\_extension[](#email_extension)

```
email_extension: string;
```

#### facebook[](#facebook)

```
facebook: string;
```

#### id[](#id-1)

```
id: number;
```

#### language[](#language)

```
language: {
  created_at: string;
  id: number;
  identifier: string;
  name: string;
  updated_at: null | string;
};
```

##### created\_at[](#created_at)

```
created_at: string;
```

##### id[](#id-2)

```
id: number;
```

##### identifier[](#identifier)

```
identifier: string;
```

##### name[](#name-1)

```
name: string;
```

##### updated\_at[](#updated_at)

```
updated_at: null | string;
```

#### name[](#name-2)

```
name: string;
```

#### time\_zone[](#time_zone)

```
time_zone: string;
```

#### twitter[](#twitter)

```
twitter: string;
```

#### users\_count[](#users_count)

```
users_count: number;
```

#### vogsphere\_id[](#vogsphere_id)

```
vogsphere_id: number;
```

#### website[](#website)

```
website: string;
```

#### zip[](#zip)

```
zip: string;
```

* * *

## CampusUser[](#campususer)

### Properties[](#properties-2)

#### campus\_id[](#campus_id)

```
campus_id: number;
```

#### created\_at[](#created_at-1)

```
created_at: string;
```

#### id[](#id-3)

```
id: number;
```

#### is\_primary[](#is_primary)

```
is_primary: boolean;
```

#### updated\_at[](#updated_at-1)

```
updated_at: null | string;
```

#### user\_id[](#user_id)

```
user_id: number;
```

* * *

## CursusUser[](#cursususer)

### Properties[](#properties-3)

#### begin\_at[](#begin_at)

```
begin_at: null | string;
```

#### blackholed\_at[](#blackholed_at)

```
blackholed_at: null | string;
```

#### created\_at[](#created_at-2)

```
created_at: string;
```

#### cursus[](#cursus)

```
cursus: {
  created_at: string;
  id: number;
  name: string;
  slug: string;
};
```

##### created\_at[](#created_at-3)

```
created_at: string;
```

##### id[](#id-4)

```
id: number;
```

##### name[](#name-3)

```
name: string;
```

##### slug[](#slug)

```
slug: string;
```

#### cursus\_id[](#cursus_id)

```
cursus_id: number;
```

#### end\_at[](#end_at)

```
end_at: null | string;
```

#### grade[](#grade)

```
grade: null | string;
```

#### has\_coalition[](#has_coalition)

```
has_coalition: boolean;
```

#### id[](#id-5)

```
id: number;
```

#### level[](#level)

```
level: number;
```

#### skills[](#skills)

```
skills: {
  id: number;
  level: number;
  name: string;
 }[];
```

##### id[](#id-6)

```
id: number;
```

##### level[](#level-1)

```
level: number;
```

##### name[](#name-4)

```
name: string;
```

#### updated\_at[](#updated_at-2)

```
updated_at: null | string;
```

#### user[](#user)

```
user: UserData;
```

* * *

## ExpertisesUser[](#expertisesuser)

### Properties[](#properties-4)

#### contact\_me[](#contact_me)

```
contact_me: boolean;
```

#### created\_at[](#created_at-4)

```
created_at: string;
```

#### expertise\_id[](#expertise_id)

```
expertise_id: number;
```

#### id[](#id-7)

```
id: number;
```

#### interested[](#interested)

```
interested: boolean;
```

#### user\_id[](#user_id-1)

```
user_id: number;
```

#### value[](#value)

```
value: number;
```

* * *

## FortyTwoProfile[](#fortytwoprofile)

### Extends[](#extends)

-   [`UserData`](42-school#userdata).[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties-5)

#### achievements[](#achievements)

```
achievements: Achievement[];
```

#### alumni[](#alumni)

```
alumni: boolean;
```

##### Inherited from[](#inherited-from)

[`UserData`](42-school#userdata).[`alumni`](42-school#alumni-1)

#### anonymize\_date[](#anonymize_date)

```
anonymize_date: string;
```

##### Inherited from[](#inherited-from-1)

[`UserData`](42-school#userdata).[`anonymize_date`](42-school#anonymize_date-1)

#### campus[](#campus-1)

```
campus: Campus[];
```

#### campus\_users[](#campus_users)

```
campus_users: CampusUser[];
```

#### correction\_point[](#correction_point)

```
correction_point: number;
```

##### Inherited from[](#inherited-from-2)

[`UserData`](42-school#userdata).[`correction_point`](42-school#correction_point-1)

#### created\_at[](#created_at-5)

```
created_at: string;
```

##### Inherited from[](#inherited-from-3)

[`UserData`](42-school#userdata).[`created_at`](42-school#created_at-9)

#### cursus\_users[](#cursus_users)

```
cursus_users: CursusUser[];
```

#### displayname[](#displayname)

```
displayname: string;
```

##### Inherited from[](#inherited-from-4)

[`UserData`](42-school#userdata).[`displayname`](42-school#displayname-1)

#### email[](#email)

```
email: string;
```

##### Inherited from[](#inherited-from-5)

[`UserData`](42-school#userdata).[`email`](42-school#email-1)

#### expertises\_users[](#expertises_users)

```
expertises_users: ExpertisesUser[];
```

#### first\_name[](#first_name)

```
first_name: string;
```

##### Inherited from[](#inherited-from-6)

[`UserData`](42-school#userdata).[`first_name`](42-school#first_name-1)

#### groups[](#groups)

```
groups: {
  id: string;
  name: string;
 }[];
```

##### id[](#id-8)

```
id: string;
```

##### name[](#name-5)

```
name: string;
```

#### id[](#id-9)

```
id: number;
```

##### Inherited from[](#inherited-from-7)

[`UserData`](42-school#userdata).[`id`](42-school#id-12)

#### image[](#image-1)

```
image: Image;
```

#### image\_url[](#image_url)

```
image_url: null | string;
```

##### Inherited from[](#inherited-from-8)

[`UserData`](42-school#userdata).[`image_url`](42-school#image_url-1)

#### is\_launched?[](#is_launched)

```
is_launched?: boolean;
```

##### Inherited from[](#inherited-from-9)

[`UserData`](42-school#userdata).[`is_launched?`](42-school#is_launched?-1)

#### languages\_users[](#languages_users)

```
languages_users: LanguagesUser[];
```

#### last\_name[](#last_name)

```
last_name: string;
```

##### Inherited from[](#inherited-from-10)

[`UserData`](42-school#userdata).[`last_name`](42-school#last_name-1)

#### location[](#location)

```
location: null | string;
```

##### Inherited from[](#inherited-from-11)

[`UserData`](42-school#userdata).[`location`](42-school#location-1)

#### login[](#login)

```
login: string;
```

##### Inherited from[](#inherited-from-12)

[`UserData`](42-school#userdata).[`login`](42-school#login-1)

#### partnerships[](#partnerships)

```
partnerships: any[];
```

#### patroned[](#patroned)

```
patroned: any[];
```

#### patroning[](#patroning)

```
patroning: any[];
```

#### phone[](#phone)

```
phone: null | string;
```

##### Inherited from[](#inherited-from-13)

[`UserData`](42-school#userdata).[`phone`](42-school#phone-1)

#### pool\_month[](#pool_month)

```
pool_month: null | string;
```

##### Inherited from[](#inherited-from-14)

[`UserData`](42-school#userdata).[`pool_month`](42-school#pool_month-1)

#### pool\_year[](#pool_year)

```
pool_year: null | string;
```

##### Inherited from[](#inherited-from-15)

[`UserData`](42-school#userdata).[`pool_year`](42-school#pool_year-1)

#### projects\_users[](#projects_users)

```
projects_users: ProjectUser[];
```

#### roles[](#roles)

```
roles: {
  id: string;
  name: string;
 }[];
```

##### id[](#id-10)

```
id: string;
```

##### name[](#name-6)

```
name: string;
```

#### staff?[](#staff)

```
staff?: boolean;
```

##### Inherited from[](#inherited-from-16)

[`UserData`](42-school#userdata).[`staff?`](42-school#staff?-1)

#### titles[](#titles)

```
titles: {
  id: string;
  name: string;
 }[];
```

##### id[](#id-11)

```
id: string;
```

##### name[](#name-7)

```
name: string;
```

#### titles\_users[](#titles_users)

```
titles_users: TitlesUser[];
```

#### updated\_at[](#updated_at-3)

```
updated_at: null | string;
```

##### Inherited from[](#inherited-from-17)

[`UserData`](42-school#userdata).[`updated_at`](42-school#updated_at-6)

#### url[](#url)

```
url: string;
```

##### Inherited from[](#inherited-from-18)

[`UserData`](42-school#userdata).[`url`](42-school#url-1)

#### user[](#user-1)

```
user: any;
```

#### usual\_first\_name[](#usual_first_name)

```
usual_first_name: null | string;
```

##### Inherited from[](#inherited-from-19)

[`UserData`](42-school#userdata).[`usual_first_name`](42-school#usual_first_name-1)

#### usual\_full\_name[](#usual_full_name)

```
usual_full_name: null | string;
```

##### Inherited from[](#inherited-from-20)

[`UserData`](42-school#userdata).[`usual_full_name`](42-school#usual_full_name-1)

#### wallet[](#wallet)

```
wallet: number;
```

##### Inherited from[](#inherited-from-21)

[`UserData`](42-school#userdata).[`wallet`](42-school#wallet-1)

* * *

## Image[](#image-2)

### Properties[](#properties-6)

#### link[](#link)

```
link: string;
```

#### versions[](#versions)

```
versions: {
  large: string;
  medium: string;
  micro: string;
  small: string;
};
```

##### large[](#large)

```
large: string;
```

##### medium[](#medium)

```
medium: string;
```

##### micro[](#micro)

```
micro: string;
```

##### small[](#small)

```
small: string;
```

* * *

## LanguagesUser[](#languagesuser)

### Properties[](#properties-7)

#### created\_at[](#created_at-6)

```
created_at: string;
```

#### id[](#id-12)

```
id: number;
```

#### language\_id[](#language_id)

```
language_id: number;
```

#### position[](#position)

```
position: number;
```

#### user\_id[](#user_id-2)

```
user_id: number;
```

* * *

## ProjectUser[](#projectuser)

### Properties[](#properties-8)

#### created\_at[](#created_at-7)

```
created_at: string;
```

#### current\_team\_id[](#current_team_id)

```
current_team_id: number;
```

#### cursus\_ids[](#cursus_ids)

```
cursus_ids: number[];
```

#### final\_mark[](#final_mark)

```
final_mark: null | number;
```

#### id[](#id-13)

```
id: number;
```

#### marked[](#marked)

```
marked: boolean;
```

#### marked\_at[](#marked_at)

```
marked_at: null | string;
```

#### occurrence[](#occurrence)

```
occurrence: number;
```

#### project[](#project)

```
project: {
  id: number;
  name: string;
  parent_id: null | number;
  slug: string;
};
```

##### id[](#id-14)

```
id: number;
```

##### name[](#name-8)

```
name: string;
```

##### parent\_id[](#parent_id)

```
parent_id: null | number;
```

##### slug[](#slug-1)

```
slug: string;
```

#### retriable\_at[](#retriable_at)

```
retriable_at: null | string;
```

#### status[](#status)

```
status: "in_progress" | "finished";
```

#### updated\_at[](#updated_at-4)

```
updated_at: null | string;
```

#### validated?[](#validated)

```
validated?: null | boolean;
```

* * *

## TitlesUser[](#titlesuser)

### Properties[](#properties-9)

#### created\_at[](#created_at-8)

```
created_at: string;
```

#### id[](#id-15)

```
id: number;
```

#### selected[](#selected)

```
selected: boolean;
```

#### title\_id[](#title_id)

```
title_id: number;
```

#### updated\_at[](#updated_at-5)

```
updated_at: null | string;
```

#### user\_id[](#user_id-3)

```
user_id: number;
```

* * *

## UserData[](#userdata)

### Extended by[](#extended-by)

-   [`FortyTwoProfile`](42-school#fortytwoprofile)

### Properties[](#properties-10)

#### alumni[](#alumni-1)

```
alumni: boolean;
```

#### anonymize\_date[](#anonymize_date-1)

```
anonymize_date: string;
```

#### correction\_point[](#correction_point-1)

```
correction_point: number;
```

#### created\_at[](#created_at-9)

```
created_at: string;
```

#### displayname[](#displayname-1)

```
displayname: string;
```

#### email[](#email-1)

```
email: string;
```

#### first\_name[](#first_name-1)

```
first_name: string;
```

#### id[](#id-16)

```
id: number;
```

#### image\_url[](#image_url-1)

```
image_url: null | string;
```

#### is\_launched?[](#is_launched-1)

```
is_launched?: boolean;
```

#### last\_name[](#last_name-1)

```
last_name: string;
```

#### location[](#location-1)

```
location: null | string;
```

#### login[](#login-1)

```
login: string;
```

#### phone[](#phone-1)

```
phone: null | string;
```

#### pool\_month[](#pool_month-1)

```
pool_month: null | string;
```

#### pool\_year[](#pool_year-1)

```
pool_year: null | string;
```

#### staff?[](#staff-1)

```
staff?: boolean;
```

#### updated\_at[](#updated_at-6)

```
updated_at: null | string;
```

#### url[](#url-1)

```
url: string;
```

#### usual\_first\_name[](#usual_first_name-1)

```
usual_first_name: null | string;
```

#### usual\_full\_name[](#usual_full_name-1)

```
usual_full_name: null | string;
```

#### wallet[](#wallet-1)

```
wallet: number;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add 42School login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/42-school
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import FortyTwoSchool from "@auth/core/providers/42-school"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    FortyTwoSchool({
      clientId: FORTY_TWO_SCHOOL_CLIENT_ID,
      clientSecret: FORTY_TWO_SCHOOL_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [42School OAuth documentation](https://api.intra.42.fr/apidoc/guides/web_application_flow)

### Notes[](#notes)

42 returns a field on `Account` called `created_at` which is a number. See the [docs](https://api.intra.42.fr/apidoc/guides/getting_started#make-basic-requests). Make sure to add this field to your database schema, in case if you are using an [Adapter](https://authjs.dev/reference/core/adapters).

By default, Auth.js assumes that the 42School provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The 42School provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/42-school.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`FortyTwoProfile`](42-school#fortytwoprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[providers](/reference/core/providers "providers")[apple](/reference/core/providers/apple "apple")
