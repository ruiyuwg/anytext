`aliyun-acr-credential-helper` enables credential-less pulling of private images from Container Registry (ACR) Personal Edition or Enterprise Edition within Container Service for Kubernetes (ACK) clusters. This topic describes the features, usage, and change log of `aliyun-acr-credential-helper`.

## Overview

`aliyun-acr-credential-helper` pulls private images by reading the `acr-configuration` ConfigMap in the `kube-system` namespace of an ACK cluster. It provides the following features:

-   **Credential-free authentication:** Enables seamless authentication for ACR Enterprise Edition and ACR Personal Edition (created on or before September 8, 2024).
    
-   **Multi-account support:** Pulls private images from the current account's registry by default. Also supports pulling images from other Alibaba Cloud accounts via cross-account authorization or by configuring an AccessKey ID and AccessKey Secret.
    
-   **Cross-region support:** Supports pulling private images from ACR instances across different regions.
    

## Usage

For details on using the credential-less add-on, see [Use aliyun-acr-credential-helper to pull images without credentials (unmanaged)](/help/en/ack/use-the-aliyun-acr-credential-helper-component-to-pull-images-without-using-secrets#task-2456294) or [Use aliyun-acr-credential-helper to pull images without credentials (managed)](/help/en/ack/pull-images-without-a-password-in-a-self-managed-kubernetes-cluster#task-2080408).

## Release history

### **July 2025**

**Version**

**Date**

**Description**

**Impact**

v25.07.21.1-67f1f51-aliyun

July 21, 2025

Unmanaged credential helper: Supports Security Hardening Mode for Elastic Compute Service (ECS) metadata.

This update does not affect your services.

### September 2024

**Version**

**Date**

**Description**

**Impact**

v24.09.05.1-e65351a-aliyun

September 5, 2024

Unmanaged credential helper: Fixed an issue where Secrets would occasionally become invalid in `v24.08.01.1-1aa1880-aliyun`.

This update does not affect your services.

### August 2024

**Version**

**Date**

**Description**

**Impact**

v24.08.01.1-1aa1880-aliyun

August 26, 2024

Unmanaged credential helper: Restricted Secret permissions.

This update does not affect your services.

### May 2024

**Version**

**Date**

**Description**

**Impact**

v24.01.29.1-5318af4-aliyun

May 10, 2024

Managed credential helper: Fixed error handling for API call failures.

This update does not affect your services.

### January 2024

**Version**

**Date**

**Description**

**Impact**

v24.01.16.1-aeea43b-aliyun

January 22, 2024

Unmanaged credential helper: Fixed error handling for API call failures.

This update does not affect your services.

### April 2023

**Version**

**Date**

**Description**

**Impact**

v23.02.06.2-74e2172-aliyun

April 4, 2023

The add-on now supports both worker and managed roles, making the dependency on worker roles optional.

This change affects how you use the add-on. See [\[Product Change\] Announcement on changing the permission dependencies of aliyun-acr-credential-helper](/help/en/ack/product-overview/product-changes-revoke-the-permissions-on-which-aliyun-acr-credential-helper-relies#task-2292520).

### March 2023

**Version**

**Date**

**Description**

**Impact**

v23.02.06.1-74e2172-aliyun

March 15, 2023

-   Fixed several known issues.
    
-   Added support for RAM Roles for Service Accounts (RRSA) permission configuration.
    
-   Added support for immediate use of `ServiceAccounts` created during Helm Chart installation.
    
-   Added support for diagnosing the credential-less add-on through intelligent O&M.
    

This update does not affect your services.

### March 2022

**Version**

**Date**

**Description**

**Impact**

v22.03.25.1-efe240e-aliyun

March 25, 2022

-   Fixed version conflicts caused by multiple controllers updating Secrets at the same time.
    
-   Enabled auto scaling for the default node pool.
    

This update does not affect your services.

### January 2022

**Version**

**Date**

**Description**

**Impact**

v22.01.04.0-f637776-aliyun

January 4, 2022

-   Added support for the Advanced RISC Machine (ARM) architecture.
    
-   The installation method has changed: `aliyun-acr-credential-helper` is no longer installed by default during cluster creation and must now be installed manually from the **Add-ons** page.
    
-   Optimized add-on performance.
    

This update does not affect your services.

### November 2021

**Version**

**Date**

**Description**

**Impact**

v21.11.15.0-19d8bc1-aliyun

November 15, 2021

Upgraded the ClusterRole version.

This update does not affect your services.

### September 2021

**Version**

**Date**

**Description**

**Impact**

v21.09.22.0-450db22-aliyun

September 22, 2021

The add-on now reports events in the cluster when it encounters issues.

This update does not affect your services.

### January 2021

**Version**

**Date**

**Description**

**Impact**

v21.01.26.0-9ac7d9b-aliyun

January 26, 2021

Optimized the authentication method.

This update does not affect your services.

### August 2020

**Version**

**Date**

**Description**

**Impact**

v20.08.20.0-c2da10b-aliyun

August 24, 2020

Fixed an issue where pulling private images failed due to expired tokens.

This update does not affect your services.

### July 2020

**Version**

**Date**

**Description**

**Impact**

v20.07.13.0-2866ccd-aliyun

July 13, 2020

**New features**:

-   Added support for making OpenAPI calls over the internal network.
    
-   Added support for using a custom AccessKey ID and AccessKey Secret to obtain image pull credentials.
    

**Optimization**: Reduced the frequency of OpenAPI calls.

This update does not affect your services.

### March 2020

**Version**

**Date**

**Description**

**Impact**

v20.03.16.0-36d5d7e-aliyun

March 16, 2020

**New feature**: Added support for pulling cross-account private images.

This update does not affect your services.
