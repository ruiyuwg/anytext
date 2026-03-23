The Alibaba Cloud remote attestation service is an integrated attestation solution that verifies the trustworthiness of platforms and the integrity of the binaries that run on the platforms. The service can be used to attest Trusted Platform Module (TPM) environments and trusted execution environments (TEEs). This topic describes how the remote attestation service works and how to use the service.

## **How the remote attestation service works**

The Alibaba Cloud remote attestation service is built on top of [RFC 9334 - Remote ATtestation procedureS (RATS) Architecture](https://www.rfc-editor.org/rfc/rfc9334.html) and can be used to verify the security status and trustworthiness of security-enhanced Elastic Compute Service (ECS) instances. The service involves the following parties:

-   Attester: The user of an ECS instance, who needs to prove the identity security and trustworthiness of the ECS instance.
    
-   Relying party: An entity that verifies the identity and trustworthiness of the attester. The replying party generates an appraisal policy based on metrics from TPM and TEE.
    
-   Verifier: The Alibaba Cloud remote attestation service, which compares the evidence against the appraisal policy and provides the attestation results.
    

The remote attestation service is typically used based on the [Passport Model](https://www.rfc-editor.org/rfc/rfc9334.html#name-passport-model) and the [Background-Check Model](https://www.rfc-editor.org/rfc/rfc9334.html#name-background-check-model). The models have the following differences:

-   The Passport Model provides better scalability when the number of Attesters is significantly smaller than the number of relying parties.
    
-   In the Background-Check model, the relying party can contact the verifier (Alibaba Cloud remote attestation service) for remote attestation at any time, which provides better security.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3007403771/CAEQOhiBgMDw58SGshkiIGI1N2U1YjlkMDYyZDRkNmM5MWY1MmY3Y2UwNjI2NDc44095194_20231205173529.386.svg)

## **Billing**

You are not charged for the remote attestation service.

However, you are charged for the ECS instances for which the remote attestation service is used.

## **API examples**

The remote attestation service supports trusted computing instances based on virtual TPM (vTPM) and confidential computing instances based on Intel Software Guard Extensions (SGX), Trust Domain Extensions (TDX), and Enclave.

-   To use the remote attestation service for vTPM, you must activate Security Center (SAS) for your Alibaba Cloud account.
    
-   For instances that use Intel SGX or TDX, you can use the remote attestation service through anonymous HTTP requests.
    

### **OIDC-related APIs**

The Alibaba Cloud remote attestation service provides OpenID Connect (OIDC)-compatible APIs. You can consider the Alibaba Cloud remote attestation service as a standard identity provider (IdP) service.

-   The Alibaba Cloud remote attestation service issues OIDC tokens to trusted computing instances and confidential computing instances to prove the identities of the instances to a relying party.
    
-   The relying party can verify the cryptographic validity of the OIDC tokens by using the standard OIDC process.
    

#### OIDC Discovery

OIDC Discovery simplifies and automates the interaction process between the relying party and the remote attestation service. OIDC Discovery allows the relying party to dynamically obtain authentication-related configuration information by using the standardized endpoint `.well-known/openid-configuration`) without the need to manually configure or hard-code the information.

For example, you can configure the Alibaba Cloud remote attestation service as an external IdP for Alibaba Cloud Resource Access Management (RAM) or AWS Identity and Access Management (IAM) to provide trusted identity credentials for trusted computing instances and confidential computing instances.

```
curl https://attest.cn-beijing.aliyuncs.com/.well-known/openid-configuration
```

Sample success response:

```
{
  "authorization_endpoint": "https://attest.cn-beijing.aliyuncs.com/authorize",
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "issuer": "https://attest.cn-beijing.aliyuncs.com",
  "jwks_uri": "https://attest.cn-beijing.aliyuncs.com/jwks.json",
  "response_types_supported": [
    "code",
    "code id_token",
    "id_token",
    "token id_token"
  ],
  "subject_types_supported": [
    "public"
  ],
  "token_endpoint": "https://attest.cn-beijing.aliyuncs.com/token",
  "userinfo_endpoint": "https://attest.cn-beijing.aliyuncs.com/userinfo"
}
```

