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