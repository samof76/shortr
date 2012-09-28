var urlencoder = require('./urlencoder');

for(var i=0;i<50000;i++) {
    result = urlencoder.encode_url(i);
    console.log(i+ " : "+result);    
}

