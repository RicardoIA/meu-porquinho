import { PixKeyType, WithdrawalAction } from "./enums";

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
  pixKeyType: PixKeyType;
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
