import prisma from '../prisma.js';

export const getAllUsers = async () => {
  return await prisma.user.findMany({
    include: {
      right: true, // ดึงข้อมูลสิทธิ์การรักษาติดมาด้วย
    },
  });
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { userId: id },
    include: {
      right: true,
      medicalHistory: true,
      treatments: true,
    },
  });
};

export const createUser = async (data: {
  citizenId: string;
  name: string;
  gender: string;
  birthDate: Date;
  phone?: string;
  address?: string;
  rightId: number;
}) => {
  return await prisma.user.create({
    data,
  });
};