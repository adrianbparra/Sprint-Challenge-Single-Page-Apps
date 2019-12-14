import React from "react";
import {Form, Label, Input, FormGroup} from "reactstrap";

export default function SearchForm({setSearchTerm, searchTerm}) {

  // console.log(setSearchTerm)

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }
  return (
    <Form className="search-form">
      <FormGroup>
        <Label>Search By Name:</Label>
        <Input type="text" name="name" id="name" onChange={handleChange} value={searchTerm}></Input>
      </FormGroup>
    </Form>
  );
}
