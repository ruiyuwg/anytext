-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Google Cloud Memorystore for Redis V1 API - Class Google::Cloud::Redis::Cluster::V1::PscConnection (v1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.3.1 (latest)](/ruby/docs/reference/google-cloud-redis-cluster-v1/latest/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [1.3.0](/ruby/docs/reference/google-cloud-redis-cluster-v1/1.3.0/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [1.2.0](/ruby/docs/reference/google-cloud-redis-cluster-v1/1.2.0/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [1.1.0](/ruby/docs/reference/google-cloud-redis-cluster-v1/1.1.0/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [1.0.1](/ruby/docs/reference/google-cloud-redis-cluster-v1/1.0.1/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [0.6.0](/ruby/docs/reference/google-cloud-redis-cluster-v1/0.6.0/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [0.5.0](/ruby/docs/reference/google-cloud-redis-cluster-v1/0.5.0/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [0.4.2](/ruby/docs/reference/google-cloud-redis-cluster-v1/0.4.2/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [0.3.0](/ruby/docs/reference/google-cloud-redis-cluster-v1/0.3.0/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [0.2.2](/ruby/docs/reference/google-cloud-redis-cluster-v1/0.2.2/Google-Cloud-Redis-Cluster-V1-PscConnection)
-   [0.1.0](/ruby/docs/reference/google-cloud-redis-cluster-v1/0.1.0/Google-Cloud-Redis-Cluster-V1-PscConnection)

Reference documentation and code samples for the Google Cloud Memorystore for Redis V1 API class Google::Cloud::Redis::Cluster::V1::PscConnection.

Details of consumer resources in a PSC connection.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #address

```
def address() -> ::String
```

**Returns**

-   (::String) — Required. The IP allocated on the consumer network for the PSC forwarding rule.

### #address=

```
def address=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The IP allocated on the consumer network for the PSC forwarding rule.

**Returns**

-   (::String) — Required. The IP allocated on the consumer network for the PSC forwarding rule.

### #connection\_type

```
def connection_type() -> ::Google::Cloud::Redis::Cluster::V1::ConnectionType
```

**Returns**

-   ([::Google::Cloud::Redis::Cluster::V1::ConnectionType](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-redis-cluster-v1/1.0.0/Google-Cloud-Redis-Cluster-V1-ConnectionType)) — Output only. Type of the PSC connection.

### #forwarding\_rule

```
def forwarding_rule() -> ::String
```

**Returns**

-   (::String) — Required. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.

### #forwarding\_rule=

```
def forwarding_rule=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.

**Returns**

-   (::String) — Required. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.

### #network

```
def network() -> ::String
```

**Returns**

-   (::String) — Required. The consumer network where the IP address resides, in the form of projects/{project\_id}/global/networks/{network\_id}.

### #network=

```
def network=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The consumer network where the IP address resides, in the form of projects/{project\_id}/global/networks/{network\_id}.

**Returns**

-   (::String) — Required. The consumer network where the IP address resides, in the form of projects/{project\_id}/global/networks/{network\_id}.

### #project\_id

```
def project_id() -> ::String
```

**Returns**

-   (::String) — Optional. Project ID of the consumer project where the forwarding rule is created in.

### #project\_id=

```
def project_id=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Optional. Project ID of the consumer project where the forwarding rule is created in.

**Returns**

-   (::String) — Optional. Project ID of the consumer project where the forwarding rule is created in.

### #psc\_connection\_id

```
def psc_connection_id() -> ::String
```

**Returns**

-   (::String) — Required. The PSC connection id of the forwarding rule connected to the service attachment.

### #psc\_connection\_id=

```
def psc_connection_id=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The PSC connection id of the forwarding rule connected to the service attachment.

**Returns**

-   (::String) — Required. The PSC connection id of the forwarding rule connected to the service attachment.

### #psc\_connection\_status

```
def psc_connection_status() -> ::Google::Cloud::Redis::Cluster::V1::PscConnectionStatus
```

**Returns**

-   ([::Google::Cloud::Redis::Cluster::V1::PscConnectionStatus](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-redis-cluster-v1/1.0.0/Google-Cloud-Redis-Cluster-V1-PscConnectionStatus)) — Output only. The status of the PSC connection. Please note that this value is updated periodically. To get the latest status of a PSC connection, follow https://cloud.google.com/vpc/docs/configure-private-service-connect-services#endpoint-details.

### #service\_attachment

```
def service_attachment() -> ::String
```

**Returns**

-   (::String) — Required. The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

### #service\_attachment=

```
def service_attachment=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

**Returns**

-   (::String) — Required. The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
