# Respond with another site

[Skip to content](#%5Ftop)

### Tags

[ Middleware ](https://developers.cloudflare.com/search/?tags=Middleware)[ JavaScript ](https://developers.cloudflare.com/search/?tags=JavaScript)[ TypeScript ](https://developers.cloudflare.com/search/?tags=TypeScript)[ Python ](https://developers.cloudflare.com/search/?tags=Python)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/examples/respond-with-another-site.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Respond with another site

**Last reviewed:**  over 5 years ago

Respond to the Worker request with the response from another website (example.com in this example).

If you want to get started quickly, click on the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/docs-examples/tree/main/workers/respond-with-another-site)

This creates a repository in your GitHub account and deploys the application to Cloudflare Workers.

- [  JavaScript ](#tab-panel-7948)
- [  TypeScript ](#tab-panel-7949)
- [  Python ](#tab-panel-7950)

JavaScript

```

export default {

  async fetch(request) {

    function MethodNotAllowed(request) {

      return new Response(`Method ${request.method} not allowed.`, {

        status: 405,

        headers: {

          Allow: "GET",

        },

      });

    }

    // Only GET requests work with this proxy.

    if (request.method !== "GET") return MethodNotAllowed(request);

    return fetch(`https://example.com`);

  },

};


```

[Run Worker in Playground](https://workers.cloudflare.com/playground#LYVwNgLglgDghgJwgegGYHsHALQBM4RwDcABAEbogB2+CAngLzbPYZb6HbW5QDGU2AAwAWAGyCATBMGCAjKNmCAXCxZtgHOFxp8BI8VJnzFAWABQAYXRUIAUxvYAIlADOMdC6jRrSkurwExCRUcMC2DABEUDS2AB4AdABWLhGkqFBg9qHhUTEJyRHmVjb2ENgAKnQwtr5wMDBgfARQ1siJcABucC68CLAQANTA6Ljgtubmce5IJLi2qHDgECQA3mYkJN10VLx+thC8ABYAFAi2AI4gti4QAJSr6xt+1LzeVCQAsvuHIwBy6BAAIJgMDoADutlwpwuVxu9zWTyeZwgIAQ7yotjBJAAStd3FQXLZjgADL4QH64EgAEhWZ0u1wg8TC5JGAF9ggDNiDwZD4sSADQPRGIm4EEAuXzCQQAVn5j2FJEOtjgcwQEqFCqewNBYN8EQA4gBRcoROWakiss3C1m3Ijyi325DIEgAeSoYDoJCN5RIdNhEBcJDBmAA1kGvIcSOTXCQYAh0LE6PF7VBUCRofSbkzviMSABCBgMEgG40Re7I1HvMkU-5A7kQqF+hm2+0VtF7A4nYmHCAQGASp1xUINWzxXjoYDElsbS1mVlEcyqZjqTTaHj8IRiSTSOQKQRFax2BzONweLwtKi+fyaUghMKRZkqwKpPwZLL3iJkUFkQqWQ+lCoqhqTZ6kaXhmlaZJrAmMwVgiYA4GiAB9YZRkyCIlFyOZ8hSVlFyXFdAjXXRNwMHdjEEZhzCAA)

TypeScript

```

export default {

  async fetch(request): Promise<Response> {

    function MethodNotAllowed(request) {

      return new Response(`Method ${request.method} not allowed.`, {

        status: 405,

        headers: {

          Allow: "GET",

        },

      });

    }

    // Only GET requests work with this proxy.

    if (request.method !== "GET") return MethodNotAllowed(request);

    return fetch(`https://example.com`);

  },

} satisfies ExportedHandler;


```

Python

```

from workers import WorkerEntrypoint, Response, fetch


class Default(WorkerEntrypoint):

    def fetch(self, request):

        def method_not_allowed(request):

            msg = f'Method {request.method} not allowed.'

            headers = {"Allow": "GET"}

            return Response(msg, headers=headers, status=405)


        # Only GET requests work with this proxy.

        if request.method != "GET":

            return method_not_allowed(request)


        return fetch("https://example.com")


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/examples/","name":"Examples"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/examples/respond-with-another-site/","name":"Respond with another site"}}]}
```
