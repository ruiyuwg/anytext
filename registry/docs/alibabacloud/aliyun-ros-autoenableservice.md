ALIYUN::ROS::AutoEnableService is used to automatically activate an Alibaba Cloud service or feature.

## Syntax

```
{
  "Type": "ALIYUN::ROS::AutoEnableService",
  "Properties": {
    "ServiceName": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ServiceName

String

Yes

No

The name of the Alibaba Cloud service or feature.

Valid values:

-   AHAS: Application High Availability Service
    
-   ARMS: Application Real-Time Monitoring Service (ARMS)
    
-   ARMS/App: Application Monitoring of ARMS
    
-   ARMS/PrometheusMonitor: Managed Service for Prometheus of ARMS
    
-   ARMS/SyntheticPost: Synthetic Monitoring of ARMS
    
-   ARMS/Web: Browser Monitoring of ARMS
    
-   ApiGateway: API Gateway
    
-   BatchCompute: Batch Compute
    
-   BrainIndustrial: Industrial Brain
    
-   ControlPolicy: control policy of Resource Directory
    
-   CloudSSO: CloudSSO
    
-   CloudStorageGateway: Cloud Storage Gateway (CSG)
    
-   CMS: CloudMonitor
    
-   Config: Cloud Config
    
-   CR: Container Registry
    
-   CS: Container Service for Kubernetes (ACK)
    
-   DCDN: Dynamic Content Delivery Network (DCDN)
    
-   DataHub: DataHub
    
-   DataWorks: DataWorks
    
-   EDAS: Enterprise Distributed Application Service (EDAS)
    
-   EMAS: Enterprise Mobile Application Studio (EMAS)
    
-   FC: Function Compute
    
-   FNF: CloudFlow
    
-   HBR: Cloud Backup
    
-   MaxCompute: MaxCompute
    
-   MNS: Simple Message Queue (SMQ)
    
-   IMM: Intelligent Media Management (IMM)
    
-   IOT: IoT Platform
    
-   KMS: Key Management Service (KMS)
    
-   NAS: Apsara File Storage NAS (NAS)
    
-   NLP: Natural Language Processing (NLP)
    
-   OSS: Object Storage Service (OSS)
    
-   OTS: Tablestore
    
-   PrivateLink: PrivateLink
    
-   PrivateZone: Alibaba Cloud DNS PrivateZone
    
-   RocketMQ: ApsaraMQ for RocketMQ
    
-   SAE: Serverless App Engine (SAE)
    
-   SLS: Simple Log Service (SLS)
    
-   TrafficMirror: traffic mirroring
    
-   TrustedService/ROS: trusted service of ROS in Resource Directory
    
-   VS: Video Surveillance System
    
-   Xtrace: Managed Service for OpenTelemetry
    
-   CDN: Alibaba Cloud CDN (CDN)
    
-   CDT: Cloud Data Transfer (CDT)
    
-   CDTCb: cross-border data transfer of CDT
    
-   TransitRouter: transit router
    
-   PAI: Platform for AI (PAI)
    

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ServiceName:
    Type: String
    Description: |
      Which service to enable. Valid values:
      AHAS: Application High Availability Service
      ARMS: Realtime Monitoring Service
      ApiGateway: API Gateway
      BatchCompute: Batch Compute
      BrainIndustrial: Brain Industrial
      CloudStorageGateway: Cloud Storage Gateway
      CMS: Cloud Monitor Service
      CR: Container Registry
      CS: Container Service
      DataHub: Data Hub
      DataWorks: DataWorks
      DCDN: Dynamic Route for CDN
      EDAS: Enterprise Distributed Application Service
      EMAS: Enterprise Mobile Application Studio
      FC: Function Compute
      FNF: Serverless Workflow
      MaxCompute: MaxCompute
      NAS: Network Attached Storage
      MNS: Message Service (MNS)
      : Hybrid Backup Recovery
      IMM: Intelligent Media Management
      IOT: IoT Platform
      KMS: Key Management Service
      NLP: Natural Language Processing
      OSS: Object Storage Service
      OTS: Table Store
      PrivateLink: Private Link
      PrivateZone: Private Zone
      RocketMQ: RocketMQ
      SAE: Serverless App Engine
      SLS: Log Service
      TrafficMirror: VPC Traffic Mirroring
      VS: Video Surveillance
      Xtrace: Tracing Anlaysis
      CDT: Cloud Data Transfer
      CDTCb: Cloud Data Transfer for Cross Border
      TransitRouter: Cen Transit Router
      PAI: Platform of Artificial Intelligence
    AllowedValues:
      - IOT
      - EMAS
      - MaxCompute
      - BatchCompute
      - IMM
      - Xtrace
      - DataWorks
      - FNF
      - FC
      - KMS
      - CS
      - CR
      - DataHub
      - EDAS
      - CMS
      - RocketMQ
      - ApiGateway
      - NLP
      - SLS
      - NAS
      - OSS
      - MNS
      - TrafficMirror
      - ARMS
      - SAE
      - CloudStorageGateway
      - PrivateZone
      - DCDN
      - VS
      - AHAS
      - BrainIndustrial
      - OTS
      - PrivateLink
      - CDT
      - CDTCb
      - TransitRouter
      - PAI
    AssociationPropertyMetadata:
      AutoChangeType: false
Resources:
  AutoEnableService:
    Type: 'ALIYUN::ROS::AutoEnableService'
    Properties:
      ServiceName:
        Ref: ServiceName
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ServiceName": {
      "Type": "String",
      "Description": "Which service to enable. Valid values:\nAHAS: Application High Availability Service\nARMS: Realtime Monitoring Service\nApiGateway: API Gateway\nBatchCompute: Batch Compute\nBrainIndustrial: Brain Industrial\nCloudStorageGateway: Cloud Storage Gateway\nCMS: Cloud Monitor Service\nCR: Container Registry\nCS: Container Service\nDataHub: Data Hub\nDataWorks: DataWorks\nDCDN: Dynamic Route for CDN\nEDAS: Enterprise Distributed Application Service\nEMAS: Enterprise Mobile Application Studio\nFC: Function Compute\nFNF: Serverless Workflow\nMaxCompute: MaxCompute\nNAS: Network Attached Storage\nMNS: Message Service (MNS)\n: Hybrid Backup Recovery\nIMM: Intelligent Media Management\nIOT: IoT Platform\nKMS: Key Management Service\nNLP: Natural Language Processing\nOSS: Object Storage Service\nOTS: Table Store\nPrivateLink: Private Link\nPrivateZone: Private Zone\nRocketMQ: RocketMQ\nSAE: Serverless App Engine\nSLS: Log Service\nTrafficMirror: VPC Traffic Mirroring\nVS: Video Surveillance\nXtrace: Tracing Anlaysis\nCDT: Cloud Data Transfer\nCDTCb: Cloud Data Transfer for Cross Border\nTransitRouter: Cen Transit Router\nPAI: Platform of Artificial Intelligence\n",
      "AllowedValues": [
        "IOT",
        "EMAS",
        "MaxCompute",
        "BatchCompute",
        "IMM",
        "Xtrace",
        "DataWorks",
        "FNF",
        "FC",
        "KMS",
        "CS",
        "CR",
        "DataHub",
        "EDAS",
        "CMS",
        "RocketMQ",
        "ApiGateway",
        "NLP",
        "SLS",
        "NAS",
        "OSS",
        "MNS",
        "TrafficMirror",
        "ARMS",
        "SAE",
        "CloudStorageGateway",
        "PrivateZone",
        "DCDN",
        "VS",
        "AHAS",
        "BrainIndustrial",
        "OTS",
        "PrivateLink",
        "CDT",
        "CDTCb",
        "TransitRouter",
        "PAI"
      ],
      "AssociationPropertyMetadata": {
        "AutoChangeType": false
      }
    }
  },
  "Resources": {
    "AutoEnableService": {
      "Type": "ALIYUN::ROS::AutoEnableService",
      "Properties": {
        "ServiceName": {
          "Ref": "ServiceName"
        }
      }
    }
  }
}
```
