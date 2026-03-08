# Collaboration on projects

Projects are created by a user via their Strapi Cloud account. Strapi Cloud users can share their projects to anyone else, so these new users can have access to the project dashboard and collaborate on that project, without the project owner to ever have to share their credentials.

Users invited to collaborate on a project, called maintainers, do not have the same permissions as the project owner. Contrary to the project owner, maintainers:

- Cannot share the project themselves to someone else
- Cannot delete the project from the project settings
- Cannot access the *Billing* section of project settings

## Sharing a project

To invite a new maintainer to collaborate on a project:

1. From the *Projects* page, click on the project of your choice to be redirected to its dashboard.
2. Click on the **Share** button located in the dashboard's header.
3. In the *Share \[project name]* dialog, type the email address of the person to invite in the textbox. A dropdown indicating "Invite \[email address]" should appear.
4. Click on the dropdown: the email address should be displayed in a purple box right below the textbox.
5. (optional) Repeat steps 3 and 4 to invite more people. Email addresses can only entered one by one but invites can be sent to several email addresses at the same time.
6. Click on the **Send** button.

New maintainers will be sent an email containing a link to click on to join the project. Once a project is shared, avatars representing the maintainers will be displayed in the project dashboard's header, next to the **Share** button, to see how many maintainers collaborate on that project and who they are.

Avatars use GitHub, Google or GitLab profile pictures, but for pending users only initials will be displayed until the activation of the maintainer account. You can hover over an avatar to display the full name of the maintainer.

## Managing maintainers

From the *Share \[project name]* dialog accessible by clicking on the **Share** button of a project dashboard, projects owners can view the full list of maintainers who have been invited to collaborate on the project. From there, it is possible to see the current status of each maintainer and to manage them.

Maintainers whose full name is displayed are users who did activate their account following the invitation email. If however there are maintainers in the list whose email address is displayed, it means they haven't activated their accounts and can't access the project dashboard yet. In that case, a status should be indicated right next to the email address to explain the issue:

- Pending: the invitation email has been sent but the maintainer hasn't acted on it yet.
- Expired: the email has been sent over 72 hours ago and the invitation expired.

For Expired statuses, it is possible to send another invitation email by clicking on the **Manage** button, then **Resend invite**.

### Revoking maintainers

To revoke a maintainer's access to the project dashboard:

1. Click on the **Share** button in the project dashboard's header.
2. In the list of *People with access*, find the maintainer whose access to revoke and click on the **Manage** button.
3. Click on the **Revoke** button.
4. In the confirmation dialog, click again on the **Revoke** button.

The revoked maintainer will completely stop having access to the project dashboard.

Maintainers whose access to the project has been revoked do not receive any email or notification.

# Deployments management

Source: //cloud/projects/deploys

# Deployments management

The creation of a new Strapi Cloud project automatically trigger the deployment of that project. After that, deployments can be:

- manually triggered whenever needed, [from the Cloud dashboard](#triggering-a-new-deployment) or [from the CLI](/cloud/cli/cloud-cli#strapi-deploy),
- or automatically triggered everytime a new commit is pushed to the branch, if the Strapi Cloud project is connected to a git repository and the "deploy on push" option is enabled (see [Project settings](/cloud/projects/settings#modifying-git-repository--branch)).

Ongoing deployments can also be [manually canceled](#cancelling-a-deployment) if needed.

## Triggering a new deployment

To manually trigger a new deployment for your project, click on the **Trigger deployment** button always displayed in the right corner of a project dashboard's header. This action will add a new card in the *Deployments* tab, where you can monitor the status and view the deployment logs live (see [Deploy history and logs](/cloud/projects/deploys-history)).

## Cancelling a deployment

If for any reason you want to cancel an ongoing and unfinished deployment:

1. Go to the *Deployment details* page of the latest triggered deployment (see [Accessing log details](/cloud/projects/deploys-history#accessing-deployment-details--logs)).
2. Click on the **Cancel deployment** button in the top right corner. The status of the deployment will automatically change to *Canceled*.

You can also cancel a deployment from the *Deployments* tab which lists the deployments history. The card of ongoing deployment with the *Building* status will display a ![Cancel button](/img/assets/icons/clear.svg) button for cancelling the deployment.

# Deployment history & logs

Source: //cloud/projects/deploys-history

# Deployment history and logs

For each Strapi Cloud project, you can access the history of all deployments that occurred and their details including build and deployment logs. This information is available in the *Deployments* tab.

## Viewing the deployment history

In the *Deployments* tab is displayed a chronological list of cards with the details of all historical deployments for your project.

, with a direct link to your git provider, and commit message

- Deployment status:
  - *Deploying*
  - *Done*
  - *Canceled*
  - *Build failed*
  - *Deployment failed*
- Last deployment time (when the deployment was triggered and the duration)
- Branch

## Accessing deployment details & logs

From the *Deployments* tab, you can hover a deployment card to make the ![See logs button](/img/assets/icons/Eye.svg) **Show details** button appear. Clicking on this button will redirect you to the *Deployment details* page which contains the deployment's detailed logs.

, with a direct link to your git provider, and commit message used for this deployment

- *Status*, which can be *Building*, *Deploying*, *Done*, *Canceled*, *Build failed*, or *Deployment failed*
- *Source*: the branch and commit message for this deployment
- *Duration*: the amount of time the deployment took and when it occurred

# Notifications

Source: //cloud/projects/notifications

# Notifications

The Notification center can be opened by clicking the bell icon  in the top navigation of the Cloud dashboard.

It displays a list of the latest notifications for all your existing projects. Clicking on a notification card from the list will redirect you to the *Log details* page of the corresponding deployment (more information in [Deploy history & logs](/cloud/projects/deploys-history#accessing-deployment-details--logs)).

The following notifications can be listed in the Notifications center:

- *deployment completed*: when a deployment is successfully done.
- *Build failed*: when a deployment fails during the build stage.
- *deployment failed*: when a deployment fails during the deployment stage.
- *deployment triggered*: when a deployment is triggered by a new push to the connected repository. This notification is however not sent when the deployment is triggered manually.

All notifications older than 30 days are automatically removed from the Notification center.

# Projects overview

Source: //cloud/projects/overview
