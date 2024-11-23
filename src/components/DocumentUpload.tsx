"use client"

import React, { useEffect, useState } from 'react';
import { Button, Typography, Upload } from 'antd';
import { Form, Select } from 'antd';
import { IKYCForm, IUploadedDocsType } from '@/interface/main';
import { useKYCStore } from '@/zustand/store';
import { SelectAddressIncomeProof, SelectIncomeProof } from '@/general/input';

export default function DocumentUpload() {
    const [form] = Form.useForm();
    const { form: storeValues, setFields } = useKYCStore();
    const [uploadedDocs, setUploadedDocs] = useState<IUploadedDocsType>({
        address_proof: null,
        identity_proof: null,
        income_proof: null,
    });

    useEffect(() => {
        form.setFieldsValue(storeValues);
    }, [form, storeValues]);

    const handleUpload = (field: keyof IUploadedDocsType, file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            setUploadedDocs((prev) => ({
                ...prev,
                [field]: {
                    name: file.name,
                    url: reader.result as string,
                },
            }));
        };
        reader.readAsDataURL(file);
        return false;
    }

    return (
        <Form
            name="financial_kyc_doc_form"
            layout="vertical"
            onFinish={(values: IKYCForm) => setFields({
                address_proof: uploadedDocs?.address_proof?.url,
                identity_proof: uploadedDocs?.identity_proof?.url,
                income_proof: uploadedDocs?.income_proof?.url,
                select_address_proof: values?.select_address_proof,
                select_identity_proof: values?.select_identity_proof
            })}
            requiredMark={false}
            initialValues={storeValues}
        >
            <div className="flex flex-col space-y-6">
                <p className="text-xl font-bold">Upload Data</p>
                <div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Select Address Proof"
                            name="select_address_proof"
                            className="w-full"
                            rules={[{ required: true, message: 'Please Enter Your Select Address Proof!' }]}
                        >
                            <SelectAddressIncomeProof placeholderName="Select Address Proof" />
                        </Form.Item>
                        <Form.Item
                            label="Select Identity Proof"
                            name="select_identity_proof"
                            className="w-full"
                            rules={[{ required: true, message: 'Please Enter Your Select Identity Proof!' }]}
                        >
                            <SelectAddressIncomeProof placeholderName="Select Identity Proof" />
                        </Form.Item>
                        <Form.Item
                            label="Select Income Proof"
                            name="select_income_proof"
                            className="w-full"
                            rules={[{ required: true, message: 'Please Enter Your Select Income Proof!' }]}
                        >
                            <SelectIncomeProof />
                        </Form.Item>
                    </div>
                    <div className="flex flex-col md:gap-6 md:flex-row w-full">
                        <Form.Item
                            label="Upload Address Proof"
                            name="address_proof"
                            className="w-full"
                            rules={[{ required: true, message: "Please upload your Address Proof!" }]}
                        >
                            <Upload
                                beforeUpload={(file) => handleUpload("address_proof", file)}
                                showUploadList={false}
                            >
                                <div className='flex flex-col place-content-start space-y-2'>
                                    <Button size='large' style={{ borderRadius: "8px" }} >Click to Upload Address Proof</Button>
                                    {uploadedDocs.address_proof?.name && (
                                        <Typography.Text className='ml-4'>
                                            Uploaded: {uploadedDocs.address_proof?.name}
                                        </Typography.Text>
                                    )}
                                </div>
                            </Upload>

                        </Form.Item>
                        <Form.Item
                            label="Upload Identity Proof"
                            name="identity_proof"
                            className="w-full"
                            rules={[{ required: true, message: "Please upload your Identity Proof!" }]}
                        >
                            <Upload
                                beforeUpload={(file) => handleUpload("identity_proof", file)}
                                showUploadList={false}
                            >
                                <div className='flex flex-col place-content-start space-y-2'>
                                    <Button size='large' style={{ borderRadius: "8px" }} className='w-full'>Click to Upload Identity Proof</Button>
                                    {uploadedDocs.identity_proof?.name && (
                                        <Typography.Text className='ml-4'>
                                            Uploaded: {uploadedDocs.identity_proof?.name}
                                        </Typography.Text>
                                    )}
                                </div>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            label="Upload Income Proof"
                            name="income_proof"
                            className="w-full"
                            rules={[{ required: true, message: "Please upload your Income Proof!" }]}
                        >
                            <Upload
                                beforeUpload={(file) => handleUpload("income_proof", file)}
                                showUploadList={false}
                            >
                                <Button size='large' className='w-full' style={{ borderRadius: "8px" }} >Click to Upload Income Proof</Button>
                            </Upload>
                            {uploadedDocs.income_proof?.name && (
                                <Typography.Text className='ml-4'>
                                    Uploaded: {uploadedDocs.income_proof?.name}
                                </Typography.Text>
                            )}
                        </Form.Item>
                    </div>
                </div>
            </div>

            <Form.Item className="flex justify-end">
                <Button type="primary" size="large" htmlType="submit" style={{ borderRadius: '8px' }}>
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};