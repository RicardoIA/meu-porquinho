import axios from "axios";
import {
  IAddBalanceWallet,
  ICreateVault,
  IDeleteUser,
  IEditUser,
  IGetTransactions,
  IGetUsers,
  IGetVaults,
  IHandleWithdrawal,
  IPendingWithdrawals,
  ISetPixKey,
  IUserLogin,
  IUserRegistration,
  IWithdrawVault,
} from "../utils/interfaces";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 30 * 1000, // 30 seg
});

class AuthService {
  async register(data: IUserRegistration) {
    return await api.post("/api/auth/register", data);
  }

  async login(data: IUserLogin) {
    return await api.post("/api/auth/login", data);
  }

  async getUser() {
    return await api.get("/api/auth/user");
  }

  async editUser(data: IEditUser) {
    return await api.put(`/api/auth/users/${data.userId}`, data.updateData);
  }

  async deleteUser(data: IDeleteUser) {
    return await api.delete(`/api/auth/users/${data.userId}`);
  }
}

class WalletService {
  async get() {
    return await api.post("/api/wallet");
  }

  async add(data: IAddBalanceWallet) {
    return await api.post("/api/wallet/add", data);
  }

  async setPixKey(data: ISetPixKey) {
    return await api.post("/api/wallet/set-pix-key", data);
  }

  async getPixKey() {
    return await api.get("/api/wallet/pix-key");
  }
}

class TransactionService {
  async getTodaysInvoice() {
    return await api.get("/api/transactions/todays-invoice");
  }

  async getWithdrawalsSummary() {
    return await api.get("/api/transactions/withdrawals-summary");
  }

  async getAdminDepositCount() {
    return await api.get("/api/transactions/admin-deposit-count");
  }

  async getTotalDeposits() {
    return await api.get("/api/transactions/total-deposits");
  }

  async getUserDepositCount() {
    return await api.get("/api/transactions/deposit-count");
  }

  async getPendingWithdrawals() {
    return await api.get("/api/transactions", {
      params: <IPendingWithdrawals>{
        status: "pending",
        type: "debit",
      },
    });
  }

  async getTransactions(data: IGetTransactions) {
    return await api.get("/api/transactions", {
      params: data,
    });
  }

  async handleWithdrawal(data: IHandleWithdrawal) {
    return await api.post("/api/transactions//handle-withdrawal", data);
  }
}

class VaultService {
  async create(data: ICreateVault) {
    return await api.post("/api/vaults/create", data);
  }
  async getAll(data: IGetVaults) {
    return await api.get("/api/vaults", {
      params: data,
    });
  }
  async withdraw(data: IWithdrawVault) {
    return await api.post("/api/vaults/withdraw", data);
  }
}

export const auth = new AuthService();
export const wallet = new WalletService();
export const transaction = new TransactionService();
export const vault = new VaultService();
