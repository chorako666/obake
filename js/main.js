//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};

// ★ここから追加：スマホだけ拡大処理
(function() {
    const isSmartphone = () => {
        return /iPhone|Android.+Mobile/.test(navigator.userAgent);
    };

    const resizeGame = () => {
        if (!isSmartphone()) return;  // スマホ以外は拡大しない

        const canvas = document.getElementById('GameCanvas');
        if (!canvas) return;

        const ratio = window.innerWidth / window.innerHeight;
        const gameRatio = Graphics.width / Graphics.height;

        if (ratio > gameRatio) {
            const scale = window.innerHeight / Graphics.height;
            canvas.style.width = Graphics.width * scale + 'px';
            canvas.style.height = window.innerHeight + 'px';
        } else {
            const scale = window.innerWidth / Graphics.width;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = Graphics.height * scale + 'px';
        }

        canvas.style.margin = '0 auto';
        canvas.style.display = 'block';
    };

    window.addEventListener('resize', resizeGame);
    window.addEventListener('orientationchange', resizeGame);
    window.addEventListener('load', resizeGame);
})();
