# -------------------------------------------------------------------------- #
# The below code is a test dockerfile used to build an app image for         #
# final ASU project development environment.                                 #
#                                                                            #
# © 2022 Jonathan Wesner                                                     #
#                                                                            #
# -------------------------------------------------------------------------- #
FROM ubuntu:latest

USER root

# ----------------
# Dependencies
# ---
COPY . /app/

WORKDIR /app/

# update package manager(s)
RUN apt -y update \ 
    && apt-get -y update

# install python
RUN apt-get -y install python3 \
    && apt-get -y install python3-pip \
    && apt install python3.8-venv

# install ethereum brownie using pip
RUN pip install eth-brownie

# install helpers
RUN apt-get install -y git \ 
    && apt-get install -y dos2unix \
    && apt-get install -y nano \
    && apt-get install -y iproute2 \
    && apt-get install -y curl

# install nvm install
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \
    && exec bash \
    && nvm install 14.4.0

# install nodejs and nvm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest \
    && apt install build-essential \
    # just prints out version numbers for records
    && node -v \
    && npm --version

# install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt -y install --no-install-recommends yarn \
    # just prints out version numbers for records
    && yarn --version

# install react
RUN npm -g install create-react-app

# install ganache-cli
RUN npm install -g ganache-cli

# add network
RUN brownie networks add Development ganache-local host=http://ethdb:8545 cmd=ganache-cli

# install autopep8
RUN /bin/python3 -m pip install -U autopep8

RUN chmod -R 777 .

CMD ["/bin/bash"]