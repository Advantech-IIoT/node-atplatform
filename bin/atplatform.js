var binding = require('./binding/' + process.platform + '-' + process.arch + '/node-atplatform.node')

// var platform_inited = false;

function atplatform()
{
    // if (!platform_inited) {
	// 	atplatform.prototype.init();
	// }
}

// function cleanup()
// {
// 	binding.closeEApi();
//     platform_inited = false;
// }

// atplatform.prototype.init = function() {
// 	/*
// 	 * Open the EAPI library.
// 	 */
// 	let ret = binding.openEApi();
//     if (ret === 0)
//     	platform_inited = true;
// }

// function objIsInited() {
//     if (platform_inited)
//         return true;
//     else
//         return false;
// }
atplatform.prototype.setIfaceMetric = function (t) {
    return binding.setIfaceMetric(t)
},
atplatform.prototype.getIfacePTable = function () {
    return binding.getIfacePTable()
},

atplatform.prototype.getwifiIfaceList = function()
{
    return binding.getwifiIfaceList();
}
atplatform.prototype.getwifiAllConnInfo = function() 
{
    return binding.getwifiAllConnInfo();
}
atplatform.prototype.getwifiInfoList=function(inputString)
{
	return binding.getwifiInfoList(inputString);
}

atplatform.prototype.getwifiConnInfo=function(inputString)
{
	return binding.getwifiConnInfo(inputString);
}

atplatform.prototype.setwifiConnect=function(inputArray)
{
	return binding.setwifiConnect(inputArray);
}
atplatform.prototype.setwifiDisConnect=function(inputString)
{
	return binding.setwifiDisConnect(inputString);
}
atplatform.prototype.setwifiProfile=function(inputArray)
{
	return binding.setwifiProfile(inputArray);
}

atplatform.prototype.wifiAPCreate=function(inputArray)
{
    // console.log('@@input=,'+inputArray);
	return binding.wifiAPCreate(inputArray);
}

atplatform.prototype.wifiAPStart=function()
{
 
	return binding.wifiAPStart();
}

atplatform.prototype.wifiAPStop=function()
{
  
    return binding.wifiAPStop();
}

atplatform.prototype.getMBInfo=function()
{
	return binding.getMBInfo();
}


atplatform.prototype.getEthernetInfo = function() {
    return binding.getEthernetInfo();
}


atplatform.prototype.getwifiAPInfo=function()
{
	return binding.getwifiAPInfo();
}

atplatform.prototype.getBTInfo = function() {
    return binding.getBTInfo();
}


atplatform.prototype.getBoardName = function() {
    return binding.getBoardName();
}

atplatform.prototype.getBIOSVersion = function() {
    return binding.getBIOSVersion();
}

atplatform.prototype.getECVersion = function() {
    return binding.getECVersion();
}

atplatform.prototype.getOSVersion = function() {
    var os = require('os');
    var ver = os.platform();
    if(ver == 'win32' || ver == 'linux'){
        return binding.getWinOSVersion();
    }
    else return ver;
}

atplatform.prototype.getCPUModelName = function() {
    return binding.getCPUModelName();
}

atplatform.prototype.getComports = function() {
    return binding.getComports();
}

atplatform.prototype.getMemoryAvailable = function() {
    return binding.getMemoryAvailable();
}

atplatform.prototype.getDiskInfo = function() {
    return binding.getDiskInfo();
}

atplatform.prototype.TOPIC_ALL = 'All';
atplatform.prototype.TOPIC_WIFIALLCONNINFO='wifiAllConnInfo';
atplatform.prototype.TOPIC_WIFI_IFACEINFO='wifiIFaceInfo'; 
atplatform.prototype.TOPIC_IFACETABLE = "IFaceTable";
//atplatform.prototype.TOPIC_WIFIINFO='wifiInfo';
//atplatform.prototype.TOPIC_WIFICONNINFO='wifiConnInfo';
atplatform.prototype.TOPIC_APINFO='APInfo';
atplatform.prototype.TOPIC_BTINFO='BTInfo';
atplatform.prototype.TOPIC_MBINFO='MBInfo';
atplatform.prototype.TOPIC_ENTHERNET_INFO='EthernetInIfo'; 

//atplatform.prototype.TOPIC_APSTART='APStart';
//atplatform.prototype.TOPIC_APSTOP='APStop';
//atplatform.prototype.TOPIC_WIFICONN='wifiConn';
//atplatform.prototype.TOPIC_WIFIDISCONN='wifiDisConn';
//atplatform.prototype.TOPIC_WIFIPROFILE='wifiprofile';
atplatform.prototype.TOPIC_MODULE_ID = 'ModuleID';
atplatform.prototype.TOPIC_BIOS_VER = 'BIOSVer';
atplatform.prototype.TOPIC_EC_VER = 'ECVer';
atplatform.prototype.TOPIC_OS_VER = 'OSVer';
atplatform.prototype.TOPIC_CPU_NAME = 'CPUName';
atplatform.prototype.TOPIC_COM_PORTS = 'Comports';
atplatform.prototype.TOPIC_MEM_AVAIL = 'MemAvail';
atplatform.prototype.TOPIC_DISK_INFO = 'diskInfo';

