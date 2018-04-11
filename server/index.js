const webpush = require('web-push');
const keys = webpush.generateVAPIDKeys();
console.log(keys);
//const keys = {
//    publicKey: 'BCs-9OzcDBy1KFQ1WpXe_rvjxqWyAVm_EiE9noO2dSmiglXNjeAAaxoHLlDQkyZ6sdIrsGlFWPUt-O67jWrSGqw',
//    privateKey: 'llx3iQG5Vg4EK_5gCCRoZVCk-flpYTPGefCYOAyfGjw'
//};