interface IIngredient {
  quantity: string;
  ingredient: string;
}

interface IInstruction {
  step: number;
  description: string;
  thumnail: string;
}

interface INutrition {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
}

interface IRecipe {
  _id?: string;
  title: string;
  image: string;
  portion: number;
  ingredients: IIngredient[];
  instructions: IInstruction[];
  nutrition: INutrition;
}
