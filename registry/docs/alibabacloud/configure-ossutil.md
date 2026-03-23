ossutil reads credentials and endpoint settings from a configuration file. Run `ossutil config` to generate the file interactively, or create it manually for scripted environments.

**Important**

ossutil 2.0 is now available with a simplified setup flow, multi-level commands, and enhanced security features. See [ossutil 2.0](/help/en/oss/developer-reference/ossutil-overview/) and [Install ossutil](/help/en/oss/install-ossutil2).

## Upgrade to ossutil 2.0

ossutil 2.0 introduces several improvements over the 1.x series:

-   **Multi-level commands**: Supports both API-level commands (for example, `ossutil api put-bucket-acl`) and high-level commands (for example, `ossutil config`).
    
-   **Simplified setup**: Provide an AccessKey ID, AccessKey secret, and region ID to complete the initial configuration. Use `--profile` to manage multiple configuration files.
    
-   **Advanced filtering**: Filter `ls`, `cp`, and `rm` batch operations by path, file size, modification time, or object metadata.
    
-   **Flexible output**: Use `--output-format` to get JSON, YAML, or XML output, and `--output-query` to filter the output fields you need.
    
-   **Enhanced security**: Store sensitive parameters as environment variables instead of passing them on the command line. Use `--dry-run` to verify what a command will do before running it.
    

## Quick setup

The fastest way to configure ossutil is the interactive `ossutil config` command. It prompts for each required value and writes the configuration file automatically.

The following example shows a complete interactive session on Linux, using the Singapore region:

```
$ ossutil config
Enter the configuration file name. The file name can include a path
(Default: /home/user/.ossutilconfig. Press Enter to use the default path.
If you set a different path, you must set the --config-file option to that
path when you use commands.):
[Press Enter]

Please enter language (CH/EN, default is the same as your system language): EN

Please enter endpoint: https://oss-ap-southeast-1.aliyuncs.com

Please enter accessKeyID: <your-access-key-id>

Please enter accessKeySecret: <your-access-key-secret>

Please enter stsToken (leave blank if not using STS):
[Press Enter]
```

The following example shows how to configure endpoints for a bucket in the Singapore region (example-bucket-sg) and a bucket in the Japan (Tokyo) region (example-bucket-jp).

The following example shows how to configure endpoints for a bucket in the Singapore region (example-bucket-sg) and a bucket in the Japan (Tokyo) region (example-bucket-jp).

After the command completes, the configuration is saved to `~/.ossutilconfig`:

```
[Credentials]
language = EN
endpoint = oss-ap-southeast-1.aliyuncs.com
accessKeyID = <your-access-key-id>
accessKeySecret = <your-access-key-secret>
```

**Parameters:**

**Parameter**

**Required**

**Description**

Configuration file path

No

Path to save the configuration file. Default: `~/.ossutilconfig`. If you specify a custom path, add `-c <path>` to every command.

Language

No

`CH` for Chinese, `EN` for English. Default: same as your OS language. Takes effect after the config command completes.

`endpoint`

Yes

Endpoint of the region where your bucket is located. For example, the Singapore public endpoint is

```
ossutil64 commandname options -e https://oss-ap-southeast-1.aliyuncs.com
```

```
[Credentials]
endpoint  = https://oss-ap-southeast-1.aliyuncs.com
```

