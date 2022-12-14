import React, { useState, useContext } from 'react'
import { states } from '../../data/states'
import EmployeesContext from '../../context/employees';
import Modal from 'p14_convert_jquery_plugin'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectForm = ({ values, callback }) => {
    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>State</InputLabel>
          <Select
            label="state"
            defaultValue=""
            onChange={({ target: { value } }) => callback(value)}
          >
          {
            values.map(value => {
                return <MenuItem key={value.abbreviation} value={value.abbreviation}>{value.name}</MenuItem>
            })
          }
          </Select>
        </FormControl>
      </Box>
    );
}

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birth, setBirth] = useState("");
    const [startDate, setStartDate] = useState("");
    const [department, setDepartment] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [state, setState] = useState("");
    const [id, setId] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [modalText, setModalText] = useState("");

    const { employees, setEmployees } = useContext(EmployeesContext);

    const employee = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: birth,
        startDate: startDate,
        department: department,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        id: id
    }
    const handleChange = (value) => {
        setState(value)
    };
    const handleChangeDep = (value) => {
        setDepartment(value)
    };
    const saveEmployee = (e) => {
        e.preventDefault();
        for (const element in employee) {
          if (employee[element] === "") {
            setModalText("You need to fill all the form")
            setIsOpen(true)
            return
          }
        };
        setId(id + 1)
        setEmployees([...employees, employee])
        setModalText("Employee created")
        setIsOpen(true)
    }
    
    return (
        <>
            <form id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="date" value={birth} onChange={(e) => setBirth(e.target.value)}/>

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>

                    <label htmlFor="state">State</label>
                    <SelectForm values={states} callback={handleChange}></SelectForm>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" defaultValue={'DEFAULT'} onChange={({ target: { value } }) => handleChangeDep(value)}>
                    <option value="DEFAULT" disabled hidden>Choose here</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>
            <button onClick={saveEmployee}>Save</button>
            
		    {isOpen && <Modal setIsOpen={setIsOpen} text={modalText} />}
        </>
    )
}

export default Form