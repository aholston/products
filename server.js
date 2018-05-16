var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    path        = require('path'),
    session     = require('express-session'),
    body_parser = require('body-parser');
    bcrypt      = require('bcryptjs');
    autoIncrement = require('mongoose-auto-increment');

app.use(body_parser.json());
app.use(express.static(path.join(__dirname, "/client/dist")));
app.use(session({
    secret: '^P%mUWCwF4hWAhtgUb8BrRqWPuR$%4w^@FSB3j*VfumMEJB8SPpr57%aqRmsEyHGhJKcvgu9#W&5ZvUrCZ*q4c%8^A9RJ49@Mf3X',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var connection = mongoose.createConnection('mongodb://localhost/belt_db');
mongoose.Promise = global.Promise;
autoIncrement.initialize(connection);

// Example User Schema
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name for your product!'],
    minlength: [3, 'Product name must be 3 characters!']
  },
  qty: {
    type: Number,
    required: [true, 'Please enter a quantity!'],
    min: [0, 'Quantity must be greater than 0!']
  },
  price: {
    type: Number,
    required: [true, 'Please enter a price!'],
    min: [.01, 'Product price must be greater than 0!']
  }
}, {timestamps: true})
ProductSchema.plugin(autoIncrement.plugin, 'Product');
var Product = connection.model('Product', ProductSchema);

// Example get route
app.get('/products', function(req, res)  {
  var products = Product.find({}, function(err, products) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json({message: 'Success', data: products});
    }
  });
});

app.post('/products', function(req, res) {

  var product = new Product({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price
  });
  product.save(function(err) {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(product);
      res.json({message: 'Success', data: product});
    }
  });
});

app.get('/products/:id', function(req, res) {

  var p = Product.findOne({
    _id: req.params.id
  }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(product);
      res.json({message: 'Success', data: product});
    }
  });
});

app.patch('/products/:id', function(req, res) {
  var product = Product.findOne({
    _id: req.params.id
  }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      product.name = req.body.name;
      product.price = req.body.price;
      product.qty = req.body.qty;
      product.save(function(err) {
        if (err) {
          res.status(400).json(err);
        } else {
          res.json({message: 'Success', data: product});
        }
      });
    }
  });
});

app.delete('/products/:id', function(req, res) {
  var validate = Product.findOne({
    _id: req.params.id
  }, function(err, product) {
    if (err) {
      res.status(400).json(err);
    } else {
      if (product.qty > 0) {
        res.json({err: 'Cannot delete product with a quantity greater than 0!'});
      } else {
        return;
      }
    }
  });
  var product = Product.remove({
    _id: req.params.id
  }, function(err) {
    if (err) {
      res.status(400).json({message: 'Errors', data: err});
    } else {
      res.json({message: 'Success'});
    }
  });
});







app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./client/dist/index.html"))
});

// Other routes

var server = app.listen(2222, function() {
    console.log("listening on port 2222");
});
