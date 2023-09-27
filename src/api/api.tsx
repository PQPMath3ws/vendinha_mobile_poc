import {ClientDebt, ClientInfos} from "../../App";

export class Api {
  private static baseUrl: string =
    'https://modeloproxyapi.interfocus.com.br:4443';

  private static async makeGetRequests(apiUrl: string): Promise<Object> {
    let finalUrl: string = `${this.baseUrl}${apiUrl}`;

    try {
      const response: Response = await fetch(finalUrl);

      if (response.ok) {
        return await response.json();
      } else {
        let res;
        try {
          res = await response.json();
        } catch {
          throw {status: response.status, message: await response.text()};
        }
        throw {status: response.status, message: res[0].atributo};
      }
    } catch (error: any) {
      return error;
    }
  }

  private static async makePostOrPutRequests(
    apiUrl: string,
    method: string,
    body: Object,
  ): Promise<Object> {
    let finalUrl: string = `${this.baseUrl}${apiUrl}`;

    try {
      const response: Response = await fetch(finalUrl, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        return await response.json();
      } else {
        let res;
        try {
          res = await response.json();
        } catch {
          throw {status: response.status, message: await response.text()};
        }
        throw {status: response.status, message: res[0].atributo};
      }
    } catch (error: any) {
      return error;
    }
  }

  static getAllClients = async (): Promise<Object> =>
    await this.makeGetRequests('/api/Cliente/GetOData');

  static getAllDebts = async (): Promise<Object> =>
    await this.makeGetRequests('/api/Divida/GetOData');

  static saveClient = async (client: ClientInfos): Promise<Object> =>
    await this.makePostOrPutRequests('/api/Cliente', 'POST', client);

  static saveDebt = async (debt: ClientDebt): Promise<Object> =>
    await this.makePostOrPutRequests('/api/Divida', 'POST', debt);

  static payDebt = async (debtId: number): Promise<Object> =>
    await this.makePostOrPutRequests('/api/Divida/Pagar', 'PUT', {
      dividaId: debtId,
    });
}
