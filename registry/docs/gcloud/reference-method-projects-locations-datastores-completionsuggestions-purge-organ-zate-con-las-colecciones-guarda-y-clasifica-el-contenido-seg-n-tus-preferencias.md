-   [Home](https://docs.cloud.google.com/?hl=es)
-   [Documentation](https://docs.cloud.google.com/docs?hl=es)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml?hl=es)
-   [Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs?hl=es)
-   [Referencia](https://docs.cloud.google.com/gemini/enterprise/docs/apis?hl=es)

Enviar comentarios

# Method: projects.locations.dataStores.completionSuggestions.purge Organízate con las colecciones Guarda y clasifica el contenido según tus preferencias.

 

Elimina permanentemente todos los `[CompletionSuggestion](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/InlineSource?hl=es#CompletionSuggestion)`s de un almacén de datos.

### Solicitud HTTP

`POST https://discoveryengine.googleapis.com/v1/{parent=projects/*/locations/*/dataStores/*}/completionSuggestions:purge`

La URL utiliza la sintaxis de [transcodificación a gRPC](https://google.aip.dev/127).

### Parámetros de ruta

 

Parámetros

`parent`

`string`

Obligatorio. Nombre del recurso de almacén de datos superior para el que se van a purgar las sugerencias de finalización. Sigue el patrón projects/\*/locations/\*/collections/\*/dataStores/\*.

### Cuerpo de la solicitud

El cuerpo de la solicitud debe estar vacío.

### Cuerpo de la respuesta

Si la solicitud se hace correctamente, en el cuerpo de la respuesta se incluye una instancia de `[Operation](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/ListOperationsResponse?hl=es#Operation)`.

### Permisos de autorización

Debes disponer de uno de los siguientes permisos de OAuth:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/discoveryengine.readwrite`
-   `https://www.googleapis.com/auth/discoveryengine.assist.readwrite`

Para obtener más información, consulta el [Authentication Overview](https://docs.cloud.google.com/docs/authentication?hl=es#authorization-gcp).

Enviar comentarios

A menos que se indique lo contrario, el contenido de esta página está sujeto a la [licencia Reconocimiento 4.0 de Creative Commons](https://creativecommons.org/licenses/by/4.0/) y las muestras de código están sujetas a la [licencia Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Para obtener más información, consulta las [políticas del sitio web de Google Developers](https://developers.google.com/site-policies?hl=es). Java es una marca registrada de Oracle o sus afiliados.

Última actualización: 2025-10-19 (UTC).
