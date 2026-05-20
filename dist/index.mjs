// src/client.ts
import axios from "axios";

// src/modules/auth.ts
var AuthModule = class {
  constructor(client) {
    this.client = client;
  }
  getQrcode(token, deviceType = "", aid = "") {
    return this.client.request("/getLoginQrCode", token, { type: deviceType, aid });
  }
  refreshStatus(uuid, token, capCode = "") {
    return this.client.request("/refreshStatus", token, {
      uuid,
      auto_sliding: "false",
      cap_code: capCode
    });
  }
  dialogLogin(token) {
    return this.client.request("/dialogLogin", token);
  }
  reconnection(token) {
    return this.client.request("/reconnection", token);
  }
  logout(token) {
    return this.client.request("/logout", token);
  }
  checkStatus(token) {
    return this.client.request("/checkOnline", token);
  }
};

// src/modules/message.ts
var MessageModule = class {
  constructor(client) {
    this.client = client;
  }
  sendText(toWxid, content, token, atList = []) {
    return this.client.request("/sendTextMessage", token, {
      toWxid,
      content,
      atWxidList: atList
    });
  }
  sendImage(toWxid, imageUrl, token) {
    return this.client.request("/sendImageMessage", token, { toWxid, imgUrl: imageUrl });
  }
  sendVoice(toWxid, silkUrl, voiceDuration, token) {
    return this.client.request("/sendVoiceMessage", token, {
      toWxid,
      voiceUrl: silkUrl,
      voiceDuration
    });
  }
  sendVideo(toWxid, videoUrl, thumbUrl, videoDuration, token) {
    return this.client.request("/sendVedioMessage", token, {
      toWxid,
      videoUrl,
      thumbUrl,
      videoDuration
    });
  }
  sendFile(toWxid, fileName, fileUrl, token) {
    return this.client.request("/sendFileMessage", token, { toWxid, fileName, fileUrl });
  }
  sendLink(toWxid, title, desc, linkUrl, thumbUrl, token) {
    return this.client.request("/sendLinkMessage", token, {
      toWxid,
      title,
      desc,
      linkUrl,
      thumbUrl
    });
  }
  sendCard(toWxid, nickname, nameCardWxid, token) {
    return this.client.request("/sendCardMessage", token, {
      toWxid,
      nickName: nickname,
      nameCardWxid
    });
  }
  sendEmoji(toWxid, emojiMd5, emojiSize, token) {
    return this.client.request("/sendEmojiMessage", token, {
      toWxid,
      emojiMd5,
      emojiSize
    });
  }
  sendApp(toWxid, appmsg, token) {
    return this.client.request("/sendAppMessage", token, { toWxid, appmsg });
  }
  sendMiniapp(toWxid, miniAppId, userName, title, coverImgUrl, pagePath, displayName, token) {
    return this.client.request("/sendMiniappMessage", token, {
      toWxid,
      miniAppId,
      userName,
      title,
      coverImgUrl,
      pagePath,
      displayName
    });
  }
  sendLocation(toWxid, content, token) {
    return this.client.request("/sendLocationMessage", token, { toWxid, content });
  }
  revokeMsg(toWxid, msgId, newMsgId, createTime, token) {
    return this.client.request("/sendRevokeMessage", token, {
      toWxid,
      msgId,
      newMsgId,
      createTime
    });
  }
  forwardFile(toWxid, xml, token) {
    return this.client.request("/sendForwardFileMessage", token, { toWxid, xml });
  }
  forwardImage(toWxid, xml, token) {
    return this.client.request("/sendForwardImageMessage", token, { toWxid, xml });
  }
  forwardVideo(toWxid, xml, token) {
    return this.client.request("/sendForwardVideoMessage", token, { toWxid, xml });
  }
  forwardLink(toWxid, xml, token) {
    return this.client.request("/sendForwardUrlMessage", token, { toWxid, xml });
  }
  forwardMiniapp(toWxid, xml, coverImgUrl, token) {
    return this.client.request("/sendForwardMiniAppMessage", token, { toWxid, xml, coverImgUrl });
  }
};

