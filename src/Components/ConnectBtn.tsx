import { ConnectionProvider, WalletProvider, useWallet } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import React, {FC, ReactNode, useEffect, useMemo} from 'react';
import '@solana/wallet-adapter-react-ui/styles.css';

const Context: FC<{ children: ReactNode}> = ({children}) => {

    const endpoint = "localhost:3000"; 
  
    const wallets = useMemo( () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new TorusWalletAdapter()
    ], []);
  
    return (
      <ConnectionProvider endpoint={ endpoint }>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    )
  }
  
  const Content: FC = () => {
    const { connected } = useWallet();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (connected) {
        navigate('/main'); 
      }
      else{
        navigate('/')
      }
    }, [connected, navigate]);
  
    return (
      <div> 
        <WalletMultiButton  />
      </div>
    );
  }

  export { Context, Content };
