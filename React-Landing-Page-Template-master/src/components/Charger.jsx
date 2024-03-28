import React, { useState } from 'react';
import { Container, Form, FormControl, Button, Card } from 'react-bootstrap';
import axios from 'axios';

function Charger() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  // Function to speak out the information
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const fetchData = async (station) => {
    try {
      const response = await axios.get(`http://localhost:8000/evstation/${station}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = async () => {
    try {
      await fetchData(searchTerm);
      speak(`Found ${data.length} charging stations.`);
      data.forEach((item) => {
        speak(`${item.station}. Distance: ${item.distance}`);
      });
    } catch (error) {
      console.error('Error searching charging stations:', error);
    }
  };

  return (
    <>
      <Container className="mt-4" style={{ marginTop: "200px" }}>
        <Form className="mb-3">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleSearch}>Search</Button>
        </Form>
        <div className="row">
          {data.map((item) => (
            <div key={item._id} className="col-md-4 mb-3" >
              <Card style={{ border: '1px solid #ccc', padding: '10px' }}>
                <Card.Body>
                  <Card.Title style={{fontWeight:"800",fontSize:"20px"}}>{item.station}</Card.Title>
                  <div style={
                    {display:"flex"}
                  }>
                  <p>Address:</p>
                  <Card.Text>{item.address}</Card.Text>
                  </div>
                  <div style={
                    {display:"flex"}
                  }>
                  <p>Number of Ports:</p>
                  <Card.Text>{item.portNum}</Card.Text>
                  </div>

                  <Card.Text>{item.distance}</Card.Text>
                  {/* Add additional fields from your API response here */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Charger;
