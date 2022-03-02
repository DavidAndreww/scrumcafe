import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Styled from './styles'

const Item = ({ item, onClick, disabled }) => {
	return (
		<Row>
			<Col>
				<Row>{item.name}</Row>
				{item.toppings.filter(topping => topping.included === true).map(topping => (
					<Styled.Topping key={topping.value}>{topping.label}</Styled.Topping>
				))}
			</Col>
			<Col sm="auto">Qty - {item.qty}</Col>
			<Col sm="auto">
				<Button variant="danger" onClick={() => onClick(item.id)} disabled={disabled}>
					Remove
				</Button>
			</Col>
		</Row>
	);
};

export default Item;
