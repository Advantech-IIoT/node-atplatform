# node-atplatform
Node.js Integration for Advantech IIoT platform function.

Notice that an Advantech IIoT Platform SDK have to be installed to make this node works correctly.
Advantech IIoT Platform SDK download link is shown below:
Windows:
  https://github.com/Advantech-IIoT/Platform-SDK/tree/master/windows/bin
Linux:
  https://github.com/Advantech-IIoT/Platform-SDK/tree/master/linux/bin


## Installation
Use npm command to install this package locally in the Node-RED modules directory
``` bash
npm install node-atplatform
```
or install it globally with the command
```bash
npm install node-atplatform -g
```


## Usage
Platform package provides the following functions:
 - Get Module ID
 - Get BIOS version
 - Get EC version
 - Get OS version
 - Get CPU model name
 - Get COM ports
 - Get Memory available
 - Get Disk information


## Example
Please refer to [`demo.js`](./demo.js).

All these examples are started with:
```js
var platform = require('node-atplatform');
```

### Get platform module ID
Print platform module ID
```js
console.log(platform.hwmonGetInfo(platform.TOPIC_MODULE_ID));
```

### Get BIOS version
Print BIOS version
```js
console.log(platform.hwmonGetInfo(platform.TOPIC_BIOS_VER));
```

### Get EC version
Print EC version
```js
console.log(platform.hwmonGetInfo(platform.TOPIC_EC_VER));
```

### Get OS version
Print OS version
```js
console.log(platform.hwmonGetInfo(platform.TOPIC_OS_VER));
```

### Get CPU model name
Print CPU model name
```js
console.log(platform.hwmonGetInfo(platform.TOPIC_CPU_NAME));
```

### Get all COM ports
Print all COM ports
```js
console.log(platform.hwmonGetInfo(platform.TOPIC_COM_PORTS));
```

### Get available memory
Print available memory
```js
console.log(platform.hwmonGetInfo(platform.TOPIC_MEM_AVAIL));
```

### Get disk information
Print disk information
```js
console.log(platform.hwmonGetInfo(platform.TOPIC_DISK_INFO));
```

### Get all platform information
Print all platform information
```js
console.log(platform.hwmonGetInfo(platform.TOPIC_ALL));
```


## Tested Platform
- Windows 10 Enterprise LTSB with node.js 10.15.3


## History
- 2.0.0 - November 2019 : update for NODE_MODULE_VERSION=64
- 0.0.1 - March 2018 : Initial Release


## License
Copyright 2019 ADVANTECH Corp. under [the Apache 2.0 license](LICENSE).
