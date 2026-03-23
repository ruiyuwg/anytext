-   [Home](https://docs.cloud.google.com/?hl=fr)
-   [Documentation](https://docs.cloud.google.com/docs?hl=fr)
-   [Security](https://docs.cloud.google.com/docs/security?hl=fr)
-   [Google Security Operations](https://docs.cloud.google.com/chronicle/docs?hl=fr)
-   [Guides](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview?hl=fr)

Envoyer des commentaires Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.

# Collecter les journaux Symantec VIP Enterprise Gateway

Compatible avec :

Google SecOps [SIEM](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc?hl=fr)

**Remarque** : Cette fonctionnalité est couverte par les [Conditions des offres avant disponibilité générale](https://chronicle.security/legal/service-terms/) des conditions spécifiques au service Google Security Operations. Les fonctionnalités pré-DG (avant disponibilité générale) sont susceptibles de présenter une compatibilité limitée, et les modifications apportées à ces fonctionnalités peuvent ne pas être compatibles avec d'autres versions avant disponibilité générale. Pour en savoir plus, consultez les [Instructions relatives aux services d'assistance technique Google SecOps](https://chronicle.security/legal/technical-support-services-guidelines/) et les [Conditions spécifiques du service Google SecOps](https://chronicle.security/legal/service-terms/).

Ce document explique comment ingérer les journaux Symantec VIP Enterprise Gateway dans Google Security Operations à l'aide de Bindplane. Le code du parseur tente d'abord de traiter le message de journal d'entrée en tant qu'objet JSON. En cas d'échec, il suppose un format syslog et utilise des expressions régulières (modèles Grok) pour extraire les champs pertinents tels que les codes temporels, les adresses IP, les noms d'utilisateur et les descriptions d'événements. Enfin, il mappe les informations extraites aux champs UDM (Unified Data Model) pour une représentation standardisée des événements de sécurité.

## Avant de commencer

Assurez-vous de remplir les conditions préalables suivantes :

-   Instance Google SecOps
-   Hôte Windows 2016 ou version ultérieure, ou hôte Linux avec systemd
-   Si vous exécutez le programme derrière un proxy, les [ports](https://docs.cloud.google.com/chronicle/docs/ingestion/use-bindplane-agent?hl=fr#verify_the_firewall_configuration) du pare-feu sont ouverts.
-   Accès privilégié à la passerelle Symantec VIP Enterprise

## Obtenir le fichier d'authentification d'ingestion Google SecOps

1.  Connectez-vous à la console Google SecOps.
2.  Accédez à **Paramètres du SIEM \> Agents de collecte**.
3.  Téléchargez le **fichier d'authentification d'ingestion**. Enregistrez le fichier de manière sécurisée sur le système sur lequel Bindplane sera installé.

## Obtenir l'ID client Google SecOps

1.  Connectez-vous à la console Google SecOps.
2.  Accédez à **Paramètres SIEM\> Profil**.
3.  Copiez et enregistrez le **numéro client** de la section **Informations sur l'organisation**.

## Installer l'agent Bindplane

### Installation de fenêtres

1.  Ouvrez l'**invite de commandes** ou **PowerShell** en tant qu'administrateur.
2.  Exécutez la commande suivante :
    
    ```
    msiexec /i "https://github.com/observIQ/bindplane-agent/releases/latest/download/observiq-otel-collector.msi" /quiet
    ```
    

### Installation de Linux

1.  Ouvrez un terminal avec les droits root ou sudo.
2.  Exécutez la commande suivante :
    
    ```
    sudo sh -c "$(curl -fsSlL https://github.com/observiq/bindplane-agent/releases/latest/download/install_unix.sh)" install_unix.sh
    ```
    

### Autres ressources d'installation

Pour plus d'options d'installation, consultez le [guide d'installation](https://docs.cloud.google.com/chronicle/docs/ingestion/use-bindplane-agent?hl=fr#install_the_bindplane_agent).

## Configurer l'agent Bindplane pour ingérer Syslog et l'envoyer à Google SecOps

1.  Accédez au fichier de configuration :
    -   Recherchez le fichier `config.yaml`. Il se trouve généralement dans le répertoire `/etc/bindplane-agent/` sous Linux ou dans le répertoire d'installation sous Windows.
    -   Ouvrez le fichier à l'aide d'un éditeur de texte (par exemple, `nano`, `vi` ou le Bloc-notes).
2.  Modifiez le fichier `config.yaml` comme suit :
    
    ```
    receivers:
        udplog:
            # Replace the port and IP address as required
            listen_address: "0.0.0.0:514"
    
    exporters:
        chronicle/chronicle_w_labels:
            compression: gzip
            # Adjust the path to the credentials file you downloaded in Step 1
            creds: '/path/to/ingestion-authentication-file.json'
            # Replace with your actual customer ID from Step 2
            customer_id: <customer_id>
            endpoint: malachiteingestion-pa.googleapis.com
            # Add optional ingestion labels for better organization
            ingestion_labels:
                log_type: 'SYMANTEC_VIP'
                raw_log_field: body
    
    service:
        pipelines:
            logs/source0__chronicle_w_labels-0:
                receivers:
                    - udplog
                exporters:
                    - chronicle/chronicle_w_labels
    ```
    
3.  Remplacez le port et l'adresse IP selon les besoins de votre infrastructure.
    
4.  Remplacez `<customer_id>` par le numéro client réel.
    
5.  Mettez à jour `/path/to/ingestion-authentication-file.json` avec le chemin d'accès où le fichier d'authentification a été enregistré dans la section [Obtenir le fichier d'authentification pour l'ingestion Google SecOps](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/symantec-vip?hl=fr#get-auth-file).
    

## Redémarrez l'agent Bindplane pour appliquer les modifications.

-   Pour redémarrer l'agent Bindplane sous Linux, exécutez la commande suivante :
    
    ```
    sudo systemctl restart bindplane-agent
    ```
    
-   Pour redémarrer l'agent Bindplane sous Windows, vous pouvez utiliser la console **Services** ou saisir la commande suivante :
    
    ```
    net stop BindPlaneAgent && net start BindPlaneAgent
    ```
    

## Configurer Syslog dans Symantec VIP Enterprise Gateway

1.  Connectez-vous à l'interface utilisateur Web de votre **Symantec VIP Gateway**.
2.  Accédez à **Journaux \> Configuration Syslog**.
3.  Si vous configurez Syslog pour la première fois, vous êtes invité à configurer les paramètres Syslog. Sélectionnez **Oui**.
4.  Si vous avez déjà configuré Syslog, cliquez sur **Modifier** en bas de la page.
5.  Fournissez les informations de configuration suivantes :
    -   **Syslog Facility** (Installation Syslog) : sélectionnez **LOG\_LOCAL0**.
    -   **Hôte Syslog** : saisissez l'adresse IP de l'agent Bindplane.
    -   **Port Syslog** : saisissez le numéro de port de l'agent Bindplane (par exemple, `514` pour **UDP**).
6.  Cliquez sur **Enregistrer**.
7.  Accédez à **Paramètres\> Paramètres de la console**.
8.  Fournissez les informations de configuration suivantes :
    -   **Niveau de journalisation** : sélectionnez **Info**.
    -   **Enable Syslog** (Activer Syslog) : sélectionnez **Yes** (Oui).
9.  Cliquez sur **Envoyer**.
10.  Accédez à **Paramètres \> Paramètres de vérification de l'état**.
11.  Sélectionnez **Oui** pour activer le service de vérification de l'état.
12.  Fournissez les informations de configuration suivantes :
     -   **Niveau de journalisation** : sélectionnez **Info**.
     -   **Enable Syslog** (Activer Syslog) : sélectionnez **Yes** (Oui).
13.  Cliquez sur **Envoyer**.
14.  Accédez à **User Store \> LDAP Directory Synchronization** (Magasin d'utilisateurs > Synchronisation de l'annuaire LDAP).
15.  Modifiez les informations de configuration suivantes :
     -   **Niveau de journalisation** : sélectionnez **Info**.
     -   **Enable Syslog** (Activer Syslog) : sélectionnez **Yes** (Oui).
16.  Cliquez sur **Envoyer**.

## Table de mappage UDM

Champ du journal

Mappage UDM

Logique

application

read\_only\_udm.principal.application

Valeur extraite du champ `application` par le filtre JSON.

commande

read\_only\_udm.target.process.command\_line

Valeur extraite du champ `command` par le modèle grok.

credentialType

Ce champ n'est pas directement mappé à l'UDM. Elle permet de dériver la valeur de read\_only\_udm.extensions.auth.mechanism.

données

Ce champ n'est pas directement mappé à l'UDM. Il est analysé pour extraire d'autres champs.

données2

Ce champ n'est pas directement mappé à l'UDM. Il est analysé pour extraire d'autres champs.

Date/Heure

read\_only\_udm.metadata.event\_timestamp.seconds  
read\_only\_udm.metadata.event\_timestamp.nanos

Secondes et nanosecondes depuis l'epoch extraites du champ `datetime`.

décroiss.

read\_only\_udm.metadata.description

Valeur extraite du champ `desc` par le filtre JSON.

description

read\_only\_udm.security\_result.description

Valeur extraite du champ `description` par le filtre JSON.

filename

read\_only\_udm.target.process.file.full\_path

Valeur extraite du champ `filename` par le modèle grok.

nom d'hôte

read\_only\_udm.principal.hostname

Valeur extraite du champ `hostname` par le filtre JSON.

host\_name

read\_only\_udm.intermediary.hostname

Valeur extraite du champ `host_name` par le filtre JSON.

log\_level

Ce champ n'est pas directement mappé à l'UDM. Elle permet de dériver la valeur de read\_only\_udm.security\_result.severity.

log\_type

read\_only\_udm.metadata.product\_event\_type

Valeur extraite du champ `log_type` par le filtre JSON.

Message

Ce champ n'est pas directement mappé à l'UDM. Il est analysé pour extraire d'autres champs.

opération

read\_only\_udm.security\_result.summary

Valeur extraite du champ `operation` par le modèle grok.

processid

read\_only\_udm.target.process.pid

Valeur extraite du champ `processid` par le modèle grok.

produit

read\_only\_udm.metadata.product\_name

Valeur extraite du champ `product` par le filtre JSON.

reason

read\_only\_udm.metadata.description

Valeur extraite du champ `reason` par le modèle grok.

request\_id

read\_only\_udm.target.resource.id

Valeur extraite du champ `request_id` par le modèle grok.

src\_ip

read\_only\_udm.principal.ip

Valeur extraite du champ `src_ip` par le modèle grok.

état

read\_only\_udm.metadata.description

Valeur extraite du champ `status` par le modèle grok.

résumé

read\_only\_udm.security\_result.summary

Valeur extraite du champ `summary` par le filtre JSON.

timestamp.nanos

read\_only\_udm.metadata.event\_timestamp.nanos

Nanosecondes à partir du code temporel du journal d'origine.

timestamp.seconds

read\_only\_udm.metadata.event\_timestamp.seconds

Secondes à partir du code temporel du journal d'origine.

heure

Ce champ n'est pas directement mappé à l'UDM. Elle permet de dériver les valeurs de read\_only\_udm.metadata.event\_timestamp.seconds et read\_only\_udm.metadata.event\_timestamp.nanos.

utilisateur

read\_only\_udm.target.user.userid

Valeur extraite du champ `user` par le filtre JSON ou le modèle Grok.

vendor

read\_only\_udm.metadata.vendor\_name

Valeur extraite du champ `vendor` par le filtre JSON.

read\_only\_udm.extensions.auth.mechanism

Déterminé par le champ `credentialType`. Si `credentialType` est défini sur `SMS_OTP` ou `STANDARD_OTP`, `OTP` est utilisé. Si `credentialType` correspond à l'expression régulière `PASSWORD`, `USERNAME_PASSWORD` est utilisé.

read\_only\_udm.extensions.auth.type

Si le champ `reason` correspond à l'expression régulière `LDAP`, `SSO` est utilisé. Sinon, `AUTHTYPE_UNSPECIFIED` est utilisé.

read\_only\_udm.metadata.event\_type

Déterminé par la présence de certains champs. Si `user` ou `processid` n'est pas vide, `USER_LOGIN` est utilisé. Si `user` est vide et que `src_ip` n'est pas vide ou que `0.0.0.0` n'est pas vide, `STATUS_UPDATE` est utilisé. Sinon, `GENERIC_EVENT` est utilisé.

read\_only\_udm.metadata.log\_type

Codé en dur sur `SYMANTEC_VIP`.

read\_only\_udm.security\_result.action

Déterminé par le champ `status`. Si `status` est `Authentication Success`, `GRANTED`, `Authentication Completed`, `After Services Authenticate call` ou `CHALLENGED`, `ALLOW` est utilisé. Si `status` est `DENIED`, `Acces-Reject`, `Unknown Error`, `Service Unavailable` ou `FAILED`, `BLOCK` est utilisé. Si `status` est défini sur `PUSH request sent for user` ou `Trying to fetch attribute`, `QUARANTINE` est utilisé.

read\_only\_udm.security\_result.severity

Déterminé par le champ `log_level`. Si `log_level` est défini sur `DEBUG`, `INFO` ou `AUDIT`, `INFORMATIONAL` est utilisé. Si `log_level` est défini sur `ERROR`, `ERROR` est utilisé. Si `log_level` est `WARNING`, `MEDIUM` est utilisé.

**Vous avez encore besoin d'aide ?** [Obtenez des réponses de membres de la communauté et de professionnels Google SecOps.](https://security.googlecloudcommunity.com/google-security-operations-2)

Envoyer des commentaires

Sauf indication contraire, le contenu de cette page est régi par une licence [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), et les échantillons de code sont régis par une licence [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Pour en savoir plus, consultez les [Règles du site Google Developers](https://developers.google.com/site-policies?hl=fr). Java est une marque déposée d'Oracle et/ou de ses sociétés affiliées.

Dernière mise à jour le 2026/03/17 (UTC).
