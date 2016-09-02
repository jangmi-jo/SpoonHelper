import { RecipeConstants, receiveCategoryRecipes, receiveSingleRecipe, clearSingleRecipe } from '../actions/recipe_actions.js';
import { receiveErrors, clearErrors } from '../actions/error_actions.js';
import * as RecipeUtil from '../util/recipe_api_util.js';
import { hashHistory } from 'react-router';

const RecipeMiddleware = (store) => (next) => (action) => {
  const fetchCategorySuccess = (recipes) => {
    store.dispatch(receiveCategoryRecipes(recipes));
  };

  const fetchSingleSuccess = (recipe) => {
    store.dispatch(receiveSingleRecipe(recipe));
  };

  const destroySuccess = () => {
    store.dispatch(clearSingleRecipe());
    hashHistory.push('/');
  };

  const errorCallback = (errors) => {
    store.dispatch(receiveErrors(errors.responseJSON));
  };

  switch (action.type) {
    case RecipeConstants.DESTROY_RECIPE:
      RecipeUtil.deleteRecipe(destroySuccess);
      break;
    case RecipeConstants.REQUEST_RECIPES:
      RecipeUtil.fetchCategoryRecipes(action.cId, fetchCategorySuccess);
      break;
    case RecipeConstants.REQUEST_SINGLIE_RECIPE:
      RecipeUtil.fetchSingleRecipe(action.rId, fetchSingleSuccess);
      break;
    case RecipeConstants.CREATE_RECIPE:
      RecipeUtil.createRecipe(action.recipe, fetchSingleSuccess, errorCallback);
      break;
    case RecipeConstants.UPDATE_RECIPE:
      console.log("update fired");
      console.log(action.recipe);
      RecipeUtil.updateRecipe(action.recipe, fetchSingleSuccess, errorCallback);
      break;
    default:
      return next(action);
  }
};

export default RecipeMiddleware;
