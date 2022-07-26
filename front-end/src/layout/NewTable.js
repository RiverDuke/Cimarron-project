import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";

export default function NewTable() {
    const initialValue = {
        table_name: "",
        capacity: 0,
      };
    const [data, setData] = useState({ ...initialValue });
    const history = useHistory();
return (
<>
<h1>Add Table</h1>
<form className="mt-2">
        <div className="form-group">
          <label htmlFor="name">Table Name</label>
          <input
            name="table_name"
            type="text"
            className="form-control"
            id="name"
            // onChange={onChange}
            // value={data.name}
            // required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="name">Capacity</label>
          <input
            name="capacity"
            type="number"
            className="form-control"
            id="name"
            // onChange={onChange}
            // value={data.name}
            // required
          ></input>
        </div>
     
       
        
        <button
          type="button"
          className="btn btn-warning mr-2"
          onClick={() => history.goBack()}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
</>

)
}

