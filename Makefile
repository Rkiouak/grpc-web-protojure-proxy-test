all:
	protoc --clojure_out=grpc-client,grpc-server:src --proto_path=resources resources/addressbook.proto
	protoc -I=resources resources/addressbook.proto --grpc-web_out=import_style=commonjs,mode=grpcweb:resources/js
	protoc -I=resources resources/addressbook.proto  --js_out=import_style=commonjs:resources/js

