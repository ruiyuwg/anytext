You can create user defined functions (UDFs) and use them in MaxCompute SQL.

## Basic operations

-   `list_functions()`: obtains all functions in a specific project.
-   `exist_function()`: checks whether a specific function exists.
-   `get_function()`: obtains a specific function.
-   `create_function()`: creates a function.
-   `delete_function()`: deletes a specific function.

## Create a function

You can call the `create_function()` method of a MaxCompute entry object to create a function. The following code shows examples of how to create a function by using a resource in the current project and in another project:

```
# Reference a resource in the current project.
resource = o.get_resource('my_udf.py')
function = o.create_function('test_function', class_type='my_udf.Test', resources=[resource])
# Reference a resource in another project.
resource2 = o.get_resource('my_udf.py', project='another_project')
function2 = o.create_function('test_function2', class_type='my_udf.Test', resources=[resource2])
```

## Delete a function

You can call the `delete_function()` method of a MaxCompute entry object to delete a function. You can also call the `drop()` method to delete a function. The following code shows examples of how to delete a function by using the delete\_function() and drop() methods:

```
o.delete_function('test_function')
function.drop()  # Call the drop() method if the function exists.
```

## Update a function

You can call the `update()` method to update a function. The following code shows an example:

```
function = o.get_function('test_function')
new_resource = o.get_resource('my_udf2.py')
function.class_type = 'my_udf2.Test'
function.resources = [new_resource, ]
function.update()  # Update the function.
```
