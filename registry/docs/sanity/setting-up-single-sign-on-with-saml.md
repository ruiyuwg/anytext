# Setting up Single Sign-On with SAML

## Introduction

[SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) [SSO](https://en.wikipedia.org/wiki/Single_sign-on) enables your organization to control access to Sanity projects by using a third-party identity provider, such as [Okta](https://www.okta.com/), [Google](https://support.google.com/a/answer/6087519?hl=en), or [Azure Active Directory](https://azure.microsoft.com/en-us/products/active-directory/). When you enable SAML (Security Assertion Markup Language) SSO (Single Sign-on), users who log into a project through studio or the management interface, will be authenticated through the organization’s identity provider. Once they log in, they will be assigned roles according to rules based on group membership from their user record in the identity provider.

## Prerequisites

- An [organization](https://www.sanity.io/docs/platform-management/projects-organizations-and-billing) with a project on [Enterprise plan](https://www.sanity.io/pricing) or [Growth plan with the SAML SSO add-on](https://www.sanity.io/pricing#add-ons).
- An external Identity Provider which supports SAML authentication (e.g., [Okta](https://www.okta.com/), [Google](https://support.google.com/a/answer/6087519?hl=en), or [Azure AD](https://azure.microsoft.com/en-us/products/active-directory/)).
- Organization administrator permissions.

## Setting up Single Sign-On with SAML

### 1. Create a new SAML SSO configuration for your organization

Access your organization's settings by going to [sanity.io/manage](https://sanity.io/manage) and select the appropriate organization in the dropdown menu in the upper left corner. Then select the SAML SSO section in the left sidebar, and click the button to create a SAML SSO provider.

> \[!WARNING]
> Gotcha
> SAML SSO is available only for Enterprise plan or Growth plan with SAML SSO add-on.
> [Read more about our plans and pricing options](https://www.sanity.io/pricing)

A new dialog will appear informing you that SAML SSO has not yet been configured. Click the button labeled **Configure** to start setting up your provider. This will generate the details needed to connect your identity provider with your organization on [Sanity.io](http://sanity.io/).

![Dialog informing the user that SAML SSO has not yet been configured](https://cdn.sanity.io/images/3do82whm/next/af796cdb46bca2202072958c9e08f1d7c2cd7000-4020x2259.png)

### **2. Use the details presented to configure the external identity provider**

The process of configuring SAML SSO starts with Sanity providing you with the necessary details for setting up your external identity provider. You can use the copy buttons to put the correct strings on the clipboard. It's also possible to download the settings as a SAML XML file.

![Shows the Sanity provider details screen with 4 fields highlighted with sequential integers from 1 to 4.. These are labeled "Sanity callback URL", "Sanity entity ID", "NameID Format" and "Attributes"](https://cdn.sanity.io/images/3do82whm/next/2f76e590de33b08a16622d5da0ce8a5e854623a2-4020x3090.png)

Be aware that different providers may use different terminology. Shown here is the interface for entering these details if you're using [Okta.com](https://www.okta.com/). If you're using Azure AD, please also see the guide to [set up SSO authentication with SAML and Azure](https://www.sanity.io/docs/developer-guides/set-up-sso-authentication-with-saml-and-azure). Note that “callback URL” is called “Single sign on URL.”

![Shows the Okta SAML settings screen with 4 fields highlighted with sequential integers from 1 to 4. These are labeled "Single sign-on URL", "Audience URI (SP Entity ID", "Name ID Format" and "Attribute statements"](https://cdn.sanity.io/images/3do82whm/next/3121993fea41db265f77342257c3c47e213c0bf6-4020x3090.png)

Note the mapping of attributes for user accounts. Sanity requires `email`, `firstName`, and `lastName` to be mapped to corresponding values from the identity provider. `id` and `displayName` are optional.

> \[!WARNING]
> Gotcha
> Make sure to set the groups in the external identity provider that should have access to the integration.

### 3. Configure the SAML service provider with the settings of the external identity provider

Having set up the external identity provider with the parameters you obtained from Sanity, it is now time to do the reverse. Scroll down to the next section with the heading **Your Identity Provider details.** Go ahead and fill in the appropriate values.

> \[!TIP]
> Protip
> Many providers will let you download the required settings as an XML file. If you have such a file, click on the top right button labeled **Upload** new metadata to save yourself some tedious copy/pastes.

### 4. Name your configuration and set options for role mapping

Scroll to the next section to give your configuration a meaningful name, and choose whether or not to automatically update roles whenever a user logs in. You may also set the length of user sessions to your liking before saving your configuration.

> \[!NOTE]
> Automatically update roles
> If the option to automatically update roles is selected, the mapping of roles will happen every time a user logs in using the project-specific login url. This will also disallow manual management of roles.

![Show a section of the Sanity project management console labeled "General settings for SAML SSO across all projects". The following options can be set:  "Configuration name", "Auto update roles on login" and "Session TTL"](https://cdn.sanity.io/images/3do82whm/next/6d028886f556fd521c639de8ee893601ac7a79f1-4020x2259.png)

### 5. Set a slug for your organization

At the bottom of the SAML SSO configuration page you'll be able to define a unique slug that will identify your organization in certain SSO workflows, such as logging in via CLI or logging into the project management console. Note that this setting can also be accessed under **General settings**, and might therefore already have a value set.

> \[!NOTE]
> Your organization slug must:
>
> - Be globally unique
> - Be between 1-20 characters long
> - Start with an alphanumeric character
> - Contain no other characters than `a-z`, `0-9` and `-`

![Shows the UI for specifying a slug for an organization](https://cdn.sanity.io/images/3do82whm/next/7f5b45a6f5bf426fec9b2ce7747ed2fe20b8f3d1-4020x2259.png)

```sh
# Example CLI login using the slug 'saml-docs'
sanity login --sso saml-docs
```

### 6. Enable SSO and configure role mapping for the desired project(s)

After saving your settings you are ready to move on and enable SSO for one or several of your projects. In the process, you’ll also configure role mapping for each project.

![Shows a list of projects belonging to an organization, both labeled as not having SAML SSO configured yet](https://cdn.sanity.io/images/3do82whm/next/d06f4bd99e65405a58c70dc1981e322a10d5043c-4020x2259.png)

*This is a paid feature, available as an addon on the Growth plan.*

In the role mapping dialog, you’ll set a default fallback role which will be applied to users who don’t belong to any groups matching your mapping rules, as well as rules to map groups from your SSO provider to roles in this project. Role mapping rules are evaluated against the group membership attribute of the user identity on the identity provider, and they support [regular expression](https://github.com/google/re2/wiki/Syntax) syntax (observe back references and lookahead assertions are not supported). A few examples are listed below:

- `editors` will match *exactly* `editors`
- `.*-admin` will match `news-admin`, `sales-admin`, `-admin` and so forth
- `[aA]dmin` will match `admin` & `Admin`

![A role mapping dialog with a default fallback role and three group names mapped to Sanity roles](https://cdn.sanity.io/images/3do82whm/next/eeea636533b5c2bd061c7a0a8434e6ea5cad38e5-4020x3090.png)

### 7. Test your configuration by attempting to login

Before setting up your studio to use the new SSO setting, make sure everything is working as expected by visiting the project-specific link provided and log in to your project management console. Copy-paste the Sanity manage project-specific login URL into your browser's address bar. If correctly set up, this will log you out of your current account and into the user account given to you by your SSO identity provider. It might be convenient to test this in another browser.

### 8. Configure the studio to use the new SSO provider

Next, you'll want to update your Studio to show the login screen from your SSO identity provider by using the [Auth API](https://www.sanity.io/docs/studio/custom-auth). Instructions for both v3 and v2 studios can be found by expanding the dropdown labeled **SAML SSO login for Sanity Studio**.

![Shows a dialog confirming that SAML SSO is activated and configured. Also shown is example code for setting up your studio for SAML SSO authentication.](https://cdn.sanity.io/images/3do82whm/next/bd5d9cfeaec98a0c2a7fdb973e62a28c167ef808-2632x2032.png)

> \[!TIP]
> Protip
> By default the code snippet will show how to add SAML SSO to the list of login options. If you want to replace the list of options entirely, change the value of `mode` from "`append`" to "`replace`".

### 9. Verify by logging in with SSO

Finally, verify that the configuration work as expected by logging in as a user from your identity provider. Your login screen should list only the appropriate options.

![Shows the Sanity Studio login screen with the following alternative for logging in: "Google", "Github", "E-mail / password", and "SAML"](https://cdn.sanity.io/images/3do82whm/next/a6bde8176914f60b15bb1c0838371a7f196096d8-4020x2259.png)

After logging in at least once with SAML SSO, you may want to check your organization's members in the management interface. You'll see a visual indicator on each member's avatar indicating what sign-in-method they use, allowing you to quickly make any adjustments – such as deleting or demoting accounts outside your identity provider domain.

![Shows a list of users with different roles and different icons that reflect their chosen method of authentication](https://cdn.sanity.io/images/3do82whm/next/7860adfc3c9a109729f9188efc23f7c0e3eb395c-4020x2259.png)

> \[!WARNING]
> Gotcha
> SAML SSO members will take up an additional seat towards your quota since they are considered individual users in Sanity. Checking your member list for duplicates is recommended after changing your identity provider.
