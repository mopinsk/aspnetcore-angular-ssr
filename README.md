# aspnetcore-angular-ssr
A simple ASP.NET Core Web API and Angular Client with server-side rendering


# Angular Client
Install Angular CLI and Angular-ESLint schematics globally
```
npm i -g @angular/cli @angular-devkit/core @angular-devkit/schematics @angular-eslint/schematics
```
Initialize an Angular app:
```
ng new ng-client --directory=ng-client --routing --skip-git --strict --style=scss --package-manager=npm --collection=@angular-eslint/schematics
```

Follow the instructions described in the official Angular Universal docs: https://angular.io/guide/universal

```
ng add @nguniversal/express-engine
```

Follow these instructions: https://bossprogrammer.medium.com/how-to-deploy-an-angular-10-universal-app-with-server-side-rendering-to-azure-a2b90df9ca64

Update server.ts for Production
Replace this line in server.ts:
```
const distFolder = join(process.cwd(), 'dist/YOUR_APP_NAME/browser');
```
With:
```
let distFolder = join(process.cwd(), "browser");
if (!existsSync(distFolder)) {
 distFolder = join(process.cwd(), "dist/YOUR_APP_NAME/browser");
}
```

# ASP.NET Core Web API
```
dotnet new webapi -n WebAPI -o WebAPI -f net5.0 --dry-run
```