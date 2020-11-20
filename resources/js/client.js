const {Person, HelloResponse} = require('./addressbook_pb.js');
const {GreeterClient} = require('./addressbook_grpc_web_pb.js');

var client = new GreeterClient('http://localhost:8080');

var request = new Person();
request.setName("Jane Doe");
request.setId(42);
request.setEmail("bar@baz.bat");

client.hello(request, {}, (err, response) => {
  console.log(response.toObject());
});
