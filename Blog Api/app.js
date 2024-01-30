const express = require('express'); 
const app = express();
require('dotenv').config();
app.use('/api/v1/tasks', require('./routes/task.routes.js'));
const connectToDB = require('./db/mongoose.js')

// * CONFIG
const PORT = 5000; // port number
const SERVER_URL = `http://localhost:${PORT}`; // server url

// * MIDDLEWARE
app.use(express.json());

// TEMP
app.get('/', (req, res) => {
	res.send('Hello World!');
});




// * LISTEN
const start = async () => {
	try {
		await connectToDB(process.env.MONGODB_URL); // connect to database

		// listen to port only if database connection is successful
		app.listen(PORT, () => {
			console.log(`Server is running at: ${SERVER_URL}`);
		});
	} catch (err) {
		console.log(err); // log error
	}
};

start();