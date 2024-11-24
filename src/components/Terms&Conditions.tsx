import { useKYCStore } from "@/zustand/store";
import { Button, Checkbox, CheckboxProps, Skeleton } from "antd";
import { IStepProps } from "@/interface/main";
import { useState } from "react";
import dynamic from "next/dynamic";

const WebcamCapture = dynamic(() => import('./WebcamCapture'), {
    loading: () => <Skeleton.Button />,
})

export default function TermsConditions({ next, prev }: IStepProps) {
    const { form: storeValues } = useKYCStore();
    const [acceptedtnc, setAcceptedtnc] = useState(false);

    const onChange: CheckboxProps['onChange'] = (e) => {
        setAcceptedtnc(e.target.checked)
    };

    return (
        <div
            className="flex flex-col space-y-6"
        >
            <p className="text-xl font-bold text-black">Terms and Conditions</p>
            <p className="flex flex-col space-y-4">
                <span>1. The KYC process is conducted to verify identity and ensure compliance with legal and regulatory requirements.</span>
                <span>2. Personal information and documents collected will only be used for KYC verification purposes.</span>
                <span>3. The information and documents provided must be accurate, authentic, and up-to-date.</span>
                <span>4. Submission of false or misleading information may result in rejection or account suspension.</span>
                <span>5. Users must update their KYC information periodically as required.</span>
                <span>6. The platform will maintain confidentiality and implement security measures to protect user data.</span>
                <span>7. KYC information may be shared with authorized third parties or regulators when required by law.</span>
                <span>8. Failure to comply with KYC requirements may lead to account suspension or termination of services.</span>
                <span>9. Completing the KYC process does not guarantee access to services and remains subject to platform approval.</span>
                <span>10. By agreeing, the user acknowledges they have read, understood, and accepted these terms.</span>
            </p>
            <Checkbox
                checked={acceptedtnc}
                onChange={onChange}
            >
                I have read and accepted the terms and conditions
            </Checkbox>
            <div>
                {acceptedtnc && <WebcamCapture />}
            </div>
            <div className="flex place-content-center pb-6">
                {prev && (
                    <Button
                        type="default"
                        size="large"
                        onClick={prev}
                        className="mr-4"
                        style={{ borderRadius: "8px" }}
                    >
                        Previous
                    </Button>
                )}
                <Button
                    type="primary"
                    disabled={!acceptedtnc || !storeValues?.users_selfie}
                    size="large"
                    htmlType="submit"
                    style={{ borderRadius: "8px" }}
                    onClick={next}
                >
                    Save & Next
                </Button>
            </div>
        </div >

    )
}