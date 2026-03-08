Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Troubleshoot Docker Offload

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

Docker Offload requires:

- Authentication
- An active internet connection
- No restrictive proxy or firewall blocking traffic to Docker Cloud
- Access to Docker Offload
- Docker Desktop 4.50 or later

Docker Desktop uses Offload to run both builds and containers in the cloud. If builds or containers are failing to run, falling back to local, or reporting session errors, use the following steps to help resolve the issue.

1. Ensure Docker Offload is enabled in Docker Desktop:

   1. Open Docker Desktop and sign in.
   2. Go to **Settings** > **Docker Offload**.
   3. Ensure that **Enable Docker Offload** is toggled on.

2. Use the following command to check if the connection is active:

   ```console
   $ docker offload status
   ```

3. To get more information, run the following command:

   ```console
   $ docker offload diagnose
   ```

4. If you're not connected, start a new session:

   ```console
   $ docker offload start
   ```

5. Verify authentication with `docker login`.

6. If needed, you can sign out and then sign in again:

   ```console
   $ docker logout
   $ docker login
   ```

7. Verify your usage and billing. For more information, see [Docker Offload usage](/offload/usage/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/offload/troubleshoot.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2foffload%2ftroubleshoot%2f\&labels=status%2Ftriage)
