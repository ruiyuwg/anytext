Les noms de certains packages de contrôles Assured Workloads ont été modifiés. Pour en savoir plus sur ce changement de nom, consultez [Avis concernant le changement de nom du package Control](https://docs.cloud.google.com/assured-workloads/docs/overview?hl=fr#name-change).

-   [Home](https://docs.cloud.google.com/?hl=fr)
-   [Documentation](https://docs.cloud.google.com/docs?hl=fr)
-   [Security](https://docs.cloud.google.com/docs/security?hl=fr)
-   [Assured Workloads](https://docs.cloud.google.com/assured-workloads/docs?hl=fr)
-   [Guides](https://docs.cloud.google.com/assured-workloads/docs/overview?hl=fr)

Envoyer des commentaires Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.

# Périmètre de données à Taïwan

Cette page décrit l'ensemble des contrôles appliqués aux charges de travail de la limite de données de Taïwan dans Assured Workloads. Il fournit des informations détaillées sur la [résidence des données](https://docs.cloud.google.com/assured-workloads/docs/data-residency?hl=fr), les [produits Google Cloud compatibles](#products_endpoints) et leurs points de terminaison d'API, ainsi que sur les [restrictions ou limites](#restrictions_limitations) applicables à ces produits. Les informations supplémentaires suivantes s'appliquent au périmètre de données à Taïwan :

-   **Résidence des données** : le package de contrôles du périmètre de données de Taïwan définit les contrôles d'emplacement des données pour n'accepter que les [régions de Taïwan](https://docs.cloud.google.com/assured-workloads/docs/locations?hl=fr#apac). Pour en savoir plus, consultez la section [Contraintes liées aux règles d'administration à l'échelle deGoogle Cloud](#org_cloud).
-   **Assistance** : les services d'assistance technique pour les charges de travail liées à la limite de données de Taïwan sont disponibles avec les abonnements [Cloud Customer Care](https://docs.cloud.google.com/support?hl=fr) Standard, Enhanced ou Premium. Les demandes d'assistance pour les charges de travail liées à la limite de données de Taïwan sont transmises au personnel d'assistance mondial.
-   **Tarification** : le package de contrôles de la limite de données de Taïwan est inclus dans le _niveau sans frais_ d'Assured Workloads, qui n'entraîne aucun frais supplémentaire. Pour en savoir plus, consultez la page [Tarifs d'Assured Workloads](https://cloud.google.com/assured-workloads/pricing?hl=fr).

## Produits et points de terminaison d'API compatibles

Sauf indication contraire, les utilisateurs peuvent accéder à tous les produits compatibles via la console Google Cloud . Les restrictions ou limitations qui affectent les fonctionnalités d'un produit compatible, y compris celles appliquées par le biais des [paramètres de contrainte des règles d'administration](https://docs.cloud.google.com/resource-manager/docs/organization-policy/overview?hl=fr#how_organization_policy_works), sont listées dans le tableau suivant.

Si un produit n'est pas listé, cela signifie qu'il n'est pas pris en charge et qu'il ne répond pas aux exigences de contrôle pour la limite de données de Taïwan. Il n'est pas recommandé d'utiliser des produits non compatibles sans avoir fait preuve de diligence raisonnable et sans avoir parfaitement compris vos responsabilités dans le [modèle de responsabilité partagée](https://docs.cloud.google.com/assured-workloads/docs/shared-responsibility?hl=fr). Avant d'utiliser un produit non compatible, assurez-vous d'être conscient des risques associés et de les accepter, comme les impacts négatifs sur la résidence ou la souveraineté des données.

Les produits non compatibles peuvent partager un point de terminaison de service d'API avec les produits compatibles, ce qui les rend disponibles pour tous les utilisateurs.

Produit concerné

points de terminaison de l'API

Restrictions ou limites

[Access Approval](https://docs.cloud.google.com/assured-workloads/access-approval?hl=fr)

`accessapproval.googleapis.com`  

Aucun

[Access Context Manager](https://docs.cloud.google.com/access-context-manager?hl=fr)

`accesscontextmanager.googleapis.com`  

Aucun

[Access Transparency](https://docs.cloud.google.com/assured-workloads/access-transparency?hl=fr)

`accessapproval.googleapis.com`  

Aucun

[AlloyDB pour PostgreSQL](https://docs.cloud.google.com/alloydb?hl=fr)

`alloydb.googleapis.com`  

Aucun

[Cloud Service Mesh](https://docs.cloud.google.com/service-mesh?hl=fr)

`mesh.googleapis.com`  
`meshca.googleapis.com`  
`meshconfig.googleapis.com`  

Aucun

[App Hub](https://docs.cloud.google.com/app-hub/docs/overview?hl=fr)

`apphub.googleapis.com`  

Aucun

[Artifact Registry](https://docs.cloud.google.com/artifact-registry?hl=fr)

`artifactregistry.googleapis.com`  

Aucun

[AutoML Tables](https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide?hl=fr)

`automl.googleapis.com`  

Aucun

[Sauvegarde pour GKE](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke?hl=fr)

`gkebackup.googleapis.com`  

Aucun

[BigQuery](https://docs.cloud.google.com/bigquery?hl=fr)

`bigquery.googleapis.com`  
`bigqueryconnection.googleapis.com`  
`bigquerydatapolicy.googleapis.com`  
`bigquerydatatransfer.googleapis.com`  
`bigquerymigration.googleapis.com`  
`bigqueryreservation.googleapis.com`  
`bigquerystorage.googleapis.com`  

[Fonctionnalités concernées](#features_bigquery)

[Bigtable](https://docs.cloud.google.com/bigtable?hl=fr)

`bigtable.googleapis.com`  
`bigtableadmin.googleapis.com`  

Aucun

[Autorisation binaire](https://docs.cloud.google.com/binary-authorization?hl=fr)

`binaryauthorization.googleapis.com`  

Aucun

[Certificate Authority Service](https://docs.cloud.google.com/certificate-authority-service?hl=fr)

`privateca.googleapis.com`  

Aucun

[Gestionnaire de certificats](https://docs.cloud.google.com/certificate-manager/docs/overview?hl=fr)

`certificatemanager.googleapis.com`  

Aucun

[Inventaire des éléments cloud](https://docs.cloud.google.com/asset-inventory?hl=fr)

`cloudasset.googleapis.com`  

Aucun

[Cloud Build](https://docs.cloud.google.com/build/docs?hl=fr)

`cloudbuild.googleapis.com`  

Aucun

[Cloud Composer](https://docs.cloud.google.com/composer?hl=fr)

`composer.googleapis.com`  

Aucun

[Cloud Domains](https://docs.cloud.google.com/domains/docs/overview?hl=fr)

`domains.googleapis.com`  

Aucun

[Cloud DNS](https://docs.cloud.google.com/dns?hl=fr)

`dns.googleapis.com`  

Aucun

[Cloud Data Fusion](https://docs.cloud.google.com/data-fusion?hl=fr)

`datafusion.googleapis.com`  

Aucun

[Cloud Deploy](https://docs.cloud.google.com/deploy/docs/overview?hl=fr)

`clouddeploy.googleapis.com`  

Aucun

[Cloud External Key Manager (Cloud EKM)](https://docs.cloud.google.com/kms/docs/ekm?hl=fr)

`cloudkms.googleapis.com`  

Aucun

[Cloud HSM](https://docs.cloud.google.com/kms/docs/hsm?hl=fr)

`cloudkms.googleapis.com`  

Aucun

[Cloud Interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect?hl=fr)

`compute.googleapis.com`  

Aucun

[Cloud Key Management Service (Cloud KMS)](https://docs.cloud.google.com/kms?hl=fr)

`cloudkms.googleapis.com`  

Aucun

[Cloud Load Balancing](https://docs.cloud.google.com/load-balancing?hl=fr)

`compute.googleapis.com`  

Aucun

[Cloud Logging](https://docs.cloud.google.com/logging?hl=fr)

`logging.googleapis.com`  

[Fonctionnalités concernées](#features_logging)

[Cloud Monitoring](https://docs.cloud.google.com/monitoring?hl=fr)

`monitoring.googleapis.com`  

Aucun

[Cloud NAT](https://docs.cloud.google.com/nat?hl=fr)

`compute.googleapis.com`  

Aucun

[API Cloud OS Login](https://docs.cloud.google.com/compute/docs/oslogin?hl=fr)

`oslogin.googleapis.com`  

Aucun

[Cloud Router](https://docs.cloud.google.com/network-connectivity/docs/router?hl=fr)

`compute.googleapis.com`  

Aucun

[Cloud Run](https://docs.cloud.google.com/run/docs?hl=fr)

`run.googleapis.com`  

[Fonctionnalités concernées](#features_run)

[Cloud Run Functions](https://docs.cloud.google.com/functions/docs?hl=fr)

`run.googleapis.com`  

Aucun

[Cloud SQL](https://docs.cloud.google.com/sql?hl=fr)

`sqladmin.googleapis.com`  

Aucun

[Cloud SQL pour PostgreSQL](https://docs.cloud.google.com/sql/docs/postgres?hl=fr)

`sqladmin.googleapis.com`  

Aucun

[Cloud Storage](https://docs.cloud.google.com/storage?hl=fr)

`storage.googleapis.com`  

Aucun

[Cloud Tasks](https://docs.cloud.google.com/tasks?hl=fr)

`cloudtasks.googleapis.com`  

Aucun

[Cloud VPN](https://docs.cloud.google.com/vpn?hl=fr)

`compute.googleapis.com`  

Aucun

[API Cloud Vision](https://docs.cloud.google.com/vision?hl=fr)

`vision.googleapis.com`  

Aucun

[Cloud Workstations](https://docs.cloud.google.com/workstations/docs?hl=fr)

`workstations.googleapis.com`  

Aucun

[Compliance Manager](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview?hl=fr)

`cloudsecuritycompliance.googleapis.com`  

Aucun

[Compute Engine](https://docs.cloud.google.com/compute-engine?hl=fr)

`compute.googleapis.com`  

[Fonctionnalités concernées](#features_compute) et [contraintes liées aux règles d'administration](#org_compute)

[Config Sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview?hl=fr)

`anthosconfigmanagement.googleapis.com`  

Aucun

[Connect](https://docs.cloud.google.com/anthos/multicluster-management/connect?hl=fr)

`gkeconnect.googleapis.com`  

Aucun

[Sensitive Data Protection](https://docs.cloud.google.com/dlp?hl=fr)

`dlp.googleapis.com`  

Aucun

[Database Center](https://docs.cloud.google.com/database-center/docs/overview?hl=fr)

`Not applicable`  

Aucun

[Dataflow](https://docs.cloud.google.com/dataflow?hl=fr)

`dataflow.googleapis.com`  
`datapipelines.googleapis.com`  

Aucun

[Dataform](https://docs.cloud.google.com/dataform?hl=fr)

`dataform.googleapis.com`  

Aucun

[Dataplex Universal Catalog](https://docs.cloud.google.com/dataplex/docs?hl=fr)

`dataplex.googleapis.com`  
`datalineage.googleapis.com`  

Aucun

[Dataproc](https://docs.cloud.google.com/dataproc?hl=fr)

`dataproc-control.googleapis.com`  
`dataproc.googleapis.com`  

Aucun

[Contacts essentiels](https://docs.cloud.google.com/resource-manager/docs/managing-notification-contacts?hl=fr)

`essentialcontacts.googleapis.com`  

Aucun

[Eventarc](https://docs.cloud.google.com/eventarc?hl=fr)

`eventarc.googleapis.com`  

Aucun

[Filestore](https://docs.cloud.google.com/filestore?hl=fr)

`file.googleapis.com`  

Aucun

[Règles de sécurité Firebase](https://firebase.google.com/docs/rules?hl=fr)

`firebaserules.googleapis.com`  

Aucun

[Firestore](https://docs.cloud.google.com/firestore?hl=fr)

`firestore.googleapis.com`  

Aucun

[GKE Hub](https://docs.cloud.google.com/anthos/fleet-management/docs/reference/rest?hl=fr)

`gkehub.googleapis.com`  

Aucun

[Service d'identité GKE](https://docs.cloud.google.com/anthos/identity?hl=fr)

`anthosidentityservice.googleapis.com`  

Aucun

[Streaming d'images GKE](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/image-streaming?hl=fr)

`containerfilesystem.googleapis.com`  

Aucun

[IA générative sur Vertex AI](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/overview?hl=fr)

`aiplatform.googleapis.com`  

Aucun

[Google Cloud Armor](https://docs.cloud.google.com/armor?hl=fr)

`compute.googleapis.com`  
`networksecurity.googleapis.com`  

[Fonctionnalités concernées](#features_armor)

[Google Cloud Managed Service pour Apache Kafka](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview?hl=fr)

`managedkafka.googleapis.com`  

Aucun

[Google Cloud NetApp Volumes](https://docs.cloud.google.com/netapp/volumes/docs?hl=fr)

`netapp.googleapis.com`  

[Fonctionnalités concernées](#features_netapp_volumes)

[Google Kubernetes Engine (GKE)](https://docs.cloud.google.com/kubernetes-engine?hl=fr)

`container.googleapis.com`  
`containersecurity.googleapis.com`  

Aucun

[Solution SIEM pour les opérations de sécurité Google](https://docs.cloud.google.com/security/products/security-information-event-management?hl=fr)

`chronicle.googleapis.com`  
`chronicleservicemanager.googleapis.com`  

Aucun

[Google Security Operations SOAR](https://docs.cloud.google.com/chronicle/docs/soar?hl=fr)

`Not applicable`  

Aucun

[Identity and Access Management (IAM)](https://docs.cloud.google.com/iam?hl=fr)

`iam.googleapis.com`  

Aucun

[Identity-Aware Proxy (IAP)](https://docs.cloud.google.com/iap?hl=fr)

`iap.googleapis.com`  

Aucun

[Infrastructure Manager](https://docs.cloud.google.com/infrastructure-manager/docs?hl=fr)

`config.googleapis.com`  

Aucun

[Looker (Google Cloud Core)](https://docs.cloud.google.com/looker/docs/looker-core-overview?hl=fr)

`looker.googleapis.com`  

Aucun

[Memorystore pour Redis](https://docs.cloud.google.com/memorystore/docs/redis?hl=fr)

`redis.googleapis.com`  

Aucun

[Network Connectivity Center](https://docs.cloud.google.com/network-connectivity?hl=fr)

`networkconnectivity.googleapis.com`  

Aucun

[Service de règles d'administration](https://docs.cloud.google.com/resource-manager/docs/organization-policy/using-constraints?hl=fr)

`orgpolicy.googleapis.com`  

Aucun

[Persistent Disk](https://docs.cloud.google.com/persistent-disk?hl=fr)

`compute.googleapis.com`  

Aucun

[Personalized Service Health](https://docs.cloud.google.com/service-health/docs/overview?hl=fr)

`servicehealth.googleapis.com`  

Aucun

[Pub/Sub](https://docs.cloud.google.com/pubsub?hl=fr)

`pubsub.googleapis.com`  

Aucun

[Resource Manager](https://docs.cloud.google.com/resource-manager?hl=fr)

`cloudresourcemanager.googleapis.com`  

Aucun

[Secure Source Manager](https://docs.cloud.google.com/secure-source-manager?hl=fr)

`securesourcemanager.googleapis.com`  

Aucun

[Accès au VPC sans serveur](https://docs.cloud.google.com/vpc/docs/configure-serverless-vpc-access?hl=fr)

`vpcaccess.googleapis.com`  

Aucun

[Speech-to-Text](https://docs.cloud.google.com/speech-to-text?hl=fr)

`speech.googleapis.com`  

Aucun

[Service de transfert de stockage](https://docs.cloud.google.com/storage-transfer/docs?hl=fr)

`storagetransfer.googleapis.com`  

Aucun

[Text-to-Speech](https://docs.cloud.google.com/text-to-speech?hl=fr)

`texttospeech.googleapis.com`  

Aucun

[Cloud Service Mesh](https://docs.cloud.google.com/traffic-director?hl=fr)

`trafficdirector.googleapis.com`  

Aucun

[VM Manager](https://docs.cloud.google.com/compute/vm-manager/docs/overview?hl=fr)

`osconfig.googleapis.com`  

Aucun

[VPC Service Controls](https://docs.cloud.google.com/vpc-service-controls?hl=fr)

`accesscontextmanager.googleapis.com`  

Aucun

[Vertex AI Batch Prediction](https://docs.cloud.google.com/vertex-ai/docs/predictions/get-batch-predictions?hl=fr)

`aiplatform.googleapis.com`  

Aucun

[Vertex AI Model Monitoring](https://docs.cloud.google.com/vertex-ai/docs/model-monitoring?hl=fr)

`aiplatform.googleapis.com`  

Aucun

[Vertex AI Model Registry](https://docs.cloud.google.com/vertex-ai/docs/model-registry?hl=fr)

`aiplatform.googleapis.com`  

Aucun

[Prédiction en ligne Vertex AI](https://docs.cloud.google.com/vertex-ai/docs/predictions/get-online-predictions?hl=fr)

`aiplatform.googleapis.com`  

Aucun

[Vertex AI Pipelines](https://docs.cloud.google.com/vertex-ai/docs/pipelines?hl=fr)

`aiplatform.googleapis.com`  

Aucun

[Vertex AI Search](https://docs.cloud.google.com/enterprise-search?hl=fr)

`discoveryengine.googleapis.com`  

Aucun

[Vertex AI Training](https://docs.cloud.google.com/vertex-ai/docs/training-overview?hl=fr)

`aiplatform.googleapis.com`  

Aucun

[Cloud privé virtuel (VPC)](https://docs.cloud.google.com/vpc?hl=fr)

`compute.googleapis.com`  

Aucun

[Web Risk](https://docs.cloud.google.com/web-risk/docs?hl=fr)

`webrisk.googleapis.com`  

Aucun

## Restrictions et limitations

Les sections suivantes décrivent les restrictions ou limites générales ou spécifiques aux produits pour les fonctionnalités, y compris les contraintes liées aux règles d'administration qui sont définies par défaut sur les dossiers de la limite de données de Taïwan. Google CloudD'autres contraintes de règles d'administration applicables, même si elles ne sont pas définies par défaut, peuvent fournir une défense en profondeur supplémentaire pour mieux protéger les ressources de votre organisation Google Cloud .

Nous vous recommandons vivement de ne pas modifier les valeurs des contraintes de règles d'administration requises répertoriées dans les sections suivantes. Cela pourrait compromettre la résidence des données. Lorsque ce type de modification est effectué, il est difficile, voire impossible, de revenir en arrière. Avant de continuer, assurez-vous de bien comprendre les conséquences de la modification de la valeur d'une contrainte de règle d'administration.  
  
Assurez-vous également que tous les mécanismes automatisés utilisés par votre organisation pour gérer les règles d'administration sont mis à jour afin d'empêcher la modification involontaire de ces valeurs.

### Google Cloudde large

#### Contraintes liées aux règles d'administration à l'échelle deGoogle Cloud

Les [contraintes de règles d'administration](https://docs.cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints?hl=fr) suivantes s'appliquent à Google Cloud.

Contrainte liée aux règles d'administration

Description

[`gcp.resourceLocations`](https://docs.cloud.google.com/resource-manager/docs/organization-policy/defining-locations?hl=fr)

Définissez les emplacements suivants dans la liste `allowedValues` :

-   `asia-east1`

Cette valeur limite la création de ressources aux valeurs sélectionnées. Si cette option est définie, aucune ressource ne peut être créée dans d'autres régions, emplacements multirégionaux ou emplacements en dehors de la sélection. Consultez la page [Services compatibles avec les emplacements de ressources](https://docs.cloud.google.com/resource-manager/docs/organization-policy/defining-locations-supported-services?hl=fr) pour obtenir la liste des ressources qui peuvent être limitées par la contrainte de règle d'administration "Emplacements des ressources". En effet, certaines ressources peuvent être hors champ et ne pas pouvoir être limitées.  
  
Modifier cette valeur pour la rendre moins restrictive compromet potentiellement la résidence des données en autorisant la création ou le stockage de données en dehors d'une limite de données conforme.

[`gcp.restrictServiceUsage`](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-resources?hl=fr)

Définissez-le pour autoriser tous les [produits et points de terminaison d'API compatibles](#products_endpoints).  
  
Détermine les services pouvant être utilisés en limitant l'accès du runtime à leurs ressources. Pour en savoir plus, consultez [Restreindre l'utilisation des ressources](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-resources?hl=fr).

[`gcp.restrictTLSVersion`](https://docs.cloud.google.com/assured-workloads/docs/restrict-tls-versions?hl=fr)

Définissez les versions TLS suivantes sur "Refuser" :  

-   `TLS_1_0`
-   `TLS_1_1`

Pour en savoir plus, consultez [Restreindre les versions TLS](https://docs.cloud.google.com/assured-workloads/docs/restrict-tls-versions?hl=fr).

### BigQuery

#### Fonctionnalités BigQuery concernées

Fonctionnalité

Description

Activer BigQuery dans un nouveau dossier

BigQuery est compatible, mais n'est pas automatiquement activé lorsque vous créez un dossier Assured Workloads en raison d'un processus de configuration interne. Cette opération prend normalement dix minutes, mais peut durer beaucoup plus longtemps dans certaines circonstances. Pour vérifier si le processus est terminé et activer BigQuery, procédez comme suit :  

1.  Dans la console Google Cloud , accédez à la page **Assured Workloads**.
    
    [Accéder à Assured Workloads](https://console.cloud.google.com/compliance/assuredworkloads?hl=fr)
    
2.  Sélectionnez votre nouveau dossier Assured Workloads dans la liste.
3.  Sur la page **Informations sur le dossier**, dans la section **Services autorisés**, cliquez sur **Examiner les mises à jour disponibles**.
4.  Dans le volet **Services autorisés**, vérifiez les services à ajouter à la règle d'administration [Restriction d'utilisation des ressources](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-resources?hl=fr) pour le dossier. Si des services BigQuery sont listés, cliquez sur **Autoriser les services** pour les ajouter.  
      
    Si les services BigQuery ne sont pas listés, attendez la fin du processus interne. Si les services ne sont pas listés dans les 12 heures suivant la création du dossier, contactez l'[assistance client Cloud](https://docs.cloud.google.com/support?hl=fr).

Une fois le processus d'activation terminé, vous pouvez utiliser BigQuery dans votre dossier Assured Workloads.

Gemini dans BigQuery n'est pas compatible avec Assured Workloads.

Fonctionnalités non compatibles

Les fonctionnalités BigQuery suivantes ne sont pas compatibles et ne doivent pas être utilisées dans la CLI BigQuery. Il vous incombe de ne pas les utiliser dans BigQuery pour Assured Workloads.  

-   Interaction avec des sources de données distantes
-   Les [modèles BQML entraînés en externe](https://docs.cloud.google.com/bigquery/docs/bqml-introduction?hl=fr#externally_trained_models) ne sont pas acceptés. Les [modèles BQML entraînés en interne](https://docs.cloud.google.com/bigquery/docs/bqml-introduction?hl=fr#internally_trained_models) sont acceptés.
-   Masquage dynamique des données
-   Exportation GDrive
-   [Fonctions à distance](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions?hl=fr#overview)
-   [Requêtes enregistrées](https://docs.cloud.google.com/bigquery/docs/work-with-saved-queries?hl=fr)
-   Planification des workflows
-   Les [notebooks](https://docs.cloud.google.com/bigquery/docs/create-notebooks?hl=fr) ne sont pas compatibles avec BigQuery Studio.
-   Gemini dans BigQuery n'est pas compatible.

[CLI BigQuery](https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool?hl=fr)

L'interface de ligne de commande BigQuery est compatible.  
  

SDK Google Cloud

Vous devez utiliser Google Cloud SDK version 403.0.0 ou ultérieure pour garantir la régionalisation des données techniques. Pour vérifier votre version actuelle de Google Cloud SDK, exécutez `gcloud --version`, puis `gcloud components update` pour passer à la version la plus récente.

Commandes d'administration

BigQuery désactivera les API non compatibles, mais les administrateurs disposant des autorisations suffisantes pour créer des dossiers Assured Workloads peuvent activer une API non compatible. Si cela se produit, vous serez informé d'un éventuel non-respect des règles via le [tableau de bord de surveillance Assured Workloads](https://docs.cloud.google.com/assured-workloads/docs/monitor-folder?hl=fr).

Charger des données

Les [connecteurs du service de transfert de données BigQuery](https://docs.cloud.google.com/bigquery/docs/dts-introduction?hl=fr#supported_data_sources) pour les applications SaaS (Software as a Service) de Google, les fournisseurs de stockage cloud externes et les entrepôts de données ne sont pas compatibles. Il vous incombe de ne pas utiliser les connecteurs du service de transfert de données BigQuery pour les charges de travail liées à la limite de données de Taïwan.

[Transferts tiers](https://docs.cloud.google.com/bigquery/docs/third-party-transfer?hl=fr)

BigQuery ne vérifie pas la compatibilité des transferts tiers avec le service de transfert de données BigQuery. Il vous incombe de vérifier la compatibilité lorsque vous utilisez un transfert tiers pour le service de transfert de données BigQuery.

Modèles BQML non conformes

Les [modèles BQML entraînés en externe](https://docs.cloud.google.com/bigquery/docs/bqml-introduction?hl=fr#externally_trained_models) ne sont pas acceptés.

Tâches de requête

Les jobs de requête ne doivent être créés que dans des dossiers Assured Workloads.

Requêtes sur des ensembles de données dans d'autres projets

BigQuery n'empêche pas d'interroger les ensembles de données Assured Workloads à partir de projets non Assured Workloads. Vous devez vous assurer que toute requête qui effectue une lecture ou une jointure sur des données Assured Workloads est placée dans des dossiers Assured Workloads. Vous pouvez spécifier un [nom de table complet](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference?hl=fr#bq_query) pour le résultat de la requête à l'aide de `projectname.dataset.table` dans la CLI BigQuery.

Cloud Logging

BigQuery utilise Cloud Logging pour certaines de vos données de journaux. Vous devez désactiver vos buckets de journaux `_default` ou limiter les buckets `_default` aux régions concernées pour rester conforme à l'aide de la commande suivante :  
  
`gcloud alpha logging settings update --organization=ORGANIZATION_ID --disable-default-sink`  
  
Pour en savoir plus, consultez [Régionaliser vos journaux](https://docs.cloud.google.com/logging/docs/regionalized-logs?hl=fr).

### Compute Engine

#### Fonctionnalités Compute Engine concernées

Fonctionnalité

Description

[Environnement invité](https://docs.cloud.google.com/compute/docs/images/guest-environment?hl=fr)

Il est possible que les scripts, les daemons et les binaires inclus dans l'environnement invité accèdent aux données non chiffrées au repos et en cours d'utilisation. Selon la configuration de votre VM, les mises à jour de ce logiciel peuvent être installées par défaut. Pour en savoir plus sur le contenu, le code source et d'autres informations spécifiques à chaque package, consultez [Environnement invité](https://docs.cloud.google.com/compute/docs/images/guest-environment?hl=fr).  
  
Ces composants vous aident à respecter la souveraineté des données grâce à des contrôles et des processus de sécurité internes. Toutefois, si vous souhaitez exercer un contrôle supplémentaire, vous pouvez également organiser vos propres images ou agents, et éventuellement utiliser la contrainte de règle d'administration `compute.trustedImageProjects`.  
  
Pour en savoir plus, consultez [Créer une image personnalisée](https://docs.cloud.google.com/compute/docs/images/building-custom-os?hl=fr).

[Règles d'OS dans VM Manager](https://docs.cloud.google.com/compute/vm-manager/docs/os-policies/working-with-os-policies?hl=fr)

Les scripts intégrés et les fichiers de sortie binaires dans les fichiers de règles d'OS ne sont pas chiffrés à l'aide de clés de chiffrement gérées par le client (CMEK). N'incluez aucune information sensible dans ces fichiers. Envisagez de stocker ces scripts et fichiers de sortie dans des buckets Cloud Storage. Pour en savoir plus, consultez [Exemples de règles d'OS](https://docs.cloud.google.com/compute/vm-manager/docs/os-policies/working-with-os-policies?hl=fr#os-policy).  
  
Si vous souhaitez limiter la création ou la modification de ressources de règles d'OS qui utilisent des scripts intégrés ou des fichiers de sortie binaires, activez la contrainte de règle d'administration `constraints/osconfig.restrictInlineScriptAndOutputFileUsage`.  
  
Pour en savoir plus, consultez [Contraintes pour OS Config](https://docs.cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints?hl=fr#constraints-for-specific-services).

#### Contraintes liées aux règles d'administration Compute Engine

Contrainte liée aux règles d'administration

Description

`compute.disableGlobalCloudArmorPolicy`

Défini sur **True**.  
  
Désactive la création de nouvelles [stratégies de sécurité Google Cloud Armor](https://docs.cloud.google.com/armor/docs/security-policy-overview?hl=fr) globales, ainsi que l'ajout ou la modification de règles dans les stratégies de sécurité Google Cloud Armor globales existantes. Cette contrainte n'empêche pas la suppression de règles, ni la suppression ou la modification de la description et du recensement des stratégies de sécurité Google Cloud Armor globales. Cette contrainte n'a aucune incidence sur les règles de sécurité Google Cloud Armor régionales. Toutes les stratégies de sécurité globales et régionales qui existaient avant l'application de cette contrainte restent en vigueur.  
  

`compute.restrictNonConfidentialComputing`  
  

(Facultatif) Aucune valeur n'est définie. Définissez cette valeur pour renforcer la défense en profondeur. Pour en savoir plus, consultez la [documentation sur Confidential VM](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/about-cvm?hl=fr).

`compute.trustedImageProjects`  
  

(Facultatif) Aucune valeur n'est définie. Définissez cette valeur pour renforcer la défense en profondeur.  
  
Définir cette valeur limite le stockage d'images et l'instanciation de disques à la liste de projets spécifiée. Cette valeur affecte la souveraineté des données en empêchant l'utilisation d'images ou d'agents non autorisés.

### Cloud Logging

#### Fonctionnalités Cloud Logging concernées

Pour utiliser Cloud Logging avec des clés de chiffrement gérées par le client (CMEK), vous devez suivre les étapes décrites sur la page [Activer les CMEK pour une organisation](https://docs.cloud.google.com/logging/docs/routing/managed-encryption?hl=fr#enable) de la documentation Cloud Logging.

Fonctionnalité

Description

[Récepteurs de journaux](https://docs.cloud.google.com/logging/docs/export/configure_export_v2?hl=fr)

Les filtres ne doivent pas contenir de données client.  
  
Les récepteurs de journaux incluent des filtres stockés en tant que configuration. Ne créez pas de filtres contenant des données client.

[Affichage en direct des dernières lignes des entrées de journal](https://docs.cloud.google.com/logging/docs/view/streaming-live-tailing?hl=fr)

Les filtres ne doivent pas contenir de données client.  
  
Une session de affichage des dernières lignes en direct inclut un filtre stocké en tant que configuration. La journalisation continue ne stocke aucune donnée d'entrée de journal, mais peut interroger et transmettre des données entre les régions. Ne créez pas de filtres contenant des données client.

### Google Cloud NetApp Volumes

#### Fonctionnalités Google Cloud NetApp Volumes concernées

Fonctionnalité

Description

[Niveaux de service disponibles](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels?hl=fr)

Le périmètre de données à Taïwan est compatible avec les niveaux de service suivants :  

-   Standard
-   Premium
-   Extrême
-   Flex, uniquement pour le type **Fichier**. Le type **Unifié** du niveau de service Flex n'est pas compatible.

## Étapes suivantes

-   Découvrez comment [créer un dossier Assured Workloads](https://docs.cloud.google.com/assured-workloads/docs/create-folder?hl=fr).
-   Comprendre les [tarifs Assured Workloads](https://cloud.google.com/assured-workloads/pricing?hl=fr)

Envoyer des commentaires

Sauf indication contraire, le contenu de cette page est régi par une licence [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), et les échantillons de code sont régis par une licence [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Pour en savoir plus, consultez les [Règles du site Google Developers](https://developers.google.com/site-policies?hl=fr). Java est une marque déposée d'Oracle et/ou de ses sociétés affiliées.

Dernière mise à jour le 2026/03/17 (UTC).
