import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Item from "./Item";

const Menu = ({ handleAdd, checkingOut }) => {
	const [menuItems, setMenuItems] = useState([]);

	const toppingToggle = (id, e) => {
		const updatedItems = [...menuItems]
		const index = updatedItems.findIndex(item => item.id === id)
		if(index >= 0) {
			const currItem = updatedItems[index]
			const toppingIdx = currItem.toppings.findIndex(topping => topping.value === e.target.value)
			currItem.toppings[toppingIdx]['included'] = e.target.checked
			updatedItems.splice(index, 1, currItem)
			setMenuItems(updatedItems)
		}
	}

	useEffect(() => {
		fetch("/menu")
			.then((res) => res.json())
			.then((data = []) => setMenuItems(data));
	}, [setMenuItems]);
	
	return (
		<Col sm={8}>
			<Row>
				<h4>Menu</h4>
			</Row>
			{menuItems.map((menuItem) => (
				<Item key={menuItem.id} id={menuItem.id} item={menuItem} onClick={handleAdd} disabled={checkingOut} toppingToggle={toppingToggle}/>
			))}
		</Col>
	);
};

export default Menu;
