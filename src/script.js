// JSONから記事を読み込んで動的に生成
async function loadArticles() {
    try {
        const response = await fetch('data/articles.json');
        const articlesData = await response.json();
        renderArticles(articlesData);
        renderFilters(articlesData);
        initializeFilters();
        initializeViewSwitcher();
    } catch (error) {
        console.error('Error loading articles:', error);
    }
}

// JSONからユニークなカテゴリを抽出
function extractCategories(articlesData) {
    const categoriesSet = new Set();
    articlesData.forEach(article => {
        article.categories.forEach(category => {
            categoriesSet.add(category);
        });
    });
    return Array.from(categoriesSet).sort();
}

// 記事をDOMに生成
function renderArticles(articlesData) {
    const container = document.getElementById('articles-container');
    container.innerHTML = '';

    articlesData.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'article-card';
        
        // 複数カテゴリに対応: data-categoryに全カテゴリをスペース区切りで設定
        const categoryNames = article.categories.join(' ');
        articleElement.setAttribute('data-category', categoryNames);
        articleElement.setAttribute('data-date', article.date);
        
        // タグ表示用にすべてのカテゴリをレンダリング
        const tagsHtml = article.categories.map(cat => 
            `<span class="article-card__tag">${cat}</span>`
        ).join('');
        
        articleElement.innerHTML = `
            <div class="article-card__image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="article-card__content">
                <div class="article-card__tags">
                    ${tagsHtml}
                </div>
                <h2 class="article-card__title">${article.title}</h2>
                <p class="article-card__description">
                    ${article.description}
                </p>
                <div class="article-card__meta">
                    <span class="article-card__date">${article.date}</span>
                    <span class="article-card__reading-time">${article.readingTime}</span>
                </div>
                <a href="${article.link}" class="article-card__link">記事を読む →</a>
            </div>
        `;
        container.appendChild(articleElement);
    });
}

// フィルターボタンを動的に生成
function renderFilters(articlesData) {
    const container = document.getElementById('filters-container');
    const categories = extractCategories(articlesData);
    
    // 既存のボタン（「すべて」）の後に新しいボタンを追加
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-filter', category);
        button.textContent = category;
        container.appendChild(button);
    });
}

// フィルター機能の初期化
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articles = document.querySelectorAll('.article-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // アクティブボタンを更新
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 記事の表示・非表示を切り替え
            articles.forEach(article => {
                const categories = article.getAttribute('data-category').split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    article.classList.remove('hidden');
                    // アニメーション用にタイミングを調整
                    setTimeout(() => {
                        article.style.opacity = '1';
                    }, 10);
                } else {
                    article.style.opacity = '0';
                    setTimeout(() => {
                        article.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}

// 表示形式の切り替え機能の初期化
function initializeViewSwitcher() {
    const viewButtons = document.querySelectorAll('.view-btn');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            const articlesSection = document.getElementById('articles-container');

            // アクティブボタンを更新
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 表示形式を切り替え
            if (view === 'list') {
                articlesSection.classList.add('list-view');
            } else {
                articlesSection.classList.remove('list-view');
            }

            // ローカルストレージに保存
            localStorage.setItem('viewMode', view);
        });
    });

    // 前回の表示形式を復元
    const savedViewMode = localStorage.getItem('viewMode') || 'grid';
    if (savedViewMode === 'list') {
        const listViewBtn = document.querySelector('[data-view="list"]');
        if (listViewBtn) {
            listViewBtn.click();
        }
    }
}

// DOMContentLoaded時に実行
document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
