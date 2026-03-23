Parameter

Type

Description

Example

object

The data structure of the Simple Log Service project.

createTime

string

The time at which the project was created.

2021-07-07 14:08:09

lastModifyTime

string

The time at which the project was last modified.

2022-04-18 13:30:19

description

string

The description of the project.

Description of my-project

owner

string

The ID of the Alibaba Cloud account that is used to create the project.

""

projectName

string

The name of the project. The name is included in the value of the Host header. The name must be unique in a region. You cannot change the name after the project is created.

ali-test-project

region

string

The region to which the project belongs.

cn-hangzhou

status

string

The status of the project. Valid values:

-   Normal
-   Disable

Normal

resourceGroupId

string

The ID of the resource group to which the project belongs.

rg-acf\*\*\*\*\*\*sq

dataRedundancyType

string

The data redundancy type.

LRS

quota

object

project quota

any
