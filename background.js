// background.js
var userAgent = 'Mozilla/5.0 (Linux; Android 13; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.6312.120 Mobile Safari/537.36';

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach(function(header) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = userAgent;
    }
  });
  return {requestHeaders: e.requestHeaders};
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);
