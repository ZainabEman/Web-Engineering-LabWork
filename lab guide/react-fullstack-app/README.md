# React Fullstack App with Google Auth, MongoDB, PDF Download, and Map

## 🔧 Features and File References

### 1. Google OAuth 2.0 Authentication
- `server/routes/userRoutes.js` → `/auth/google` endpoint
- `server/controllers/userController.js` → Handles Google token verification
- `client/src/pages/Home.js` → Google login button

### 2. MongoDB User Data
- `server/models/User.js` → User schema
- `server/server.js` → MongoDB connection

### 3. Map Integration
- `client/src/components/Map.js` → Embedded Google Map

### 4. PDF Download
- `server/utils/pdfGenerator.js` → Generates downloadable PDF
- Route: `/download-pdf` in `userRoutes.js`

### 5. Alerts and UI
- `client/src/components/Alert.js` → React alert messages
- `client/src/pages/Dashboard.js` → UI with map + alert + PDF download button

### 🧪 Test Instructions
1. Run backend:
```bash
cd server
npm install
node server.js
```
2. Run frontend:
```bash
cd client
npm install
npm start
```

3. Go to `http://localhost:3000` and test Google login, PDF, and Map.