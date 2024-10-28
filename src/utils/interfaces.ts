import {
  WalletPixKeyType,
  TransactionType,
  VaultStatus,
  WithdrawalAction,
} from "./enums";

export interface IUserRegistration {
  username: string;
  password: string;
  email: string;
  phone: string;
  cpf: string;
}

// Auth
export interface IUserLogin {
  username: string;
  password: string;
}
export interface IGetUsers {
  page: number;
  limit: number;
}
export interface IEditUser {
  userId: number;
  updateData: any;
}
export interface IDeleteUser {
  userId: string;
}

/// Wallet
export interface IAddBalanceWallet {
  amount: number;
}
export interface ISetPixKey {
  pixKey: string;
  pixKeyType: WalletPixKeyType;
}

// Transaction
export interface IPendingWithdrawals {
  status: string;
  type: string;
}
export interface IHandleWithdrawal {
  transactionId: number;
  action: WithdrawalAction;
}
export interface IGetTransactions {
  page: number;
  limit: number;
}

// Vault
export interface ICreateVault {
  walletId: number;
  depositAmount: number;
  withdrawDate: string;
}
export interface IGetVaults {
  page: number;
  limit: number;
}
export interface IWithdrawVault {
  vaultId: number;
  depositAmmount: number;
}

export interface IModelUser {
  password: string;
  role: string;
  phone: string;
  cpf: string;
  email: string;
  balance: number;
  username: string;
}

// Models
export interface IModelUser {
  password: string;
  role: string;
  phone: string;
  cpf: string;
  email: string;
  balance: number;
}
export interface IModelTransaction {
  transactionId: number;
  userId: number;
  amount: number;
  type: TransactionType;
  balanceAfter: number;
  status: string;
  pixCode: string;
  pixPaymentCodeBase64: string;
}
export interface IModelVault {
  vaultId: number;
  walletId: number;
  depositAmount: number;
  withdrawDate: Date;
  status: VaultStatus;
}
export interface IModelWallet {
  walletId: number;
  userId: number;
  balance: number;
  bonusBalance: number;
  transactionToken: string;
  pixKey: string;
  pixKeyType: WalletPixKeyType;
}

/** Auth User */
export interface IAuthContextType {
  login: (userLogin: IUserLogin) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  user: IModelUser | null;
  token: string | null;
}
