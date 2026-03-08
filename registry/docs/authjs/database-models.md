[Concepts](/concepts "Concepts")Database models

# Database models

Auth.js can be used with any database. Models tell you what structures Auth.js expects from your database. Models will vary slightly depending on which adapter you use, but in general, will have a similar structure to the graph below. Each model can be extended with additional fields.

Auth.js uses `camelCase` for its database rows while respecting the conventional `snake_case` formatting for OAuth-related values. If the mixed casing is an issue for you, most adapters have a dedicated documentation section on how to force a casing convention.

* * *

### User[](#user)

The User model is for information such as the user’s name and email address. Email address is optional, but if one is specified for a `User`, then it must be unique.

💡

User creation in the database is automatic and happens when the user is logged in for the first time with an authentication provider (either OAuth, magic links or plain credentials).

**OAuth sign in**

If the first sign-in is via the [OAuth Provider](/getting-started/authentication/oauth), the default data saved is `id`, `name`, `email` and `image`. You can add more profile data by returning extra fields in your [OAuth provider](/guides/configuring-oauth-providers#use-your-own-provider)’s [`profile()`](/reference/core/providers#profile) callback.

**Magic links sign in**

If the first sign-in is via the [Email Provider](/getting-started/authentication/email), then the saved user will have `id`, `email`, `emailVerified`, where `emailVerified` is the timestamp of when the user was created.

### Account[](#account)

The Account model is for information about accounts associated with a `User`. A single `User` can have multiple `Account`(s), but each `Account` can only have one `User`.

💡

Account creation in the database is automatic and happens when the user is logged in for the first time with an authentication provider (either OAuth, magic links or plain credentials) or the [`Adapter.linkAccount`](/reference/core/adapters#linkaccount) method is invoked.

The default data saved is `access_token`, `expires_at`, `refresh_token`, `id_token`, `token_type`, `scope` and `session_state`. You can save other fields or remove the ones you don’t need by returning them in the [OAuth provider](/guides/configuring-oauth-providers#use-your-own-provider)’s [`account()`](/reference/core/providers#account) callback.

Linking `Accounts`(s) to `User`(s) happen automatically, only when they have the same e-mail address, and the user is currently signed in. Check the [FAQ](/concepts#security) for more information on why this is a requirement.

You can manually unlink accounts if your adapter implements the `unlinkAccount` method. Make sure to take all the necessary security steps to avoid data loss.

### Session[](#session)

Even if you are using a database, you can still use **JWT** for session handling for fast access, in which case, this model can be opted out in your database.

-   [Learn more about session strategies](/concepts/session-strategies) and their trade-offs.

The Session model is used for database sessions and it can store arbitrary data for an active user session. A single `User` can have multiple `Session`(s), each `Session` can only have one `User`.

When a Session is read, its `expires` field is checked to see if the session is still valid. If it has expired, the session is deleted from the database. You can also do this clean-up periodically in the background to avoid Auth.js extra delete call to the database during an active session retrieval. This might result in a slight performance increase.

### VerificationToken[](#verificationtoken)

The `VerificationToken` model is used to store tokens for email-based **magic-link** sign in.

A single `User` can have multiple open `VerificationToken`s active (e.g. sign in with different devices).

💡

Due to users forgetting or failures during the sign-in flow, you might end up with unwanted rows in your database. You might want to periodically clean these up to avoid filling up your database with unnecessary data.

It has been designed so that it can be extended for other verification purposes in the future (e.g. 2FA / magic codes, etc… ).

Auth.js makes sure that every token is usable only once, and by default has a short lifetime (1 day, can be configured by `maxAge`). If your user did not manage to finish the sign-in flow in time, they will have to start the sign-in process again.

[Session strategies](/concepts/session-strategies "Session strategies")
