export interface IKYCForm {
    // Personal Information
    first_name: string;
    middle_name?: string;
    last_name: string;
    gender?: string;
    dob: string;
    birth_place: string;
    blood_group?: string;
    maritual_status: string;
    nationality: string;

    // Address and Contact Information
    primary_address: string;
    secondary_address?: string;
    alternate_address?: string;
    primary_email_address: string;
    alternate_email_address?: string;
    primary_contact_number: string;
    alternate_contact_number?: string;
    communication_preference: string;
    preferred_contact_time?: string;

    // Government Identification
    government_id: string;
    government_id_number: string;
    government_id_issue_date?: string;
    alternate_government_id: string;
    alternate_government_id_number: string;
    alternate_government_id_issue_date?: string;

    // Bank Information
    account_holder_name: string;
    bank_name: string;
    branch_name?: string;
    bank_address?: string;
    account_nmber: string;
    ifsc_code: string;

    // Document Upload
    address_proof: string,
    identity_proof: string,
    income_proof: string,
    select_address_proof: string
    select_identity_proof: string
    select_income_proof: string
    address_proof_file_name: string
    identity_proof_file_name: string
    income_proof_file_name: string

    //Accepted terms and conditions
    accepted_terms_and_conditions: boolean
    users_selfie: string | null
}

export interface UploadedDoc {
    name: string;
    url: string;
}

export interface IUploadedDocsType {
    address_proof: UploadedDoc | null;
    identity_proof: UploadedDoc | null;
    income_proof: UploadedDoc | null;
}

export interface IStepProps {
    next?: () => void
    prev?: () => void
}

export interface ISelectGovernmentIDProps {
    placeholderName: string;
    defaultValue?: string | null;
    filteredValue?: string | null;
    onChange?: (value: string) => void;
}