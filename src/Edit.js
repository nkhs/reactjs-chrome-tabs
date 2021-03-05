import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Edit(props) {
  let [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
  });
  let body = state;
  useEffect(() => {
    handleSubmit(props);
  })
  function handleSubmit(props) {
    console.log('handle submit')
    const id = props.match.params.id
    axios({
      method: "put",
      url: "http://localhost:3006/update-list/" + id,
      data: body,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(state);
  }

  function handleChange(e, field) {
    e.preventDefault();
    const value = e.target.value;
    setState({
      ...state,
      [field]: e.target.value,
    });
  }

  return (
    <div className="">
      <input value={state.name} onChange={e => handleChange(e, 'name')} />
      <input value={state.phone} onChange={e => handleChange(e, 'phone')} />
      <input value={state.email} onChange={e => handleChange(e, 'email')} />
      {/* <button>Update</button> */}
    </div>
  );
}

export default Edit;