// src/modules/group.ts
var GroupModule = class {
  constructor(client) {
    this.client = client;
  }
  createGroup(wxids, token) {
    return this.client.request("/createGroup", token, { wxids });
  }
  modifyGroupName(chatroomName, chatroomId, token) {
    return this.client.request("/modifyGroupName", token, { chatroomName, chatroomId });
  }
  modifyGroupRemark(chatroomRemark, chatroomId, token) {
    return this.client.request("/modifyGroupRemark", token, { chatroomRemark, chatroomId });
  }
  modifySelfNicknameInGroup(nickName, chatroomId, token) {
    return this.client.request("/modifyGroupNickNameForSelf", token, { nickName, chatroomId });
  }
  inviteGroupMember(wxids, chatroomId, reason, token) {
    return this.client.request("/inviteMember", token, { wxids, chatroomId, reason });
  }
  removeGroupMember(wxids, chatroomId, token) {
    return this.client.request("/removeMember", token, { wxids, chatroomId });
  }
  quitGroup(chatroomId, token) {
    return this.client.request("/quitGroup", token, { chatroomId });
  }
  disbandGroup(chatroomId, token) {
    return this.client.request("/disbandGroup", token, { chatroomId });
  }
  groupInfo(chatroomId, token) {
    return this.client.request("/getGroupInfo", token, { chatroomId });
  }
  groupMember(chatroomId, token) {
    return this.client.request("/getGroupMemberList", token, { chatroomId });
  }
  groupMemberDetail(chatroomId, memberWxids, token) {
    return this.client.request("/getGroupMemberDetail", token, { chatroomId, memberWxids });
  }
  getAnnouncement(chatroomId, token) {
    return this.client.request("/getGroupAnnouncement", token, { chatroomId });
  }
  setAnnouncement(chatroomId, content, token) {
    return this.client.request("/setGroupAnnouncement", token, { chatroomId, content });
  }
  agreeJoinGroup(url, token) {
    return this.client.request("/agreeJoinGroup", token, { url });
  }
  addGroupMemberAsFriend(chatroomId, content, memberWxid, token) {
    return this.client.request("/addGroupMemberAsFriend", token, { chatroomId, content, memberWxid });
  }
  getGroupQr(chatroomId, token) {
    return this.client.request("/getGroupQrCode", token, { chatroomId });
  }
  saveContractList(chatroomId, operType, token) {
    return this.client.request("/saveContractList", token, { chatroomId, operType });
  }
  adminOperate(chatroomId, operType, wxids, token) {
    return this.client.request("/adminOperate", token, { chatroomId, operType, wxids });
  }
  pinnedChat(chatroomId, top, token) {
    return this.client.request("/pinnedChat", token, { chatroomId, top });
  }
  setMsgSilence(chatroomId, silence, token) {
    return this.client.request("/setMsgSilence", token, { chatroomId, silence });
  }
  joinGroupByQr(qrUrl, token) {
    return this.client.request("/joinGroupUsingQRCode", token, { qrUrl });
  }
  applyGroupApprove(chatroomId, msgContent, newMsgId, token) {
    return this.client.request("/groupAccessApplyCheckApprove", token, { chatroomId, msgContent, newMsgId });
  }
};

