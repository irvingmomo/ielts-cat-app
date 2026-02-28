# 馃殌 闆呮€濈尗閮ㄧ讲鎸囧崡

## 馃搵 閮ㄧ讲鍓嶅噯澶?
### 1. GitHub璐﹀彿
- 濡傛灉娌℃湁GitHub璐﹀彿锛岃鍏堟敞鍐岋細https://github.com
- 鐢ㄦ埛鍚嶅缓璁細`irvingmomo`锛堜綘鐨凾elegram鐢ㄦ埛鍚嶏級

### 2. 鏈湴鏂囦欢妫€鏌?纭繚浠ヤ笅鏂囦欢宸插噯澶囧ソ锛?```
deploy/
鈹溾攢鈹€ index.html          # 涓婚〉闈㈡枃浠?鈹溾攢鈹€ manifest.json       # PWA閰嶇疆鏂囦欢
鈹溾攢鈹€ sw.js              # Service Worker
鈹溾攢鈹€ README.md          # 椤圭洰璇存槑
鈹溾攢鈹€ DEPLOY_GUIDE.md    # 鏈寚鍗?鈹斺攢鈹€ icons/             # 搴旂敤鍥炬爣鏂囦欢澶?```

## 馃幆 閮ㄧ讲姝ラ

### 姝ラ1锛氬垱寤篏itHub浠撳簱
1. 鐧诲綍GitHub
2. 鐐瑰嚮鍙充笂瑙?+" 鈫?"New repository"
3. 濉啓浠撳簱淇℃伅锛?   - **Repository name**: `ielts-cat-app`
   - **Description**: 闆呮€濆彂闊冲涔犲伐鍏?- IELTS Cat Pronunciation Tool
   - **Public** (鍏紑)
   - 鍕鹃€?Add a README file"
4. 鐐瑰嚮"Create repository"

### 姝ラ2锛氫笂浼犳枃浠跺埌GitHub

#### 鏂规硶A锛氫娇鐢℅itHub缃戦〉涓婁紶锛堟渶绠€鍗曪級
1. 杩涘叆鏂板缓鐨勪粨搴撻〉闈?2. 鐐瑰嚮"Add file" 鈫?"Upload files"
3. 灏哷deploy/`鏂囦欢澶逛腑鐨勬墍鏈夋枃浠舵嫋鎷藉埌涓婁紶鍖哄煙
4. 鐐瑰嚮"Commit changes"

#### 鏂规硶B锛氫娇鐢℅it鍛戒护锛堟帹鑽愬紑鍙戣€咃級
```bash
# 鍏嬮殕浠撳簱
git clone https://github.com/irvingmomo/ielts-cat-app.git
cd ielts-cat-app

