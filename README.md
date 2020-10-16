# node.js-to-convert-to-a-pdf-file
how to convert a PDF using node.js
# Node.js using the JavaScript code
Continue learning to get the react small project and working with the Front-End and Back end of this project to get a success convertor to the pdf.

For this particular example, we are going to create a simple receipt that will have dynamic data coming from React’s state object.

## Project Setup
Create a new directory

mkdir pdfGenerator && cd pdfGenerator
Create a new React App with

create-react-app client
and then move into newly created directory and install dependencies
cd client && npm i -S axios file-saver

Create an Express server with 
mkdir server && cd server && touch index.js && npm init

press enter a couple of times to initialize package.json and then run
npm i -S express body-parser cors html-pdf to save all the necessary dependencies.

Add proxy inside of client/package.json, above the dependencies, simply add “proxy”: “http://localhost:5000/", so you can call the localhost from the client.

Open two different terminals: First one: go into the client directory and run npm start
Second one: go into the server directory and run nodemon index.js

# finally 
convertion document to add it to a PDF
