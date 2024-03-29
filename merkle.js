const { MerkleTree } = require('merkletreejs');

const crypto = require('crypto');

let leaves;
let tree;
let layers;
let root;
let proof;
let verified;

function sha256(data) {
    return crypto.createHash('sha256').update(data).digest();
}

function createLeaves() {
    leaves = ['a','b','c'].map(x => sha256(x));
    console.log(`Leaves:`)
    console.log(leaves);
}

function createTree() {
    tree = new MerkleTree(leaves, sha256);
    console.log(`Tree:`);
    console.log(tree);
}

function getLeaves() {
    leaves = tree.getLeaves();
    console.log(`Leaves:`);
    console.log(leaves);
}

function getLayers() {
    layers = tree.getLayers();
    console.log(`Layers:`);
    console.log(layers);
}

function getRoot() {
    root = tree.getRoot();
    console.log(`Root:`);
    console.log(root);
}

function getProof() {
    proof = tree.getProof(leaves[2]);
    console.log(`Proof:`);
    console.log(proof);
}

function verifyNode() {
    verified = tree.verify(proof,leaves[2], root);
    console.log(`Verified to be:`);
    console.log(verified);
}

createLeaves();
createTree();
getLeaves();
getLayers();
getRoot();
getProof();
verifyNode();