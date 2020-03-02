## Build and Run Commands
cd crm-ui-ux-library</br>
npm i</br>
npm run build</br>
cd ../crm-angular-application</br>
npm i</br>
npm i ../crm-ui-ux-library/dist/crm-ui-ux --save</br>
ng serve</br>

## Design details
| Design key | Change details |
| --- | --- |
| Model files | Under app/models |
| Mock | BillingServiceMock provided in AppModule. Real service also implemented |
| Backend service | BillingService Tested against real backend. Please run billing-service app and remove the BillingServiceMock from AppModule |
| Reactive Angular | All the service calls are implemented using async pipe. unsubscription is handled by async pipe. |
| Smart components & Presentation components | app/pages/billing-info are the presentation components and data will be provided by Smart componets where its included|
| Testing | BillingServiceMock used for impleneting the angular unit test |
| Library | As per this structure library can be include using npm i during local setup. In future it can be moved to npm regsitry or CDN for production use. |
| Reusability | components under app/pages/billing-info are used across functionalities. |
| Performance Mock | Small(1000ms) delay introduced in mock service. This is not real performace impact. |
