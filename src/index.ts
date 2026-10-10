import express, { Request, Response } from 'express';
import medcareRoutes from './routes/medcareRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Medcare Backend API 8 Entities is running');
});

// รวม Routes ทั้ง 8 Entities ไว้ตามโครงสร้าง
app.use('/api', medcareRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});