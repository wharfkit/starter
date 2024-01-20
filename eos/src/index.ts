export * from '@wharfkit/starter'

import {
    APIClient,
    ContractKit,
    SessionKit,
    TransactPluginResourceProvider,
    WalletPluginAnchor,
    WebRenderer,
} from '@wharfkit/starter'
import {WalletPluginScatter} from '@wharfkit/wallet-plugin-scatter'
import {WalletPluginTokenPocket} from '@wharfkit/wallet-plugin-tokenpocket'
import {WalletPluginWombat} from '@wharfkit/wallet-plugin-wombat'

const chainUrl = 'https://eos.greymass.com'

export const sessionKit = typeof document !== 'undefined' ? new SessionKit(
    {
        appName: 'WharfKit App',
        chains: [
            {
                id: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                url: chainUrl,
            },
        ],
        ui: new WebRenderer(),
        walletPlugins: [
            new WalletPluginAnchor(),
            new WalletPluginScatter(),
            new WalletPluginTokenPocket(),
            new WalletPluginWombat(),
        ],
    },
    {
        transactPlugins: [new TransactPluginResourceProvider()],
    }
) : undefined

// Uncomment once we can get the Account Kit to work with rush monorepos
// see https://github.com/microsoft/TypeScript/issues/42873
// export const accountKit = new AccountKit(Chains.EOS)

export const contractKit = new ContractKit({
    client: new APIClient({url: chainUrl}),
})