// src/modules/contact.ts
var ContactModule = class {
  constructor(client) {
    this.client = client;
  }
  contactsList(token) {
    return this.client.request("/fetchContactsList", token);
  }
  contactsListCache(token) {
    return this.client.request("/fetchContactsListCache", token);
  }
  briefInfo(wxids, token) {
    return this.client.request("/getBriefInfo", token, { wxids });
  }
  detailInfo(wxids, token) {
    return this.client.request("/getDetailInfo", token, { wxids });
  }
  searchFriend(contactsInfo, token) {
    return this.client.request("/search", token, { contactsInfo });
  }
  addContacts(scene, content, v4, v3, option, token) {
    return this.client.request("/addContacts", token, { scene, content, v4, v3, option });
  }
  deleteFriend(wxid, token) {
    return this.client.request("/deleteFriend", token, { wxid });
  }
  setFriendPermissions(wxid, onlyChat, token) {
    return this.client.request("/setFriendPermissions", token, { wxid, onlyChat });
  }
  setFriendRemark(wxid, remark, token) {
    return this.client.request("/setFriendRemark", token, { wxid, remark });
  }
  getPhoneList(token, phones = null) {
    return this.client.request("/getPhoneAddressList", token, { phones });
  }
  uploadPhoneList(phones, opType, token) {
    return this.client.request("/uploadPhoneAddressList", token, { phones, opType });
  }
  imSearch(scene, content, token) {
    return this.client.request("/imSearch", token, { scene, content });
  }
  addImFriends(v3, v4, token) {
    return this.client.request("/imAddFriends", token, { v3, v4 });
  }
  syncImFriends(token) {
    return this.client.request("/imSyncFriends", token);
  }
  detailImFriends(toUserName, token) {
    return this.client.request("/imDetailFriends", token, { toUserName });
  }
  checkRelation(wxids, token) {
    return this.client.request("/checkRelation", token, { wxids });
  }
};

// src/modules/personal.ts
var PersonalModule = class {
  constructor(client) {
    this.client = client;
  }
  getInfo(token) {
    return this.client.request("/getPersonalInfo", token);
  }
  getQrcode(token) {
    return this.client.request("/getQrCode", token);
  }
  getDeviceRecord(token) {
    return this.client.request("/getSafetyInfo", token);
  }
  privacySettings(open, option, token) {
    return this.client.request("/privacySettings", token, { open, option });
  }
  updateInfo(city, country, nickName, province, sex, signature, token) {
    return this.client.request("/updatePersonalInfo", token, {
      city,
      country,
      nickName,
      province,
      sex,
      signature
    });
  }
  updateHeadImg(headImgUrl, token) {
    return this.client.request("/updateHeadImg", token, { headImgUrl });
  }
};

// src/modules/favorite.ts
var FavoriteModule = class {
  constructor(client) {
    this.client = client;
  }
  syncFavorite(syncKey, token) {
    return this.client.request("/syncFavorite", token, { syncKey });
  }
  getFavorite(favId, token) {
    return this.client.request("/getFavorite", token, { favId });
  }
  deleteFavorite(favId, token) {
    return this.client.request("/deleteFavorite", token, { favId });
  }
};

// src/modules/label.ts
var LabelModule = class {
  constructor(client) {
    this.client = client;
  }
  addLabel(labelName, token) {
    return this.client.request("/addLabel", token, { labelName });
  }
  listLabel(token) {
    return this.client.request("/listLabel", token);
  }
  deleteLabel(labelIds, token) {
    return this.client.request("/deleteLabel", token, { labelIds });
  }
  modifyFriendLabel(labelIds, wxIds, token) {
    return this.client.request("/modifyMemberList", token, { labelIds, wxIds });
  }
};

// src/modules/download.ts
import * as fs from "fs";
var DownModule = class {
  constructor(client) {
    this.client = client;
  }
  downloadSilkBase64(base64Data, savePath) {
    const buffer = Buffer.from(base64Data, "base64");
    fs.writeFileSync(savePath, buffer);
    return true;
  }
  downloadSilkRequest(msgId, xml, token) {
    return this.client.request("/downloadVoice", token, { msgId, xml });
  }
  downloadFile(xml, token) {
    return this.client.request("/downloadFile", token, { xml });
  }
  downloadImage(type, xml, token) {
    return this.client.request("/downloadImage", token, { type, xml });
  }
  downloadVideo(xml, token) {
    return this.client.request("/downloadVideo", token, { xml });
  }
  downloadEmoji(emojiMd5, token) {
    return this.client.request("/downloadEmoji", token, { emojiMd5 });
  }
  downloadCdn(aesKey, totalSize, type, fileId, suffix, token) {
    return this.client.request("/downloadCdn", token, { aesKey, totalSize, type, fileId, suffix });
  }
};

