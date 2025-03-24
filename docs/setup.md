# Guide d'Installation et de Configuration

Ce guide décrit comment installer et configurer l'environnement pour déployer le projet Ghost DevOps.

## Prérequis
- Ubuntu ou une distribution Linux similaire.
- Minikube, Docker, Packer, Pulumi, Jenkins, ArgoCD, Prometheus, Grafana et Rsyslog installés.

## Étapes d'Installation
1. **Configuration de Packer :**
   - Modifier `packer/minikube-base.json` si nécessaire.
   - Exécuter `packer build packer/minikube-base.json`.

2. **Déploiement de l'infrastructure :**
   - Configurer Pulumi via `pulumi/Pulumi.yaml`.
   - Exécuter `pulumi up` dans le dossier `pulumi`.

3. **CI/CD avec Jenkins :**
   - Importer le `Jenkinsfile` depuis le dépôt.
   - Configurer les credentials dans `jenkins/config/jenkins.yaml`.

4. **Monitoring et Logging :**
   - Déployer Prometheus et Grafana avec les fichiers YAML dans `k8s-manifests/monitoring`.
   - Configurer rsyslog avec `k8s-manifests/logging/rsyslog-config.yaml` et `logging/rsyslog.conf`.

5. **Tests et Déploiement :**
   - Exécuter `./scripts/test.sh` pour valider le déploiement.
   - Utiliser `./scripts/deploy.sh` pour déployer manuellement.

## Remarque
- L’IP de la machine physique est `192.168.43.189` et est utilisée pour la configuration de Grafana datasource.
