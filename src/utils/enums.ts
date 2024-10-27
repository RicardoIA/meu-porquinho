export enum HttpMethod {
  GET,
  DELETE,
  PATCH,
  POST,
  PUT,
}

export enum WalletPixKeyType {
  document,
  phoneNumber,
  email,
  randomKey,
  paymentCode,
}

export enum TransactionType {
  credit,
  debit,
}

export enum WithdrawalAction {
  approved,
}

export enum WithdrawalStatus {
  pending,
}

export enum VaultStatus {
  active,
  closed,
}
