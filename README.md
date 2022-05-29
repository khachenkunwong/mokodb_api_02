# เวอร์ชัน
v1 สร้าง api เอาข้อมูลไปแสดงบน postman (node index.js)

v2 สร้าง Routes เอาเเพกเก็ตมาใช้ morgan คือคำนวนเวลา nodemon คือ ตัวช่วย (npm start)

v3 ทำฟังชันกรณีที่ ใส url ผิด ทำเมื่อเพิ่มค่าลงใน url รับค่ามาแสดงดึงค่ามา (ก่อนเชื่อม database) (npm start)

V4 เพิ่ม mongoose แต่ยังใช้ postman เชื่อมยังไม่ได้

V5 ทำการเชื่อมกับ postman ได้แล้ว

V6 ทำการใส่เงื่อนไขในการเช็คเพื่อป้องกันไม่ให้ข้อมูลไม่ซ้ำ


# เครื่องมือ

express คือ node ตัวช่วยในการเขียนของ api [express](https://www.npmjs.com/package/express)

mongoose คือ ตัวที่เอาไว้เชื่อมกับมังโก ดีบี [mongoose](https://www.npmjs.com/package/mongoose)

morgan คือ ตัววัดความเร็วในการรับส่งข้อมูล แสดงเป็นเวลา [morgan](https://www.npmjs.com/package/morgan)

nodemon คือ เมื่อเขียนโค้ตจะอัพเดต [nodemon](https://www.npmjs.com/package/nodemon)

config [config](https://www.npmjs.com/package/config)
