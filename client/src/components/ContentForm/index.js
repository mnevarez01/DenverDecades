import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from '../../utils/API';
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import './index.css';
import ArrowBack from '@material-ui/icons/KeyboardBackspace';
import { Button, } from '@material-ui/core';
import { Link } from "react-router-dom";


function ContentForm() {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({})
  const [displayStyle, setDisplayStyle] = useState({
    display: ""
  })


  //  Set the display state of the message that displays when an article is successfully added
  useEffect(() => {
    setDisplayStyle({ ...displayStyle, display: "none" })
  }, [])
  // Handles updating component state when the user types into the input field

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };



  function handleFormSubmit(event) {
    console.log('here')
    event.preventDefault();
    if (formObject.title && formObject.author) {

      API.saveContent({
        title: formObject.title,
        author: formObject.author,
        year: formObject.year,
        content: formObject.description,
      })

        .then(//res => loadContent() 
          setDisplayStyle({ ...displayStyle, display: "block" })

        )
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-10">
          <div class="row border-0 my-2">
            <div class="col-lg-8 mx-auto">
              <div class="historical p-4 rounded shadow">
                <h1 className='h1'>Submit Historical Contributions</h1>
                <h2 style={{ display: displayStyle.display }}>Your article has been added</h2>
              </div></div></div>
          <div class="row border-0 ">
            <div class="col-lg-8 mx-auto">
              <div class="bg-white p-4 rounded shadow">

                <form>
                  <Input
                    onChange={handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                  />
                  <Input
                    onChange={handleInputChange}
                    name="year"
                    placeholder="Year of Event (required)"
                  />
                  <Input
                    onChange={handleInputChange}
                    name="author"
                    placeholder="Author (required)"
                  />
                  <TextArea
                    onChange={handleInputChange}
                    name="description"
                    placeholder="Description of Event (Optional)"
                  />
                  <FormBtn
                    disabled={!(formObject.author && formObject.title)}
                    onClick={handleFormSubmit}
                  >
                    Submit
              </FormBtn>
                </form>
                <Button component={Link} to="/" color="black"><ArrowBack /></Button>
                <br />
              </div></div></div>
        </Col>
      </Row>
    </Container>

  );
}

export default ContentForm;
