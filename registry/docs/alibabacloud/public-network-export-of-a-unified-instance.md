Internet Shared Bandwidth instances support bandwidth sharing and multiplexing within the same region. After you create an Internet Shared Bandwidth instance in a region, you can add elastic IP addresses (EIPs) in the region to the Internet Shared Bandwidth instance. The EIPs can share the Internet Shared Bandwidth instance to support Internet access. This facilitates Internet access control and reduces Internet bandwidth costs. You can associate EIP with ECS instances, Internet NAT gateways, and Classic Network Balancer (CLB) instances to allow these resources to share the Internet Shared Bandwidth instance. This topic describes how to enable ECS instances to use the same Internet Shared Bandwidth instance to access the Internet.

## Enable ECS **instances** without **public IP addresses** to share an Internet Shared Bandwidth instance

When you create an EIP, you can add the EIP to an Internet Shared Bandwidth instance. Then, you can associate the EIP with an ECS instance that does not have a public IP address to allow the ECS instance to use the EIP to access the Internet. Procedure:

1.  Purchase an Internet Shared Bandwidth instance in the region of the ECS instance. For more information, see [Create an Internet Shared Bandwidth instance](/help/en/internet-shared-bandwidth/user-guide/create-an-internet-shared-bandwidth-instance).
    
2.  Purchase an EIP and add the EIP to the Internet Shared Bandwidth instance.
    
    -   If you do not have an available EIP in the region of the ECS instance, select **Buy EIP and add to Bandwidth Package**.
        
    -   If you have an available EIP in the region of the ECS instance, select **Select from EIP List**.
        
    
    For more information, see [Associate EIPs with an Internet Shared Bandwidth instance](/help/en/internet-shared-bandwidth/user-guide/associate-eips-with-an-internet-shared-bandwidth-instance).
    
3.  Associate the EIP with the ECS instance. For more information, see [Associate the EIP with a cloud resource](/help/en/internet-shared-bandwidth/user-guide/associate-an-eip-with-a-cloud-instance#steps-wwr-584-zps).
    

## **Enable** ECS **instances** associated with EIPs to share an Internet Shared Bandwidth instance

You can add the EIPs that are associated with ECS instances to an Internet Shared Bandwidth instance. Procedure:

1.  Purchase an Internet Shared Bandwidth instance in the region of the ECS instance. For more information, see [Create an Internet Shared Bandwidth instance](/help/en/internet-shared-bandwidth/user-guide/create-an-internet-shared-bandwidth-instance).
    
2.  Add the EIPs that are associated with the ECS instances to the Internet Shared Bandwidth instance.
    
    When you perform this step, select **Select from EIP List**. For more information, see [Associate EIPs with an Internet Shared Bandwidth instance](/help/en/internet-shared-bandwidth/user-guide/associate-eips-with-an-internet-shared-bandwidth-instance).
    

## **Enable** ECS **instances** with static public IP addresses to share an Internet Shared Bandwidth instance

You can switch the ECS instances from static public IP addresses to EIPs, and then add the EIPs to the Internet Shared Bandwidth instance. This allows the ECS instances to use the Internet Shared Bandwidth instance to access the Internet. Procedure:

1.  Purchase an Internet Shared Bandwidth instance in the region of the ECS instance. For more information, see [Create an Internet Shared Bandwidth instance](/help/en/internet-shared-bandwidth/user-guide/create-an-internet-shared-bandwidth-instance).
    
2.  Convert the static public IP addresses of the ECS instances to EIPs. For more information, see [Convert the static public IP address of an ECS instance in a VPC to an EIP](/help/en/eip/convert-an-automatically-assigned-public-ip-address-to-an-eip-for-a-vpc-connected-ecs-instance).
    
3.  Add the EIPs that are associated with the ECS instances to the Internet Shared Bandwidth instance.
    
    When you perform this step, select **Select from EIP List**. For more information, see [Associate EIPs with an Internet Shared Bandwidth instance](/help/en/internet-shared-bandwidth/user-guide/associate-eips-with-an-internet-shared-bandwidth-instance).
    

## **Enable** ECS **instances** in the classic network to share an Internet Shared Bandwidth instance

To enable ECS instances in the classic network to share an Internet Shared Bandwidth instance, migrate the ECS instances from the classic network to a VPC first. Procedure:

1.  Purchase an Internet Shared Bandwidth instance in the region of the ECS instance. For more information, see [Create an Internet Shared Bandwidth instance](/help/en/internet-shared-bandwidth/user-guide/create-an-internet-shared-bandwidth-instance).
    
2.  Migrate the ECS instances from the classic network to a VPC. For more information, see [Migrate ECS instances from a classic network to a VPC](/help/en/vpc/use-cases/migrate-ecs-instances-from-classic-network-to-vpc#task-1512598).
    
3.  Enable the ECS instances to share the Internet Shared Bandwidth instance based on the following instructions:
    
    -   If the ECS instances do not have public IP addresses, associate EIPs that are added to the Internet Shared Bandwidth instance with the ECS instances. For more information, see [Enable ECS instances without public IP addresses to share an Internet Shared Bandwidth instance](#5350d4804debf).
        
    -   If the ECS instances have static public IP addresses, switch the ECS instances from static IP addresses to EIPs, and then add the EIPs to the Internet Shared Bandwidth instance. For more information, see [Enable ECS instances with static public IP addresses to share an Internet Shared Bandwidth instance](#e98a78c04dgau).
