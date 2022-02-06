import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Search(props) {
  // TODO: When hanle the submit button, sent search key to Parent
  const sendKey = (event) => {
    event.preventDefault();
    props.onSubmitSearhKey(event.target[0].value);
  };
  return (
    <div>
      <Form className="pt-2 ml-auto" inline onSubmit={sendKey}>
        <FormGroup>
          <Label htmlFor="searchtext"></Label>
          <Input
            type="text"
            placeholder="Tìm theo tên nhân viên"
            size="30"
            id="seachtext"
            name="searchtext"
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" value="submit" color="primary">
            Tìm
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
