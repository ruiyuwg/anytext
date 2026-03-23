# Code block guidelines

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/formatting/code-block-guidelines.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Code block guidelines

To create a code block:

- Use triple-grave characters (` ``` `) as a fence, and enter a [language](#languages) name after the first ` ``` ` fence
- Indent lines by four spaces or one tab

[Learn about conventions for code blocks](https://developers.cloudflare.com/style-guide/formatting/code-conventions-and-format/)

[Learn about code block special formatting and functionality](#add-special-formatting)

Here is an example of a JSON code block:

````

```json

{

  "firstName": "John",

  "lastName": "Smith",

  "age": 25

}

````

```

The rendered output looks like this:

```

{

"firstName": "John",

"lastName": "Smith",

"age": 25

}

```

### Add output

To add the output of your code block, create a second code block below the first and add the `output` property to the opening code fence, like this:

Terminal window

```

npx wrangler vectorize create tutorial-index --dimensions=3 --metric=cosine

```
```

✅ Successfully created index 'tutorial-index'

\[\[vectorize]]

binding = "VECTORIZE\_INDEX" # available in your Worker on env.VECTORIZE\_INDEX

index\_name = "tutorial-index"

```
```

```sh

npx wrangler vectorize create tutorial-index --dimensions=3 --metric=cosine

```

```txt output

✅ Successfully created index 'tutorial-index'


[[vectorize]]

binding = "VECTORIZE_INDEX" # available in your Worker on env.VECTORIZE_INDEX

index_name = "tutorial-index"

```

`````

## Languages

To define the language of your code block, enter the name of the language after the first ```` ``` ```` fence.

If there is no appropriate syntax language, use `txt` (for example, a fragment of an Apache configuration file).

Make sure you enter the language name in lower case, since other capitalizations of these names are not supported. For example, entering `JavaScript` would use the `txt` language as a fallback.

Here is a list of supported languages:

* `bash` (alias: `curl`) [Learn more about terminal commands](#terminal-commands)
* `c`
* `dart`
* `diff`
* `go`
* `graphql`
* `hcl` (alias: `tf`)
* `html`
* `ini`
* `java`
* `js` (alias: `javascript`)
* `json` [Learn more about JSON code blocks](#json)
* `kotlin`
* `php`
* `powershell` [Learn more about terminal commands](#terminal-commands)
* `python` (alias: `py`)
* `ruby` (alias: `rb`)
* `rust` (alias: `rs`)
* `sh` (alias: `shell`) [Learn more about terminal commands](#terminal-commands)
* `sql`
* `swift`
* `toml`
* `ts` (alias: `typescript`)
* `txt` (aliases: `text`, `plaintext`, no language name)
* `xml`
* `yaml` (alias: `yml`)

### Terminal commands

* Use the `sh` or `bash` language for commands executed in the Linux/macOS terminal, including:  
   * One-line commands  
   * Commands that span multiple lines (usually each line ends with a `\`)  
   * Commands for specific shells (for example, a command specifically for the `zsh` shell)
* Use the `powershell` language for Windows PowerShell commands. When rendered, these blocks will have a `PowerShell` title.
* Use the `txt` language for Windows console commands.

The **Copy to clipboard** button, available in the top-right corner of each code block, will copy the entire content of the code block, including any command output included in the block.

Do not include a prefix (`$`, `%`, `PS>`, `C:\>`, or similar) before a command so that the user can run the command immediately after copying and pasting without having to remove the prefix. Similarly, do not write the folder where the command is being executed unless it is an essential part of the explanation.

### JSON

Use `json` for JSON code blocks or JSON fragments.

Multi-line curl commands with a JSON body should use the `sh` or `bash` syntax highlighting, as stated in [Terminal commands](#terminal-commands).

Note

JSON fragments may appear with a red background in GitHub because they are not valid JSON. Make it clear in the documentation that it is a fragment and not an entire piece of valid JSON content.

## Add special formatting

You can add special formatting to code blocks, such as collapsed sections, line numbers, and highlighting. Here is a showcase of some of the functionality. You can find more options at [Expressive Code ↗](https://expressive-code.com/), a project by Astro.

Write string example

`````

Write-Output "This one has a title"

```

JavaScript

```

// Collapsing

const foo = {

3 collapsed lines

1: 1,

2: 2,

3: 3,

};

```

JavaScript

```

1

// Line numbers

2

const foo = "bar";

3

const bar = "baz";

```

JavaScript

```

// Example with wrap

function getLongString() {

return "This is a very long string that will most probably not fit into the available space unless the container is extremely wide";

}

```

JavaScript

```

function demo() {

console.log("These are inserted and deleted marker types");

// The return statement uses the default marker type

return true;

}

```

JavaScript

```

function thisIsJavaScript() {

// This entire block gets highlighted as JavaScript,

// and we can still add diff markers to it!

console.log('Old code to be removed')

console.log('New and shiny code!')

}

```
```

```powershell title="Write string example"

Write-Output "This one has a title"

```

```js collapse={3-5}

// Collapsing

const foo = {

  1: 1,

  2: 2,

  3: 3,

};

```

```js showLineNumbers

// Line numbers

const foo = "bar";

const bar = "baz";

```

```js wrap

// Example with wrap

function getLongString() {

  return "This is a very long string that will most probably not fit into the available space unless the container is extremely wide";

}

```

```js "return true;" ins="inserted" del="deleted"

function demo() {

  console.log("These are inserted and deleted marker types");

  // The return statement uses the default marker type

  return true;

}

```

```diff lang="js"

  function thisIsJavaScript() {

    // This entire block gets highlighted as JavaScript,

    // and we can still add diff markers to it!

-   console.log('Old code to be removed')

+   console.log('New and shiny code!')

  }

```

```

Warning

Do not use the `$` sign in your code blocks before a command.

## Workers Playground

If you add the `playground` option to the opening code fence for a Worker example, it will add a "Run Worker in Playground" link that will take the user to the [Worker's playground](https://developers.cloudflare.com/workers/playground/).

### Live demo

JavaScript

```

export default {

fetch() {

```
return new Response("Test!");
```

},

};

```

[Run Worker in Playground](https://workers.cloudflare.com/playground#LYVwNgLglgDghgJwgegGYHsHALQBM4RwDcABAEbogB2+CAngLzbPYZb6HbW5QDGU2AAwBGACwBWAOwBOSZIDMANlHCAXCxZtgHOFxp8BIiTLlKVAWABQAYXRUIAU3vYAIlADOMdO6jQ7qki08AmISKjhgBwYAIigaBwAPADoAK3do0lQoMCcIqNj45LToq1t7JwhsABU6GAcAuBgYMD4CKDtkFLgANzh3XgRYCABqYHRccAcrK0SvJBJcB1Q4cAgSAG9LEkCHCF4ACwAKAEoNre2SBF2QBCowhwB3EgAlB087dwdD6Kq3iABCaLHIjnAC+ABpLKCiFYNMwtDo9Dx+EIxFJZAplMJSnZHM43O8fH4qAEgjpSOFIjFIoQdBlAtlclTomQwOgyCUbLiKtVavUSI1mq1iZ13HZppZ1tFgHA4gB9MYTHLRVQFRZFdKg2FwhEhJEGVHGDFmYTMKxAA)

### How to use

```

```js playground

export default {

  fetch() {

    return new Response("Test!");

  },

};

```

```

[Run Worker in Playground](https://workers.cloudflare.com/playground#LYVwNgLglgDghgJwgegGYHsHALQBM4RwDcABAEbogB2+CAngLzbPYZb6HbW5QDGU2AAwBGAByCAbBPEB2UQGYJALhYs2wDnC40+AkeKmyFEgLAAoAMLoqEAKY3sAESgBnGOhdRo1pSXV4CYhIqOGBbBgAiKBpbAA8AOgArFwjSVCgwe1DwqJiE5IjzKxt7CGwAFToYW184GBgwPgIoa2REuAA3OBdeBFgIAGpgdFxwW3NzAANp5JIGuDoAcwRKGjM49yQSXFtUOHAIEgBvMxI-WwheAAsACgBKY9OzkgQLkAQqYNsAdxIAJVsbmsLlsNwi5UBEAAhBE7kQngBfAA0ZgR8Omk3MqmY6k02h4-CEYkk0kEckURWsdgcziBnm8VF8-k0pBCYUiYUImlSfgyWXZETIYHQZEKlippQqVRqJDqDSaDLaLmsEzMRwiwDg0QA+sNRpkIkpcjt8ikEVjsbjAvjdESDKTyRJmOYgA)

## GraphQL API Explorer

Add `graphql-api-explorer` to the opening code fence to create a `graphql` code block with a **Run in GraphQL API Explorer** button that leads to [GraphQL API Explorer ↗](https://graphql.cloudflare.com/explorer).

Note

This button only works if the person selecting it is logged in or has an API token saved.

A GraphQL query

```

query ASingleDatasetExample($zoneTag: string, $start: Time, $end: Time) {

viewer {

```
zones(filter: { zoneTag: $zoneTag }) {

  firewallEventsAdaptive(

    filter: { datetime_gt: $start, datetime_lt: $end }

    limit: 2

    orderBy: [datetime_DESC]

  ) {

    action

    datetime

    host: clientRequestHTTPHost

  }

}
```

}

}

```

[Run in GraphQL API Explorer](https://graphql.cloudflare.com/explorer?query=I4VwpgTgngBAggZQJYDsDmAbMARAhgF1wGcx8BRAD1wFsAHLACgBIAvAexTABVc0AuGEXwRUaADQwmQ3BHwCuSamAlMwKACbzFYAJQwA3gCgYMAG5IwAd0gHjJmO05EGAMyQZ8kAfocduvAVY-HjQYAF89I3t7NwgrXAwMMlM1fCI4dVxafCQUhjtokzcPLwMYTM8cpQB9NDlJaVkJCtJtao9AtXVwgsKMRSR6gCZe6LYIdUgAISgBAG0WqrBq7DIEAGEAXVGYSJ2TXABjHI598oJWpTOACzYhAUP+1IAlMFAwIQAJLi4ABU+7vgdmFeiCTCCwkA&variables=N4IgXg9gdgpgKgQwOYgFwgFoHkByBRAfQEkAREAGhAGcAXBAJxrRACYAGFgNgFo2BmbixZwWfVAEYArKhYB2DBRAwoAE2bsuvAaLhtpUmfJABfIA)

```

```graphql graphql-api-explorer title="A GraphQL query"

query ASingleDatasetExample($zoneTag: string, $start: Time, $end: Time) {

  viewer {

    zones(filter: { zoneTag: $zoneTag }) {

      firewallEventsAdaptive(

        filter: { datetime_gt: $start, datetime_lt: $end }

        limit: 2

        orderBy: [datetime_DESC]

      ) {

        action

        datetime

        host: clientRequestHTTPHost

      }

    }

  }

}

```

```

### Variables

In the GraphQL API Explorer, the **Variables** section is automatically filled based on the names and types of the variables defined in your query:

* Variables that include `start` and are of type `Time` are set to six hours before the current time
* Variables that include `end` and are of type `Time` are set to the current time
* Variables that include `start` and are of type `Date` are set to 24 hours before the current date
* Variables that include `end` and are of type `Date` are set to the current date
* Variables that include `zoneTag` and are of type `string` are set to "ZONE\_ID"
* Variables that include `accountTag` and are of type `string` are set to "ACCOUNT\_ID"
* Variables that include `id` and are of type `string` are set to "REPLACE\_WITH\_ID"
* Variables that include `limit` and are of type `int` are set to 100
* Any other variable with a type of `string` is set to "REPLACE\_WITH\_STRING"

You can also add custom variables by setting their values as a JSON string in the `graphql-api-explorer` metadata. The custom variables will be merged with the automatically populated variables.

In the following example, the custom value is `custom-variable`:

```

```graphql graphql-api-explorer='{"uID": "custom-variable"}' title="A GraphQL query"

query GraphqlExample($zoneTag: string, $start: Time, $end: Time) {

 viewer {

   zones(filter: { zoneTag: $zoneTag }) {

     ...

   }

 }

}

```

```

So, the **Variables** would look something like this:

```

{"zoneTag":"ZONE\_ID", "start":"2025-09-11T14:00:00Z", "end":"2025-09-11T20:00:00Z", "uId":"custom-variable"}

````

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/formatting/","name":"Formatting"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/formatting/code-block-guidelines/","name":"Code block guidelines"}}]}
````
