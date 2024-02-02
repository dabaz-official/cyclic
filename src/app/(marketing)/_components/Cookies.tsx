import { Button } from '@cyclic/components/ui/button'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Cookies() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Button
        type="button"
        size="tn"
        onClick={openModal}
        className="flex-none text-sm"
      >
        Learn more
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-neutral-900"
                  >
                    Yes, we don&rsquo;t use cookies currently.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-neutral-500">
                      But we may use strictly necessary cookies in the future, only for our site to function.
                    </p>
                  </div>

                  <div className="mt-4">
                    <Button
                      type="button"
                      size="sm"
                      className="inline-flex justify-center text-sm"
                      onClick={closeModal}
                    >
                      Got it
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}