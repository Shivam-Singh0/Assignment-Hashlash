

## Tech Stack

    Frontend: React, Vite
    State Management: Redux Toolkit
    UI Framework: React Bootstrap
    API: https://github.com/Hipo/university-domains-list-api
    Backend: Node.js + Express.js
    

## Getting Started

    Clone the repository:
    https://github.com/Shivam-Singh0/Assignment-Hashlash.git


  ### Install dependencies:
      ####root
      npm install
      #### Backend
      --cd backend
      --npm install
       #### Frontend
      --cd Frontend
      --npm install

  ### Set up environment variables:
    Create a .env file in Backend directory.
    user='Your Mysql Database Username'
    password='Your Mysql Database Password'
    database='Your Mysql Database Name'

  ### Database
    -create MySql Databse
      then
    -Create Table tbl_Univeristy (
      id int primaray key auto_increment,
      name varchar(100),
      country varchar(100),
      web_page varchar(100)
    )
    
  

  ### Start the development server:
      npm run start
      The application will be accessible at http://localhost:5173.


