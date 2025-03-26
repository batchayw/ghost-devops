#!/bin/bash
minikube start
kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/main/bundle.yaml
cd pulumi
npm install
pulumi up -y
cd ..
kubectl apply -f k8s-manifests/ghost-app.yaml