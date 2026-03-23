-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [App Engine](https://docs.cloud.google.com/appengine/docs)
-   [Standard environment](https://docs.cloud.google.com/appengine/docs/standard)
-   [Guides](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)

Send feedback

# Available legacy bundled services Stay organized with collections Save and categorize content based on your preferences.

Go Java PHP Python

The following list shows which services are supported in second-generation runtimes:

App Engine service

Availability in Python

Alternatives

App Identity

Available

Migrate to [Open ID Connect (OIDC) ID tokens](/appengine/migration-center/standard/python/migrate-app-identity) or [Identity Platform](/iap/docs/concepts-overview)

Blobstore

Available

Migrate to [Cloud Storage](/appengine/migration-center/standard/python/migrate-to-cloud-storage)

Capabilities

Available

No alternatives, see the [Google Cloud Service Health dashboard](https://status.cloud.google.com) or the [Google Cloud console support page](https://console.cloud.google.com/support/) for information on service status

Deferred

Available

No alternatives since this API is used with App Engine Task Queues

Images

Available

Migrate to [Cloud Storage](/appengine/docs/standard/serving-static-files#serving_files_from) to serve images directly, or use a third-party content delivery network (CDN) or [image processing library](/appengine/migration-center/standard/services/migrating-services#images)

Logging

Not supported

Use [standard logging libraries](/appengine/docs/standard/writing-application-logs)

Namespaces

Available

No alternatives since this API is used with other App Engine services

Datastore

Available

Migrate to [Datastore client libraries](/datastore/docs/reference/libraries)

Mail

Available

[Migrate to an SMTP-based email service](/appengine/migration-center/standard/python/mail-to-smtp), such as SendGrid, Mailgun, or Mailjet for outbound messaging only

Memcache

Available

Migrate to [Memorystore](/appengine/migration-center/standard/python/memcache-to-memorystore)

Modules

Available

Use environment variables and the [App Engine Admin API](/appengine/docs/admin-api) to obtain information and modify your application's running services

NDB

Available

Migrate to [Cloud NDB](/appengine/migration-center/standard/python/migrate-to-cloud-ndb)

Remote

Not supported

Use Cloud Client Libraries to access resources in other projects

Search

Available

Migrate to [Elasticsearch](https://www.elastic.co/elasticsearch/)

Task Queues

Available

Migrate to [Cloud Tasks for push queues](/appengine/migration-center/standard/python/migrating-push-queues) and [Pub/Sub for pull queues](/appengine/migration-center/standard/python/migrating-pull-queues)

URL Fetch

Available

Migrate to [standard libraries for outbound requests](/appengine/migration-center/standard/python/migrate-outbound-requests)

Users

Available

Migrate to [user authentication options](/appengine/docs/standard/authenticating-users)

For more information, refer to the user guides located on the left-side navigation or see the [API reference documentation](https://docs.cloud.google.com/appengine/docs/standard/python3/reference/services/bundled/google/appengine).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
