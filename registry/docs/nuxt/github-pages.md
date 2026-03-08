# GitHub Pages

Nuxt supports deploying to [GitHub Pages](https://pages.github.com/){rel=""nofollow""} with minimal configuration.

::caution
GitHub Pages only support static sites, Nuxt will pre-render your application to static HTML files.
::

::caution
If you are **not** using a custom domain, you need to set `NUXT_APP_BASE_URL` to your repository-slug for your build step.

**Example**: `https://<user>.github.io/<repository>/`: `NUXT_APP_BASE_URL=/<repository>/ npx nuxt build --preset github_pages`
::

## Setup

Follow the steps to [create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site){rel=""nofollow""}.

## Deployment

Here is an example GitHub Actions workflow to deploy your site to GitHub Pages using the `github_pages` preset:

```yaml [.github/workflows/deploy.yml]
# https://github.com/actions/deploy-pages#usage
name: Deploy to GitHub Pages
on:
  workflow_dispatch:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: corepack enable
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      # Pick your own package manager and build script
      - run: npm install
      - run: npx nuxt build --preset github_pages
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./.output/public
  # Deployment job
  deploy:
    # Add a dependency to the build job
    needs: build
    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write      # to deploy to Pages
      id-token: write   # to verify the deployment originates from an appropriate source
    # Deploy to the github_pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    # Specify runner + deployment step
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

::read-more

Head over **Nitro documentation** to learn more about the github-pages deployment preset.
::

# GitLab Pages

Nuxt supports deploying on the [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages){rel=""nofollow""} with minimal configuration.

::caution
GitLab Pages only support static sites, Nuxt will pre-render your application to static HTML files.
::

::caution
If you are **not** using a custom domain, you need to set `NUXT_APP_BASE_URL` to your repository-slug for your build step.

**Example**: `https://<group/user>.gitlab.io/<repository>/`: `NUXT_APP_BASE_URL=/<repository>/ npm run generate`
::

## Deployment

1. Here is an example GitLab Pages workflow to deploy your site to GitLab Pages:

```yaml [.gitlab-ci.yml]
# Job name has to be `pages`. See https://docs.gitlab.com/ee/user/project/pages/#how-it-works
pages:
   image: node
   before_script:
      - npm ci --cache .npm --prefer-offline
   script:
      # Specify the steps involved to build your app here
      - npm run generate
   cache: # https://docs.gitlab.com/ee/ci/caching/#cache-nodejs-dependencies
      key:
         files:
         - package-lock.json
      paths:
         - .npm/
   artifacts:
      paths:
         # The directory that contains the built files to be published
         - .output/public
   # The directory that contains the built files to be published
   publish: .output/public
   rules:
      # This ensures that only pushes to the default branch 
      # will trigger a pages deploy
      - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
```

## Learn more

::read-more

Head over **GitLab Pages default domain names and URLs** to learn more about the GitLab Pages default domain names.
::

# Heroku

Nuxt supports deploying on [Heroku](https://heroku.com/){rel=""nofollow""} with minimal configuration.

## Using the Heroku CLI

1. Create a new Heroku app.
   ```bash [Terminal]
   heroku create myapp
   ```
2. Configure Heroku to use the nodejs buildpack.
   ```bash [Terminal]
   heroku buildpacks:set heroku/nodejs
   ```
3. Configure your app.
   ```bash [Terminal]
   heroku config:set SERVER_PRESET=heroku
   ```
4. Ensure you have `start` and `build` commands in your `package.json` file.
   ```json [package.json]
   {
     "scripts": {
       "build": "nuxt build",
       "start": "node .output/server/index.mjs"
     }
   }
   ```

## Learn more

::read-more{target="\_blank" to="https://nitro.unjs.io/deploy/providers/heroku"}
Head over **Nitro documentation** to learn more about the Heroku deployment preset.
::

# Hostinger

## Deploy using Git

1. Push your code to a GitHub repository.
2. Log in to [hPanel](https://hpanel.hostinger.com){rel=""nofollow""}, go to **Websites** and click **Add Website**.
3. Select **Node.js Apps**, then choose **Import Git Repository**.
4. Authorize Hostinger to access your GitHub account and select your repository.
5. Hostinger will automatically detect your Nuxt app and suggest build settings.
6. Click **Deploy** — your application will be built and go live automatically.

After deployment, every push to your repository will trigger a new build and redeploy your application automatically.

## Deploy by uploading files

1. Compress your project files into a `.zip` archive.
2. In hPanel, go to **Websites → Add Website → Node.js Apps**, then select **Upload your website files**.
3. Upload the `.zip` file and confirm the build settings.
4. Click **Deploy**.

Learn more about [Node.js deployments](https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/){rel=""nofollow""} on Hostinger.

# IIS

## Using IISnode

1. Install the latest LTS version of [Node.js](https://nodejs.org/en/){rel=""nofollow""} on your Windows Server.
2. Install [IISnode](https://github.com/azure/iisnode/releases){rel=""nofollow""}
3. Install [IIS `URLRewrite` Module](https://www.iis.net/downloads/microsoft/url-rewrite){rel=""nofollow""}.
4. In IIS, add `.mjs` as a new mime type and set its content type to `application/javascript`.
5. Build you application with the following command:
   ```bash [Terminal]
   npx nuxi build --preset=iis_node
   ```
6. Deploy the contents of your `.output` folder to your website in IIS.

## More options

::read-more{target="\_blank" to="https://nitro.unjs.io/deploy/providers/iis"}
Head over **Nitro documentation** to learn more about the IIS deployment presets.
::

# Koyeb

Nuxt supports deploying on the [Koyeb serverless platform](https://www.koyeb.com/docs){rel=""nofollow""} with minimal configuration.

## Setup

1. Create a new Koyeb app for Nuxt following the [guide](https://www.koyeb.com/docs/deploy/nuxt){rel=""nofollow""}.
2. Set the `engines.node` field in your project's `package.json` file to a [Koyeb-supported version of Node.js](https://www.koyeb.com/docs/build-and-deploy/build-from-git/nodejs#runtime){rel=""nofollow""}:
   ```json [package.json]
   {
     "engines": {
         "node": "20.x"
     }
   }
   ```
3. Ensure that `build` and `start` scripts are defined within the project's `package.json` file to define how to build and run the application:
   ```json [package.json]
   {
     "scripts": {
         "build": "nuxt build",
         "start": "node .output/server/index.mjs"
     }
   }
   ```
4. During deployment, you'll need to configure environment variables. In your service settings, set the following [environment variable](https://www.koyeb.com/docs/build-and-deploy/environment-variables){rel=""nofollow""}:
   ```bash
   SERVER_PRESET=koyeb
   ```
5. Click "Deploy" to build and deploy your Nuxt app.

## Learn more

::read-more{target="\_blank" to="https://nitro.unjs.io/deploy/providers/koyeb"}
Head over **Nitro documentation** to learn more about the Koyeb deployment preset.
::
