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
├── index.html           # メインHTMLファイル
├── src/
│   ├── styles.css      # スタイルシート
│   └── script.js       # JavaScriptスクリプト
├── images/
│   └── placeholder.svg # プレースホルダー画像
└── README.md           # このファイル
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

`index.html` の `<section class="articles">` 内に、以下のようなカード要素を追加してください：

```html
<article class="article-card" data-category="tech">
    <div class="article-card__image">
        <img src="images/your-image.jpg" alt="説明">
    </div>
    <div class="article-card__content">
        <span class="article-card__tag">タグ</span>
        <h2 class="article-card__title">記事タイトル</h2>
        <p class="article-card__description">記事の説明文</p>
        <div class="article-card__meta">
            <span class="article-card__date">2026-02-15</span>
            <span class="article-card__reading-time">5分</span>
        </div>
        <a href="article-link.html" class="article-card__link">記事を読む →</a>
    </div>
</article>
```

### カテゴリを追加する

1. `index.html` のフィルターボタンに新しいカテゴリを追加
2. `data-category` 属性で記事にカテゴリを指定

### スタイルを変更する

`src/styles.css` で色やレイアウトをカスタマイズできます。グラデーション色は現在：
- Primary: `#667eea` (紫青)
- Secondary: `#764ba2` (紫)

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
