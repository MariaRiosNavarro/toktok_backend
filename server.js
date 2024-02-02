import { app } from './src/app.js';
import { connect } from './src/config/storage.config.js';

app.listen(process.env.PORT, () => {
  connect();
  console.log('express läuft auf port:', process.env.PORT);
});
