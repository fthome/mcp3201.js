# mcp3201.js

A node.js module for interfacing the MCP3201 analog/digital converter.

protocol : HSPI

## Installation

```
$ npm install mcp3201.js
```

## Usage

Here's a short example:

```
var Mcp3201 = require('mcp3201.js'),
    adc = new Mcp3008()

adc.read(function (value) {
    console.log("Voltage = " + value);
});
```

## Interface

### Constructor

```
new Mcp3008([device]);
```

Device defaults to `/dev/spidev0.0`.

### Reading

```
instance.read(callback);
```

This will read the value and send it to `callback`.

### Polling

```
instance.poll(interval, callback);
```

This will read the value every `interval` milliseconds and send it to `callback`. Use `instance.stop()` to stop it.

### Tear down

```
instance.close();
```

This will release the device and stop polling (if any).
