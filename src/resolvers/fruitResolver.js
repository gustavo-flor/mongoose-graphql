const Fruit = require('../models/Fruit');

const fruitResolver = {
  Query: {
    async fruits() {
      return await Fruit.find();
    },
    async fruit(_, {id}) {
      return await Fruit.findById(id);
    },
    async findFruitByName(_, {name}) {
      return await Fruit.find({ name });
    }
  },
  Mutation: {
    createFruit(_, {fruit}) {
      return new Fruit(fruit).save();
    },
    async updateFruit(_, {id, fruit}) {
      return await Fruit.findByIdAndUpdate(id, fruit, { new: true });
    },
    async deleteFruit(_, {id}) {
      return await Fruit.findByIdAndRemove(id);
    }
  }
}

module.exports = fruitResolver;
