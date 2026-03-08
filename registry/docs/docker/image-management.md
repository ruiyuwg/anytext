Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Image Management

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Beta

Images and image indexes are the foundation of container images within a repository. The following diagram shows the relationship between images and image indexes.

![a pretty wide image](https://docs.docker.com/docker-hub/repos/manage/hub-images/images/image-index.svg)

This structure enables multi-architecture support through a single reference. It is important to note that images are not always referenced by an image index. The following objects are shown in the diagram.

- Image index: An image that points to multiple architecture-specific images (like AMD and ARM), letting a single reference work across different platforms.
- Image: Individual container images that contain the actual configuration and layers for a specific architecture and operating system.

## [Manage repository images and image indexes](#manage-repository-images-and-image-indexes)

Use the following steps to delete one or more items via the graphical user interface. To delete in bulk, see the [deletion API endpoint](/reference/api/registry/latest/#tag/delete).

1. Sign in to [Docker Hub](https://hub.docker.com).

2. Select **My Hub** > **Repositories**.

3. In the list, select a repository.

4. Select **Image Management**.

5. Search, filter, or sort the items.

   - Search: In the search box above the list, specify your search.
   - Filter: In the **Filter by** drop-down, select **Tagged**, **Image index**, or **Image**.
   - Sort: Select the column title for **Size**, **Last pushed**, or **Last pulled**.

   > Note
   >
   > Images that haven't been pulled in over 6 months are marked as **Stale** in the **Status** column.

6. Optional. Delete one or more items.

   1. Select the checkboxes next to the items in the list. Selecting any top-level index also removes any underlying images that aren't referenced elsewhere.
   2. Select **Preview and delete**.
   3. In the window that appears, verify the items that will be deleted and the amount of storage you will reclaim.
   4. Select **Delete forever**.

   > Note
   >
   > Deletion operations may take some time to complete. Timeout errors may occur during the deletion process. The system automatically retries the deletion in the background, and the items will be removed without requiring any action from you.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/docker-hub/repos/manage/hub-images/manage.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdocker-hub%2frepos%2fmanage%2fhub-images%2fmanage%2f\&labels=status%2Ftriage)

Table of contents
