# wechatbot-node-sdk

基于WeChatBot开放平台API封装的 Node.js SDK（TypeScript），提供简洁易用的接口调用方式。

## 安装
```bahs
git clone https://github.com/oocsoo/wechatbot-node-sdk
```
```bash
cd wechatbot-node-sdk
```
```bash
npm install
```

## 快速开始

```typescript
import { WeChatBotClient } from 'wechatbot-node-sdk';

const client = new WeChatBotClient();
const token = 'your_token';

// 获取登录二维码
const qr = await client.auth.getQrcode(token);
console.log(qr);

// 发送文本消息
const res = await client.message.sendText('wxid_xxxxx', 'Hello!', token);
console.log(res);
```

## 自定义配置

```typescript
const client = new WeChatBotClient({
  baseUrl: 'http://your-server-ip',
  timeout: 60000,
});
```

## 功能模块总览

| 模块 | 属性 | 说明 |
|------|------|------|
| AuthModule | `client.auth` | 登录认证 |
| MessageModule | `client.message` | 消息收发 |
| GroupModule | `client.group` | 群聊管理 |
| ContactModule | `client.contact` | 联系人管理 |
| PersonalModule | `client.personal` | 个人信息 |
| FavoriteModule | `client.favorite` | 收藏夹 |
| LabelModule | `client.label` | 标签管理 |
| DownModule | `client.download` | 资源下载 |
| SnsModule | `client.sns` | 朋友圈 |
| FinderModule | `client.finder` | 视频号 |

## Token 获取

请访问官网 [www.wechatbot.online](http://www.wechatbot.online) 获取 Token。

## 详细用法示例

### 登录认证

```typescript
const qr = await client.auth.getQrcode(token);
const status = await client.auth.refreshStatus(qr.data.uuid, token);
const online = await client.auth.checkStatus(token);
await client.auth.reconnection(token);
await client.auth.logout(token);
```

### 消息收发

```typescript
const to = 'wxid_xxxxx';

// 发送文本（群聊中@某人）
await client.message.sendText(to, '大家好', token, ['wxid_aaa']);

// 发送图片
await client.message.sendImage(to, 'https://example.com/pic.jpg', token);

// 发送语音（silk格式）
await client.message.sendVoice(to, 'https://example.com/voice.silk', 5000, token);

// 发送视频
await client.message.sendVideo(to, 'https://example.com/video.mp4', 'https://example.com/thumb.jpg', 15, token);

// 发送文件
await client.message.sendFile(to, 'report.pdf', 'https://example.com/report.pdf', token);

// 发送链接卡片
await client.message.sendLink(to, '文章标题', '文章描述', 'https://example.com/article', 'https://example.com/thumb.jpg', token);

// 撤回消息
await client.message.revokeMsg(to, 'msg_id', 'new_msg_id', 1700000000, token);
```

### 群聊管理

```typescript
const roomId = 'xxxxx@chatroom';

await client.group.createGroup(['wxid_aaa', 'wxid_bbb', 'wxid_ccc'], token);
await client.group.modifyGroupName('新群名', roomId, token);
await client.group.inviteGroupMember('wxid_ddd,wxid_eee', roomId, '欢迎加入', token);
const info = await client.group.groupInfo(roomId, token);
await client.group.setAnnouncement(roomId, '本群规则：...', token);
await client.group.adminOperate(roomId, 1, ['wxid_aaa'], token);
```

### 联系人管理

```typescript
const contacts = await client.contact.contactsListCache(token);
const detail = await client.contact.detailInfo(['wxid_aaa', 'wxid_bbb'], token);
const result = await client.contact.searchFriend('13800138000', token);
await client.contact.addContacts(3, '你好，我是xxx', 'v4_value', 'v3_value', 2, token);
```

### 朋友圈

```typescript
const sns = await client.sns.snsList(0, true, '', token);
await client.sns.snsSendText([], [], [], '今天天气真好！', false, [], [], token);
await client.sns.snsLike(123456, 1, 'wxid_aaa', token);
```

### 视频号

```typescript
const profile = await client.finder.getProfile(token);
const results = await client.finder.finderSearch('人民日报', token, { category: 1 });
await client.finder.publishFinderWeb('视频标题', 'https://video_url', 'https://thumb_url', '#话题', token);
```

## 环境要求

- Node.js >= 14
- TypeScript >= 4.5（开发时）

## 许可证

[MIT License](LICENSE)

