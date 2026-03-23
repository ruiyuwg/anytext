This topic describes the identity, credential, and authorization concepts, which are necessary for calling API operations.

## Background information

For API calls that do not require authentication, the system does not need to confirm the user identity, but throttling still takes effect.

## **Identity, credential, and authorization**

Identity, credential, and authorization are three core concepts in Internet security. They are used to ensure the security of user identities and control user access to resources.

1.  Identity: An identity refers to who a user is, which is represented by a unique identifier. The system determines the permissions of users based on their identities. The identity types of Alibaba Cloud include Alibaba Cloud accounts, RAM users, and RAM roles.
    
2.  Credential: A credential contains information that is used to prove the identify of a user. In most cases, a credential includes a username and a password. When users log on to the system, they need to provide correct credentials to verify their identities. The user credential of Alibaba Cloud products is the AccessKey pair. An AccessKey pair consists of an`AccessKey ID` and an `AccessKey secret`.
    
3.  Authorization: Authorization refers to the process where system administrators or resource owners grant resource access permissions to users. After the system verifies the identify of a user, it determines whether to allow the user to perform specific operations based on the permissions.
