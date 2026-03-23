-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Enum ManagedInstance.Types.CurrentAction (2.14.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public enum ManagedInstance.Types.CurrentAction
```

Reference documentation and code samples for the Compute Engine v1 API enum ManagedInstance.Types.CurrentAction.

\[Output Only\] The current action that the managed instance group has scheduled for the instance. Possible values: - NONE The instance is running, and the managed instance group does not have any scheduled actions for this instance. - CREATING The managed instance group is creating this instance. If the group fails to create this instance, it will try again until it is successful. - CREATING\_WITHOUT\_RETRIES The managed instance group is attempting to create this instance only once. If the group fails to create this instance, it does not try again and the group's targetSize value is decreased instead. - RECREATING The managed instance group is recreating this instance. - DELETING The managed instance group is permanently deleting this instance. - ABANDONING The managed instance group is abandoning this instance. The instance will be removed from the instance group and from any target pools that are associated with this group. - RESTARTING The managed instance group is restarting the instance. - REFRESHING The managed instance group is applying configuration changes to the instance without stopping it. For example, the group can update the target pool list for an instance without stopping that instance. - VERIFYING The managed instance group has created the instance and it is in the process of being verified. Additional supported values which may be not listed in the enum directly due to technical reasons: STOPPING SUSPENDING

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Fields

**Name**

**Description**

`Abandoning`

The managed instance group is abandoning this instance. The instance will be removed from the instance group and from any target pools that are associated with this group.

`Creating`

The managed instance group is creating this instance. If the group fails to create this instance, it will try again until it is successful.

`CreatingWithoutRetries`

The managed instance group is attempting to create this instance only once. If the group fails to create this instance, it does not try again and the group's targetSize value is decreased.

`Deleting`

The managed instance group is permanently deleting this instance.

`None`

The managed instance group has not scheduled any actions for this instance.

`Recreating`

The managed instance group is recreating this instance.

`Refreshing`

The managed instance group is applying configuration changes to the instance without stopping it. For example, the group can update the target pool list for an instance without stopping that instance.

`Restarting`

The managed instance group is restarting this instance.

`Resuming`

The managed instance group is resuming this instance.

`Starting`

The managed instance group is starting this instance.

`UndefinedCurrentAction`

A value indicating that the enum field is not set.

`Verifying`

The managed instance group is verifying this already created instance. Verification happens every time the instance is (re)created or restarted and consists of: 1. Waiting until health check specified as part of this managed instance group's autohealing policy reports HEALTHY. Note: Applies only if autohealing policy has a health check specified 2. Waiting for addition verification steps performed as post-instance creation (subject to future extensions).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
