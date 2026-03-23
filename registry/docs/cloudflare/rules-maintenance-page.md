# Maintenance page

[Skip to content](#%5Ftop)

### Tags

[ Redirects ](https://developers.cloudflare.com/search/?tags=Redirects)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/rules/snippets/examples/maintenance.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Maintenance page

Serve a custom maintenance page. Ideal for downtime notifications, planned maintenance, or emergency messages.

## Snippet code

JavaScript

```

// Define your customizable inputs

const statusCode = 503;

const title = "We'll Be Right Back!";

const message =

  "Our site is currently undergoing scheduled maintenance. We’re working hard to bring you a better experience. Thank you for your patience and understanding.";

const estimatedTime = "1 hour";

const contactEmail = "support@example.com";

const contactPhone = "+1 234 567 89";


export default {

  async fetch(request) {

    // Serve the maintenance page as a response

    return new Response(generateMaintenancePage(), {

      status: statusCode,

      headers: {

        "Content-Type": "text/html",

        "Retry-After": "3600", // Suggest retry after 1 hour

      },

    });

  },

};


function generateMaintenancePage() {

  return `

    <!DOCTYPE html>

    <html lang="en">

    <head>

        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>${title}</title>

        <style>

            body {

                margin: 0;

                font-family: Arial, sans-serif;

                display: flex;

                align-items: center;

                justify-content: center;

                height: 100vh;

                background-color: #f4f4f4;

                color: #333;

                text-align: center;

            }

            .container {

                max-width: 600px;

                padding: 20px;

            }

            h1 {

                font-size: 2rem;

                color: #0056b3;

                margin-bottom: 10px;

            }

            p {

                font-size: 1rem;

                margin-bottom: 20px;

                line-height: 1.5;

            }

            .contact {

                margin-top: 20px;

                font-size: 0.9rem;

                color: #666;

            }

            .contact a {

                color: #0056b3;

                text-decoration: none;

            }

            .contact a:hover {

                text-decoration: underline;

            }

            .logo {

                margin: 20px 0;

                max-width: 150px;

            }

            .timer {

                font-weight: bold;

                color: #e63946;

            }

        </style>

    </head>

    <body>

        <div class="container">

            <h1>${title}</h1>

            <p>${message}</p>

            <p>If all goes to plan, we'll be back online in <span class="timer">${estimatedTime}</span>. 🚀</p>

            <p class="contact">

                Need help? Reach out to us at <a href="mailto:${contactEmail}">${contactEmail}</a>

                or call us at <a href="tel:${contactPhone}">${contactPhone}</a>.

            </p>

        </div>

    </body>

    </html>

    `;

}


```

## Snippet rule

Configure a custom filter expression:

| Field             | Operator       | Value      |
| ----------------- | -------------- | ---------- |
| IP Source Address | is not in list | admin\_ips |

If you are using the Expression Editor, enter the following expression:

```

(not ip.src in $admin_ips)


```

The [IP list](https://developers.cloudflare.com/waf/tools/lists/custom-lists/#ip-lists) `admin_ips` was previously created and contains the list of IP addresses of the site administrators, which will be able to access the site during the maintenance period.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/rules/","name":"Rules"}},{"@type":"ListItem","position":3,"item":{"@id":"/rules/snippets/","name":"Cloudflare Snippets"}},{"@type":"ListItem","position":4,"item":{"@id":"/rules/snippets/examples/","name":"Snippets examples"}},{"@type":"ListItem","position":5,"item":{"@id":"/rules/snippets/examples/maintenance/","name":"Maintenance page"}}]}
```
