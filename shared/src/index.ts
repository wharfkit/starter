export * from '@wharfkit/session'
export * from '@wharfkit/web-renderer'
export * from '@wharfkit/wallet-plugin-anchor'
export * from '@wharfkit/account'
export * from '@wharfkit/contract'
export * from '@wharfkit/token'
export * from '@wharfkit/transact-plugin-resource-provider'
export * from '@wharfkit/account-creation-plugin-anchor'

import {WebRenderer} from '@wharfkit/web-renderer'
import {WalletPluginAnchor} from '@wharfkit/wallet-plugin-anchor'
import {SessionKit} from '@wharfkit/session'
import {TransactPluginResourceProvider} from '@wharfkit/transact-plugin-resource-provider'

export const sessionKit = typeof document !== 'undefined' ? new SessionKit(
    {
        appName: 'WharfKit App',
        chains: [
            {
                id: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                url: 'https://eos.greymass.com',
            },
            {
                id: '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11',
                url: 'https://telos.greymass.com',
            },
            {
                id: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
                url: 'https://wax.greymass.com',
            },
            {
                id: '73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d',
                url: 'https://jungle4.greymass.com',
            },
        ],
        ui: new WebRenderer(),
        walletPlugins: [new WalletPluginAnchor()],
    },
    {
        transactPlugins: [new TransactPluginResourceProvider()],
    }
) : undefined
