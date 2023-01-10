import React from 'react'
import { ExchangeProvider } from '../exchange-context'
import { WalletProvider } from '../wallet-context'

interface iProtectProvidersProps {
    children: React.ReactNode;
  }

const ProtectProviders = ({children}:iProtectProvidersProps)  => {
  return (
        <ExchangeProvider>
            <WalletProvider>
                { children }
            </WalletProvider>
        </ExchangeProvider>
  )
}

export default ProtectProviders