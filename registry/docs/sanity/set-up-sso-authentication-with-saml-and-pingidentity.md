# Set up SSO authentication with SAML and PingIdentity

> \[!NOTE]
> This developer guide was contributed by Tim Naughton (Sanity Support Engineer).

Expands upon our general [SAML setup guide](https://www.sanity.io/docs/developer-guides/sso-saml) to configure and enable SSO authentication in your Sanity instance using the SAML protocol and PingIdentity (Cloud) as an identity provider (IdP)

During the setup and configuration process, it's a good idea to keep two windows side by side:

- One with [Sanity Manage](https://www.sanity.io/docs/developer-guides/sso-saml).
- The other with the configuration settings of the IdP; PingIdentity (Cloud).

## Getting ready

### Go to the service configuration (Sanity)

Go to [Sanity Manage](https://www.sanity.io/manage) and select the organization you want to enable SSO for your organization.

To navigate to the service provider configuration inside Sanity Manage:

1. In the organization you intend to add SSO to, go to **Settings → SAML SSO**.
2. If no SAML SSO provider exists, click **Open SAML SSO configuration** and proceed to create and configure a SAML SSO provider.
3. Optional: Download Sanity's SSO details as XML (This will make configuring Ping easier)
4. Disable InResponseTo setting in Sanity
5. Optional: Enable auto update roles on login - This will update the users role when they sign in with SAML

### Go to the service configuration in PingIdentity

1. In PingIdentity add an app.
2. Select SAML and "Configure"
3. Select import metadata and attach the XML from earlier or manually enter in Sanity's configuration details from the Sanity Manage page. Here are the mappings:1. *ACS URLS -> Sanity callback URL*
4. *Entity ID -> Sanity entity ID*

## Configuring Ping Identity

### Configure Attribute Mapping

You will need to configure the attributes sent to Sanity from Ping Identity, several are required including: email, firstName, and lastName. these can be found within the SSO setting from the Getting Ready step.

> \[!WARNING]
> Attributes are case sensitive and if not inputted correctly may service as a 422 error.

### Configure Groups

Enterprise customers can map user identity provider roles to service provider roles. For example, users with a Ping Identity `example-admin-user-role` role are mapped to the Sanity `viewer` role when they log in.

- To support the mapping functionality, you must configure the identity provider to send the groups of the user.

- [Edit/enable role mapping](https://www.sanity.io/docs/developer-guides/sso-saml) in Sanity

- In Ping Identity, go to the 'Access' Tab

- Select the groups you wish to send to Sanity and click save

- You will need to ensure these are also added to your Attributes within Ping. Ensure that the name is set to `groups`

## Update Configuration within Sanity

Now that you have set up everything in Ping, you can now upload your certification and update the configuration on the Sanity side.

1. You can download the configuration and cert from Ping and Upload directly or you can manually enter in the configuration below are the mappings.1. *Identity Provider Single Sign-On URL* -> *Single Signon Service*
2. \*Identity Provider issuer \*-> *Issuer ID*

## Save

Ensure you save all changes inside Sanity Manage and Ping Identity

### Common Errors

- Receiving a 422 error: `{"statusCode":422,"error":"Unprocessable Entity","message":"child \"attributes\" fails because [\"value\" must contain at least one of ...`- There is an issue with your claims. All claims are case sensitive and are required.

- Groups are not being role mapped properly- Ensure you are sending the groups attribute and it is mapped to Group Names in your Ping configuration. It will need to be lower case exactly like 'groups'

- When I access Sanity from my IdP dashboard, I receive:
  `{ "id": "3431pXO", "displayName": "Sanity Support", "email": "sanity@sanity.io", "familyName": "Sanity Support", "givenName": "Sanity", "middleName": null, "imageUrl": null, "provider": "saml-f6a94", "tosAcceptedAt": "2024-11-20T18:51:57.264Z", "createdAt": "2024-11-20T18:51:57.264Z", "updatedAt": "2024-11-20T18:51:57.535Z", "isCurrentUser": true, "providerId": "49jc94jf949930304jkojfciojlj934003490943" }`- It does not appear you have set up your default relay state within your IdP, you will need to also configure within your Idp settings. You can follow our [guide on setting the default relay state](https://www.sanity.io/docs/developer-guides/setting-up-a-default-relay-state-for-idp-initiated-saml-logins).
