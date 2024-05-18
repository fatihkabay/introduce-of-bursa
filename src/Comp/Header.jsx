import React from "react";
import '../App.css';
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Header() {
  return (
    <div className="header-container">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Hakkımızda</Button>
        <Button variant="secondary">Tescilli Ürünler</Button>
        <Button variant="secondary">Gezilecek Yerler</Button>
        <Button variant="secondary">Destek&Öneri</Button>
      </ButtonGroup>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" roundedCircle />
      </Col>
    </div>
  );
}
