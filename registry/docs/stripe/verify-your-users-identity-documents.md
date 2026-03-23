# Verify your users’ identity documents

Create sessions and collect identity documents.

This guide explains how to use Stripe Identity to securely collect and verify identity documents.

Show a document upload modal inside your website. Here’s what you’ll do:

1. Add a verification button to your webpage that displays a document upload modal.
2. Display a confirmation page on identity document submission.
3. Handle verification results.

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).
3. (Optional) Customize your brand settings on the [branding settings page](https://dashboard.stripe.com/settings/branding).

## Set up Stripe \[Server-side]

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

Then install the libraries for access to the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Add a button to your website \[Client-side]

Create a button on your website for starting the verification.

#### HTML + JS

### Add a button

Start by adding a verify button to your page:

```html
<html>
  <head>
    <title>Verify your identity</title>
  </head>
  <body>
    <button id="verify-button">Verify</button>
  </body>
</html>
```

### Add the Stripe.js library to your page

Add [Stripe.js](https://docs.stripe.com/payments/elements.md) to your page by including a script tag in your HTML document:

```html
<html>
  <head>
    <title>Verify your identity</title><script src="https://js.stripe.com/clover/stripe.js"></script>
  </head>
  <body>
    <button id="verify-button">Verify</button>
  </body>
</html>
```

> Always load **Stripe.js** directly from `https://js.stripe.com`. You can’t include it in a bundle or self-host it.

### Initialize Stripe.js

Initialize Stripe.js with your publishable [API key](https://docs.stripe.com/keys.md) by passing the following JavaScript to your page:

```html
<html>
  <head>
    <title>Verify your identity</title>
    <script src="https://js.stripe.com/clover/stripe.js"></script>
  </head>
  <body>
    <button id="verify-button">Verify</button><script type="text/javascript">
      // Set your publishable key: remember to change this to your live publishable key in production
      // See your keys here: https://dashboard.stripe.com/apikeys
      var stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>');
    </script>
  </body>
</html>
```

#### React

### Add a button

Start by adding a verify button to your page:

```jsx
import React from 'react';

class VerifyButton extends React.Component {
  render() {
    return (
      <button role="link">
        Verify
      </button>
    );
  }
}

const App = () => {
  return (
    <VerifyButton/>
  );
};

export default App;
```

### Install Stripe.js

Install the [Stripe.js ES Module](https://www.npmjs.com/package/@stripe/stripe-js):

```bash
npm install @stripe/stripe-js
```

> If you’re using Node.js on the server, you need to install both the [stripe](https://www.npmjs.com/package/stripe) and [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js) packages. `stripe` is used on the server-side to make requests to the Stripe API, whereas `@stripe/stripe-js` provides methods for including [Stripe.js](https://docs.stripe.com/js.md) in your client-side code.

### Initialize Stripe.js

Call `loadStripe` with your publishable [API key](https://docs.stripe.com/keys.md). It returns a Promise that resolves with the Stripe object as soon as Stripe.js loads.

```jsx
import React from 'react';import {loadStripe} from '@stripe/stripe-js';

class VerifyButton extends React.Component {constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.setState({ stripe: await this.props.stripePromise });
  }

  render() {const { stripe } = this.state;
    return (
      <button role="link" disabled={!stripe} >
        Verify
      </button>
    );
  }
}
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

const App = () => {
  return (<VerifyButton stripePromise={stripePromise}/>
  );
};

export default App;
```

## Show the document upload modal \[Client-side] \[Server-side]

Set up the new button to show a document upload modal. After clicking the button, your user can capture and upload a picture of their passport, driver’s license, or national ID.

The modal reduces development time and maintenance and allows you to collect identity documents as part of your existing flows. It also decreases the amount of private information you handle on your site, allows you to support users in a variety of platforms and languages, and allows you to customize the style to match your branding.

### Create a VerificationSession

A [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) is the programmatic representation of the verification. It contains details about the type of verification, such as what [check](https://docs.stripe.com/identity/verification-checks.md) to perform. You can [expand](https://docs.stripe.com/api/expanding_objects.md) the [verified outputs](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-verified_outputs) field to see details of the data that was verified.

After successfully creating a `VerificationSession`, send the [client secret](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-client_secret) to the frontend to show the document upload modal.
![](https://b.stripecdn.com/docs-statics-srv/assets/modal_integration_diagram.4c9ef035ee7fcb8b8f58a99fcad27202.svg)

You can use verification flows for re-usable configuration, which is passed to the [verification\_flow](https://docs.stripe.com/api/identity/verification_sessions/create.md#create_identity_verification_session-verification_flow) parameter. Read more in the [Verification flows guide](https://docs.stripe.com/identity/verification-flows.md).

You need a server-side endpoint to [create the VerificationSession](https://docs.stripe.com/api/identity/verification_sessions/create.md). Creating the `VerificationSession` server-side prevents malicious users from overriding verification options and incurring processing charges on your account. Add authentication to this endpoint by including a user reference in the session metadata or storing the session ID in your database.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the client secret to the frontend.
const clientSecret = verificationSession.client_secret;
```

> The client secret lets your frontend collect sensitive verification information. It’s single-use and expires after 24 hours. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any page that includes the client secret. Send only the client secret to your frontend to avoid exposing verification configuration or results.

Test your endpoint by starting your web server (for example, `localhost:4242`) and sending a POST request with curl to create a VerificationSession:

```bash
curl -X POST -is "http://localhost:4242/create-verification-session" -d ""
```

The response in your terminal looks like this:

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{ id: "vs_QdfQQ6xfGNJR7ogV6", client_secret: "vs_QdfQQ6xfGNJR7ogV6_secret_live_..."  }
```

### Add an event handler to the verify button

Now that you have a button and an endpoint to create a VerificationSession, modify the button to show the document upload modal when clicked. Add a call to [verifyIdentity](https://docs.stripe.com/js/identity/modal) using the client secret:

#### HTML + JS

```html
<html>
  <head>
    <title>Verify your identity</title>
    <script src="https://js.stripe.com/clover/stripe.js"></script>
  </head>
  <body>
    <button id="verify-button">Verify</button>

    <script type="text/javascript">
      // Set your publishable key: remember to change this to your live publishable key in production
      // See your keys here: https://dashboard.stripe.com/apikeys
      var stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>');
var verifyButton = document.getElementById('verify-button');

      verifyButton.addEventListener('click', function() {
        // Get the VerificationSession client secret using the server-side
        // endpoint you created in step 3.
        fetch('/create-verification-session', {
          method: 'POST',
        })
        .then(function(response) {
          return response.json();
        }).then(function(session) {
          // Show the verification modal.
          return stripe.verifyIdentity(session.client_secret);
        })
        .then(function(result) {
          // If `verifyIdentity` fails, you should display the localized
          // error message to your user using `error.message`.
          if (result.error) {
            alert(result.error.message);
          }
        }).catch(function(error) {
          console.error('Error:', error);
        });
      });
    </script>
  </body>
</html>
```

#### React

```jsx
import React from 'react';
import {loadStripe} from '@stripe/stripe-js';

class VerifyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.setState({ stripe: await this.props.stripePromise });
  }
async handleClick(event) {
    // Block native event handling.
    event.preventDefault();

    const { stripe } = this.state;

    if (!stripe) {
      // Stripe.js hasn't loaded yet. Make sure to disable
      // the button until Stripe.js has loaded.
      return;
    }

    // Call your backend to create the VerificationSession.
    const response = await fetch('/create-verification-session', { method: 'POST' });
    const session = await response.json();

    // Show the verification modal.
    const { error } = await stripe.verifyIdentity(session.client_secret);

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('Verification submitted!');
    }
  };

  render() {
    const { stripe } = this.state;
    return (<button role="link" disabled={!stripe} onClick={this.handleClick}>
        Verify
      </button>
    );
  }
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

const App = () => {
  return (
    <VerifyButton stripePromise={stripePromise}/>
  );
};

export default App;
```

### Event error codes

| Error code                    | Description                                                                                                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consent_declined`            | The user declined verification by Stripe. Check with your legal counsel to see if you have an obligation to offer an alternative, non-biometric means to verify, such as through a manual review. |
| `device_unsupported`          | The verification requires a camera and the user is on a device without one.                                                                                                                       |
| `under_supported_age`         | Stripe doesn’t verify users under the age of majority.                                                                                                                                            |
| `phone_otp_declined`          | The user is unable to verify the provided phone number.                                                                                                                                           |
| `email_verification_declined` | The user is unable to verify the provided email address.                                                                                                                                          |

### Test the upload modal

Test that the verify button shows a document upload modal:

- Click the verify button, which opens the Stripe document upload modal.
- Ensure no error messages are shown.

If your integration isn’t working:

1. Open the Network tab in your browser’s developer tools.
2. Click the verify button to see if it makes an XHR request to your server-side endpoint (`POST /create-verification-session`).
3. Verify that the request returns a 200 status.
4. Use `console.log(session)` inside your button click listener to confirm that it returns the correct data.

## Show a confirmation page \[Client-side]

To provide a user-friendly experience, show a confirmation page after users successfully submit their identity document. Host the page on your site to let the user know that the verification is processing.

#### HTML + JS

Create a minimal confirmation page:

```html

<html>
  <head><title>Your document was submitted</title></head>
  <body>
    <h1>Thanks for submitting your identity document.</h1>
    <p>
      We are processing your verification.
    </p>
  </body>
</html>
```

Next, update the button handler to redirect to this page:

```html
<html>
  <head>
    <title>Verify your identity</title>
    <script src="https://js.stripe.com/clover/stripe.js"></script>
  </head>
  <body>
    <button id="verify-button">Verify</button>

    <script type="text/javascript">
      // Set your publishable key: remember to change this to your live publishable key in production
      // See your keys here: https://dashboard.stripe.com/apikeys
      var stripe = Stripe('<<YOUR_PUBLISHABLE_KEY>>')

      var verifyButton = document.getElementById('verify-button');

      verifyButton.addEventListener('click', function() {
        // Get the VerificationSession client secret using the server-side
        // endpoint you created in step 3.
        fetch('/create-verification-session', {
          method: 'POST',
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(session) {
          // Show the verification modal.
          return stripe.verifyIdentity(session.client_secret);
        })
        .then(function(result) {
          // If `verifyIdentity` fails, you should display the error message
          // using `error.message`.
          if (result.error) {
            alert(result.error.message);
          } else {window.location.href = 'submitted.html';
          }
        })
        .catch(function(error) {
          console.error('Error:', error);
        });
      });
    </script>
  </body>
</html>
```

#### React

Update the button handler to show a confirmation message:

```jsx
import React from 'react';
import {loadStripe} from '@stripe/stripe-js';

class VerifyButton extends React.Component {
  constructor(props) {
    super(props);this.state = { submitted: false };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.setState({ stripe: await this.props.stripePromise });
  }

  async handleClick(event) {
    // Block native event handling.
    event.preventDefault();

    const { stripe } = this.state;

    if (!stripe) {
      // Stripe.js hasn't loaded yet. Make sure to disable
      // the button until Stripe.js has loaded.
      return;
    }

    // Call your backend to create the VerificationSession.
    const response = await fetch('/create-verification-session', { method: 'POST' });
    const session = await response.json();

    // Show the verification modal.
    const { error } = await stripe.verifyIdentity(session.client_secret);

    if (error) {
      console.log('[error]', error.message);
    } else {
      console.log('Verification submitted!');this.setState({ submitted: true });
    }
  };

  render() {const { stripe, submitted } = this.state;

    if (submitted) {
      return (
        <>
          <h1>Thanks for submitting your identity document</h1>
          <p>
            We are processing your verification.
          </p>
        </>
      );
    }

    return (
      <button role="link" disabled={!stripe} onClick={this.handleClick}>
        Verify
      </button>
    );
  }
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

const App = () => {
  return (
    <VerifyButton stripePromise={stripePromise}/>
  );
};

export default App;
```

### Test the confirmation page

Test that your confirmation page works:

- Click your verify button.
- Submit the session by selecting a predefined test case.
- Confirm that the new confirmation page is shown.
- Test the entire flow for failure cases (such as declining consent or refusing camera permissions) and ensure your app handles them without any issues.

Next, find the verification in the Stripe Dashboard. Verification sessions appear in the Dashboard’s [list of VerificationSessions](https://dashboard.stripe.com/identity). Click a session to go to the Session details page. The summary section contains verification results, which you can use in your app.

## Handle verification events

[Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are typically completed as soon as the user redirects back to your site and you can retrieve the result from the API immediately. In some rare cases, the document verification isn’t ready yet and must continue asynchronously. In these cases, you’re notified through webhooks when the verification result is ready. After the processing completes, the VerificationSession status changes from `processing` to `verified`.

Stripe sends the following events when the session status changes:

| Event name                                                                                                                                           | Description                                                                                                                                                 | Next steps                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [identity.verification\_session.verified](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.verified)             | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and they’re all successfully verified. | Trigger relevant actions in your application.                                                           |
| [identity.verification\_session.requires\_input](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.requires_input) | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and at least one of the checks failed. | Trigger relevant actions in your application and potentially allow your user to retry the verification. |

Use a [webhook handler](https://docs.stripe.com/identity/handle-verification-outcomes.md) to receive these events and automate actions like sending a confirmation email, updating the verification results in your database, or completing an onboarding step. You can also view [verification events in the Dashboard](https://dashboard.stripe.com/events?type=identity.%2A).

## Receive events and run business actions

### With code

Build a webhook handler to listen for events and build custom asynchronous verification flows. Test and debug your webhook integration locally with the Stripe CLI.

[Build a custom webhook](https://docs.stripe.com/identity/handle-verification-outcomes.md)

### Without code

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

[View your test verifications in the Dashboard](https://dashboard.stripe.com/test/identity/verification-sessions)

## See also

- [Handle verification outcomes](https://docs.stripe.com/identity/handle-verification-outcomes.md)
- [Learn about VerificationSessions](https://docs.stripe.com/identity/verification-sessions.md)
- [Learn about Stripe.js](https://docs.stripe.com/payments/elements.md)

Send your users to Stripe to upload their identity documents. Here’s what you’ll do:

1. Add a verification button to your webpage that redirects to Stripe Identity.
2. Display a confirmation page on identity document submission.
3. Handle verification results.

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).
3. (Optional) Customize your brand settings on the [branding settings page](https://dashboard.stripe.com/settings/branding).

## Set up Stripe \[Server-side]

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

Then install the libraries for access to the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Add a button to your website \[Client-side]

Create a button on your website for starting the verification.

#### HTML + JS

### Add a button

Start by adding a verify button to your page:

```html
<html>
  <head>
    <title>Verify your identity</title>
  </head>
  <body>
    <button id="verify-button">Verify</button>
  </body>
</html>
```

#### React

### Add a button

Start by adding a verify button to your page:

```jsx
import React from 'react';

class VerifyButton extends React.Component {
  render() {
    return (
      <button role="link">
        Verify
      </button>
    );
  }
}

const App = () => {
  return (
    <VerifyButton/>
  );
};

export default App;
```

## Redirect to Stripe Identity \[Client-side] \[Server-side]

Set up the button to redirect to Stripe Identity. After clicking the button, your frontend redirects to a Stripe-hosted page where they can capture and upload a picture of their passport, driver’s license, or national ID.

The redirect to Stripe Identity cuts down on development time and maintenance and gives you added security. It also decreases the amount of private information you handle on your site, allows you to support users in a variety of platforms and languages, and allows you to customize the style to match your branding.

### Create a VerificationSession

A [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) is the programmatic representation of the verification. It contains details about the type of verification, such as what [check](https://docs.stripe.com/identity/verification-checks.md) to perform. You can [expand](https://docs.stripe.com/api/expanding_objects.md) the [verified outputs](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-verified_outputs) field to see details of the data that was verified.

After successfully creating a `VerificationSession`, send the [session URL](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-url) to the frontend to redirect to Stripe Identity.
![](https://b.stripecdn.com/docs-statics-srv/assets/modal_integration_diagram.4c9ef035ee7fcb8b8f58a99fcad27202.svg)

You can use verification flows for re-usable configuration, which is passed to the [verification\_flow](https://docs.stripe.com/api/identity/verification_sessions/create.md#create_identity_verification_session-verification_flow) parameter. Read more in the [Verification flows guide](https://docs.stripe.com/identity/verification-flows.md).

You need a server-side endpoint to [create the VerificationSession](https://docs.stripe.com/api/identity/verification_sessions/create.md). Creating the `VerificationSession` server-side prevents malicious users from overriding verification options and incurring processing charges on your account. Add authentication to this endpoint by including a user reference in the session metadata or storing the session ID in your database.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the session URL to the frontend.
const url = verificationSession.url;
```

> The session URL is single-use and expires after 48 hours. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Send only the session URL to your frontend to avoid exposing verification configuration or results.

Test your endpoint by starting your web server (for example, `localhost:4242`) and sending a POST request with curl to create a VerificationSession:

```bash
curl -X POST -is "http://localhost:4242/create-verification-session" -d ""
```

The response in your terminal looks like this:

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{ id: "vs_QdfQQ6xfGNJR7ogV6", url: "https://verify.stripe.com/start/QdfQQ6xfxNJR7ogV6Z6Wp..." }
```

### Add an event handler to the verify button

Now that you have a button and an endpoint to create a VerificationSession, modify the button to redirect to the session URL when clicked:

#### HTML + JS

```html
<html>
  <head>
    <title>Verify your identity</title>
    <script src="https://js.stripe.com/clover/stripe.js"></script>
  </head>
  <body>
    <button id="verify-button">Verify</button>

    <script type="text/javascript">var verifyButton = document.getElementById('verify-button');

      verifyButton.addEventListener('click', function() {
        // Get the VerificationSession client secret using the server-side
        // endpoint you created in step 3.
        fetch('/create-verification-session', {
          method: 'POST',
        })
        .then(function(response) {
          return response.json();
        }).then(function(session) {
          // When the user clicks on the button, redirect to the session URL.
          window.location.href = session.url;
        }).catch(function(error) {
          console.error('Error:', error);
        });
      });
    </script>
  </body>
</html>
```

#### React

```jsx
import React from 'react';
import {loadStripe} from '@stripe/stripe-js';

class VerifyButton extends React.Component {async handleClick(event) {
    // Block native event handling.
    event.preventDefault();

    // Call your backend to create the VerificationSession.
    const response = await fetch('/create-verification-session', { method: 'POST' });
    const session = await response.json();

    // When the user clicks on the button, redirect to the session URL.
    window.location.href = session.url;
  };

  render() {
    return (<button role="link" onClick={this.handleClick}>
        Verify
      </button>
    );
  }
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('<<YOUR_PUBLISHABLE_KEY>>');

const App = () => {
  return (
    <VerifyButton stripePromise={stripePromise}/>
  );
};

export default App;
```

### Test the redirect

Test that the verify button redirects to Stripe Identity:

- Click the verify button.
- Ensure your browser redirects to Stripe Identity.

If your integration isn’t working:

1. Open the Network tab in your browser’s developer tools.
2. Click the verify button to see if it makes an XHR request to your server-side endpoint (`POST /create-verification-session`).
3. Verify that the request returns a 200 status.
4. Use `console.log(session)` inside your button click listener to confirm that it returns the correct data.

## Handle verification events

[Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are typically completed as soon as the user redirects back to your site and you can retrieve the result from the API immediately. In some rare cases, the document verification isn’t ready yet and must continue asynchronously. In these cases, you’re notified through webhooks when the verification result is ready. After the processing completes, the VerificationSession status changes from `processing` to `verified`.

Stripe sends the following events when the session status changes:

| Event name                                                                                                                                           | Description                                                                                                                                                 | Next steps                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [identity.verification\_session.verified](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.verified)             | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and they’re all successfully verified. | Trigger relevant actions in your application.                                                           |
| [identity.verification\_session.requires\_input](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.requires_input) | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and at least one of the checks failed. | Trigger relevant actions in your application and potentially allow your user to retry the verification. |

Use a [webhook handler](https://docs.stripe.com/identity/handle-verification-outcomes.md) to receive these events and automate actions like sending a confirmation email, updating the verification results in your database, or completing an onboarding step. You can also view [verification events in the Dashboard](https://dashboard.stripe.com/events?type=identity.%2A).

## Receive events and run business actions

### With code

Build a webhook handler to listen for events and build custom asynchronous verification flows. Test and debug your webhook integration locally with the Stripe CLI.

[Build a custom webhook](https://docs.stripe.com/identity/handle-verification-outcomes.md)

### Without code

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

[View your test verifications in the Dashboard](https://dashboard.stripe.com/test/identity/verification-sessions)

## Optional: Show a confirmation page \[Client-side]

To provide a user-friendly experience, Identity can redirect to a page on your website after users successfully submit their identity document.

Create a minimal confirmation page:

```html

<html>
  <head><title>Your document was submitted</title></head>
  <body>
    <h1>Thanks for submitting your identity document.</h1>
    <p>
      We are processing your verification.
    </p>
  </body>
</html>
```

Next, update the VerificationSession creation call with a URL for this page in the `return_url` parameter:

#### Node.js

```javascript
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',return_url: 'https://{{ YOUR_DOMAIN }}/submitted.html',
  metadata: { user_id: '{{USER_ID}}' },
});
```

### Test the confirmation page

Test that your confirmation page works:

- Click your verify button.
- Submit the session by selecting a predefined test case.
- Confirm that the new confirmation page is shown.
- Test the entire flow for failure cases (such as declining consent or refusing camera permissions) and ensure your app handles them without any issues.

Next, find the verification in the Stripe Dashboard. Verification sessions appear in the Dashboard’s [list of VerificationSessions](https://dashboard.stripe.com/identity). Click a session to go to the Session details page. The summary section contains verification results, which you can use in your app.

## See also

- [Handle verification outcomes](https://docs.stripe.com/identity/handle-verification-outcomes.md)
- [Learn about VerificationSessions](https://docs.stripe.com/identity/verification-sessions.md)
- [Learn about Stripe.js](https://docs.stripe.com/payments/elements.md)

> To get access to the Identity iOS SDK, visit the [Identity Settings](https://dashboard.stripe.com/settings/identity) page and click **Enable**.

To verify the identity of your users on iOS, present a verification sheet in your application. This guide includes the following steps:

1. Set up Stripe.
2. Add a server endpoint.
3. Present the verification sheet.
4. Handle verification events.

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).

The steps in this guide are fully implemented in the [example app](https://github.com/stripe/stripe-ios/tree/master/Example/IdentityVerification%20Example) and [example backend server](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf).

## Set up \[Server-side] \[Client-side]

> If you intend to use this SDK with Stripe’s Identity service, you must not modify this SDK. Using a modified version of this SDK with Stripe’s Identity service, without Stripe’s written authorization, is a breach of your agreement with Stripe and might result in your Stripe account being shut down.

### Install the SDK (Client-side)

The [Stripe iOS SDK](https://github.com/stripe/stripe-ios) is open source, [fully documented](https://stripe.dev/stripe-ios/index.html), and compatible with apps supporting iOS 13.0 or above.

#### Swift Package Manager

To install the SDK, follow these steps:

1. In Xcode, select **File** > **Add Package Dependencies…** and enter `https://github.com/stripe/stripe-ios-spm` as the repository URL.
2. Select the latest version number from our [releases page](https://github.com/stripe/stripe-ios/releases).
3. Add the **StripeIdentity** product to the [target of your app](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app).

#### CocoaPods

1. If you haven’t already, install the latest version of [CocoaPods](https://guides.cocoapods.org/using/getting-started.html).
2. If you don’t have an existing [Podfile](https://guides.cocoapods.org/syntax/podfile.html), run the following command to create one:
   ```bash
   pod init
   ```
3. Add this line to your `Podfile`:
   ```podfile
   pod 'StripeIdentity'
   ```
4. Run the following command:
   ```bash
   pod install
   ```
5. Don’t forget to use the `.xcworkspace` file to open your project in Xcode, instead of the `.xcodeproj` file, from here on out.
6. In the future, to update to the latest version of the SDK, run:
   ```bash
   pod update StripeIdentity
   ```

#### Carthage

1. If you haven’t already, install the latest version of [Carthage](https://github.com/Carthage/Carthage#installing-carthage).
2. Add this line to your `Cartfile`:
   ```cartfile
   github "stripe/stripe-ios"
   ```
3. Follow the [Carthage installation instructions](https://github.com/Carthage/Carthage#if-youre-building-for-ios-tvos-or-watchos). Make sure to embed all of the required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripeIdentity#manual-linking).
4. In the future, to update to the latest version of the SDK, run the following command:
   ```bash
   carthage update stripe-ios --platform ios
   ```

#### Manual Framework

1. Head to our [GitHub releases page](https://github.com/stripe/stripe-ios/releases/latest) and download and unzip **Stripe.xcframework.zip**.
2. Drag **StripeIdentity.xcframework** to the **Embedded Binaries** section of the **General** settings in your Xcode project. Make sure to select **Copy items if needed**.
3. Repeat step 2 for all required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripeIdentity#manual-linking).
4. In the future, to update to the latest version of our SDK, repeat steps 1–3.

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-ios/releases) page on GitHub. To receive notifications when a new release is published, [watch releases](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository) for the repository.

### Set up camera authorization (Client-side)

The Stripe Identity iOS SDK requires access to the device’s camera to capture identity documents. To enable your app to request camera permissions:

1. Open your project’s **Info.plist** in Xcode.
2. Add the `NSCameraUsageDescription` key.
3. Add a string value that explains to your users why your app requires camera permissions, something such as:

> This app uses the camera to take a picture of your identity documents.

See [Apple’s documentation](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios) to learn more about requesting camera authorization.

### Install Stripe on your server (Server-side)

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

Then install the libraries for access to the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Add a server endpoint \[Server-side]

### Create a VerificationSession

A [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) is the programmatic representation of the verification. It contains details about the type of verification, such as what [check](https://docs.stripe.com/identity/verification-checks.md) to perform. You can [expand](https://docs.stripe.com/api/expanding_objects.md) the [verified outputs](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-verified_outputs) field to see details of the data that was verified.

You can use verification flows for re-usable configuration, which is passed to the [verification\_flow](https://docs.stripe.com/api/identity/verification_sessions/create.md#create_identity_verification_session-verification_flow) parameter. Read more in the [Verification flows guide](https://docs.stripe.com/identity/verification-flows.md).

You need a server-side endpoint to [create the VerificationSession](https://docs.stripe.com/api/identity/verification_sessions/create.md). Creating the `VerificationSession` server-side prevents malicious users from overriding verification options and incurring processing charges on your account. Add authentication to this endpoint by including a user reference in the session metadata or storing the session ID in your database.

For security, don’t create a `VerificationSession` object that’s directly accessible from the mobile client. Instead, your server provides the SDK with an ephemeral key—a short-lived API key with restricted access to the [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md). You can think of an ephemeral key as a session, authorizing the SDK to retrieve and update a specific `VerificationSession` object for the duration of the session.

After successfully creating a `VerificationSession` and ephemeral key, send the `VerificationSession` [ID](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-id) and ephemeral key secret to the client to show the document upload sheet.

> You can find a running implementation of this endpoint [available here](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf) for quick testing.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Create an ephemeral key for the VerificationSession
const ephemeralKey = await stripe.ephemeralKeys.create(
  {verification_session: verificationSession.id},
  {apiVersion: '2026-02-25.clover'}
);

// Return only the ID and ephemeral key secret to the frontend.
const verificationSessionId = verificationSession.id;
const ephemeralKeySecret = ephemeralKey.secret;
```

> The ephemeral key secret is bound to the `VerificationSession` and lets your app collect sensitive verification information such as document and selfie image files. It’s single-use and expires after 1 hour. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any endpoint that returns the ephemeral key secret. Send only the ephemeral key secret to your app to avoid exposing verification configuration or results.

Test your endpoint by starting your web server (for example, `localhost:4242`) and sending a POST request with curl to create a VerificationSession:

```bash
curl -X POST -is "http://localhost:4242/create-verification-session" -d ""
```

The response in your terminal looks like this:

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{ id: "vs_QdfQQ6xfGNJR7ogV6", ephemeral_key_secret: "ek_YWNjdF8xRm..." }
```

## Present the verification sheet \[Client-side]

Set up a button to present a verification sheet. After tapping the button, your user can capture and upload a picture of their passport, driver’s license, or national ID.

Before getting started, your verification page should:

- Explain to the user why they need to verify their identity.
- Include a verify identity button to present Stripe’s UI.

### Add a button

Start by creating a view controller with a button that has a tap action and a loading indicator:

```swift
import UIKit

class VerifyViewController: UIViewController {
  @IBOutlet weak var verifyButton: UIButton!
  @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
}
```

### Import the StripeIdentity SDK

Import `StripeIdentity` to your view controller:

```swift
import UIKitimport StripeIdentity

class VerifyViewController: UIViewController {
  @IBOutlet weak var verifyButton: UIButton!
  @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
}
```

### Add an action to the Verify button

Now that you have a button and an endpoint to create a `VerificationSession`, modify the button so that it presents the document upload sheet when tapped the document upload sheet when tapped.

Add a call to:

- Fetch the `VerificationSession` ID and ephemeral key secret from your endpoint.
- Instantiate an `IdentityVerificationSheet` with your brand logo and present it to the user.
- Handle the `VerificationResult` to know if the user completed the verification flow.

```swift
import UIKit
import StripeIdentity

class VerifyViewController: UIViewController {
  @IBOutlet weak var verifyButton: UIButton!
  @IBOutlet weak var activityIndicator: UIActivityIndicatorView!

  override func viewDidLoad() {
    super.viewDidLoad()
verifyButton.addTarget(self, action: #selector(didTapVerifyButton), for: .touchUpInside)
  }
@objc
  func didTapVerifyButton() {
    // Disable the button while the request is made
    verifyButton.isEnabled = false
    activityIndicator.startAnimating()

    // Make request to your verification endpoint
    var urlRequest = URLRequest(url: URL(string: "https://{{YOUR_SERVER_BASE_URL}}/create-verification-session")!)
    urlRequest.httpMethod = "POST"

    let task = URLSession.shared.dataTask(with: urlRequest) { [weak self] data, response, error in
      DispatchQueue.main.async { [weak self] in
        // Re-enable button
        self?.verifyButton.isEnabled = true
        self?.activityIndicator.stopAnimating()

        guard error == nil,
              let data = data,
              let responseJson = try? JSONDecoder().decode([String: String].self, from: data),
              let verificationSessionId = responseJson["id"],
              let ephemeralKeySecret = responseJson["ephemeral_key_secret"] else {
          // Handle error
          print(error as Any)
          return
        }

        self?.presentVerificationSheet(verificationSessionId: verificationSessionId, ephemeralKeySecret: ephemeralKeySecret)
      }
    }
    task.resume()
  }

  func presentVerificationSheet(verificationSessionId: String, ephemeralKeySecret: String) {
    // Configure a square brand logo. Recommended image size is 32 x 32 points.
    let configuration = IdentityVerificationSheet.Configuration(
        brandLogo: UIImage(named: "{{YOUR_BRAND_LOGO}}")!
    )
    // Instantiate and present the sheet
    let verificationSheet = IdentityVerificationSheet(
      verificationSessionId: verificationSessionId,
      ephemeralKeySecret: ephemeralKeySecret,
      configuration: configuration
    )
    verificationSheet.present(from: self, completion: { result in
      switch result {
      case .flowCompleted:
        // The user has completed uploading their documents.
        // Let them know that the verification is processing.
        print("Verification Completed!")
      case .flowCanceled:
        // The user did not complete uploading their documents.
        // You should allow them to try again.
        print("Verification Canceled!")
      case .flowFailed(let error):
        // If the flow fails, you should display the localized error
        // message to your user using error.localizedDescription
        print("Verification Failed!")
        print(error.localizedDescription)
      }
    })
  }
}
```

### Test the verification sheet

Test that the verify button presents a document upload sheet:

- Tap the **Verify Identity** button.
- Ensure no error messages are shown.

If your integration isn’t working:

1. Put a breakpoint where you fetch the `VerificationSession` ID and ephemeral key secret.
2. Verify that no network errors exist and that the endpoint is returning a `VerificationSession` ID and ephemeral key secret.

## Handle verification events

[Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are typically completed as soon as the user redirects back to your site and you can retrieve the result from the API immediately. In some rare cases, the document verification isn’t ready yet and must continue asynchronously. In these cases, you’re notified through webhooks when the verification result is ready. After the processing completes, the VerificationSession status changes from `processing` to `verified`.

Stripe sends the following events when the session status changes:

| Event name                                                                                                                                           | Description                                                                                                                                                 | Next steps                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [identity.verification\_session.verified](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.verified)             | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and they’re all successfully verified. | Trigger relevant actions in your application.                                                           |
| [identity.verification\_session.requires\_input](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.requires_input) | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and at least one of the checks failed. | Trigger relevant actions in your application and potentially allow your user to retry the verification. |

Use a [webhook handler](https://docs.stripe.com/identity/handle-verification-outcomes.md) to receive these events and automate actions like sending a confirmation email, updating the verification results in your database, or completing an onboarding step. You can also view [verification events in the Dashboard](https://dashboard.stripe.com/events?type=identity.%2A).

## Receive events and run business actions

### With code

Build a webhook handler to listen for events and build custom asynchronous verification flows. Test and debug your webhook integration locally with the Stripe CLI.

[Build a custom webhook](https://docs.stripe.com/identity/handle-verification-outcomes.md)

### Without code

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

[View your test verifications in the Dashboard](https://dashboard.stripe.com/test/identity/verification-sessions)

> To get access to the Identity iOS SDK, visit the [Identity Settings](https://dashboard.stripe.com/settings/identity) page and click **Enable**.

This guide demonstrates how to migrate a Stripe Identity integration from [Web Redirect](https://docs.stripe.com/identity/verify-identity-documents.md?platform=web\&type=redirect) to native iOS SDK for your mobile app. This guide includes the following steps:

1. Set up Stripe.
2. Update your server endpoint.
3. Present the verification sheet.
4. Handle verification events.

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).

The steps in this guide are fully implemented in the [example app](https://github.com/stripe/stripe-ios/tree/master/Example/IdentityVerification%20Example) and [example backend server](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf).

## Set up \[Server-side] \[Client-side]

> If you intend to use this SDK with Stripe’s Identity service, you must not modify this SDK. Using a modified version of this SDK with Stripe’s Identity service, without Stripe’s written authorization, is a breach of your agreement with Stripe and might result in your Stripe account being shut down.

### Install the SDK (Client-side)

The [Stripe iOS SDK](https://github.com/stripe/stripe-ios) is open source, [fully documented](https://stripe.dev/stripe-ios/index.html), and compatible with apps supporting iOS 13.0 or above.

#### Swift Package Manager

To install the SDK, follow these steps:

1. In Xcode, select **File** > **Add Package Dependencies…** and enter `https://github.com/stripe/stripe-ios-spm` as the repository URL.
2. Select the latest version number from our [releases page](https://github.com/stripe/stripe-ios/releases).
3. Add the **StripeIdentity** product to the [target of your app](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app).

#### CocoaPods

1. If you haven’t already, install the latest version of [CocoaPods](https://guides.cocoapods.org/using/getting-started.html).
2. If you don’t have an existing [Podfile](https://guides.cocoapods.org/syntax/podfile.html), run the following command to create one:
   ```bash
   pod init
   ```
3. Add this line to your `Podfile`:
   ```podfile
   pod 'StripeIdentity'
   ```
4. Run the following command:
   ```bash
   pod install
   ```
5. Don’t forget to use the `.xcworkspace` file to open your project in Xcode, instead of the `.xcodeproj` file, from here on out.
6. In the future, to update to the latest version of the SDK, run:
   ```bash
   pod update StripeIdentity
   ```

#### Carthage

1. If you haven’t already, install the latest version of [Carthage](https://github.com/Carthage/Carthage#installing-carthage).
2. Add this line to your `Cartfile`:
   ```cartfile
   github "stripe/stripe-ios"
   ```
3. Follow the [Carthage installation instructions](https://github.com/Carthage/Carthage#if-youre-building-for-ios-tvos-or-watchos). Make sure to embed all of the required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripeIdentity#manual-linking).
4. In the future, to update to the latest version of the SDK, run the following command:
   ```bash
   carthage update stripe-ios --platform ios
   ```

#### Manual Framework

1. Head to our [GitHub releases page](https://github.com/stripe/stripe-ios/releases/latest) and download and unzip **Stripe.xcframework.zip**.
2. Drag **StripeIdentity.xcframework** to the **Embedded Binaries** section of the **General** settings in your Xcode project. Make sure to select **Copy items if needed**.
3. Repeat step 2 for all required frameworks listed [here](https://github.com/stripe/stripe-ios/tree/master/StripeIdentity#manual-linking).
4. In the future, to update to the latest version of our SDK, repeat steps 1–3.

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-ios/releases) page on GitHub. To receive notifications when a new release is published, [watch releases](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository) for the repository.

### Set up camera authorization (Client-side)

The Stripe Identity iOS SDK requires access to the device’s camera to capture identity documents. To enable your app to request camera permissions:

1. Open your project’s **Info.plist** in Xcode.
2. Add the `NSCameraUsageDescription` key.
3. Add a string value that explains to your users why your app requires camera permissions, something such as:

> This app uses the camera to take a picture of your identity documents.

See [Apple’s documentation](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios) to learn more about requesting camera authorization.

### Install Stripe on your server (Server-side)

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

Then install the libraries for access to the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Update the server endpoint \[Server-side]

### Existing web integration

If you had a [Modal](https://docs.stripe.com/identity/verify-identity-documents.md?platform=web\&type=modal) integration, a [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) was created and `VerificationSession` [client\_secret](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-client_secret) was passed to the Stripe API object.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the client secret to the frontend.
const clientSecret = verificationSession.client_secret;
```

If you had a [redirect](https://docs.stripe.com/identity/verify-identity-documents.md?platform=web\&type=redirect) integration, a [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) was created and the `VerificationSession` [url](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-url) was sent to the client mobile app and opened within an in-app browser.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the session URL to the frontend.
const url = verificationSession.url;
```

### Migrate to SDK integration

To use native SDK, create the same [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) and create an ephemeral key secret.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});
// Create an ephemeral key for the VerificationSession
const ephemeralKey = await stripe.ephemeralKeys.create(
  {verification_session: verificationSession.id},
  {apiVersion: '2026-02-25.clover'}
);

// Return only the ID and ephemeral key secret to the frontend.
const verificationSessionId = verificationSession.id;
const ephemeralKeySecret = ephemeralKey.secret;
```

After successfully creating a `VerificationSession` and ephemeral key, send the `VerificationSession` [ID](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-id) and `ephemeral key secret` to the client mobile app.

> You can find a running implementation of this endpoint [available here](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf) for quick testing.

> The ephemeral key secret lets your app collect sensitive verification information. It’s single-use and expires after 1 hour. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any endpoint that returns the ephemeral key secret. Send only the ephemeral key secret to your app to avoid exposing the verification configuration or results.

## Present the verification sheet \[Client-side]

Set up a button to present a verification sheet. After tapping the button, your user can capture and upload a picture of their passport, driver’s license, or national ID.

Before getting started, your verification page should:

- Explain to the user why they need to verify their identity.
- Include a verify identity button to present Stripe’s UI.

### Add a button

Start by creating a view controller with a button that has a tap action and a loading indicator:

```swift
import UIKit

class VerifyViewController: UIViewController {
  @IBOutlet weak var verifyButton: UIButton!
  @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
}
```

### Import the StripeIdentity SDK

Import `StripeIdentity` to your view controller:

```swift
import UIKitimport StripeIdentity

class VerifyViewController: UIViewController {
  @IBOutlet weak var verifyButton: UIButton!
  @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
}
```

### Add an action to the Verify button

Now that you have a button and an endpoint to create a `VerificationSession`, modify the button so that it presents the document upload sheet when tapped the document upload sheet when tapped.

Add a call to:

- Fetch the `VerificationSession` ID and ephemeral key secret from your endpoint.
- Instantiate an `IdentityVerificationSheet` with your brand logo and present it to the user.
- Handle the `VerificationResult` to know if the user completed the verification flow.

```swift
import UIKit
import StripeIdentity

class VerifyViewController: UIViewController {
  @IBOutlet weak var verifyButton: UIButton!
  @IBOutlet weak var activityIndicator: UIActivityIndicatorView!

  override func viewDidLoad() {
    super.viewDidLoad()
verifyButton.addTarget(self, action: #selector(didTapVerifyButton), for: .touchUpInside)
  }
@objc
  func didTapVerifyButton() {
    // Disable the button while the request is made
    verifyButton.isEnabled = false
    activityIndicator.startAnimating()

    // Make request to your verification endpoint
    var urlRequest = URLRequest(url: URL(string: "https://{{YOUR_SERVER_BASE_URL}}/create-verification-session")!)
    urlRequest.httpMethod = "POST"

    let task = URLSession.shared.dataTask(with: urlRequest) { [weak self] data, response, error in
      DispatchQueue.main.async { [weak self] in
        // Re-enable button
        self?.verifyButton.isEnabled = true
        self?.activityIndicator.stopAnimating()

        guard error == nil,
              let data = data,
              let responseJson = try? JSONDecoder().decode([String: String].self, from: data),
              let verificationSessionId = responseJson["id"],
              let ephemeralKeySecret = responseJson["ephemeral_key_secret"] else {
          // Handle error
          print(error as Any)
          return
        }

        self?.presentVerificationSheet(verificationSessionId: verificationSessionId, ephemeralKeySecret: ephemeralKeySecret)
      }
    }
    task.resume()
  }

  func presentVerificationSheet(verificationSessionId: String, ephemeralKeySecret: String) {
    // Configure a square brand logo. Recommended image size is 32 x 32 points.
    let configuration = IdentityVerificationSheet.Configuration(
        brandLogo: UIImage(named: "{{YOUR_BRAND_LOGO}}")!
    )
    // Instantiate and present the sheet
    let verificationSheet = IdentityVerificationSheet(
      verificationSessionId: verificationSessionId,
      ephemeralKeySecret: ephemeralKeySecret,
      configuration: configuration
    )
    verificationSheet.present(from: self, completion: { result in
      switch result {
      case .flowCompleted:
        // The user has completed uploading their documents.
        // Let them know that the verification is processing.
        print("Verification Completed!")
      case .flowCanceled:
        // The user did not complete uploading their documents.
        // You should allow them to try again.
        print("Verification Canceled!")
      case .flowFailed(let error):
        // If the flow fails, you should display the localized error
        // message to your user using error.localizedDescription
        print("Verification Failed!")
        print(error.localizedDescription)
      }
    })
  }
}
```

### Test the verification sheet

Test that the verify button presents a document upload sheet:

- Tap the **Verify Identity** button.
- Ensure no error messages are shown.

If your integration isn’t working:

1. Put a breakpoint where you fetch the `VerificationSession` ID and ephemeral key secret.
2. Verify that no network errors exist and that the endpoint is returning a `VerificationSession` ID and ephemeral key secret.

## Handle verification events

[Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are typically completed as soon as the user redirects back to your site and you can retrieve the result from the API immediately. In some rare cases, the document verification isn’t ready yet and must continue asynchronously. In these cases, you’re notified through webhooks when the verification result is ready. After the processing completes, the VerificationSession status changes from `processing` to `verified`.

Stripe sends the following events when the session status changes:

| Event name                                                                                                                                           | Description                                                                                                                                                 | Next steps                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [identity.verification\_session.verified](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.verified)             | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and they’re all successfully verified. | Trigger relevant actions in your application.                                                           |
| [identity.verification\_session.requires\_input](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.requires_input) | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and at least one of the checks failed. | Trigger relevant actions in your application and potentially allow your user to retry the verification. |

Use a [webhook handler](https://docs.stripe.com/identity/handle-verification-outcomes.md) to receive these events and automate actions like sending a confirmation email, updating the verification results in your database, or completing an onboarding step. You can also view [verification events in the Dashboard](https://dashboard.stripe.com/events?type=identity.%2A).

## Receive events and run business actions

### With code

Build a webhook handler to listen for events and build custom asynchronous verification flows. Test and debug your webhook integration locally with the Stripe CLI.

[Build a custom webhook](https://docs.stripe.com/identity/handle-verification-outcomes.md)

### Without code

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

[View your test verifications in the Dashboard](https://dashboard.stripe.com/test/identity/verification-sessions)

> To get access to the Identity Android SDK, visit the [Identity Settings](https://dashboard.stripe.com/settings/identity) page and click **Enable**.

To verify the identity of your users on Android, present a verification sheet in your application. This guide includes the following steps:

1. Set up Stripe.
2. Add a server endpoint.
3. Present the verification sheet.
4. Handle verification events.

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).

The steps in this guide are fully implemented in the [example app](https://github.com/stripe/stripe-android/tree/master/identity-example) and [example backend server](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf).

## Set up \[Server-side] \[Client-side]

> If you intend to use this SDK with Stripe’s Identity service, you must not modify this SDK. Using a modified version of this SDK with Stripe’s Identity service, without Stripe’s written authorization, is a breach of your agreement with Stripe and might result in your Stripe account being shut down.

### Install the SDK (Client-side)

The [Stripe Android SDK](https://github.com/stripe/stripe-android) is open source and [fully documented](https://stripe.dev/stripe-android/).

To install the SDK, add `identity` to the `dependencies` block of your [app/build.gradle](https://developer.android.com/studio/build/dependencies) file:

#### Kotlin

```kotlin
plugins {
    id("com.android.application")
}

android { ... }

dependencies {
  // ...

  // Stripe Identity Android SDK
  implementation("com.stripe:identity:23.0.2")
}
```

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-android/releases) page on GitHub. To receive notifications when a new release is published, [watch releases for the repository](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).

### Use TFLite in Google Play to reduce binary size (Client-side)

Identity Android SDK uses a portable TFLite runtime to execute AI models. If your application is released through Google Play, you can use the Google Play runtime to reduce SDK size by about 1.2mb.

#### Groovy

```groovy
dependencies {
  // ...

  // Stripe Identity Android SDK
  implementation('com.stripe:identity:23.0.2') {
    exclude group: 'com.stripe', module: 'ml-core-default' // exclude the default TFLite runtime
  }
  implementation('com.stripe:ml-core-googleplay:23.0.2') // include the Google Play TFLite runtime
}
```

### Set up material theme (Client-side)

The Stripe Identity Android SDK requires the hosting activity to use [material theme](https://material.io/develop/android/theming/dark). To enable material theme:

1. Open your project’s `app/src/main/AndroidManifest.xml`.
2. Make sure the `android:theme` applied to the `application` is a child of one of the material themes (for example, `Theme.MaterialComponents.DayNight`).

### Install Stripe on your server (Server-side)

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

Then install the libraries for access to the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Add a server endpoint \[Server-side]

### Create a VerificationSession

A [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) is the programmatic representation of the verification. It contains details about the type of verification, such as what [check](https://docs.stripe.com/identity/verification-checks.md) to perform. You can [expand](https://docs.stripe.com/api/expanding_objects.md) the [verified outputs](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-verified_outputs) field to see details of the data that was verified.

You can use verification flows for re-usable configuration, which is passed to the [verification\_flow](https://docs.stripe.com/api/identity/verification_sessions/create.md#create_identity_verification_session-verification_flow) parameter. Read more in the [Verification flows guide](https://docs.stripe.com/identity/verification-flows.md).

You need a server-side endpoint to [create the VerificationSession](https://docs.stripe.com/api/identity/verification_sessions/create.md). Creating the `VerificationSession` server-side prevents malicious users from overriding verification options and incurring processing charges on your account. Add authentication to this endpoint by including a user reference in the session metadata or storing the session ID in your database.

For security, don’t create a `VerificationSession` object that’s directly accessible from the mobile client. Instead, your server provides the SDK with an ephemeral key—a short-lived API key with restricted access to the [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md). You can think of an ephemeral key as a session, authorizing the SDK to retrieve and update a specific `VerificationSession` object for the duration of the session.

After successfully creating a `VerificationSession` and ephemeral key, send the `VerificationSession` [ID](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-id) and ephemeral key secret to the client to show the document upload sheet.

> You can find a running implementation of this endpoint [available here](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf) for quick testing.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Create an ephemeral key for the VerificationSession
const ephemeralKey = await stripe.ephemeralKeys.create(
  {verification_session: verificationSession.id},
  {apiVersion: '2026-02-25.clover'}
);

// Return only the ID and ephemeral key secret to the frontend.
const verificationSessionId = verificationSession.id;
const ephemeralKeySecret = ephemeralKey.secret;
```

> The ephemeral key secret is bound to the `VerificationSession` and lets your app collect sensitive verification information such as document and selfie image files. It’s single-use and expires after 1 hour. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any endpoint that returns the ephemeral key secret. Send only the ephemeral key secret to your app to avoid exposing verification configuration or results.

Test your endpoint by starting your web server (for example, `localhost:4242`) and sending a POST request with curl to create a VerificationSession:

```bash
curl -X POST -is "http://localhost:4242/create-verification-session" -d ""
```

The response in your terminal looks like this:

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{ id: "vs_QdfQQ6xfGNJR7ogV6", ephemeral_key_secret: "ek_YWNjdF8xRm..." }
```

## Present the verification sheet \[Client-side]

Set up a button to present a verification sheet. After tapping the button, your user can capture and upload a picture of their passport, driver’s license, or national ID.

Before getting started, your verification page should:

- Explain to the user why they need to verify their identity.
- Include a verify identity button to present Stripe’s UI.

### Add a button

Start by creating an `Activity` with a button that has a tap action and a loading indicator. Make sure `MyHostingActivity` inherits `AppCompatActivity` and uses a theme, inheriting `Theme.MaterialComponents`.

#### Kotlin

```kotlin
class MyHostingActivity : AppCompatActivity() {
  // binding has a button and a loading indicator
  private val binding by lazy {
    MyHostingActivityBinding.inflate(layoutInflater)
  }
}
```

### Import the Stripe Identity SDK

Import the Identity SDK to your activity, initialize it in the `onCreate` method (This registers an [ActivityResultLauncher](https://developer.android.com/reference/androidx/activity/result/ActivityResultLauncher) on this `AppCompatActivity` or `Fragment`).

#### Kotlin

```kotlin
import com.stripe.android.identity.IdentityVerificationSheet

class MyHostingActivity : AppCompatActivity() {
  // binding has a button and a loading indicator
  private val binding by lazy {
    MyHostingActivityBinding.inflate(layoutInflater)
  }
lateinit var identityVerificationSheet: IdentityVerificationSheet

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(binding.root)
    identityVerificationSheet =
      IdentityVerificationSheet.create(
          this,
          IdentityVerificationSheet.Configuration(
              // Pass your square brand logo by creating it from local resource or
              // Uri.parse("https://path/to/your/brandlogo.jpg")
              brandLogo = logoUri
          )
      ) { verificationResult->
          when (verificationResult) {
            is Completed -> {
                // The user has completed uploading their documents.
                // Let them know that the verification is processing.
                ...
                Log.d(TAG, "Verification Completed!")
            }
            is Canceled -> {
                // The user did not complete uploading their documents.
                // You should allow them to try again.
                ...
                Log.d(TAG, "Verification Canceled!")
            }
            is Failed -> {
                // If the flow fails, you should display the localized error
                // message to your user using throwable.getLocalizedMessage()
                ...
                Log.d(TAG, "Verification Failed!")
            }
         }
      }
  }
}
```

### Add an action to the Verify button

Now that you have a button and an endpoint to create a `VerificationSession`, modify the button so that it presents the document upload sheet when tapped the document upload sheet when tapped.

Add a call to:

- Fetch the `VerificationSession` ID and ephemeral key secret from your endpoint.
- Instantiate an `IdentityVerificationSheet` with your brand logo and present it to the user.
- Handle the `VerificationFlowResult` to know if the user completed the verification flow.

#### Kotlin

```kotlin

import com.stripe.android.identity.*

class MyHostingActivity : AppCompatActivity() {
  // binding has a button and a loading indicator
  private val binding by lazy {
    MyHostingActivityBinding.inflate(layoutInflater)
  }
  lateinit var identityVerificationSheet: IdentityVerificationSheet

  override fun onCreate(savedInstanceState: Bundle?) {
    ...binding.button.setOnClickListener(::onButtonClick)
  }
fun onButtonClick() {
    // show loading UI
    // Request the session ID with Fuel or other network libraries
    Fuel.post("https://{{YOUR_SERVER_BASE_URL}}/create-verification-session")
      .responseString { _, _, result ->
          when (result) {
              is Result.Failure -> {
                  // show error UI
              }
              is Result.Success -> {
                  val responseJson = JSONObject(result.value)
                  try {
                      // start verification session
                      identityVerificationSheet.present(
                          verificationSessionId =
                            responseJson.getString("id"),
                          ephemeralKeySecret =
                            responseJson.getString("ephemeral_key_secret")
                      )
                  } catch (t: Throwable) {
                      // show error UI
                  }
              }
          }
      }
  }
}
```

### Test the verification sheet

Test that the verify button presents a document upload sheet:

- Tap the **Verify Identity** button.
- Ensure no error messages are shown.

If your integration isn’t working:

1. Put a breakpoint where you fetch the `VerificationSession` ID and ephemeral key secret.
2. Verify that no network errors exist and that the endpoint is returning a `VerificationSession` ID and ephemeral key secret.

## Handle verification events

[Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are typically completed as soon as the user redirects back to your site and you can retrieve the result from the API immediately. In some rare cases, the document verification isn’t ready yet and must continue asynchronously. In these cases, you’re notified through webhooks when the verification result is ready. After the processing completes, the VerificationSession status changes from `processing` to `verified`.

Stripe sends the following events when the session status changes:

| Event name                                                                                                                                           | Description                                                                                                                                                 | Next steps                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [identity.verification\_session.verified](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.verified)             | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and they’re all successfully verified. | Trigger relevant actions in your application.                                                           |
| [identity.verification\_session.requires\_input](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.requires_input) | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and at least one of the checks failed. | Trigger relevant actions in your application and potentially allow your user to retry the verification. |

Use a [webhook handler](https://docs.stripe.com/identity/handle-verification-outcomes.md) to receive these events and automate actions like sending a confirmation email, updating the verification results in your database, or completing an onboarding step. You can also view [verification events in the Dashboard](https://dashboard.stripe.com/events?type=identity.%2A).

## Receive events and run business actions

### With code

Build a webhook handler to listen for events and build custom asynchronous verification flows. Test and debug your webhook integration locally with the Stripe CLI.

[Build a custom webhook](https://docs.stripe.com/identity/handle-verification-outcomes.md)

### Without code

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

[View your test verifications in the Dashboard](https://dashboard.stripe.com/test/identity/verification-sessions)

> To get access to the Identity Android SDK, visit the [Identity Settings](https://dashboard.stripe.com/settings/identity) page and click **Enable**.

This guide demonstrates how to migrate a Stripe Identity integration from [Web Redirect](https://docs.stripe.com/identity/verify-identity-documents.md?platform=web\&type=redirect) to native Android SDK for your mobile app. This guide includes the following steps:

1. Set up Stripe.
2. Update your server endpoint.
3. Present the verification sheet.
4. Handle verification events.

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).

The steps in this guide are fully implemented in the [example app](https://github.com/stripe/stripe-android/tree/master/identity-example) and [example backend server](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf).

## Set up \[Server-side] \[Client-side]

> If you intend to use this SDK with Stripe’s Identity service, you must not modify this SDK. Using a modified version of this SDK with Stripe’s Identity service, without Stripe’s written authorization, is a breach of your agreement with Stripe and might result in your Stripe account being shut down.

### Install the SDK (Client-side)

The [Stripe Android SDK](https://github.com/stripe/stripe-android) is open source and [fully documented](https://stripe.dev/stripe-android/).

To install the SDK, add `identity` to the `dependencies` block of your [app/build.gradle](https://developer.android.com/studio/build/dependencies) file:

#### Kotlin

```kotlin
plugins {
    id("com.android.application")
}

android { ... }

dependencies {
  // ...

  // Stripe Identity Android SDK
  implementation("com.stripe:identity:23.0.2")
}
```

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-android/releases) page on GitHub. To receive notifications when a new release is published, [watch releases for the repository](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).

### Use TFLite in Google Play to reduce binary size (Client-side)

Identity Android SDK uses a portable TFLite runtime to execute AI models. If your application is released through Google Play, you can use the Google Play runtime to reduce SDK size by about 1.2mb.

#### Groovy

```groovy
dependencies {
  // ...

  // Stripe Identity Android SDK
  implementation('com.stripe:identity:23.0.2') {
    exclude group: 'com.stripe', module: 'ml-core-default' // exclude the default TFLite runtime
  }
  implementation('com.stripe:ml-core-googleplay:23.0.2') // include the Google Play TFLite runtime
}
```

### Set up material theme (Client-side)

The Stripe Identity Android SDK requires the hosting activity to use [material theme](https://material.io/develop/android/theming/dark). To enable material theme:

1. Open your project’s `app/src/main/AndroidManifest.xml`.
2. Make sure the `android:theme` applied to the `application` is a child of one of the material themes (for example, `Theme.MaterialComponents.DayNight`).

### Install Stripe on your server (Server-side)

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

Then install the libraries for access to the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Update the server endpoint \[Server-side]

### Existing web integration

If you had a [Modal](https://docs.stripe.com/identity/verify-identity-documents.md?platform=web\&type=modal) integration, a [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) was created and `VerificationSession` [client\_secret](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-client_secret) was passed to the Stripe API object.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the client secret to the frontend.
const clientSecret = verificationSession.client_secret;
```

If you had a [redirect](https://docs.stripe.com/identity/verify-identity-documents.md?platform=web\&type=redirect) integration, a [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) was created and the `VerificationSession` [url](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-url) was sent to the client mobile app and opened within an in-app browser.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the session URL to the frontend.
const url = verificationSession.url;
```

### Migrate to SDK integration

To use native SDK, create the same [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) and create an ephemeral key secret.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});
// Create an ephemeral key for the VerificationSession
const ephemeralKey = await stripe.ephemeralKeys.create(
  {verification_session: verificationSession.id},
  {apiVersion: '2026-02-25.clover'}
);

// Return only the ID and ephemeral key secret to the frontend.
const verificationSessionId = verificationSession.id;
const ephemeralKeySecret = ephemeralKey.secret;
```

After successfully creating a `VerificationSession` and ephemeral key, send the `VerificationSession` [ID](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-id) and `ephemeral key secret` to the client mobile app.

> You can find a running implementation of this endpoint [available here](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf) for quick testing.

> The ephemeral key secret lets your app collect sensitive verification information. It’s single-use and expires after 1 hour. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any endpoint that returns the ephemeral key secret. Send only the ephemeral key secret to your app to avoid exposing the verification configuration or results.

## Present the verification sheet \[Client-side]

Set up a button to present a verification sheet. After tapping the button, your user can capture and upload a picture of their passport, driver’s license, or national ID.

Before getting started, your verification page should:

- Explain to the user why they need to verify their identity.
- Include a verify identity button to present Stripe’s UI.

### Add a button

Start by creating an `Activity` with a button that has a tap action and a loading indicator. Make sure `MyHostingActivity` inherits `AppCompatActivity` and uses a theme, inheriting `Theme.MaterialComponents`.

#### Kotlin

```kotlin
class MyHostingActivity : AppCompatActivity() {
  // binding has a button and a loading indicator
  private val binding by lazy {
    MyHostingActivityBinding.inflate(layoutInflater)
  }
}
```

### Import the Stripe Identity SDK

Import the Identity SDK to your activity, initialize it in the `onCreate` method (This registers an [ActivityResultLauncher](https://developer.android.com/reference/androidx/activity/result/ActivityResultLauncher) on this `AppCompatActivity` or `Fragment`).

#### Kotlin

```kotlin
import com.stripe.android.identity.IdentityVerificationSheet

class MyHostingActivity : AppCompatActivity() {
  // binding has a button and a loading indicator
  private val binding by lazy {
    MyHostingActivityBinding.inflate(layoutInflater)
  }
lateinit var identityVerificationSheet: IdentityVerificationSheet

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(binding.root)
    identityVerificationSheet =
      IdentityVerificationSheet.create(
          this,
          IdentityVerificationSheet.Configuration(
              // Pass your square brand logo by creating it from local resource or
              // Uri.parse("https://path/to/your/brandlogo.jpg")
              brandLogo = logoUri
          )
      ) { verificationResult->
          when (verificationResult) {
            is Completed -> {
                // The user has completed uploading their documents.
                // Let them know that the verification is processing.
                ...
                Log.d(TAG, "Verification Completed!")
            }
            is Canceled -> {
                // The user did not complete uploading their documents.
                // You should allow them to try again.
                ...
                Log.d(TAG, "Verification Canceled!")
            }
            is Failed -> {
                // If the flow fails, you should display the localized error
                // message to your user using throwable.getLocalizedMessage()
                ...
                Log.d(TAG, "Verification Failed!")
            }
         }
      }
  }
}
```

### Add an action to the Verify button

Now that you have a button and an endpoint to create a `VerificationSession`, modify the button so that it presents the document upload sheet when tapped the document upload sheet when tapped.

Add a call to:

- Fetch the `VerificationSession` ID and ephemeral key secret from your endpoint.
- Instantiate an `IdentityVerificationSheet` with your brand logo and present it to the user.
- Handle the `VerificationFlowResult` to know if the user completed the verification flow.

#### Kotlin

```kotlin

import com.stripe.android.identity.*

class MyHostingActivity : AppCompatActivity() {
  // binding has a button and a loading indicator
  private val binding by lazy {
    MyHostingActivityBinding.inflate(layoutInflater)
  }
  lateinit var identityVerificationSheet: IdentityVerificationSheet

  override fun onCreate(savedInstanceState: Bundle?) {
    ...binding.button.setOnClickListener(::onButtonClick)
  }
fun onButtonClick() {
    // show loading UI
    // Request the session ID with Fuel or other network libraries
    Fuel.post("https://{{YOUR_SERVER_BASE_URL}}/create-verification-session")
      .responseString { _, _, result ->
          when (result) {
              is Result.Failure -> {
                  // show error UI
              }
              is Result.Success -> {
                  val responseJson = JSONObject(result.value)
                  try {
                      // start verification session
                      identityVerificationSheet.present(
                          verificationSessionId =
                            responseJson.getString("id"),
                          ephemeralKeySecret =
                            responseJson.getString("ephemeral_key_secret")
                      )
                  } catch (t: Throwable) {
                      // show error UI
                  }
              }
          }
      }
  }
}
```

### Test the verification sheet

Test that the verify button presents a document upload sheet:

- Tap the **Verify Identity** button.
- Ensure no error messages are shown.

If your integration isn’t working:

1. Put a breakpoint where you fetch the `VerificationSession` ID and ephemeral key secret.
2. Verify that no network errors exist and that the endpoint is returning a `VerificationSession` ID and ephemeral key secret.

## Handle verification events

[Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are typically completed as soon as the user redirects back to your site and you can retrieve the result from the API immediately. In some rare cases, the document verification isn’t ready yet and must continue asynchronously. In these cases, you’re notified through webhooks when the verification result is ready. After the processing completes, the VerificationSession status changes from `processing` to `verified`.

Stripe sends the following events when the session status changes:

| Event name                                                                                                                                           | Description                                                                                                                                                 | Next steps                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [identity.verification\_session.verified](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.verified)             | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and they’re all successfully verified. | Trigger relevant actions in your application.                                                           |
| [identity.verification\_session.requires\_input](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.requires_input) | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and at least one of the checks failed. | Trigger relevant actions in your application and potentially allow your user to retry the verification. |

Use a [webhook handler](https://docs.stripe.com/identity/handle-verification-outcomes.md) to receive these events and automate actions like sending a confirmation email, updating the verification results in your database, or completing an onboarding step. You can also view [verification events in the Dashboard](https://dashboard.stripe.com/events?type=identity.%2A).

## Receive events and run business actions

### With code

Build a webhook handler to listen for events and build custom asynchronous verification flows. Test and debug your webhook integration locally with the Stripe CLI.

[Build a custom webhook](https://docs.stripe.com/identity/handle-verification-outcomes.md)

### Without code

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

[View your test verifications in the Dashboard](https://dashboard.stripe.com/test/identity/verification-sessions)

> To get access to the Identity React Native SDK, visit the [Identity Settings](https://dashboard.stripe.com/settings/identity) page and click **Enable**.

To verify the identity of your users on React Native, present a verification sheet in your application. This guide includes the following steps:

1. Set up Stripe.
2. Add a server endpoint.
3. Present the verification sheet.
4. Handle verification events.

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).

The steps in this guide are fully implemented in the [example app](https://github.com/stripe/stripe-identity-react-native/tree/main/example) and [example backend server](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf).

## Set up \[Server-side] \[Client-side]

### Install the SDK (Client-side)

The [React Native SDK](https://github.com/stripe/stripe-identity-react-native) is open source, [fully documented](https://stripe.dev/stripe-identity-react-native), and compatible with apps supporting iOS 13.0 or Android 5.0 (API level 21) and above. Internally, it uses native [iOS](https://github.com/stripe/stripe-ios/tree/master/StripeIdentity) and [Android](https://github.com/stripe/stripe-android/tree/master/identity) SDKs.

Install the SDK by running:

#### Yarn

```bash
yarn add @stripe/stripe-identity-react-native
```

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-identity-react-native/releases) page on GitHub. To receive notifications when a new release is published, [watch releases for the repository](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository).

For iOS, run `pod install` in the `ios` directory to ensure that you also install the required native dependencies. Android doesn’t require any additional steps.

### Set up camera authorization for iOS (Client-side)

The Stripe Identity iOS SDK requires access to the device’s camera to capture identity documents. To enable your app to request camera permissions:

1. Open your project’s **Info.plist** in Xcode.
2. Add the `NSCameraUsageDescription` key.
3. Add a string value that explains to your users why your app requires camera permissions, something such as:

> This app uses the camera to take a picture of your identity documents.

See [Apple’s documentation](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios) to learn more about requesting camera authorization.

### Set up material theme for Android (Client-side)

The Stripe Identity Android SDK requires the hosting activity to use [material theme](https://material.io/develop/android/theming/dark). To enable material theme:

1. Open your project’s `app/src/main/AndroidManifest.xml`.
2. Make sure the `android:theme` applied to the `application` is a child of one of the material themes (for example, `Theme.MaterialComponents.DayNight`).

### Install Stripe on your server (Server-side)

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

Then install the libraries for access to the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Add a server endpoint \[Server-side]

### Create a VerificationSession

A [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) is the programmatic representation of the verification. It contains details about the type of verification, such as what [check](https://docs.stripe.com/identity/verification-checks.md) to perform. You can [expand](https://docs.stripe.com/api/expanding_objects.md) the [verified outputs](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-verified_outputs) field to see details of the data that was verified.

You can use verification flows for re-usable configuration, which is passed to the [verification\_flow](https://docs.stripe.com/api/identity/verification_sessions/create.md#create_identity_verification_session-verification_flow) parameter. Read more in the [Verification flows guide](https://docs.stripe.com/identity/verification-flows.md).

You need a server-side endpoint to [create the VerificationSession](https://docs.stripe.com/api/identity/verification_sessions/create.md). Creating the `VerificationSession` server-side prevents malicious users from overriding verification options and incurring processing charges on your account. Add authentication to this endpoint by including a user reference in the session metadata or storing the session ID in your database.

For security, don’t create a `VerificationSession` object that’s directly accessible from the mobile client. Instead, your server provides the SDK with an ephemeral key—a short-lived API key with restricted access to the [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md). You can think of an ephemeral key as a session, authorizing the SDK to retrieve and update a specific `VerificationSession` object for the duration of the session.

After successfully creating a `VerificationSession` and ephemeral key, send the `VerificationSession` [ID](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-id) and ephemeral key secret to the client to show the document upload sheet.

> You can find a running implementation of this endpoint [available here](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf) for quick testing.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Create an ephemeral key for the VerificationSession
const ephemeralKey = await stripe.ephemeralKeys.create(
  {verification_session: verificationSession.id},
  {apiVersion: '2026-02-25.clover'}
);

// Return only the ID and ephemeral key secret to the frontend.
const verificationSessionId = verificationSession.id;
const ephemeralKeySecret = ephemeralKey.secret;
```

> The ephemeral key secret is bound to the `VerificationSession` and lets your app collect sensitive verification information such as document and selfie image files. It’s single-use and expires after 1 hour. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any endpoint that returns the ephemeral key secret. Send only the ephemeral key secret to your app to avoid exposing verification configuration or results.

Test your endpoint by starting your web server (for example, `localhost:4242`) and sending a POST request with curl to create a VerificationSession:

```bash
curl -X POST -is "http://localhost:4242/create-verification-session" -d ""
```

The response in your terminal looks like this:

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{ id: "vs_QdfQQ6xfGNJR7ogV6", ephemeral_key_secret: "ek_YWNjdF8xRm..." }
```

## Present the verification sheet \[Client-side]

Set up a button to present a verification sheet. After tapping the button, your user can capture and upload a picture of their passport, driver’s license, or national ID.

Before getting started, your verification page should:

- Explain to the user why they need to verify their identity.
- Include a verify identity button to present Stripe’s UI.

### Add a button

Start by creating a Button component:

```javascript
import React from 'react';
import {
  View,
  Button,
} from 'react-native';

function VerifyScreen() {
  return (
    <View>
      <Button
        title='Verify'
      />
    </View>
  );
}
```

### Import the Stripe Identity SDK

Import the `useStripeIdentity` hook:

```javascript
import React from 'react';
import {
  View,
  Button,
} from 'react-native';import { useStripeIdentity } from "@stripe/stripe-identity-react-native";

function VerifyScreen() {
  return (
    <View>
      <Button
        title='Verify'
      />
    </View>
  );
}
```

### Add an event handler to the Verify button

Now that you have a button and an endpoint to create a VerificationSession, modify the button so that it presents the document upload sheet when tapped.

Add a call to:

- Fetch the `VerificationSession` ID and ephemeral key secret from your endpoint.
- Instantiate the `useStripeIdentity` hook by passing `fetchOptions` with your brand logo and presenting it to the user.
- Handle the `status` to know if the user completed the verification flow.

```javascript
import React from 'react';
import {
  View,
  Button,Text,
  Image
} from 'react-native';
import { useStripeIdentity } from "@stripe/stripe-identity-react-native";
// A square logo for your brand
import logo from './assets/{{YOUR_BRAND_LOGO}}.png';

function VerifyScreen() {const fetchVerificationSessionParams = async () => {
    try {
      const data = await fetch(`${YOUR_SERVER_BASE_URL}/create-verification-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await data.json();
      return json;
    } catch (e) {
      return {};
    }
  };

  const fetchOptions = async () => {
    const response = await fetchVerificationSessionParams();
    return {
      sessionId: response.id,
      ephemeralKeySecret: response.ephemeral_key_secret,
      brandLogo: Image.resolveAssetSource(logo),
    };
  };

  const { status, present, loading } = useStripeIdentity(fetchOptions);

  const handlePress = React.useCallback(() => {
    present();
  }, [present]);

  return (
    <View>
      <Button
        title='Verify'disabled={loading}
        onPress={handlePress}
      /><Text>Status: {status}</Text>
    </View>
  );
}
```

### Test the verification sheet

Test that the verify button presents a document upload sheet:

- Tap the **Verify Identity** button.
- Ensure no error messages are shown.

If your integration isn’t working:

1. Put a breakpoint where you fetch the `VerificationSession` ID and ephemeral key secret.
2. Verify that no network errors exist and that the endpoint is returning a `VerificationSession` ID and ephemeral key secret.

## Handle verification events

[Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are typically completed as soon as the user redirects back to your site and you can retrieve the result from the API immediately. In some rare cases, the document verification isn’t ready yet and must continue asynchronously. In these cases, you’re notified through webhooks when the verification result is ready. After the processing completes, the VerificationSession status changes from `processing` to `verified`.

Stripe sends the following events when the session status changes:

| Event name                                                                                                                                           | Description                                                                                                                                                 | Next steps                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [identity.verification\_session.verified](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.verified)             | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and they’re all successfully verified. | Trigger relevant actions in your application.                                                           |
| [identity.verification\_session.requires\_input](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.requires_input) | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and at least one of the checks failed. | Trigger relevant actions in your application and potentially allow your user to retry the verification. |

Use a [webhook handler](https://docs.stripe.com/identity/handle-verification-outcomes.md) to receive these events and automate actions like sending a confirmation email, updating the verification results in your database, or completing an onboarding step. You can also view [verification events in the Dashboard](https://dashboard.stripe.com/events?type=identity.%2A).

## Receive events and run business actions

### With code

Build a webhook handler to listen for events and build custom asynchronous verification flows. Test and debug your webhook integration locally with the Stripe CLI.

[Build a custom webhook](https://docs.stripe.com/identity/handle-verification-outcomes.md)

### Without code

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

[View your test verifications in the Dashboard](https://dashboard.stripe.com/test/identity/verification-sessions)

> To get access to the Identity React Native SDK, visit the [Identity Settings](https://dashboard.stripe.com/settings/identity) page and click **Enable**.

This guide demonstrates how to migrate a Stripe Identity integration from [Web Redirect](https://docs.stripe.com/identity/verify-identity-documents.md?platform=web\&type=redirect) to native React Native SDK for your mobile app. This guide includes the following steps:

1. Set up Stripe.
2. Update your server endpoint.
3. Present the verification sheet.
4. Handle verification events.

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).

The steps in this guide are fully implemented in the [example app](https://github.com/stripe/stripe-identity-react-native/tree/main/example) and [example backend server](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf).

## Set up \[Server-side] \[Client-side]

### Install the SDK (Client-side)

The [React Native SDK](https://github.com/stripe/stripe-identity-react-native) is open source, [fully documented](https://stripe.dev/stripe-identity-react-native), and compatible with apps supporting iOS 13.0 or Android 5.0 (API level 21) and above. Internally, it uses native [iOS](https://github.com/stripe/stripe-ios/tree/master/StripeIdentity) and [Android](https://github.com/stripe/stripe-android/tree/master/identity) SDKs.

Install the SDK by running:

#### Yarn

```bash
yarn add @stripe/stripe-identity-react-native
```

> For details on the latest SDK release and past versions, see the [Releases](https://github.com/stripe/stripe-identity-react-native/releases) page on GitHub. To receive notifications when a new release is published, [watch releases for the repository](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository).

For iOS, run `pod install` in the `ios` directory to ensure that you also install the required native dependencies. Android doesn’t require any additional steps.

### Set up camera authorization for iOS (Client-side)

The Stripe Identity iOS SDK requires access to the device’s camera to capture identity documents. To enable your app to request camera permissions:

1. Open your project’s **Info.plist** in Xcode.
2. Add the `NSCameraUsageDescription` key.
3. Add a string value that explains to your users why your app requires camera permissions, something such as:

> This app uses the camera to take a picture of your identity documents.

See [Apple’s documentation](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios) to learn more about requesting camera authorization.

### Set up material theme for Android (Client-side)

The Stripe Identity Android SDK requires the hosting activity to use [material theme](https://material.io/develop/android/theming/dark). To enable material theme:

1. Open your project’s `app/src/main/AndroidManifest.xml`.
2. Make sure the `android:theme` applied to the `application` is a child of one of the material themes (for example, `Theme.MaterialComponents.DayNight`).

### Install Stripe on your server (Server-side)

First, [register](https://dashboard.stripe.com/register) for a Stripe account.

Then install the libraries for access to the Stripe API from your application:

#### Ruby

```bash
# Available as a gem
sudo gem install stripe
```

```ruby
# If you use bundler, you can add this line to your Gemfile
gem 'stripe'
```

## Update the server endpoint \[Server-side]

### Existing web integration

If you had a [Modal](https://docs.stripe.com/identity/verify-identity-documents.md?platform=web\&type=modal) integration, a [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) was created and `VerificationSession` [client\_secret](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-client_secret) was passed to the Stripe API object.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the client secret to the frontend.
const clientSecret = verificationSession.client_secret;
```

If you had a [redirect](https://docs.stripe.com/identity/verify-identity-documents.md?platform=web\&type=redirect) integration, a [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) was created and the `VerificationSession` [url](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-url) was sent to the client mobile app and opened within an in-app browser.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the session URL to the frontend.
const url = verificationSession.url;
```

### Migrate to SDK integration

To use native SDK, create the same [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) and create an ephemeral key secret.

#### Node.js

```javascript

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices.
// Find your keys at https://dashboard.stripe.com/apikeys.
const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  provided_details: {
    email: 'user@example.com',
  },
  metadata: {
    user_id: '{{USER_ID}}',
  },
});
// Create an ephemeral key for the VerificationSession
const ephemeralKey = await stripe.ephemeralKeys.create(
  {verification_session: verificationSession.id},
  {apiVersion: '2026-02-25.clover'}
);

// Return only the ID and ephemeral key secret to the frontend.
const verificationSessionId = verificationSession.id;
const ephemeralKeySecret = ephemeralKey.secret;
```

After successfully creating a `VerificationSession` and ephemeral key, send the `VerificationSession` [ID](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-id) and `ephemeral key secret` to the client mobile app.

> You can find a running implementation of this endpoint [available here](https://codesandbox.io/p/devbox/compassionate-violet-gshhgf) for quick testing.

> The ephemeral key secret lets your app collect sensitive verification information. It’s single-use and expires after 1 hour. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any endpoint that returns the ephemeral key secret. Send only the ephemeral key secret to your app to avoid exposing the verification configuration or results.

## Present the verification sheet \[Client-side]

Set up a button to present a verification sheet. After tapping the button, your user can capture and upload a picture of their passport, driver’s license, or national ID.

Before getting started, your verification page should:

- Explain to the user why they need to verify their identity.
- Include a verify identity button to present Stripe’s UI.

### Add a button

Start by creating a Button component:

```javascript
import React from 'react';
import {
  View,
  Button,
} from 'react-native';

function VerifyScreen() {
  return (
    <View>
      <Button
        title='Verify'
      />
    </View>
  );
}
```

### Import the Stripe Identity SDK

Import the `useStripeIdentity` hook:

```javascript
import React from 'react';
import {
  View,
  Button,
} from 'react-native';import { useStripeIdentity } from "@stripe/stripe-identity-react-native";

function VerifyScreen() {
  return (
    <View>
      <Button
        title='Verify'
      />
    </View>
  );
}
```

### Add an event handler to the Verify button

Now that you have a button and an endpoint to create a VerificationSession, modify the button so that it presents the document upload sheet when tapped.

Add a call to:

- Fetch the `VerificationSession` ID and ephemeral key secret from your endpoint.
- Instantiate the `useStripeIdentity` hook by passing `fetchOptions` with your brand logo and presenting it to the user.
- Handle the `status` to know if the user completed the verification flow.

```javascript
import React from 'react';
import {
  View,
  Button,Text,
  Image
} from 'react-native';
import { useStripeIdentity } from "@stripe/stripe-identity-react-native";
// A square logo for your brand
import logo from './assets/{{YOUR_BRAND_LOGO}}.png';

function VerifyScreen() {const fetchVerificationSessionParams = async () => {
    try {
      const data = await fetch(`${YOUR_SERVER_BASE_URL}/create-verification-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await data.json();
      return json;
    } catch (e) {
      return {};
    }
  };

  const fetchOptions = async () => {
    const response = await fetchVerificationSessionParams();
    return {
      sessionId: response.id,
      ephemeralKeySecret: response.ephemeral_key_secret,
      brandLogo: Image.resolveAssetSource(logo),
    };
  };

  const { status, present, loading } = useStripeIdentity(fetchOptions);

  const handlePress = React.useCallback(() => {
    present();
  }, [present]);

  return (
    <View>
      <Button
        title='Verify'disabled={loading}
        onPress={handlePress}
      /><Text>Status: {status}</Text>
    </View>
  );
}
```

### Test the verification sheet

Test that the verify button presents a document upload sheet:

- Tap the **Verify Identity** button.
- Ensure no error messages are shown.

If your integration isn’t working:

1. Put a breakpoint where you fetch the `VerificationSession` ID and ephemeral key secret.
2. Verify that no network errors exist and that the endpoint is returning a `VerificationSession` ID and ephemeral key secret.

## Handle verification events

[Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are typically completed as soon as the user redirects back to your site and you can retrieve the result from the API immediately. In some rare cases, the document verification isn’t ready yet and must continue asynchronously. In these cases, you’re notified through webhooks when the verification result is ready. After the processing completes, the VerificationSession status changes from `processing` to `verified`.

Stripe sends the following events when the session status changes:

| Event name                                                                                                                                           | Description                                                                                                                                                 | Next steps                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [identity.verification\_session.verified](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.verified)             | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and they’re all successfully verified. | Trigger relevant actions in your application.                                                           |
| [identity.verification\_session.requires\_input](https://docs.stripe.com/api/events/types.md#event_types-identity.verification_session.requires_input) | Processing of all the [verification checks](https://docs.stripe.com/identity/verification-checks.md) have completed, and at least one of the checks failed. | Trigger relevant actions in your application and potentially allow your user to retry the verification. |

Use a [webhook handler](https://docs.stripe.com/identity/handle-verification-outcomes.md) to receive these events and automate actions like sending a confirmation email, updating the verification results in your database, or completing an onboarding step. You can also view [verification events in the Dashboard](https://dashboard.stripe.com/events?type=identity.%2A).

## Receive events and run business actions

### With code

Build a webhook handler to listen for events and build custom asynchronous verification flows. Test and debug your webhook integration locally with the Stripe CLI.

[Build a custom webhook](https://docs.stripe.com/identity/handle-verification-outcomes.md)

### Without code

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

[View your test verifications in the Dashboard](https://dashboard.stripe.com/test/identity/verification-sessions)

The Stripe Dashboard is the most common way to create one-off verifications but you can automate this process if you integrate with the API. Here’s what you’ll do:

1. Create a VerificationSession with Dashboard.
2. Share the verification link with you user.
3. View verification results in Dashboard.

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).
3. (Optional) Customize your brand settings on the [branding settings page](https://dashboard.stripe.com/settings/branding).

## Create a VerificationSession \[Dashboard]

A [VerificationSession](https://docs.stripe.com/api/identity/verification_sessions.md) is the programmatic representation of the verification. It contains details about the type of verification, such as what [check](https://docs.stripe.com/identity/verification-checks.md) to perform and exposes the [verified outputs](https://docs.stripe.com/api/identity/verification_sessions/object.md#identity_verification_session_object-verified_outputs).

To create a VerificationSession in the Stripe Dashboard:

1. Navigate to the [Create a session page](https://dashboard.stripe.com/identity/verification-sessions/create).
2. Select **Document check**.
3. Click **Create**.

## Share the verification link with your user \[Dashboard]

1. Click **Copy verification link**.
2. Share the copied URL with your user.

Verification links expire after 48 hours after creation and are single-use. Only share the link with the user you want to verify. We don’t recommend sending verification links in emails or text messages.

## View verification results \[Dashboard]

[Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are typically completed as soon as the user redirects back to your site and you can retrieve the result from the API immediately. In some rare cases, the document verification isn’t ready yet and must continue asynchronously. In these cases, you’re notified through webhooks when the verification result is ready. After the processing completes, the VerificationSession status changes from `processing` to `verified`.

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

[View your test verifications in the Dashboard](https://dashboard.stripe.com/test/identity/verification-sessions)

## Before you begin

1. [Activate your account](https://dashboard.stripe.com/account/onboarding).
2. Fill out your [Stripe Identity application](https://dashboard.stripe.com/identity/application).
3. (Optional) Customize your brand settings on the [branding settings page](https://dashboard.stripe.com/settings/branding).

## Create a verification flow \[Dashboard]

A [flow](https://docs.stripe.com/identity/verification-flows.md) represents re-usable configuration for verifications that you’ll request of your user.

To create a flow in the Dashboard:

1. Navigate to the [Verification flows](https://dashboard.stripe.com/identity/verification-flows?create=true) page in your Dashboard.
2. Fill out the form with your desired configured and click **Save**. You can customize the flow later as needed.

## Share the static link with your user \[Dashboard]

1. On the flow details page, click the URL to copy it to your clipboard.
2. Share the copied URL with your user.

This URL never expires and is usable to verify any number of users for as long as you keep the flow enabled. You can deactivate a flow on the flow details page. Only share the link with users you want to verify.

## View verification results \[Dashboard]

When your user completes verification, a verification session is created to hold the results and you can see it in your Dashboard. [Document checks](https://docs.stripe.com/identity/verification-checks.md#document-availability) are asynchronous, which means that verification results aren’t immediately available. An identity document check typically takes 1 to 3 minutes to complete. After the processing completes, the verification session’s status changes from `processing` to `verified`.

Use the Dashboard to view all your verifications, inspect collected data, and understand verification failures.

## See also

- [Verification flows](https://docs.stripe.com/identity/verification-flows.md)
