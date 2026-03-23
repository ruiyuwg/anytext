The Unified Full-Stack Observability Data Integration Center (Integration Center) of Application Real-Time Monitoring Service (ARMS) provides out-of-the-box observability capabilities for most monitoring targets in the cloud, including infrastructure, server-side applications, frontend applications, databases, middleware, AI services, and big data platforms. Each integration bundles metric collection, data visualization, and alerting for a specific target.

To open the Integration Center, log on to the [Managed Service for Prometheus console](https://arms-ap-southeast-1.console.aliyun.com/#/home) and click **Integration Center** in the left-side navigation pane.

## Key concepts

### Environments

An environment defines where and how metric data is collected. By default, each environment is associated with a Prometheus instance that stores the collected metrics.

**Environment type**

**Description**

**Typical use**

**Container**

Monitors containers with automatic trace management to help you intelligently install agents and process data.

Kubernetes clusters, Docker containers

**VPC**

Pulls Elastic Compute Service (ECS) instance data through virtual private clouds (VPCs). We recommend that you configure a separate environment for each VPC. ARMS collects data through VPCs first to minimize the number of agents installed in ECS instances.

Self-managed services on ECS

**Cloud service**

Integrates the monitoring data of an Alibaba Cloud service. One cloud service environment per region.

Managed cloud services (RDS, SLB, OSS, and others)

> For ARMS sub-services such as Application Monitoring and Managed Service for OpenTelemetry, not all metric data can be stored in the associated Prometheus instance.

### Components

A component is a pre-built integration that monitors a specific infrastructure target or service. Each component handles metric collection, data visualization, and alerting.

## Supported integrations

The following sections list all available components grouped by category. The environment type columns show which deployment models each component supports.

### Infrastructure

**Component**

**References**

**Container**

**VPC**

**Cloud service**

Cloud Product Metrics (Batch Integration)

[Monitor cloud services](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Kubernetes Cluster Monitoring

[Monitor an ACK cluster](/help/en/prometheus/container-observable)

Yes

\-

\-

Kubernetes GPU

[Monitor GPU resources in a Kubernetes cluster](/help/en/ack/use-prometheus-service-to-monitor-the-gpu-resources-of-a-kubernetes-cluster)

Yes

Yes

\-

Host Monitor

[Monitor ECS instances](/help/en/prometheus/use-cases/based-on-the-host-service-discovery-method-monitor-the-task-status-of-ecs-host-instances-in-prometheus)

\-

Yes

\-

SysOM System Observation

[Kernel-level container monitoring based on SysOM](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/sysom-kernel-level-container-monitoring)

Yes

\-

\-

Custom Metric Collection

[Custom data integration](/help/en/prometheus/user-guide/custom-data-access/)

Yes

Yes

\-

Service Check Monitor

[Monitor service health in an ACK cluster](/help/en/prometheus/install-the-health-inspection-component-new-version)

Yes

\-

\-

Kubernetes Event

[Monitor Kubernetes events](/help/en/prometheus/container-event-monitoring-access)

Yes

\-

\-

Edge Node Service (ENS)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

ACK One Fleet Monitor

[Configure ACK One Argo CD alerts](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/configure-ack-one-argocd-alarm)

Yes

\-

\-

ACK One Workflows Monitor

[Enable Managed Service for Prometheus](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/monitoring-services-with-prometheus)

Yes

\-

\-

Ack Backup Center

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud ECS

[Monitor ECS instances](/help/en/prometheus/use-cases/based-on-the-host-service-discovery-method-monitor-the-task-status-of-ecs-host-instances-in-prometheus)

\-

\-

Yes

Alibaba Cloud EIP

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud VPC peering link

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud VPC gateway

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun EBWP Service

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Dedicated Block Storage Cluster

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Dedicated Hosts

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun High-speed Channel (VBR)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Shadowless Cloud Desktop

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun E-HPC

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

ACK AHPA

[Monitor ACK AHPA](/help/en/prometheus/install-and-configure-the-ahpa-component)

Yes

\-

\-

Docker Container

[Monitor a Docker container](/help/en/prometheus/docker-stand-alone-container-monitoring)

\-

Yes

\-

Windows

[Monitor a Windows ECS instance](/help/en/prometheus/use-cases/monitor-windows-oss)

\-

Yes

\-

### Server-side applications

#### Tracing

Tracing components support one or more protocols. The table below shows supported protocols for each language and framework.

**Component**

**References**

**OpenTelemetry**

**SkyWalking**

**Zipkin**

**Jaeger**

Java Tracing Analysis

[Monitor Java applications](/help/en/arms/tracing-analysis/monitor-java-applications/)

Yes

Yes

Yes

Yes

Go Tracing Analysis

[Monitor Go applications](/help/en/arms/tracing-analysis/monitor-go-applications/)

Yes

Yes

Yes

Yes

LLM Application Tracing for DashScope

[Integrate services or components](/help/en/opentelemetry/user-guide/tutorials/)

Yes

\-

\-

\-

LangChain Tracing Analysis

[Integrate services or components](/help/en/opentelemetry/user-guide/tutorials/)

Yes

\-

\-

\-

LlamaIndex Tracing Analysis

[Integrate services or components](/help/en/opentelemetry/user-guide/tutorials/)

Yes

\-

\-

\-

OpenAI Tracing Analysis

[Integrate services or components](/help/en/opentelemetry/user-guide/tutorials/)

Yes

\-

\-

\-

Python Tracing Analysis

[Monitor Python applications](/help/en/arms/tracing-analysis/monitor-python-applications/)

Yes

Yes

\-

Yes

PHP Tracing Analysis

[Monitor PHP applications](/help/en/arms/tracing-analysis/monitor-php-applications/)

Yes

\-

\-

\-

Node.js Tracing Analysis

[Monitor Node.js applications](/help/en/arms/tracing-analysis/monitor-node-js-applications/)

Yes

Yes

\-

Yes

C++ Tracing Analysis

[Monitor C++ applications](/help/en/arms/tracing-analysis/monitor-cpp-applications/)

Yes

\-

\-

Yes

.NET Tracing Analysis

[Monitor .NET applications](/help/en/arms/tracing-analysis/monitor-net-applications/)

Yes

Yes

\-

\-

Rust Tracing Analysis

[Monitor Rust applications](/help/en/arms/tracing-analysis/untitled-document-1690516526900/)

\-

Yes

\-

\-

Ruby Tracing Analysis

[Monitor Ruby applications](/help/en/arms/tracing-analysis/monitor-ruby-applications/)

Yes

\-

\-

\-

OpenTelemetry

[Integrate services or components](/help/en/opentelemetry/user-guide/tutorials/)

Yes

\-

\-

\-

SkyWalking

[Integrate services or components](/help/en/opentelemetry/user-guide/tutorials/)

\-

Yes

\-

\-

Jaeger

[Integrate services or components](/help/en/opentelemetry/user-guide/tutorials/)

\-

\-

\-

Yes

Zipkin

[Integrate services or components](/help/en/opentelemetry/user-guide/tutorials/)

\-

\-

Yes

\-

#### Application monitoring

**Component**

**References**

**Container**

**VPC**

**Cloud service**

Java Application Monitor

[Monitor Java applications](/help/en/arms/application-monitoring/user-guide/monitor-java-applications/)

Yes (manual)

\-

\-

eBPF Application Monitor

[Manually integrate an application in an ACK cluster to Application Monitoring eBPF Edition](/help/en/arms/application-monitoring-ebpf/getting-started/access-application-monitoring-ebpf-version)

Yes

\-

\-

### Frontend applications

**Component**

**References**

Android

[Integrate an Android app](/help/en/arms/user-experience-monitoring/access-to-android-applications)

iOS

[Integrate an iOS app into RUM](/help/en/arms/user-experience-monitoring/access-to-ios-applications)

Web & H5

[Integrate a web or HTML5 application](/help/en/arms/user-experience-monitoring/access-web-h5-applications)

Mini APP

[Integrate a mini program](/help/en/arms/user-experience-monitoring/access-mini-program-application)

### Databases

**Component**

**References**

**Container**

**VPC**

**Cloud service**

MySQL

[Monitor a MySQL database](/help/en/prometheus/mysql-access)

Yes

Yes

Yes

Aliyun ADB

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud AnalyticDB PostgreSQL Edition

[Monitor a PostgreSQL database](/help/en/prometheus/install-and-configure-postgresql-exporters)

\-

\-

Yes

Alibaba Cloud ClickHouse

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud DTS

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud GDB Graph Database Monitor

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Lindorm

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud OceanBase

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud PolarDB

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun PolarDB-X

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud RDS PostgreSQL

[Monitor a PostgreSQL database](/help/en/prometheus/install-and-configure-postgresql-exporters)

\-

\-

Yes

Alibaba Cloud RDS SQLServer

[Install and configure a SQL Server exporter](/help/en/prometheus/sqlserver-component-access-03)

\-

\-

Yes

Alibaba Cloud Redis

[Monitor a Redis database](/help/en/prometheus/install-and-configure-a-redis-exporter)

\-

\-

Yes

Alibaba Cloud SelectDB

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Cloud database RDS (Cluster Edition)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Cloud Database for MongoDB (Legacy)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud InfluxDB

[Integrate Prometheus with TSDB for InfluxDB](https://www.alibabacloud.com/help/en/time-series-database/latest/integrate-prometheus-with-tsdb-for-influxdb-service)

\-

\-

Yes

Cloud Database Memcache Edition

[Monitor an ApsaraDB for Memcache database](/help/en/prometheus/apsaradb-for-memcache-access)

\-

\-

Yes

Aliyun MongoDB (Single Node Instance)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Cloud Database MongoDB Shard Cluster

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Cloud Database MongoDB Replicasets

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud RDS Database

[Monitor a MySQL database](/help/en/prometheus/mysql-access)

\-

\-

Yes

Cassandra

[Monitor Cassandra](/help/en/prometheus/use-cases/how-to-monitor-cassandra-with-prometheus)

Yes

Yes

\-

MongoDB

[Monitor a MongoDB database](/help/en/prometheus/install-and-configure-a-mongodb-exporter)

Yes

Yes

\-

PostgreSQL

[Monitor a PostgreSQL database](/help/en/prometheus/install-and-configure-postgresql-exporters)

Yes

Yes

\-

Redis

[Monitor a Redis database](/help/en/prometheus/install-and-configure-a-redis-exporter)

Yes

Yes

\-

SQLServer

[Install and configure a SQL Server exporter](/help/en/prometheus/sqlserver-component-access-03)

Yes

Yes

\-

TiDB

[Monitor a TiDB cluster](/help/en/prometheus/use-cases/monitor-tidb-databases)

Yes

Yes

\-

### Middleware

**Component**

**References**

**Container**

**VPC**

**Cloud service**

Kafka

[Monitor a Kafka cluster](/help/en/prometheus/kafka-access)

Yes

Yes

\-

Alibaba Cloud Global Acceleration (GA)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud ALB

[Integrate ALB with Managed Service for Prometheus](/help/en/slb/application-load-balancer/user-guide/integrate-alb-with-managed-service-for-prometheus)

\-

\-

Yes

Alibaba Cloud API Gateway

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud CDN

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud CEN

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Cloud NAT

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud DCDN

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun DDoS (International)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud DDoS High Protection (New BGP)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Native DDoS Protection

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Grafana Service

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Kafka Message Queue Service

[Monitor a Kafka cluster](/help/en/prometheus/kafka-access)

\-

\-

Yes

Alibaba Cloud MSE Service - Cloud Native Gateway

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud MSE Service - Registry & Configuration Center

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud NLB

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun OSS

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud RabbitMQ

[Monitor a RabbitMQ cluster](/help/en/prometheus/install-and-configure-a-rabbitmq-exporter)

\-

\-

Yes

Alibaba Cloud RocketMQ (4.0) Service

[Monitor a RocketMQ cluster](/help/en/prometheus/install-and-configure-a-rocketmq-exporter)

\-

\-

Yes

Aliyun RocketMQ (5.0) Service

[Monitor a RocketMQ cluster](/help/en/prometheus/install-and-configure-a-rocketmq-exporter)

\-

\-

Yes

Alibaba Cloud SAE Service

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Serverless Workflow

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud SLB

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud SLS

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud WAF

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Edge Network Acceleration ENA

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Key Management Service

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Live Video Streaming

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun File Storage NAS

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud ASM

[Install and configure the ASM exporter](/help/en/prometheus/install-and-configure-the-asm-exporter-01)

Yes

\-

\-

Managed CoreDNS

[Install and configure the CoreDNS Performance Monitoring exporter](/help/en/prometheus/install-and-configure-the-coredns-performance-monitoring-exporter)

Yes

\-

\-

ClickHouse

[Monitor a ClickHouse database](/help/en/prometheus/clickhouse-access)

Yes

Yes

\-

Elasticsearch

[Monitor an Elasticsearch instance](/help/en/prometheus/install-and-configure-an-elasticsearch-exporter)

Yes

Yes

\-

Istio

[Integrate Prometheus with Grafana, Istio, and HPA](/help/en/arms/prometheus-monitoring/how-can-i-integrate-prometheus-with-third-party-systems)

Yes

\-

\-

Jenkins

[Monitor a Jenkins server](/help/en/prometheus/jenkins-access)

Yes

\-

\-

Knative

[Monitor Knative](/help/en/prometheus/install-and-configure-a-knative-exporter)

Yes

\-

\-

Micrometer

[Monitor Micrometer Java applications](/help/en/arms/prometheus-monitoring/monitor-micrometer-java-applications)

Yes

Yes

\-

Nginx

[Monitor an NGINX cluster](/help/en/prometheus/nginx-component-access)

Yes

Yes

\-

Nginx Ingress Controller

[Monitor an ACK cluster](/help/en/prometheus/container-observable)

Yes

\-

\-

RabbitMQ

[Monitor a RabbitMQ cluster](/help/en/prometheus/install-and-configure-a-rabbitmq-exporter)

Yes

Yes

\-

RocketMQ

[Monitor a RocketMQ cluster](/help/en/prometheus/install-and-configure-a-rocketmq-exporter)

Yes

Yes

\-

TiDB

[Monitor a TiDB cluster](/help/en/prometheus/use-cases/monitor-tidb-databases)

Yes

Yes

\-

ZooKeeper

[Monitor a ZooKeeper instance](/help/en/prometheus/install-and-configure-a-zookeeper-exporter)

Yes

Yes

\-

### AI

**Component**

**References**

**Container**

**VPC**

**Cloud service**

Kubernetes GPU

[Monitor GPU resources in a Kubernetes cluster](/help/en/ack/use-prometheus-service-to-monitor-the-gpu-resources-of-a-kubernetes-cluster)

Yes

Yes

\-

Alibaba Cloud FC

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun PAI-EAS

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud PAI-Interactive Modeling (DSW)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun PAI-Quota

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun PAI-DLC

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud PAI EAS Resource Group

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Intelligence Compute Eflo

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Ray

Use Integration Center to integrate monitoring data

Yes

\-

\-

Fluid

[Enable Managed Service for Prometheus for Fluid](/help/en/ack/cloud-native-ai-suite/user-guide/enable-monitoring-for-the-fluid-components)

Yes

\-

\-

### Big data

**Component**

**References**

**Container**

**VPC**

**Cloud service**

Alibaba Cloud E-MapReduce

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Elasticsearch Cloud Monitoring

[Monitor an Elasticsearch instance](/help/en/prometheus/install-and-configure-an-elasticsearch-exporter)

\-

\-

Yes

Alibaba Cloud HBase

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Hologres (Legacy)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud Logstash

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Alibaba Cloud MaxCompute Service

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Hologres (Follower Instance) Real-time Warehouse Monitoring

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Hologres (Lakehouse Acceleration)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Cloud Native Hologres (Computing Cluster)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Aliyun Hologres (Universal)

[Monitor an Alibaba Cloud service](/help/en/prometheus/cloud-service-observable)

\-

\-

Yes

Fluid

[Enable Managed Service for Prometheus for Fluid](/help/en/ack/cloud-native-ai-suite/user-guide/enable-monitoring-for-the-fluid-components)

Yes

\-

\-
