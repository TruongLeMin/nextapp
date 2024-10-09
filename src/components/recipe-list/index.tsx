import {
    Card,
    CardContent,
} from "@/components/ui/card";
import Link from "next/link";

interface Recipe {
    id: number;
    name: string;
    image: string;
    rating: number;
    cuisine: string;
}

interface RecipeListProps {
    recipeList: Recipe[];
}

export default function RecipeList({ recipeList }: RecipeListProps) {
    console.log(recipeList);

    return (
        <div>
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
                <Link href={"/"}>Go Home</Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipeList && recipeList.length > 0 ? 
                        recipeList.map((recipe: Recipe) => (
                            <Card key={recipe.id}>
                                <Link href={`/recipe-list/${recipe.id}`}>
                                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                            <img
                                                src={recipe.image}
                                                alt={recipe.name}
                                                className="h-full w-full object-cover object-top"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                                            <div className="mt-4 flex items-center flex-wrap gap-2">
                                                <p className="text-lg text-gray-600">Rating: {recipe.rating}</p>
                                                <div className="ml-auto">
                                                    <p className="text-lg text-gray-600 font-boid">{recipe.cuisine}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        )) : null
                    }
                </div>
            </div>
        </div>
    );
}
