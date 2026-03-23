This topic provides answers to some frequently asked questions (FAQ) about the Simple Log Service command-line interface (CLI).

## What do I do if the TLSV1\_ALERT\_PROTOCOL\_VERSION error occurs when I install the Simple Log Service CLI.

Run the following command to upgrade pip and then retry the installation:

```
pip3 install pip -U
```

## How do I view the logs of the Simple Log Service CLI?

By default, the alerts and error messages of the CLI are saved in the ~/aliyunlogcli.log file. You can view the logs in this file.

## Why am I unable to find the aliyunlog command?

This is because the link to the aliyunlog script file failed to be created in Linux or macOS. Take Linux as an example, see [Step 1: Configure Python environment variables](/help/en/sls/developer-reference/install-log-service-cli#7e612443f550s).

## The returned data is displayed in different formats. How do I format the data?

Simple Log Service CLI commands provide the global parameter \--format-output to format the returned data. For example, if you specify \--format-output=json, the data is returned in the JSON format. For more information, see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).
