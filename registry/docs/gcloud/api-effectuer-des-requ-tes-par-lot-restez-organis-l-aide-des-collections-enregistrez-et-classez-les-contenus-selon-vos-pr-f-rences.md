-   [Home](https://docs.cloud.google.com/?hl=fr)
-   [Documentation](https://docs.cloud.google.com/docs?hl=fr)
-   [Networking](https://docs.cloud.google.com/docs/networking?hl=fr)
-   [Media CDN](https://docs.cloud.google.com/media-cdn/docs?hl=fr)
-   [Référence](https://docs.cloud.google.com/media-cdn/docs/apis?hl=fr)

Envoyer des commentaires

# Effectuer des requêtes par lot Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.

Ce document explique comment autoriser les appels d'API par lot pour réduire le nombre de connexions HTTP que votre client doit effectuer.

Vous allez plus spécifiquement apprendre à exécuter une requête par lot en envoyant une requête HTTP. Si vous souhaitez plutôt exécuter ce type de requête à l'aide d'une bibliothèque cliente Google, consultez la [documentation associée à la bibliothèque en question](https://developers.google.com/api-client-library/?hl=fr).

## Présentation

Chaque connexion HTTP effectuée par votre client entraîne certains coûts. L'API Network Services accepte les requêtes par lot, ce qui permet à votre client d'intégrer plusieurs appels d'API dans une seule requête HTTP.

Voici quelques exemples de situations dans lesquelles l'utilisation de requêtes par lot peut s'avérer utile :

-   Vous commencez tout juste à utiliser l'API et avez beaucoup de données à importer.
-   Un utilisateur a modifié des données lorsque votre application était hors connexion (déconnectée d'Internet). Celle-ci doit donc envoyer un certain nombre d'opérations de mise à jour et de suppression pour synchroniser ses données locales avec le serveur.

Dans chacun de ces cas, vous pouvez regrouper plusieurs appels en une seule requête HTTP plutôt que de les envoyer séparément. Toutes les requêtes internes doivent être transmises à la même API Google.

Une même requête par lot peut contenir jusqu'à 1 000 appels. Si vous avez besoin d'effectuer plus d'appels, exécutez plusieurs requêtes par lot.

**Remarque** : Le système de requêtes par lot de l'API Network Services utilise la même syntaxe que le système de [traitement par lot OData](http://www.odata.org/documentation/odata-version-3-0/batch-processing/), mais la sémantique diffère.

## Informations sur les lots

Une requête par lot est constituée de plusieurs appels d'API combinés en une seule requête HTTP, qui peut être envoyée au chemin `batchPath` spécifié dans le [document de découverte des API](https://developers.google.com/discovery/v1/reference/apis?hl=fr). Le chemin par défaut est `/batch/api_name/api_version`. Cette section décrit la syntaxe des requêtes par lot plus en détail. Vous en trouverez un [exemple](#example) plus bas.

**Remarque** : Un ensemble de n requêtes regroupées est comptabilisé comme n requêtes dans votre limite d'utilisation, et non comme une seule. Avant d'être traitée, la requête par lot est décomposée en un ensemble de requêtes.

### Format d'une requête par lot

Une requête par lot est une requête HTTP standard unique qui inclut plusieurs appels d'API Network Services et utilise le type de contenu `multipart/mixed`. Chacune des parties de cette requête HTTP principale contient une requête HTTP imbriquée.

Chaque partie commence par son en-tête HTTP `Content-Type: application/http`, mais peut également comporter un en-tête `Content-ID` facultatif. Les en-têtes des différentes parties ne servent toutefois qu'à signaler le début des parties et sont séparés de la requête imbriquée. Une fois que le serveur a décomposé la requête par lot en requêtes distinctes, les en-têtes de parties sont ignorés.

Le corps de chaque partie est lui-même composé d'une requête HTTP complète dotée de son propre verbe, de son URL, de ses en-têtes et de son corps. Comme les requêtes par lot n'acceptent pas les URL complètes, la requête HTTP ne doit contenir que le chemin de l'URL.

Les en-têtes HTTP des requêtes par lot externes s'appliquent à toutes les requêtes au sein du lot, à l'exception des en-têtes `Content-` tels que `Content-Type`. Si vous spécifiez un en-tête HTTP spécifique à la fois dans la requête externe et dans un appel individuel, la valeur de l'en-tête de l'appel individuel remplace alors celle de la requête par lot externe. Les en-têtes d'un appel individuel ne s'appliquent qu'à cet appel.

Par exemple, si vous fournissez un en-tête "Authorization" à un appel spécifique, l'en-tête ne s'applique qu'à cet appel. Mais si vous fournissez un en-tête "Authorization" à la requête externe, il s'applique à tous les appels individuels, sauf s'ils le remplacent par leurs propres en-têtes "Authorization".

Lorsque le serveur reçoit la requête par lot, il applique les paramètres de requête et les en-têtes (selon le cas) de la requête externe à chaque partie, puis traite ces parties comme s'il s'agissait de requêtes HTTP distinctes.

### Réponse à une requête par lot

La réponse du serveur est une réponse HTTP standard unique avec un type de contenu `multipart/mixed`. Chaque partie constitue la réponse à l'une des requêtes de la requête par lot et apparaît dans le même ordre que celles-ci.

À l'instar des parties de la requête, les parties de la réponse contiennent chacune une réponse HTTP complète, qui comprend un code d'état, des en-têtes et un corps. Elles sont aussi précédées d'un en-tête `Content-Type` signalant le début de la partie.

Si une partie donnée de la requête possède un en-tête `Content-ID`, la partie correspondante de la réponse dispose alors du même en-tête `Content-ID`, avec une valeur initiale précédée de la chaîne `response-`, comme le montre l'exemple suivant.

**Remarque** : Le serveur peut effectuer vos appels dans n'importe quel ordre. Ne vous attendez pas à ce qu'ils soient exécutés selon l'ordre dans lequel vous les avez spécifiés. Si vous souhaitez que deux appels se produisent dans un ordre donné, évitez de les envoyer dans la même requête. Vous devez plutôt envoyer le premier appel seul, attendre la réponse, puis envoyer le second.

## Exemple

L'exemple suivant décrit l'utilisation de requêtes par lot avec une API de démonstration générique (fictive) appelée API Farm. Toutefois, les mêmes concepts s'appliquent à l'API Network Services.

### Exemple de requête par lot

POST /batch/farm/v1 HTTP/1.1
Authorization: Bearer your\_auth\_token
Host: www.googleapis.com
Content-Type: multipart/mixed; boundary=batch\_foobarbaz
Content-Length: total\_content\_length

--batch\_foobarbaz
Content-Type: application/http
Content-ID: <item1:12930812@barnyard.example.com>

GET /farm/v1/animals/pony

--batch\_foobarbaz
Content-Type: application/http
Content-ID: <item2:12930812@barnyard.example.com>

PUT /farm/v1/animals/sheep
Content-Type: application/json
Content-Length: part\_content\_length
If-Match: "etag/sheep"

{
  "animalName": "sheep",
  "animalAge": "5"
  "peltColor": "green",
}

--batch\_foobarbaz
Content-Type: application/http
Content-ID: <item3:12930812@barnyard.example.com>

GET /farm/v1/animals
If-None-Match: "etag/animals"

--batch\_foobarbaz--

### Exemple de réponse par lot

Il s'agit de la réponse à l'exemple de requête abordé dans la section précédente.

HTTP/1.1 200
Content-Length: response\_total\_content\_length
Content-Type: multipart/mixed; boundary=batch\_foobarbaz

--batch\_foobarbaz
Content-Type: application/http
Content-ID: <response-item1:12930812@barnyard.example.com>

HTTP/1.1 200 OK
Content-Type application/json
Content-Length: response\_part\_1\_content\_length
ETag: "etag/pony"

{
  "kind": "farm#animal",
  "etag": "etag/pony",
  "selfLink": "/farm/v1/animals/pony",
  "animalName": "pony",
  "animalAge": 34,
  "peltColor": "white"
}

--batch\_foobarbaz
Content-Type: application/http
Content-ID: <response-item2:12930812@barnyard.example.com>

HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: response\_part\_2\_content\_length
ETag: "etag/sheep"

{
  "kind": "farm#animal",
  "etag": "etag/sheep",
  "selfLink": "/farm/v1/animals/sheep",
  "animalName": "sheep",
  "animalAge": 5,
  "peltColor": "green"
}

--batch\_foobarbaz
Content-Type: application/http
Content-ID: <response-item3:12930812@barnyard.example.com>

HTTP/1.1 304 Not Modified
ETag: "etag/animals"

--batch\_foobarbaz--

Envoyer des commentaires

Sauf indication contraire, le contenu de cette page est régi par une licence [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), et les échantillons de code sont régis par une licence [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Pour en savoir plus, consultez les [Règles du site Google Developers](https://developers.google.com/site-policies?hl=fr). Java est une marque déposée d'Oracle et/ou de ses sociétés affiliées.

Dernière mise à jour le 2026/03/17 (UTC).
