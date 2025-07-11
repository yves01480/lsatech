document.addEventListener("DOMContentLoaded", function () {
  // 簡單的平滑捲動效果 (可選)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // 更多互動效果可以在這裡添加，例如：
  // - 圖片輪播 (若有)
  // - 服務項目滑入動畫 (Intersection Observer API)
  // - 表單驗證 (若聯絡我們有表單)
});
