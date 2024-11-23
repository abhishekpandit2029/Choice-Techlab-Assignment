"use client"

import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import PersonalInfoSection from './PersonalInfoSection';
import DocumentUpload from './DocumentUpload';
import ReviewSubmit from './ReviewSubmit';

const steps = [
    {
        title: 'Personal Information',
        content: <PersonalInfoSection />,
    },
    {
        title: 'Document Upload',
        content: <DocumentUpload />,
    },
    {
        title: 'Review and Submit',
        content: <ReviewSubmit />,
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
                <Steps current={current} items={items} className='mb-4' />
                <div style={contentStyle}>{steps[current].content}</div>
                <div className='flex place-content-center'>
                    {current > 0 && (
                        <Button size='large' style={{ borderRadius: '8px' }} className='mr-4' onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button size='large' style={{ borderRadius: '8px' }} className='mr-4' type="primary" onClick={() => next()}>
                            Save & Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button size='large' style={{ borderRadius: '8px' }} type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
