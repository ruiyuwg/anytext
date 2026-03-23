-   [Home](https://docs.cloud.google.com/?hl=es-419)
-   [Documentation](https://docs.cloud.google.com/docs?hl=es-419)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml?hl=es-419)
-   [Google Cloud CCaaS](https://docs.cloud.google.com/contact-center/ccai-platform/docs?hl=es-419)
-   [Guías del usuario](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started?hl=es-419)

Enviar comentarios

# Puntos de acceso directo (DAP) Organiza tus páginas con colecciones Guarda y categoriza el contenido según tus preferencias.

Los puntos de acceso directo te permiten dirigir las llamadas de voz a colas específicas en la estructura de tu cola. El uso de DAPs agiliza el proceso de llamadas para los usuarios finales, ya que los dirige directamente a filas específicas en lugar de obligarlos a navegar por un árbol de filas extenso. Por ejemplo, puedes configurar un DAP para enrutar a los usuarios finales nuevos a una fila de integración dedicada.

Existen varias formas de configurar los DAP, ya sea con una API o tu CRM (o ambos). En esta sección, se describen las opciones de configuración de los DAP.

**Nota:** Los DAP están disponibles para los canales de la Web, dispositivos móviles y el IVR.

## Tipos de DAP

Puedes configurar el sistema para que cree un DAP con uno de los siguientes **tipos de puntos de acceso**, según el canal que uses. Los distintos tipos usan información diferente para detectar una coincidencia y enrutar una llamada del usuario final.

Tipo de DAP

IVR

Dispositivos móviles

Web

**DAP de segmento de usuarios**: Asigna y dirige a los usuarios finales según los pares clave-valor de los **datos de la cuenta del usuario final** de tu CRM.

✔

✔

✔

**DAP general**: Es un **punto de acceso** que tus desarrolladores colocan en la configuración de tu app o SDK. Cuando un usuario final llega a este punto de acceso, se lo enruta a una cola específica.

✔

✔

✔

**Número de teléfono de asistencia al cliente DAP**: Dirige a los usuarios finales a colas específicas según el **número de teléfono de asistencia al cliente** al que llaman para comunicarse con tu centro de llamadas.

✔

**DAP de respuesta de la API**: Asocia y enruta a los usuarios finales a colas específicas según los pares clave-valor de la **respuesta de la API**.

✔

**DAP de la aplicación para dispositivos móviles**: Dirige a los usuarios finales a colas específicas según la **aplicación para dispositivos móviles**. Solo está disponible para los entornos con la función [Varias apps para dispositivos móviles](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources?hl=es-419#UUID-f8702524-4b0a-dc36-83f8-d48e8892a2da) habilitada.

✔

## Orden de coincidencia y las interacciones de la DAP

Cuando usas varios tipos de DAP, Contact Center AI Platform (CCAI Platform) verifica las coincidencias, primero según el tipo de DAP y, luego, según el orden en que se crearon los DAP. El orden de DAP es diferente si usas una o más apps para dispositivos móviles con tu entorno. Si se cumplen dos criterios de DAP dentro de un tipo de DAP específico, CCAI Platform enruta la llamada según el primer criterio creado.

### Tipos y orden de DAP de canales de IVR estándar

1.  **[Resguardo de RTPC para dispositivos móviles (si se usa un SDK para dispositivos móviles)](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources?hl=es-419#UUID-f8702524-4b0a-dc36-83f8-d48e8892a2da)**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
2.  **DAP de número de teléfono**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
3.  **DAP general**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
4.  **API de DAP**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
5.  **Segmento de usuarios de SAP**
    
    -   Coincidencia: Se enruta a esa cola.
    -   Sin coincidencias: Se dirige al principio de la fila.

#### Orden alternativo de DAP del IVR

Para obtener acceso, comunícate con el equipo de asistencia.

1.  **DAP general**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
2.  **API de DAP**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
3.  **[Resguardo de RTPC para dispositivos móviles (si se usa un SDK para dispositivos móviles)](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources?hl=es-419#UUID-f8702524-4b0a-dc36-83f8-d48e8892a2da)**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
4.  **DAP de número de teléfono**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
5.  **DAP de segmento de usuarios**
    
    -   Coincidencia: Se enruta a esa cola.
    -   Sin coincidencias: Se dirige al principio de la fila.

### Tipos y orden de los DAP del canal para dispositivos móviles

1.  **DAP general**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
2.  **DAP de segmento de usuarios**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
3.  **DAP de la aplicación para dispositivos móviles**
    
    -   Coincidencia: Se enruta a esa cola.
    -   Sin coincidencias: Se dirige al principio de la fila.

#### Orden de DAP alternativo

Para obtener acceso, comunícate con el equipo de asistencia.

1.  **DAP de segmento de usuarios**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
2.  **DAP general**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
3.  **DAP de la aplicación para dispositivos móviles**
    
    -   Coincidencia: Se enruta a esa cola.
    -   Sin coincidencias: Se dirige al principio de la fila.

### Tipos y orden de DAP de canales web

1.  **DAP general**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
2.  **DAP de segmento de usuarios**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.

#### Orden de DAP alternativo

Para obtener acceso, comunícate con el equipo de asistencia.

1.  **DAP de segmento de usuarios**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.
2.  **DAP general**
    
    -   Coincidencia: Se enruta a esa cola.
    -   No hay coincidencias: Continúa con el siguiente.

## DAPs de segmentos de usuarios

Todo el software de CRM tiene objetos de contacto (llamados Contacto, Personas, Cliente o similares). La plataforma de la CCAI analiza automáticamente los objetos de contacto cada vez que un usuario final se comunica a través del IVR o el SDK, y los compara con los pares clave-valor que usaste para configurar la DAP.

Si el sistema detecta una coincidencia, se enruta inmediatamente al usuario final a la fila especificada. Puedes configurar tu CRM para que incluya los campos que deseas usar para el enrutamiento de usuarios finales, como un campo de VIP.

### Ejemplo de DAP de segmento de usuarios

Para que un usuario final pueda ser redireccionado automáticamente a una cola de derivación, debes saber si tiene varios casos de asistencia abiertos.

1.  En tu CRM, crea un campo calculado que cuente los casos de asistencia abiertos.
    
2.  Crea un DAP para buscar un valor específico en ese campo calculado que indique que hay varios casos de asistencia abiertos.
    

Si el DAP detecta una coincidencia, se enruta al usuario final directamente a una cola de derivación especificada y se le pasan los detalles del caso al agente.

### Ejemplo de requisitos previos de la DAP para el segmento de usuarios

1.  Debes configurar segmentos de usuarios en tu CRM. Para obtener más información, consulta [Segmentos de usuarios prioritarios](https://docs.cloud.google.com/contact-center/ccai-platform/docs/perations_Management?hl=es-419#priority_user_segments).
    
2.  Habilita el acceso al CRM
    
    1.  En el portal de la Plataforma de CCAI, ve a **Configuración** > **Administración de operaciones**.
        
    2.  En **CRM Access**, marca la casilla de verificación para **Allow CRM Access for user segment information**.
        
    3.  Haz clic en **Guardar general** para guardar la configuración.
        
3.  Consulta la sección [Crea un DAP](https://docs.cloud.google.com/contact-center/ccai-platform/docs/routing?hl=es-419#create_a_dap) para configurar un DAP de segmento de usuarios.
    

## DAPs de números de teléfono de asistencia

Los DAPs de números de teléfono de asistencia dirigen a los usuarios finales a colas específicas según el número de teléfono al que llaman. Los números de teléfono pueden ser cualquiera que administre la plataforma de la CCAI. No hay límite en la cantidad de números de teléfono que puedes usar, y los DAP de números de teléfono se pueden configurar para varios idiomas y configuraciones regionales.

### Ejemplo de DAPs de números de teléfono de asistencia

-   Un usuario final sospecha que se produjo un fraude con su tarjeta de crédito y llama al número que aparece en el reverso de la tarjeta. Ese número de teléfono está asociado a un DAP configurado para dirigir la llamada a una cola exclusiva de prevención de fraudes.
    
-   Puedes proporcionar diferentes números de teléfono a grupos específicos de personas, como VIPs o empleados. Cuando un usuario final llama, el DAP reconoce el número de teléfono y lo enruta automáticamente a la fila VIP o al menú para empleados.
    

### Formatos admitidos

-   Números con formato E164: +(código\_de\_país)(número\_de\_teléfono)
-   Números de teléfono SIP en el formato de dirección SIP entrante: `sip:[number]@[domain]`

### Ejemplo de requisitos previos de DAP para el número de teléfono de asistencia

1.  Asegúrate de que el número de teléfono que quieres usar esté aprovisionado para tu entorno de CCAI Platform.
    
2.  Consulta la sección [cómo crear un DAP](https://docs.cloud.google.com/contact-center/ccai-platform/docs/routing?hl=es-419#create_a_dap) para configurar un DAP de número de teléfono de asistencia.
    

## DAPs de API

Puedes configurar los DAP de la API para capturar las condiciones que existen dentro o fuera de tu CRM. Este es el único DAP en el que se pueden evaluar varias condiciones para enrutar sesiones (por ejemplo, un número de teléfono y un par clave-valor). Cuando un usuario final llama, los datos de contacto se comparan con los datos de la API y se enrutan a un punto específico de la estructura de la fila.

La solicitud se procesa con JSON. Se admiten los métodos de solicitud HTTP `POST` y `GET`. A diferencia de otras opciones de DAP, también puedes usar la lógica `AND` con varios pares clave-valor. Cuando se detecta una coincidencia de par clave-valor, la plataforma de CCAI enruta la llamada de inmediato según tu configuración.

### Ejemplo de uso de la API de DAP

Tienes una API con datos que muestran que el usuario final es un `Super-user`, el tipo de producto es `International` y que cumple con otros criterios específicos. Un DAP configurado para reconocer pares clave-valor específicos los enruta a una cola específica.

#### Ejemplo de requisitos previos de la API de DAP

Estos son los elementos obligatorios:

-   _URL de la API_: Es un extremo de URL que puede recibir una solicitud de número de teléfono y devolver una respuesta JSON.
    
-   _Número de teléfono de prueba_: Después de configurar el DAP, debes usar un número de teléfono de prueba para asegurarte de que la configuración devuelva resultados correctamente (por lo general, en formato JSON).
    
-   _Credenciales de la API_: Se requiere autenticación básica para un extremo que no sea de Salesforce.
    
    O
    
-   _Configuración de Salesforce_: Consulta la [documentación de Salesforce](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Salesforce?hl=es-419#api-dap-salesforce) para la configuración inicial en Salesforce.
    

#### Configura un DAP de API

Para configurar un DAP de API, haz lo siguiente:

1.  Haz clic en menu **Menú** y, luego, en **Configuración \> Configuración para desarrolladores**.
    
2.  Ve al panel **Punto de acceso directo a la solicitud de API**.
    
3.  En el campo **URL de la solicitud POST**, ingresa el extremo de API del DAP. Solo se puede usar un extremo por entorno.
    
4.  En el área **Método de autenticación**, selecciona uno de los siguientes métodos de autenticación:
    
    -   **Autenticación básica** Si seleccionas esta opción, ingresa tu nombre de usuario y contraseña.
        
    -   **OAuth** OAuth solo está disponible cuando se usa Salesforce. Para obtener más información, consulta [Punto de acceso directo a la API: API de REST de Salesforce](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Salesforce?hl=es-419#api-dap-salesforce).
        
    -   **Encabezado personalizado**: Usa encabezados HTTP para la autenticación. Si seleccionas esta opción, haz lo siguiente:
        
        1.  Haz clic en **Agregar campo**. Aparecerá el cuadro de diálogo **Agregar campo**.
            
        2.  En el campo **Clave del campo**, ingresa el nombre del encabezado de autenticación.
            
        3.  En el campo **Valor del campo**, ingresa el valor del encabezado de autenticación.
            
        4.  Opcional: Agrega encabezados adicionales.
            
        5.  Haz clic en **Guardar**.
            
5.  En el área **Tiempo de espera de la solicitud de API**, haz clic en expand\_more **Expandir más** para seleccionar el valor de tiempo de espera de la solicitud de API en segundos. Para determinar el tiempo de espera óptimo, ten en cuenta lo siguiente:
    
    -   El tiempo de espera óptimo de la solicitud de API depende, en parte, del tiempo de respuesta del servidor. Una herramienta como Postman puede ayudarte a determinar el tiempo de respuesta del servidor.
        
    -   El tiempo de espera de una solicitud a la API debe ser lo suficientemente largo como para adaptarse al tiempo de respuesta esperado de la API, pero lo suficientemente corto como para que el tiempo de espera del usuario final sea razonablemente corto.
        
    -   Si se agota el tiempo de espera de la solicitud a la API y no hay ninguna coincidencia para el primer tipo de DAP, se verifica si el siguiente tipo de DAP tiene una coincidencia. Si no hay coincidencias para ningún tipo de DAP, la llamada se envía a la parte superior de la cola. Para obtener más información, consulta [Orden de coincidencias y las interacciones de la DAP](#dap-matching-order-and-interactions).
        
    -   Si tienes habilitados varios idiomas, se reproducirá un mensaje de selección de idioma para la persona que llama.
        
6.  En el área **Método de solicitud de API**, selecciona **Post** o **Get**, según el tipo de solicitud que realices.
    
7.  En el área **Formato del número de teléfono**, haz clic en expand\_more **Expandir más** para seleccionar el formato de número de teléfono que usas para almacenar números de teléfono en tu servidor.
    
8.  En el campo **Parámetro de solicitud**, ingresa el nombre del parámetro de solicitud del número de teléfono. El valor puede ser cualquier cadena y distingue entre mayúsculas y minúsculas. Si el parámetro de la solicitud no coincide con el parámetro correspondiente en tu servidor, la ruta falla. A continuación, se muestra un ejemplo de URL de solicitud de API para un método GET:
    
    ```
    https://example.com/api_dap?PARAMETER_NAME=+18005550100
    ```
    
    Reemplaza `PARAMETER_NAME` por el nombre del parámetro del número de teléfono.
    
9.  Opcional: Para pasar datos de los encabezados de las llamadas entrantes del Protocolo de inicio de sesión (SIP) a las filas de tu sistema de respuesta de voz interactiva (IVR), haz lo siguiente:
    
    1.  Haz clic en el botón de activación **Pasar parámetros de datos** para activarlo.
        
    2.  En el área **Parámetros de datos**, agrega los parámetros necesarios para pasar los datos. Para obtener más información, consulta [Cómo pasar parámetros de datos a los asistentes virtuales y a los asistentes virtuales de tareas](https://docs.cloud.google.com/contact-center/ccai-platform/docs/pass-data-parameters?hl=es-419#data-parameters-to-vas-and-virtual-task-assistants).
        
    3.  En el área **Registros de datos**, selecciona una casilla de verificación para incluir parámetros de datos en los archivos de metadatos, parámetros de datos en los registros del CRM o ambos.
        
10.  En el área **Enviar datos de respuesta de la API al CRM**, selecciona una casilla de verificación para dar formato a los datos de respuesta de la API como un par clave-valor, dejar la respuesta de la API en su formato JSON original o ambas opciones.
     
11.  Haz clic en **Guardar**.
     

### Prueba la configuración

La plataforma de CCAI te permite verificar rápidamente que tu conexión se haya configurado correctamente. Necesitas un número de teléfono vinculado a un contacto que sepas que devolverá el valor que buscas en el servidor consultado.

1.  Ve a **Configuración > Configuración para desarrolladores > Punto de acceso directo a la solicitud de API**.
    
2.  Ingresa el número de teléfono de prueba en el campo **Probar conexión** y haz clic en **Probar esta conexión.**
    
3.  Visualiza la respuesta JSON de la API.
    
4.  Si es nulo o no hay resultados, verifica lo siguiente:
    
    -   ¿La conexión apunta a una base de datos con los datos correctos?
        
    -   ¿El número de teléfono está asociado a un contacto?
        
    -   ¿El formato del número de teléfono es correcto?
        
    -   ¿El encabezado de respuesta coincide exactamente?
        
    -   Si la respuesta se agota, aumenta el valor de tiempo de espera en la configuración sobre la sección de prueba. Si el tiempo de espera se alarga tanto que aumentará los tiempos de espera, investiga cómo optimizar el tiempo de respuesta del servidor.
        

### Detalles de la lógica de la DAP de la API

La plataforma de CCAI usa la lógica de conjuntos para enrutar las llamadas (consulta [Interacciones y orden de coincidencia de DAP](#dap-matching-order-and-interactions)). Los DAP de la API también pueden incluir **varias condiciones** que se deben evaluar para enrutar las llamadas. Por este motivo, el orden específico en el que creas los DAP de la API es extremadamente importante. Si tienes DAP de API existentes y se superponen con las nuevas que estás creando, es posible que debas volver a crear las DAP existentes en un orden nuevo para lograr el enrutamiento requerido.

Cada condición puede ser un conjunto compuesto de pares clave-valor o un solo par clave-valor. Después de que se cumple una condición, CCAI Platform deja de buscar coincidencias y enruta la llamada de inmediato. Por este motivo, es importante crear las condiciones más complejas antes que las menos complejas. Esto garantiza que primero se verifiquen las condiciones más complejas.

**Ejemplo correcto: Condiciones complejas primero**

CCAI Platform primero coincidirá con 1, luego con 2 y, por último, con 3.

1.  "brand = Generico" AND "Customer type = lead" AND "product = retail"
    
2.  "brand = Generico" AND "Customer type = lead"
    
3.  "brand = Generico"
    

**Ejemplo incorrecto: Primero las condiciones simples**

CCAI Platform primero coincidirá con 1, luego con 2 y, por último, con 3. Si los DAP de la API se crean en este orden, nunca se alcanzarán las condiciones 2 y 3, ya que todas las solicitudes cumplirán con la primera condición.

1.  "brand = Generico"
    
2.  "brand = Generico" AND "Customer type = lead"
    
3.  "brand = Generico" AND "Customer type = lead" AND "product = retail"
    

### Ejemplo de implementación del extremo de API de DAP

Puedes descargar un ejemplo de implementación desde GitHub, incluidas las instrucciones de configuración y de implementación. En esta sección, se muestra cómo implementar un extremo de API de DAP y configurar tu implementación según tus propios requisitos.

El repositorio de GitHub se encuentra aquí: [https://github.com/GoogleCloudPlatform/ccaas-dap-api](https://github.com/GoogleCloudPlatform/ccaas-dap-api).

## Crea un DAP

1.  Asegúrate de haber completado los requisitos previos necesarios para tu tipo de DAP. Consulta las secciones sobre la [DAP de la API](https://docs.cloud.google.com/contact-center/ccai-platform/docs/routing?hl=es-419#api_daps), la [DAP del número de teléfono de asistencia](https://docs.cloud.google.com/contact-center/ccai-platform/docs/routing?hl=es-419#support_phone_number_daps) o la [DAP del segmento de usuarios](https://docs.cloud.google.com/contact-center/ccai-platform/docs/routing?hl=es-419#user_segment_daps) para obtener instrucciones.
    
2.  Ve a **Configuración > Cola**.
    
3.  Elige tu canal (IVR, Web o Móvil) y haz clic en **Editar / Agregar**.
    
4.  Selecciona la fila a la que deseas agregar el punto de acceso directo. En el panel **Configuración**, desplázate hasta **Punto de acceso** y haz clic en **\+ Crear punto de acceso directo**.
    
5.  Elige el tipo de punto de acceso y, luego, ingresa un nombre en **Nombre del punto de acceso**. Según tu canal y tipo de acceso, ingresa la siguiente información:
    
    1.  **Número de teléfono de asistencia**
        
        -   _Número de teléfono de asistencia_: Ingresa un número de teléfono que la plataforma de la CCAI haya aprovisionado para tu cuenta, incluido el código de país si es internacional. El formato es E.164 (`+[country_code][phone_number]`) o SIP (`sip:[number]@[domain]`).
        -   _Mensaje de saludo_: Ingresa un mensaje para los usuarios finales en el campo para que lo lea la función de Text-to-Speech o sube tu propio archivo de audio. Para omitir el mensaje de saludo, ingresa `.` en el campo o sube un archivo en blanco.
    2.  **Segmento de usuarios**
        
        -   _Campo de segmento de usuarios personalizado del CRM_: Es el nombre del campo del segmento de usuarios en tu CRM. Ejemplo: "Nivel"
        -   _Valor del segmento de usuarios personalizado del CRM_: Es el valor del segmento de usuarios al que se dirigirá a esta cola. Ejemplo. "Nivel Gold"
        -   _Mensaje de saludo_: Ingresa un mensaje para los usuarios finales en el campo para que lo lea la función de Text-to-Speech o sube tu propio archivo de audio. Para omitir el mensaje de saludo, ingresa `.` en el campo o sube un archivo en blanco.
    3.  **Respuesta de la API**
        
        -   _Respuesta de la API_: Haz clic en **Agregar clave y valor**. Ingresa los pares clave-valor tal como se configuraron en la API. Repite el proceso para cada conjunto de pares clave-valor que se requieran para la DAP.
        -   (Opcional) _Número de teléfono de asistencia_: Es un número de teléfono proporcionado por la plataforma de CCAI al que llaman los usuarios finales para comunicarse con tu centro de llamadas. Este número será necesario para la correlación, además de los pares clave-valor de la respuesta de la API.
        -   _Mensaje de saludo_: Ingresa un mensaje para los usuarios finales en el campo para que lo lea la función de Text-to-Speech o sube tu propio archivo de audio. Para omitir el mensaje de saludo, ingresa `.` en el campo o sube un archivo en blanco.
    4.  **General**
        
        -   _Etiqueta general del punto de acceso_: Es una etiqueta reconocible para que los desarrolladores la usen en tu app o SDK.
    5.  **App para dispositivos móviles**
        
        -   _Aplicación para dispositivos móviles_: Elige tu aplicación para dispositivos móviles en el menú desplegable.
6.  Haz clic en **Crear**.
    

## Prueba el enrutamiento de llamadas

1.  Llama al canal con un número de teléfono o una cuenta de usuario final con parámetros que sabes que deberían activar el DAP.
    
2.  Confirma que la llamada se enrute a la cola correcta y que se reproduzca el saludo que ingresaste.
    

Enviar comentarios

Salvo que se indique lo contrario, el contenido de esta página está sujeto a la [licencia Atribución 4.0 de Creative Commons](https://creativecommons.org/licenses/by/4.0/), y los ejemplos de código están sujetos a la [licencia Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Para obtener más información, consulta las [políticas del sitio de Google Developers](https://developers.google.com/site-policies?hl=es-419). Java es una marca registrada de Oracle o sus afiliados.

Última actualización: 2026-03-17 (UTC)
