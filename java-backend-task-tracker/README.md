
# TaskTrackr - Microservices-Based Task Management Backend

TaskTrackr is a lightweight backend-only task management system inspired by tools like Jira and Trello. It's designed using Java 17+, Spring Boot 3.x, and PostgreSQL, following a microservices architecture. The project is intended as a portfolio piece for DevOps/Cloud Engineers transitioning into Java Backend Development.

---

## 🧩 Architecture Overview

TaskTrackr is composed of the following microservices:

### 1. **User Service**
- Handles user registration and login
- Implements JWT-based authentication
- Manages user roles and information

### 2. **Project Service**
- CRUD operations for project entities
- Assigns users to projects
- Emits project-related events via Kafka

### 3. **Task Service**
- Handles tasks within projects
- Tracks task status (e.g., To-Do, In Progress, Done)
- Supports assigning tasks to users
- Emits task update events via Kafka

### 4. **Notification Service**
- Listens to Kafka topics for task/project/user events
- Sends notification logs (can be extended to email/SMS)

---

## 🔧 Technologies Used

| Component     | Technology       |
|---------------|------------------|
| Language      | Java 17          |
| Framework     | Spring Boot 3.x  |
| Database      | PostgreSQL       |
| Auth          | Spring Security + JWT |
| Messaging     | Apache Kafka     |
| Build Tool    | Maven            |
| Containerization | Docker, Docker Compose |

---

## 📁 Project Structure

```
tasktrackr/
│
├── tasktrackr-user-service/
├── tasktrackr-project-service/
├── tasktrackr-task-service/
├── tasktrackr-notification-service/
└── docker-compose.yml (to be added)
```

Each service contains:
- `controller/`: REST endpoints
- `service/`: Business logic
- `repository/`: Data access (Spring Data JPA)
- `model/`: Entity classes
- `dto/`: Data transfer objects
- `config/`: Configuration (JWT, Kafka, etc.)

---

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Maven
- Docker & Docker Compose

### Steps

1. Clone the repository:
```bash
git clone https://github.com/your-username/tasktrackr.git
cd tasktrackr
```

2. Start PostgreSQL and Kafka using Docker Compose (to be added):
```bash
docker-compose up -d
```

3. Build and run each service:
```bash
cd tasktrackr-user-service
mvn spring-boot:run
```

Repeat for other services.

---

## 🔐 Authentication

- Uses JWT for authentication
- Users must log in to obtain a token
- Token must be passed in `Authorization` header for protected routes

---

## 📩 Kafka Messaging

- Project and Task services publish events
- Notification service listens and handles them

Topics:
- `user-events`
- `project-events`
- `task-events`

---

## 📌 To-Do

- Add full CRUD implementation and DTO mapping
- Integrate Kafka producers/consumers
- Setup Docker Compose for all services + Kafka + PostgreSQL
- Add integration tests

---

## 🧠 Contributing

Feel free to fork this repo, improve the services, or even add a frontend!

---

## 📄 License

This project is for educational and portfolio use only.
