import logo from './logo.svg';
import './App.css';
import React from 'react'
import Dropdown from "./Components/Dropdown"
import { repository } from './api/Repository'
import { useSelector, useDispatch } from 'react-redux'
import { setCountirestoRedux } from './Redux/actionMethods';
import { countries } from './Redux/Reducers';
import Table from "./Components/Table"

function DropdownApp() {

  // UseDispatch used to dispatch the action method - calling it when a region selected 
  // becuase countires will chnage depending on region selected
  const dispatch = useDispatch();


  // Once value is stored in redux - to data retireve useSelector is used 
  const Regions = useSelector(x => x.region);
  const Countries = useSelector(x => x.countries);



  // This use state is set to undefined, selected county will be represented in a table when selected by user
  const [selectedCountry, setselectedCountry] = React.useState(undefined);

  const handleRegionChange = async (value) => {
    //When this function is triggered, API will call getCountries function which will return the JSON object from API and dispatching to reduc
    //When API is called it will go into a promise state and it will stay in this state until it is resolved
    // .then is used to take the resolved result 
    // if status = 200, this means the result is successfully retrieved
    const { data, status } = await repository.getCountries(value).then(x => x);
    if (status == 200) {

      // Dispatching setcountriestoRedux allows to store the data into redux
      dispatch(setCountirestoRedux(data))
    }
  }

  const handleCityChange = async (value) => {
    // the value is derived from the dropdown.js file depending on what is selected is passed here 
    // x the object of each countires. if object.name == value it will break loop and store value in the cont varibale selected country 
    const selectedCountry = Countries.find(x => x.name == value);
    //now country has been selected this is stored in a selectedCountry state
    setselectedCountry(selectedCountry);
    console.log(selectedCountry);
  }


  return (
    <div className="App">
      <h1>Country Drowpdown</h1>
      {/** When user selects value (either Europe or Asia) the handle region change is triggered */}
      <Dropdown label="Region" onChange={handleRegionChange} list={Regions} />
      {/** if countries.length is 0 it means no region is selected. If no region is selected we do not render this drop down 
     * using a ternary operator depending on if this is tru it will return a drop down or an empty fragment
     */}
      <br></br>
      {Countries.length > 0 ? <Dropdown label="Countries" onChange={handleCityChange} list={Countries.map(x => x.name)} /> : <></>}
      {/** 
     */}



      {
        // if country is selected this will render the following table 
        selectedCountry ? <Table selectedCountry={selectedCountry} /> : <></>
      }
    </div>


  );
}

export default DropdownApp;
