import Web3 from 'web3'

export const signIn = (req, res) => {
  const web3Eth = new Web3('http://localhost:8545').eth

  const signatureObject = {
    message: 'Some data',
    messageHash: '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
    v: '0x1c',
    r: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd',
    s: '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029',
    signature: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c'
  } 

  const { message, signature } = signatureObject


  const account = web3Eth.accounts.recover(message, signature)
  res.json({ account })
  
  // check in smart contract
  

  // if all looks good, samlp.auth

  // Generate SAML response and create session
}

// Optional method to sign out of a particular service
export const signOut = (req, res, next) => {
  // Redirect user to service provider sign out if available
}
