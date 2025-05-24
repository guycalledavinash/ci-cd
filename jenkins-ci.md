CI using Jenkins: Spring app, Git, Maven, Sonarqube, Docker

### Jenkins

```
sudo apt update
sudo apt install openjdk-17-jre -y
```

```
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins -y
```

```
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
### Maven

```
sudo apt install maven -y
```

### Docker Slave Configuration
```
sudo apt update
sudo apt install docker.io -y
```

```
sudo su
usermod -aG docker ubuntu
usermod -aG docker jenkins
systemctl restart docker
```

### Sonarqube

```
sudo apt update
sudo su
cd /opt
sudo apt install default-jre -y
java -version
wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-25.5.0.107428.zip
mv sonarqube-25.5.0.107428.zip sonarqube.zip
apt install unzip -y
unzip sonarqube.zip
mv sonarqube-25.5.0.107428/ sonarqube
```

```
useradd sonar
visudo
```

`sonar ALL=(ALL) NOPASSWD: ALL`

Change ownership for sonar folder/directory:
```
chown -R sonar:sonar /opt/sonarqube/
chmod -R 775 /opt/sonarqube
su sonar
```
Goto bin/linux directory, run sonar server:
```
cd /opt/sonarqube/bin/linux-x86-64
sh sonar.sh start
```
Check sonar server status 
```
sh sonar.sh status
```
It runs on port 9000

The default port of sonar serve can be changed at ( conf/sonar.properties) like `sonar.web.port=6000`

## Implementation

![image](https://github.com/user-attachments/assets/ecb91aeb-5ead-4995-9cbf-079ab2721347)

#### Issues Faced
### 1. Permission Denied for Docker Socket

Error: `permission denied while trying to connect to the Docker daemon socket...`

Cause: The Jenkins user was not a member of the docker group, which is preventing its access to the Docker socket

Solved it by adding Jenkins user to the Docker group, restarting Docker and jenkins

### 2. Base Image Not Found in Dockerfile

The base image I was using `adoptopenjdk:17-jdk-alpine` was no longer available, hence I used a relevant image `eclipse-temurin`
