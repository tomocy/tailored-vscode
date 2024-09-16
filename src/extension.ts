import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    {
        const disposable = vscode.commands.registerCommand('tailored-vscode.cursor.moveToPageStart', () => {
            vscode.commands.executeCommand('cursorTop');
        });

        context.subscriptions.push(disposable);
    }
    {
        const disposable = vscode.commands.registerCommand('tailored-vscode.cursor.moveToPageEnd', () => {
            vscode.commands.executeCommand('cursorBottom');
        });

        context.subscriptions.push(disposable);
    }
    {
        const disposable = vscode.commands.registerCommand('tailored-vscode.cursor.moveUpByLine', (options: { n: number }) => {
            vscode.commands.executeCommand('cursorMove', {
                to: 'up',
                value: options.n,
            });
        });

        context.subscriptions.push(disposable);
    }
    {
        const disposable = vscode.commands.registerCommand('tailored-vscode.cursor.moveDownByLine', (options: { n: number }) => {
            vscode.commands.executeCommand('cursorMove', {
                to: 'down',
                value: options.n,
            });
        });

        context.subscriptions.push(disposable);
    }
    {
        const disposable = vscode.commands.registerCommand('tailored-vscode.cursor.moveToLineStart', () => {
            vscode.commands.executeCommand('cursorHome');
        });

        context.subscriptions.push(disposable);
    }
    {
        const disposable = vscode.commands.registerCommand('tailored-vscode.cursor.moveToLineEnd', () => {
            vscode.commands.executeCommand('cursorEnd');
        });

        context.subscriptions.push(disposable);
    }
    {
        const disposable = vscode.commands.registerCommand('tailored-vscode.cursor.moveLeftByWord', () => {
            vscode.commands.executeCommand('cursorWordLeft');
        });

        context.subscriptions.push(disposable);
    }
    {
        const disposable = vscode.commands.registerCommand('tailored-vscode.cursor.moveRightByWord', () => {
            vscode.commands.executeCommand('cursorWordRight');
        });

        context.subscriptions.push(disposable);
    }
}

export function deactivate() { }
