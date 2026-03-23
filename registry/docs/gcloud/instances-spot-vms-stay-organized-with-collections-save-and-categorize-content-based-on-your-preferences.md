-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [Compute Engine](https://docs.cloud.google.com/compute/docs)
-   [Guides](https://docs.cloud.google.com/compute/docs/overview)

Send feedback

# Spot VMs Stay organized with collections Save and categorize content based on your preferences.

This page describes Spot VMs: virtual machine (VM) instances that are excess Compute Engine capacity. Spot VMs have significant discounts, but Compute Engine might preemptively stop or delete (_preempt_) Spot VMs to reclaim the capacity at any time. Spot VMs are the latest version of [preemptible VMs](/compute/docs/instances/preemptible).

Spot VMs are VMs that use the [spot provisioning model](/compute/docs/instances/provisioning-models). This provisioning model lets you obtain resources at much lower prices compared to standard VMs. However, Compute Engine can preempt Spot VMs at any time to reclaim resources. Use Spot VMs to reduce costs for fault-tolerant workloads.

To learn more about Compute Engine VMs in general, read the [Virtual machine instances](/compute/docs/instances) documentation. To learn how to create Spot VMs, read [Create and use Spot VMs](/compute/docs/instances/create-use-spot).

## What are Spot VMs?

Spot VMs are available at much lower prices—[up to 91% discounts](#pricing) for many machine types, GPUs, TPUs, and Local SSDs—compared to the default price for standard VMs. However, Compute Engine might preempt Spot VMs at any time, such as when it needs the resources for other tasks. At this uncertain preemption time, Compute Engine either stops (default) or deletes your Spot VMs depending on your specified termination action for each Spot VM. Spot VMs are excess Compute Engine capacity, so their availability varies based on Compute Engine usage. Spot VMs don't have a minimum or maximum runtime unless you specifically [limit the runtime](/compute/docs/instances/limit-vm-runtime).

If your workloads are fault-tolerant and can withstand possible VM preemption, Spot VMs can reduce your Compute Engine costs significantly. For example, batch processing jobs can run on Spot VMs. If some of those VMs stop during processing, the job slows but does not completely stop. Spot VMs complete your batch processing tasks without placing additional load on your existing VMs and without requiring you to pay full price for additional standard VMs.

## Spot VMs limitations

Spot VMs function like standard VMs but have the following limitations:

-   Compute Engine might preempt Spot VMs to reclaim the resources at any time. Compute Engine preempts Spot VMs for a variety of reasons—for example, system events. The probability that Compute Engine preempts Spot VMs is generally low, but might vary from day to day and from zone to zone depending on current conditions. For more information, see [Preemption selection](#preemption-selection) in this document.
-   Spot VMs are finite Compute Engine resources, so they might not always be available.
-   Spot VMs don't support the following machines:
    -   The A4X machine series
    -   Bare metal instances
-   Spot VMs can't [live migrate](/compute/docs/instances/live-migration-process#limitations) to become standard VMs while they are running or be set to [automatically restart](/compute/docs/instances/setting-instance-scheduling-options#limitations) when there is a [host event](/compute/docs/instances/host-maintenance-overview).
-   Due to the preceding limitations, Spot VMs are not covered by any Service Level Agreement and are excluded from the [Compute Engine SLA](https://cloud.google.com/compute/sla).
-   The [Google Cloud Free Tier](/free/docs/free-cloud-features) credits for Compute Engine don't apply to Spot VMs.

## Preemption of Spot VMs

This section describes how Compute Engine preempts Spot VMs and which VMs are selected for preemption.

### Preemption process

Compute Engine performs the following steps to preempt Spot VMs:

1.  Compute Engine sends a preemption notice to the VM in the form of an [ACPI G2 Soft Off](https://en.wikipedia.org/wiki/Advanced_Configuration_and_Power_Interface#Power_states) signal. You can use a [shutdown script](/compute/docs/instances/create-use-spot#handle-preemption) to handle the preemption notice and complete cleanup actions before the VM stops. The shutdown period for a preemption notice is best effort and up to 30 seconds.
2.  If the Spot VM has not stopped after the shutdown period for the preemption notice, Compute Engine sends an [ACPI G3 Mechanical Off](https://en.wikipedia.org/wiki/Advanced_Configuration_and_Power_Interface#Power_states) signal to the operating system.
3.  The final state of Spot VMs varies depending on your specified _termination action_ for each VM:
    -   If the termination action is set to `STOP` or not specified, then Compute Engine stops the VM, transitioning the VM to a `TERMINATED` [state](/compute/docs/instances/instance-lifecycle).
    -   If the termination action is set to `DELETE`, then Compute Engine deletes the VM.

You can simulate the preemption of a VM by [stopping the VM](/compute/docs/instances/stop-start-instance#stopping_an_instance) or [deleting the VM](/compute/docs/instances/deleting-instance) accordingly.

If the preempted VM was stopped, it still appears in your project, but you are not charged for the VM hours while it remains in a `TERMINATED` state. You can access and recover data from any persistent disks that are attached to the VM, but those disks still incur storage charges until you delete them. As with standard VMs, persistent disks that are marked for auto-delete are deleted when you delete Spot VMs.

If Compute Engine preempts Spot VMs less than one minute after they are created, you are not billed for the use of those VMs. This ensures that you don't pay for Spot VMs unless they have had time to complete a significant amount of work. However, the charges for [premium operating systems](#spot-with-premium-os) are still calculated as normal.

### Preemption selection

Preemption can happen when Spot VMs are in a `RUNNING` state; while in a `TERMINATED` state, Spot VMs are not considered for preemption. As a result, you can reset the preemption process by [stopping](/compute/docs/instances/stopping-or-deleting-an-instance#stop_an_instance) then [restarting](/compute/docs/instances/restarting-an-instance#restarting_a_stopped_instance) Spot VMs, since stopping VMs leaves them in a `TERMINATED` state. You can stop and restart preempted Spot VMs as many times as you would like, as long as there is capacity. Notably, [resetting or rebooting VMs](/compute/docs/instances/reset-instance) instead leaves VMs in a `RUNNING` state and, thus, don't reset the preemption process.

You can't view why any given preemption event occurred. Similar to [resource availability errors](/compute/docs/troubleshooting/troubleshooting-resource-availability), preemption rates can vary in different zones, at different times, or with different resources. For specific suggestions on reducing your preemption rate, see the [best practices](/compute/docs/instances/create-use-spot#best-practices).

## Pricing

Spot prices, the prices for Spot VMs, provide significant discounts for VMs. Spot prices give you discounts of up to 91% off of the default price for many machine types, GPUs, TPUs, and Local SSDs.

**Important:** Spot prices can change up to once every day. Spot prices don't appear in most pricing tables for Compute Engine. For the latest prices, see the [Spot VMs pricing page](https://cloud.google.com/spot-vms/pricing).

Notably, if a preempted VM was stopped, you are not charged for the VM hours while it remains in a `TERMINATED` state. You can access and recover data from any persistent disks that are attached to the VM, but those disks still incur storage charges until you delete them. Learn more about [instance uptime](/compute/vm-instance-pricing#instanceuptime) and [disk pricing](/compute/disks-image-pricing#disk).

To see the latest prices for Spot VMs, refer to the [Spot VMs pricing page](https://cloud.google.com/spot-vms/pricing), use the [Cloud Billing Catalog API](/billing/v1/how-tos/catalog-api), or [sign up for pricing announcements for Spot VMs](https://groups.google.com/g/gce-spot-pricing-announcements).

## Using Spot VMs with Compute Engine

This section provides notable information about using Spot VMs with other Compute Engine offerings. Learn about using Spot VMs with managed instance groups, premium operating systems, local SSDs, and GPUs. Additionally, understand how Spot VMs affect your quotas for Compute Engine resources.

### Spot VMs in a managed instance group

You can create Spot VMs in a [managed instance group](/compute/docs/instance-groups/manager) using the [gcloud CLI](/compute/docs/gcloud-compute), or the [Compute Engine API](/compute/docs/reference/latest/instances). Specify the options for [creating Spot VMs](/compute/docs/instances/create-use-spot#create) in an [instance template](/compute/docs/instance-templates) before you create or update the group.

Managed instance groups can create or add new Spot VMs only when additional Compute Engine resources are available. If these resources are limited, managed instance groups are unable to resize or automatically scale the number of Spot VMs in the group.

Managed instance groups always attempt to maintain their target size or the size specified by the [autoscaler](/compute/docs/autoscaler) for that group. If Compute Engine stops one or more Spot VMs in a managed instance group, the group repeatedly tries to recreate those VMs using the specified [instance template](/compute/docs/instance-templates). If the necessary resources become available again, the group recreates the VMs and maintains the target group size.

### Premium operating systems on Spot VMs

Spot VMs don't reduce the cost of [premium operating systems](/compute/disks-image-pricing#premiumimages) and don't change the way that you're billed for the use of those operating systems. If Compute Engine stops Spot VMs that run a premium operating system, you are billed for that operating system as if you stopped the VMs yourself. The charges for minimum usage still apply, and bills for premium operating systems are still calculated by rounding up to the nearest usage increment.

The machine types on Spot VMs that run premium operating systems are always billed by the second, and follow the prices listed on the [Machine type pricing](https://cloud.google.com/compute/vm-instance-pricing) page.

### Local SSDs on Spot VMs

You can start Spot VMs with [local SSDs](/compute/docs/disks#localssds) and Compute Engine charges you [spot prices](/compute/disks-image-pricing#localssdpricing) for the local SSD usage. Local SSDs attached to Spot VMs work like normal local SSDs, retain the same [data persistence characteristics](/compute/docs/disks/local-ssd#data_persistence), and remain attached for the life of the VM.

Compute Engine doesn't charge you for local SSDs if their VMs are preempted in the first minute after they start running.

For more information about local SSDs, see [Adding local SSDs](/compute/docs/disks/local-ssd).

### GPUs on Spot VMs

You can add GPUs to your Spot VMs at lower [spot prices](https://cloud.google.com/compute/gpus-pricing) for the GPUs. GPUs attached to Spot VMs work like normal GPUs but persist only for the life of the VM. Spot VMs with GPUs follow the same [preemption process](/compute/docs/instances/spot#preemption-process) as all Spot VMs.

Consider requesting dedicated `Preemptible GPU` quota to use for GPUs on Spot VMs. For more information, see [Quotas for Spot VMs](/compute/docs/instances/spot#quotas).

During maintenance events, Spot VMs with GPUs are preempted by default and cannot be automatically restarted. If you want to recreate your VMs after they have been preempted, use a [managed instance group](/compute/docs/instance-groups/manager). Managed instance groups recreate your VM instances if the vCPU, memory, and GPU resources are available.

If you want a warning before your VMs are preempted, or want to configure your VMs to automatically restart after a maintenance event, use standard VMs with a GPU. For standard VMs with GPUs, Compute Engine provides [one hour advance notice](/compute/docs/gpus/gpu-host-maintenance) before preemption.

Compute Engine does not charge you for GPUs if their VMs are preempted in the first minute after they start running.

To learn how to create Spot VMs with GPUs attached, read [Create a VM with attached GPUs](/compute/docs/gpus/create-vm-with-gpus) and [Creating Spot VMs](/compute/docs/instances/create-manage-spot#create). For example, see [Create an A3 Ultra or A4 instance using Spot VMs](/compute/docs/gpus/create-gpu-vm-a3u-a4#create-spot-overview).

### Quotas for Spot VMs

Like other VMs, Spot VMs require available [CPU quotas](/compute/resource-usage#cpu_quota). Additionally, if you plan to use Spot VMs with local SSDs or with GPUs, Spot VMs also require [disk quota](/compute/resource-usage#disk_quota) and [GPU quota](/compute/resource-usage#gpu_quota) respectively.

If you use Spot VMs with these resources and have not requested preemptible quota, Spot VMs consume your standard quota for these resources. If you plan to use Spot VMs, consider requesting preemptible quota for those resources to prevent Spot VMs from consuming your other quotas.

After Compute Engine grants you preemptible quota in a region, all Spot VMs (and any [preemptible VMs](/compute/docs/instances/preemptible)) in that region count against that quota. All standard VMs in that region continue to count against the standard quota. In regions where you don't have preemptible quota, you can use standard quota to launch Spot VMs.

**Note:** Once you request preemptible quota in a region, you are limited to using that quota for Spot VMs in that region. You can't consume standard quota in its place.

Preemptible quota is not visible in the gcloud CLI or Google Cloud console quota pages unless Compute Engine has granted the quota. For more information, see [Allocation quotas for preemptible resources](/compute/resource-usage#allocation_quotas_for_preemptible_resources).

## What's next?

-   [Create and use Spot VMs](/compute/docs/instances/create-use-spot).

## Try it for yourself

If you're new to Google Cloud, create an account to evaluate how Compute Engine performs in real-world scenarios. New customers also get $300 in free credits to run, test, and deploy workloads.

[Try Compute Engine free](https://console.cloud.google.com/freetrial)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
