# Scheduled publishing (deprecated)

> \[!WARNING]
> Scheduled publishing is deprecated
> Scheduled publishing has been deprecated as of October 2025.
> We recommend moving to [Scheduled drafts](https://www.sanity.io/docs/studio/scheduled-drafts) for scheduling individual documents, or [Content Releases](https://www.sanity.io/docs/studio/content-releases-configuration) for building coordinated releases.
> Scheduled Publishing is not enabled by default. It can be enabled in the config by setting `scheduledPublishing: { enabled: true }`. Inversely, you can remove or disable the feature by setting `enabled` to false or removing the configuration setting.
> Scheduled Publishing uses the [Sanity Scheduling API](https://www.sanity.io/docs/scheduling-api) which is available on [Growth plans and above](https://www.sanity.io/pricing).

![Shows the Scheduled publishing interface in Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/ab8b7f0a2c183d32ef85d36d8886139dddd981e0-2772x1624.png)

![Shows a scheduled post being edited in Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/a4fd9f8169b9e464534257bcf643730c1021260c-2140x1526.png)

## Features

### Create and edit schedules directly from the document editor

- Create and edit schedules for the document you're working on
- See current schedule status and potential validation issues

### View all your schedules with our dedicated tool

- Filter all schedules by status or use the calendar to browse by date
- Edit, delete, and immediately publish schedules
- Automatically validate upcoming schedules, and identify issues before they're published
- Easily identify who created a schedule

### View schedule dates in any remote time zone

![Shows a modal dialog for selecting time zones](https://cdn.sanity.io/images/3do82whm/next/c37180974a616b4364f90b8b0ad0d1cdaf077510-1514x840.png)

- Change the time zone you want to preview schedules in by clicking the 🌎 Time Zone button when visible. Great when you need to co-ordinate with a global team or want to time publication to specific regions.
- Easily select time zones by city, time zone abbreviation or name search. - Selected time zones are automatically stored in your local storage for future use.

## Getting started

If you are starting from scratch, skip the following section on uninstalling the plugin and cleaning up old configuration and jump directly to the [next section on how to configure or disable Scheduled Publishing](https://www.sanity.io/docs/studio/scheduled-publishing).

### Uninstall the Scheduled Publishing plugin

If you are already using Scheduled Publishing plugin, the first step is to get rid of it and [update your studio to the latest release](https://www.sanity.io/docs/studio/upgrade). If you already updated your studio you might have gotten an alert about this.

![Shows an in-studio alert about the plugin deprecation](https://cdn.sanity.io/images/3do82whm/next/d86b559a72fc3845d9036dcf2373b3f090897471-829x389.png)

Run the following command in your project root to uninstall the plugin:

```sh
npm uninstall @sanity/scheduled-publishing
```

Next, remove the plugin from your studio configuration. Typically you'll find this in `./sanity.config.ts|js.` Find and delete the following lines from your configuration:

**sanity.config.ts**

```typescript
import {scheduledPublishing} from '@sanity/scheduled-publishing'

export default defineConfig({
  // ...
  plugins: [
    scheduledPublishing()
  ],
})
```

Your plugin declaration might be a bit more expansive if you've defined a custom time format for the plugin. Delete it all!

**sanity.config.ts**

```typescript
import {scheduledPublishing} from '@sanity/scheduled-publishing'

export default defineConfig({
  // ...
  plugins: [
    scheduledPublishing({
      inputDateTimeFormat: 'MM/dd/yyyy h:mm a',
    }),
  ],
})
```

> \[!TIP]
> Protip
> You might also have defined some custom document actions and badges to support Scheduled Publishing. You can keep these around, and they'll continue to work after migrating to the core studio functionality. Refer to the section on [document actions and badges](https://www.sanity.io/docs/studio/scheduled-publishing) further on in this article.

### Add new configuration for Scheduled Publishing

Note that while very similar to the plugin config this goes into the top-level of your studio configuration. Setting `enabled` to `false` will opt you out of using scheduled publishing for the project.

**sanity.config.ts**

```typescript
import {defineConfig} from 'sanity'

defineConfig({ 
  // ....
  scheduledPublishing: {
    enabled: true, 
    inputDateTimeFormat: 'MM/dd/yyyy h:mm a',
  }
)
```

As before, you can add a custom time format if you so wish. If left unspecified, the format will default to `dd/MM/yyyy HH:mm`.

## Document actions and badges

You can further enhance your Scheduled Publishing experience with custom document actions and badges.

### Configure the document action

This example assumes you've customized your [document actions](https://www.sanity.io/docs/studio/document-actions) and would like to only show the Schedule button on `movie` documents only.

The Schedule document action allows users to both create and edit existing schedules directly from the form editor. It is added to all document types by the plugin, so you should remove it from types that should NOT have it.

**sanity.config.ts**

```typescript
import {defineConfig, ScheduleAction} from 'sanity'

export default defineConfig({
  // ...
  document: {
    actions: (previousActions, {schemaType}) => {
      /*
       * Please note that this will only alter the visibility of the button in the studio.
       * Users with document publish permissions will be able to create schedules directly
       * via the Scheduled Publishing API.
       */
      if (schemaType.name !== 'movie') {
        // Remove the schedule action from any documents that is not 'movie'.
        return previousActions.filter((action) => action !== ScheduleAction)
      }
      return previousActions
    },
  },
})
```

Note that `ScheduleAction` is now imported from the core `sanity` package.

### Configure the document badge

This example assumes you've customized your own [document badges](https://www.sanity.io/docs/studio/document-badges-api) and would like to only show the Scheduled badge on `movie` documents.

The Scheduled document badge indicates whether the current document is scheduled and, if so, when it will be published. It is added to all document types by the plugin, so you should remove it from types that should NOT have it.

**sanity.config.ts**

```typescript
import {defineConfig, ScheduledBadge} from 'sanity'

export default defineConfig({
  // ...

  document: {
    badges: (previousBadges, {schemaType}) => {
      if (schemaType.name !== 'movie') {
        // Remove the schedule badge from any documents that aren't 'movie'.
        return previousBadges.filter((badge) => badge !== ScheduledBadge)
      }
      return previousBadges
    },
  },
})
```

Note that `ScheduleBadge` is now imported from the core `sanity` package.

## Frequently Asked Questions

### What's the relationship between Schedules and my dataset?

Schedules sit adjacent to your dataset and can be managed using the [Scheduling API](https://www.sanity.io/docs/http-reference/scheduling) (which this plugin does for you).

Schedules are a unique resource and are linked to, but do not exist within your Sanity project and dataset. It's important to understand the following behavior:

- As schedules are not contained within a project’s dataset, you cannot query them via GROQ or GraphQL.
- Deleting a dataset will immediately delete all schedules.
- Deleting a project will immediately delete all schedules.
- `sanity dataset export` will not include schedules and `sanity dataset import` does not support importing schedules.
- Server-side copying of datasets does not include schedules.
- When a project is disabled or blocked, all scheduled publishes will invariably fail as mutations will not be allowed on the dataset.

More information can be found in the [Scheduling API](https://www.sanity.io/docs/http-reference/scheduling) article.

### Will scheduled documents with a validation errors publish?

**Yes.** Documents scheduled to publish in future will do so, even if they contain validation errors. This also applies to scheduled documents that you manually opt to publish immediately via the tool.

# Manage notifications

You can enable/disable email notifications for your account from the Dashboard, or from [sanity.io/manage](https://www.sanity.io/manage).

Comment notifications are account-wide for a user, and will apply to all organizations and studios. Notifications for other users are unaffected.

![User settings menu interface](https://cdn.sanity.io/images/3do82whm/next/dbd6f2edbe43bd08a878ef59f9402fc8a29a86fe-1012x632.png)

1. Select the **user avatar** to open a popover menu. In the dashboard, this is located in the bottom-left corner. In Manage or standalone studios, this is located in the top-right corner.
2. Select **Account settings** to navigate to the setting page for your user account.

Once on the settings page, toggle the setting under "Comment notifications".

![a screen that says comment notifications on it](https://cdn.sanity.io/images/3do82whm/next/694f64c1b5190a9a88bdfcd61ee9c16200796913-1874x368.png)
