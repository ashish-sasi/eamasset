/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SetActionBarTitle(clientAPI) {
    clientAPI.evaluateTargetPathForAPI('#Page:FunctionLoc_Desc/#ActionBarItem1').setActionBarTitle(clientAPI.getClientData().title);
}
