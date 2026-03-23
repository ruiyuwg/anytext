## Setup

The Bedrock provider is available in the `@ai-sdk/amazon-bedrock` module. You can install it with

### Prerequisites

Access to Amazon Bedrock foundation models isn't granted by default. In order to gain access to a foundation model, an IAM user with sufficient permissions needs to request access to it through the console. Once access is provided to a model, it is available for all users in the account.

See the [Model Access Docs](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html) for more information.

### Authentication

#### Using IAM Access Key and Secret Key

**Step 1: Creating AWS Access Key and Secret Key**

To get started, you'll need to create an AWS access key and secret key. Here's how:

**Login to AWS Management Console**

- Go to the [AWS Management Console](https://console.aws.amazon.com/) and log in with your AWS account credentials.

**Create an IAM User**

- Navigate to the [IAM dashboard](https://console.aws.amazon.com/iam/home) and click on "Users" in the left-hand navigation menu.
- Click on "Create user" and fill in the required details to create a new IAM user.
- Make sure to select "Programmatic access" as the access type.
- The user account needs the `AmazonBedrockFullAccess` policy attached to it.

**Create Access Key**

- Click on the "Security credentials" tab and then click on "Create access key".
- Click "Create access key" to generate a new access key pair.
- Download the `.csv` file containing the access key ID and secret access key.

**Step 2: Configuring the Access Key and Secret Key**

Within your project add a `.env` file if you don't already have one. This file will be used to set the access key and secret key as environment variables. Add the following lines to the `.env` file:

```makefile
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
AWS_REGION=YOUR_REGION
```

Many frameworks such as [Next.js](https://nextjs.org/) load the `.env` file
automatically. If you're using a different framework, you may need to load the
`.env` file manually using a package like
[`dotenv`](https://github.com/motdotla/dotenv).

Remember to replace `YOUR_ACCESS_KEY_ID`, `YOUR_SECRET_ACCESS_KEY`, and `YOUR_REGION` with the actual values from your AWS account.

#### Using AWS SDK Credentials Chain (instance profiles, instance roles, ECS roles, EKS Service Accounts, etc.)

When using AWS SDK, the SDK will automatically use the credentials chain to determine the credentials to use. This includes instance profiles, instance roles, ECS roles, EKS Service Accounts, etc. A similar behavior is possible using the AI SDK by not specifying the `accessKeyId` and `secretAccessKey`, `sessionToken` properties in the provider settings and instead passing a `credentialProvider` property.

*Usage:*

`@aws-sdk/credential-providers` package provides a set of credential providers that can be used to create a credential provider chain.

```ts
import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock';
import { fromNodeProviderChain } from '@aws-sdk/credential-providers';

const bedrock = createAmazonBedrock({
  region: 'us-east-1',
  credentialProvider: fromNodeProviderChain(),
});
```
