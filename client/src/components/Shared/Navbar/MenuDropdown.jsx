import { AiOutlineMenu } from "react-icons/ai";
import toast from "react-hot-toast";
import Avatar from "./Avatar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import HostModal from "../../Modal/HostRequestModal";
import { becomeHost } from "../../../api/auth";

const MenuDropdown = () => {
  const { user, role, logOut ,setRole} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  console.log(role);
  //~modal states
  const [modal, setModal] = useState(false);

  const modalHandler = (email) => {
    becomeHost(email).then((data) => {
      console.log(data);
      toast.success("You are host now. Post rooms!");
      setRole('host')
      closeModal();
    });
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Aircnc btn */}
        <div className="hidden md:block text-sm font-semibold py-3 px-6 rounded-full transition cursor-pointer">
          {!role && (
            <button
              className="cursor-pointer hover:bg-neutral-100 "
              onClick={() => setModal(true)}
              disabled={!user}
            >
              AirCNC your home
            </button>
          )}
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>

                <div
                  onClick={() => {
                    logOut()
                    setRole(null)
                  }}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      <HostModal
        closeModal={closeModal}
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={modal}
      ></HostModal>
    </div>
  );
};

export default MenuDropdown;
