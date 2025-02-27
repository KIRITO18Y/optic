import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const PasswordModel = ({onClose}: { onClose: () => void }) => {
    return (
        <div className=" fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold">Cambiar Contraseña</h2>
                <form className="bg-white p-9 w-full max-w-md grid gap-2">
                    <div className="mb-2">
                        <label
                            className="block text-gray-600 text-sm font-bold mb-2"
                            htmlFor="new-password">
                            Nueva contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-5 py-2 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="confirmPasswordTxt">
                            Confirmar contraseña
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            className="w-full px-5 py-2 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-cente justify-betweenr ">
                        <button
                            className="bg-blue-500 text-white px-4 p-2 py-2 rounded-md shadow-md flex items-center mr-4 hover:bg-blue-400">
                            <FontAwesomeIcon icon={faKey} className="mr-2" />Cambiar contraseña
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};




