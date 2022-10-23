class MetaDataApi extends Api {

	constructor(ingredient="", glutenFree=false, dairyFree=false, apiInterface = new AjaxCall()) {
		let url = `http://localhost:8000/recipes/${ingredient}?glutenFree=${glutenFree}&dairyFree=${dairyFree}`
		super(apiInterface, url)
	}

	async getData() {
		return await this.callApi()
	}
}