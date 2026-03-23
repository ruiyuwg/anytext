The Gateway with Inference Extension component is an enhanced component built on the Kubernetes Gateway API and its Inference Extension specification. It supports Layer 4 and Layer 7 routing services in Kubernetes and provides intelligent load balancing for large language model (LLM) inference scenarios. This topic introduces the Gateway with Inference Extension component, explains how to use it, and provides its change log.

## **Component information**

The Gateway with Inference Extension component is built on the [Envoy Gateway](https://gateway.envoyproxy.io/) project. It is compatible with Gateway API features and integrates the Gateway API's inference extension. The component primarily provides load balancing and routing for LLM inference services.

## **Usage instructions**

-   The Gateway with Inference Extension component requires the CustomResourceDefinitions (CRDs) provided by the Gateway API component. Before you install the Gateway with Inference Extension, ensure that the Gateway API component is installed in your cluster. For more information, see [Install components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview#steps-xb7-sjl-gtc).
    
-   For more information about using the Gateway with Inference Extension component, see [Overview of Gateway with Inference Extension](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gateway-with-inference-extension-overview/).
    

## **Change log**

### **December 2025**

**Version number**

**Change date**

**Changing Content**

**Impact**

v1.4.0-apsara.4

December 16, 2025

-   Supports the InferencePool v1 CRD.
    
-   Supports the latest vllm v1 inference engine.
    
-   Improves the scheduling capability of smart routing during high concurrency.
    

Upgrading from an earlier version restarts the gateway pod. Perform the upgrade during off-peak hours.

### **September 2025**

**Version number**

**Change date**

**Changes**

**Impact**

v1.4.0-apsara.3

September 4, 2025

-   Supports configuring inference routes for SGLang PD-separated services.
    
-   Supports prefix cache-aware routing in precise mode.
    
-   Supports routing to external Model as a Service (MaaS) services.
    
-   Supports integration with Alibaba Cloud Content Moderation to implement AI content review.
    
-   Supports configuring inference routing policies using the InferenceTrafficPolicy API.
    

Upgrading from an earlier version restarts the gateway pod. Perform the upgrade during off-peak hours.

### **May 2025**

**Version number**

**Change date**

**Change History**

**Impact**

v1.4.0-aliyun.1

May 27, 2025

-   Supports Gateway API 1.3.0.
    
-   Inference extension:
    
    -   Supports multiple inference service frameworks, such as vLLM, SGLang, and TensorRT-LLM.
        
    -   Supports prefix-aware load balancing.
        
    -   Supports routing for inference services based on model names.
        
    -   Supports inference request queuing and priority scheduling.
        
-   Provides observability for generative AI requests.
    
-   Supports global rate limiting.
    
-   Supports global rate limiting based on tokens in generative AI requests.
    
-   Supports adding Secret content to specified request headers.
    

Upgrading from an earlier version restarts the gateway pod. Perform the upgrade during off-peak hours.

### **April 2025**

**Version number**

**Change date**

**Changes**

**Impact**

v1.3.0-aliyun.2

May 7, 2025

-   Supports ACS clusters.
    
-   Inference extension enhancement: Supports referencing InferencePool resources in HTTPRoute. Also supports InferencePool-level capabilities such as weighted routing, traffic mirroring, and circuit breaking.
    
-   Supports prefix-aware load balancing.
    

Upgrading from an earlier version restarts the gateway pod. Perform the upgrade during off-peak hours.

### **March 2025**

**Version number**

**Change date**

**Description**

**Impact**

v1.3.0-aliyun.1

March 12, 2025

-   Supports Gateway API v1.2.
    
-   Supports Inference Extension, which provides intelligent load balancing for large language model (LLM) inference scenarios.
    

This upgrade does not affect your services.
