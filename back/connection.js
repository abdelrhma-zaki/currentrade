
// // const mysql = require('mysql');
// const dotenv = require('dotenv');
// dotenv.config();

// // إنشاء اتصال بقاعدة البيانات
// // const connection = mysql.createConnection({
// //   host: process.env.HOST,
// //   user: process.env.USER, // اسم المستخدم لقاعدة البيانات
// //   password: process.env.PASSWORD, // كلمة المرور لقاعدة البيانات
// //   database: process.env.DATABASE // اسم قاعدة البيانات
// // });

// // // currentrader
// // // err.stack
// // // فتح الاتصال
// // connection.connect((err) => {
// //   if (err) {
// //     console.error('Error connecting to the database:' );
// //     return;
// //   }
// //   console.log('Connected to the database as id ' + connection.threadId);
// // });

// // // إجراء استعلام كمثال
// // module.exports = connection;
// // إغلاق الاتصال

// const mysql = require('mysql2');

// // إعداد الاتصال بقاعدة البيانات باستخدام URL
// const url = "mysql://root:vjZbdRjuTcjjDnJIFilAOHpGEoEmxlxT@monorail.proxy.rlwy.net:3000/railway";
// // 34782
// // إنشاء اتصال بقاعدة البيانات
// const connection = mysql.createConnection(url);

// // اتصال بقاعدة البيانات
// connection.connect((err) => {
//   if (err) {
//     console.error('Error:', err.stack);
//     return;
//   }
//   console.log('db connected');
// });
// // connection.end();
// module.exports = connection;

// // تنفيذ استعلام بسيط
// // connection.query('SELECT * FROM table_name', (err, results, fields) => {
// //   if (err) {
// //     console.error('حدث خطأ أثناء تنفيذ الاستعلام:', err.stack);
// //     return;
// //   }
// //   console.log('النتائج:', results);
// // });

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Error connecting to the database:', error));
db.once('open', () => console.log('Connected to the database'));

module.exports = db;