# 澶嶅埗鏂囦欢
cp -r ../deploy/* .

# 鎻愪氦鏇存敼
git add .
git commit -m "Initial commit: IELTS Cat web app"
git push origin main
```

### 姝ラ3锛氬惎鐢℅itHub Pages
1. 杩涘叆浠撳簱璁剧疆锛歋ettings 鈫?Pages
2. 鍦?Source"閮ㄥ垎锛?   - 閫夋嫨鍒嗘敮锛歚main`
   - 閫夋嫨鏂囦欢澶癸細`/(root)`
3. 鐐瑰嚮"Save"
4. 绛夊緟1-2鍒嗛挓锛屾樉绀?Your site is published at..."

## 馃寪 璁块棶浣犵殑缃戠珯

### 榛樿鍦板潃
```
https://irvingmomo.github.io/ielts-cat-app/
```

### 鑷畾涔夊煙鍚嶏紙鍙€夛級
1. 璐拱鍩熷悕锛堝 `ielts-cat-app.com`锛?2. 鍦ㄥ煙鍚嶆敞鍐屽晢娣诲姞CNAME璁板綍锛?   ```
   Name: @
   Type: CNAME
   Value: irvingmomo.github.io
   ```
3. 鍦℅itHub Pages璁剧疆涓～鍐欒嚜瀹氫箟鍩熷悕
4. 绛夊緟DNS鐢熸晥锛堟渶澶?4灏忔椂锛?
## 馃摫 PWA鍔熻兘楠岃瘉

### 妫€鏌ユ竻鍗?- [ ] **Manifest鏂囦欢**: `manifest.json` 瀛樺湪涓旈厤缃纭?- [ ] **Service Worker**: `sw.js` 宸叉敞鍐?- [ ] **HTTPS**: GitHub Pages鑷姩鎻愪緵HTTPS
- [ ] **鍝嶅簲寮忚璁?*: 閫傞厤鎵嬫満銆佸钩鏉裤€佺數鑴?- [ ] **绂荤嚎鏀寔**: 鍙互绂荤嚎璁块棶

### 娴嬭瘯PWA瀹夎
1. 鍦–hrome娴忚鍣ㄤ腑鎵撳紑缃戠珯
2. 鍦板潃鏍忓彸渚т細鍑虹幇"瀹夎"鍥炬爣
3. 鐐瑰嚮瀹夎锛屽簲鐢ㄤ細娣诲姞鍒版闈?寮€濮嬭彍鍗?
## 馃敡 鍔熻兘娴嬭瘯

### 蹇呮祴鍔熻兘
1. **鍙戦煶鍔熻兘**: 鐐瑰嚮鎾斁鎸夐挳锛屽簲璇ヨ兘鍚埌澹伴煶
2. **瀵艰埅鍒囨崲**: 鐐瑰嚮搴曢儴瀵艰埅锛岄〉闈㈠簲璇ュ垏鎹?3. **鎼滅储杩囨护**: 鍦ㄨ瘝姹囬〉闈㈡悳绱紝搴旇鑳借繃婊ょ粨鏋?4. **杩涘害淇濆瓨**: 鍒锋柊椤甸潰鍚庯紝瀛︿範杩涘害搴旇淇濈暀
5. **绂荤嚎璁块棶**: 鍏抽棴缃戠粶鍚庯紝搴旇杩樿兘璁块棶

### 璁惧鍏煎鎬ф祴璇?- [ ] **妗岄潰娴忚鍣?*: Chrome, Firefox, Edge, Safari
- [ ] **鎵嬫満娴忚鍣?*: Chrome, Safari
- [ ] **骞虫澘璁惧**: iPad, Android骞虫澘

## 馃洜锔?缁存姢鍜屾洿鏂?
### 鏇存柊缃戠珯鍐呭
1. 淇敼鏈湴鏂囦欢
2. 鎻愪氦鍒癎itHub锛?```bash
git add .
git commit -m "鏇存柊鎻忚堪"
git push origin main
```
3. 鑷姩閮ㄧ讲锛圙itHub Pages浼氳嚜鍔ㄦ洿鏂帮級

### 娣诲姞鏂板姛鑳?1. **鏇村璇嶆眹**: 缂栬緫`index.html`涓殑`vocabulary`鏁扮粍
2. **鏂板彞瀛?*: 缂栬緫`index.html`涓殑`sentences`鏁扮粍
3. **鏂伴煶鏍?*: 缂栬緫`index.html`涓殑`phonetics`鏁扮粍
4. **鏂伴〉闈?*: 娣诲姞鏂扮殑HTML閮ㄥ垎鍜屽鑸寜閽?
## 馃搳 鏁版嵁鍒嗘瀽

### Google Analytics锛堝彲閫夛級
1. 娉ㄥ唽Google Analytics锛歨ttps://analytics.google.com
2. 鑾峰彇璺熻釜ID锛歚UA-XXXXXXXXX-X`
3. 鍦╜index.html`鐨刞<head>`涓坊鍔狅細
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

## 馃悰 鏁呴殰鎺掗櫎

### 甯歌闂

#### 1. 缃戠珯鏃犳硶璁块棶
- 妫€鏌itHub Pages鏄惁宸插惎鐢?- 妫€鏌ヤ粨搴撴槸鍚︿负鍏紑
- 绛夊緟鍑犲垎閽熷悗閲嶈瘯

#### 2. 鍙戦煶鍔熻兘涓嶅伐浣?- 妫€鏌ユ祻瑙堝櫒鏄惁鏀寔Web Speech API
- 妫€鏌ラ煶閲忔槸鍚﹀紑鍚?- 灏濊瘯浣跨敤Chrome娴忚鍣?
#### 3. PWA鏃犳硶瀹夎
- 纭繚缃戠珯閫氳繃HTTPS璁块棶
- 妫€鏌manifest.json`閰嶇疆
- 娓呴櫎娴忚鍣ㄧ紦瀛樺悗閲嶈瘯

#### 4. 杩涘害涓嶄繚瀛?- 妫€鏌ユ祻瑙堝櫒鏄惁鍏佽localStorage
- 灏濊瘯浣跨敤闅愮妯″紡澶栫殑姝ｅ父妯″紡
- 娓呴櫎缂撳瓨鍚庨噸璇?
### 鎶€鏈敮鎸?- **GitHub Issues**: 鍦ㄤ粨搴撲腑鎻愪氦闂
- **Telegram**: 鑱旂郴 @irvingmomo
- **鏂囨。**: 鏌ョ湅README.md鑾峰彇鏇村淇℃伅

## 馃帀 閮ㄧ讲鎴愬姛鏍囧織

褰撲互涓嬫墍鏈夋潯浠舵弧瓒虫椂锛岃〃绀洪儴缃叉垚鍔燂細

1. 鉁?缃戠珯鍙互璁块棶锛歨ttps://irvingmomo.github.io/ielts-cat-app/
2. 鉁?鎵€鏈夊姛鑳芥甯稿伐浣?3. 鉁?鍙互鍦ㄦ墜鏈哄拰鐢佃剳涓婁娇鐢?4. 鉁?鍙互娣诲姞鍒颁富灞忓箷锛圥WA锛?5. 鉁?瀛︿範杩涘害鍙互淇濆瓨

## 馃搱 鍚庣画浼樺寲寤鸿

### 鐭湡浼樺寲锛?-2鍛級
- [ ] 娣诲姞鏇村闆呮€濆涔犲唴瀹?- [ ] 浼樺寲绉诲姩绔敤鎴蜂綋楠?- [ ] 娣诲姞瀛︿範鎻愰啋鍔熻兘

### 涓湡浼樺寲锛?涓湀锛?- [ ] 闆嗘垚鐢ㄦ埛璐︽埛绯荤粺
- [ ] 娣诲姞瀛︿範绀惧尯鍔熻兘
- [ ] 寮€鍙戠Щ鍔ㄥ簲鐢ㄧ増鏈?
### 闀挎湡瑙勫垝锛?涓湀锛?- [ ] 鍟嗕笟鍖栨帰绱?- [ ] 澶氳瑷€鏀寔
- [ ] 鏁欏笀绠＄悊鍚庡彴

---

**馃幆 绁濅綘閮ㄧ讲椤哄埄锛佸鏈夐棶棰橈紝闅忔椂鑱旂郴銆?* 馃惐


