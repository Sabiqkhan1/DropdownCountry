import { api } from './BaseURL';


// getCountries function this function will be called when a region dropdown is changed (on change)
// The value of the elected dropdown will be passed as parameters as data. (which will be europe or asia)
const getCountries = async (data) => {
    //concatinate the data with the Api
    return await api.get('/' + data)
}


export const repository = {
    getCountries,
}
