### Default error classes

The default error classes are available from the `@strapi/utils` package and can be imported and used in your code. Any of the default error classes can be extended to create a custom error class. The custom error class can then be used in your code to throw errors.

<!-- ::: tab Validation

The `ValidationError` and `YupValidationError` classes are specific error classes designed to be used with the built in validations system and specifically format the errors coming from 





# Admin panel
Source: //cms/features/admin-panel

# Administration panel

The admin panel is the back office of your Strapi application. From the admin panel, you will be able to manage content-types and write their actual content, but also manage users, both administrators and end users of your Strapi application.

### Modifying profile information (name, email, username)

1. Go to the *Profile* section of your profile.
2. Fill in the following options:

| Profile & Experience | Instructions                                      |
| -------------------- | ------------------------------------------------- |
| First name           | Write your first name in the textbox.             |
| Last name            | Write your last name in the textbox.              |
| Email                | Write your complete email address in the textbox. |
| Username             | (optional) Write a username in the textbox.       |

3. Click on the **Save** button.

### Changing account password

1. Go to the *Change password* section of your profile.
2. Fill in the following options:

| Password modification | Instructions                                |
| --------------------- | ------------------------------------------- |
| Current password      | Write your current password in the textbox. |
| Password              | Write the new password in the textbox.      |
| Password confirmation | Write the same new password in the textbox. |

3. Click on the **Save** button.

You can click on the  icon for the passwords to be shown.

### Choosing interface language

In the *Experience* section of your profile, select your preferred language using the *Interface language* dropdown.

Keep in mind that choosing an interface language only applies to your account on the admin panel. Other users of the same application's admin panel can use a different language.

### Choosing interface mode (light, dark)

By default, the chosen interface mode is based on your browser's mode. You can however, in the *Experience* section of your profile, manually choose either the Light Mode or Dark Mode using the *Interface mode* dropdown.

Keep in mind that choosing an interface mode only applies to your account on the admin panel.

### Resetting guided tour

In the *Guided tour* section of your profile, you can click the **Reset guided tour** button to reset the guided tour which is available in the homepage of the admin panel. It allows you to see again the guided tour of the admin panel if you closed it beforehand, and to follow again its various steps.

### Customizing the logo

**Path to configure the admin panel:**  *Settings > Global settings > Overview*

The default Strapi logos, displayed in the main navigation of a Strapi application and the authentication pages, can be modified.

1. Click on the upload area for *Menu logo* or *Auth logo*.
2. Upload your chosen logo, either by browsing files, drag & dropping the file in the right area, or by using a URL. The logo shouldn't be more than 750x750px. 
3. Click on the **Upload logo** button in the upload window.
4. Click on the **Save** button in the top right corner.

Once uploaded, the new logo can be replaced with another one , or reset  with the default Strapi logo or the logo set in the configuration files.

Both logos can also be customized programmatically via the Strapi application's configuration files (see [Admin panel customization](/cms/admin-panel-customization/logos)). However, the logos uploaded via the admin panel supersedes any logo set through the configuration files.

## Usage

In order to access the admin panel, your Strapi application must be launched, and you must be aware of the URL to its admin panel (e.g. `api.example.com/admin`).

To access the admin panel:

1. Go to the URL of your Strapi application's admin panel.
2. Enter your credentials to log in.
3. Click on the **Login** button. You should be redirected to the homepage of the admin panel.

If you prefer or are required to log in via an SSO provider, please refer to the [Single Sign-On documentation](/cms/features/sso).



# API Tokens
Source: //cms/features/api-tokens

# API Tokens

API tokens allow users to authenticate REST and GraphQL API queries (see [APIs introduction](/cms/api/content-api)).

Prefer read‑only tokens for public access, scope server tokens to only what you need, rotate long‑lived tokens, and store them in a secrets manager. Never expose admin tokens in client‑side code.





This key is used to encrypt and decrypt token values. Without this key, tokens remain usable, but will not be viewable after initial display. New Strapi projects will have this key automatically generated.

## Usage

Using API tokens allows executing a request on [REST API](/cms/api/rest) or [GraphQL API](/cms/api/graphql) endpoints as an authenticated user.

API tokens can be helpful to give access to people or applications without managing a user account or changing anything in the Users & Permissions plugin.

When performing a request to Strapi's REST API, the API token should be added to the request's `Authorization` header with the following syntax: `bearer your-api-token`.

Read-only API tokens can only access the `find` and `findOne` functions.



# Audit Logs
Source: //cms/features/audit-logs

# Audit Logs

The Audit Logs feature provides a searchable and filterable display of all activities performed by users of the Strapi application.



## Usage

