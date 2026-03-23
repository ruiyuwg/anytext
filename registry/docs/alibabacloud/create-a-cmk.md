This topic describes how to create a customer master key (CMK) in the Key Management Service (KMS) console. CMKs are used to encrypt data.

## Procedure

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms).
    
2.  In the top navigation bar, select the region in which you want to create a CMK.
    
3.  In the left-side navigation pane, choose **Resource** > **Keys**.
    
4.  Click **Create Key**.
    
5.  In the **Create Key** dialog box, configure the parameters based on your business requirements.
    
    **Parameter**
    
    **Description**
    
    **KMS Instance**
    
    The KMS instance that you use.
    
    **Key Spec**
    
    The type of the CMK. Valid values:
    
    -   Types of symmetric keys
        
        -   **Aliyun\_AES\_256**
            
        -   **Aliyun\_SM4**
            
    -   Types of asymmetric keys
        
        -   **RSA\_2048**
            
        -   **RSA\_3072**
            
        -   **EC\_P256**
            
        -   **EC\_P256K**
            
        -   **EC\_SM2**
            
    
    **Note**
    
    -   Aliyun\_SM4 and EC\_SM2 types are supported only for regions in the Chinese mainland in which managed hardware security modules (HSMs) are used.
        
    -   RSA\_3072 is supported only by a dedicated KMS instance.
        
    
    **Purpose**
    
    The purpose of the CMK. Valid values:
    
    -   **Encrypt/Decrypt**: encrypts or decrypts data.
        
    -   **Sign/Verify**: generates or verifies a digital signature.
        
    
    **Alias Name**
    
    The alias of the CMK, which helps identify the CMK. Aliases are optional to CMKs.
    
    For more information, see [Overview](/help/en/kms/key-management-service/support/overview#concept-68522-zh).
    
    **Protection Level**
    
    Valid values:
    
    -   **Software**: The CMK is protected by using a software module.
        
    -   **Hsm**: The CMK is managed in an HSM, and the HSM safeguards the CMK.
        
    
    **Description**
    
    The description of the CMK.
    
    **Rotation Period**
    
    The interval of automatic rotation of symmetric keys. Valid values:
    
    -   30 Days.
        
    -   90 Days.
        
    -   180 Days.
        
    -   365 Days.
        
    -   Disable: Automatic rotation is disabled.
        
    -   Customize: You can customize an interval that ranges from 7 days to 730 days.
        
    
    **Note**
    
    You can configure this parameter only if you set the Key Spec parameter to Aliyun\_AES\_256 or Aliyun\_SM4.
    
6.  Click **Advanced** and configure the **Key Material Source** parameter.
    
    **Note**
    
    The Advanced option appears only when you set the Key Spec parameter to Aliyun\_AES\_256 or Aliyun\_SM4.
    
    -   **Alibaba Cloud KMS**: KMS generates key material.
        
    -   **External**: You must import key material from an external source. For more information, see [Import key material](/help/en/kms/key-management-service/support/import-key-material#task-2150799).
        
        **Note**
        
        If you select External, you must also select **I understand the implications of using the external key materials key**.
        
7.  Click **OK**.
    
    After the CMK is created, you can view its detailed information, such as the CMK ID, status, and protection level.
