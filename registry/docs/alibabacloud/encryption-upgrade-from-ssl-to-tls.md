Starting May 24, 2023, the encryption protocol used by Tair (Redis OSS-compatible) is upgraded from SSL to Transport Layer Security (TLS) to enhance security.

## Effective date

May 24, 2023

## Impacts

-   TLS encryption is replaced with SSL encryption for Redis as of 00:00:00 on May 24, 2023.
    
-   SSL cannot be enabled for instances as of 00:00:00 on May 24, 2023.
    
    -   Instances that have SSL enabled can continue to use SSL.
        
        **Important**
        
        If you disable SSL for your instance, you can no longer enable SSL for the instance. Proceed with caution.
        
    -   SSL is not available for instances that do not have SSL enabled.
        
-   After you disable SSL, you can use TLS to encrypt data transmissions. Only the local disk-based instances that run the following minor versions support TLS:
    
    -   Redis 5.0-compatible Redis Open-Source Edition instances: V5.1.9 or later
        
    -   Redis 5.0-compatible Tair DRAM-based instances: V5.0.9 or later
        
    -   Instances in proxy mode: V6.4.9 or later
        

## Suggestions

As of May 24, 2023, to encrypt data transmissions for an instance that does not have SSL enabled, you can update the instance to a specific minor version and enable TLS for the instance. To encrypt data transmissions for an instance that has SSL enabled, you can continue to use SSL or enable TLS for the instance. For more information, see [Enable TLS encryption](/help/en/redis/user-guide/enable-tls-encryption#task-2314850).

## References

-   [Release notes for minor versions of Redis Open-Source Edition](/help/en/redis/support/apsaradb-for-redis-community-edition#concept-2075782)
    
-   [Release notes for Tair minor versions](/help/en/redis/support/apsaradb-for-redis-enhanced-edition-1)
    
-   [Release notes for Tair proxy nodes](/help/en/redis/support/apsaradb-for-redis-proxy-nodes#concept-2080622)
    
-   [Upgrade the major version](/help/en/redis/user-guide/upgrade-the-major-version-1#task-ast-xh3-3gb)
    
-   [Update the minor version of an instance](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb)
