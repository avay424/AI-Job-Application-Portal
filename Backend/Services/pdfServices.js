import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export const extractText = async (fileBuffer) => {
  const uint8Array = new Uint8Array(
    fileBuffer.buffer,
    fileBuffer.byteOffset,
    fileBuffer.byteLength
  );

  const loadingTask = pdfjsLib.getDocument({
    data: uint8Array,
    disableWorker: true,
    verbosity: 0
  });

  const pdf = await loadingTask.promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    text += content.items.map(item => item.str).join(" ") + " ";
  }

  return text;
};