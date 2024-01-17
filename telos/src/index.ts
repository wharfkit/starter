export * from '@wharfkit/starter'

import {
    // AccountKit,
    APIClient,
    // Chains,
    ContractKit,
    SessionKit,
    TransactPluginResourceProvider,
    WalletPluginAnchor,
    WebRenderer,
} from '@wharfkit/starter'
import {WalletPluginWombat} from '@wharfkit/wallet-plugin-wombat'

const chainUrl = 'https://telos.greymass.com'

export const sessionKit = new SessionKit(
    {
        appName: 'WharfKit App',
        chains: [
            {
                id: '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11',
                url: chainUrl,
            },
        ],
        ui: new WebRenderer(),
        walletPlugins: [new WalletPluginAnchor(), new WalletPluginWombat()],
    },
    {
        transactPlugins: [new TransactPluginResourceProvider()],
    }
)

// Uncomment once we can get the Account Kit to work with rush monorepos
// see https://github.com/microsoft/TypeScript/issues/42873
// export const accountKit = new AccountKit(Chains.Telos)

export const contractKit = new ContractKit({
    client: new APIClient({url: chainUrl}),
})
