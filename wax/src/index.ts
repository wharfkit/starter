export * from "@wharfkit/starter"

import {
  // AccountKit,
  APIClient,
  // Chains,
  ContractKit,
  SessionKit,
  TransactPluginResourceProvider,
  WalletPluginAnchor,
  WebRenderer
} from "@wharfkit/starter"
import { WalletPluginCloudWallet } from "@wharfkit/wallet-plugin-cloudwallet"

const chainUrl = "https://wax.greymass.com"

export const sessionKit = new SessionKit({
  appName: "WharfKit App",
  chains: [
    {
      id: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
      url: chainUrl,
    },
  ],
  ui: new WebRenderer(),
  walletPlugins: [
    new WalletPluginAnchor(),
    new WalletPluginCloudWallet()
  ],
}, {
  transactPlugins: [new TransactPluginResourceProvider()],
})

// Uncomment once we can get the Account Kit to work with rush monorepos
// see https://github.com/microsoft/TypeScript/issues/42873
// export const accountKit = new AccountKit(Chains.WAX)

export const contractKit = new ContractKit({
  client: new APIClient({ url: chainUrl })
})
