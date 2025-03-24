# Ghost DevOps

Ce projet vise à déployer une application Ghost sur un cluster Kubernetes local avec une chaîne complète DevOps comprenant CI/CD, monitoring et logging.

## Technologies Utilisées
- Kubernetes via Minikube
- Packer pour la création d'images VM
- Pulumi pour l'infrastructure as code
- Jenkins pour l'automatisation CI/CD
- ArgoCD pour le déploiement GitOps
- Prometheus & Grafana pour le monitoring
- Rsyslog pour la centralisation des logs

## Structure du Projet
Le projet est organisé en plusieurs dossiers : `packer`, `pulumi`, `k8s-manifests`, `src`, `jenkins`, `monitoring`, `logging`, `scripts` et `docs`.

## Comment Contribuer
1. Clonez le dépôt.
2. Suivez le guide d'installation dans `docs/setup.md`.
3. Contribuez via des pull requests.
