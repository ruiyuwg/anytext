# Field Groups

When editing documents in the Studio, it can sometimes be helpful to show certain fields together to provide context and alleviate visual input overload. Document and object types accept a `groups` property that you use to define the groups you want and you can assign fields to appear in the groups you have defined using the `group` property on a field. Fields can also appear in more than one group.

Let's, for example, say you have a long document and want to focus on the fields related to SEO. To achieve this, we first define an SEO group in our document's properties and then add the property `group: 'seo'` to a field to make it appear in the SEO group:

![a screenshot of a web page with a lot of fields .](https://cdn.sanity.io/images/3do82whm/next/5313d064b74f6aac7b75bbcef69b2330e416fd6e-2452x1720.png)

> \[!TIP]
> Protip
> Adding `default: true` to the object setup in `groups: []` will make it the default field group.

The schema to produce the document structure in the example above might look like this (note the `groups` property on the document itself, as well as the `group` property on the fields related to SEO):

```javascript
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'icon', title: 'Icon', type: 'image'},
    {
      name: 'related',
      title: 'Related',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}],
    },
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoKeywords', title: 'Keywords', type: 'string', group: 'seo'},
    {name: 'seoSlug', title: 'Slug', type: 'slug', group: 'seo'},
    {name: 'seoImage', title: 'Image', type: 'image', group: 'seo'},
  ],
}
```

Fields can belong to more than one group. Expanding on our previous example, let's say we would like another view showing only fields that include images. We might then create a new group called Media and add all the fields with a graphic element to it:

![a screenshot of a website where you can drag or paste an image here .](https://cdn.sanity.io/images/3do82whm/next/3c4125368043f3275c7f92ae2729e548d4357fc0-1158x368.png)

To do this, we'd add another group called Media in `groups`, and change the `group` property on our `icon` and `seoImage` fields to be an array of strings instead of a single string:

```javascript
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'media',
      title: 'Media',
    },
  ],
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'icon', title: 'Icon', type: 'image', group: 'media'},
    {
      name: 'related',
      title: 'Related',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}],
    },
    {name: 'field1', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'field2', title: 'Keywords', type: 'string', group: 'seo'},
    {name: 'field3', title: 'Slug', type: 'slug', group: 'seo'},
    {name: 'seoImage', title: 'Image', type: 'image', group: ['seo', 'media']},
  ],
}
```

> \[!TIP]
> Protip
> Using field groups in a document or object does not change the structure of the document, it only affects how and where fields appear in the Studio.

In addition to `document`s, field groups can also be defined on `object`s.

> \[!WARNING]
> Gotcha
> A field inside an object, cannot appear in a group by itself.

## Conditional field groups

It can be useful to make certain groups appear or hide based on certain conditions. A group can be conditionally hidden using the boolean values `true` or `false`, but you can also pass a function. This function passes `currentUser`, `value`, and `parent` as arguments, where `value` is the values of the current group and `parent` is an array of all the groups defined in the document or object.

## Customizing the all fields group

When creating your first group, you may notice a new group is added by default with the title **All fields**.

That group is a necessary addition because you might not have all your fields organized in groups. However, you have the option to hide this group.

You can do this by defining the following group in your schema:

**customSchema.ts**

```
import {ALL_FIELDS_GROUP,defineField, defineType} from 'sanity'

export default defineType({
  name: 'mySchemaType',
  type: 'document',
  groups: [
    {
      name: 'details',
      title: 'Details',
    },
    {
      ...ALL_FIELDS_GROUP,
      hidden: true,
    },
  ],
]
}
```

Note that even if you hide the group, it will still be visible under certain conditions:

- The review changes inspector is open.
- A field, which is not part of any group, has been linked by a comment or any deep linking action.

![a screenshot of a page that says this hides the all fields group](https://cdn.sanity.io/images/3do82whm/next/367492c72943bb170063675101e0075063d94f30-1468x1052.png)

## Reference

### Groups declaration

Property: `groups`

Type: `array`

Defined on `document` or `object`

#### Properties

| Property | Description |
| --- | --- |
| name \* | A unique name for the group. Fields will use this name to indicate which group they belong to. |
| title | A more descriptive, human-readable name. |
| icon | A react component that is displayed as the group's icon in Studio. See the icon documentation for details. |
| hidden | Set to true to hide the group. Also accepts a function, which takes an object argument with the properties currentUser, parent, value. Must return a boolean. See the example below. Defaults to false. |
| default | Defines the group as the default group. Defaults to false. |

```javascript
groups: [
  {
    name: 'groupName',
    title: 'Group title',
    icon: CogIcon, // optional
    default: true, // optional, defaults to false
    hidden: ({currentUser, value, parent}) => true // optional
  }
]
```

### Field declaration

Property: `group`

Type: `string` or `array`

Defined on a field. Set to one or more group names to assign the field to a gr

```typescript
defineField({
  name: 'fieldName',
  title: 'Field title', 
  type: 'string',
  group: 'groupName' // or ['groupName']
})
```
