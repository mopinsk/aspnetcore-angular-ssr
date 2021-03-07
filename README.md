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

Follow these instructions:

Update server.ts for Production (instructions taken from https://bossprogrammer.medium.com/how-to-deploy-an-angular-10-universal-app-with-server-side-rendering-to-azure-a2b90df9ca64 )

Replace this line in server.ts:

```ts
const distFolder = join(process.cwd(), 'dist/YOUR_APP_NAME/browser');
```

With:

```ts
let distFolder = join(process.cwd(), 'browser');
if (!existsSync(distFolder)) {
  distFolder = join(process.cwd(), 'dist/YOUR_APP_NAME/browser');
}
```

# ASP.NET Core Web API

```
dotnet new webapi -n WebAPI -o WebAPI -f net5.0
```

The Web API runs on IIS Express when started in Visual Studio 2019: (as stated in launchSettings.json)

- http://localhost:4053
- https://localhost:44398

The Angular app uses the value from environment.ts as the base URL for HTTP requests in development mode.
In production mode it uses the origin of the document + '/webapi', because that's where the Web API will be hosted.

```ts
// app.module.ts
const getBaseUrl = () => {
  if (!environment.production) {
    return environment.baseUrl;
  }
  return window.location.origin + '/webapi';
};
```
