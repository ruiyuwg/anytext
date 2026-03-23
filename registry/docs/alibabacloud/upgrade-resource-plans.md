If your current Object Storage Service (OSS) resource plan no longer covers your usage, upgrade to a higher-specification plan.

## Upgrade eligibility

Not all resource plans support direct upgrades. The following table lists the upgrade method for each plan type.

**Plan type**

**Upgrade method**

Standard zone-redundant storage plan

Direct upgrade

Standard locally redundant storage plan

Direct upgrade

Infrequent Access (IA) locally redundant storage plan

Direct upgrade

Cold Archive locally redundant storage plan

Direct upgrade

Outbound data transfer plan

Stacking only

Transfer acceleration plan

Stacking only

Anti-DDoS Origin Basic plan

Stacking only

**Direct upgrade** replaces your current plan with a higher-specification plan. The supplemental fee covers the difference in cost.

**Stacking** means purchasing an additional plan of the same type for the same region. The capacity or quota of all plans in that region is combined.

## Prerequisites

Before you begin, make sure that you have:

-   An active OSS resource plan that supports direct upgrade
    
-   The `AliyunBSSOrderAccess` system permission granted to your Resource Access Management (RAM) user, which allows the user to view, pay for, and cancel orders in the User Center (BSS). For details, see [Manage RAM user permissions](/help/en/ram/grant-permissions-to-a-ram-user#task-187800)
    

## Usage notes

### When upgrades take effect

Effective October 24, 2024, resource plan upgrades take effect in the following cycle:

-   **Hourly plans:** The upgrade takes effect in the next hour.
    
-   **Daily plans:** The upgrade takes effect at 00:00 on the next day.
    

The supplemental upgrade fee is calculated from the start of the next cycle.

### Pending upgrade restrictions

While an upgrade order is pending, you cannot renew, upgrade, or unsubscribe from the plan. Wait for the current upgrade to take effect before you perform any of these operations.

## Procedure

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resource Usage** > **Resource Plans**.
    
3.  Find the resource plan to upgrade. In the **Actions** column, click **Upgrade**.
    
4.  On the **OSS Resource Plan Upgrade/Downgrade** page, select the target specifications, click **Buy Now**, and complete the payment.
    
    **Important**
    
    You must select specifications higher than your current plan. You cannot upgrade to a plan with the same or lower specifications. Downgrades are not supported after an upgrade. For example, if your current plan is 100 GB, the target plan must be larger than 100 GB.
