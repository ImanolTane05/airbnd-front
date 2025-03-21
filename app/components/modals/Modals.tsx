'use client';

import { useCallback, useEffect, useState } from 'react';

interface ModalProps {
    label: string;
    close: () => void;
    content:React.ReactElement;
    isOpen: boolean;
}

const Modal:React.FC<ModalProps> = ({
    label,
    content,
    isOpen,
    close
}) => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    },[isOpen])

    const handClose = useCallback(() => {
        setShowModal(false);

        setTimeout(() => {
            close();
        },300)
        
    },[close])

    if(!isOpen){
        return null;
    }
    return(
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
            <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto">
                <div className={`traslate duration-600 h-full ${showModal ? 'translate-y-0 opacity-100':'translate-y-full opacity-10'}`}>
                    <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">

                        <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                            <div 
                            onClick={handClose}
                            className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>

                            <h2 className="text-lg font-bold">{label}</h2>
                        </header>
                        <section className="p-6">
                            {content}
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Modal;