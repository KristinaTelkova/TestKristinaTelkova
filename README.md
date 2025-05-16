API Endpoints
POST /tickets - Создать новое обращение

Параметры: subject (string), message (string)

Статус по умолчанию: "Новое"

PATCH /tickets/:id/start - Взять обращение в работу

Меняет статус на "В работе"

PATCH /tickets/:id/complete - Завершить обращение

Параметры: resolution (string)

Меняет статус на "Завершено"

PATCH /tickets/:id/cancel - Отменить обращение

Параметры: cancellationReason (string)

Меняет статус на "Отменено"

GET /tickets - Получить список обращений

Параметры фильтрации:

date (фильтр по конкретной дате создания)

startDate, endDate (фильтр по диапазону дат)

Сортировка по дате создания (новые сначала)

POST /tickets/cancel-all-in-progress - Отменить все обращения в статусе "В работе"

Параметры: cancellationReason (string)
