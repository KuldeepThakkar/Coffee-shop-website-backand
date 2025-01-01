var express = require('express');
var router = express.Router();



const { name } = require('ejs');
var model = require('../models/User');
const { model2 } = require('../models/coffees');
const { model3 } = require('../models/meals');
const { model4 } = require('../models/deserts');
const { redirect } = require('react-router-dom');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.redirect('/login');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login', function(req, res, next) {
  
  var bodydata= {
   
    
    username :req.body.txt1,
     password:req.body.txt2
    }
    
 
    var mydata= model(bodydata);
    mydata.save(res.body)
   .then(data=>{
    res.redirect('main')
   })
   .catch(data=>
   {
     res.send("record not added");
   }
   )
 
   
});

router.get('/main', function(req, res, next) {
res.render('main');
})



router.get('/cart', (req, res) => {

  if (!req.session.cart) {
    req.session.cart = [];
    console.log("csrt is intiaiized")
  }
const cartItems = req.session.cart || [];
const totalprice = cartItems.reduce((total , item)=> total + item.price,0);

  res.render('cart',{cartItems, totalprice} );
});




router.get('/cofee', function(req, res, next) {
  res.render('cofee', { coffees : model2 });
  })

  router.post('/cofee', function(req, res, next) {
    
    
  })


  router.get('/meal', function(req, res, next){
    res.render('meal', {meals : model3});
  })

  router.post('/meal', function(req, res, next){

  })

  router.get('/deseert', function(req, res, next){
    res.render('deseert', {deserts : model4});
  })

  router.post('/deseert', function(req, res, next){

  })
  router.get('/cheack-out', function(req, res, next){
    res.render('cheack-out', );
  })

  router.post('/cheack-out', function(req, res, next){
  
  })
  router.post('/thankyou', function(req, res, next){
    res.render('thankyou', {deserts : model4});
  })


module.exports = router;
