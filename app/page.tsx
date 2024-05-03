import BadgeFilter from "@/components/ui/BadgeFilter";
import RecipeList from "@/components/ui/RecipeList";
import { getRecipes } from "@/lib/recipe";



export default async function Home() {
  const recipes=await getRecipes()
  return (
    <div className="xl:px-24 px-10">
    <div className="my-12">
      <BadgeFilter />
      <RecipeList recipes={recipes} />
    </div>
  </div>
  );
}
