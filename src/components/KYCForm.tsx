"use client"

import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import PersonalInfoSection from './PersonalInfoSection';
import DocumentUpload from './DocumentUpload';
import ReviewSubmit from './ReviewSubmit';
import TermsConditions from './Terms&Conditions';
import { IStepProps } from '@/interface/main';

const steps = [
    {
        title: 'Personal Information',
        content: ({ next }: IStepProps) => <PersonalInfoSection next={next} />,
    },
    {
        title: 'Document Upload',
        content: ({ next, prev }: IStepProps) => <DocumentUpload next={next} prev={prev} />,
    },
    {
        title: 'Terms and Conditions',
        content: ({ next, prev }: IStepProps) => <TermsConditions next={next} prev={prev} />,
    },
    {
        title: 'Review and Submit',
        content: ({ prev }: IStepProps) => <ReviewSubmit prev={prev} />,
    },
];


export default function KYCForm() {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle: React.CSSProperties = {
        lineHeight: '1.5',
        textAlign: 'left',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        padding: 24,
        marginTop: 16,
    };

    return (
        <div className='flex flex-col space-y-8'>
            <p className='font-bold text-3xl'>Complete Choice Techlab KYC Process</p>
            <div className='flex flex-col space-y-6'>
                <Steps current={current} items={items} />
                <div style={contentStyle}>
                    {typeof steps[current].content === 'function'
                        ? steps[current].content({ next, prev })
                        : steps[current].content}
                </div>
            </div>
        </div>
    );
}
