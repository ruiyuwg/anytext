-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [Compute Engine](https://docs.cloud.google.com/compute/docs)
-   [Guides](https://docs.cloud.google.com/compute/docs/overview)

Send feedback

# Move your workload to a new compute instance Stay organized with collections Save and categorize content based on your preferences.

In certain situations, you might want to move your workload from an existing virtual machine instance (VM) to a newer VM. Reasons to move to a new VM include the following:

-   Take advantage of the new machine types for faster storage or networking speeds. For example, upgrade from C2 to H3 for improved networking bandwidth.
-   Benefit from greater price performance relative to the source VM instance. For example, upgrade from N1 to N4 for greater value on the 5th Generation Intel Xeon processor.
-   Use features only available on the new VM instance. For example, upgrade from N4 to C4 to take advantage of additional performance and maintenance options or upgrade from H3 to H4D to get Cloud RDMA support.
-   Change a virtual machine (VM) instance to a bare metal instance.
-   Add Local SSD disks to your C3 or C3D VM instance.

When upgrading to the newest generation machine series, you might be able to use the simpler procedure described in [Edit the machine type of a compute instance](/compute/docs/instances/changing-machine-type-of-stopped-instance) if the following conditions are met by the current (source) VM:

-   The operation system (OS) version is supported by the new machine series.
-   The disk type of the boot disk attached to the source VM is supported by the new machine series.
-   The VM doesn't use Local SSD storage.
-   Your VM with attached GPUs uses a G2 machine type. See [Add or remove GPUs](/compute/docs/gpus/add-remove-gpus) for details.
-   The VM is using only features that are supported by the new machine series.
-   The VM isn't part of a managed instance group (MIG).
-   You don't need to create additional network interfaces for your instance to use the new features.

## Before you begin

-   If you haven't already, set up [authentication](/compute/docs/authentication). Authentication verifies your identity for access to Google Cloud services and APIs. To run code or samples from a local development environment, you can authenticate to Compute Engine by selecting one of the following options:
    
    Select the tab for how you plan to use the samples on this page:
    
    ### Console
    
    When you use the Google Cloud console to access Google Cloud services and APIs, you don't need to set up authentication.
    
    ### gcloud
    
    1.  [Install](/sdk/docs/install) the Google Cloud CLI. After installation, [initialize](/sdk/docs/initializing) the Google Cloud CLI by running the following command:
        
        gcloud init
        
        If you're using an external identity provider (IdP), you must first [sign in to the gcloud CLI with your federated identity](/iam/docs/workforce-log-in-gcloud).
        
        **Note:** If you installed the gcloud CLI previously, make sure you have the latest version by running `gcloud components update`.
        
    2.  [Set a default region and zone](/compute/docs/gcloud-compute#set_default_zone_and_region_in_your_local_client).
    
    ### REST
    
    To use the REST API samples on this page in a local development environment, you use the credentials you provide to the gcloud CLI.
    
    [Install](/sdk/docs/install) the Google Cloud CLI. After installation, [initialize](/sdk/docs/initializing) the Google Cloud CLI by running the following command:
    
    gcloud init
    
    If you're using an external identity provider (IdP), you must first [sign in to the gcloud CLI with your federated identity](/iam/docs/workforce-log-in-gcloud).
    
    **Note:** If you installed the gcloud CLI previously, make sure you have the latest version by running `gcloud components update`.
    
    For more information, see [Authenticate for using REST](/docs/authentication/rest) in the Google Cloud authentication documentation.
    

### Required roles

To get the permissions that you need to edit or change a VM, ask your administrator to grant you the following IAM roles on the project:

-   [Compute Instance Admin (v1)](/iam/docs/roles-permissions/compute#compute.admin.v1) (`roles/compute.admin.v1`)
-   To change the network type: [Compute Engine Network Admin](/iam/docs/roles-permissions/compute#compute.networkAdmin) (`roles/compute.networkAdmin`)

For more information about granting roles, see [Manage access to projects, folders, and organizations](/iam/docs/granting-changing-revoking-access).

These predefined roles contain the permissions required to edit or change a VM. To see the exact permissions that are required, expand the **Required permissions** section:

#### Required permissions

The following permissions are required to edit or change a VM:

-   To change the machine type:
    -   `compute.instances.stop` on the project
    -   `compute.instances.create` on the project
    -   `compute.instances.start` on the project
    -   `compute.instances.setMachineType` on the instance
-   To create a snapshot of the source instance's boot disk:
    -   `compute.snapshots.create` on the project
    -   `compute.disks.createSnapshot` on the disk
    -   `iam.serviceAccounts.actAs` on the instance's service account, if the instance has a service account attached
-   To create a new disk:
    -   `compute.disks.list` on the project
    -   `compute.disks.create` on the project
    -   `compute.disks.update` on the project
-   To attach a disk to an instance:
    -   `compute.instances.attachDisk` on the instance
    -   `compute.disks.use` on the disk
-   To delete a disk: `compute.disks.delete` on the project
-   To make changes to the network type:
    -   `compute.networks.list` on the project
    -   `compute.networks.update` on the project

You might also be able to get these permissions with [custom roles](/iam/docs/creating-custom-roles) or other [predefined roles](/iam/docs/roles-overview#predefined).

## Evaluate VM migration options

Migrating from one machine type to another is dependent upon several factors, including: regional availability of the new machine type, and the compatibility of the [storage options](/compute/docs/machine-resource#machine_type_comparison) and [network interfaces](/compute/docs/images/os-details) with respect to the guest OS of the source and the new machine series.

### Compute requirements

Review the following requirements for your current instance and the new machine type:

-   Explore the [machine family resource](/compute/docs/machine-resource) documentation to identify what machine types are suitable for your workload. Consider whether your application requires specific hardware (GPUs), high performance, or lower costs.
-   Review the features of the disk types supported by the new machine type. Most of the features of Persistent Disk, but not all, are supported by Hyperdisk. However, Hyperdisk provides additional features that aren't available with Persistent Disk.
-   Review the features for the prospective machine series. The new machine series might not support the same features that you use with your current machine series, such as custom machine types, Local SSD, or [Shielded VM](/compute/shielded-vm/docs/shielded-vm).
-   Review the [regions and zones](/compute/docs/regions-zones#available) to ensure the new machine series is available in all the regions as your current VM. You might need to adjust your deployment, high availability, and disaster recovery plans.
-   Review your OS migration plan:
    -   If the new VM requires a newer version of the OS, verify that your applications are compatible with the newer OS version.
    -   If you're moving to Arm and an Arm image is not available for your current OS version, choose a new OS or an OS version to run your applications on and verify that your applications are compatible with the new OS.
-   It's possible to migrate from a C3 VM instance to a C3 bare metal instance, as long as the source C3 VM instance uses a [supported operating system and network driver](/compute/docs/general-purpose-machines#c3_network).
-   If you're moving from a machine series other than C3 to a bare metal instance, you must create a new instance. You might have to run your own hypervisor; however, you can also run any operating system that supports bare metal instances as long as the IDPF driver is enabled. Bare metal instances use the IDPF network interface presented as only a physical function, not a virtual function.

### Storage requirements

Review the following storage requirements for your current instance and the new instance type:

-   Review the supported storage types and the supported storage interfaces for the new machine series.
    -   By default, first and second generation machine series use only the Persistent Disk storage type and the VirtIO-SCSI interfaces.
    -   Third generation and newer machine series (like M3, C3, and N4) support only the NVMe interface, and some support only Hyperdisk and Local SSD storage types.
    -   Bare metal instances support only Hyperdisk.
-   Disk compatibility:
    -   If the boot disk uses a disk type that isn't supported by the new machine series, for example `pd-standard`, then you must create a new boot disk for the new VM.
    -   If you are upgrading the OS to a new version, and the operating system doesn't support in-place upgrades, then you must create a new boot disk. All data on the source boot disk is lost unless you copy it to a temporary non-boot disk. Next, you create a new boot disk and copy the data stored on the temporary non-boot disk to the new boot disk.
    -   If you aren't upgrading the OS version, then you can take a snapshot of your current boot disk and restore it to the new, supported disk type. When you create a VM, you can then use this new disk as the boot disk.
    -   If a non-boot disk uses a disk type that isn't supported by the new machine series, you can use a snapshot to change the source disk to a new disk type, as described in [Change the disk type](/compute/docs/disks/migrate-to-hyperdisk).
-   Local SSD disks can't be moved to a new VM. You can attach a disk large enough to store all the Local SSD data to your current VM, and then use a snapshot to change the source disk to a new disk type, as described in [Change the disk type](/compute/docs/disks/migrate-to-hyperdisk). After you create a VM with attached Local SSD disks, then you can copy the data back to the Local SSD disks.
-   If your current VM instance uses disks in a [storage pool](/compute/docs/disks/storage-pools), but you are moving your workload to a VM in a different region, then you must recreate the disks and storage pool in the new region.
-   If the new machine series uses a different disk interface (for example, NVMe instead of SCSI), then the disk device names in the guest OS are different. Make sure your applications and scripts use either [persistent device names](/compute/docs/disks/set-persistent-device-name-in-linux-vm) or [symlinks](/compute/docs/disks/disk-symlinks) when referencing the attached disks.

### Networking requirements

Review the following networking requirements for your current instance and the new instance type:

-   Review the supported networking interfaces for the new VM.
    
    -   By default, first and second generation machine series use only the VirtIO network interface.
    -   Third generation and newer machine series (like M3, C3, and N4) support only the gVNIC network interface.
    -   Bare metal instances support only the [IDPF network interface](/compute/docs/networking/using-idpf).
-   Make sure your application and operating system support the interfaces available for the machine series.
    
-   Review your network configuration for your VM to determine if you need to keep the [assigned IP addresses](/vpc/docs/ip-addresses). If so, you must promote the IP addresses to static IP addresses.
    
-   If you use per VM Tier\_1 networking performance with your current VM, make sure it is available or needed with the new machine series. For example, you can use Tier\_1 networking with a C2 machine type, but it is not available with an [H3 VM](/compute/docs/compute-optimized-machines#h3_series).
    

To determine the network interface type of your current VM, use the [`gcloud compute instances describe`](/sdk/gcloud/reference/compute/instances/describe) command to view the VM's `nic-type`:

  ```
  gcloud compute instances describe VM_NAME --zone=ZONE
```

If your VM was created with the default NIC type (`VirtIO`), the NIC type is automatically changed to `gVNIC` when you change the machine type to a third generation or later machine type.

## Prepare to move your existing VMs

After you've completed the [evaluation section](#evaluate-vm-migration-options), the next step is to prepare to move your VM instances by requesting resources for the new VM instance and preparing backups of the source VM instance.

### Prepare compute resources

Complete the following steps to prepare for moving your current instance to a new instance:

1.  [Request quota](/compute/resource-usage) in the region and zones where you plan to move your resources. If you have existing quota for a machine type, you can request to move that quota. The process takes a few days to complete.
2.  [Create a reservation](/compute/docs/instances/choose-reservation-type) for the new VM instances to ensure the machine resources are available in the new region and zones. Make sure you understand how reserved resources are consumed and [test that you can consume reserved resources](/compute/docs/instances/reservations-consume#test-properties-match).
3.  [Extend your high availability and disaster recovery plans](/architecture/multiregional-vms) to include the new region.
4.  If needed, upgrade the OS on the current VM.
    1.  If supported by the operating system vendor, perform an in-place upgrade of your OS to a version that is supported by the new machine series and verify that your workload is performing as expected on the new OS version.
    2.  If an in-place upgrade of the OS isn't supported, then, when you create a new VM, you must create a new boot disk. Determine what information you need to copy from the current boot disk, and copy it to a temporary location on a non-boot disk so it can be transferred to the new VM. If you don't have any non-boot disks attached to your current VM:
        -   For first and second generation machine types, see [Add Persistent Disk storage to your VM](/compute/docs/disks/add-persistent-disk).
        -   For third generation and later machine types, see [Add Hyperdisk storage to your VM](/compute/docs/disks/add-hyperdisk).
5.  If applicable to your Linux distribution, check [udev](https://github.com/systemd/systemd/blob/main/rules.d/README) rules under `/etc/udev/rules.d/`. This file might contain entries relevant to the hardware configuration of the current instance, but not the new instance. For example, the following entry ensures that `eth0` is provided by `virtio-pci` driver (VirtIO Net), which prevents `gve` driver (gVNIC) to provide this interface. This could lead to networking startup scripts and connectivity issues in the new instance:

```
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="virtio-pci", ATTR{dev_id}=="0x0", KERNELS=="0000:00:04.0", ATTR{type}=="1", KERNEL=="eth*", NAME="eth0"
```

### Prepare storage resources

Complete the following steps to prepare for moving the data in the disks attached to your current instance to a new instance:

1.  On Linux systems, test your updated applications and scripts to make sure they work with persistent device names or symlinks instead of the disk [device names](/compute/docs/disks/set-persistent-device-name-in-linux-vm).
2.  If you're migrating from a VM that runs Microsoft Windows:
    -   You must [update the NVMe driver on VMs created before May 2022](/compute/docs/troubleshooting/known-issues#replace-community-nvme-driver). This applies to the boot disk in your current VM and any previously created snapshots or custom images that are used to create a VM.
    -   Windows must be reconfigured to start using the Microsoft NVMe driver (StorNVMe). Follow the instructions to [update your boot device](/compute/docs/troubleshooting/known-issues#inaccessible_boot_device_after_updating_a_vm_from_gen_1_or_2_to_a_gen_3_vm).
3.  If your new VM doesn't support the same disk types as your current VM, you might need to update your deployment scripts or instance templates to support the new machine series.
4.  If your current VM uses a disk type for the boot disk that isn't supported by the new machine series, and you are migrating multiple VMs with the same configuration, create a custom image to use when creating the new VMs:
    1.  [Create a snapshot](/compute/docs/disks/create-snapshots#create_snapshots) of the pd-standard boot disk of your current VM.
    2.  [Create a custom image](/compute/docs/images/create-custom#creating_a_custom_image) using the disk snapshot as the source.
5.  If you need to move Local SSD information, create a blank disk large enough to [backup your Local SSD disks](/compute/docs/disks/local-ssd#lssd_backup).
    1.  If possible, use a disk type that is supported by the new VM.
    2.  If there are no disk types that are supported by both the current VM and the new VM, then create a temporary disk using a disk type supported by the current VM.
    3.  [Attach the new disk](/compute/docs/disks/attach-disks) to the current VM, then [format and mount the disk](/compute/docs/disks/format-mount-disk-linux).
    4.  Copy the data from the Local SSD disks attached to the current VM to this temporary disk.
6.  [Change the disk type](/compute/docs/disks/migrate-to-hyperdisk) of any disks attached to the current VM that use a disk type that isn't supported by the new VM. To move the disk data to new disks, create snapshots of the disks. You can alternatively [transfer files](/compute/docs/instances/transfer-files) from one VM to the other.
    
    1.  You can take the snapshots while the VM is running, but any data written to the disks _after_ you take the snapshot is not captured. Because [snapshots are incremental](/compute/docs/disks/snapshots#incremental-snapshots), you can take a second snapshot after you stop the VM to capture all the most recent changes. This approach should minimize the length of time the VM is unavailable while you switch to a new VM.
    2.  Alternatively, you can take all the disk snapshots after you stop the VM. We recommend that you create a snapshot of all the disks attached to your VM, even if the disk type is supported by the new machine series. Include any temporary disks that contain the copied Local SSD data.
    3.  The amount of time it takes to snapshot a disk is dependent upon multiple factors, such as the disk size and amount of data contained on the disk. For example, if you take a snapshot of a 1 TiB disk that is 85% full, it might take 5 minutes for the snapshot to complete. But, if you take a snapshot of a 100 TiB disk that is 85% full, it might take 11 minutes to complete. We recommend you perform test snapshots of your disks before you start the migration process to understand how long snapshotting takes.
7.  If you have a disk that can be taken offline, you can use the following approach to move the data to a new disk while the source VM is still available:
    
    1.  [Detach the disk](/compute/docs/disks/detach-reattach-boot-disk) from your VM.
    2.  [Take a snapshot of the disk](/compute/docs/disks/create-snapshots).
    3.  Use the snapshot to [create a new disk](/compute/docs/disks/migrate-to-hyperdisk#migrate-to-hd) using a disk type that is supported by the new machine series. The new disk must be either the same size or larger than the source disk.

### Prepare network resources

Complete the following steps to update the network configuration used by your current instance to support the new instance:

1.  If you're creating a VM in a new region, [create a VPC network and subnets](/vpc/docs/create-modify-vpc-networks) in the new region.
2.  If you configured custom NIC queue counts, see [Queue allocations and changing the machine type](/compute/docs/network-bandwidth#changing-machine-type).
3.  If you want to keep the IP addresses used by the source VM, [promote the IP addresses to static IP addresses](/vpc/docs/reserve-static-external-ip-address#promote_ephemeral_ip).
4.  [Unassign static IP address](/compute/docs/ip-addresses/configure-static-external-ip-address#unassign_ip) before you stop your source VM.

### Prepare the SUSE Enterprise Linux Server operating system

To avoid hardware-specific dependencies, rebuild the `initramfs` (Initial RAM filesystem). This includes a wider range of drivers and modules, making the operating system compatible with other instance types. Failure to do so will run into the [known issue](/compute/docs/troubleshooting/known-issues#suse_enterprises_vms_fail_to_boot_after_changings_instances_types) that prevents the VM from booting properly.

Before shutting down the system, run the following command as root to rebuild the `initramfs` with all drivers:

  ```
  sudo dracut --force --no-hostonly
```

## Move your workload to the new VM

After [preparing your VMs for migration](#prepare-vm-migrate), the next step is to move your workload to the new VM.

If you are moving your VMs from the first generation to the second generation machine series, read the instructions on the [Edit the machine type of a VM](/compute/docs/instances/changing-machine-type-of-stopped-instance) page. If you want to change the name of your existing VM, review the information at [Rename a VM](/compute/docs/instances/rename-instance).

This section describes how to move your workload from a first or second generation VM to a third (or newer) generation VM. During this procedure, you create a new VM instance, then move your workloads to the new VM.

**Note:** Moving from an H3 VM to any other machine series is not supported.

### Create the new VM

When moving your workloads from first or second generation VMs (N1 or N2 for example) to third generation or later, you must first create a new VM and then move your workloads.

1.  If the source VM uses non-boot disks with a disk type that is supported by the new machine series, detach the disks from the VM.
2.  Stop your source VM.
3.  Create snapshots of all disks that are still attached to the source VM.
4.  Create a new compute VM instance using either a [public image](/compute/docs/instances/create-start-instance#publicimage) or a [custom image that is configured to use gVNIC](/compute/docs/networking/using-gvnic#create-custom-image). When creating the new VM, choose the following options:
    -   Select the machine type from the machine series that you have chosen.
    -   Select a supported OS image, or use a custom image that you created previously.
    -   Select a supported disk type for the boot disk, for example, Hyperdisk Balanced.
    -   If you created new disks from snapshots of the original disks, include those new disks.
    -   Specify the new VPC network, if you're creating the instance in a different region.
    -   If both VirtIO and gVNIC are supported for the new instance, select gVNIC.
    -   Specify the static IP addresses, if you promoted the ephemeral IP addresses of the source VM.
5.  Start the new VM.

### After the instance starts

Now that the new instance has been created and started, complete the following steps to finish the configuration of the new instance and copy over all the data from the source instance.

1.  [Attach the disks](/compute/docs/disks/attach-disks) you detached from the source VM to the new VM.
2.  For any disks attached to the source VM that use a disk type not supported by the new VM, [Create a disk from a snapshot and attach it to the new instance](/compute/docs/disks/restore-snapshot#create-disk-from-snapshot). When creating the new disk, select a disk type that is supported by the new VM and specify a size that is at least as large as the original disk.
3.  If the original VM used a [resource policy](/compute/docs/disks/scheduled-snapshots#overview) for any disks that were recreated for the new VM, you need to add the resource policy to the new disks.
4.  If you created the new VM using a public OS image, and not a custom image, then do the following:
    1.  Configure the necessary users, drivers, packages, and file directories on the new instance to support your workload.
    2.  Install your modified applications and programs on the new VM. Recompile the programs on the new OS or architecture, if required.
5.  Optional: If you moved the contents of Local SSD disks to a temporary disk, and the new VM has attached Local SSD storage, after you [format and mount the disks](/compute/docs/disks/add-local-ssd#formatandmount), you can move the data from the temporary disk to the Local SSD disks.
6.  [Reassign any static IP addresses](/compute/docs/ip-addresses/configure-static-external-ip-address#IP_assign) associated with the source VM to the new VM.
7.  Complete any additional tasks required to make your new VM highly available, such as configuring load balancers and [updating the forwarding rules](/load-balancing/docs/forwarding-rule-concepts#update-forwarding-rule).
8.  Optional: Update the [DNS entries](/compute/docs/internal-dns), if needed, for the new VM.
9.  Recommended: [Schedule disk backups](/compute/docs/disks/scheduled-snapshots) for the new disks.
10.  Recommended: If you changed the OS to a different version or architecture, recompile your applications.

If you have capacity issues when moving your workloads, reach out to your Technical Account Manager (TAM). For other issues, open a support case with Cloud Customer Care.

## Migration example of n1-standard-8 to n4-standard-8

The following example is a migration of an `n1-standard-8` VM to an `n4-standard-8` VM. The `n1-standard-8` VM has a `PD-SSD` boot disk running an `Ubuntu1804` image and a `PD-SSD` data disk. You must use the CLI or REST API for this procedure.

**Note:** To receive security patches for Ubuntu1804, [upgrade to Ubuntu Pro](/compute/docs/images/premium/ubuntu-pro/upgrade-from-ubuntu).

There are two options available to upgrade your N1 VM to an N4 VM:

**Option 1:** If your N1 VM uses the `VirtIO` network interface, then you must create a new N4 VM. N4 supports only the `gvnic` network interface, and Hyperdisk Balanced disks. You create a snapshot of your Persistent Disk boot and data disks, create Hyperdisk Balanced disks from those snapshots, attach the Hyperdisk Balanced disks, and create the new N4 VM with the Hyperdisk Balanced disks.

You can also choose to create a new Hyperdisk Balanced boot disk using a more recent version of the Ubuntu OS. In this scenario, you can create a new Hyperdisk Balanced disk from the boot disk snapshot, but you attach that disk as a non-boot disk to the N4 VM. Then you can copy non-system data from the restored snapshot to the new boot disk.

**Option 2:** If your N1 VM uses the `gvnic` network interface, the operating system has an NVMe storage device driver, doesn't have any attached Local SSD disks or GPUs, and isn't part of a managed instance group (MIG), then you can change the machine type from N1 to N4, but you still must change your Persistent Disk disk types to Hyperdisk Balanced disks. You must first detach your Persistent Disk boot and data disks, create snapshots of the disks, create Hyperdisk Balanced disks using the snapshots as the source, then attach the new Hyperdisk Balanced disks to your N4 VM after you change the machine type. If your VM has attached GPUs, then you must [detach them](/compute/docs/gpus/add-remove-gpus) first.

The time to snapshot a disk is dependent upon multiple factors such as the total number of TBs on a disk. For example, if you take a snapshot of a 1 TB disk that is 85% full, it might take 5 minutes for the snapshot to complete. But, if you take a snapshot of a 100 TB disk that is 85% full, it might take 11 minutes to complete. Google recommends you perform test snapshots of your disks **before** you start the migration process to understand how long snapshotting takes.

### gcloud

**Option 1: Create a new N4 VM with snapshotted disks:**

1.  Stop the VM by using [gcloud compute instances stop](/sdk/gcloud/reference/compute/instances/stop):
    
    gcloud compute instances stop VM\_NAME \\
      --zone=ZONE
    
    Replace the following:
    
    -   `VM_NAME` The name of your current `n1-standard-8` VM.
    -   `ZONE`: The zone where the VM is located.
2.  Snapshot your disks. Use the [gcloud compute snapshots create](/sdk/gcloud/reference/compute/snapshots/create) to create a snapshot of both the Persistent Disk boot disk and data disk attached to the VM.
    
    gcloud compute snapshots create SNAPSHOT\_NAME \\
        --source-disk=SOURCE\_DISK\_NAME \\
        --source-disk-zone=SOURCE\_DISK\_ZONE
    
    Replace the following:
    
    -   `SNAPSHOT_NAME`: The name of the snapshot you want to create.
    -   `SOURCE_DISK_NAME`: The name of your source disk.
    -   `SOURCE_DISK_ZONE`: The zone of your source disk.
3.  Create a new Hyperdisk Balanced disk for the data disk by repeating the previous step and specifying the data disk information instead of the boot disk. [gcloud compute disks create](/sdk/gcloud/reference/compute/disks/create):
    
    gcloud compute disks create DISK\_NAME \\
        --project=PROJECT\_NAME \\
        --type=DISK\_TYPE \\
        --size=DISK\_SIZE \\
        --zone=ZONE \\
        --source-snapshot=SNAPSHOT\_NAME \\
        --provisioned-iops=PROVISIONED\_IOPS \\
        --provisioned-throughput=PROVISIONED\_THROUGHPUT
    
    Replace the following:
    
    -   `DISK_NAME`: The name of the new disk you are creating from the snapshotted disk.
    -   `PROJECT_NAME`: The name of your project.
    -   `DISK_TYPE`: The new disk type—in this example, it's a Hyperdisk Balanced disk.
    -   `DISK_SIZE`: The size of the disk (example: `100GB`).
    -   `ZONE`: The zone where the new disk is located.
    -   `SNAPSHOT_NAME`: The name of the snapshot source disk.
    -   Optional: `PROVISIONED_IOPS`: The IOPS performance for the disk (example: `3600`).
    -   Optional: `PROVISIONED_THROUGHPUT`: The throughput performance to provision the disk (example: `290`).
4.  Repeat the previous step for **each** snapshotted disk.
    
5.  Create the `n4-standard-8` VM and attach the Hyperdisk Balanced disks using the [gcloud compute instances create](/sdk/gcloud/reference/compute/instances/create):
    
    gcloud compute instances create VM\_NAME \\
        --project=PROJECT\_NAME \\
        --zone=ZONE \\
        --machine-type=NEW\_MACHINE\_TYPE \\
        --boot-disk-device-name=BOOT\_DISK\_NAME \\
        --disk=name=NON\_BOOT\_DISK\_NAME, boot=no \\
        --network-interface=nic-type=GVNIC
    
    Replace the following:
    
    -   `VM_NAME`: The name of the new VM instance.
    -   `PROJECT_NAME`: The name of your project.
    -   `ZONE`: The zone where the new VM is located.
    -   `NEW_MACHINE_TYPE`: The machine type, in this example it's `n4-standard-8`.
    -   `BOOT_DISK_NAME` The name of the Hyperdisk Balanced boot disk you created from the source disk snapshot attached to the `n1-standard-8` VM.
    -   `NON_BOOT_DISK_NAME` The name of the Hyperdisk Balanced data disk you created from the source snapshot disk attached to the `n1-standard-8` VM.
6.  Start the `n4-standard-8` VM using the [gcloud compute instances start](/sdk/gcloud/reference/compute/instances/start):
    
    gcloud compute instances start VM\_NAME
    
    Replace `VM_NAME` with name of the new VM.
    

**Option 2: Perform an in-place machine upgrade:**

This option is only available if your N1 VM uses the `gvnic` network interface, the operating system has an NVMe storage device driver, doesn't have any attached Local SSD disks or GPUs, and isn't a part of a managed instance group (MIG). Performing this procedure with an N1 VM with a `VirtIO` network interface generates a _VM incompatibility_ error.

1.  [Stop the VM](/sdk/gcloud/reference/compute/instances/stop).
2.  [Detach the disks](/sdk/gcloud/reference/compute/instances/detach-disk) from the VM.
3.  Create a [snapshot](/sdk/gcloud/reference/compute/snapshots/create) of the boot and data disks.
4.  [Create Hyperdisk Balanced boot and data disks](/sdk/gcloud/reference/compute/disks/create) using a disk snapshot as the source for each disk.
5.  [Set the machine type](/sdk/gcloud/reference/compute/instances/set-machine-type) to an N4 VM.
6.  [Attach the Hyperdisk Balanced boot disk and the Hyperdisk Balanced data disk](/sdk/gcloud/reference/compute/instances/attach-disk).
7.  [Start the N4 VM](/sdk/gcloud/reference/compute/instances/start).

### REST

**Option 1: Create a new N4 VM with snapshotted disks:**

1.  Stop the VM by using the [instances.stop method](/compute/docs/reference/rest/v1/instances/stop):
    
     POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_NAME/zones/ZONE/instances/VM\_NAME/stop
    
    Replace the following:
    
    -   `PROJECT_NAME`: The project ID.
    -   `ZONE`: The zone containing the VM.
    -   `VM_NAME`: The name of your current `n1-standard-8` VM.
2.  Snapshot your disks using the [disks.createSnapshot method](/compute/docs/reference/rest/v1/disks/createSnapshot) to create a snapshot of both the Persistent Disk boot disk and data disk attached to the instance.
    
    POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_NAME/zones/ZONE/disks/DISK\_NAME/createSnapshot
    
    In the body of the request, include the name for your new snapshotted Persistent Disk disk.
    
    For example:
    
    {
        "name": "SNAPSHOT\_NAME"
    }
    
    Replace the following:
    
    -   `PROJECT_NAME`: The name of your project.
    -   `ZONE`: The zone where your disk is located.
    -   `DISK_NAME`: The disk you plan to snapshot.
    -   `SNAPSHOT_NAME`: A name for the snapshot, such as `hdb-boot-disk` or `hdb-data-disk`.
3.  Create a Hyperdisk Balanced disk using the [disks.insert method](/compute/docs/reference/rest/v1/disks/insert). You perform this step two times: once to include the `name` of your Hyperdisk Balanced boot disk; and a second time to include the `name` of your data disks. Use the `sourceSnapshot` for the new Hyperdisk Balanced boot and data disks, the `type` of disk, Hyperdisk Balanced, and `sizeGB` of the disk in the request body.
    
    POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_NAME/zones/ZONEdisks
    
    Replace the following:
    
    -   `PROJECT_NAME`: The name of your project.
    -   `ZONE`: The zone where your disk is located.
    
    In the body of the request, include the following:
    
    For example:
    
    {
        "name": "my-hdb-boot-disk" or "my-hdb-data-disk",
        "sourceSnapshot": "projects/your-project/global/snapshots/SNAPSHOT\_NAME",
        "type": "projects/your-project/zones/us-central1-a/diskTypes/hyperdisk-balanced",
        "sizeGb": "100"
    }'
    
4.  Use the [instances.insert](/compute/docs/reference/rest/v1/instances/insert) method to create the new N4 VM.
    
    POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_NAME/zones/ZONE/instances
    
    Replace the following:
    
    -   `PROJECT_NAME`: The name of your project.
    -   `ZONE`: The zone where your disk is located.
    
    In the body of the request, include the following:
    
      {
        "machineType":"projects/your-project/zones/us-central1-a/machineTypes/n4-standard-8" "name":"VM\_NAME",
        "disks": \[
          {
            "boot": true,
            "deviceName": "my-hdb-boot-disk",
            "source": "projects/your-project/zones/us-central1-a/disks/my-hdb-boot-disk",
            "type": "PERSISTENT"
          },
    
          {
            "boot": false,
            "deviceName": "my-hdb-data-disk",
            "source": "projects/your-project/zones/us-central1-a/disks/my-hdb-data-disk",
            "type": "PERSISTENT"
          }
          \],
            "networkInterfaces":\[
              {
                "network":"global/networks/NETWORK\_NAME",
                "subnetwork":"regions/REGION/subnetworks/SUBNET\_NAME",
                "nicType": "GVNIC"
              }
           \]
         }
    
    Replace the following:
    
    -   `VM_NAME`: The name of the VM.
    -   `NETWORK_NAME`: The name of the network.
    -   `REGION`: The name of the region.
    -   `SUBNET_NAME`: The name of the subnet.
5.  Start the VM by using the [instances.start method](/compute/docs/reference/rest/v1/instances/start):
    
    POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_NAME/zones/ZONE/instances/VM\_NAME/start
    
    Replace the following:
    
    -   `PROJECT_NAME`: The name of your project.
    -   `ZONE`: The zone where your VM is located.
    -   `VM_NAME`: The name of the VM.

**Option 2: Perform an in-place machine upgrade:**

This option is only available if your N1 VM uses the `gvnic` network interface, doesn't have any attached Local SSD disks or GPUs, and isn't a part of a managed instance group (MIG). Performing this procedure with an N1 VM with a `VirtIO` network interface generates a _VM incompatibility_ error.

1.  Stop the VM by using the [instances.stop method](/compute/docs/reference/rest/v1/instances/stop).
    
2.  Detach the disks by using the [instances.detachDisk method](/compute/docs/reference/rest/v1/instances/detachDisk) method to detach the original Persistent Disk boot disk from the N1 VM. You also must detach any data disks from the VM.
    
    https://compute.googleapis.com/compute/v1/projects/PROJECT\_NAME/zones/ZONE/instances/VM\_NAME/detachDisk?deviceName=DISK\_NAME
    
    Replace the following:
    
    -   `PROJECT_NAME`: The name of your project.
    -   `ZONE`: The zone where your disk is located.
    -   `VM_NAME`: The name of the source VM with the `pd-ssd` disk attached to it.
    -   `DISK_NAME`: The disk you want to detach.
3.  Snapshot the disks. Use the [disks.createSnapshot method](/compute/docs/reference/rest/v1/disks/createSnapshot) to create a snapshot of both the Persistent Disk boot disk and data disks attached to the instance.
    
4.  Create a Hyperdisk Balanced boot and data disks using the [disks.insert method](/compute/docs/reference/rest/v1/disks/insert) include the `name` of your Hyperdisk Balanced disk, `sourceSnapshot` for the new Hyperdisk Balanced disk, the `type` of disk, Hyperdisk Balanced, and `sizeGB` of the disk in the request body.
    
5.  Perform an in-place machine type upgrade using the [instances.setMachineType method](/compute/docs/reference/rest/v1/instances/setMachineType) include the `machineType` in the request body:
    
    POST  https://compute.googleapis.com/compute/v1/projects/PROJECT\_NAME/zones/ZONEinstances/VM\_NAME/setMachineTypeMACHINE\_TYPE
    
    Replace the following:
    
    -   `PROJECT_NAME`: The name of your project.
    -   `ZONE`: The zone where your disk is located.
    -   `VM_NAME`: The name of the VM to upgrade.
    -   `MACHINE_TYPE`: The new machine type.
    
    In the request body, include the following:
    
    {
     "machineType": "projects/PROJECT\_NAME/zones/ZONE/machineTypes/MACHINE\_TYPE",
    }
    
6.  Use the [instances.attachDisk method](/compute/docs/reference/rest/v1/instances/attachDisk) to attach the new `Hyperdisk Balanced` boot disk and the Hyperdisk Balanced data disks to the N4 VM.
    
    POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_NAME/zones/ZONE/instancesVM\_NAMEattachDiskDISK\_NAME
    
    Replace the following:
    
    -   `PROJECT_NAME`: The name of your project.
    -   `ZONE`: The zone where your disk is located.
    -   `VM_NAME`: The name of the source VM instance with the `pd-ssd` disk attached to it.
    -   `DISK_NAME` The disk you want to attach.
    
    In the request body, include the following:
    
    {
    "source": "projects/your-project/zones/us-central1-a/disks/my-hdb-boot-disk",
    "deviceName":"my-hdb-boot-disk","boot":true
    }
    
    {
    "source": "projects/your-project/zones/us-central1-a/disks/my-hdb-data-disk",
    "deviceName":"my-hdb-data-disk","boot":false
    }
    
7.  Start the N4 VM by using the [instances.start method](/compute/docs/reference/rest/v1/instances/start).
    
    POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_NAME/zones/ZONEinstances/VM\_NAME/start
    
    Replace the following:
    
    -   `PROJECT_NAME`: The name of your project.
    -   `ZONE`: The zone where your disk is located.
    -   `VM_NAME`: The name of the VM.

## Clean up

After you verify that you can connect to the new VM, and that your workload is running as expected on the new VM, you can remove the resources that are no longer needed:

1.  The snapshots you created for the disks attached to the source VM.
2.  Any snapshot schedules for the disks that were attached to the source VM.
3.  The temporary disk created to copy the Local SSD data to the new VM.
4.  The source VM and all attached disks.

## What's next

-   Read about [Known issues](/compute/docs/troubleshooting/known-issues) for Linux and Windows server.
-   Read the [troubleshooting tips](/compute/docs/troubleshooting).
-   Learn more [about the migration lifecycle](/migrate/compute-engine/docs/5.0/concepts/lifecycle).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
