Manage computing resources, user permissions, and AI assets within workspaces to enable team collaboration across AI development stages.

## **Features**

Workspaces offer:

-   Computing resource management: Manage all AI development computing resources on a single platform.
    
-   Permission management: Control member permissions at a fine-grained level.
    
-   AI asset management: Save and manage AI models and algorithms for improvement and team collaboration.
    
-   Event monitoring and alerting: Create alerting rules to monitor Deep Learning Containers (DLC) jobs, Machine Learning Designer pipeline jobs, or model version approval status.
    
-   Resource scheduling: Allocate resource quotas, set maximum job runtime, and assign job priorities based on components and member roles to optimize resource distribution.
    

## **Roles**

PAI provides these predefined roles for AI development and management:

-   Resource administrator: Must be assigned to an Alibaba Cloud account or authorized RAM user. Add or delete workspaces and create Data Science Workshop (DSW) instances.
    
-   Workspace administrator/owner: Manage members and public assets in the workspace.
    
-   Algorithm developer: Manage training jobs and public assets.
    
-   Algorithm O&M engineer: Manage all workspace training jobs, including viewing DLC jobs created by other members.
    
-   Labeling administrator: Create and update labeling datasets.
    
-   Visitor: View workspace information (members, resource groups, pipelines).
    
-   MaxCompute developer: Use MaxCompute to execute jobs submitted in the workspace.
    

For role permissions, see [Roles and permissions](/help/en/pai/appendix-list-of-roles-and-permissions).

## **Workspace operations**

To create and manage workspaces or configure notifications, see [Workspace](/help/en/pai/user-guide/workspace-management/).

## **Asset management**

To manage AI computing assets (datasets, models, images, jobs) in PAI, see [AI Computing Asset Management](/help/en/pai/user-guide/dataset-management/).
