# API examples

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-for-platforms/workers-for-platforms/reference/platform-examples.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# API examples

The following examples show how to use Cloudflare's REST API and TypeScript SDK to deploy and manage Workers programmatically.

### Prerequisites

Before using these examples, you need:

- Your **Account ID** - Found in the Cloudflare dashboard URL or API settings
- A **dispatch namespace** - Created via the [dashboard](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/get-started/)
- An **API token** with Workers permissions - Create one at [API Tokens ↗](https://dash.cloudflare.com/profile/api-tokens)

For SDK examples, install the Cloudflare SDK:

Terminal window

```

npm install cloudflare


```

### Deploy a user Worker

Upload a Worker script to your dispatch namespace. This is the primary operation your platform performs when customers deploy code.

- [ REST API ](#tab-panel-3345)
- [ TypeScript SDK ](#tab-panel-3346)

Terminal window

```

# First, create the worker script file

cat > worker.mjs << 'EOF'

export default {

  async fetch(request, env, ctx) {

    return new Response("Hello from user Worker!");

  },

};

EOF


# Deploy using multipart form (required for ES modules)

curl -X PUT "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/dispatch/namespaces/$NAMESPACE_NAME/scripts/$SCRIPT_NAME" \

  -H "Authorization: Bearer $API_TOKEN" \

  -F 'metadata={"main_module": "worker.mjs"};type=application/json' \

  -F 'worker.mjs=@worker.mjs;type=application/javascript+module'


```

TypeScript

```

import Cloudflare from "cloudflare";


const client = new Cloudflare({

  apiToken: process.env.API_TOKEN,

});


async function deployUserWorker(

  accountId: string,

  namespace: string,

  scriptName: string,

  scriptContent: string,

) {

  const scriptFile = new File([scriptContent], `${scriptName}.mjs`, {

    type: "application/javascript+module",

  });


  const result =

    await client.workersForPlatforms.dispatch.namespaces.scripts.update(

      namespace,

      scriptName,

      {

        account_id: accountId,

        metadata: {

          main_module: `${scriptName}.mjs`,

        },

        files: [scriptFile],

      },

    );


  return result;

}


// Usage

await deployUserWorker(

  "your-account-id",

  "production",

  "customer-123",

  `export default {

  async fetch(request, env, ctx) {

    return new Response("Hello from customer 123!");

  },

};`,

);


```

### Deploy with bindings and tags

Use [bindings](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/configuration/bindings/) to give each user Worker its own resources like a KV store or database. Use [tags](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/configuration/tags/) to organize Workers by customer ID, project ID, or plan type for bulk operations.

The following example shows how to deploy a Worker with its own KV namespace and tags attached:

- [ REST API ](#tab-panel-3347)
- [ TypeScript SDK ](#tab-panel-3348)

Terminal window

```

curl -X PUT "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/dispatch/namespaces/$NAMESPACE_NAME/scripts/$SCRIPT_NAME" \

  -H "Authorization: Bearer $API_TOKEN" \

  -F 'metadata={"main_module": "worker.mjs", "bindings": [{"type": "kv_namespace", "name": "MY_KV", "namespace_id": "your-kv-namespace-id"}], "tags": ["customer-123", "production", "pro-plan"], "compatibility_date": "2024-01-01"};type=application/json' \

  -F 'worker.mjs=@worker.mjs;type=application/javascript+module'


```

TypeScript

```

import Cloudflare from "cloudflare";


const client = new Cloudflare({

  apiToken: process.env.API_TOKEN,

});


async function deployWorkerWithBindingsAndTags(

  accountId: string,

  namespace: string,

  scriptName: string,

  scriptContent: string,

  kvNamespaceId: string,

  tags: string[],

) {

  const scriptFile = new File([scriptContent], `${scriptName}.mjs`, {

    type: "application/javascript+module",

  });


  const result =

    await client.workersForPlatforms.dispatch.namespaces.scripts.update(

      namespace,

      scriptName,

      {

        account_id: accountId,

        metadata: {

          main_module: `${scriptName}.mjs`,

          compatibility_date: "2024-01-01",

          bindings: [

            {

              type: "kv_namespace",

              name: "MY_KV",

              namespace_id: kvNamespaceId,

            },

          ],

          tags: tags, // e.g., ["customer-123", "production", "pro-plan"]

        },

        files: [scriptFile],

      },

    );


  return result;

}


// Usage

const scriptContent = `export default {

  async fetch(request, env, ctx) {

    const value = await env.MY_KV.get("key") || "default";

    return new Response(value);

  },

};`;


await deployWorkerWithBindingsAndTags(

  "your-account-id",

  "production",

  "customer-123-app",

  scriptContent,

  "kv-namespace-id",

  ["customer-123", "production", "pro-plan"],

);


```

For more information, refer to [Bindings](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/configuration/bindings/) and [Tags](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/configuration/tags/).

### Deploy a Worker with static assets

Deploy a Worker that serves static files (HTML, CSS, JavaScript, images). This is a three-step process:

1. Create an upload session with a manifest of files
2. Upload the asset files
3. Deploy the Worker with the assets binding

For more details on static assets configuration and options, refer to [Static assets](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/configuration/static-assets/).

- [ REST API ](#tab-panel-3349)
- [ TypeScript SDK ](#tab-panel-3350)

**Step 1: Create upload session**

Terminal window

```

curl -X POST "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/dispatch/namespaces/$NAMESPACE_NAME/scripts/$SCRIPT_NAME/assets-upload-session" \

  -H "Authorization: Bearer $API_TOKEN" \

  -H "Content-Type: application/json" \

  -d '{

    "manifest": {

      "/index.html": {

        "hash": "<sha256-hash-first-16-bytes-hex>",

        "size": 1234

      },

      "/styles.css": {

        "hash": "<sha256-hash-first-16-bytes-hex>",

        "size": 567

      }

    }

  }'


```

The response includes a `jwt` token and `buckets` array indicating which files need uploading.

**Step 2: Upload assets**

Terminal window

```

curl -X POST "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/assets/upload?base64=true" \

  -H "Authorization: Bearer $JWT_FROM_STEP_1" \

  -F '<hash1>=<base64-encoded-content>' \

  -F '<hash2>=<base64-encoded-content>'


```

**Step 3: Deploy Worker with assets**

Terminal window

```

curl -X PUT "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/dispatch/namespaces/$NAMESPACE_NAME/scripts/$SCRIPT_NAME" \

  -H "Authorization: Bearer $API_TOKEN" \

  -F 'metadata={"main_module": "worker.mjs", "assets": {"jwt": "<completion-token>"}, "bindings": [{"type": "assets", "name": "ASSETS"}]};type=application/json' \

  -F 'worker.mjs=export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };type=application/javascript+module'


```

TypeScript

```

interface AssetFile {

  path: string; // e.g., "/index.html"

  content: string; // base64 encoded content

  size: number; // file size in bytes

}


async function hashContent(base64Content: string): Promise<string> {

  const binaryString = atob(base64Content);

  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {

    bytes[i] = binaryString.charCodeAt(i);

  }

  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // Use first 16 bytes (32 hex chars) per API requirement

  return hashArray

    .slice(0, 16)

    .map((b) => b.toString(16).padStart(2, "0"))

    .join("");

}


async function deployWorkerWithAssets(

  accountId: string,

  namespace: string,

  scriptName: string,

  assets: AssetFile[],

) {

  const apiToken = process.env.API_TOKEN;

  const baseUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers`;


  // Step 1: Build manifest

  const manifest: Record<string, { hash: string; size: number }> = {};

  const hashToAsset = new Map<string, AssetFile>();


  for (const asset of assets) {

    const hash = await hashContent(asset.content);

    const path = asset.path.startsWith("/") ? asset.path : "/" + asset.path;

    manifest[path] = { hash, size: asset.size };

    hashToAsset.set(hash, asset);

  }


  // Step 2: Create upload session

  const sessionResponse = await fetch(

    `${baseUrl}/dispatch/namespaces/${namespace}/scripts/${scriptName}/assets-upload-session`,

    {

      method: "POST",

      headers: {

        Authorization: `Bearer ${apiToken}`,

        "Content-Type": "application/json",

      },

      body: JSON.stringify({ manifest }),

    },

  );


  const sessionData = (await sessionResponse.json()) as {

    success: boolean;

    result?: { jwt: string; buckets?: string[][] };

  };


  if (!sessionData.success || !sessionData.result) {

    throw new Error("Failed to create upload session");

  }


  let completionToken = sessionData.result.jwt;

  const buckets = sessionData.result.buckets;


  // Step 3: Upload assets in buckets

  if (buckets && buckets.length > 0) {

    for (const bucket of buckets) {

      const formData = new FormData();

      for (const hash of bucket) {

        const asset = hashToAsset.get(hash);

        if (asset) {

          formData.append(hash, asset.content);

        }

      }


      const uploadResponse = await fetch(

        `${baseUrl}/assets/upload?base64=true`,

        {

          method: "POST",

          headers: { Authorization: `Bearer ${completionToken}` },

          body: formData,

        },

      );


      const uploadData = (await uploadResponse.json()) as {

        success: boolean;

        result?: { jwt?: string };

      };


      if (uploadData.result?.jwt) {

        completionToken = uploadData.result.jwt;

      }

    }

  }


  // Step 4: Deploy worker with assets binding

  const workerCode = `

export default {

  async fetch(request, env) {

    return env.ASSETS.fetch(request);

  }

};`;


  const deployFormData = new FormData();

  const metadata = {

    main_module: `${scriptName}.mjs`,

    assets: { jwt: completionToken },

    bindings: [{ type: "assets", name: "ASSETS" }],

  };


  deployFormData.append(

    "metadata",

    new Blob([JSON.stringify(metadata)], { type: "application/json" }),

  );

  deployFormData.append(

    `${scriptName}.mjs`,

    new Blob([workerCode], { type: "application/javascript+module" }),

  );


  const deployResponse = await fetch(

    `${baseUrl}/dispatch/namespaces/${namespace}/scripts/${scriptName}`,

    {

      method: "PUT",

      headers: { Authorization: `Bearer ${apiToken}` },

      body: deployFormData,

    },

  );


  return deployResponse.json();

}


// Usage

await deployWorkerWithAssets("your-account-id", "production", "customer-site", [

  {

    path: "/index.html",

    content: btoa("<html><body>Hello World</body></html>"),

    size: 37,

  },

  {

    path: "/styles.css",

    content: btoa("body { font-family: sans-serif; }"),

    size: 33,

  },

]);


```

### List Workers in a namespace

Retrieve all user Workers deployed to a namespace.

- [ REST API ](#tab-panel-3351)
- [ TypeScript SDK ](#tab-panel-3352)

Terminal window

```

curl "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/dispatch/namespaces/$NAMESPACE_NAME/scripts" \

  -H "Authorization: Bearer $API_TOKEN"


```

TypeScript

```

async function listWorkers(accountId: string, namespace: string) {

  const response = await fetch(

    `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/dispatch/namespaces/${namespace}/scripts`,

    {

      headers: {

        Authorization: `Bearer ${process.env.API_TOKEN}`,

      },

    },

  );


  const data = (await response.json()) as {

    success: boolean;

    result: Array<{ id: string; tags?: string[] }>;

  };


  return data.result;

}


// Usage

const workers = await listWorkers("your-account-id", "production");

console.log(workers);


```

### Delete Workers by tag

Delete all Workers matching a tag filter. This is useful when a customer deletes their account and you need to remove all their Workers at once.

- [ REST API ](#tab-panel-3353)
- [ TypeScript SDK ](#tab-panel-3354)

Delete all Workers tagged with `customer-123`:

Terminal window

```

curl -X DELETE "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/dispatch/namespaces/$NAMESPACE_NAME/scripts?tags=customer-123:yes" \

  -H "Authorization: Bearer $API_TOKEN"


```

TypeScript

```

async function deleteWorkersByTag(

  accountId: string,

  namespace: string,

  tag: string,

) {

  const response = await fetch(

    `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/dispatch/namespaces/${namespace}/scripts?tags=${tag}:yes`,

    {

      method: "DELETE",

      headers: {

        Authorization: `Bearer ${process.env.API_TOKEN}`,

      },

    },

  );


  return response.json();

}


// Usage: Delete all Workers for a customer

await deleteWorkersByTag("your-account-id", "production", "customer-123");


```

### Delete a single Worker

Delete a specific Worker by name.

- [ REST API ](#tab-panel-3355)
- [ TypeScript SDK ](#tab-panel-3356)

Terminal window

```

curl -X DELETE "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/dispatch/namespaces/$NAMESPACE_NAME/scripts/$SCRIPT_NAME" \

  -H "Authorization: Bearer $API_TOKEN"


```

TypeScript

```

import Cloudflare from "cloudflare";


const client = new Cloudflare({

  apiToken: process.env.API_TOKEN,

});


async function deleteWorker(

  accountId: string,

  namespace: string,

  scriptName: string,

) {

  const result =

    await client.workersForPlatforms.dispatch.namespaces.scripts.delete(

      namespace,

      scriptName,

      { account_id: accountId },

    );


  return result;

}


// Usage

await deleteWorker("your-account-id", "production", "customer-123");


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-for-platforms/","name":"Cloudflare for Platforms"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-for-platforms/workers-for-platforms/","name":"Workers for Platforms"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-for-platforms/workers-for-platforms/reference/","name":"Reference"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-for-platforms/workers-for-platforms/reference/platform-examples/","name":"API examples"}}]}
```
