interface RecipeDetailsProps {
    getRecipeDetails: {
        id: number;
        name: string;
        image: string;
        rating: number;
        cuisine: string;
    }; // Đảm bảo rằng kiểu dữ liệu này khớp với API response
}

export default function RecipeDetailsItem({ getRecipeDetails }: RecipeDetailsProps) {
    return (
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipe Details</h2>
            <div className="bg-white rounded-md overflow-hidden shadow-md">
                <img
                    src={getRecipeDetails.image}
                    alt={getRecipeDetails.name}
                    className="h-full w-full object-cover object-top"
                />
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{getRecipeDetails.name}</h3>
                    <p className="text-lg text-gray-600">Rating: {getRecipeDetails.rating}</p>
                    <p className="text-lg text-gray-600">Cuisine: {getRecipeDetails.cuisine}</p>
                </div>
            </div>
        </div>
    );
}
