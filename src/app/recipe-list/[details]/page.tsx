import RecipeDetailsItem from "@/components/recipe-details";

// Thêm kiểu dữ liệu cho tham số currentRecipeId (ở đây mình chọn kiểu string)
async function fetchRecipeDetails(currentRecipeId: string) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const data = await apiResponse.json();
        return data;
    } catch (error) {
        throw new Error(error as string); // Đảm bảo khai báo kiểu dữ liệu cho error
    }
}

export default async function RecipeDetails({ params }: { params: { details: string } }) {
    // Thêm kiểu dữ liệu cho params
    const getRecipeDetails = await fetchRecipeDetails(params?.details);

    return (
        <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
    );
}
