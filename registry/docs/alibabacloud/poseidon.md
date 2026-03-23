Poseidon is a container network policy plugin from ACK that implements the standard Kubernetes network policy feature. This topic outlines the Poseidon component, its usage instructions, and its change log.

## Component introduction

Poseidon is a container network policy plugin developed by ACK that implements the standard Kubernetes network policy feature.

## Usage instructions

For more information about using network policies in ACK Serverless clusters, see [Use network policies](/help/en/ack/serverless-kubernetes/user-guide/using-the-network-policy-networkpolicy#wAicU).

## Limits

The network policy feature is supported only in ACK Serverless clusters, for Elastic Container Instance (ECI) in ACK clusters, and on ACS CPU instances.

To use the ACK GlobalNetworkPolicy feature for ECS instances in an ACK cluster, the cluster must use the Terway network plugin and have the network policy feature enabled.

## Change log

### July 2024

**Version number**

**Date**

**Changes**

**Impact**

v0.5.2

July 29, 2024

Fixed a compatibility issue with ACK Serverless clusters.

This upgrade does not affect your services.

v0.5.1

July 9, 2024

Fixed an issue where the Namespace Selector might not take effect.

This upgrade does not affect your services.

v0.5.0

July 1, 2024

Added support for ACK NetworkPolicy.

This upgrade does not affect your services.

### September 2023

**Version number**

**Date**

**Changes**

**Impact**

v0.3.0

September 8, 2023

Added support for named ports in network policies.

This upgrade does not affect your services.

### July 2023

**Version number**

**Date**

**Changes**

**Impact**

v0.1.0

July 6, 2023

Added support for using the network policy feature in ACK Serverless clusters.

This upgrade does not affect your services.
