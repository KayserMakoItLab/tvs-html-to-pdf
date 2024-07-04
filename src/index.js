const { launch } = require("puppeteer");
const { getHTMLFile } = require("../sample");
const { generatePdfLayout } = require("./generatePdf");

(async () => {
  // Create a browser instance
  const browser = await launch();

  // Create a new page
  const page = await browser.newPage();

  // Get HTML content with the image base64-encoded
  const html = await generatePdfLayout();
  await page.setContent(html, { waitUntil: "domcontentloaded" });

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType("screen");

  // Download the PDF
  const pdf = await page.pdf({
    path: "result.pdf",
    // margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "A4",
  });

  // Close the browser instance
  await browser.close();
})();
