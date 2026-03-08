Deploying your App

# AWS via SST

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/aws-via-sst.mdx)

[SST](https://sst.dev/) is a framework for deploying applications to any cloud provider. It has a built-in way to deploy SolidStart apps to AWS Lambda. For additional details, you can [visit their docs](https://sst.dev/docs/).

***

## [Quick start](/guides/deployment-options/aws-via-sst#quick-start)

1. [Create a SolidStart app](/solid-start/getting-started).

2. In your project, init SST.

npmpnpmyarnbundeno

```
npx sst@latest init
```

```
pnpx sst@latest init
```

```
yarn dlx sst@latest init
```

```
bunx sst@latest init
```

```
dpx sst@latest init
```

3. This will detect your SolidStart app and ask you to update your `app.config.ts`.

```
server: {   preset: "aws-lambda-streaming"}
```

4. When you are ready, you can deploy your app using:

npmpnpmyarnbundeno

```
npx sst@latest deploy --stage production
```

```
pnpx sst@latest deploy --stage production
```

```
yarn dlx sst@latest deploy --stage production
```

```
bunx sst@latest deploy --stage production
```

```
dpx sst@latest deploy --stage production
```

You can [read the full tutorial on the SST docs](https://sst.dev/docs/start/aws/solid).

***

## [Deploy to a Container](/guides/deployment-options/aws-via-sst#deploy-to-a-container)

You can also deploy your SolidStart app to a [container](https://sst.dev/docs/start/aws/solid#containers) using SST.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/deployment-options/aws-via-sst.mdx\&page=https://docs.solidjs.com/guides/deployment-options/aws-via-sst)

On this page

1. [Overview](#_top)
2. [Quick start](#quick-start)
3. [Deploy to a Container](#deploy-to-a-container)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/aws-via-sst.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/deployment-options/aws-via-sst.mdx\&page=https://docs.solidjs.com/guides/deployment-options/aws-via-sst)
