import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { classnames } from 'tools/common'

export interface BaseModalProps {
  visible?: boolean
  onClose: () => void
  modalClassName?: string
  className?: string
}

const BaseModal: FC<BaseModalProps> = ({
  children,
  visible = false,
  onClose,
  modalClassName,
  className,
}) => {
  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 bg-black bg-opacity-25"
        onClose={onClose}
      >
        <div className="flex min-h-screen flex-col items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={classnames(
                'inline-block w-full transform overflow-hidden rounded-medium bg-white align-middle shadow-xl transition-all',
                className,
              )}
            >
              <div className={modalClassName}>{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default BaseModal
