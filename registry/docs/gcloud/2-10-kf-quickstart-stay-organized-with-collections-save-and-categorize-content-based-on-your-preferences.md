Version 2.10

Available versions

[2.11 - Latest version](/migrate/kf/docs/2.11)  
[2.10](/migrate/kf/docs/2.10)  
[2.9](/migrate/kf/docs/2.9)  
[2.8 - EOL/Unsupported](/migrate/kf/docs/2.8)  
[2.7 - EOL/Unsupported](/migrate/kf/docs/2.7)  
[2.6 - EOL/Unsupported](/migrate/kf/docs/2.6)  
[2.5 - EOL/Unsupported](/migrate/kf/docs/2.5)  
[2.4 - EOL/Unsupported](/migrate/kf/docs/2.4)  
[2.3 - EOL/Unsupported](/migrate/kf/docs/2.3)  
[2.2 - EOL/Unsupported](/migrate/kf/docs/2.2)  
[2.1 - EOL/Unsupported](/migrate/kf/docs/2.1)  

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Migration](https://docs.cloud.google.com/docs/migration)
-   [Kf](https://docs.cloud.google.com/migrate/kf/docs)
-   [2.10](https://docs.cloud.google.com/migrate/kf/docs/2.10)
-   [Guides](https://docs.cloud.google.com/migrate/kf/docs/2.10/getting-started)

Send feedback

# Kf quickstart Stay organized with collections Save and categorize content based on your preferences.

In this quickstart, you will deploy a sample Cloud Foundry app on an existing Kf cluster.

## Before you begin

Complete the [Install Kf](/migrate/kf/docs/2.10/install) guide.

## Push an application

### Prerequisites

The following are required to complete this section:

1.  The `kf` CLI installed and in your path. See [Install Kf CLI](/migrate/kf/docs/2.10/install-cli) for instructions.
2.  You have connected to the Kf cluster:
    
    gcloud container clusters get-credentials CLUSTER\_NAME \\
      --project=CLUSTER\_PROJECT\_ID \\
      --zone=CLUSTER\_LOCATION
    
3.  The `git` CLI installed and in your path.
    

### Prepare space

1.  Create new space:
    
    ```
    kf create-space test-space
    ```
    
2.  Target the space:
    
    ```
    kf target -s test-space
    ```
    

### Push the Cloud Foundry test app

1.  Clone the [test-app repo](https://github.com/cloudfoundry-samples/test-app).
    
    ```
    git clone https://github.com/cloudfoundry-samples/test-app go-test-app
    ```
    
2.  Push the app.
    
    **Note:** It will take a few minutes for the build to complete.
    
    ```
    kf push test-app
    ```
    
3.  Get the application's URL.
    
    ```
    kf apps
    ```
    
    **Note:** The app has set the random-route property.
    
4.  Open the URL in your browser where you should see the app running.
    
    [![Successful app push on Kf](https://docs.cloud.google.com/migrate/kf/docs/images/app-quickstart-success.png)](/static/migrate/kf/docs/images/app-quickstart-success.png)
    

## Clean up

These steps should return the cluster to the starting state.

1.  Delete the application.
    
    ```
    kf delete test-app
    ```
    
2.  Delete the Space.
    
    ```
    kf delete-space test-space
    ```
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
