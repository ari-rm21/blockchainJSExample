const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  // proofOfWork(difficulty) {
  //   while (
  //     this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
  //   ) {
  //     this.nonce++;
  //     this.hash = this.computeHash();
  //   }
  // }

  proofOfWork(difficulty) {
    const target = '0'.repeat(difficulty);
    while (true) {
      this.hash = this.computeHash();
      if (this.hash.substring(0, difficulty) === target) {
        break; // Encontramos un hash válido que cumple con la dificultad
      }
      this.nonce++; // Incrementamos el nonce y probamos de nuevo
    }
  }



}




class Blockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = 4;
  }
  startGenesisBlock() {
    return new Block(0, "01/01/2020", "Initial Block in the Chain", "0");
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    //newBlock.hash = newBlock.computeHash();
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      if (currentBlock.precedingHash !== precedingBlock.hash) return false;
    }
    return true;
  }
}

let newBlockchain = new Blockchain();

newBlockchain.addNewBlock(
    new Block(1, "19/07/2024", {
      sender: "Ariana Rodriguez",
      recipient: "Pablo Contreras",
      quantity: 50
    })
  );


newBlockchain.addNewBlock(
    new Block(2, "19/07/2024", {
        sender: "Pablo Contreras",
        recipient: "Laura Campos",
        quantity: 30
      })
  );
  

console.log(JSON.stringify(newBlockchain, null, 4));

console.log(newBlockchain.checkChainValidity());