### **Remote attestation for vTPM instances**

For information about trusted computing instances, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities#section-8uh-iic-0vj).

#### **Submit evidence**

Sample request (The PutMessage operation can be called after authentication. For more information, see [Request syntax and signature method](/help/en/sdk/product-overview/request-structure-and-signature/)):

```
access https://trusted-server.cn-hangzhou.aliyuncs.com?Action=PutMessage&PropertyUuid=0f74b5cc-ff0e-4fa6-b457-************&FileData=******************
```

Sample success response:

```
{
	"PropertyName": "instance-name",
	"SystemTrustDetail": {
		"pcr3": "d458cfe55cc03ea1f443f1562beec8df51c75e14a9fcf9a7234a13f198exxxx",
		"pcr4": "c35cef3b92c3850dc0bfa6139b25dc1c4c3d642b8587bde0fiemd847ufjxxxx",
		"pcr5": "aabd7d8c76c931dabed7ea53d1c8f96036c42a29435680ddff3f3148ff70xxxx",
		"pcr6": "d458cfe55cc03ea1f443f1562beec8df51c75e14a9fcf9a7234a13f198exxxx",
		"pcr0": "d22aa1bba22e829456f0cfda0d87690e6c252032864643da353133f161xxxx",
		"pcr1": "d9f056a703f04e4f408445752e97e92c890266d32e2ff1df3e80545aab4fxxxx",
		"pcr2": "d458cfe55cc03ea1f443f1562beec8df51c75e14a9fcf9a7234a13f198exxxx",
		"pcr7": "dd794f2d0c4cfa28dc9b5a3266e8516378ba551190d9844c38b890f7ad27xxxx",
		"pcr8": "deb301d065009d62980110d8173e350bbd43a4997ad74bf358ce5399c0ecxxxx",
		"pcr9": "ffe25e93ac7d245159184ac68c7dd5783e4cea978fafb1ad036bc861a8cdxxxx"
	},
	"RequestId": "D0E0C1D2-2937-54D4-9C52-XXXXXXXXXXXX",
	"SystemExceptionNum": 0,
	"ProgramWhiteListId": -1,
	"SystemWhiteListId": 1234,
	"ProgramTrustStatus": 4,
	"SystemTrustStatus": 1,
	"GmtModified": 1698975648000,
	"ProgramWhiteListName": "",
	"GmtRecentReport": 1698975648000,
	"OnlineStatus": 1,
	"Extensions": {
		"pcr5": "d1dac9c104c63c7e24f27962f4ad1df639a3f3224b1a968a45916207cf3xxxx"
	},
	"PropertyPrivateIp": "1.1.X.X",
	"PropertyPublicIp": "1.1.X.X",
	"GmtCreate": 1698385542000,
	"PropertyUuid": "c13fcabe-6683-4a9f-8cdd-xxxxxxxxxxxx",
	"ProgramTrustDetail": "{}",
	"ProgramExceptionNum": 0,
	"PropertyAffiliation": 1
}
```

#### **Query attestation results**

Sample request:

```
access https://trusted-server.cn-beijing.aliyuncs.com?Action=DescribeInstance&PropertyUuid=0f74b5cc-ff0e-4fa6-b457-1dc58072****
```

