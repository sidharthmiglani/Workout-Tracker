# Workout Tracker
###
### A Web-app that lets you sign up - store any kind of workout data and allows you to Add/Track/Edit/Delete your workouts at any time!
###
###

#### Technologies/ Libraries 
* [**Node**](https://www.nodejs.org) and [**Express**](https://expressjs.com/) are used to build the application server
* [**React**](https://reactjs.org) is used to build the client-side/User Interface 
* [**Mongo DB**](https://www.mongodb.com/cloud/atlas) is responsible for storing data into a database hosted on Atlas cloud 

#### Pre-Requisites
* You will need [**npm**](https://www.npmjs.com/get-npm) and [**Node**](https://www.nodejs.org) installed in your local environment 

#### Clone and Build
**Note:** You will need to pass in your own Database connection string. If you don't have one: you can create one for free [here](https://www.mongodb.com/cloud/atlas) 
* Clone the repository into a local folder using Command Line:
    ```bash
    $ git clone https://github.com/sidharthmiglani/Workout-Tracker.git
    ```
* Install required packages in both **frontend** and **backend** directories:
    ```bash
    (base) Workout-Tracker $ cd backend 
    (base) backend $ npm install
    (base) backend $ cd ../frontend/exercise-tracker
    (base) frontend $ npm install
    ```
* Add your Database uri connection string in ```backend/server.js```
* Build your application server and frontend
    ```
    (base) Workout-Tracker/backend $ node server.js
    (base) Workout-Tracker/frontend/exercise-tracker $ npm start
    ```
* Go to **http://localhost:3000** to see a working demo
    
