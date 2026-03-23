Version auswählenkeyboard\_arrow\_down

-   [1.12.0](https://docs.cloud.google.com/distributed-cloud/connected/latest/docs?hl=de)
-   [1.11.0](https://docs.cloud.google.com/distributed-cloud/connected/1.11.0/docs?hl=de)
-   [1.10.0](https://docs.cloud.google.com/distributed-cloud/connected/1.10.0/docs?hl=de)
-   [1.9.0](https://docs.cloud.google.com/distributed-cloud/connected/1.9.0/docs?hl=de)
-   [1.8.0](https://docs.cloud.google.com/distributed-cloud/connected/1.8.0/docs?hl=de)
-   [1.7.1](https://docs.cloud.google.com/distributed-cloud/connected/1.7.1/docs?hl=de)
-   [1.7.0](https://docs.cloud.google.com/distributed-cloud/connected/1.7.0/docs?hl=de)
-   [1.6.1](https://docs.cloud.google.com/distributed-cloud/connected/1.6.1/docs?hl=de)
-   [1.6.0](https://docs.cloud.google.com/distributed-cloud/connected/1.6.0/docs?hl=de)
-   [1.5.1](https://docs.cloud.google.com/distributed-cloud/connected/1.5.1/docs?hl=de)

     Versionsinformationen finden Sie in den [Versionshinweisen zu Distributed Cloud Connect](https://docs.cloud.google.com/distributed-cloud/connected/latest/docs/release-notes?hl=de).

-   [Home](https://docs.cloud.google.com/?hl=de)
-   [Documentation](https://docs.cloud.google.com/docs?hl=de)
-   [Distributed, hybrid, and multicloud](https://docs.cloud.google.com/docs/dhm-cloud?hl=de)
-   [Google Distributed Cloud](https://docs.cloud.google.com/distributed-cloud/docs?hl=de)
-   [Connected](https://docs.cloud.google.com/distributed-cloud/connected?hl=de)
-   [1.12.0 (Latest)](https://docs.cloud.google.com/distributed-cloud/connected/latest/docs?hl=de)
-   [Referenzen](https://docs.cloud.google.com/distributed-cloud/connected/latest/docs/apis?hl=de)

Feedback geben

# REST Resource: projects.locations Mit Sammlungen den Überblick behalten Sie können Inhalte basierend auf Ihren Einstellungen speichern und kategorisieren.

 

## Ressource: Location

Eine Ressource, die einen Google Cloud-Standort darstellt.

JSON-Darstellung

{
  "name": string,
  "locationId": string,
  "displayName": string,
  "labels": {
    string: string,
    ...
  },
  "metadata": {
    "@type": string,
    field1: ...,
    ...
  }
}

 

Felder

`name`

`string`

Ressourcenname für den Standort, der bei unterschiedlichen Implementierungen variieren kann. Beispiel: `"projects/example-project/locations/us-east1"`

`locationId`

`string`

Die kanonische ID für diesen Standort. Beispiel: `"us-east1"`

`displayName`

`string`

Der Anzeigename für diesen Standort, normalerweise der Name einer nahe gelegenen Stadt. zum Beispiel "Tokio".

`labels`

`map (key: string, value: string)`

Dienstübergreifende Attribute für den Standort. Beispiel:

```
{"cloud.googleapis.com/region": "us-east1"}
```

Ein Objekt, das eine Liste von `"key": value`\-Paaren enthält. Beispiel: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.

`metadata`

`object`

Dienstspezifische Metadaten, zum Beispiel die verfügbare Kapazität am angegebenen Standort.

Ein Objekt mit Feldern eines beliebigen Typs. Ein zusätzliches Feld `"@type"` enthält einen URI zur Identifizierung des Typs. Beispiel: `{ "id": 1234, "@type": "types.example.com/standard/id" }`

 

## Methoden

### `[get](https://docs.cloud.google.com/distributed-cloud/connected/latest/docs/reference/container/rest/v1/projects.locations/get?hl=de)`

Ruft Informationen zu einem Standort ab.

### `[getServerConfig](https://docs.cloud.google.com/distributed-cloud/connected/latest/docs/reference/container/rest/v1/projects.locations/getServerConfig?hl=de)`

Ruft die Serverkonfiguration ab.

### `[list](https://docs.cloud.google.com/distributed-cloud/connected/latest/docs/reference/container/rest/v1/projects.locations/list?hl=de)`

Listet Informationen zu den unterstützten Standorten für diesen Dienst auf.

Feedback geben

Sofern nicht anders angegeben, sind die Inhalte dieser Seite unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/) und Codebeispiele unter der [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0) lizenziert. Weitere Informationen finden Sie in den [Websiterichtlinien von Google Developers](https://developers.google.com/site-policies?hl=de). Java ist eine eingetragene Marke von Oracle und/oder seinen Partnern.

Zuletzt aktualisiert: 2026-02-25 (UTC).
