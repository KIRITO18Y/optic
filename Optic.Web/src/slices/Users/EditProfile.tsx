import { faKey, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { PasswordModel } from "./PasswordModel";
import useUserContext from "../../shared/context/useUserContext";
import { ProfileImageModal } from "./ProfileImageModal";
import ButtonSave from "../../shared/components/Buttons/ButtonSave";
export const EditProfile = () => {
    const { user } = useUserContext();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    return (
        <div className=" flex justify-center items-center bg-gray-200">
            <div className="bg-white py-9 rounded-lg p-4 shadow-md mx-5" >
                <div className="flex justify-center mt-4">
                    <div className="relative cursor-pointer  hover:transition-all hover:scale-110 " onClick={() => setIsOpenProfile(true)}>
                        <span className="absolute bottom-0 right-0 bg-white border border-solid border-s bg-opacity-25  block w-6 h-6 rounded-full text-center" >
                            <FontAwesomeIcon icon={faPencil} className="text-blue-500" />
                        </span>

                        <img
                            src={`${import.meta.env.BASE_URL}images/avatars/bigSmile-${user?.idAvatar}.svg`}
                            alt="logo"
                            className="min-w-16 rounded-full w-20 h-20"
                        />
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-1 flex justify-center">Editar Usuario</h2>
                <form   className=" grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 p-8">
                    <div>
                        <label className="block text-gray-600 text-sm font-bold mb-2">Nombres</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={user?.firstName}
                                  className=" w-full px-5 py-2 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>
                    <div>
                        <label htmlFor="lastNameTxt" className="block text-gray-600 text-sm font-bold mb-2">Apellidos</label>
                        <div className="relative">
                            <input type="lastNameTxt"
                                value={user?.lastName}
                            
                                className="w-full px-1 py-2 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="Email" className="block text-gray-600 text-sm font-bold mb-1 ">Email</label>
                        <div className="relative p-1">
                            <input
                                type="email"
                                value={user?.email}
                                
                                className="w-full px-1 py-2 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 flex justify-start mt-7">
                            <ButtonSave />
                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="bg-purple-500 text-white px-4 p-2 py-2 rounded-md shadow-md flex items-center mr-4 hover:bg-purple-400">
                            <FontAwesomeIcon icon={faKey} className="mr-2" />Cambiar contraseña
                        </button>
                    </div>
                </form>
            </div>
            {isOpen && <PasswordModel onClose={() => setIsOpen(false)} />}
            {isOpenProfile && <ProfileImageModal onClose={() => setIsOpenProfile(false)} />}
        </div>
    )
};