-   [Home](https://docs.cloud.google.com/?hl=it)
-   [Documentation](https://docs.cloud.google.com/docs?hl=it)
-   [Data analytics](https://docs.cloud.google.com/docs/data?hl=it)
-   [Pub/Sub](https://docs.cloud.google.com/pubsub/docs?hl=it)
-   [Guide](https://docs.cloud.google.com/pubsub/docs/overview?hl=it)

Invia feedback

# Crea un argomento di importazione Amazon Managed Streaming for Apache Kafka Mantieni tutto organizzato con le raccolte Salva e classifica i contenuti in base alle tue preferenze.

Un argomento di importazione di Amazon Managed Streaming for Apache Kafka (Amazon MSK) ti consente di importare continuamente dati da [Amazon MSK](https://aws.amazon.com/msk/) come origine esterna e in Pub/Sub. Poi puoi trasmettere i dati in streaming a una qualsiasi delle destinazioni supportate da Pub/Sub.

**Nota:** in Pub/Sub possono essere importati solo i [cluster Amazon MSK di cui è stato eseguito il provisioning](https://docs.aws.amazon.com/msk/latest/developerguide/msk-provisioned.html). Inoltre, i cluster devono essere pubblici. I cluster dietro i VPC privati non sono supportati.

Questo documento mostra come creare e gestire gli argomenti di importazione di Amazon MSK. Per creare un argomento standard, vedi [Creare un argomento standard](https://docs.cloud.google.com/pubsub/docs/create-topic?hl=it).

Per saperne di più sugli argomenti di importazione, consulta [Informazioni sugli argomenti di importazione](https://docs.cloud.google.com/pubsub/docs/publish-message-overview?hl=it#import-topic-overview).

## Prima di iniziare

-   Scopri di più sulla [procedura di pubblicazione Pub/Sub](https://docs.cloud.google.com/pubsub/docs/publish-message-overview?hl=it).
    
-   Configura i [ruoli e le autorizzazioni richiesti per gestire gli argomenti di importazione di Amazon MSK](#roles-permissions), tra cui:
    
    -   [Aggiungi il ruolo Pub/Sub Publisher al service account Pub/Sub](#add-publisher-role)
        
    -   [Aggiungi il ruolo di service agent Pub/Sub al service account Pub/Sub](#add-service-agent-role), se non è già stato concesso.
        
    -   [Aggiungere il ruolo Utente account di servizio al service account](#add-service-account-role)
        
-   Configura la [federazione delle identità per i carichi di lavoro](#federated-identity) in modo che Google Cloud possa accedere al servizio di streaming esterno.
    

### Ruoli e autorizzazioni richiesti

Per ottenere le autorizzazioni necessarie per creare e gestire argomenti di importazione Amazon MSK, chiedi all'amministratore di concederti il ruolo IAM [Pub/Sub Editor](https://docs.cloud.google.com/iam/docs/roles-permissions/pubsub?hl=it#pubsub.editor) (`roles/pubsub.editor`) nell'argomento o nel progetto. Per saperne di più sulla concessione dei ruoli, consulta [Gestisci l'accesso a progetti, cartelle e organizzazioni](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access?hl=it).

Questo ruolo predefinito contiene le autorizzazioni necessarie per creare e gestire gli argomenti di importazione di Amazon MSK. Per vedere quali sono esattamente le autorizzazioni richieste, espandi la sezione **Autorizzazioni obbligatorie**:

#### Autorizzazioni obbligatorie

Per creare e gestire gli argomenti di importazione di Amazon MSK sono necessarie le seguenti autorizzazioni:

-   Crea un argomento di importazione: `pubsub.topics.create`
-   Elimina un argomento di importazione: `pubsub.topics.delete`
-   Recupera un argomento di importazione: `pubsub.topics.get`
-   Elenca un argomento di importazione: `pubsub.topics.list`
-   Pubblica in un argomento di importazione: `pubsub.topics.publish and pubsub.serviceAgent`
-   Aggiorna un argomento di importazione: `pubsub.topics.update`
-   Recupera il policy IAM per un argomento di importazione: `pubsub.topics.getIamPolicy`
-   Configura la [policy IAM](https://docs.cloud.google.com/iam/docs/reference/rest/v1/Policy?hl=it) per un argomento di importazione: `` `pubsub.topics.setIamPolicy` ``

Potresti anche ottenere queste autorizzazioni con [ruoli personalizzati](https://docs.cloud.google.com/iam/docs/creating-custom-roles?hl=it) o altri [ruoli predefiniti](https://docs.cloud.google.com/iam/docs/roles-overview?hl=it#predefined).

Puoi configurare il controllo dell'accesso a livello di progetto e di singola risorsa.

## Configura l'identità federata per accedere ad Amazon MSK

La federazione delle identità per i workload consente ai servizi Google Cloud di accedere ai workload in esecuzione al di fuori di Google Cloud. Con la federazione delle identità, non devi mantenere o trasmettere le credenziali a Google Cloud per accedere alle tue risorse in altri cloud. Puoi invece utilizzare le identità dei workload stessi per autenticarti a Google Cloud e accedere alle risorse.

### Crea un account di servizio in Google Cloud

Questo passaggio è facoltativo. Se hai già un account di servizio, puoi utilizzarlo in questa procedura anziché crearne uno nuovo. Se utilizzi un account di servizio esistente, vai a [Registra l'ID univoco del service account](#record-service-account) per il passaggio successivo.

Per gli argomenti di importazione di Amazon MSK, Pub/Sub utilizza il account di serviziot come identità per accedere alle risorse da AWS.

Per ulteriori informazioni sulla creazione di un account di servizio, inclusi prerequisiti, ruoli e autorizzazioni richiesti e linee guida per la denominazione, consulta [Creare service account](https://docs.cloud.google.com/iam/docs/service-accounts-create?hl=it). Dopo aver creato un account di servizio, potrebbe essere necessario attendere 60 secondi o più prima di utilizzarlo. Questo comportamento si verifica perché le operazioni di lettura sono alla fine coerenti; potrebbe essere necessario del tempo prima che il nuovoaccount di serviziot diventi visibile.

### Registra l'ID univoco del account di servizio

Per configurare un ruolo nella console AWS, è necessario un ID univoco del account di servizio.

1.  Nella console Google Cloud , vai alla pagina dei dettagli del **service account**.
    
    [Vai all'account di servizio](https://console.cloud.google.com/iam-admin/serviceaccounts?hl=it)
    
2.  Fai clic sul account di servizio che hai appena creato o su quello che intendi utilizzare.
    
3.  Nella pagina **Dettagli del service account**, annota il numero ID univoco.
    
    L'ID è necessario come parte del flusso di lavoro per configurare [un ruolo nella console AWS](#create_id).
    

### Aggiungi il ruolo di creatore token account di servizio al account di servizio Pub/Sub

**Nota** :Pub/Sub crea e gestisce un account di servizio per ogni progetto. Il account di servizio ha il seguente formato: `service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com`. Esegui questa procedura solo se il account di servizio Pub/Sub non dispone del ruolo Service Agent Pub/Sub (`roles/pubsub.serviceAgent`).

Il **ruolo Creatore token service account** (`roles/iam.serviceAccountTokenCreator`) consente alle entità [di creare credenziali di breve durata](https://docs.cloud.google.com/iam/docs/create-short-lived-credentials-direct?hl=it) per un account di servizio. Questi token o credenziali vengono utilizzati per simulare l'identità delaccount di serviziot.

Per saperne di più sulla simulazione dell'identità dei account di servizio, consulta [Simulazione dell'identità dei service account](https://docs.cloud.google.com/iam/docs/service-account-impersonation?hl=it).

Puoi anche aggiungere il **ruolo Pub/Sub Publisher** (`roles/pubsub.publisher`) durante questa procedura. Per saperne di più sul ruolo e sul motivo per cui lo stai aggiungendo, consulta [Aggiungi il ruolo Pub/Sub Publisher al service account Pub/Sub](#add-publisher-role).

1.  Nella console Google Cloud vai alla pagina **IAM**.
    
    [Vai a IAM](https://console.cloud.google.com/iam-admin/iam?hl=it)
    
2.  Fai clic sulla casella di controllo **Includi concessioni di ruoli fornite da Google**.
    
3.  Cerca il account di servizio con il formato `service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com`.
    
4.  Per questo service account, fai clic sul pulsante **Modifica entità**.
    
5.  Se necessario, fai clic su **Aggiungi un altro ruolo**.
    
6.  Cerca e fai clic sul **ruolo Creatore token service account** (`roles/iam.serviceAccountTokenCreator`).
    
7.  Fai clic su **Salva**.
    

### Crea una policy in AWS

Devi disporre di una policy in AWS per consentire a Pub/Sub di autenticarsi in AWS in modo che Pub/Sub possa importare dati da Amazon MSK.

-   Per altri metodi e informazioni su come creare una policy in AWS, consulta [Creazione di policy IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html).

Per creare una policy in AWS, segui questi passaggi:

1.  Accedi alla Console di gestione AWS e apri la [console IAM](https://console.aws.amazon.com/iam/).
    
2.  Nel riquadro di navigazione della console per **IAM**, fai clic su **Gestione accessi** > **Policy**.
    
3.  Fai clic su **Crea policy**.
    
4.  Per **Fai clic su un servizio**, fai clic su **MSK**.
    
5.  Per **Azione consentita**,fai clic su **Lettura** > [**GetBootstrapBrokers**](https://docs.aws.amazon.com//msk/1.0/apireference/clusters-clusterarn-bootstrap-brokers.html).
    
    Questa azione concede l'autorizzazione per ottenere i broker di bootstrap che Pub/Sub utilizza per connettersi al cluster MSK.
    
6.  Fai clic su **Aggiungi altre autorizzazioni**.
    
7.  In **Seleziona un servizio**, fai clic su **API Apache Kafka per MSK**.
    
8.  Per **Azione consentita**, seleziona quanto segue:
    
    -   **Elenco** > [**DescribeTopic**](https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html)
        
        Questa azione concede l'autorizzazione per consentire all'argomento di inserimento Pub/Sub di ottenere dettagli sull'argomento Kafka di Amazon MSK.
        
    -   **Read** > [**ReadData**](https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html)
        
        Questa azione concede l'autorizzazione per leggere i dati dall'argomento Kafka di Amazon MSK.
        
    -   **Scrivi** > [**Connetti**](https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html)
        
        Questa azione concede l'autorizzazione per connettersi e autenticarsi al cluster Amazon MSK Kafka.
        
9.  Per **Risorse**, specifica l'[ARN del cluster](https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html) (se vuoi limitare la policy a cluster specifici, il che è consigliato).
    
10.  Fai clic su **Aggiungi altre autorizzazioni**.
     
11.  Per **Seleziona un servizio**, fai clic su **STS**.
     
12.  Per **Azione consentita**, fai clic su **Scrittura** > **[AssumeRoleWithWebIdentity](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html)**.
     
     Questa azione concede l'autorizzazione per ottenere un insieme di credenziali di sicurezza temporanee per Pub/Sub per l'autenticazione ad Amazon MSK utilizzando la federazione delle identità.
     
13.  Fai clic su **Avanti**.
     
14.  Inserisci un nome e una descrizione per la norma.
     
15.  Fai clic su **Crea policy**.
     

### Creare un ruolo in AWS utilizzando una policy di attendibilità personalizzata

Devi creare un ruolo in AWS in modo che Pub/Sub possa autenticarsi in AWS per importare i dati da Amazon MSK.

1.  Accedi alla Console di gestione AWS e apri la [console IAM](https://console.aws.amazon.com/iam/).
    
2.  Nel riquadro di navigazione della console per **IAM**, fai clic su **Ruoli**.
    
3.  Fai clic su **Crea ruolo**.
    
4.  In **Seleziona entità attendibile**, fai clic su **Policy di attendibilità personalizzata**.
    
5.  Nella sezione **Policy di attendibilità personalizzata**, inserisci o incolla quanto segue:
    
    ```
    {
      "Version": "2012-10-17",
      "Statement": [
        {
         "Effect": "Allow",
         "Principal": {
            "Federated": "accounts.google.com"
         },
         "Action": "sts:AssumeRoleWithWebIdentity",
         "Condition": {
             "StringEquals": {
               "accounts.google.com:sub": "<SERVICE_ACCOUNT_UNIQUE_ID>"
             }
          }
        }
      ]
    }
    ```
    
    Sostituisci `<SERVICE_ACCOUNT_UNIQUE_ID>` con l'ID univoco del account di servizio che hai registrato in [Registra l'ID univoco del account di servizio account](#record-service-account).
    
6.  Fai clic su **Avanti**.
    
7.  In **Aggiungi autorizzazioni**, cerca e fai clic sul criterio personalizzato che hai appena creato.
    
8.  Fai clic su **Avanti**.
    
9.  Inserisci un nome e una descrizione per il ruolo.
    
10.  Fai clic su **Crea ruolo**.
     

## Aggiungi il ruolo Publisher Pub/Sub al principal Pub/Sub

Per attivare la pubblicazione, devi assegnare un ruolo Publisher al account di servizio Pub/Sub in modo che Pub/Sub possa pubblicare nell'argomento di importazione di Amazon MSK.

## Aggiungi il ruolo di service agent Pub/Sub al account di servizio Pub/Sub

**Nota** :il ruolo di agente di servizio Pub/Sub viene concesso per impostazione predefinita per tutti i progetti dopo il 9 aprile 2021. Se il tuo progetto è stato creato dopo questa data e il ruolo service agent Pub/Sub non è stato rimosso, il tuo account di servizio Pub/Sub avrà già questo ruolo.

Per consentire a Pub/Sub di utilizzare la quota di pubblicazione del progetto dell'argomento di importazione, l'agente di servizio Pub/Sub richiede l'autorizzazione [`serviceusage.services.use`](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage?hl=it#serviceusage.services.use) per il progetto dell'argomento di importazione.

Per fornire questa autorizzazione, ti consigliamo di aggiungere il ruolo di agente di servizio Pub/Sub all'account di servizio Pub/Sub.

Se l'account di servizio Pub/Sub non dispone del ruolo Agente di servizio Pub/Sub, può essere concesso nel seguente modo:

1.  Nella console Google Cloud vai alla pagina **IAM**.
    
    [Vai a IAM](https://console.cloud.google.com/iam-admin/iam?hl=it)
    
2.  Fai clic sulla casella di controllo **Includi concessioni di ruoli fornite da Google**.
    
3.  Cerca il account di servizio con il formato `service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com`.
    
4.  Per questo account di servizio, fai clic sul pulsante **Modifica entità**.
    
5.  Se necessario, fai clic su **Aggiungi un altro ruolo**.
    
6.  Cerca e fai clic sul **ruolo Service agent Pub/Sub** (`roles/pubsub.serviceAgent`).
    
7.  Fai clic su **Salva**.
    

### Attivare la pubblicazione da tutti gli argomenti

Utilizza questo metodo se non hai creato argomenti di importazione Amazon MSK.

1.  Nella console Google Cloud vai alla pagina **IAM**.
    
    [Vai a IAM](https://console.cloud.google.com/iam-admin/iam?hl=it)
    
2.  Fai clic sulla casella di controllo **Includi concessioni di ruoli fornite da Google**.
    
3.  Cerca il account di servizio con il formato `service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com`.
    
4.  Per questo account di servizio, fai clic sul pulsante **Modifica entità**.
    
5.  Se necessario, fai clic su **Aggiungi un altro ruolo**.
    
6.  Cerca e fai clic sul **ruolo Pub/Sub Publisher** (`roles/pubsub.publisher`).
    
7.  Fai clic su **Salva**.
    

### Abilita la pubblicazione da un singolo argomento

Utilizza questo metodo solo se l'argomento di importazione Amazon MSK esiste già.

1.  Nella console Google Cloud , attiva Cloud Shell.
    
    [Attiva Cloud Shell](https://console.cloud.google.com/?cloudshell=true&hl=it)
    
    Nella parte inferiore della console Google Cloud viene avviata una sessione di [Cloud Shell](https://docs.cloud.google.com/shell/docs/how-cloud-shell-works?hl=it) e viene visualizzato un prompt della riga di comando. Cloud Shell è un ambiente shell con Google Cloud CLI già installata e con valori già impostati per il progetto corrente. L'inizializzazione della sessione può richiedere alcuni secondi.
    
2.  Esegui il [comando `gcloud pubsub topics add-iam-policy-binding`](https://docs.cloud.google.com/sdk/gcloud/reference/pubsub/topics/add-iam-policy-binding?hl=it):
    
    gcloud pubsub topics add-iam-policy-binding TOPIC\_ID \\
       \--member\="serviceAccount:service-PROJECT\_NUMBER@gcp-sa-pubsub.iam.gserviceaccount.com" \\
       \--role\="roles/pubsub.publisher"
    
    Sostituisci quanto segue:
    
    -   `TOPIC_ID`: l'ID argomento dell'argomento di importazione Amazon MSK.
        
    -   `PROJECT_NUMBER`: il numero del progetto. Per visualizzare il numero del progetto, consulta [Identifica i progetti](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects?hl=it#identifying_projects).
        

## Aggiungi il ruolo Utente account di servizio al account di servizio

Il **ruolo Utente service account** (`roles/iam.serviceAccountUser`) include l'autorizzazione `iam.serviceAccounts.actAs` che consente a un'entità di collegare un service account alle impostazioni di importazione dell'argomento di importazione Amazon MSK e di utilizzare questo account di servizio per l'identità federata.

1.  Nella console Google Cloud vai alla pagina **IAM**.
    
    [Vai a IAM](https://console.cloud.google.com/iam-admin/iam?hl=it)
    
2.  Per l'entità che effettua le chiamate di creazione o aggiornamento dell'argomento, fai clic sul pulsante **Modifica entità**.
    
3.  Se necessario, fai clic su **Aggiungi un altro ruolo**.
    
4.  Cerca e fai clic sul **ruolo Service Account User** (`roles/iam.serviceAccountUser`).
    
5.  Fai clic su **Salva**.
    

## Utilizzare gli argomenti di importazione di Amazon MSK

Puoi creare un nuovo argomento di importazione o modificarne uno esistente.

### Considerazioni

**Attenzione** :se hai già dati in Amazon MSK, prima [crea un argomento standard e un abbonamento predefinito](https://docs.cloud.google.com/pubsub/docs/create-topic?hl=it#create_a_topic_2) senza attivare le impostazioni di importazione. Poi, [converti l'argomento in un argomento di importazione](https://docs.cloud.google.com/pubsub/docs/change-topic-type?hl=it#convert-standard-to-import). Questo metodo garantisce che tutti i messaggi vengano ricevuti dalla sottoscrizione.

-   La creazione separata dell'argomento e della sottoscrizione, anche se eseguita in rapida successione, può comportare la perdita di dati. Esiste un breve periodo di tempo in cui l'argomento esiste senza un abbonamento. Se vengono inviati dati all'argomento durante questo periodo, vengono persi. Creando prima l'argomento, poi la sottoscrizione e infine convertendo l'argomento in un argomento di importazione, garantisci che nessun messaggio venga perso durante il processo di importazione.
    
-   Se devi ricreare l'argomento Kafka di un argomento di importazione esistente con lo stesso nome, non puoi _semplicemente� eliminare l'argomento Kafka e ricrearlo._ Questa azione può invalidare la gestione degli offset di Pub/Sub, il che può comportare la perdita di dati. Per mitigare questo problema, segui questi passaggi:
    
    -   Elimina l'argomento di importazione Pub/Sub.
    -   Elimina l'argomento Kafka.
    -   Crea l'argomento Kafka.
    -   Crea l'argomento di importazione Pub/Sub.
-   I dati di un argomento Kafka Amazon MSK vengono sempre letti dall'[offset iniziale](https://kafka.apache.org/documentation/#consumerconfigs_auto.offset.reset).
    

### Crea argomenti di importazione Amazon MSK

Per saperne di più sulle proprietà associate a un argomento, consulta [Proprietà di un argomento](https://docs.cloud.google.com/pubsub/docs/create-topic?hl=it#properties_of_a_topic).

Assicurati di aver completato le seguenti procedure:

-   [Configurare l'identità federata per accedere ad Amazon MSK](#federated-identity)
    
-   [Aggiungi il ruolo Pub/Sub Publisher al service account Pub/Sub](#add-publisher-role)
    
-   [Aggiungere il ruolo Utente account di servizio al service account](#add-service-account-role)
    

Per creare un argomento di importazione Amazon MSK:

### Console

1.  Nella console Google Cloud , vai alla pagina **Argomenti**.
    
    [Vai ad Argomenti](https://console.cloud.google.com/cloudpubsub/topic/list?hl=it)
    
2.  Fai clic su **Crea argomento**.
    
3.  Nel campo **ID argomento**, inserisci un ID per l'argomento di importazione di Amazon MSK. Per saperne di più sulla denominazione degli argomenti, consulta le [linee guida per la denominazione](https://docs.cloud.google.com/pubsub/docs/pubsub-basics?hl=it#resource_names).
    
4.  Seleziona **Aggiungi una sottoscrizione predefinita**.
    
5.  Seleziona **Abilita importazione**.
    
6.  Per l'origine dell'importazione, seleziona **Amazon MSK**.
    
7.  Inserisci i seguenti dettagli:
    
    -   **ARN cluster**: l'ARN di Amazon MSK che stai importando in Pub/Sub. Il formato ARN è il seguente: `arn:aws:kafka:${Region}:${Account}:cluster/${ClusterName}/${ClusterId}`.
    -   **Argomento**: il nome dell'argomento Kafka di Amazon MSK che stai importando in Pub/Sub.
    -   **ARN del ruolo AWS**: l'ARN del ruolo AWS. Il formato ARN del ruolo è il seguente: `arn:aws:iam::${Account}:role/${RoleName}`.
    -   **Service account**: il account di servizio che hai creato in [Creare un account di servizio in Google Cloud](#create-service-account).
8.  Fai clic su **Crea argomento**.
    

### gcloud

1.  Nella console Google Cloud , attiva Cloud Shell.
    
    [Attiva Cloud Shell](https://console.cloud.google.com/?cloudshell=true&hl=it)
    
    Nella parte inferiore della console Google Cloud viene avviata una sessione di [Cloud Shell](https://docs.cloud.google.com/shell/docs/how-cloud-shell-works?hl=it) e viene visualizzato un prompt della riga di comando. Cloud Shell è un ambiente shell con Google Cloud CLI già installata e con valori già impostati per il progetto corrente. L'inizializzazione della sessione può richiedere alcuni secondi.
    
2.  Esegui il [comando `gcloud pubsub topics create`](https://docs.cloud.google.com/sdk/gcloud/reference/pubsub/topics/create?hl=it):
    
    ```
    gcloud pubsub topics create TOPIC_ID \
          --aws-msk-ingestion-cluster-arn MSK_CLUSTER_ARN \
          --aws-msk-ingestion-topic MSK_TOPIC \
          --aws-msk-ingestion-aws-role-arn MSK_ROLE_ARN \
          --aws-msk-ingestion-service-account PUBSUB_SERVICE_ACCOUNT
    ```
    
    Sostituisci quanto segue:
    
    -   `TOPIC_ID`: il nome o l'ID dell'argomento Pub/Sub.
    -   `MSK_CLUSTER_ARN`: l'ARN del cluster Amazon MSK che stai importando in Pub/Sub. Il formato ARN è il seguente: `arn:aws:kafka:${Region}:${Account}:cluster/${ClusterName}/${ClusterId}`.
    -   `MSK_TOPIC`: il nome dell'argomento Kafka di Amazon MSK che stai importando in Pub/Sub.
    -   `MSK_ROLE_ARN`: l'ARN del ruolo AWS. Il formato dell'ARN del ruolo è il seguente: `arn:aws:iam::${Account}:role/${RoleName}`.
    -   `PUBSUB_SERVICE_ACCOUNT`: il account di servizio che hai creato in [Creare un account di servizio in Google Cloud](#create-service-account).

### C++

Prima di provare questo esempio, segui le istruzioni di configurazione di C++ nella [guida rapida all'utilizzo delle librerie client](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries?hl=it). Per saperne di più, consulta la [documentazione di riferimento dell'API Pub/Sub C++](https://googleapis.dev/cpp/google-cloud-pubsub/latest/).

```
namespace pubsub = ::google::cloud::pubsub;
namespace pubsub_admin = ::google::cloud::pubsub_admin;
[](pubsub_admin::TopicAdminClient client, std::string project_id,
   std::string topic_id, std::string const& cluster_arn,
   std::string const& msk_topic, std::string const& aws_role_arn,
   std::string const& gcp_service_account) {
  google::pubsub::v1::Topic request;
  request.set_name(
      pubsub::Topic(std::move(project_id), std::move(topic_id)).FullName());
  auto* aws_msk =
      request.mutable_ingestion_data_source_settings()->mutable_aws_msk();
  aws_msk->set_cluster_arn(cluster_arn);
  aws_msk->set_topic(msk_topic);
  aws_msk->set_aws_role_arn(aws_role_arn);
  aws_msk->set_gcp_service_account(gcp_service_account);

  auto topic = client.CreateTopic(request);
  // Note that kAlreadyExists is a possible error when the library retries.
  if (topic.status().code() == google::cloud::StatusCode::kAlreadyExists) {
    std::cout << "The topic already exists\n";
    return;
  }
  if (!topic) throw std::move(topic).status();

  std::cout << "The topic was successfully created: " << topic->DebugString()
            << "\n";
}
```

### Go

L'esempio seguente utilizza la versione principale della libreria client Go Pub/Sub (v2). Se utilizzi ancora la libreria v1, consulta [la guida alla migrazione alla v2](https://github.com/googleapis/google-cloud-go/blob/main/pubsub/MIGRATING.md). Per visualizzare un elenco di esempi di codice della versione 1, consulta gli [esempi di codice deprecati](https://docs.cloud.google.com/pubsub/docs/samples?language=golang&text=deprecated&hl=it).

Prima di provare questo esempio, segui le istruzioni di configurazione di Go nella [guida rapida all'utilizzo delle librerie client](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries?hl=it). Per saperne di più, consulta la [documentazione di riferimento dell'API Pub/Sub Go](https://pkg.go.dev/cloud.google.com/go/pubsub/v2).

```
import (
	"context"
	"fmt"
	"io"

	"cloud.google.com/go/pubsub/v2"
	"cloud.google.com/go/pubsub/v2/apiv1/pubsubpb"
)

func createTopicWithAWSMSKIngestion(w io.Writer, projectID, topicID, clusterARN, mskTopic, awsRoleARN, gcpSA string) error {
	// projectID := "my-project-id"
	// topicID := "my-topic"

	// // AWS MSK ingestion settings.
	// clusterARN := "cluster-arn"
	// mskTopic := "msk-topic"
	// awsRoleARN := "aws-role-arn"
	// gcpSA := "gcp-service-account"

	ctx := context.Background()
	client, err := pubsub.NewClient(ctx, projectID)
	if err != nil {
		return fmt.Errorf("pubsub.NewClient: %w", err)
	}
	defer client.Close()

	topicpb := &pubsubpb.Topic{
		Name: fmt.Sprintf("projects/%s/topics/%s", projectID, topicID),
		IngestionDataSourceSettings: &pubsubpb.IngestionDataSourceSettings{
			Source: &pubsubpb.IngestionDataSourceSettings_AwsMsk_{
				AwsMsk: &pubsubpb.IngestionDataSourceSettings_AwsMsk{
					ClusterArn:        clusterARN,
					Topic:             mskTopic,
					AwsRoleArn:        awsRoleARN,
					GcpServiceAccount: gcpSA,
				},
			},
		},
	}
	topic, err := client.TopicAdminClient.CreateTopic(ctx, topicpb)
	if err != nil {
		return fmt.Errorf("CreateTopic: %w", err)
	}
	fmt.Fprintf(w, "Created topic with AWS MSK ingestion settings: %v\n", topic)
	return nil
}
```

### Java

Prima di provare questo esempio, segui le istruzioni di configurazione di Java nella [guida rapida all'utilizzo delle librerie client](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries?hl=it). Per saperne di più, consulta la [documentazione di riferimento dell'API Java di Pub/Sub](https://cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview?hl=it).

```

import com.google.cloud.pubsub.v1.TopicAdminClient;
import com.google.pubsub.v1.IngestionDataSourceSettings;
import com.google.pubsub.v1.Topic;
import com.google.pubsub.v1.TopicName;
import java.io.IOException;

public class CreateTopicWithAwsMskIngestionExample {
  public static void main(String... args) throws Exception {
    // TODO(developer): Replace these variables before running the sample.
    String projectId = "your-project-id";
    String topicId = "your-topic-id";
    // AWS MSK ingestion settings.
    String clusterArn = "cluster-arn";
    String mskTopic = "msk-topic";
    String awsRoleArn = "aws-role-arn";
    String gcpServiceAccount = "gcp-service-account";

    createTopicWithAwsMskIngestionExample(
        projectId, topicId, clusterArn, mskTopic, awsRoleArn, gcpServiceAccount);
  }

  public static void createTopicWithAwsMskIngestionExample(
      String projectId,
      String topicId,
      String clusterArn,
      String mskTopic,
      String awsRoleArn,
      String gcpServiceAccount)
      throws IOException {
    try (TopicAdminClient topicAdminClient = TopicAdminClient.create()) {
      TopicName topicName = TopicName.of(projectId, topicId);

      IngestionDataSourceSettings.AwsMsk awsMsk =
          IngestionDataSourceSettings.AwsMsk.newBuilder()
              .setClusterArn(clusterArn)
              .setTopic(mskTopic)
              .setAwsRoleArn(awsRoleArn)
              .setGcpServiceAccount(gcpServiceAccount)
              .build();
      IngestionDataSourceSettings ingestionDataSourceSettings =
          IngestionDataSourceSettings.newBuilder().setAwsMsk(awsMsk).build();

      Topic topic =
          topicAdminClient.createTopic(
              Topic.newBuilder()
                  .setName(topicName.toString())
                  .setIngestionDataSourceSettings(ingestionDataSourceSettings)
                  .build());

      System.out.println("Created topic with AWS MSK ingestion settings: " + topic.getAllFields());
    }
  }
}
```

### Node.js

Prima di provare questo esempio, segui le istruzioni di configurazione di Node.js nella [guida rapida all'utilizzo delle librerie client](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries?hl=it). Per saperne di più, consulta la [documentazione di riferimento dell'API Pub/Sub Node.js](https://googleapis.dev/nodejs/pubsub/latest).

```
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const clusterArn = 'arn:aws:kafka:...';
// const mskTopic = 'YOUR_MSK_TOPIC';
// const roleArn = 'arn:aws:iam:...';
// const gcpServiceAccount = 'ingestion-account@...';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopicWithAwsMskIngestion(
  topicNameOrId,
  clusterArn,
  mskTopic,
  awsRoleArn,
  gcpServiceAccount,
) {
  // Creates a new topic with AWS MSK ingestion.
  await pubSubClient.createTopic({
    name: topicNameOrId,
    ingestionDataSourceSettings: {
      awsMsk: {
        clusterArn,
        topic: mskTopic,
        awsRoleArn,
        gcpServiceAccount,
      },
    },
  });
  console.log(`Topic ${topicNameOrId} created with AWS MSK ingestion.`);
}
```

### Node.ts

Prima di provare questo esempio, segui le istruzioni di configurazione di Node.js nella [guida rapida all'utilizzo delle librerie client](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries?hl=it). Per saperne di più, consulta la [documentazione di riferimento dell'API Pub/Sub Node.js](https://googleapis.dev/nodejs/pubsub/latest).

```
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const clusterArn = 'arn:aws:kafka:...';
// const mskTopic = 'YOUR_MSK_TOPIC';
// const roleArn = 'arn:aws:iam:...';
// const gcpServiceAccount = 'ingestion-account@...';

// Imports the Google Cloud client library
import {PubSub} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopicWithAwsMskIngestion(
  topicNameOrId: string,
  clusterArn: string,
  mskTopic: string,
  awsRoleArn: string,
  gcpServiceAccount: string,
) {
  // Creates a new topic with AWS MSK ingestion.
  await pubSubClient.createTopic({
    name: topicNameOrId,
    ingestionDataSourceSettings: {
      awsMsk: {
        clusterArn,
        topic: mskTopic,
        awsRoleArn,
        gcpServiceAccount,
      },
    },
  });
  console.log(`Topic ${topicNameOrId} created with AWS MSK ingestion.`);
}
```

### Python

Prima di provare questo esempio, segui le istruzioni di configurazione di Python nella [guida rapida all'utilizzo delle librerie client](https://docs.cloud.google.com/pubsub/docs/create-topic-client-libraries?hl=it). Per saperne di più, consulta la [documentazione di riferimento dell'API Python di Pub/Sub](https://docs.cloud.google.com/python/docs/reference/pubsub/latest?hl=it).

```
from google.cloud import pubsub_v1
from google.pubsub_v1.types import Topic
from google.pubsub_v1.types import IngestionDataSourceSettings

# TODO(developer)
# project_id = "your-project-id"
# topic_id = "your-topic-id"
# cluster_arn = "your-cluster-arn"
# msk_topic = "your-msk-topic"
# aws_role_arn = "your-aws-role-arn"
# gcp_service_account = "your-gcp-service-account"

publisher = pubsub_v1.PublisherClient()
topic_path = publisher.topic_path(project_id, topic_id)

request = Topic(
    name=topic_path,
    ingestion_data_source_settings=IngestionDataSourceSettings(
        aws_msk=IngestionDataSourceSettings.AwsMsk(
            cluster_arn=cluster_arn,
            topic=msk_topic,
            aws_role_arn=aws_role_arn,
            gcp_service_account=gcp_service_account,
        )
    ),
)

topic = publisher.create_topic(request=request)

print(f"Created topic: {topic.name} with AWS MSK Ingestion Settings")
```

Per saperne di più sugli ARN, consulta [Amazon Resource Names (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html#arn-syntax-kinesis-streams) e [Identificatori IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html).

Se riscontri problemi, consulta l'articolo [Risolvi i problemi relativi all'importazione da Amazon MSK](https://docs.cloud.google.com/pubsub/docs/amazon-msk-import-topic-troubleshooting?hl=it).

### Modifica gli argomenti di importazione di Amazon MSK

Per modificare le impostazioni dell'origine dati di importazione di un argomento Amazon MSK:

### Console

1.  Nella console Google Cloud , vai alla pagina **Argomenti**.
    
    [Vai ad Argomenti](https://console.cloud.google.com/cloudpubsub/topic/list?hl=it)
    
2.  Fai clic sull'argomento di importazione di Amazon MSK.
    
3.  Nella pagina dei dettagli dell'argomento, fai clic su **Modifica**.
    
4.  Aggiorna i campi che vuoi modificare.
    
5.  Fai clic su **Aggiorna**.
    

### gcloud

1.  Nella console Google Cloud , attiva Cloud Shell.
    
    [Attiva Cloud Shell](https://console.cloud.google.com/?cloudshell=true&hl=it)
    
    Nella parte inferiore della console Google Cloud viene avviata una sessione di [Cloud Shell](https://docs.cloud.google.com/shell/docs/how-cloud-shell-works?hl=it) e viene visualizzato un prompt della riga di comando. Cloud Shell è un ambiente shell con Google Cloud CLI già installata e con valori già impostati per il progetto corrente. L'inizializzazione della sessione può richiedere alcuni secondi.
    
2.  Esegui il comando [`gcloud pubsub topics update`](https://docs.cloud.google.com/sdk/gcloud/reference/pubsub/topics/update?hl=it) con tutti i flag menzionati nell'esempio seguente:
    
    gcloud pubsub topics update TOPIC\_ID \\
        \--aws-msk-ingestion-cluster-arn MSK\_CLUSTER\_ARN \\
        \--aws-msk-ingestion-topic MSK\_TOPIC \\
        \--aws-msk-ingestion-aws-role-arn MSK\_ROLE\_ARN \\
        \--aws-msk-ingestion-service-account PUBSUB\_SERVICE\_ACCOUNT
    
    Sostituisci quanto segue:
    
    -   TOPIC\_ID: il nome o l'ID dell'argomento Pub/Sub.
    -   MSK\_CLUSTER\_ARN: l'ARN del cluster Amazon MSK che stai importando in Pub/Sub. Il formato ARN è il seguente: `arn:aws:kafka:${Region}:${Account}:cluster/${ClusterName}/${ClusterId}`.
    -   MSK\_TOPIC: il nome dell'argomento Amazon MSK Kafka che stai importando in Pub/Sub.
    -   MSK\_ROLE\_ARN: l'ARN del ruolo AWS. Il formato ARN del ruolo è il seguente: `arn:aws:iam::${Account}:role/${RoleName}`.
    -   PUBSUB\_SERVICE\_ACCOUNT: il account di servizio che hai creato in [Crea un account di servizio in Google Cloud](#create-service-account).
    

## Quote e limiti

Il throughput del publisher per gli argomenti di importazione è vincolato alla quota di pubblicazione dell'argomento. Per saperne di più, consulta [Quote e limiti di Pub/Sub](https://docs.cloud.google.com/pubsub/quotas?hl=it).

## Passaggi successivi

-   [Monitora un argomento di importazione](https://docs.cloud.google.com/pubsub/docs/monitor-topic?hl=it#metrics-monitor-topic).
    
-   Scegli il [tipo di abbonamento](https://docs.cloud.google.com/pubsub/docs/subscriber?hl=it) per l'argomento.
    
-   Scopri come [pubblicare un messaggio in un argomento](https://docs.cloud.google.com/pubsub/docs/publisher?hl=it).
    
-   Crea o modifica un argomento con [gcloud CLI](https://docs.cloud.google.com/sdk/gcloud/reference/pubsub/topics?hl=it), [API REST](https://docs.cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics?hl=it) o [librerie client](https://docs.cloud.google.com/pubsub/docs/reference/libraries?hl=it).
    
-   [Risolvere i problemi relativi a un argomento di importazione Amazon MSK](https://docs.cloud.google.com/pubsub/docs/amazon-msk-import-topic-troubleshooting?hl=it)
    

_Apache Kafka® è un marchio registrato di Apache Software Foundation o delle sue affiliate negli Stati Uniti e/o in altri paesi._

Invia feedback

Salvo quando diversamente specificato, i contenuti di questa pagina sono concessi in base alla [licenza Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), mentre gli esempi di codice sono concessi in base alla [licenza Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Per ulteriori dettagli, consulta le [norme del sito di Google Developers](https://developers.google.com/site-policies?hl=it). Java è un marchio registrato di Oracle e/o delle sue consociate.

Ultimo aggiornamento 2026-03-19 UTC.
