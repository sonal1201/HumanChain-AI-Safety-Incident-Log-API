# HumanChain AI Safety Incident Log API

A simple RESTful API to log and manage hypothetical AI safety incidents, built using **Node.js**, **TypeScript**, **Express**, and **MongoDB**.

---

## 🛠 Tech Stack

- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Runtime**: Node.js

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/humanchain-ai-safety-log.git
cd humanchain-ai-safety-log
```
- Add a dist folder 
- inside dist make index.ts

### 2. Install Dependencies

```bash
npm install
  ```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3000`

`DB_URL= MONGODB CONNECTION STRING`


## Run Locally
Start the server

```bash
  npm run dev
```


## API Endpoints

#### Get All Incidents

```http
  GET /api/v1/log/incidents
```

#### Create a New Incident

```http
  POST /api/v1/log/incident
```
#### Get Incident by ID
```http
  GET /api/v1/log/incident/:id
```

#### Delete Incident by ID

```http
  DELETE /api/v1/log/incident/:id
```

## MONGODB data

```
  {
  "_id":{"$oid":"680a7a6200bc14416879235b"},
  "title":"Server Down",
  "description":"The main server went down unexpectedly causing downtime for all users.",
  "severity":"high",
  "createdAt":{"$date":{"$numberLong":"1745517154957"}},
  "updatedAt":{"$date":{"$numberLong":"1745517154957"}},
  "__v":{"$numberInt":"0"}
  }
  ```