**Path to use the feature:**  Settings > Administration Panel - Audit Logs

The Audit Logs feature logs the following events:

| Event | Actions |
| --- | --- |
| Content Type | `create`, `update`, `delete` |
| Entry (draft/publish) | `create`, `update`, `delete`, `publish`, `unpublish` |
| Media | `create`, `update`, `delete` |
| Login / Logout | `success`, `fail` |
| Role / Permission | `create`, `update`, `delete` |
| User | `create`, `update`, `delete` |

For each log item, the following information is displayed:

- Action: type of action performed by the user (e.g.`create` or `update`).
- Date: date and time of the action.
- User: user who performed the action.
- Details: displays a modal with more details about the action (e.g. the User IP address, the request body, or the response body).

### Filtering logs

By default, all logs are displayed in reverse chronological order. You can filter the logs by:

- Action: select the type of action to filter by (e.g `create` or `update`).
- User: select the user to filter by.
- Date: select a date (range) and time to filter by.

### Accessing log details

For any log item, click the  icon to access a modal with more details about that action. In the modal, the *Payload* section displays the details in an interactive JSON component, enabling you to expand and collapse the JSON object.



# Content History
Source: //cms/features/content-history

# Content History

The Content History feature, in the 



## Usage

**Path to use the feature:**  Content Manager  From the edit view of a content type: click  (top right corner) then  **Content History**.

### Browsing Content History

With Content History, you can browse your content through:

- The main view on the left, which lists the fields and their content for the version selected in the sidebar on the right.
- The sidebar on the right, which lists the total number of versions available, and for each version:
  - the date and time when the version was created,
  - the user who created it,
  - and whether its status is Draft, Modified, or Published (see [Draft & Publish](/cms/features/draft-and-publish) for more information about document statuses).

The main view of Content History clearly states whether a field was inexistent, deleted, or renamed in other versions of the content-type. Fields that are unknown for the selected version will be displayed under an _Unknown fields_ heading below the other fields.

### Restoring a previous version

