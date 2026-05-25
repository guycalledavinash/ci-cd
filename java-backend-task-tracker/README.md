# TaskTrackr - Microservices-Based Task Management Backend

TaskTrackr is a Java 17 / Spring Boot 3 multi-module backend workspace for a Jira/Trello-style task management platform.

## Current Status

This repository currently provides the **service skeleton** for four microservices:
- user-service
- project-service
- task-service
- notification-service

Each service now boots as an independent Spring Boot application and is wired into a single Maven parent build.

## Architecture

### Services
1. **User Service**
   - Planned: authentication, JWT, user profile management
2. **Project Service**
   - Planned: CRUD for projects and membership
3. **Task Service**
   - Planned: task lifecycle/state management and assignment
4. **Notification Service**
   - Planned: event-driven notifications via Kafka

## Build & Run

### Prerequisites
- Java 17+
- Maven 3.9+

### Build everything
```bash
mvn clean test
```

### Run one service
```bash
mvn -pl tasktrackr-user-service spring-boot:run
```

You can swap the module name for any other service.

## Suggested Next Improvements

1. Add `application.yml` per service (ports, service names, profiles).
2. Add REST controllers + DTO validation + global exception handling.
3. Introduce persistence with Spring Data JPA + PostgreSQL migrations (Flyway/Liquibase).
4. Add Kafka producers/consumers for task/project events.
5. Add Dockerfiles and a `docker-compose.yml` for local orchestration.
6. Add API and integration tests (Testcontainers).
7. Add CI (GitHub Actions) with quality gates (tests + formatting + dependency checks).

## License

Educational / portfolio use.
