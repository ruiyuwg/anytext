[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")bankid-no

# providers/bankid-no

Built-in sign in with **BankID Norway** integration.

[![](https://authjs.dev/img/providers/bankid-no.svg)](https://bankid.no)

## BankIDNorwayProfile[](#bankidnorwayprofile)

### See[](#see)

-   [Core conepts - ID Token](https://confluence.bankidnorge.no/confluence/pdoidcl/technical-documentation/core-concepts/id-token)
-   [userinfo](https://confluence.bankidnorge.no/confluence/pdoidcl/technical-documentation/api/userinfo)

### Properties[](#properties)

#### acr[](#acr)

```
acr: string;
```

Uniform Resource Name for [IDP option](https://confluence.bankidnorge.no/confluence/pdoidcl/technical-documentation/core-concepts/identity-providers) being used, including Level of Assurance (LoA).

##### Example[](#example)

```
urn:bankid:bid;LOA=4
```

#### additionalCertInfo[](#additionalcertinfo)

```
additionalCertInfo: {
  certQualified: boolean;
  certValidFrom: number;
  certValidTo: number;
  keyAlgorithm: string;
  keySize: string;
  policyOid: string;
  serialNumber: string;
  subjectName: string;
  versionNumber: string;
};
```

##### certQualified[](#certqualified)

```
certQualified: boolean;
```

##### certValidFrom[](#certvalidfrom)

```
certValidFrom: number;
```

##### certValidTo[](#certvalidto)

```
certValidTo: number;
```

##### keyAlgorithm[](#keyalgorithm)

```
keyAlgorithm: string;
```

##### keySize[](#keysize)

```
keySize: string;
```

##### policyOid[](#policyoid)

```
policyOid: string;
```

##### serialNumber[](#serialnumber)

```
serialNumber: string;
```

##### subjectName[](#subjectname)

```
subjectName: string;
```

##### versionNumber[](#versionnumber)

```
versionNumber: string;
```

#### amr[](#amr)

```
amr: "BID" | "BIM" | "BIS";
```

Name of [IDP option](https://confluence.bankidnorge.no/confluence/pdoidcl/technical-documentation/core-concepts/identity-providers) being used to authenticate the end-user. If the end-user is subject to authentication step-up, note that this value may differ from any `amr` value specified in the `login_hint` parameter of the [authorize](https://confluence.bankidnorge.no/confluence/pdoidcl/technical-documentation/api/authorize) endpoint.

#### at\_hash[](#at_hash)

```
at_hash: string;
```

#### aud[](#aud)

```
aud: string;
```

Always client\_id

#### auth\_time[](#auth_time)

```
auth_time: number;
```

Epoc time

#### azp[](#azp)

```
azp: string;
```

Equals client\_id

#### bankid\_altsub[](#bankid_altsub)

```
bankid_altsub: string;
```

Personal Identifier (PID) / Serial Number) from associated BankID certificate.

#### birthdate[](#birthdate)

```
birthdate: string;
```

#### email?[](#email)

```
optional email: string;
```

Only returned from the `userinfo_endpoint`

#### exp[](#exp)

```
exp: number;
```

#### family\_name[](#family_name)

```
family_name: string;
```

#### given\_name[](#given_name)

```
given_name: string;
```

#### iat[](#iat)

```
iat: number;
```

#### iss[](#iss)

```
iss: string;
```

#### jti[](#jti)

```
jti: string;
```

#### name[](#name)

```
name: string;
```

#### nnin\_altsub?[](#nnin_altsub)

```
optional nnin_altsub: string;
```

[Norwegian National Identity Number (fødselsnummer)](https://www.skatteetaten.no/en/person/foreign/norwegian-identification-number/national-identity-number). It can be an alternative to `sub`. Requires `nnin_altsub` scope at the [authorize](https://confluence.bankidnorge.no/confluence/pdoidcl/technical-documentation/api/authorize) endpoint.

##### Example[](#example-1)

```
181266*****
```

#### originator[](#originator)

```
originator: string;
```

In case of BID or BIM, the issuer of the end user certificate is returned.

##### Example[](#example-2)

```
CN=BankID Bankenes ID-tjeneste Bank CA 2,
OU=988477052,
O=Bankenes ID-tjeneste AS,*
C=NO;OrginatorId=9775;OriginatorName=Gjensidige Bank RA 1
```

#### session\_state[](#session_state)

```
session_state: string;
```

#### sid[](#sid)

```
sid: string;
```

#### sub[](#sub)

```
sub: string;
```

#### tid[](#tid)

```
tid: string;
```

Currently used as an input parameter for the [securityData](https://confluence.bankidnorge.no/confluence/pdoidcl/technical-documentation/api/securitydata) endpoint of the [Fraud Data](https://confluence.bankidnorge.no/confluence/pdoidcl/technical-documentation/advanced-topics/fraud-data) service

#### typ[](#typ)

```
typ: "ID";
```

#### updated\_at[](#updated_at)

```
updated_at: number;
```

* * *

## default()[](#default)

```
function default(config): OIDCConfig<BankIDNorwayProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/bankid-no
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import BankIDNorge from "@auth/core/providers/bankid-no"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Auth0({
      clientId: AUTH_BANKID_NO_ID,
      clientSecret: AUTH_BANKID_NO_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [OpenID Connect Provider from BankID](https://confluence.bankidnorge.no/confluence/pdoidcl)

### Notes[](#notes)

The BankID Norge provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/bankid-no.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`BankIDNorwayProfile`](bankid-no#bankidnorwayprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`BankIDNorwayProfile`](bankid-no#bankidnorwayprofile)\>

[azure-devops](/reference/core/providers/azure-devops "azure-devops")[battlenet](/reference/core/providers/battlenet "battlenet")
