const Product = require('../model/product');

// Add new product service
const addProduct = async (productData) => {
    try {
        console.log('Adding new product:', productData);
        const product = await Product.create(productData);
        console.log('Product added successfully:', product);
        return product;
    } catch (error) {
        console.error('Error adding product:', error);
        throw new Error(error.message);
    }
};

// Update product service
const updateProduct = async (productId, updateData) => {
    try {
        console.log('Updating product:', productId);
        const product = await Product.findByIdAndUpdate(
            productId,
            updateData,
            { new: true, runValidators: true }
        );
        
        if (!product) {
            throw new Error('Product not found');
        }
        
        console.log('Product updated successfully:', product);
        return product;
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error(error.message);
    }
};

// Delete product
const deleteProduct = async (productId) => {
    try {
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        console.log('Product deleted successfully');
        return product;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw new Error(error.message);
    }
};

// Get all products with pagination and filters
const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error(error.message);
    }
};



module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts
};