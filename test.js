const BUY_LINK = "https://buy.stripe.com/7sY3cx5Oy7JP1wSblUfbq02";

function goToCheckout() {
  window.location.assign(BUY_LINK);
}

document.getElementById("buyNow").addEventListener("click", goToCheckout);
document.getElementById("buyNowTop").addEventListener("click", goToCheckout);
