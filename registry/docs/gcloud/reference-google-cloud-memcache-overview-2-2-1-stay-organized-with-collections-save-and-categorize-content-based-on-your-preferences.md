-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# google-cloud-memcache overview (2.2.1) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.11

### [com.google.cloud.memcache.v1](/java/docs/reference/google-cloud-memcache/2.2.1/com.google.cloud.memcache.v1)

The interfaces provided are listed below, along with usage samples.

## CloudMemcacheClient

Service Description: Configures and manages Cloud Memorystore for Memcached instances.

The `memcache.googleapis.com` service implements the Google Cloud Memorystore for Memcached API and defines the following resource model for managing Memorystore Memcached (also called Memcached below) instances:

-   The service works with a collection of cloud projects, named: `/projects/*`
-   Each project has a collection of available locations, named: `/locations/*`
-   Each location has a collection of Memcached instances, named: `/instances/*`
-   As such, Memcached instances are resources of the form: `/projects/{project_id}/locations/{location_id}/instances/{instance_id}`

Note that location\_id must be a GCP `region`; for example:

-   `projects/my-memcached-project/locations/us-central1/instances/my-memcached`

Sample for CloudMemcacheClient:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   InstanceName name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]");
   Instance response = cloudMemcacheClient.getInstance(name);
 }
 
```
 

### [com.google.cloud.memcache.v1.stub](/java/docs/reference/google-cloud-memcache/2.2.1/com.google.cloud.memcache.v1.stub)

### [com.google.cloud.memcache.v1beta2](/java/docs/reference/google-cloud-memcache/2.2.1/com.google.cloud.memcache.v1beta2)

The interfaces provided are listed below, along with usage samples.

## CloudMemcacheClient

Service Description: Configures and manages Cloud Memorystore for Memcached instances.

The `memcache.googleapis.com` service implements the Google Cloud Memorystore for Memcached API and defines the following resource model for managing Memorystore Memcached (also called Memcached below) instances:

-   The service works with a collection of cloud projects, named: `/projects/*`
-   Each project has a collection of available locations, named: `/locations/*`
-   Each location has a collection of Memcached instances, named: `/instances/*`
-   As such, Memcached instances are resources of the form: `/projects/{project_id}/locations/{location_id}/instances/{instance_id}`

Note that location\_id must be a GCP `region`; for example:

-   `projects/my-memcached-project/locations/us-central1/instances/my-memcached`

Sample for CloudMemcacheClient:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (CloudMemcacheClient cloudMemcacheClient = CloudMemcacheClient.create()) {
   InstanceName name = InstanceName.of("[PROJECT]", "[LOCATION]", "[INSTANCE]");
   Instance response = cloudMemcacheClient.getInstance(name);
 }
 
```
 

### [com.google.cloud.memcache.v1beta2.stub](/java/docs/reference/google-cloud-memcache/2.2.1/com.google.cloud.memcache.v1beta2.stub)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
