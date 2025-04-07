// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function FunctionalList_FirstNameFilter(clientAPI) {
//     let platform = clientAPI.nativescript.platformModule;
//     let appSettings = clientAPI.nativescript.appSettingsModule;
//     var appId;

//     if (platform && (platform.isIOS || platform.isAndroid)) {
//         appId = clientAPI.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
//     } else {
//         appId = 'WebClient';
//     }
//     let cd = clientAPI.getAppClientData();
//     let promoItems = [];
//     var filter = '';

//     if (cd.promoItems) {
//         for (var item of Object.keys(cd.promoItems)) {
//             promoItems.push(`FirstName eq ${item}`)
//         }
//         if (promoItems.length > 0) {
//             filter = `(${promoItems.join(' or ')})`;
//         }
//     }
//     console.log(filter);
//     return filter;
// }
