# sample-cicd-18-apr-25

A complete sample CI/CD setup for a **dynamic website** using **GitHub Actions**, Docker, and Kubernetes manifests.

## Folder structure

```text
sample-cicd-18-apr-25/
├── app/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   ├── server.test.js
│   ├── public/styles.css
│   └── views/index.ejs
├── manifests/
│   ├── namespace.yaml
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
└── .github/workflows/
    ├── ci.yml
    └── cd.yml
```

## CI pipeline (`ci.yml`)

On push/PR to `main`, it:
1. Installs dependencies.
2. Runs lint and tests.
3. Builds the Docker image.

## CD pipeline (`cd.yml`)

Triggered after CI succeeds on `main`, it:
1. Builds and pushes image to GitHub Container Registry (`ghcr.io`).
2. Uses `KUBE_CONFIG` secret to authenticate with a Kubernetes cluster.
3. Applies Kubernetes manifests and waits for rollout success.

## Required GitHub secrets

- `KUBE_CONFIG`: base64/plain kubeconfig used by `azure/k8s-set-context`.

## Notes before production use

- Replace the ingress host (`dynamic.example.com`) with your real domain.
- Consider adding TLS cert-manager annotations.
- Add stricter security context/resources in `deployment.yaml`.
