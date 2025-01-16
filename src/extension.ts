import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('myExtension.showWebview', () => {
      const panel = vscode.window.createWebviewPanel(
        'myWebview',
        'Vite React Webview',
        vscode.ViewColumn.One,
        { enableScripts: true }
      );

      const scriptUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, 'out/webview/assets/index.js')
      );

      const styleUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, 'out/webview/assets/index.css')
      );

      panel.webview.html = getWebviewContent(scriptUri, styleUri);
    })
  );
}

function getWebviewContent(scriptUri: vscode.Uri, styleUri: vscode.Uri): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="${styleUri}" rel="stylesheet">
      <title>Webview</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="${scriptUri}"></script>
    </body>
    </html>
  `;
}
