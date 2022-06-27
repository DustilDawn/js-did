/**
 * Manages user account and DID in web based environments.
 *
 * ## Purpose
 *
 * Manages, creates and authorizes a DID session key for a user. Returns an authenticated DIDs instance
 * to be used in other Ceramic libraries. Supports did:pkh for blockchain accounts with Sign-In with
 * Ethereum and CACAO for authorization.
 *
 * ## Installation
 *
 * ```sh
 * npm install @glazed/did-session
 * ```
 *
 * ## Usage
 *
 * Create an instance, authorize and use DIDs where needed. At the moment, only Ethereum accounts
 * are supported with the EthereumAuthProvider. Additional accounts will be supported in the future.
 *
 * ```ts
 * import { DIDSession } from '@glazed/did-session'
 * import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'
 *
 * const ethProvider = // import/get your web3 eth provider
 * const addresses = await ethProvider.enable()
 * const authProvider = new EthereumAuthProvider(ethProvider, addresses[0])
 *
 * const session = new DIDSession({ authProvider })
 * const did = await session.authorize()
 *
 * // Uses DIDs in ceramic & glaze libraries, ie
 * const ceramic = new CeramicClient()
 * ceramic.did = did
 *
 * // pass ceramic instance where needed
 *
 * ```
 *
 * @module did-session
 */

import { Ed25519Provider } from 'key-did-provider-ed25519'
import KeyDidResolver from 'key-did-resolver'
import { randomBytes } from '@stablelib/random'
import { DID } from 'dids'
import type { EthereumAuthProvider, CapabilityOpts } from '@ceramicnetwork/blockchain-utils-linking'

export type SessionParams = {
  /**
   * An authProvider for the chain you wish to support, only ETH supported at moment
   */
  authProvider: EthereumAuthProvider
}

export async function createDIDKey(seed?: Uint8Array): Promise<DID> {
  const didProvider = new Ed25519Provider(seed || randomBytes(32))
  const didKey = new DID({
    provider: didProvider,
    resolver: KeyDidResolver.getResolver(),
  })
  await didKey.authenticate()
  return didKey
}

/**
 * DID Session
 *
 * ```sh
 * import { DIDSession } from '@glazed/did-session'
 * ```
 */
export class DIDSession {
  #authProvider: EthereumAuthProvider
  #did?: DID

  constructor(params: SessionParams) {
    this.#authProvider = params.authProvider
  }

  /**
   * Get authProvider
   */
  get authProvider() {
    return this.#authProvider
  }

  /**
   * Request authorization for session
   */
  async authorize(capabilityOpts: CapabilityOpts = {}): Promise<DID> {
    const didKey = await createDIDKey()
    // Pass through opts resources instead, resource arg does not support anything but streamids at moment
    const opts = Object.assign({ resources: [`ceramic://*`] }, capabilityOpts)
    const cacao = await this.#authProvider.requestCapability(didKey.id, [], opts)
    const didWithCap = didKey.withCapability(cacao)
    await didWithCap.authenticate()
    this.#did = didWithCap
    return didWithCap
  }

  /**
   * Get DID instance, if authorized
   */
  getDID(): DID {
    if (!this.#did) {
      throw new Error('DID not available, has not authorized')
    }
    return this.#did
  }

  /** DID string associated to the session instance. session.id == session.getDID().parent */
  get id(): string {
    if (!this.#did) {
      throw new Error('ID not available, has not authorized')
    }
    return this.#did.parent
  }
}