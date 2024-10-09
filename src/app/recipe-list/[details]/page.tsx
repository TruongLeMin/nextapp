import RecipeDetailsItem from "@/components/recipe-details";

// Khai báo kiểu string cho currentRecipeId
async function fetchRecipeDetails(currentRecipeId: string) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const data = await apiResponse.json();
        return data;
    } catch (error) {
        throw new Error(error as string);
    }
}

export default async function RecipeDetails({ params }: { params: { details: string } }) {
    // Gọi hàm fetch để lấy chi tiết recipe
    const getRecipeDetails = await fetchRecipeDetails(params?.details);

    return (
        <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
    );
}
