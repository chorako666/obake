(function () {
  window.showEmailOverlay = function () {
    if (!document.getElementById("contact-overlay")) {
      // 一時的にタップ入力を封印
      TouchInput._overlayBlocked = true;
      const originalTouchStart = TouchInput._onTouchStart;
      TouchInput._onTouchStart = function () {
        if (!TouchInput._overlayBlocked) originalTouchStart.apply(this, arguments);
      };

      const overlay = document.createElement("div");
      overlay.id = "contact-overlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = "99";

      const box = document.createElement("div");
      box.style.background = "white";
      box.style.padding = "20px";
      box.style.borderRadius = "12px";
      box.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
      box.style.fontSize = "18px";
      box.style.textAlign = "center";
      box.innerHTML = `
        <p style="margin-bottom:10px;">連絡先📧<br>長押しでコピー</p>
        <input type="text" value="chorako2023@yahoo.co.jp" readonly style="font-size:16px; padding:8px; width:90%;" />
        <br><br>
        <button id="close-email-overlay" style="margin-top:10px; padding:6px 16px; font-size:16px;">閉じる</button>
      `;

      overlay.appendChild(box);
      document.body.appendChild(overlay);

      document.getElementById("close-email-overlay").addEventListener("click", function () {
        document.getElementById("contact-overlay").remove();
        // タップ処理を元に戻す
        TouchInput._overlayBlocked = false;
      });
    }
  };
})();
