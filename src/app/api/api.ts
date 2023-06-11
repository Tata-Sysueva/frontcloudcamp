// eslint-disable-next-line eslint-comments/disable-enable-pair -- Not nesseccery in this file
/* eslint-disable @typescript-eslint/naming-convention -- Not nesseccery in this file */
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export interface ApiResponse<T> {
  data: T;
  headers: { [p: string]: string };
  status: number;
  statusText: string;
}

export class ApiService {
  private static _instance: ApiService;

  private _api: AxiosInstance;

  private constructor() {
    this._api = axios.create({
      baseURL: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
      timeout: 10000,
      headers: {}
    });
  }

  public static get Instance(): ApiService {
    // eslint-disable-next-line no-return-assign, @typescript-eslint/no-unnecessary-condition -- Alow in this file
    return this._instance || (this._instance = new this());
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this._api.get(url, config);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Alow in this file
  public post<T, R = any>(
    url: string,
    data: R,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this._api.post(url, data, config);
  }

  public patch<R, T>(
    url: string,
    data: R,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this._api.patch(url, data, config);
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this._api.delete(url, config);
  }

  public put<R, T>(
    url: string,
    data: R,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this._api.put(url, data, config);
  }
}
