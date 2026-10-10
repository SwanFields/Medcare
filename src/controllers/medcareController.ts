import { Request, Response } from 'express';
import * as service from '../services/medcareService.js';

// 1. RIGHTS
export const getRights = async (req: Request, res: Response) => {
  const data = await service.getAllRights();
  res.json(data);
};

export const createRight = async (req: Request, res: Response) => {
  const { rightName, status, startDate, endDate } = req.body;
  const data = await service.createRight({
    rightName,
    status,
    startDate: startDate ? new Date(startDate) : undefined,
    endDate: endDate ? new Date(endDate) : undefined,
  });
  res.status(201).json(data);
};

// 2. USERS
export const getUsers = async (req: Request, res: Response) => {
  const data = await service.getAllUsers();
  res.json(data);
};

export const createUser = async (req: Request, res: Response) => {
  const { citizenId, name, gender, birthDate, phone, address, rightId } = req.body;
  const data = await service.createUser({
    citizenId,
    name,
    gender,
    birthDate: new Date(birthDate),
    phone,
    address,
    rightId: Number(rightId),
  });
  res.status(201).json(data);
};

// 3. MEDICAL HISTORY
export const getMedicalHistory = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const data = await service.getMedicalHistoryByUserId(userId);
  res.json(data);
};

export const createMedicalHistory = async (req: Request, res: Response) => {
  const { userId, drugAllergy, chronicDisease, otherHistory } = req.body;
  const data = await service.createMedicalHistory({
    userId: Number(userId),
    drugAllergy,
    chronicDisease,
    otherHistory,
  });
  res.status(201).json(data);
};

// 4. DOCTORS
export const getDoctors = async (req: Request, res: Response) => {
  const data = await service.getAllDoctors();
  res.json(data);
};

export const createDoctor = async (req: Request, res: Response) => {
  const { doctorName, specialty, phone } = req.body;
  const data = await service.createDoctor({ doctorName, specialty, phone });
  res.status(201).json(data);
};

// 5. TREATMENTS
export const getTreatments = async (req: Request, res: Response) => {
  const data = await service.getAllTreatments();
  res.json(data);
};

export const createTreatment = async (req: Request, res: Response) => {
  const { userId, doctorId, symptom, diagnosis, treatmentDate } = req.body;
  const data = await service.createTreatment({
    userId: Number(userId),
    doctorId: Number(doctorId),
    symptom,
    diagnosis,
    treatmentDate: new Date(treatmentDate),
  });
  res.status(201).json(data);
};

// 6. PRESCRIPTIONS
export const createPrescription = async (req: Request, res: Response) => {
  const { treatmentId, prescriptionDate } = req.body;
  const data = await service.createPrescription({
    treatmentId: Number(treatmentId),
    prescriptionDate: new Date(prescriptionDate),
  });
  res.status(201).json(data);
};

// 7. PRESCRIPTION ITEMS
export const addPrescriptionItem = async (req: Request, res: Response) => {
  const { prescriptionId, medicineName, quantity, usageInstruction } = req.body;
  const data = await service.addPrescriptionItem({
    prescriptionId: Number(prescriptionId),
    medicineName,
    quantity: Number(quantity),
    usageInstruction,
  });
  res.status(201).json(data);
};

// 8. MEDICINE DELIVERY
export const createDelivery = async (req: Request, res: Response) => {
  const { prescriptionId, deliveryAddress, deliveryDate, trackingNumber, carrier, deliveryStatus } = req.body;
  const data = await service.createDelivery({
    prescriptionId: Number(prescriptionId),
    deliveryAddress,
    deliveryDate: deliveryDate ? new Date(deliveryDate) : undefined,
    trackingNumber,
    carrier,
    deliveryStatus,
  });
  res.status(201).json(data);
};