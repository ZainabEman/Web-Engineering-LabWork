# Math SQL API

This project demonstrates mathematical operations using MySQL as the computation backend.

## API Endpoints

### 1. Compute GCD
- **POST** `/api/gcd`
- **Input**
```json
{
  "a": 48,
  "b": 18
}
```
- **Output**
```json
{
  "result": 6
}
```

### 2. Compute Power
- **POST** `/api/power`
- **Input**
```json
{
  "base": 2,
  "exponent": 10
}
```
- **Output**
```json
{
  "result": 1024
}
```

### 3. Compute Factorial
- **POST** `/api/factorial`
- **Input**
```json
{
  "n": 5
}
```
- **Output**
```json
{
  "result": 120
}
```

## How to Run

1. Create a MySQL database named `math_db`.
2. Create user and grant all privileges (if needed).
3. Fill `.env` with your credentials.
4. Install dependencies:
```bash
npm install
```
5. Start the server:
```bash
npm start
```
6. Use Postman to test the endpoints.