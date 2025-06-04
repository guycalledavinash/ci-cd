# 🌱 Spring Boot Protein App

This is a Java 21 Spring Boot web application for **The Beans** — an organic protein-focused UI built with Thymeleaf and CSS. The app is containerized with Docker and features a fully automated CI/CD pipeline using GitHub Actions.

---

## 🚀 Features

- Java 21 with Spring Boot 3.2+
- Thymeleaf-based frontend templating
- Custom CSS styling
- Maven for build and test
- Dockerized deployment
- GitHub Actions CI/CD pipeline
- SonarQube static code analysis
- Auto-update of Kubernetes deployment YAML

---

## 📁 Project Structure

```
springboot-protein-app/
├── ArgoCD/ # (Optional) ArgoCD deployment manifests
├── springboot-protein-app-manifests/ # Kubernetes manifests
├── src/
│ ├── main/java/com/thebeans/ # Application Java code
│ └── main/resources/ # Static resources and templates
├── Dockerfile # Container definition
├── Jenkinsfile # Legacy Jenkins pipeline
├── pom.xml # Maven build config
└── .github/
└── workflows/
└── ci-cd.yml 
```

---

## ⚙️ CI/CD Pipeline (GitHub Actions)

The CI/CD pipeline is implemented in `.github/workflows/ci-cd.yml`. It runs on every push to the `main` branch and performs the following steps:

1. ✅ Checkout code
2. 🧪 Build and test the app using Maven
3. 🔍 Run static code analysis via SonarQube
4. 🐳 Build and push a Docker image to Docker Hub
5. 🛠️ Replace the image tag in `deployment.yaml`
6. 🔁 Commit and push the updated YAML back to GitHub

---

## 🔐 Required GitHub Secrets

You must configure the following secrets in your GitHub repository settings:

| Secret Name       | Description                          |
|-------------------|--------------------------------------|
| `SONAR_URL`       | URL of your SonarQube server         |
| `SONAR_TOKEN`     | Auth token for SonarQube             |
| `DOCKER_USERNAME` | Docker Hub username                  |
| `DOCKER_PASSWORD` | Docker Hub password or access token  |
| `GITHUB_TOKEN`    | (Default) Token to push commits      |

---

## 🐳 Docker Usage

### 📦 Build Image Locally

```bash
docker build -t spring-protein-app .
docker run -p 8080:8080 spring-protein-app
mvn test
mvn sonar:sonar \
  -Dsonar.host.url=<your-sonar-url> \
  -Dsonar.login=<your-token>
```

Thanks!
