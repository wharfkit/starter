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
import { WalletPluginWombat } from "@wharfkit/wallet-plugin-wombat"

const chainUrl = "https://eos.greymass.com"

export const sessionKit = new SessionKit({
  appName: "WharfKit App",
  chains: [
    {
      id: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
      url: chainUrl,
    },
  ],
  ui: new WebRenderer(),
  walletPlugins: [new WalletPluginAnchor(), new WalletPluginWombat()],
}, {
  transactPlugins: [new TransactPluginResourceProvider()],
})

export const accountKit = new AccountKit(Chains.EOS)

export const contractKit = new ContractKit({
  client: new APIClient({ url: chainUrl })
})
