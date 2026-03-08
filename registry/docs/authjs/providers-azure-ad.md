[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")azure-ad

# providers/azure-ad

Built-in **Azure AD** integration.[![](https://authjs.dev/img/providers/azure-ad.svg)](https://learn.microsoft.com/en-us/azure/active-directory)

## AzureADProfile[](#azureadprofile)

```
type AzureADProfile = MicrosoftEntraIDProfile;
```

* * *

## default()[](#default)

```
function default(config): OIDCConfig<MicrosoftEntraIDProfile>
```

### Parameters[](#parameters)

Parameter

Type

`config`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`MicrosoftEntraIDProfile`](microsoft-entra-id#microsoftentraidprofile)\> & { `profilePhotoSize`: `64` | `48` | `96` | `120` | `240` | `360` | `432` | `504` | `648`; }

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`MicrosoftEntraIDProfile`](microsoft-entra-id#microsoftentraidprofile)\>

### Deprecated[](#deprecated)

Azure Active Directory has been renamed to [Microsoft Entra ID](/getting-started/providers/microsoft-entra-id). Import this provider from the `providers/microsoft-entra-id` submodule instead of `providers/azure-ad`.

[authentik](/reference/core/providers/authentik "authentik")[azure-ad-b2c](/reference/core/providers/azure-ad-b2c "azure-ad-b2c")
