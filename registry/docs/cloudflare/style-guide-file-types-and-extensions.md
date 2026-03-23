# File types and extensions

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/formatting/file-types-and-extensions.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# File types and extensions

You can refer both to file types and file extensions in documentation:

- File types: Accepted file formats are JSON and YAML.
- File extensions: Upload the `.txt` file to the dashboard.

When referring to a specific file type, always use regular text formatting, write the file type in uppercase, and avoid the initial dot (you are referring to the file type, not the file extension).

When referring to a specific extension, always monospace the file, include a dot, write the extension in lowercase, and always specify a noun after mentioning a file extension (for example: "file" or "file extension"). Do not leave the extension hanging.

Additional examples:

- The accepted file formats are YAML (files with a `.yml` or `.yaml` file extension) and JSON (files with a `.json` file extension).
- Additionally, this plist can be wrapped in a `.mobileconfig` file.
- If you would like to test how this feature works, here is a sample `.csv` file.
- Concatenate the string to a text-based `.pem` file.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/formatting/","name":"Formatting"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/formatting/file-types-and-extensions/","name":"File types and extensions"}}]}
```
