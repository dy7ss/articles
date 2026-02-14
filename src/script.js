// フィルター機能
document.addEventListener('DOMContentLoaded', function() {
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
                const category = article.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
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
