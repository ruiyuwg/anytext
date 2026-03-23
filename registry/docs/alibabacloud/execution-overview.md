Operation Orchestration Service (OOS) allows you to execute a public or custom template in multiple execution modes.

## Execution modes

-   Automatic: We recommend that you execute a template in this mode in the test environment first. In this way, you can have a better understanding of the O&M operations performed by the template. If the test result meets the expectations, you can execute the template in this mode in the production environment.
    -   Automatic execution: All tasks defined in the template are automatically executed in sequence.
    -   Execution that requires risk confirmation: Assume that you have specified irrevocable tasks, such as the delete, release, and stop tasks, in a template. When such a task is executed, the execution status of the template changes to **Waiting** until you approve the task.
-   Manual: This execution mode is similar to debugging. If you want to learn more about the execution of each task, we recommend that you use the manual execution mode.

## Risk confirmation modes

-   Require confirmation for high-risk tasks: For irrevocable O&M operations, such as deleting an ECS instance, you need to confirm the operations. We recommend that you give priority to this option when executing a new template.
-   Skip confirmation for high-risk tasks: If you are familiar with all the tasks orchestrated by the template, you can select this option to skip the confirmation.
