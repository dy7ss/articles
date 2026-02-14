# My Articles - 記事紹介サイト

静的Webサイトのプロトタイプです。執筆した記事を紹介・まとめるためのサイトです。

## 機能

- **記事リスト表示**: 複数の記事をカード形式で表示
- **カテゴリフィルター**: 「技術」「考察」「チュートリアル」などでフィルター可能
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **モダンなUI**: グラデーション、ホバーエフェクト、スムーズアニメーション

## ファイル構成

```
articles/
├── index.html              # メインHTMLファイル
├── data/
│   └── articles.json      # 記事データ（JSONで管理）
├── src/
│   ├── styles.css         # スタイルシート
│   └── script.js          # JavaScriptスクリプト
├── images/
│   └── placeholder.svg    # プレースホルダー画像
└── README.md              # このファイル
```

## 使い方

### ローカルで確認

ブラウザで `index.html` を開くだけです。Pythonでローカルサーバーを起動することもできます：

```bash
# Python 3の場合
python -m http.server 8000

# Python 2の場合
python -m SimpleHTTPServer 8000
```

その後、`http://localhost:8000` にアクセスしてください。

## カスタマイズ方法

### 記事を追加する

HTMLは**直接編集せず**、`data/articles.json` に新しい記事オブジェクトを追加してください。

`data/articles.json` に以下のような要素を追加：

```json
{
  "id": 5,
  "title": "記事のタイトル",
  "description": "記事の簡潔な説明文（1-2行）",
  "category": "tech",
  "categoryLabel": "技術",
  "date": "2026-02-15",
  "readingTime": "5分",
  "image": "images/placeholder.svg",
  "link": "articles/article-page.html"
}
```

**フィールドの説明:**
- `id`: 一意の数値（他の記事と重複しない）
- `title`: 記事のタイトル
- `description`: 記事の概要（カード表示で見える部分）
- `category`: フィルターで使用するカテゴリID（`tech`、`thoughts`、`tutorial` など）
- `categoryLabel`: フィルターボタンに表示されるラベル（「技術」など）
- `date`: 公開日（YYYY-MM-DD形式）
- `readingTime`: 読了予想時間（「5分」など）
- `image`: アイキャッチ画像のパス
- `link`: 記事ページのパス

#### 新しいカテゴリを追加する場合

1. `data/articles.json` に新しい `category` と `categoryLabel` を指定
2. `index.html` のフィルターボタンに対応する要素を追加：

```html
<button class="filter-btn" data-filter="new-category">新しいカテゴリ</button>
```

JavaScriptが自動的に対応します。

## 今後の拡張予定

- [ ] 個別の記事ページ
- [ ] 検索機能
- [ ] タグシステムの充実
- [ ] ダークモード
- [ ] ソーシャルメディアシェア機能
- [ ] コメント機能
- [ ] RSS フィード

## ライセンス

MIT License
