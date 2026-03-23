-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Compute](https://docs.cloud.google.com/docs/compute-area)
-   [Compute Engine](https://docs.cloud.google.com/compute/docs)
-   [Guides](https://docs.cloud.google.com/compute/docs/overview)

Send feedback

# Configuring stateful metadata in MIGs Stay organized with collections Save and categorize content based on your preferences.

Instance [metadata](/compute/docs/storing-retrieving-metadata) is useful for setting properties for and communicating with your applications through the metadata server. For example, you can use metadata to configure the identity of the virtual machine (VM) instance, environment variables, information about cluster architecture, or data range that a VM is responsible for.

By configuring stateful metadata in a [managed instance group (MIG)](/compute/docs/instance-groups/stateful-migs), you ensure that instance-specific metadata is preserved on [managed instance](/compute/docs/instance-groups/working-with-managed-instances#what_is_a_managed_instance) autohealing, update, and recreate events.

Configure stateful metadata individually for VM instances in a MIG by setting it in [per-instance configurations](/compute/docs/instance-groups/how-stateful-migs-work) and applying the configuration. You can set a per-instance configuration on instance creation or against existing managed instances. After the per-instance configuration is applied, the MIG stores stateful metadata in the [preserved state from configuration](/compute/docs/instance-groups/how-stateful-migs-work#preserved_state_according_to_per-instance_configuration) (`preservedStateFromConfig`) field of a managed instance.

**Note:** If a MIG's instance template and per-instance configuration define metadata with the same key and different values, the value from the per-instance configuration is used for the associated VM.

## Before you begin

-   Review [when to use stateful MIGs](/compute/docs/instance-groups/stateful-migs#when_to_use_stateful_migs) and [how stateful MIGs work](/compute/docs/instance-groups/how-stateful-migs-work).
-   If you haven't already, set up [authentication](/compute/docs/authentication). Authentication verifies your identity for access to Google Cloud services and APIs. To run code or samples from a local development environment, you can authenticate to Compute Engine by selecting one of the following options:
    
    Select the tab for how you plan to use the samples on this page:
    
    ### gcloud
    
    1.  [Install](/sdk/docs/install) the Google Cloud CLI. After installation, [initialize](/sdk/docs/initializing) the Google Cloud CLI by running the following command:
        
        gcloud init
        
        If you're using an external identity provider (IdP), you must first [sign in to the gcloud CLI with your federated identity](/iam/docs/workforce-log-in-gcloud).
        
        **Note:** If you installed the gcloud CLI previously, make sure you have the latest version by running `gcloud components update`.
        
    2.  [Set a default region and zone](/compute/docs/gcloud-compute#set_default_zone_and_region_in_your_local_client).
    
    ### Terraform
    
    To use the Terraform samples on this page in a local development environment, install and initialize the gcloud CLI, and then set up Application Default Credentials with your user credentials.
    
    [Install](/sdk/docs/install) the Google Cloud CLI.
    
    If you're using an external identity provider (IdP), you must first [sign in to the gcloud CLI with your federated identity](/iam/docs/workforce-log-in-gcloud).
    
    **Note:** If you installed the gcloud CLI previously, make sure you have the latest version by running `gcloud components update`.
    
    If you're using a local shell, then create local authentication credentials for your user account:
    
    gcloud auth application-default login
    
    You don't need to do this if you're using Cloud Shell.
    
    For more information, see [Set up authentication for a local development environment](/compute/docs/authentication#local-development).
    
    ### REST
    
    To use the REST API samples on this page in a local development environment, you use the credentials you provide to the gcloud CLI.
    
    [Install](/sdk/docs/install) the Google Cloud CLI.
    
    If you're using an external identity provider (IdP), you must first [sign in to the gcloud CLI with your federated identity](/iam/docs/workforce-log-in-gcloud).
    
    **Note:** If you installed the gcloud CLI previously, make sure you have the latest version by running `gcloud components update`.
    
    For more information, see [Authenticate for using REST](/docs/authentication/rest) in the Google Cloud authentication documentation.
    

## Limitations

A MIG with [stateful configuration](/compute/docs/instance-groups/stateful-migs#what_makes_a_mig_stateful)—a _stateful MIG_—has the following limitations:

-   You cannot use autoscaling if your MIG has stateful configuration.
-   If you want to use automated rolling updates, you must set the [replacement method](/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups#replacement_method) to `RECREATE`.
-   For stateful regional MIGs, you must [disable proactive redistribution](/compute/docs/instance-groups/regional-mig-enable-disable-proactive-redistribution) (set the redistribution type to `NONE`) to prevent deletion of stateful instances by automatic cross-zone redistribution.
-   If you use an [all-instances configuration](/compute/docs/instance-groups/set-mig-aic) to override instance template properties, you cannot specify those properties in any per-instance configuration and at the same time in the group's all-instances configuration.
    
-   When you permanently [delete](/compute/docs/instance-groups/add-remove-vms-in-mig#delete_from_group) an instance (either manually or by resizing), the MIG does not preserve the instance's stateful metadata.
    

## Setting stateful metadata on instance creation

Set stateful metadata when manually creating instances in a MIG. This is useful for migrating a stateful application on standalone VMs to a stateful MIG and when creating stateful instances.

When you manually create an instance in a MIG and supply stateful metadata, the MIG performs the following tasks:

1.  Creates a [managed instance](/compute/docs/instance-groups/working-with-managed-instances#what_is_a_managed_instance) from the instance template using the provided instance name.
2.  Creates a per-instance configuration with the provided stateful metadata and sets that metadata on the instance.
3.  Stores the stateful metadata in the preserved state from configuration (`preservedStateFromConfig`) of the associated managed instance.

### gcloud

To create a managed instance with a custom name and to set stateful metadata on that VM, use the [`gcloud compute instance-groups managed create-instance` command](/sdk/gcloud/reference/compute/instance-groups/managed/create-instance) with the `--stateful-metadata` flag.

gcloud compute instance-groups managed create-instance NAME \\
  --instance INSTANCE\_NAME \\
  --stateful-metadata KEY\=VALUE\[,KEY\=VALUE,...\]

Replace the following:

-   `NAME`: the name of the MIG in which to create an instance
-   `INSTANCE_NAME`: the name of the instance to create
-   `KEY` and `VALUE`: stateful metadata key-value pairs to set individually for the instances in addition to metadata defined in the instance template
    -   The key values that you set here take priority over any conflicting key values from the instance template

**Example**

You need to deploy a cluster of nodes, `example-cluster`, that can operate in one of two modes: `active` or `standby`. You set the mode individually for each VM in a cluster using metadata, for example: `mode:active`. You also configure how elaborate logging should be for each node, using a `logging` metadata key that can be set to `basic` or `elaborate`. The application on the node is configured using values from instance metadata.

To create an active node, `node-12`, with elaborate logging, you would run the following command:

gcloud compute instance-groups managed create-instance example-cluster \\
  --instance node-12 \\
  --stateful-metadata mode=active,logging=elaborate

The command creates a VM, `node-12`, in the `example-cluster` MIG and sets two metadata key-value pairs, `mode:active` and `logging:elaborate`, for the new instance.

### Terraform

To create a managed instance with a custom name and to set stateful metadata on that VM, use the [`google_compute_per_instance_config` resource](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_per_instance_config).

The following sample uses a zonal MIG. If you don't have a zonal MIG yet, then [create a zonal MIG with VMs confined to a single zone](/compute/docs/instance-groups/create-zonal-mig).

```
resource "google_compute_per_instance_config" "default" {
  instance_group_manager = google_compute_instance_group_manager.default.name
  zone                   = google_compute_instance_group_manager.default.zone
  name                   = "node-12"
  preserved_state {
    metadata = {
      mode    = "active"
      logging = "elaborate"
    }
  }
}
```

To learn how to apply or remove a Terraform configuration, see [Basic Terraform commands](/docs/terraform/basic-commands).

### REST

To create one or multiple managed instances in a MIG with custom VM names and to set stateful metadata individually on these VMs, use one of the following methods:

-   For a zonal MIG, use the [`instanceGroupManagers.createInstances` method](/compute/docs/reference/rest/v1/instanceGroupManagers/createInstances).
-   For a regional MIG, use the [`regionInstanceGroupManagers.createInstances` method](/compute/docs/reference/rest/v1/regionInstanceGroupManagers/createInstances).

POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_ID/zones/ZONE/instanceGroupManagers/NAME/createInstances
{
  "instances": \[
    {
      "name": "INSTANCE\_NAME",
      "preservedState" : {
        "metadata": {
          "KEY" : "VALUE",
          ...
        }
      }
    },
    ...
  \]
}

Replace the following:

-   `PROJECT_ID`: the project ID for the request
-   `ZONE`: the [zone](/compute/docs/regions-zones#available) where the MIG is located (applies to a zonal MIG)
    -   For a regional MIG, replace `zones/ZONE` with `regions/REGION` and specify the region of the MIG
-   `NAME`: the name of the MIG in which to create an instance
-   `INSTANCE_NAME`: the name of the instance to create
-   `KEY` and `VALUE`: stateful metadata key-value pairs to set individually for the instances in addition to metadata defined in the instance template
    -   The key values that you set here take priority over any conflicting key values from the instance template

**Example**

You need to deploy a cluster of nodes, `example-cluster`, that can operate in one of two modes: `active` or `standby`. You set the mode individually for each VM in a cluster using metadata, for example: `mode:active`. You also configure how elaborate logging should be for each node, using a `logging` metadata key that can be set to `basic` or `elaborate`. The application on the node is configured using values from instance metadata.

To create an active node, `node-12`, with elaborate logging, execute the following method:

POST https://compute.googleapis.com/compute/v1/projects/example-project/zones/us-east1-c/instanceGroupManagers/example-cluster/createInstances

{
  "instances": \[
    {
      "name": "node-12",
      "preservedState" : {
        "metadata": {
          "mode":"active",
          "logging":"elaborate"
        }
      }
    }
  \]
}

The method creates a VM, `node-12`, in the `example-cluster` MIG and sets two metadata key-value pairs, `mode:active` and `logging:elaborate`, for the new instance.

## Setting, modifying, and removing stateful metadata individually for existing VM instances

Set, modify, or remove stateful metadata for an existing instance in a MIG by setting it in an associated per-instance configuration and then applying the configuration by updating the instance.

### gcloud

To configure stateful metadata individually for a VM instance in a MIG, set or remove stateful metadata in the associated per-instance configuration. If you apply the configuration to the instance at the same time (`--update-instance`), you can choose whether to keep the instance running, restart it, or recreate it. If you don't apply the configuration (`--no-update-instance`), your changes don't take effect until you recreate or update the instance.

If a per-instance configuration doesn't exist for a given instance, use the [`gcloud compute instance-groups managed instance-configs create` command](/sdk/gcloud/reference/compute/instance-groups/managed/instance-configs/create) with one of the following flags:

gcloud compute instance-groups managed instance-configs create NAME \\
  --instance INSTANCE\_NAME \\
  --stateful-metadata KEY\=VALUE\[,KEY\=VALUE,...\] \\
  \[--no-update-instance | --update-instance\] \\
  \[--instance-update-minimal-action MINIMAL\_ACTION\]

If a per-instance configuration already exists for a given instance, use the `gcloud compute instance-groups managed instance-configs update` [command](/sdk/gcloud/reference/compute/instance-groups/managed/instance-configs/update) with:

-   The `--stateful-metadata` flag for setting or modifying metadata, or
-   The `--remove-stateful-metadata` flag for removing instance-specific stateful metadata.

gcloud compute instance-groups managed instance-configs update NAME \\
  --instance INSTANCE\_NAME \\
  \[--stateful-metadata KEY\=VALUE\[,KEY\=VALUE,...\]\] \\
  \[--remove-stateful-metadata KEY\[,KEY,...\]\] \\
  \[--no-update-instance | --update-instance\] \\
  \[--instance-update-minimal-action MINIMAL\_ACTION\]

Replace the following:

-   `NAME`: The name of the managed instance group.
-   `INSTANCE_NAME`: The name of the instance for which to configure stateful metadata.
-   `KEY=VALUE`: Stateful metadata key-value pairs to set individually for the instance in addition to the metadata defined in the instance template. The key values that you set here take priority over any conflicting key values from the instance template.
-   `KEY`: Instance-specific stateful metadata keys to remove from the per-instance configuration.
    -   If a value for the key is not defined by the instance template, the key-value pair is removed completely from the instance when the change is applied.
    -   If a value for the key is defined by the instance template, the value from the instance template is set on the instance when the change is applied.
-   `MINIMAL_ACTION`: Perform at least the specified action when applying the per-instance configuration update to the instance. A `MINIMAL_ACTION` can only be set when the `--update-instance` flag is used. The value must be one of the following:
    
    -   `none`: No action.
    -   `refresh`: Apply updates that are possible to apply without stopping the instance.
    -   `restart`: Stop the instance and then start it again.
    -   `replace`: Recreate the instance.
    
    If omitted, the least disruptive action required by the update is used.
    

**Example**

You have a cluster of nodes, `example-cluster`, that can operate in one of two modes: `active` or `standby`. You set the mode individually for each VM in the cluster using metadata, for example: `mode:active`. You also configure how elaborate logging should be for each node, using a `logging` metadata key that can be set to `basic` or `elaborate`. The application on each node consumes the values from instance metadata.

The instance template defines `mode:active` and `logging:basic` metadata to be used as default for all instances. You have set `logging:elaborate` in a per-instance configuration for the `node-12` VM in the cluster. Now, you want to switch `node-12` to standby mode and switch logging to `basic` for this VM.

To switch the `node-12` instance to standby and its logging to basic, run the following command:

gcloud compute instance-groups managed instance-configs update example-cluster \\
  --instance node-12 \\
  --stateful-metadata mode=standby \\
  --remove-stateful-metadata logging

The command does the following:

1.  Sets `mode:standby` metadata in the per-instance configuration that is associated with the VM, `node-12`, in the `example-cluster` MIG.
2.  Removes `logging:elaborate` metadata from the per-instance configuration for the `node-12` instance.
3.  Applies the per-instance configuration change to the `node-12` VM:
    -   Sets `mode:standby` metadata, according to the configuration.
    -   Sets `logging:basic` metadata from the instance template because the value for the `logging` key is no longer defined by the per-instance configuration.
4.  The change is applied to the VM immediately by default because the flag `--no-update-instance` is omitted.
5.  The VM keeps running during the update because the `--instance-update-minimal-action` flag is omitted and the least disruptive action is chosen for the update by default, in this case: `refresh`.

### REST

To configure stateful metadata individually for existing VM instances in a MIG, set or remove the metadata in the associated per-instance configurations. Then update the instance to [apply the configuration](/compute/docs/instance-groups/applying-viewing-removing-stateful-config-in-migs#applying_per-instance_configs).

If per-instance configurations don't yet exist for the given instances, use the [`instanceGroupManagers.updatePerInstanceConfigs` method](/compute/docs/reference/rest/v1/instanceGroupManagers/updatePerInstanceConfigs) with stateful metadata:

POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_ID/zones/ZONE/instanceGroupManagers/NAME/updatePerInstanceConfigs

{
  "perInstanceConfigs": \[
    {
      "name": "INSTANCE\_NAME",
      "preservedState" : {
        "metadata": {
          "KEY": "VALUE",
          ...
        }
      },
      "fingerprint: "FINGERPRINT"
    },
    ...
  \]
}

**Note:** You can use the `updatePerInstanceConfigs` method to update existing per-instance configurations. In this case, the method fully replaces the specified per-instance configurations with the values you specify. It is safer to use the `patchPerInstanceConfigs` method to update existing per-instance configurations because patching keeps the omitted configuration unchanged and prevents the risk of accidental deletion of stateful items or reset of values to their defaults.

If per-instance configurations already exist for the given instances, use the [`instanceGroupManagers.patchPerInstanceConfigs` method](/compute/docs/reference/rest/v1/instanceGroupManagers/patchPerInstanceConfigs)

POST https://compute.googleapis.com/compute/v1/projects/PROJECT\_ID/zones/ZONE/instanceGroupManagers/NAME/patchPerInstanceConfigs

{
  "perInstanceConfigs": \[
    {
      "name": "INSTANCE\_NAME",
      "preservedState" : {
        "metadata": {
          "KEY": "VALUE",
          ...
        }
      },
      "fingerprint: "FINGERPRINT"
    },
    ...
  \]
}

Replace the following:

-   `PROJECT_ID`: The project ID for the request.
-   `ZONE`: The [zone](/compute/docs/regions-zones#available) where the MIG is located (applies to a zonal MIG).
    -   For a regional MIG, replace `zones/ZONE` with `regions/REGION` and specify the region of the MIG.
-   `NAME`: The name of the MIG.
-   `INSTANCE_NAME`: The name of the VM for which to configure stateful metadata.
-   `KEY` and `VALUE`: Stateful metadata key-value pairs to set individually for the instances in addition to any metadata defined in the instance template.
    -   Stateful metadata values defined for the keys that already exist in the instance template override the values from the instance template.
    -   Other metadata entries from the instance template remain unaffected and available.
    -   Providing `null` as a value removes the key from the per-instance configuration.
-   `FINGERPRINT`: (Optional). The fingerprint for the given configuration if it already exists. Used for optimistic locking.

The `updatePerInstanceConfigs` and `patchPerInstanceConfigs` methods update the specified per-instance configurations but don't apply the configuration updates to the associated VM instances. The changes are applied to a VM when you update or recreate the instance. To apply the changes to a VM, you can [apply the update manually](/compute/docs/instance-groups/updating-selected-instances-in-a-mig) or use the Updater in proactive or opportunistic mode.

**Example**

You have a cluster of nodes, `example-cluster`, that can operate in one of two modes: `active` or `standby`. You set the mode individually for each VM in the cluster using metadata, for example: `mode:active`. You also configure how elaborate logging should be for each node, using a `logging` metadata key that can be set to `basic` or `elaborate`. The application on each node consumes the values from instance metadata.

The instance template defines `mode:active` and `logging:basic` metadata to be used as default for all instances. You have set `logging:elaborate` in a per-instance configuration for the `node-12` VM in the cluster. Now, you want to switch `node-12` to standby mode and switch logging to `basic` for this instance.

To switch the `node-12` VM to standby and its logging to basic, patch the associated per-instance configuration by using the `patchPerInstanceConfigs` method:

POST https://compute.googleapis.com/compute/v1/projects/example-project/zones/us-east1-c/instanceGroupManagers/example-cluster/patchPerInstanceConfigs

{
  "perInstanceConfigs": \[
    {
      "name": "node-12",
      "preservedState" : {
        "metadata": {
          "mode": "standby",
          "logging": null
        }
      }
    }
  \]
}

The method does the following:

1.  Sets `mode:standby` metadata in the per-instance configuration associated with the VM, `node-12`, in the `example-cluster` MIG.
2.  Removes `logging:elaborate` metadata from the per-instance configuration because the supplied value is `null`.

The configuration update is not yet applied to the `node-12` VM instance. The configuration update will be applied when you next recreate or update the instance or if you use [proactive](/compute/docs/instance-groups/updating-migs#choosing_between_automated_and_selective_updates) auto-updating.

To apply the per-instance configuration update to the `node-12` VM instance, call the [`instanceGroupManagers.applyUpdatesToInstances` method](/compute/docs/reference/rest/v1/instanceGroupManagers/applyUpdatesToInstances) for the instance:

POST https://compute.googleapis.com/compute/v1/projects/example-project/zones/us-east1-c/instanceGroupManagers/example-cluster/applyUpdatesToInstances

{
  "instances": \["/zones/us-east1-c/instances/node-12"\],
  "minimalAction": "NONE"
}

The method applies the updated per-instance configuration to the `node-12` VM:

1.  Sets `mode:standby` metadata, according to the per-instance configuration.
2.  Sets `logging:basic` metadata from the instance template because the value for the `logging` key is no longer defined by the per-instance configuration.
3.  The VM keeps running during the update because `minimalAction` is set to `NONE`, which allows the MIG to use the least disruptive action required for the update. An instance metadata update requires the `REFRESH` action, which does not disrupt a running instance.

## Feedback

We want to learn about your use cases, challenges, and feedback about stateful MIGs. You can share your feedback with our team at [mig-discuss@google.com](mailto:mig-discuss@google.com).

## What's next

-   Learn more about [Storing and retrieving instance metadata](/compute/docs/storing-retrieving-metadata#querying_custom_metadata).
-   [Configure stateful persistent disks](/compute/docs/instance-groups/configuring-stateful-disks-in-migs) for VMs in a MIG.
-   Learn about [applying, viewing, and removing](/compute/docs/instance-groups/configuring-stateful-metadata-in-migs) stateful configuration.
-   Learn more about [MIGs](/compute/docs/instance-groups#managed_instance_groups) and [working with managed instances](/compute/docs/instance-groups/working-with-managed-instances).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
