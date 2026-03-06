## How to add tRPC

### 1. Install deps

```bash
yarn add @trpc/server
```

### 2. Create a tRPC router

Implement your tRPC router. A sample router is given below:

```ts title='server.ts'
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.create();

const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((opts) => {
    opts.input; // string
    return { id: opts.input, name: 'Bilbo' };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
```

### 3. Use the Amazon API Gateway adapter

tRPC includes an adapter for API Gateway out of the box. This adapter lets you run your routes through the API Gateway handler.

```ts title='server.ts'
import { CreateAWSLambdaContextOptions, awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';

const appRouter = /* ... */;

// created for each request
const createContext = ({
  event,
  context,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>) => ({}) // no context
type Context = Awaited<ReturnType<typeof createContext>>;

export const handler = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
})
```

Build & deploy your code, now use your API Gateway URL to call your function.

| Endpoint  | HTTP URI                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| `getUser` | `GET https://<execution-api-link>/getUser?input=INPUT` where `INPUT` is a URI-encoded JSON string. |

#### A word about payload format version

API Gateway has two different event data formats when it invokes a Lambda. For REST APIs they should be version "1.0"(`APIGatewayProxyEvent`), but you can choose which for HTTP APIs by stating either version "1.0" or "2.0".

- Version 1.0: `APIGatewayProxyEvent`
- Version 2.0: `APIGatewayProxyEventV2`

To infer what version you might have, supply the context as following:

```ts
function createContext({
  event,
  context,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
  ...
}

// CreateAWSLambdaContextOptions<APIGatewayProxyEvent> or CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>
```

[Read more here about payload format version](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html)

## AWS Lambda Response Streaming Adapter

AWS Lambda supports streaming responses to clients with both Lambda Function URLs and API Gateway REST APIs.

> Response streaming is supported for Lambda Function URLs and API Gateway REST APIs. For API Gateway REST APIs, you need to configure the integration with `responseTransferMode: STREAM`. [Read more about Lambda response streaming](https://aws.amazon.com/blogs/compute/introducing-aws-lambda-response-streaming/) and [API Gateway response streaming](https://aws.amazon.com/blogs/compute/building-responsive-apis-with-amazon-api-gateway-response-streaming/).

## Example apps

```
  Description
  Links




  Lambda Function URL with NodeJS client.
  
    
      Source
    
  


  API Gateway REST API with response streaming.
  
    
      Source
    
  
```

### Response Streaming

The signature of a streaming handler is different from the default handler. The streaming handler additionally receives a writable stream parameter, `responseStream`, besides the default node handler parameters, `event` and `context`. To indicate that Lambda should stream your responses, you must wrap your function handler with the `awslambda.streamifyResponse()` decorator.

> Note that the `awslambda` namespace is automatically provided by the Lambda execution environment. You can import the types from `@types/aws-lambda` to augment the global namespace with the `awslambda` namespace.

```ts title='server.ts'
import { awsLambdaStreamingRequestHandler } from '@trpc/server/adapters/aws-lambda';
import type { StreamifyHandler } from 'aws-lambda';

const appRouter = router({
  iterable: publicProcedure.query(async function* () {
    for (let i = 0; i < 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      yield i;
    }
  }),
});

export const handler = awslambda.streamifyResponse(
  awsLambdaStreamingRequestHandler({
    router: appRouter,
    /* ... */
  }),
);
```

## Example app

```
  Description
  Links




  Express server &amp; procedure calls with Node.js.
  
    
      CodeSandbox
      Source
    
  
```
