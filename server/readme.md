# Getting Started with node server App

## Installation

Open the server folder using vscode and write in the terminal "npm i" to install all
the dependencies that needed to run the server.

## Available Scripts

you can run:

### `npm tun dev`

- It will run the app with node
- The page will reload if you make edits.
- The database is local

### `npm start`

- The page will reload if you make edits
- The print at the terminal will be blue with the message:
- The database is from atlas

`server run on: http://:localhost : 8181`

And if there are no login errors you should see the message painted in yellow:

`connected to MongoDb!`

### Available Routes

###### USERS

#### Register a new user

```http
  POST /api/users
```

#### Login a user

```http
  POST /api/users/login
```

#### Geting Information about all the users

```http
  GET /api/users
```

You will need to provide an admin token to get an answer from this api

#### To receive information about a user /users/:userId

```http
  GET /api/users/:userId
```

You will need to provide an admin token or the registerd user's token to get an answer from this api

#### To edit the user's information

```http
  POST /api/users/:userId
```

You will need to provide the registerd user's token to get an answer from this api

#### To change the user's business account of the registered user

```http
  PATCH /api/users/:userId
```

You will need to provide the registerd user's token to get an answer from this api

#### To delete a user

```http
  DELETE /api/users/userId
```

You will need to provide an admin token or the registerd user's token to get an answer from this api

###### CARDS

#### To get all the business items

```http
  GET /api/items
```

#### To get all the user's business items

```http
  GET /api/items/my-items
```

You will need the token of the registered user

#### To get a spcefice business items

```http
  GET /api/items/itemId
```

#### To create a business item

```http
  POST /api/items/
```

You will need a business account token

#### To update a business item

```http
  PUT /api/items/itemId
```

You will need to provide a registerd user token to get an answer from this api

#### To update a business item likes

```http
  PATCH /api/items/itemId
```

You will need to provide a registerd user token to get an answer from this api

#### To delete a business item

```http
  DELETE /api/items/itemId
```

You will need to provide a token of the registerd user or an admin to get an answer from this api
