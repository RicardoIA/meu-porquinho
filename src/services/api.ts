import axios, { AxiosResponse } from "axios";
import {
  IAddBalanceWallet,
  ICreateVault,
  IDeleteUser,
  IEditUser,
  IGetTransactions,
  IGetVaults,
  IHandleWithdrawal,
  IPendingWithdrawals,
  ISetPixKey,
  IUserLogin,
  IUserRegistration,
  IWithdrawVault,
} from "../utils/interfaces";

const service = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10 * 1000, // 30 seg
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false, // Ignora erros de SSL (não recomendado para produção)
  // }),
});

class AuthService {
  async register(data: IUserRegistration) {
    return await service.post("/api/auth/register", data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  async login(data: IUserLogin): Promise<AxiosResponse<any>> {
    let response: AxiosResponse<any> = {} as AxiosResponse<any>;

    await service
      .post("/api/auth/login", data)
      .then((resp) => {
        response = resp;
      })
      .catch(function (error) {
        let err = {
          name: error.name,
          message: error.message,
          response: { ...error.response.data },
        };

        response = error.response;
      });

    return response;
  }

  async getUser() {
    return await service.get("/api/auth/user");
  }

  async editUser(data: IEditUser) {
    return await service.put(`/api/auth/users/${data.userId}`, data.updateData);
  }

  async deleteUser(data: IDeleteUser) {
    return await service.delete(`/api/auth/users/${data.userId}`);
  }
}

class WalletService {
  async get() {
    return await service.post("/api/wallet");
  }

  async add(data: IAddBalanceWallet) {
    return await service.post("/api/wallet/add", data);
  }

  async setPixKey(data: ISetPixKey) {
    return await service.post("/api/wallet/set-pix-key", data);
  }

  async getPixKey() {
    return await service.get("/api/wallet/pix-key");
  }
}

class TransactionService {
  async getTodaysInvoice() {
    return await service.get("/api/transactions/todays-invoice");
  }

  async getWithdrawalsSummary() {
    return await service.get("/api/transactions/withdrawals-summary");
  }

  async getAdminDepositCount() {
    return await service.get("/api/transactions/admin-deposit-count");
  }

  async getTotalDeposits() {
    return await service.get("/api/transactions/total-deposits");
  }

  async getUserDepositCount() {
    return await service.get("/api/transactions/deposit-count");
  }

  async getPendingWithdrawals() {
    return await service.get("/api/transactions", {
      params: <IPendingWithdrawals>{
        status: "pending",
        type: "debit",
      },
    });
  }

  async getTransactions(data: IGetTransactions) {
    return await service.get("/api/transactions", {
      params: data,
    });
  }

  async handleWithdrawal(data: IHandleWithdrawal) {
    return await service.post("/api/transactions//handle-withdrawal", data);
  }
}

class VaultService {
  async create(data: ICreateVault) {
    return await service.post("/api/vaults/create", data);
  }
  async getAll(data: IGetVaults) {
    return await service.get("/api/vaults", {
      params: data,
    });
  }
  async withdraw(data: IWithdrawVault) {
    return await service.post("/api/vaults/withdraw", data);
  }
}

export const authService = new AuthService();
export const walletService = new WalletService();
export const transactionService = new TransactionService();
export const vaultService = new VaultService();
