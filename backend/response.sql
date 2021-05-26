//SELECT

SELECT * FROM table_name; //получить все колонки в таблице
SELECT name, city FROM table_name; //получить нужные колонки
SELECT DISTINCT price, title FROM goods //получить неодинаковые столбцы/ дубли будет удалять
SELECT * FROM goods WHERE Country='Mexico' //получить все колонки с значением Country = 'mexico'//слова в одинарных кавычках
SELECT * FROM goods WHERE Country='1' AND/OR/NOT City='2' //получить все колонки с значением Country = mexico + доп условия
SELECT * FROM goods ORDER BY Country ASC, City DESC //сортировка по колонками
SELECT * FROM goods WHERE Country IS NULL (IS NOT NULL)//равно ли значение null
SELECT * FROM goods WHERE Country='1' LIMIT 3 //показать первые 3 записи с фильтром Country=1
SELECT MIN/MAX(price) FROM table_name //вернуть минимальное значение price с всей таблицы
SELECT COUNT(*) FROM table_name WHERE ...//количество строк с заданным критерием
SELECT AVG(column_name) FROM table_name WHERE condition; //среднее число строк числового столбца
SELECT SUM(column_name) FROM table_name WHERE condition; //общее число строк числового столбца
SELECT * FROM  table_name WHERE City LIKE '%a' //поиск city с заканчивающий на 'a'
SELECT * FROM  table_name WHERE City LIKE 'a%' //поиск city начинающий с 'a'
SELECT * FROM  table_name WHERE City IN ('Russian', 'USA') //краткая замена OR (или)
SELECT * FROM table_name WHERE Price BETWEEN 10 AND 20 //выбрать price в диапозоне от 10 до 20 //диапозон

//CREATE
INSERT INTO table (title, id) values ($1, $2) RETURNING *, [val, val] //создать и вернуть все поля

//UPDATE
UPDATE table SET col='val', col='v2' WHERE id=1 RETURNING * //обновить колонки, если id = 1 (в кавычках)

//delete
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste'; //удалить записи по определенному фильтру

//inner join вытаскивает строку в связанных таблицах
SELECT table1.name FROM table1 INNER join table2 ON table.id=table2.i //возвращает все записи, которые есть в первом и второй таблице 
SELECT age, SUM(salary) as sum FROM workers GROUP BY age // вернет сгруппированный результат суммы по возрастам
SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 5; //тот же WHERE только с мат. cпособностью. Показать юзер с более 5 клиентами
SELECT OrderID, Quantity, CASE WHEN Quantity > 30 THEN 'The quantity is greater than 30' WHEN Quantity = 30 THEN 'The quantity is 30' ELSE 'The quantity is under 30' END AS QuantityText FROM OrderDetails; //множественное условие

INNER JOIN // выведет только при совпадении - по сути только его будем использовать
LEFT //приоритет левому
RIGHT //приоритет правому
FULL //по полной

//union
SELECT column_name(s) FROM table1
UNION //возращает одинаковые по имени столбы с разных таблиц без дубля. С дублем это UNION ALL
SELECT column_name(s) FROM table2; 

//ALTER TABLE userId ADD COLUMN otch VARCHAR (20); //добавить новую строку
