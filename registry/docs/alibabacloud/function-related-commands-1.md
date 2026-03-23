This topic describes function-related commands in Function Compute Command Line Interface (fcli).

## Prerequisites

In the folder where the executable file is located, run the `fcli shell` command to enter the interactive mode.

## Create a function (mkf)

-   `-b string` or `--code-bucket string`: specifies the Object Storage Service (OSS) bucket where the code is located.
-   `-o string` or `--code-object string`: specifies the object key in the bucket where the code is located.
-   `-d string` or `--code-dir string`: specifies the directory where the code is located.
-   `-f string` or `--code-file string`: specifies the compressed code file.
-   `-h string` or `--handler string`: specifies the function handler, which is in the format "file name. function name". For example, hello\_world.handler specifies that the handler is the handler function in the hello\_world.js file.
-   `-e int32` or `--initializationTimeout int32`: specifies the timeout period of the initializer function. Default value: 30s.
-   `-i string` or `--initializer string`: specifies the initializer function.
-   `-m int32` or `--memory int32`: specifies the memory size for function execution.
-   `-t string` or `--runtime string`: specifies the runtime environment.
-   `--timeout int32`: specifies the function timeout period. Default value: 30s.

```
// In the corresponding service directory
>>> mkf myFunction -t nodejs6 -h myFunction.handler -b ossBucketName -o objectKey //Saves code to an OSS bucket. In the command, -t specifies that the runtime is Node.js6, -h specifies the handler, -b specifies the OSS bucket where the code is located, and -o specifies the object key in the bucket where the code is located.
>>> mkf myFunction -t nodejs6 -h myFunction.handler -d codeDir/myFunction -m 512 //Saves code to a local directory. In the command, -d specifies the directory where the code is stored and -m specifies the memory size for function execution.
>>> mkf myFunction -h myFunction.handler -f code.zip -t nodejs6 //Saves code to the local code.zip file.
```

## Update a function (upf)

-   `-b string` or `--code-bucket string`: specifies the Object Storage Service (OSS) bucket where the code is located.
-   `-o string` or `--code-object string`: specifies the object key in the bucket where the code is located.
-   `-d string` or `--code-dir string`: specifies the directory where the code is located.
-   `-f string` or `--code-file string`: specifies the compressed code file.
-   `-h string` or `--handler string`: specifies the function handler, which is in the format "file name. function name". For example, hello\_world.handler specifies that the handler is the handler function in the hello\_world.js file.
-   `-m int32` or `--memory int32`: specifies the memory size for function execution.
-   `-t string` or `--runtime string`: specifies the runtime environment.

```
// In the corresponding service directory
>>> upf myFunction -t nodejs6 -h myFunction.handler -b ossBucketName -o objectKey //Saves code to an OSS bucket. In the command, -t specifies that the runtime is Node.js6, -b specifies the OSS bucket where the code is located, and -o specifies the object key in the bucket where the code is located.
>>> upf myFunction -t nodejs6 -h myFunction.handler -d codeDir/myFunction -m 512 //Saves code to a local directory. In the command, -d specifies the directory where the code is stored and -m specifies the memory size for function execution.
>>> upf myFunction -h myFunction.handler -f code.zip -t nodejs6 //Saves code to the local code.zip file.
>>> upf myFunction -t nodejs6 -i myFunction.newInitializer -e 30  -b ossBucketName -o objectKey //Updates the initializer function from myFunction.initializer to myFunction.newInitializer. The code is stored in an OSS bucket and contains the initializer function. In the command, -t specifies the runtime, -i specifies the initializer handler, -e specifies the initializer function timeout period, -b specifies the OSS bucket where the code is stored, and -o specifies the object key in the bucket where the code is stored.
>>> upf myFunction -t nodejs6  -i  "" -b ossBucketName -o objectKey //Updates the initializer function from myFunction.newInitializer to empty to disable the initializer function.
>>> upf myFunction -t nodejs6 -i  myFunction.newInitializer -e 30 -b ossBucketName -o objectKey //Updates an empty initializer function to myFunction.newInitializer.
```

## Execute a function (invk)

-   `-e` or `--encode`: encodes the return value of a function in Base64.
-   `-f string` or `--event-file string`: reads the event content from the file.
-   `-s string` or `--event-str string`: reads the event content from the string.
-   `-o string` or `--output-file string`: specifies the name of the file to which the result is written.
-   `-t string` or `--type string`: specifies the trigger type. Valid values:
    -   Sync: synchronously triggered (default value)
    -   Async: asynchronously triggered

```
invk myFunction //Invokes the function if no input parameters are required and no events need to be triggered.
>>> invk myFunction -e //Encodes the return value of a function in Base64.
>>> invk myFunction -s 'hello,world'//Reads the event content from a string.
>>> invk myFunction -f event.json //Reads the event content from a file.
>>> invk myFunction -o code/result.txt //Writes the result to the result.txt file.
>>> invk myFunction -t Async //Sets the trigger type to Async.
```

## References

-   [List files in the current directory (ls)](/help/en/functioncompute/fc-2-0/common-commands#section-m2t-xkm-gyc)
-   [View resource details (info)](/help/en/functioncompute/fc-2-0/common-commands#section-9tp-yjp-gmy)
-   [Delete resources (rm)](/help/en/functioncompute/fc-2-0/common-commands#section-bh0-a3h-cc1)
