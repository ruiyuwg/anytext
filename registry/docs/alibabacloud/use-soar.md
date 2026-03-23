Security Orchestration, Automation and Response (SOAR) provided by Agentic SOC is a comprehensive security solution that orchestrates and connects different systems and services based on specific logic. This solution supports automated operations for security alerts and incidents, helping enterprises strengthen their security defense capabilities and improve response efficiency to security incidents.

## Background

Security experts often face labor-intensive tasks, such as conducting security reviews and handling trojans and mining programs. Even with a strong understanding of the internal environment and attacker behavior, these routine operations prevent them from focusing on critical activities like network defense and security research.

SOAR automates and streamlines daily security routines, accelerating response times to security incidents. By reducing tedious tasks, it enables security experts to concentrate on combating advanced persistent threats (APTs). Daily processes can be documented as clear, executable standards in SOAR, providing best practices for others.

## Terms

Before you start using SOAR, you must understand the related terminology. The following table introduces these terms.

**Term**

**Description**

playbook

-   A playbook is a structured response plan tailored to address specific incidents or threats. It outlines the necessary steps and actions to take when certain conditions are met, such as the detection of specific security incidents.
    
-   You can specify Run Playbook as the action of an automatic response rule and select a playbook to automatically handle alerts and incidents.
    
-   A playbook consists of a single process. You can implement version control, conduct input and output tests, track execution counts, and analyze the results of the process.
    
-   Playbook types:
    
    -   **Predefined Playbook**: The system offers predefined playbook processes for common cloud security threat scenarios. These playbooks can be directly used to manage security incidents and implemented in automatic response rules, simplifying their usage. For instance, a built-in playbook can leverage an Alibaba Cloud security group to block inbound high-risk IP addresses.
        
    -   **Custom Playbook**: You can choose various components and configure them flexibly to fit your business scenarios. This type of playbook is ideal for complex logic or specific situations.
        

process

-   A process is a series of **sequentially executed tasks or actions**. A process is designed to achieve a specific goal or implement a specific feature by performing predefined steps. You can create different automated processes, such as automatic notification processes and automatic immediate remediation processes.
    
-   You can create an automated process in the same manner as you draw a standard flowchart. An automated process contains **start, judgement, action, and end nodes**. A process consists of multiple components that are connected to each other. You can edit a process on a canvas in a visualized manner and define actions for each component in the process. For example, you can define the network disabling action for the terminal management component.
    
-   **A process can be triggered after it is created**. For example, after a ticket is created, an automatic ticket review process is triggered.
    

component

-   **A component corresponds to an external system or service**, such as WAF, firewall, Ticket System, a database service, or a notification service. A component can be interpreted as a connector that connects to an external system or service. A component does not include complex logic. Complex logic is provided by the external systems or services that are connected to components.
    
-   After you select a component, you must select **assets** and **actions** for the component.
    
-   Components are classified into **process orchestration components, basic orchestration components, and security handling components**.
    

resource instance

A resource instance is a resource of an external service. Take the MySQL component as an example. An enterprise may use multiple MySQL databases. You must decide the database to which you want to connect when you use the MySQL component.

action

An action is a type of capability provided by a component. Each component can have multiple actions. For example, the terminal management component supports actions such as disabling accounts, isolating networks, and sending notifications.

## **Process flowchart**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5743188671/CAEQQhiBgMDfmPjcwBkiIDkwOWMyZTg4M2FlODQ3ZjlhNTM0ODZmYmNiZmI0ZWI05176738_20250509134930.135.svg)
