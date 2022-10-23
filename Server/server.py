from fastapi import FastAPI, Response, status
import uvicorn
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from Api.recipes_api import RecipesAPI



app = FastAPI()

@app.get('/sanity')
def root():
    return {"message":"OK"}
    
    
@app.get('/recipes/{ingredient}')    # ex- http://localhost:8000/recipes/${ingredient}?glutenFree=${glutenFree}&dairyFree=${dairyFree}
def root(response: Response, ingredient="", glutenFree="false", dairyFree="false"):
    response.headers['Access-Control-Allow-Origin'] = "*"
    data = RecipesAPI(ingredient, glutenFree, dairyFree).get_data()
    print("server running")
    return data
    

    

app.mount("/", StaticFiles(directory="../Client",html=True), name="Client")


if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)