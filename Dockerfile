# Stage 1: Build
FROM maven:3.9.5-eclipse-temurin-17 AS build
WORKDIR /app

# Copy POM and source
COPY pom.xml .
RUN mvn dependency:go-offline
COPY /src ./src

# Build JAR
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy JAR from build stage
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080

# Use Render's PORT environment variable
ENV PORT=8080
ENTRYPOINT ["java","-jar","app.jar"]
