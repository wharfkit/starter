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
import {WalletPluginCloudWallet} from '@wharfkit/wallet-plugin-cloudwallet'

const chainUrl = 'https://wax.greymass.com'

export async function createSessionKit(): Promise<SessionKit> {
    if (typeof document === 'undefined') {
        throw new Error('WAX createSessionKit can only be used in a browser environment')
    }

    const {WalletPluginWombat} = await import('@wharfkit/wallet-plugin-wombat')

    return new SessionKit(
        {
            appName: 'WharfKit App',
            chains: [
                {
                    id: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
                    url: chainUrl,
                },
            ],
            ui: new WebRenderer(),
            walletPlugins: [
                new WalletPluginAnchor(),
                new WalletPluginCloudWallet(),
                new WalletPluginWombat(),
            ],
        },
        {
            transactPlugins: [new TransactPluginResourceProvider()],
        }
    )
}

export function createAccountKit(): AccountKit {
    return new AccountKit(Chains.WAX)
}

export function createContractKit(): ContractKit {
    return new ContractKit({
        client: new APIClient({url: chainUrl}),
    })
}
