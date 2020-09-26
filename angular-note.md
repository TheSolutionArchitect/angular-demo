
*******Angular Notes *******
// run below command if you get ".ps1 cannot be loaded because the execution of scripts is disabled on this system"
powershell Set-ExecutionPolicy RemoteSigned
powershell Set-ExecutionPolicy Restricted
powershell Get-ExecutionPolicy -Lis

The @angular/material package provides the components of the Material Design, @angular/cdk is a component development kit that is needed for the Material components to work and hammerjs is a library that provides smooth animations for the component. @angular/flex-layout provides a flexible and responsive grid. It is independent of the Material components but is often used together with it.

ng add @angular/material
npm i @angular/flex-layout
npm i hammerjs

Angular-cli from css to scss

https://stackoverflow.com/questions/40726081/angular-cli-from-css-to-scss/45255290

Change the default style extension to scss
Manually change in .angular-cli.json (Angular 5.x and older) or angular.json (Angular 6+) or run:

ng config defaults.styleExt=scss
if you get an error: Value cannot be found. use the command:

ng config schematics.@schematics/angular:component.styleext scss
