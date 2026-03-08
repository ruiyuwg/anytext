# Conditional fields

Sometimes you want to reduce the cognitive load and the complexity of a content form by controlling the visibility of its fields, or make certain fields read-only under certain conditions. You can make fields in Sanity Studio's form appear and disappear using the `hidden` property, and make them read-only with the `readOnly` property on all field types. This also works on fieldsets. This feature is commonly referred to as “conditional fields”. The `hidden` and `readOnly` properties can take a static `true` or `false` value or a callback function that contains the specific logic you want and returns `true` or `false` accordingly.

## Examples

### Hide based on a value in the current document

Only show the `subtitle` field if the `title` field is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy):

```javascript
{
  name: 'subtitle',
  type: 'string',
  title: 'Subtitle',
  hidden: ({document}) => !document?.title
}
```

### Set "read-only" based on the current user's role

Only show the `productSKU` field as editable if the current user is an administrator; otherwise, show it as read-only:

```javascript
{
  name: 'productSKU',
  type: 'string',
  title: 'SKU',
  readOnly: ({currentUser}) => {
    return !(currentUser.roles.find(({name}) => name === 'administrator'))
  }
}
```

### Hide based on a value in a sibling field

Show or hide a sibling field if it's empty and the current field has a value:

```javascript
{
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'external',
      type: 'url',
      title: 'URL',
      hidden: ({ parent, value }) => !value && parent?.internal
    },
    {
      name: 'internal',
      type: 'reference',
      to: [{ type: 'route' }, { type: 'post' }],
      hidden: ({ parent, value }) => !value && parent?.external
    }
  ]
}
```

### Set "read-only" on an entire field set

```javascript
{
  name: 'product',
  type: 'document',
  title: 'Product',
	fieldsets: [
    {
      name: 'links',
      title: 'Links',
      options: {columns: 2},
      readOnly: ({document}) => document?.title === 'Hello world',
    }
  ],
  fields: [
		 {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'external',
      type: 'url',
      title: 'URL',
			fieldset: 'links'
    },
    {
      name: 'internal',
      type: 'reference',
      to: [{ type: 'route' }, { type: 'post' }],
			fieldset: 'links'
    }
  ]
}
```

> \[!WARNING]
> Gotcha
> You can't return [a promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to the `hidden` or `readOnly` properties. This is because of performance optimizations.

> \[!TIP]
> Editor experience
> Be mindful that Sanity Studio is a real-time collaborative application. That means that someone else can make a condition true that hides the field you're currently working in. You can consider mentioning if a field has a condition in its `description`, or by letting the content team know.

## Reference

### Callback properties

The `hidden` callback function takes an object as an argument with the following properties:

#### Properties

| Property | Description |
| --- | --- |
| document | The current state of the document with all its values. Remember that it can return undefined. You can use optional chaining to avoid errors in the console, for example, document?.title. |
| parent | The values of the field's parent. This is useful when the field is part of an object type. Remember that it can return undefined. You can use optional chaining to avoid errors in the console, for example, parent?.title.

If it's a root field, it will contain the document's values. |
| value | The field's current value. |
| currentUser | The current user with the following fields:

email (string)

id (string)

name (string)

profileImage (string)role (string)

roles (array of objects with name, title, description) |
