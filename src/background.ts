console.log("BACKGROUND", chrome.windows.WINDOW_ID_CURRENT)

chrome.action.onClicked.addListener(() => {
  chrome.sidePanel.open({windowId: chrome.windows.WINDOW_ID_CURRENT})
}) 