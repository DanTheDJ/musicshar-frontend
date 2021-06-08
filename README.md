
# musicshar-frontend

Holds the frontend code for the MusicShar application. See https://github.com/DanTheDJ/musicshar-meta for more information about the project.

## Installation

*Prerequisites*:  

 - Node  
 - NPM  

To install the dependencies, run `npm install`.  

## Usage

The following commands are available:  

`start` - Start the *nodemon* process to watch for file changes and restart the app

To run a command, type `npm run` followed by any of the commands above.  

## DB Operations

To create the database, configure the correct connection details within `src/config/config.js`.

Then run:
`npx sequelize db:create` - Create the database
`npx sequelize db:migrate` - Run the database migrations
