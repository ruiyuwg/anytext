-   [Home](https://docs.cloud.google.com/?hl=zh-cn)
-   [Documentation](https://docs.cloud.google.com/docs?hl=zh-cn)
-   [Distributed, hybrid, and multicloud](https://docs.cloud.google.com/docs/dhm-cloud?hl=zh-cn)
-   [Google Distributed Cloud](https://docs.cloud.google.com/distributed-cloud/docs?hl=zh-cn)
-   [Air-gapped](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/gdch?hl=zh-cn)
-   [Appliance](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/appliance?hl=zh-cn)
-   [1.0.3 (Latest)](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/appliance?hl=zh-cn)
-   [文档](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/appliance/overview?hl=zh-cn)

发送反馈

# 组织 (ORG) 使用集合让一切井井有条 根据您的偏好保存内容并对其进行分类。

**工作负载位置**

仅限 root 用户的工作负载

**审核日志源**

[Kubernetes 审核日志](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/appliance/platform-application/pa-ao-operations/audit-kubernetes?hl=zh-cn)

**接受审核的操作**

对 KRM API 管理平面执行操作

## 对 KRM API 管理平面执行操作

包含审核信息的日志条目中的字段

审核元数据

审核字段名称

值

**用户或服务身份**

`user`

例如，

"user":{"uid": "253b9e2f-fde2-4e37-ae7b-36a55d57aafb", "username": "system:serviceaccount: gatekeeper-system: gatekeeper-admin", "extra": {"authentication.kubernet es.io/pod-name": \[ "gatekeeper-audit-7fd7bc5d97-x9x8b"\], "authentication.kubernetes.io/pod-uid":\["e62eaabc-2530-4c36-b793-a98b42c061eb"\]}, "groups":\["system: serviceaccounts", "system: serviceacc ounts: gatekeeper-system", "system: authenticated"\]}

**目标**

_（调用 API 的字段和值）_

`requestURI`

例如，

`"requestURI":"/apis/resourcemanager.gdc.goog/v1"`

**操作**

_（包含所执行操作的字段）_

`verb`

`"verb":"list"`

**活动时间戳**

`requestReceivedTimestamp`

例如，

`"requestReceivedTimestamp":"2022-12-06T23:05:22.586546Z"`

**操作来源**

`sourceIPs`

例如，

`"sourceIPs":["10.200.0.4"]`

**结果**

`responseStatus`

例如，

`"responseStatus":{"code":200, "metadata":{}}`

**其他字段**

`annotations`

例如，

"annotations":{"authorization.k8s.io/decision": "allow","authorization.k8s.io/reason": "RBAC: allowed by ClusterRoleBinding \\"gatekeeper-manager-rolebinding\\" of ClusterRole \\"gatekeeper-manager-role\\" to ServiceAccount \\"gatekeeper-admin/gatekeeper-system\\""}

**日志示例**

```
{
   "userAgent":"gatekeeper/v3.7.0 (linux/amd64) 3ba8e93/2021-11-15T20:59:44Z",
   "sourceIPs":[
      "10.200.0.4"
   ],
   "objectRef":{
      "apiGroup":"resourcemanager.gdc.goog",
      "resource":"organizations",
      "apiVersion":"v1alpha1"
   },
   "stageTimestamp":"2022-12-06T23:05:22.590986Z",
   "kind":"Event",
   "apiVersion":"audit.k8s.io/v1",
   "level":"Metadata",
   "auditID":"38da3a00-47b8-424f-8d63-d89258e2043e",
   "requestReceivedTimestamp":"2022-12-06T23:05:22.586546Z",
   "verb":"list",
   "_gdch_cluster":"root-admin",
   "_gdch_fluentbit_pod":"anthos-audit-logs-forwarder-2j85z",
   "stage":"ResponseComplete",
   "responseStatus":{
      "code":200,
      "metadata":{}
   },
   "user":{
      "uid":"253b9e2f-fde2-4e37-ae7b-36a55d57aafb",
      "username":"system:serviceaccount:gatekeeper-system:gatekeeper-admin",
      "extra":{
         "authentication.kubernet es.io/pod-name":[
            "gatekeeper-audit-7fd7bc5d97-x9x8b"
         ],
         "authentication.kubernetes.io/pod-uid":[
            "e62eaabc-2530-4c36-b793-a98b42c061eb"
         ]
      },
      "groups":[
         "system:serviceaccounts",
         "system:serviceaccounts:gatekeeper-system",
         "system: authenticated"
      ]
   },
   "requestURI":"/apis/resourcemanager.gdc.goog/v1alpha1/organizations?limit=500",
   "annotations":{
      "authorization.k8s.io/decision":"allow",
      "authorization.k8s.io/reason":"RBAC: allowed by ClusterRoleBinding \"gatekeeper-manager-rolebinding\" of ClusterRole \"gatekeeper-manager-role\" to ServiceAccount \"gatekeeper-admin/gatekeeper-system\""
   },
   "_gdch_service_name":"apiserver"
}
```

发送反馈

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-03-17。
