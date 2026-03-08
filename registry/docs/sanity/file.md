# File

A `file` is a special kind of [object](https://www.sanity.io/docs/object-type) that includes an implicit asset field, which is a reference to a file asset document. This is useful for storing any kind of non-image files (pdf, mpeg, docx etc). See the [FileDefinition](https://reference.sanity.io/sanity/index/FileDefinition/) reference for the full type definition.

> \[!WARNING]
> Gotcha
> You shouldn't use the `file` type for images. Use [image](https://www.sanity.io/docs/image-type) instead. Images uploaded as files will not have the associated metadata for images and you won't be able to scale and crop them in the image pipeline.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Required. Value must be set to file. |
| name \* | Required. The field name. This will be the key in the data record. |
| fields | An array of optional fields to add to the file field. The fields added here follow the same pattern as fields defined on objects. This is useful for allowing users to add custom metadata related to the usage of this file (see example below). |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal value or a resolver function that returns either a literal value or a promise resolving to the initial value. |
| components | Lets you provide custom components to override the studio defaults in various contexts. The components available are field, input, item, preview. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| fieldsets | Groups fields together in the studio interface. Each fieldset has a `name`, `title`, and optional `options` for collapsing behavior. |
| preview | Configures how the document or object is previewed in lists and references. Accepts `select` and `prepare` properties. |
| renderMembers | Custom render function for the document's members (fields and fieldsets). |

## Options ([FileOptions](https://reference.sanity.io/sanity/index/FileOptions/))

#### Properties

| Property | Description |
| --- | --- |
| storeOriginalFilename | This will store the original filename in the asset document. Please be aware that the name of uploaded files could reveal potentially sensitive information (e.g. top\_secret\_planned\_featureX.pdf). Default is true. |
| accept | This specifies which mime types the file input can accept. It functions just like the accept attribute on native DOM file inputs and you can specify any valid file type specifier.

It is recommended to use MIME types ("application/pdf") over file extensions (".pdf") in order for hover notifications to work for drag and drop as browsers do not send the file name while hovering. |
| sources | Lock the asset sources available to this type to a specific subset. Import the plugins by their part name, and use the import variable name as array entries.

Read more about custom asset sources |
| disableNew | If set to `true`, the option to create new assets is disabled. |
| collapsible | If set to `true`, the field can be collapsed. |
| collapsed | If set to `true`, the field will be collapsed by default. |
| columns | Number of columns to use for the field layout. |
| modal | Controls how the modal (dialog for content editing) is rendered. |
| mediaLibrary | If set to `true`, enables the media library for asset selection. |

## Validation ([FileRule](https://reference.sanity.io/sanity/index/FileRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| assetRequired() | Like required but more specific. Requires that an actual asset is referenced to validate. Must be used together with required, i.e.:
validation: (Rule) => Rule.required().assetRequired(), |
| custom(fn) | Creates a custom validation rule. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

Input

```javascript
{
  title: 'Manuscript',
  name: 'manuscript',
  type: 'file',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: {type: 'person'}
    }
  ]
}
```

Response

```json
{
  "_type": "file",
  "asset": {
    "_type": "reference",
    "_ref": "file-5igDD9UuXffIucwZpyVthr0c"
  },
  "description": "First draft",
  "author": {
    "_type": "reference",
    "_ref": "1osKfX-49GLPg-2EeuOe-3ufEFE"
  }
}
```

## Download file

In order to download a file from your front-end you need to append `?dl=<filename-of-your-choice.pdf>` to the file URL. If you leave the filename blank, the original filename will be used if present. If the original filename is not available, the id of the file will be used instead.

```groq
// GROQ query
*[_type == 'movie'] {
  title,
  "manuscriptURL": manuscript.asset->url
}

// Then you can use the URL in HTML for example like this:
// <a href={`${manuscriptURL}?dl=`}>Manuscript</a>
```

## Uploading files via Drag & Drop or Paste

When you drag and drop files into the Portable Text Editor or an Array field in Sanity Studio, it will automatically pick the most suitable field to add the file to based on the `accept` option configured on the file fields. If multiple fields match the dropped file type, it will use the first matching field.

```javascript
// Field with accept option set to PDF
defineField({
  name: 'pdfFile',
  type: 'file',  
  options: {
    accept: 'application/pdf'
  }
})
```

```javascript
// Field with accept option set to Excel
defineField({
  name: 'excelFile',
  type: 'file',
  options: {
    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  }
})
```

When dropping an Excel file, it will be added to the `excelFile` field that accepts Excel files.
