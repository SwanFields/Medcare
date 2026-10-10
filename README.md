ทำตามนี้นะสำหรับเพื่อนที่ดึงโปรเจกต์ไปทำต่อ
1. Clone โปรเจกต์ลง VScode เครื่องและ cd Medcare เอาไว้ใน Terminal VScode
2. ติดตั้ง Dependencies และ Prisma ORM ทั้งหมด
  - ใส่คำสั่งต่อไปนี้ใน Terminal VS ที่ /Medcare
    npm install
  - ลง Prisma CLI และ Client ให้เวอร์ชัน 5 ใส่คำสั่งตรงนี้ลงไปใน Terminal
    npm install -D prisma@5
    npm install @prisma/client@5
3. สร้างไฟล์ .env สำหรับเชื่อมต่อฐานข้อมูล
  - เพื่อนสร้างไฟล์ชื่อ .env ไว้ที่โฟลเดอร์หลัก (ก็คือสร้างไฟล์ใน Medcare ให้อยู่ในระดับเดียวกับ package.json เลย)
  - เข้าไปในไฟล์ .env
  - ใส่โค้ดข้างล่างลงไปในไฟล์ โดย <USERNAME> ให้ใส่ USERNAME ของ pgAdmin4 ของเพื่อนลงไป (ตามหลักทั่วไปมันจะเป็น postgresql) แล้วก็ <PASSWORD> ให้ใส่รหัสผ่านของ pgAdmin4 ของตัวเองนะ
DATABASE_URL="postgresql://<USERNAME>:<PASSWORD>@localhost:5432/medcare?schema=public"
4. Sync ฐานข้อมูล และรัน Server
  - รัน 3 คำสั่งนี้ใน Terminal เพื่อสร้างตาราง 8 Entities และสร้าง TypeScript และเปิดเซิร์ฟเวอร์ :
    # สร้างตารางและ Generate Prisma Client
    npx prisma db push
    # สร้าง TypeScript Client สำหรับดึงข้อมูล
    npx prisma generate
    # เปิดใช้งาน Server
    npx tsx watch src/index.ts

เสร็จตรงนี้แล้ว ถ้ารันเซิฟเวอร์ที่ localhost:3000 ติดแล้ว จะจัดการอะไรต่อก็จัดโลด
