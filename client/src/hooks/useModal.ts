import { useState } from "react";
import { ModalProps } from "../components/Modal/Modal";

type UseModal = Omit<ModalProps, "children">;

const useModal = (): UseModal => {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    return {
        isOpen,
        toggle,
    };
}

export default useModal;