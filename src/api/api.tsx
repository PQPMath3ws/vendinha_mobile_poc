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
        throw {
          status: response.status,
          message: await response.text(),
        };
      }
    } catch (error: any) {
      return error.message;
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
        throw {
          status: response.status,
          message: await response.text(),
        };
      }
    } catch (error: any) {
      return await error.text();
    }
  }

  static getAllClients = async (): Promise<Object> =>
    await this.makeGetRequests('/api/Cliente/GetOData');

  static getAllDebts = async (): Promise<Object> =>
    await this.makeGetRequests('/api/Divida/GetOData');

  static payDebt = async (debtId: number): Promise<Object> =>
    await this.makePostOrPutRequests('/api/Divida/Pagar', 'PUT', {
      dividaId: debtId,
    });
}
