'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const cuisines = ['Italian', 'Mexican', 'Chinese']

export default function SearchPage() {
    const [query, setQuery] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [maxTime, setMaxTime] = useState<number | string>('')
    const router = useRouter()

    const isButtonEnabled = query || cuisine || maxTime

    const handleSearch = () => {
        const queryParams = new URLSearchParams({
            query,
            cuisine,
            maxReadyTime: maxTime.toString(),
        })
        router.push(`/recipes?${queryParams.toString()}`)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-indigo/90 dark:bg-indigo/80 p-6 text-white">
                    <h1 className="text-2xl font-bold text-center">
                        Recipe Finder
                    </h1>
                    <p className="text-center mt-2 text-white/80">
                        Discover delicious recipes for any occasion
                    </p>
                </div>

                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="recipe-search"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            What would you like to cook?
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                id="recipe-search"
                                type="text"
                                placeholder="Pasta, salad, chicken..."
                                className="w-full pl-10 pr-4 py-3 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary transition duration-150"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="cuisine-select"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Cuisine Type
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <select
                                id="cuisine-select"
                                className="w-full pl-10 pr-4 py-3 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary transition duration-150 appearance-none"
                                value={cuisine}
                                onChange={(e) => setCuisine(e.target.value)}
                            >
                                <option value="">All Cuisines</option>
                                {cuisines.map((cuisineOption) => (
                                    <option
                                        key={cuisineOption}
                                        value={cuisineOption}
                                    >
                                        {cuisineOption}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="max-time"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Maximum Preparation Time
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
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
                            </div>
                            <input
                                id="max-time"
                                placeholder="30"
                                className="w-full pl-10 pr-4 py-3 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary transition duration-150"
                                value={maxTime}
                                onChange={(e) => setMaxTime(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <span className="text-gray-500 dark:text-gray-400">
                                    minutes
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        className={`w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg shadow transition duration-150 flex items-center justify-center ${!isButtonEnabled && 'opacity-80 cursor-not-allowed'}`}
                        onClick={handleSearch}
                        disabled={!isButtonEnabled}
                    >
                        <span>Find Recipes</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
