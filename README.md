# Docker Kubernetes Node.js DevOps Project

This project demonstrates how to containerize a Node.js application using Docker and deploy it on a Kubernetes cluster.

## Technologies Used

Docker
Kubernetes
Node.js
DockerHub

## Workflow

Application → Docker Image → DockerHub → Kubernetes Deployment

## Features

Dockerized Node.js web application
Image pushed to DockerHub
Kubernetes Deployment with 2 replicas
NodePort service for external access

## Commands

docker build -t badrekhan/webapp-demo .
docker push badrekhan/webapp-demo

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

kubectl get pods
kubectl get svc
