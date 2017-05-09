var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/sycusers', ['users'])

// get users
router.get('/users', function(req, res, next) {
  db.users.find(function(err, users){
    if(err){
      res.send(err);
    }
    res.json(users);
  });
});

// find users
router.get('/users/:key', function(req, res, next) {
db.users.find({ $or: [{firstName: { $regex: new RegExp(req.params.key), $options: 'i'}}, {lastName: {$regex: new RegExp(req.params.key), $options: 'i'}}] },
  function(err, user){
    if(err){
      res.send(err);
    }
    res.json(user);
  });
});

// get user
router.get('/user/:id', function(req, res, next) {
  db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, user){
    if(err){
      res.send(err);
    }
    res.json(user);
  });
});

// register user
router.post('/user', function(req, res, next){
  var user = req.body;
  // check data
  if(!user.firstName || !user.lastName){
    res.status(400);
    res.json({error: "Incomplete user data"});
  } else { // register
    db.users.save(user, function(err, user){
      if(err){
        res.send(err);
      }
      res.json(user);
    });
  }
});

// update user info
router.put('/user/:id', function(req, res, next) {
  var user = req.body;
  var updateUser = {};

  //update first name
  if(user.firstName){
    updateUser.firstName = user.firstName;
  }
  // update last name
  if(user.lastName){
    updateUser.lastName = user.lastName;
  }
  // check for data
  if(!updateUser){
    res.status(400);
    res.json({error: "Incomplete user data"});
  } else {
    db.users.update({_id: mongojs.ObjectId(req.params.id)}, updateUser, {}, function(err, user){
      if(err){
        res.send(err);
      }
      res.json(user);
    });
  }
});

// unregister (delete) user
router.delete('/user/:id', function(req, res, next) {
  db.users.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, user){
    if(err){
      res.send(err);
    }
    res.json(user);
  });
});

// export router
module.exports = router;
