A passkey is a simpler and more secure replacement for passwords. It allows Resource Access Management (RAM) users to log on or perform multi-factor authentication (MFA) using the device's built-in biometrics (like fingerprint or face ID) or a PIN.

## **Benefits**

### **Security**

-   Passkeys are based on the FIDO2 standard, which uses public key cryptography to deliver phishing-resistant authentication. When you register a passkey with a service, your device creates a unique cryptographic key pair. The private key is securely stored on your device and never leaves it, while the public key is registered with the service. This ensures that your credential cannot be phished or compromised on a different site. For more information, visit the [FIDO Alliance official website](https://www.passkeycentral.org/introduction-to-passkeys/how-passkeys-work).
    
-   Passkeys eliminate the risks associated with plaintext passwords, such as leaks from server breaches, sharing, or weak password practices.
    

### **Confidentiality**

Your biometric data (fingerprints and face ID) never leaves your device and is not transmitted to Alibaba Cloud. The cloud service only receives a confirmation that your device successfully authenticated you.

### **Convenience**

-   Passkeys let you log on instantly using your device's built-in biometrics or PIN, eliminating the need to type passwords or one-time verification codes.
    
-   Because passkeys are inherently multi-factor (combining something you have—the device, with something you are—biometrics, or something you know—a PIN), they satisfy MFA requirements on their own when used for signing in.
    

## **Limits**

-   A RAM user can register a maximum of five passkeys. We recommend registering passkeys on all your frequently used devices to ensure seamless access.
    
-   Each passkey registered to a RAM user must have a unique name.
    
-   By default, RAM users can register passkeys for use as a second factor (MFA). To allow users to log on with a passkey as their primary authentication method, a RAM administrator must enable this feature in the account's security settings. For more information, see [Log on with a passkey](/help/en/ram/user-guide/log-on-to-alibaba-cloud-by-using-a-passkey#2ed42ab9ebj6v).
    

## Supported device types

**Platform**

**Minimum requirements**

**Remarks**

**Browsers**

-   Chrome 108+
    
-   Edge 108+
    
-   Safari 16.1+
    
-   Firefox 122+
    

For syncing passkeys, use Chrome, Edge, or iCloud Keychain.

**Computers**

-   Windows 10/11
    
-   macOS 13 (Ventura) or later
    

-   Windows uses Windows Hello.
    
-   macOS uses iCloud Keychain for local storage and syncing.
    

**Mobile devices**

-   iOS 16+ or iPadOS 16+
    
-   Android 9+
    

-   iOS/iPadOS uses iCloud Keychain.
    
-   Android support may vary by manufacturer; using passkeys synced with a Google Account is recommended.
    

**Cross-device**

-   iOS 14.5+
    
-   Android 9+
    

For registering a passkey on a mobile device by scanning a QR code from a computer.

### Security keys

Any security key that is FIDO2-certified is supported. This includes devices that connect via USB, NFC, or Bluetooth. Older U2F-only keys may not be compatible.
