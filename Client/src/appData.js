/* Data Model
This model is in charge of handling all data related functionalities, it should make all the API's request 
and able to generate a user’s data.  */

const data = function() {

    let recipes;
    
    function init(ingredient, glutenFree, dairyFree) {
        recipes = new MetaDataApi(ingredient, glutenFree, dairyFree)
    }

    async function getRecipes() {
        let recipesPromise = recipes.getData()
        return await Promise.all([recipesPromise]).then(function(res) {
            recipes = res[0]
            return {results: res[0]}
        })
    }


    return {
        init, 
        getRecipes
    }
}