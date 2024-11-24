import { ISelectGovernmentIDProps } from "@/interface/main";
import { useKYCStore } from "@/zustand/store";
import { Select, SelectProps } from "antd";

export function SelectGender({ ...props }: SelectProps) {
    return (
        <Select {...props} size="large" placeholder="Select Gender" showSearch options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Non-binary", label: "Non-binary" },
            { value: "Other", label: "Other" },
        ]}
        />
    );
}

export function SelectCommunicationPreference() {
    const { form: storeValues } = useKYCStore();
    return (
        <Select size='large' placeholder="Select Communication Preference" value={storeValues?.communication_preference} showSearch options={[
            { value: 'Phone', label: 'Phone' },
            { value: 'Email', label: 'Email' },
            { value: "SMS", label: "SMS" }
        ]} />
    );
}

export function SelectPreferredContactTime() {
    const { form: storeValues } = useKYCStore();
    return (
        <Select size='large' placeholder="Select Preferred Contact Time" value={storeValues?.preferred_contact_time} options={[
            { label: "Morning", value: "Morning" },
            { label: "Afternoon", value: "Afternoon" },
            { label: "Evening", value: "Evening" },
        ]} />
    );
}

export function SelectGovernmentID({ placeholderName, defaultValue, filteredValue, onChange }: ISelectGovernmentIDProps) {
    return (
        <Select size='large' placeholder={placeholderName} value={defaultValue} options={[
            { label: "Passport", value: "Passport" },
            { label: "Aadhar Card", value: "Aadhar Card" },
            { label: "Driving License", value: "Driving License" },
            { label: "Bank Passbook", value: "Bank Passbook" },
            { label: "Ratio Card", value: "Ratio Card" },
            { label: "PAN Card", value: "PAN Card" },
            { label: "Voter Card", value: "Voter Card" },
        ]?.filter((item) => item?.value !== filteredValue)} onChange={onChange} />
    );
}

export function SelectIncomeProof({ ...props }: SelectProps) {
    return (
        <Select {...props} size='large' placeholder="Select Income Proof" options={[
            { label: "Salary slip", value: "Salary slip" },
            { label: "Bank statement", value: "Bank statement" },
            { label: "Form 16 of ITR", value: "Form 16 of ITR" },
            { label: "Profit and loss statement", value: "Profit and loss statement" },
            { label: "Earnings statement", value: "Earnings statement" },
        ]} />
    );
}




