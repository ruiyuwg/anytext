# Custom document badges

A document badge ([DocumentBadgeComponent](https://reference.sanity.io/sanity/index/DocumentBadgeComponent/)) is a small UI component that indicates the status of a document. It currently appears in the Studio next to the toolbar actions. The default set of document badges currently shows `draft` and `published` status.

Depending on how you're implementing your workflows, you may want to control the badges that are displayed here. For example, if you have a workflow that includes reviewing you want to display pending review as a badge here.

![Screenshot from Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/250a4fc9d947827de6e0e1c02777fdec2c2b6908-2304x1400.png)

[Learn more about creating custom workflows →](https://www.sanity.io/docs/studio/document-actions)

## Getting started

[More details in the document badge reference documentation →](https://www.sanity.io/docs/studio/document-badges-api)

In order to implement your own custom badge you need to perform two steps:

1. Create a function that defines the badge
2. Register the badge and resolve which badges should be displayed when

Here's how:

### Define a custom badge

```javascript
export function HelloWorldBadge(props) {
  return {
    label: 'Hello world',
		title: 'Hello I am a custom document badge',
    color: "success"
  }
} 
```

### Register a custom badge

Custom badge definitions like the one above can be added to the `document.badges` property in your workspace configuration.

```javascript
export default defineConfig({
  // ... rest of config
  document: {
    badges: [HelloWorldBadge]
  },
})

```

Adding your badge components as a static array as in the example above will append your custom badges to the list of existing badges, if any. These could be the default set of badges provided by Sanity Studio, and any badges added to the studio via plugins.

The property can also be defined with a callback function that returns an array of badge components. When using the callback option, it's your responsibility to make sure any existing badges are passed along. The callback receives the current array of badges as its first argument and a context object with some useful info as its second.

```javascript
export default defineConfig({
  // ... rest of config
  document: {
    // Use info from the context to decide whether or not
    // to add our badge or just return the current list
    badges: (prev, context) => context.schemaType === 'movie' ? [HelloWorldBadge, ...prev] : prev,
  },
})

```

When editing a document in the studio next time, you should see your badge appear in the toolbar when editing a document:

![Screenshot of document badges in Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/1219c0d0fcc87b88c492d5d9712813651d06c8e8-2304x1400.png)
