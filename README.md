# 🚀 CI/CD Pipeline with GitHub Actions & Docker (No Cloud Needed)

This project showcases how to set up a complete CI/CD pipeline using GitHub Actions and Docker to build, test, and deploy a Node.js application **without using any cloud CI/CD services**. The goal is to demonstrate local deployment using Docker and GitHub workflows efficiently.

## 🎯 Objective

To automate the building, testing, and deployment process of a simple Node.js application using GitHub Actions and Docker, and run the container locally (e.g., on an EC2 instance or personal machine).

## 🛠️ Tools & Technologies Used

- GitHub Actions – for CI/CD automation  
- Docker – for containerizing the application  
- Docker Hub – to store Docker images  
- Node.js & Express.js – for the application backend  
- Git – version control  
- EC2 / Linux VM – for running the containerized app  

## 📁 Project Structure

- GitHub workflows stored under `.github/workflows/`
- A Dockerfile defines how to containerize the app
- `index.js` contains the Express server code
- `package.json` manages dependencies and scripts
- A README for documentation

## ✨ CI/CD Pipeline Overview

1. **GitHub Push Trigger**: The pipeline starts when code is pushed to the `main` branch.
2. **Dependency Installation**: GitHub Actions sets up Node.js and installs dependencies.
3. **Testing**: Basic test scripts are executed (or skipped if not defined).
4. **Docker Build**: The app is containerized using Docker.
5. **Docker Hub Login**: GitHub Actions logs into Docker Hub using secrets.
6. **Push Image**: The Docker image is pushed to Docker Hub.
7. **Local Run**: The image can be pulled and run on any local/VM environment.

## 🧪 Testing and Output

Once the pipeline runs successfully:
- The image appears in Docker Hub under your account.
- You can run it locally using `docker run`.
- The browser will display a styled message like **“🎉 CI/CD Pipeline Run Successfully!”**

Animations and colors have been added to make the output more engaging and unique.

## 🖥️ Deployment

You can deploy this image on:
- An EC2 instance
- A local Ubuntu/Debian machine
- A Docker-compatible server

All you need is Docker installed and access to pull from Docker Hub.

## 📸 Screenshots You Can Add

- GitHub Actions run showing each step
- Docker image visible in your Docker Hub repo
- App running in a browser (EC2 IP or localhost)
- Colorful UI with animations in the app output

## ✅ Outcome

- Demonstrated how to use GitHub Actions for CI/CD without relying on any external cloud services
- Built and pushed Docker images automatically
- Successfully deployed and accessed the app in a browser
- Gained hands-on experience with DevOps automation and containerization
