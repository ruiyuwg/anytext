# AWS Amplify

**Preset:** `aws_amplify`

:read-more{title="AWS Amplify Hosting" to="https://aws.amazon.com/amplify"}

## Deploy to AWS Amplify Hosting

::tip
Integration with this provider is possible with [zero configuration](https://nitro.build/deploy/#zero-config-providers).
::

::steps{level="4"}

#### Login to the [AWS Amplify Hosting Console](https://console.aws.amazon.com/amplify/){rel=""nofollow""}

#### Click on "Get Started" > Amplify Hosting (Host your web app)

#### Select and authorize access to your Git repository provider and select the main branch

#### Choose a name for your app, make sure build settings are auto-detected and optionally set requirement environment variables under the advanced section

#### Optionally, select Enable SSR logging to enable server-side logging to your Amazon CloudWatch account

#### Confirm configuration and click on "Save and Deploy"

::

## Advanced Configuration

You can configure advanced options of this preset using `awsAmplify` option.

```ts [nitro.config.ts]
import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  awsAmplify: {
      // catchAllStaticFallback: true,
      // imageOptimization: { path: "/_image", cacheControl: "public, max-age=3600, immutable" },
      // imageSettings: { ... },
      // runtime: "nodejs18.x", // default: "nodejs18.x" | "nodejs16.x" | "nodejs20.x"
  }
})
```

### `amplify.yml`

You might need a custom `amplify.yml` file for advanced configuration. Here are two template examples:

::code-group

```yml [amplify.yml]
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - nvm use 18 && node --version
        - corepack enable && npx --yes nypm install
    build:
      commands:
        - pnpm build
  artifacts:
    baseDirectory: .amplify-hosting
    files:
      - "**/*"
```

```yml [amplify.yml (monorepo)]
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
          - nvm use 18 && node --version
          - corepack enable && npx --yes nypm install
        build:
          commands:
            - pnpm --filter website1 build
      artifacts:
        baseDirectory: apps/website1/.amplify-hosting
        files:
          - '**/*'
      buildPath: /
    appRoot: apps/website1
```

::
