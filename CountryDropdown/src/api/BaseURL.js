// API source is a library for handling restAPI
import { create } from 'apisauce'


//create is an const exporting function - this funtion creates an API object which has CRUD funtions.
export const api = create({
  baseURL: 'https://restcountries.eu/rest/v2/region/',
})

  //The main reason I have used api source instead of axios becuase we can create seperate repository file for API