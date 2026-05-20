import axios, { AxiosInstance } from 'axios';
import { ApiResponse, ClientOptions } from './types';
import { AuthModule } from './modules/auth';
import { MessageModule } from './modules/message';
import { GroupModule } from './modules/group';
import { ContactModule } from './modules/contact';
import { PersonalModule } from './modules/personal';
import { FavoriteModule } from './modules/favorite';
import { LabelModule } from './modules/label';
import { DownModule } from './modules/download';
import { SnsModule } from './modules/sns';
import { FinderModule } from './modules/finder';

export class WeChatBotClient {
  private http: AxiosInstance;

  readonly auth: AuthModule;
  readonly message: MessageModule;
  readonly group: GroupModule;
  readonly contact: ContactModule;
  readonly personal: PersonalModule;
  readonly favorite: FavoriteModule;
  readonly label: LabelModule;
  readonly download: DownModule;
  readonly sns: SnsModule;
  readonly finder: FinderModule;

  constructor(options: ClientOptions = {}) {
    this.http = axios.create({
      baseURL: options.baseUrl ?? 'http://124.221.45.58',
      timeout: options.timeout ?? 30000,
      headers: { 'Content-Type': 'application/json' },
    });

    this.auth = new AuthModule(this);
    this.message = new MessageModule(this);
    this.group = new GroupModule(this);
    this.contact = new ContactModule(this);
    this.personal = new PersonalModule(this);
    this.favorite = new FavoriteModule(this);
    this.label = new LabelModule(this);
    this.download = new DownModule(this);
    this.sns = new SnsModule(this);
    this.finder = new FinderModule(this);
  }

  async request<T = any>(endpoint: string, token: string, payload: object = {}): Promise<ApiResponse<T>> {
    try {
      const headers: Record<string, string> = {};
      if (token) {
        headers['AUTHORIZATION'] = token;
      }
      const res = await this.http.post<ApiResponse<T>>(endpoint, payload, { headers });
      return res.data;
    } catch (e: any) {
      return { ret: -1, msg: `系统或网络异常: ${e.message}`, data: null };
    }
  }
}
