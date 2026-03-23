## Data retention controls for abuse monitoring

Abuse monitoring logs may contain certain customer content, such as prompts and responses, as well as metadata derived from that customer content, such as classifier outputs. By default, abuse monitoring logs are generated for all API feature usage and retained for up to 30 days, unless we are legally required to retain the logs for longer.

Eligible customers may have their customer content excluded from these abuse monitoring logs by getting approved for the [Zero Data Retention](#zero-data-retention) or [Modified Abuse Monitoring](#modified-abuse-monitoring) controls. Currently, these controls are subject to prior approval by OpenAI and acceptance of additional requirements. Approved customers may select between Modified Abuse Monitoring or Zero Data Retention for their API Organization or project.

Customers who enable Modified Abuse Monitoring or Zero Data Retention are responsible for ensuring their users abide by OpenAI's policies for safe and responsible use of AI and complying with any moderation and reporting requirements under applicable law.

Get in touch with our [sales team](https://openai.com/contact-sales) to learn more about these offerings and inquire about eligibility.

### Modified Abuse Monitoring

Modified Abuse Monitoring excludes customer content (other than image and file inputs in rare cases, as described [below](#image-and-file-inputs)) from abuse monitoring logs across all API endpoints, while still allowing the customer to take advantage of the full capabilities of the OpenAI platform.

### Zero Data Retention

Zero Data Retention excludes customer content from abuse monitoring logs, in the same way as Modified Abuse Monitoring.

Additionally, Zero Data Retention changes some endpoint behavior: the `store` parameter for `/v1/responses` and `v1/chat/completions` will always be treated as `false`, even if the request attempts to set the value to `true`.

Besides those specific behavior changes, the endpoints and capabilities listed as No for Zero Data Retention Eligible in the table below may still store application state, even if Zero Data Retention is enabled.

### Configuring data retention controls

Once your organization has been approved for data retention controls, you'll see a **Data Retention** tab within [Settings → Organization → Data controls](https://platform.openai.com/settings/organization/data-controls/data-retention). From that tab, you can configure data retention controls at both the organization and project level.

- **Organization-level controls:** Choose between Zero Data Retention or Modified Abuse Monitoring for your entire organization.
- **Project-level controls:** For each project, select `default` to inherit the organization-level setting, explicitly pick Zero Data Retention or Modified Abuse Monitoring, or select **None** to disable these controls for that project.

### Storage requirements and retention controls per endpoint

The table below indicates when application state is stored for each endpoint. Zero Data Retention eligible endpoints will not store any data. Zero Data Retention ineligible endpoints or capabilities may store application state when used, even if you have Zero Data Retention enabled.

| Endpoint                   | Data used for training | Abuse monitoring retention |  Application state retention   |  Zero Data Retention eligible  |
| -------------------------- | :--------------------: | :------------------------: | :----------------------------: | :----------------------------: |
| `/v1/chat/completions`     |           No           |          30 days           | None, see below for exceptions | Yes, see below for limitations |
| `/v1/responses`            |           No           |          30 days           | None, see below for exceptions | Yes, see below for limitations |
| `/v1/conversations`        |           No           |       Until deleted        |         Until deleted          |               No               |
| `/v1/conversations/items`  |           No           |       Until deleted        |         Until deleted          |               No               |
| `/v1/chatkit/threads`      |           No           |       Until deleted        |         Until deleted          |               No               |
| `/v1/assistants`           |           No           |          30 days           |         Until deleted          |               No               |
| `/v1/threads`              |           No           |          30 days           |         Until deleted          |               No               |
| `/v1/threads/messages`     |           No           |          30 days           |         Until deleted          |               No               |
| `/v1/threads/runs`         |           No           |          30 days           |         Until deleted          |               No               |
| `/v1/threads/runs/steps`   |           No           |          30 days           |         Until deleted          |               No               |
| `/v1/vector_stores`        |           No           |          30 days           |         Until deleted          |               No               |
| `/v1/images/generations`   |           No           |          30 days           |              None              | Yes, see below for limitations |
| `/v1/images/edits`         |           No           |          30 days           |              None              | Yes, see below for limitations |
| `/v1/images/variations`    |           No           |          30 days           |              None              | Yes, see below for limitations |
| `/v1/embeddings`           |           No           |          30 days           |              None              |              Yes               |
| `/v1/audio/transcriptions` |           No           |            None            |              None              |              Yes               |
| `/v1/audio/translations`   |           No           |            None            |              None              |              Yes               |
| `/v1/audio/speech`         |           No           |          30 days           |              None              |              Yes               |
| `/v1/files`                |           No           |          30 days           |        Until deleted\*         |               No               |
| `/v1/fine_tuning/jobs`     |           No           |          30 days           |         Until deleted          |               No               |
| `/v1/evals`                |           No           |          30 days           |         Until deleted          |               No               |
| `/v1/batches`              |           No           |          30 days           |         Until deleted          |               No               |
| `/v1/moderations`          |           No           |            None            |              None              |              Yes               |
| `/v1/completions`          |           No           |          30 days           |              None              |              Yes               |
| `/v1/realtime`             |           No           |          30 days           |              None              |              Yes               |
| `/v1/videos`               |           No           |          30 days           |              None              |               No               |

#### `/v1/chat/completions`

- Audio outputs application state is stored for 1 hour to enable [multi-turn conversations](https://developers.openai.com/api/docs/guides/audio).
- When Zero Data Retention is enabled for an organization, the `store` parameter will always be treated as `false`, even if the request attempts to set the value to `true`.
- See [image and file inputs](#image-and-file-inputs).
- Extended prompt caching requires storing key/value tensors to GPU-local storage as application state. This storage requirement means that requests leveraging extended prompt caching are not Zero Data Retention eligible. To learn more, see the [prompt caching guide](https://developers.openai.com/api/docs/guides/prompt-caching#prompt-cache-retention).

#### `/v1/responses`

- The Responses API has a 30 day Application State retention period by default, or when the `store` parameter is set to `true`. Response data will be stored for at least 30 days.
- When Zero Data Retention is enabled for an organization, the `store` parameter will always be treated as `false`, even if the request attempts to set the value to `true`.
- Background mode stores response data for roughly 10 minutes to enable polling, so it is not compatible with Zero Data Retention even though `background=true` is still accepted for legacy ZDR keys. Modified Abuse Monitoring (MAM) projects can continue to use background mode.
- Audio outputs application state is stored for 1 hour to enable [multi-turn conversations](https://developers.openai.com/api/docs/guides/audio).
- See [image and file inputs](#image-and-file-inputs).
- MCP servers (used with the [remote MCP server tool](https://developers.openai.com/api/docs/guides/tools-remote-mcp)) are third-party services, and data sent to an MCP server is subject to their data retention policies.
- OpenAI-hosted containers cannot be used when Zero Data Retention is enabled. [Hosted Shell](https://developers.openai.com/api/docs/guides/tools-shell#hosted-shell-quickstart) and [Code Interpreter](https://developers.openai.com/api/docs/guides/tools-code-interpreter) can be used with [Modified Abuse Monitoring](https://developers.openai.com/api/docs/guides/your-data#modified-abuse-monitoring) instead.
- Extended prompt caching requires storing key/value tensors to GPU-local storage as application state. This storage requirement means that requests leveraging extended prompt caching are not Zero Data Retention eligible. To learn more, see the [prompt caching guide](https://developers.openai.com/api/docs/guides/prompt-caching#prompt-cache-retention).
- For server-side compaction, no data is retained when `store="false"`.
- We support [Skills](https://developers.openai.com/api/docs/guides/tools-skills) in two form factors, both local execution and hosted container-based execution. Skills running in OpenAI-hosted containers cannot be used when Zero Data Retention is enabled.
- Data transmitted to third-party services over network connections is subject to their data retention policies.

#### `/v1/assistants`, `/v1/threads`, and `/v1/vector_stores`

- Objects related to the Assistants API are deleted from our servers 30 days after you delete them via the API or the dashboard. Objects that are not deleted via the API or dashboard are retained indefinitely.

#### `/v1/images`

- Image generation is Zero Data Retention compatible when using `gpt-image-1`, `gpt-image-1.5`, and `gpt-image-1-mini`, not when using `dall-e-3` or `dall-e-2`.

#### `/v1/files`

- Files can be manually deleted via the API or the dashboard, or can be automatically deleted by setting the `expires_after` parameter. See [here](https://developers.openai.com/api/docs/api-reference/files/create#files_create-expires_after) for more information.

#### `/v1/videos`

- The `v1/videos` is not compatible with data retention controls. If your organization has data retention controls enabled, configure a project with its retention setting set to **None** as described in [Configuring data retention controls](#configuring-data-retention-controls) to use `/v1/videos` with that project.

#### Image and file inputs

Images and files may be uploaded as inputs to `/v1/responses` (including when using the Computer Use tool), `/v1/chat/completions`, and `/v1/images`. Image and file inputs are scanned for CSAM content upon submission. If the classifier detects potential CSAM content, the image will be retained for manual review, even if Zero Data Retention or Modified Abuse Monitoring is enabled.

#### Web Search

Web Search is ZDR eligible. Web Search with live internet access is not HIPAA eligible and is not covered by a BAA. Web Search in offline/cache-only mode (`external_web_access: false`) is HIPAA eligible and covered by a BAA when used with an API key from a ZDR-enabled project within a ZDR organization. This HIPAA/BAA guidance applies only to the Responses API `web_search` tool. Note: Preview variants (`web_search_preview`) ignore this parameter and behave as if `external_web_access` is `true`. We recommend using `web_search`.
