-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Enum DiskInstantiationConfig.Types.InstantiateFrom (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public enum InstantiateFrom
```

Specifies whether to include the disk and what image to use. Possible values are: - source-image: to use the same image that was used to create the source instance's corresponding disk. Applicable to the boot disk and additional read-write disks. - source-image-family: to use the same image family that was used to create the source instance's corresponding disk. Applicable to the boot disk and additional read-write disks. - custom-image: to use a user-provided image url for disk creation. Applicable to the boot disk and additional read-write disks. - attach-read-only: to attach a read-only disk. Applicable to read-only disks. - do-not-include: to exclude a disk from the template. Applicable to additional read-write disks, local SSDs, and read-only disks.

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/1.1.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Fields

**Name**

**Description**

`AttachReadOnly`

Attach the existing disk in read-only mode. The request will fail if the disk was attached in read-write mode on the source instance. Applicable to: read-only disks.

`Blank`

Create a blank disk. The disk will be created unformatted. Applicable to: additional read-write disks, local SSDs.

`CustomImage`

Use the custom image specified in the custom\_image field. Applicable to: boot disk, additional read-write disks.

`Default`

Use the default instantiation option for the corresponding type of disk. For boot disk and any other R/W disks, new custom images will be created from each disk. For read-only disks, they will be attached in read-only mode. Local SSD disks will be created as blank volumes.

`DoNotInclude`

Do not include the disk in the instance template. Applicable to: additional read-write disks, local SSDs, read-only disks.

`SourceImage`

Use the same source image used for creation of the source instance's corresponding disk. The request will fail if the source VM's disk was created from a snapshot. Applicable to: boot disk, additional read-write disks.

`SourceImageFamily`

Use the same source image family used for creation of the source instance's corresponding disk. The request will fail if the source image of the source disk does not belong to any image family. Applicable to: boot disk, additional read-write disks.

`UndefinedInstantiateFrom`

A value indicating that the enum field is not set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
