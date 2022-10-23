from .api import API
# from ..DB.db_proxy import db
from DB.db_proxy import db


class RecipesAPI(API):
    def __init__(self, ingredient, gluten_free, dairy_free):
        self.url = f"https://recipes-goodness.herokuapp.com/recipes/{ingredient}"
        super().__init__(self.url)
        self.gluten_free = gluten_free
        self.dairy_free = dairy_free
        
    
    def proccess_data(self, unproccessed_data):
        try:
            print("processing")

            results = []
            for recipe in unproccessed_data["results"]:
                if(self.dairy_free == "false" and self.gluten_free == "false" or 
                   self.filter_diet(recipe["ingredients"])):
                    rec = {
                        "ingredients": recipe["ingredients"],
                        "title": recipe["title"],
                        "thumbnail": recipe["thumbnail"],
                        "href": recipe["href"]
                    }
                    results.append(rec)
            return results
            
        except Exception as e:
            print("Could not proccess data")
            raise e
        
        
        
    def filter_diet(self, ingredients):
        dairy_filter = ""
        gluten_filter = ""
        
        if(self.dairy_free == "true"):
            dairy_filter = "dairy"
        
        if(self.gluten_free == "true"):
            gluten_filter = "gluten"
            
        return db().filter_rec(ingredients, dairy_filter, gluten_filter)
     