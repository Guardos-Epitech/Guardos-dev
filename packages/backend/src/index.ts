import cookieParser from 'cookie-parser';
import cors from 'cors';
import createError from 'http-errors';
import express from 'express';
import filter from './routes/filter';
import register from './routes/register';
import login from './routes/login';
import logout from './routes/logout';
import user from './routes/user';
import images from './routes/images';
import logger from 'morgan';
import path = require('path');
import 'dotenv/config';

import basicApiIngredients from './routes/ingredients';
import { connectDataBase, SUCCEED } from './controllers/connectDataBase';
import dishes from './routes/dishes';
import products from './routes/products';
import restaurants from './routes/restaurants';
import email from './routes/email';

async function main() {
  const app = express();
  const allowedOrigins = [`${process.env.allowedRW}${process.env.PORTRW}`, 
    `${process.env.allowedVW}${process.env.PORTVW}`];
  console.log('allowedOrigins', allowedOrigins);
  
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true })); // for uploading images --> true
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(
    cors({
      origin: allowedOrigins,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  if (await connectDataBase() === SUCCEED) {
    app.listen(process.env.PORTBE, () => {
      return console.log(`Backend is listening at http://localhost:${process.env.PORTBE}`);
    });


    app.use('/api/logout', logout);
    app.use('/api/products', products);
    app.use('/api/dishes', dishes);
    app.use('/api/restaurants', restaurants);
    app.use('/api/ingredients', basicApiIngredients);
    app.use('/api/filter', filter);
    app.use('/api/register', register);
    app.use('/api/login', login);
    app.use('/api/user', user);
    app.use('/api/images', images);
    app.use('/api/sendEmail', email);
  }
  
  // catch 404 and forward to error handler
  app.use(function (next: any) { /* eslint-disable-line */
    next(createError(404));
  });

  // error handler
  app.use(function (err: any, req: any, res: any) { /* eslint-disable-line */
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}

try {
  main();
} catch (err: unknown) {
  console.error(err);
}
