# Keeping your data safe

## Take good care of your access tokens

An access token (also known as a robot token) is a credential that can give access to read or write data to a Sanity project. You can read more about access control and tokens in the [authentication docs](https://www.sanity.io/docs/content-lake/http-auth).

Access tokens are project-specific and you can create them from the project settings in the [management console](https://manage.sanity.io).

> \[!WARNING]
> Gotcha
> Access tokens should not be confused with *user tokens*, which is a *personal* token that identifies a logged in user and is generated at the time the user logs in.

The single most important thing you can do to keep your data safe is to make sure never to disclose access tokens to unauthorized users. There are several ways to accidentally leak an access token, the most common being that it is gets bundled together with a frontend JavaScript bundle.

As a rule of thumb, you should:

- **Never** add an access token to JavaScript that is bundled for client-side use and served publicly unless you take extra precautions (described below).
- **Never** commit access tokens to public code repositories or open source projects.
- **Never** share access tokens through unsecured or public channels.

> \[!WARNING]
> Gotcha
> Be extra careful with access tokens that grant write access to your data. Everyone with access to that token can delete all of your data.

### What to do if an access token gets compromised?

If you find that your token has been leaked or accidentally made public, you should consider it forever lost and delete it immediately, no matter how quickly you manage to make it private again.

To delete a token, go to the management console at <https://manage.sanity.io>, select your project, and navigate to project settings. From there, select the API settings and delete the token in question.

## Submitting data from a frontend

If you want users of your website or app to be able to submit data, we recommend creating a small proxy server or cloud function that validates the received data, transforms it to a Sanity document and submits it using a [sanity client](https://www.sanity.io/docs/client-libraries) that is configured with a token that has write access to the dataset.

## Dataset visibility

When creating datasets, you may choose whether it should be:

- **Public** - everyone can query for content in the dataset without being authorized - great for single page applications
- **Private** - only authenticated users or requests with authorization tokens can read from the dataset

You may change the visibility mode for your dataset either by running `sanity dataset visibility set <datasetName> <public/private>` or by using the management console at <https://manage.sanity.io/>

> \[!WARNING]
> Gotcha
> Asset files are not private, so even images uploaded to a private dataset can be viewed by unauthenticated users.

> \[!TIP]
> Protip
> Private datasets can be cached in our API Content Delivery Network (API CDN), it is cached with your access token as the key.
> See [API CDN documention](https://www.sanity.io/docs/content-lake/api-cdn) for details.

Customers with the custom access control feature can specify fine-grained rules for configuring which users can create, delete and update documents. See the [access control](https://www.sanity.io/docs/content-lake/roles-concepts) documentation for details.

## Tokens in browser-side JavaScript

Configuring the Sanity client with an access token should generally be avoided for browser-side JavaScript. Usually, JavaScript for browsers are served publicly, and if it includes an access token, then that token will be available in plain text to everyone.

A common case is wanting to fetch data from a private dataset in a public frontend. If this is done by including an access token in JavaScript code that is shipped to the browser of the visitors of the site, the whole dataset will in effect be made public, since it takes little technical insight to inspect the JavaScript source code and find the token there. Even worse, if the access token grants write permission, you have in effect made your data writeable by everyone.

To avoid this, you could consider:

- Making the JavaScript private by serving it only to authorized users.
- Making the backend fetch the data from the Sanity APIs, filtering out only the data that should be available to the general public.

If you are making a frontend for a private intranet, make sure that also static assets are served only to authorized users as long as it includes an access token.

# Activity Feed

The Activity Feed lets you investigate what happened in your Sanity projects. If you are uncertain how a scenario took place, you can use the Activity Feed to investigate what actually happened.

## What is an event?

An event is created when various actions are performed in the system. This can be by a user, by Sanity, or even by a robot token. An event contains information about what happened and when. Events differ by action, and each contains a unique ID.

### List of team events

- user creates team
- user changes team’s name
- user changes billing address
- user changes payment method
- user changes EU Representative
- user changes Data Protection Officer
- user changes user’s role
- user removes user
- user invite user(s)
- user joins team
- user revoked invitation

### List of project events

- user creates project
- user changes project’s name
- user changes project’s custom studio URL
- user changes project’s plan
- user adds CORS origin
- user removes CORS origin
- user adds webhook
- user removes webhook
- user adds API token
- user removes API token
- user changes user’s permissions
- user removes user
- user invites user(s)
- user joins project
- user revokes invitation
- user creates dataset
- user deletes dataset
- user edits dataset
- user duplicates dataset

## Exporting

Actions for projects and teams are available as a CSV export from the [manage dashboard](https://sanity.io/manage) for each project. The export can be customized by the date when created.

### Data provided in the export

- action
- actorEmail
- actorId
- actorName
- correlationId
- datasetName
- description
- documentId
- id
- metadata.email
- metadata.invitedBy
- metadata.role
- organizationDisplayName
- organizationId
- projectDisplayName
- projectId
- timestamp
- transactionId
- userEmail
- userId
- userName
- version
