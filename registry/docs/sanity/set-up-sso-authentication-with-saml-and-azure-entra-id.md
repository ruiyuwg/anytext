# Set up SSO authentication with SAML and Azure/Entra ID

> \[!NOTE]
> This developer guide was contributed by Saskia Bobinska (Senior Support Engineer), Benjamin Weinberger (Support Engineer at Sanity.io), Tim Naughton (Sanity Support Engineer), Dain Cilke (Software Engineer @ Sanity.io), and Marco Spinello (Technical writer at Sanity.io. I curate my own typos.).

Configure and enable SSO authentication in your Sanity instance using the SAML protocol and Microsoft Azure AD as an identity provider (IdP.)

During the setup and configuration process, it's a good idea to keep two windows side by side:

- One with [Sanity Manage](https://www.sanity.io/docs/developer-guides/sso-saml).
- The other with the configuration settings of the IdP; in this case, Azure (Microsoft Entra ID).

## Getting ready

### Go to the service configuration (Sanity)

Go to [Sanity Manage](https://www.sanity.io/manage) and select the organization you want to enable SSO for your organization.

To navigate to the service provider configuration inside Sanity Manage:

1. In the organization you intend to add SSO to, go to **Settings → SAML SSO**.
2. If no SAML SSO provider exists, click **Open SAML SSO configuration** and proceed to create and configure a SAML SSO provider.

### Go to the service configuration (Azure/Entra ID)

To navigate to the identity provider configuration in Azure:

1. Log into Azure.
2. Go to **Azure Active Directory**.
3. On the sidebar, go to **Enterprise applications**.

![In Azure, go to Services, and then select Azure Active Directory.](https://cdn.sanity.io/images/3do82whm/next/5ab6659c9083bbc18e62deda29e6138ef81ab136-646x422.png)

![On the sidebar, select Enterprise applications.](https://cdn.sanity.io/images/3do82whm/next/faf8dcdbec3a52ebb467d6b4bc674f7267168c64-516x764.png)

In **Enterprise applications**:

1. Select an existing SAML application or create a new enterprise application.
   If you create a new application, you can also integrate any other applications not available in the gallery.
2. Go to Set **up single sign on**, and then choose the SAML sign-on method to use.

![Set up single sign-on.](https://cdn.sanity.io/images/3do82whm/next/582f16aa4f2e96702fbf4015b609ce16efa73ed9-704x300.png)

![Choose the SAML single sign-on method to use.](https://cdn.sanity.io/images/3do82whm/next/a3c77bfd1288363513fbcb8c2eba105c4d5aca3a-700x364.png)

If you're keeping two browser tabs or windows open side by side, now you should have one on the configuration screen inside Sanity Manage, and the other on the configuration screen in Azure.

## Configuring the Azure IdP

### Basic SAML Configuration

1. In Azure, edit the **Basic SAML Configuration** form.

2. Add an **Identifier (Entity ID)** to the basic SAML configuration.1. \* Identifier (Entity ID) -> Sanity entity ID\* in Sanity Manage.

3. Add a **Reply URL (Assertion Consumer Service URL)**.1. *Reply URL (Assertion Consumer Service URL) ->  Sanity callback URL* in Sanity Manage.

4. Click **Save**.

![Edit the Basic SAML Configuration form.](https://cdn.sanity.io/images/3do82whm/next/d35116e2665bd60c8d831ba4d9aa4076c876e4ed-1440x364.png)

![The Entity ID in Azure corresponds to the Sanity entity ID inside Sanity Manage.](https://cdn.sanity.io/images/3do82whm/next/c2708b282b7b68d938cb5f1bc336940fcaca14ef-384x216.png)

![The Reply URL (Assertion Consumer Service URL) in Azure corresponds to the Sanity callback URL inside Sanity Manage.](https://cdn.sanity.io/images/3do82whm/next/3451d846dbf6ea46424433cbac85654f08029567-720x206.png)

## Attributes & Claims

### Required Claim

1. In Azure, edit the **Attributes & Claims** form.
2. Edit the **Unique User Identifier (Name ID)** claim, and change the **Name identifier format** to **Persistent**.
3. Click **Save**.

![Edit the Unique User Identifier (Name ID) claim.](https://cdn.sanity.io/images/3do82whm/next/089281130cd065e95672fa2ab4241cdb6440fb49-792x234.png)

![Change the Name identifier format to Persistent.](https://cdn.sanity.io/images/3do82whm/next/4d0a84456cd0d0d1547af866afc635ff1defb202-1900x808.png)

### Additional Claims

Now, configure Azure to send the claims that Sanity requires in the expected form.
The claims (attributes) that Sanity expects are listed inside Sanity Manage:

![Inside Sanity Manage you can view the claims (attributes) that Sanity requires from Azure.](https://cdn.sanity.io/images/3do82whm/next/289a5d6065b7dfa5805a9cd12a461e87aa48f34e-1584x476.png)

For each claim:

1. Ensure the claim **Name** matches the attribute name in the table above.
2. Ensure the **Namespace** is deleted.
3. Ensure the **Name format** is set to **Unspecified**.
4. Ensure the **Source attribute** is mapped correctly. This varies, and it depends on the specific Azure Active Directory configuration.

![In the form, set the appropriate values for each claim.](https://cdn.sanity.io/images/3do82whm/next/34bbc8cae909e6c55fa2d8498312d3d61644ca5e-1934x830.png)

Once all claims have been added:

![The mapping of Azure claims and the corresponding Sanity attributes.](https://cdn.sanity.io/images/3do82whm/next/ed5da2bd6c5ab19ac4a5757dc0445b71d89a6c66-1442x360.png)

Sanity requires `user.firstName` and `user.surname`. The mapping in the example replaces both fields with `user.displayname`.

### Group Claims

Enterprise customers can map user identity provider roles to service provider roles. For example, users with an Azure `example-azure-user-role` role are mapped to the Sanity `viewer` role when they log in.

- To support the mapping functionality, you must configure the identity provider to send the groups of the user.
- To do so, Sanity Manage expects a `groups` claim with the format set to `unspecified`.

> \[!WARNING]
> *Note: with Azure/Entra ID, you will be sending the Group ID and not the name of the group in your IdP. If you send the name, you may not see your role mappings correctly when logging into Sanity*

![Inside Sanity Manage, set Name to groups and Format to unspecified. ](https://cdn.sanity.io/images/3do82whm/next/0c3a9ae47ad308db111a16c3fac735151b03f877-1586x242.png)

In Azure, add a new group claim:

![In Azure, select + Add a group claim.](https://cdn.sanity.io/images/3do82whm/next/953a5eef6b8ba38663e52590f96e5ce178dd0447-1662x892.png)

Select the groups that you want Azure to send to Sanity, and assign the group claim a descriptive name:

![In Azure, select the groups used to populate SAML tokens issued to Sanity. ](https://cdn.sanity.io/images/3do82whm/next/801b74d77d4b131b52139642e3cc885caa4f2ba7-1116x1794.png)

Once you're done, save the changes.

## Configuring the Sanity Service Provider

### Sign-On URL and Issuer

In Azure, browse to the `Set up {application name}` block:

![In Azure, go to the application setup to get the Azure URLs for login and authentication..](https://cdn.sanity.io/images/3do82whm/next/affefac7043ba67bab63f59c21463fe071033937-1538x418.png)

Get the Azure URLs for login and authentication, and add them to the **Your Identity Provider details** configuration section inside Sanity Manage:

![In Your Identity Provider details, set the Azure URLs for login, auth, and logout.](https://cdn.sanity.io/images/3do82whm/next/d4fd95f60ca3e8851ebcb6d41e7ea63114051d57-1700x676.png)

In this scenario:

1. Azure **Login URL** maps to Sanity **Identity Provider Single Sign-On URL**.
2. Azure **Azure AD Identifier** maps to Sanity **Identity Provider issuer**.

### InResponseTo

In the SAML specification, `InResponseTo` is defined as

> *The ID of a SAML protocol message in response to which an attesting entity can present the assertion.*

This setting is identity provider-specific. Azure doesn’t support it. Therefore, ensure that **Enable InResponseTo** is deselected/disabled.

![Enable InresponseTo must be disabled/deselected.](https://cdn.sanity.io/images/3do82whm/next/9aa6f690939977d61a90f08844af5d57e774ecf5-1546x158.png)

### Signed SAML Assertion

The **Signed SAML Assertion** option notifies the Sanity instance that the identity provider is configured to use the signing certificate found in the Sanity service provider details section.

![Example certificate in the Signing certificate section.](https://cdn.sanity.io/images/3do82whm/next/6e3b733b9ce4bbd11718196658fcb5693081440a-1580x406.png)

This is an optional step configured in **Verification certificates**:

![Verification certificate is an optional step to configure signing certificates with a signed assertion.](https://cdn.sanity.io/images/3do82whm/next/0e2718c861204ca530273abba9d867413e35688b-1366x196.png)

Unless you have already uploaded the certificate, leave the **Want assertion signed** deselected under **Signed SAML Assertion**.

![If no certificate has been uploaded, leave Want assertion signed deselected under Signed SAML Assertion.](https://cdn.sanity.io/images/3do82whm/next/4d1eddac90a89a91e98614b1f098712500ab730f-1578x158.png)

### X.509 Certificate

To get an [X.509](https://en.wikipedia.org/wiki/X.509) certificate:

1. Go to **SAML Certificates** and click **Edit**.
2. Download the certificate as **PEM certificate download**.
3. Open the downloaded certificate file with any text editor, and copy-paste the certificate content into Sanity Manage.

![  Click Edit in SAML Certificates.](https://cdn.sanity.io/images/3do82whm/next/092c62ea49f0bffe485a58d6cf0e615d4791f93d-1532x766.png)

![Select PEM certificate download.](https://cdn.sanity.io/images/3do82whm/next/bf9d54643bb3e2a1bd9aa18d5bffaa9ad7ca2597-1672x702.png)

![Paste the certificate body into Sanity Manage.](https://cdn.sanity.io/images/3do82whm/next/70d9464b81e02c8c079e6a584a0e1e79afefb635-1612x292.png)

## Save

Ensure you save all changes inside Sanity Manage and in Azure.

## Common errors

- Receiving a 422 error: `{"statusCode":422,"error":"Unprocessable Entity","message":"child \"attributes\" fails because [\"value\" must contain at least one of ...`- There is an issue with your claims. All claims are case sensitive and are required. Make sure the type is set to unspecified and that the namespace URI is empty and the name format is 'unspecified'

- My users are being assigned the default role and not their group mapped role- Ensure your mappings in Sanity are going off the Group ID within Azure/Entra ID as the ID is sent, not the name.

- You may need to enable "Auto update roles on login". When a SAML SSO user logs in to Sanity their roles will be updated to reflect those defined by the project's role mappings. If you change the role mappings the user's roles will not be reset if this is not enabled.

- Do you have a [default relay state](https://www.sanity.io/docs/developer-guides/setting-up-a-default-relay-state-for-idp-initiated-saml-logins) setup?

- When I access Sanity from my IdP dashboard, I receive:
  `{ "id": "3431pXO", "displayName": "Sanity Support", "email": "sanity@sanity.io", "familyName": "Sanity Support", "givenName": "Sanity", "middleName": null, "imageUrl": null, "provider": "saml-f6a94", "tosAcceptedAt": "2024-11-20T18:51:57.264Z", "createdAt": "2024-11-20T18:51:57.264Z", "updatedAt": "2024-11-20T18:51:57.535Z", "isCurrentUser": true, "providerId": "49jc94jf949930304jkojfciojlj934003490943" }`- It does not appear you have set up your default relay state within your IdP, you will need to also configure within your Idp settings. You can follow our [guide on setting the default relay state](https://www.sanity.io/docs/developer-guides/setting-up-a-default-relay-state-for-idp-initiated-saml-logins).

## Further reading

- [Setting up Single Sign-On with SAML](https://www.sanity.io/docs/developer-guides/sso-saml)
- [Third-Party Login (SSO)](https://www.sanity.io/docs/developer-guides/third-party-login)
