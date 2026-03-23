# GitHubCode

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/github-code.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# GitHubCode

The `GitHubCode` component is used `26` times on `13` pages.

See all examples of pages that use GitHubCode

Used **26** times.

**Pages**

- [/agents/patterns/](https://developers.cloudflare.com/agents/patterns/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/agents/patterns.mdx)
- [/d1/best-practices/read-replication/](https://developers.cloudflare.com/d1/best-practices/read-replication/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/d1/best-practices/read-replication.mdx)
- [/d1/tutorials/d1-and-prisma-orm/](https://developers.cloudflare.com/d1/tutorials/d1-and-prisma-orm/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/d1/tutorials/d1-and-prisma-orm.mdx)
- [/kv/get-started/](https://developers.cloudflare.com/kv/get-started/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/kv/get-started.mdx)
- [/style-guide/how-we-docs/image-maintenance/](https://developers.cloudflare.com/style-guide/how-we-docs/image-maintenance/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/style-guide/how-we-docs/image-maintenance.mdx)
- [/style-guide/how-we-docs/links/](https://developers.cloudflare.com/style-guide/how-we-docs/links/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/style-guide/how-we-docs/links.mdx)
- [/style-guide/how-we-docs/metadata/](https://developers.cloudflare.com/style-guide/how-we-docs/metadata/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/style-guide/how-we-docs/metadata.mdx)
- [/style-guide/how-we-docs/redirects/](https://developers.cloudflare.com/style-guide/how-we-docs/redirects/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/style-guide/how-we-docs/redirects.mdx)
- [/style-guide/how-we-docs/reviews/](https://developers.cloudflare.com/style-guide/how-we-docs/reviews/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/style-guide/how-we-docs/reviews.mdx)
- [/workers/platform/infrastructure-as-code/](https://developers.cloudflare.com/workers/platform/infrastructure-as-code/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/workers/platform/infrastructure-as-code.mdx)
- [/workers/static-assets/direct-upload/](https://developers.cloudflare.com/workers/static-assets/direct-upload/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/workers/static-assets/direct-upload.mdx)
- [/workers/tutorials/deploy-an-express-app/](https://developers.cloudflare.com/workers/tutorials/deploy-an-express-app/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/workers/tutorials/deploy-an-express-app.mdx)
- [/workflows/examples/wait-for-event/](https://developers.cloudflare.com/workflows/examples/wait-for-event/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/workflows/examples/wait-for-event.mdx)

**Partials**

The `GitHubCode` component allows you to include files from Cloudflare repositories.

The remote content can be filtered by lines or a region enclosed in tags.

## Import

```

import { GitHubCode } from "~/components";


```

## Usage

- [  JavaScript ](#tab-panel-7059)
- [  TypeScript ](#tab-panel-7060)

JavaScript

```

import {

  WorkflowEntrypoint,

  WorkflowStep,

  WorkflowEvent,

} from "cloudflare:workers";


// User-defined params passed to your workflow

export class MyWorkflow extends WorkflowEntrypoint {

  async run(event, step) {

    // Can access bindings on `this.env`

    // Can access params on `event.payload`


    const files = await step.do("my first step", async () => {

      // Fetch a list of files from $SOME_SERVICE

      return {

        inputParams: event,

        files: [

          "doc_7392_rev3.pdf",

          "report_x29_final.pdf",

          "memo_2024_05_12.pdf",

          "file_089_update.pdf",

          "proj_alpha_v2.pdf",

          "data_analysis_q2.pdf",

          "notes_meeting_52.pdf",

          "summary_fy24_draft.pdf",

        ],

      };

    });


    const apiResponse = await step.do("some other step", async () => {

      let resp = await fetch("https://api.cloudflare.com/client/v4/ips");

      return await resp.json();

    });


    await step.sleep("wait on something", "1 minute");


    await step.do(

      "make a call to write that could maybe, just might, fail",

      // Define a retry strategy

      {

        retries: {

          limit: 5,

          delay: "5 second",

          backoff: "exponential",

        },

        timeout: "15 minutes",

      },

      async () => {

        // Do stuff here, with access to the state from our previous steps

        if (Math.random() > 0.5) {

          throw new Error("API call to $STORAGE_SYSTEM failed");

        }

      },

    );

  }

}


export default {

  async fetch(req, env) {

    let url = new URL(req.url);


    if (url.pathname.startsWith("/favicon")) {

      return Response.json({}, { status: 404 });

    }


    // Get the status of an existing instance, if provided

    let id = url.searchParams.get("instanceId");

    if (id) {

      let instance = await env.MY_WORKFLOW.get(id);

      return Response.json({

        status: await instance.status(),

      });

    }


    // Spawn a new instance and return the ID and status

    let instance = await env.MY_WORKFLOW.create();

    return Response.json({

      id: instance.id,

      details: await instance.status(),

    });

  },

};


```

TypeScript

```

import { WorkflowEntrypoint, WorkflowStep, WorkflowEvent } from 'cloudflare:workers';


type Env = {

  // Add your bindings here, e.g. Workers KV, D1, Workers AI, etc.

  MY_WORKFLOW: Workflow;

};


// User-defined params passed to your workflow

type Params = {

  email: string;

  metadata: Record<string, string>;

};


export class MyWorkflow extends WorkflowEntrypoint<Env, Params> {

  async run(event: WorkflowEvent<Params>, step: WorkflowStep) {

    // Can access bindings on `this.env`

    // Can access params on `event.payload`


    const files = await step.do('my first step', async () => {

      // Fetch a list of files from $SOME_SERVICE

      return {

        inputParams: event,

        files: [

          'doc_7392_rev3.pdf',

          'report_x29_final.pdf',

          'memo_2024_05_12.pdf',

          'file_089_update.pdf',

          'proj_alpha_v2.pdf',

          'data_analysis_q2.pdf',

          'notes_meeting_52.pdf',

          'summary_fy24_draft.pdf',

        ],

      };

    });


    const apiResponse = await step.do('some other step', async () => {

      let resp = await fetch('https://api.cloudflare.com/client/v4/ips');

      return await resp.json<any>();

    });


    await step.sleep('wait on something', '1 minute');


    await step.do(

      'make a call to write that could maybe, just might, fail',

      // Define a retry strategy

      {

        retries: {

          limit: 5,

          delay: '5 second',

          backoff: 'exponential',

        },

        timeout: '15 minutes',

      },

      async () => {

        // Do stuff here, with access to the state from our previous steps

        if (Math.random() > 0.5) {

          throw new Error('API call to $STORAGE_SYSTEM failed');

        }

      },

    );

  }

}


export default {

  async fetch(req: Request, env: Env): Promise<Response> {

    let url = new URL(req.url);


    if (url.pathname.startsWith('/favicon')) {

      return Response.json({}, { status: 404 });

    }


    // Get the status of an existing instance, if provided

    let id = url.searchParams.get('instanceId');

    if (id) {

      let instance = await env.MY_WORKFLOW.get(id);

      return Response.json({

        status: await instance.status(),

      });

    }


    // Spawn a new instance and return the ID and status

    let instance = await env.MY_WORKFLOW.create();

    return Response.json({

      id: instance.id,

      details: await instance.status(),

    });

  },

};


```

```

import { GitHubCode } from "~/components";


<GitHubCode

    repo="cloudflare/workflows-starter"

    file="src/index.ts"

    commit="a844e629ec80968118d4b116d4b26f5dcb107137"

    lang="ts"

    useTypeScriptExample={true}

/>


```

### Filtering by lines

```

import { GitHubCode } from "~/components";


{/*

import { foo } from "bar";


const baz = foo();


console.log(baz);

*/}

<GitHubCode

    repo="..."

    file="..."

    commit="..."

    lang="..."

    lines="1-3"

/>

{/*

import { foo } from "bar";


const baz = foo();

*/}


```

### Filtering by tag

```

import { GitHubCode } from "~/components";


{/*

<docs-tag name="no-logging">

import { foo } from "bar";


const baz = foo();

</docs-tag name="no-logging">


console.log(baz);

*/}

<GitHubCode

    repo="..."

    file="..."

    commit="..."

    lang="..."

    tag="no-logging"

/>

{/*

import { foo } from "bar";


const baz = foo();

*/}


```

## `<GitHubCode>` Props

### `repo`

**required** **type:** `string`

The owner and repository to pull from, in the form of `cloudflare/<REPO-NAME>`

For example:

- `cloudflare/workers-rs`.
- `cloudflare/templates`.

### `file`

**required** **type:** `string`

The file path to pull from, in the form of `path/to/filename-including-extensions`. This path excludes the repo name.

For example:

- `templates/hello-world/src/lib.rs`.
- `d1-starter-sessions-api/src/index.ts`.

### `commit`

**required** **type:** `string`

The long (40-characters) Git commit hash to pull from, for example `ab3951b5c95329a600a7baa9f9bb1a7a95f1aeaa`.

### `lang`

**required** **type:** `string`

The language to use for the code block, for example `rs`.

### `useTypeScriptExample`

**type:** `boolean`

If the `lang` is `"ts"` and `useTypeScriptExample` is `true`, the [TypeScriptExample](https://developers.cloudflare.com/style-guide/components/typescript-example/) component will be used to provide a JavaScript tab as well.

### `lines`

**type:** `string`

A range of lines to filter the content using, for example `1-3`.

### `tag`

**type:** `string`

A region to filter the content with, for example `no-logging`.

This should be represented as starting `<docs-tag name="no-logging">` and closing `</docs-tag name="no-logging">` comments in the source file.

### `code`

**type**: `object`

Props to pass to the [Expressive Code component ↗](https://expressive-code.com/key-features/code-component/).

## Associated content types

- [Tutorial](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/tutorial/)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/github-code/","name":"GitHubCode"}}]}
```
