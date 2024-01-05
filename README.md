# API Articles
---

### Project installation:

  ``` bash
    npm install
  ```

  Install the project and all its dependencies so it can run.

---

### Run for development:
  
  ``` bash
    npm run dev
  ```

---

### Raise docker:

  Here docker will be launched and the container logs will be shown in the opened cmd.

  ``` bash
    docker-compose up --build
  ```

---

### Raise docker in background:

  Here the docker will be launched and you can use the prompt when you finish raising the docker.

  ``` bash
    docker-compose up -d --build
  ```

---

### Run only the docker database:

  ```bash
    docker-compose up db
  ```

  To only upload the database when it is running in development and wants to test.

---

### Migrate to the database through prism:

  ```bash
    npx prisma migrate dev --name "init"
  ```

### Register ready-made data via prism:

  ```bash
    npx prisma db seed
  ```

  You need to put in json:
  ```json
    // package.json

    // ...
      "scripts": {
        // ...
      },
      "dependencies": {
        // ...
      },
      "devDependencies": {
        // ...
      },
      "jest": {
        // ...
      },
      "prisma": {
        "seed": "ts-node prisma/seed.ts"
      }
  ```

---

### Take down docker:

  Here docker will be taken down for the purpose of updating something that has been done.

  ``` bash
    docker-compose down
  ```

---

### Check running docker services:

  With this command you can view the running services and get the id or name.

  ``` bash
    docker-compose ps
  ```

---

### Check if PostgreSQL is working:

  With this command you enter the psql container to see if postgres is working.

  ``` bash
    docker exec -it YOUR_CONTAINER_POSTGRES psql -U YOUR_USER -d YOUR_DATABASE
  ```

---

### Enter bash from the API container:

  ``` bash
    docker exec -it YOUR_CONTAINER_POSTGRES /bin/bash
  ```

---

### Dockerfile Explanation:

<details>
<summary>Dockerfile Explanation:</summary>

  ### Line 1:

  ``` Dockerfile
    FROM node:latest
  ```

  This line defines the base image for the Docker container. In this case, the latest Node.js image from Docker Hub is being used.

---

  ### Line 2:

  ``` Dockerfile
    WORKDIR /usr/src/app
  ```

  This line defines the working directory inside the container where the rest of the commands will be executed. /usr/src/app is a common directory for storing Node.js applications.

---

  ### Line 3:

  ``` Dockerfile
    COPY . .
  ```

  This command copies all files from the current directory (where the Dockerfile is located) to the working directory inside the container.

---

  ### Line 4:

  ``` Dockerfile
    COPY ./.env.production ./.env
  ```

  This command copies the .env.production file from the current directory to the .env file inside the container. This is common when you have different environment files for development and production.

---

  ### Line 5:

  ``` Dockerfile
    RUN npm install --quiet --no-optional --no-fund --loglevel=error
  ```

  This command performs the installation of Node.js project dependencies using npm. The specified options reduce npm output, disable the installation of optional dependencies, disable security vulnerability scanning, and set the log level to display only errors.
  
  - ```--quiet```: This option reduces npm output.

  - ```--no-optional```: This option prevents the installation of optional dependencies.

  - ```--no-fund```: This option prevents npm from checking your dependencies for security vulnerabilities.

  - ```--loglevel=error```: This option sets the log level to "error", which means only errors will be displayed in the log.



---

  ### Line 6:

  ``` Dockerfile
    RUN npm run build
  ```

  This command runs the project build. Typically, this involves compiling source code and creating production files, such as a web application's static files.

---

  ### Line 7:

  ``` Dockerfile
    CMD ["npm", "run", "start:prod"]
  ```
  This line defines the command that will be executed when the container starts. In this case, it runs the command npm run start:prod to start the project in production mode.

</details>

---