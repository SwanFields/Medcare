import prisma from '../prisma.js';

// 1. RIGHTS
export const getAllRights = async () => {
  return await prisma.right.findMany();
};

export const createRight = async (data: { rightName: string; status: string; startDate?: Date; endDate?: Date }) => {
  return await prisma.right.create({ data });
};

// 2. USERS
export const getAllUsers = async () => {
  return await prisma.user.findMany({ include: { right: true } });
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
  return await prisma.user.create({ data });
};

// 3. MEDICAL HISTORY
export const getMedicalHistoryByUserId = async (userId: number) => {
  return await prisma.medicalHistory.findMany({ where: { userId } });
};

export const createMedicalHistory = async (data: {
  userId: number;
  drugAllergy?: string;
  chronicDisease?: string;
  otherHistory?: string;
}) => {
  return await prisma.medicalHistory.create({ data });
};

// 4. DOCTORS
export const getAllDoctors = async () => {
  return await prisma.doctor.findMany();
};

export const createDoctor = async (data: { doctorName: string; specialty?: string; phone?: string }) => {
  return await prisma.doctor.create({ data });
};

// 5. TREATMENTS
export const getAllTreatments = async () => {
  return await prisma.treatment.findMany({
    include: {
      user: true,
      doctor: true,
      prescriptions: true,
    },
  });
};

export const createTreatment = async (data: {
  userId: number;
  doctorId: number;
  symptom: string;
  diagnosis: string;
  treatmentDate: Date;
}) => {
  return await prisma.treatment.create({ data });
};

// 6. PRESCRIPTIONS
export const createPrescription = async (data: { treatmentId: number; prescriptionDate: Date }) => {
  return await prisma.prescription.create({ data });
};

// 7. PRESCRIPTION ITEMS
export const addPrescriptionItem = async (data: {
  prescriptionId: number;
  medicineName: string;
  quantity: number;
  usageInstruction?: string;
}) => {
  return await prisma.prescriptionItem.create({ data });
};

// 8. MEDICINE DELIVERY
export const createDelivery = async (data: {
  prescriptionId: number;
  deliveryAddress: string;
  deliveryDate?: Date;
  trackingNumber?: string;
  carrier?: string;
  deliveryStatus?: string;
}) => {
  return await prisma.medicineDelivery.create({ data });
};