const express =  require ('express');
const app = express();

const PORT = 3000;

app.get('/customers/:id', (req, res) => {
	const customers = customers.find((customers) => customers.id === +req.params.id); 
	
	if (!customers) {
		res.status(404).json({ message: 'Customer not found' });
	} else {
		res.status(200).json(customers);
	}
});

app.put('/customers/:id', (req, res) => {
	const { id, name } = req.body; 

	const customers = customers.find((customers) => customers.id === +req.params.id);

	
	if (!customers) {
		res.status(404).json({ message: 'Customer not found' });
	} else {
		customers.name = name;
		

		res.status(200).json(customers);
	}
});

app.delete('customers/:id', (req, res) => {
	const customers = customers.find((customers) => customers.id === +req.params.id); 

	if (!customers) {
		res.status(404).json({ message: 'Customers not found' });
	} else {
		const index = customers.indexOf(customers); 

		customers.splice(index, 1); 

		res.status(200).json({ message: 'Customers deleted' });
	}
});





app.listen(PORT)