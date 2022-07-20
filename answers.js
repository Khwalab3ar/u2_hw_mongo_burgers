// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
  {
    protein: 'beef',
    cheese: 'no',
    toppings: ['ketchup', 'guacamole', 'french fries', 'pickled beets']
  },
  {
    protein: 'ostrich',
    cheese: 'yes',
    toppings: ['sriracha', 'ramen', 'fried green tomato', 'kimchi']
  },
  {
    protein: 'tofu',
    cheese: 'no',
    toppings: [
      'guacamole',
      'french fries',
      'pickled beets',
      'mango',
      'mushrooms'
    ]
  },
  {
    protein: 'beef',
    cheese: 'yes',
    toppings: ['ketchup', 'mustard', 'hot fudge', 'onion', 'olives']
  },
  {
    protein: 'beef',
    cheese: 'no',
    toppings: [
      'worstershire sauce',
      'mayonnaise',
      'mango',
      'pickles',
      'fried banana'
    ]
  }
])
// find all the burgers
db.burgers.find({})
// show just the meat of each burger
db.burgers.find({}, { protein: 1 })
// show just the toppings of each burger
db.burgers.find({}, { toppings: 1 })
// show everything but the cheese
db.burgers.find({}, { cheese: 0 })

// find all the burgers with beef
db.burgers.find({}, { protein: 'beef' })
// find all the burgers that are not beef
db.burgers.find({ protein: { $ne: 'beef' } })
// find the first burger with cheese
db.burgers.findOne({ cheese: 'yes' })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.findOneAndUpdate(
  { cheese: 'yes' },
  { $set: { cheese: 'double cheese' } }
)
// find the burger you updated to have double cheese
db.burgers.find({ cheese: 'double cheese' })
// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({ protein: 'beef' }, { $set: { protein: 'veggie' } })
// delete one of your veggie burgers
db.burgers.deleteOne({ protein: 'veggie' })
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

// drop the collection
//Expected Output
//true
db.burgers.drop({})
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database
db.burgers.insertMany([
  {
    protein: 'beef',
    cheese: 'no',
    toppings: ['ketchup', 'guacamole', 'french fries', 'pickled beets']
  },
  {
    protein: 'ostrich',
    cheese: 'yes',
    toppings: ['sriracha', 'ramen', 'fried green tomato', 'kimchi']
  },
  {
    protein: 'tofu',
    cheese: 'no',
    toppings: [
      'guacamole',
      'french fries',
      'pickled beets',
      'mango',
      'mushrooms'
    ]
  },
  {
    protein: 'beef',
    cheese: 'yes',
    toppings: ['ketchup', 'mustard', 'hot fudge', 'onion', 'olives']
  },
  {
    protein: 'beef',
    cheese: 'no',
    toppings: [
      'worstershire sauce',
      'mayonnaise',
      'mango',
      'pickles',
      'fried banana'
    ]
  }
])
// Change the name of the key cheese to 'pumpkinSpice'
db.burgers.updateMany({}, { $rename: { cheese: 'pumpkinSpice' } })
// find all the burgers with ketchup (or another topping you used at least once)
db.burgers.find({ toppings: 'ketchup' })
// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burgers.findOneAndDelete(
  { toppings: 'hot fudge' },
  { toppings: 'hot fudge' }
)
// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.burgers.updateMany({ protein: 'beef' }, { $addToSet: { toppings: 'eggs' } })
//Add a price to each burger, start with $5.00 for each burger
db.burgers.updateMany({}, { $addToSet: { price: '$5.00' } })
