To provide finer control over node lifecycle management, Container Service for Kubernetes (ACK) is updating the behavior of auto-upgrade, auto-repair, and auto-vulnerability-fixing features in managed node pools. Default settings for certain automated features will change from enabled to disabled, and legacy parameters will be replaced with new, more granular configuration options.

## **Change 1: Auto upgrade configuration of kubelet and container runtimes**

#### **Change details**

-   **New default value**: Starting **August 31, 2025**, for new node pools with `management.enable=true`, the default value of `management.auto_upgrade` (which controls automatic upgrades of kubelet and container runtimes) will change from `true` to `false`.
    
-   **Parameter removal**: Starting **January 31, 2026**, the following parameters will be fully deprecated and removed from the relevant API operations:
    
    -   `management.auto_upgrade`
        
    -   `management.auto_upgrade_policy`
        
    
    Affected APIs: 
    
    -   [CreateClusterNodePool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createclusternodepool)
        
    -   [ModifyClusterNodePool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-modifyclusternodepool)
        
    -   [DescribeClusterNodePoolDetail](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describeclusternodepooldetail)
        
    -   [DescribeClusterNodePools](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describeclusternodepools)
        

#### **Alternative solution**

Configure the [cluster auto upgrade feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster) to automatically upgrade managed node pools. This provides centralized lifecycle management with greater control.

## **Change 2: Decoupling of node auto repair and vulnerability fixing**

#### **Change details**

-   **Parameter deprecation**:
    
    The master control parameter `management.enable` will be deprecated starting **August 5, 2025**, and fully removed on **January 31, 2026**.
    
    **Replacement parameters**: Two independent parameters will replace the monolithic `management.enable`:
    
    -   `management.auto_repair`: Enables or disables automatic node repair.
        
    -   `management.auto_vul_fix`: Enables or disables automatic vulnerability fixing.
        
-   **New default values**:
    
    Starting **August 31, 2025**, the default values of `management.auto_vul_fix` and `management.auto_repair` will change to `false` in the following API operations:
    
    -   [CreateClusterNodePool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createclusternodepool)
        
    -   [ModifyClusterNodePool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-modifyclusternodepool)
        
    -   [DescribeClusterNodePoolDetail](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describeclusternodepooldetail)
        
    -   [DescribeClusterNodePools](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describeclusternodepools)
        
    
    **Parameter**
    
    **Previous default behavior**
    
    **New default value**
    
    `management.auto_vul_fix`
    
    Defaults to the value of `management.enable`.
    
    `false`
    
    `management.auto_repair`
    
    Defaults to the value of `management.enable`.
    
    `false`
    
    This change allows you to independently configure auto repair and auto vulnerability fixing based on your operational needs.
    

## **Change 3:** **Update to auto-vulnerability fixing behavior**

#### **Change details**

-   **Parameter deprecation**:
    
    The parameter `management.auto_vul_fix_policy.restart_node` will be deprecated starting **August 5, 2025**, and fully removed on **January 31, 2026**.
    
-   **New** **parameter**:
    
    A new parameter, `management.auto_vul_fix_policy.exclude_packages`, will be introduced starting **August 5, 2025**. This allows you to specify a list of software packages to exclude from automatic vulnerability fixes.
    
    **New default behavior**: By default, the kernel package will be excluded from auto-vulnerability fixes. This is because fixing kernel CVEs typically requires a kernel version upgrade, which carries a higher risk of compatibility issues or system instability. Purpose: This default setting helps prevent unexpected disruptions during patching.
