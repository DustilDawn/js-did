# Ethereum AuthMethod and Verifier


## Installation

```
npm install --save ethereum-cacao
```

## Usage

```ts
// Auth Usage
import { EthereumWebAuth, getAccountId } from 'ethereum-cacao'
// ...

const ethProvider = // import/get your web3 eth provider
const addresses = await ethProvider.enable()
const accountId = await getAccountId(ethProvider, addresses[0])
const authMethod = EthereumWebAuth.getAuthMethod(provider, accountId)

// ...

const client = new ComposeClient({ceramic, definition})
const resources = client.resources

const session = await DIDSession.authorize(authMethod, { resources })
client.setDID(session.did)


// Verifier Usage
import { Cacao } from 'ceramic-cacao'

const verifiers = {
	...EthereumWebAuth.getEIP191Verifier()
}

Cacao.verify(cacao, { verifiers, ...opts})
```

## License

Apache-2.0 OR MIT