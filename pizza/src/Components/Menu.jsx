import React, { useState } from 'react';
import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';
import { Pizza, Search } from 'lucide-react';

const PizzaMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Pizzas' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'meat', name: 'Meat Lovers' },
    { id: 'specialty', name: 'Specialty' }
  ];

  const pizzas = [
    {
      id: 1,
      name: "Margherita Classic",
      description: "Fresh tomatoes, mozzarella, basil, olive oil",
      price: 14.99,
      category: "vegetarian",
      spicyLevel: 0,
      image: "https://media.istockphoto.com/id/1080689506/photo/hot-big-pepperoni-pizza-tasty-pizza-composition-with-melting-cheese-bacon-tomatoes-ham.jpg?s=612x612&w=0&k=20&c=AEePHfJ5BW-f3dheul_FT9r6CuDIb-1Nmp668dBz_TU=",
      bestseller: true
    },
    {
      id: 2,
      name: "Pepperoni Supreme",
      description: "Double pepperoni, extra cheese, seasoning",
      price: 16.99,
      category: "meat",
      spicyLevel: 1,
      image: "https://media.istockphoto.com/id/1440768393/photo/shot-of-a-fresh-cheesy-pizza.jpg?s=612x612&w=0&k=20&c=HIom6TEwjra9MzwU66Zigx3l_2bR8TmQKJXubTHqOXY=",
      bestseller: true
    },
    {
      id: 3,
      name: "Quattro Formaggi",
      description: "Mozzarella, gorgonzola, parmesan, gouda",
      price: 18.99,
      category: "specialty",
      spicyLevel: 0,
      image: "https://media.istockphoto.com/id/1744442094/photo/pizza-quattro-fromaggi-on-a-wooden-board-four-cheese-pizza-or-quattro-formaggi-pizza-topped.jpg?b=1&s=612x612&w=0&k=20&c=GNEnAJOHjxW3WQ3VqrfYqlBmT71V5mK478Gq45cruqE=",
      bestseller: true
    },
    {
      id: 4,
      name: "Spicy Diavola",
      description: "Spicy salami, chili peppers, red onions, olives",
      price: 17.99,
      category: "meat",
      spicyLevel: 3,
      image: "https://images.pexels.com/photos/9957551/pexels-photo-9957551.jpeg?auto=compress&cs=tinysrgb&w=600",
      bestseller: false
    },
    {
      id: 5,
      name: "Meat Lovers",
      description: "Spicy chicken, chopped sausages, red meat",
      price: 37.99,
      category: "meat",
      spicyLevel: 3,
      image: "https://media.istockphoto.com/id/483367738/photo/homemade-meat-loves-pizza.jpg?b=1&s=612x612&w=0&k=20&c=ad4w0DitvMrLvFKYY3uKswa0JI-PoBVhziwoWzJLhTQ=",
      bestseller: false
    },
    {
      id: 6,
      name: "Regular",
      description: "sausages, mozzarella, red onions, others",
      price: 37.99,
      category: "meat",
      spicyLevel: 3,
      image: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600",
      bestseller: false
    }
  ];

  const filteredPizzas = pizzas
    .filter(pizza => 
      (selectedCategory === 'all' || pizza.category === selectedCategory) &&
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const renderSpicyLevel = (level) => {
    return Array(level).fill('🌶️').join('');
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "5px" }}>
      {/* Menu Section */}
      <Container>
        {/* Search and Filter */}
        <Row style={{ marginBottom: "1.5rem" }}>
          <Col md={4} style={{ marginBottom: "1rem" }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search pizzas..."
                style={{
                  width: "50%",
                  borderRadius: "50px",
                  paddingLeft: "2.5rem",
                  padding: "0.375rem 0.75rem",
                  border: "1px solid #ced4da",
                  outline: "none",
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search style={{ position: "absolute", top: "2px", float: "right" }} />
            </div>
          </Col>
          <Col
            md={8}
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                style={{
                  borderRadius: "50px",
                  backgroundColor: selectedCategory === category.id ? "#dc3545" : "transparent",
                  border: "1px solid #dc3545",
                  color: selectedCategory === category.id ? "#fff" : "#dc3545",
                  padding: "0.375rem 0.75rem",
                }}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </Col>
        </Row>

        {/* Pizza Grid */}
        <Row style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          {filteredPizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card
                style={{
                  height: "100%",
                  boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <Card.Img
                  variant="top"
                  src={pizza.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <Card.Title style={{ fontSize: "1.25rem", marginBottom: "0" }}>{pizza.name}</Card.Title>
                    <span style={{ color: "#dc3545", fontWeight: "bold" }}>${pizza.price}</span>
                  </div>
                  <Card.Text style={{ color: "#6c757d" }}>{pizza.description}</Card.Text>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span style={{ color: "#dc3545" }}>{renderSpicyLevel(pizza.spicyLevel)}</span>
                    {pizza.bestseller && (
                      <Badge style={{ backgroundColor: "#ffc107", color: "#212529", borderRadius: "50px", padding: "0.25rem 0.75rem" }}>
                        Bestseller
                      </Badge>
                    )}
                  </div>
                  <Button
                    style={{
                      width: "100%",
                      borderRadius: "50px",
                      backgroundColor: "#dc3545",
                      border: "none",
                      color: "#fff",
                      padding: "0.5rem",
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

  );
};

export default PizzaMenu;