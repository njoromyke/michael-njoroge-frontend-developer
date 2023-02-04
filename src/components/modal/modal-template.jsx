/* eslint-disable react/prop-types */
import { Modal } from 'react-bootstrap'

export default function ModalTemplate ({
  handleClose,
  modalFooter,
  title,
  headerButton,
  children,
  size,
  centered,
  showCloseBtn,
  className
}) {
  return (
    <Modal
      show={true}
      onHide={handleClose}
      centered={centered}
      size={size}
      className={className}
    >
      <Modal.Header closeButton={showCloseBtn}>
        <Modal.Title className='text-center'>{title}</Modal.Title>
        {headerButton}
      </Modal.Header>
      <div className='modal-body'>{children}</div>
      {modalFooter && (
        <div className='justify-content-center modal-footer'>{modalFooter}</div>
      )}
    </Modal>
  )
}
