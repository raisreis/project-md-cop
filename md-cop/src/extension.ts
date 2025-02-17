// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "md-cop" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('md-cop.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		console.log("cookies");
		vscode.window.showInformationMessage('Hello Kitty!');
	});

	context.subscriptions.push(disposable);
}

vscode.window.showInformationMessage('from out');

vscode.window.onDidOpenTerminal(terminal => {
	console.log('opened', terminal);
});

vscode.window.onDidChangeNotebookEditorSelection((x) => {

});


vscode.languages.registerHoverProvider('markdown', {
  provideHover(document, position, token) {
		console.log('hover hover ...');

    const contents = new vscode.MarkdownString(`[yahoo-link](https://www.yahoo.com)`);
		contents.isTrusted = true;
		return new vscode.Hover(contents);
  }
});


// This method is called when your extension is deactivated
export function deactivate() {}
