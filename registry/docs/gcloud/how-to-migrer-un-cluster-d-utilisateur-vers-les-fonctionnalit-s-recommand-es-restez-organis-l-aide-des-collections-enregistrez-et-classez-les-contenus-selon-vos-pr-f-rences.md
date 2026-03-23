-   [Home](https://docs.cloud.google.com/?hl=fr)
-   [Domaines technologiques](https://docs.cloud.google.com/docs?hl=fr)
-   [Google Distributed Cloud](https://docs.cloud.google.com/distributed-cloud?hl=fr)
-   [Documentation](https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs?hl=fr)
-   [GDC for VMware](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs?hl=fr)
-   [Guides](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview?hl=fr)

Envoyer des commentaires

# Migrer un cluster d'utilisateur vers les fonctionnalités recommandées Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.

## Présentation

Cette page vous explique comment migrer des clusters d'utilisateur de version 1.30 ou ultérieure vers les fonctionnalités recommandées suivantes :

-   Migrez vers Dataplane V2 en tant qu'interface réseau de conteneur (CNI).
-   Migrez les clusters d'utilisateur à l'aide de kubeception vers Controlplane V2.
-   Migrez la configuration de l'équilibreur de charge :
    
    -   De la configuration de l'équilibreur de charge F5 BIG-IP intégré à `ManualLB`
        
        ou
        
    -   De l'équilibreur de charge groupé Seesaw à MetalLB.
        

Cette page s'adresse aux administrateurs et opérateurs informatiques qui gèrent le cycle de vie de l'infrastructure technologique sous-jacente. Pour en savoir plus sur les rôles courants et les exemples de tâches que nous citons dans le contenuGoogle Cloud , consultez [Rôles utilisateur et tâches courantes de GKE](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks?hl=fr).

### Bonnes pratiques

Nous vous recommandons de commencer par migrer l'environnement le moins critique, tel que l'environnement de test. Une fois que vous avez vérifié que la migration a réussi, répétez cette procédure pour chaque environnement, en migrant votre environnement de production en dernier. Cela vous permet de valider la réussite de chaque migration et de vous assurer que vos charges de travail s'exécutent correctement avant de passer à l'environnement suivant, plus critique.

Nous vous recommandons de [créer un cluster d'utilisateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster?hl=fr) avec Controlplane V2 activé pour en savoir plus sur les différences architecturales avec les clusters kubeception. Le nouveau cluster n'affecte pas vos charges de travail. Toutefois, dans le pire des cas, si la migration échoue, vous disposez d'un cluster prêt pour vos charges de travail.

Pour en savoir plus sur la planification de la migration, consultez [Planifier la migration du cluster vers les fonctionnalités recommandées](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features?hl=fr).

## Conditions requises

Pour cette migration :

-   Le cluster utilisateur doit être à la version 1.30 ou ultérieure.
-   Tous les pools de nœuds doivent avoir la même version que le cluster d'utilisateur.
-   Si le cluster utilise l'équilibreur de charge Seesaw, assurez-vous de ne pas compter sur Seesaw pour la conservation de l'adresse IP du client, comme décrit dans la section suivante.

### Conservation de l'adresse IP du client Seesaw

**Avertissement** : Ne migrez pas vers MetalLB si vous utilisez Seesaw pour la conservation des adresses IP des clients. Plus précisément, ne migrez pas vers MetalLB si des services du cluster ont la valeur `Local` pour `spec.externalTrafficPolicy`.

Pour vérifier le `externalTrafficPolicy`, exécutez la commande suivante :

```
kubectl --kubeconfig USER_CLUSTER_KUBECONFIG get svc -A -o yaml | grep "externalTrafficPolicy: Local"
```

Si vous rencontrez ce problème, contactez l'assistance Google.

## Estimer le temps nécessaire et planifier un intervalle de maintenance

Lorsque vous mettez à jour le cluster, tous les pools de nœuds sont mis à jour en parallèle par défaut. Toutefois, dans chaque pool de nœuds, les nœuds sont mis à jour de manière séquentielle. Par conséquent, la durée totale de la mise à jour dépend du nombre de nœuds dans le plus grand pool de nœuds. Pour calculer une estimation approximative pour chaque mise à jour :

-   Si vous migrez de Seesaw vers MetalLB, prévoyez 15 minutes pour la mise à jour afin de choisir un pool de nœuds pour l'équilibreur de charge MetalLB. Pour cette mise à jour, seul le pool de nœuds sélectionné est mis à jour.
-   Pour toute autre mise à jour du processus de migration, multipliez 15 minutes par le nombre de nœuds du pool de nœuds.

Pour estimer le temps nécessaire, comptez le nombre de fois où vous devez mettre à jour le cluster. Les étapes générales suivantes indiquent quand exécuter `gkectl update cluster` pour mettre à jour le cluster :

1.  Si le cluster d'utilisateur utilise le [chiffrement permanent des secrets](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption?hl=fr#enable_always-on_secrets_encryption), désactivez la fonctionnalité et exécutez `gkectl update cluster`.
2.  Si le cluster d'utilisateur a la valeur `enableDataplaneV2` non définie ou définie sur `false`, apportez les modifications de configuration, puis exécutez `gkectl update cluster` pour migrer vers Dataplane V2.
3.  Préparez-vous à migrer l'équilibreur de charge et le plan de contrôle :
    
    1.  Si la [réparation automatique](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/node-auto-repair?hl=fr#enabling_node_repair_and_health_checking_for_an_existing_admin_cluster) est activée pour le cluster d'administrateur, désactivez-la. Exécutez ensuite la commande `gkectl update admin`. Cette mise à jour se termine rapidement, car elle ne recrée pas les nœuds du cluster d'administrateur.
    2.  Si le cluster d'utilisateur utilise Seesaw, choisissez un pool de nœuds à utiliser pour l'équilibreur de charge MetalLB, puis exécutez `gkectl update cluster`. Cette mise à jour ne concerne que les nœuds du pool de nœuds sélectionné.
4.  Apportez toutes les modifications de configuration nécessaires pour mettre à jour votre équilibreur de charge et migrer vers Controlplane V2. Exécutez ensuite la commande `gkectl update cluster`.
    
5.  Après la migration, si vous avez désactivé le chiffrement permanent des secrets, réactivez la fonctionnalité et exécutez `gkectl update cluster`.
    

La durée totale de la migration dépend du nombre de fois où vous devez exécuter `gkectl cluster update`, ce qui dépend de votre configuration. Par exemple, supposons que vous migrez vers Dataplane V2, ControlPlane V2 et MetalLB. Supposons également qu'il y ait 10 nœuds dans le plus grand pool de nœuds et 3 nœuds dans le pool de nœuds que MetalLB utilisera. Pour calculer une estimation du temps de migration, ajoutez les éléments suivants :

-   150 minutes pour la migration vers Dataplane V2, car 15 minutes \* 10 nœuds dans le plus grand pool = 150 minutes.
-   45 minutes pour le pool de nœuds utilisé par MetalLB, car 15 minutes \* 3 nœuds dans ce pool de nœuds = 45 minutes.
-   150 minutes pour la mise à jour de Controlplane V2 et MetalLB, car 15 minutes \* 10 nœuds dans le plus grand pool = 150 minutes.

La durée totale de la migration est d'environ 345 minutes, soit 5 heures et 45 minutes.

Si nécessaire, vous pouvez effectuer la migration par étapes. En reprenant l'exemple précédent, vous pouvez effectuer la migration vers Dataplane V2 en un seul intervalle de maintenance, et le reste de la migration en un ou deux intervalles de maintenance.

### Planifier un temps d'arrêt lors de la migration

Lorsque vous planifiez votre migration, prévoyez les types d'indisponibilité suivants :

-   **Temps d'arrêt du plan de contrôle** : l'accès au serveur d'API Kubernetes est affecté pendant la migration. Si vous migrez vers Controlplane V2, le plan de contrôle est indisponible pour les clusters d'utilisateur kubeception pendant la migration de [`loadBalancer.vips.controlPlaneVIP`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-controlplanevip-field). Le temps d'arrêt est généralement inférieur à 10 minutes, mais sa durée dépend de votre infrastructure.
-   **Temps d'arrêt de la charge de travail** : les adresses IP virtuelles utilisées par les [services de type LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) ne sont pas disponibles. Cela ne se produit que lors d'une migration de Seesaw vers MetalLB. Le processus de migration de MetalLB interrompt les connexions réseau à toutes les adresses IP virtuelles du cluster d'utilisateur pour les services Kubernetes de type LoadBalancer pendant environ deux à dix minutes. Une fois la migration terminée, les connexions fonctionnent à nouveau.

Le tableau suivant décrit l'impact de la migration :

De

Vers

Accès aux API Kubernetes

Charges de travail de l'utilisateur

Cluster Kubeception utilisant Calico, dont `enableDataplaneV2` n'est pas défini ou est défini sur `false`

Cluster Kubeception avec Dataplane V2

Non affecté

Non affecté

Cluster Kubeception, dont `enableControlplaneV2` n'est pas défini ou est défini sur `false` avec `MetalLB` ou `ManualLB`

Cluster Controlplane V2 avec le même type d'équilibreur de charge

Affecté

Non affecté

Cluster Kubeception avec `loadBalancer.kind: "F5BigIP"`

Cluster Controlplane V2 avec configuration manuelle de l'équilibreur de charge

Affecté

Non affecté

Cluster Kubeception avec `loadBalancer.kind: "Seesaw"`

Cluster Controlplane V2 avec MetalLB

Affecté

Affecté

-   **Affecté** : une interruption de service est perceptible pendant la migration.
-   **Non affecté** : aucune interruption de service ou une interruption presque imperceptible.

## Préparer la migration

Pour garantir la réussite de la migration, suivez les étapes décrites dans les sections suivantes.

### Allouer de nouvelles adresses IP

Si vous migrez vers Controlplane V2, attribuez de nouvelles adresses IP statiques dans le même VLAN que les nœuds de calcul (les nœuds des pools de nœuds).

-   Vous avez besoin d'une adresse IP pour [`loadBalancer.vips.controlPlaneVIP`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-controlplanevip-field).
    
-   Allouez une adresse IP pour chaque nœud du plan de contrôle. Le nombre d'adresses IP à allouer dépend du fait que le cluster d'utilisateur sera disponibilité élevée ou non.
    
    -   Non-HA : une adresse IP
    -   HA : trois adresses IP

### Mettre à jour les règles de pare-feu

Si vous migrez vers Controlplane V2, mettez à jour les règles de pare-feu sur vos clusters d'utilisateur. Assurez-vous que les adresses IP nouvellement attribuées aux nœuds du plan de contrôle du cluster d'utilisateur peuvent accéder à toutes les API requises et à toutes les autres destinations, comme décrit dans [Règles de pare-feu pour les nœuds du cluster d'utilisateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/firewall-rules?hl=fr#firewall_rules_for_user_cluster_nodes).

### Vérifier les versions du cluster et du pool de nœuds

Vérifiez que tous les pools de nœuds utilisent la même version que le cluster d'utilisateur, qui doit être en version 1.30 ou ultérieure. Si ce n'est pas le cas, [mettez à niveau les pools de nœuds](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading?hl=fr) vers la [gkeOnPremVersion](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#gkeonpremversion-field) dans le fichier de configuration du cluster d'utilisateur avant de poursuivre la migration. Pour vérifier les versions, exécutez la commande suivante :

```
gkectl version --kubeconfig ADMIN_CLUSTER_KUBECONFIG --details
```

Remplacez `ADMIN_CLUSTER_KUBECONFIG` par le chemin d'accès au fichier kubeconfig de votre cluster d'administrateur.

### Vérifier l'état du cluster

Vérifiez l'état du cluster et corrigez les problèmes signalés par la commande [gkectl diagnose cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/troubleshooting/diagnose?hl=fr#diagnose_user_cluster) :

```
gkectl diagnose cluster --kubeconfig ADMIN_CLUSTER_KUBECONFIG \
    --cluster-name USER_CLUSTER_NAME
```

Remplacez les éléments suivants :

-   `ADMIN_CLUSTER_KUBECONFIG` : chemin d'accès au fichier kubeconfig du cluster d'administrateur
-   `USER_CLUSTER_NAME` : nom du cluster d'utilisateur.

### Désactiver la réparation automatique dans le cluster d'administrateur

Si vous migrez le cluster d'utilisateur pour utiliser Controlplane V2 et que la [réparation automatique est activée](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/node-auto-repair?hl=fr#enabling_node_repair_and_health_checking_for_an_existing_admin_cluster) dans le cluster d'administrateur, désactivez-la. Vérifiez le champ `autoRepair.enabled` du fichier de configuration du cluster d'administrateur. Si ce champ n'est pas défini ou est défini sur `true`, procédez comme suit :

1.  Dans le fichier de configuration du cluster d'administrateur, définissez `autoRepair.enabled` sur `false` . Exemple :
    
    ```
    autoRepair:
      enabled: false
    ```
    
2.  Mettez à jour le cluster d'administrateur :
    
    ```
    gkectl update admin --kubeconfig ADMIN_CLUSTER_KUBECONFIG \
        --config ADMIN_CLUSTER_CONFIG
    ```
    

Remplacez les éléments suivants :

-   `ADMIN_CLUSTER_KUBECONFIG` : chemin d'accès au fichier kubeconfig du cluster d'administrateur.
-   `ADMIN_CLUSTER_CONFIG` : chemin d'accès au fichier de configuration du cluster d'administrateur.

Une fois la migration terminée, veillez à [réactiver la réparation automatique dans le cluster d'administrateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/node-auto-repair?hl=fr#enabling_node_repair_and_health_checking_for_an_existing_admin_cluster).

### Vérifier si le chiffrement permanent des secrets pose problème

Si vous migrez le cluster d'utilisateur pour utiliser Controlplane V2, vérifiez s'il existe un problème avec le chiffrement permanent des secrets.

Si le [chiffrement permanent des secrets](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption?hl=fr) a déjà été activé sur le cluster utilisateur, vous devez suivre la procédure décrite dans [Désactiver le chiffrement permanent des secrets et déchiffrer les secrets](#disable_and_decrypt_secrets) avant de commencer la migration. Sinon, le nouveau cluster Controlplane V2 ne pourra pas déchiffrer les secrets.

Avant de commencer la migration, exécutez la commande suivante pour vérifier si le chiffrement permanent des secrets a déjà été activé :

kubectl \--kubeconfig ADMIN\_CLUSTER\_KUBECONFIG \\
  get onpremusercluster USER\_CLUSTER\_NAME \\
  \-n USER\_CLUSTER\_NAME\-gke-onprem-mgmt \\
  \-o jsonpath\={.spec.secretsEncryption}

Si le résultat de la commande précédente est vide, le chiffrement permanent des secrets n'a jamais été activé. Vous pouvez lancer la migration.

Si le résultat de la commande précédente n'est pas vide, cela signifie que le chiffrement permanent des secrets était précédemment activé. Avant de procéder à la migration, vous devez suivre les étapes de la section suivante pour vous assurer que le nouveau cluster Control-Plane V2 peut déchiffrer les secrets.

L'exemple suivant montre une sortie non vide :

{"generatedKeyVersions":{"keyVersions":\[1\]}}

**Avertissement** : Si vous avez commencé la migration sans suivre les étapes de la section suivante, contactez l'assistance Google.

#### Désactiver le chiffrement permanent des secrets et déchiffrer les secrets si nécessaire

Pour désactiver le chiffrement permanent des secrets et déchiffrer les secrets, procédez comme suit :

1.  Dans le fichier de configuration du cluster d'utilisateur, pour désactiver le chiffrement permanent des secrets, ajoutez un champ `disabled: true` à la section `secretsEncryption` :
    
    ```
    secretsEncryption:
        mode: GeneratedKey
        generatedKey:
            keyVersion: KEY_VERSION
            disabled: true
    ```
    
2.  Mettez à jour le cluster :
    
    ```
    gkectl update cluster --kubeconfig ADMIN_CLUSTER_KUBECONFIG \
        --config USER_CLUSTER_CONFIG
    ```
    
    Remplacez les éléments suivants :
    
    -   `ADMIN_CLUSTER_KUBECONFIG` : chemin d'accès au fichier kubeconfig du cluster d'administrateur
    -   `USER_CLUSTER_CONFIG` : chemin d'accès au fichier de configuration du cluster d'utilisateur
3.  Effectuez une mise à jour progressive sur un DaemonSet spécifique, comme suit :
    
    kubectl \--kubeconfig ADMIN\_CLUSTER\_KUBECONFIG \\
      rollout restart statefulsets kube-apiserver \\
      \-n USER\_CLUSTER\_NAME
    
4.  Obtenez les fichiers manifestes de tous les secrets du cluster utilisateur au format YAML :
    
    kubectl \--kubeconfig USER\_CLUSTER\_KUBECONFIG \\
      get secrets \-A \-o yaml \> SECRETS\_MANIFEST.yaml
    
5.  Pour que tous les secrets soient stockés dans etcd en texte brut, réappliquez tous les secrets dans le cluster utilisateur :
    
    kubectl \--kubeconfig USER\_CLUSTER\_KUBECONFIG \\
      apply \-f SECRETS\_MANIFEST.yaml
    
    Vous pouvez maintenant commencer la migration vers Control-plane V2. Une fois la migration terminée, vous pouvez [réactiver le chiffrement des secrets toujours activé](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/always-on-secrets-encryption?hl=fr#enable_always-on_secrets_encryption) sur le cluster.
    

### Vérifier si les webhooks de charge de travail sont mal configurés

Si vous migrez le cluster d'utilisateur pour utiliser Controlplane V2, vérifiez s'il existe un problème lié à des hooks Web de charge de travail mal configurés.

Si vous avez des webhook qui incluent des pods système dans l'espace de noms `kube-system`, ajoutez [namespaceSelector](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#matching-requests-namespaceselector) pour filtrer l'espace de noms `kube-system`.

Par exemple,

  namespaceSelector:
    matchExpressions:
    - key: kubernetes.io/metadata.name
      operator: NotIn
      values:
      - kube-system

### Activer un pool de nœuds pour l'utiliser avec MetalLB

Si vous migrez de l'équilibreur de charge Seesaw groupé vers MetalLB, suivez les étapes de cette section. Le cluster utilise Seesaw si `loadBalancer.kind: Seesaw` se trouve dans le fichier de configuration du cluster d'utilisateur. Si vous migrez la configuration F5 BIG-IP intégrée, passez à la section suivante, [Migrer vers Dataplane V2](#migrate_to_dataplane_v2).

Choisissez un pool de nœuds et activez-le pour l'utiliser avec MetalLB. La migration déploie MetalLB sur les nœuds de ce pool de nœuds.

**Avertissement** : Assurez-vous que le pool de nœuds que vous activez pour MetalLB n'inclut pas l'adresse IP d'un service avec un volume d'entrée NAT (traduction d'adresse réseau) élevé. Cela peut entraîner un manque de mémoire pour vos charges de travail. Utilisez plutôt un autre pool de nœuds existant ou créez-en un pour que MetalLB puisse l'utiliser.

1.  Dans la section [nodePools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#nodepools-section) de votre fichier de configuration de cluster d'utilisateur, choisissez un pool de nœuds ou [ajoutez-en un](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/managing-node-pools?hl=fr#add_a_node_pool), puis définissez `enableLoadBalancer` sur `true`. Exemple :
    
    ```
    nodePools:
      - name: pool-1
        replicas: 3
        enableLoadBalancer: true
    ```
    
2.  Mettez à jour le cluster :
    
    ```
    gkectl update cluster --kubeconfig ADMIN_CLUSTER_KUBECONFIG \
        --config USER_CLUSTER_CONFIG
    ```
    

Pour en savoir plus sur MetalLB, consultez [Équilibrage de charge groupé avec MetalLB](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb?hl=fr).

## Migrer vers Dataplane V2

Avant la migration, vérifiez si DataPlane V2 est activé sur le cluster en exécutant la commande suivante :

```
kubectl --kubeconfig ADMIN_CLUSTER_KUBECONFIG get onpremusercluster USER_CLUSTER_NAME -n USER_CLUSTER_NAME-gke-onprem-mgmt -o yaml | grep enableDataplaneV2
```

Si Dataplane V2 est déjà activé, passez à la section suivante, [Préparer la migration de l'équilibreur de charge](#prepare_for_the_load_balancer_migration).

Pour migrer vers Dataplane V2, vous disposez des options suivantes :

-   Mettez à niveau le cluster vers la version 1.31. Pour en savoir plus, consultez [Activer Dataplane V2](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading?hl=fr#enable-dataplane-v2).
    
-   Mettez à jour le cluster 1.30.
    

Dans les deux cas, vous devez supprimer temporairement la spécification `NetworkPolicy`, comme décrit dans les étapes suivantes.

Pour migrer vers Dataplane V2, procédez comme suit. Si vous avez des questions concernant la suppression temporaire de la spécification `NetworkPolicy`, contactez l'assistance Google.

Si votre cluster utilise un `NetworkPolicy`, supprimez temporairement sa spécification du cluster, comme suit :

1.  Vérifiez si un `NetworkPolicy` non système est appliqué à votre cluster :
    
    ```
    kubectl --kubeconfig USER_CLUSTER_KUBECONFIG get networkpolicy -A -o wide | grep -v kube-system
    ```
    
2.  Si la sortie de l'étape précédente n'était pas vide, enregistrez chaque spécification `NetworkPolicy` dans un fichier afin de pouvoir la réappliquer après la mise à jour du cluster.
    
    ```
    kubectl --kubeconfig USER_CLUSTER_KUBECONFIG get networkpolicy NETWORK_POLICY_NAME -n NETWORK_POLICY_NAMESPACE -o yaml > NETWORK_POLICY_NAME.yaml
    ```
    
    Remplacez les éléments suivants :
    
    -   `NETWORK_POLICY_NAME` : nom du `NetworkPolicy` que vous enregistrez.
    -   `NETWORK_POLICY_NAMESPACE` : espace de noms du `NetworkPolicy`.
3.  Supprimez le `NetworkPolicy` à l'aide de la commande suivante :
    
    ```
    kubectl --kubeconfig USER_CLUSTER_KUBECONFIG delete networkpolicy NETWORK_POLICY_NAME -n NETWORK_POLICY_NAMESPACE
    ```
    

Pour migrer vers Dataplane V2, procédez comme suit :

1.  Définissez [`enableDataplaneV2`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#enabledataplanev2-field) sur `true` dans le fichier de configuration de votre cluster d'utilisateur.
    
2.  Pour activer DataPlane V2, mettez à jour votre cluster :
    
    ```
    gkectl update cluster --kubeconfig ADMIN_CLUSTER_KUBECONFIG \
    --config USER_CLUSTER_CONFIG
    ```
    
3.  Si vous avez supprimé des spécifications `NetworkPolicy` non système lors d'une étape précédente, réappliquez-les avec cette commande une fois la mise à jour terminée :
    
    ```
    kubectl --kubeconfig USER_CLUSTER_KUBECONFIG apply -f NETWORK_POLICY_NAME.yaml
    ```
    

Une fois ces étapes terminées, Dataplane V2 est activé. Préparez-vous ensuite à migrer votre cluster vers l'équilibreur de charge et Controlplane V2 recommandés.

## Préparer la migration de l'équilibreur de charge

Si vos clusters d'utilisateur utilisent l'équilibreur de charge Seesaw ou F5-BIG IP intégré, suivez les étapes de cette section pour apporter les modifications nécessaires au fichier de configuration du cluster d'utilisateur. Sinon, passez à la section suivante, [Préparer la migration vers Controlplane V2](#prepare_for_the_migration_to_controlplane_v2).

### F5 BIG-IP

Si vos clusters utilisent la configuration F5-BIG IP intégrée, préparez la migration vers `ManualLB` en apportant les modifications suivantes au fichier de configuration du cluster d'utilisateur :

1.  Remplacez [`loadBalancer.kind`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-kind-field) par `"ManualLB"`.
2.  Conservez la même valeur pour le champ [`loadBalancer.vips.ingressVIP`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-ingressvip-field).
3.  Si vous migrez vers Controlplane V2, remplacez la valeur du champ [`loadBalancer.vips.controlPlaneVIP`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-controlplanevip-field) par l'adresse IP que vous avez allouée. Sinon, vous pouvez conserver la même valeur.
4.  Supprimez l'intégralité de la section [`loadBalancer.f5BigIP`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-f5bigip-section).

L'exemple de fichier de configuration de cluster d'utilisateur suivant présente ces modifications :

loadBalancer:
vips:
  controlPlaneVIP: 192.0.2.5
  ingressVIP: 198.51.100.20
kind: "f5BigIP" "ManualLB"
f5BigIP:
  address: "203.0.113.2"
  credentials:
  fileRef:
    path: "my-config-folder/user-creds.yaml"
    entry: "f5-creds"
  partition: "my-f5-user-partition"

### Seesaw

Si vos clusters d'utilisateur utilisent l'équilibreur de charge Seesaw, préparez la migration vers MetalLB en suivant les étapes décrites dans les sections suivantes.

#### Spécifier des pools d'adresses

Le contrôleur MetalLB attribue des adresses IP aux services. Lorsqu'un développeur d'applications crée un service de type LoadBalancer dans un cluster d'utilisateur, le contrôleur MetalLB attribue automatiquement une adresse IP au service. Le contrôleur MetalLB sélectionne une adresse IP dans un pool d'adresses que vous spécifiez.

Pour vous assurer que votre cluster d'utilisateur dispose de suffisamment d'adresses IP, tenez compte du nombre maximal de services LoadBalancer susceptibles d'être actifs. Ensuite, spécifiez suffisamment d'adresses IP dans la section [`loadBalancer.metalLB.addressPools`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-metallb-section) du fichier de configuration de votre cluster d'utilisateur.

**Important** : Étant donné qu'un service de type LoadBalancer expose le [proxy d'entrée](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-service-ingress?hl=fr), vous devez inclure l'[adresse IP virtuelle d'entrée](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-ingressvip-field) de votre cluster d'utilisateur dans l'un des pools d'adresses.

Les adresses du pool doivent être au format CIDR ou au format de plage. Pour spécifier une adresse individuelle, utilisez un masque CIDR `/32`. Exemple :

```
addresses:
  -   "192.0.2.0/26"
  -   "192.0.2.64-192.0.2.72"
  -   "192.0.2.75/32"
```

#### Exclure les adresses IP utilisées à d'autres fins

N'incluez pas les adresses IP suivantes dans un pool d'adresses :

-   Adresses IP virtuelles du plan de contrôle :
    
    -   [cluster d'administrateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-controlplanevip-field)
    -   [cluster d'utilisateurs](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-controlplanevip-field)
-   Adresses IP des nœuds du plan de contrôle :
    
    -   [cluster d'administrateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest?hl=fr#network-controlplaneipblock-ips-section)
    -   [cluster d'utilisateurs](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#network-controlplaneipblock-ips-section)
-   Adresses IP de la passerelle :
    
    -   [cluster d'administrateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest?hl=fr#network-controlplaneipblock-gateway-field)
    -   [cluster d'utilisateurs](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#network-controlplaneipblock-gateway-field)
-   Adresses IP pour les services :
    
    -   [cluster d'administrateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest?hl=fr#network-servicecidr-field)
    -   [cluster d'utilisateurs](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#network-servicecidr-field)
-   Adresses IP pour les pods :
    
    -   [cluster d'administrateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest?hl=fr#network-podcidr-field)
    -   [cluster d'utilisateurs](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#network-podcidr-field)
-   [Adresses IP des nœuds de calcul](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ip-block-file?hl=fr) du cluster d'utilisateur
    
-   Adresses IP des [serveurs vCenter](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vcenter-server-address?hl=fr), des [serveurs DNS](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest?hl=fr#network-hostconfig-dnsservers-field), des [serveurs NTP](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest?hl=fr#network-hostconfig-ntpservers-field) et de la [station de travail de l'administrateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation?hl=fr)
    

#### Mettre à jour le fichier de configuration du cluster

Mettez à jour le fichier de configuration du cluster pour supprimer la section Seesaw et ajouter une section MetalLB, comme suit :

1.  Définissez `loadBalancer.kind` sur `"MetalLB"`.
2.  Vous pouvez conserver la même valeur pour le champ [`loadBalancer.vips.ingressVIP`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-ingressvip-field).
3.  Ajoutez l'adresse IP virtuelle d'entrée à un [pool d'adresses MetalLB](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-metallb-addresspool-addresses-field).
4.  Si vous migrez vers Controlplane V2, remplacez la valeur du champ [`loadBalancer.vips.controlPlaneVIP`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-controlplanevip-field) par l'adresse IP que vous avez allouée. Sinon, vous pouvez conserver la même valeur.
5.  Supprimez la section `loadBalancer.seesaw`.
6.  Ajoutez une section [`loadBalancer.metalLB`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-metallb-section).

L'extrait suivant d'un fichier de configuration de cluster d'utilisateur montre ces modifications et la configuration MetalLB :

-   Pool d'adresses à partir duquel le contrôleur MetalLB peut choisir et attribuer des services de type LoadBalancer. L'adresse IP virtuelle d'entrée, qui dans cet exemple est `198.51.100.10`, se trouve dans ce pool au format de plage `198.51.100.10/32`.
-   Adresse IP virtuelle désignée pour le serveur d'API Kubernetes du cluster d'utilisateur.
-   Adresse IP virtuelle d'entrée que vous avez configurée pour le proxy d'entrée.
-   d'un pool de nœuds permettant d'utiliser MetalLB. La migration déploie MetalLB sur les nœuds de ce pool de nœuds.

loadBalancer:
  vips:
    controlPlaneVIP: "198.51.100.50"
    ingressVIP: "198.51.100.10"
  kind: "MetalLB" "Seesaw"
  seesaw:
    ipBlockFilePath: "user-cluster-2-ipblock.yaml"
    vrid: 1
    masterIP: ""
    cpus: 4
    memoryMB: 3072
  metalLB:
    addressPools:
      - name: "address-pool-1"
        addresses:
        - "198.51.100.10/32"
        - "198.51.100.80 - 198.51.100.89"

## Préparer la migration vers Controlplane V2

Si Controlplane V2 n'est pas activé sur le cluster :

-   Mettez à jour le fichier de configuration du cluster d'utilisateur.
-   Si le cluster utilise l'équilibrage de charge manuel (`loadBalancer.kind: "ManualLB"`), mettez également à jour la configuration de votre équilibreur de charge.

Ces étapes sont décrites dans les sections suivantes.

Si Controlplane V2 est déjà activé sur le cluster, passez à la section [Migrer le cluster d'utilisateur](#migrate_the_user_cluster).

### Mettre à jour le fichier de configuration du cluster utilisateur

Apportez les modifications suivantes au fichier de configuration du cluster d'utilisateur existant :

1.  Définissez [`enableControlplaneV2`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#enablecontrolplanev2-field) sur "true".
2.  Vous pouvez également rendre le plan de contrôle du cluster d'utilisateur Controlplane V2 disponibilité élevée (HA). Pour passer d'un cluster non HD à un cluster HD, remplacez [`masterNode.replicas`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#masternode-replicas-field) par 3.
3.  Ajoutez la ou les adresses IP statiques des nœuds du plan de contrôle du cluster d'utilisateur à la section [`network.controlPlaneIPBlock.ips`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#network-controlplaneipblock-ips-section). L'adresse IP (ou les adresses IP) des nœuds du plan de contrôle doivent se trouver dans le même VLAN que les nœuds de calcul. Les noms d'hôtes sont obligatoires.
4.  Remplissez `netmask` et `gateway` dans la section [`network.controlPlaneIPBlock`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#network-controlplaneipblock-section).
5.  Si la section [`network.hostConfig`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#network-hostconfig-section) est vide, remplissez-la.
6.  Assurez-vous que le champ [`loadBalancer.vips.controlPlaneVIP`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-vips-controlplanevip-field) contient la nouvelle adresse IP pour l'adresse IP virtuelle du plan de contrôle. L'adresse IP doit se trouver dans le même VLAN que les adresses IP des nœuds du plan de contrôle.
7.  Si le cluster d'utilisateur utilise l'équilibrage de charge manuel, définissez [`loadBalancer.manualLB.controlPlaneNodePort`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-manuallb.controlplanenodeport-field) et [`loadBalancer.manualLB.konnectivityServerNodePort`](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-cluster-configuration-file-latest?hl=fr#loadbalancer-manuallb.konnectivityservernodeport-field) sur 0. Ils ne sont pas requis lorsque Controlplane V2 est activé, mais ils doivent avoir la valeur 0.
8.  Si le cluster d'utilisateur utilise l'équilibrage de charge manuel, configurez votre équilibreur de charge comme décrit dans la section suivante.

**Remarque** : Veillez à bien vérifier tous les paramètres. Tous les champs précédents sont immuables, sauf lors de la mise à jour du cluster pour la migration.

### Ajustez les mappages dans votre équilibreur de charge si nécessaire.

Si votre cluster d'utilisateur utilise déjà l'équilibrage de charge manuel, vous devez configurer certains mappages sur votre équilibreur de charge. Si vous migrez de la configuration F5 BIG-IP intégrée vers l'équilibrage de charge manuel, vous n'avez pas besoin de modifier la configuration de votre équilibreur de charge. Vous pouvez passer à la section suivante, [Migrer le cluster d'utilisateur](#migrate_the_user_cluster).

Pour chaque adresse IP que vous avez spécifiée dans la section `network.controlPlaneIPBlock`, configurez les mappages suivants dans votre équilibreur de charge pour les nœuds du plan de contrôle :

```
(ingressVIP:80) -> (NEW_NODE_IP_ADDRESS:ingressHTTPNodePort)
(ingressVIP:443) -> (NEW_NODE_IP_ADDRESS:ingressHTTPSNodePort)
```

Ces mappages sont nécessaires pour tous les nœuds du cluster d'utilisateur, à la fois les nœuds du plan de contrôle et les nœuds de calcul. Étant donné que les NodePorts sont configurés sur le cluster, Kubernetes les ouvre sur tous les nœuds du cluster afin que n'importe quel nœud du cluster puisse gérer le trafic du plan de données.

Une fois que vous avez configuré les mappages, l'équilibreur de charge écoute le trafic sur l'adresse IP que vous avez configurée pour l'entrée VIP du cluster d'utilisateur sur les ports HTTP et HTTPS standards. L'équilibreur de charge achemine les requêtes vers n'importe quel nœud du cluster. Une fois la requête acheminée vers l'un des nœuds du cluster, la mise en réseau Kubernetes interne l'achemine vers le pod de destination.

## Migrer le cluster d'utilisateur

Commencez par examiner attentivement toutes les modifications que vous avez apportées au fichier de configuration du cluster d'utilisateur. Tous les paramètres de l'équilibreur de charge et de Controlplane V2 sont immuables, sauf lorsque vous mettez à jour le cluster pour la migration.

Pour mettre à jour le cluster, exécutez la commande suivante :

```
gkectl update cluster --kubeconfig ADMIN_CLUSTER_KUBECONFIG \
    --config USER_CLUSTER_CONFIG
```

### Migration vers Controlplane V2

Lors de la migration vers Controlplane V2, la mise à jour effectue les actions suivantes :

1.  Crée le plan de contrôle d'un nouveau cluster avec ControlPlane V2 activé.
2.  Arrête le plan de contrôle Kubernetes du cluster kubeception.
3.  Prend un instantané etcd du cluster kubeception.
4.  Éteint les nœuds du plan de contrôle du cluster d'utilisateur du cluster kubeception. Tant que la migration n'est pas terminée, les nœuds ne sont pas supprimés, car cela permet de récupérer en cas d'échec en revenant à ce cluster kubeception.
5.  Restaure les données du cluster dans le nouveau plan de contrôle à l'aide de l'instantané etcd créé lors d'une étape précédente.
6.  Connecte les nœuds du pool de nœuds du cluster kubeception au nouveau plan de contrôle, accessible avec le nouveau `controlPlaneVIP`.
7.  Consolide le cluster d'utilisateur restauré pour qu'il corresponde à l'état final du cluster avec Controlplane V2 activé.

Veuillez noter les points suivants :

-   Il n'y a pas d'interruption de service pour les charges de travail du cluster d'utilisateur pendant la migration.
-   Pendant la migration, le plan de contrôle du cluster d'utilisateur est indisponible pendant quelques minutes. Plus précisément, le plan de contrôle est indisponible entre l'arrêt du plan de contrôle Kubernetes du cluster kubeception et la fin de la connexion des nœuds du pool de nœuds du cluster kubeception au nouveau plan de contrôle. (Lors des tests, ce temps d'arrêt était inférieur à sept minutes, mais la durée réelle dépend de votre infrastructure.)
-   À la fin de la migration, les nœuds du plan de contrôle du cluster d'utilisateur des clusters kubeception sont supprimés. Si le champ [network.ipMode.type](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest?hl=fr#network-ipmode-type-field) du cluster d'administrateur est défini sur `"static"`, vous pouvez recycler certaines des adresses IP statiques inutilisées. Vous pouvez lister les objets de nœud du cluster d'administration avec `kubectl get nodes -o wide` pour voir quelles adresses IP sont utilisées. Pour recycler ces adresses IP, supprimez-les du fichier de configuration du cluster d'administrateur et exécutez `gkectl update admin`.
-   À la fin de la migration, les nœuds de calcul font l'objet d'une mise à jour progressive. Attendez que tous les nœuds soient prêts avant de passer aux étapes post-migration de la section suivante.
-   Après la migration, l'ancienne adresse IP virtuelle du plan de contrôle fonctionne toujours, mais elle est instable. Ne comptez pas dessus. Mettez à jour toutes les dépendances de l'ancienne adresse IP virtuelle pour utiliser la nouvelle adresse IP virtuelle dès que possible.

## Après la migration

Une fois la mise à jour terminée, procédez comme suit :

1.  Vérifiez que votre cluster d'utilisateur est en cours d'exécution :
    
    ```
    kubectl get nodes --kubeconfig USER_CLUSTER_KUBECONFIG
    ```
    
    Le résultat ressemble à ce qui suit :
    
    ```
    cp-vm-1       Ready    control-plane,master   18m
    cp-vm-2       Ready    control-plane,master   18m
    cp-vm-3       Ready    control-plane,master   18m
    worker-vm-1   Ready                           6m7s
    worker-vm-2   Ready                           6m6s
    worker-vm-3   Ready                           6m14s
    ```
    
2.  Si vous avez migré vers Controlplane V2, mettez à jour les [règles de pare-feu de votre cluster d'administrateur](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/firewall-rules?hl=fr#firewall_rules_for_admin_clusters) pour supprimer les nœuds du plan de contrôle du cluster d'utilisateur kubeception.
    
3.  Si vous avez désactivé le chiffrement permanent des secrets, réactivez la fonctionnalité.
    
    1.  Dans le fichier de configuration du cluster d'utilisateur, supprimez le champ `disabled: true`.
    2.  Mettez à jour le cluster d'utilisateur :
        
        ```
        gkectl update cluster --kubeconfig ADMIN_CLUSTER_KUBECONFIG \
            --config USER_CLUSTER_CONFIG
        ```
        
4.  Si vous avez désactivé la réparation automatique dans le cluster d'administrateur, réactivez-la.
    
    1.  Dans votre fichier de configuration de cluster d'administrateur, définissez `autoRepair.enabled` sur `true`.
        
    2.  Mettez à jour le cluster :
        
        ```
        gkectl update admin --kubeconfig ADMIN_CLUSTER_KUBECONFIG \
            --config ADMIN_CLUSTER_CONFIG
        ```
        

### Migration de l'équilibreur de charge

Si vous avez migré l'équilibreur de charge, vérifiez que ses composants s'exécutent correctement.

### Migration MetalLB

Si vous avez migré vers MetalLB, vérifiez que les composants MetalLB s'exécutent correctement :

```
kubectl --kubeconfig USER_CLUSTER_KUBECONFIG get pods \
    --namespace kube-system --selector app=metallb
```

Le résultat affiche les pods du contrôleur et du Speaker MetalLB. Exemple :

```
metallb-controller-744884bf7b-rznr9   1/1     Running
metallb-speaker-6n8ws                 1/1     Running
metallb-speaker-nb52z                 1/1     Running
metallb-speaker-rq4pp                 1/1     Running
```

Une fois la migration terminée, supprimez les VM Seesaw éteintes pour le cluster d'utilisateur. Vous trouverez les noms des VM Seesaw dans la section `vmnames` du fichier `seesaw-for-[USERCLUSTERNAME].yaml` de votre répertoire de configuration.

### Migration F5 BIG-IP

Une fois la migration vers l'équilibrage de charge manuel effectuée, le trafic vers vos clusters n'est pas interrompu. En effet, les ressources F5 existantes sont toujours là, comme vous pouvez le voir en exécutant la commande suivante :

```
kubectl --kubeconfig CLUSTER_KUBECONFIG \
api-resources --verbs=list -o name | xargs -n 1 kubectl --kubeconfig
CLUSTER_KUBECONFIG get --show-kind --ignore-not-found
--selector=onprem.cluster.gke.io/legacy-f5-resource=true -A
```

Le résultat ressemble à ce qui suit :

```

Warning: v1 ComponentStatus is deprecated in v1.19+
NAMESPACE     NAME                        TYPE     DATA   AGE
kube-system   secret/bigip-login-sspwrd   Opaque   4      14h
NAMESPACE     NAME                              SECRETS   AGE
kube-system   serviceaccount/bigip-ctlr         0         14h
kube-system   serviceaccount/load-balancer-f5   0         14h
NAMESPACE     NAME                                        READY   UP-TO-DATE   AVAILABLE   AGE
kube-system   deployment.apps/k8s-bigip-ctlr-deployment   1/1     1            1           14h
kube-system   deployment.apps/load-balancer-f5            1/1     1            1           14h
NAME                                                                                ROLE                                       AGE
clusterrolebinding.rbac.authorization.k8s.io/bigip-ctlr-clusterrole-binding         ClusterRole/bigip-ctlr-clusterrole         14h
clusterrolebinding.rbac.authorization.k8s.io/load-balancer-f5-clusterrole-binding   ClusterRole/load-balancer-f5-clusterrole   14h
NAME                                                                 CREATED AT
clusterrole.rbac.authorization.k8s.io/bigip-ctlr-clusterrole         2024-03-25T05:16:40Z
clusterrole.rbac.authorization.k8s.io/load-balancer-f5-clusterrole   2024-03-25T05:16:41Z
```

Envoyer des commentaires

Sauf indication contraire, le contenu de cette page est régi par une licence [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), et les échantillons de code sont régis par une licence [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0). Pour en savoir plus, consultez les [Règles du site Google Developers](https://developers.google.com/site-policies?hl=fr). Java est une marque déposée d'Oracle et/ou de ses sociétés affiliées.

Dernière mise à jour le 2026/03/19 (UTC).
