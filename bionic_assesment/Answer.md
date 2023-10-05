# C. SQL TEST

## Result 1

SELECT DISTINCT item FROM ASSET

## Result 2

SELECT user_id, GROUP_CONCAT(item ORDER BY item ASC SEPARATOR ', ') AS asset
FROM USER
LEFT JOIN ASSET
ON user_id = ASSET.user_id
GROUP BY user_id;

# F. ISTILAH

Cypress = TOOL UNTUK END TO END TESTING

Kubernetes =

ORM (Object-Relational Mapping) = teknik pemrograman yang memetakan sebuah objek dengan database
mis = INSERT INTO persons(id, name) values (1, 'Jhon') => dimapping oleh ORM menjadi object dengan method persons.insert() pada class persons

class = dasar untuk menciptakan object. Pada kelas terdapat attributes yang menyimpan suatu nilai, methods dan lainnya. untuk mengakses class dapat menggunakan kata `new`

function = bagian dari program yang memiliki nama tertentu untuk mengerjakan sesuatu

devOps = penggabungan antara tim developer dngan tim oprasional untuk mempercepat pengembangan aplikasi

docker = tools untuk mengemas packages packages yang digunakan dalam sebuah aplikasi dalam sebuah container
