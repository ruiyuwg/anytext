# Deploy your Astro Site to Google Cloud

> How to deploy your Astro site to the web using Google Cloud.

[Google Cloud](https://cloud.google.com/) is a full-featured web app hosting platform that can be used to deploy an Astro site.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

### Cloud Storage (static only)

[Section titled “Cloud Storage (static only)”](#cloud-storage-static-only)

1. [Create a new GCP project](https://console.cloud.google.com/projectcreate), or select one you already have.

2. Create a new bucket under [Cloud Storage](https://cloud.google.com/storage).

3. Give it a name and the other required settings.

4. Upload your `dist` folder into it or upload using [Cloud Build](https://cloud.google.com/build).

5. Enable public access by adding a new permission to `allUsers` called `Storage Object Viewer`.

6. Edit the website configuration and add `ìndex.html` as the entrypoint and `404.html` as the error page.

### Cloud Run (SSR and static)

[Section titled “Cloud Run (SSR and static)”](#cloud-run-ssr-and-static)

Cloud Run is a serverless platform that allows you to run a container without having to manage any infrastructure. It can be used to deploy both static and SSR sites.

#### Prepare the Service

[Section titled “Prepare the Service”](#prepare-the-service)

1. [Create a new GCP project](https://console.cloud.google.com/projectcreate), or select one you already have.

2. Make sure the [Cloud Run API](https://console.cloud.google.com/apis/library/run.googleapis.com) is enabled.

3. Create a new service.

#### Create Dockerfile & Build the Container

[Section titled “Create Dockerfile & Build the Container”](#create-dockerfile--build-the-container)

Before you can deploy your Astro site to Cloud Run, you need to create a Dockerfile that will be used to build the container. Find more information about [how to use Docker with Astro](/en/recipes/docker/#creating-a-dockerfile) in our recipe section.

Once the Dockerfile is created, build it into an image and push it to Google Cloud. There are a few ways to accomplish this:

**Build locally using Docker**:

Use the `docker build` command to build the image, `docker tag` to give it a tag, then `docker push` to push it to a registry. In the case of Google Cloud, [`Artifact Registry`](https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling) is the easiest option, but you can also use [Docker Hub](https://hub.docker.com/).

```bash
# build your container
docker build .


docker tag SOURCE_IMAGE HOSTNAME/PROJECT-ID/TARGET-IMAGE:TAG


# Push your image to a registry
docker push HOSTNAME/PROJECT-ID/IMAGE:TAG
```

Change the following values in the commands above to match your project:

- `SOURCE_IMAGE`: the local image name or image ID.
- `HOSTNAME`: the registry host (`gcr.io`, `eu.gcr.io`, `asia.gcr.io`, `us.gcr.io`, `docker.io`).
- `PROJECT`: your Google Cloud project ID.
- `TARGET-IMAGE`: the name for the image when it’s stored in the registry.
- `TAG` is the version associated with the image.

[Read more in the Google Cloud docs.](https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)

**Using another tool**:

You can use a CI/CD tool that supports Docker, like [GitHub Actions](https://github.com/marketplace/actions/push-to-gcr-github-action).

**Build using [Cloud Build](https://cloud.google.com/build)**:

Instead of building the Dockerfile locally, you can instruct Google Cloud to build the image remotely. See the [Google Cloud Build documentation here](https://cloud.google.com/build/docs/build-push-docker-image).

#### Deploying the container

[Section titled “Deploying the container”](#deploying-the-container)

Deployment can be handled manually in your terminal [using `gcloud`](https://cloud.google.com/run/docs/deploying#service) or automatically using [Cloud Build](https://cloud.google.com/build) or any other CI/CD system.

Need public access?

Don’t forget to add the permission `Cloud Run Invoker` to the `allUsers` group in the Cloud Run permissions settings!

# Deploy your Astro Site to Heroku

> How to deploy your Astro site to the web using Heroku.

[Heroku](https://www.heroku.com/) is a platform-as-a-service for building, running, and managing modern apps in the cloud. You can deploy an Astro site to Heroku using this guide.

Caution

The following instructions use [the deprecated `heroku-static-buildpack`](https://github.com/heroku/heroku-buildpack-static#warning-heroku-buildpack-static-is-deprecated). Please see [Heroku’s documentation for using `heroku-buildpack-nginx`](https://github.com/dokku/heroku-buildpack-nginx) instead.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

2. Create a Heroku account by [signing up](https://signup.heroku.com/).

3. Run `heroku login` and fill in your Heroku credentials:

   ```bash
   $ heroku login
   ```

4. Create a file called `static.json` in the root of your project with the below content:

   static.json

   ```json
   {
     "root": "./dist"
   }
   ```

   This is the configuration of your site; read more at [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static).

5. Set up your Heroku git remote:

   ```bash
   # version change
   $ git init
   $ git add .
   $ git commit -m "My site ready for deployment."


   # creates a new app with a specified name
   $ heroku apps:create example


   # set buildpack for static sites
   $ heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git
   ```

6. Deploy your site:

   ```bash
   # publish site
   $ git push heroku master


   # opens a browser to view the Dashboard version of Heroku CI
   $ heroku open
   ```
