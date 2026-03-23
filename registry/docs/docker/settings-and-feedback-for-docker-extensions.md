When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Settings and feedback for Docker Extensions

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Settings](#settings)

### [Turn on or turn off extensions](#turn-on-or-turn-off-extensions)

Docker Extensions is switched on by default. To change your settings:

1. Navigate to **Settings**.
2. Select the **Extensions** tab.
3. Next to **Enable Docker Extensions**, select or clear the checkbox to set your desired state.
4. In the bottom-right corner, select **Apply**.

> Note
>
> If you are an [organization owner](https://docs.docker.com/admin/organization/manage-a-team/#organization-owner), you can turn off extensions for your users. Open the `settings-store.json` file, and set `"extensionsEnabled"` to `false`. The `settings-store.json` file (or `settings.json` for Docker Desktop versions 4.34 and earlier) is located at:
>
> - `~/Library/Group Containers/group.com.docker/settings-store.json` on Mac
> - `C:\Users\[USERNAME]\AppData\Roaming\Docker\settings-store.json` on Windows
>
> This can also be done with [Hardened Docker Desktop](https://docs.docker.com/enterprise/security/hardened-desktop/)

### [Turn on or turn off extensions not available in the Marketplace](#turn-on-or-turn-off-extensions-not-available-in-the-marketplace)

You can install extensions through the Marketplace or through the Extensions SDK tools. You can choose to only allow published extensions. These are extensions that have been reviewed and published in the Extensions Marketplace.

1. Navigate to **Settings**.
2. Select the **Extensions** tab.
3. Next to **Allow only extensions distributed through the Docker Marketplace**, select or clear the checkbox to set your desired state.
4. In the bottom-right corner, select **Apply**.

### [See containers created by extensions](#see-containers-created-by-extensions)

By default, containers created by extensions are hidden from the list of containers in the Docker Desktop Dashboard and the Docker CLI. To make them visible update your settings:

1. Navigate to **Settings**.
2. Select the **Extensions** tab.
3. Next to **Show Docker Extensions system containers**, select or clear the checkbox to set your desired state.
4. In the bottom-right corner, select **Apply**.

> Note
>
> Enabling extensions doesn't use computer resources (CPU / Memory) by itself.
>
> Specific extensions might use computer resources, depending on the features and implementation of each extension, but there is no reserved resources or usage cost associated with enabling extensions.

## [Submit feedback](#submit-feedback)

Feedback can be given to an extension author through a dedicated Slack channel or GitHub. To submit feedback about a particular extension:

1. Navigate to the Docker Desktop Dashboard and select the **Manage** tab. This displays a list of extensions you've installed.
2. Select the extension you want to provide feedback on.
3. Scroll down to the bottom of the extension's description and, depending on the extension, select:
   - Support
   - Slack
   - Issues. You'll be sent to a page outside of Docker Desktop to submit your feedback.

If an extension doesn't provide a way for you to give feedback, contact us and we'll pass on the feedback for you. To provide feedback, select the **Give feedback** to the right of **Extensions Marketplace**.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/settings-feedback.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fsettings-feedback%2f\&labels=status%2Ftriage)

Table of contents
