import type { Wallet } from "@near-wallet-selector/core";
import type { ModuleState } from "@near-wallet-selector/core";

export type Theme = "dark" | "light" | "auto";

export interface ModalOptions {
  contractId: string;
  methodNames?: Array<string>;
  theme?: Theme;
  description?: string;
  onHide?: (hideReason: "user-triggered" | "wallet-navigation") => void;
}

export interface WalletSelectorModal {
  show(): void;
  hide(): void;
}

type AlertMessageModalRouteParams = {
  wallet: Wallet;
};

type WalletOptionsModalRouteParams = {
  wallet: Wallet;
};

type DerivationPathModalRouteParams = {
  walletId: string;
};

type WalletNotInstalledModalRouteParams = {
  module: ModuleState;
};

type WalletNetworkChangedModalRouteParams = {
  wallet: Wallet;
};

type WalletConnectingModalRouteParams = {
  wallet: Wallet;
};

type AlertMessageModalRoute = {
  name: "AlertMessage";
  params?: AlertMessageModalRouteParams;
};

type WalletOptionsModalRoute = {
  name: "WalletOptions";
  params?: WalletOptionsModalRouteParams;
};

type DerivationPathModalRoute = {
  name: "DerivationPath";
  params: DerivationPathModalRouteParams;
};

type WalletNotInstalledModalRoute = {
  name: "WalletNotInstalled";
  params?: WalletNotInstalledModalRouteParams;
};

type WalletNetworkChangedModalRoute = {
  name: "WalletNetworkChanged";
  params?: WalletNetworkChangedModalRouteParams;
};

type WalletConnectingModalRoute = {
  name: "WalletConnecting";
  params?: WalletConnectingModalRouteParams;
};

export type ModalRoute =
  | AlertMessageModalRoute
  | WalletOptionsModalRoute
  | DerivationPathModalRoute
  | WalletNotInstalledModalRoute
  | WalletNetworkChangedModalRoute
  | WalletConnectingModalRoute;
