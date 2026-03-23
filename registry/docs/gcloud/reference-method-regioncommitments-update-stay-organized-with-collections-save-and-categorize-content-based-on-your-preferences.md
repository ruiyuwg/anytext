-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [Compute Engine](https://docs.cloud.google.com/compute/docs)
-   [APIs & Reference](https://docs.cloud.google.com/compute/docs/apis)

Send feedback

# Method: regionCommitments.update Stay organized with collections Save and categorize content based on your preferences.

 

Updates the specified commitment with the data included in the request. regionCommitments.update is performed only on selected fields included as part of update-mask. Only the following fields can be updated: autoRenew and plan.

### HTTP request

`PATCH https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/commitments/{commitment}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax. To know more about valid error responses that can be thrown by this HTTP request, please refer to the [service error catalog](/compute/docs/reference/rest/v1/errors)

### Path parameters

 

Parameters

`project`

`string`

Project ID for this request.

`region`

`string`

Name of the region for this request.

`commitment`

`string`

Name of the commitment that you want to update.

### Query parameters

 

Parameters

`requestId`

`string`

An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.

The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).

### Request body

The request body contains data with the following structure:

JSON representation

{
  "kind": string,
  "id": string,
  "creationTimestamp": string,
  "name": string,
  "description": string,
  "region": string,
  "selfLink": string,
  "status": enum,
  "statusMessage": string,
  "plan": enum,
  "startTimestamp": string,
  "endTimestamp": string,
  "category": enum,
  "resources": \[
    {
      "type": enum,
      "amount": string,
      "acceleratorType": string
    }
  \],
  "type": enum,
  "reservations": \[
    {
      "specificReservation": {
        "instanceProperties": {
          "machineType": string,
          "guestAccelerators": \[
            {
              "acceleratorType": string,
              "acceleratorCount": integer
            }
          \],
          "minCpuPlatform": string,
          "localSsds": \[
            {
              "diskSizeGb": string,
              "interface": enum
            }
          \],
          "locationHint": string
        },
        "count": string,
        "inUseCount": string,
        "assuredCount": string,
        "sourceInstanceTemplate": string
      },
      "aggregateReservation": {
        "vmFamily": enum,
        "reservedResources": \[
          {
            "accelerator": {
              "acceleratorCount": integer,
              "acceleratorType": string
            }
          }
        \],
        "inUseResources": \[
          {
            "accelerator": {
              "acceleratorCount": integer,
              "acceleratorType": string
            }
          }
        \],
        "workloadType": enum
      },
      "deleteAtTime": string,
      "deleteAfterDuration": {
        "seconds": string,
        "nanos": integer
      },
      "kind": string,
      "id": string,
      "creationTimestamp": string,
      "selfLink": string,
      "zone": string,
      "description": string,
      "name": string,
      "commitment": string,
      "linkedCommitments": \[
        string
      \],
      "specificReservationRequired": boolean,
      "status": enum,
      "shareSettings": {
        "shareType": enum,
        "projectMap": {
          string: {
            "projectId": string
          },
          ...
        }
      },
      "satisfiesPzs": boolean,
      "resourcePolicies": {
        string: string,
        ...
      },
      "resourceStatus": {
        "specificSkuAllocation": {
          "sourceInstanceTemplateId": string,
          "utilizations": {
            string: string,
            ...
          }
        },
        "reservationMaintenance": {
          "upcomingGroupMaintenance": {
            "type": enum,
            "canReschedule": boolean,
            "windowStartTime": string,
            "windowEndTime": string,
            "latestWindowStartTime": string,
            "maintenanceStatus": enum,
            "maintenanceOnShutdown": boolean,
            "maintenanceReasons": \[
              enum
            \]
          },
          "maintenanceOngoingCount": integer,
          "maintenancePendingCount": integer,
          "schedulingType": enum,
          "subblockInfraMaintenanceOngoingCount": integer,
          "subblockInfraMaintenancePendingCount": integer,
          "instanceMaintenanceOngoingCount": integer,
          "instanceMaintenancePendingCount": integer
        },
        "reservationBlockCount": integer,
        "healthInfo": {
          "healthStatus": enum,
          "healthyBlockCount": integer,
          "degradedBlockCount": integer
        }
      },
      "reservationSharingPolicy": {
        "serviceShareType": enum
      },
      "deploymentType": enum,
      "advancedDeploymentControl": {
        "reservationOperationalMode": enum
      },
      "enableEmergentMaintenance": boolean,
      "protectionTier": enum,
      "schedulingType": enum,
      "params": {
        "resourceManagerTags": {
          string: string,
          ...
        }
      },
      "earlyAccessMaintenance": enum
    }
  \],
  "licenseResource": {
    "license": string,
    "amount": string,
    "coresPerLicense": string
  },
  "autoRenew": boolean,
  "mergeSourceCommitments": \[
    string
  \],
  "splitSourceCommitment": string,
  "resourceStatus": {
    "customTermEligibilityEndTimestamp": string
  },
  "existingReservations": \[
    string
  \],
  "customEndTimestamp": string
}

 

Fields

`kind`

`string`

Output only. Type of the resource. Always `compute#commitment` for commitments.

`id`

`string ([uint64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. The unique identifier for the resource. This identifier is defined by the server.

`creationTimestamp`

`string`

Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`name`

`string`

Name of the commitment. You must specify a name when you purchase the commitment. The name must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

`description`

`string`

An optional description of the commitment. You can provide this property when you create the resource.

`region`

`string`

Output only. URL of the region where the commitment and committed resources are located.

`selfLink`

`string`

Output only. Server-defined URL for the resource.

`status`

`enum`

Output only. Status of the commitment with regards to eventual expiration (each commitment has an end date defined). Status can be one of the following values: `NOT_YET_ACTIVE`, ``` ACTIVE``, or `EXPIRED`.`` ```

`statusMessage`

`string`

Output only. An optional, human-readable explanation of the status.

`plan`

`enum`

The minimum time duration that you commit to purchasing resources. The plan that you choose determines the preset term length of the commitment (which is 1 year or 3 years) and affects the discount rate that you receive for your resources. Committing to a longer time duration typically gives you a higher discount rate. The supported values for this field are `TWELVE_MONTH` (1 year), and `THIRTY_SIX_MONTH` (3 years).

`startTimestamp`

`string`

Output only. Commitment start time in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`endTimestamp`

`string`

Output only. Commitment end time in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`category`

`enum`

The category of the commitment; specifies whether the commitment is for hardware or software resources. Category `MACHINE` specifies that you are committing to hardware machine resources such as `VCPU` or `MEMORY`, listed in `resources`. Category `LICENSE` specifies that you are committing to software licenses, listed in `licenseResources`. Note that if you specify `MACHINE` commitments, then you must also specify a `type` to indicate the machine series of the hardware resource that you are committing to.

`resources[]`

`object`

The list of all the hardware resources, with their types and amounts, that you want to commit to. Specify as a separate entry in the list for each individual resource type.

`resources[].type`

`enum`

The type of hardware resource that you want to specify. You can specify any of the following values:

-   `VCPU`
-   `MEMORY`
-   `LOCAL_SSD`
-   `ACCELERATOR`

Specify as a separate entry in the list for each individual resource type.

`resources[].amount`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

The quantity of the hardware resource that you want to commit to purchasing (in a type-dependent unit).

-   For vCPUs, you must specify an integer value.
-   For memory, you specify the amount of MB that you want. The value you specify must be a multiple of 256 MB, with up to 6.5 GB of memory per every vCPU.
-   For GPUs, you must specify an integer value.
-   For Local SSD disks, you must specify the amount in GB. The size of a single Local SSD disk is 375 GB.

`resources[].acceleratorType`

`string`

Name of the accelerator type or GPU resource. Specify this field only when the type of hardware resource is ACCELERATOR.

`type`

`enum`

The type of commitment; specifies the [machine series](https://cloud.google.com/compute/docs/machine-resource#vm_terminology) for which you want to commit to purchasing resources. The choice of machine series affects the discount rate and the eligible resource types.

The type must be one of the following: `ACCELERATOR_OPTIMIZED`, `ACCELERATOR_OPTIMIZED_A3`, `ACCELERATOR_OPTIMIZED_A3_MEGA`, `COMPUTE_OPTIMIZED`, `COMPUTE_OPTIMIZED_C2D`, `COMPUTE_OPTIMIZED_C3`, `COMPUTE_OPTIMIZED_C3D`, `COMPUTE_OPTIMIZED_H3`, `GENERAL_PURPOSE`, `GENERAL_PURPOSE_C4`, `GENERAL_PURPOSE_E2`, `GENERAL_PURPOSE_N2`, `GENERAL_PURPOSE_N2D`, `GENERAL_PURPOSE_N4`, `GENERAL_PURPOSE_T2D`, `GRAPHICS_OPTIMIZED`, `GRAPHICS_OPTIMIZED_G4`, `MEMORY_OPTIMIZED`, `MEMORY_OPTIMIZED_M3`, `MEMORY_OPTIMIZED_X4`, `STORAGE_OPTIMIZED_Z3`. For example, type `MEMORY_OPTIMIZED` specifies a commitment that applies only to eligible resources of memory optimized M1 and M2 machine series. Type `GENERAL_PURPOSE` specifies a commitment that applies only to eligible resources of general purpose N1 machine series.

`reservations[]`

`object`

The list of new reservations that you want to create and attach to this commitment.

You must attach reservations to your commitment if your commitment specifies any GPUs or Local SSD disks. For more information, see [Attach reservations to resource-based commitments](https://cloud.google.com/compute/docs/instances/reservations-with-commitments#attach-reservations-to-resource-cuds).

Specify this property only if you want to create new reservations to attach. To attach existing reservations, specify the `existingReservations` property instead.

`reservations[].specificReservation`

`object`

Reservation for instances with specific machine shapes.

`reservations[].specificReservation.instanceProperties`

`object`

The instance properties for the reservation.

`reservations[].specificReservation.instanceProperties.machineType`

`string`

Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory. This also includes specifying custom machine type following custom-NUMBER\_OF\_CPUS-AMOUNT\_OF\_MEMORY pattern.

`reservations[].specificReservation.instanceProperties.guestAccelerators[]`

`object`

Specifies accelerator type and count.

`reservations[].specificReservation.instanceProperties.guestAccelerators[].acceleratorType`

`string`

Full or partial URL of the accelerator type resource to attach to this instance. For example: `projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100` If you are creating an instance template, specify only the accelerator name. See [GPUs on Compute Engine](/compute/docs/gpus#introduction) for a full list of accelerator types.

`reservations[].specificReservation.instanceProperties.guestAccelerators[].acceleratorCount`

`integer`

The number of the guest accelerator cards exposed to this instance.

`reservations[].specificReservation.instanceProperties.minCpuPlatform`

`string`

Minimum cpu platform the reservation.

`reservations[].specificReservation.instanceProperties.localSsds[]`

`object`

Specifies amount of local ssd to reserve with each instance. The type of disk is local-ssd.

`reservations[].specificReservation.instanceProperties.localSsds[].diskSizeGb`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Specifies the size of the disk in base-2 GB.

`reservations[].specificReservation.instanceProperties.localSsds[].interface`

`enum`

Specifies the disk interface to use for attaching this disk, which is either `SCSI` or `NVME`. The default is `SCSI`. For performance characteristics of SCSI over NVMe, see [Local SSD performance](/compute/docs/disks#localssds).

`reservations[].specificReservation.instanceProperties.locationHint`

`string`

An opaque location hint used to place the allocation close to other resources. This field is for use by internal tools that use the public API.

`reservations[].specificReservation.count`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Specifies the number of resources that are allocated.

`reservations[].specificReservation.inUseCount`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. Indicates how many instances are in use.

`reservations[].specificReservation.assuredCount`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. Indicates how many instances are actually usable currently.

`reservations[].specificReservation.sourceInstanceTemplate`

`string`

Specifies the instance template to create the reservation. If you use this field, you must exclude the `instanceProperties` field.

This field is optional, and it can be a full or partial URL. For example, the following are all valid URLs to an instance template:

-   `[https://www.googleapis.com/compute/v1/projects/](https://www.googleapis.com/compute/v1/projects/)project/global/instanceTemplates/instanceTemplate`
-   `projects/project/global/instanceTemplates/instanceTemplate`
-   `global/instanceTemplates/instanceTemplate`

`reservations[].aggregateReservation`

`object`

Reservation for aggregated resources, providing shape flexibility.

`reservations[].aggregateReservation.vmFamily`

`enum`

The VM family that all instances scheduled against this reservation must belong to.

`reservations[].aggregateReservation.reservedResources[]`

`object`

regionCommitments.list of reserved resources (CPUs, memory, accelerators).

`reservations[].aggregateReservation.reservedResources[].accelerator`

`object`

Properties of accelerator resources in this reservation.

`reservations[].aggregateReservation.reservedResources[].accelerator.acceleratorCount`

`integer`

Number of accelerators of specified type.

`reservations[].aggregateReservation.reservedResources[].accelerator.acceleratorType`

`string`

Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l"

`reservations[].aggregateReservation.inUseResources[]`

`object`

Output only. regionCommitments.list of resources currently in use.

`reservations[].aggregateReservation.inUseResources[].accelerator`

`object`

Properties of accelerator resources in this reservation.

`reservations[].aggregateReservation.inUseResources[].accelerator.acceleratorCount`

`integer`

Number of accelerators of specified type.

`reservations[].aggregateReservation.inUseResources[].accelerator.acceleratorType`

`string`

Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l"

`reservations[].aggregateReservation.workloadType`

`enum`

The workload type of the instances that will target this reservation.

`reservations[].deleteAtTime`

`string`

Absolute time in future when the reservation will be auto-deleted by Compute Engine. Timestamp is represented in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`reservations[].deleteAfterDuration`

`object`

Duration time relative to reservation creation when Compute Engine will automatically delete this resource.

`reservations[].deleteAfterDuration.seconds`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min \* 60 min/hr \* 24 hr/day \* 365.25 days/year \* 10000 years

`reservations[].deleteAfterDuration.nanos`

`integer`

Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 `seconds` field and a positive `nanos` field. Must be from 0 to 999,999,999 inclusive.

`reservations[].kind`

`string`

Output only. Type of the resource. Always `compute#reservations` for reservations.

`reservations[].id`

`string ([uint64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. The unique identifier for the resource. This identifier is defined by the server.

`reservations[].creationTimestamp`

`string`

Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`reservations[].selfLink`

`string`

Output only. Server-defined fully-qualified URL for this resource.

`reservations[].zone`

`string`

Zone in which the reservation resides. A zone must be provided if the reservation is created within a commitment.

`reservations[].description`

`string`

An optional description of this resource. Provide this property when you create the resource.

`reservations[].name`

`string`

The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

`reservations[].commitment`

`string`

Output only. Full or partial URL to a parent commitment. This field displays for reservations that are tied to a commitment.

`reservations[].linkedCommitments[]`

`string`

Output only. Full or partial URL to parent commitments. This field displays for reservations that are tied to multiple commitments.

`reservations[].specificReservationRequired`

`boolean`

Indicates whether the reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from this reservation.

`reservations[].status`

`enum`

Output only. The status of the reservation.

-   `CREATING`: Reservation resources are being allocated.
-   `READY`: Reservation resources have been allocated, and the reservation is ready for use.
-   `DELETING`: Reservation deletion is in progress.
-   `UPDATING`: Reservation update is in progress.

`reservations[].shareSettings`

`object`

Specify share-settings to create a shared reservation. This property is optional. For more information about the syntax and options for this field and its subfields, see the guide for [creating a shared reservation.](https://cloud.google.com/compute/docs/instances/reservations-shared#creating_a_shared_reservation)

`reservations[].shareSettings.shareType`

`enum`

Type of sharing for this shared-reservation

`reservations[].shareSettings.projectMap[]`

`map (key: string, value: object)`

A map of project id and project config. This is only valid when shareType's value is SPECIFIC\_PROJECTS.

`reservations[].shareSettings.projectMap[].projectId`

`string`

The project ID, should be same as the key of this project config in the parent map.

`reservations[].satisfiesPzs`

`boolean`

Output only. Reserved for future use.

`reservations[].resourcePolicies`

`map (key: string, value: string)`

Resource policies to be added to this reservation. The key is defined by user, and the value is resource policy url. This is to define placement policy with reservation.

`reservations[].resourceStatus`

`object`

Output only. Status information for Reservation resource.

`reservations[].resourceStatus.specificSkuAllocation`

`object`

Allocation Properties of this reservation.

`reservations[].resourceStatus.specificSkuAllocation.sourceInstanceTemplateId`

`string`

ID of the instance template used to populate reservation properties.

`reservations[].resourceStatus.specificSkuAllocation.utilizations`

`map (key: string, value: string ([int64](https://developers.google.com/discovery/v1/type-format) format))`

Per service utilization breakdown. The Key is the Google Cloud managed service name.

`reservations[].resourceStatus.reservationMaintenance`

`object`

Maintenance information for this reservation

`reservations[].resourceStatus.reservationMaintenance.upcomingGroupMaintenance`

`object`

Maintenance information on this group of VMs.

`reservations[].resourceStatus.reservationMaintenance.upcomingGroupMaintenance.type`

`enum`

Defines the type of maintenance.

`reservations[].resourceStatus.reservationMaintenance.upcomingGroupMaintenance.canReschedule`

`boolean`

Indicates if the maintenance can be customer triggered.

`reservations[].resourceStatus.reservationMaintenance.upcomingGroupMaintenance.windowStartTime`

`string`

The current start time of the maintenance window. This timestamp value is in RFC3339 text format.

`reservations[].resourceStatus.reservationMaintenance.upcomingGroupMaintenance.windowEndTime`

`string`

The time by which the maintenance disruption will be completed. This timestamp value is in RFC3339 text format.

`reservations[].resourceStatus.reservationMaintenance.upcomingGroupMaintenance.latestWindowStartTime`

`string`

The latest time for the planned maintenance window to start. This timestamp value is in RFC3339 text format.

`reservations[].resourceStatus.reservationMaintenance.upcomingGroupMaintenance.maintenanceStatus`

`enum`

`reservations[].resourceStatus.reservationMaintenance.upcomingGroupMaintenance.maintenanceOnShutdown`

`boolean`

Indicates whether the UpcomingMaintenance will be triggered on VM shutdown.

`reservations[].resourceStatus.reservationMaintenance.upcomingGroupMaintenance.maintenanceReasons[]`

`enum`

The reasons for the maintenance. Only valid for vms.

`reservations[].resourceStatus.reservationMaintenance.maintenanceOngoingCount`

`integer`

Progress for ongoing maintenance for this group of VMs/hosts. Describes number of hosts in the block that have ongoing maintenance.

`reservations[].resourceStatus.reservationMaintenance.maintenancePendingCount`

`integer`

Progress for ongoing maintenance for this group of VMs/hosts. Describes number of hosts in the block that have pending maintenance.

`reservations[].resourceStatus.reservationMaintenance.schedulingType`

`enum`

The type of maintenance for the reservation.

`reservations[].resourceStatus.reservationMaintenance.subblockInfraMaintenanceOngoingCount`

`integer`

Describes number of subblock Infrastructure that has ongoing maintenance. Here, Subblock Infrastructure Maintenance pertains to upstream hardware contained in the Subblock that is necessary for a VM Family(e.g. NVLink Domains). Not all VM Families will support this field.

`reservations[].resourceStatus.reservationMaintenance.subblockInfraMaintenancePendingCount`

`integer`

Describes number of subblock Infrastructure that has pending maintenance. Here, Subblock Infrastructure Maintenance pertains to upstream hardware contained in the Subblock that is necessary for a VM Family (e.g. NVLink Domains). Not all VM Families will support this field.

`reservations[].resourceStatus.reservationMaintenance.instanceMaintenanceOngoingCount`

`integer`

Describes number of instances that have ongoing maintenance.

`reservations[].resourceStatus.reservationMaintenance.instanceMaintenancePendingCount`

`integer`

Describes number of instances that have pending maintenance.

`reservations[].resourceStatus.reservationBlockCount`

`integer`

The number of reservation blocks associated with this reservation.

`reservations[].resourceStatus.healthInfo`

`object`

Output only. Health information for the reservation.

`reservations[].resourceStatus.healthInfo.healthStatus`

`enum`

The health status of the reservation.

`reservations[].resourceStatus.healthInfo.healthyBlockCount`

`integer`

The number of reservation blocks that are healthy.

`reservations[].resourceStatus.healthInfo.degradedBlockCount`

`integer`

The number of reservation blocks that are degraded.

`reservations[].reservationSharingPolicy`

`object`

Specify the reservation sharing policy. If unspecified, the reservation will not be shared with Google Cloud managed services.

`reservations[].reservationSharingPolicy.serviceShareType`

`enum`

Sharing config for all Google Cloud services.

`reservations[].deploymentType`

`enum`

Specifies the deployment strategy for this reservation.

`reservations[].advancedDeploymentControl`

`object`

Advanced control for cluster management, applicable only to DENSE deployment type reservations.

`reservations[].advancedDeploymentControl.reservationOperationalMode`

`enum`

Indicates chosen reservation operational mode for the reservation.

`reservations[].enableEmergentMaintenance`

`boolean`

Indicates whether Compute Engine allows unplanned maintenance for your VMs; for example, to fix hardware errors.

`reservations[].protectionTier`

`enum`

Protection tier for the workload which specifies the workload expectations in the event of infrastructure failures at data center (e.g. power and/or cooling failures).

`reservations[].schedulingType`

`enum`

The type of maintenance for the reservation.

`reservations[].params`

`object`

Input only. Additional params passed with the request, but not persisted as part of resource payload.

`reservations[].params.resourceManagerTags`

`map (key: string, value: string)`

Input only. Resource manager tags to be bound to the reservation. Tag keys and values have the same definition as [resource manager tags](https://cloud.google.com/resource-manager/docs/tags/tags-overview). Keys and values can be either in numeric format, such as `tagKeys/{tag_key_id}` and `tagValues/{tag_value_id}` or in namespaced format such as `{org_id|projectId}/{tag_key_short_name}` and `{tag_value_short_name}`. The field is ignored (both PUT & PATCH) when empty.

`reservations[].earlyAccessMaintenance`

`enum`

Indicates the early access maintenance for the reservation. If this field is absent or set to NO\_EARLY\_ACCESS, the reservation is not enrolled in early access maintenance and the standard notice applies.

`licenseResource`

`object`

The license specification required as part of a license commitment.

`licenseResource.license`

`string`

The applicable license URI.

`licenseResource.amount`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

The number of licenses you plan to purchase.

`licenseResource.coresPerLicense`

`string`

The number of cores per license.

`autoRenew`

`boolean`

Specifies whether to automatically renew the commitment at the end of its current term. The default value is `false`. If you set the field to `true`, each time your commitment reaches the end of its term, Compute Engine automatically renews it for another term. You can update this field anytime before the commitment expires. For example, if the commitment is set to expire at 12 AM UTC-8 on January 3, 2027, you can update this field until 11:59 PM UTC-8 on January 2, 2027.

`mergeSourceCommitments[]`

`string`

The list of source commitments that you are merging to create the new merged commitment. For more information, see [Merging commitments](https://cloud.google.com/compute/docs/instances/merge-and-split-commitments#merging).

`splitSourceCommitment`

`string`

The source commitment from which you are transferring resources to create the new split commitment. For more information, see [Split commitments](https://cloud.google.com/compute/docs/instances/merge-and-split-commitments#splitting).

`resourceStatus`

`object`

Output only. Status information for Commitment resource.

`resourceStatus.customTermEligibilityEndTimestamp`

`string`

Output only. Indicates the end time of customer's eligibility to send custom term requests in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. Term extension requests that (not the end time in the request) after this time will be rejected.

`existingReservations[]`

`string`

`customEndTimestamp`

`string`

\[Input Only\] Optional, specifies the requested commitment end time in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. Use this option when the desired commitment's end date is later than the start date + term duration.

### Response body

Represents an Operation resource.

Google Compute Engine has three Operation resources:

-   [Global](/compute/docs/reference/rest/v1/globalOperations)
-   [Regional](/compute/docs/reference/rest/v1/regionOperations)
-   [Zonal](/compute/docs/reference/rest/v1/zoneOperations)

You can use an operation resource to manage asynchronous API requests. For more information, read [Handling API responses](/compute/docs/api/how-tos/api-requests-responses#handling_api_responses).

Operations can be global, regional or zonal.

-   For global operations, use the `globalOperations` resource.
-   For regional operations, use the `regionOperations` resource.
-   For zonal operations, use the `zoneOperations` resource.

For more information, read [Global, Regional, and Zonal Resources](/compute/docs/regions-zones/global-regional-zonal-resources).

Note that completed Operation resources have a limited [retention period.](https://cloud.google.com/compute/docs/instances/viewing-compute-operations#operation-retention-period)

If successful, the response body contains data with the following structure:

JSON representation

{
  "kind": string,
  "id": string,
  "creationTimestamp": string,
  "name": string,
  "zone": string,
  "clientOperationId": string,
  "operationType": string,
  "targetLink": string,
  "targetId": string,
  "status": enum,
  "statusMessage": string,
  "user": string,
  "progress": integer,
  "insertTime": string,
  "startTime": string,
  "endTime": string,
  "error": {
    "errors": \[
      {
        "code": string,
        "location": string,
        "message": string,
        "errorDetails": \[
          {
            "errorInfo": {
              "reason": string,
              "domain": string,
              "metadatas": {
                string: string,
                ...
              }
            },
            "quotaInfo": {
              "metricName": string,
              "limitName": string,
              "dimensions": {
                string: string,
                ...
              },
              "limit": number,
              "futureLimit": number,
              "rolloutStatus": enum
            },
            "help": {
              "links": \[
                {
                  "description": string,
                  "url": string
                }
              \]
            },
            "localizedMessage": {
              "locale": string,
              "message": string
            }
          }
        \]
      }
    \]
  },
  "warnings": \[
    {
      "code": enum,
      "message": string,
      "data": \[
        {
          "key": string,
          "value": string
        }
      \]
    }
  \],
  "httpErrorStatusCode": integer,
  "httpErrorMessage": string,
  "selfLink": string,
  "region": string,
  "description": string,
  "operationGroupId": string,

  // Union field `metadata` can be only one of the following:
  "setCommonInstanceMetadataOperationMetadata": {
    "clientOperationId": string,
    "perLocationOperations": {
      string: {
        "state": enum,
        "error": {
          "code": integer,
          "message": string,
          "details": \[
            {
              "@type": string,
              field1: ...,
              ...
            }
          \]
        }
      },
      ...
    }
  },
  "instancesBulkInsertOperationMetadata": {
    "perLocationStatus": {
      string: {
        "status": enum,
        "targetVmCount": integer,
        "createdVmCount": integer,
        "failedToCreateVmCount": integer,
        "deletedVmCount": integer
      },
      ...
    }
  },
  "getVersionOperationMetadata": {
    "inlineSbomInfo": {
      "currentComponentVersions": {
        string: string,
        ...
      },
      "targetComponentVersions": {
        string: string,
        ...
      }
    }
  }
  // End of list of possible types for union field `metadata`.
}

 

Fields

`kind`

`string`

Output only. Type of the resource. Always `compute#operation` for Operation resources.

`id`

`string ([uint64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. The unique identifier for the operation. This identifier is defined by the server.

`creationTimestamp`

`string`

\[Deprecated\] This field is deprecated.

`name`

`string`

Output only. Name of the operation.

`zone`

`string`

Output only. The URL of the zone where the operation resides. Only applicable when performing per-zone operations.

`clientOperationId`

`string`

Output only. The value of `requestId` if you provided it in the request. Not present otherwise.

`operationType`

`string`

Output only. The type of operation, such as `insert`, `update`, or `delete`, and so on.

`targetLink`

`string`

Output only. The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the disk that the snapshot was created from.

`targetId`

`string ([uint64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. The unique target ID, which identifies a specific incarnation of the target resource.

`status`

`enum`

Output only. The status of the operation, which can be one of the following: `PENDING`, `RUNNING`, or `DONE`.

`statusMessage`

`string`

Output only. An optional textual description of the current status of the operation.

`user`

`string`

Output only. User who requested the operation, for example: `user@example.com` or `alice_smith_identifier (global/workforcePools/example-com-us-employees)`.

`progress`

`integer`

Output only. An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.

`insertTime`

`string`

Output only. The time that this operation was requested. This value is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`startTime`

`string`

Output only. The time that this operation was started by the server. This value is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`endTime`

`string`

Output only. The time that this operation was completed. This value is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

`error`

`object`

Output only. If errors are generated during processing of the operation, this field will be populated.

`error.errors[]`

`object`

Output only. The array of errors encountered while processing this operation.

`error.errors[].code`

`string`

Output only. The error type identifier for this error.

`error.errors[].location`

`string`

Output only. Indicates the field in the request that caused the error. This property is optional.

`error.errors[].message`

`string`

Output only. An optional, human-readable error message.

`error.errors[].errorDetails[]`

`object`

Output only. An optional list of messages that contain the error details. There is a set of defined message types to use for providing details.The syntax depends on the error code. For example, QuotaExceededInfo will have details when the error code is QUOTA\_EXCEEDED.

`error.errors[].errorDetails[].errorInfo`

`object`

`error.errors[].errorDetails[].errorInfo.reason`

`string`

The reason of the error. This is a constant value that identifies the proximate cause of the error. Error reasons are unique within a particular domain of errors. This should be at most 63 characters and match a regular expression of `[A-Z][A-Z0-9_]+[A-Z0-9]`, which represents UPPER\_SNAKE\_CASE.

`error.errors[].errorDetails[].errorInfo.domain`

`string`

The logical grouping to which the "reason" belongs. The error domain is typically the registered service name of the tool or product that generates the error. Example: "pubsub.googleapis.com". If the error is generated by some common infrastructure, the error domain must be a globally unique value that identifies the infrastructure. For Google API infrastructure, the error domain is "googleapis.com".

`error.errors[].errorDetails[].errorInfo.metadatas`

`map (key: string, value: string)`

Additional structured details about this error.

Keys must match a regular expression of `[a-z][a-zA-Z0-9-_]+` but should ideally be lowerCamelCase. Also, they must be limited to 64 characters in length. When identifying the current value of an exceeded limit, the units should be contained in the key, not the value. For example, rather than `{"instanceLimit": "100/request"}`, should be returned as, `{"instanceLimitPerRequest": "100"}`, if the client exceeds the number of instances that can be created in a single (batch) request.

`error.errors[].errorDetails[].quotaInfo`

`object`

`error.errors[].errorDetails[].quotaInfo.metricName`

`string`

The Compute Engine quota metric name.

`error.errors[].errorDetails[].quotaInfo.limitName`

`string`

The name of the quota limit.

`error.errors[].errorDetails[].quotaInfo.dimensions`

`map (key: string, value: string)`

The map holding related quota dimensions.

`error.errors[].errorDetails[].quotaInfo.limit`

`number`

Current effective quota limit. The limit's unit depends on the quota type or metric.

`error.errors[].errorDetails[].quotaInfo.futureLimit`

`number`

Future quota limit being rolled out. The limit's unit depends on the quota type or metric.

`error.errors[].errorDetails[].quotaInfo.rolloutStatus`

`enum`

Rollout status of the future quota limit.

`error.errors[].errorDetails[].help`

`object`

`error.errors[].errorDetails[].help.links[]`

`object`

URL(s) pointing to additional information on handling the current error.

`error.errors[].errorDetails[].help.links[].description`

`string`

Describes what the link offers.

`error.errors[].errorDetails[].help.links[].url`

`string`

The URL of the link.

`error.errors[].errorDetails[].localizedMessage`

`object`

`error.errors[].errorDetails[].localizedMessage.locale`

`string`

The locale used following the specification defined at [https://www.rfc-editor.org/rfc/bcp/bcp47.txt](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Examples are: "en-US", "fr-CH", "es-MX"

`error.errors[].errorDetails[].localizedMessage.message`

`string`

The localized error message in the above locale.

`warnings[]`

`object`

Output only. If warning messages are generated during processing of the operation, this field will be populated.

`warnings[].code`

`enum`

Output only. A warning code, if applicable. For example, Compute Engine returns `NO_RESULTS_ON_PAGE` if there are no results in the response.

`warnings[].message`

`string`

Output only. A human-readable description of the warning code.

`warnings[].data[]`

`object`

Output only. Metadata about this warning in `key: value` format. For example:

"data": \[  {  "key": "scope",  "value": "zones/us-east1-d"  }

`warnings[].data[].key`

`string`

Output only. A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be `scope` and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).

`warnings[].data[].value`

`string`

Output only. A warning data value corresponding to the key.

`httpErrorStatusCode`

`integer`

Output only. If the operation fails, this field contains the HTTP error status code that was returned. For example, a `404` means the resource was not found.

`httpErrorMessage`

`string`

Output only. If the operation fails, this field contains the HTTP error message that was returned, such as `NOT FOUND`.

`selfLink`

`string`

Output only. Server-defined URL for the resource.

`region`

`string`

Output only. The URL of the region where the operation resides. Only applicable when performing regional operations.

`description`

`string`

Output only. A textual description of the operation, which is set when the operation is created.

`operationGroupId`

`string`

Output only. An ID that represents a group of operations, such as when a group of operations results from a `bulkInsert` API request.

Union field `metadata`. Output only. Service-specific metadata attached to this operation. `metadata` can be only one of the following:

`setCommonInstanceMetadataOperationMetadata`

`object`

Output only. If the operation is for projects.setCommonInstanceMetadata, this field will contain information on all underlying zonal actions and their state.

`setCommonInstanceMetadataOperationMetadata.clientOperationId`

`string`

Output only. The client operation id.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[]`

`map (key: string, value: object)`

Output only. Status information per location (location name is key). Example key: zones/us-central1-a

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].state`

`enum`

Output only. Status of the action, which can be one of the following: `PROPAGATING`, `PROPAGATED`, `ABANDONED`, `FAILED`, or `DONE`.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].error`

`object`

Output only. If state is `ABANDONED` or `FAILED`, this field is populated.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].error.code`

`integer`

The status code, which should be an enum value of `google.rpc.Code`.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].error.message`

`string`

A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the `google.rpc.Status.details` field, or localized by the client.

`setCommonInstanceMetadataOperationMetadata.perLocationOperations[].error.details[]`

`object`

A list of messages that carry the error details. There is a common set of message types for APIs to use.

An object containing fields of an arbitrary type. An additional field `"@type"` contains a URI identifying the type. Example: `{ "id": 1234, "@type": "types.example.com/standard/id" }`.

`instancesBulkInsertOperationMetadata`

`object`

`instancesBulkInsertOperationMetadata.perLocationStatus[]`

`map (key: string, value: object)`

Status information per location (location name is key). Example key: zones/us-central1-a

`instancesBulkInsertOperationMetadata.perLocationStatus[].status`

`enum`

Output only. Creation status of BulkInsert operation - information if the flow is rolling forward or rolling back.

`instancesBulkInsertOperationMetadata.perLocationStatus[].targetVmCount`

`integer`

Output only. Count of VMs originally planned to be created.

`instancesBulkInsertOperationMetadata.perLocationStatus[].createdVmCount`

`integer`

Output only. Count of VMs successfully created so far.

`instancesBulkInsertOperationMetadata.perLocationStatus[].failedToCreateVmCount`

`integer`

Output only. Count of VMs that started creating but encountered an error.

`instancesBulkInsertOperationMetadata.perLocationStatus[].deletedVmCount`

`integer`

Output only. Count of VMs that got deleted during rollback.

`getVersionOperationMetadata`

`object`

`getVersionOperationMetadata.inlineSbomInfo`

`object`

`getVersionOperationMetadata.inlineSbomInfo.currentComponentVersions`

`map (key: string, value: string)`

SBOM versions currently applied to the resource. The key is the component name and the value is the version.

`getVersionOperationMetadata.inlineSbomInfo.targetComponentVersions`

`map (key: string, value: string)`

SBOM versions scheduled for the next maintenance. The key is the component name and the value is the version.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/compute`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

In addition to any permissions specified on the fields above, authorization requires one or more of the following [IAM](https://cloud.google.com/iam/docs/) permissions:

-   `compute.commitments.update`

To find predefined roles that contain those permissions, see [Compute Engine IAM Roles](/compute/docs/access/iam).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
