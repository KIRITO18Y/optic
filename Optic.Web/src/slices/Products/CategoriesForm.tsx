import { Bar } from "../../shared/components/Progress/Bar";
import { useCategories } from "./useProducts"

export const CategoriesForm = () => {
    const { categories, queryCategories } = useCategories();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target;
        if (form instanceof HTMLFormElement) {
            const formData = new FormData(form);
            const categorie = Object.fromEntries(formData.entries())
            const { name } = categorie;
            console.log(name);
            form.reset();

            // if (categories) {
            //     const categoriesIds = categories.map((category) => category.id);
            //     console.log(categoriesIds);
            // }
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    return (
        <>

            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Nombre
                    </label>
                    <input
                        required
                        name="name"
                        placeholder="Categoria"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button className=""> Agregar</button>
                </div>
            </form>
            {
                queryCategories.isLoading && <Bar Title="Cargando..." />
            }
            <div>
                <h3>Categorias</h3>
                <div className="flex flex-col">
                    {categories?.map((category) => (
                        <div key={category.id} className="flex flex-row">
                            <input type="checkbox" name="id" value={category.id} onChange={handleChange} />
                            <span className="ml-2">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}