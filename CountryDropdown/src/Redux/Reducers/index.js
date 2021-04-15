

// Array hardcoded of the initial region 
const IntialRegion = ["Europe", "Asia"]
// Initial countires set as empty array which will be populated depending on region 
const IntialCountries = [];
// This is simply returning state as it was hardcoded
const Regions = (state = IntialRegion, action) => {
    return state
}

const countries = (state = IntialCountries, action) => {
    //If set countries is triggered or a regionHandle function is called it will set countries coming from the Api to this variable
    if (action.type === "setCountries") {
        return [...action.payload]
    }
    return state
}

export { countries, Regions }