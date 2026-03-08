# Validation

Sanity Studio allows you to specify validation rules on your document types and fields. Field-level validation is the most specific and gives the Studio a better chance to help the user understand where the validation failed and why, whereas the document-level validation provides slightly more control since it can validate based on the values of the entire document.

Each schema type has a set of built-in validation methods. [See the schema type documentation for a detailed list →](https://www.sanity.io/docs/schema-types)

> \[!TIP]
> Protip
> Validation rules run in the Studio as an editor is working in a document. You can also [validate multiple documents in bulk using the CLI](https://www.sanity.io/docs/content-lake/schema-and-content-migrations).

## Basics

Validation is defined by setting the `validation` property on a document type or field. It takes a function which receives a [rule](https://reference.sanity.io/sanity/index/Rule/) as the first argument. By calling methods on this rule, you add new validation modifiers. Here's an example which validates that a string field has a value and that the string is between 10 and 80 characters long:

```typescript
defineField({
  title: 'Title',
  name: 'title',
  type: 'string',
  validation: rule => rule.required().min(10).max(80)
})
```

Without the `required()` call, the title is also considered valid if it does not have a value.

## Error levels and error messages

By default, values that do not pass the validation rules are considered errors - these will block the draft from being published until they have been resolved. You can also set a rule to be a warning, simply by calling `warning()` on the rule. Similarly, you can customize the error message displayed by passing a string to the `warning()` or `error()` method:

```typescript
defineField({
  title: 'Title',
  name: 'title',
  type: 'string',
  validation: rule => rule.max(50).warning('Shorter titles are usually better')
})
```

If you want to combine both warnings and errors in the same validation set, you can use an array:

```typescript
defineField({
  title: 'Title',
  name: 'title',
  type: 'string',
  validation: rule => [
    rule.required().min(10).error('A title of min. 10 characters is required'),
    rule.max(50).warning('Shorter titles are usually better')
  ]
})
```

## Referencing other fields

Sometimes you may want to build a rule that is based on the value of a different field. By calling the `rule.valueOfField` method, you can achieve this.

```javascript
defineField({
  title: 'Start date',
  name: 'startDate',
  type: 'datetime',
  validation: rule => rule.required().min('2022-03-01T15:00:00.000Z')
}),
defineField({
  title: 'End date',
  name: 'endDate',
  type: 'datetime',
  validation: rule => rule.required().min(rule.valueOfField('startDate'))
})
```

Note however that it only allows referencing sibling fields. If you need to refer to things outside of this scope, you will have to use document-level validation.

> \[!WARNING]
> Gotcha
> `rule.valueOfField()` returns the literal value of a field, allowing you to validate that the end date is always equal to or greater than the start date (as in the previous example). However, it cannot be used for inserting a field value into conditional logic and creating a validation based on the result.

## Skipping validation for hidden fields

The validation function receives a `context` parameter as the second argument. This [context provides information](https://reference.sanity.io/sanity/index/ValidationContext/) about the field's current state. The `context.hidden` property indicates whether the field is hidden by a condition on itself or an ancestor.

Use `rule.skip()` to skip validation entirely for a field. This is useful for conditionally hidden fields with required validation:

```typescript
defineField({
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: (rule, context) => (context?.hidden ? rule.skip() : rule.required().min(5)),
})
```

In this example, the validation function receives both the `rule` and `context` parameters. When `context.hidden` is `true`, `rule.skip()` tells the validation system to skip all validation for this field. When the field is visible, the normal validation rules apply.

The `rule.skip()` method ensures the validation system properly understands that no validation should be performed when the field is hidden.

## Custom validation

Sometimes you will need to validate values beyond what Sanity provides. The `custom()` method allows you to do this. It takes a function as the first argument, which should return either `true` (in the case of a valid value) or an error message as a string (in the case of an invalid value). You may also return a promise that resolves with one of those values, should you need to do asynchronous operations:

```javascript
defineField({
  name: 'location',
  type: 'geopoint',
  title: 'Location of bar',
  description: 'Required, must be in Norway',
  validation: rule =>
    rule.required().custom(geoPoint =>
      someGeoService
        .isWithinBounds(
          {
            latitude: geoPoint.lat,
            longitude: geoPoint.lng
          },
          someGeoService.BOUNDS_NORWAY
        )
        .then(isWithinBounds => (isWithinBounds ? true : 'Location must be in Norway, somewhere'))
    )
})

```

Please note that custom validators are also run on undefined values, unless the rule is explicitly set as optional by calling `rule.optional()`. This allows for conditionally allowing undefined values based on some external factor, with the slight drawback that you need to make sure your functions check for undefined values. Here's an example:

```javascript
defineField({
  name: 'breweryName',
  type: 'string',
  title: 'Brewery name',
  validation: rule => rule.custom(name => {
    if (typeof name === 'undefined') {
      return true // Allow undefined values
    }
    
    // This would crash if we didn't check
    // for undefined values first
    return name.startsWith('Brew')
      ? 'Please be more creative'
      : true
  }).warning()
})

```

Should you need to reference other fields from within the custom validator function, you can use the second argument (`context`) to the function:

```javascript
defineField({
  name: 'durationInMinutes',
  type: 'number',
  title: 'Duration of talk, in minutes',
  validation: rule => rule.custom((duration, context) => {
    const isShortTalk = duration && duration <= 10
    if (isShortTalk && context.document.talkType !== 'lightning') {
      return 'Only lightning talks should be 10 minutes or less'
    }
    
    return true
  })
})
```

You can also access the closest `parent` from the context, along with the `path` of the current element being validated.

### Asynchronous validation using the client

If you want to base your rule on another part of your content, you can access the client via the validation context.

```typescript
validation: (Rule) =>
  Rule.custom((value, context) => {
    const client = context.getClient({apiVersion: '2021-03-25'}).withConfiguration({perspective: 'previewDrafts'})
    // rest of your rule
},
```

### Validating children

In certain cases, you may want to validate children of an object or array. In this case you can return an object containing a `message` and a `paths` property. Each path is an array of *path segments* leading to the child you want to flag as being the culprit. Let's say you want to disallow empty blocks/paragraphs in a portable text field:

```typescript
defineField({
  name: 'introduction',
  title: 'Introduction',
  type: 'array',
  of: [{type: 'block'}],
  validation: rule => rule.custom(blocks => {
    const emptyBlocks = (blocks || []).filter(
      block =>
        block._type === 'block' &&
        block.children.every(span =>
          span._type === 'span' &&
          span.text.trim() === ''
        )
    )
    
    const emptyPaths = emptyBlocks.map(
      (block, index) => [{_key: block._key}] || [index]
    )

    return emptyPaths.length === 0
      ? true
      : {
          message: 'Paragraph cannot be empty',
          paths: emptyPaths
        }
  })
})
```

For each of the empty blocks we find, we collect the path to it, which can either be the `_key` property (preferably), or the array index if a key cannot be found.

## Document level validation

Sometimes you want to validate a whole document rather than just specific fields in a document. To do this, you can give a document the `validation` property and access fields inside the document by passing a prop. In this example, the validation ensures that editors can't add a "Guest Author" and an "Author."

```javascript
export default defineType({
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  validation: rule => rule.custom(fields => {
    if (fields.authors.length > 0 && Object.keys(fields.guest).length > 0) return "You can't have an author AND guest author"
    return true
  }),
  fields: [
    // ... 
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference',
        }
      ]
    }),
    defineField({
      name: 'guest',
      title: 'Guest Author',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Guest Author Name'},
        {name: 'site', type: 'string', title: 'Guest Author Site'},
      ],
    }),
  ]
})
```

### Marking nested fields as invalid

Similar to the example in "Validating children" above, you can return an object to specify what field the message should apply to when using document level validation.

```javascript
export default defineType({
    name: 'post',
    type: 'document',
    title: 'Blog Post',
    validation: (rule) =>
        rule.custom((fields) => {
            if (
                fields.authors.length > 0 &&
                Object.keys(fields.guest).length > 0
            )
                return {
                    message: "You can't have an author AND guest author",
                    path: ['guest'], // add keys to array for nested fields, ex ['guest', 'title'] for guest.title
                }
            return true
        }),
    fields: [
        // ...
        defineField({
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    type: 'authorReference',
                },
            ],
        }),
        defineField({
            name: 'guest',
            title: 'Guest Author',
            type: 'object',
            fields: [
                defineField({ name: 'name', type: 'string', title: 'Guest Author Name' }),
                defineField({ name: 'site', type: 'string', title: 'Guest Author Site' }),
            ],
        }),
    ],
})
```

## Validation cascade

When referencing schema types from other types, such as when setting a document's fields to custom types, any "higher level" validation rules will override existing validation rules.

For example, if you have an `articleType` and `authorType` as shown in the example below, any rules applied to the field in `articleType` will override the `authorType` rules.

```
export const authorType = defineType({
  type: 'object',
  name: 'authorType',
  validation: (rule) => rule.custom(...)
})

export const articleType = defineType({
  type: 'document',
  name: 'articleType',
  fields: [
    defineField({
      type: 'authorType',
      validation: (rule) => rule.custom(...) // Overrides the authorType validation
    })
  ]
})
```
