import React from 'react';
import {
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
  Button,
} from 'react-bootstrap';
import axios from 'axios';
import NavBar from './components/NavBar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {
  const [cats, setCats] = React.useState([]);

  React.useEffect(() => {
    const fetchCats = async () => {
      const categories = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );

      console.log(categories.data);
      setCats(categories.data);
    };

    fetchCats();
  }, []);

  return (
    <Container fluid>
      <NavBar cats={cats} />
      <Section1 />
      <Section2 />
    </Container>
  );
}

export default App;
