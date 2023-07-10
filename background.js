chrome.action.onClicked.addListener(async (tab) => {
  await chrome.windows.create({
    incognito: true,
    url: tab.url,
  });
});
