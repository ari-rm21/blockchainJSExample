# blockchainJSExample
This is a basic Blockchain example built on JavaScript

USAGE
to run it need to have install node JS on your computer

#Fisrt steps
run "npm install crypto-js"
execute "node blockchain.js"

Output
node blockchain.js

{

    "blockchain": [
        {
            "index": 0,
            "timestamp": "01/01/2020",
            "data": "Initial Block in the Chain",
            "precedingHash": "0",
            "hash": "f556af85a25f2883d26b011d041ab717f3a82f6c9e2d8bd897510c13ec14e61f",
            "nonce": 0
        },
        {
            "index": 1,
            "timestamp": "19/07/2024",
            "data": {
                "sender": "Ariana Rodriguez",
                "recipient": "Pablo Contreras",
                "quantity": 50
            },
            "precedingHash": "f556af85a25f2883d26b011d041ab717f3a82f6c9e2d8bd897510c13ec14e61f",
            "hash": "0000709dc145fa8ebfd22725bac2f632e0ace2c7aa482beaa4bec5613f062724",
            "nonce": 15073
        },
        {
            "index": 2,
            "timestamp": "19/07/2024",
            "data": {
                "sender": "Pablo Contreras",
                "recipient": "Laura Campos",
                "quantity": 30
            },
            "precedingHash": "0000709dc145fa8ebfd22725bac2f632e0ace2c7aa482beaa4bec5613f062724",
            "hash": "00000d4f85b274a90ad09196daf10b90307e4a8a46ca0acf1397549b4e59f6b3",
            "nonce": 24413
        }
    ],
    "difficulty": 4
}
true

