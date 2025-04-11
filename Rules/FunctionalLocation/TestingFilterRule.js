/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TestingFilterRule(clientAPI) {
    clientAPI.read('/EAM_AssetManagerv2/Services/mobileservices.service', 'ZA_FunctionalLocation', '$select=MaintenancePlant').then((results)=>{
        var uniquePlant = new Set();
        if (results.length > 0) {
            for(let x=0; x< results.length; x++){
                uniquePlant.add(results.getItem[x]);
            }
        }
        return clientAPI.executeAction({
            'Name': "/EAM_AssetManagerv2/Actions/GenericMessageBox.action",
            'Properties': {
                "Message": uniquePlant
            }
        });
    })

}