// src/modules/sns.ts
var SnsModule = class {
  constructor(client) {
    this.client = client;
  }
  snsList(maxId, decrypt, firstPageMd5, token) {
    return this.client.request("/snsList", token, { maxId, decrypt, firstPageMd5 });
  }
  friendsSnsList(maxId, decrypt, wxid, firstPageMd5, token) {
    return this.client.request("/contactsSnsList", token, { maxId, decrypt, wxid, firstPageMd5 });
  }
  snsDetails(snsId, token) {
    return this.client.request("/snsDetails", token, { snsId });
  }
  snsLike(snsId, operType, wxid, token) {
    return this.client.request("/likeSns", token, { snsId, operType, wxid });
  }
  snsComment(snsId, operType, wxid, commentId, content, token) {
    return this.client.request("/commentSns", token, { snsId, operType, wxid, commentId, content });
  }
  snsDelete(snsId, token) {
    return this.client.request("/delSns", token, { snsId });
  }
  snsScope(option, token) {
    return this.client.request("/snsVisibleScope", token, { option });
  }
  snsVisibilityEnable(enabled, token) {
    return this.client.request("/strangerVisibilityEnabled", token, { enabled });
  }
  snsSetStatus(snsId, open, token) {
    return this.client.request("/snsSetPrivacy", token, { snsId, open });
  }
  snsDownloadVideo(snsXml, token) {
    return this.client.request("/downloadSnsVideo", token, { snsXml });
  }
  snsSendText(allowWxIds, atWxIds, disableWxIds, content, privacy, allowTagIds, disableTagIds, token) {
    return this.client.request("/sendTextSns", token, {
      allowWxIds,
      atWxIds,
      disableWxIds,
      content,
      privacy,
      allowTagIds,
      disableTagIds
    });
  }
  snsSendImg(allowWxIds, atWxIds, disableWxIds, content, fileUrl, thumbUrl, fileMd5, length, width, height, privacy, allowTagIds, disableTagIds, token) {
    return this.client.request("/sendImgSns", token, {
      allowWxIds,
      atWxIds,
      disableWxIds,
      content,
      imgInfos: [{ fileUrl, thumbUrl, fileMd5, length, width, height }],
      privacy,
      allowTagIds,
      disableTagIds
    });
  }
  snsUploadImage(imgUrls, token) {
    return this.client.request("/uploadSnsImage", token, { imgUrls });
  }
  snsSendVideo(allowWxIds, atWxIds, disableWxIds, content, fileUrl, thumbUrl, fileMd5, length, privacy, allowTagIds, disableTagIds, token) {
    return this.client.request("/sendVideoSns", token, {
      allowWxIds,
      atWxIds,
      disableWxIds,
      content,
      videoInfo: { fileUrl, thumbUrl, fileMd5, length },
      privacy,
      allowTagIds,
      disableTagIds
    });
  }
  snsUploadVideo(thumbUrl, videoUrl, token) {
    return this.client.request("/uploadSnsVideo", token, { thumbUrl, videoUrl });
  }
  snsSendUrl(allowWxIds, atWxIds, disableWxIds, content, description, title, linkUrl, thumbUrl, privacy, allowTagIds, disableTagIds, token) {
    return this.client.request("/sendUrlSns", token, {
      allowWxIds,
      atWxIds,
      disableWxIds,
      content,
      description,
      title,
      linkUrl,
      thumbUrl,
      privacy,
      allowTagIds,
      disableTagIds
    });
  }
  snsForward(allowWxIds, atWxIds, disableWxIds, snsXml, privacy, allowTagIds, disableTagIds, token) {
    return this.client.request("/forwardSns", token, {
      allowWxIds,
      atWxIds,
      disableWxIds,
      snsXml,
      privacy,
      allowTagIds,
      disableTagIds
    });
  }
};

