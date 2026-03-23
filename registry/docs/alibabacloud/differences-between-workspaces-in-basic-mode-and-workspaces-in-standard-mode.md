DataWorks workspaces operate in one of two modes: basic mode or standard mode. Choose a mode based on the level of environment isolation, deployment governance, and data access control you need.

## Choose a workspace mode

**Standard mode** (recommended) isolates development from production with separate data sources, enforces a deploy-and-review workflow, and controls who can modify production code. Use standard mode for production workloads.

**Basic mode** connects to a single data source with no separation between development and production. Use basic mode only for exploration or simple development.

If you use a basic mode workspace and want to keep your code, you can upgrade it to standard mode. For more information, see [Upgrade workspace mode](/help/en/dataworks/user-guide/upgrade-a-workspace-from-the-basic-mode-to-the-standard-mode#concept-xpy-3bn-cfb).

## Architecture

**Aspect**

**Basic mode**

**Standard mode**

Data sources

One data source per workspace

Two data sources per workspace (one for development, one for production)

Environments

The single data source serves as the production environment

Separate development and production environments, each with its own data source

Environment isolation

None

Physically separate data sources isolate development from production

### Data source configuration in standard mode

In standard mode, you can configure different types of data sources for each environment:

-   Use different cloud service instances for the development and production environments.
    
-   Use different projects or databases within the same cloud service instance.
    

When the development and production environments are bound to different data sources, running a node in the development environment does not affect the production environment. To run a node in the production environment, first deploy the node to the Operation Center, then run it.

**Note**

To achieve environment isolation in a standard mode workspace, create physically separate data sources for the development and production environments. For more information, see [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).

## Development workflow

**Aspect**

**Basic mode**

**Standard mode**

Deployment path

Commit to production (no deployment step)

Commit, deploy, then run in production

Scheduling

After commit, the scheduling system can immediately run the node periodically

Only nodes deployed to the production environment are periodically scheduled. Nodes in the development environment are not scheduled by default.

Code editing

Developers directly edit production node code

Developers edit and commit code in Data Studio only. Production environment code cannot be modified directly.

Deployment control

No separate deployment step

Deploying to production requires O&M permissions, held by the Workspace Owner, Administrator, or O&M role

Code governance

None. Developers with the Developer role can add or modify code and commit at any time without approval.

Includes code review and code diff features to enforce a governed deployment process

## Data access

### Production data permissions

**Aspect**

**Basic mode**

**Standard mode**

Data access

Developers directly use production data for testing, posing a data security risk

Developers use test data in the development environment. They can be granted or apply for permissions to use production table data for verification.

MaxCompute table permissions

Users with the Developer role have read and write permissions on all tables in the MaxCompute project by default. They can add, delete, or modify tables freely, creating a data security risk.

Only MaxCompute supports applying for permissions on production table data through the Security Center visual interface. For more information, see [Manage permissions on data in a MaxCompute compute engine instance](/help/en/dataworks/user-guide/manage-permissions-on-data-in-a-maxcompute-compute-engine-instance#task-2256464).

**Note**

The ability to access resources or data across different projects or databases depends on the data source itself. If you configure different data sources for the development and production environments, the data source capabilities determine whether you can access production tables, resources, or functions from the development environment.

### Data access identity

**Compute engine**

**Basic mode**

**Standard mode**

MaxCompute, Hologres, E-MapReduce (EMR), and Cloudera's Distribution for Hadoop (CDH)

A single identity operates on the production environment. The access identity can be an Alibaba Cloud account, a RAM user, a RAM role (MaxCompute only), or the node owner.

**Development environment:** The node owner. **Production environment:** An Alibaba Cloud account, a RAM user, or a RAM role (MaxCompute only).

Other engines (AnalyticDB for MySQL, AnalyticDB for PostgreSQL, etc.)

The access identity depends on the account bound when creating the data source. Permissions match those of the account in the database.

The access identity depends on the account bound to each environment when creating the data source. Permissions match those of the account in the database.

In standard mode, the development environment uses the node executor (the currently logged-in user) for testing nodes by default. The production environment uses a specified, unified identity to run scheduled nodes. To modify the access identity, go to **Data Integration** > **Data Source** and select the target data source.

## Data source mapping by module

View bound computing resources in Data Studio on the **Computing Resource** page.

**DataWorks module**

**Standard mode**

**Basic mode**

Data Studio

Operates on the development environment data source (instance, project, or database)

Operates on the production environment data source (instance, project, or database)

Operation Center

**Development environment:** Operates on the development environment data source. **Production environment:** Operates on the production environment data source.

Operates on the production environment data source

## Advantages and disadvantages

**Aspect**

**Basic mode**

**Standard mode**

Advantages

Simple and easy to use. Grant developers the Developer role to perform all data warehousing development tasks.

Secure and well-governed. Provides a standardized code deployment process (including code review and code diff) that prevents data corruption, dirty data propagation, and node errors from unexpected code changes. Data access is effectively controlled.

Disadvantages

No isolation between development and production environments, suitable only for simple data development. No control over production table permissions. No governance over the data development workflow.

Workflow is more complex. A single person typically cannot manage the entire development-to-production lifecycle.

## Simulate environment isolation in basic mode

If you use basic mode workspaces and want to separate development from production, use two basic mode workspaces: one as a development environment and the other as a production environment. Deploy nodes from the development workspace to the production workspace using the cross-workspace deployment feature.

**Limitation:** With this approach, you can still directly edit production code in the Data Studio module of the production workspace. The production environment lacks a single, controlled entry point for code updates, bypassing the controls of a governed workflow.

**Recommendation:** Upgrade your basic mode workspace to standard mode for a more governed development workflow. For more information, see [Upgrade workspace mode](/help/en/dataworks/user-guide/upgrade-a-workspace-from-the-basic-mode-to-the-standard-mode#concept-xpy-3bn-cfb).
