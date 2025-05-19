# Role-Based Authentication API

## Endpoints

### Register
- **URL**: `/api/register`
- **Method**: POST
- **Input**:
```json
{
  "username": "john",
  "password": "123456",
  "role": "user"
}
```
- **Output**:
```json
{
  "message": "User registered successfully"
}
```

### Login
- **URL**: `/api/login`
- **Method**: POST
- **Input**:
```json
{
  "username": "john",
  "password": "123456"
}
```
- **Output**:
```json
{
  "token": "JWT_TOKEN_HERE"
}
```

### Protected Route
- **URL**: `/api/protected`
- **Method**: GET
- **Headers**: Authorization: Bearer TOKEN
- **Output**:
```json
{
  "message": "Welcome, authorized user!"
}
```

### Admin Route
- **URL**: `/api/admin`
- **Method**: GET
- **Headers**: Authorization: Bearer TOKEN
- **Output**:
```json
{
  "message": "Welcome, admin!"
}
```

## Running the App
```bash
npm install
npm start
```

Test using Postman with Bearer token in Authorization header.