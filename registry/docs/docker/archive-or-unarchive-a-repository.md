Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Archive or unarchive a repository

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

You can archive a repository on Docker Hub to mark it as read-only and indicate that it's no longer actively maintained. This helps prevent the use of outdated or unsupported images in workflows. Archived repositories can also be unarchived if needed.

Docker Hub highlights repositories that haven't been updated in over a year by displaying an icon ( ![outdated icon](.././images/outdated-icon.webp) ) next to them on the [**Repositories** page](https://hub.docker.com/repositories/). Consider reviewing these highlighted repositories and archiving them if necessary.

When a repository is archived, the following occurs:

- The repository information can't be modified.
- New images can't be pushed to the repository.
- An **Archived** label is displayed on the public repository page.
- Users can still pull the images.

You can unarchive an archived repository to remove the archived state. When unarchived, the following occurs:

- The repository information can be modified.
- New images can be pushed to the repository.
- The **Archived** label is removed on the public repository page.

## [Archive a repository](#archive-a-repository)

1. Sign in to [Docker Hub](https://hub.docker.com).

2. Select **My Hub** > **Repositories**.

   A list of your repositories appears.

3. Select a repository.

   The **General** page for the repository appears.

4. Select the **Settings** tab.

5. Select **Archive repository**.

6. Enter the name of your repository to confirm.

7. Select **Archive**.

## [Unarchive a repository](#unarchive-a-repository)

1. Sign in to [Docker Hub](https://hub.docker.com).

2. Select **My Hub** > **Repositories**.

   A list of your repositories appears.

3. Select a repository.

   The **General** page for the repository appears.

4. Select the **Settings** tab.

5. Select **Unarchive repository**.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/docker-hub/repos/archive.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdocker-hub%2frepos%2farchive%2f\&labels=status%2Ftriage)

Table of contents
