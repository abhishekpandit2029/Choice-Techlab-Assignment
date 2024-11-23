import { Select } from "antd";

export function SelectGender() {
    return (
        <Select size="large" placeholder="Select Gender" showSearch options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Non-binary", label: "Non-binary" },
            { value: "Other", label: "Other" },
        ]}
        />
    );
}

export function SelectCommunicationPreference() {
    return (
        <Select size='large' placeholder="Select Communication Preference" showSearch options={[
            { value: 'Phone', label: 'Phone' },
            { value: 'Email', label: 'Email' },
            { value: "SMS", label: "SMS" }
        ]} />
    );
}

export function SelectPreferredContactTime() {
    return (
        <Select size='large' placeholder="Select Preferred Contact Time" options={[
            { label: "Morning", value: "Morning" },
            { label: "Afternoon", value: "Afternoon" },
            { label: "Evening", value: "Evening" },
        ]} />
    );
}

export function SelectGovernmentID() {
    return (
        <Select size='large' placeholder="Select Government ID" options={[
            { label: "Passport", value: "Passport" },
            { label: "Aadhar Card", value: "Aadhar Card" },
            { label: "Driving License", value: "Driving License" },
        ]} />
    );
}

export function SelectAddressIncomeProof({ placeholderName }: { placeholderName: string }) {
    return (
        <Select
            size="large"
            placeholder={placeholderName}
            options={[
                { label: "Passport", value: "passport" },
                { label: "Aadhar Card", value: "adhar_card" },
                { label: "Driving License", value: "driving_license" },
            ]}
        />
    );
}


export function SelectIncomeProof() {
    return (
        <Select size='large' placeholder="Select Income Proof" options={[
            { label: "Salary slip", value: "Salary slip" },
            { label: "Bank statement", value: "Bank statement" },
            { label: "Form 16 of ITR", value: "Form 16 of ITR" },
            { label: "Profit and loss statement", value: "Profit and loss statement" },
            { label: "Earnings statement", value: "Earnings statement" },
        ]} />
    );
}




