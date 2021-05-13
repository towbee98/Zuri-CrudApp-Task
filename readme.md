# Zuri Nodejs Crud App :rocket:

## Hosted Link

    https://zuri-crud-app-1.herokuapp.com

## :satellite: :satellite:

## API Reference

### 1.) Get all items

```http
  GET /api/users
```

Returns all the data stored in the database
E.g

    http://URL/api/users

The above examples will return the following with
a 200 status code.

    {
      message: "success",
      data:[data],
    }

### 2.) Get an item

```http
  GET /api/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of data to fetch |

Returns the data with a particular id E.g

    http://URL/api/users/609bf8f4ca8b7e07889a7879

returns

    {
    "message": "succcess",
    "data": {
        "_id": "609bf8f4ca8b7e07889a7879",
        "name": "Oladele Tobiloba Emmanuel",
        "email": "opemi@gmail.com",
        "country": "Nigeria",
        "__v": 0
    }
    }

If the id does not exist in the database , it returns

    {
    "message": "Data not found"
    }

if the id is not a valid parameter it returns

    {
    "message": "Cast to ObjectId failed for value \"609bf8f4ca8b7e07889a787\" at path \"_id\" for model \"User\""

    }

### 3.) Create a new item

```http
    POST /api/users
```

The following parameters will be included in the body of the request in form of json

    {
        "name":"Your name",
        "email":"Enter a valid email ",
        "country":"Enter a country"
    }

Returns the data that was created E.g

    http://URL/api/users

with req.body

    {
         "name":"Oladele Tobiloba Emmanuel",
        "email":"tobiemma200@gmail.com",
        "country":"Nigeria"
    }

returns the data with a message

    {
    "message": "success",
    "data": {
            "createdAt": "2021-05-13T01:07:01.391Z",
            "_id": "609c7cd59a359f131472edb2",
            "name": "Oladele Tobiloba Emmanuel",
            "email": "tobiemma200@gmail.com",
            "country": "Nigeria",
            "__v": 0
    }
    }

If there's an error with the request, it returns only the error mesaage. E.g
If the email is not specified in the req.body . It returns the following

    {
        "message": "User validation failed: email: Email cannot be empty"
    }

### 4.) Update an item

```http
    PATCH /api/users/:id
```

This update the item in a data with a particular id
The update you want are added in the req.body as json
It returns the updated version of the data E.g

    http://URL/api/users/609bf8f4ca8b7e07889a7879

with req.body

    {
    "country":"Cameroon"
    }

returns the updated data with a message

    {
    "message": "Data updated succesfully",
    "data": {
             "_id": "609bf8f4ca8b7e07889a7879",
            "name": "Ada Benson",
            "email": "123@example@gmail.com",
            "country": "Cameroon",
            "__v": 0
        }
    }

If the id does not exist in the database , it returns

    {
    "message": "Data not found"
    }

if the id is not a valid parameter it returns

    {
    "message": "Cast to ObjectId failed for value \"609bf8f4ca8b7e07889a787\" at path \"_id\" for model \"User\""

    }

### 5.) Delete an item

```http
    DELETE /api/users/:id
```

Delete a particular item with the specified Id
Returns a status code of 200 and a message if item was deleted succesfully.
E.g

    http://URL/api/users/:id

via the DELETE method will return a status code 200 and a message.
If the id does not exist in the database , it returns

    {
    "message": "Data not found"
    }

if the id is not a valid parameter it returns

    {
    "message": "Cast to ObjectId failed for value \"609bf8f4ca8b7e07889a787\" at path \"_id\" for model \"User\""

    }

### Handling Other Routes

When you make a request to an unavailable route
It returns a page not found message with a 404 status code E.g

    GET http://URL/api/user

instead of

    GET http://URL/api/users

returns

    {
    "message": "Sorry the page you requested for cannot be found"
    }
