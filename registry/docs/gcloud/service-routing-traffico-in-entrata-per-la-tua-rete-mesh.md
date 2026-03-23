Stai visualizzando la documentazione archiviata di Service Mesh v1.21.

Versioni disponibili

[Cloud Service Mesh più recente](https://docs.cloud.google.com/service-mesh/docs?hl=it)  
[Archivio Cloud Service Mesh 1.26](https://docs.cloud.google.com/service-mesh/v1.26/docs?hl=it)  
[Archivio Cloud Service Mesh 1.24](https://docs.cloud.google.com/service-mesh/v1.25/docs?hl=it)  
[Archivio Cloud Service Mesh 1.24](https://docs.cloud.google.com/service-mesh/v1.24/docs?hl=it)  
[Archivio Cloud Service Mesh 1.23](https://docs.cloud.google.com/service-mesh/v1.23/docs?hl=it)  
[Archivio Cloud Service Mesh 1.22](https://docs.cloud.google.com/service-mesh/v1.22/docs?hl=it)  
[Archivio Cloud Service Mesh 1.21](https://docs.cloud.google.com/service-mesh/v1.21/docs?hl=it)  
[Archivio Cloud Service Mesh 1.20](https://docs.cloud.google.com/service-mesh/v1.20/docs?hl=it)  
[Archivio Anthos Service Mesh 1.19](https://docs.cloud.google.com/service-mesh/v1.19/docs?hl=it)  

-   [Home](https://docs.cloud.google.com/?hl=it)
-   [Documentation](https://docs.cloud.google.com/docs?hl=it)
-   [Networking](https://docs.cloud.google.com/docs/networking?hl=it)
-   [Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs?hl=it)
-   [v1.21](https://docs.cloud.google.com/service-mesh/v1.21/docs?hl=it)
-   [Guide](https://docs.cloud.google.com/service-mesh/v1.20/docs/overview?hl=it)

Invia feedback Mantieni tutto organizzato con le raccolte Salva e classifica i contenuti in base alle tue preferenze.

# Traffico in entrata per la tua rete mesh

Un mesh di servizi facilita le comunicazioni tra i servizi in esecuzione nel mesh. Come indirizzi il traffico nella tua rete mesh? Puoi utilizzare un _gateway_ per indirizzare il traffico dall'esterno della mesh al suo interno tramite un punto di ingresso.

**Nota:** questa guida supporta solo Cloud Service Mesh con le API Google Cloud e non supporta le API Istio. Per saperne di più, consulta la [panoramica di Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs/overview?hl=it).

Questo documento descrive come utilizzare Cloud Load Balancing come gateway per indirizzare il traffico nella mesh e include quanto segue:

-   Considerazioni di alto livello per il tuo gateway.
-   Una panoramica delle opzioni quando selezioni un gateway per la mesh.
-   Suggerimenti per l'architettura che puoi applicare alla topologia del gateway.

In questo documento, _gateway_ si riferisce a una soluzione o a un pattern per la gestione del traffico destinato a un servizio nella tua mesh. L'Ingress Gateway di Istio è un'implementazione di questo pattern. In questo documento, _gateway_ è un termine generico che si riferisce al pattern generale, non all'implementazione di Istio.

Questo documento si applica alle API Cloud Service Mesh. Dopo i passaggi di configurazione preparatori, consulta che contiene le istruzioni per il deployment con un gateway in entrata.

Quando progetti la tua mesh di servizi, considera il traffico proveniente dalle seguenti origini:

-   Traffico che ha origine all'interno della tua rete mesh
-   Traffico che ha origine all'esterno della tua rete mesh

Il traffico che ha origine all'interno del mesh viaggia sul piano dati del mesh di servizi per raggiungere un backend o un endpoint associato al servizio di destinazione. Tuttavia, il traffico che ha origine al di fuori del mesh deve prima raggiungere il piano dati delmesh di servizih.

Nell'esempio seguente di traffico che ha origine all'interno del mesh, Cloud Service Mesh configura i proxy sidecar. Questi proxy sidecar formano il piano dati del tuomesh di servizih. Se il servizio A vuole comunicare con il servizio B, si verifica quanto segue:

1.  Il servizio A effettua una richiesta al servizio B per nome.
2.  Questa richiesta viene intercettata e reindirizzata al proxy sidecar del servizio A.
3.  Il proxy sidecar invia quindi la richiesta a un endpoint associato al servizio B.

[![Il piano dati del mesh gestisce il traffico interno al mesh di servizi.](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-ingress-mesh.svg?hl=it)](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-ingress-mesh.svg?hl=it)

Il data plane del mesh gestisce il traffico interno al mesh di servizi (fai clic per ingrandire)

  
Nell'esempio seguente, il traffico ha origine al di fuori del mesh di servizi e non transita lungo il piano dati del mesh di servizi.

[![Il piano dati del mesh di servizi non gestisce il traffico esterno
al mesh di servizi.](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-mesh-challenge.svg?hl=it)](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-mesh-challenge.svg?hl=it)

Il data plane mesh di servizi non gestisce il traffico esterno al mesh di servizi (fai clic per ingrandire)

In questo esempio, il client si trova al di fuori del mesh di servizi. Poiché non partecipa direttamente alla mesh, il client non sa quali endpoint appartengono ai servizi all'interno della mesh. In altre parole, poiché il client non utilizza un proxy configurato con Cloud Service Mesh per inviare richieste in uscita, non sa quali coppie indirizzo IP-porta utilizzare quando invia traffico al servizio A o al servizio B. Senza queste informazioni, il client non può raggiungere i servizi all'interno del mesh.

## Considerazioni per il gateway

Questa sezione fornisce una panoramica dei problemi da considerare quando selezioni un gateway, tra cui:

-   In che modo i clienti possono raggiungere il mio gateway?
-   Quali norme voglio applicare al traffico che raggiunge il mio gateway?
-   In che modo il mio gateway distribuisce il traffico ai servizi nella mia mesh?

### Consenti ai client di raggiungere il gateway del tuo mesh

I client, che si trovino su internet pubblico, nel tuo ambiente on-premise o all'interno di Google Cloud, hanno bisogno di un modo per raggiungere un servizio all'interno del mesh. Per raggiungere un servizio nel mesh, in genere si utilizza un indirizzo IP e una porta instradabili pubblicamente o privatamente che vengono risolti in un gateway. I client al di fuori del tuo mesh utilizzano questo indirizzo IP e questa porta per inviare richieste ai servizi nel tuo mesh tramite il gateway.

Cloud Load Balancing offre varie opzioni di bilanciamento del carico che puoi utilizzare come gateway per la tua mesh. Le domande principali da porsi quando scegli un bilanciatore del caricoGoogle Cloud che funga da gateway sono le seguenti:

-   I miei client si trovano su internet pubblico, in un ambiente on-premise o fanno parte della mia rete Virtual Private Cloud (VPC)?
-   Quali protocolli di comunicazione utilizzano i miei clienti?

Per una panoramica delle opzioni di Cloud Load Balancing, a seconda della posizione del client e del protocollo di comunicazione, consulta la sezione [Scegliere un gateway per la mesh](#choosing-gateway).

### Gestire il traffico al gateway

Poiché il gateway si trova al limite della mesh, tra i client esterni e i servizi interni, è il punto ideale per applicare i criteri quando il traffico entra nella mesh. Questi criteri includono:

-   Gestione del traffico, ad esempio routing, reindirizzamenti e trasformazione delle richieste
-   Sicurezza, ad esempio terminazione TLS e protezione DDoS (Distributed Denial of Service) di Google Cloud Armor
-   Memorizzazione nella cache di Cloud CDN

La sezione [Scegli un gateway per la tua mesh](#choosing-gateway) evidenzia le norme pertinenti al perimetro della tua mesh.

### Invia traffico dal gateway a un servizio nella tua mesh

Dopo che il gateway applica i criteri al traffico in entrata, decide dove inviarlo. Per configurare questa operazione, utilizza le norme di gestione del traffico e bilanciamento del carico. Il gateway potrebbe, ad esempio, esaminare l'intestazione della richiesta per identificare il servizio mesh che deve ricevere il traffico. Dopo che il gateway identifica il servizio, distribuisce il traffico a un backend specifico in base a un criterio di bilanciamento del carico.

La sezione [Scegli un gateway per la tua mesh](#choosing-gateway) descrive i backend a cui un gateway può inviare il traffico.

## Scegliere un gateway per la mesh

Google Cloud offre un'ampia gamma di bilanciatori del carico che possono fungere da gateway per la tua mesh. Questa sezione illustra la selezione di un gateway, confrontando le seguenti opzioni in base alle dimensioni pertinenti al pattern del gateway:

-   [Bilanciatore del carico delle applicazioni interno](https://docs.cloud.google.com/load-balancing/docs/l7-internal?hl=it)
-   [Bilanciatore del carico delle applicazioni esterno](https://docs.cloud.google.com/load-balancing/docs/https?hl=it)
-   [Bilanciatore del carico di rete passthrough interno](https://docs.cloud.google.com/load-balancing/docs/internal?hl=it)
-   [Bilanciatore del carico di rete passthrough esterno](https://docs.cloud.google.com/load-balancing/docs/network?hl=it)
-   [Bilanciatore del carico di rete proxy esterno](https://docs.cloud.google.com/load-balancing/docs/tcp?hl=it)

In questa sezione, facciamo riferimento ai gateway di _primo livello_ e di _secondo livello_. Questi termini vengono utilizzati per descrivere l'utilizzo di uno o due gateway per gestire il traffico in entrata nel mesh.

Potresti aver bisogno di un solo livello, un singolo bilanciatore del carico che funge da gateway per la mesh. A volte, però, è opportuno avere più gateway. In queste configurazioni, un gateway gestisce il traffico in entrata Google Cloud, mentre un gateway di secondo livello separato gestisce il traffico quando entra nel service mesh.

Ad esempio, potresti voler applicare i criteri di sicurezza di Google Cloud Armor al traffico in entrata in Google Cloud e i criteri avanzati di gestione del traffico al traffico in entrata nella mesh. Il pattern di utilizzo di un secondo gateway configurato per Cloud Service Mesh è descritto nella sezione [Gestire il traffico in entrata utilizzando un gateway di secondo livello al limite del mesh](#second-level-gateway).

La tabella seguente confronta le funzionalità disponibili in base all'opzione gateway selezionata.

Gateway

Posizione client

Protocolli

Policy

Backend/endpoint

Bilanciatore del carico delle applicazioni interno

Client basati suGoogle Cloudnella stessa regione del bilanciatore del carico.

Client on-premise le cui richieste arrivano nella stessa regione Google Cloud del bilanciatore del carico, ad esempio utilizzando Cloud VPN o Cloud Interconnect.

HTTP/1.1

HTTP/2

HTTPS

Gestione avanzata del traffico

Terminazione TLS utilizzando certificati autogestiti

Backend nella stessa Google Cloud regione del bilanciatore del carico, in esecuzione su:

-   Backend delle istanze di macchine virtuali (VM) su Compute Engine
-   Istanze container su Google Kubernetes Engine (GKE) e Kubernetes

Application Load Balancer esterno

Client su internet pubblico

HTTP/1.1

HTTP/2

HTTPS

Gestione del traffico

Cloud CDN (inclusi i backend dei bucket Cloud Storage)

Terminazione TLS utilizzando certificati gestiti da Google o autogestiti

Policy SSL

Cloud Armor per la prevenzione di attacchi DDoS e web

Supporto di Identity-Aware Proxy (IAP) per l'autenticazione degli utenti

Backend in qualsiasi regione Google Cloud , in esecuzione su:

-   VM su Compute Engine
-   Istanze container su GKE e Kubernetes

Bilanciatore del carico di rete passthrough interno

Client basati suGoogle Cloudin qualsiasi regione. Ciò richiede l'accesso globale se i client si trovano in una regione diversa da quella del bilanciatore del carico.

Client on-premise le cui richieste arrivano in qualsiasi Google Cloud regione, ad esempio utilizzando Cloud VPN o Cloud Interconnect.

TCP

Backend nella stessa Google Cloud regione del bilanciatore del carico, in esecuzione su VM su Compute Engine.

Bilanciatore del carico di rete passthrough esterno

Client su internet pubblico

TCP o UDP

Backend nella stessa Google Cloud regione del bilanciatore del carico, in esecuzione su VM su Compute Engine.

Bilanciatore del carico di rete proxy esterno

Client su internet pubblico

SSL o TCP

Terminazione TLS utilizzando certificati gestiti da Google o autogestiti (solo proxy SSL)

Policy SSL (solo proxy SSL)

Backend in qualsiasi regione Google Cloud , in esecuzione su:

-   VM su Compute Engine
-   Istanze container su GKE e Kubernetes

Proxy edge  
(su istanze VM o container) configurato da Cloud Service Mesh

I clienti devono trovarsi in una località in cui si verifica una delle seguenti condizioni:

-   che può inviare una richiesta a un bilanciatore del carico gestito da Google Cloud, che a sua volta la invia al proxy edge. Per maggiori dettagli, vedi [Gestire il traffico in entrata utilizzando un gateway di secondo livello al limite del mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/service-routing/traffic-director-ingress-traffic?hl=it#second-level-gateway).
-   Possono inviare una richiesta tramite un proxy, ad esempio un proxy sidecar, configurato da Cloud Service Mesh.
-   Possono inviare una richiesta direttamente all'indirizzo IP e alla porta di una VM o di un'istanza container che esegue il proxy edge.

HTTP/1.1

HTTP/2

[Gestione avanzata del traffico](https://docs.cloud.google.com/service-mesh/v1.21/docs/service-routing/advanced-traffic-management?hl=it) (incluso il supporto di `regex`)

Backend in qualsiasi regione Google Cloud , in esecuzione su:

-   VM su Compute Engine
-   Istanze container su GKE e Kubernetes

**Nota:** i proxy configurati con Cloud Service Mesh [supportano protocolli specifici](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features?hl=it). Le richieste che utilizzano un protocollo non supportato vengono eliminate quando raggiungono un proxy configurato con Cloud Service Mesh.

Per un confronto dettagliato delle funzionalità, consulta la pagina [Funzionalità del bilanciatore del carico](https://docs.cloud.google.com/load-balancing/docs/features?hl=it). Per una panoramica dettagliata delle funzionalità di Cloud Service Mesh, consulta la pagina [Funzionalità di Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features?hl=it).

### Eseguire il deployment e configurare i gateway

Un'ultima considerazione nella scelta del gateway è l'esperienza dello sviluppatore e gli strumenti che vuoi utilizzare. Google Cloud offre diversi approcci per creare e gestire il gateway.

#### Google Cloud CLI e API Compute Engine

Per configurare i prodotti di bilanciamento del carico gestito di Google Cloude Cloud Service Mesh, puoi utilizzare Google Cloud CLI e le API Compute Engine. Gcloud CLI e le API forniscono meccanismi per eseguire il deployment e configurare le risorse Google Cloud in modo imperativo. Per automatizzare le attività ripetitive, puoi creare script.

#### ConsoleGoogle Cloud

Per configurare Cloud Service Mesh e i bilanciatori del carico gestiti, puoi utilizzare la console. Google CloudGoogle Cloud

Per configurare il pattern del gateway, probabilmente avrai bisogno sia della [pagina **Cloud Service Mesh**](https://console.cloud.google.com/net-services/trafficdirector/services/list?hl=it) sia della [pagina **bilanciamento del carico**](https://console.cloud.google.com/net-services/loadbalancing/loadBalancers/list?hl=it).

#### GKE e Ingress multi-cluster

I controller di rete GKE e GKE Enterprise supportano anche il deployment di Cloud Load Balancing per l'integrazione integrata con il networking dei container. Forniscono un'interfaccia dichiarativa in stile Kubernetes per il deployment e la configurazione dei gateway. I controller [GKE Ingress](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/ingress?hl=it) e [Ingress multi-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/multi-cluster-ingress?hl=it) gestiscono i bilanciatori del carico [interni](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/internal-load-balance-ingress?hl=it) ed [esterni](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/load-balance-ingress?hl=it) per l'invio del traffico a un singolo cluster o a più cluster GKE. La risorsa Ingress può anche essere configurata in modo da puntare a servizi configurati con Cloud Service Mesh di cui è stato eseguito il deployment in cluster GKE.

## Pattern di architettura del gateway

Questa sezione descrive i pattern di alto livello e fornisce diagrammi dell'architettura per il gateway.

Il pattern più comune prevede l'utilizzo di un bilanciatore del carico gestito da Google Cloudcome gateway:

1.  I client inviano traffico a un bilanciatore del carico gestito da Google Cloudche funge da gateway.
    
    -   Il gateway applica i criteri.
2.  Il gateway invia il traffico a un servizio nella tua rete mesh.
    

Un pattern più avanzato prevede gateway a due livelli. I gateway funzionano nel seguente modo:

1.  I client inviano il traffico a un bilanciatore del carico gestito da Google Cloudche funge da gateway di primo livello.
    
    -   Il gateway applica i criteri.
2.  Il gateway invia il traffico a un proxy edge (o pool di proxy edge) configurato da Cloud Service Mesh. Questo proxy edge funge da gateway di secondo livello. Questo livello prevede quanto segue:
    
    -   Fornisce una chiara separazione delle competenze in cui, ad esempio, un team è responsabile del traffico in entrata che accede a Google Cloud mentre un altro team è responsabile del traffico in entrata che accede al mesh di quel team.
        
    -   Consente di applicare criteri che potrebbero non essere supportati nel bilanciatore del carico gestito daGoogle Cloud.
        
3.  Il gateway di secondo livello invia il traffico a un servizio nella tua mesh.
    

Il pattern di ingresso termina dopo che il traffico raggiunge un servizio in-mesh. Sia lo scenario comune sia i pattern avanzati sono descritti nelle sezioni seguenti.

### Abilita il traffico in entrata da internet

Se i tuoi client si trovano all'esterno Google Cloud e devono raggiungere Google Cloud tramite internet pubblico, puoi utilizzare uno dei seguenti bilanciatori del carico come gateway:

-   [Bilanciatore del carico delle applicazioni esterno](https://docs.cloud.google.com/load-balancing/docs/https?hl=it)
-   [Bilanciatore del carico di rete passthrough esterno](https://docs.cloud.google.com/load-balancing/docs/network?hl=it)
-   [Bilanciatore del carico di rete proxy esterno](https://docs.cloud.google.com/load-balancing/docs/tcp?hl=it)

[![Traffico in entrata dai client su internet pubblico ai servizi in-mesh utilizzando un bilanciatore del carico.](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-ingress-public.svg?hl=it)](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-ingress-public.svg?hl=it)

Traffico in entrata dai client su internet pubblico ai servizi in-mesh utilizzando un bilanciatore del carico (fai clic per ingrandire)

In questo pattern, il bilanciatore del carico gestito da Google Cloudfunge da gateway. Il gateway gestisce il traffico in entrata prima di inoltrarlo a un servizio nella tua rete mesh.

Ad esempio, potresti scegliere un bilanciatore del carico delle applicazioni esterno come gateway per utilizzare quanto segue:

-   Un indirizzo IP anycast globale instradabile pubblicamente, che riduce al minimo la latenza e i costi di attraversamento della rete.
-   [Cloud Armor](https://docs.cloud.google.com/armor/docs/cloud-armor-overview?hl=it) e terminazione TLS per proteggere il traffico verso il tuo mesh.
-   [Cloud CDN](https://docs.cloud.google.com/cdn/docs/overview?hl=it) per pubblicare contenuti web e video.
-   Funzionalità di gestione del traffico come il routing basato sull'host e sul percorso.

Per ulteriori informazioni che ti aiutino a scegliere un gateway appropriato, consulta la sezione [Scegliere un gateway per la mesh](#choosing-gateway).

### Abilita il traffico in entrata dai client in VPC e dalle reti on-premise connesse

Se i client si trovano all'interno della rete VPC o se sono on-premise e possono raggiungere i servizi Google Cloud utilizzando un metodo di connettività privato (come Cloud VPN o Cloud Interconnect), puoi utilizzare uno dei seguenti bilanciatori del carico come gateway:

-   [Bilanciatore del carico delle applicazioni interno](https://docs.cloud.google.com/load-balancing/docs/l7-internal?hl=it)
-   [Bilanciatore del carico di rete passthrough interno](https://docs.cloud.google.com/load-balancing/docs/internal?hl=it)

[![Traffico in entrata dai client su una rete VPC ai servizi in-mesh utilizzando un bilanciatore del carico.](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-ingress-private.svg?hl=it)](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-ingress-private.svg?hl=it)

Traffico in entrata dai client su una rete VPC ai servizi in-mesh utilizzando un bilanciamento del carico (fai clic per ingrandire)

In questo pattern, il bilanciatore del carico gestito da Google Cloudfunge da gateway. Il gateway gestisce il traffico in entrata prima di inoltrarlo a un servizio nella tua rete mesh.

Ad esempio, potresti scegliere un bilanciatore del carico delle applicazioni interno come gateway per poter utilizzare queste funzionalità:

-   Un indirizzo IP indirizzabile privatamente
-   Terminazione TLS per proteggere il mesh
-   Funzionalità di gestione avanzata del traffico, come la suddivisione del traffico in base al peso
-   NEG come backend

Per ulteriori informazioni che ti aiutino a scegliere un gateway appropriato, consulta la sezione [Scegliere un gateway per la mesh](#choosing-gateway).

### Gestire il traffico in entrata utilizzando un gateway di secondo livello al perimetro del mesh

A seconda delle tue esigenze, potresti prendere in considerazione un pattern più avanzato che aggiunge un gateway aggiuntivo.

[![Traffico in entrata dai client esterni ai servizi in-mesh utilizzando un bilanciatore del carico e un proxy edge.](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-ingress-edge-proxy.svg?hl=it)](https://docs.cloud.google.com/static/service-mesh/v1.21/docs/images/csm-ingress-edge-proxy.svg?hl=it)

Traffico in entrata da client esterni a servizi in-mesh utilizzando un bilanciatore del carico e un proxy edge (fai clic per ingrandire)

Questo gateway è un proxy perimetrale configurato per Cloud Service Mesh (o un pool di proxy) che si trova dietro il bilanciatore del carico gestito da Google Cloud. Puoi ospitare questo gateway di secondo livello nel tuo progetto utilizzando un pool di VM Compute Engine (un gruppo di istanze gestite) o servizi GKE.

Sebbene questo pattern sia più avanzato, offre vantaggi aggiuntivi:

-   Il bilanciatore del carico gestito da Google Cloudapplica un insieme iniziale di criteri, ad esempio la protezione Cloud Armor se utilizzi un bilanciatore del carico delle applicazioni esterno.
    
-   Il proxy perimetrale configurato con Cloud Service Mesh applica un secondo insieme di policy che potrebbero non essere disponibili nel bilanciatore del carico gestito da Google Cloud. Queste norme includono la gestione avanzata del traffico che utilizza espressioni regolari applicate alle intestazioni HTTP e la suddivisione del traffico basata sul peso.
    

**Nota:** i proxy configurati per Cloud Service Mesh [supportano protocolli specifici](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features?hl=it). Le richieste che utilizzano un protocollo non supportato vengono eliminate quando raggiungono un proxy configurato con Cloud Service Mesh.

Questo pattern può essere configurato in modo da riflettere la struttura organizzativa. Ad esempio:

1.  Un team potrebbe essere responsabile della gestione del traffico in entrata a Google Cloud , mentre un altro team è responsabile della gestione del traffico in entrata alla propria mesh.
    
2.  Se più team offrono servizi su un VPC condiviso e ogni team possiede il proprio progetto di servizio, i team possono utilizzare questo pattern per gestire e applicare i criteri nelle proprie mesh. Ogni team può esporre un gateway configurato con Cloud Service Mesh raggiungibile su una singola coppia di indirizzo IP e porta. Un team può quindi definire e gestire in modo indipendente i criteri applicati al traffico in entrata nel mesh del team.
    

Questo pattern può essere implementato utilizzando qualsiasi bilanciatore del carico gestito da Google Cloud, a condizione che il bilanciatore del carico possa inviare traffico ai backend che ospitano i gateway configurati per Cloud Service Mesh.

## Utilizzare le API di routing del servizio per il traffico in entrata

Le API di routing dei servizi forniscono la risorsa `Gateway` per configurare la gestione del traffico e la sicurezza per i proxy Envoy che fungono da gateway di ingresso, consentendo ai client esterni di connettersi al mesh di servizi (nord-sud). Per saperne di più, leggi la [panoramica del routing dei servizi](https://docs.cloud.google.com/service-mesh/v1.21/docs/service-routing/service-routing-overview?hl=it) e [Configurare un gateway in entrata](https://docs.cloud.google.com/service-mesh/v1.21/docs/service-routing/set-up-ingress-gateway?hl=it).

## Passaggi successivi

-   Per configurare un gateway in entrata, vedi [Configurazione di Cloud Service Mesh per un gateway in entrata](https://docs.cloud.google.com/service-mesh/v1.21/docs/service-routing/set-up-ingress-gateway?hl=it).
-   Per raggruppare le VM e i container che eseguono il tuo codice come endpoint dei tuoi servizi, consulta [Rilevamento dei servizi Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/service-routing/service-discovery?hl=it).
-   Per utilizzare Cloud Service Mesh con VPC condiviso, consulta [Configurare un service mesh multicluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/service-routing/set-up-multicluster-gke-mesh?hl=it).
-   Per saperne di più su Cloud Service Mesh, consulta la [panoramica di Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/v1.21/docs/service-routing/overview?hl=it).

Invia feedback

Salvo quando diversamente specificato, i contenuti di questa pagina sono concessi in base alla [licenza Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), mentre gli esempi di codice sono concessi in base alla [licenza Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Per ulteriori dettagli, consulta le [norme del sito di Google Developers](https://developers.google.com/site-policies?hl=it). Java è un marchio registrato di Oracle e/o delle sue consociate.

Ultimo aggiornamento 2026-03-21 UTC.
