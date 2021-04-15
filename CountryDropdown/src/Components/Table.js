import React from 'react'



const TableComponent = ({ selectedCountry }) => {
    return <>
        <table style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className="table table-responsive m-auto ">


            <thead>
                <tr>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Population</th>
                    <th>Currencies</th>
                    <th>Flag</th>

                </tr>
            </thead>
            <tbody>
                {
                    <tr>
                        {/** this infomation displays with the selected object values
       * This is retrieved from the countires.find function 
       */}

                        <td>{selectedCountry.name}</td>
                        <td>{selectedCountry.capital}</td>
                        <td>{selectedCountry.population}</td>
                        <td>{selectedCountry.currencies.map(x => x.code)}</td>
                        <td><img style={{ width: 26 }} src={selectedCountry.flag} /></td>
                    </tr>
                }
            </tbody>
            <tfoot></tfoot>
            {/** if nothing is selected an empty fragment will be displayed  */}
        </table>
    </>
}


export default TableComponent;


