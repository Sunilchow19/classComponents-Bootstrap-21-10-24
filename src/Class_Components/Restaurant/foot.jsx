import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HeaderAndFooterExample extends Component{
  render(){
    return (
      <Card className="text-center">
     
       
        <Card.Footer className="text-muted">  "Experience the essence of tradition.
  Mehfil Restaurant – Where every meal is a celebration.
   Call Us: 0007-555-444 | Visit Us: https://www.mehfilbiryani.com/
  © 2024 Mehfil Restaurant. All Rights Reserved." </Card.Footer>
      </Card>
    );
  }
}

export default HeaderAndFooterExample;