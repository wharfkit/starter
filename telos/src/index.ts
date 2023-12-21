export * from "@wharfkit/starter"

import {
  AccountKit,
  APIClient,
  Chains,
  ContractKit,
  SessionKit,
  TransactPluginResourceProvider,
  WalletPluginAnchor,
  WebRenderer
} from "@wharfkit/starter"

const chainUrl = "https://telos.greymass.com"

export const sessionKit = new SessionKit({
  appName: "WharfKit App",
  chains: [
    {
      id: "4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11",
      url: chainUrl,
    },
  ],
  ui: new WebRenderer(),
  walletPlugins: [new WalletPluginAnchor()],
}, {
  transactPlugins: [new TransactPluginResourceProvider()],
})

export const accountKit = new AccountKit(Chains.Telos)

export const contractKit = new ContractKit({
  client: new APIClient({ url: chainUrl })
})


