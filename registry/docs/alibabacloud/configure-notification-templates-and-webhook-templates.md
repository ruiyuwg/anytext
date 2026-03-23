When alert rules in a notification policy trigger, ARMS sends notifications through DingTalk, Lark, WeCom, SMS, phone call, email, or webhook. Each channel has a preset template that you can customize using [Go template](https://pkg.go.dev/text/template) syntax.

This page covers the preset templates for each channel, the available template variables, and the Go template syntax for writing custom templates.

## Preset notification templates

ARMS provides a preset template for each notification channel. Each template renders alert data into a readable message using Go template syntax.

### Email

```
Alert name: {{ .commonLabels.alertname }}
{{if .commonLabels.clustername }}
Cluster name: {{ .commonLabels.clustername }}
{{ end }}
{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}
Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }}
{{ end }}
Notification policy: {{ .dispatchRuleName }}
Alert triggered at: {{ .startTime }}
Alert content: {{ if .newIncidentIn }} (New event) {{ end }} {{ for .alerts }} {{.annotations.message}} {{ if .generatorURL }} <a href="{{.generatorURL}}" >Details URL</a> {{end}} {{end}}
```

The following table explains each section of the template.

**Template section**

**Description**

`{{ .commonLabels.alertname }}`

Alert name. By default, notification policies group alerts by `alertname`, so all events in a group share the same name.

`{{if .commonLabels.clustername }}`

Renders the cluster name only if the `clustername` label exists in the event.

`{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}`

Renders the application name only if the alert object type is `app`.

`{{ .dispatchRuleName }}`

Name of the notification policy that matched the alert.

`{{ .startTime }}`

Time when the alert was triggered.

`{{ if .newIncidentIn }} (New event) {{end}}`

Marks the notification with `(New event)` if a new event occurred in the alert group.

`{{ for .alerts }} {{.annotations.message}} ... {{end}}`

Iterates through all alert events and renders each `message` annotation. If `generatorURL` exists, it renders a clickable details link using `<a href="...">`.

**Sample output:**

```
Alert name: The memory usage of the container has exceeded 80%.
Cluster name: klyz1688-kubernetes-1
Notification policy: Notification policy name
Alert triggered at: 2023-02-22 07:18:15
Alert content: Namespace: arms-prom / Pod: kube-state-metrics-ccb59dbff-jljg4 / Container: kube-state-metrics. The memory usage of the container has exceeded 80%. Current value: 15.52%.
```

### SMS and phone call

SMS and phone call templates share the same structure as the email template but omit the details URL.

```
{{ .level }} alert occurred
Alert name: {{ .commonLabels.alertname }}
{{if .commonLabels.clustername }}
Cluster name: {{ .commonLabels.clustername }}
{{ end }}
{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}
Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }}
{{ end }}
Notification policy: {{ .dispatchRuleName }}
Alert triggered at: {{ .startTime }}
Alert content: {{ if .newIncidentIn }} (New event)
 {{end}} {{ for .alerts }} {{ .annotations.message }} {{ end }}
```

### Chatbot (DingTalk, Lark, WeCom)

The chatbot template renders Markdown output. Formatting support varies by platform.

```
{{ if .newIncidentIn }} (New event) {{end}}
{{if .commonLabels.clustername }}
 >  Cluster name: {{ .commonLabels.clustername }}
 {{ end }}
{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}
 >  Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }}
 {{ end }}
{{ for .alerts }} >  {{ .annotations.message }} {{if .generatorURL }} [Details URL]({{.generatorURL}})  {{end}}{{if .annotations._aliyun_arms_insights_analyze_link }}[<font color='#ff0000'>Root cause</font>]({{ .annotations._aliyun_arms_insights_analyze_link}}){{ end }}{{if  eq "1" .labels._aliyun_arms_denoise_code }} (Important: {{.labels._aliyun_arms_important_reason }}) {{end}}

{{end}}
```

**Chatbot Markdown support:**

**Feature**

**Syntax**

**Platform support**

Block quote

`>`

DingTalk, Lark, WeCom

Font color

`<font color='#ff0000'>text</font>`

DingTalk and WeCom only. Lark does not support font colors.

Line break

Press **Enter** twice in the template

DingTalk only

Line break

Press **Enter** once in the template

Lark, WeCom

### Webhook

```
{
  "Alert name":"{{ .commonLabels.alertname }}
{{if .commonLabels.clustername }}", "Cluster name":"{{ .commonLabels.clustername }} {{ end }}
{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "Application name":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}",
  "Notification Policy":"{{ .dispatchRuleName }}",
  "Alert triggered at":"{{ .startTime }}",
  "Alert content":"{{ for .alerts }} {{ .annotations.message }} {{ end }}"
}
```

**Sample output:**

```
{
  "Alert name": "The memory usage of the container has exceeded 80%.",
  "Cluster name": "klyz1688-kubernetes-1",
  "Notification policy": "Notification policy name",
  "Alert triggered at": "2023-02-22 07:18:15",
  "Alert content": "Namespace: arms-prom / Pod: kube-state-metrics-ccb59dbff-jljg4 / Container: kube-state-metrics. The memory usage of the container has exceeded 80%. Current value: 15.52%."
}
```

## Template variables

These variables are available in notification templates for rendering alert data.

**Variable**

**Type**

**Description**

`alarmId`

String

ID of the original alert.

`alerts`

List<Alert>

List of original alert events in this group.

`alerts.annotations`

Map<String, String>

Annotations of the original alert.

`alerts.endsAt`

Timestamp

Time when the alert was cleared. Equals the trigger time plus the clearing period.

`alerts.startsAt`

Timestamp

Time when the alert was triggered.

`alerts.fingerprint`

String

Alert fingerprint. Alerts with the same label set share the same fingerprint.

`alerts.labels`

Map<String, String>

Labels of the original alert.

`alerts.status`

String

Alert status. Valid values: `firing` (alert is active), `resolved` (alert is cleared).

`commonAnnotations`

Map<String, String>

Annotations shared by all alerts in the group.

`commonLabels`

Map<String, String>

Labels shared by all alerts in the group.

`groupLabels`

Map<String, String>

Labels used to group alerts, as defined in the notification policy group condition.

`status`

String

Status of the alert group. Valid values: `firing` (at least one alert is active), `resolved` (all alerts are cleared).

`startTime`

String

Time when the alert group was created.

`endTime`

String

Time when the alert group was cleared. This is the time when the last alert in the group was resolved.

`level`

String

Severity level. Valid values: `critical` (P1), `error` (P2), `warning` (P3), `page` (P4).

`dispatchRuleName`

String

Name of the notification policy that matched this alert group.

**Note**

Alert parameters consist of multiple labels. Use labels to reference specific alert data in your templates. For example, `.commonLabels.alertname` returns the alert name.

**Sample alert context**

The following JSON shows the complete alert context that all examples in the [Go template syntax](#section-6ad-lp3-6wm) section reference.

```
{
  "alerts": [
    {
      "annotations": {
        "message": "Namespace: arms-prom / Pod: kube-state-metrics-ccb59dbff-jljg4 / Container: kube-state-metrics. The memory usage of the container has exceeded 80%. Current value: 15.52%.",
        "value": "15.521240234375"
      },
      "endsAt": "2023-02-22T07:27:15.404000000Z",
      "fingerprint": "bec72890cc2c7b4a027e008df0cd1013",
      "labels": {
        "container": "kube-state-metrics",
        "severity": "warning",
        "instance": "10.0.80.186:10255",
        "clustername": "klyz1688-kubernetes-1",
        "alertname": "The memory usage of the container has exceeded 80%.",
        "_aliyun_arms_involvedObject_name": "klyz1688-kubernetes-1",
        "pod_name": "kube-state-metrics-ccb59dbff-jljg4",
        "_aliyun_arms_involvedObject_kind": "cluster",
        "name": "k8s_kube-state-metrics_kube-state-metrics-ccb59dbff-jljg4_arms-prom_359508f3-7e76-4740-b915-41ea48849641_0",
        "namespace": "arms-prom"
      },
      "startsAt": "2023-02-22T07:18:15.578000000Z",
      "status": "firing"
    }
  ],
  "commonAnnotations": {
    "message": "Namespace: arms-prom / Pod: kube-state-metrics-ccb59dbff-jljg4 / Container: kube-state-metrics. The memory usage of the container has exceeded 80%. Current value: 15.52%.",
    "value": "15.521240234375"
  },
  "commonLabels": {
    "container": "kube-state-metrics",
    "severity": "warning",
    "instance": "10.0.80.186:10255",
    "clustername": "klyz1688-kubernetes-1",
    "alertname": "The memory usage of the container has exceeded 80%.",
    "_aliyun_arms_involvedObject_name": "klyz1688-kubernetes-1",
    "pod_name": "kube-state-metrics-ccb59dbff-jljg4",
    "_aliyun_arms_involvedObject_kind": "cluster",
    "name": "k8s_kube-state-metrics_kube-state-metrics-ccb59dbff-jljg4_arms-prom_359508f3-7e76-4740-b915-41ea48849641_0",
    "namespace": "arms-prom"
  },
  "groupLabels": {
    "alertname": "The memory usage of the container has exceeded 80%."
  },
  "status": "firing",
  "startTime": "2023-02-22 07:18:15",
  "endTime": "The time when the alert was cleared",
  "level": "error",
  "dispatchRuleName": "Notification policy name",
  "alarmId": "123456"
}
```

## Go template syntax

ARMS uses [Go template](https://pkg.go.dev/text/template) syntax to render notification templates. At render time, the template is populated with data from the alert context.

### Dot notation

The dot (`.`) represents the current context scope.

**Access the entire context:**

```
{{ . }}
```

Output: Returns all data in the alert context.

**Access a top-level field:**

```
{{ .level }}
```

Output:

```
error
```

**Access a nested field:**

```
{{ .commonLabels.alertname }}
```

Output:

```
The memory usage of the container has exceeded 80%.
```

### Variables

Store context data in variables for reuse.

**Assign a field to a variable:**

```
{{ $alertname := .commonLabels.alertname }} {{$alertname}}
```

Output:

```
The memory usage of the container has exceeded 80%.
```

**Access an array element through a variable:**

```
{{ $alert0 := index .alerts 0 }} {{$alert0.labels.alertname}}
```

Output:

```
The memory usage of the container has exceeded 80%.
```

### Conditionals: if/else

Check values with `if`. The condition evaluates to `false` for null values, `0`, nil pointers, empty strings, and zero-length strings.

**Simple condition:**

```
{{if eq "warning" .commonLabels.severity }} P3 alert {{ end }}
```

Output:

```
P3 alert
```

**if/else:**

```
{{if eq "critical" .commonLabels.severity }} P1 alert {{ else }} P2 alert {{ end }}
```

Output:

```
P2 alert
```

### Loops: for

Iterate through a list.

**Traverse alerts and get each alert name:**

```
{{ for .alerts}} {{.labels.alertname}} \n {{end}}
```

Output:

```
The memory usage of the container has exceeded 80%.
```

### Loops: range

Traverse a sequence of values.

**Iterate through integers 0 to 9:**

```
{{ $ran := range 0 10 }} {{ for $ran }} {{.}} {{end}}
```

Output:

```
 0 1 2 3 4 5 6 7 8 9
```

### The index function

Retrieve a specific element from an array by index.

**Get the first alert event:**

```
{{ $alert0 := index .alerts 0 }} {{$alert0.labels.alertname}}
```

Output:

```
 The memory usage of the container has exceeded 80%.
```

### Comparison functions

**Function**

**Description**

`eq`

Equal to

`ne`

Not equal to

`lt`

Less than

`le`

Less than or equal to

`gt`

Greater than

`ge`

Greater than or equal to

**Example:**

```
{{if eq "warning" .commonLabels.severity }} P3 alert {{ end }}
```

Output:

```
  P3 alert
```

### Logical operators: and, or, not

Combine conditions with logical operators.

**Example:**

```
{{if eq "warning" .commonLabels.severity or eq "warning" .commonLabels.severity }} P3 alert {{ end }}
```

Output:

```
  P3 alert
```

### Built-in functions

#### printf

Format output data.

**Round to two decimal places:**

```
{{ $alert0 := index .alerts 0 }} {{ printf "%.2f" $alert0.annotations.value }}
```

Output:

```
  15.52
```

#### humanizePercentage

Convert a decimal string to a readable percentage.

**Example:**

```
{{ "0.95332123123124" | humanizePercentage }}
```

Output:

```
95.33%
```

#### humanizeDate

Convert a millisecond timestamp to a formatted date. Default format: `yyyy-MM-dd HH:mm:ss`.

**Example:**

```
{{ "1671074058234" | humanizeDate }}
```

Output:

```
2022-12-15 11:14:18
```

#### len

Return the length of an array.

**Example:**

```
{{ len .alerts }}
```

Output:

```
1
```
