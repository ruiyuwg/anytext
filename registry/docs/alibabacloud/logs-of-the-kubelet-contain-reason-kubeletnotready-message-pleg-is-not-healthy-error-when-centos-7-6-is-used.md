## Issue

When a Container Service for Kubernetes (ACK) cluster uses CentOS 7.6, the following error message appears in the logs of the kubelet:

Reason:KubeletNotReady Message:PLEG is not healthy:

## Cause

If the systemd-219-62.el7\_6.6.x86\_64 package used by CentOS 7.6 is defective, the error occurs. For more information, see [Node flapping between Ready/NotReady with PLEG issues](https://github.com/kubernetes/kubernetes/issues/45419).

## Solution

Back up your data by using snapshots. Run the following command on each node of the ACK cluster to update the systemd package to the latest version. Then, rerun systemd.

yum update -y systemd && systemctl daemon-reexec

## Applicable scope

-   Dedicated Kubernetes clusters in ACK
-   Managed Kubernetes clusters in ACK
