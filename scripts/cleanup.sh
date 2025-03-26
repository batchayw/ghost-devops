#!/bin/bash
minikube delete
cd pulumi
pulumi destroy -y
cd ..