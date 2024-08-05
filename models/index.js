const Category = require('./category'); 
const Product = require('./product'); 
const Tag = require('./tag'); 
const ProductTag = require('./ProductTag'); 

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};
