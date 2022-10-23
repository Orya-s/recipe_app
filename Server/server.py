from fastapi import FastAPI, Response, status
import uvicorn
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from Api.stats_api import StatsAPI
from DB.db_proxy import db_proxy


app = FastAPI()
db = db_proxy

@app.get('/sanity')
def root():
    return {"message":"OK"}
    
    
@app.get('/recipes/{ingredient}')   # ?gluten_sensitivity=True&dairy_sensitivity=False 
def root(ingredient):
    return {"message":"OK"}
    

# @app.get('/stats/{lname}/{fname}')
# def get_stats(response: Response, lname, fname):
#     response.headers['Access-Control-Allow-Origin'] = "*"
#     # data = StatsAPI(lname, fname).proccess_data()
#     # return data
    

app.mount("/", StaticFiles(directory="../Client",html=True), name="Client")


if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)