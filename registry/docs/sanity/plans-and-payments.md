# Plans and payments

All Sanity projects are on a plan (by default a free plan), which comes with a set of included features and monthly resource quotas. Our available plans are listed on the [pricing page](https://www.sanity.io/pricing), and can be ordered at any time from the project's [management](https://manage.sanity.io) page. Some plans offer additional features for purchase. Any resource usage beyond the quotas will be billed at overage rates, except for Free projects (no overages allowed) or on a Legacy Free plan without a credit card, which may be temporarily deactivated instead.

Paid plans require that the project belongs to an "organization", which is responsible for payment. This does not have to be an actual company–you can create your own personal organization if you want to. The organization simply holds the billing address and credit card information for one or more projects.

Projects are billed in advance each month, and follow calendar months; all projects in an organization are invoiced and charged together on the first of each month, along with any overage charges accrued during the previous month.

We prorate the price when you change plans or cancel: if you upgrade to a larger plan on the 20th, we will only charge you for the remaining third of the month, and subtract a third of what you may have already paid for the old plan. Similarly, if you cancel a project on the 20th, we will refund one third of the monthly cost. Features and resource quotas are prorated in the same way. Plan changes and cancellations can be performed at any time, and take effect immediately.

From time to time we may make changes to our plan offerings, but you will remain on your original plan unless you choose to switch to a newer plan yourself. We may occasionally move projects to newer plans automatically, but this will generally only happen when it is clearly in your best interest, and you will always be notified of this in advance.

In the case of payment failures, we will notify you by email, and retry the payment for three days. If payment still has not gone through, and we have not been able to contact you, we may temporarily deactivate the project.

## Resource Quotas and Overage

Plans come with a set of resource quotas:

- **API requests:** number of HTTP(S) requests to `<project>.api.sanity.io` during the month, excluding `OPTIONS` requests.
- **API CDN requests:** number of HTTP(S) requests to `<project>.apicdn.sanity.io` during the month, excluding `OPTIONS` requests. (This is typically the requests incurred when serving your content to end-users.)
- **Assets:** total size of all uploaded assets and files at the end of the month
- **Bandwidth:** total outgoing bandwidth for API, API CDN, and asset traffic during the month
- **Datasets:** total number of datasets at the end of the month
- **Documents:** total number of stored documents (including drafts) across all datasets at the end of the month
- **Non-admin users:** total number of non-admin users (excluding service tokens, i.e. robots) at the end of the month
- **Agent Actions**: Total number of API calls available for agent actions. Can be configured through the Manage org level settings.

Resource usage is metered periodically, with statistics available on each project's management page. How we handle usage beyond your quota depends on your plan:

- **Paid Projects (Growth, Enterprise, and Legacy plans with a credit card):** Usage beyond the included quota is automatically billed as overage. Your project will remain fully functional. The current overage rates for a project can be found under the "Plan" tab in Manage and on our [Pricing page](https://www.sanity.io/pricing). Project admins may prevent extra overage fees by temporarily disabling the project manually.
- **Free, Growth Trial, and Legacy Free projects (without a credit card):** These plans have hard caps on resources. No overages are allowed. If a project reaches its quota for **Documents, Assets, API, APICDN, or Bandwidth**, specific functionality will be blocked until the quota resets or the plan is upgraded (see details below).

Please be aware that downgrading a project to a smaller plan will also prorate the quotas, which may trigger additional overage charges due to resources that have already been spent earlier in the month. For example: if you are on a plan with a 50.000 API request quota, and have used 35.000 of these so far, then downgrading to a tiny plan with only 10.000 API requests in the middle of the month with leave you with half of 50.000 + half of 10.000, which is 30.000 API requests. Since you used 35.000, you now have 5.000 overage on your effective plan for this month and the rest of this months API requests will be billed as overage.

### Document Quota

The **Free, Growth Trial, and Growth plans** do not allow overages above the included document quota. When the document quota limit has been reached, you will not be able to create additional documents, including new drafts.

To resolve this, you can either reduce the number of documents in your projects by deleting documents or unused datasets, or upgrade your plan to increase the Document quota:

- **Free and Growth Trial plan** → Upgrade to Growth plan from the "Plan" tab in [Manage](https://www.sanity.io/manage)
- **Growth plan (without Extended Quota add-on)** → Purchase the Extended Quota Add-on from the "Plan" tab in [Manage](https://www.sanity.io/manage)
- **Growth plan (with Extended Quota add-on)** → Upgrade to Enterprise by  [reaching out to sales](https://www.sanity.io/contact/sales?ref=docs-plan-limits)

**Timing considerations:**

- When upgrading your plan or purchasing the Extended Quota add-on for Growth, the new quota will be updated instantly
- When deleting documents or datasets, it can take up to 1 hour for the document count to be updated

For questions about the document quota limits, you can [reach out to support](https://www.sanity.io/contact/billing?ref=docs-plan-limits).

### Asset Quota

The **Free and Growth Trial plans** do not allow overages above the included Asset quota. When the total size of your uploaded assets reaches the limit, **you will not be able to upload new assets** (images, videos, or files). Existing assets will continue to be served.

To resolve this, you can:

- **Delete unused assets:** Permanently deleting assets from your dataset will free up space.
- **Upgrade to Growth:** Upgrading to the Growth plan unlocks unlimited asset storage (usage above the quota is billed as overage).

**Note for Growth plan users:** Unlike the Document quota, the Asset quota is *not* hard-capped on the Growth plan. You can continue to upload assets beyond the included amount, and the excess will be charged as overage.

### API, APICDN, and Bandwidth Quotas

**Free and Growth Trial plans** do not allow overages for API, APICDN, or Bandwidth usage. To help you manage your consumption, we automatically send email alerts to all organization and project administrators when usage reaches **80% (warning)** and **100% (blocked)**.

#### What happens at 100% usage

If your project consumes 100% of its included API, APICDN, or Bandwidth quota:

- **Public API access is blocked:** All additional requests to the API/CDN will fail. In practice, this means Sanity content will fail to load in your production application or website.
- **Studio remains functional:** The Sanity Studio will remain functional, allowing you to log in and manage your project settings or data.

#### How to resolve a blocked project

Unlike Document and Asset quotas, API, APCIDN and Bandwidth usage accumulates over time and resets monthly. Therefore, you cannot "lower" your usage for the current month once it has occurred (e.g., you cannot "un-spend" bandwidth).

To restore service to your application, you have two options:

1. **Upgrade to the Growth Plan (recommended):** Upgrading enables overages, which unlocks your API requests immediately. You can do this from the "Plan" tab in [Manage](https://www.sanity.io/manage).1. **Permissions:** If the organization does not have a payment method added, an **Organization Administrator** must perform the upgrade, adding payment details during the process. If a payment method is already added, both **Organization Administrators** and **Project Administrators** can upgrade the project.

2. **Costs:** You will be charged the Growth plan base fee plus overage fees for any usage exceeding the included quotas. The current overage rates for a project can be found under the "Plan" tab in Manage and on our [Pricing page](https://www.sanity.io/pricing).

3. **Wait for the quota reset:** Usage quotas automatically reset on the 1st of the next calendar month.

**Note for Growth plan users:** Projects on the paid Growth plan are not subject to these blocks. If you exceed your included quota, your content will continue to be served uninterrupted, and the excess usage will be added to your monthly invoice as overage.

## Project Transfers

Projects may be transferred between organizations. You must be an administrator in the project and the source organization, but can be a billing manager, administrator, or developer in the receiving organization.

Once a transfer is completed, the sender and receiver are prorated the plan cost; the sender is refunded the already paid amount for the remainder of the month, while the receiver is charged for the remainder of the month at the time of the transfer. The receiver will be responsible for paying any overage charges accrued on the project. Since a transfer does not change the project plan, this has no effect on resource quotas.

> \[!NOTE]
> Permissions Required
> To transfer a project, you must have the roles mentioned above. If using custom roles, your role must include the following permission grants for the originating organization and project:
> • `sanity.organization.projects.detach`
> • `sanity.project.update`
> And the following permission grants in the receiving organization and project:
> • `sanity.organization.projects.attach`
> • `sanity.project.update`

## Refunds and Credits

Project downgrades, transfers, and cancellations take effect instantly, and the already paid plan cost will be prorated and refunded for the remainder of the month. Any overage will be tallied and charged at the end of the month, unless the entire organization is deleted, in which case overage is tallied and charged immediately.

Refunds are issued to the card that was originally charged, and may take up to 10 business days to complete depending on the card issuer.
