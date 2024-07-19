const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(index, timestamp, data, precedingHash = " ") {
    // TODO: Crear el constructor para el nuevo bloque
  }

  computeHash() {

    // TODO: Creemos un hash

  }

  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

class Blockchain {
  constructor() {
    // TODO: Crear el constructor para la nueva cadena.
  }
  startGenesisBlock() {
    return new Block(0, "01/01/2020", "Bloque inicial", "0");
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock) {

    // TODO: Agrega el nuevo bloque a la cadena
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

// TODO: Agregar nuevos bloques
  

console.log(JSON.stringify(newBlockchain, null, 4));

// TODO: Verificar si nuestra cadena es válida