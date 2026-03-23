-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Storage](https://docs.cloud.google.com/docs/storage)
-   [Transfer Appliance](https://docs.cloud.google.com/transfer-appliance/docs)
-   [Guides](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)

Send feedback

# Access your data in Cloud Storage Stay organized with collections Save and categorize content based on your preferences.

Once the Transfer Appliance team receives your appliance, the data is transferred from the appliance into your Cloud Storage destination bucket. After the data transfer is complete, a confirmation email is sent verifying that the data was transferred successfully. You can validate that the data was transferred using the following methods.

### Review the list of objects in your bucket

To validate your data, review the list of objects in your bucket using the instructions below:

1.  [List the objects in your bucket](/storage/docs/listing-objects). If you provided an [object prefix when providing bucket configuration details](#provide-bucket-config), the objects are displayed after the prefix.
    
2.  Verify that the data you transferred to the appliance is listed in your bucket.
    

### Review transfer log files in your bucket

After the data transfer is complete, you can review automatically generated `.csv` log files in the destination bucket that list the files that successfully transferred and failed to transfer from the appliance.

To find the most recent transfer log files, check the folder with the latest TIMESTAMP.

-   `DESTINATION_BUCKET_NAME/transferappliance/logs/SESSION_ID/TIMESTAMP/transferred/transferred.FILE_NUMBER.csv`
    
-   `DESTINATION_BUCKET_NAME/transferappliance/logs/SESSION_ID/TIMESTAMP/failedtotransfer/failed-to-transfer.FILE_NUMBER.csv`
    

Once the appliance is onsite, the Transfer Appliance team moves the data from the appliance to the destination bucket. After the data is transferred, additional [transfer logs](/storage-transfer/docs/on-prem-transfer-log-format#logs-in-bucket) are generated in the destination bucket that list details about the transfer such as error codes and details about each file. To review all the information listed in the transfer log, refer to the [transfer log details](/storage-transfer/docs/on-prem-transfer-log-format#format_description) table.

For further questions, contact [data-support@google.com](mailto:data-support@google.com).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
