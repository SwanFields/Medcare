import { Router } from 'express';
import * as controller from '../controllers/medcareController.js';

const router = Router();

// 1. Rights
router.get('/rights', controller.getRights);
router.post('/rights', controller.createRight);

// 2. Users
router.get('/users', controller.getUsers);
router.post('/users', controller.createUser);

// 3. Medical History
router.get('/medical-history/user/:userId', controller.getMedicalHistory);
router.post('/medical-history', controller.createMedicalHistory);

// 4. Doctors
router.get('/doctors', controller.getDoctors);
router.post('/doctors', controller.createDoctor);

// 5. Treatments
router.get('/treatments', controller.getTreatments);
router.post('/treatments', controller.createTreatment);

// 6. Prescriptions
router.post('/prescriptions', controller.createPrescription);

// 7. Prescription Items
router.post('/prescription-items', controller.addPrescriptionItem);

// 8. Medicine Delivery
router.post('/medicine-deliveries', controller.createDelivery);

export default router;