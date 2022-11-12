first wallet ec length large
//----------------------------------------------------------------------------------------------------------------------------------------------------------------//
const crypto = require('crypto');
// const bob = crypto.createECDH('secp256k1');
const bob = crypto.createECDH('secp521r1');
// bob.generateKeys();
const bobKeys = bob.generateKeys();
// const privateKey = bob.getPrivateKey().toString('base64');
const privateKey = `-----BEGIN EC PRIVATE KEY-----\n${bobKeys.toString('base64').match(/.{1,64}/g).join('\n')}\n-----END EC PRIVATE KEY-----`;
// const privateKey = bob.getPrivateKey()
console.log(privateKey)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------//

result:
-----BEGIN EC PRIVATE KEY-----
BAEyDz/Y2Pms1eZse8jSCA1/LFeow82qxXQrl7fBS+G0j+ZG6W8rqxvSxyAkzuod
lJJP1yJOjPe43f2TYJNwtI5CKwG4SdSmt1NrtZj0f2/qQv8ROOwALrRM0QKhx76a
6zrsVLMhxzmwsfZG08vym27beeBwfbJgW8vjNzXsQFeK1ftudg==
-----END EC PRIVATE KEY-----
//---------------------------------------------------------------------------------------------------------------------------------------------------------------//

second is small length
//
const crypto = require('crypto');
const bob = crypto.createECDH('secp256k1');
// const bob = crypto.createECDH('secp521r1');
bob.generateKeys();
// const bobKeys = bob.generateKeys();
// const privateKey = bob.getPrivateKey().toString('base64');
const privateKey = `-----BEGIN EC PRIVATE KEY-----\n${bob.generateKeys().toString('base64').match(/.{1,64}/g).join('\n')}\n-----END EC PRIVATE KEY-----`;

console.log(privateKey)

//----------------------------------------------------------
result:
-----BEGIN EC PRIVATE KEY-----
BPgUBr/CfP01XE9yeJ9V2WAGOjY6YdqkoylAqbjo1XmOs2mRpFsnUAkw35V6LpOl
PMKR0Vf252akFRsR4HiHGBU=
-----END EC PRIVATE KEY-----
//------------------------------------------------------------------------------
//large length ec


const crypto = require('crypto');
// const bob = crypto.createECDH('secp256k1');//<=make small length
const bob = crypto.createECDH('secp521r1');//<= this make large length
bob.generateKeys();
// const bobKeys = bob.generateKeys();
// const privateKey = bob.getPrivateKey().toString('base64');
const privateKey = `-----BEGIN EC PRIVATE KEY-----\n${bob.generateKeys().toString('base64').match(/.{1,64}/g).join('\n')}\n-----END EC PRIVATE KEY-----`;

console.log(privateKey)
//---------------------------------------------------------------------------------------
result :
-----BEGIN EC PRIVATE KEY-----
BAFkV1m5gUrGMyA5yZEzYXNPOjHUg/lCu091fw3RZKLduj5pUgN/UjdPBURRohad
ZYlxxr8FksJ5C36nW+7MUq0WdgD/hLAngVOslnQUVRx+yf2jE2QRkpHK6H1CwU8u
14RdI4nBYdE7rBBr2bLtcyxuJqmxwvqrv/hgRaByjRFKdRKD2Q==
-----END EC PRIVATE KEY-----

//--------------------------------------------------------------------

//simple base64
const crypto = require('crypto');
// const bob = crypto.createECDH('secp256k1');//<=make small length
const bob = crypto.createECDH('secp521r1');//<= this make large length
bob.generateKeys();

const privateKey = bob.getPrivateKey().toString('base64');

console.log(privateKey)
//----------------------------------------------------


result:
Adhz8NYY+/IKMX/w04T7u4GtvCcc7olhIaLCsEFkIFCPdh7nHNPIbBhWGADQSYn2syuErqM52T5a2gCdd74E4jVe




