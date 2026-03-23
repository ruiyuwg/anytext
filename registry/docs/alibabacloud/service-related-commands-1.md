This topic describes service-related commands in Function Compute Command Line Interface (fcli).

## Prerequisites

In the folder where the executable file is located, run the `fcli shell` command to enter the interactive mode.

## Create a service (mks)

-   `-d string` or `--description string`: the description of a service.
-   `-p string` or `--log-project string`: the log project corresponding to a service.
-   `-l string` or `--log-store string`: the Logstore corresponding to a service.
-   `-r string` or `--role string`: the role corresponding to a service.

```
>>> mks myService //Creates a service without any advanced settings.
>>> mks myService -d 'my description' -p my-log-project -l my-log-store -r acs:ram::myID:role/myRoleName //Creates a service, in which the description is my description, the log project is my-log-project, the Logstore is my-log-store, and the role is myRoleName.                    
```

## Update a service (ups)

Parameters in this command are the same as those in the mks command.

-   `-d string` or `--description string`: the description of a service.
-   `-p string` or `--log-project string`: the log project corresponding to a service.
-   `-l string` or `--log-store string`: the Logstore corresponding to a service.
-   `-r string` or `--role string`: the role corresponding to a service.

```
>>> ups myService -d 'my description' -p my-log-project -l my-log-store -r acs:ram::myID:role/myRoleName //Updates the service, in which the description is my description, the log project is my-log-project, the Logstore is my-log-store, and the role is myRoleName.                   
```

## References

-   [List files in the current directory (ls)](/help/en/functioncompute/fc-2-0/common-commands#section-m2t-xkm-gyc)
-   [View resource details (info)](/help/en/functioncompute/fc-2-0/common-commands#section-9tp-yjp-gmy)
-   [Delete resources (rm)](/help/en/functioncompute/fc-2-0/common-commands#section-bh0-a3h-cc1)
