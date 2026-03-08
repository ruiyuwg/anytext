# Projects overview

The *Projects* page displays a list of all your Strapi Cloud projects. From here you can manage your projects and access the corresponding applications.

Each project card displays the following information:

- the project name
- the last successful deployment’s date of the Production environment
- the current status of the project:
  - *Disconnected*, if the project repository is not connected to Strapi Cloud
  - *Suspended*, if the project has been suspended (refer to [Project suspension](/cloud/getting-started/usage-billing#project-suspension) to reactivate the project)
  - *Incompatible version*, if the project is using a Strapi version that is not compatible with Strapi Cloud

Each project card also displays a  menu icon to access the following options:

- **Visit App**: to be redirected to the application
- **Go to Deployments**: to be redirected to the [*Deployment*](/cloud/projects/deploys) page
- **Go to Settings**: to be redirected to the [*Settings*](/cloud/projects/settings) page

Click on the \* Product updates\* button in the navigation bar to check out the latest features and fixes released.

## Accessing a project's dashboard

From the *Projects* page, click on any project card to access its dashboard. It displays the project and environment details and gives access to the deployment history and all available settings.

From the dashboard's header of a chosen project, you can:

- use the **Share** button to invite users to collaborate on the project (see [Collaboration](/cloud/projects/collaboration)) and see the icons of those who have already been invited ,
- use the  **Settings** button to access the settings of the project and its existing environments ,
- choose which environment to visualise for the project or add a new environment ,
- trigger a new deployment (see [Deployments management](/cloud/projects/deploys)) and visit your application .

Your project's dashboard also displays:

- the *Deployments* and *Runtime logs* tabs, to see the deployments history (more details in [Deploy history and logs](/cloud/projects/deploys-history)) and the runtime logs of the project (see [dedicated documentation page](/cloud/projects/runtime-logs))
- the project and environment details in a box on the right of the interface , including:
  - the number of API calls,
  - the current usage for asset bandwidth and storage,
  - the name of the branch and a **Manage** button to be redirect to the branch settings (see [Modifying git repository & branch](/cloud/projects/settings#modifying-git-repository--branch)),
  - the name of the base directory,
  - the Strapi version number,
  - the Strapi app's url.

# Runtime logs

Source: //cloud/projects/runtime-logs

# Runtime logs

From a chosen project's dashboard, the *Runtime logs* tab displays the live logs of the project.

- The *Runtime logs* are only accessible once the project is successfully deployed.
- Runtime logs are not live for projects on the Free plan and are reset each time the application is scaled to zero due to inactivity.

# Project settings

Source: //cloud/projects/settings
