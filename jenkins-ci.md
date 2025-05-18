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
### Docker Slave Configuration
```
sudo apt update
sudo apt install docker.io -y
```

```
sudo su - 
usermod -aG docker ubuntu
systemctl restart docker
usermod -aG docker jenkins
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
