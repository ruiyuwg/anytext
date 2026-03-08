[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")vk

# providers/vk

Built-in **VK** integration.[![](https://authjs.dev/img/providers/vk.svg)](https://vk.com/)

## VkProfile[](#vkprofile)

[https://dev.vk.com/reference/objects/user](https://dev.vk.com/reference/objects/user)

### Properties[](#properties)

#### about?[](#about)

```
optional about: string;
```

#### activities?[](#activities)

```
optional activities: string;
```

#### bdate?[](#bdate)

```
optional bdate: string;
```

#### blacklisted?[](#blacklisted)

```
optional blacklisted: 0 | 1;
```

#### blacklisted\_by\_me?[](#blacklisted_by_me)

```
optional blacklisted_by_me: 0 | 1;
```

#### books?[](#books)

```
optional books: string;
```

#### can\_access\_closed[](#can_access_closed)

```
can_access_closed: boolean;
```

#### can\_post?[](#can_post)

```
optional can_post: 0 | 1;
```

#### can\_see\_all\_posts?[](#can_see_all_posts)

```
optional can_see_all_posts: 0 | 1;
```

#### can\_see\_audio?[](#can_see_audio)

```
optional can_see_audio: 0 | 1;
```

#### can\_send\_friend\_request?[](#can_send_friend_request)

```
optional can_send_friend_request: 0 | 1;
```

#### can\_write\_private\_message?[](#can_write_private_message)

```
optional can_write_private_message: 0 | 1;
```

#### career?[](#career)

```
optional career: {
  city_id: number;
  city_name: string;
  company: string;
  country_id: number;
  from: number;
  group_id: number;
  position: string;
  until: number;
};
```

##### city\_id?[](#city_id)

```
optional city_id: number;
```

##### city\_name?[](#city_name)

```
optional city_name: string;
```

##### company?[](#company)

```
optional company: string;
```

##### country\_id?[](#country_id)

```
optional country_id: number;
```

##### from?[](#from)

```
optional from: number;
```

##### group\_id?[](#group_id)

```
optional group_id: number;
```

##### position?[](#position)

```
optional position: string;
```

##### until?[](#until)

```
optional until: number;
```

#### city?[](#city)

```
optional city: {
  id: number;
  title: string;
};
```

##### id[](#id)

```
id: number;
```

##### title[](#title)

```
title: string;
```

#### common\_count?[](#common_count)

```
optional common_count: number;
```

#### connections?[](#connections)

```
optional connections: {
  facebook: string;
  instagram: string;
  livejournal: string;
  skype: string;
  twitter: string;
};
```

##### facebook?[](#facebook)

```
optional facebook: string;
```

##### instagram?[](#instagram)

```
optional instagram: string;
```

##### livejournal?[](#livejournal)

```
optional livejournal: string;
```

##### skype?[](#skype)

```
optional skype: string;
```

##### twitter?[](#twitter)

```
optional twitter: string;
```

#### contacts?[](#contacts)

```
optional contacts: {
  home_phone: string;
  mobile_phone: string;
};
```

##### home\_phone?[](#home_phone)

```
optional home_phone: string;
```

##### mobile\_phone?[](#mobile_phone)

```
optional mobile_phone: string;
```

#### counters?[](#counters)

```
optional counters: {
  albums: number;
  audios: number;
  followers: number;
  friends: number;
  groups: number;
  mutual_friends: number;
  notes: number;
  online_friends: number;
  pages: number;
  photos: number;
  user_videos: number;
  videos: number;
};
```

##### albums?[](#albums)

```
optional albums: number;
```

##### audios?[](#audios)

```
optional audios: number;
```

##### followers?[](#followers)

```
optional followers: number;
```

##### friends?[](#friends)

```
optional friends: number;
```

##### groups?[](#groups)

```
optional groups: number;
```

##### mutual\_friends?[](#mutual_friends)

```
optional mutual_friends: number;
```

##### notes?[](#notes)

```
optional notes: number;
```

##### online\_friends?[](#online_friends)

```
optional online_friends: number;
```

##### pages?[](#pages)

```
optional pages: number;
```

##### photos?[](#photos)

```
optional photos: number;
```

##### user\_videos?[](#user_videos)

```
optional user_videos: number;
```

##### videos?[](#videos)

```
optional videos: number;
```

#### country?[](#country)

```
optional country: {
  id: number;
  title: string;
};
```

##### id[](#id-1)

```
id: number;
```

##### title[](#title-1)

```
title: string;
```

#### crop\_photo?[](#crop_photo)

```
optional crop_photo: {
  crop: {
     x: number;
     x2: number;
     y: number;
     y2: number;
    };
  photo: {
     access_key: string;
     album_id: number;
     can_comment: 0 | 1;
     date: number;
     has_tags: boolean;
     height: number;
     id: number;
     images: {
        height: number;
        type: "p" | "q" | "x" | "y" | "s" | "r" | "m" | "l" | "o" | "z" | "w";
        url: string;
        width: number;
       }[];
     lat: number;
     long: number;
     owner_id: number;
     photo_256: string;
     place: string;
     post_id: number;
     sizes: {
        height: number;
        src: string;
        type:   | "max"
           | "d"
           | "e"
           | "k"
           | "n"
           | "p"
           | "q"
           | "x"
           | "y"
           | "a"
           | "b"
           | "i"
           | "s"
           | "g"
           | "r"
           | "m"
           | "l"
           | "o"
           | "z"
           | "w"
           | "c"
           | "j"
           | "temp"
           | "h"
           | "f";
        url: string;
        width: number;
       }[];
     text: string;
     user_id: number;
     width: number;
    };
  rect: {
     x: number;
     x2: number;
     y: number;
     y2: number;
    };
};
```

##### crop[](#crop)

```
crop: {
  x: number;
  x2: number;
  y: number;
  y2: number;
};
```

###### crop.x[](#cropx)

```
crop.x: number;
```

###### crop.x2[](#cropx2)

```
crop.x2: number;
```

###### crop.y[](#cropy)

```
crop.y: number;
```

###### crop.y2[](#cropy2)

```
crop.y2: number;
```

##### photo[](#photo)

```
photo: {
  access_key: string;
  album_id: number;
  can_comment: 0 | 1;
  date: number;
  has_tags: boolean;
  height: number;
  id: number;
  images: {
     height: number;
     type: "p" | "q" | "x" | "y" | "s" | "r" | "m" | "l" | "o" | "z" | "w";
     url: string;
     width: number;
    }[];
  lat: number;
  long: number;
  owner_id: number;
  photo_256: string;
  place: string;
  post_id: number;
  sizes: {
     height: number;
     src: string;
     type:   | "max"
        | "d"
        | "e"
        | "k"
        | "n"
        | "p"
        | "q"
        | "x"
        | "y"
        | "a"
        | "b"
        | "i"
        | "s"
        | "g"
        | "r"
        | "m"
        | "l"
        | "o"
        | "z"
        | "w"
        | "c"
        | "j"
        | "temp"
        | "h"
        | "f";
     url: string;
     width: number;
    }[];
  text: string;
  user_id: number;
  width: number;
};
```

###### photo.access\_key?[](#photoaccess_key)

```
optional photo.access_key: string;
```

###### photo.album\_id[](#photoalbum_id)

```
photo.album_id: number;
```

###### photo.can\_comment?[](#photocan_comment)

```
optional photo.can_comment: 0 | 1;
```

###### photo.date[](#photodate)

```
photo.date: number;
```

###### photo.has\_tags[](#photohas_tags)

```
photo.has_tags: boolean;
```

###### photo.height?[](#photoheight)

```
optional photo.height: number;
```

###### photo.id[](#photoid)

```
photo.id: number;
```

###### photo.images?[](#photoimages)

```
optional photo.images: {
  height: number;
  type: "p" | "q" | "x" | "y" | "s" | "r" | "m" | "l" | "o" | "z" | "w";
  url: string;
  width: number;
 }[];
```

###### photo.lat?[](#photolat)

```
optional photo.lat: number;
```

###### photo.long?[](#photolong)

```
optional photo.long: number;
```

###### photo.owner\_id[](#photoowner_id)

```
photo.owner_id: number;
```

###### photo.photo\_256?[](#photophoto_256)

```
optional photo.photo_256: string;
```

###### photo.place?[](#photoplace)

```
optional photo.place: string;
```

###### photo.post\_id?[](#photopost_id)

```
optional photo.post_id: number;
```

###### photo.sizes?[](#photosizes)

```
optional photo.sizes: {
  height: number;
  src: string;
  type:   | "max"
     | "d"
     | "e"
     | "k"
     | "n"
     | "p"
     | "q"
     | "x"
     | "y"
     | "a"
     | "b"
     | "i"
     | "s"
     | "g"
     | "r"
     | "m"
     | "l"
     | "o"
     | "z"
     | "w"
     | "c"
     | "j"
     | "temp"
     | "h"
     | "f";
  url: string;
  width: number;
 }[];
```

###### photo.text?[](#phototext)

```
optional photo.text: string;
```

###### photo.user\_id?[](#photouser_id)

```
optional photo.user_id: number;
```

###### photo.width?[](#photowidth)

```
optional photo.width: number;
```

##### rect[](#rect)

```
rect: {
  x: number;
  x2: number;
  y: number;
  y2: number;
};
```

###### rect.x[](#rectx)

```
rect.x: number;
```

###### rect.x2[](#rectx2)

```
rect.x2: number;
```

###### rect.y[](#recty)

```
rect.y: number;
```

###### rect.y2[](#recty2)

```
rect.y2: number;
```

#### deactivated?[](#deactivated)

```
optional deactivated: string;
```

#### domain?[](#domain)

```
optional domain: string;
```

#### education?[](#education)

```
optional education: {
  faculty: number;
  faculty_name: string;
  graduation: number;
  university: number;
  university_name: string;
};
```

##### faculty?[](#faculty)

```
optional faculty: number;
```

##### faculty\_name?[](#faculty_name)

```
optional faculty_name: string;
```

##### graduation?[](#graduation)

```
optional graduation: number;
```

##### university?[](#university)

```
optional university: number;
```

##### university\_name?[](#university_name)

```
optional university_name: string;
```

#### email?[](#email)

```
optional email: string;
```

#### exports?[](#exports)

```
optional exports: {
  facebook: number;
  instagram: number;
  livejournal: number;
  twitter: number;
};
```

##### facebook?[](#facebook-1)

```
optional facebook: number;
```

##### instagram?[](#instagram-1)

```
optional instagram: number;
```

##### livejournal?[](#livejournal-1)

```
optional livejournal: number;
```

##### twitter?[](#twitter-1)

```
optional twitter: number;
```

#### first\_name[](#first_name)

```
first_name: string;
```

#### first\_name\_abl?[](#first_name_abl)

```
optional first_name_abl: string;
```

#### first\_name\_acc?[](#first_name_acc)

```
optional first_name_acc: string;
```

#### first\_name\_dat?[](#first_name_dat)

```
optional first_name_dat: string;
```

#### first\_name\_gen?[](#first_name_gen)

```
optional first_name_gen: string;
```

#### first\_name\_ins?[](#first_name_ins)

```
optional first_name_ins: string;
```

#### first\_name\_nom?[](#first_name_nom)

```
optional first_name_nom: string;
```

#### followers\_count?[](#followers_count)

```
optional followers_count: number;
```

#### friend\_status?[](#friend_status)

```
optional friend_status: 0 | 2 | 1 | 3;
```

#### games?[](#games)

```
optional games: string;
```

#### has\_mobile?[](#has_mobile)

```
optional has_mobile: 0 | 1;
```

#### has\_photo?[](#has_photo)

```
optional has_photo: 0 | 1;
```

#### home\_town?[](#home_town)

```
optional home_town: string;
```

#### id[](#id-2)

```
id: number;
```

#### interests?[](#interests)

```
optional interests: string;
```

#### is\_closed[](#is_closed)

```
is_closed: boolean;
```

#### is\_favorite?[](#is_favorite)

```
optional is_favorite: 0 | 1;
```

#### is\_friend?[](#is_friend)

```
optional is_friend: 0 | 1;
```

#### is\_hidden\_from\_feed?[](#is_hidden_from_feed)

```
optional is_hidden_from_feed: 0 | 1;
```

#### is\_no\_index?[](#is_no_index)

```
optional is_no_index: 0 | 1;
```

#### last\_name[](#last_name)

```
last_name: string;
```

#### last\_name\_abl?[](#last_name_abl)

```
optional last_name_abl: string;
```

#### last\_name\_acc?[](#last_name_acc)

```
optional last_name_acc: string;
```

#### last\_name\_dat?[](#last_name_dat)

```
optional last_name_dat: string;
```

#### last\_name\_gen?[](#last_name_gen)

```
optional last_name_gen: string;
```

#### last\_name\_ins?[](#last_name_ins)

```
optional last_name_ins: string;
```

#### last\_name\_nom?[](#last_name_nom)

```
optional last_name_nom: string;
```

#### last\_seen?[](#last_seen)

```
optional last_seen: {
  platform: 2 | 1 | 3 | 5 | 4 | 6 | 7;
  time: number;
};
```

##### platform?[](#platform)

```
optional platform: 2 | 1 | 3 | 5 | 4 | 6 | 7;
```

##### time?[](#time)

```
optional time: number;
```

#### maiden\_name?[](#maiden_name)

```
optional maiden_name: string;
```

#### military?[](#military)

```
optional military: {
  country_id: number;
  from: number;
  unit: string;
  unit_id: number;
  until: number;
};
```

##### country\_id[](#country_id-1)

```
country_id: number;
```

##### from?[](#from-1)

```
optional from: number;
```

##### unit[](#unit)

```
unit: string;
```

##### unit\_id[](#unit_id)

```
unit_id: number;
```

##### until?[](#until-1)

```
optional until: number;
```

#### movies?[](#movies)

```
optional movies: string;
```

#### music?[](#music)

```
optional music: string;
```

#### nickname?[](#nickname)

```
optional nickname: string;
```

#### occupation?[](#occupation)

```
optional occupation: {
  id: number;
  name: string;
  type: "work" | "school" | "university";
};
```

##### id?[](#id-3)

```
optional id: number;
```

##### name?[](#name)

```
optional name: string;
```

##### type?[](#type)

```
optional type: "work" | "school" | "university";
```

#### online?[](#online)

```
optional online: 0 | 1;
```

#### online\_app?[](#online_app)

```
optional online_app: number;
```

#### online\_mobile?[](#online_mobile)

```
optional online_mobile: 0 | 1;
```

#### personal?[](#personal)

```
optional personal: {
  alcohol: 2 | 1 | 3 | 5 | 4;
  inspired_by: string;
  langs: string[];
  life_main: 2 | 1 | 3 | 5 | 4 | 6 | 7 | 8;
  people_main: 2 | 1 | 3 | 5 | 4 | 6;
  political: 2 | 1 | 9 | 3 | 5 | 4 | 6 | 7 | 8;
  religion: string;
  smoking: 2 | 1 | 3 | 5 | 4;
};
```

##### alcohol?[](#alcohol)

```
optional alcohol: 2 | 1 | 3 | 5 | 4;
```

##### inspired\_by?[](#inspired_by)

```
optional inspired_by: string;
```

##### langs?[](#langs)

```
optional langs: string[];
```

##### life\_main?[](#life_main)

```
optional life_main: 2 | 1 | 3 | 5 | 4 | 6 | 7 | 8;
```

##### people\_main?[](#people_main)

```
optional people_main: 2 | 1 | 3 | 5 | 4 | 6;
```

##### political?[](#political)

```
optional political: 2 | 1 | 9 | 3 | 5 | 4 | 6 | 7 | 8;
```

##### religion?[](#religion)

```
optional religion: string;
```

##### smoking?[](#smoking)

```
optional smoking: 2 | 1 | 3 | 5 | 4;
```

#### photo\_100[](#photo_100)

```
photo_100: string;
```

#### photo\_200?[](#photo_200)

```
optional photo_200: string;
```

#### photo\_200\_orig?[](#photo_200_orig)

```
optional photo_200_orig: string;
```

#### photo\_400?[](#photo_400)

```
optional photo_400: string;
```

#### photo\_400\_orig?[](#photo_400_orig)

```
optional photo_400_orig: string;
```

#### photo\_50?[](#photo_50)

```
optional photo_50: string;
```

#### photo\_id?[](#photo_id)

```
optional photo_id: string;
```

#### photo\_max?[](#photo_max)

```
optional photo_max: string;
```

#### photo\_max\_orig?[](#photo_max_orig)

```
optional photo_max_orig: string;
```

#### quotes?[](#quotes)

```
optional quotes: string;
```

#### relation?[](#relation)

```
optional relation: 0 | 2 | 1 | 3 | 5 | 4 | 6 | 7 | 8;
```

#### relation\_partner?[](#relation_partner)

```
optional relation_partner: {
  can_access_closed: boolean;
  deactivated: string;
  first_name: string;
  hidden: number;
  id: number;
  is_closed: boolean;
  last_name: string;
};
```

##### can\_access\_closed?[](#can_access_closed-1)

```
optional can_access_closed: boolean;
```

##### deactivated?[](#deactivated-1)

```
optional deactivated: string;
```

##### first\_name[](#first_name-1)

```
first_name: string;
```

##### hidden?[](#hidden)

```
optional hidden: number;
```

##### id[](#id-4)

```
id: number;
```

##### is\_closed?[](#is_closed-1)

```
optional is_closed: boolean;
```

##### last\_name[](#last_name-1)

```
last_name: string;
```

#### relatives?[](#relatives)

```
optional relatives: {
  id: number;
  name: string;
  type: "parent" | "child" | "grandparent" | "grandchild" | "sibling";
 }[];
```

##### id?[](#id-5)

```
optional id: number;
```

##### name?[](#name-1)

```
optional name: string;
```

##### type[](#type-1)

```
type: "parent" | "child" | "grandparent" | "grandchild" | "sibling";
```

#### schools?[](#schools)

```
optional schools: {
  city: number;
  class: string;
  country: number;
  id: string;
  name: string;
  speciality: string;
  type: number;
  type_str: string;
  year_from: number;
  year_graduated: number;
  year_to: number;
 }[];
```

##### city?[](#city-1)

```
optional city: number;
```

##### class?[](#class)

```
optional class: string;
```

##### country?[](#country-1)

```
optional country: number;
```

##### id?[](#id-6)

```
optional id: string;
```

##### name?[](#name-2)

```
optional name: string;
```

##### speciality?[](#speciality)

```
optional speciality: string;
```

##### type?[](#type-2)

```
optional type: number;
```

##### type\_str?[](#type_str)

```
optional type_str: string;
```

##### year\_from?[](#year_from)

```
optional year_from: number;
```

##### year\_graduated?[](#year_graduated)

```
optional year_graduated: number;
```

##### year\_to?[](#year_to)

```
optional year_to: number;
```

#### screen\_name?[](#screen_name)

```
optional screen_name: string;
```

#### sex?[](#sex)

```
optional sex: 0 | 2 | 1;
```

#### site?[](#site)

```
optional site: string;
```

#### status?[](#status)

```
optional status: string;
```

#### status\_audio?[](#status_audio)

```
optional status_audio: {
  access_key: string;
  album_id: number;
  artist: string;
  date: number;
  duration: number;
  genre_id: number;
  id: number;
  owner_id: number;
  performer: string;
  title: string;
  url: string;
};
```

##### access\_key?[](#access_key)

```
optional access_key: string;
```

##### album\_id?[](#album_id)

```
optional album_id: number;
```

##### artist[](#artist)

```
artist: string;
```

##### date?[](#date)

```
optional date: number;
```

##### duration[](#duration)

```
duration: number;
```

##### genre\_id?[](#genre_id)

```
optional genre_id: number;
```

##### id[](#id-7)

```
id: number;
```

##### owner\_id[](#owner_id)

```
owner_id: number;
```

##### performer?[](#performer)

```
optional performer: string;
```

##### title[](#title-2)

```
title: string;
```

##### url?[](#url)

```
optional url: string;
```

#### timezone?[](#timezone)

```
optional timezone: number;
```

#### trending?[](#trending)

```
optional trending: 0 | 1;
```

#### tv?[](#tv)

```
optional tv: string;
```

#### universities?[](#universities)

```
optional universities: {
  chair: number;
  chair_name: string;
  city: number;
  country: number;
  education_form: string;
  education_status: string;
  faculty: number;
  faculty_name: string;
  graduation: number;
  id: number;
  name: string;
  university_group_id: number;
 }[];
```

##### chair?[](#chair)

```
optional chair: number;
```

##### chair\_name?[](#chair_name)

```
optional chair_name: string;
```

##### city?[](#city-2)

```
optional city: number;
```

##### country?[](#country-2)

```
optional country: number;
```

##### education\_form?[](#education_form)

```
optional education_form: string;
```

##### education\_status?[](#education_status)

```
optional education_status: string;
```

##### faculty?[](#faculty-1)

```
optional faculty: number;
```

##### faculty\_name?[](#faculty_name-1)

```
optional faculty_name: string;
```

##### graduation?[](#graduation-1)

```
optional graduation: number;
```

##### id?[](#id-8)

```
optional id: number;
```

##### name?[](#name-3)

```
optional name: string;
```

##### university\_group\_id?[](#university_group_id)

```
optional university_group_id: number;
```

#### verified?[](#verified)

```
optional verified: 0 | 1;
```

#### wall\_default?[](#wall_default)

```
optional wall_default: "all" | "owner";
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add VK login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/vk
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import VK from "@auth/core/providers/vk"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [VK({ clientId: VK_CLIENT_ID, clientSecret: VK_CLIENT_SECRET })],
})
```

### Resources[](#resources)

-   [VK API documentation](https://vk.com/dev/first_guide)
-   [VK App configuration](https://vk.com/apps?act=manage)

### Notes[](#notes-1)

By default, Auth.js assumes that the VK provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The VK provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/vk.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

By default the provider uses 5.126 version of the API. See [https://vk.com/dev/versions](https://vk.com/dev/versions) for more info. If you want to use a different version, you can pass it to provider’s options object:

```
const apiVersion = "5.126"
providers: [
  Vk({
    accessTokenUrl: `https://oauth.vk.com/access_token?v=${apiVersion}`,
    requestTokenUrl: `https://oauth.vk.com/access_token?v=${apiVersion}`,
    authorizationUrl:
      `https://oauth.vk.com/authorize?response_type=code&v=${apiVersion}`,
    profileUrl: `https://api.vk.com/method/users.get?fields=photo_100&v=${apiVersion}`,
  })
]
```

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

Default type

`P` _extends_ [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

[`VkProfile`](vk#vkprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[vipps](/reference/core/providers/vipps "vipps")[webauthn](/reference/core/providers/webauthn "webauthn")
