# Compare document versions

## Side by side comparison

Use the document comparison view to compare document versions. This includes drafts, published, and release versions. To get started, open a document in Sanity Studio that contains multiple document versions.

1. In the top left right corner of the document view, select the **"..."** icon.
2. Next, select "Compare versions".

The document comparison view appears over your studio window. It contains a version selection at the top, and two panels that correspond to each document version on the left and right.

> \[!WARNING]
> Gotcha
> This view only works when multiple document versions exist. If you don't see the option, ensure that changes are made to a draft or release version in addition to the published version.

Differences between the fields in the right version are highlighted in yellow. You may recognize this from other history or "diff component" tools. In the screenshot above, the *Overview* field has a yellow highlight along the right edge indicating changes.

You can adjust the compared versions with the version selector at the top of the window.

> \[!TIP]
> Protip
> You cannot leave comments or tasks from within the selector. It's best to save major changes and workflows for the document view.

## Advanced Version Control

> \[!WARNING]
> Experimental feature
> This functionality is likely to change as we improve and expand it. Please let us know if you have any feedback.

Advanced Version Control adds inline diff annotations to fields, allowing editors to see how content has changed between versions while they work on it. This functionality is currently available for `string` fields, but we are working to add it to other field types.

![Screenshot of string field in Sanity Studio show diff annotation from "Fall Collection 2025" to "Autumn Collection 2025"](https://cdn.sanity.io/images/3do82whm/next/103c95376415df0aab808acad6a5847a803baa10-1320x240.png)

### Switching on Advanced Version Control

To switch this on Advanced Version Control, set the `advancedVersionControl.enabled` configuration option to `true`. This feature can be switched on or off for different workspaces.

**sanity.config.ts**

```
import {defineConfig} from 'sanity'

export default defineConfig({
  advancedVersionControl: {
    enabled: true,
  },
  // …
})
```
