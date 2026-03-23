-   [Home](https://docs.cloud.google.com/?hl=fr)
-   [Documentation](https://docs.cloud.google.com/docs?hl=fr)
-   [Databases](https://docs.cloud.google.com/docs/databases?hl=fr)
-   [Memorystore](https://docs.cloud.google.com/memorystore/docs?hl=fr)
-   [Memorystore for Redis](https://docs.cloud.google.com/memorystore/docs/redis?hl=fr)
-   [Ressources](https://docs.cloud.google.com/memorystore/docs/redis/resources?hl=fr)

Envoyer des commentaires

# Bulletins de sécurité Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.

Cette page fournit des informations sur les bulletins de sécurité pour Memorystore pour Redis.

## GCP-2025-061

**Date de publication** : 21-10-2025

### Description

Description

Gravité

Remarques

Une faille d'exécution de code à distance a été découverte dans Redis Open Source. Par conséquent, toutes les versions compatibles avec [Memorystore pour Redis](https://docs.cloud.google.com/memorystore/docs/redis?hl=fr) sont concernées.

Par défaut, les instances Memorystore pour Redis ne sont pas exposées à l'Internet public. Le risque de cette faille est donc **faible** pour les utilisateurs de Memorystore pour Redis qui suivent les [bonnes pratiques de sécurité de Google Cloud](https://docs.cloud.google.com/memorystore/docs/redis/security-overview?hl=fr).

#### Que devez-vous faire ?

Google a commencé à appliquer automatiquement des correctifs, avec une date d'achèvement estimée au 6 novembre 2025. **Aucune action n'est requise de votre part pour bénéficier de cette correction.**

Si vous souhaitez appliquer ces correctifs à vos instances Memorystore pour Redis avant le 6 novembre 2025, utilisez la maintenance en libre-service pour effectuer les actions suivantes :

1.  Affichez la version de maintenance actuelle de vos [instances Memorystore pour Redis](https://docs.cloud.google.com/memorystore/docs/redis/maintenance-changelog?hl=fr).
2.  Vérifiez si la version correspond aux dernières versions corrigées.
3.  Si la version n'est pas la dernière version de maintenance, mettez à jour vos instances vers la dernière version de maintenance à l'aide de la maintenance en libre-service pour [Memorystore pour Redis](https://docs.cloud.google.com/memorystore/docs/redis/self-service-maintenance?hl=fr).

Critique

[CVE-2025-49844](https://nvd.nist.gov/vuln/detail/CVE-2025-49844)

Envoyer des commentaires

Sauf indication contraire, le contenu de cette page est régi par une licence [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), et les échantillons de code sont régis par une licence [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Pour en savoir plus, consultez les [Règles du site Google Developers](https://developers.google.com/site-policies?hl=fr). Java est une marque déposée d'Oracle et/ou de ses sociétés affiliées.

Dernière mise à jour le 2026/03/17 (UTC).
