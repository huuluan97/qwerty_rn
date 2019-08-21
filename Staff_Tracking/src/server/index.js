import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();

app.set('trust proxy', 1);
app.use(helmet());
app.all('*', (req, res, next) => {
	// CORS headers
	res.header(
		'Access-Control-Allow-Origin',
	);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization'
	);
	next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger.sendResponse);

const server = app.listen(settings.apiListenPort, () => {
	//let serverAddress = server.address();
});

