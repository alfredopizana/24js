import bcrypt, { compareSync } from 'bcrypt'

const saltRounds = 10;

const hash = (plainText) => {
    return bcrypt.hash(plainText, saltRounds)
}


/**
 * bycrpt : {
 *  hash: function()
 *  compareSync: function()
 *  ....
 * }
 * 
 */
// {
//     ...{
//         hash,
//         compareSync 
//     },
//     hash
// }

export default {
    ...bcrypt,
    hash
}