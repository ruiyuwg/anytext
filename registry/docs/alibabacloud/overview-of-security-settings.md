Resource Access Management (RAM) provides security settings that help you protect your Alibaba Cloud account and the identities within it. You can configure passwords, logon suffixes, AccessKey pairs, and multi-factor authentication (MFA) for RAM users.

## Password

A password is a credential that verifies your identity when you log on to the Alibaba Cloud console.

**Important**

Keep your password secure and change it regularly.

For more information, see [Change the logon password of a RAM user](/help/en/ram/user-guide/change-the-logon-password-of-a-ram-user#task-187591).

## Default logon suffix

Alibaba Cloud assigns a **default logon suffix** to each Alibaba Cloud account in the format `<AccountAlias>.onaliyun.com`. The default logon suffix uniquely identifies an Alibaba Cloud account and is used for RAM user logon and single sign-on (SSO).

For more information, see [Manage the logon suffixes of RAM users](/help/en/ram/user-guide/view-and-modify-the-default-domain-name#task-221524).

## Custom logon suffix

If you own a publicly resolvable domain name, you can use it as a **custom logon suffix** to replace the default logon suffix.

**Note**

You can use a custom logon suffix only after domain ownership verification is complete.

For more information, see [Create and verify a domain alias](/help/en/ram/create-and-verify-a-domain-alias#task-221525).

## AccessKey pair

An AccessKey pair consists of an AccessKey ID and an AccessKey secret. RAM uses AccessKey pairs with symmetric encryption to authenticate API requests.

The AccessKey ID identifies the caller, and the AccessKey secret is used to generate a signature that RAM verifies.

**Important**

The AccessKey secret is displayed only when it is created and cannot be retrieved later. Keep it secure.

For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-188766).

## Multi-factor authentication (MFA)

Multi-factor authentication (MFA) adds an extra layer of protection beyond your username and password. When you log on to the console or perform sensitive operations, MFA requires secondary identity verification to help secure your account.

### MFA methods

**Authentication method**

**Description**

**Use cases**

**References**

Virtual MFA

A virtual MFA device is an application that generates time-based one-time passwords (TOTP), such as the Alibaba Cloud app or Google Authenticator. After you bind a virtual MFA device, Alibaba Cloud requires you to enter a 6-digit verification code during logon, which prevents unauthorized access from password theft.

-   Secondary identity verification for console logon
    
-   Secondary identity verification for sensitive operations
    

[Bind an MFA device for a RAM user](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user#section-y3i-9by-w72)

Passkey

A passkey is a passwordless authentication method based on public key cryptography. RAM users can use a passkey to log on or as an MFA method. Passkeys use built-in biometrics (fingerprint or face) or a PIN on your device to complete authentication.

-   Secondary identity verification for console logon
    
-   Secondary identity verification for sensitive operations
    

[Bind a passkey](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user#section-q61-nqg-nir)

Security email address

Attach a security email address to a RAM user. The verification code sent to the security email address is used for secondary identity verification.

-   Secondary identity verification for console logon
    
-   Secondary identity verification for sensitive operations
    

[Attach a security email address](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user#section-xmb-gj3-p2d)

### How MFA works

After you enable MFA and bind an MFA device to a RAM user, the user must provide two security factors when logging on or performing sensitive operations:

1.  First factor: username and password.
    
2.  Second factor: an MFA code from a virtual MFA device or security email address, or passkey authentication.
    

### Limitations

-   Virtual MFA devices support logon through a browser or the Alibaba Cloud app.
    
-   For limitations and supported device types for passkeys, see [What is a passkey?](/help/en/ram/user-guide/what-is-a-passkey).
    
-   A security email address can be attached to a maximum of five RAM users.
    

## Secondary identity verification for sensitive operations

When a RAM user with a bound MFA device performs a sensitive operation in the console, Alibaba Cloud triggers risk control and requires secondary identity verification. The user can proceed only after entering a valid MFA code.

To enforce secondary identity verification for all RAM users, you must first enable MFA for all RAM users. For more information, see [Manage the security settings of RAM users](/help/en/ram/user-guide/manage-security-settings-of-ram-users#task-188786).
