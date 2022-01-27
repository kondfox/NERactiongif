async function copyImageToClipboard(url) {
    console.log("copy", url);
    const response = await fetch(url);
    const blob = await response.blob();
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
}
