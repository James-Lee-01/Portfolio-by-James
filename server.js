const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

// 設定靜態檔案路徑
app.use(express.static(path.join(__dirname, "src")));

// 處理根路由的請求
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// 開始監聽
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
