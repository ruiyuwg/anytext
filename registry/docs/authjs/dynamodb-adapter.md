[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")DynamoDB

![](/img/adapters/dynamodb.svg)

# DynamoDB Adapter

## Resources[](#resources)

-   [DynamoDB documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/dynamodb-adapter @aws-sdk/lib-dynamodb @aws-sdk/client-dynamodb
```

```
pnpm add @auth/dynamodb-adapter @aws-sdk/lib-dynamodb @aws-sdk/client-dynamodb
```

```
yarn add @auth/dynamodb-adapter @aws-sdk/lib-dynamodb @aws-sdk/client-dynamodb
```

```
bun add @auth/dynamodb-adapter @aws-sdk/lib-dynamodb @aws-sdk/client-dynamodb
```

### Environment Variables[](#environment-variables)

```
AUTH_DYNAMODB_ID=accessKey
AUTH_DYNAMODB_SECRET=secretKey
AUTH_DYNAMODB_REGION=eu-west-1
```

### Configuration[](#configuration)

You need to pass `DynamoDBDocument` client from the modular [`aws-sdk`](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-dynamodb-utilities.html) v3 to the adapter. The default table name is `next-auth`, but you can customise that by passing `{ tableName: 'your-table-name' }` as the second parameter in the adapter.

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"
 
const config: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: process.env.AUTH_DYNAMODB_ID,
    secretAccessKey: process.env.AUTH_DYNAMODB_SECRET,
  },
  region: process.env.AUTH_DYNAMODB_REGION,
}
 
const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
})
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: []
  adapter: DynamoDBAdapter(client),
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"
 
const config: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: import.meta.env.AUTH_DYNAMODB_ID,
    secretAccessKey: import.meta.env.AUTH_DYNAMODB_SECRET,
  },
  region: import.meta.env.AUTH_DYNAMODB_REGION,
}
 
const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
})
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: DynamoDBAdapter(client),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"
 
const config: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: process.env.AUTH_DYNAMODB_ID,
    secretAccessKey: process.env.AUTH_DYNAMODB_SECRET,
  },
  region: process.env.AUTH_DYNAMODB_REGION,
}
 
const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
})
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: []
  adapter: DynamoDBAdapter(client),
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"
 
const app = express()
 
const config: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: process.env.AUTH_DYNAMODB_ID,
    secretAccessKey: process.env.AUTH_DYNAMODB_SECRET,
  },
  region: process.env.AUTH_DYNAMODB_REGION,
}
 
const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
})
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: DynamoDBAdapter(client),
  })
)
```

### AWS Credentials[](#aws-credentials)

Always follow the **principle of least privilege** when giving access to AWS services/resources -> identities should only be permitted to perform the smallest set of actions necessary to fulfill a specific task.

1.  Open the [AWS console](https://console.aws.amazon.com/) and go to “IAM”, then “Users”.
2.  Create a new user. The purpose of this user is to give programmatic access to DynamoDB.
3.  Create an Access Key and then copy Key ID and Secret to your `.env`/`.env.local` file.
4.  Select “Add Permission” and “Create Inline Policy”.
5.  Copy the JSON below into the JSON input and replace `region`, `account_id` and `table_name` with your values.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DynamoDBAccess",
      "Effect": "Allow",
      "Action": [
        "dynamodb:BatchGetItem",
        "dynamodb:BatchWriteItem",
        "dynamodb:Describe*",
        "dynamodb:List*",
        "dynamodb:PutItem",
        "dynamodb:DeleteItem",
        "dynamodb:GetItem",
        "dynamodb:Scan",
        "dynamodb:Query",
        "dynamodb:UpdateItem"
      ],
      "Resource": [
        "arn:aws:dynamodb:{region}:{account_id}:table/{table_name}",
        "arn:aws:dynamodb:{region}:{account_id}:table/{table_name}/index/GSI1"
      ]
    }
  ]
}
```

## Advanced usage[](#advanced-usage)

### IaC Templates[](#iac-templates)

Below are some infrastructure-as-code templates for popular providers to help you spin up DynamoDB.

CDK

Cloud Formation

Terraform

### Default schema[](#default-schema)

The table respects the single table design pattern. This has many advantages:

-   Only one table to manage, monitor and provision.
-   Querying relations is faster than with multi-table schemas (for eg. retrieving all sessions for a user).
-   Only one table needs to be replicated if you want to go multi-region.

![DynamoDB Table](https://i.imgur.com/hGZtWDq.png)

By default, the adapter expects a table with a partition key `pk` and a sort key `sk`, as well as a global secondary index named `GSI1` with `GSI1PK` as partition key and `GSI1SK` as sorting key. To automatically delete sessions and verification requests after they expire using [dynamodb TTL](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html) you should [enable the TTL](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-how-to.html) with attribute name `expires`. You can set whatever you want as the table name and the billing method. You can find the full schema in the table structure section below.

### Using a custom schema[](#using-a-custom-schema)

You can configure your custom table schema by passing the `options` key to the adapter constructor:

./auth.js

```
const adapter = DynamoDBAdapter(client, {
  tableName: "custom-table-name",
  partitionKey: "custom-pk",
  sortKey: "custom-sk",
  indexName: "custom-index-name",
  indexPartitionKey: "custom-index-pk",
  indexSortKey: "custom-index-sk",
})
```

[Drizzle](/getting-started/adapters/drizzle "Drizzle")[EdgeDB](/getting-started/adapters/edgedb "EdgeDB")
