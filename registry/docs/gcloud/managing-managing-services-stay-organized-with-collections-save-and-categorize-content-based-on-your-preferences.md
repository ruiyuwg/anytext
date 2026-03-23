This documentation is for the **Latest** version of Knative serving, which uses fleets and Anthos Service Mesh. [Learn more](/kubernetes-engine/enterprise/knative-serving/docs/install).

The [past version (Cloud Run for Anthos) has been archived](/anthos/run/archive/docs) but the documentation remains available for existing users.

Available versions

-   **Latest**
-   [Archive](/anthos/run/archive/docs)

-   [Home](https://docs.cloud.google.com/)
-   [Technology areas](https://docs.cloud.google.com/docs)
-   [Google Kubernetes Engine (GKE)](https://docs.cloud.google.com/kubernetes-engine)
-   [GKE Enterprise](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs)
-   [Knative serving](https://docs.cloud.google.com/kubernetes-engine/enterprise/knative-serving)
-   [Documentation](https://docs.cloud.google.com/kubernetes-engine/enterprise/knative-serving/docs)
-   [Guides](https://docs.cloud.google.com/kubernetes-engine/enterprise/knative-serving/docs/architecture-overview)

Send feedback

# Managing services Stay organized with collections Save and categorize content based on your preferences.

This page describes creating a service and viewing information about a service. Services are the main resources of Knative serving.

## Creating a service

You create a new service and its [revision](/kubernetes-engine/enterprise/knative-serving/docs/managing/revisions) by deploying a container image to it for the first time. See [Deploying a new service](/kubernetes-engine/enterprise/knative-serving/docs/deploying#service) to learn more about creating services.

## Viewing the list of services in your project

You can view a list of the available services in your project using Google Cloud console or the Google Cloud CLI:

### Console

To view the services list:

1.  Go to Knative serving in the Google Cloud console:
    
    [Go to Knative serving](https://console.cloud.google.com/kubernetes/run)
    
2.  Examine the displayed list of services for your project:
    

### Command line

To list the services in your project:

```
gcloud run services list
```

You can filter this list by properties of the service definition, such as an [assigned label](/kubernetes-engine/enterprise/knative-serving/docs/configuring/labels#label-listing).

## Copying a service

You can make a copy of an existing service using Google Cloud console or YAML. You can change anything you want in the copy, including name and region.

### Console

To copy a service:

1.  Go to Knative serving in the Google Cloud console:
    
    [Go to Knative serving](https://console.cloud.google.com/kubernetes/run)
    
2.  Select the service to copy from the displayed list of services for your project:
    
    1.  Click **Copy**.
        
    2.  In the service copy page, set or change any values you want to change, such as region, etc. If you are keeping the same region, you must provide a new name for the service.
        
    3.  Click **Create** to make a copy and deploy it using the new service name.
        

### YAML

**Caution:** Deploying configuration changes using YAML files replaces the configuration of your existing services. Since a YAML file completely overwrites all configurations, you should avoid using multiple methods to modify your services. For example, do not use YAML files in conjunction with the Google Cloud console or `gcloud` commands.

You can download the configuration of an existing service into a YAML file with the `gcloud run services describe` command by using the [`--format=export`](/sdk/gcloud/reference/run/services/describe) flag. You can then modify that YAML file and deploy those changes with the `gcloud run services replace` command. You must ensure that you modify only the specified attributes.

1.  Download the configuration of your service into a file named `service.yaml` on local workspace:
    
    gcloud run services describe SERVICE \--format export \> service.yaml
    
    Replace SERVICE with the name of your Knative serving service.
    
2.  Make any desired configuration changes to the service as described in the various [configuration pages](/kubernetes-engine/enterprise/knative-serving/docs/configuring/memory-limits).
    
     ```
     apiVersion: serving.knative.dev/v1
     kind: Service
     metadata:
       annotations:
         ...
       name: SERVICE
       ...
     spec:
       template:
         metadata:
           annotations:
           ...
           name: REVISION-NAME
    ```
    -   If you are deploying the copy to the same Kubernetes cluster, replace SERVICE with the name you want to use for the copy. If you are deploying the copy to a different Kubernetes cluster, you can use the same name.
        
    -   Make sure the value for REVISION-NAME starts with the service name (SERVICE). For example, if the new service name is `mynewfoo`, then the revision name must be in the format `mynewfoo-whatever`. Optionally delete the value altogether and a new revision name is created automatically.
        
3.  Copy the service using the following command:
    
    gcloud run services replace service.yaml
    
    Use the [`--region`](/sdk/gcloud/reference/run/services/replace#--region) flag to deploy the copy to a different region.
    

## Viewing more details about a service

To see more details about a service,

### Console

To view a service's details:

1.  Go to Knative serving in the Google Cloud console:
    
    [Go to Knative serving](https://console.cloud.google.com/kubernetes/run)
    
2.  Click on the desired service in the displayed list of services for your project to open the service details view:
    
3.  Note the **REVISIONS**, **LOGS** and **DETAILS** tabs. The revisions tab shows the list of revisions, the logs tab shows the [service logs](/kubernetes-engine/enterprise/knative-serving/docs/logging), and the details tab shows the current [authentication](/kubernetes-engine/enterprise/knative-serving/docs/deploying#service) or [connectivity](#connectivity) settings.
    

### Command line

To view details about a service:

gcloud run services describe SERVICE

Replace SERVICE with the name of the service.

You can use the [`--format` flag](/sdk/gcloud/reference#--format) to format the output. For example as YAML:

gcloud run services describe SERVICE \--format yaml

You can use `--format export` to export as YAML without automatically generated labels or status:

gcloud run services describe SERVICE \--format export

You can also use the [`--format` flag](/sdk/gcloud/reference#--format) to get the URL of the service:

gcloud run services describe SERVICE \--format\='value(status.url)'

For details about the revisions of a service, see [Managing Revisions](/kubernetes-engine/enterprise/knative-serving/docs/managing/revisions).

## Changing service connectivity settings

A Knative serving service can have either of two connection options:

-   _external_, which allows external access to your service
    
-   _internal_ which restricts access only to other services in your cluster.
    

You can use the console or the Google Cloud CLI to change the settings.

### Console

To change service connectivity settings:

1.  Go to Knative serving in the Google Cloud console:
    
    [Go to Knative serving](https://console.cloud.google.com/kubernetes/run)
    
2.  Click on the desired service in the displayed list of services for your project to open the service details view.
    
3.  Click the **Triggers** tab.
    
4.  Select the desired setting and click **Save**.
    

### Command line

To change service connectivity settings, update the service with the desired connectivity setting:

```
gcloud run services update [SERVICE] --connectivity=[OPTION]
```

-   Replace `[SERVICE]` with the name of the service you are updating. You can omit this parameter entirely, but you will be prompted for the service name if you omit it.
    
-   Replace `[OPTION]` with `internal` or `external`.
    

## Deleting existing services

Deleting a service deletes all resources related to this service, including all revisions of this service whether they are serving traffic or not.

When deleting a service, the container images used by the deleted revisions are not deleted automatically from Container Registry. To delete container images from Container Registry see [Deleting images](/container-registry/docs/managing#deleting_images).

Note that deleting a service is permanent: there is no undo or restore. However, if after deleting a service, you deploy a new service with the same name in the same cluster, it will have the same endpoint URL.

### Console

To delete a service:

1.  Go to Knative serving in the Google Cloud console:
    
    [Go to Knative serving](https://console.cloud.google.com/kubernetes/run)
    
2.  Locate the service you want to delete in the services list, and click its checkbox to select it.
    
3.  Click **DELETE**. This deletes all revisions of the service.
    

### Command line

To delete a service, use the command:

```
gcloud run services delete [SERVICE]
```

Replace `[SERVICE]` with the name of your service.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
