MaxCompute SQL provides encryption and decryption functions that you can use to encrypt or decrypt data based on your business requirements. This topic describes the syntax and parameters of the encryption and decryption functions that are supported by MaxCompute SQL. This topic also provides examples on how to use the encryption and decryption functions to develop data.

## **MaxCompute data encryption and decryption capabilities**

-   Single-key encryption and decryption: The system generates a single random key for encryption or decryption of specified columns. You need to save the generated key.
    
    ![单一密钥加密.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5425120071/p729468.jpg)
    
    The following table describes the single-key encryption and decryption functions supported by MaxCompute SQL.
    
    **Function**
    
    **Description**
    
    [SYM\_DECRYPT](#section-kd9-xeu-g78)
    
    Decrypts encrypted data in specified columns of a table by using a random key and returns the plaintext of the BINARY type.
    
    [SYM\_ENCRYPT](#section-jbx-6e4-g7x)
    
    Encrypts data in specified columns of a table by using a random key and returns the ciphertext of the BINARY type.
    
-   Multi-key encryption and decryption: A keyset is a key management object of MaxCompute and can store one or more keys. You can manually add keys to the keyset, rotate the keys, and view the original keys.
    
    ![多密钥加密.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5425120071/p729429.jpg)
    
    The following table describes the multi-key encryption and decryption functions supported by MaxCompute SQL.
    
    **Function**
    
    **Description**
    
    [NEW\_KEYSET](/help/en/maxcompute/user-guide/new-keyset)
    
    Creates a keyset based on the specified algorithm type.
    
    [ADD\_KEY\_TO\_KEYSET](/help/en/maxcompute/user-guide/add-key-to-keyset)
    
    Adds a key to a keyset and configures the added key as the master key.
    
    [KEYSET\_TO\_JSON](/help/en/maxcompute/user-guide/keyset-to-json)
    
    Converts a keyset of the BINARY type into a readable keyset of the JSON type. After the conversion, you can view details of the keyset.
    
    [KEYSET\_FROM\_JSON](/help/en/maxcompute/user-guide/keyset-from-json)
    
    Converts a keyset of the JSON type into a keyset of the BINARY type.
    
    [ROTATE\_KEYSET](/help/en/maxcompute/user-guide/rotate-keyset)
    
    Allows the system to automatically produce a new key and configures the new key as the master key.
    
-   Key Management Service (KMS)-based multi-key encryption and decryption: MaxCompute supports data encryption and decryption based on KMS. The system automatically generates a basic keyset for data encryption and decryption. The basic keyset is combined with a KMS key to generate an encrypted keyset, which is referred to as Keyset\_KMS. You need to save the Keyset\_KMS. To decrypt data, you need to provide the Keyset\_KMS. The system decrypts Keyset\_KMS based on the KMS key to restore the basic keyset, and then decrypts data by using the basic keyset.
    
    ![keyset.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5425120071/p729467.jpg)
    
    The following table describes the KMS-based multi-key encryption and decryption functions supported by MaxCompute SQL.
    
    **Function**
    
    **Description**
    
    [NEW\_WRAPPED\_KEYSET](/help/en/maxcompute/user-guide/new-wrapped-keyset)
    
    Assumes the Alibaba Cloud Resource Name (ARN) of a role that can use Key Management Service (KMS) customer master key (CMK) ARNs to MaxCompute and creates a wrapped keyset. The role ARN is specified by `role_arn`. The KMS CMK ARN is specified by kms\_cmk\_arn. The function is also used to grant other Alibaba Cloud accounts the permissions to decrypt a keyset based on `role_chain`.
    
    [REWRAP\_KEYSET](/help/en/maxcompute/user-guide/rewrap-keyset)
    
    Re-encrypts a wrapped keyset by using a specified KMS key.
    
    [ROTATE\_WRAPPED\_KEYSET](/help/en/maxcompute/user-guide/rotate-wrapped-keyset)
    
    Decrypts an encrypted keyset, implements key rotation, and uses a new key to encrypt the keyset.
    
    [USE\_WRAPPED\_KEYSET](/help/en/maxcompute/user-guide/use-wrapped-keyset)
    
    Converts a wrapped keyset into a basic keyset that is used as a parameter in the encryption or decryption function. You can also use the USE\_WRAPPED\_KEYSET function to obtain information about a wrapped keyset and save the information for subsequent keyset maintenance.
    
    [ENHANCED\_SYM\_ENCRYPT](/help/en/maxcompute/user-guide/enhanced-sym-encrypt)
    
    Encrypts data by using a specified keyset.
    
    [ENHANCED\_SYM\_DECRYPT](/help/en/maxcompute/user-guide/enhanced-sym-decrypt)
    
    Decrypts data by using a specified keyset.
    

## Usage notes

MaxCompute V2.0 provides additional functions. If the functions that you use involve new data types that are supported in the MaxCompute V2.0 data type edition, you must execute the SET statement to enable the MaxCompute V2.0 data type edition. The new data types include TINYINT, SMALLINT, INT, FLOAT, VARCHAR, TIMESTAMP, and BINARY.

-   Session level: To enable the MaxCompute V2.0 data type edition at the session level, you must add `set odps.sql.type.system.odps2=true;` before the SQL statement that you want to execute, and commit and execute them together.
    
-   Project level: The project owner can run the following command to enable the MaxCompute V2.0 data type edition for the project based on the project requirements. The configuration takes effect after 10 to 15 minutes. To enable the MaxCompute V2.0 data type edition at the project level, execute the following statement:
    
    ```
    setproject odps.sql.type.system.odps2=true;
    ```
    
    For more information about `setproject`, see [Project operations](/help/en/maxcompute/user-guide/project-operations#concept-qg3-s32-vdb). For more information about the precautions that you must take when you enable the MaxCompute V2.0 data type edition at the project level, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).
    

## SYM\_DECRYPT

-   Syntax
    
    ```
    binary sym_decrypt(binary <value_to_decrypt>,
                       binary <key>
                       [,string <encryption_method> ,
                        [ string <additional_authenticated_data> ]
                       ]
                      )
    ```
    
-   Description
    
    Decrypts data that is encrypted by using a random key in specified columns of a table.
    
-   Parameters
    
    -   value\_to\_decrypt: required. The data that you want to decrypt. Only data of the BINARY type can be decrypted.
        
    -   key: required. The key that is used to decrypt data. The key must be of the BINARY type and must be 256 bits in length.
        
    -   encryption\_method: optional. The method that is used to decrypt data, which must be the same as the encryption method.
        
    -   additional\_authenticated\_data: optional. The additional authenticated data (AAD), which is used to verify the authenticity and integrity of the data. This parameter is required if AAD is used during data encryption.
        
-   Return value
    
    Plaintext of the BINARY type is returned. You can use the CAST function to convert the BINARY type to the STRING type based on your business requirements.
    
-   Examples
    
    The following examples illustrate how to decrypt data that is encrypted by using [SYM\_ENCRYPT](#section-jbx-6e4-g7x).
    
    -   Example 1: Decrypt data that is encrypted by using a plaintext key.
        
        -   Use the authenticated encryption with associated data (AEAD) encryption algorithm to decrypt data.
            
            ```
            -- Decrypt data in the id_card_no column.
            insert overwrite table mf_user_info
            select id,
                name,
                gender,
                   cast(sym_decrypt(unbase64(id_card_no),
                               cast('b75585cf321cdcad42451690cdb7bfc4' as binary)
                              ) as string) as id_card_no,
                   tel
            from mf_user_info;
            
            -- Query the decrypted plaintext data.
            select * from mf_user_info;
            ```
            
            The following result is returned:
            
            ```
            +------------+------+--------+------------+-------------+
            | id         | name | gender | id_card_no | tel         |
            +------------+------+--------+------------+-------------+
            | 1          | bob  | male   | 0001       | 13900001234 |
            | 2          | allen| male   | 0011       | 13900001111 |
            | 3          | kate | female | 0111       | 13900002222 |
            | 4          | annie| female | 1111       | 13900003333 |
            +------------+------+--------+------------+-------------+
            ```
            
        -   Use the AAD encryption algorithm to decrypt data.
            
            ```
            -- Decrypt data in the id_card_no column.
            insert overwrite table mf_user_info
            select id,
                         name,
                         gender,
                   sym_decrypt(unbase64(id_card_no),
                               cast('b75585cf321cdcad42451690cdb7bfc4' as binary),
                               'AES-GCM-256',
                                   'test'
                              )as id_card_no,
                   tel
            from mf_user_info;
            
            -- Query the decrypted plaintext data.
            select * from mf_user_info;
            ```
            
            The following result is returned:
            
            ```
            +------------+------+--------+------------+------------+
            | id         | name | gender | id_card_no |    tel     |
            +------------+------+--------+------------+------------+
            | 1          | bob  | male   | 0001       | 13900001234|
            | 2          | allen| male   | 0011       | 13900001111|
            | 3          | kate | female | 0111       | 13900002222|
            | 4          | annie| female | 1111       | 13900003333|
            +------------+------+--------+------------+------------+
            ```
            
    -   Example 2: Decrypt data that is encrypted by using a key table.
        
        ```
        -- Decrypt data in the specified column of the mf_user_info table.
        insert overwrite table mf_user_info
        select /*+mapjoin(b)*/
              a.id,
              a.name,
              a.gender,
              cast(sym_decrypt(unbase64(a.id_card_no), b.key) as string) as id_card_no,
              a.tel
         from mf_user_info as a join mf_id_key as b on a.id>=b.id;
        
        -- Query the decrypted data.
        select * from mf_user_info;
        ```
        
        The following result is returned:
        
        ```
        +------------+------+--------+------------+-------------+
        | id         | name | gender | id_card_no | tel         |
        +------------+------+--------+------------+-------------+
        | 1          | bob  | male   | 0001       | 13900001234 |
        | 2          | allen| male   | 0011       | 13900001111 |
        | 3          | kate | female | 0111       | 13900002222 |
        | 4          | annie| female | 1111       | 13900003333 |
        +------------+------+--------+------------+-------------+
        ```
        

## SYM\_ENCRYPT

-   Syntax
    
    ```
    binary sym_encrypt(string|binary <value_to_encrypt>,
                       binary <key>
                       [,string <encryption_method> ,
                          [ string <additional_authenticated_data> ]
                        ]
                      )
    ```
    
-   Description
    
    Encrypts data in specified columns of a table by using a random key.
    
-   Parameters
    
    -   value\_to\_encrypt: required. The data that you want to encrypt. You can encrypt only data of the STRING and BINARY types.
        
    -   key: required. The key that you use to encrypt data. The key must be of the BINARY type and must be 256 bits in length.
        
    -   encryption\_method: optional. The encryption method. Only the AES-GCM-256 encryption algorithm is available and is used as the default value.
        
    -   additional\_authenticated\_data: optional. The AAD, which is used to verify the authenticity and integrity of the data. This parameter takes effect only when you use the authenticated encryption with associated data (AEAD) encryption algorithm, such as AES GCM.
        
-   Return value
    
    Ciphertext of the BINARY type is returned.
    
    -   The return value contains the Initialization Vector (IV), ciphertext, and AEAD tag in sequence.
        
    -   The return value is random and differs each time even if you use the same key to encrypt the same plaintext.
        
    
-   Sample data
    
    ```
    -- Create a table.
    create table mf_user_info(id bigint,
                              name string,
                              gender string,
                              id_card_no string,
                              tel string);
    -- Insert data into external table.
    insert overwrite table mf_user_info values(1,"bob","male","0001","13900001234"),
                                           (2,"allen","male","0011","13900001111"),
                                         (3,"kate","female","0111","13900002222"),
                                         (4,"annie","female","1111","13900003333");
    -- Query data from the table.
    select * from mf_user_info;
    +------------+------+--------+------------+------------+
    | id         | name | gender | id_card_no |    tel     |
    +------------+------+--------+------------+------------+
    | 1          | bob  | male   | 0001       | 13900001234|
    | 2          | allen| male   | 0011       | 13900001111|
    | 3          | kate | female | 0111       | 13900002222|
    | 4          | annie| female | 1111       | 13900003333|
    +------------+------+--------+------------+------------+
    ```
    
-   Example 1: Encrypt data by using a plaintext key.
    
    Encrypt data in a specified column of the `mf_user_info` table based on the [sample data](/help/en/maxcompute/user-guide/sym-encrypt#section-9hu-vrl-shc). Sample statements:
    
    -   Use the AEAD algorithm to encrypt data.
        
        ```
        -- Encrypt data in the id_card_no column.
        insert overwrite table mf_user_info
        select id,
            name,
            gender,
               base64(sym_encrypt(id_card_no,
                           cast('b75585cf321cdcad42451690cdb7bfc4' as binary)
                          ))as id_card_no,
              tel
        from mf_user_info;
        
        select * from mf_user_info;
        ```
        
        The following result is returned:
        
        ```
        +------------+------+--------+------------+-----+
        | id         | name | gender | id_card_no | tel |
        +------------+------+--------+------------+-----+
        | 1          | bob  | male   | frgJZAEAQMeEuHqpS8lK9VxQhgPYpZ317V+oUla/xEc= | 13900001234|
        | 2          | allen| male   | frgJZAIAQMeEuHqpLeXQfETsFSLJxBwHhPx6tpzWUg4= | 13900001111|
        | 3          | kate | female | frgJZAMAQMeEuHqpdphXAU6iWelWenlDnVy+R0HMvAY= | 13900002222|
        | 4          | annie| female | frgJZAQAQMeEuHqpR5c8bj21dYCeM0C25bLRZIrP71c= | 13900003333|
        +------------+------+--------+------------+-----+
        ```
        
    -   Use the AAD algorithm to encrypt data.
        
        ```
        -- Encrypt data in the id_card_no column.
        insert overwrite table mf_user_info
        select id,
                     name,
                     gender,
               base64(sym_encrypt(id_card_no,
                      cast('b75585cf321cdcad42451690cdb7bfc4' as binary),
                      'AES-GCM-256',
                      'test'
                      ))as id_card_no,
              tel
        from mf_user_info;
        select * from mf_user_info;
        ```
        
        The following result is returned:
        
        ```
        +------------+------+--------+------------+-----+
        | id         | name | gender | id_card_no | tel |
        +------------+------+--------+------------+-----+
        | 1          | bob  | male   | frgJZAEAQMeEuHqpS8lK9VxQhgPYpZ317V+oUla/xEc= | 13900001234|
        | 2          | allen| male   | frgJZAIAQMeEuHqpLeXQfETsFSLJxBwHhPx6tpzWUg4= | 13900001111|
        | 3          | kate | female | frgJZAMAQMeEuHqpdphXAU6iWelWenlDnVy+R0HMvAY= | 13900002222|
        | 4          | annie| female | frgJZAQAQMeEuHqpR5c8bj21dYCeM0C25bLRZIrP71c= | 13900003333|
        +------------+------+--------+------------+-----+
        ```
        
    
-   Example 2: Encrypt data by using a key table.
    
    Construct a key table based on the [sample data](/help/en/maxcompute/user-guide/sym-encrypt#section-9hu-vrl-shc) to manage keys.
    
    -   Principle
        
        -   For data encryption, you can store keys in a MaxCompute table and perform the `JOIN` operation on the MaxCompute key table and the table whose column data you want to encrypt. This prevents keys from being leaked when the keys are passed.
            
        -   For data decryption, the project administrator does not grant the permission on the MaxCompute key table to users who want to use the key table. Instead, the project administrator creates a secure view and authorizes the users to access the key table and call the decryption function to decrypt data based on the view. Users can decrypt data only after they obtain the access permissions on the view. The plaintext of the key is not included in the view. This way, the key is not leaked.
            
    -   Precautions
        
        -   Customers are responsible for the creation and management of keys. MaxCompute does not store keys or mappings between keys and ciphertext. If a key is lost, the data cannot be decrypted.
            
        -   To ensure data security, special processing is required when you pass parameters that involve plaintext keys.
            
        -   If the data that you want to encrypt is of the BINARY type, you must run the `set odps.sql.type.system.odps2=true;` command to enable the MaxCompute V2.0 data type edition.
            
    
    Sample statements:
    
    ```
    -- Create a key table.
    create table mf_id_key(id bigint,key binary);
    -- Insert a key into the key table.
    insert overwrite table mf_id_key
      values (1,cast('b75585cf321cdcad42451690cdb7bfc4' as binary));
    -- Query the key.
    select * from mf_id_key;
    +------------+------+
    | id         | key  |
    +------------+------+
    | 1          | b75585cf321cdcad42451690cdb7bfc4 |
    +------------+------+
    
    -- Query data from the mf_user_info table.
    select * from mf_user_info;
    +------------+------+--------+------------+------------+
    | id         | name | gender | id_card_no |    tel     |
    +------------+------+--------+------------+------------+
    | 1          | bob  | male   | 0001       | 13900001234|
    | 2          | allen| male   | 0011       | 13900001111|
    | 3          | kate | female | 0111       | 13900002222|
    | 4          | annie| female | 1111       | 13900003333|
    +------------+------+--------+------------+------------+
    
    -- Encrypt data in the specified column of the mf_user_info table.
    insert overwrite table mf_user_info
    select /*+mapjoin(b)*/
          a.id,
          a.name,
          a.gender,
          base64(
            (sym_encrypt(a.id_card_no, b.key))
          ) as id_card_no,
          a.tel
     from mf_user_info as a join mf_id_key as b on a.id>=b.id;
    
    -- Query the encrypted data.
    select * from mf_user_info;
    ```
    
    The following result is returned:
    
    ```
    +------------+------+--------+------------+-----+
    | id         | name | gender | id_card_no | tel |
    +------------+------+--------+------------+-----+
    | 1          | bob  | male   | 9esKZAEAoBquXVJo3ZptvoI09XuM4bSFTqF1mXH1BO4= | 13900001234|
    | 2          | allen| male   | 9esKZAIAoBquXVJoJYqnXieAANih7FR59luePvdHB9U= | 13900001111|
    | 3          | kate | female | 9esKZAMAoBquXVJoppwxgVwPYBnvjIMklWLmJ/sU0Y8= | 13900002222|
    | 4          | annie| female | 9esKZAQAoBquXVJoB85RUFCLMbdyEBSz7LdS4M3Guvk= | 13900003333|
    +------------+------+--------+------------+-----+
    ```
    

## **NEW\_KEYSET**

-   Syntax
    
    ```
    binary NEW_KEYSET(string <key_type>, [string <description>])
    ```
    
-   Description
    
    Creates a keyset based on the specified algorithm type.
    
-   Parameters
    
    -   key\_type: required. This parameter specifies the algorithm type of the data key in the new keyset. Valid values: **AES-GCM-256**, **AES-SIV-CMAC-128**, and **AES-SIV-CMAC-256**.
        
    -   description: optional. This parameter provides a description of the data key in the new keyset.
        
-   Return value
    
    A keyset of the BINARY type is returned.
    
    **Note**
    
    You can use the [HEX](/help/en/maxcompute/user-guide/hex) function to convert the BINARY type into the STRING type or use the [UNHEX](/help/en/maxcompute/user-guide/unhex) function to convert the STRING type into the BINARY type based on your business requirements.
    
-   Examples
    
    ```
    select hex(NEW_KEYSET('AES-GCM-256', 'hello world'));
    ```
    
    The following result is returned:
    
    ```
    +------------+
    | _c0        |
    +------------+
    | 0A10577567735A514541554D42776E684C4212580A330A0B4145532D47434D2D323536122017F7A430B9D4B59B55454FD4B486216059F1B748CE0502D901EBEACEAB6569191801200210011A10577567735A514541554D42776E684C4220022A0B68656C6C6F20776F726C64 |
    +------------+
    ```
    

## **ADD\_KEY\_TO\_KEYSET**

-   Syntax
    
    ```
    binary ADD_KEY_TO_KEYSET(binary <keyset>, string <key_type>, binary <raw_key>, [string <description>])
    ```
    
-   Description
    
    Adds a key to a keyset and configures the key as the master key.
    
-   Parameters
    
    -   keyset: required. This parameter specifies an existing keyset of the **BINARY** type.
        
    -   key\_type: required. This parameter specifies the algorithm type of the key that you want to add. Valid values: **AES-GCM-256**, **AES-SIV-CMAC-128**, and **AES-SIV-CMAC-256**.
        
    -   raw\_key: required. This parameter specifies the key that you want to add and configure as the master key. The key is of the **BINARY** type.
        
    -   description: optional. This parameter provides a description of the data key.
        
-   Return value
    
    A keyset of the BINARY type is returned.
    
    **Note**
    
    You can use the [HEX](/help/en/maxcompute/user-guide/hex) function to convert the BINARY type into the STRING type or use the [UNHEX](/help/en/maxcompute/user-guide/unhex) function to convert the STRING type into the BINARY type based on your business requirements.
    
-   Examples
    
    ```
    select hex(ADD_KEY_TO_KEYSET(unhex ('0A1072384D715A414541385044643351534C12580A330A0B4145532D47434D2D323536122026A8FB1126DF4F5B5DD03C180E6919565D7716CBB291815EFB5BBF30F8BEF9AF1801200210011A1072384D715A414541385044643351534C20022A0B68656C6C6F20776F726C64'), 'AES-SIV-CMAC-128', unhex('b75585cf321cdcad42451690cdb7bfc49c26092f60f854e72d43244c55620a3d'),'description') );
    ```
    
    The following result is returned:
    
    ```
    +------------+
    | _c0        |
    +------------+
    | 0A10596530735A5145414150447273424C4212580A330A0B4145532D47434D2D323536122026A8FB1126DF4F5B5DD03C180E6919565D7716CBB291815EFB5BBF30F8BEF9AF1801200210011A1072384D715A414541385044643351534C20022A0B68656C6C6F20776F726C64125D0A380A104145532D5349562D434D41432D3132381220B75585CF321CDCAD42451690CDB7BFC49C26092F60F854E72D43244C55620A3D1801200110011A10596530735A5145414150447273424C4220022A0B6465736372697074696F6E |
    +------------+
    ```
    

## **KEYSET\_FROM\_JSON**

-   Syntax
    
    ```
    binary KEYSET_FROM_JSON(string <json_keyset>)
    ```
    
-   Description
    
    Converts a keyset of the JSON type into a keyset of the BINARY type.
    
-   Parameters
    
    json\_keyset: required. This parameter specifies a keyset of the JSON type.
    
-   Return value
    
    A keyset of the BINARY type is returned.
    
    **Note**
    
    You can use the [HEX](/help/en/maxcompute/user-guide/hex) function to convert the BINARY type into the STRING type or use the [UNHEX](/help/en/maxcompute/user-guide/unhex) function to convert the STRING type into the BINARY type based on your business requirements.
    
-   Examples
    
    ```
    select hex(KEYSET_FROM_JSON('{
        "key": [{
                "description": "hello world",
                "key_id": "r8MqZAEA8PDd3QSL",
                "key_meta_data": {
                    "key_material_origin": "Origin_ALIYUN_MAXCOMPUTE",
                    "key_material_type": "SYMMETRIC",
                    "type": "AES-GCM-256",
                    "value": "Jqj7ESbfT1td0DwYDmkZVl13FsuykYFe+1u/MPi++a8="},
                "output_prefix_type": "PREFIX_ALIYUN_MAXCOMPUTE",
                "status": "ENABLED"}],
        "primary_key_id": "r8MqZAEA8PDd3QSL"}')) ;
    ```
    
    The following result is returned:
    
    ```
    +------------+
    | _c0        |
    +------------+
    | 0A1072384D715A414541385044643351534C12580A330A0B4145532D47434D2D323536122026A8FB1126DF4F5B5DD03C180E6919565D7716CBB291815EFB5BBF30F8BEF9AF1801200210011A1072384D715A414541385044643351534C20022A0B68656C6C6F20776F726C64 |
    +------------+
    ```
    

## **KEYSET\_TO\_JSON**

-   Syntax
    
    ```
    string KEYSET_TO_JSON(binary <keyset>,)
    ```
    
-   Description
    
    Converts a keyset of the BINARY type into a readable JSON string. After the conversion, you can view the details of the keyset.
    
-   Parameters
    
    keyset: required. A value of the **BINARY** type. This parameter specifies an existing keyset.
    
-   Return value
    
    A keyset in the JSON format is returned. Parameter description:
    
    -   **key\_id**: the ID of the key.
        
    -   **key\_material\_origin**: the origin of the key.
        
    -   **key\_material\_type**: the encryption type of the key.
        
    -   **type**: the algorithm type of the key.
        
    -   **value**: the value of the key.
        
    -   **output\_prefix\_type**: the format of the ciphertext after the encryption.
        
-   Examples
    
    ```
    select KEYSET_TO_JSON(unhex ('0A1072384D715A414541385044643351534C12580A330A0B4145532D47434D2D323536122026A8FB1126DF4F5B5DD03C180E6919565D7716CBB291815EFB5BBF30F8BEF9AF1801200210011A1072384D715A414541385044643351534C20022A0B68656C6C6F20776F726C64')) ;
    ```
    
    The following result is returned:
    
    ```
     +------------+
    | _c0        |
    +------------+
    | {
        "key": [{
                "description": "hello world",
                "key_id": "r8MqZAEA8PDd3QSL",
                "key_meta_data": {
                    "key_material_origin": "Origin_ALIYUN_MAXCOMPUTE",
                    "key_material_type": "SYMMETRIC",
                    "type": "AES-GCM-256",
                    "value": "Jqj7ESbfT1td0DwYDmkZVl13FsuykYFe+1u/MPi++a8="},
                "output_prefix_type": "PREFIX_ALIYUN_MAXCOMPUTE",
                "status": "ENABLED"}],
        "primary_key_id": "r8MqZAEA8PDd3QSL"} |
    +------------+
    ```
    

## **ROTATE\_KEYSET**

-   Syntax
    
    ```
    binary ROTATE_KEYSET(binary <keyset>, string <key_type>, [string <description> ])
    ```
    
-   Description
    
    Allows the system to automatically produce a new key and configures the new key as the master key.
    
-   Parameters
    
    -   keyset: required. A value of the **BINARY** type. This parameter specifies the keyset that you want to update.
        
    -   key\_type: required. This parameter specifies the algorithm type of the new key. Valid values: **AES-GCM-256**, **AES-SIV-CMAC-128**, and **AES-SIV-CMAC-256**.
        
    -   description: optional. This parameter provides a description of the new data key.
        
-   Return value
    
    A keyset of the BINARY type is returned.
    
    **Note**
    
    You can use the [HEX](/help/en/maxcompute/user-guide/hex) function to convert the BINARY type into the STRING type or use the [UNHEX](/help/en/maxcompute/user-guide/unhex) function to convert the STRING type into the BINARY type based on your business requirements.
    
-   Examples
    
    ```
    select ROTATE_KEYSET(unhex ('0A1072384D715A414541385044643351534C12580A330A0B4145532D47434D2D323536122026A8FB1126DF4F5B5DD03C180E6919565D7716CBB291815EFB5BBF30F8BEF9AF1801200210011A1072384D715A414541385044643351534C20022A0B68656C6C6F20776F726C64'), 'AES-SIV-CMAC-256', 'hello world') ;
    ```
    
    The following result is returned:
    
    ```
    +------------+
    | _c0        |
    +------------+
    | =0A=10BVIuZQEAcHHPLfn1=12X=0A3=0A=0BAES-GCM-256=12=20&=A8=FB=11&=DFO[]=D0<=18=0Ei=19V]w=16=CB=B2=91=81^=FB[=BF0=F8=BE=F9=AF=18=01=20=02=10=01=1A=10r8MqZAEA8PDd3QSL=20=02*=0Bhello=20world=12}=0AX=0A=10AES-SIV-CMAC-256=12@=9D=AD=B7=D6=AF=01=B2=9D=CE=C3=02y=A9=DB=E1=17q>'F=DC=F5=EF=FFI=7F=F0w)=95F=07>=9C=EDqn=DF=0E=1E=16bP&=D3=7F>gV=CBl=8AGJCm=93=FF=F9=96=AD=1A=C0=BC=18=01=20=02=10=01=1A=10BVIuZQEAcHHPLfn1=20=02*=0Bhello=20world |
    +-----------
    ```
    

## **NEW\_WRAPPED\_KEYSET**

-   Syntax
    
    ```
    binary NEW_WRAPPED_KEYSET(string <kms_cmk_arn> , string <role-arn>, string <key_type>
    [, string <description>, [string <role_chain>]])
    ```
    
-   Description
    
    You can use MaxCompute with KMS to manage keys. You can generate a wrapped keyset by encrypting a keyset based on a KMS key. After you generate a wrapped keyset, you must manually record and store the wrapped keyset for subsequent data encryption and decryption based on KMS keys. In the encryption or decryption process, all keys are automatically generated by the system. You cannot view the original key that is used for encryption and decryption. This way, data can be encrypted or decrypted in a more secure manner. The `NEW_WRAPPED_KEYSET` function assumes the Alibaba Cloud Resource Name (ARN) of a role that can use KMS customer master key (CMK) ARNs to MaxCompute and create a wrapped keyset. The role ARN is specified by role\_arn. The KMS CMK ARN is specified by kms\_cmk\_arn. The function is also used to grant other Alibaba Cloud accounts the permissions to use wrapped keysets based on role\_chain.
    
    Before you use the `NEW_WRAPPED_KEYSET` function, make sure that the following prerequisites are met:
    
    -   KMS is activated and a KMS instance is created.
        
    -   A KMS key is created and the key ARN specified by **kms\_cmk\_arn** is obtained.
        
    -   A RAM role is created and MaxCompute is authorized to access KMS. The ARN of the RAM role is obtained. The role ARN is specified by **role\_arn**.
        
    
-   Parameters
    
    -   **kms\_cmk\_arn**: required. This parameter specifies the ARN of the KMS CMK that is used to encrypt a keyset. The parameter value is in the format of `'acs:kms:<RegionId>:<UserId>:key/<CmkId>'`. RegionId specifies the region ID, UserId specifies the user ID, and CmkId specifies the CMK ID. You can obtain the ARN from the Key Details page in the [KMS console](https://yundun.console.aliyun.com/?spm=a2c4g.11186623.0.0.436c1b83oLTaEl&p=kms#/key/list/masterKey).
        
    -   **role\_arn**: required. This parameter specifies the ARN of the RAM role that has permissions on KMS. The role needs to be assumed by MaxCompute. The parameter value is in the format of `'acs:ram:${<userAID>}:role/${<roleName>}'`. userAID specifies the user ID, and roleName specifies the role name.
        
    -   **key\_type**: required. This parameter specifies the algorithm type of the key in the newly generated keyset. Valid values: **AES-GCM-256**, **AES-SIV-CMAC-128**, and **AES-SIV-CMAC-256**.
        
    -   **description**: optional. This parameter provides a description of the key.
        
    -   **role\_chain**: optional. This parameter specifies the role chain for user authorization. The parameter value is in the format of `'acs:ram:<userAID>:role/<roleName2>,acs:ram:<userBID>:role/<roleName3>},...'`. You can use role chains to call wrapped keysets across Alibaba Cloud accounts.
        
    
-   Return value
    
    A wrapped keyset of the BINARY type is returned. You can use the HEX function to convert the wrapped keyset of the BINARY type into a keyset of the STRING type based on your business requirements. For more information about the HEX function, see [HEX](/help/en/maxcompute/user-guide/hex).
    
-   Examples
    
    -   Create a wrapped keyset.
        
        ```
        select hex(NEW_WRAPPED_KEYSET('acs:kms:cn-hangzhou:1**************7:key/key-hzz****************1t','acs:ram::1**************7:role/kms', 'AES-GCM-256', 'hello'));
        ```
        
        The following result is returned:
        
        ```
        +-----+
        | _c0 |
        +-----+
        | 613256354C576836656A59314D6D59344E7A6B7A624452754D6D3434627A49786443317A655859786358426F4E6A4D78434A373434582F54756C5A547A4E69337562786F4B3543412F616655573262786D345A41306B464C674A2F5758324F4E514E346746306F303236376D35335A6471797237366E57565A6836387A52687A4A673945784B6E677568794A376E6F4A68573677684B5A555A42786E4A383742536C4D46326A374F71474F4C414A6B665779694557394D58664876576E306C6D49777052746A77325643707A4259517277327944354343396C50586F31346A4351506253612F3044394C4C6E6E622F747A6B57316E4F564A6C5359354B35526130537565584F33507856773D |
        +-----+
        ```
        
    -   Create a wrapped keyset and allow other roles to call the wrapped keyset.
        
        ```
        select hex(NEW_WRAPPED_KEYSET('acs:kms:cn-hangzhou:1**************7:key/key-hzz****************1t','acs:ram::1**************7:role/kms', 'AES-GCM-256', 'hello','acs:ram::1**************7:role/kms1'));
        ```
        
        The following result is returned:
        
        ```
        +-----+
        | _c0 |
        +-----+
        | 613256354C576836656A59314D6D59344E7A6B7A624452754D6D3434627A49786443317A655859786358426F4E6A4D784D59716D4C767954716B3562444779574C7A387965774966432F516B4A59616F57623648364A546A62434F7A7A42634F517A687A6E526F36543866714E4E63555546566874696C4A3947713556667A2F7851757A55686467504C517A2B6C433337485A535449744B53714E396B6639587666487A4D7957643842334D3179392F67423774726835437A556F786A74614571612F5A3543447668524A7731426566525647796A77574974476243475A4E594550714E767963532B333432743347396B714777626C54336F57706939706E437A667A4E4D6F4C63714F453D |
        +-----+
        ```
        
    

## **REWRAP\_KEYSET**

-   Syntax
    
    ```
    binary REWRAP_KEYSET(string <kms_cmk_arn> , string <role-arn>, string <wrapped_keyset>, [string <role_chain>])
    ```
    
-   Description
    
    You can use MaxCompute with KMS to manage keys. You can generate a wrapped keyset by encrypting a keyset based on a KMS key. The `REWRAP_KEYSET` function uses a new KMS key to re-encrypt a wrapped keyset that is generated by using the `NEW_WRAPPED_KEYSET` function.
    
    Before you use the `REWRAP_KEYSET` function, make sure that the following prerequisites are met:
    
    -   A wrapped keyset is generated by using the `NEW_WRAPPED_KEYSET` function. For more information, see [NEW\_WRAPPED\_KEYSET](/help/en/maxcompute/user-guide/new-wrapped-keyset).
        
    -   A KMS key is created and the key ARN specified by **kms\_cmk\_arn** is obtained. A RAM role is granted permissions to use the new key.
        
    
-   Parameters
    
    -   **kms\_cmk\_arn**: required. This parameter specifies the ARN of the KMS customer master key (CMK) that you want to use to re-encrypt a wrapped keyset. The parameter value is in the format of `'acs:kms:<RegionId>:<UserId>:key/<CmkId>'`. RegionId specifies the region ID, UserId specifies the user ID, and CmkId specifies the CMK ID. You can obtain the ARN from the Key Details page in the [KMS console](https://yundun.console.aliyun.com/?spm=a2c4g.11186623.0.0.436c1b83oLTaEl&p=kms#/key/list/masterKey).
        
    -   **role\_arn**: required. This parameter specifies the ARN of the RAM role that has permissions on both the old and new KMS keys. The RAM role must be assumed by MaxCompute. The parameter value is in the format of `'acs:ram:${<userAID>}:role/${<roleName>}'`. userAID specifies the user ID, and roleName specifies the role name.
        
    -   **wrapped\_keyset**: required. This parameter specifies the wrapped keyset that you want to re-encrypt.
        
    -   **role\_chain**: optional. This parameter specifies the role chain for user authorization. The parameter value is in the format of `'acs:ram:<userAID>:role/<roleName2>,acs:ram:<userBID>:role/<roleName3>},...'`. You can use role chains to call wrapped keysets across Alibaba Cloud accounts.
        
    
-   Return value
    
    A wrapped keyset of the BINARY type is returned. You can use the HEX function to convert the wrapped keyset of the BINARY type into a keyset of the STRING type based on your business requirements. For more information about the HEX function, see [HEX](/help/en/maxcompute/user-guide/hex).
    
-   Examples
    
    **Note**
    
    The following sample code contains variables. You must run the code in script mode or replace variables with actual values in SQL statements.
    
    -   Re-encrypt a wrapped keyset.
        
        ```
        @origin_key := unhex('<wrapped_keyset>'); 
        select hex(REWRAP_KEYSET('acs:kms:cn-hangzhou:1**************7:key/key-hzz******************', 'acs:ram::1**************7:role/kms', @origin_key));
        ```
        
    -   Re-encrypt a wrapped keyset and allow other Alibaba Cloud accounts to call the wrapped keyset.
        
        ```
        @origin_key := unhex('<wrapped_keyset>');
        @role_chain := 'acs:ram:${<UserAId>}:role/${<roleName2>},acs:ram:${<UserBId>}:role/${<roleName3>}';
        select hex(REWRAP_KEYSET('acs:kms:cn-hangzhou:1**************7:key/key-hzz******************', 'acs:ram:${<UserId>}:role/${<roleName>}', @origin_key, @role_chain));
        ```
        
    

## **ROTATE\_WRAPPED\_KEYSET**

-   Syntax
    
    ```
    binary ROTATE_WRAPPED_KEYSET(string <kms_cmk_arn> , string <role-arn>, string <wrapped_keyset>,string <key_type> [,string description,[string <role_chain>]])
    ```
    
-   Description
    
    You can use MaxCompute with KMS to manage keys. You can generate a wrapped keyset by encrypting a keyset based on a KMS key. The `ROTATE_WRAPPED_KEYSET` function uses a new KMS key and a new key algorithm to re-encrypt a wrapped keyset that is generated by using the `NEW_WRAPPED_KEYSET` function. Compared with the `REWRAP_KEYSET` function, the `ROTATE_WRAPPED_KEYSET` function can use a new key algorithm for re-encryption.
    
    Before you use the `ROTATE_WRAPPED_KEYSET` function, make sure that the following prerequisites are met:
    
    -   A wrapped keyset is generated by using the `NEW_WRAPPED_KEYSET` function. For more information, see [NEW\_WRAPPED\_KEYSET](/help/en/maxcompute/user-guide/new-wrapped-keyset).
        
    -   A KMS key is created and the key ARN specified by **kms\_cmk\_arn** is obtained. A RAM role is granted permissions to use the new key.
        
    
-   Parameters
    
    -   **kms\_cmk\_arn**: required. This parameter specifies the ARN of the KMS customer master key (CMK) that you want to use to re-encrypt a wrapped keyset. The parameter value is in the format of `'acs:kms:<RegionId>:<UserId>:key/<CmkId>'`. RegionId specifies the region ID, UserId specifies the user ID, and CmkId specifies the CMK ID. You can obtain the ARN from the Key Details page in the [KMS console](https://yundun.console.aliyun.com/?spm=a2c4g.11186623.0.0.436c1b83oLTaEl&p=kms#/key/list/masterKey).
        
    -   **role\_arn**: required. This parameter specifies the ARN of the RAM role that has permissions on both the old and new KMS keys. The parameter value is in the format of `'acs:ram:${<userAID>}:role/${<roleName>}'`. userAID specifies the user ID, and roleName specifies the role name.
        
    -   **wrapped\_keyset**: required. This parameter specifies the wrapped keyset that you want to re-encrypt.
        
    -   **key\_type**: required. This parameter specifies the algorithm type of the key in the newly generated keyset. Valid values: **AES-GCM-256**, **AES-SIV-CMAC-128**, and **AES-SIV-CMAC-256**.
        
    -   **description**: optional. This parameter provides a description of the key.
        
    -   **role\_chain**: optional. This parameter specifies the role chain for user authorization. The parameter value is in the format of `'acs:ram:<userAID>:role/<roleName2>,acs:ram:<userBID>:role/<roleName3>},...'`. You can use role chains to call wrapped keysets across Alibaba Cloud accounts.
        
    
-   Return value
    
    A wrapped keyset of the BINARY type is returned. You can use the HEX function to convert the wrapped keyset of the BINARY type into a keyset of the STRING type based on your business requirements. For more information about the HEX function, see [HEX](/help/en/maxcompute/user-guide/hex).
    
-   Examples
    
    **Note**
    
    The following sample code contains variables. You must run the code in script mode or replace variables with actual values in SQL statements.
    
    -   Re-encrypt a wrapped keyset.
        
        ```
        @kms_resource_keyId := 'acs:kms:${<RegionId>}:${<UserId>}:key/${<CmkId>}';
        @role_arn := 'acs:ram:${<UserId>}:role/${<roleName>}';
        @origin_key := unhex('<wrapped_keyset>');
        select hex(ROTATE_WRAPPED_KEYSET(@kms_resource_keyId, @role_arn, @origin_key, 'AES-GCM-256', 'hello world'));
        ```
        
    -   Re-encrypt a wrapped keyset, and allow other roles to call the wrapped keyset.
        
        ```
        @kms_resource_keyId := 'acs:kms:${<RegionId>}:${<UserId>}:key/${<CmkId>}';
        @role_arn := 'acs:ram:${<UserId>}:role/${<roleName>}';
        @origin_key := unhex('<wrapped_keyset>');
        @role_chain := 'acs:ram:${<UserAId>}:role/${<roleName2>},acs:ram:${<UserBId>}:role/${<roleName3>}';
        select hex(ROTATE_WRAPPED_KEYSET(@kms_resource_keyId, @role_arn, @origin_key, 'AES-GCM-256', 'hello world', @role_chain));
        ```
        
    

## USE\_WRAPPED\_KEYSET

-   Syntax
    
    ```
    binary USE_WRAPPED_KEYSET(string <kms_cmk_arn> , string <role-arn>, string <wrapped_keyset> [,string <role_chain>])
    ```
    
-   Description
    
    You can use MaxCompute with KMS to manage keys. You can generate a wrapped keyset by encrypting an existing keyset based on a KMS key. The `USE_WRAPPED_KEYSET` function converts a wrapped keyset generated by using the `NEW_WRAPPED_KEYSET` function into a basic keyset. The basic keyset is used as a parameter in the encryption or decryption function to encrypt or decrypt data. You can also use the USE\_WRAPPED\_KEYSET function to obtain the information about a wrapped keyset and save the information for subsequent maintenance.
    
    Before you use the `USE_WRAPPED_KEYSET` function, make sure that the following prerequisites are met:
    
    -   A wrapped keyset is generated by using the `NEW_WRAPPED_KEYSET` function. For more information, see [NEW\_WRAPPED\_KEYSET](/help/en/maxcompute/user-guide/new-wrapped-keyset).
        
    -   A KMS key is created and the Alibaba Cloud Resource Name (ARN) of the key is obtained. The key ARN is specified by **kms\_cmk\_arn**. A RAM role is granted permissions to use the new key.
        
    
-   Parameters
    
    -   **kms\_cmk\_arn**: required. This parameter specifies the KMS customer master key (CMK) ARN of the keyset that you want to encrypt. The parameter value is in the format of `'acs:kms:<RegionId>:<UserId>:key/<CmkId>'`. RegionId specifies the region ID, UserId specifies the user ID, and CmkId specifies the CMK ID. You can obtain the ARN from the Key Details page in the [KMS console](https://yundun.console.aliyun.com/?spm=a2c4g.11186623.0.0.436c1b83oLTaEl&p=kms#/key/list/masterKey).
        
    -   **role\_arn**: required. This parameter specifies the ARN of the RAM role that has permissions on KMS. The role needs to be assumed by MaxCompute. The parameter value is in the format of `'acs:ram:${<userAID>}:role/${<roleName>}'`. userAID specifies the user ID, and roleName specifies the role name.
        
    -   **wrapped\_keyset**: required. This parameter specifies an existing wrapped keyset.
        
    -   **role\_chain**: optional. This parameter specifies the role chain for user authorization. The parameter value is in the format of `'acs:ram:<userAID>:role/<roleName2>,acs:ram:<userBID>:role/<roleName3>},...'`. You can use role chains to call wrapped keysets across Alibaba Cloud accounts.
        
    
-   Return value
    
    A desensitized keyset of the STRUCT type is returned. You can use the `get_json_object` function to obtain keyset-related fields based on your business requirements.
    
-   Examples
    
    **Note**
    
    The following sample code contains variables. You must run the code in script mode or replace variables with actual values in SQL statements.
    
    Obtain the key algorithm information of a wrapped keyset.
    
    ```
    @kms_resource_keyId := 'acs:kms:${<RegionId>}:${<UserId>}:key/${<CmkId>}';
    @role_arn := 'acs:ram:${<UserId>}:role/${<roleName>}';
    @origin_key := unhex('<wrapped_keyset>');
    @role_chain := 'acs:ram:${<UserAId>}:role/${<roleName2>},acs:ram:${<UserBId>}:role/${<roleName3>}';
    @use_keyset_new := USE_WRAPPED_KEYSET(@kms_resource_keyId, @role_arn, @origin_key, @role_chain);
    
    select get_json_object(get_json_object(use_keyset_new.wrapped_keyset_info,'$.masked_keyset'), '$.key[0].key_meta_data.type');
    ```
    
    The following result is returned:
    
    ```
    +-----+
    | _c0 |
    +-----+
    | AES-GCM-256 |
    +-----+
    ```
    

## ENHANCED\_SYM\_ENCRYPT

-   Syntax
    
    ```
    binary ENHANCED_SYM_ENCRYPT(binary <keyset> , string|binary <plaintext> [,string <additional_data>])
    ```
    
-   Description
    
    MaxCompute allows you to use the `ENHANCED_SYM_ENCRYPT` function to encrypt data by using a specified basic keyset or wrapped keyset. You can create a wrapped keyset by encrypting an existing keyset based on a Key Management Service (KMS) key. Compared with basic keysets, you can use wrapped keysets with KMS to manage keys in a more secure manner.
    
    Before you use the `ENHANCED_SYM_ENCRYPT` function, make sure that the following prerequisites are met:
    
    -   A basic keyset or wrapped keyset is generated by using the `NEW_KEYSET` or `NEW_WRAPPED_KEYSET` function. For more information, see [NEW\_KEYSET](/help/en/maxcompute/user-guide/new-keyset) or [NEW\_WRAPPED\_KEYSET](/help/en/maxcompute/user-guide/new-wrapped-keyset)
        
    -   A basic keyset is obtained from a wrapped keyset by using the `USE_WRAPPED_KEYSET` function. This prerequisite must be met if you want to use a wrapped keyset to encrypt data. The basic keyset is used as a parameter in the `ENHANCED_SYM_ENCRYPT` function to encrypt data. In addition, your account is assigned the role that has permissions to use the wrapped keyset.
        
    
-   Parameters
    
    -   **keyset**: required. This parameter specifies a basic keyset of the BINARY type or a wrapped keyset of the STRUCT type.
        
    -   **plaintext**: required. This parameter specifies the plaintext of the STRING or BINARY type that you want to encrypt.
        
    -   **additional\_data**: optional. This parameter specifies the verification information supported by the algorithm. The verification information is of the STRING type.
        
    
-   Return value
    
    Ciphertext of the BINARY type is returned.
    
-   Sample data
    
    ```
    -- Create a table.
    create table mf_user_info(id bigint,
                              name string,
                              gender string,
                              id_card_no string,
                              tel string);
    -- Insert data into the table.
    insert overwrite table mf_user_info values(1,"bob","male","0001","13900001234"),
                                           (2,"allen","male","0011","13900001111"),
                                         (3,"kate","female","0111","13900002222"),
                                         (4,"annie","female","1111","13900003333");
    -- Query data from the table.
    select * from mf_user_info;
    +------------+------+--------+------------+------------+
    | id         | name | gender | id_card_no |    tel     |
    +------------+------+--------+------------+------------+
    | 1          | bob  | male   | 0001       | 13900001234|
    | 2          | allen| male   | 0011       | 13900001111|
    | 3          | kate | female | 0111       | 13900002222|
    | 4          | annie| female | 1111       | 13900003333|
    +------------+------+--------+------------+------------+
    ```
    
-   Examples
    
    -   Encrypt the `id_card_no` column in the `mf_user_info` table by using a basic keyset.
        
        ```
        insert overwrite table mf_user_info
        select id,
            name,
            gender,
               base64(ENHANCED_SYM_ENCRYPT(unhex ('0A1072384D715A414541385044643351534C12580A330A0B4145532D47434D2D323536122026A8FB1126DF4F5B5DD03C180E6919565D7716CBB291815EFB5BBF30F8BEF9AF1801200210011A1072384D715A414541385044643351534C20022A0B68656C6C6F20776F726C64'), id_card_no ))as id_card_no,
              tel
        from mf_user_info;
        ```
        
        The following sample statement queries the encryption result:
        
        ```
        select * from mf_user_info;
        
        -- The following result is returned:
        +------------+------+--------+------------+-----+
        | id         | name | gender | id_card_no | tel |
        +------------+------+--------+------------+-----+
        | 1          | bob  | male   | nLcdDFdjO2T4aATtirvDMVeBD8oSuu4BfM3t+Y8ny0kwQjJlAQAwkVhYOocPQll8LmdzSwkRf3v2iTow+TAmnQ== | 13900001234 |
        | 2          | allen | male   | nLcdDFdjO2T4aATtirvDMVeBD8oSuu4BfM3t+Y8ny0kwQjJlAQBgj1hYOodIPdnyZ0ijZ9RmT+50xbxXh5cwcg== | 13900001111 |
        | 3          | kate | female | nLcdDFdjO2T4aATtirvDMVeBD8oSuu4BfM3t+Y8ny0kwQjJlAQCwp1hYOoentQgkfUqctPbmX96k9eD018xg9Q== | 13900002222 |
        | 4          | annie | female | nLcdDFdjO2T4aATtirvDMVeBD8oSuu4BfM3t+Y8ny0kwQjJlAQDQqFhYOodexhRmfh6VieEwePZscC4nUVTJXQ== | 13900003333 |
        +------------+------+--------+------------+-----+
        ```
        
    -   Encrypt the `tel` column in the `mf_user_info` table by using a wrapped keyset.
        
        1.  Generate a wrapped keyset and write it to a table.
            
            ```
            -- Create a table.
            create table mf_keyset_kms (id string,ks binary);
            -- Create a wrapped keyset and write it to the table.
            insert into mf_keyset_kms 
                  select '1',
                         NEW_WRAPPED_KEYSET(
                            'acs:kms:cn-hangzhou:1**************7:key/key-hzz****************1t', 
                            'acs:ram::1**************7:role/kms', 
                            'AES-GCM-256', 
                           'description');
            -- Query data from the table.
            select id,hex(ks) from mf_keyset_kms;
            
            -- The following result is returned:
            +----+-----+
            | id | _c1 |
            +----+-----+
            | 1  | 613256354C576836656A59314D6D59344E7A6B7A624452754D6D3434627A49786443317A655859786358426F4E6A4D78447654524C4632635077766E74554654584579715242583953724167446D2F397131786F57456E6F5474516739633853766242674456773565736674714A4D5435524455382F6F6A2B4E61766D774344494C734B6A416B6B675A42496F5568656F566D38564C4F30506D4778767137646956517453447A5467395147775639533161305A464A6D6A45562B6742722F56386653444D6E424D2B71493779784668303866594E6D336578775744423949726B645A3469784F2B532B476E6750523854524A58326E5768666478347034473468687248684A514D615071332F526C342B67427652773D3D |
            +----+-----+
            ```
            
        2.  Encrypt the `tel` column by using the wrapped keyset.
            
            ```
            select /*+ MAPJOIN(a) */ 
                   id,
                   name,
            	   gender,
            	   id_card_no, 
                   ENHANCED_SYM_ENCRYPT(
                       USE_WRAPPED_KEYSET('acs:kms:cn-hangzhou:1**************7:key/key-hzz****************1t', 
                                          'acs:ram::1**************7:role/kms', 
                                          unhex('613256354C576836656A59314D6D59344E7A6B7A624452754D6D3434627A49786443317A655859786358426F4E6A4D78447654524C4632635077766E74554654584579715242583953724167446D2F397131786F57456E6F5474516739633853766242674456773565736674714A4D5435524455382F6F6A2B4E61766D774344494C734B6A416B6B675A42496F5568656F566D38564C4F30506D4778767137646956517453447A5467395147775639533161305A464A6D6A45562B6742722F56386653444D6E424D2B71493779784668303866594E6D336578775744423949726B645A3469784F2B532B476E6750523854524A58326E5768666478347034473468687248684A514D615071332F526C342B67427652773D3D')
                                         ),
                       tel
                   ) as tel 
             FROM mf_user_info;
            ```
            
            The following result is returned:
            
            ```
            +------------+------+--------+------------+------+
            | id         | name | gender | id_card_no | tel  |
            +------------+------+--------+------------+------+
            | 1          | bob  | male   | 0001       | =F1=EEa=13V9=CCsB=90=E7=F3fl=D2=CB=F31=D8=3D=88=B7=F7=0CnG=E3\R=FC)=F2=10=3D2e=01=00=90=86=05=94z;=18=A6j=1CN=E5=9F=AC)=8D=D6=D8=0D=A2Y{kq=EE=F4~=C4=A7=9BS=A1w |
            | 2          | allen | male   | 0011       | =F1=EEa=13V9=CCsB=90=E7=F3fl=D2=CB=F31=D8=3D=88=B7=F7=0CnG=E3\R=FC)=F2=10=3D2e=01=00=20=AA=05=94z;=85=D8=08a=A2]=02d=20=B1=C3=AE=AF=1C{=EB=EA=C4=81=B5A=15=1BR=F7g=9B |
            | 3          | kate | female | 0111       | =F1=EEa=13V9=CCsB=90=E7=F3fl=D2=CB=F31=D8=3D=88=B7=F7=0CnG=E3\R=FC)=F2=10=3D2e=01=00=20=B6=05=94z;[C=12=81=8B<=C1=9D=E2=CF=CE=BC=AE=A7=84=0F[=7CI=B9=B7=9D=DD=89=A8=FD! |
            | 4          | annie | female | 1111       | =F1=EEa=13V9=CCsB=90=E7=F3fl=D2=CB=F31=D8=3D=88=B7=F7=0CnG=E3\R=FC)=F2=10=3D2e=01=00=00=A2=05=94z;E=03A=BC=7C=88=CFJ=14=B9=BD=A1=BF=ED=20=11=A3=A6/+%=0Fe=DD=C7=C8=0A |
            +------------+------+--------+------------+------+
            ```
            
        
    

## ENHANCED\_SYM\_DECRYPT

-   Syntax
    
    ```
    binary ENHANCED_SYM_DECRYPT(binary <keyset> , binary <ciphertext> [,string <additional_data>])
    ```
    
-   Description
    
    MaxCompute allows you to use the `ENHANCED_SYM_DECRYPT` function to decrypt data by using a specified basic keyset or wrapped keyset. The basic keyset or wrapped keyset used for data decryption must be the same as that used for data encryption. You can create a wrapped keyset by encrypting an existing keyset based on a Key Management Service (KMS) key. Compared with basic keysets, you can use wrapped keysets with KMS to manage keys in a more secure manner.
    
    Before you use the `ENHANCED_SYM_DECRYPT` function, make sure that the following prerequisites are met:
    
    -   A basic keyset or wrapped keyset is generated by using the `NEW_KEYSET` or `NEW_WRAPPED_KEYSET` function. For more information, see [NEW\_KEYSET](/help/en/maxcompute/user-guide/new-keyset) or [NEW\_WRAPPED\_KEYSET](/help/en/maxcompute/user-guide/new-wrapped-keyset).
        
    -   Your account is assigned a role that has the permissions to use the wrapped keyset. This prerequisite must be met if you want to decrypt data by using a wrapped keyset.
        
    
-   Parameters
    
    -   **keyset**: required. This parameter specifies a basic keyset of the BINARY type or a wrapped keyset of the STRUCT type.
        
        **Important**
        
        The basic keyset or wrapped keyset used for data decryption must be the same as that used for data encryption.
        
    -   **ciphertext**: required. This parameter specifies the ciphertext of the BINARY type that is encrypted by using the specified keyset.
        
    -   **additional\_data**: optional. This parameter specifies the verification information supported by the algorithm. The verification information is of the STRING type.
        
    
-   Return value
    
    Plaintext of the BINARY type is returned.
    
-   Sample data
    
    ```
    -- Create a table.
    create table mf_user_info(id bigint,
                              name string,
                              gender string,
                              id_card_no string,
                              tel string);
    -- Insert data into the table.
    insert overwrite table mf_user_info values(1,"bob","male","0001","13900001234"),
                                           (2,"allen","male","0011","13900001111"),
                                         (3,"kate","female","0111","13900002222"),
                                         (4,"annie","female","1111","13900003333");
    -- Query data from the table.
    select * from mf_user_info;
    +------------+------+--------+------------+------------+
    | id         | name | gender | id_card_no |    tel     |
    +------------+------+--------+------------+------------+
    | 1          | bob  | male   | 0001       | 13900001234|
    | 2          | allen| male   | 0011       | 13900001111|
    | 3          | kate | female | 0111       | 13900002222|
    | 4          | annie| female | 1111       | 13900003333|
    +------------+------+--------+------------+------------+
    ```
    
-   Examples
    
    -   Decrypt the encrypted `id_card_no` column in the `mf_user_info` table by using a basic keyset.
        
        **Important**
        
        Before you decrypt data, you must make sure that the data has been encrypted, and the basic keyset or wrapped keyset used for data decryption is the same as that used for data encryption. For more information about encryption operation examples, see [ENHANCED\_SYM\_ENCRYPT](/help/en/maxcompute/user-guide/enhanced-sym-encrypt).
        
        ```
        insert overwrite table mf_user_info 
        select id,
            name,
            gender,
               ENHANCED_SYM_DECRYPT(unhex ('0A1072384D715A414541385044643351534C12580A330A0B4145532D47434D2D323536122026A8FB1126DF4F5B5DD03C180E6919565D7716CBB291815EFB5BBF30F8BEF9AF1801200210011A1072384D715A414541385044643351534C20022A0B68656C6C6F20776F726C64'), unbase64(id_card_no) )as id_card_no,
              tel
        from mf_user_info;
        ```
        
        The following sample statement queries the decryption result:
        
        ```
        select * from mf_user_info;
        
        -- The following result is returned:
        +------------+------+--------+------------+------------+
        | id         | name | gender | id_card_no |    tel     |
        +------------+------+--------+------------+------------+
        | 1          | bob  | male   | 0001       | 13900001234|
        | 2          | allen| male   | 0011       | 13900001111|
        | 3          | kate | female | 0111       | 13900002222|
        | 4          | annie| female | 1111       | 13900003333|
        +------------+------+--------+------------+------------+
        ```
        
    -   Decrypt the encrypted `tel` column in the `mf_user_info` table by using a wrapped keyset.
        
        ```
         select /*+ MAPJOIN(a) */ 
               id,
               name,
        	   gender,
        	   id_card_no, 
               ENHANCED_SYM_DECRYPT (
                 USE_WRAPPED_KEYSET('acs:kms:cn-hangzhou:1**************7:key/key-hzz****************1t', 
                                      'acs:ram::1**************7:role/kms', 
                                      unhex('613256354C576836656A59314D6D59344E7A6B7A624452754D6D3434627A49786443317A655859786358426F4E6A4D78447654524C4632635077766E74554654584579715242583953724167446D2F397131786F57456E6F5474516739633853766242674456773565736674714A4D5435524455382F6F6A2B4E61766D774344494C734B6A416B6B675A42496F5568656F566D38564C4F30506D4778767137646956517453447A5467395147775639533161305A464A6D6A45562B6742722F56386653444D6E424D2B71493779784668303866594E6D336578775744423949726B645A3469784F2B532B476E6750523854524A58326E5768666478347034473468687248684A514D615071332F526C342B67427652773D3D')
                                     ),
               	 ENHANCED_SYM_ENCRYPT(
                   USE_WRAPPED_KEYSET('acs:kms:cn-hangzhou:1**************7:key/key-hzz****************1t', 
                                      'acs:ram::1**************7:role/kms', 
                                      unhex('613256354C576836656A59314D6D59344E7A6B7A624452754D6D3434627A49786443317A655859786358426F4E6A4D78447654524C4632635077766E74554654584579715242583953724167446D2F397131786F57456E6F5474516739633853766242674456773565736674714A4D5435524455382F6F6A2B4E61766D774344494C734B6A416B6B675A42496F5568656F566D38564C4F30506D4778767137646956517453447A5467395147775639533161305A464A6D6A45562B6742722F56386653444D6E424D2B71493779784668303866594E6D336578775744423949726B645A3469784F2B532B476E6750523854524A58326E5768666478347034473468687248684A514D615071332F526C342B67427652773D3D')
                                     ),
                   tel
               ),
               ''
              )
               as tel 
         FROM mf_user_info;
        ```
        
        The following result is returned:
        
        ```
        +------------+------+--------+------------+------+
        | id         | name | gender | id_card_no | tel  |
        +------------+------+--------+------------+------+
        | 1          | bob  | male   | 0001       | 13900001234 |
        | 2          | allen | male   | 0011       | 13900001111 |
        | 3          | kate | female | 0111       | 13900002222 |
        | 4          | annie | female | 1111       | 13900003333 |
        +------------+------+--------+------------+------+
        ```
        
    

## **References**

-   [Data encryption](/help/en/maxcompute/security-and-compliance/storage-encryption)
    
-   [Dynamic data masking](/help/en/maxcompute/security-and-compliance/dynamic-data-masking)
