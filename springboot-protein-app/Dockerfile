# Use Java 17 base image
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory
WORKDIR /opt/app

# Define the artifact path
ARG artifact=target/beans-ui-0.0.1-SNAPSHOT.jar

# Copy the built JAR into the container
COPY ${artifact} app.jar

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
