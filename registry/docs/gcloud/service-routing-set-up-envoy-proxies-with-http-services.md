You are viewing archived v1.22 Service Mesh documentation.

Available versions

[Cloud Service Mesh latest](/service-mesh/docs)  
[Cloud Service Mesh 1.26 archive](/service-mesh/v1.26/docs)  
[Cloud Service Mesh 1.24 archive](/service-mesh/v1.25/docs)  
[Cloud Service Mesh 1.24 archive](/service-mesh/v1.24/docs)  
[Cloud Service Mesh 1.23 archive](/service-mesh/v1.23/docs)  
[Cloud Service Mesh 1.22 archive](/service-mesh/v1.22/docs)  
[Cloud Service Mesh 1.21 archive](/service-mesh/v1.21/docs)  
[Cloud Service Mesh 1.20 archive](/service-mesh/v1.20/docs)  
[Anthos Service Mesh 1.19 archive](/service-mesh/v1.19/docs)  

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Networking](https://docs.cloud.google.com/docs/networking)
-   [Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs)
-   [v1.22](https://docs.cloud.google.com/service-mesh/v1.22/docs)
-   [Guides](https://docs.cloud.google.com/service-mesh/v1.22/docs/overview)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

# Set up Envoy proxies with HTTP services

**Note:** This guide only supports Cloud Service Mesh with Google Cloud APIs and does not support Istio APIs. For more information see, [Cloud Service Mesh overview](/service-mesh/docs/overview).

This guide demonstrates how to configure Cloud Service Mesh with an Envoy proxy-based service mesh, HTTP services, and `Mesh` and `HTTPRoute` resources.

[![Envoy proxies with HTTPRoute and Mesh resources](/static/service-mesh/v1.22/docs/images/envoy-mesh-httproute.svg)](/static/service-mesh/v1.22/docs/images/envoy-mesh-httproute.svg)

Envoy proxies with `HTTPRoute` and `Mesh` resources (click to enlarge)

## Before you begin

Make sure that you complete the tasks described in [Prepare to set up with Envoy and proxyless workloads](/service-mesh/v1.22/docs/onboarding/prepare-service-routing-envoy-proxyless).

## Configure the `Mesh` resource

Envoy proxies running as sidecars receive their service routing configuration from Cloud Service Mesh. The `Mesh` name is the key that the sidecar proxy uses to request the configuration associated with the `Mesh` resource. Cloud Service Mesh provides the routing configuration to the proxy. The sidecar proxy then directs traffic to the correct backend service, relying on request parameters such as the hostname, headers, and others that are configured in the `Route` resources.

1.  Create the `Mesh` resource specification and save it in a file called `mesh.yaml`.
    
    name: sidecar-mesh
    interceptionPort: 15001
    

The interception port defaults to `15001` if you don't specify it in the `mesh.yaml` file.

1.  Create the `Mesh` resource using the mesh.yaml specification.
    
    gcloud network-services meshes import sidecar-mesh \\
      --source=mesh.yaml \\
      --location=global
    

After the `Mesh` resource is created, Cloud Service Mesh is ready to serve the configuration, but because there are no services defined yet, the configuration is empty. The next step is to define your services and attachment.

## Configure the HTTP server

For demonstration purposes, you create a backend service with autoscaled VMs using [managed instance groups](/compute/docs/instance-groups#managed_instance_groups) as the backends. The VMs serve a `hello world` text phrase, using the HTTP protocol on port `80`.

1.  Create the instance template with a `helloworld` HTTP service on port `80`.
    
    gcloud compute instance-templates create td-httpd-vm-template \\
      --scopes=https://www.googleapis.com/auth/cloud-platform \\
      --tags=http-td-server \\
      --image-family=debian-11 \\
      --image-project=debian-cloud \\
      --metadata=startup-script="#! /bin/bash
    sudo apt-get update -y
    sudo apt-get install apache2 -y
    sudo service apache2 restart
    echo '<!doctype <html><body><h1>'\\\`$(/bin/hostname)\\\`'</h1></body></html>' | sudo tee /var/www/html/index.html"
    
2.  Create a managed instance group based on the template.
    
    gcloud compute instance-groups managed create http-td-mig-us-east1 \\
      --zone=ZONE \\
      --size=2 \\
      --template=td-httpd-vm-template
    
3.  Create a health check.
    
    gcloud compute health-checks create http http-helloworld-health-check
    
4.  Create a firewall rule to allow incoming health check connections to instances in your network.
    
    gcloud compute firewall-rules create http-vm-allow-health-checks \\
      --network=default \\
      --action=ALLOW \\
      --direction=INGRESS \\
      --source-ranges=35.191.0.0/16,130.211.0.0/22 \\
      --target-tags=http-td-server \\
      --rules=tcp:80
    
5.  Create a [global backend service](/load-balancing/docs/backend-service) with a load balancing scheme of `INTERNAL_SELF_MANAGED` and add the health check.
    
    gcloud compute backend-services create http-helloworld-service \\
      --global \\
      --load-balancing-scheme=INTERNAL\_SELF\_MANAGED \\
      --protocol=HTTP \\
      --health-checks http-helloworld-health-check
    
6.  Add the managed instance group to the backend service. The following example uses the managed instance group you created previously. The VMs in the managed instance group run the sample HTTP service that you created.
    
    gcloud compute backend-services add-backend http-helloworld-service \\
      --instance-group=http-td-mig-us-east1 \\
      --instance-group-zone=ZONE \\
      --global
    

## Set up routing with an `HTTPRoute` resource

The `Mesh` resource and services are configured. Connect them with an `HTTPRoute` resource that associates a hostname with a backend service.

1.  Create the `HTTPRoute` specification and save it to a file called `http_route.yaml`.
    
    You can use either `PROJECT_ID` or `PROJECT_NUMBER`.
    
    name: helloworld-http-route
    hostnames:
    - helloworld-gce
    meshes:
    - projects/PROJECT\_NUMBER/locations/global/meshes/sidecar-mesh
    rules:
    - action:
       destinations:
       - serviceName: "projects/PROJECT\_NUMBER/locations/global/backendServices/http-helloworld-service"
    
2.  Create the `HTTPRoute` resource using the specification in the `http_route.yaml` file.
    
    gcloud network-services http-routes import helloworld-http-route \\
      --source=http\_route.yaml \\
      --location=global
    

Cloud Service Mesh is now configured to load balance traffic for the services specified in the `HTTPRoute` resource across the VMs in the managed instance group.

## Create an HTTP client with an Envoy sidecar

You can verify the deployment by creating a client VM with an Envoy sidecar proxy that requests the Cloud Service Mesh configuration that was created earlier. The `mesh` parameter in the `gcloud` command refers to the `Mesh` resource that you already created.

1.  Create an instance template.
    
    gcloud beta compute instance-templates create td-vm-client-template \\
      --image-family=debian-11 \\
      --image-project=debian-cloud \\
      --service-proxy=enabled,mesh=sidecar-mesh
    
2.  Create a VM with an Envoy proxy that is connected to Cloud Service Mesh.
    
    gcloud compute instances create td-vm-client \\
      --zone=ZONE \\
      --source-instance-template td-vm-client-template
    
3.  Sign in to the VM.
    
    gcloud compute ssh td-vm-client --zone=ZONE
    
4.  Run the `curl` command to verify HTTP connectivity to the test services.
    
    curl -H "Host: helloworld-gce" http://10.0.0.1/
    

The command should return a response from one of the VMs in the managed instance group, with its hostname printed to the console.

## What's next

-   For information about listing route resources associated with a `Mesh` or `Gateway` resource, see [List `Route` resources](/service-mesh/v1.22/docs/service-routing/list-route-resources).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
