## Data Model:

### User

| key       | data type | required |
| --------- | --------- | -------- |
| id        | Integer   | yes      |
| name      | String    | yes      |
| email     | Integer   | yes      |
| password  | String    | yes      |
| createdAt | Date      | yes      |
| updatedAt | Date      | yes      |

- user has one profile
- user has many sessions

### Profile

| key               | data type | required |
| ----------------- | --------- | -------- |
| id                | Integer   | yes      |
| interval          | Integer   | yes      |
| notification      | TIME      | no       |
| duration_exercise | String    | yes      |
| startTime         | DATE      | no       |
| userId            | Integer   | no       |
| createdAt         | Date      | yes      |
| updatedAt         | Date      | yes      |

- profile hasOne user

### Sessions

| key       | data type | required |
| --------- | --------- | -------- |
| id        | Integer   | yes      |
| date      | DateOnly  | no       |
| createdAt | Date      | yes      |
| updatedAt | Date      | yes      |

- sessions hasMany user

### UserSessions

| key       | data type | required |
| --------- | --------- | -------- |
| id        | Integer   | yes      |
| userId    | Integer   | yes      |
| sessionId | Integer   | yes      |
| createdAt | Date      | yes      |
| updatedAt | Date      | yes      |

- userSessions has many sessions
- userSessions has many users

## SETUP How to use this template

1. Clone the app

```
git clone git@github.com:WanderSmits/relaxation_server.git
```

3. cd into your project

```
cd relaxation_server
```

4. install dependencies

```
npm install
```

5. Configure your database in `config/config.json`

The default assumes a postgres database with

- username: postgres
- password: secret

6. Create database, run migrations & seed data

```
npm run initdev
```

7. start server with `nodemon`

```
npm run dev
```

8. User

```
email: dummy@dummy.com  password: dummy1234
```
