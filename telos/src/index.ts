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

const chainUrl = 'https://telos.greymass.com'

export async function createSessionKit(): Promise<SessionKit> {
    if (typeof document === 'undefined') {
        throw new Error('Telos createSessionKit can only be used in a browser environment')
    }

    const {WalletPluginWombat} = await import('@wharfkit/wallet-plugin-wombat')

    return new SessionKit(
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
}

export function createAccountKit(): AccountKit {
    return new AccountKit(Chains.Telos)
}

export function createContractKit(): ContractKit {
    return new ContractKit({
        client: new APIClient({url: chainUrl}),
    })
}
