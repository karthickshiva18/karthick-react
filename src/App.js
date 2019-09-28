import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Task list  </h1>
          <Button variant="link">Add list</Button>
           
        </p>
        <h4>Authentication</h4>
        <Table striped bordered hover>
        
                <tbody>
                <tr>
                    <td>Login</td>
                    <td>2 hours</td>
                    <td><Button size="sm" variant="link">Add task</Button></td>
                  </tr>
                  <tr>
                    <td>Forgot Password</td>
                    <td>3 hours</td>
                    <td><Button size="sm" variant="link">Add task</Button></td>
                  </tr>
                  </tbody>
          </Table>
          
          <h4>Blog</h4>
        <Table striped bordered hover>
        
                <tbody>
                <tr>
                    <td>homePage</td>
                    <td>2 hours</td>
                    <td><Button size="sm" variant="link">Add task</Button></td>
                  </tr>
                  <tr>
                    <td>About Us</td>
                    <td>3 hours</td>
                    <td><Button size="sm" variant="link">Add task</Button></td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>3 hours</td>
                    <td><Button size="sm" variant="link">Add task</Button></td>
                  </tr>
                  </tbody>
          </Table>
          <div className="table-left">
          <p>
          <h1>Client  </h1>
          <Button variant="link">Add client Name</Button>
           
        </p>
        <h4>Amount calculation</h4>
        <h5>Client Name</h5>
        <Table striped bordered hover style={{ width: '70%' }}>
                        <thead>
                    <tr>
                     
                
                      <th>Task</th>
                      <th>2000 rs per task</th>
                    </tr>
                  </thead>
        
                <tbody style={{textAlign: "centre"}}>
                <tr>
                    <td>Login</td>
                    <td>2 hours</td>
                  </tr>
                  <tr>
                    <td>Forgot Password</td>
                    <td>3 hours</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td></td>
                  </tr>
                  
                  </tbody>
          </Table>
          <Button variant="link">Download as PDF</Button>
          
         
          </div>
          
  
  
       
      
  
      
      </header>
      
    </div>
   
  )

}





export default App;
