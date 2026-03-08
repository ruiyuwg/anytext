# NO\_CORS\_HEADERS

> **🔒 Permissions Required**: Conformance

Misconfiguring CORS ([Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS))
headers can introduce security risks, potentially exposing private and/or
secure information such as API keys and user data.

> **💡 Note:** This rule is not meant to block usage of CORS. Instead, it is designed to flag
> potentially risky configuration for review by the appropriate engineer(s) or
> team(s).

For more information around the risks associated with CORS, including testing
for potential vulnerabilities, see:

- [OWASP: HTML5 Security Cheat Sheet - Cross Origin Resource Sharing](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#cross-origin-resource-sharing)
- [OWASP: Web Security Testing Guide - Testing Cross Origin Resource Sharing](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/11-Client-side_Testing/07-Testing_Cross_Origin_Resource_Sharing)
- [OWASP: CORS OriginHeaderScrutiny](https://owasp.org/www-community/attacks/CORS_OriginHeaderScrutiny)

## Examples

The examples below are common approaches to settings CORS headers in JavaScript
applications. All of these examples will be caught by this rule.

```ts
response.headers.set('Access-Control-Allow-Origin', '*');

const headers = {
  'Access-Control-Allow-Credentials': true,
};

const options = {
  headers: [
    {
      key: 'Access-Control-Max-Age',
      value: 600,
    },
  ],
};

const headers = new Headers();
headers.append('Access-Control-Allow-Methods', '*');
```

Additionally, this rule will catch partial matches, such as a template literal.
In this example, the rule will match the `"Access-Control-"` part of the
template literal.

```ts
const headers = new Headers();
headers.append(`Access-Control-${HEADER_TYPE}`, '*');
```

## How to fix

Engineers should reach out to the appropriate engineer(s) or team(s) for a
security review of the configuration.

When requesting a review, please provide as much information as possible around
the proposed CORS configuration. Where applicable, include information around
alternative approaches, and why this approach is preferable.

As there are many ways to configure CORS headers in applications, this rule
will match any string that looks like a possible CORS header. We've tried to
mitigate the risk of false-positives, but if they occur they will need to be
added to the allowlists.

title: "NO\_DANGEROUS\_HTML"
description: "Prevent the unsafe creation of DOM via HTML methods in your application."
last\_updated: "2026-03-08T05:03:12.777Z"
source: "https://vercel.com/docs/conformance/rules/NO\_DANGEROUS\_HTML"

# NO\_DANGEROUS\_HTML

> **🔒 Permissions Required**: Conformance

Unsafe creation of DOM can be done a variety of ways:

- `element.innerHTML`
- `element.outerHTML`
- `DOMParser.parseFromString()`
- `element.insertAdjacentHTML()`
- `srcdoc` on iframe elements
- `dangerouslySetInnerHTML` prop in React apps

Usage of these methods is deemed an unsafe coding practice as the HTML might result in security vulnerabilities.

## How to fix

It is recommended to instead use alternative approaches for HTML construction - such as `document.createElement()` or a HTML sanitizer.

title: "NO\_DOCUMENT\_WRITE"
description: "Prevent unsafe usage of document.write() in your application."
last\_updated: "2026-03-08T05:03:12.780Z"
source: "https://vercel.com/docs/conformance/rules/NO\_DOCUMENT\_WRITE"

# NO\_DOCUMENT\_WRITE

> **🔒 Permissions Required**: Conformance

Calls to `document.write()` or `document.writeln()` manipulate DOM directly without any sanitization and should be avoided.

Furthermore, these APIs can also cause performance issues and trigger will clear the page contents if used after page load.

## How to fix

Avoid usage of `document.write()` entirely in your application, and instead either use UI framework like React to handle writing to the document,
or use safer DOM APIs, such as `document.createElement()` instead.

title: "NO\_EVAL"
description: "Prevent unsafe usage of eval() in your application."
last\_updated: "2026-03-08T05:03:12.784Z"
source: "https://vercel.com/docs/conformance/rules/NO\_EVAL"

# NO\_EVAL

> **🔒 Permissions Required**: Conformance

JavaScript's `eval()` function is potentially dangerous, is often misused, and
might cause security issues. Using `eval()` on untrusted code can open an
application up to several different injection attacks.

This rule will also catch eval-like function usage (or *implied eval*), such as
passing a string as the first argument to `setTimeout`.

This is especially dangerous when working with data from external sources.

```ts
const dontDoThis = req.body;
setTimeout(dontDoThis, 1000);
```

For more information on why you should never use evaluation, see the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!).

## Example

The lines below (and variations of those) will all be caught by this rule.

```ts
eval('() => console.log("DROP TABLE")');

setTimeout('() => console.log("DROP TABLE")', 1000);

window.setInterval('() => console.log("DROP TABLE")', 1000);

new Function('() => console.log("DROP TABLE")');
```

### References

Conformance rules are not type-aware, but will follow variable references
within the current module (or file).

```ts
import { importedVar } from 'foo';

// No error reported, as this rule doesn't have access to the value.
setTimeout(importedVar, 100);

const localVar = 'bar';

// An error will be reported, as the variable was declared in this file.
setTimeout(localVar, 100);
```

## How to fix

Avoid usage of this type of evaluation entirely in your application. Instead,
you should write the same functionality as raw code (not within a string).

```ts
setTimeout(() => {
  console.log('Safe usage');
});
```

title: "NO\_EXTERNAL\_CSS\_AT\_IMPORTS"
description: "Disallows @import at-rules that import from URLs."
last\_updated: "2026-03-08T05:03:12.790Z"
source: "https://vercel.com/docs/conformance/rules/NO\_EXTERNAL\_CSS\_AT\_IMPORTS"
