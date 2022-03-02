import { useState, } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import Styled from "./styles";

import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Item = ({ item, onClick, disabled, handleChange, id }) => {
	
	return (
		<Styled.MenuItem>
			<Col>
				<Styled.Name>{item.name}</Styled.Name>
				<Styled.Description>{item.description}</Styled.Description>
				<Styled.Toppings>Toppings</Styled.Toppings>
					{item.toppings.map(item => (
						<Form.Group key={item.value}>
						<Form.Check.Input 
							value={item.value} 
							checked={item.included} 
							onChange={(e)=> handleChange(id, e)}
						/> 
						<Form.Check.Label>{item.label}</Form.Check.Label><br />
						</Form.Group>
				))}
			</Col>
			<Col sm="auto">
				<Button onClick={() => onClick(item)} disabled={disabled}>
					Add to cart
				</Button>
			</Col>
		</Styled.MenuItem>
	);
};

export default Item;
