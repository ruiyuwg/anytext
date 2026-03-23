When Security-Enhanced Linux (SELinux) is in `enforcing` mode on an ECS instance, SSH login may fail even with the correct password.

## Symptom

You enter the correct password to connect to a Linux ECS instance over SSH, but the connection fails. One or both of the following error messages appear in the command output or in `/var/log/secure`:

```
Permission denied, please try again.
```

```
error: Could not get shadow information for root.
```

## Cause

SELinux is set to `enforcing` mode. In this mode, SELinux blocks the SSH daemon from accessing authentication files such as `/etc/shadow`, which causes password verification to fail.

## Diagnosis

Run the following command on the instance to check the SELinux status. If SSH is unavailable, connect through the VNC console in the ECS console.

```
getenforce
```

If the output is `Enforcing`, SELinux is active and likely blocking SSH authentication.

## Solution

Disable SELinux temporarily or permanently to restore SSH access.

### Option 1: Disable SELinux temporarily

Run the following command to switch SELinux to permissive mode. This change takes effect immediately without a restart but reverts after a reboot.

```
setenforce 0
```

### Option 2: Disable SELinux permanently

1.  Open the SELinux configuration file:
    
    ```
       vi /etc/selinux/config
    ```
    
2.  Change the `SELINUX` parameter to `disabled`:
    
    ```
       SELINUX=disabled
    ```
    
3.  Save the file and restart the instance for the change to take effect.
    

**Note** For detailed instructions and additional options, see [Enable or disable SELinux](/help/en/ecs/user-guide/enable-or-disable-selinux).

## Verification

After you disable SELinux, verify that SSH access is restored:

1.  Open a new SSH session to the instance.
    
2.  Log in with the correct password and confirm that the `Permission denied` and `Could not get shadow information` errors no longer appear.
    
3.  Run `getenforce` to confirm that SELinux is set to `Permissive` or `Disabled`.
