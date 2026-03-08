### Blueprints configuration

We're assuming you've gong through the setup above to create a blueprint file, we're using configuration code below but reconfigure as needed; the only quirk here is making sure you are setup for env variables with `dotenv` and we have to pass them into our functions with the `env:`key below.

You should also scaffold the function so that each are created running the following command:

**cli**

```sh
npx sanity blueprints add function
```

**sanity.blueprint.ts**

```

import 'dotenv/config'
import process from 'node:process'
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

const {KLAVIYO_API_KEY, KLAVIYO_LIST_ID} = process.env
if (typeof KLAVIYO_API_KEY !== 'string') {
  throw new Error('KLAVIYO_API_KEY must be set')
}
if (typeof KLAVIYO_LIST_ID !== 'string') {
  throw new Error('KLAVIYO_LIST_ID must be set')
}

export default defineBlueprint({
  "resources": [
    // .. Other Functions
    defineDocumentFunction({
      name: 'marketing-campaign-create',
      src: 'functions/marketing-campaign-create',
      event: {
        on: ['create', 'update'],
        filter: '_type == "post" && status != "sent"',
        projection: '{_id, _type, title, slug, body, marketingCampaign, klaviyoListId, "operation": delta::operation()}',
      },
      env: {
        KLAVIYO_API_KEY,
        KLAVIYO_LIST_ID,
      }
    }),
    defineDocumentFunction({
      name: 'marketing-campaign-send',
      src: 'functions/marketing-campaign-send',
      event: {
        on: ['publish'],
        filter: '_type == "marketingCampaign" && status == "ready"',
        projection: '{_id, _type, title, post, klaviyoCampaignId}',
      },
      env: {
        KLAVIYO_API_KEY,
        KLAVIYO_LIST_ID,
      }
    }),
  ]
})

```

Navigate to the root of the `create` function and use your prefered package manager to install:

**cli**

```sh
pnpm install @sanity/client @portabletext/to-html
```

And likewise navigate to the `send` function an ensure the `@sanity/client` is installed.
