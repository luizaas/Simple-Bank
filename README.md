# Simple-Bank

A web application that simulates a few operations on a bank daily basis.

## Install

* Download the project
* Run ``npm intall``
 in the {workDir} {workDir}/client and {workDir}/server 

## Config

* Create the environment variable **MONGODB_URI** with the mongodb connection url, that should be something like:

``mongodb://<user>:<password>@<ip>:<port>/<dataBase name>``

## Usage

### Backend
* Make assurance the env variable ``MONGODB_URI`` was set correctly
* Run the command ``npm start`` in the {WorkDir}/server
* Is possible GET:
    1. `localhost:5000/listasaldo` get the balance for every client in your database
    2. `localhost:5000/transacoesdia/:date` get all transactions made on that date, date have to be in the follow format YYYY-MM-DD
    3. `localhost:5000/extratocliente/:client-account` get the customer statement
* Is possible register a new client send a POST with the parameters:
    1. name: Client name
    2. age: Client Age
    3. address: Client Address
    4. account: Client Account
    5. balance: Client Balance

### Frontend
* Make assurance the backend is already running
* Run the command ``npm start`` in the {WorkDir}/client
* In browser access `localhost:3000`
