const adminService = require('../service/adminService');

// Add new product
const addProduct = async (req, res) => {
    try {
        console.log('Add product request received');
        const product = await adminService.addProduct(req.body);
        res.status(201).json({
            success: true,
            message: 'Product added successfully',
            data: product
        });
    } catch (error) {
        console.error('Add product error:', error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Update product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Update product request received for id:', id);
        const product = await adminService.updateProduct(id, req.body);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: product
        });
    } catch (error) {
        console.error('Update product error:', error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Delete product request received for id:', id);
        await adminService.deleteProduct(id);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        console.error('Delete product error:', error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        console.log('Get all products request received');
        const products = await adminService.getAllProducts();
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        console.error('Get products error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts
};