import React, { useState, useEffect } from "react";
import Jumbotron from "../Jumbotron";
import API from '../../utils/API';
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../Form";


function ContentForm() {
  // Setting our component's initial state
   const [content, setContent] = useState([])
  const [formObject, setFormObject] = useState({})
  const [displayStyle, setDisplayStyle] = useState({
    display : ""
  })
  

//  Load all books and store them with setBooks
  useEffect(() => {
    setDisplayStyle({ ...displayStyle, display: "none" })
  }, [])

  
  

  
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
    setFormObject({...formObject, [name]: value})
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
              <h1>Submit Historical Contributions </h1>
              <h2 style={{display: displayStyle.display}}>Your article has been added</h2>
             
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
                onClick={handleFormSubmit}>
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
   
    );
  }

  
export default ContentForm;
