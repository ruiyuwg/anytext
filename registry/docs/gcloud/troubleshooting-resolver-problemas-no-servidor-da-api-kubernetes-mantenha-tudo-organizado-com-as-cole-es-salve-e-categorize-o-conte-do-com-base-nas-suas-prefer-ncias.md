-   [Home](https://docs.cloud.google.com/?hl=pt-br)
-   [Áreas de tecnologia](https://docs.cloud.google.com/docs?hl=pt-br)
-   [Google Distributed Cloud](https://docs.cloud.google.com/distributed-cloud?hl=pt-br)
-   [GDC for bare metal](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs?hl=pt-br)
-   [Guias](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/concepts/about-bare-metal?hl=pt-br)

Envie comentários

# Resolver problemas no servidor da API Kubernetes Mantenha tudo organizado com as coleções Salve e categorize o conteúdo com base nas suas preferências.

Nesta página, mostramos como resolver problemas com o servidor da API Kubernetes (`kube-apiserver`) para o Google Distributed Cloud.

Esta página é destinada a administradores de TI e operadores que gerenciam o ciclo de vida da infraestrutura tecnológica e respondem a alertas e páginas quando os objetivos de nível de serviço (SLO) não são atendidos ou os aplicativos falham. Para saber mais sobre papéis comuns e tarefas de exemplo referenciados no conteúdo do Google Cloud, consulte [Funções e tarefas comuns do usuário do GKE](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks?hl=pt-br).

## Tempos limite e chamadas com falha do webhook

Esses erros podem ser analisados de algumas maneiras diferentes. Se algum dos sintomas a seguir ocorrer, é possível que as chamadas do webhook estejam falhando:

-   **Conexão recusada**: se `kube-apiserver` relatar erros de tempo limite para chamar o webhook, o seguinte erro será informado nos registros:
    
    ```
    failed calling webhook "server.system.private.gdc.goog":
    failed to call webhook: Post "https://root-admin-webhook.gpc-system.svc:443/mutate-system-private-gdc-goog-v1alpha1-server?timeout=10s":
    dial tcp 10.202.1.18:443: connect: connection refused
    ```
    
-   **Prazo do contexto excedido**: o erro a seguir também pode ser mostrado nos registros:
    
    ```
    failed calling webhook "namespaces.hnc.x-k8s.io": failed to call webhook: Post
    "https://hnc-webhook-service.hnc-system.svc:443/validate-v1-namespace?timeout=10s\":
    context deadline exceeded"
    ```
    

Se você achar que está enfrentando tempos limite do webhook ou chamadas de webhook com falha, use um dos métodos a seguir para confirmar o problema:

-   Verifique se há um problema na rede no registro do servidor de API.
    
    -   Verifique se há erros relacionados à rede no registro, como `TLS handshake error`.
    -   Verifique se o IP/porta corresponde ao que o servidor da API está configurado para responder.
-   Monitore a latência do webhook de acordo com as seguintes etapas:
    
    1.  No console, acesse a página do Cloud Monitoring.
        
        [Acessar a página do Cloud Monitoring](https://console.cloud.google.com/monitoring/?hl=pt-br)
        
    2.  Selecione **Metrics Explorer**.
        
    3.  Selecione a métrica `apiserver_admission_webhook_admission_duration_seconds`.
        

Para resolver esse problema, analise o seguinte:

-   O webhook pode exigir regras de firewall adicionais. Para mais informações, confira como [adicionar regras de firewall em casos de uso específicos](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/private-clusters?hl=pt-br#add_firewall_rules).
    
-   Se o webhook precisar de mais tempo para ser concluído, [configure um valor personalizado de tempo limite](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#timeouts). A latência dos webhooks aumenta a latência da solicitação da API, por isso é necessário avaliar o mais rápido possível.
    
-   Se o erro do webhook bloquear a disponibilidade do cluster ou se o webhook for inofensivo para remover e atenuar a situação, verifique se é possível definir temporariamente `failurePolicy` como `Ignore` ou remover o webhook que apresentou problemas.
    

## Falha de discagem ou latência do servidor de API

Esse erro pode ser observado de algumas maneiras diferentes:

-   **Erros de resolução de nome externo**: um cliente externo pode retornar erros com `lookup` na mensagem, como:
    
    ```
    dial tcp: lookup kubernetes.example.com on 127.0.0.1:53: no such host
    ```
    
    Esse erro não se aplica a um cliente em execução no cluster. O IP de serviço do Kubernetes foi injetado. Portanto, nenhuma resolução é necessária.
    
-   **Erros de rede**: o cliente pode imprimir um erro de rede genérico ao tentar discar o servidor da API, como nos exemplos a seguir:
    
    ```
    dial tcp 10.96.0.1:443: connect: no route to host
    dial tcp 10.96.0.1:443: connect: connection refused
    dial tcp 10.96.0.1:443: connect: i/o timeout
    ```
    
-   **Conexão de alta latência com o servidor da API**: a conexão com o servidor da API pode ser bem-sucedida, mas o tempo limite das solicitações pode ser atingido no lado do cliente. Nesse cenário, o cliente geralmente imprime mensagens de erro que contêm `context deadline exceeded`.
    

Se a conexão com o servidor da API falhar completamente, tente realizar a conexão no mesmo ambiente em que o cliente informa o erro. Os [contêineres temporários do Kubernetes](https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/) podem ser usados para injetar um contêiner de depuração nos namespaces atuais da seguinte maneira:

1.  No local em que o cliente com problemas é executado, use `kubectl` para realizar uma solicitação com alto nível de detalhes. Por exemplo, uma solicitação `GET` para `/healthz` geralmente não requer autenticação:
    
    ```
    kubectl get -v999 --raw /healthz
    ```
    
2.  Se a solicitação falhar ou `kubectl` não estiver disponível, será possível extrair o URL da saída e executar manualmente a solicitação com `curl`. Por exemplo, se o host de serviço recebido da saída anterior for `https://192.0.2.1:36917/`, será possível enviar uma solicitação semelhante da seguinte maneira:
    
    ```
    # Replace "--ca-cert /path/to/ca.pem" to "--insecure" if you are accessing
    # a local cluster and you trust the connection cannot be tampered.
    # The output is always "ok" and thus contains no sensentive information.
    
    curl -v --cacert /path/to/ca.pem https://192.0.2.1:36917/healthz
    ```
    
    A saída desse comando geralmente indica a causa raiz de uma falha de conexão.
    
    **Observação**: não é possível usar os comandos `ping` ou `traceroute` no endereço IP. Um IP de serviço do Kubernetes não aceita ICMP ou protocolos fora da lista definida no recurso de serviço.
    
    Se a conexão for bem-sucedida, mas estiver lenta ou expirar, isso indica um servidor de API sobrecarregado. Para confirmar, no console, confira `API Server Request Rate` e solicite métricas de latência em `Cloud Kubernetes > Anthos > Cluster > K8s Control Plane`.
    

Para resolver essas falhas de conexão ou problemas de latência, analise as seguintes opções de correção:

-   Se ocorrer um erro de rede dentro do cluster, talvez haja um problema com o plug-in da interface de rede do contêiner (CNI, na sigla em inglês). Esse problema geralmente é temporário e se resolve por conta própria após uma recriação ou reagendamento do pod.
    
-   Se o erro de rede for de fora do cluster, verifique se o cliente está configurado corretamente para acessar o cluster ou gere a configuração de cliente de novo. Se a conexão passar por um proxy ou gateway, verifique se outra conexão que passa pelo mesmo mecanismo funciona.
    
-   Se o servidor da API estiver sobrecarregado, geralmente significa que muitos clientes acessam o servidor da API ao mesmo tempo. Um único cliente não pode sobrecarregar um servidor da API devido à limitação e ao recurso [Prioridade e imparcialidade](https://kubernetes.io/docs/concepts/cluster-administration/flow-control/). Analise a carga de trabalho das seguintes áreas:
    
    -   Funciona no nível do pod. É mais comum criar e esquecer pods por engano do que recursos de nível mais alto.
    -   Ajustar o número de réplicas com cálculos incorretos.
    -   Um webhook que retorna a solicitação para si ou amplifica a carga ao criar mais solicitações do que processa.

## A seguir

Se precisar de mais ajuda, entre em contato com o [Cloud Customer Care](https://cloud.google.com/support-hub?hl=pt-br). Consulte também [Receber suporte](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support?hl=pt-br) para mais informações sobre recursos de suporte, incluindo:

-   [Requisitos](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support?hl=pt-br#intro-support) para abrir um caso de suporte.
-   [Ferramentas](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support?hl=pt-br#support-tools) para ajudar na solução de problemas, como configuração do ambiente, registros e métricas.
-   [Componentes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support?hl=pt-br#what-we-support) compatíveis.

Envie comentários

Exceto em caso de indicação contrária, o conteúdo desta página é licenciado de acordo com a [Licença de atribuição 4.0 do Creative Commons](https://creativecommons.org/licenses/by/4.0/), e as amostras de código são licenciadas de acordo com a [Licença Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Para mais detalhes, consulte as [políticas do site do Google Developers](https://developers.google.com/site-policies?hl=pt-br). Java é uma marca registrada da Oracle e/ou afiliadas.

Última atualização 2026-03-19 UTC.
