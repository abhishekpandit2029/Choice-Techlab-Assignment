"use client"

import { IStepProps } from "@/interface/main";
import { useKYCStore } from "@/zustand/store";
import { Button } from "antd";
import Image from "next/image";

export default function ReviewSubmit({ prev }: IStepProps) {
    const { form: storeValues } = useKYCStore();
    return (
        <div className="flex flex-col space-y-6">


            <div className="flex flex-col space-y-6">
                <p className="text-xl font-bold">Personal Details</p>
                <div>
                    {storeValues?.users_selfie && <Image src={storeValues?.users_selfie} alt={"users_selfie"} className="rounded-lg" width={200} height={200} />}
                </div>
                <div className="flex flex-col md:gap-6 md:flex-row md:justify-between w-full">
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">First Name</p>
                            <p className="text-base">{storeValues?.first_name || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Gender</p>
                            <p className="text-base">{storeValues?.gender || "N/A"}</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">Middle Name</p>
                            <p className="text-base">{storeValues?.middle_name || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Date of Birth</p>
                            <p className="text-base">{storeValues?.dob || "N/A"}</p>
                        </div>

                    </div>
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">Last Name</p>
                            <p className="text-base">{storeValues?.last_name || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Place of Birth</p>
                            <p className="text-base">{storeValues?.birth_place || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-6">
                <p className="text-xl font-bold">Contact Details</p>
                <div className="flex flex-col md:gap-6 md:flex-row md:justify-between w-full">
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">Primary Address</p>
                            <p className="text-base">{storeValues?.primary_address || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Secondary Address</p>
                            <p className="text-base">{storeValues?.secondary_address || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Alternate Address</p>
                            <p className="text-base">{storeValues?.alternate_address || "N/A"}</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">Primary Contact Number</p>
                            <p className="text-base">{storeValues?.primary_contact_number || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Primary Email Address</p>
                            <p className="text-base">{storeValues?.primary_email_address || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Communication Preference</p>
                            <p className="text-base">{storeValues?.communication_preference || "N/A"}</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">Alternate Email Address</p>
                            <p className="text-base">{storeValues?.alternate_email_address || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Alternate Contact Number</p>
                            <p className="text-base">{storeValues?.alternate_contact_number || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Preferred Contact Time</p>
                            <p className="text-base">{storeValues?.preferred_contact_time || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-6">
                <p className="text-xl font-bold">Identity Details</p>
                <div className="flex flex-col md:gap-6 md:flex-row md:justify-between w-full">
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">Government ID</p>
                            <p className="text-base">{storeValues?.government_id || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Alternate Government ID</p>
                            <p className="text-base">{storeValues?.alternate_government_id || "N/A"}</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">Government ID Number</p>
                            <p className="text-base">{storeValues?.government_id_number || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Alternate Government ID Number</p>
                            <p className="text-base">{storeValues?.alternate_government_id_number || "N/A"}</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">Government ID Issue Date</p>
                            <p className="text-base">{storeValues?.government_id_issue_date || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Alternate Government ID Issue Date</p>
                            <p className="text-base">{storeValues?.alternate_government_id_issue_date || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-6">
                <p className="text-xl font-bold">Bank Details</p>
                <div className="flex flex-col md:gap-6 md:flex-row md:justify-between w-full">
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p className="text-sm">Account Holder Name</p>
                            <p className="text-base">{storeValues?.account_holder_name || "N/A"}</p>
                        </div>
                        <div>
                            <p>Bank Address</p>
                            <p>{storeValues?.bank_address || "N/A"}</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p>Bank Name</p>
                            <p>{storeValues?.bank_name || "N/A"}</p>
                        </div>
                        <div>
                            <p>Account Number</p>
                            <p>{storeValues?.account_nmber || "N/A"}</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:gap-6">
                        <div>
                            <p>Branch Name</p>
                            <p>{storeValues?.branch_name || "N/A"}</p>
                        </div>
                        <div>
                            <p>IFSC Code</p>
                            <p>{storeValues?.ifsc_code || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-6">
                <p className="text-xl font-bold">Bank Details</p>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col md:gap-6 md:flex-row md:justify-between w-full">
                        <div className="w-full flex flex-col space-y-3">
                            <p>Address Proof : {storeValues?.select_address_proof || "N/A"}</p>
                            {storeValues?.address_proof && <Image src={storeValues?.address_proof} alt={"address_proof"} width={200} height={200} />}
                        </div>
                        <div className="w-full flex flex-col space-y-3">
                            <p>Identity Proof : {storeValues?.select_identity_proof || "N/A"}</p>
                            {storeValues?.identity_proof && <Image src={storeValues?.identity_proof} alt={"identity_proof"} width={200} height={200} />}
                        </div>
                        <div className="w-full flex flex-col space-y-3">
                            <p>Bank Proff</p>
                            {storeValues?.income_proof ? <Image src={storeValues?.income_proof} alt={"income_proof"} width={200} height={200} /> : "N/A"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex place-content-center">
                {prev && (
                    <Button type="default" size="large" onClick={prev} className='mr-4' style={{ borderRadius: '8px' }}>
                        Previous
                    </Button>
                )}
                <Button type="primary" size="large" htmlType="submit" style={{ borderRadius: '8px' }}>
                    Submit
                </Button>
            </div>

        </div>
    )
}