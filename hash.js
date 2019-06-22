const sha256 = require('js-sha256');

const document =
  'This is my super secret document that absolutely no one must know about but you.';

const hash = sha256(document);

console.log(
  `I hash my document and save the hash value to the blockchain: ${hash}`
);

if (sha256(document) === hash) {
  console.log(`The document is valid!`);
} else {
  console.log(`The document is invalid.  Its a fake.  A forgery.`);
}

const fake = `This is my super secret document that absolutely no one must know about but you and Ted.`;
if (sha256(fake) === hash) {
  console.log(`The document is valid!`);
} else {
  console.log(`The document is invalid.  Its a fake.  A forgery.`);
}
