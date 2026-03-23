This topic describes how to upgrade Alibaba Cloud SDK V1.0 of a project to Alibaba Cloud SDK V2.0.

## **Is Alibaba Cloud SDK V2.0 required?**

If you use Alibaba Cloud SDK V1.0 to integrate cloud services in a simple scenario and no issue occurs, we recommend that you do not immediately upgrade Alibaba Cloud SDK V1.0 to V2.0.

If you use Alibaba Cloud SDK V1.0 to call API operations of multiple cloud services in a complex scenario, and need to consider thread safety issues, we strongly recommend that you upgrade Alibaba Cloud SDK V1.0 to V2.0.

If you want to select technologies for a new project, we strongly recommend that you directly use Alibaba Cloud SDK V2.0.

## **Compatibility**

Alibaba Cloud SDK V2.0 is not compatible with Alibaba Cloud SDK V1.0. To upgrade an SDK V1.0 to V2.0, you can modify the SDK name when you add dependencies. This way, you can use the SDK V2.0 in subsequent development.

Alibaba Cloud SDKs V2.0 are named in the `${Service name}${API version number}` format. For example, the SDK V2.0 of Elastic Compute Service (ECS) is named `com.aliyun:ecs20140526`, and the SDK V2.0 of Virtual Private Cloud (VPC) is named `com.aliyun:vpc20160428`.

Alibaba Cloud SDKs V1.0 are named in the `aliyun-${Language}-sdk-${Service name}` format. For example, the SDK V1.0 of ECS is named `com.aliyun:aiyun-java-sdk-ecs`, and the SDK V1.0 of VPC is named `com.aliyun:aliyun-java-sdk-vpc`.

The following sample code shows how to add Maven dependencies to upgrade an SDK. In this example, the SDK V2.0 and SDK V1.0 of ECS are used. After you add the dependencies, you can use the SDK V2.0 in subsequence development.

```
<dependencies>
  <!--  V2.0 SDK  -->
  <dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>ecs20140526</artifactId>
    <version>3.1.12</version>
  </dependency>
  <!--  V1.0 SDK  -->
  <dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-core</artifactId>
    <version>4.6.3</version>
  </dependency>
  <dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-ecs</artifactId>
    <version>4.24.59</version>
  </dependency>
</dependencies>
```

## **Usage notes**

Alibaba Cloud SDK V2.0 supports more programming languages than Alibaba Cloud SDK V1.0 but has requirements for environments and frameworks. Examples:

-   Alibaba Cloud SDK V2.0 for Java requires Java 8.0 or later, while Alibaba Cloud SDK V1.0 for Java requires Java 6.0 or later.
    
-   Alibaba Cloud SDK V2.0 for Node.js supports only TypeScript. If you want to use this SDK, your project must also support TypeScript.
    

For more information, see the development documentation of the language that you use.
