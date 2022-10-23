/* Renderer Module
Renderer is a class which should render each section of the user page through Handlebars (and jQuery). 
*/


const dataRender = function() {

    function rendRecipes(recipes) {        
        $(".recipes-container").empty();
        const source = $('#recipes-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(recipes); 
        $('.recipes-container').append(newHTML);
    }


    return {
        rendRecipes
    }
}