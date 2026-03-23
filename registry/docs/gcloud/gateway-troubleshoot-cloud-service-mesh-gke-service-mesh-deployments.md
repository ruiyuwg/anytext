Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the [Cloud Service Mesh overview](/service-mesh/docs/overview).

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Networking](https://docs.cloud.google.com/docs/networking)
-   [Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

# Troubleshoot Cloud Service Mesh GKE service mesh deployments

This guide contains information for resolving issues with Gateway API service mesh deployments.

## Information in the `status` field

All Gateway API resources have a `status` field that reflects the status of resources from the controller perspective. In addition to the `status` field, the controller appends events to Gateway API resources to provide information about its operations on those resources.

For example, use the following commands to inspect the status and events of a `TDMesh`:

kubectl describe tdmesh td-mesh

The output is similar to the following:

...
Status:
  Conditions:
    Last Transition Time:  1970-01-01T00:00:00Z
    Message:               Waiting for controller
    Reason:                NotReconciled
    Status:                False
    Type:                  Scheduled
Events:
...

The previous status indicates that the controller has not started to reconcile this particular mesh. If this status lasts for more than 5 minutes with no events appended, read the following section, [Controller does not seem to reconcile a `TDMesh` resource](/service-mesh/legacy/gateway/gke-gateway-overview#controller-issue) to further troubleshoot the issue.

You can use a similar method to debug issues related to other resources, such as `HTTPRoute`, `TCPRoute`, and other routing resources.

Usually, the statuses and events indicate the underlying issue.

### Controller does not seem to reconcile a `TDMesh` resource

To diagnose the issue, confirm that a `gke-td` `GatewayClass` exists:

kubectl get gatewayclasses

The output should include a `GatewayClass` named `gke-td`.

NAME             CONTROLLER
gke-td           networking.gke.io/gateway

If a `GatewayClass` with that name is not returned, follow [Install the required custom resource definitions](/service-mesh/legacy/gateway/prepare-gateway#install-crds) to confirm all required CRDs are installed in the config cluster, then reenable the hub feature for the Cloud Service Mesh Google Kubernetes Engine service mesh with the following commands:

1.  Disable the feature:
    
    gcloud container hub ingress disable
    
2.  Re-enable the feature:
    
    gcloud container hub ingress enable \\
      --config-membership=/projects/PROJECT\_ID/locations/global/memberships/gke-1
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
