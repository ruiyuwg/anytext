# History experience

## History retention

In order to make Sanity Studio real-time, it sends edits as patches to the backend. All these patches are stored as transactions. Together they make up your documents’ revision history.

History retention is the amount of time you have access to these revisions before they are automatically deleted. The latest version of your published and drafted document will always be available.

The retention period on your documents are defined by the plan you are on. We count retention time backward from the current day.

The retention time for the [different plans](https://www.sanity.io/pricing/compare) are:

- Free: 3 days
- Growth: 90 days
- Enterprise: 365 days, or contact us for custom retention

Revisions that are older than the cutoff will be truncated into one revision item, older transactions will be permanently deleted. The document history is truncated regularly every day.

### GDPR

We introduced history retention to make it possible to use Sanity and be GDPR compliant. You can learn more about our [security and compliance here](https://www.sanity.io/security).

### Upgrading the retention time

If you change retention time by changing plans, or upgrading on your current plan, this will only affect the retention cutoff time by postponing it to however long your retention time is. The retention history for your documents will stay as it was before the upgrade.

### Downgrading the retention time

The revision history for all your documents will be truncated to your new cutoff time when downgrade either by turning off the upgrade on your current plan, or switching to one with less included retention time.

## Exploring history in Sanity Studio

While viewing a single document in the studio editor, you can access the history either by clicking the document status indicator in the very bottom of the editor view, or by opening the contextual menu by clicking the ellipsis icon in the top right corner of the editor and selecting **History**.

![The document editor in the studio showing the context menu with the links for opening document revision history highlighted.](https://cdn.sanity.io/images/3do82whm/next/6931f709fcce41230840fbd590bc61551c034a7a-1590x1068.png)

### Nested release history

When a document is published as part of a Content Release, it combines all of the changes into a single entry. You can explore the individual history entries from when the document was part of the release by:

1. Select the "**Published**" pill at the top of the document
2. Select the "**...**" for the edit from the release.
3. Select the "**Inspect"** option to view the history of the document's edits in the release.

![Screenshot of the history interface highlighting the previous steps.](https://cdn.sanity.io/images/3do82whm/next/68e4038c8d14e7c043d517468ab9bba8134b27fd-2062x792.png)

Once selected, the history will update to display changes made to the document prior between when the version was created and when the release was published.

![Interface showing a highlighted view of the revert document history.](https://cdn.sanity.io/images/3do82whm/next/410c2bac148279257e65159b1c517cad599b7a71-2070x1768.png)

## Document status labels

The labels under the title in the document editor shows whether the content you are looking at is published and/or a draft.

### Published

The content in the editor is the same that is published to the API.

### Draft

The content in the editor has not yet been published, or has been unpublished.

### Published, Draft

The content has been edited after the document has been published.

### Live

The document is in live edit mode. All changes are published real-time and skip the draft workflow. This is not to be confused with the [Live Content API](https://www.sanity.io/docs/content-lake/live-content-api), which is a way of rendering published content changes instantly.

## History status labels

These are the labels for the revision items in the history view.

### Published

The document was published to the API.

### Unpublished

The document was unpublished from the API.

### Edited

The document was edited.

### Truncated

Revisions before the cutoff date.
