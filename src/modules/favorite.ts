import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';

export class FavoriteModule {
  constructor(private client: WeChatBotClient) {}

  syncFavorite(syncKey: string, token: string): Promise<ApiResponse> {
    return this.client.request('/syncFavorite', token, { syncKey });
  }

  getFavorite(favId: number, token: string): Promise<ApiResponse> {
    return this.client.request('/getFavorite', token, { favId });
  }

  deleteFavorite(favId: number, token: string): Promise<ApiResponse> {
    return this.client.request('/deleteFavorite', token, { favId });
  }
}
