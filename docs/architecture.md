# Architecture du Projet Ghost DevOps

Ce document décrit l’architecture globale du projet, qui combine des outils de déploiement, de CI/CD, de monitoring et de logging.

## Composants Clés
- **Minikube :** Cluster Kubernetes local.
- **Packer :** Création d'une image VM de base pour Minikube.
- **Pulumi :** Provisionnement de l'infrastructure Kubernetes.
- **Jenkins :** Pipeline CI/CD pour l’automatisation des builds et déploiements.
- **ArgoCD :** Gestion GitOps pour synchroniser les manifests.
- **Prometheus & Grafana :** Surveillance et visualisation des métriques.
- **Rsyslog :** Centralisation des logs.

## Flux de Travail
1. **Création de l'image VM :** Utilisation de Packer.
2. **Déploiement de l'infrastructure :** Pulumi déploie les ressources sur Kubernetes.
3. **CI/CD :** Jenkins déclenche les builds et déploiements.
4. **Monitoring & Logging :** Prometheus, Grafana et Rsyslog assurent le suivi des performances.
