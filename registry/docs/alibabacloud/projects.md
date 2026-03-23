This topic describes how to perform basic operations on projects by using PyODPS.

A project is the basic organizational unit of MaxCompute. For more information about projects, see [Project](/help/en/maxcompute/product-overview/project#concept-th4-4v1-5db).

## Prepare the runtime environment

PyODPS can run on a PyODPS node in DataWorks or on an on-premises machine. Before you run PyODPS, you must select a tool and prepare the runtime environment.

-   DataWorks: If you want to run PyODPS in DataWorks, you must create a PyODPS 2 node or a PyODPS 3 node. For more information, see [Use PyODPS in DataWorks](/help/en/maxcompute/user-guide/use-pyodps-in-dataworks#concept-ch1-lwf-cfb).
-   On-premises machine: If you want to run PyODPS on an on-premises machine, you must install PyODPS and initialize the MaxCompute entry object.

## Obtain information about a project

You can call the `get_project()` method of a MaxCompute entry object to obtain information about a project.

```
project = o.get_project('project_name')  # If you specify a project name in the method, information about the specified project is returned. 
project = o.get_project()              # If you do not specify a project name in the method, information about the current project is returned. 
```

To obtain information about a project, you must set the project\_name parameter to the name of the project in the get\_project() method. If you specify a project name in the method, information about the specified project is returned. If you do not specify a project name in the method, information about the current project is returned.

## Check whether a project exists

Use the `o.exist_project()` method to check whether a project exists. In the following sample code, the project is named doc\_test.

```
print(o.exist_project('doc_test'))
```

If `True` is returned, the project _doc\_test_ exists.
