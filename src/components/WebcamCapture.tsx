import { Button, Modal } from "antd";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { TbLivePhotoFilled } from "react-icons/tb";
import { useKYCStore } from "@/zustand/store";
import clsx from "clsx";

export default function WebcamCapture() {
    const { form: storeValues, setFields } = useKYCStore();
    const webcamRef = useRef<Webcam>(null);
    const [capturedPhoto, setCapturedPhoto] = useState<string | null>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (capturedPhoto) {
            setFields({ users_selfie: capturedPhoto });
        }
    }, [capturedPhoto, setFields]);

    const handleCancel = () => {
        setIsModalOpen(false);
        capturedPhoto
    };

    const capturePhoto = () => {
        if (webcamRef.current) {
            const photo = webcamRef.current?.getScreenshot();
            setCapturedPhoto(photo);
        }
    };

    const handleSave = () => {
        setIsModalOpen(false)
    }

    const retakePhoto = () => {
        setCapturedPhoto(null);
        if (capturedPhoto) {
            setFields({ users_selfie: null });
        }
    };

    return (
        <>
            <Button size="large" style={{ borderRadius: '8px' }} onClick={() => setIsModalOpen(true)}>
                <p className="flex items-center gap-x-2">  <TbLivePhotoFilled className={clsx("text-lg", storeValues?.users_selfie ? "text-green-500" : "text-red-500")} /> Capture Live Selfie</p>
            </Button>
            <Modal title="Take Selfie & Upload" open={isModalOpen} onCancel={handleCancel} footer={<div className="flex space-x-4 justify-end items-center mt-6">
                <Button type="primary" size="large" style={{ borderRadius: '8px' }} onClick={capturedPhoto ? handleSave : handleCancel}>
                    {capturedPhoto ? "Save" : "Cancel"}
                </Button>

                <Button type="primary" size="large" style={{ borderRadius: '8px' }} onClick={!capturedPhoto ? capturePhoto : retakePhoto}>
                    {!capturedPhoto ? "Capture" : "Retake"}
                </Button>
            </div>}>
                <div>
                    <div>
                        {!capturedPhoto ? (
                            <Webcam
                                audio={false}
                                mirrored
                                ref={webcamRef}
                                className="rounded-lg"
                                screenshotFormat="image/jpeg"
                            />
                        ) : (
                            <Image
                                src={capturedPhoto}
                                className="rounded-lg"
                                alt="Captured"
                                width={1000}
                                height={1000}
                            />
                        )}
                    </div>
                </div>
            </Modal>
        </>
    );
};