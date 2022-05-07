const getGeneratedPageUrl = ({ html, css, js }) => {
  const getBlobUrl = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const cssURL = getBlobUrl(css, "text/css");
  const jsURL = getBlobUrl(js, "text/javascript");

  const source = `
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
        ${js && `<script src="${jsURL}"></script>`}
      </head>
      <body>
        ${html || ""}
      </body>
    </html>
  `;

  return getBlobUrl(source, "text/html");
};
