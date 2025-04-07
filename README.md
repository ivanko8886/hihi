# Для запуска проекта, необходимо выполнить следующие шаги:

1. Открыть терминал (или командную строку) и перейти в корневую директорию проекта.
```
cd employees-react-express
```

3. Установить зависимости для серверной части проекта. Введите следующую команду в терминале:
```
npm install
```

4. Переименовать файл .env.local (убрать .local)
```
.env
```

5. Сгенерировать типы
```
npx prisma generate
```

6. Создать базу данных и сделать миграцию
```
npx prisma migrate dev
```

7. Перейти в директорию client и установить зависимости для клиентской части проекта.
```
cd client
npm install
```

8. Вернуться в корневую директорию проекта.
```
cd ..
```

9. Запустить проект. Введите следующую команду в терминале:
```
npm run dev
```

10. Открыть браузер и перейти по адресу http://localhost:3000, чтобы увидеть запущенный проект.

Успешный запуск проекта должен показать список сотрудников в браузере. Если возникли какие-либо проблемы во время установки или запуска проекта, проверьте, что все вышеперечисленные шаги были выполнены правильно и в соответствии с инструкцией.