You can choose to restore a previous version of a document. When restoring a version, the content of this version will override the content of the current draft version. The document switches to the Modified status and you will then be able to publish the content whenever you want (see [Publishing a draft](/cms/features/draft-and-publish#publishing-a-draft)).

1. Browse the Content History and select a version via the sidebar on the right.
2. Click the **Restore** button.
3. In the _Confirmation_ window, click **Restore**.  

If the [Internationalization (i18n)](/cms/features/internationalization) feature is enabled for the content-type, restoring a version with a unique field (i.e. a field whose content is the same for all locales) will restore the content of this field for all locales.



# Content Manager
Source: //cms/features/content-manager

# Content Manager

From the 
  


## Overview

<!--



### Configuring the edit view



## Usage



### Creating & Writing content

In Strapi, writing content consists in filling up fields, which are meant to contain specific content (e.g. text, numbers, media, etc.). These fields were configured for the collection or single type beforehand, through the [Content-type Builder](/cms/features/content-type-builder).



#### Dynamic zones

Dynamic zones are a combination of components, which themselves are composed of several fields. Writing the content of a dynamic zone requires additional steps in order to access the fields.



- Not all entries are listed by default: more can be displayed by clicking on the **Load more** button. Also, instead of choosing an entry by scrolling the list, you can click any relational field drop-down list and type to search a specific entry.

- Click on the name of an entry to open it. The behavior depends on the **Relation open behavior** setting configured in the edit view: the entry opens in a modal (default), navigates to its full edit page, or opens in a new browser tab. See [Configuring the edit view](#edit-view-settings) to change this setting.

- If the [Draft & Publish feature](/cms/features/draft-and-publish) is activated for the content-type the relational field belongs to, you will notice blue or green dots next to the entries names in the drop-down list. They indicate the status of the entry, respectively draft or published content.
- If the [Internationalization (i18n) feature](/cms/features/internationalization) is enabled for the content-type, the list of entries may be limited or differ from one locale to another. Only relevant entries that can possibly be chosen for a relational field will be listed.



### Deleting content

You can delete content by deleting any entry of a collection type, or the default entry of a single type.

1. In the edit view of the entry, click on  at the top right of the interface, and click the **Delete document** button.If Internationalization is enabled for the content-type, you can also choose to delete only the currently selected locale by clicking on the **Delete locale** button.
2. In the window that pops up, click on the **Confirm** button to confirm the deletion.

You can delete entries from the list view of a collection type, by clicking on   on the right side of the entry's record in the table, then choosing the  **Delete document** button.If [Internationalization](/cms/features/internationalization) is enabled for the content-type, **Delete document** deletes all locales while **Delete locale** only deletes the currently listed locale.



# Content-type Builder
Source: //cms/features/content-type-builder

# Content-type Builder

From the 
  


## Overview

  
3. Click the **Finish** button in the dialog.
4. Click the **Save** button in the Content-Type Builder navigation.

#### Fields

From the table that lists the fields of your content-type, you can:
- Click on the 



####  Rich Text (Blocks)

The Rich Text (Blocks) field displays an editor with live rendering and various options to manage rich text. This field can be used for long written content, even including images and code.



If using the Blocks editor, we recommend that you also use the 



####  Date

The Date field can display a date (year, month, day), time (hour, minute, second) or datetime (year, month, day, hour, minute, and second) picker.


 
####  Password

The Password field displays a password field that is encrypted.



####  Media

The Media field allows to choose one or more media files (e.g. image, video) from those uploaded in the Media Library of the application.



####  Relation

The Relation field allows to establish a relation with another content-type, that must be a collection type.

There are 6 different types of relations:

-  One way: Content-type A *has one* Content-type B
-  One-to-one: Content-type A *has and belong to one* Content-type B
-  One-to-many: Content-type A *belongs to many* Content-type B
-  Many-to-one: Content-type B *has many* Content-type A
-  Many-to-many: Content-type A *has and belongs to many* Content-type B
-  Many way: Content-type A *has many* Content-type B

Relations where at least one side can reference several entries are called multi relations. In the Content-type Builder, this includes one-to-many, many-to-one, many-to-many, and many-way relations. These relations appear as multi-select fields in the Content Manager and return arrays from the REST, GraphQL, and Document Service APIs; while single relations (one-way and one-to-one relations) return a single linked entry (see [Managing relations with API requests](/cms/api/rest/relations) for more information).



To model a navigable tree of pages:
1. Add a `Page` collection type with a "Slug" (UID) and (optionally) an "Order" (Integer) field to control sibling ordering.
2. Create a Relation field from `Page` to `Page` and choose *Many-to-one* so each page can set its "Parent page". Strapi automatically provides the inverse "Children pages" relation.
3. When reading data, populate `children` recursively to load the tree. Keep the recursion depth small to avoid large responses.


Example
```json title="Populate nested children for a page tree"
{
  populate: {
    children: {
      fields: ['title', 'slug'],
      populate: {
        children: {
          fields: ['title', 'slug'],
        },
      },
    },
  },
}
```


The same populate pattern works with GraphQL or the Document Service API (see [Understanding populate guide](/cms/api/rest/guides/understanding-populate#populate-several-levels-deep-for-specific-relations)).

####  Boolean

The Boolean field displays a toggle button to manage boolean values (e.g. Yes or No, 1 or 0, True or False).



####  JSON

The JSON field allows to configure data in a JSON format, to store JSON objects or arrays.



####  Email

The Email field displays an email address field with format validation to ensure the email address is valid.



####  Password

The Password field displays a password field that is encrypted.



####  Enumeration

The Enumeration field allows to configure a list of values displayed in a drop-down list.



Enumeration values should always have an alphabetical character preceding any number as it could otherwise cause the server to crash without notice when the GraphQL plugin is installed.

####  UID

The UID field displays a field that sets a unique identifier, optionally based on an existing other field from the same content-type.



The UID field can be used to create a slug based on the Attached field.

####  Rich Text (Markdown)

The Rich Text (Markdown) field displays an editor with basic formatting options to manage rich text written in Markdown. This field can be used for long written content.



####  Components

Components are a combination of several fields. Components allow to create reusable sets of fields, that can be quickly added to content-types, dynamic zones but also nested into other components.

When configuring a component through the Content-type Builder, it is possible to either:

- create a new component by clicking on *Create a new component* (see [Creating a new component](#new-component)),
- or use an existing one by clicking on *Use an existing component*.



####  Dynamic zones

Dynamic zones are a combination of components that can be added to content-types. They allow a flexible content structure as once in the Content Manager, administrators have the choice of composing and rearranging the components of the dynamic zone how they want.



After configuring the settings of the dynamic zone, its components must be configured as well. It is possible to either choose an existing component or create a new one.

When using dynamic zones, different components cannot have the same field name with different types (or with enumeration fields, different values).

#### Custom fields

[Custom fields](/cms/features/custom-fields) are a way to extend Strapi’s capabilities by adding new types of fields to content-types or components. Once installed (see [Marketplace](/cms/plugins/installing-plugins-via-marketplace) documentation), custom fields are listed in the _Custom_ tab when selecting a field for a content-type.

Each custom field type can have basic and advanced settings. The  lists available custom fields, and hosts dedicated documentation for each custom field, including specific settings.

### Deleting content-types

Content types and components can be deleted through the Content-type Builder. Deleting a content-type automatically deletes all entries from the Content Manager that were based on that content-type. The same goes for the deletion of a component, which is automatically deleted from every content-type or entry where it was used.

1. In the  Content-type Builder sub navigation, click on the name of the content-type or component to delete.
2. In the edition interface of the chosen content-type or component, click on the  **Edit** button on the right side of the content-type's or component's name.
3. In the edition window, click on the **Delete** button.
4. In the confirmation window, confirm the deletion.
5. Click on the **Save** button in the Content-type Builder sub navigation.

Deleting a content-type only deletes what was created and available from the Content-type Builder, and by extent from the admin panel of your Strapi application. All the data that was created based on that content-type is however kept in the database. For more information, please refer to the related .



# Custom Fields
Source: //cms/features/custom-fields

# Custom Fields

Custom fields extend Strapi’s capabilities by adding new types of fields to content-types and components. Once created or added to Strapi via plugins, custom fields can be used in the Content-Type Builder and Content Manager just like built-in fields.



## Configuration

Ready-made custom fields can be found on the [Marketplace](https://market.strapi.io/plugins?categories=Custom+fields). Once installed these, no other configuration is required, and you can start using them (see [usage](#usage)).

You can also develop your own custom field.

### Developing your own custom field

Though the recommended way to add a custom field is through creating a plugin, app-specific custom fields can also be registered within the global `register` [function](/cms/configurations/functions) found in `src/index` and `src/admin/app` files.

* Custom fields can only be shared and distributed on the Marketplace using plugins.
* Custom fields cannot add new data types to Strapi and must use existing, built-in Strapi data types described in the [models' attributes](/cms/backend-customization/models#model-attributes) documentation. 
* You also cannot modify an existing data type.
* Special data types unique to Strapi, such as relation, media, component, or dynamic zone data types, cannot be used in custom fields.




The custom field could also be declared directly within the `strapi-server.js` file if you didn't have the plugin code scaffolded by the CLI generator:



#### Registering a custom field in the admin panel




##### Components

`app.customFields.register()` must pass a `components` object with an `Input` React component to use in the Content Manager's edit view.

**Example: Registering an Input component:**

In the following example, the `color-picker` plugin was created using the CLI generator (see [plugins development](/cms/plugins-development/developing-plugins.md)):




Props passed to the custom field Input component:

| Prop             | Description                                                                                                                                                                                                                               | Type                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `attribute`      | The attribute object with custom field's underlying Strapi type and options                                                                                                                                                               | `{ type: String, customField: String }`                              |
| `description`    | The field description set in [configure the view](/cms/features/content-manager#edit-view-settings)                                                                                                  | 



For a more detailed view of the props provided to the customFields and how they can be used check out the 





The Strapi codebase gives an example of how settings objects can be described: check the  file for the `base` settings and the  file for the `advanced` settings. The base form lists the settings items inline but the advanced form gets the items from an  file.

## Usage



### In the admin panel

Custom fields can be added to Strapi either by installing them from the [Marketplace](/cms/plugins/installing-plugins-via-marketplace) or by creating your own.

Once added to Strapi, custom fields can be added to any content type. Custom fields are listed in the _Custom_ tab when selecting a field for a content-type.



Each custom field type can have basic and advanced settings. The  lists available custom fields, and hosts dedicated documentation for each custom field, including specific settings.

### In the code

Once created and used, custom fields are defined like any other attribute in the model's schema. 

Custom fields are explicitly defined in the [attributes](/cms/backend-customization/models#model-attributes) of a model with `type: customField`.

As compared to how other types of models are defined, custom fields' attributes also show the following specificities:

- Custom field have a `customField` attribute. Its value acts as a unique identifier to indicate which registered custom field should be used, and follows one of these 2 formats:

  | Format               |  Origin |
  |----------------------|------------------|
  | `plugin::plugin-name.field-name` | The custom field was created through a plugin |
  | `global::field-name` | The custom field is specific to the current Strapi application and was created directly within the `register` [function](/cms/configurations/functions) |

- Custom fields can have additional parameters depending on what has been defined when registering the custom field (see [server registration](#registering-a-custom-field-on-the-server) and [admin panel registration](#registering-a-custom-field-in-the-admin-panel)).

**Example: A simple `color` custom field model definition:**

```json title="/src/api/[apiName]/[content-type-name]/content-types/schema.json"

{
// …
"attributes": {
  "color": { // name of the custom field defined in the Content-Type Builder
    "type": "customField",
    "customField": "plugin::color-picker.color",
    "options": {
      "format": "hex"
    }
  }
}
// …
}
```



# Data Management
Source: //cms/features/data-management

# Data Management

The Data Management feature can be used to import, export, or transfer data. Data Management is  CLI-based only, but is partly configured in the admin panel.



## Configuration

Some configuration options for the Data Management feature are available in the admin panel, and some are handled via your Strapi project's code.

### Admin panel settings

A `transfer.token.salt` should be defined in the `config/admin` configuration file (see [code-based configuration](#code-based-configuration)).

**Path to configure the feature:** 



## Usage

The Data Management system is CLI-based only, meaning any import, export, or transfer command must be executed from the terminal. Exhaustive documentation for each command is accessible from the following pages:



# Draft & Publish
Source: //cms/features/draft-and-publish

# Draft & Publish

The Draft & Publish feature allows to manage drafts for your content.



On the back-end server of Strapi, the Document Service API can also be used to interact with localized content:



# Email
Source: //cms/features/email

# Email

The Email feature enables Strapi applications to send emails from a server or an external provider.



## Configuration

Most configuration options for the Email feature are handled via your Strapi project's code. The admin panel provides a read-only view of the current configuration, connection status, and provider capabilities, and lets users send a test email.

- The email provider refers to the package that Strapi calls to send an email (e.g. official providers such as Sendgrid or community packages such as `@strapi/provider-email-nodemailer`). Providers implement the logic for sending mail when Strapi invokes them.
- The provider host (or server) refers to the connection details (e.g. an SMTP hostname, port, or REST API endpoint) that the provider exposes. Some providers hide these details behind an API key, while others require you to supply host-related options in your configuration.

The Email feature only handles outbound delivery. Receiving or parsing incoming messages is outside the scope of the built-in plugin and must be implemented with your email provider's inbound webhooks or a custom integration.

### Admin panel settings

**Path to configure the feature:** 



##### Configuring providers

Newly installed providers are enabled and configured in [the `/config/plugins` file](/cms/configurations/plugins). If this file does not exist you must create it.

- Each provider will have different configuration settings available. Review the respective entry for that provider in the [Marketplace](/cms/plugins/installing-plugins-via-marketplace) or 




* When using a different provider per environment, specify the correct configuration in `/config/env/${yourEnvironment}/plugins.js|ts` (see [Environments](/cms/configurations/environment)).
* Only one email provider will be active at a time. If the email provider setting isn't picked up by Strapi, verify the `plugins.js|ts` file is in the correct folder.
* When testing the new email provider with those two email templates created during strapi setup, the _shipper email_ on the template defaults to `no-reply@strapi.io` and needs to be updated according to your email provider, otherwise it will fail the test (see [Configure templates locally](/cms/features/users-permissions#templating-emails)).
* For best deliverability, configure SPF/DKIM with your email provider and ensure the `defaultFrom` domain aligns with the domain you verified with the provider.

###### Per-environment configuration

When configuring your provider you might want to change the configuration based on the `NODE_ENV` environment variable or use environment specific credentials.

You can set a specific configuration in the `/config/env/{env}/plugins.js|ts` configuration file and it will be used to overwrite the default configuration.

Some providers expose SMTP-style connection details instead of (or in addition to) an API key. Add those values in `providerOptions` so Strapi can reach the provider host. For instance, the community Nodemailer provider expects the host, port, and authentication credentials:



If your provider gives you a single URL instead of host and port values, pass that URL (for example `https://api.eu.mailgun.net`) in `providerOptions` using the key the package expects.

##### Building a custom provider

To build your own provider, publish it to npm, or use it locally in your project, see the dedicated documentation:

## Usage

The Email feature uses the Strapi global API, meaning it can be called from anywhere inside a Strapi application, either from the back-end server itself through a [controller or service](#controller-service), or from the admin panel, for example in response to an event (using [lifecycle hooks](#lifecycle-hook)). 

### Sending emails with a controller or service

The Email feature has an `email` [service](/cms/backend-customization/services) that contains 2 functions to send emails:

* `send()` directly contains the email contents,
* `sendTemplatedEmail()` consumes data from the Content Manager to populate emails, streamlining programmatic emails.

#### Using the `send()` function

To trigger an email in response to a user action add the `send()` function to a [controller](/cms/backend-customization/controllers) or [service](/cms/backend-customization/services). The send function has the following properties:

| Property      | Type                          | Description                                                                                      |
|---------------|-------------------------------|--------------------------------------------------------------------------------------------------|
| `from`        | `string` (email address)      | Sender address. If not specified, uses `defaultFrom` from `plugins.js`.                          |
| `to`          | `string` (email address)      | Recipient address. Required.                                                                     |
| `cc`          | `string` (email address)      | Carbon copy recipients. Optional.                                                                |
| `bcc`         | `string` (email address)      | Blind carbon copy recipients. Optional.                                                          |
| `replyTo`     | `string` (email address)      | Reply-to address. If not specified, uses `defaultReplyTo` from `plugins.js`.                     |
| `subject`     | `string`                      | Email subject. Required.                                                                         |
| `text`        | `string`                      | Plain-text body. Either `text` or `html` is required.                                            |
| `html`        | `string`                      | HTML body. Either `text` or `html` is required.                                                  |
| `attachments` | `object[]`                    | Array of attachment objects.                                                                     |
| `headers`     | `object`                      | Custom SMTP headers, for example `{ 'X-Custom-Header': 'value' }`.                               |
| `priority`    | `'high' \| 'normal' \| 'low'` | Email priority flag.                                                                             |
| `inReplyTo`   | `string`                      | Message-ID of the email being replied to. Used for conversation threading.                       |
| `references`  | `string \| string[]`          | Message-ID list this email references. Used for conversation threading.                          |
| `envelope`    | `object`                      | Custom SMTP envelope with `from` and `to` fields. Useful for bounce handling.                    |
| `list`        | `object`                      | RFC 2369 List-* headers. Enables one-click unsubscribe in Gmail and Outlook for newsletters.     |
| `icalEvent`   | `object`                      | Calendar event invitation in iCalendar format. Attach with `{ method, content }`.                |
| `dsn`         | `object`                      | Delivery Status Notification settings. Requests bounce or delivery confirmation reports.         |

The Nodemailer provider uses an explicit allowlist for all `send()` fields. Unknown properties are silently dropped. For the complete list of supported fields — including `dkim`, `amp`, `raw`, `auth` (per-message OAuth2), and others — see the 





# Internationalization
Source: //cms/features/internationalization

# Internationalization (i18n)

The Internationalization feature allows to manage content in different languages, called "locales".



On the back-end server of Strapi, the Document Service API can also be used to interact with localized content:



# Media Library
Source: //cms/features/media-library

# Media Library

The 



Code-based configuration instructions on the present page detail options for the default upload provider. If using another provider, please refer to the available configuration parameters in that provider's documentation.

#### Available options

When using the default upload provider, the following specific configuration options can be declared in an `upload.config` object within [the `config/plugins` file](/cms/configurations/plugins). All parameters are optional:

| Parameter                                   | Description                                                                                                         | Type    | Default |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| `providerOptions.localServer`        | Options that will be passed to 



#### Local server

By default Strapi accepts `localServer` configurations for locally uploaded files. These will be passed as the options for 



#### Max file size

The Strapi middleware in charge of parsing requests needs to be configured to support file sizes larger than the default of 200MB. This must be done in addition to provider options passed to the Upload package for `sizeLimit`.

You may also need to adjust any upstream proxies, load balancers, or firewalls to allow for larger file sizes. For instance, 



In addition to the middleware configuration, you can pass the `sizeLimit`, which is an integer in bytes, in the [/config/plugins file](/cms/configurations/plugins):



#### Security 



#### Upload request timeout

By default, the value of `strapi.server.httpServer.requestTimeout` is set to 330 seconds. This includes uploads.

To make it possible for users with slow internet connection to upload large files, it might be required to increase this timeout limit. The recommended way to do it is by setting the `http.serverOptions.requestTimeout` parameter in [the `config/servers` file](/cms/configurations/server).

An alternate method is to set the `requestTimeout` value in [the `bootstrap` function](/cms/configurations/functions#bootstrap) that runs before Strapi gets started. This is useful in cases where it needs to change programmatically—for example, to temporarily disable and re-enable it:



#### Responsive Images

When the [`Responsive friendly upload` admin panel setting](#admin-panel-configuration) is enabled, the plugin will generate the following responsive image sizes:

| Name    | Largest dimension |
| :------ | :--------- |
| large   | 1000px     |
| medium  | 750px      |
| small   | 500px      |

These sizes can be overridden in `/config/plugins`:



Breakpoint changes will only apply to new images, existing images will not be resized or have new sizes generated.

## Usage

**Path to use the feature:** 

### Use public assets in your code

Public assets are static files (e.g., images, video, CSS files, etc.) that you want to make accessible to the outside world.

Because an API may need to serve static assets, every new Strapi project includes by default a folder named `/public`. Any file located in this directory is accessible if the request's path doesn't match any other defined route and if it matches a public file name (e.g. an image named `company-logo.png` in `./public/` is accessible through `/company-logo.png` URL).

`index.html` files are served if the request corresponds to a folder name (`/pictures` url will try to serve `public/pictures/index.html` file).

The dotfiles are not exposed. It means that every file name that starts with `.`, such as `.htaccess` or `.gitignore`, are not served.



# Preview
Source: //cms/features/preview

# Preview

With the Preview feature, you can preview your front end application directly from Strapi's admin panel. This is helpful to see how updates to your content in the Edit View of the Content Manager will affect the final result.








Caching in Next.js:

In Next.js, [cache persistence](https://nextjs.org/docs/app/building-your-application/caching) may require additional steps. You might need to invalidate the cache by making an API call from the client side to the server, where the revalidation logic will be handled. Please refer to Next.js documentation for details, for instance with the [revalidatePath() method](https://nextjs.org/docs/app/building-your-application/caching#revalidatepath).




#### Content source maps

Live Preview is able to identify the parts of your frontend that correspond to fields in Strapi. This is done through content source maps, which are metadata encoded as hidden characters in your string-based content (e.g., text fields). It uses the  library to encode and decode this metadata.

Metadatas will only be added in your Content API responses when the `strapi-encode-source-maps` header is set to `true`. You can set this header in your data fetching utility. Make sure to only pass the header when you detect that your site is rendered in a preview context.

For a Next.js application, you may use the `draftMode()` method from `next/headers` to detect if draft mode is enabled, and set the header accordingly in all your API calls:

```typescript {20-23}

  contentType: string,
  params: Record = {}
): Promise {
  // Check if Next.js draft mode is enabled
  const { isEnabled: isDraftMode } = await draftMode();
  
  try {
    const queryParams = { ...params };
    // Add status=draft parameter when draft mode is enabled
    if (isDraftMode) {
      queryParams.status = "draft";
    }
    
    const url = `${baseURL}/${contentType}?${qs.stringify(queryParams)}`;
    const response = await fetch(url, {
      headers: {
        // Enable content source maps in preview mode
        "strapi-encode-source-maps": isDraftMode ? "true" : "false",
      },
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Strapi (url=${url}, status=${response.status})`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
}
```

## Usage

**Path to use the feature:**  Content Manager, edit view of your content type

Based on your CMS plan, your experience with Preview will be different:
- With the Free plan, Preview will be full screen only.
- With the  and  plans, you get access to an enhanced experience called Live Preview. With Live Preview, you can see the Preview alongside the Edit view of the Content Manager, and you can also edit the content directly within the preview itself by double-clicking on any content.

Once the Preview feature is properly set up, an **Open preview** button is visible on the right side of the [Content Manager's edit view](/cms/features/content-manager#overview). Clicking it will display the preview of your content as it will appear in your front-end application, but directly within Strapi's the admin panel.



Once the Preview is open, you can:

- click the close button  in the upper left corner to go back to the Edit View of the Content Manager,
- switch between the Desktop and Mobile preview using the dropdown above the previewed content,
- switch between previewing the draft and the published version (if [Draft & Publish](/cms/features/draft-and-publish) is enabled for the content-type),
- and click the link icon  in the upper right corner to copy the preview link. Depending on the preview tab you are currently viewing, this will either copy the link to the preview of the draft or the published version.

In the Edit view of the Content Manager, the Open preview button will be disabled if you have unsaved changes. Save your latest changes and you should be able to preview content again.

### Live Preview

Live Preview is the enhanced Preview experience available with Strapi’s paid CMS plans.

With Live Preview, in addition to what’s included in the Free plan, you can:

* Use the Side Editor to view both the entry’s Edit view in the Content Manager and the front-end preview side by side. You can also switch between full-screen and side-by-side preview using the  and  buttons.
* Double-click any content in the preview pane to edit it in place. This opens a popover that syncs the front-end content with the corresponding field in Strapi.



This feature is currently experimental. Feel free to share  or  with the Strapi team.

The current version of Live Preview comes with the following limitations:
* Blocks fields are not detected, and changing them in the Side Editor won’t be reflected in the preview. Clicking on Save after updates should however still work.
* Media assets and fields in dynamic zones are not handled.



# Role-Based Access Control (RBAC)
Source: //cms/features/rbac

# Role-Based Access Control (RBAC)

The Role-Based Access Control (RBAC) feature allows the management of the administrators, who are the users of the admin panel. More specifically, RBAC manages the administrators' accounts and roles.





4. Click on the **Save** button on the top right corner.

To create admin permissions for your custom plugin, please refer to our [dedicated guide](/cms/plugins-development/guides/admin-permissions-for-plugins).

#### Setting custom conditions for permissions

For each permission of each category, a 

## Usage

**Path to use the feature:**  *Settings > Administration panel > Users*

The *Users* interface displays a table listing all the administrators of your Strapi application. More specifically, for each administrator listed in the table, their main account information are displayed, including name, email and attributed role. The status of their account is also indicated: active or inactive, depending on whether the administrator has already logged in to activate the account or not.

From this interface, it is possible to:

- make a textual search  to find specific administrators,
- set filters  to find specific administrators,
- create a new administrator account (see [Creating a new account](#creating-a-new-account)) ,
- delete an administrator account  (see [Deleting an account](#deleting-an-account)),
- or access information regarding an administrator account, and edit it  (see [Editing an account](#editing-an-account)).

Sorting can be enabled for most fields displayed in the table. Click on a field name, in the header of the table, to sort on that field.

### Creating a new account

1. Click on the  **Invite new user** button.
2. In the *Invite new user* window, fill in the Details information about the new administrator:

  | User information | Instructions                                                                 |
  | ---------------- | ---------------------------------------------------------------------------- |
  | First name       | (mandatory) Write the administrator's first name in the textbox.             |
  | Last name        | (mandatory) Write the administrator's last name in the textbox.              |
  | Email            | (mandatory) Write the administrator's complete email address in the textbox. |

3. Fill in the Login settings about the new administrator:

  | Setting          | Instructions                                                                                                    |
  | ---------------- | --------------------------------------------------------------------------------------------------------------- |
  | User's roles     | (mandatory) Choose from the drop-down list the role to attribute to the new administrator.                      |
  | Connect with SSO | (optional) Click **TRUE** or **FALSE** to connect the new administrator account with SSO.                       |

4. Click on the **Invite user** button in the bottom right corner of the *Add new user* window.
5. A URL appears at the top of the window: it is the URL to send the new administrator for them to log in for the first time to your Strapi application. Click the copy button  to copy the URL.
6. Click on the **Finish** button in the bottom right corner to finish the new administrator account creation. The new administrator should now be listed in the table.

The administrator invitation URL is accessible from the administrator's account until it has been activated.

### Deleting an account

It is possible to delete one or several administrator accounts at the same time.

1. Click on the delete button  on the right side of the account's record, or select one or more accounts by ticking the boxes on the left side of the accounts' records then click on the  **Delete** button above the table.
2. In the deletion window, click on the **Confirm** button to confirm the deletion.

### Editing an account

1. Click on the name of the administrator whose account you want to edit.
2. In the *Details* area, edit your chosen account details:

| User information      | Instructions  |
| --------------------- | ----------------------- |
| First name            | Write the administrator's first name in the textbox.                                        |
| Last name             | Write the administrator's last name in the textbox.                                         |
| Email                 | Write the administrator's complete email address in the textbox.                            |
| Username              | Write the administrator's username in the textbox.                                          |
| Password              | Write the new administrator account's password in the textbox.                              |
| Confirm password      | Write the new password in the textbox for confirmation.                                     |
| Active                | Click on **TRUE** to activate the administrator's account.                                  |

3. (optional) In the *Roles* area, edit the role of the administrator:
  - Click on the drop-down list to choose a new role, and/or add it to the already attributed one.
  - Click on the delete button  to delete an already attributed role.
4. Click on the **Save** button in the top right corner.



# Releases
Source: //cms/features/releases

# Releases

The Releases feature enables content managers to organize entries into containers that can perform publish and unpublish actions simultaneously. A release can contain entries from different content types and can mix locales.



## Configuration

To be able to include your content in releases, and to schedule and publish those releases, you must first create them. You can also modify the releases' default timezone to use when scheduling a publication, as well as deleting releases that are obsolete or irrelevant.

### Choosing default timezone

**Path to configure the feature:**  Settings

1. Click on the _Default timezone_ dropdown list and choose the default timezone to use.
2. Click **Save**.

### Creating a release

**Path to configure the feature:**  Releases

1. Click the  **New Release** button in the upper right corner.  
2. Give the release a name.
3. (_optional_) If you want to schedule the release publication instead of publishing the release manually, check the **Schedule release** checkbox and define the date, time, and timezone for publication.
4. Click the **Continue** button.

Your releases can be renamed afterwards, by editing the release using the  then  **Edit** buttons.

<!-- TO INTEGRATE IF THE CALLOUT ISN'T ENOUGH

### Renaming a release

You can rename a release. To do so, while on a release page:

1. Click on the  button in the top right corner of the admin panel.
2. Select  **Edit**.
3. In the modal, change the name of the release in the _Name_ field.
4. Click **Continue** to save the change.-->

### Deleting a release

**Path:**  Releases

Deleting a release will only delete the release itself, but not the content-type entries included in the release.

1. Click on the  button in the top right corner of the admin panel.
2. Select  **Delete**.
3. In the confirmation dialog, click  **Confirm**.
