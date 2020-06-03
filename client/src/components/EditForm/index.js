import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "../Jumbotron";
import API from '../../utils/API';
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";


function EditForm() {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({})
  const [content, setContent] = useState([])
  const [displayStyle, setDisplayStyle] = useState({
    display : ""
  })
  const { id } = useParams();
  

//  Set the display state of the message that displays when an article is successfully added
  useEffect(() => {
    loadContent();
    setDisplayStyle({ ...displayStyle, display: "none" })
  }, [])

  function loadContent() {
    console.log(id)
    API.getContent(id)
      .then(res => {
        console.log(res.data)
        setContent(res.data)
        
      })
      .catch(err => console.log(err));
  };
  

  
  // Loads all books and sets them to books
//   function loadBooks() {
//     API.getBooks()
//       .then(res => 
//         setBooks(res.data)
//       )
//       .catch(err => console.log(err)); 
//   };

  // Handles updating component state when the user types into the input field

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  
  
  function handleFormSubmit(event) {
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
          <Col size="md-6">
            <Jumbotron>
              <h1>Edit Historical Contributions </h1>
              <h2 style={{display: displayStyle.display}}>Your article has been edited</h2>
             
            </Jumbotron>
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
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
   
    );
  }

export default EditForm;
