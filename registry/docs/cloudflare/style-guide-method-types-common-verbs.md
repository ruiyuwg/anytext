# Method types & common verbs

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/api-content-strategy/method-types-and-command-verbs.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Method types & common verbs

The verb examples are a small handful of commonly used verbs associated with a method, but you should not feel limited and only use the verbs in the examples.

When writing the endpoint title, use the root form of the verb. For example, “Create a namespace.”

For the endpoint description, use the present tense of the verb. For example, “Creates a namespace under the given title.”

Additionally, using the method type as the verb in the title and description is okay. For example, using the method GET and including it in the description as “Gets embed code” is acceptable.

| Method | Purpose                                 | Verb examples                   |
| ------ | --------------------------------------- | ------------------------------- |
| GET    | Retrieves a resource                    | Gets, Lists, Returns, Downloads |
| POST   | Creates a resource                      | Creates, Watches, Inserts, Adds |
| PUT    | Updates or creates an existing resource | Updates, Modifies, Adds         |
| PATCH  | Partially modifies an existing resource | Updates, Edits, Changes         |
| DELETE | Removes the resource                    | Deletes, Removes, Cancels       |

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/api-content-strategy/","name":"API docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/api-content-strategy/method-types-and-command-verbs/","name":"Method types & common verbs"}}]}
```
