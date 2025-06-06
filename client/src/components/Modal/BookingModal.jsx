import { Dialog, Transition } from "@headlessui/react";
import { format } from "date-fns";
import { Fragment } from "react";

const BookingModal = ({ modalHandler, closeModal, isOpen, bookingInfo }) => {
  return (
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Reserve
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="bold">Room</span>: {bookingInfo.title}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="bold">Location</span>:{" "}
                    {bookingInfo.location}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="bold">Guest</span>:{" "}
                    {bookingInfo.guest.name}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="bold">From</span>:{" "}
                    {format(new Date(bookingInfo.from), "PP")} - To:{" "}
                    {format(new Date(bookingInfo.to), "PP")}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="bold">Price</span>: $ {bookingInfo.price}
                  </p>
                </div>
                <hr className="mt-8 " />
                <div className="flex mt-2 justify-around">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={modalHandler}
                  >
                    Pay ${bookingInfo.price}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingModal;
