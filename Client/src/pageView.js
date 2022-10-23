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

    // function renderPictures(metaData) {       // rend in for
    //     for (const player of metaData) {
	// 		let elementToRender = `#${player.id}`
    //         let newHTML = `<img src=${player.img} class="image" onerror="this.src='https://www.edigitalagency.com.au/wp-content/uploads/NBA-logo-png.png';" alt="not found" />`
    //         $(elementToRender).empty()
	// 		$(elementToRender).append(newHTML)
	// 	}
    // }


    return {
        rendRecipes
    }
}