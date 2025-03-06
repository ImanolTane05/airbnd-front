'use client';

import Modal from "./Modals";
import { useState } from 'react';
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";


const LoginModal = () => {
    const LoginModal = useLoginModal()

    const content = (
        <>
        

        <form className="space-y-4">
            <input  placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border-gray-300 rounded-xl" />

            <input  placeholder="Your password" type="password" className="w-full h-[54px] px-4 border-gray-300 rounded-xl" />

            <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                The error message
            </div>

            <CustomButton
                label="submit"
                onClick={() => console.log('Test')}
            />
        </form>
        </>



    )

    return (
        <Modal
            isOpen={LoginModal.isOpen}
            close={LoginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;