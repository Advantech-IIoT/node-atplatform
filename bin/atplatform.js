var binding=require("./binding/"+process.platform+"-"+process.arch+"/node-atplatform.node");function atplatform(){}atplatform.prototype.getBoardName=function(){return binding.getBoardName()},atplatform.prototype.getBIOSVersion=function(){return binding.getBIOSVersion()},atplatform.prototype.getECVersion=function(){return binding.getECVersion()},atplatform.prototype.getOSVersion=function(){var t=require("os").platform();return"win32"==t||"linux"==t?binding.getWinOSVersion():t},atplatform.prototype.getCPUModelName=function(){return binding.getCPUModelName()},atplatform.prototype.getComports=function(){return binding.getComports()},atplatform.prototype.getMemoryAvailable=function(){return binding.getMemoryAvailable()},atplatform.prototype.getDiskInfo=function(){return binding.getDiskInfo()},atplatform.prototype.TOPIC_ALL="All",atplatform.prototype.TOPIC_MODULE_ID="ModuleID",atplatform.prototype.TOPIC_BIOS_VER="BIOSVer",atplatform.prototype.TOPIC_EC_VER="ECVer",atplatform.prototype.TOPIC_OS_VER="OSVer",atplatform.prototype.TOPIC_CPU_NAME="CPUName",atplatform.prototype.TOPIC_COM_PORTS="Comports",atplatform.prototype.TOPIC_MEM_AVAIL="MemAvail",atplatform.prototype.TOPIC_DISK_INFO="diskInfo",atplatform.prototype.platformGetInfo=function(t){"object"!=typeof t&&(t=[t]);var o={};for(let p in t)switch(t[p]){case atplatform.prototype.TOPIC_ALL:o[atplatform.prototype.TOPIC_MODULE_ID]=atplatform.prototype.getBoardName(),o[atplatform.prototype.TOPIC_BIOS_VER]=atplatform.prototype.getBIOSVersion(),o[atplatform.prototype.TOPIC_EC_VER]=atplatform.prototype.getECVersion(),o[atplatform.prototype.TOPIC_OS_VER]=atplatform.prototype.getOSVersion(),o[atplatform.prototype.TOPIC_CPU_NAME]=atplatform.prototype.getCPUModelName(),o[atplatform.prototype.TOPIC_COM_PORTS]=atplatform.prototype.getComports(),o[atplatform.prototype.TOPIC_MEM_AVAIL]=atplatform.prototype.getMemoryAvailable(),o[atplatform.prototype.TOPIC_DISK_INFO]=atplatform.prototype.getDiskInfo();break;case atplatform.prototype.TOPIC_MODULE_ID:o[atplatform.prototype.TOPIC_MODULE_ID]=atplatform.prototype.getBoardName();break;case atplatform.prototype.TOPIC_BIOS_VER:o[atplatform.prototype.TOPIC_BIOS_VER]=atplatform.prototype.getBIOSVersion();break;case atplatform.prototype.TOPIC_EC_VER:o[atplatform.prototype.TOPIC_EC_VER]=atplatform.prototype.getECVersion();break;case atplatform.prototype.TOPIC_OS_VER:o[atplatform.prototype.TOPIC_OS_VER]=atplatform.prototype.getOSVersion();break;case atplatform.prototype.TOPIC_CPU_NAME:o[atplatform.prototype.TOPIC_CPU_NAME]=atplatform.prototype.getCPUModelName();break;case atplatform.prototype.TOPIC_COM_PORTS:o[atplatform.prototype.TOPIC_COM_PORTS]=atplatform.prototype.getComports();break;case atplatform.prototype.TOPIC_MEM_AVAIL:o[atplatform.prototype.TOPIC_MEM_AVAIL]=atplatform.prototype.getMemoryAvailable();break;case atplatform.prototype.TOPIC_DISK_INFO:o[atplatform.prototype.TOPIC_DISK_INFO]=atplatform.prototype.getDiskInfo()}return o},process.on("exit",function(t){}),process.on("uncaughtException",function(t){console.error("UNCAUGHT EXCEPTION:",t),process.exit(1)}),module.exports=new atplatform;
