"use client"

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Form, Input } from 'antd';
import { useKYCStore } from '@/zustand/store';
import { SelectCommunicationPreference, SelectGender, SelectGovernmentID, SelectPreferredContactTime } from '@/general/input';
import { IKYCForm, IStepProps } from '@/interface/main';

export default function PersonalInfo({ next }: IStepProps) {
    const [form] = Form.useForm();
    const { form: storeValues, setFields } = useKYCStore();
    const [governmentID, setGovernmentID] = useState<string | undefined | null>(null);
    const [alternateGovernmentID, setAlternateGovernmentID] = useState<string | undefined | null>(null);

    useEffect(() => {
        form.setFieldsValue(storeValues);
    }, [form, storeValues]);

    const handleSubmit = (values: IKYCForm) => {
        setFields({
            ...values,
        });
        if (next) next();
    };

    const filteredAlternateGovernmentID = governmentID === alternateGovernmentID ? null : alternateGovernmentID

    return (
        <Form
            form={form}
            name="financial_kyc_form"
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
            initialValues={storeValues}
        >
            <div className="flex flex-col space-y-6 w-full">
                <p className="text-xl font-bold">Personal Details</p>
                <div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="First Name"
                            name="first_name"
                            className="w-full"
                            rules={[{ required: true, message: 'Please Enter Your First Name!' }]}
                        >
                            <Input size="large" placeholder="Enter Your First Name" style={{ borderRadius: '8px' }} />
                        </Form.Item>
                        <Form.Item
                            label="Middle Name"
                            name="middle_name"
                            className="w-full"
                            rules={[{ required: true, message: 'Please Enter Your Middle Name!' }]}
                        >
                            <Input size="large" placeholder="Enter Your Middle Name" style={{ borderRadius: '8px' }} />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="last_name"
                            className="w-full"
                            rules={[{ required: true, message: 'Please Enter Your Last Name!' }]}
                        >
                            <Input size="large" placeholder="Enter Your Last Name" style={{ borderRadius: '8px' }} />
                        </Form.Item>
                    </div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Gender"
                            name="gender"
                            className="w-full"
                            rules={[{ required: false, message: 'Please Select Your Gender!' }]}
                        >
                            <SelectGender />
                        </Form.Item>
                        <Form.Item
                            label="Date of Birth"
                            name="dob"
                            className="w-full"
                            rules={[{ required: true, message: 'Please Select Your Date of Birth!' }]}
                        >
                            <Input size="large" placeholder="Enter Your Date of Birth" style={{ borderRadius: '8px' }} />
                        </Form.Item>
                        <Form.Item
                            label="Place of Birth"
                            name="birth_place"
                            className="w-full"
                            rules={[{ required: true, message: 'Please Enter Your Place of Birth!' }]}
                        >
                            <Input size="large" placeholder="Enter Your Place of Birth" style={{ borderRadius: '8px' }} />
                        </Form.Item>
                    </div>
                </div>
            </div>

            <div className='flex flex-col space-y-6'>
                <p className='text-xl font-bold'>Contact Details</p>
                <div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Primary Address"
                            name="primary_address"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Primary Address!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Primary Address" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Primary Email Address"
                            name="primary_email_address"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Primary Email Address!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Primary Email Address" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Alternate Email Address"
                            name="alternate_email_address"
                            className='w-full'
                            rules={[{ required: false, message: 'Please Enter Your Alternate Email Address!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Alternate Email Address" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                    </div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Secondary Address"
                            name="secondary_address"
                            className='w-full'
                            rules={[{ required: false, message: 'Please Enter Your Secondary Address!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Secondary Address" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Primary Contact Number"
                            name="primary_contact_number"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Primary Contact Number!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Primary Contact Number" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Alternate Contact Number"
                            name="alternate_contact_number"
                            className='w-full'
                            rules={[{ required: false, message: 'Please Enter Your Alternate Contact Number!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Alternate Contact Number" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                    </div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Alternate Address"
                            name="alternate_address"
                            className='w-full'
                            rules={[{ required: false, message: 'Please Enter Your Alternate Address!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Alternate Address" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Communication Preference"
                            name="communication_preference"
                            className='w-full'
                            rules={[{ required: true, message: 'Please enter Communication Preference!' }]}
                        >
                            <SelectCommunicationPreference />
                        </Form.Item>
                        <Form.Item
                            label="Preferred Contact Time"
                            name="preferred_contact_time"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Preferred Contact Time!' }]}
                        >
                            <SelectPreferredContactTime />
                        </Form.Item>
                    </div>
                </div>
            </div>

            <div className='flex flex-col space-y-6 w-full'>
                <p className='text-xl font-bold'>Identity Details</p>
                <div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Government ID"
                            name="government_id"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Government ID!' }]}
                        >
                            <SelectGovernmentID defaultValue={storeValues?.government_id || governmentID} onChange={(value) => setGovernmentID(value)} placeholderName="Select Government ID" />
                        </Form.Item>
                        <Form.Item
                            label="Government ID Number"
                            name="government_id_number"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Government ID number!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Government ID number" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Government ID Issue Date"
                            name="government_id_issue_date"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Government ID Issue Date!' }]}
                        >
                            <Input size="large" placeholder="Enter Your Government ID Issue Date" style={{ borderRadius: '8px' }} />
                        </Form.Item>
                    </div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Alternate Government ID"
                            name="alternate_government_id"
                            className='w-full'
                            rules={[{ required: false, message: 'Please Enter Your Alternate Government ID!' }]}
                        >
                            <SelectGovernmentID defaultValue={storeValues?.alternate_government_id || filteredAlternateGovernmentID} filteredValue={governmentID} placeholderName="Select Alternate Government ID" onChange={(value) => setAlternateGovernmentID(value)} />
                        </Form.Item>
                        <Form.Item
                            label="Alternate Government ID Number"
                            name="alternate_government_id_number"
                            className='w-full'
                            rules={[{ required: false, message: 'Please Enter Your Alternate Government ID Number!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Alternate Government ID number" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Alternate Government ID Issue Date"
                            name="alternate_government_id_issue_date"
                            className='w-full'
                            rules={[{ required: false, message: 'Please Enter Your Alternate Government ID Issue Date!' }]}
                        >
                            <Input size="large" placeholder="Enter Your First Name" style={{ borderRadius: '8px' }} />
                        </Form.Item>
                    </div>
                </div>
            </div>

            <div className='flex flex-col space-y-6 mb-4'>
                <p className='text-xl font-bold'>Bank Details</p>
                <div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Account Holder Name"
                            name="account_holder_name"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Account Holder Name!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Account Holder Name" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Bank Name"
                            name="bank_name"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Bank Name!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Bank Name" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Branch Name"
                            name="branch_name"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Branch Name!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Alternate Branch Name" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                    </div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Bank Address"
                            name="bank_address"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Bank Address!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Bank Address" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="Account Number"
                            name="account_nmber"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your Account Number!' }]}
                        >
                            <Input size='large' placeholder="Enter Your Account Number" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                        <Form.Item
                            label="IFSC Code"
                            name="ifsc_code"
                            className='w-full'
                            rules={[{ required: true, message: 'Please Enter Your IFSC Code!' }]}
                        >
                            <Input size='large' placeholder="Enter Your IFSC Code" style={{ borderRadius: "8px" }} />
                        </Form.Item>
                    </div>
                </div>
            </div>

            <Form.Item className="flex place-content-center">
                <Button type="primary" size="large" htmlType="submit" style={{ borderRadius: '8px' }}>
                    Save & Next
                </Button>
            </Form.Item>
        </Form >
    );
};