atplatform.prototype.platformGetInfo = function(topic) {
    if (typeof(topic) !== "object")
        topic = [topic];

    var platformInfoObj = {};
    for (let idx in topic) {
        switch(topic[idx]) {
            case atplatform.prototype.TOPIC_ALL:
                platformInfoObj[atplatform.prototype.TOPIC_MODULE_ID] = atplatform.prototype.getBoardName();
                platformInfoObj[atplatform.prototype.TOPIC_BIOS_VER] = atplatform.prototype.getBIOSVersion();
                platformInfoObj[atplatform.prototype.TOPIC_EC_VER] = atplatform.prototype.getECVersion();
                platformInfoObj[atplatform.prototype.TOPIC_OS_VER] = atplatform.prototype.getOSVersion();
                platformInfoObj[atplatform.prototype.TOPIC_CPU_NAME] = atplatform.prototype.getCPUModelName();
                platformInfoObj[atplatform.prototype.TOPIC_COM_PORTS] = atplatform.prototype.getComports();
                platformInfoObj[atplatform.prototype.TOPIC_MEM_AVAIL] = atplatform.prototype.getMemoryAvailable();
                platformInfoObj[atplatform.prototype.TOPIC_DISK_INFO] = atplatform.prototype.getDiskInfo();
                platformInfoObj[atplatform.prototype.TOPIC_BTINFO] = atplatform.prototype.getBTInfo();
                platformInfoObj[atplatform.prototype.TOPIC_APINFO] = atplatform.prototype.getwifiAPInfo();   
                platformInfoObj[atplatform.prototype.TOPIC_WIFIALLCONNINFO] = atplatform.prototype.getwifiAllConnInfo(); 
                platformInfoObj[atplatform.prototype.TOPIC_MBINFO] = atplatform.prototype.getMBInfo(); 
                platformInfoObj[atplatform.prototype.TOPIC_ENTHERNET_INFO] = atplatform.prototype.getEthernetInfo(); 
                break;
            case atplatform.prototype.TOPIC_MODULE_ID:
                platformInfoObj[atplatform.prototype.TOPIC_MODULE_ID] = atplatform.prototype.getBoardName();
                break;
            case atplatform.prototype.TOPIC_BIOS_VER:
                platformInfoObj[atplatform.prototype.TOPIC_BIOS_VER] = atplatform.prototype.getBIOSVersion();
                break;
            case atplatform.prototype.TOPIC_EC_VER:
                platformInfoObj[atplatform.prototype.TOPIC_EC_VER] = atplatform.prototype.getECVersion();
                break;
            case atplatform.prototype.TOPIC_OS_VER:
                platformInfoObj[atplatform.prototype.TOPIC_OS_VER] = atplatform.prototype.getOSVersion();
                break;
            case atplatform.prototype.TOPIC_CPU_NAME:
                platformInfoObj[atplatform.prototype.TOPIC_CPU_NAME] = atplatform.prototype.getCPUModelName();
                break;
            case atplatform.prototype.TOPIC_COM_PORTS:
                platformInfoObj[atplatform.prototype.TOPIC_COM_PORTS] = atplatform.prototype.getComports();
                break;
            case atplatform.prototype.TOPIC_MEM_AVAIL:
                platformInfoObj[atplatform.prototype.TOPIC_MEM_AVAIL] = atplatform.prototype.getMemoryAvailable();
                break;
            case atplatform.prototype.TOPIC_DISK_INFO:
                platformInfoObj[atplatform.prototype.TOPIC_DISK_INFO] = atplatform.prototype.getDiskInfo();
                break;          
            case atplatform.prototype.TOPIC_APINFO:
                platformInfoObj[atplatform.prototype.TOPIC_APINFO]=atplatform.prototype.getwifiAPInfo();
				break;
            case atplatform.prototype.TOPIC_WIFI_IFACEINFO:
                platformInfoObj[atplatform.prototype.TOPIC_WIFI_IFACEINFO] = atplatform.prototype.getwifiIfaceList();
				break;
            case atplatform.prototype.TOPIC_WIFIALLCONNINFO:
                platformInfoObj[atplatform.prototype.TOPIC_WIFIALLCONNINFO] = atplatform.prototype.getwifiAllConnInfo(); 
				break;
            case atplatform.prototype.TOPIC_BTINFO:
                platformInfoObj[atplatform.prototype.TOPIC_BTINFO] = atplatform.prototype.getBTInfo();
				break;
            case atplatform.prototype.TOPIC_MBINFO:
                platformInfoObj[atplatform.prototype.TOPIC_MBINFO] = atplatform.prototype.getMBInfo(); 
				break;
            case atplatform.prototype.TOPIC_ENTHERNET_INFO:
                platformInfoObj[atplatform.prototype.TOPIC_ENTHERNET_INFO] = atplatform.prototype.getEthernetInfo(); 
				break;
            case atplatform.prototype.TOPIC_IFACETABLE: 
                platformInfoObj[atplatform.prototype.TOPIC_IFACETABLE] = atplatform.prototype.getIfacePTable() ;
				break;  
            default:
                break;
        }
    }
    return platformInfoObj;
}


process.on('exit', function (code) {
    // cleanup();
})

process.on('uncaughtException', function (err) {
    console.error('UNCAUGHT EXCEPTION:', err)
    process.exit(1)
})

module.exports = new atplatform;
