This topic provides answers to some frequently asked questions about why the Secure Access Service Edge (SASE) client-related policies do not take effect.

## The first time I create a policy, the policy does not take effect. Why?

Possible scenarios:

-   After a zero trust policy is created, access still fails.
    
-   After a blacklist policy on USB devices is delivered, the devices can still be used.
    
-   After an anti-uninstallation policy is created, the SASE client can still be uninstalled.
    
-   After a watermark policy is delivered, watermarking is not implemented.
    

If the issue occurs in one of the preceding scenarios, we recommend that you wait for a few minutes. SASE and the SASE client use a 1-minute heartbeat mechanism to communicate with each other. A policy requires 5 minutes to take effect after it is delivered to a POP access point of Alibaba Cloud. If your policy does not take effect after 5 minutes, you can provide feedback and report logs.
