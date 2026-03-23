An SSH key pair is a pair of cryptographic keys -- a public key and a private key -- used for authentication within the SSH protocol. Instead of entering a password each time you connect, the server verifies your identity by matching your private key against the public key stored on the instance. SSH key pairs are supported only on Linux instances in Simple Application Server.

This topic explains how to create, import, attach, detach, and delete key pairs in the Simple Application Server console.

## How SSH key pairs work

An SSH key pair consists of two related keys:

-   **Public key**: Stored on the instance. It can be shared freely and does not need to be kept secret.
    
-   **Private key**: Stored on your local machine. You must keep it confidential. Anyone who holds the private key can log on to instances that trust the corresponding public key.
    

When you connect to an instance, the SSH client uses your private key to prove your identity. The instance checks the signature against the public key in its `~/.ssh/authorized_keys` file. If the keys match, the connection is established without a password.

## Advantages over password-based authentication

SSH key pair-based authentication offers the following benefits compared to password-based authentication:

**Benefit**

**Description**

**Stronger security**

SSH key pairs are resistant to brute-force attacks. Private keys cannot be deduced from public keys, even if a public key is exposed.

**Convenience**

After you configure a public key on a Linux instance, you can log on by using the corresponding private key instead of a password. You can also use a single key pair to log on to multiple Linux instances simultaneously, which simplifies bulk management.

## Before you begin

Before you create or import an SSH key pair, note the following constraints:

-   SSH key pairs are supported only on Simple Application Server instances that run Linux.
    
-   You can create a maximum of **10 key pairs** per region for each Alibaba Cloud account.
    
