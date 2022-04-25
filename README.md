ใช้ styled components
npm install styled-components
router กำหนดเส้นทาง
npm install react-router-dom

React + Mysql - สร้างไฟล์ server - เปิด Terminals - npm init - npm i mysql cors express - npm install mysql2  
npm install multer sequelize mysql2 สำหรับเพิ่มรูปภาพด้วย - npm install bcrypt // ใช้ เข้ารหัส password - yarn add react-jwt // ใช้ login เก็บ token - npm i nodemon //แก้ไขอัตโนมัติเมื่อกด save - เขียน "dev":"nodemon index" ลงใน package.json ตรง script - npm run dev (run database) - npm i axios

tailwind
https://tailwindcss.com/docs/guides/create-react-app

Stack Overflow

- ลง npm ไม่ได้ npm ERR! code ERESOLVE npm ERR! ERESOLVE unable to resolve dependency tree
  npm install --save --legacy-peer-deps

มีอะไรบ้าง

- สร้าง Authen ขึ้นมาตรวจสอบการ login ทุกๆครั้งที่มีการเปลี่ยนหน้า โดยทำงานผ่าน routes ตรวจสอบ
- ใช้ style component ในการกำหนด style ให้กับ obj
- ใช้ Api + Postman + MySQL
- CRUD โดยใช้ axios และ fetch ในการ post get put delete ผ่าน api
- Login เข้าสู่ระบบผ่าน API

ปัญหาที่พบ

- มีการ render page มากกว่า 1 ครั้ง ทำให้เกิดการ fetch หลายรอบ
- เนื่องจากเป็นบัค react 18

แก้ไขโดย

- ลบ <React.StrictMode> ที่ครอบอยู่ของหน้า index และ app.js เนื่องจากทำให้มีการ render หลายครั้ง
- การส่งค่า component สู่ component ที่อยู่คนละหน้า ไม่สามารถใช้ useContext(เหมาะกับการใช้งานแค่ใน page นั้น)
  ควรใช้ redux ในการส่งค่าผ่าน root ต่างๆ
