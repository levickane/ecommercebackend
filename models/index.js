// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Driver.hasOne(License, {
//     foreignKey: 'driver_id',
//     onDelete: 'CASCADE',
//   });

//   License.belongsTo(Driver, {
//     foreignKey: 'driver_id',
//   });

//   // Define a Driver as having many Cars, thus creating a foreign key in the `car` table
//   Driver.hasMany(Car, {
//     foreignKey: 'driver_id',
//     onDelete: 'CASCADE',
//   });

//   // The association can also be created from the Car side
//   Car.belongsTo(Driver, {
//     foreignKey: 'driver_id',
//   });
// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
