
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// إنشاء اتصال بقاعدة البيانات
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER, // اسم المستخدم لقاعدة البيانات
  password: process.env.PASSWORD, // كلمة المرور لقاعدة البيانات
  database: process.env.DATABASE // اسم قاعدة البيانات
});

// currentrader
// err.stack
// فتح الاتصال
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:' );
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// إجراء استعلام كمثال
module.exports = connection;
// إغلاق الاتصال
// connection.end();