Sample success response:

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
  "data": {
    "nextClientIMAIndex": 0,
    "systemVerificationResult": {
      "status": 1,
      "code": "TrustedStatus"
    },
    "programVerificationResult": {
      "status": 1,
      "code": "TrustedStatus"
    }
  }
}
```

### **Remote attestation for SGX or TDX instances**

For information about SGX and TDX instances, see [Build an SGX confidential computing environment](/help/en/ecs/user-guide/build-an-sgx-encrypted-computing-environment) and [Build a TDX confidential computing environment](/help/en/ecs/user-guide/build-a-tdx-confidential-computing-environment).

#### **Obtain trusted computing base (TCB) information**

Sample request:

```
curl https://sgx-dcap-server.cn-beijing.aliyuncs.com/sgx/certification/v3/tcb?fmspc=00606A000000
```

Sample success response:

```
{
	"tcbInfo": {
		"version": 2,
		"issueDate": "2023-10-11T08:09:33Z",
		"nextUpdate": "2023-12-18T08:09:33Z",
		"fmspc": "00606A000000",
		"pceId": "0000",
		"tcbType": 0,
		"tcbEvaluationDataNumber": 12,
		"tcbLevels": [{
			"tcb": {
				"sgxtcbcomp01svn": 4,
				"sgxtcbcomp02svn": 4,
				"sgxtcbcomp03svn": 3,
				"sgxtcbcomp04svn": 3,
				"sgxtcbcomp05svn": 255,
				"sgxtcbcomp06svn": 255,
				"sgxtcbcomp07svn": 0,
				"sgxtcbcomp08svn": 0,
				"sgxtcbcomp09svn": 0,
				"sgxtcbcomp10svn": 0,
				"sgxtcbcomp11svn": 0,
				"sgxtcbcomp12svn": 0,
				"sgxtcbcomp13svn": 0,
				"sgxtcbcomp14svn": 0,
				"sgxtcbcomp15svn": 0,
				"sgxtcbcomp16svn": 0,
				"pcesvn": 11
			},
			"tcbDate": "2021-11-10T00:00:00Z",
			"tcbStatus": "UpToDate"
		}, {
			"tcb": {
				"sgxtcbcomp01svn": 4,
				"sgxtcbcomp02svn": 4,
				"sgxtcbcomp03svn": 3,
				"sgxtcbcomp04svn": 3,
				"sgxtcbcomp05svn": 255,
				"sgxtcbcomp06svn": 255,
				"sgxtcbcomp07svn": 0,
				"sgxtcbcomp08svn": 0,
				"sgxtcbcomp09svn": 0,
				"sgxtcbcomp10svn": 0,
				"sgxtcbcomp11svn": 0,
				"sgxtcbcomp12svn": 0,
				"sgxtcbcomp13svn": 0,
				"sgxtcbcomp14svn": 0,
				"sgxtcbcomp15svn": 0,
				"sgxtcbcomp16svn": 0,
				"pcesvn": 10
			},
			"tcbDate": "2020-11-11T00:00:00Z",
			"tcbStatus": "OutOfDate"
		}, {
			"tcb": {
				"sgxtcbcomp01svn": 4,
				"sgxtcbcomp02svn": 4,
				"sgxtcbcomp03svn": 3,
				"sgxtcbcomp04svn": 3,
				"sgxtcbcomp05svn": 255,
				"sgxtcbcomp06svn": 255,
				"sgxtcbcomp07svn": 0,
				"sgxtcbcomp08svn": 0,
				"sgxtcbcomp09svn": 0,
				"sgxtcbcomp10svn": 0,
				"sgxtcbcomp11svn": 0,
				"sgxtcbcomp12svn": 0,
				"sgxtcbcomp13svn": 0,
				"sgxtcbcomp14svn": 0,
				"sgxtcbcomp15svn": 0,
				"sgxtcbcomp16svn": 0,
				"pcesvn": 5
			},
			"tcbDate": "2018-01-04T00:00:00Z",
			"tcbStatus": "OutOfDate"
		}]
	},
	"signature": "21750a9a4173140379971c9eeaeee8dd27364cae4fdc45e19825bcddb0e5942941cb7cad8067aaaa98c75a0a0cfa9de329eb7d875957bd633a248bc328a0xxxx"
}
```

#### **Obtain the quoting enclave (QE) identity**

Sample request:

```
curl https://sgx-dcap-server.cn-beijing.aliyuncs.com/sgx/certification/v3/qe/identity
```

Sample success response:

```
{
	"enclaveIdentity": {
		"id": "QE",
		"version": 2,
		"issueDate": "2023-11-01T14:57:38Z",
		"nextUpdate": "2023-12-01T14:57:38Z",
		"tcbEvaluationDataNumber": 16,
		"miscselect": "00000000",
		"miscselectMask": "FFFFFFFF",
		"attributes": "11000000000000000000000000000000",
		"attributesMask": "FBFFFFFFFFFFFFFF0000000000000000",
		"mrsigner": "8C4F5775D796503E96137F77C68A829A0056AC8DED70140B081B094490C5xxxx",
		"isvprodid": 1,
		"tcbLevels": [{
				"tcb": {
					"isvsvn": 8
				},
				"tcbDate": "2023-08-09T00:00:00Z",
				"tcbStatus": "UpToDate"
			},
			{
				"tcb": {
					"isvsvn": 6
				},
				"tcbDate": "2021-11-10T00:00:00Z",
				"tcbStatus": "OutOfDate"
			}, {
				"tcb": {
					"isvsvn": 5
				},
				"tcbDate": "2020-11-11T00:00:00Z",
				"tcbStatus": "OutOfDate"
			}, {
				"tcb": {
					"isvsvn": 4
				},
				"tcbDate": "2019-11-13T00:00:00Z",
				"tcbStatus": "OutOfDate"
			}, {
				"tcb": {
					"isvsvn": 2
				},
				"tcbDate": "2019-05-15T00:00:00Z",
				"tcbStatus": "OutOfDate"
			}, {
				"tcb": {
					"isvsvn": 1
				},
				"tcbDate": "2018-08-15T00:00:00Z",
				"tcbStatus": "OutOfDate"
			}
		]
	},
	"signature": "593f79398d6400e62d14f1066e69e4e5bb44ed7544b18713d8020354e7601481681dc812a124672bfedd0e54ab31179fac442400c011ebca6b00c44d805bxxxx"
}
```

#### **Obtain the quote verification enclave (QVE) identity**

Sample request:

```
curl https://sgx-dcap-server.cn-beijing.aliyuncs.com/sgx/certification/v3/qve/identity
```

Sample success response:

```
{
	"enclaveIdentity": {
		"id": "QVE",
		"version": 2,
		"issueDate": "2023-11-01T15:45:01Z",
		"nextUpdate": "2023-12-01T15:45:01Z",
		"tcbEvaluationDataNumber": 16,
		"miscselect": "00000000",
		"miscselectMask": "FFFFFFFF",
		"attributes": "01000000000000000000000000000000",
		"attributesMask": "FBFFFFFFFFFFFFFF0000000000000000",
		"mrsigner": "8C4F5775D796503E96137F77C68A829A0056AC8DED70140B081B094490C5xxxx",
		"isvprodid": 2,
		"tcbLevels": [{
			"tcb": {
				"isvsvn": 3
			},
			"tcbDate": "2023-08-09T00:00:00Z",
			"tcbStatus": "UpToDate"
		}]
	},
	"signature": "251bb1301cb499cb8161a9b885fad8ceeb06b497f1e4a83c8de2d0f2e9e82c3ce0f22ce2ef6c6a789dcc287bb0a1da12a822a465395b54c9046aacfee7ceaff6"
}
```

### **Remote attestation for TDX instances**

#### **Obtain the OIDC token**

Submit TEE evidence to the Alibaba Cloud remote attestation service. The Alibaba Cloud remote attestation service evaluates the evidence based on the platform policy and then returns a JSON Web Token (JWT, [RFC 7519](https://tools.ietf.org/html/rfc7519)) issued by Alibaba Cloud.

```
curl -X POST https://attest.cn-beijing.aliyuncs.com/v1/attestation -d '{
  "evidence": "evidencebase64",
  "tee": "tdx",
  // empty policy_ids means only check the cryptographic integrity of the evidence
  "policy_ids": []
}'
```

The following table describes the fields in the request body.

**Field**

**Type**

**Description**

tee

String

The TEE type. Valid values:

-   `tdx`: Intel TDX instance.
    
-   `nvgpu`: NVIDIA GPU-accelerated instance.
    
-   `acstdxnvgpu`: Alibaba Cloud confidential computing instance.
    

evidence

String

The URL SAFE NO PAD Base64-encoded evidence.

policy\_ids

String\[\]

A list of policy IDs used to check the evidence.

`policy_ids` is optional. If this field is left empty, the default value is used.

runtime\_data

JSON

Optional. The runtime data.

If runtime\_data is specified, the raw field must contain Base64-encoded runtime data fragments, which are used as the expected runtime data to be checked against the data in the evidence.

Example: `{"raw": "YWFhCg==..."}`.

The response is a JWT that complies with the OIDC standard. Sample response:

```
eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NTM1NTBjLTU1NTEtNWU2Zi05MmI1LTIyZjUzMDIyOTc1MSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2F0dGVzdC5jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbSIsImN1c3RvbWl6ZWRfY2xhaW1zIjp7ImluaXRfZGF0YSI6bnVsbCwicnVudGltZV9kYXRhIjpudWxsfSwiZWF0X3Byb2ZpbGUiOiJodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvZW4vZWNzL3VzZXItZ3VpZGUvZWF0LXByb2ZpbGUiLCJldmFsdWF0aW9uLXJlcG9ydHMiOlt7InBvbGljeS1oYXNoIjpudWxsLCJwb2xpY3ktaWQiOiJkZWZhdWx0In1dLCJleHAiOjE3NDMwMDUzNjUsImlhdCI6MTc0Mjk4Mzc2NSwiaXNzIjoiaHR0cHM6Ly9hdHRlc3QuY24tYmVpamluZy5hbGl5dW5jcy5jb20iLCJqdGkiOiIwMzljZGZjOS02ZWMxLTQxZDQtOGRhOC02YTU5NTg0YzJmYTkiLCJuYmYiOjE3NDI5ODM3NjUsInRjYi1zdGF0dXMiOiJ7XCJpbml0X2RhdGFcIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFwicmVwb3J0X2RhdGFcIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsXCJ0ZHgucXVvdGUuYm9keS5tcl9jb25maWdfaWRcIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFwidGR4LnF1b3RlLmJvZHkubXJfb3duZXJcIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFwidGR4LnF1b3RlLmJvZHkubXJfb3duZXJfY29uZmlnXCI6XCIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIixcInRkeC5xdW90ZS5ib2R5Lm1yX3NlYW1cIjpcIjFjYzZhMTdhYjc5OWU5YTY5M2ZhYzc1MzZiZTYxYzEyZWUxZTBmYWJhZGE4MmQwYzk5OWUwOGNjZWUyYWE4NmRlNzdiMDg3MGY1NThjNTcwZTdmZmU1NWQ2ZDQ3ZmEwNFwiLFwidGR4LnF1b3RlLmJvZHkubXJfc2VydmljZXRkXCI6XCIzODNjODdkM2JiYjA0N2IyZDE3MWVhY2E5NTMxMmVkZTk5ZjI1ODA4OGRjNzg4ZjZhZTJjY2Y4YjZkZDg0OGZlOGQ0NzYyOWUwOGIzZjZjYmQ0YTAwZGQ0N2E1YTAzM2RcIixcInRkeC5xdW90ZS5ib2R5Lm1yX3RkXCI6XCJiMGU1MmM1OTU3NzUyM2IxN2FkNTUzYzZmZmZiMGY1ZjM0OTZkYmYzY2NjYTY5ZmJiMmVhODdjZjRmOTM4MTU3NTUwMDA1YzkyYTk4MTMwZDhkMzA1MDdjYTVjNjUyZGZcIixcInRkeC5xdW90ZS5ib2R5Lm1yc2lnbmVyX3NlYW1cIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFwidGR4LnF1b3RlLmJvZHkucmVwb3J0X2RhdGFcIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsXCJ0ZHgucXVvdGUuYm9keS5ydG1yXzBcIjpcIjIyM2JlNjdmMWRiYzBjMmM2N2JiYWU5MTliMjk1MGY2MGY2OGFhYTlkNjA5NzM5OGFmMmRhZGE2ZDk4Zjk2NGY2YWVjY2U5YjM3NjQzYTc2NzA4ZTA3ZTBkOTUxOWY4NFwiLFwidGR4LnF1b3RlLmJvZHkucnRtcl8xXCI6XCI1YzNjZDMzNjQ4YmQ0N2I4ZDI0MjZlYzQ3NjBlMGYwZGI1MTAzYjk1NmY4ZTAzN2VmMmIxNzkzOWVkMTI1YTI5N2U5NjZmMzExMTJjMDUwYjVhMDliNDQ0ZmI2NDMyZDdcIixcInRkeC5xdW90ZS5ib2R5LnJ0bXJfMlwiOlwiMTA4MzU3YzM5ZThkYzhmMTUwYTMzNzM4NTY3YWY0NTE5MDhmODBkZGZjOGMxNDgwMWZiZDUxM2YzMDdkYTk5MDgyZWEwYWJhOGNjN2UwNDI5NDBmMzEwZTU0YzhhYjEwXCIsXCJ0ZHgucXVvdGUuYm9keS5ydG1yXzNcIjpcIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFwidGR4LnF1b3RlLmJvZHkuc2VhbV9hdHRyaWJ1dGVzXCI6XCIwMDAwMDAwMDAwMDAwMDAwXCIsXCJ0ZHgucXVvdGUuYm9keS50Y2Jfc3ZuXCI6XCIwNTAxMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFwidGR4LnF1b3RlLmJvZHkudGRfYXR0cmlidXRlc1wiOlwiMDAwMDAwMTAwMDAwMDAwMFwiLFwidGR4LnF1b3RlLmJvZHkudGVlX3RjYl9zdm4yXCI6XCIwNTAxMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFwidGR4LnF1b3RlLmJvZHkueGZhbVwiOlwiZTc0MjA2MDAwMDAwMDAwMFwiLFwidGR4LnF1b3RlLmhlYWRlci5hdHRfa2V5X3R5cGVcIjpcIjAyMDBcIixcInRkeC5xdW90ZS5oZWFkZXIucmVzZXJ2ZWRcIjpcIjAwMDAwMDAwXCIsXCJ0ZHgucXVvdGUuaGVhZGVyLnRlZV90eXBlXCI6XCI4MTAwMDAwMFwiLFwidGR4LnF1b3RlLmhlYWRlci51c2VyX2RhdGFcIjpcIjJjMzBhZDEyYzAzNzFhMmMyNDlmNGE5MDMwNWMzZjU2MDAwMDAwMDBcIixcInRkeC5xdW90ZS5oZWFkZXIudmVuZG9yX2lkXCI6XCI5MzlhNzIzM2Y3OWM0Y2E5OTQwYTBkYjM5NTdmMDYwN1wiLFwidGR4LnF1b3RlLmhlYWRlci52ZXJzaW9uXCI6XCIwNTAwXCIsXCJ0ZHgucXVvdGUuc2l6ZVwiOlwiODgwMjAwMDBcIixcInRkeC5xdW90ZS50eXBlXCI6XCIwMzAwXCIsXCJ0ZHgudGRfYXR0cmlidXRlcy5kZWJ1Z1wiOmZhbHNlLFwidGR4LnRkX2F0dHJpYnV0ZXMua2V5X2xvY2tlclwiOmZhbHNlLFwidGR4LnRkX2F0dHJpYnV0ZXMucGVyZm1vblwiOmZhbHNlLFwidGR4LnRkX2F0dHJpYnV0ZXMucHJvdGVjdGlvbl9rZXlzXCI6ZmFsc2UsXCJ0ZHgudGRfYXR0cmlidXRlcy5zZXB0dmVfZGlzYWJsZVwiOnRydWV9IiwidGVlIjoidGR4In0.apt9yyHsJ4WoUwuqw-GivyjM_-W0m3p2p0xavtILExgAnaHMTv7hVvvuyjlnKHmLc8svTPZMAfYvbl0UJTpFkJ5TPQQ0wLijS69bsvG1mG8cltAwzI92BaAV8BdgMxUu9GWGQGaZRyEH-OJdM5HQBmo35YwCVYeNmwVGNdZ2h59D6fHIk1BUkVoPTmk0sE7aSnP_KblkfPL_Vh3ovs9MpAralCv2JO7cMCau0CqSoQTIORjh9i0BBXrt1y8y6gmpjEFDWMsIqW-k8cRhdANk_9CpBCN02jVwQXEHMnk0SAm4BCrCdyteXBNZfpN-3LCXQkkTyUEoaZXGHPm15cTbpg
```

You can use the [JWT Debugger](https://jwt.io/) to verify the validity of the OIDC token in a test environment. For specific content and explanations of JWT Claims, see [Remote attestation service EAT Profile](/help/en/ecs/user-guide/eat-profile).
