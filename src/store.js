import { createStore } from "redux";

const initialState = {
  name: "",
  category: "",
  authorFirstName: "",
  authorLastName: "",
  ingredients: [],
  instructions: [],
  recipeList: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
export const UPDATE_LASTNAME = "UPDATE_LASTNAME";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const RECIPES_LIST = "RECIPES_LIST";


function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };

    case UPDATE_CATEGORY:
      return { ...state, category: action.payload };

    case UPDATE_FIRSTNAME:
      return { ...state, authorFirstName: action.payload };

    case UPDATE_LASTNAME:
      return { ...state, authorLastName: action.payload };

    case UPDATE_INGREDIENTS:
      const newIngredients = [...state.ingredients, action.payload];
      return { ...state, ingredients: newIngredients};

    case UPDATE_INSTRUCTIONS:
        const newInstructions = [...state.instructions, action.payload];
        return { ...state, instructions: newInstructions};

    case RECIPES_LIST:
    const {name, category, authorFirstName, authorLastName, ingredients, instructions } = state
        const recipe = {
            name,
            category,
            authorFirstName,
            authorLastName,
            ingredients,
            instructions
        }
        const newRecipe = [ ...state.recipeList, recipe ];
        return { ...state, recipeList: newRecipe };

    default:
      return state;
  }
}

export default createStore(reducer);
