import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API from '../../utils/API';
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import './index.css';


function EditForm() {
  // Setting our component's initial state

  const [content, setContent] = useState({
    title: "",
    author: "",
    content: "",
    date: ""
  })
  const [displayStyle, setDisplayStyle] = useState({
    display: ""
  })
  const { id } = useParams();


  //  Set the display state of the message that displays when an article is successfully added
  useEffect(() => {
    loadContent();
    setDisplayStyle({ ...displayStyle, display: "none" })
  }, [])

  function loadContent() {

    API.getContent(id)
      .then(res => {
        console.log(res.data)
        setContent(res.data)

      })
      .catch(err => console.log(err));
  };




  function handleFormSubmit(event) {
    event.preventDefault();
    if (content.title && content.author) {
      API.updateContent(id, {
        title: content.title,
        author: content.author,
        year: content.year,
        content: content.description,
      })
        .then(
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
            <h2 style={{ display: displayStyle.display }}>Your article has been edited</h2>

          </Jumbotron>
          <form onSubmit={handleFormSubmit}>
            <Input
              onChange={(e) => setContent({ title: e.target.value })}
              name="title"
              value={content.title}

            />
            <Input
              onChange={(e) => setContent({ year: e.target.value })}
              name="year"
              value={content.year}
            />
            <Input
              onChange={(e) => setContent({ author: e.target.value })}
              name="author"
              value={content.author}

            />
            <TextArea
              onChange={(e) => setContent({ content: e.target.value })}
              name="description"
              value={content.content}
            />
            <FormBtn
              type="submit"
            >
              Submit It
              </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>

  );
}


export default EditForm;
