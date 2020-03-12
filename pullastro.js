const http = require('http');
const openAPIUrl = 'http://api.open-notify.org/astros.json';
var serverResp = [];
var astroNum = 3;

http.createServer((request, response)=>{
	request.on('error', (err)=>{
		console.log(err);
	}).on('data', (data)=>{
		//
	}).on('end', ()=>{
			console.log(request);
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify(options));
	});
}).listen(8080);

var options = {
  "fulfillmentText": "There are $astroNum",
  "source": "example.com",
  "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "this is a simple response"
            }
          }
        ]
      }
    },
    "facebook": {
      "text": "Hello, Facebook!"
    },
    "slack": {
      "text": "This is a text response for Slack."
    }
  },
  "outputContexts": [
    {
      "name": "projects/project-id/agent/sessions/session-id/contexts/context-name",
      "lifespanCount": 5,
      "parameters": {
        "param-name": "param-value"
      }
    }
  ],
  "followupEventInput": {
    "name": "event name",
    "languageCode": "en-US",
    "parameters": {
      "param-name": "param-value"
    }
  }
};



/*


		if(request.queryResult.intent.displayName == 'howmany'){
			
			http.get(openAPIUrl, (response)=>{
				response.on('data', (data)=>{
					serverResp.push(data);
				}).on('end', ()=>{
					var resp = serverResp.toString();
					astroNum = JSON.parse(resp).number;
				});
			});

			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify(options));
		}


*/

