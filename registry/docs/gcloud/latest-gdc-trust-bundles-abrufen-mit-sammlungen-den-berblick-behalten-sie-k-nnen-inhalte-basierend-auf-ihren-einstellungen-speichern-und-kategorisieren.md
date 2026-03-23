-   [Home](https://docs.cloud.google.com/?hl=de)
-   [Documentation](https://docs.cloud.google.com/docs?hl=de)
-   [Distributed, hybrid, and multicloud](https://docs.cloud.google.com/docs/dhm-cloud?hl=de)
-   [Google Distributed Cloud](https://docs.cloud.google.com/distributed-cloud/docs?hl=de)
-   [Air-gapped](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/gdch?hl=de)
-   [1.15.3 (Latest)](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/gdch?hl=de)
-   [Dokumentation](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/gdch/overview?hl=de)

Feedback geben

# GDC-Trust-Bundles abrufen Mit Sammlungen den Überblick behalten Sie können Inhalte basierend auf Ihren Einstellungen speichern und kategorisieren.

Ein Vertrauens-Bundle, auch als Vertrauensliste bezeichnet, ist eine Gruppe von Vertrauensankern, z. B. Entitäten, die von Natur aus vertrauenswürdig sind und deren Vertrauen nicht von einer anderen Entität (vertrauenswürdigen Dritten) übertragen wird. Diese Trust-Anchors werden als Zertifikate der Zertifizierungsstelle (CA) bereitgestellt. Der Algorithmus zum Erstellen von Zertifizierungspfaden verwendet diese CA-Zertifikate, um eine Kette zwischen einem Zertifikat, das eine Validierung erhält, und den Vertrauensankern herzustellen.

Google Distributed Cloud (GDC) mit Air Gap hat dedizierte Trust Bundles. In diesem Leitfaden wird beschrieben, wie Organisationsadministratoren das Trust-Bundle abrufen können.

## Typen von Trust-Bundles

Distributed Cloud bietet zwei Arten von verwalteten Trust-Bundles für Plattformadministratoren:

-   `trust-store-root-ext`: enthält die interne Stammzertifizierungsstelle und die Web-TLS-Zertifizierungsstelle. Die Inhalte variieren je nach Speicherort, z. B. im Stammverzeichnis oder in der Mandantenorganisation. Mit diesem Trust-Bundle können Sie über Organisationsgrenzen hinweg kommunizieren oder auf Dienste wie den Objektspeicher innerhalb der Organisation zugreifen.
    
-   `trust-store-global-root-ext`: Im globalen API-Server und im zonalen API-Server-Namespace `platform` verfügbar. Wenn der globale API-Server bereit ist, werden alle anderen zonenbezogenen `trust-store-root-ext`\-Daten, einschließlich lokaler Daten, mit dem Bundle gefüllt.
    

## Vertrauens-Bundle abrufen

Sie können Trust-Bundles vom bekannten Serverendpunkt oder vom Cluster mit `kubectl` abrufen.

### Vom bekannten Server abrufen

GDC bietet eine sichere Möglichkeit, über einen bekannten Serverendpunkt auf Trust Bundles zuzugreifen. Verwenden Sie diese Methode, wenn Sie das `trust-store-global-root-ext`\-Bundle abrufen müssen, ohne direkt mit dem Cluster über `kubectl` zu interagieren.

**Achtung** :Beim Abrufen von Vertrauensbündeln vom bekannten Server ist es wichtig, sich vor Person-in-the-Middle-Angriffen (PITM) zu schützen. Achten Sie darauf, dass Sie eine Verbindung zu einer sicheren und kontrollierten Umgebung herstellen.

1.  Exportieren Sie die folgenden Umgebungsvariablen:
    
    ```
    export STORAGE=STORAGE
    export ORG_NAME=ORG_NAME
    ```
    
    Ersetzen Sie Folgendes:
    
    -   `STORAGE`: Der Verzeichnispfad, in dem Sie die Trust-Bundle-Datei speichern möchten.
    -   `ORG_NAME`: der Name Ihrer Organisation in GDC.
2.  Legen Sie die Umgebungsvariable `WELL_KNOWN_URL` fest:
    
    ```
    export WELL_KNOWN_URL=https://console.${ORG_NAME:?}.zone1.google.gdch.test/.well-known/certificate-authority
    ```
    
3.  Legen Sie die Umgebungsvariable `GLOBAL_TRUST_BUNDLE_FILE` fest. In dieser Datei wird das GDC-Vertrauensbündel lokal am angegebenen `$STORAGE`\-Speicherort gespeichert.
    
    ```
    export GLOBAL_TRUST_BUNDLE_FILE="$STORAGE/global/ca-bundles/global-trust-bundle"
    ```
    
4.  Erstellen Sie das Verzeichnis für die Datei mit dem Vertrauensanker:
    
    ```
    mkdir -p $(dirname ${GLOBAL_TRUST_BUNDLE_FILE:?})
    ```
    
5.  Rufen Sie das `trust-store-global-root-ext`\-Vertrauensbündel vom bekannten Server ab und speichern Sie es in der Datei, die durch die Umgebungsvariable `GLOBAL_TRUST_BUNDLE_FILE` angegeben wird:
    
    ### Linux
    
    ```
    echo -n | curl ${WELL_KNOWN_URL:?} > ${GLOBAL_TRUST_BUNDLE_FILE:?}
    ```
    
    ### Windows
    
    ```
    Invoke-WebRequest -Uri "https://console.${ORG_NAME}.google.gdch.test/.well-known/certificate-authority" -OutFile ".\global-trust-bundle.crt"
    ```
    
    Die abgerufene Trust-Bundle-Datei enthält ein oder mehrere Zertifikate von Zertifizierungsstellen. Die entsprechende Ausgabe sieht etwa so aus:
    
    ```
    -----BEGIN CERTIFICATE-----
    MIIC8TCCAdmgAwIBAgIRAODQ/dOB39RBs8ZpN0RujIswDQYJKoZIhvcNAQELBQAw
    EjEQMA4GA1UEAxMHcm9vdC1jYTAeFw0yNTAxMDYwNzM3MzVaFw00ODEyMzEwNzM3
    MzVaMBIxEDAOBgNVBAMTB3Jvb3QtY2EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
    ggEKAoIBAQC41U4+3M1EAHggUBw5ki97533zTvwHukmZyORwbQ3tlQ4GQDscoCEh
    nn+KCaG767VCaGDcQhq99hl6qa/nBoc1X6WQ3a/uhv5E2ztRD40PB5NFNdSulxTH
    gsitukSmv+DAx15UJnVkJtPP/FzxEWPu0piIiFZakTxT83VUSs54QRmTahxP80FI
    R0xZ0ohsu9jzA2CAyxTccJU0/xE2kDwN8c8kiYYuG+czMdNVdnT4Jm2ToSkzIDux
    Yi9MzNmarVGG/rtW5SlqnUMYzSsxtUYSmMRlCsFDVxkSzfmICmTRw2zmNkFA/3nz
    XneVSIsUHOA2NzvMN4eoLTVRgSFcHlZRAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIB
    hjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTEeB0EQwhc5p++GhwNymsBfN93
    WjANBgkqhkiG9w0BAQsFAAOCAQEAKBqn4AXjUWmhIUOrWQ5cetsmI76Wl+RBeSzU
    HxbqMBH8Dk1oJbGHtmQbu7EmWz1pKYge650s9N83hMgjFZD24t9GiQZ7YY+i+317
    D6HzJ8VIKPnxVtnUIQzCpkRTQoglDlb1f/7+fi2SYJoHdhnRI/3OaVQTnObjbW5T
    mBhsMxFKc0zGa3HIEm9SUH608V60xUPanl23YZ6X7W8nWAJfnzKvH+3q3Fz58u/S
    VR5t/FkbOktVtnU8AfcMKLof6KG2KhE2L7FAC+fp0ZsjV9vE2uqlZ+8mIQHyc3tM
    cbWxOx+SO/XUCenY9C1yrublln9aOEn4/s3aSURPguiSZOfDyQ==
    -----END CERTIFICATE-----
    ```
    

### Mit kubectl aus dem Cluster abrufen

Sie können Trust-Bundles direkt aus dem GDC-Cluster mit dem `kubectl`\-Befehlszeilentool abrufen. Verwenden Sie diese Methode, wenn Sie direkten Zugriff auf den Cluster und seine Konfiguration haben und entweder die `trust-store-root-ext`\- oder die `trust-store-global-root-ext`\-Vertrauenswürdigkeitsbündel abrufen müssen.

Bevor Sie die Schritte in diesem Abschnitt ausführen können, benötigen Sie Folgendes:

-   **Erforderliche Berechtigungen**: Bitten Sie Ihren IAM-Administrator der Organisation, Ihnen die Rolle „Trust Store Viewer“ (`trust-store-viewer`) zuzuweisen.
-   **kubeconfig-Datei**: Melden Sie sich an und [generieren Sie die kubeconfig-Datei für den Management API-Server](https://docs.cloud.google.com/distributed-cloud/hosted/docs/latest/gdch/platform/pa-user/iam/sign-in?hl=de#zonal-resources-kubeconfig), falls Sie noch keine haben. Sie benötigen den Pfad zur kubeconfig-Datei, um `MANAGEMENT_API_SERVER_KUBECONFIG` in den folgenden Schritten zu ersetzen.

Rufen Sie das Trust-Bundle mit `kubectl` aus dem Cluster ab:

1.  Exportieren Sie die folgenden Umgebungsvariablen:
    
    ```
    export KUBECONFIG=MANAGEMENT_API_SERVER_KUBECONFIG
    export STORAGE=STORAGE
    export ZONE=ZONE
    ```
    
    Ersetzen Sie Folgendes:
    
    -   `MANAGEMENT_API_SERVER_KUBECONFIG`: der Pfad zur kubeconfig des Management API-Servers.
    -   `STORAGE`: Der Verzeichnispfad, in dem Sie die Trust-Bundle-Datei speichern möchten.
    -   `ZONE`: Ihr GDC-Zonenname.
2.  Legen Sie die Umgebungsvariable `TRUST_BUNDLE_FILE` fest. In dieser Datei wird das GDC-Vertrauensbündel lokal am angegebenen `$STORAGE`\-Speicherort für Ihr GDC-`$ZONE` gespeichert:
    
    ```
    export TRUST_BUNDLE_FILE="$STORAGE/$ZONE/ca-bundles/trust-bundle"
    export GLOBAL_TRUST_BUNDLE_FILE="$STORAGE/global/ca-bundles/global-trust-bundle"
    ```
    
3.  Legen Sie die Umgebungsvariable `NS` für den Namespace fest:
    
    ```
    export NS=platform
    ```
    
4.  Erstellen Sie die Verzeichnisse für die Dateien mit dem Vertrauenswürdigkeits-Bundle:
    
    ```
    mkdir -p $(dirname ${TRUST_BUNDLE_FILE:?})
    mkdir -p $(dirname ${GLOBAL_TRUST_BUNDLE_FILE:?})
    ```
    
5.  Rufen Sie die Zertifizierungsstellen (Certificate Authorities, CAs) ab und speichern Sie sie in den Dateien, die durch die Umgebungsvariablen `TRUST_BUNDLE_FILE` und `GLOBAL_TRUST_BUNDLE_FILE` angegeben werden:
    
    Für `trust-store-root-ext`:
    
    ```
    kubectl --kubeconfig ${KUBECONFIG} get secret trust-store-root-ext -n ${NS} -o go-template='{{ index .data "ca.crt" }}' | base64 -d | sed '$a\' > ${TRUST_BUNDLE_FILE}
    ```
    
    Für `trust-store-global-root-ext`:
    
    ```
    kubectl --kubeconfig ${KUBECONFIG} get secret trust-store-global-root-ext -n ${NS} -o go-template='{{ index .data "ca.crt" }}' | base64 -d | sed '$a\' > ${GLOBAL_TRUST_BUNDLE_FILE}
    ```
    
    Die abgerufene Trust-Bundle-Datei enthält ein oder mehrere Zertifikate von Zertifizierungsstellen. Die entsprechende Ausgabe sieht etwa so aus:
    
    ```
    -----BEGIN CERTIFICATE-----
    MIIC8TCCAdmgAwIBAgIRAODQ/dOB39RBs8ZpN0RujIswDQYJKoZIhvcNAQELBQAw
    EjEQMA4GA1UEAxMHcm9vdC1jYTAeFw0yNTAxMDYwNzM3MzVaFw00ODEyMzEwNzM3
    MzVaMBIxEDAOBgNVBAMTB3Jvb3QtY2EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
    ggEKAoIBAQC41U4+3M1EAHggUBw5ki97533zTvwHukmZyORwbQ3tlQ4GQDscoCEh
    nn+KCaG767VCaGDcQhq99hl6qa/nBoc1X6WQ3a/uhv5E2ztRD40PB5NFNdSulxTH
    gsitukSmv+DAx15UJnVkJtPP/FzxEWPu0piIiFZakTxT83VUSs54QRmTahxP80FI
    R0xZ0ohsu9jzA2CAyxTccJU0/xE2kDwN8c8kiYYuG+czMdNVdnT4Jm2ToSkzIDux
    Yi9MzNmarVGG/rtW5SlqnUMYzSsxtUYSmMRlCsFDVxkSzfmICmTRw2zmNkFA/3nz
    XneVSIsUHOA2NzvMN4eoLTVRgSFcHlZRAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIB
    hjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTEeB0EQwhc5p++GhwNymsBfN93
    WjANBgkqhkiG9w0BAQsFAAOCAQEAKBqn4AXjUWmhIUOrWQ5cetsmI76Wl+RBeSzU
    HxbqMBH8Dk1oJbGHtmQbu7EmWz1pKYge650s9N83hMgjFZD24t9GiQZ7YY+i+317
    D6HzJ8VIKPnxVtnUIQzCpkRTQoglDlb1f/7+fi2SYJoHdhnRI/3OaVQTnObjbW5T
    mBhsMxFKc0zGa3HIEm9SUH608V60xUPanl23YZ6X7W8nWAJfnzKvH+3q3Fz58u/S
    VR5t/FkbOktVtnU8AfcMKLof6KG2KhE2L7FAC+fp0ZsjV9vE2uqlZ+8mIQHyc3tM
    cbWxOx+SO/XUCenY9C1yrublln9aOEn4/s3aSURPguiSZOfDyQ==
    -----END CERTIFICATE-----
    ```
    

Feedback geben

Sofern nicht anders angegeben, sind die Inhalte dieser Seite unter der [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/) und Codebeispiele unter der [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0) lizenziert. Weitere Informationen finden Sie in den [Websiterichtlinien von Google Developers](https://developers.google.com/site-policies?hl=de). Java ist eine eingetragene Marke von Oracle und/oder seinen Partnern.

Zuletzt aktualisiert: 2026-03-19 (UTC).
