### 安裝 Git
[Git 安裝檔下載](https://git-scm.com/)  

下載完，按照[開始 - 初次設定 Git](https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-%E5%88%9D%E6%AC%A1%E8%A8%AD%E5%AE%9A-Git) 進行設定。最主要需要設定使用者名稱與電子郵件：
```git
git config --global user.name "Jeremy"
git config --global user.email jeremy@example.com
```

### 使用 Git
要在專案中使用 Git，要先在專案中建立本地儲存庫：
```git
git init​
```
之後當專案中程式碼編輯完需要紀錄時就可以直接進行下列動作：  
1. 檔案更新，準備丟到暫存區。`.` 代表所有變動檔案通通都丟過去，可以用檔案名取代它。
```git
git add .
```
2. 提交到本地儲存庫
```git
git commit -m "Your commit message"
```
3. 追蹤查詢狀態
```git
git status​
```

### 推到 GitHub 上
當已經在 GitHub 上建好一個儲存庫：
```git
git remote add origin https://github.com/{user-name}/{repo-name}.git
git branch -M main
git push -u origin main
```
關於這一串指令，GitHub 在剛創完 repo 會自行產生，複製即可。  
在第一次執行完畢後，往後如果有程式碼變動要再推到遠端儲存庫來你只需要輸入`git push`。

### 下載 GitHub 上的專案
```git
git clone https://github.com/{owner-name}/{project-name}.git
```

### .gitignore
關於那些不想讓 Git 紀錄的檔案，比如一大包的 `node_moules` 資料夾、含有私人隱私資訊 (比如資料庫連線字串) 的 `.env` 檔案，可以在專案下建立一個 `.gitignore` 檔案，裡面填入不要 Git 紀錄的檔案。