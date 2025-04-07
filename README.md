Текущий прогресс:
Есть монолитная структура
Частичное разделение сервисов уже начато (auth, employees)
Используется JWT и Prisma с PostgreSQL
Необходимо:
Создать Dockerfile для фронтенда (nginx)
Разделить существующий бэкенд на микросервисы
Настроить взаимодействие между сервисами
Создать docker-compose для оркестрации


# Employee Management System

A full-stack application for managing employee records with React frontend and Express backend.

## Features
- Employee CRUD operations
- User authentication
- Responsive design
- Database integration with Prisma

## Setup Instructions

### English
1. Clone the repository:
```bash
git clone https://github.com/ivanko8886/hihi.git
cd employees-react-express
```

2. Install dependencies:
```bash
npm install
cd client
npm install
cd ..
```

3. Configure environment:
- Rename `.env.local` to `.env`
- Add your database credentials to `.env`

4. Set up database:
```bash
npx prisma generate
npx prisma migrate dev
```

5. Run development server:
```bash
npm run dev
```

6. Open in browser:
```
http://localhost:3000
```

### Русский
1. Клонировать репозиторий:
```bash
git clone https://github.com/ivanko8886/hihi.git
cd employees-react-express
```

2. Установить зависимости:
```bash
npm install
cd client
npm install
cd ..
```

3. Настроить окружение:
- Добавить данные для подключения к БД в `.env`

4. Настроить базу данных:
```bash
npx prisma generate
npx prisma migrate dev
```

5. Запустить сервер разработки:
```bash
npm run dev
```

6. Открыть в браузере:
```
http://localhost:3000
```

## Production Build
```bash
cd client
npm run build
cd ..
npm start
```

## Technologies Used
- React
- Express
- Prisma
- PostgreSQL
- Redux Toolkit
