# Analyze your conversion funnel

Analyze your Stripe Checkout conversion funnel with Google Analytics 4.

# Stripe-hosted page

> This is a Stripe-hosted page for when payment-ui is stripe-hosted. View the full page at https://docs.stripe.com/payments/checkout/analyze-conversion-funnel?payment-ui=stripe-hosted.

Use Google Analytics 4 (GA4) to track users as they progress through your Stripe Checkout purchase funnel. Before you begin, set up a [GA4 account](https://support.google.com/analytics/answer/9304153) and add a [GA4 property](https://support.google.com/analytics/answer/9744165?hl=en#zippy=%2Cin-this-article).

## Set up your site

1. Create a product page with a **Checkout** button:

   ```html

     
       Buy cool new product
     
     
       
         window.addEventListener("load", function () {
           document
             .getElementById("submit")
             .addEventListener("click", function (event) {
               event.preventDefault();
               fetch("/create-checkout-session", {
                 method: "POST"
               })
                 .then((response) => response.json())
                 .then((checkoutSession) => {
                   window.location.href = checkoutSession.url;
                 });
             });
         });
       
       
         Checkout
       
     

   ```

2. Create a server-side endpoint that creates a Checkout Session and serves the pages:

   ```javascript
   // This example sets up endpoints using the Express framework.

   const express = require("express");
   require("dotenv").config();

   const app = express();

   // Set your secret key. Remember to switch to your live key in production!
   // See your keys here: https://dashboard.stripe.com/apikeys

   const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

   const request = require("request");

   app.post(
     "/create-checkout-session",
     express.urlencoded({ extended: false }),
     async (req, res) => {
       const session = await stripe.checkout.sessions.create({
         payment_method_types: ["card"],
         line_items: [
           {
             price_data: {
               currency: "usd",
               product_data: {
                 name: "T-shirt"
               },
               unit_amount: 2000
             },
             quantity: 1
           }
         ],
         mode: "payment",
         success_url: req.get("origin") + "/success",
       });

       res.json({ url: session.url });
     }
   );

   app.get("/product", function (req, res) {
     res.sendFile(__dirname + "/product.html");
   });

   app.get("/success", function (req, res) {
     res.sendFile(__dirname + "/success.html");
   });

   app.get("/cancel", function (req, res) {
     res.sendFile(__dirname + "/cancel.html");
   });

   app.listen(4242, () => console.log(`Listening on port ${4242}!`));
   ```

3. Create a success page:

   ```html

     
       Thanks for your order!
     
     
       Thanks for your order!
       
         We appreciate your business! If you have any questions, please email
         orders@example.com.
       
     

   ```

4. Create a canceled page:

   ```html

     
       Order Canceled!
     
     
       
         Start another order.
       
     

   ```

## Instrumentation walkthrough

In the following example, we assume your customer has:

- Viewed your product page.
- Clicked the **Buy** button and was redirected to Stripe Checkout.
- Completed the payment and was redirected to the success page.

### Quick summary

| Method                            | Viewed product                                                                                                                               | Clicked **Buy** button                                                                                                                                         | Completed purchase                                                                                                                                                                                                  |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client-side                       | [Add Google Analytics tag](https://docs.stripe.com/payments/checkout/analyze-conversion-funnel.md#record-pageview-metrics) to `product` page | [Record event before redirecting to Stripe Checkout](https://docs.stripe.com/payments/checkout/analyze-conversion-funnel.md#client-side-event-before-redirect) | [Add Google Analytics tag](https://docs.stripe.com/payments/checkout/analyze-conversion-funnel.md#record-pageview-metrics) to `success` page                                                                        |
| Server-side                       | NA                                                                                                                                           | [Record event before redirecting to Stripe Checkout](https://docs.stripe.com/payments/checkout/analyze-conversion-funnel.md#server-side-redirect)              | [Record event when you receive the `checkout.session.completed` webhook](https://docs.stripe.com/payments/checkout/analyze-conversion-funnel.md#server-side-event-recording)                                        |
| Server-side with stored client ID | NA                                                                                                                                           | NA                                                                                                                                                             | Record event when you receive the `checkout.session.completed` webhook, and [link to client side events](https://docs.stripe.com/payments/checkout/analyze-conversion-funnel.md#link-client-and-server-side-events) |

### Add instrumentation

1. Add `checkout.stripe.com` to your referral exclusion list.

2. Add Google Analytics tags to your product, success, and canceled pages. Tags automatically fire an event on page load.

   ```html

     
       <script
         async
         src="https://www.googletagmanager.com/gtag/js?id=<GOOGLE_ANALYTICS_CLIENT_ID>"
       >
       
         window.dataLayer = window.dataLayer || [];
         function gtag() {
           window.dataLayer.push(arguments);
         }
         gtag("js", new Date());
         gtag("config", "<GOOGLE_ANALYTICS_CLIENT_ID>");
       
       
       Buy cool new product
     
     
       
         window.addEventListener("load", function () {
           document
             .getElementById("submit")
             .addEventListener("click", function (event) {
               event.preventDefault();
               fetch("/create-checkout-session", {
                 method: "POST"
               })
                 .then((response) => response.json())
                 .then((checkoutSession) => {
                   window.location.href = checkoutSession.url;
                 });
             });
         });
       
       
         Checkout
       
     

   ```

   ```html

     
       <script
         async
         src="https://www.googletagmanager.com/gtag/js?id=<GOOGLE_ANALYTICS_CLIENT_ID>"
       >
       
         window.dataLayer = window.dataLayer || [];
         function gtag() {
           window.dataLayer.push(arguments);
         }
         gtag("js", new Date());
         gtag("config", "<GOOGLE_ANALYTICS_CLIENT_ID>");
       
       
       Thanks for your order!
     
     
       Thanks for your order!
       
         We appreciate your business! If you have any questions, please email
         orders@example.com.
       
     

   ```

   ```html

     
       <script
         async
         src="https://www.googletagmanager.com/gtag/js?id=<GOOGLE_ANALYTICS_CLIENT_ID>"
       >
       
         window.dataLayer = window.dataLayer || [];
         function gtag() {
           window.dataLayer.push(arguments);
         }
         gtag("js", new Date());
         gtag("config", "<GOOGLE_ANALYTICS_CLIENT_ID>");
       
       
       Order Canceled!
     
     
       
         Start another order.
       
     

   ```

3. Fire an event just before redirecting to Stripe Checkout:

   ```html

     
       
       <script
         async
         src="https://www.googletagmanager.com/gtag/js?id=<GOOGLE_ANALYTICS_CLIENT_ID>"
       >
       
         window.dataLayer = window.dataLayer || [];
         function gtag() {
           window.dataLayer.push(arguments);
         }
         gtag("js", new Date());
         gtag("config", "<GOOGLE_ANALYTICS_CLIENT_ID>");
       
       
       Buy cool new product
     
     
       
         window.addEventListener("load", function () {
           document
             .getElementById("submit")
             .addEventListener("click", function (event) {
               event.preventDefault();
               fetch("/create-checkout-session", {
                 method: "POST"
               })
                 .then((response) => response.json())
                 .then((checkoutSession) => {gtag("event", "begin_checkout", {
                     event_callback: function () {
                       window.location.href = checkoutSession.url;
                     }
                   });
                 });
             });
         });
       
       
         Checkout
       
     

   ```

### Analyze your conversion funnel metrics

After you add the proper instrumentation, you can see the metrics corresponding to each step defined in your conversion funnel:

- **product page views:** The number of page visitors who viewed the product page.
- **begin\_checkout event count:** The number of page visitors who clicked the **Buy** button and were redirected to Stripe Checkout.
- **success page views:** The number of page visitors who completed the purchase and were redirected to the success page.

Using these numbers, you can see where visitors are dropping off in your conversion funnel.

## Optional: Server-side event recording

In this example, to track the completion of a purchase, we consider the scenario where your user reaches the success page. While this is generally suitable for most use cases, it might not offer a comprehensive solution for some, such as:

- Checkout flows without a designated success page.
- Instances where it’s important to log the purchase completion metric, even when the redirection to the success page fails.
- Situations in which customers frequently refresh a success URL due to it containing useful information (for example, shipping progress or a confirmation number).

> #### Event handler
>
> To record the purchase completion metric without a success page, [set up an event handler](https://docs.stripe.com/checkout/fulfillment.md) and record a metric whenever you get the `checkout.session.completed` event.

After you add the highlighted following code, you can use the `purchase` metric to analyze the number of visitors that completed a purchase, instead of the number of success page views:

```javascript
 // This example sets up endpoints using the Express framework.

 const express = require("express");
 require("dotenv").config();

 const app = express();

 // Set your secret key. Remember to switch to your live secret key in production!
 // See your keys here: https://dashboard.stripe.com/apikeys
 const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

 const request = require("request");

 app.post(
   "/create-checkout-session",
   express.urlencoded({ extended: false }),
   async (req, res) => {
     const session = await stripe.checkout.sessions.create({
       payment_method_types: ["card"],
       line_items: [
         {
           price_data: {
             currency: "usd",
             product_data: {
               name: "T-shirt"
             },
             unit_amount: 2000
           },
           quantity: 1
         }
       ],
       mode: "payment",
       success_url: req.get("origin") + "/success",
     });

     res.json({ url: session.url });
   }
 );

 app.get("/product", function (req, res) {
   res.sendFile(__dirname + "/product.html");
 });

 app.get("/success", function (req, res) {
   res.sendFile(__dirname + "/success.html");
 });

 app.get("/cancel", function (req, res) {
   res.sendFile(__dirname + "/cancel.html");
 });
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
   const payload = req.body;
   const sig = req.headers["stripe-signature"];

   let event;

   try {
     event = stripe.webhooks.constructEvent(
       payload,
       sig,
       process.env.STRIPE_WEBHOOK_SECRET
     );
   } catch (err) {
     return res.status(400).send(`Webhook Error: ${err.message}`);
   }

   if (event.type === "checkout.session.completed") {
     // Record metrics using the Google Analytics Measurement Protocol
     // See https://developers.google.com/analytics/devguides/collection/protocol/ga4
     const MEASUREMENT_ID = <GOOGLE_ANALYTICS_MEASUREMENT_ID>; // GA4 Measurement ID
     const API_SECRET = <GOOGLE_ANALYTICS_API_SECRET>; // GA4 Measurement Protocol API secret

     fetch("https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}", {
       method: "POST",
       body: JSON.stringify({
         client_id: 'XXXXXXXXXX.YYYYYYYYYY', // Client ID
         events: [{
           name: "purchase",
           params: {}
         }]
       })
     });
   }

   res.status(200);
 });
 app.listen(4242, () => console.log(`Listening on port ${4242}!`));
```

## Optional: Linking client and server-side events

In [Server-side event recording](https://docs.stripe.com/payments/checkout/analyze-conversion-funnel.md#server-side-event-recording), you recorded the server-side metrics against an anonymous client ID. That ID is different from the one associated with the page view metrics, so Google Analytics has no way to link the page view and purchase metrics. To maintain a link between the client-side and server side metrics:

1. Choose an ID unique to the visitor (for example, the Google Analytics client ID) and send it to the server:

   ```html

     
       
       <script
         async
         src="https://www.googletagmanager.com/gtag/js?id=<GOOGLE_ANALYTICS_CLIENT_ID>"
       >
       
         window.dataLayer = window.dataLayer || [];
         function gtag() {
           window.dataLayer.push(arguments);
         }
         gtag("js", new Date());
         gtag("config", "<GOOGLE_ANALYTICS_CLIENT_ID>");
       
       
       Buy cool new product
     
     
       
         window.addEventListener("load", function () {
           document
             .getElementById("submit")
             .addEventListener("click", function (event) {
               event.preventDefault();// Get the analytics client id (https://developers.google.com/tag-platform/gtagjs/reference)
               // and send it to the server so it can be linked with the checkout session
               gtag("get", "<GOOGLE_ANALYTICS_CLIENT_ID>", "client_id", (clientID) => {
                 fetch("/create-checkout-session", {
                   method: "POST",
                   body: new URLSearchParams({ analyticsClientId: clientID })
                 })
                   .then((response) => response.json())
                   .then((checkoutSession) => {
                     gtag("event", "begin_checkout", {
                       event_callback: function () {
                         gtag("event", "begin_checkout", {
                           event_callback: function () {
                             window.location.href = checkoutSession.url;
                           }
                         });
                       }
                     });
                   });
               });
             });
         });
       
       
         Checkout
       
     

   ```

2. Read the ID from the request.

3. Store the ID in the Checkout Session’s metadata.

4. Retrieve the ID and send it with the request to record the event.

   ```javascript
   // This example sets up endpoints using the Express framework.

   const express = require("express");
   require("dotenv").config();

   const app = express();

   // Set your secret key. Remember to switch to your live secret key in production!
   // See your keys here: https://dashboard.stripe.com/apikeys
   const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

   const request = require("request");

   app.post(
     "/create-checkout-session",
     express.urlencoded({ extended: false }),
     async (req, res) => {
       const session = await stripe.checkout.sessions.create({
         payment_method_types: ["card"],
         line_items: [
           {
             price_data: {
               currency: "usd",
               product_data: {
                 name: "T-shirt"
               },
               unit_amount: 2000
             },
             quantity: 1
           }
         ],
         mode: "payment",
         success_url: req.get("origin") + "/success",metadata: {
           analyticsClientId: req.body.analyticsClientId
         },
       });

       res.json({ url: session.url });
     }
   );

   app.get("/product", function (req, res) {
     res.sendFile(__dirname + "/product.html");
   });

   app.get("/success", function (req, res) {
     res.sendFile(__dirname + "/success.html");
   });

   app.get("/cancel", function (req, res) {
     res.sendFile(__dirname + "/cancel.html");
   });

   app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
     const payload = req.body;
     const sig = req.headers["stripe-signature"];

     let event;

     try {
       event = stripe.webhooks.constructEvent(
         payload,
         sig,
         process.env.STRIPE_WEBHOOK_SECRET
       );
     } catch (err) {
       return res.status(400).send(`Webhook Error: ${err.message}`);
     }

     if (event.type === "checkout.session.completed") {
       // Record metrics using the Google Analytics Measurement Protocol
       // See https://developers.google.com/analytics/devguides/collection/protocol/ga4
       const params = new URLSearchParams({
         v: "1", // Version
         tid: <GOOGLE_ANALYTICS_CLIENT_ID>, // Tracking ID / Property ID.cid: event.data.object.metadata.analyticsClientId, // Client ID
         t: "event", // Event hit type
         ec: "ecommerce", // Event Category
         ea: "purchase", // Event Action
       });

       request(`https://www.google-analytics.com/batch?${params.toString()}`, {
         method: "POST"
       });
     }

     res.status(200);
   });

   app.listen(4242, () => console.log(`Listening on port ${4242}!`));
   ```

## Optional: Server-side redirects

In this example, we assume that redirects to Stripe happen on the client. If you need to redirect to Stripe from your server, record the `'begin_checkout'` metric on the server, just before redirecting to Stripe Checkout:

```javascript
 // This example sets up endpoints using the Express framework.

 const express = require("express");
 require("dotenv").config();

  const app = express();

 // Set your secret key. Remember to switch to your live secret key in production!
 // See your keys here: https://dashboard.stripe.com/apikeys
 const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');

 const request = require("request");

 app.post(
   "/create-checkout-session",
   express.urlencoded({ extended: false }),
   async (req, res) => {
     const session = await stripe.checkout.sessions.create({
       payment_method_types: ["card"],
       line_items: [
         {
           price_data: {
             currency: "usd",
             product_data: {
               name: "T-shirt"
             },
             unit_amount: 2000
           },
           quantity: 1
         }
       ],
       mode: "payment",
       success_url: req.get("origin") + "/success",
     });
// Record metrics using the Google Analytics Measurement Protocol
     // See https://developers.google.com/analytics/devguides/collection/protocol/ga4
     const MEASUREMENT_ID = <GOOGLE_ANALYTICS_MEASUREMENT_ID>; // GA4 Measurement ID
     const API_SECRET = <GOOGLE_ANALYTICS_API_SECRET>; // GA4 Measurement Protocol API secret

     fetch("https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}", {
       method: "POST",
       body: JSON.stringify({
         client_id: 'XXXXXXXXXX.YYYYYYYYYY', // Client ID
         events: [{
           name: "begin_checkout",
           params: {}
         }]
       })
     });

     res.redirect(303, session.url);
   }
 );

 app.get("/product", function (req, res) {
   res.sendFile(__dirname + "/product.html");
 });

 app.get("/success", function (req, res) {
   res.sendFile(__dirname + "/success.html");
 });

 app.get("/cancel", function (req, res) {
   res.sendFile(__dirname + "/cancel.html");
 });

 app.listen(4242, () => console.log(`Listening on port ${4242}!`));
```

```html
 <html>
   <head>
     <!-- START GOOGLE ANALYTICS -->
     <script
       async
       src="https://www.googletagmanager.com/gtag/js?id=<GOOGLE_ANALYTICS_CLIENT_ID>"
     ></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag() {
         window.dataLayer.push(arguments);
       }
       gtag("js", new Date());
       gtag("config", "<GOOGLE_ANALYTICS_CLIENT_ID>");
     </script>
     <!-- END GOOGLE ANALYTICS -->
     <title>Buy cool new product</title>
   </head>
   <body><form action="/create-checkout-session" method="POST">
       <button type="submit">Checkout</button>
     </form>
   </body>
 </html>
```

# Embedded form

> This is a Embedded form for when payment-ui is embedded-form. View the full page at https://docs.stripe.com/payments/checkout/analyze-conversion-funnel?payment-ui=embedded-form.

Embedded Checkout supports tracking conversions and checkout behavior with real-time analytics events. See [Track analytics events in Embedded Checkout](https://docs.stripe.com/payments/checkout/embedded-analytics.md).
