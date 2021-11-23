import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Section2 = () => {
  const [menCloth, setMenCloth] = React.useState([]);

  React.useEffect(() => {
    const fetchClothes = async () => {
      const menCloths = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );

      console.log(menCloths.data);
      setMenCloth(menCloths.data);
    };

    fetchClothes();
  }, []);

  return (
    <Container fluid id='action3'>
      <h3 className='p-2 mt-4 text-center text-lg-start'>
        <u>Men's Clothes</u>
      </h3>
      <Row class='h-50 d-flex align-items-center'>
        {menCloth.map((item) => {
          return (
            <Col lg={3} className='p-2 d-flex ' key={item.description}>
              <Card
                className='d-flex
 align-items-center p-2'>
                <Card.Img
                  variant='top'
                  src={item.image}
                  className='d-inline-block p-3 rounded align-text-top w-50'
                />
                <Card.Body>
                  <Card.Title className='text-wrap'>{item.title}</Card.Title>
                  <Card.Text className='text-wrap p-2'>
                    {item.description}
                  </Card.Text>
                </Card.Body>
                <span class='d-block p-2'>
                  <em>Price: $ {item.price}</em>
                </span>

                <Button variant='primary' className='mb-3'>
                  Buy Now
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Section2;
