NIS Traffic Analyzer is an upgraded version of the traffic analysis feature. It provides comprehensive improvements to service performance, custom sampling and storage, traffic scenario coverage, and a wider range of analysis services. These upgrades deliver a more stable, efficient, and powerful service for traffic visualization and analysis. NIS Traffic Analyzer supports the analysis of VPC and TR traffic. It will gradually replace all features of the public preview version of Traffic Analysis, which is no longer being developed. This topic describes how to migrate from the public preview version to the commercial version.

## **Feature comparison: Public preview vs. commercial version**

**Feature**

**Traffic Analysis - Public Preview (**[Features are being phased out](/help/en/nis/product-overview/announcement-on-the-conversion-of-nis-from-the-public-preview-phase-to-the-commercialization-phase)**)**

[NIS Traffic Analyzer - Commercial Version](/help/en/nis/user-guide/traffic-analyzer/)

Analysis performance

Historical data lookback period (storage duration)

1-tuple and 2-tuple: 7 days. 5-tuple: 1 day.

Customizable, up to 1 year

Data processing performance

10 TB

5,000 TB

Query time span

The viewing period is 1 day for 2-tuples and only 5 minutes for 5-tuples.

Customizable

Zone-level disaster recovery

Single zone

Multi-zone

Supported scenarios

VPC Internet traffic

Supported

Supported

VPC private network traffic

Not supported

Supported

Cross-VPC traffic

Only TR scenarios are supported.

Supports cross-VPC traffic scenarios based on TR and VPC peering connections.

Cross-region traffic

Only cross-region scenarios with TR are supported.

Supports cross-region traffic scenarios based on TR and VPC peering connections.

Hybrid cloud traffic

Only VBR connection scenarios are supported.

Supports hybrid cloud traffic scenarios where TR connects to VBR or ECR.

Top-N traffic analysis

Filter by traffic volume

Not supported

Supported

Custom traffic aggregation dimensions

Not supported

Supported

Maximum number of top-N results

100

10 million

Traffic analysis associated with instances

Not supported

Supported

Traffic type

Allowed traffic

-   Allowed traffic
    
-   Denied traffic
    

## **Internet traffic**

### **Feature limitations of NIS Traffic Analyzer**

NIS Traffic Analyzer provides analysis services by detecting Internet traffic in VPC flow logs. VPC flow logs support collecting traffic information only from Elastic Network Interfaces (ENIs). In Internet traffic scenarios, NIS Traffic Analyzer cannot guarantee the collection of Internet traffic from sources such as IP targets or Classic Load Balancer (CLB) instances.

### **Migration guide**

VPC flow logs support traffic collection at three granularities: VPC, vSwitch, and ENI. Collecting only Internet traffic is not supported. To obtain all Internet traffic analysis data with NIS Traffic Analyzer, enable traffic analysis for the required VPCs. NIS Traffic Analyzer provides the service by parsing Internet traffic from VPC flow logs. To obtain traffic analysis data for a specific public IP address, enable traffic analysis for the ENI to which the public IP address is attached.

## **VPC private network traffic**

NIS Traffic Analyzer supports the analysis of private network traffic within a VPC. To use this feature, first create an NIS Traffic Analyzer, and then add the VPC flow log as a data source.

## **Cross-VPC traffic**

NIS Traffic Analyzer supports traffic analysis for cross-VPC scenarios based on TR and VPC peering connections. To use this feature, first create an NIS Traffic Analyzer, and then add the VPC flow log or TR flow log as a data source.

## **Cross-region traffic**

NIS Traffic Analyzer supports traffic analysis for cross-region scenarios based on TR and VPC peering connections. To use this feature, first create an NIS Traffic Analyzer, and then add the VPC flow log or TR flow log as a data source.

## **Hybrid cloud traffic**

NIS Traffic Analyzer supports hybrid cloud traffic analysis for scenarios where TR connects to a VBR or an ECR. To use this feature, first create an NIS Traffic Analyzer, and then add the TR flow log as a data source.
