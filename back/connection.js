
// const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// إنشاء اتصال بقاعدة البيانات
// const connection = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER, // اسم المستخدم لقاعدة البيانات
//   password: process.env.PASSWORD, // كلمة المرور لقاعدة البيانات
//   database: process.env.DATABASE // اسم قاعدة البيانات
// });

// // currentrader
// // err.stack
// // فتح الاتصال
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:' );
//     return;
//   }
//   console.log('Connected to the database as id ' + connection.threadId);
// });

// // إجراء استعلام كمثال
// module.exports = connection;
// إغلاق الاتصال
// connection.end();

const mysql = require('mysql2');

// إعداد الاتصال بقاعدة البيانات باستخدام URL
const url = "mysql://root:vjZbdRjuTcjjDnJIFilAOHpGEoEmxlxT@monorail.proxy.rlwy.net:34782/railway";

// إنشاء اتصال بقاعدة البيانات
const connection = mysql.createConnection(url);

// اتصال بقاعدة البيانات
connection.connect((err) => {
  if (err) {
    console.error('Error:', err.stack);
    return;
  }
  console.log('db connected');
});
module.exports = connection;

// تنفيذ استعلام بسيط
// connection.query('SELECT * FROM table_name', (err, results, fields) => {
//   if (err) {
//     console.error('حدث خطأ أثناء تنفيذ الاستعلام:', err.stack);
//     return;
//   }
//   console.log('النتائج:', results);
// });
