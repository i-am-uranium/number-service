const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const { server } = require('./src/config');
const { logLevel, logger, mongoDBConnection } = require('./src/common');
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

mongoDBConnection.connect()
  .catch((error) => {
    if (error) {
      logger.log(logLevel.ERROR, `An error has occurred while connecting to mongo db. Detailed error is: ${error}`);
      process.exit(1);
    } else {
      app.listen(server.port, () => logger.log(logLevel.INFO, `Listening on port: ${server.port}`));
    }
  });

process.on('SIGINT', () => {
  server.close((err) => {
    if (err) {
      logger.log(logLevel.ERROR, `Unable to close server gracefully:-  ${err.message}`);
    } else {
      logger.log(logLevel.INFO, 'Server stopped successfully');
    }
  });
});
