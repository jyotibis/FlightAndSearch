# Welcome to Flight Service

## project setup

- clone the project on your local
- Execute `nmp install` on the same path as of your root directory of the downloaded project
- create a `.env` file in the root directory an added the following environment variable
  - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` an add the following peice of json.

'''

         "development": {
        "username": <your_DB_login_name>,
        "password": <your_db_password>,
        "database": "New_Flights_serch_DB",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },

'''

- Once you've added your db config as listed above go to the src floder from the terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 
  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport
