/**
 * @fileoverview gRPC-Web generated client stub for com.example.addressbook
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.example = {};
proto.com.example.addressbook = require('./addressbook_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.example.addressbook.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.example.addressbook.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.example.addressbook.Person,
 *   !proto.com.example.addressbook.HelloResponse>}
 */
const methodDescriptor_Greeter_Hello = new grpc.web.MethodDescriptor(
  '/com.example.addressbook.Greeter/Hello',
  grpc.web.MethodType.UNARY,
  proto.com.example.addressbook.Person,
  proto.com.example.addressbook.HelloResponse,
  /**
   * @param {!proto.com.example.addressbook.Person} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.example.addressbook.HelloResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.example.addressbook.Person,
 *   !proto.com.example.addressbook.HelloResponse>}
 */
const methodInfo_Greeter_Hello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.example.addressbook.HelloResponse,
  /**
   * @param {!proto.com.example.addressbook.Person} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.example.addressbook.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.com.example.addressbook.Person} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.example.addressbook.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.example.addressbook.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.example.addressbook.GreeterClient.prototype.hello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.example.addressbook.Greeter/Hello',
      request,
      metadata || {},
      methodDescriptor_Greeter_Hello,
      callback);
};


/**
 * @param {!proto.com.example.addressbook.Person} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.example.addressbook.HelloResponse>}
 *     Promise that resolves to the response
 */
proto.com.example.addressbook.GreeterPromiseClient.prototype.hello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.example.addressbook.Greeter/Hello',
      request,
      metadata || {},
      methodDescriptor_Greeter_Hello);
};


module.exports = proto.com.example.addressbook;

