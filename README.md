# CRUD-app
This is a Node.js CRUD (Create, Read, Update, Delete) application that uses a JSON file as a database.

API Documentation
Authentication
To access the API endpoints, users must include the apiKey in the request headers. Make sure to provide the correct apiKey to authenticate the requests.

Base URL
The base URL for all API endpoints is:


GET
Endpoints
Get All Users
URL: /users
Method: GET
Description: Retrieves all users from the database.
Request Headers:
apiKey: Your API key

POST
Create User
URL: /users
Method: POST
Description: Creates a new user in the database.
Request Headers:
apiKey: Your API key
Request Body:

PUT
Update User
URL: /users/:id
Method: PUT
Description: Updates a user in the database.
Request Headers:
apiKey: Your API key

DELETE
Delete User
URL: /users/:id
Method: DELETE
Description: Deletes a user from the database.
Request Headers:
apiKey: Your API key

Error Handling
If a request is made without providing the apiKey in the headers, the response will be: