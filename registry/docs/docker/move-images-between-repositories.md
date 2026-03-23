When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Move images between repositories

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Consolidating and organizing your Docker images across repositories can streamline your workflows, whether you're managing personal projects or contributing to an organization. This topic explains how to move images between Docker Hub repositories, ensuring that your content remains accessible and organized under the correct accounts or namespaces.

> Note
>
> For bulk migrations, multi-arch images, or scripted workflows, see [Bulk migrate Docker images](https://docs.docker.com/docker-hub/repos/manage/hub-images/bulk-migrate/).

## [Personal to personal](#personal-to-personal)

When consolidating personal repositories, you can pull private images from the initial repository and push them into another repository owned by you. To avoid losing your private images, perform the following steps:

1. [Sign up](https://app.docker.com/signup) for a new Docker account with a personal subscription. (Be sure to verify your account after you've signed up.)

2. Sign in to [Docker](https://app.docker.com/login) using your original Docker account

3. Pull your images:

   ```console
   $ docker pull namespace1/docker101tutorial
   ```

4. Tag your private images with your newly created Docker username, for example:

   ```console
   $ docker tag namespace1/docker101tutorial new_namespace/docker101tutorial
   ```

5. Using `docker login` from the CLI, sign in with your newly created Docker account, and push your newly tagged private images to your new Docker account namespace:

   ```console
   $ docker push new_namespace/docker101tutorial
   ```

The private images that existed in your previous account are now available in your new account.

## [Personal to an organization](#personal-to-an-organization)

To avoid losing your private images, you can pull your private images from your personal account and push them to an organization that's owned by you.

1. Navigate to [Docker Hub](https://hub.docker.com) and select **My Hub**.

2. Select the applicable organization and verify that your user account is a member of the organization.

3. Sign in to [Docker Hub](https://hub.docker.com) using your original Docker account, and pull your images:

   ```console
   $ docker pull namespace1/docker101tutorial
   ```

4. Tag your images with your new organization namespace:

   ```console
   $ docker tag namespace1/docker101tutorial <new_org>/docker101tutorial
   ```

5. Push your newly tagged images to your new org namespace:

   ```console
   $ docker push new_org/docker101tutorial
   ```

The private images that existed in your user account are now available for your organization.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/docker-hub/repos/manage/hub-images/move.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdocker-hub%2frepos%2fmanage%2fhub-images%2fmove%2f\&labels=status%2Ftriage)

Table of contents
