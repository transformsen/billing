# Verification details

## Build and Run Commands
cd crm-angular-application
npm i
cd ../crm-ui-ux-library
npm i
npm run build
cd ../crm-angular-application
npm i ../crm-ui-ux-library/dist/crm-ui-ux --save
ng serve

## Design details
Model files - Under app/models
Mock - BillingServiceMock provided in AppModule. Real service also implemented
Backend service - BillingService Tested against real backend. Please run biilg-service app and remove the BillingServiceMock from AppModule
Reactive Angular - All the service calls are implemented using async pipe. unscnscription is handled.
Smart components & Presentation components - app/pages/billing-info are the presentation components and data will be provided by Smart componets where its included
Testing - BillingServiceMock used for impleneting the angular unit test
Library - As per this structure library can be include using npm i during local setup. In future it can be moved to npm regsitry or CDN for production use.
Reusability - components under app/pages/billing-info are used across functionalities
Performance - Small(1000ms) delay introduced in mock service. This is not real performace impact.

## Test coverage
=============================== Coverage summary ===============================
Statements   : 90.91% ( 260/286 )
Branches     : 75% ( 15/20 )
Functions    : 84.68% ( 105/124 )
Lines        : 89.32% ( 209/234 )
================================================================================