# React-Ecommerce-App
Ecommerce Clothing App created using:
 React (UI Library), Firebase (for Backend),Redux (for state Management), 
 SASS, Node (for createing payment backend server) ,Redux-Thunk ( perform asynchronus in redux used in MiddleWare), Redux-logger (to log all actions and state changes in console used in Middleware), Redux-Persist (to store data locally so data should not lost while refreshing the page)

Installation Guide:

1. git clone https://github.com/smgv/React-Ecommerce-App.git

2. cd React-Ecommerce-App
   yarn add or npm install

3. cd client 
   yarn add or npm install

4. add your own firebase CDN config in : src/firebase/firebase.util.js

5. add your own API publishable key from stripe dashboard in : 
   src/components/stripe-button/stripe-button.component.js

6. Create .env file in React-Ecommerce-App and store the Secrect Key in it.
   
7. Install remaining dependencies to run the project such as:
   cd client/ :
   yarn add or npm install :
            node-sass
            reselect
            react-router-dom
            styled-component
            react-redux
            redux
            react-stripe-checkout
            redux-logger
            redux-persist
            redux-thunk
            firebase
            axios

    cd React-Ecommerce-App/ :
    yarn add or npm install :
             body-parser
             compression
             cors
             dotenv
             express
             stripe

    npm install --save-dev concurrently

8. To run the project
   $ yarn dev or npm dev
   
