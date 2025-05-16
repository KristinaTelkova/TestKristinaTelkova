# Создать обращение
curl -X POST http://localhost:3000/tickets \
  -H "Content-Type: application/json" \
  -d '{"subject":"Тест","message":"Тестовое обращение"}'

# Взять в работу
curl -X PATCH http://localhost:3000/tickets/1/start

# Завершить
curl -X PATCH http://localhost:3000/tickets/1/complete \
  -H "Content-Type: application/json" \
  -d '{"resolution":"Решено"}'

# Получить список
curl http://localhost:3000/tickets
