# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `docker-compose up`

That will boot up the application.

### `npm run start`
You can run this in larvis-client root, boots up the client. You need to run docker-image of larvis-server seperately in this case.

### `npm run test`
Run tests in larvis-client root. Runs all the tests in front-end. 

##ENV variables
Currently only editable in client-side. Accessed in .env file. Current ENV variables:
- REACT_APP_API_ROOT: Url where your server runs

## TODO
- Add proper tests
- Add more features, like refresh tokens and more detailed ore-acquisitions data displays
- Improve responsiveness.

