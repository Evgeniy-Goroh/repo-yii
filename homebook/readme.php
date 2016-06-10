Структура приложения homebook
-Клиентское приложение. каталог client
-Серверное приложение. каталог server
-books.sql дамп базы данных
-install.php скрипт создания БД

Обрашение к REST API http://localhost/homebook/server/web/books

Какие варианты запросов мы имеем

    GET /books: Получить все книги;
    HEAD /books: Получить заголовок ответа на запрос GET /books;
    POST /books: Создать новую книгу;
    GET /books/1: Получить данные книги с id=1;
    HEAD /books/1: Получить заголовок ответа GET /books/1;
    PATCH /books/1 и PUT /books/1: Изменить данные книги с id=1;
    DELETE /books/1: Удалить книгу с id=1;
    OPTIONS /books: Получить список доступных методов запроса для /books;
    OPTIONS /books/1: Получить список доступных методов запроса для /books/123.
