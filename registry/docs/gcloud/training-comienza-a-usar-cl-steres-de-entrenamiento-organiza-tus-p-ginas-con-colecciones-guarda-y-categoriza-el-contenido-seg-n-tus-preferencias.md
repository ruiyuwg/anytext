-   [Home](https://docs.cloud.google.com/?hl=es-419)
-   [Documentation](https://docs.cloud.google.com/docs?hl=es-419)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml?hl=es-419)
-   [Vertex AI](https://docs.cloud.google.com/vertex-ai/docs?hl=es-419)

Enviar comentarios

# Comienza a usar clústeres de entrenamiento Organiza tus páginas con colecciones Guarda y categoriza el contenido según tus preferencias.

Si te interesan los clústeres de entrenamiento de Vertex AI, comunícate con tu representante de ventas para obtener acceso.

Antes de implementar tu primer clúster en los clústeres de entrenamiento de Vertex AI, debes configurar tuGoogle Cloud proyecto y entorno. En esta guía, se abarcan todos los requisitos previos necesarios, que se dividen en tres categorías principales:

-   Acceso al proyecto: Obtener acceso al servicio, que es solo por invitación
    
-   Configuración de recursos: Habilita las APIs y configura los servicios de almacenamiento y de red de VPC necesarios.
    
-   Permisos del usuario: Otorga los roles de IAM necesarios para la administración del clúster y el acceso a los recursos.
    

Completar estos pasos prepara tu proyecto para una implementación exitosa.

## Requisitos previos

Para usar clústeres de entrenamiento, debes hacer lo siguiente:

1.  **Incluye tu proyecto en la lista de proyectos permitidos** comunicándote con tu representante de ventas para obtener acceso.
2.  **Obtén capacidad** para los [clústeres con GPU](https://docs.cloud.google.com/ai-hypercomputer/docs/process-overview?hl=es-419#choose-a-consumption-option-and-obtain-capacity) en las regiones admitidas.
3.  **Habilita las APIs necesarias**, incluidas las de Compute Engine, Filestore, Cloud Storage, Lustre administrado (opcional), [Hypercomputer Configuration Service](https://docs.cloud.google.com/ai-hypercomputer/docs?hl=es-419) y Vertex AI.
4.  **Configura la red**. Para ello, asegúrate de que una red existente cumpla con condiciones específicas (por ejemplo, Acceso privado a Google, reglas de firewall) o crea una nueva red y subred de VPC.
5.  **Configura el almacenamiento** creando una instancia de Filestore zonal o regional para que actúe como el directorio `/home` y, de manera opcional, configura una [Google Cloud instancia de Lustre administrada](https://docs.cloud.google.com/managed-lustre/docs/overview?hl=es-419).
6.  **Otorga permisos de IAM** a los usuarios para la administración del clúster, el acceso al almacenamiento y el acceso SSH a los nodos del clúster, como se describe en la sección [Permisos de IAM](#iam-permissions).

### Regiones admitidas

**Nota:** Si se envía una solicitud a regiones que no están en esta lista, se producirá un error de la API.

-   `us-central1`
-   `us-east1`
-   `us-east4`
-   `us-east5`
-   `us-south1`
-   `us-west1`
-   `us-west4`
-   `asia-southeast1`
-   `europe-west1`
-   `europe-west4`
-   `europe-north1`

### Permisos de IAM

1.  Otorga el rol `roles/aiplatform.admin` a los usuarios que administrarán tus clústeres de entrenamiento.
2.  Otorga el rol de `roles/aiplatform.viewer` a los usuarios que solo necesitan ver los clústeres y sus configuraciones.
3.  Otorga los siguientes roles de IAM a la cuenta de usuario o de servicio que administrará (creará, borrará y actualizará) los clústeres de entrenamiento administrado:
    
    Nombre del rol
    
    ID de función
    
    Administrador de instancias de Compute (v1)
    
    `roles/compute.instanceAdmin.v1`
    
    Escritor de registros
    
    `roles/logging.logWriter`
    
    Escritor de métricas de Monitoring
    
    `roles/monitoring.metricWriter`
    
    Usuario de cuenta de servicio
    
    `roles/iam.serviceAccountUser`
    
    Administrador de Service Networking
    
    `roles/servicenetworking.networksAdmin`
    
4.  Para permitir que los nodos del clúster lean y escriban en buckets de Cloud Storage con Google Cloud Storage FUSE, otorga el rol de usuario de objetos de almacenamiento (`roles/storage.objectUser`) a la cuenta de servicio que usan las VMs.
    
5.  Para acceder a los nodos de acceso de Slurm a través de SSH, otorga los siguientes permisos:
    
    Permisos
    
    Descripciones
    
    Objetivo
    
    [Acceso a SO de Compute](https://docs.cloud.google.com/compute/docs/oslogin/set-up-oslogin?hl=es-419#configure_users)
    
    Accede a una VM como usuario estándar (no administrador). Si se necesita `sudo`, usa Acceso de administrador al SO de Compute en su lugar.
    
    Establece una conexión SSH al nodo de acceso implementado
    
    [Usuario de túnel protegido con IAP](https://docs.cloud.google.com/iap/docs/managing-access?hl=es-419)
    
    Tiene acceso a recursos de túnel que usan Identity-Aware Proxy.
    
    Establece una conexión SSH al nodo de acceso implementado
    

### Habilita las APIs

1.  Habilita la API de Google Compute Engine:
    
       ```
       gcloud services enable compute.googleapis.com
    
    ```
    
2.  Habilita la red de servicios, ya que Filestore debe implementarse antes de crear el clúster.
    
       ```
       gcloud services enable servicenetworking.googleapis.com
    ```
    
3.  Habilita la API de Cloud Storage:
    
        ```
        gcloud services enable storage.googleapis.com
    ```
    
4.  Habilita la API de Lustre (si usas Lustre):
    
    ```
    gcloud services enable lustre.googleapis.com
    
    ```
    
5.  Habilita la API de HCS:
    
    ```
    gcloud services enable hypercomputecluster.googleapis.com
    
    ```
    
6.  Habilita la [API de Vertex AI](https://console.cloud.google.com/?hl=es-419):
    
    ```
    gcloud services enable aiplatform.googleapis.com
    
    ```
    
7.  Habilita la [API de Cloud Resource Manager](https://console.cloud.google.com/?hl=es-419):
    
    ```
    gcloud services enable cloudresourcemanager.googleapis.com
    
    ```
    

## ¿Qué sigue?

Para obtener una guía detallada sobre cómo crear un clúster de entrenamiento y ejecutar tus cargas de trabajo de IA/AA, comunícate con tu representante de ventas.

Enviar comentarios

Salvo que se indique lo contrario, el contenido de esta página está sujeto a la [licencia Atribución 4.0 de Creative Commons](https://creativecommons.org/licenses/by/4.0/), y los ejemplos de código están sujetos a la [licencia Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Para obtener más información, consulta las [políticas del sitio de Google Developers](https://developers.google.com/site-policies?hl=es-419). Java es una marca registrada de Oracle o sus afiliados.

Última actualización: 2026-03-21 (UTC)
