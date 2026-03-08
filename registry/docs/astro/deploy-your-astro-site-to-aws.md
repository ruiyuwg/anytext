# Deploy your Astro Site to AWS

> How to deploy your Astro site to the web using AWS.

[AWS](https://aws.amazon.com/) is a full-featured web app hosting platform that can be used to deploy an Astro site.

Deploying your project to AWS requires using the [AWS console](https://aws.amazon.com/console/). (Most of these actions can also be done using the [AWS CLI](https://aws.amazon.com/cli/)). This guide will walk you through the steps to deploy your site to AWS using [AWS Amplify](https://aws.amazon.com/amplify/), [S3 static website hosting](https://aws.amazon.com/s3/), and [CloudFront](https://aws.amazon.com/cloudfront/).

## AWS Amplify

[Section titled “AWS Amplify”](#aws-amplify)

AWS Amplify is a set of purpose-built tools and features that lets frontend web and mobile developers quickly and easily build full-stack applications on AWS. You can either deploy your Astro project as a static site, or as a server-rendered site.

### Static Site

[Section titled “Static Site”](#static-site)

Your Astro project is a static site by default.

1. Create a new Amplify Hosting project.

2. Connect your repository to Amplify.

3. Modify your build settings to match your project’s build process.

   - npm

     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: /dist
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

   - pnpm

     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm i -g pnpm
             - pnpm config set store-dir .pnpm-store
             - pnpm i
         build:
           commands:
             - pnpm run build
       artifacts:
         baseDirectory: /dist
         files:
           - '**/*'
       cache:
         paths:
           - .pnpm-store/**/*
     ```

   - Yarn

     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - yarn install
         build:
           commands:
             - yarn build
       artifacts:
         baseDirectory: /dist
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

Amplify will automatically deploy your website and update it when you push a commit to your repository.

### Adapter for on-demand rendering

[Section titled “Adapter for on-demand rendering”](#adapter-for-on-demand-rendering)

In order to deploy your project as a server-rendered site, you will need to use the third-party, [community-maintained AWS Amplify adapter](https://github.com/alexnguyennz/astro-aws-amplify) and make some changes to your config.

First, install the Amplify adapter.

- npm

  ```shell
  npm install astro-aws-amplify
  ```

- pnpm

  ```shell
  pnpm add astro-aws-amplify
  ```

- Yarn

  ```shell
  yarn add astro-aws-amplify
  ```

Then, in your `astro.config.*` file, add the adapter and set the output to `server`.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
+import awsAmplify from 'astro-aws-amplify';


export default defineConfig({
  // ...
+  output: "server",
+  adapter: awsAmplify(),
});
```

Once the adapter has been installed, you can set up your Amplify project.

1. Create a new Amplify Hosting project.

2. Connect your repository to Amplify.

3. Modify your build settings to match the adapter’s build process by either editing the build settings in the AWS console, or by adding an `amplify.yaml` in the root of your project.

   - npm

     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci --cache .npm --prefer-offline
         build:
           commands:
             - npm run build
             - mv node_modules ./.amplify-hosting/compute/default
       artifacts:
         baseDirectory: .amplify-hosting
         files:
           - '**/*'
       cache:
         paths:
           - .npm/**/*
     ```

   - pnpm

     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm i -g pnpm
             - pnpm config set store-dir .pnpm-store
             - pnpm i
         build:
           commands:
             - pnpm run build
             - mv node_modules ./.amplify-hosting/compute/default
       artifacts:
         baseDirectory: .amplify-hosting
         files:
           - '**/*'
       cache:
         paths:
           - .pnpm-store/**/*
     ```

   - Yarn

     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - yarn install
         build:
           commands:
             - yarn build
             - mv node_modules ./.amplify-hosting/compute/default
       artifacts:
         baseDirectory: .amplify-hosting
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

Amplify will automatically deploy your website and update it when you push a commit to your repository.

See [AWS’s Astro deployment guide](https://docs.aws.amazon.com/amplify/latest/userguide/get-started-astro.html) for more info.

## S3 static website hosting

[Section titled “S3 static website hosting”](#s3-static-website-hosting)

S3 is the starting point of any application. It is where your project files and other assets are stored. S3 charges for file storage and number of requests. You can find more information about S3 in the [AWS documentation](https://aws.amazon.com/s3/).

1. Create an S3 bucket with your project’s name.

   Tip

   The bucket name should be globally unique. We recommend a combination of your project name and the domain name of your site.

2. Disable **“Block all public access”**. By default, AWS sets all buckets to be private. To make it public, you need to uncheck the “Block public access” checkbox in the bucket’s properties.

3. Upload your built files located in `dist` to S3. You can do this manually in the console or use the AWS CLI. If you use the AWS CLI, use the following command after [authenticating with your AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html):

   ```plaintext
   aws s3 cp dist/ s3://<BUCKET_NAME>/ --recursive
   ```

4. Update your bucket policy to allow public access. You can find this setting in the bucket’s **Permissions > Bucket policy**.

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::<BUCKET_NAME>/*"
       }
     ]
   }
   ```

   Caution

   Do not forget to replace `<BUCKET_NAME>` with the name of your bucket.

5. Enable website hosting for your bucket. You can find this setting in the bucket’s **Properties > Static website hosting**. Set your index document to `index.html` and your error document to `404.html`. Finally, you can find your new website URL in the bucket’s **Properties > Static website hosting**.

   Note

   If you are deploying a single-page application (SPA), set your error document to `index.html`.

## S3 with CloudFront

[Section titled “S3 with CloudFront”](#s3-with-cloudfront)

CloudFront is a web service that provides content delivery network (CDN) capabilities. It is used to cache content of a web server and distribute it to end users. CloudFront charges for the amount of data transferred. Adding CloudFront to your S3 bucket is more cost-effective and provides a faster delivery.

To connect S3 with CloudFront, create a CloudFront distribution with the following values:

- **Origin domain:** Your S3 bucket static website endpoint. You can find your endpoint in your S3 bucket’s **Properties > Static website hosting**. Alternative, you can select your s3 bucket and click on the callout to replace your bucket address with your bucket static endpoint.
- **Viewer protocol policy:** “Redirect to HTTPS”

This configuration will serve your site using the CloudFront CDN network. You can find your CloudFront distribution URL in the bucket’s **Distributions > Domain name**.

Note

When connecting CloudFront to an S3 static website endpoint, you rely on S3 bucket policies for access control. See [S3 static website hosting](#s3-static-website-hosting) section for more information about bucket policies.

## Continuous deployment with GitHub Actions

[Section titled “Continuous deployment with GitHub Actions”](#continuous-deployment-with-github-actions)

There are many ways to set up continuous deployment for AWS. One possibility for code hosted on GitHub is to use [GitHub Actions](https://github.com/features/actions) to deploy your website every time you push a commit.

1. Create a new policy in your AWS account using [IAM](https://aws.amazon.com/iam/) with the following permissions. This policy will allow you to upload built files to your S3 bucket and invalidate the CloudFront distribution files when you push a commit.

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
         {
             "Sid": "VisualEditor0",
             "Effect": "Allow",
             "Action": [
                 "s3:PutObject",
                 "s3:ListBucket",
                 "s3:DeleteObject",
                 "cloudfront:CreateInvalidation"
             ],
             "Resource": [
                 "<DISTRIBUTION_ARN>",
                 "arn:aws:s3:::<BUCKET_NAME>/*",
                 "arn:aws:s3:::<BUCKET_NAME>"
             ]
         }
     ]
   }
   ```

   Caution

   Do not forget to replace `<DISTRIBUTION_ARN>` and `<BUCKET_NAME>`. You can find the DISTRIBUTION\_ARN in **CloudFront > Distributions > Details**.

2. Create a new IAM user and attach the policy to the user. This will provide your `AWS_SECRET_ACCESS_KEY` and `AWS_ACCESS_KEY_ID`.

3. Add this sample workflow to your repository at `.github/workflows/deploy.yml` and push it to GitHub. You will need to add `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `BUCKET_ID`, and `DISTRIBUTION_ID` as “secrets” to your repository on GitHub under **Settings** > **Secrets** > **Actions**. Click `New repository secret` to add each one.

   ```yaml
   name: Deploy Website


   on:
     push:
       branches:
         - main


   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Configure AWS Credentials
           uses: aws-actions/configure-aws-credentials@v1
           with:
             aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
             aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
             aws-region: us-east-1
         - name: Install modules
           run: npm ci
         - name: Build application
           run: npm run build
         - name: Deploy to S3
           run: aws s3 sync --delete ./dist/ s3://${{ secrets.BUCKET_ID }}
         - name: Create CloudFront invalidation
           run: aws cloudfront create-invalidation --distribution-id ${{ secrets.DISTRIBUTION_ID }} --paths "/*"
   ```

   Note

   Your `BUCKET_ID` is the name of your S3 bucket. Your `DISTRIBUTION_ID` is your CloudFront distribution ID. You can find your CloudFront distribution ID in **CloudFront > Distributions > ID**

## Community Resources

[Section titled “Community Resources”](#community-resources)

- [Deploy Astro to AWS Amplify](https://www.launchfa.st/blog/deploy-astro-aws-amplify)
- [Deploy Astro to AWS Elastic Beanstalk](https://www.launchfa.st/blog/deploy-astro-aws-elastic-beanstalk)
- [Deploy Astro to Amazon ECS on AWS Fargate](https://www.launchfa.st/blog/deploy-astro-aws-fargate)
- [Troubleshooting SSR Amplify Deployments](https://docs.aws.amazon.com/amplify/latest/userguide/troubleshooting-ssr-deployment.html)

# Deploy your Astro Site to AWS with Flightcontrol

> How to deploy your Astro site to AWS with Flightcontrol

You can deploy an Astro site using [Flightcontrol](https://www.flightcontrol.dev?ref=astro), which provides fully-automated deployments to your AWS account.

Supports both static and SSR Astro sites.

## How to Deploy

[Section titled “How to Deploy”](#how-to-deploy)

1. Create a Flightcontrol account at [app.flightcontrol.dev/signup](https://app.flightcontrol.dev/signup?ref=astro)

2. Go to [app.flightcontrol.dev/projects/new/1](https://app.flightcontrol.dev/projects/new/1)

3. Connect your GitHub account and select your repo

4. Select your desired “Config Type”:

   - `GUI` (all config managed through Flightcontrol dashboard) where you will select the `Astro Static` or `Astro SSR` preset
   - `flightcontrol.json` (“infrastructure as code” option where all config is in your repo) where you will select an Astro example config, then add it to your codebase as `flightcontrol.json`

5. Adjust any configuration as needed

6. Click “Create Project” and complete any required steps (like linking your AWS account).

### SSR Setup

[Section titled “SSR Setup”](#ssr-setup)

To deploy with SSR support, make sure you first set up the [`@astrojs/node`](/en/guides/integrations-guide/node/) adapter. Then, follow the steps above, choosing the appropriate configurations for Astro SSR.

# Deploy your Astro Site to AWS with SST

> How to deploy your Astro site to AWS with SST

You can deploy an Astro site to AWS using [SST](https://sst.dev), an open-source framework for deploying modern full-stack applications with SSG and SSR support.

You can also use any additional SST components like cron jobs, Buckets, Queues, etc while maintaining type-safety.

## Quickstart

[Section titled “Quickstart”](#quickstart)

1. Create an astro project.

2. Run `npx sst@latest init`.

3. It should detect that you are using Astro and ask you to confirm.

4. Once you’re ready for deployment you can run `npx sst deploy --stage production`.

You can also read [the full Astro on AWS with SST tutorial](https://sst.dev/docs/start/aws/astro) that will guide you through the steps.

### SST components

[Section titled “SST components”](#sst-components)

To use any [additional SST components](https://sst.dev/docs/), add them to `sst.config.ts`.

sst.config.ts

```ts
const bucket = new sst.aws.Bucket("MyBucket", {
  access: "public",
});
new sst.aws.Astro("MyWeb", {
  link: [bucket],
});
```

And then access them in your `.astro` file.

```astro
---
import { Resource } from "sst"
console.log(Resource.MyBucket.name)
---
```

Consult the [SST docs on linking resources](https://sst.dev/docs/linking) to learn more.

If you have any questions, you can [ask in the SST Discord](https://discord.gg/sst).
