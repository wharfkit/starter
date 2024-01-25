export * from '@wharfkit/starter'

import {
    AccountKit,
    APIClient,
    Chains,
    ContractKit,
    SessionKit,
    TransactPluginResourceProvider,
    WalletPluginAnchor,
    WebRenderer,
} from '@wharfkit/starter'

const chainUrl = 'https://eos.greymass.com'

export async function createSessionKit() {
    if (typeof document === 'undefined') {
        throw new Error('EOS createSessionKit can only be used in a browser environment')
    }

    const {WalletPluginScatter} = await import('@wharfkit/wallet-plugin-scatter')
    const {WalletPluginTokenPocket} = await import('@wharfkit/wallet-plugin-tokenpocket')
    const {WalletPluginWombat} = await import('@wharfkit/wallet-plugin-wombat')

    const walletPlugins = [
        new WalletPluginAnchor(),
        new WalletPluginScatter(),
        new WalletPluginTokenPocket(),
        new WalletPluginWombat(),
    ]

    return new SessionKit(
        {
            appName: 'WharfKit App',
            chains: [
                {
                    id: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                    url: chainUrl,
                },
            ],
            ui: new WebRenderer(),
            walletPlugins: walletPlugins,
        },
        {
            transactPlugins: [new TransactPluginResourceProvider()],
        }
    )
}

export function createAccountKit(): AccountKit {
    return new AccountKit(Chains.EOS)
}

export function createContractKit(): ContractKit {
    return new ContractKit({
        client: new APIClient({url: chainUrl}),
    })
}
