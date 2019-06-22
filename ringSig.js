const lrs = require('lrs');

var john = lrs.gen();
var mary = lrs.gen();
var debbie = lrs.gen();

var group = [john,mary,debbie].map(x => x.publicKey);

var vote1 = lrs.sign(group, mary, 'Group voting.');

var verified = lrs.verify(group, vote1, 'Group voting.');
console.log(`The vote has been verified as ${verified}`);

var vote2 = lrs.sign(group, mary, `Voting again.`)

var compared = lrs.link(vote1, vote2);

if (compared == true) {
    console.log(`Both votes are from the same private key.`);
} else {
    console.log(`The votes are from different private keys.`)
}