-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Distributed, hybrid, and multicloud](https://docs.cloud.google.com/docs/dhm-cloud)
-   [Google Distributed Cloud](https://docs.cloud.google.com/distributed-cloud/docs)
-   [Air-gapped](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/gdch)
-   [Appliance](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/appliance)
-   [1.0.3 (Latest)](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/appliance)

Send feedback

# Set up the IO tools to access runbooks Stay organized with collections Save and categorize content based on your preferences.

This page describes how to set up and configure the IO tool service. This service sets up a local web page to access service manuals that include runbooks, alerts, and error message descriptions which are useful for troubleshooting the deployment. Google support might ask you to follow one of these runbooks when troubleshooting. The service also includes tools and scripts mentioned in the runbooks. You can use this method to set up IO tools outside the appliance on any of your devices which has [docker](https://www.docker.com/) installed.

**Important:** To access the URLs on this page, you must connect to the internet. The URLs are provided for use when you have such access.

## Before you begin

[Configure the device and install software](/distributed-cloud/hosted/docs/latest/appliance/admin/setup)

## Download the GDC tar

**Note:** If you have already downloaded the tar as part of earlier setup you can skip to the next section to set up the IO tool.

1.  Verify your service account's access to the [private-cloud-release bucket](https://pantheon.corp.google.com/storage/browser/private-cloud-release-partner).
    
2.  On your laptop or workstation, authenticate with [gcloud](https://cloud.google.com/sdk/gcloud/reference/auth/login) and follow the instructions:
    
     ```
     gcloud auth login
    ```
    
3.  Download the GDC tar to the laptop or workstation. If the following command fails, run Step 2 and try the current step again.
    
    ```
    gsutil cp gs://private-cloud-release-partner/${GDCH_VERSION}/prod_te_gdch.tar.gz ~/
    ```
    

## Configure the IO tool

1.  Create a directory on the device and transfer the `prod_te_gdch.tar.gz` from the DTO machine to the that directory. Refer to this directory as `$GDCH_ROOT` in the following steps.
    
2.  Extract the downloaded tar to `$GDCH_ROOT`:
    
    ```
    tar -I pigz -xvf gdch.tar.gz -C $GDCH_ROOT
    ```
    
3.  Navigate to the `$GDCH_ROOT/release/` directory and use this command to extract the IO tool: docker image.
    
    ```
    gdcloud artifacts extract oci/ $GDCH_ROOT/io_tool/ --image-name gpc-system-container-images/private-cloud-devel/operation-tools:latest --docker-executable
    ```
    
4.  Use docker commands to load and then run the image:
    
    ```
    docker load $GDCH_ROOT/io_tool/gpc-system-container-images/private-cloud-devel/operation-tools.tar
    docker run -v ~/log:/var/log --net=host -it gpc-system-container-images/private-cloud-devel/operation-tools
    ```
    
5.  Wait for the document to load and then use http://127.0.0.1:7001 to access documents.
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
