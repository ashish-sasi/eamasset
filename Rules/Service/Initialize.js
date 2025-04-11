// import FunctionalLocationTitle from "../FunctionalLocation/FunctionalLocationTitle";
export default function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _mobileservices = context.executeAction('/EAM_AssetManagerv2/Actions/mobileservices/Service/InitializeOffline.action');
    // let _functionalLocationTitle = FunctionalLocationTitle();

    //You can add more service initialize actions here

    return Promise.all([_mobileservices]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/EAM_AssetManagerv2/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}