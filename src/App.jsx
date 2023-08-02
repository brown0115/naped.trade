import { Link, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import AdvancedView from "./views/Advanced";

import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import ContractContextProvider from './contexts/ContractContext';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  connectors: [ new MetaMaskConnector({ chains }) ]
});

function App() {

  return (
    <ContractContextProvider>
      <WagmiConfig config={config}>
        <>
          <Routes>
            <Route path="/" element={<AdvancedView />} />
            <Route path="/advanced-view" element={<AdvancedView />} />
          </Routes>
        </>
      </WagmiConfig>
    </ContractContextProvider>
     
  );
}

export default App;
