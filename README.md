# PDF Editor

## Implemented functioanlities

- User authentication
- Upload PDF and its preview
- Ectract pages from pdf and download directly and store it in DB
- Retrieve all pdfs created by users from db and display.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### The repository

First, you will need to `clone` the repository into your Github account:

```
$ git clone https://github.com/thalib12/vidyalaya-project.git
```

### Install dependencies

You need to install the dependencies in both backend and frontend with: `npm install`.

Run the following command in both pdfviewer(frontend) and pdf-server(backend) folders after cloning the repository:

```
$ npm install
```

### Run folders

After instaling dependencies in both frontend and backend, u can run the app by running the following command in both frontend and backend

```
$ npm start
```

To run in production mode, you can run these command

```
$ npm run start:prod
```

# Work flow

### User login

To start the appliaction,user should create or login the account using mobile number and password

Note:- Using same component for both login and register

<img height="200px" src="https://calib-nft.s3.ap-south-1.amazonaws.com/dumps/Screenshot+from+2023-12-07+19-58-58.png"/>

### Select pdf

User can select pdf after successful login

<img width="100%"  src="https://calib-nft.s3.ap-south-1.amazonaws.com/dumps/Screenshot+from+2023-12-07+19-59-59.png"/>

### Preview and ectract pdf

- After selecting the pdf,there will be input boxes to select the pages and give the name to the new pdf.
- user can give the needed page numbers seperated by commas
  eg:- `12,15,17`

- "Export selected pages" Button will create a new pdf and display the new pdf and it will be store to db by user id
- Extracted PDF can see at the bottom of the page and can directly download from there

<img width="100%" src="https://calib-nft.s3.ap-south-1.amazonaws.com/dumps/Screenshot+from+2023-12-07+20-00-39.png"/>

<img width="100%"  src="https://calib-nft.s3.ap-south-1.amazonaws.com/dumps/Screenshot+from+2023-12-08+00-22-33.png
"/>

### View all pdfs

- User can see the all pdfs they created using "view all" button

<img width="100%" src="https://calib-nft.s3.ap-south-1.amazonaws.com/dumps/Screenshot+from+2023-12-07+20-02-03.png
"/>
