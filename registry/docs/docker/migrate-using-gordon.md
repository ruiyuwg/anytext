When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Migrate using Gordon

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

Availability: Experimental

Requires: Docker Desktop [4.38.0](https://docs.docker.com/desktop/release-notes/#4380) or later

You can use Gordon to automatically migrate your Dockerfile to use Docker Hardened Images (DHI).

1. Ensure Gordon is [enabled](https://docs.docker.com/ai/gordon/#enable-ask-gordon).

2. In the terminal, navigate to the directory containing your Dockerfile.

3. Start a conversation with the assistant:

   ```bash
   docker ai
   ```

4. Type:

   ```console
   "Migrate my dockerfile to DHI"
   ```

5. Follow the conversation with the assistant. The assistant will edit your Dockerfile, so when it requests access to the filesystem and more, type `yes` to allow the assistant to proceed.

When the migration is complete, you see a success message:

```text
The migration to Docker Hardened Images (DHI) is complete. The updated Dockerfile
successfully builds the image, and no vulnerabilities were detected in the final image.
The functionality and optimizations of the original Dockerfile have been preserved.
```

> Important
>
> As with any AI tool, you must verify the assistant's edits and test your image.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/migration/migrate-with-ai.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fmigration%2fmigrate-with-ai%2f\&labels=status%2Ftriage)
