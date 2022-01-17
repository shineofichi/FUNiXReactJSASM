import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

function SearchForm(props) {
  return (
    <div className="ml-auto">
      <Form inline>
        <FormGroup>
          <Input type="text" placeholder="Search" size="40"></Input>
          <Button>
            <span className="fa fa-search"></span>
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default SearchForm;
