router.get('/customers/:id', (req, res) => {
	const customers = customers.find((customers) => customers.id === +req.params.id); 
	
	if (!customers) {
		res.status(404).json({ message: 'Customer not found' });
	} else {
		res.status(200).json(customers);
	}
});

router.put('/customers/:id', (req, res) => {
	const { id, name } = req.body; 

	const customers = customers.find((customers) => customers.id === +req.params.id);

	
	if (!customers) {
		res.status(404).json({ message: 'Customer not found' });
	} else {
		customers.name = name;
		

		res.status(200).json(customers);
	}
});

router.delete('customers/:id', (req, res) => {
	const customers = customers.find((customers) => customers.id === +req.params.id); 

	if (!customers) {
		res.status(404).json({ message: 'Customers not found' });
	} else {
		const index = customers.indexOf(customers); 

		customers.splice(index, 1); 

		res.status(200).json({ message: 'Customers deleted' });
	}
});

router.post('/', (req, res) => {
	const { name} = req.body;
	const customers = {
		id: students.length + 1,
		name,
	}; 

	customers.push(ncustomers); 

	res.status(201).json(customers);
});
