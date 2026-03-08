# Edge Workers

## Deploy to workers

Nitro provides out of the box support for deploying any Nitro app to different Edge Worker offerings as well as Service Workers.

- [Cloudflare](https://nitro.build/deploy/providers/cloudflare)
- [Deno Deploy](https://nitro.build/deploy/providers/deno-deploy)
- [Vercel](https://nitro.build/deploy/providers/vercel#vercel-edge-functions)
- [Netlify](https://nitro.build/deploy/providers/netlify#netlify-edge-functions)
- [Browser Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API){rel=""nofollow""} (via experimental preset `service-worker`)

### Worker limitations

- No support for raw TCP/IP traffic
- Execution time is limited compared to classic serverless offerings (normally 15-30 seconds)
- No access to the filesystem (use the [nitro storage](https://nitro.build/guide/storage) layer)
- Bundle size is very limited (normally a few MBs)
- Limited access Node.js APIs (nitro provides compatibility layer via [unenv](https://github.com/unjs/unenv){rel=""nofollow""})

### Incompatible libraries

::note
If you come across a library that you assume to be incompatible with edge workers, please open an issue on the [nitro repo](https://github.com/nitrojs/nitro/issues/new/choose){rel=""nofollow""} and help us keeping this list up to date.
::

The following libraries are known to be incompatible with edge workers because of one of the above mentioned limitations:

#### `mongodb`

> There are possible fixes for MongoDB, like using Realm and the [Realm SDK](https://www.mongodb.com/docs/realm/sdk/node/){rel=""nofollow""} or
> using http interfaces (only available when self hosting MongoDB), but these are untested. You can find an example for using realm [here](https://github.com/albionstatus/albionstatus-backend/){rel=""nofollow""}

#### `mysql`

> You can find an example with a modified MySQL driver [here](https://github.com/cloudflare/worker-template-mysql){rel=""nofollow""}

- `rhea`
- `gremlin`
- `ioredis`
- `cassandra-driver`
- `kafkajs`
