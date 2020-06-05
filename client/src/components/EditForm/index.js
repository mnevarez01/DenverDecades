import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from '../../utils/API';
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import './index.css';
import ArrowBack from '@material-ui/icons/KeyboardBackspace';
import { Button, } from '@material-ui/core';
import { Link } from "react-router-dom";


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

  };


  return (

    <Container fluid>
      <Row>
        <Col size="md-10">
          <div class="row border-0 my-2">
            <div class="col-lg-8 mx-auto">
              <div class="historical p-4 rounded shadow">
                <h1 className='h1'>Edit Historical Contributions</h1>
                <h2 style={{ display: displayStyle.display }}>Your article has been edited</h2>
              </div></div></div>
          <div class="row border-0 my-4">
            <div class="col-lg-8 mx-auto">
              <div class="bg-white p-4 rounded shadow">
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
                <Button component={Link} to="/" color="black"><ArrowBack /></Button>
                <br />
              </div></div></div>
        </Col>
      </Row>
    </Container>
  );
}

export default EditForm;
