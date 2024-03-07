const Web3 = require('web3');

// Connect to the Ethereum node
const web3 = new Web3('https://etherscan.io/address/0xd9145CCE52D386f254917e481eB44e9943F39138'); // Update with your Ethereum node URL

// ABI (Application Binary Interface) of the deployed smart contract
const abi = [
    // Add ABI here (you can get it from Remix IDE after deploying the contract)
];

// Address of the deployed smart contract
const contractAddress = '0x123...'; // Update with your contract address

// Create an instance of the smart contract
const contract = new web3.eth.Contract(abi, contractAddress);

// Example function to add a new product
async function addProduct(productId, name, manufacturer, price) {
    try {
        // Call the addProduct function of the smart contract
        const tx = await contract.methods.addProduct(productId, name, manufacturer, price).send({ from: '0xYourAddress' }); // Update with your address
        console.log('Transaction hash:', tx.transactionHash);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example function to get product details by ID
async function getProduct(productId) {
    try {
        // Call the getProduct function of the smart contract
        const result = await contract.methods.getProduct(productId).call();
        console.log('Product details:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the functions
addProduct(1, 'Product 1', 'Manufacturer 1', 100);
getProduct(1);