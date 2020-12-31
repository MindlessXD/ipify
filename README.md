## IPIFY
Module For Easy Streamlined Access Of The IPIFY IPv4 Service

### Install
```
npm i @mindlessxd/ipify
```

### Examples

#### IPv4
```javascript
const ipify = require('@mindlessxd/ipify');

(async () => {
	try {
        let ipv4 = await ipify.ip4()
        console.log(ipv4)
	} catch (error) {
        console.log(error)
	}
})();
````