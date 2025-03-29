/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

type Recipe = {
    id: number
    title: string
    image: string
}

type RecipesPageProps = {
    searchParams: {
        query: string
        cuisine: string
        maxReadyTime: string
    }
}

const RecipesPage = async ({ searchParams }: RecipesPageProps) => {
    const { query, cuisine, maxReadyTime } = await searchParams

    const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}&apiKey=${process.env.SPOONACULAR_API_KEY}`
    )
    const data = await response.json()

    const recipes = data.results || []

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                    {query ? `Recipes for "${query}"` : 'All Recipes'}
                    {cuisine && ` - ${cuisine} Cuisine`}
                    {maxReadyTime &&
                        ` - Ready in ${maxReadyTime} minutes or less`}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {recipes.length > 0 ? (
                        recipes.map((recipe: Recipe) => (
                            <div
                                key={recipe.id}
                                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="relative">
                                    <img
                                        src={recipe.image || '/placeholder.svg'}
                                        alt={recipe.title}
                                        className="w-full h-48 object-cover rounded-md transition-transform duration-500 hover:scale-105"
                                    />
                                    {maxReadyTime && (
                                        <div className="absolute bottom-2 left-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-md">
                                            ≤ {maxReadyTime} min
                                        </div>
                                    )}
                                </div>
                                <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
                                    {recipe.title}
                                </h3>
                                <Link
                                    href={`/recipes/${recipe.id}`}
                                    className="mt-2 inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                                >
                                    <span>View Recipe</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
                            No recipes found. Try adjusting your search
                            criteria.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RecipesPage
