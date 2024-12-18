import { TransactionType, WithdrawalAction } from "./enums";

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
export interface IUserResetPassword {
  email: string;
}

/// Wallet
export interface IAddBalanceWallet {
  amount: number;
}
export interface ISetPixKey {
  pixKey: string;
  // pixKeyType: WalletPixKeyType;
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
  depositAmount: number;
  walletId: number;
  withdrawDate: Date;
}
export interface IGetVaults {
  page: number;
  limit: number;
}
export interface IWithdrawVault {
  vaultId: number;
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
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IModelWallet {
  walletId: number;
  userId: number;
  balance: number;
  bonusBalance: number;
  transactionToken: string;
  pixKey: string;
  pixKeyType: string;
}

/** Auth User */
export interface IAuthContextType {
  login: (userLogin: IUserLogin) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (data: IUserRegistration) => Promise<boolean>;
  resetPassword: (data: IUserResetPassword) => Promise<boolean>;
  isLoading: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  error: string | any;
  user: IModelUser | null;
  token: string | null;
}

export interface IUserDepositProps {
  value: number;
  withdrawDate: string | undefined;
}

export interface IUserWithdrawProps {
  title: string;
  vault: IModelVault;
  pixKey?: string;
}

export interface IUserEditPix {
  pixKey: string | undefined;
  pixType: string | undefined;
}
