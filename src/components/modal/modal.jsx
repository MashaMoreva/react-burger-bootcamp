import { createPortal } from "react-dom";
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../modal-overlay/modal-overlay.jsx';

export function Modal({children}) {
    return createPortal(
        <>
            <ModalOverlay />
            <div className={styles.modal}>
                <button className={styles.closeButton}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </>,
        document.getElementById('root')
    )
}