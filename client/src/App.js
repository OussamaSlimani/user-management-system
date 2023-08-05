import { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Badge, ListGroup, Form, Button } from 'react-bootstrap'

export default function App() {
  // API endpoint
  const api = "http://localhost:3500"

  // State variables to hold user data
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")

  // Fetch users from the API when the component mounts or 'users' state changes
  useEffect(() => {
    Axios.get(`${api}/users`)
      .then(res => setUsers(res.data))
  }, [users])

  // Function to create a new user
  const createUser = () => {
    if (name && age && email) {
      // Send a POST request to create a new user
      Axios.post(`${api}/createUser`, { name, age, email })
        .then(res => res.data)
    }
  }

  return (
    <Container>
      <Form className='form'>
        <Form.Control type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
        <Form.Control type="number" placeholder='Age' onChange={e => setAge(e.target.value)} />
        <Form.Control type="text" placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <Button variant="success" type="submit" onClick={createUser}>Create User</Button>
      </Form>

      <div className="result">
        {users.map(({ _id, name, age, email }) => {
          return (
            <ListGroup key={_id}>
              <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{name}</div>{email}
                </div>
                <Badge bg="success" pill>{age}</Badge>
              </ListGroup.Item>
            </ListGroup>
          )
        })}
      </div>
    </Container>
  );
}
