/**
This is just a dumb test to check that the MCP3008 works. It requires the ADC to be wired up and have something connected to channel 0. Edit as necessary to suit your setup.
*/

var Mcp3201 = require('./mcp3201');
var adc = new Mcp3201();
var out = function (value) {
        console.log("Read", value);
    };

adc.read(out);
adc.poll(50, out);
setTimeout(function () { adc.close(); }, 1000);
