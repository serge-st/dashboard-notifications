import { FC, ReactNode } from 'react';
import './Modal.css';

export interface ModalProps {
    isOpen: boolean;
    toggle: () => void;
    children?: ReactNode;
}

const Modal: FC<ModalProps> = ({children, isOpen, toggle}) => {
    return (
        <>
            {isOpen ?
                <div className="modal_overlay" onClick={toggle}>
                    <div className="modal_container" onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
                : null
            }        
        </>
    );
};

export default Modal;