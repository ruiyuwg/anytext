# Code conventions and format

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/formatting/code-conventions-and-format.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Code conventions and format

Use the conventions described below throughout Cloudflare product content.

[Learn about code block formatting guidelines](https://developers.cloudflare.com/style-guide/formatting/code-block-guidelines/)

## Angle brackets ( `<` and `>` )

Use angle brackets to denote placeholders for variables you want the user to enter (except in [API URLs and API authentication headers](https://developers.cloudflare.com/style-guide/api-content-strategy/guidelines-for-curl-commands/#request-guidelines), where you should use the `$ZONE_ID` / `$CLOUDFLARE_API_TOKEN` format). Placeholder text should have all capital letters and use underscores (`_`) to separate words.

Examples:

```

{

  "description": "<RULE_DESCRIPTION>"

}


```

```

https://<YOUR_DOMAIN>.cloudflare.com


```

Angle brackets that contain numbers separated by an ellipsis represent a range of values associated with a bit or single name - for example, AO `<0...3>`.

## Square brackets ( `[` and `]` )

Square brackets enclose optional items.

Example:

Specify a subsearch that starts with this search command: `tag=dns query [search tag=malware].`

## Curly braces ( `{` and `}` )

As a general rule, do not use curly braces for URL or variable placeholders. Instead, refer to [angle brackets](#angle-brackets---and--).

Curly braces are acceptable around parameter names when referring to a specific API schema path (for example, `/api/v4/{account_id}`). However, in API examples (`curl` blocks or [APIRequest](https://developers.cloudflare.com/style-guide/components/api-request/) blocks) use shell variables instead (for example, `$ACCOUNT_ID`). The `APIRequest` component handles this automatically for variables in the API operation's URL path. For more information, refer to [Guidelines for cURL commands](https://developers.cloudflare.com/style-guide/api-content-strategy/guidelines-for-curl-commands/).

## >

The > symbol leads you through nested menu items and dialog box options to a final action. The sequence **Options > Settings > General** directs you to pull down the **Options** menu, select the **Settings** item, and select **General** from the last dialog box. Do not use bold formatting for the > symbol.

## Tip icon

This icon denotes a tip, which alerts you to advisory information.

## Note icon

This icon denotes a note, which alerts you to important information.

## Info icon

This icon denotes info, which alerts you to important information.

## Notice icon

This icon denotes a notice, which alerts you to take precautions to avoid data loss, loss of signal integrity, or degradation of performance.

## Caution icon

This icon denotes a caution, which advises you to take precautions to avoid injury.

## Blue text

Text in this color indicates a link.

## **Bold**

Use **bold** when referring to a clickable action or to highlight a title or name in the UI. Bold text denotes items that you must select or click in the software, identifiers in the UI, or parameter names.

Do not use bold for programs.

In nested menus, use bold for the word not the symbol.

Example: **Dashboard** > **This** > **That**

## *Italics*

Use *italics* when referring to an option that customers can select from, like in dropdown menus.

Do not use italics when referring to the state of a toggle - for example, enabled/disabled should not be italicized.

## `Monospace`

`` `text in between backticks` ``

Text in this font denotes text or characters that you should enter from the keyboard, sections of code, programming examples, and syntax examples. This font is also used for the proper names of drives, paths, directories, programs, subprograms, devices, functions, operations, variables, files, API commands, and extensions.

### Examples of elements we monospace

| Element                                                    | Example                                                                                                                                                                               |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IP addresses and ranges                                    | Change your system + DNS servers to use 127.0.1.1.                                                                                                                                    |
| Port numbers                                               | Requests are redirected through the HTTP service (port 80).                                                                                                                           |
| API commands                                               | The endpoint supports GET for JSON format.                                                                                                                                            |
| Terminal commands                                          | Run the command wrangler login.                                                                                                                                                       |
| Attribute names and values                                 | type, name                                                                                                                                                                            |
| Class names                                                | button-primary                                                                                                                                                                        |
| Command-line utility names                                 | wrangler, npm, node, cloudflared                                                                                                                                                      |
| Data types                                                 | (string, number, int64)                                                                                                                                                               |
| Defined (constant) values for an element or attribute      | \<A\_BINDING\_NAME>                                                                                                                                                                    |
| DNS record types                                           | The bot will default to looking for AAAA records. However, you may use regular formatting (for example, AAAA) if there are multiple inline occurrences or if the text is a hyperlink. |
| Enum (enumerator) names (depending on language)            | type ContentTypeMapElem                                                                                                                                                               |
| Environment variable names                                 | \<A\_BINDING\_NAME>                                                                                                                                                                    |
| Element names, including angle brackets (XML and HTML).    | , , ,                                                                                                                                                         |
| Filenames, filename extensions (if used), and paths        | wrangler.toml, wrangler.jsonc                                                                                                                                                         |
| Folders and directories                                    | ~/Downloads/Cloudflare\_CA.crt                                                                                                                                                       |
| HTTP verbs                                                 | POST, GET, HEAD, PUT,DELETE                                                                                                                                                           |
| HTTP status codes                                          | 400, 200, 500However, error ranges using x placeholders should not be monospaced: 5xx, 1xxxx.                                                                                         |
| HTTP content-type values                                   | text/html, application/javascript; charset=utf-8                                                                                                                                      |
| HTTP header names                                          | Content-Length                                                                                                                                                                        |
| URLs that are used as input or output in commands and code | VERSION-dot-SERVICE-dot-PROJECT\_ID.REGION\_ID.r.appspot.com                                                                                                                          |
| IAM role names                                             | roles/storage.admin                                                                                                                                                                   |
| Language keywords                                          | in, await                                                                                                                                                                             |
| Method and function names                                  | handleRequest                                                                                                                                                                         |
| Namespace aliases                                          | numpy                                                                                                                                                                                 |
| Placeholder variables                                      | \<YOUR\_BUILD\_DIR>                                                                                                                                                                    |
| Query parameter names and values                           | /api/v4/{account\_id}                                                                                                                                                                 |
| Text input                                                 | "Hello Worker"                                                                                                                                                                        |

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/formatting/","name":"Formatting"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/formatting/code-conventions-and-format/","name":"Code conventions and format"}}]}
```
