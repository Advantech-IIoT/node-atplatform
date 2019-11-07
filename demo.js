
/**
Advantech atplatform
**/

const atplatform = require('node-atplatform');
console.log("Module ID: " + atplatform.getBoardName());
console.log("BIOS version: " + atplatform.getBIOSVersion());
console.log("EC version: " + atplatform.getECVersion());
console.log("OS version: " + atplatform.getOSVersion());
console.log("CPU Model Name: " + atplatform.getCPUModelName());
console.log("COMPORTS: " + JSON.stringify(atplatform.getComports()));
console.log("Available Memory Usage(KB): " + atplatform.getMemoryAvailable());
console.log("DiskInfo: " + atplatform.getDiskInfo());
