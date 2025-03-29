type RecipeDetails = {
    title: string
    ingredients: string[]
    preparationTime: number
    servings: number
    summary: string
}

type RecipeDetailsPageProps = {
    params: { id: string }
}
type Ingredient = {
    id: number
    name: string
    original: string
}

const RecipeDetailsPage = async ({ params }: RecipeDetailsPageProps) => {
    const { id } = await params

    const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
    )
    const data = await response.json()

    const recipe: RecipeDetails = {
        title: data.title,
        ingredients: data.extendedIngredients.map(
            (ing: Ingredient) => ing.original
        ),
        preparationTime: data.readyInMinutes,
        servings: data.servings,
        summary: data.summary,
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        {recipe.title}
                    </h1>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center px-4 py-2 bg-indigo/10 dark:bg-indigo/20 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-primary mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-200">
                                {recipe.preparationTime} minutes
                            </span>
                        </div>

                        <div className="flex items-center px-4 py-2 bg-indigo/10 dark:bg-indigo/20 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-primary mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-200">
                                {recipe.servings} servings
                            </span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                            Ingredients
                        </h3>
                        <ul className="space-y-2 pl-5">
                            {recipe.ingredients.map(
                                (ingredient: string, idx: number) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo/20 text-primary mr-3 flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            {ingredient}
                                        </span>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                            Description
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {recipe.summary}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetailsPage
