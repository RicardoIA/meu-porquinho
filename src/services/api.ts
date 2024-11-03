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
import { AsyncStorageManager } from "../storage/AsyncStorageManager";
import { StoredItem } from "../utils/enums";

const service = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10 * 1000, // 10 seg
});

const getToken = async () => {
  return await AsyncStorageManager.getItem(StoredItem.userToken);
};

const getHeaderAuth = async () => {
  var token = await getToken();
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
};

const configAuth = async () => {
  return {
    headers: await getHeaderAuth(),
  };
};

class AuthService {
  async register(data: IUserRegistration): Promise<AxiosResponse<any>> {
    let response: AxiosResponse<any> = {} as AxiosResponse<any>;

    await service
      .post("/api/auth/register", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((resp) => {
        response = resp;
      })
      .catch(function (error) {
        response = error.response;
      });

    return response;
  }

  async login(data: IUserLogin): Promise<AxiosResponse<any>> {
    let response: AxiosResponse<any> = {} as AxiosResponse<any>;

    await service
      .post("/api/auth/login", data)
      .then((resp) => {
        response = resp;
      })
      .catch(function (error) {
        response = error.response;
      });

    return response;
  }

  async getUser() {
    return await service.get("/api/auth/user", await configAuth());
  }

  async editUser(data: IEditUser) {
    return await service.put(
      `/api/auth/users/${data.userId}`,
      data.updateData,
      await configAuth()
    );
  }

  async deleteUser(data: IDeleteUser) {
    return await service.delete(
      `/api/auth/users/${data.userId}`,
      await configAuth()
    );
  }
}

class WalletService {
  async get() {
    return await service.get("/api/wallet", await configAuth());
  }

  async add(data: IAddBalanceWallet) {
    return await service.post("/api/wallet/add", data, await configAuth());
  }

  async setPixKey(data: ISetPixKey) {
    return await service.post(
      "/api/wallet/set-pix-key",
      data,
      await configAuth()
    );
  }

  async getPixKey() {
    return await service.get("/api/wallet/pix-key", await configAuth());
  }
}

class TransactionService {
  async getTodaysInvoice() {
    return await service.get(
      "/api/transactions/todays-invoice",
      await configAuth()
    );
  }

  async getWithdrawalsSummary() {
    return await service.get(
      "/api/transactions/withdrawals-summary",
      await configAuth()
    );
  }

  async getAdminDepositCount() {
    return await service.get(
      "/api/transactions/admin-deposit-count",
      await configAuth()
    );
  }

  async getTotalDeposits() {
    return await service.get(
      "/api/transactions/total-deposits",
      await configAuth()
    );
  }

  async getUserDepositCount() {
    return await service.get(
      "/api/transactions/deposit-count",
      await configAuth()
    );
  }

  async getPendingWithdrawals() {
    return await service.get("/api/transactions", {
      params: <IPendingWithdrawals>{
        status: "pending",
        type: "debit",
      },
      headers: await getHeaderAuth(),
    });
  }

  async getTransactions(data: IGetTransactions) {
    return await service.get("/api/transactions", {
      params: data,
      headers: await getHeaderAuth(),
    });
  }

  async handleWithdrawal(data: IHandleWithdrawal) {
    return await service.post(
      "/api/transactions//handle-withdrawal",
      data,
      await configAuth()
    );
  }
}

class VaultService {
  async create(data: ICreateVault) {
    return await service.post("/api/vaults/create", data, await configAuth());
  }
  async getAll(data: IGetVaults) {
    return await service.get("/api/vaults", {
      params: data,
      headers: await getHeaderAuth(),
    });
  }
  async withdraw(data: IWithdrawVault) {
    return await service.post("/api/vaults/withdraw", data, await configAuth());
  }
}

export const authService = new AuthService();
export const walletService = new WalletService();
export const transactionService = new TransactionService();
export const vaultService = new VaultService();
