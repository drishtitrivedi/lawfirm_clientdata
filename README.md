## Quick Start

  The quickest way to get started with (https://github.com/drishtitrivedi/lawfirm_clientdata) to generate an application as shown below:
  
  Install dependencies:

```
$ npm install
```

  Start the server:

```bash
$ npm run server
```

  Access all endpoints at: http://localhost:4000 in Postman
  
  Create database named 'lawfirm' in MongoDB compass
  
  Enter sample lawyer data in http://localhost:4000/api/lawyers in below formate
  
```
  { "name": "lawyer1"}
```

  Enter sample client information using http://localhost:4000/api/clients in below formate (get lowyer from layers API)
  
 ```
 { "fname": "drishti", 
   "lname": "trivedi",
   "address": "20331 80 Ave, Langley",
   "phone": "6598523658",
   "assigned_lawyer": {"_id":"5f7cc80f12ee55250c1b9fac","id":1,"name":"Lawyer1"}
}
```
