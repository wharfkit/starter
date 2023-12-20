export * from "@wharfkit/starter"

import {
  AccountKit,
  API,
  APIClient,
  Chains,
  ContractKit,
  SessionKit,
  TransactPluginResourceProvider,
  WalletPluginAnchor,
  WebRenderer
} from "@wharfkit/starter"

const chainUrl = "https://jungle4.greymass.com"

export const sessionKit = new SessionKit({
  appName: "WharfKit App",
  chains: [
    {
      id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
      url: chainUrl,
    },
  ],
  ui: new WebRenderer(),
  walletPlugins: [new WalletPluginAnchor()],
}, {
  transactPlugins: [new TransactPluginResourceProvider()],
})

export const accountKit = new AccountKit(Chains.Jungle4)

export const contractKit = new ContractKit({
  client: new APIClient({ url: chainUrl })
})
