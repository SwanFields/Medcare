
-- =====================================================
--1. RIGHTS : สิทธิ์การรักษา
-- =====================================================

CREATE TABLE rights (
    right_id SERIAL PRIMARY KEY,
    right_name VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL,
    start_date DATE,
    end_date DATE
);


-- =====================================================
-- 1. USERS : ข้อมูลผู้ใช้บริการ
-- =====================================================

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    citizen_id VARCHAR(13) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    birth_date DATE NOT NULL,
    phone VARCHAR(15),
    address TEXT,
    right_id INT NOT NULL,

    FOREIGN KEY (right_id)
        REFERENCES rights(right_id)
);

-- =====================================================
-- 3. MEDICAL_HISTORY : ประวัติสุขภาพ
-- =====================================================

CREATE TABLE medical_history (
    history_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    drug_allergy TEXT,
    chronic_disease TEXT,
    other_history TEXT,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);


-- =====================================================
-- 4. DOCTORS : ข้อมูลแพทย์ที่ปรึกษา
-- =====================================================

CREATE TABLE doctors (
    doctor_id SERIAL PRIMARY KEY,
    doctor_name VARCHAR(100) NOT NULL,
    specialty VARCHAR(100),
    phone VARCHAR(15)
);


-- =====================================================
-- 5. TREATMENTS : การรักษาและผลการวินิจฉัย
-- =====================================================

CREATE TABLE treatments (
    treatment_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    doctor_id INT NOT NULL,
    symptom TEXT NOT NULL,
    diagnosis TEXT NOT NULL,
    treatment_date DATE NOT NULL,

    FOREIGN KEY (user_id)
        REFERENCES users(user_id),

    FOREIGN KEY (doctor_id)
        REFERENCES doctors(doctor_id)
);


-- =====================================================
-- 6. PRESCRIPTIONS : ใบสั่งยา
-- =====================================================

CREATE TABLE prescriptions (
    prescription_id SERIAL PRIMARY KEY,
    treatment_id INT NOT NULL,
    prescription_date DATE NOT NULL,

    FOREIGN KEY (treatment_id)
        REFERENCES treatments(treatment_id)
);


-- =====================================================
-- 7. PRESCRIPTION_ITEMS : รายการยาในใบสั่งยา
--    Weak Entity
-- =====================================================

CREATE TABLE prescription_items (
    prescription_id INT NOT NULL,
    medicine_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    usage_instruction TEXT,

    PRIMARY KEY (prescription_id, medicine_name),

    FOREIGN KEY (prescription_id)
        REFERENCES prescriptions(prescription_id)
        ON DELETE CASCADE
);


-- =====================================================
-- 8. MEDICINE_DELIVERY : การส่งยาและติดตามพัสดุ
-- =====================================================

CREATE TABLE medicine_delivery (
    delivery_id SERIAL PRIMARY KEY,
    prescription_id INT NOT NULL,
    delivery_address TEXT NOT NULL,
    delivery_date DATE,
    tracking_number VARCHAR(50),
    carrier VARCHAR(50),
    delivery_status VARCHAR(50),

    FOREIGN KEY (prescription_id)
        REFERENCES prescriptions(prescription_id)
);