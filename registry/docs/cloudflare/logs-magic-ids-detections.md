# Magic IDS Detections

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/account/magic%5Fids%5Fdetections.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Magic IDS Detections

The descriptions below detail the fields available for `magic_ids_detections`.

## Action

Type: `string`

What action was taken on the packet. Possible values are *pass* | *block*.

## ColoCity

Type: `string`

The city where the detection occurred.

## ColoCode

Type: `string`

The IATA airport code corresponding to where the detection occurred.

## DestinationIP

Type: `string`

The destination IP of the packet which triggered the detection.

## DestinationPort

Type: `int`

The destination port of the packet which triggered the detection. It is set to 0 if the protocol field is set to *any*.

## Protocol

Type: `string`

The layer 4 protocol of the packet which triggered the detection. Possible values are *tcp* | *udp* | *any*. Variant *any* means a detection occurred at a lower layer (such as IP).

## SignatureID

Type: `int`

The signature ID of the detection.

## SignatureMessage

Type: `string`

The signature message of the detection. Describes what the packet is attempting to do.

## SignatureRevision

Type: `int`

The signature revision of the detection.

## SourceIP

Type: `string`

The source IP of packet which triggered the detection.

## SourcePort

Type: `int`

The source port of the packet which triggered the detection. It is set to 0 if the protocol field is set to *any*.

## Timestamp

Type: `int or string`

A timestamp of when the detection occurred.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/","name":"Account-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/magic_ids_detections/","name":"Magic IDS Detections"}}]}
```
