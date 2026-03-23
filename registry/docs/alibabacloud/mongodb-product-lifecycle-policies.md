This topic describes the lifecycle policy for ApsaraDB for MongoDB. Understanding this policy will help you plan for version updates and upgrades, ensuring your services remain secure, supported, and up-to-date.

## **Background**

As the MongoDB open-source community evolves, MongoDB releases new versions that offer benefits such as improved performance, enhanced security, and additional features. At the same time, the community discontinues support and maintenance for older versions. Continuing to use unsupported versions can expose your business to stability and security risks. To ensure the security and stability of your services, we strongly recommend upgrading to the latest supported MongoDB versions. We are committed to providing high-quality, enterprise-level services and continuously enhancing the efficiency and reliability of ApsaraDB for MongoDB.

## Product lifecycle stages and limitations

Depending on the lifecycle stage, products have different limitations on purchase, use, and service support.

**Lifecycle stage**

**Lifecycle limitations**

**Continued cloud product support**

**Recommendations**

General Availability (GA)

None

After the product is generally available:

-   Purchase
    
    -   New purchases are supported.
        
    -   Renewals are supported.
        
    -   Unsubscriptions are supported.
        
-   Use
    
    -   The service can be used as normal.
        
    -   Upgrades, downgrades, and scaling are supported.
        
-   Maintenance
    
    -   Iterative upgrades are supported.
        
    -   Security patches are supported.
        
    -   Bug fixes are supported.
        
    -   After-sales service is supported.
        

None

End of Marketing (EOM)

After the EOM date:

-   Sales are stopped.
    

After the EOM date:

-   Purchase
    
    -   Renewals are supported. The renewal duration cannot extend beyond the End of Full Support (EOFS) date.
        
    -   Unsubscriptions are supported.
        
-   Use
    
    -   The service can be used as normal.
        
    -   Upgrades, downgrades, and scaling are supported.
        
-   Maintenance
    
    -   Iterative upgrades are supported.
        
    -   Security patches are supported.
        
    -   Bug fixes are supported.
        
    -   After-sales service is supported.
        

Upgrade to a later, commercially available version of ApsaraDB for MongoDB as soon as possible. For more information, see [Upgrade the major version of a database](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance).

End of Full Support (EOFS)

After the EOFS date:

-   Sales are stopped.
    
-   Renewals are stopped.
    
-   Upgrades, downgrades, and scaling are stopped.
    
-   New patches and bug fixes are stopped.
    
-   After-sales service is stopped.
    
-   Iterative feature upgrades are stopped.
    

After the EOFS date:

-   Purchase
    
    -   Only unsubscriptions are supported.
        
-   Use
    
    -   The service can be used as normal until it expires.
        

ApsaraDB for MongoDB no longer accepts after-sales support requests for instances of this version. Migration suggestions are provided instead. Upgrade the version as soon as possible. For more information, see [Upgrade the major version of a database](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance).

End of Service (EOS)

After the EOS date:

-   All features and services become unavailable. The product entry in the console is removed.
    
-   Instance resources are released.
    
-   All support and services are stopped.
    

None

Upgrade the version as soon as possible before the service ends to avoid business interruptions. For more information, see [Upgrade the major version of a database](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance).

## Current lifecycle of ApsaraDB for MongoDB

The following table describes the lifecycle of different major versions of ApsaraDB for MongoDB. Plan your upgrade schedule based on this version iteration plan.

**Note**

The timelines for each stage are subject to change based on product planning but will not be brought forward.

**Version**

**Lifecycle stage**

**EOM date**

**EOFS date**

**EOS date**

**Recommended upgrade version**

MongoDB 3.0

End of Service (EOS)

New purchases stopped on November 22, 2019.

July 31, 2024

December 31, 2024

MongoDB 7.0 or later

MongoDB 3.2

End of Service (EOS)

New purchases stopped on November 22, 2019.

July 31, 2024

December 31, 2024

MongoDB 7.0 or later

MongoDB 3.4

End of Marketing (EOM)

New purchases stopped on January 1, 2023.

June 30, 2026

December 31, 2026

MongoDB 7.0 or later

MongoDB 4.0

General Availability (GA)

New purchases of standalone instances will be stopped on December 31, 2025.

No plans

No plans

MongoDB 7.0 or later

MongoDB 4.2

General Availability (GA)

No plans

MongoDB 4.4

General Availability (GA)

MongoDB 5.0

General Availability (GA)

MongoDB 6.0

General Availability (GA)

MongoDB 7.0

General Availability (GA)

## Service commitments and recommendations

-   We will notify the contacts registered to your Alibaba Cloud account before a key lifecycle milestone. Notifications are sent using service notices, internal messages, emails, or text messages.
    
-   Compatibility
    
    -   ApsaraDB for MongoDB does not guarantee compatibility between major versions. However, we make every effort to maintain compatibility for syntax, interfaces, and features. You will be notified of potential incompatibilities through documentation or after-sales service. For more information, see [Major version upgrades for MongoDB databases](/help/en/mongodb/product-overview/upgrades-of-mongodb-major-versions).
        
    -   ApsaraDB for MongoDB guarantees compatibility between minor versions within the same major version, including syntax, interfaces, and features. Therefore, we recommend that you upgrade your product to the latest minor version of the current major version. For more information, see [Upgrade the minor version of a database](/help/en/mongodb/user-guide/upgrade-the-minor-version-of-an-apsaradb-for-mongodb-instance).
        
-   Bug fixes
    
    -   If you are not using the latest version, you must upgrade the major or minor version to apply bug fixes.
        

## **References**

-   [Release notes](/help/en/mongodb/product-overview/release-notes/)
    
-   [Product Announcements](/help/en/mongodb/product-overview/product-notification/)
    
-   [Upgrade the major version of a database](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance)
    
-   [Upgrade the minor version of a database](/help/en/mongodb/user-guide/upgrade-the-minor-version-of-an-apsaradb-for-mongodb-instance)
    
-   [MongoDB Software Lifecycle Schedules](https://www.mongodb.com/legal/support-policy/lifecycles)
