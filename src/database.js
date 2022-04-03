// Running speedtests and store results in a JSON file

const FastSpeedtest = require("fast-speedtest-api");
var fs = require('fs');

const data = [];
const day = new Date();


// Set Interval
let date = new Date();

let sec = date.getSeconds();

setTimeout(()=>{
  
  setInterval(()=>{
    

    let speedtest = new FastSpeedtest({
        
      token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // Enter your token, see https://github.com/luisoos/Network-Speed-Alert-Discord#-get-token
        
      verbose: false, // default: false
        
      timeout: 10000, // default: 5000
        
      https: true, // default: true
        
      urlCount: 5, // default: 5
        
      bufferSize: 8, // default: 8
        
      unit: FastSpeedtest.UNITS.Mbps // default: Bps
    
    });
    
    speedtest.getSpeed().then(s => {
      
      console.log(`Speed: ${s} Mbps`);
      
      var speed = Math.floor(s);

      var date = day.getDate()+'/'+(day.getMonth()+1)+'/'+day.getFullYear()+', '+day.getHours()+':'+day.getMinutes();
    
      var obj = {
        date: date,
        speed: speed
      }

      data.push(obj)
      
      fs.writeFile ("data.json", JSON.stringify(data, null, 4), function(err) {
          if (err) throw err;
            console.log('Data saved.');
          }
      );
      
    
    }).catch(e => {
        
      console.error(e.message);
    
    });
    

  }, 60 * 10000);

}, (60 - sec) * 10000);