// src/modules/finder.ts
var FinderModule = class {
  constructor(client) {
    this.client = client;
  }
  createFinder(proxyIp, signature, headImg, nickName, sex, token) {
    return this.client.request("/createFinder", token, { proxyIp, signature, headImg, nickName, sex });
  }
  getProfile(token, proxyIp = "") {
    return this.client.request("/getProfile", token, { proxyIp });
  }
  updateProfile(myUserName, myRoleType, token, options = {}) {
    var _a;
    const payload = { myUserName, myRoleType, proxyIp: (_a = options.proxyIp) != null ? _a : "" };
    if (options.signature) payload.signature = options.signature;
    if (options.headImg) payload.headImg = options.headImg;
    if (options.nickName) payload.nickName = options.nickName;
    if (options.sex !== void 0) payload.sex = options.sex;
    if (options.city) payload.city = options.city;
    if (options.province) payload.province = options.province;
    if (options.country) payload.country = options.country;
    return this.client.request("/updateProfile", token, payload);
  }
  getQrCode(myUserName, myRoleType, token, proxyIp = "") {
    return this.client.request("/finderGetQrCode", token, { proxyIp, myUserName, myRoleType });
  }
  finderSearch(content, token, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    return this.client.request("/finderSearch", token, {
      proxyIp: (_a = options.proxyIp) != null ? _a : "",
      content,
      category: (_b = options.category) != null ? _b : 1,
      filter: (_c = options.filter) != null ? _c : 0,
      page: (_d = options.page) != null ? _d : 0,
      cookie: (_e = options.cookie) != null ? _e : "",
      searchId: (_f = options.searchId) != null ? _f : "",
      offset: (_g = options.offset) != null ? _g : 0
    });
  }
  follow(myUserName, myRoleType, opType, toUserName, token, options = {}) {
    var _a, _b;
    return this.client.request("/follow", token, {
      proxyIp: (_a = options.proxyIp) != null ? _a : "",
      myUserName,
      myRoleType,
      opType,
      toUserName,
      searchInfo: (_b = options.searchInfo) != null ? _b : { cookies: "", searchId: "", docId: "" }
    });
  }
  followList(myUserName, myRoleType, token, proxyIp = "", lastBuffer = "") {
    return this.client.request("/followList", token, { proxyIp, myUserName, lastBuffer, myRoleType });
  }
  searchFollow(myUserName, myRoleType, toUserName, keyword, token) {
    return this.client.request("/searchFollow", token, { myUserName, myRoleType, toUserName, keyword });
  }
  scanFollow(myUserName, myRoleType, qrContent, token, proxyIp = "", objectId = "", objectNonceId = "") {
    return this.client.request("/scanFollow", token, { proxyIp, myUserName, myRoleType, qrContent, objectId, objectNonceId });
  }
  userPage(toUserName, token, options = {}) {
    var _a, _b, _c;
    const payload = {
      proxyIp: (_a = options.proxyIp) != null ? _a : "",
      lastBuffer: (_b = options.lastBuffer) != null ? _b : "",
      toUserName,
      maxId: (_c = options.maxId) != null ? _c : 0
    };
    if (options.searchInfo) payload.searchInfo = options.searchInfo;
    return this.client.request("/userPage", token, payload);
  }
  comment(myUserName, opType, objectNonceId, sessionBuffer, objectId, myRoleType, content, commentId, token, options = {}) {
    var _a, _b, _c, _d;
    return this.client.request("/comment", token, {
      proxyIp: (_a = options.proxyIp) != null ? _a : "",
      myUserName,
      opType,
      objectNonceId,
      sessionBuffer,
      objectId,
      myRoleType,
      content,
      commentId,
      replyUserName: (_b = options.replyUserName) != null ? _b : "",
      refCommentId: (_c = options.refCommentId) != null ? _c : 0,
      rootCommentId: (_d = options.rootCommentId) != null ? _d : 0
    });
  }
  commentList(sessionBuffer, objectId, token, options = {}) {
    var _a, _b, _c, _d, _e;
    return this.client.request("/commentList", token, {
      proxyIp: (_a = options.proxyIp) != null ? _a : "",
      rootCommentId: (_b = options.rootCommentId) != null ? _b : 0,
      refCommentId: (_c = options.refCommentId) != null ? _c : 0,
      objectNonceId: (_d = options.objectNonceId) != null ? _d : "",
      sessionBuffer,
      lastBuffer: (_e = options.lastBuffer) != null ? _e : "",
      objectId
    });
  }
  browse(myUserName, objectNonceId, sessionBuffer, objectId, myRoleType, token, proxyIp = "") {
    return this.client.request("/browse", token, { proxyIp, myUserName, objectNonceId, sessionBuffer, objectId, myRoleType });
  }
  publishFinderWeb(title, videoUrl, thumbUrl, description, token) {
    return this.client.request("/publishFinderWeb", token, { title, videoUrl, thumbUrl, description });
  }
  uploadFinderVideo(videoUrl, coverImgUrl, token, proxyIp = "") {
    return this.client.request("/uploadFinderVideo", token, { proxyIp, videoUrl, coverImgUrl });
  }
  publishFinderCdn(myUserName, myRoleType, description, videoCdn, token, options = {}) {
    var _a, _b;
    return this.client.request("/publishFinderCdn", token, {
      proxyIp: (_a = options.proxyIp) != null ? _a : "",
      topic: (_b = options.topic) != null ? _b : [],
      myUserName,
      myRoleType,
      description,
      videoCdn
    });
  }
  mentionList(myUserName, myRoleType, reqScene, token, lastBuff = "") {
    return this.client.request("/mentionList", token, { myUserName, lastBuff, myRoleType, reqScene });
  }
  likeFavList(myUserName, myRoleType, flag, token, proxyIp = "", lastBuffer = "") {
    return this.client.request("/likeFavList", token, { proxyIp, myUserName, lastBuffer, myRoleType, flag });
  }
  idFav(myUserName, opType, objectNonceId, sessionBuffer, objectId, toUserName, myRoleType, token, proxyIp = "") {
    return this.client.request("/idFav", token, {
      proxyIp,
      myUserName,
      opType,
      objectNonceId,
      sessionBuffer,
      objectId,
      toUserName,
      myRoleType
    });
  }
  idLike(myUserName, opType, objectNonceId, sessionBuffer, objectId, toUserName, myRoleType, token, proxyIp = "") {
    return this.client.request("/idLike", token, {
      proxyIp,
      myUserName,
      opType,
      objectNonceId,
      sessionBuffer,
      objectId,
      toUserName,
      myRoleType
    });
  }
  finderOpt(myUserName, myRoleType, toUserName, opType, id, remain, token) {
    return this.client.request("/finderOpt", token, { myUserName, myRoleType, toUserName, opType, id, remain });
  }
  sendFinderMsg(toWxid, id, username, nickname, headUrl, nonceId, mediaType, width, height, url, thumbUrl, thumbUrlToken, description, videoPlayLen, token, proxyIp = "") {
    return this.client.request("/sendFinderMsg", token, {
      proxyIp,
      toWxid,
      id,
      username,
      nickname,
      headUrl,
      nonceId,
      mediaType,
      width,
      height,
      url,
      thumbUrl,
      thumbUrlToken,
      description,
      videoPlayLen
    });
  }
  sendFinderSns(allowWxIds, atWxIds, disableWxIds, id, username, nickname, headUrl, nonceId, mediaType, width, height, url, thumbUrl, thumbUrlToken, description, videoPlayLen, token, proxyIp = "") {
    return this.client.request("/sendFinderSns", token, {
      proxyIp,
      allowWxIds,
      atWxIds,
      disableWxIds,
      id,
      username,
      nickname,
      headUrl,
      nonceId,
      mediaType,
      width,
      height,
      url,
      thumbUrl,
      thumbUrlToken,
      description,
      videoPlayLen
    });
  }
  syncPrivateLetterMsg(token, proxyIp = "", keyBuff = "") {
    return this.client.request("/syncPrivateLetterMsg", token, { proxyIp, keyBuff });
  }
  contactList(myUserName, queryInfo, myRoleType, token, proxyIp = "") {
    return this.client.request("/contactList", token, { proxyIp, myUserName, queryInfo, myRoleType });
  }
  postPrivateLetter(content, msgSessionId, myUserName, toUserName, token, proxyIp = "") {
    return this.client.request("/postPrivateLetter", token, { proxyIp, content, msgSessionId, myUserName, toUserName });
  }
  postPrivateLetterImg(imgUrl, msgSessionId, myUserName, toUserName, token, proxyIp = "") {
    return this.client.request("/postPrivateLetterImg", token, { proxyIp, imgUrl, msgSessionId, myUserName, toUserName });
  }
  scanBrowse(myUserName, myRoleType, qrContent, objectId, token, proxyIp = "") {
    return this.client.request("/scanBrowse", token, { proxyIp, myUserName, myRoleType, qrContent, objectId });
  }
  scanComment(myUserName, myRoleType, qrContent, objectId, commentContent, token, options = {}) {
    var _a, _b, _c, _d;
    return this.client.request("/scanComment", token, {
      proxyIp: (_a = options.proxyIp) != null ? _a : "",
      myUserName,
      myRoleType,
      qrContent,
      objectId,
      commentContent,
      replyUsername: (_b = options.replyUsername) != null ? _b : "",
      refCommentId: (_c = options.refCommentId) != null ? _c : 0,
      rootCommentId: (_d = options.rootCommentId) != null ? _d : 0
    });
  }
  scanFav(myUserName, myRoleType, qrContent, objectId, token, proxyIp = "") {
    return this.client.request("/scanFav", token, { proxyIp, myUserName, myRoleType, qrContent, objectId });
  }
  scanLike(myUserName, myRoleType, qrContent, objectId, token, proxyIp = "") {
    return this.client.request("/scanLike", token, { proxyIp, myUserName, myRoleType, qrContent, objectId });
  }
  scanLoginChannels(qrContent, token, proxyIp = "") {
    return this.client.request("/scanLoginChannels", token, { proxyIp, qrContent });
  }
  scanQrCode(myUserName, myRoleType, qrContent, token, proxyIp = "") {
    return this.client.request("/scanQrCode", token, { proxyIp, myUserName, myRoleType, qrContent });
  }
};

// src/client.ts
var WeChatBotClient = class {
  constructor(options = {}) {
    var _a, _b;
    this.http = axios.create({
      baseURL: (_a = options.baseUrl) != null ? _a : "http://124.221.45.58",
      timeout: (_b = options.timeout) != null ? _b : 3e4,
      headers: { "Content-Type": "application/json" }
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
  async request(endpoint, token, payload = {}) {
    try {
      const headers = {};
      if (token) {
        headers["AUTHORIZATION"] = token;
      }
      const res = await this.http.post(endpoint, payload, { headers });
      return res.data;
    } catch (e) {
      return { ret: -1, msg: `\u7CFB\u7EDF\u6216\u7F51\u7EDC\u5F02\u5E38: ${e.message}`, data: null };
    }
  }
};
export {
  AuthModule,
  ContactModule,
  DownModule,
  FavoriteModule,
  FinderModule,
  GroupModule,
  LabelModule,
  MessageModule,
  PersonalModule,
  SnsModule,
  WeChatBotClient
};
