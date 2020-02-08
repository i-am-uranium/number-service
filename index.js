const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const { server } = require('./src/config');
const { logLevel, logger } = require('./src/common');
const { errorHandler } = require('./src/middleware');
const generatenumber = require('./src/routes/generatenumber');

const app = express();
app.use(cors());
if (server.env !== 'prod') {
  app.use(morgan('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

generatenumber(app);
app.use(errors());
app.use(errorHandler);

app.listen(server.port, () => logger.log(logLevel.INFO, `Listening on port: ${server.port}`));
