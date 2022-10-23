/* Controller
Guidelines for the controller:
Use the instances of your classes with MVC principles so that when the user clicks the generate user button, 
it will fetch and load the data on the screen  */

const pageData = data()
const rendPage = dataRender()

$("#getRecBtn").on("click", function() {
    const ingredient = $("#ingredient-input").val()
    const glutenFree = $("#gluten-checkbox").val()
    const dairyFree = $("#dairy-checkbox").val()

    if (ingredient == "") {
        console.warn("ingredient name is missing from input")
        alert("Please enter an ingredient name!")
    }
    else {
        const recipes = pageData.init(ingredient, glutenFree, dairyFree).getRecipes().then((res) =>{
            cleanInput()
            rendPage.rendRecipes(recipes)
            return res
        })
    }
})


const cleanInput = function() {
    $("#ingredient-input").val("")
}