// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ProductRegistry {
    // Struct to store product details
    struct Product {
        string name;
        string manufacturer;
        uint256 price;
        // Add more fields as needed
    }

    // SPDX-License-Identifier: GPL-3.0
    // Mapping to store products by their IDs
    mapping(uint256 => Product) products;

    // Event to emit when a new product is added
    event ProductAdded(uint256 productId);

    // Function to add a new product
    function addProduct(uint256 productId, string memory name, string memory manufacturer, uint256 price) external {
        // Check if the product ID already exists
        require(products[productId].price == 0, "Product already exists");

        // Create a new product instance
        Product memory newProduct = Product(name, manufacturer, price);

        // Store the product in the mapping
        products[productId] = newProduct;

        // Emit an event
        emit ProductAdded(productId);
    }

    // Function to retrieve product details by ID
    function getProduct(uint256 productId) external view returns (string memory, string memory, uint256) {
        // Check if the product exists
        require(products[productId].price > 0, "Product does not exist");

        // Return product details
        return (products[productId].name, products[productId].manufacturer, products[productId].price);
    }
}
