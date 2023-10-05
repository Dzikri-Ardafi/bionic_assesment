# ASSESSMENT

```bash
npm install
npm run dev
```

**node version v18.17.1**

## CSS TEST

Dapat dilihat di local host dengan url 'http://localhost:5173/'

## API TEST

Disini saya menggunakan pinia untuk state management nya. Dan melakukan semua http method dalam store. <br>
Hasil dari assesment ini dapat di lihat di local host dengan url 'http://localhost:5173/job-application'<br>
Jangan lupa untuk mengecek console, karena saya menggunakan console untuk menampilkan response dari http request yang dilakukan

## SQL TEST

### Result 1

SELECT DISTINCT item FROM ASSET

### Result 2

SELECT user_id, GROUP_CONCAT(item ORDER BY item ASC SEPARATOR ', ') AS asset <br>
FROM USER <br>
LEFT JOIN ASSET <br>
ON user_id = ASSET.user_id <br>
GROUP BY user_id <br>

## LOGIC TEST

Script untuk mengerjakan ini terdapat pada path './script.js'

## Jelaskan istilah

Cypress = TOOL UNTUK END TO END TESTING

Kubernetes = platform orkestrasi container open-source yang digunakan untuk mengelola, mendeploy, dan mengautomasi aplikasi dalam lingkungan yang terdistribusi dan skala besar.

ORM (Object-Relational Mapping) = teknik pemrograman yang memetakan sebuah objek dengan database
contoh => INSERT INTO persons(id, name) values (1, 'Jhon'), maka ketika dimapping oleh ORM menjadi object dengan method persons.insert() pada class persons

class = dasar untuk menciptakan object. Pada kelas terdapat attributes yang menyimpan suatu nilai, methods dan lainnya. untuk mengakses class dapat menggunakan kata `new`

function = bagian dari program yang memiliki nama tertentu untuk mengerjakan sesuatu

devOps = penggabungan antara tim developer dngan tim oprasional untuk mempercepat pengembangan aplikasi

docker = tools untuk mengemas packages packages yang digunakan dalam sebuah aplikasi dalam sebuah container

## 3 Architecture Aplication

Tiga arsitektur aplikasi yang umum digunakan dalam era sekarang adalah:

1. Microservices Architecture:

   - Teknologi Terbaik: Kubernetes (untuk orkestrasi container) dan Spring Boot (untuk pengembangan microservices dengan Java).
   - Alasan: Kubernetes adalah salah satu platform orkestrasi container yang paling populer dan kuat, yang memungkinkan Anda untuk mengelola dan mengotomatisasi aplikasi berbasis microservices dengan mudah.

2. Serverless Architecture:

   - Teknologi Terbaik: AWS Lambda (untuk komputasi serverless di AWS) atau Azure Functions (untuk komputasi serverless di Azure).
   - Alasan: AWS Lambda dan Azure Functions adalah dua layanan serverless yang sangat kuat dan terintegrasi dengan layanan cloud masing-masing.

3. Single Page Application (SPA) Architecture:
   - Teknologi Terbaik: React (untuk pengembangan antarmuka pengguna) dan Node.js (untuk server backend dalam aplikasi SPA).
   - Alasan: React adalah salah satu library JavaScript yang paling populer dan kuat untuk pengembangan antarmuka pengguna. Node.js adalah runtime lingkungan JavaScript yang memungkinkan Anda untuk mengembangkan server backend dengan JavaScript yang konsisten, memungkinkan pengembang untuk menggunakan bahasa yang sama di seluruh aplikasi, serta skalabilitas dan kinerja yang baik.
