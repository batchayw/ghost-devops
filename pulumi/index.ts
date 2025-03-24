import * as k8s from "@pulumi/kubernetes";

const ghostDeployment = new k8s.apps.v1.Deployment("ghost-deployment", {
  spec: {
    replicas: 2,
    selector: { matchLabels: { app: "ghost" } },
    template: {
      metadata: { labels: { app: "ghost" } },
      spec: {
        containers: [
          {
            name: "ghost",
            image: "ghost:latest",
            ports: [{ containerPort: 2368 }],
            env: [
              { name: "url", value: "http://192.168.43.189:30080" }
            ],
            resources: {
              requests: {
                cpu: "200m",
                memory: "256Mi"
              },
              limits: {
                cpu: "500m",
                memory: "512Mi"
              }
            }
          }
        ]
      }
    }
  }
});

const ghostService = new k8s.core.v1.Service("ghost-service", {
  metadata: {
    labels: { app: "ghost" },
    annotations: {
      "prometheus.io/scrape": "true",
      "prometheus.io/port": "2368",
      "prometheus.io/path": "/metrics"
    }
  },
  spec: {
    selector: { app: "ghost" },
    ports: [
      { port: 80, targetPort: 2368, name: "http" }
    ],
    type: "NodePort"
  }
});

const ghostIngress = new k8s.networking.v1.Ingress("ghost-ingress", {
  spec: {
    rules: [
      {
        host: "ghost.local",
        http: {
          paths: [
            {
              path: "/",
              pathType: "Prefix",
              backend: {
                service: { name: "ghost-service", port: { number: 80 } }
              }
            }
          ]
        }
      }
    ]
  }
});

export const ghostUrl = "http://192.168.43.189:30080";