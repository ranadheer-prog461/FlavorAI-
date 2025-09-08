function getRecipe() {
  const input = document.getElementById("ingredients").value.toLowerCase();
  const output = document.getElementById("output");

  if (!input.trim()) {
    output.innerText = "⚠️ Please enter some ingredients!";
    return;
  }

  const ingredients = input.split(",").map(item => item.trim());

  let recipe = "❌ Sorry, no recipe found with those ingredients.";

  // Simple recipe logic
  if (ingredients.includes("egg") && ingredients.includes("tomato")) {
    recipe = "👉 Dish: Tomato Omelette\n\nRecipe: Beat eggs with salt, chop tomatoes & onions, fry together until golden.";
  } 
  else if (ingredients.includes("rice") && ingredients.includes("chicken")) {
    recipe = "👉 Dish: Chicken Fried Rice\n\nRecipe: Cook rice, stir-fry chicken, add vegetables, mix with soy sauce.";
  } 
  else if (ingredients.includes("potato") && ingredients.includes("cheese")) {
    recipe = "👉 Dish: Cheesy Baked Potatoes\n\nRecipe: Bake potatoes, melt cheese on top, add herbs and serve hot.";
  }
  else if (ingredients.includes("bread") && ingredients.includes("butter")) {
    recipe = "👉 Dish: Butter Toast\n\nRecipe: Spread butter on bread slices and toast until golden brown.";
  }
  else if (ingredients.includes("milk") && ingredients.includes("banana")) {
    recipe = "👉 Dish: Banana Milkshake\n\nRecipe: Blend bananas, milk, and sugar until smooth.";
  }

  output.innerText = recipe;
}
