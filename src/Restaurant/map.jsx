import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HeaderAndFooterExample from "./foot"

function Map(){
    return (
        <>
           <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h3 className="text-center">Hyderabad Mehfil Location</h3>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Hyderabad Mehfil Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3827120654344!2d78.46608727511103!3d17.41649230573821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99da0e5db47b%3A0xd84fcd8b76e6cf6c!2sHyderabad%20Mehfil!5e0!3m2!1sen!2sin!4v1601201234567!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </Col>
      </Row>


      <HeaderAndFooterExample/>
        
        
        </>
    )
}

export default Map