`https://oss-ap-southeast-1.aliyuncs.com`. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint: `https://oss-ap-southeast-1-internal.aliyuncs.com`. See [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

**Important**

Due to a [policy change](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) to improve compliance and security, starting **March 20, 2025, new OSS users** must [use a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names) (CNAME) to perform data API operations on OSS buckets located in Chinese mainland regions. Default public endpoints are restricted for these operations. Refer to the [official announcement](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) for a complete list of the affected operations. If you access your data via HTTPS, you must [bind a valid SSL Certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain. This is **mandatory for OSS Console access**, as the console enforces HTTPS.

`accessKeyID`

Yes

Your AccessKey ID. See [Create an AccessKey pair](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).

`accessKeySecret`

Yes

Your AccessKey secret.

`stsToken`

No

Required only when using a Security Token Service (STS) temporary access credential. Leave blank otherwise.

**Important**

Starting March 20, 2025, new OSS users must use a [custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names) (CNAME) to perform data API operations on buckets in Chinese mainland regions. Default public endpoints are restricted for these operations. If you access OSS via HTTPS, [bind a valid SSL certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain — this is mandatory for OSS Console access, as the console enforces HTTPS. See the [official announcement](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) for a complete list of affected operations.

If you saved the configuration file to a custom path (for example, `/home/config`), specify it with `-c` on every command:

```
ossutil -c /home/config ls oss://examplebucket
```

## Configuration file reference

The configuration file uses INI format with sections and key-value pairs. All credentials and connection settings go in the `[Credentials]` section.

Common parameters:

**Parameter**

**Description**

**Example**

`language`

Language for ossutil output. Valid values: `CH` (Chinese), `EN` (English).

`language = EN`

`endpoint`

Endpoint of the region where the bucket is located. Accepts values with or without the `https://` prefix.

`endpoint = oss-ap-southeast-1.aliyuncs.com`

`accessKeyID`

AccessKey ID used to identify and authenticate requests.

`accessKeyID = <your-access-key-id>`

`accessKeySecret`

AccessKey secret used to authenticate requests.

`accessKeySecret = <your-access-key-secret>`

`stsToken`

STS temporary token. Required when using STS credentials.

`stsToken = <your-sts-token>`

`mode`

Authentication mode. Valid values: `AK`, `stsToken`, `RamRoleArn`, `EcsRamRole`.

`mode = RamRoleArn`

`ramRoleArn`

ARN of the RAM role. Required when `mode = RamRoleArn`.

`ramRoleArn = <your-ram-role-arn>`

`roleSessionName`

Session name for the `RamRoleArn` authentication mode. If not set, a random value is generated.

`roleSessionName = <your-session-name>`

`tokenTimeout`

Token validity period in seconds for `RamRoleArn` mode. Default: `3600`.

`tokenTimeout = 1800`

`ecsRoleName`

Role name for the `EcsRamRole` authentication mode.

`ecsRoleName = <your-ecs-role-name>`

For all available parameters, see [Edit the configuration file](/help/en/oss/developer-reference/config#section-ow0-k3g-v3j).

## Command-line options

Command-line options override the corresponding settings in the configuration file. Use them to temporarily change a setting without editing the file.

Configuration priority: **command-line options > configuration file**

Common options:

**Option**

**Description**

**Example**

`--loglevel`

Log verbosity. Default: no log file. Valid values: `info` (informational logs), `debug` (detailed logs including HTTP request and response details).

`--loglevel debug`

`--connect-timeout`

Connection timeout in seconds. Default: `120`.

`--connect-timeout 60`

`--read-timeout`

Read timeout in seconds. Default: `1200`.

`--read-timeout 60`

`--retry-times`

Number of retries on error. Default: `10`.

`--retry-times 20`

`-e`, `--endpoint`

Endpoint to use for the request. Accepts values with or without the `https://` prefix.

`-e oss-ap-southeast-1.aliyuncs.com`

`-i`, `--access-key-id`

AccessKey ID.

`-i <your-access-key-id>`

`-k`, `--access-key-secret`

AccessKey secret.

`-k <your-access-key-secret>`

`-t`, `--sts-token`

STS token for temporary credential access.

`-i <sts-ak-id> -k <sts-ak-secret> -t <sts-token>`

`--mode`

Authentication mode. Valid values: `AK`, `stsToken`, `RamRoleArn`, `EcsRamRole`. Default: empty.

`--mode AK`

`--ram-role-arn`

ARN of the RAM role.

`--ram-role-arn <your-ram-role-arn>`

`--role-session-name`

Session name for the authentication mode.

`--role-session-name <your-session-name>`

`--token-timeout`

Token validity period in seconds. Default: `3600`.

`--token-timeout 1800`

`--ecs-role-name`

Role name for the `EcsRamRole` authentication mode.

`--ecs-role-name <your-ecs-role-name>`

For all available options, see [Common options](/help/en/oss/developer-reference/view-options#section-yhn-ko6-gqj).

## Configure access credentials

ossutil supports four authentication modes. Choose based on your environment and security requirements:

**Mode**

**When to use**

**Security level**

**Instance RAM role** (EcsRamRole)

Running on an ECS instance

Highest — credentials are automatically generated and rotated

**RAM role** (RamRoleArn)

Cross-account access, role assumption

High — no long-term credentials embedded

**STS temporary token**

Short-lived access, cross-account delegation

High — credentials expire automatically

**AccessKey pair** (AK)

Local development, single-account access

Moderate — long-term credentials

Credentials can be provided via a configuration file or command-line options. Using a configuration file is more secure because it avoids exposing credentials in shell history or system logs.

### AccessKey pair

This example uses a bucket named `example-bucket` in the Singapore region.

**Via configuration file**

Create the file `~/.myossutilconfig`:

```
[Credentials]
endpoint = oss-ap-southeast-1.aliyuncs.com
accessKeyID = <your-access-key-id>
accessKeySecret = <your-access-key-secret>
```

Run the command:

```
ossutil64 -c ~/.myossutilconfig ls oss://example-bucket
```

**Via command-line options**

```
ossutil64 -e oss-ap-southeast-1.aliyuncs.com \
  -i <your-access-key-id> \
  -k <your-access-key-secret> \
  ls oss://example-bucket
```

```
ossutil64 -e oss-ap-southeast-1.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret --mode RamRoleArn --ram-role-arn acs:ram::137918634953****:role/Alice ls oss://example-bucket
```

```
ossutil64 -e oss-ap-southeast-1.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret -t yourSecurityToken ls oss://example-bucket
```

```
ossutil64 -e oss-ap-southeast-1.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret ls oss://example-bucket
```

**Important**

Passing credentials as command-line options poses a security risk — they may be recorded in shell history or system logs. Prefer the configuration file method.

### STS temporary token

This example uses a bucket named `example-bucket` in the Singapore region.

**Via configuration file**

Create the file `~/.myossutilconfig`:

```
[Credentials]
endpoint = oss-ap-southeast-1.aliyuncs.com
accessKeyID = <sts-access-key-id>
accessKeySecret = <sts-access-key-secret>
stsToken = <your-security-token>
```

Run the command:

```
ossutil64 -c ~/.myossutilconfig ls oss://example-bucket
```

**Via command-line options**

```
ossutil64 -e oss-ap-southeast-1.aliyuncs.com \
  -i <sts-access-key-id> \
  -k <sts-access-key-secret> \
  -t <your-security-token> \
  ls oss://example-bucket
```

**Note**

Passing credentials as command-line options poses a security risk — they may be recorded in shell history or system logs. Prefer the configuration file method.

To generate an STS token, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).

### RAM role

This example uses a bucket named `example-bucket` in the Singapore region and a RAM role named `Alice`.

**Via configuration file**

Create the file `~/.myossutilconfig`:

```
[Credentials]
endpoint = oss-ap-southeast-1.aliyuncs.com
accessKeyID = <your-access-key-id>
accessKeySecret = <your-access-key-secret>
mode = RamRoleArn
ramRoleArn = acs:ram::137918634953****:role/Alice
roleSessionName = session_name_example
tokenTimeout = 1800
```

`roleSessionName` and `tokenTimeout` are optional. If not set, `roleSessionName` is randomly generated and `tokenTimeout` defaults to `3600` seconds.

Run the command:

```
ossutil64 -c ~/.myossutilconfig ls oss://example-bucket
```

**Via command-line options**

```
ossutil64 -e oss-ap-southeast-1.aliyuncs.com \
  -i <your-access-key-id> \
  -k <your-access-key-secret> \
  --mode RamRoleArn \
  --ram-role-arn acs:ram::137918634953****:role/Alice \
  ls oss://example-bucket
```

**Note**

Passing credentials as command-line options poses a security risk — they may be recorded in shell history or system logs. Prefer the configuration file method.

### Instance RAM role

On an Elastic Compute Service (ECS) instance, an instance RAM role provides ossutil with temporary credentials from STS automatically. The system generates and rotates the credentials — applications can obtain them from the instance metadata URL without requiring special management, and no AccessKey pair is required in the configuration.

Before you begin, [attach an instance RAM role to your ECS instance](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance).

This example uses a bucket named `example-bucket` in the Singapore region and an instance RAM role named `EcsRamRoleOss`.

**Via configuration file**

Create the file `~/.myossutilconfig`:

```
[Credentials]
endpoint = oss-ap-southeast-1.aliyuncs.com
mode = EcsRamRole
ecsRoleName = EcsRamRoleOss
```

Run the command:

```
ossutil64 -c ~/.myossutilconfig ls oss://example-bucket
```

**Via command-line options**

```
ossutil64 -e oss-ap-southeast-1.aliyuncs.com \
  --mode EcsRamRole \
  --ecs-role-name EcsRamRoleOss \
  ls oss://example-bucket
```

## Configure per-bucket endpoints

When working with buckets in multiple regions, set a separate endpoint for each bucket so you don't need to specify `-e` on every command.

**Via configuration file**

Add a `[Bucket-Endpoint]` section to the configuration file:

```
[Credentials]
endpoint = oss-ap-southeast-1.aliyuncs.com
accessKeyID = <your-access-key-id>
accessKeySecret = <your-access-key-secret>

[Bucket-Endpoint]
example-bucket-sg = oss-ap-southeast-1.aliyuncs.com
example-bucket-jp = oss-ap-northeast-1.aliyuncs.com
```

ossutil selects the matching endpoint automatically:

```
ossutil64 -c ~/.myossutilconfig ls oss://example-bucket-sg
ossutil64 -c ~/.myossutilconfig -e oss-ap-northeast-1.aliyuncs.com ls oss://example-bucket-jp
```

**Via command-line options**

Store your default credentials in `~/.myossutilconfig` and override the endpoint per command:

```
[Credentials]
endpoint = oss-ap-southeast-1.aliyuncs.com
accessKeyID = <your-access-key-id>
accessKeySecret = <your-access-key-secret>
```

```
ossutil64 -c ~/.myossutilconfig ls oss://example-bucket-sg
ossutil64 -c ~/.myossutilconfig -e oss-ap-northeast-1.aliyuncs.com ls oss://example-bucket-jp
```

## Configure a custom domain name

To access OSS using a custom domain name (CNAME), map the bucket to the domain in a `[Bucket-Cname]` section.

Create the file `~/.myossutilconfig`:

```
[Credentials]
accessKeyID = <your-access-key-id>
accessKeySecret = <your-access-key-secret>

[Bucket-Cname]
example-bucket = cname.example-***.com
```

Run the command:

```
ossutil64 -c ~/.myossutilconfig ls oss://example-bucket
```

ossutil routes requests for `example-bucket` through `cname.example-***.com` automatically.

## What's next

-   [ossutil command reference](/help/en/oss/developer-reference/view-options#section-yhn-ko6-gqj)
    
-   [Edit the configuration file](/help/en/oss/developer-reference/config#section-ow0-k3g-v3j)
    
-   [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints)
