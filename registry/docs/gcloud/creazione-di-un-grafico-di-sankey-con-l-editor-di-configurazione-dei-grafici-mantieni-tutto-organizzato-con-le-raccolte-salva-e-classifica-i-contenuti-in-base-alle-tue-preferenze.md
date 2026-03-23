-   [Home](https://docs.cloud.google.com/?hl=it)
-   [Documentation](https://docs.cloud.google.com/docs?hl=it)
-   [Data analytics](https://docs.cloud.google.com/docs/data?hl=it)
-   [Looker](https://docs.cloud.google.com/looker/docs?hl=it)
-   [Guide](https://docs.cloud.google.com/looker/docs/intro?hl=it)

Invia feedback

# Creazione di un grafico di Sankey con l'editor di configurazione dei grafici Mantieni tutto organizzato con le raccolte Salva e classifica i contenuti in base alle tue preferenze.

**Nota:** a partire da Looker 24.14, l'editor di configurazione dei grafici supporta la creazione di grafici Sankey.

Un grafico di Sankey mette in evidenza il flusso da uno stato all'altro. In Looker, ogni valore della dimensione è rappresentato come uno stato e la dimensione del flusso è determinata da un valore di misura numerico.

Utilizzando l'[editor di configurazione dei grafici](https://docs.cloud.google.com/looker/docs/chart-config-editor?hl=it), puoi creare grafici Sankey partendo da un [grafico a colonne](https://docs.cloud.google.com/looker/docs/column-options?hl=it) in Looker. Per risultati ottimali, utilizza almeno due dimensioni ed esattamente una misura per creare un grafico di Sankey.

**Suggerimento** :i [suggerimenti personalizzati](https://docs.cloud.google.com/looker/docs/custom-tooltips?hl=it) sono supportati per i grafici di Sankey creati con l'editor di configurazione dei grafici. Per utilizzare descrizioni comando personalizzate in un grafico Sankey, configura le impostazioni delle descrizioni comando personalizzate nella sezione [**Personalizzazioni**](https://docs.cloud.google.com/looker/docs/column-options?hl=it#customizations) della scheda **Stile** dell'[editor di esplorazione delle visualizzazioni](https://docs.cloud.google.com/looker/docs/creating-visualizations?hl=it#quick_guide) del grafico a colonne.

Ad esempio, puoi creare un grafico di Sankey che mostri i valori della misura **Conteggio articoli ordine** in base a diversi valori della dimensione **Collezione stagionale**, che confluiscono nei valori della dimensione **Categoria**. Ogni valore della dimensione è rappresentato da un rettangolo codificato a colori. La larghezza di ogni linea nel punto in cui incontra ogni rettangolo corrisponde al valore della misura **Conteggio elementi ordine** per quella dimensione. ![](https://docs.cloud.google.com/static/looker/docs/images/sankey-2412.png?hl=it)

## Prerequisiti

Per accedere all'editor di configurazione dei grafici, devi disporre dell'autorizzazione [`can_override_vis_config`](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles?hl=it#can_override_vis_config).

### Scrittura dello snippet JSON

Per creare un grafico Sankey, inizia con il seguente snippet JSON:

```
{
  chart: {
    type: 'sankey'
  }
}
```

## Creare un diagramma di Sankey

Per creare un grafico Sankey:

1.  Visualizza un [grafico a colonne](https://docs.cloud.google.com/looker/docs/column-options?hl=it) in un'esplorazione o modifica un grafico a colonne in un look o in una dashboard.
    
    Per questo esempio, ti consigliamo di iniziare con un grafico a colonne con due dimensioni e una metrica. Il grafico iniziale potrebbe essere simile a questo esempio:
    
    ![Grafico a colonne di esempio con Nome categoria e Raccolta stagionale sull&#39;asse X e Conteggio articoli ordine sull&#39;asse Y.](https://docs.cloud.google.com/static/looker/docs/images/sankey-base-2412.png?hl=it)
    
2.  Apri il menu **Modifica** nella visualizzazione.
    
3.  Nella scheda **Grafico**, fai clic sul pulsante **Modifica configurazione grafico**. Looker visualizza la finestra di dialogo **Modifica configurazione grafico**.
    
4.  Seleziona la sezione **Chart Config (Override)** (Configurazione grafico (override)) e inserisci il JSON di HighCharts dalla sezione [Scrittura dello snippet JSON](#json) di questa pagina.
    
5.  Per consentire a Looker di formattare correttamente il JSON, fai clic su **<> (Formatta codice)**.
    
6.  Per testare le modifiche, fai clic su **Anteprima**.
    
7.  Per applicare le modifiche, fai clic su **Applica**. La visualizzazione verrà mostrata utilizzando i valori JSON personalizzati.
    

![](https://docs.cloud.google.com/static/looker/docs/images/sankey-editor-2412.png?hl=it)

Una volta personalizzata la visualizzazione, puoi salvarla.

## Limitazioni e requisiti

-   I grafici di Sankey richiedono almeno due dimensioni ed esattamente una misura.
-   I grafici Sankey possono mostrare un massimo di 50 righe di dati.

Invia feedback

Salvo quando diversamente specificato, i contenuti di questa pagina sono concessi in base alla [licenza Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), mentre gli esempi di codice sono concessi in base alla [licenza Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Per ulteriori dettagli, consulta le [norme del sito di Google Developers](https://developers.google.com/site-policies?hl=it). Java è un marchio registrato di Oracle e/o delle sue consociate.

Ultimo aggiornamento 2026-03-17 UTC.
