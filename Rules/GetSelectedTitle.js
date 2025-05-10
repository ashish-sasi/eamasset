/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function GetSelectedTitle(clientAPI) {
    let selectedItem = clientAPI.binding;
    let title = selectedItem.Title;

    clientAPI.evaluateTargetPathForAPI('#Application/#ClientData/#Property:GlobalTitle').setValue(title);
}
