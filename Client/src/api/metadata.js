class MetaDataApi extends Api {

	constructor(ingredient="", glutenFree=false, dairyFree=false, apiInterface = new AjaxCall()) {
		let url = `http://localhost:8000/recipes/${ingredient}?gluten-free=${glutenFree}&dairy-free=${dairyFree}`
		super(apiInterface, url)
	}

	async getData() {
		return await this.callApi()
	}
}