# Multi-Tier Kubernetes App 🚀

## Architecture
Frontend (Nginx) → Backend (Node.js) → ConfigMap

## Features
- Multi-tier architecture
- Kubernetes Deployments
- Services (ClusterIP + NodePort)
- Nginx Reverse Proxy
- ConfigMap environment variable
- Rolling updates

## Run
kubectl apply -f k8s/app.yaml
minikube service frontend-service
