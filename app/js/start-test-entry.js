// app/js/start-test-entry.js
(function () {
  function goFallback() {
    // 你可以按实际情况改成你希望跳转的页面
    // 这里给一个常见的 fallback：如果没有 startTest，就跳到测试页或提示页
    window.location.href = "dashboard/index.html";
  }

  function handleStart() {
    try {
      if (typeof window.startTest === "function") {
        window.startTest();
      } else {
        goFallback();
      }
    } catch (e) {
      goFallback();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("startTestBtn");
    if (!btn) return;
    btn.addEventListener("click", handleStart);
  });
})();
