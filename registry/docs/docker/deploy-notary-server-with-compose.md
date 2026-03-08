Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Deploy Notary Server with Compose

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The easiest way to deploy Notary Server is by using Docker Compose. To follow the procedure on this page, you must have already [installed Docker Compose](https://docs.docker.com/compose/install/).

1. Clone the Notary repository.

   ```console
   $ git clone https://github.com/theupdateframework/notary.git
   ```

2. Build and start Notary Server with the sample certificates.

   ```console
   $ docker compose up -d 
   ```

   For more detailed documentation about how to deploy Notary Server, see the [instructions to run a Notary service](https://github.com/theupdateframework/notary/blob/master/docs/running_a_service.md) as well as [the Notary repository](https://github.com/theupdateframework/notary) for more information.

3. Make sure that your Docker or Notary client trusts Notary Server's certificate before you try to interact with the Notary server.

See the instructions for [Docker](/reference/cli/docker/#notary) or for [Notary](https://github.com/docker/notary#using-notary) depending on which one you are using.

## [If you want to use Notary in production](#if-you-want-to-use-notary-in-production)

Check back here for instructions after Notary Server has an official stable release. To get a head start on deploying Notary in production, see [the Notary repository](https://github.com/theupdateframework/notary).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/engine/security/trust/deploying_notary.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fengine%2fsecurity%2ftrust%2fdeploying_notary%2f\&labels=status%2Ftriage)

Table of contents
