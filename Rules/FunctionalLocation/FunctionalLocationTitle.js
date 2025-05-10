/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FunctionalLocationTitle(clientAPI) {    
     return clientAPI.count('/EAM_AssetManagerv2/Services/mobileservices.service', 'ZA_FunctionalLocation', '').then((count) => {
        return count;
    });
}