-   The console supports creating only **RSA 2048-bit** key pairs. If you need a key pair that uses a different algorithm, create it locally and import the public key. For supported encryption methods, see [Supported encryption methods for import](#8461ee8f756qp).
    

### Check whether you already have a key pair

Before you create a new key pair, check whether a usable key pair already exists on your local machine.

**On macOS or Linux**, run the following command in a terminal:

```
ls -la ~/.ssh/
```

Look for files named `id_rsa` and `id_rsa.pub` (or similar). The `.pub` file is the public key.

**On Windows**, check the following default directory:

```
C:\Users\<your-username>\.ssh\
```

If you find an existing key pair, you can import its public key into the Simple Application Server console instead of creating a new one.

## Create a key pair

You can create a key pair in the console or generate one locally and import the public key. After you create or import a key pair, you can attach it to a Simple Application Server instance.

### Auto-generate a key pair in the console

1.  Go to the [Key Pair page](https://swas.console.alibabacloud.com/keyPairs/) in the Simple Application Server console.
    
2.  On the **Key Pairs** page, click **Create Key Pair**.
    
3.  In the **Create Key Pair** dialog box, configure the following parameters and click **Confirm**.
    
    **Important**
    
    -   The private key is automatically downloaded as a `.pem` file to your local machine. This is your only opportunity to download the private key. Store it in a secure location because it cannot be retrieved later.
        
    -   If a download dialog box does not appear, check the download page of your browser for blocked downloads.
        
    
    **Parameter**
    
    **Description**
    
    **Key Pair Name**
    
    Enter a custom name for the key pair. The name must be 2 to 64 characters in length, start with a letter or a Chinese character, and can contain digits, colons (:), underscores (\_), and hyphens (-).
    
    **Creation Mode**
    
    Select **Auto-Generate Key Pair**.
    
4.  In the **Create Key Pair** dialog box, you can select whether to attach the key pair to an instance immediately. You can also attach the key pair later. For more information, see [Attach a key pair to an instance](#a4f0cc90fabok).
    

### Import an existing key pair

If you already have a key pair, you can import its public key into the console. This lets you use your existing key pair to log on to Simple Application Server instances. The imported key pair must use a [supported encryption method](#8461ee8f756qp).

1.  Go to the [Key Pair page](https://swas.console.alibabacloud.com/keyPairs/) in the Simple Application Server console.
    
2.  On the **Key Pairs** page, click **Create Key Pair**.
    
3.  In the **Create Key Pair** dialog box, configure the following parameters and click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    **Key Pair Name**
    
    Enter a custom name for the key pair. The name must be 2 to 64 characters in length, start with a letter or a Chinese character, and can contain digits, colons (:), underscores (\_), and hyphens (-).
    
    **Creation Mode**
    
    Select **Import Key Pair**.
    
    **Public Key Content**
    
    Paste the public key content into the code editor. You can hover over **Base64 Preview** to view the expected format. For instructions on obtaining your public key, see [View public key information](#d7b0d17ecdwks).
    
4.  In the **Create Key Pair** dialog box, you can select whether to attach the key pair to an instance immediately. You can also attach the key pair later. For more information, see [Attach a key pair to an instance](#a4f0cc90fabok).
    

### Generate a key pair locally with ssh-keygen

If you prefer to generate a key pair on your local machine rather than in the console, you can use the `ssh-keygen` command and then import the public key.

**On macOS or Linux**, open a terminal and run:

```
ssh-keygen -t rsa -b 2048
```

When prompted:

1.  **Enter file in which to save the key**: Press Enter to accept the default location (`~/.ssh/id_rsa`), or specify a custom path.
    
2.  **Enter passphrase**: Enter a passphrase for additional security, or press Enter to skip.
    

After the key pair is generated, import the public key (the `.pub` file) into the console by following the steps in [Import an existing key pair](#cf5f1b4fd6no1).

**On Windows**, you can use the same command in Windows Terminal, PowerShell, or Command Prompt if OpenSSH is installed. Alternatively, use PuTTYgen to generate a key pair.

> The console supports only RSA 2048-bit key pairs for auto-generation, but you can import key pairs that use other supported algorithms. For the full list, see [Supported encryption methods for import](#8461ee8f756qp).

## Attach a key pair to an instance

After you create or import a key pair, attach it to a Simple Application Server instance so that you can use the key pair to log on.

The instance must be in the **Running** or **Stopped** state.

**Important**

-   You can attach only one key pair to a Simple Application Server instance through the console. If you attach a new key pair to an instance that already has one, the new key pair replaces the existing one.
    
-   After you attach a key pair to a Simple Application Server instance, password-based logon is automatically disabled for the `root` user on the server. To re-enable password-based logon, you must modify the configuration file of the server. For more information, see [Connect to a Linux server](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely#section-kyx-w5p-3cg).
    
-   To use multiple key pairs on one instance, you can manually edit the `~/.ssh/authorized_keys` file. For more information, see [Use multiple key pairs on one instance](#0cb0f402c6i12).
    

1.  Go to the [Key Pair page](https://swas.console.alibabacloud.com/keyPairs/) in the Simple Application Server console.
    
2.  On the **Key Pairs** page, find the target key pair and click **Attach Instance** in the **Actions** column.
    
3.  In the **Attach Server** dialog box, select one or more Linux Simple Application Server instances and click the transfer icon.
    
4.  Click **Confirm**.
    
5.  In the **Attach Instance** dialog box, choose whether to restart the instance immediately:
    
    -   **Restart the instance now**: Click **Restart Instance Now**. The key pair takes effect after the instance restarts.
        
        **Warning**
        
        The restart operation stops the instance for a short period of time and may interrupt services that are running on the instance. We recommend that you restart the instance during off-peak hours.
        
    -   **Restart later**: Click **Postpone Restart**. Restart the instance manually during off-peak hours for the key pair to take effect.
        

After the key pair takes effect, you can use it to log on to the instance. For more information, see [Remotely connect to a Linux server](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely#ffd6b8a2f9gtq).

## Detach a key pair from an instance

To replace a key pair or revoke a user's access to an instance, you can detach the SSH key pair.

**Important**

After you attach a key pair to a Simple Application Server instance and restart the instance for the key pair to take effect, password-based logon is automatically disabled for the `root` user on the server. To re-enable password-based logon, you must modify the configuration file of the server. For more information, see [Connect to a Linux server](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely#section-kyx-w5p-3cg).

1.  Go to the [Key Pair page](https://swas.console.alibabacloud.com/keyPairs/) in the Simple Application Server console.
    
2.  On the **Key Pairs** page, find the target key pair and click **Detach Instance** in the **Actions** column.
    
3.  In the **Detach Instance** dialog box, select one or more Linux Simple Application Server instances and click the transfer icon.
    
4.  Click **Confirm**.
    
5.  In the **Detach Instance** dialog box, choose whether to restart the instance immediately:
    
    -   **Restart the instance now**: Click **Restart Detached Instance**. The detachment takes effect after the instance restarts.
        
        **Warning**
        
        The restart operation stops the instance for a short period of time and may interrupt services that are running on the instance. We recommend that you restart the instance during off-peak hours.
        
    -   **Restart later**: Click **Postpone Restart**. Restart the instance manually during off-peak hours for the detachment to take effect.
        

## Delete a key pair

If a key pair is no longer in use, you must first detach it from all instances and then delete it.

1.  Go to the [Key Pair page](https://swas.console.alibabacloud.com/keyPairs/) in the Simple Application Server console.
    
2.  On the **Key Pairs** page, find the key pair that you want to delete and click **Delete** in the **Actions** column.
    
3.  In the **Delete Key Pair** dialog box, click **OK**.
    

**View public key information**

You can view the public key content of an existing key pair in the following ways, depending on your operating system.

### On Windows

1.  Start PuTTYgen.
    
2.  Click **Load**.
    
3.  Select the `.ppk` or `.pem` file.
    

PuTTYgen displays the public key information.

### On macOS or Linux

Run the following command, replacing the path with the location of your private key file:

Example output:

### From within the instance

1.  Connect to the Linux instance by using an existing SSH key pair.
    
    **Important**
    
    The key pair is attached to the root user, so you must be logged on as the root user.
    
2.  Run the following command to view the public key information:
    
    ```
       sudo cat ~/.ssh/authorized_keys
    ```
    

> The public key is stored in the `~/.ssh/authorized_keys` file on the instance.

## Use multiple key pairs on one instance

The console allows you to attach only one key pair to an instance at a time. To use multiple key pairs, you can manually edit the `~/.ssh/authorized_keys` file on the instance.

1.  Connect to the Linux instance by using an existing SSH key pair.
    
    **Important**
    
    The key pair is attached to the root user, so you must be logged on as the root user.
    
2.  Open the `authorized_keys` file:
    
    ```
       sudo vim .ssh/authorized_keys
    ```
    
3.  Press the `i` key to enter edit mode. Then add or replace public keys:
    
    -   **To add a new key pair**: Paste the new public key on a new line below the existing public key. \`\` `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCys3aOkFm1Xh8iN0lijeQF5mz9Iw/FV/bUUduZjauiJa1KQJSF4+czKtqMAv38QEspiWStkSfpTn1g9qeUhfxxxxxxxxxx+XjPsf22fRem+v7MHMa7KnZWiHJxO62D4Ihvv2hKfskz8K44xxxxxxxxxx+u17IaL2l2ri8q9YdvVHt0Mw5TpCkERWGoBPE1Y8vxFb97TaE5+zc+2+eff6xxxxxxxxxx/feMeCxpx6Lhc2NEpHIPxMpjOv1IytKiDfWcezA2xxxxxxxxxx/YudCmJ8HTCnLId5LpirbNE4X08Bk7tXZAxxxxxxxxxx/FKB1Cxw1TbGMTfWxxxxxxxxxx imported-openssh-key ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDdlrdZwV3+GF9q7rhc6vYrExwT4WU4fsaRcVXGV2Mg9RHex21hl1au77GkmnIgukBZjywlQOT4GDdsJy2nBOdJPrCEBIPxxxxxxxxxxx/fctNuKjcmMMOA8YUT+sJKn3l7rCLkesE+S5880yNdRjBiiUy40kyr7Y+fqGVdSOHGMXZQPpkBtojcxxxxxxxxxx/htEqGa/Jq4fH7bR6CYQ2XgH/hCap29Mdi/G5Tx1nbUKuIHdMWOPvjxxxxxxxxxx+lHtTGiAIRG1riyNRVC47ZEVCg9iTWWGrWFvxxxxxxxxxx/9H9mPCO1Xt2fxxxxxxxxBtmR imported-openssh-key` \` `> <b>Note</b> > > When the` authorized\_keys\` file contains multiple public keys, you can log on to the instance by using any of the corresponding private keys.
        
    -   **To replace an existing key pair**: Delete the current public key content and paste the new public key. \`\` `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDdlrdZwV3+GF9q7rhc6vYrExwT4WU4fsaRcVXGV2Mg9RHex21hl1au77GkmnIgukBZjywlQOT4GDdsJy2nBOdJPrCEBIP6t0Mk5aPkK/fctNuKjcmMMOA8YUT+sJKn3l7rCLkesE+S5880yNdRjBiiUy40kyr7Y+fqGVdSOHGMXZQPpkBtojcV14uAy0yV6/htEqGa/Jq4fH7bR6CYQ2XgH/hCap29Mdi/G5Tx1nbUKuIHdMWOPvjGACGcXclex+lHtTGiAIRG1riyNRVC47ZEVCg9iTWWGrWFvVlnI0E3Deb/9H9mPCO1Xt2fxxxxxxxxBtmR imported-openssh-key` \`\`
        
4.  Press the Esc key to exit edit mode, then enter `:wq` to save the changes.
    
5.  Use the new SSH key pair to log on to the instance. For more information, see [Connect to a Linux instance using OpenSSH or Xshell](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-an-ssh-key-pair).
    

If you can successfully log on with the new private key, the key pair has been added or replaced.

**Supported encryption methods for import**

An imported key pair must support one of the following encryption methods:

**Category**

**Encryption method**

Standard algorithms

`rsa`

`dsa`

`ecdsa`

OpenSSH format

`ssh-rsa`

`ssh-dss`

OpenSSH certificate (v00)

`ssh-rsa-cert-v00@openssh.com`

`ssh-dss-cert-v00@openssh.com`

OpenSSH certificate (v01)

`ssh-rsa-cert-v01@openssh.com`

`ssh-dss-cert-v01@openssh.com`

`ecdsa-sha2-nistp256-cert-v01@openssh.com`

`ecdsa-sha2-nistp384-cert-v01@openssh.com`

`ecdsa-sha2-nistp521-cert-v01@openssh.com`

## Related operations

You can also manage key pairs by calling API operations:

**API**

**Description**

[CreateInstanceKeyPair](/help/en/simple-application-server/developer-reference/api-swas-open-2020-06-01-createinstancekeypair)

Create an instance key pair.

[UploadInstanceKeyPair](/help/en/simple-application-server/developer-reference/api-swas-open-2020-06-01-uploadinstancekeypair)

Import a key pair.

[DescribeInstanceKeyPair](/help/en/simple-application-server/developer-reference/api-swas-open-2020-06-01-describeinstancekeypair)

Query information about instance key pairs.

[DeleteInstanceKeyPair](/help/en/simple-application-server/developer-reference/api-swas-open-2020-06-01-deleteinstancekeypair)

Delete an instance key pair.
