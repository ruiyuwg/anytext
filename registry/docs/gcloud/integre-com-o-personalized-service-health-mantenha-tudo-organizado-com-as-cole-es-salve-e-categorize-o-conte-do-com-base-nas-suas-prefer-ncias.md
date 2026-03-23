-   [Home](https://docs.cloud.google.com/?hl=pt)
-   [Documentation](https://docs.cloud.google.com/docs?hl=pt)
-   [Security](https://docs.cloud.google.com/docs/security?hl=pt)
-   [Personalized Service Health](https://docs.cloud.google.com/service-health/docs?hl=pt)
-   [Guias](https://docs.cloud.google.com/service-health/docs/overview?hl=pt)

Envie comentários

# Integre com o Personalized Service Health Mantenha tudo organizado com as coleções Salve e categorize o conteúdo com base nas suas preferências.

Embora as interrupções de serviço sejam inevitáveis, a comunicação transparente e antecipada é essencial para avaliar o que está a acontecer, manter os seus intervenientes informados e executar ações para minimizar o impacto na sua empresa.

A gestão de uma aplicação na nuvem fiável é uma responsabilidade partilhada entre os Google Cloud e os programadores de aplicações. Quando ocorre uma interrupção do serviço, a Google Cloud tem como objetivo comunicar o incidente rapidamente e fornecer uma avaliação do impacto.Google Cloud Tem de avaliar como receber notificações, agir em função dos incidentes emergentes e gerir o impacto na sua aplicação.

O Personalized Service Health pode ajudar neste processo. Pode integrar-se com a mesma de várias formas para saber de incidentes emergentes, avaliar o impacto nas suas aplicações e receber atualizações da Google Cloud. Este documento oferece uma vista geral de como receber sinais de interrupções de serviço da Google Cloud, incluindo recomendações sobre a integração com os mesmos.

## Decida onde integrar

O Personalized Service Health oferece uma vista personalizada dos Google Cloud produtos usados pelos seus projetos ou em toda a sua organização. Recomendamos a integração com o estado de funcionamento do serviço personalizado para lhe oferecer a maior cobertura e variedade de opções de integração.

**Ponto de integração**

**Exemplo de utilização**

**Vantagens**

**Dependências**

Painel de controlo da consola (Personalized Service Health)

Veja interrupções ativas

Personalizadas para os seus projetos e disponíveis por predefinição

Consola  
Google Cloud Identity and Access Management (IAM)

Alertas (Personalized Service Health)

Notificações proativas

Personalizado para os seus projetos, conveniente e proativo

IAM  
Cloud Logging  
Cloud Monitoring

API (Personalized Service Health)

Integre com outro sistema ou ferramenta

Personalizadas para os seus projetos ou organização

IAM

## Escolha o método de interação com o Personalized Service Health

Tem de considerar o Personalized Service Health no contexto das suas operações, monitorização e modelo de resposta a incidentes pretendidos. Ao avaliar a forma como as suas equipas usam os sinais durante e antes dos incidentes, pode decidir como quer usar o estado de funcionamento do serviço personalizado.

A tabela seguinte mostra como pode interagir com o Personalized Service Health, consoante a forma como está configurado.

**Cenário de exemplo na sua organização**

**Integração com o estado de saúde do serviço personalizado**

**Exemplos de ferramentas com as quais pode estar a fazer a integração**

Programadores que estão de serviço para algumas aplicações

Alertas de projetos individuais

Painel de controlo da Play Console

[Google Cloud Observability](https://cloud.google.com/products/operations/?hl=pt), PagerDuty

Resposta a incidentes centralizada numa organização

Integração de API com o sistema existente através da API OrganizationEvents ([v1](https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationEvents?hl=pt) e [v1beta](https://docs.cloud.google.com/service-health/docs/reference/rest/v1/organizations.locations.organizationEvents?hl=pt))

PagerDuty, painéis de controlo personalizados

Plataforma interna para gerir recursos e operações na nuvem

API Service Health  
Alertas de projetos individuais  
Integração da API Service Health com uma plataforma de programadores interna

Backstage, Terraform

Muitos projetos configurados e geridos de forma programática (por exemplo,mais de 1000)

API Service Health  
Notificações automatizadas baseadas em APIs

Backstage, Terraform, PagerDuty

## Use o Personalized Service Health durante um incidente

Depois de fazer a integração com o estado de saúde do serviço personalizado e começar a receber notificações de alertas, o estado de saúde do serviço personalizado fornece informações sobre interrupções que podem ajudar a gerir o respetivo impacto. Google Cloud

### Detete e analise o incidente

As perguntas que pode fazer nesta fase incluem:

-   É um problema real?
-   Consegue validar o impacto?
-   Quais são os sintomas?
-   Que utilizadores, produtos ou partes da empresa são afetados? Que geografias?

O estado de saúde do serviço personalizado ajuda a compreender se o problema tem origem no seu projeto ou na Google, para que possa implementar a resposta a incidentes adequada. Permite-lhe encontrar e ver informações sobre eventos para que possa monitorizar o evento, os produtos afetados e as localizações que afetam o seu projeto.

Seguem-se os passos que pode seguir:

1.  Reveja o alerta, se o tiver configurado.
    -   O que fez com que este alerta fosse acionado?
    -   Como é que estes alertas se enquadram nos seus outros alertas potencialmente específicos do produto?
2.  Aceda ao painel de controlo do estado do serviço para o seu projeto ou organização. Pode ver eventos, produtos afetados e localizações rapidamente, e responder às seguintes perguntas:
    -   Quais dos seus projetos são afetados?
    -   Quais os produtos dos quais o seu projeto depende que são afetados?
    -   O evento está a afetar recursos específicos nessas localizações?
3.  Reveja os eventos e compreenda o respetivo âmbito, impacto e relevância para o seu projeto.
4.  Identifique um evento que pareça estar relacionado com o problema que está a ver.
5.  Encontre os passos de validação, a mitigação (se disponível) e o tempo de resolução esperado para o evento.

O Personalized Service Health ajuda a rever o estado atual e o impacto dos incidentes que afetam o seu projeto ou organização, para que possa geri-los e responder-lhes de forma eficiente. Por exemplo, pode dar prioridade de forma eficaz identificando com precisão o incidente de prioridade mais elevada.

### Mitigar, resolver ou encaminhar o incidente

As perguntas que pode fazer nesta fase incluem:

-   Como pode contornar o incidente?
-   Pode corrigi-lo diretamente?
-   Deve iniciar uma comutação por falha agora ou esperar mais tempo?
-   Quem deve notificar para que o problema seja resolvido?

O Personalized Service Health ajuda a compreender o impacto de um incidente nos seus projetos e recursos, a receber informações sobre soluções alternativas disponíveis e a receber atualizações sobre o tempo de resolução estimado.

#### Monitorize o progresso em direção à resolução de incidentes

A vista geral de eventos no painel de controlo Estado do serviço identifica informações importantes, como sintomas e soluções alternativas, que são necessárias para a mitigação e mostra quando o estado muda. Estes detalhes permitem-lhe:

-   Monitorize um resumo contínuo do potencial impacto à medida que a situação evolui.
-   Mantenha-se a par de quaisquer novos desenvolvimentos e da hora prevista da próxima comunicação ou atualização.
-   Veja quando um sintoma é publicado.
-   Ver quando é identificada uma solução alternativa.
-   Veja quando o estado muda para **Resolvido**.

Pode realizar as seguintes ações enquanto monitoriza o progresso:

-   Reveja as soluções alternativas, se disponíveis.
-   Implemente a resposta a incidentes adequada para o seu projeto ou organização.
-   Continue a monitorizar o evento até que seja atenuado ou resolvido.

#### Quando contactar o apoio técnico

A Google tem conhecimento dos eventos que aparecem no painel de controlo de estado do serviço. Para saber o que a Google está a fazer em relação a um evento, selecione-o para ver os detalhes.

Se um problema não parecer estar representado em nenhum dos eventos no painel de controlo, contacte o apoio técnico.

### Use o estado de saúde do serviço personalizado com outras origens de informações sobre incidentes

Independentemente da configuração da sua empresa, use o Personalized Service Health como um sinal adicional ao avaliar o impacto dos incidentes. Certifique-se de que pode rever várias fontes de informações sobre incidentes para poder decidir os passos seguintes com base em dados e provas.

Os motivos para usar várias origens de informações sobre incidentes incluem:

-   Um Google Cloud produto pode estar a sofrer um incidente numa determinada localização, mas os seus projetos podem não ser afetados porque estão numa localização diferente.
-   Se o seu sistema de publicação tiver duas réplicas completas em zonas separadas e um produto crítico Google Cloud numa zona falhar, o estado de saúde do serviço personalizado informa-o dessa falha. No entanto, os seus utilizadores podem não ser afetados e pode não ter de tomar medidas imediatas.
-   Se o seu projeto depender de muitos Google Cloud produtos numa localização, o estado de funcionamento do serviço personalizado não vai saber:
    -   Se o seu projeto exigir que todos os produtos sejam funcionais.
    -   Se o seu projeto continuar a funcionar caso um produto falhe.
    -   Se toda a sua aplicação for afetada se um ou mais dos produtos falharem.
-   O próprio Personalized Service Health também pode sofrer degradação ou falhas. Para verificar, pode [verificar o respetivo estado](https://docs.cloud.google.com/service-health/docs/service-health-disruption?hl=pt).

Tem de interpretar os sinais do Personalized Service Health conforme adequado à sua configuração.

Envie comentários

Exceto em caso de indicação contrária, o conteúdo desta página é licenciado de acordo com a [Licença de atribuição 4.0 do Creative Commons](https://creativecommons.org/licenses/by/4.0/), e as amostras de código são licenciadas de acordo com a [Licença Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Para mais detalhes, consulte as [políticas do site do Google Developers](https://developers.google.com/site-policies?hl=pt). Java é uma marca registrada da Oracle e/ou afiliadas.

Última atualização 2026-01-15 UTC.
