-   [Home](https://docs.cloud.google.com/?hl=pt)
-   [Documentation](https://docs.cloud.google.com/docs?hl=pt)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml?hl=pt)
-   [Vertex AI](https://docs.cloud.google.com/vertex-ai/docs?hl=pt)
-   [Generative AI on Vertex AI](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/overview?hl=pt)
-   [Guias](https://docs.cloud.google.com/vertex-ai/generative-ai/docs?hl=pt)

Envie comentários

# IA responsável Mantenha tudo organizado com as coleções Salve e categorize o conteúdo com base nas suas preferências.

Os grandes modelos de linguagem (GMLs) podem traduzir idiomas, resumir texto, gerar escrita criativa, gerar código, potenciar chatbots e assistentes virtuais, e complementar motores de pesquisa e sistemas de recomendações. Ao mesmo tempo, enquanto tecnologia em fase inicial, as suas capacidades e utilizações em evolução criam potencial para aplicação incorreta, utilização indevida e consequências não intencionais ou imprevistas. Os grandes modelos de linguagem podem gerar resultados inesperados, incluindo texto ofensivo, insensível ou factualmente incorreto.

Além disso, a incrível versatilidade dos GMLs também dificulta a previsão exata dos tipos de resultados não intencionais ou imprevistos que podem produzir. Tendo em conta estes riscos e complexidades, as APIs de IA generativa do Vertex AI são concebidas a pensar nos [princípios da IA da Google](https://ai.google/principles/?hl=pt). No entanto, é importante que os programadores compreendam e testem os seus modelos para os implementar de forma segura e responsável. Para ajudar os programadores, o Vertex AI Studio tem filtragem de conteúdo incorporada, e as nossas APIs de IA generativa têm classificação de atributos de segurança para ajudar os clientes a testarem os filtros de segurança da Google e definirem limites de confiança adequados para o respetivo exemplo de utilização e empresa. Consulte a secção [Filtros e atributos de segurança](#safety_filters_and_attributes) para saber mais.

Quando as nossas APIs generativas são integradas no seu exemplo de utilização e contexto únicos, podem ter de ser consideradas outras considerações de IA responsável e [limitações](#limitations). Incentivamos os clientes a promoverem a equidade, a interpretabilidade, a privacidade e a segurança, seguindo as [práticas recomendadas](https://ai.google/responsibilities/responsible-ai-practices/?hl=pt).

## Filtros e atributos de segurança

Para saber como usar filtros de segurança e atributos para uma API, consulte a [API Gemini no Vertex AI](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/multimodal/configure-safety-attributes?hl=pt).

## Limitações do modelo

_As limitações que pode encontrar ao usar modelos de IA generativa incluem (entre outras):_

-   **Casos extremos**: os casos extremos referem-se a situações invulgares, raras ou excecionais que não estão bem representadas nos dados de preparação. Estes casos podem levar a limitações no desempenho do modelo, como confiança excessiva do modelo, interpretação incorreta do contexto ou resultados inadequados.
    
-   **Alucinações, fundamentação e factualidade dos modelos**: os modelos de IA generativa podem não ter factualidade em conhecimentos do mundo real, propriedades físicas ou compreensão precisa. Esta limitação pode levar a alucinações do modelo, que se referem a instâncias em que pode gerar resultados que parecem plausíveis, mas que são factualmente incorretos, irrelevantes, impróprios ou sem sentido. Para reduzir esta probabilidade, pode fundamentar os modelos nos seus dados específicos. Para saber mais sobre a fundamentação na Vertex AI, consulte a [vista geral da fundamentação](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview?hl=pt).
    
-   **Qualidade e ajuste dos dados**: a qualidade, a precisão e a parcialidade do comando ou dos dados introduzidos num modelo podem ter um impacto significativo no respetivo desempenho. Se os utilizadores introduzirem dados ou comandos imprecisos ou incorretos, o modelo pode ter um desempenho abaixo do ideal ou gerar resultados falsos.
    
-   **Ampliação de parcialidades**: os modelos de IA generativa podem ampliar inadvertidamente as parcialidades existentes nos respetivos dados de treino, o que leva a resultados que podem reforçar ainda mais os preconceitos sociais e o tratamento desigual de determinados grupos.
    
-   **Qualidade do idioma**: embora os modelos produzam capacidades multilingues impressionantes nos testes de referência em que foram avaliados, a maioria dos nossos testes de referência (incluindo todas as avaliações de imparcialidade) estão no idioma inglês. Para mais informações, consulte o [blogue de investigação da Google](https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html).
    
    -   Os modelos de IA generativa podem oferecer uma qualidade de serviço inconsistente a diferentes utilizadores. Por exemplo, a geração de texto pode não ser tão eficaz para alguns dialetos ou variedades linguísticas devido à sub-representação nos dados de preparação. O desempenho pode ser pior para idiomas que não sejam o inglês ou variedades do idioma inglês com menos representação.
-   **Benchmarks e subgrupos de equidade**: as análises de equidade da Google Research dos nossos modelos de IA generativa não fornecem uma explicação exaustiva dos vários riscos potenciais. Por exemplo, focamo-nos em parcialidades ao longo dos eixos de género, raça, etnia e religião, mas realizamos a análise apenas nos dados e resultados do modelo em inglês. Para mais informações, consulte o [blogue de investigação da Google](https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html).
    
-   **Conhecimentos limitados do domínio**: os modelos de IA generativa podem não ter a profundidade de conhecimentos necessária para fornecer respostas precisas e detalhadas sobre tópicos altamente especializados ou técnicos, o que leva a informações superficiais ou incorretas. Para exemplos de utilização especializados e complexos, os modelos devem ser otimizados com base em dados específicos do domínio, e deve existir uma supervisão humana significativa em contextos com o potencial de afetar materialmente os direitos individuais.
    
-   **Comprimento e estrutura das entradas e saídas**: os modelos de IA generativa têm um limite máximo de tokens de entrada e saída. Se a entrada ou a saída exceder este limite, os nossos classificadores de segurança não são aplicados, o que pode, em última análise, levar a um mau desempenho do modelo. Embora os nossos modelos sejam concebidos para processar uma vasta gama de formatos de texto, o respetivo desempenho pode ser afetado se os dados de entrada tiverem uma estrutura invulgar ou complexa.
    

## Práticas recomendadas

Para utilizar esta tecnologia de forma segura e responsável, também é importante considerar outros riscos específicos do seu exemplo de utilização, utilizadores e contexto empresarial, além das salvaguardas técnicas incorporadas.

Recomendamos que siga os seguintes passos:

1.  Avalie os riscos de segurança da sua aplicação.
2.  Realize testes de segurança adequados ao seu exemplo de utilização.
3.  Configure filtros de segurança, se necessário.
4.  Solicitar feedback dos utilizadores e monitorizar o conteúdo.

## Denunciar abuso

Pode denunciar suspeitas de abuso do Serviço ou qualquer resultado gerado que contenha material impróprio ou informações incorretas através do seguinte formulário: [Denunciar suspeitas de abuso no Google Cloud](https://support.google.com/code/contact/cloud_platform_report?hl=pt).

## Recursos adicionais

-   Saiba mais sobre a [monitorização de abusos](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/abuse-monitoring?hl=pt).
-   Saiba mais sobre as recomendações da Google para [práticas de IA responsável](https://ai.google/responsibilities/responsible-ai-practices/?category=general&hl=pt).
-   Leia o nosso blogue, [Uma agenda partilhada para o progresso da IA responsável](https://blog.google/technology/ai/a-shared-agenda-for-responsible-ai-progress/?hl=pt)

Envie comentários

Exceto em caso de indicação contrária, o conteúdo desta página é licenciado de acordo com a [Licença de atribuição 4.0 do Creative Commons](https://creativecommons.org/licenses/by/4.0/), e as amostras de código são licenciadas de acordo com a [Licença Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Para mais detalhes, consulte as [políticas do site do Google Developers](https://developers.google.com/site-policies?hl=pt). Java é uma marca registrada da Oracle e/ou afiliadas.

Última atualização 2026-01-14 UTC.
