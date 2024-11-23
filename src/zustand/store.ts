import { IKYCForm } from '@/interface/main';
import { Dayjs } from 'dayjs';
import { create } from 'zustand';

interface KYCStore {
    form: IKYCForm;
    setFields: (fields: Partial<IKYCForm>) => void;
}

export const useKYCStore = create<KYCStore>((set) => ({
    form: {
        first_name: "",
        middle_name: "",
        last_name: "",
        gender: "Male",
        dob: "",
        birth_place: "",
        blood_group: "",
        maritual_status: "",
        nationality: "",
        primary_address: "",
        secondary_address: "",
        alternate_address: "",
        primary_email_address: "",
        alternate_email_address: "",
        primary_contact_number: "",
        alternate_contact_number: "",
        communication_preference: "",
        preferred_contact_time: "",
        government_id: "",
        government_id_number: "",
        account_holder_name: "",
        bank_name: "",
        branch_name: "",
        bank_address: "",
        account_nmber: "",
        ifsc_code: "",
        address_proof: "",
        identity_proof: "",
        income_proof: "",
        select_address_proof: "",
        select_identity_proof: "",
        select_income_proof: ""
    },
    setFields: (fields) =>
        set((state) => ({
            form: { ...state.form, ...fields },
        }))
}));
