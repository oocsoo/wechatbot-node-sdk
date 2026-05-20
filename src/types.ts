export interface ApiResponse<T = any> {
  ret: number;
  msg: string;
  data: T | null;
}

export interface ClientOptions {
  baseUrl?: string;
  timeout?: number;
}
