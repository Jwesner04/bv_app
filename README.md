# SETUP
1. Install Visual Studio Code, if not already installed.
2. Install Docker Desktop https://docs.docker.com/desktop/windows/install/
3. Download bv_app and unzip OR clone here: https://github.com/Jwesner04/bv_app
4. Open Visual Studio Code and Choose to open existing folder. Go to the bv_app folder downloaded in step 3.
5. Open Docker Desktop. This just needs to be running, no need to login

# START RUNNING IN CONTAINER
1. With the bv_app folder open in VS Code, run "F1" and type in the bar "Remote-Containers: Open Folder in Container..."
2. Click to open in container, and wait till it loads. This may take some time.
3. Once in, run in the terminal the following: 

```bash
dos2unix runapp.sh
```
```bash
./runapp.sh --deploy
```

4. Open a new terminal and run the following command to get react up and running:
```bash
./runapp.sh --react
```

5. This will open a new browser with the running localhost.
