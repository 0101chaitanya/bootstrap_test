import React from 'react';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Section1 = () => {
  const [jewlery, setJewlery] = React.useState([]);

  React.useEffect(() => {
    const fetchCats = async () => {
      const jewels = await axios.get(
        'https://fakestoreapi.com/products/category/jewelery'
      );

      console.log(jewels.data);
      setJewlery(jewels.data);
    };

    fetchCats();
  }, []);

  return (
    <Container fluid id='action2'>
      <h3 className='p-2 mt-4'>
        <u>Jewlery</u>
      </h3>
      <Row class='h-50 d-flex align-items-center'>
        {jewlery.map((item) => {
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

export default Section1;
