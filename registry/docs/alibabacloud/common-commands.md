This topic describes common commands in Function Compute Command Line Interface (fcli).

## Prerequisites

In the folder where the executable file is located, run the `fcli shell` command to enter the interactive mode.

## Switch directories (cd)

The cd command is used to switch the directories of entities in Function Compute, instead of switching local directories.

```
>>> cd serviceName //Goes to the directory of the serviceName service.
>>> ls //Lists the names of all functions under the serviceName service in the service directory.
>>> cd functionName //Goes to the directory of the functionName function.
>>> ls //Lists the names of all triggers under the functionName function in the function directory.
```

## List files in the current directory (ls)

-   `-l int32` or `--limit int32`: specifies the maximum number of resources to be listed. The default value is 100.
-   `-t string` or `--next-token string`: lists resources starting from NextToken.
-   `-p string` or `--prefix string`: lists resources with the specified prefix.
-   `-k string` or `--start-key string`: lists resources starting from the current resource.

```
>>> cd myService
>>> ls
aFunction
bFunction
cFunction
cFuncion2
dFunction
eFunction
>>> ls -l 4 //Specifies the maximum number of files that are displayed to 4.
aFunction
bFunction
cFunction
cFuncion2
NextToken: dFunction
>>> ls -t dFunction //Lists files starting from NextToken (dFunction).
dFunction
eFunction
>>> ls -p c //Lists files whose names are prefixed with c.
cFunction
cFunction2
>>> ls -k dFunction //Lists files whose names start with dFunction.
dFunction
eFunction                   
```

## View the directory of the function (pwd)

The pwd command is used to query the directory of the function.

## View resource details (info)

The info command is used to query details of a Function Compute resource, such as the service name, function name, and trigger name.

```
>>> info <your serviceName> //Queries the details of a service.
>>> info <your functionName> //Queries the details of a function.
>>> info <your triggerName> //Queries the details of a trigger.
```

## Configure fcli (config)

The config command is used to modify configurations in config.yaml.

```
>>> config --access-key-id 12345678 //Changes access-key-id to 12345678.                    
```

## Delete resources (rm)

-   The `rm` command is used to delete a resource.
    
    **Note** Before you run this command, make sure that the target function does not have a trigger or the target service does not have a function.
    
-   The `-f` or `--forced` command is used to forcibly delete a resource.

```
>>> rm myFunction
Do you want to remove the resource /fc/myService/myFunction [y/n]: //Needs to confirm the deletion operation before deleting the resource.
>>> rm -f myFunction //Not needs to confirm the deletion operation before deleting the resource.
```

## Sandbox (sbox)

fcli provides a local sandbox environment, which is consistent with the function runtime environment in Function Compute. In a sandbox environment, you can install third-party dependent libraries to perform operations such as local debugging.

-   `-d string` or `--code-dir string`: specifies the directory of the code. The directory is mounted to /code of the sandbox environment.
-   `-t string` or `--runtime string`: specifies the runtime environment.

```
>>> sbox -d code -t nodejs6 //Installs Node.js 6 dependencies in the code directory.
Entering the container. Your code is in the /code direcotry.
root@df9fc****:/code# npm init -f //Generates package.json for Node.js 6 dependencies.
npm info it worked if it ends with ok
npm info using npm@3.10.10
npm info using node@v6.10.3
npm WARN using --force I sure hope you know what you are doing.
Wrote to /code/package.json:
{
"name": "code",
"version": "1.0.0",
"description": "",
"main": "index.js",
"dependencies": {
 "jimp": "^0.2.28"
},
"devDependencies": {},
"scripts": {
 "test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}
npm info init written successfully
npm info ok
root@df9fc****:/code# npm install jimp //Installs jimp dependencies.
npm info it worked if it ends with ok
...
npm info lifecycle jimp@0.2.28~postinstall: jimp@0.2.28
code@1.0.0 /code
-- jimp@0.2.28
npm WARN code@1.0.0 No description
npm WARN code@1.0.0 No repository field.
npm info ok
root@df9fc****:/code# exit //Exits the sandbox environment.                  
```

## help

The help command is used to list help information.

-   `help`: lists all commands.
-   `[command] --help`: lists all parameters of the current command.
    
    For example, `ls --help`.
    

## clear

The clear command is used to clear the screen.

## Exit fcli (exit)

The exit command is used to exit fcli.
