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
          message: response.statusText,
        };
      }
    } catch (error: any) {
      return error.message;
    }
  }

  static getAllClients = async (): Promise<Object> =>
    await this.makeGetRequests('/api/Cliente/GetOData');

  static getAllDebts = async (): Promise<Object> =>
    await this.makeGetRequests('/api/Divida/GetOData');
}
