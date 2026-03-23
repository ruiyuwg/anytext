This topic describes the billing rules for temporary storage spaces and provides a billing example.

## Description

By default, an elastic container instance provides a temporary storage space of 30 GiB free of charge. If the quota cannot meet your business requirements, you can request to increase the size of the temporary storage space.

**Important**

The container image that is used to start an elastic container instance occupies the free 30 GiB temporary storage space. The size of the space that a container image needs to occupy is at least twice the size of the container image and determined by the compression ratio of the image.

-   Billing formula
    
    Price = Unit price × Increased size of the temporary storage space × Usage duration.
    
-   Description of the formula
    
    -   Unit price:about USD 0.000000093 per GiB-second
        
    -   Increased size of the temporary storage space: the storage space that you request to increase. Unit: GiB.
        
    -   Usage duration: Unit: seconds. The temporary storage space is created and released together with the elastic container instance. The usage duration of the temporary storage space is equal to the run duration of the instance.
        

## Example

**Note**

The following example is provided only for reference. The actual prices in your bills take precedence.

If you create an elastic container instance in the China (Hangzhou) region by specifying 2 vCPUs and 4 GiB of memory and requesting to increase 20 GiB of temporary storage space, you are charged for the instance and the increased size of the temporary storage space. The hourly price of the increased temporary storage space is calculated as: 0.000000093 × 3600 × 20 = USD 0.006696.

In bills, the price of the billable item System Disk is the price of the increased temporary storage space. Example:

![Price for the increased temporary storage space - int](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3811831861/p582783.png)
