Questa pagina documenta la versione **15.7.1** di AlloyDB Omni utilizzando l'opzione di deployment **Kubernetes**. [Scegli un'altra opzione di implementazione](https://docs.cloud.google.com/alloydb/omni/docs/choose-deployment?hl=it).

-   [Home](https://docs.cloud.google.com/?hl=it)
-   [Documentation](https://docs.cloud.google.com/docs?hl=it)
-   [Databases](https://docs.cloud.google.com/docs/databases?hl=it)
-   [AlloyDB Omni](https://docs.cloud.google.com/alloydb/omni/docs?hl=it)
-   [For Kubernetes: 15.7.1](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.7.1/docs/overview?hl=it)

Invia feedback

# Configura la rotazione dei log di AlloyDB Omni Mantieni tutto organizzato con le raccolte Salva e classifica i contenuti in base alle tue preferenze.

Seleziona una versione della documentazione: 15.7.1keyboard\_arrow\_down

-   [Current (17.5.0)](https://docs.cloud.google.com/alloydb/omni/kubernetes/current/docs/configure-log-rotation?hl=it)
-   [17.5.0](https://docs.cloud.google.com/alloydb/omni/kubernetes/17.5.0/docs/configure-log-rotation?hl=it)
-   [16.9.0](https://docs.cloud.google.com/alloydb/omni/kubernetes/16.9.0/docs/configure-log-rotation?hl=it)
-   [16.8.0](https://docs.cloud.google.com/alloydb/omni/kubernetes/16.8.0/docs/configure-log-rotation?hl=it)
-   [16.3.0](https://docs.cloud.google.com/alloydb/omni/kubernetes/16.3.0/docs/configure-log-rotation?hl=it)
-   [15.13.0](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.13.0/docs/configure-log-rotation?hl=it)
-   [15.12.0](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.12.0/docs/configure-log-rotation?hl=it)
-   [15.7.1](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.7.1/docs/configure-log-rotation?hl=it)
-   [15.7.0](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.7.0/docs/configure-log-rotation?hl=it)

Questo documento descrive come configurare la rotazione dei log di diagnostica di AlloyDB Omni quando utilizzi l'operatore AlloyDB Omni Kubernetes.

I seguenti file di log si trovano nella directory `/obs/diagnostic/`:

-   `postgresql.audit`: questo file di log raccoglie i log di controllo dell'accesso a sessioni e oggetti. Per raccogliere i log di controllo, devi [abilitarli](#enable-audit-logs).
    
-   `postgresql.log`: questo file di log raccoglie i log del server PostgreSQL. Questi log vengono sempre raccolti e non devono essere abilitati.
    

Quando un file di log viene ruotato, si verifica quanto segue:

1.  Il file di log viene copiato nella directory `/obs/diagnostic/archive/`. Se in quella directory esiste un file di log con lo stesso nome, questo viene sovrascritto.
    
2.  I contenuti del file di log ruotato originale vengono eliminati in modo che il file sia vuoto.
    
3.  Le informazioni del log iniziano immediatamente a essere scritte nel file di log ruotato vuoto. Le informazioni di log vengono scritte nel file di log fino a quando il file non raggiunge una soglia di dimensione o età, a quel punto viene nuovamente ruotato. I log vengono ruotati in modo che non diventino troppo grandi.
    

Per impostazione predefinita, l'impostazione di rotazione prevede che ogni file di log ruoti quando le sue dimensioni raggiungono i 200 MB. La rotazione predefinita non include un'impostazione dell'età.

Ogni file archiviato viene compresso singolarmente utilizzando il formato di file Gzip (`.gz`).

I file archiviati vengono conservati per 7 giorni. I file archiviati più vecchi di 7 giorni vengono rimossi automaticamente, ad eccezione del file archiviato durante la rotazione precedente. Ad esempio, se `log_rotation_age` ha più di 7 giorni, il file archiviato raggiunge la soglia di 7 giorni prima della rotazione del file corrente. In questo caso, il file archiviato non viene rimosso finché la rotazione successiva non genera un nuovo file archiviato.

Ogni nome file di log archiviato segue questo formato: `postgresql-%Y-%m-%d_%H%M%S.log.gz`. Il timestamp viene determinato al momento della rotazione dei log ed è espresso in Coordinated Universal Time (UTC). Ad esempio, se il log viene ruotato alle 13:01:02 del 20/12/2024 UTC, il nome del file archiviato è `postgresql-2024-12-20_130102.log.gz`.

Per salvare un file archiviato in modo permanente, puoi copiarlo dal contenitore del database alla directory locale utilizzando [`kubectl cp`](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cp/).

## Abilita audit log

Affinché i log di accesso a sessioni e oggetti vengano raccolti nel file `postgresql.audit`, devi attivare il parametro del database [`pgaudit`](https://github.com/pgaudit/pgaudit). Per attivare [`pgaudit`](https://github.com/pgaudit/pgaudit), aggiungi la seguente riga alla sezione `parameters` del file [`v1_dbcluster_parameters.yaml`](https://github.com/GoogleCloudPlatform/alloydb-omni-samples/blob/main/samples/v1_dbcluster_parameters.yaml) in `Secret`:

```
alloydb.enable_pgaudit: "on"
```

Di seguito è riportato un esempio di come potrebbe apparire:

```
apiVersion: v1
kind: Secret
...
apiVersion: alloydbomni.dbadmin.goog/v1
kind: DBCluster
metadata:
   name: DB_CLUSTER_NAME
spec:
  databaseVersion: "15.7.1"
  primarySpec:
    ...
    parameters:
      ...
      alloydb.enable_pgaudit: "on"
```

Per ulteriori informazioni, vedi `pgaudit` in [Estensioni di database supportate](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.7.1/docs/reference/extensions?hl=it) e [Estensione di controllo PostgreSQL](https://www.pgaudit.org/). I log del server PostgreSQL vengono sempre raccolti nel file `postgresql.log` e non richiedono l'attivazione di [`pgaudit`](https://github.com/pgaudit/pgaudit).

## Visualizzare il percorso del file di log di controllo

La funzione SQL `alloydb_audit_current_logfile` può essere utilizzata per visualizzare il percorso del file di audit log. Se il controllo è disattivato, il risultato è `NULL`.

```
SELECT alloydb_audit_current_logfile();

 alloydb_audit_current_logfile
----------------------------------------------------
 /var/log/pglogs/postgresql-2025-03-28_042024.audit
```

## Configura la rotazione dei log

Se vuoi avere un maggiore controllo sulla rotazione dei log, configura una dimensione massima del file, una durata tra le rotazioni dei log o entrambe. La durata tra le rotazioni dei log è chiamata anche età del log. Se utilizzi entrambe le impostazioni, ogni log viene ruotato quando raggiunge una delle soglie.

Per configurare la rotazione dei log, imposta uno o entrambi i seguenti parametri nella sezione `parameters` del manifest `DBCluster`:

-   `log_rotation_size`: "SIZE\_IN\_KB"
-   `log_rotation_age`: "AGE\_IN\_MINUTES"

Per disattivare una delle impostazioni di rotazione dei log, impostala su zero (`"0"`). Per mantenere l'impostazione predefinita che ruota i log quando le dimensioni del file raggiungono i 200 MB, non impostare alcun parametro.

### Esempio di dimensione e durata massime della rotazione dei log

I seguenti set di esempio impostano la rotazione dei log quando la dimensione del file raggiunge 400 MB o quando il tempo tra le rotazioni dei log raggiunge un giorno, a seconda dell'evento che si verifica per primo:

```
apiVersion: alloydbomni.dbadmin.goog/v1
kind: DBCluster
metadata:
  name: DB_CLUSTER_NAME
spec:
...
  primarySpec:
  ...
    parameters:
      log_rotation_size: "400000" # 400 MB
      log_rotation_age: "1440" # 24 hours * 60 minutes = 1 day
```

### Esempio di dimensione massima del log di rotazione

Il seguente esempio imposta la rotazione dei log quando la dimensione del file raggiunge 400 MB:

```
apiVersion: alloydbomni.dbadmin.goog/v1
kind: DBCluster
metadata:
  name: DB_CLUSTER_NAME
spec:
...
  primarySpec:
  ...
    parameters:
      log_rotation_size: "400000" # 400 MB
      log_rotation_age: "0" # Set to 0 to disable
```

### Esempio di durata della rotazione dei log

Il seguente esempio imposta la rotazione dei log una volta ogni 24 ore:

```
apiVersion: alloydbomni.dbadmin.goog/v1
kind: DBCluster
metadata:
  name: DB_CLUSTER_NAME
spec:
...
  primarySpec:
  ...
    parameters:
      log_rotation_size: "0" # Set to 0 to disable
      log_rotation_age: "1440" # 24 hours * 60 minutes = 1 day
```

## Passaggi successivi

-   [Gestire e monitorare AlloyDB Omni](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.7.1/docs/run-connect?hl=it)
-   [Generare ed eseguire la diagnostica dei file di dump di AlloyDB Omni](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.7.1/docs/manage-dump-files?hl=it)
-   [Scopri di più sulla gestione automatica della memoria](https://docs.cloud.google.com/alloydb/omni/kubernetes/15.7.1/docs/automatic-memory-management?hl=it)

Invia feedback

Salvo quando diversamente specificato, i contenuti di questa pagina sono concessi in base alla [licenza Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), mentre gli esempi di codice sono concessi in base alla [licenza Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Per ulteriori dettagli, consulta le [norme del sito di Google Developers](https://developers.google.com/site-policies?hl=it). Java è un marchio registrato di Oracle e/o delle sue consociate.

Ultimo aggiornamento 2026-03-23 UTC.
