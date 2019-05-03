/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.model = (function() {

    /**
     * Namespace model.
     * @exports model
     * @namespace
     */
    var model = {};

    model.Attendance = (function() {

        /**
         * Properties of an Attendance.
         * @memberof model
         * @interface IAttendance
         * @property {number|null} [day] Attendance day
         * @property {number|null} [studid] Attendance studid
         * @property {string|null} [arrivalTime] Attendance arrivalTime
         * @property {string|null} [departTime] Attendance departTime
         */

        /**
         * Constructs a new Attendance.
         * @memberof model
         * @classdesc Represents an Attendance.
         * @implements IAttendance
         * @constructor
         * @param {model.IAttendance=} [properties] Properties to set
         */
        function Attendance(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Attendance day.
         * @member {number} day
         * @memberof model.Attendance
         * @instance
         */
        Attendance.prototype.day = 0;

        /**
         * Attendance studid.
         * @member {number} studid
         * @memberof model.Attendance
         * @instance
         */
        Attendance.prototype.studid = 0;

        /**
         * Attendance arrivalTime.
         * @member {string} arrivalTime
         * @memberof model.Attendance
         * @instance
         */
        Attendance.prototype.arrivalTime = "";

        /**
         * Attendance departTime.
         * @member {string} departTime
         * @memberof model.Attendance
         * @instance
         */
        Attendance.prototype.departTime = "";

        /**
         * Creates a new Attendance instance using the specified properties.
         * @function create
         * @memberof model.Attendance
         * @static
         * @param {model.IAttendance=} [properties] Properties to set
         * @returns {model.Attendance} Attendance instance
         */
        Attendance.create = function create(properties) {
            return new Attendance(properties);
        };

        /**
         * Encodes the specified Attendance message. Does not implicitly {@link model.Attendance.verify|verify} messages.
         * @function encode
         * @memberof model.Attendance
         * @static
         * @param {model.IAttendance} message Attendance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attendance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.day != null && message.hasOwnProperty("day"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.day);
            if (message.studid != null && message.hasOwnProperty("studid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.studid);
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.arrivalTime);
            if (message.departTime != null && message.hasOwnProperty("departTime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.departTime);
            return writer;
        };

        /**
         * Encodes the specified Attendance message, length delimited. Does not implicitly {@link model.Attendance.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.Attendance
         * @static
         * @param {model.IAttendance} message Attendance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attendance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Attendance message from the specified reader or buffer.
         * @function decode
         * @memberof model.Attendance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.Attendance} Attendance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attendance.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.Attendance();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.day = reader.int32();
                    break;
                case 2:
                    message.studid = reader.int32();
                    break;
                case 3:
                    message.arrivalTime = reader.string();
                    break;
                case 4:
                    message.departTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Attendance message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.Attendance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.Attendance} Attendance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attendance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Attendance message.
         * @function verify
         * @memberof model.Attendance
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Attendance.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.day != null && message.hasOwnProperty("day"))
                if (!$util.isInteger(message.day))
                    return "day: integer expected";
            if (message.studid != null && message.hasOwnProperty("studid"))
                if (!$util.isInteger(message.studid))
                    return "studid: integer expected";
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                if (!$util.isString(message.arrivalTime))
                    return "arrivalTime: string expected";
            if (message.departTime != null && message.hasOwnProperty("departTime"))
                if (!$util.isString(message.departTime))
                    return "departTime: string expected";
            return null;
        };

        /**
         * Creates an Attendance message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.Attendance
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.Attendance} Attendance
         */
        Attendance.fromObject = function fromObject(object) {
            if (object instanceof $root.model.Attendance)
                return object;
            var message = new $root.model.Attendance();
            if (object.day != null)
                message.day = object.day | 0;
            if (object.studid != null)
                message.studid = object.studid | 0;
            if (object.arrivalTime != null)
                message.arrivalTime = String(object.arrivalTime);
            if (object.departTime != null)
                message.departTime = String(object.departTime);
            return message;
        };

        /**
         * Creates a plain object from an Attendance message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.Attendance
         * @static
         * @param {model.Attendance} message Attendance
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Attendance.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.day = 0;
                object.studid = 0;
                object.arrivalTime = "";
                object.departTime = "";
            }
            if (message.day != null && message.hasOwnProperty("day"))
                object.day = message.day;
            if (message.studid != null && message.hasOwnProperty("studid"))
                object.studid = message.studid;
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                object.arrivalTime = message.arrivalTime;
            if (message.departTime != null && message.hasOwnProperty("departTime"))
                object.departTime = message.departTime;
            return object;
        };

        /**
         * Converts this Attendance to JSON.
         * @function toJSON
         * @memberof model.Attendance
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Attendance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Attendance;
    })();

    model.TabView = (function() {

        /**
         * Properties of a TabView.
         * @memberof model
         * @interface ITabView
         * @property {Array.<model.IAttendance>|null} [tabV] TabView tabV
         */

        /**
         * Constructs a new TabView.
         * @memberof model
         * @classdesc Represents a TabView.
         * @implements ITabView
         * @constructor
         * @param {model.ITabView=} [properties] Properties to set
         */
        function TabView(properties) {
            this.tabV = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TabView tabV.
         * @member {Array.<model.IAttendance>} tabV
         * @memberof model.TabView
         * @instance
         */
        TabView.prototype.tabV = $util.emptyArray;

        /**
         * Creates a new TabView instance using the specified properties.
         * @function create
         * @memberof model.TabView
         * @static
         * @param {model.ITabView=} [properties] Properties to set
         * @returns {model.TabView} TabView instance
         */
        TabView.create = function create(properties) {
            return new TabView(properties);
        };

        /**
         * Encodes the specified TabView message. Does not implicitly {@link model.TabView.verify|verify} messages.
         * @function encode
         * @memberof model.TabView
         * @static
         * @param {model.ITabView} message TabView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tabV != null && message.tabV.length)
                for (var i = 0; i < message.tabV.length; ++i)
                    $root.model.Attendance.encode(message.tabV[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TabView message, length delimited. Does not implicitly {@link model.TabView.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.TabView
         * @static
         * @param {model.ITabView} message TabView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabView.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TabView message from the specified reader or buffer.
         * @function decode
         * @memberof model.TabView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.TabView} TabView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.TabView();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.tabV && message.tabV.length))
                        message.tabV = [];
                    message.tabV.push($root.model.Attendance.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TabView message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.TabView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.TabView} TabView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabView.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TabView message.
         * @function verify
         * @memberof model.TabView
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TabView.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tabV != null && message.hasOwnProperty("tabV")) {
                if (!Array.isArray(message.tabV))
                    return "tabV: array expected";
                for (var i = 0; i < message.tabV.length; ++i) {
                    var error = $root.model.Attendance.verify(message.tabV[i]);
                    if (error)
                        return "tabV." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TabView message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.TabView
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.TabView} TabView
         */
        TabView.fromObject = function fromObject(object) {
            if (object instanceof $root.model.TabView)
                return object;
            var message = new $root.model.TabView();
            if (object.tabV) {
                if (!Array.isArray(object.tabV))
                    throw TypeError(".model.TabView.tabV: array expected");
                message.tabV = [];
                for (var i = 0; i < object.tabV.length; ++i) {
                    if (typeof object.tabV[i] !== "object")
                        throw TypeError(".model.TabView.tabV: object expected");
                    message.tabV[i] = $root.model.Attendance.fromObject(object.tabV[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TabView message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.TabView
         * @static
         * @param {model.TabView} message TabView
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TabView.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tabV = [];
            if (message.tabV && message.tabV.length) {
                object.tabV = [];
                for (var j = 0; j < message.tabV.length; ++j)
                    object.tabV[j] = $root.model.Attendance.toObject(message.tabV[j], options);
            }
            return object;
        };

        /**
         * Converts this TabView to JSON.
         * @function toJSON
         * @memberof model.TabView
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TabView.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TabView;
    })();

    model.GroupItems = (function() {

        /**
         * Properties of a GroupItems.
         * @memberof model
         * @interface IGroupItems
         * @property {number|null} [day] GroupItems day
         * @property {string|null} [arrivalTime] GroupItems arrivalTime
         * @property {string|null} [departTime] GroupItems departTime
         */

        /**
         * Constructs a new GroupItems.
         * @memberof model
         * @classdesc Represents a GroupItems.
         * @implements IGroupItems
         * @constructor
         * @param {model.IGroupItems=} [properties] Properties to set
         */
        function GroupItems(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupItems day.
         * @member {number} day
         * @memberof model.GroupItems
         * @instance
         */
        GroupItems.prototype.day = 0;

        /**
         * GroupItems arrivalTime.
         * @member {string} arrivalTime
         * @memberof model.GroupItems
         * @instance
         */
        GroupItems.prototype.arrivalTime = "";

        /**
         * GroupItems departTime.
         * @member {string} departTime
         * @memberof model.GroupItems
         * @instance
         */
        GroupItems.prototype.departTime = "";

        /**
         * Creates a new GroupItems instance using the specified properties.
         * @function create
         * @memberof model.GroupItems
         * @static
         * @param {model.IGroupItems=} [properties] Properties to set
         * @returns {model.GroupItems} GroupItems instance
         */
        GroupItems.create = function create(properties) {
            return new GroupItems(properties);
        };

        /**
         * Encodes the specified GroupItems message. Does not implicitly {@link model.GroupItems.verify|verify} messages.
         * @function encode
         * @memberof model.GroupItems
         * @static
         * @param {model.IGroupItems} message GroupItems message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupItems.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.day != null && message.hasOwnProperty("day"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.day);
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.arrivalTime);
            if (message.departTime != null && message.hasOwnProperty("departTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.departTime);
            return writer;
        };

        /**
         * Encodes the specified GroupItems message, length delimited. Does not implicitly {@link model.GroupItems.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.GroupItems
         * @static
         * @param {model.IGroupItems} message GroupItems message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupItems.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupItems message from the specified reader or buffer.
         * @function decode
         * @memberof model.GroupItems
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.GroupItems} GroupItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupItems.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.GroupItems();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.day = reader.int32();
                    break;
                case 2:
                    message.arrivalTime = reader.string();
                    break;
                case 3:
                    message.departTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GroupItems message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.GroupItems
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.GroupItems} GroupItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupItems.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupItems message.
         * @function verify
         * @memberof model.GroupItems
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupItems.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.day != null && message.hasOwnProperty("day"))
                if (!$util.isInteger(message.day))
                    return "day: integer expected";
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                if (!$util.isString(message.arrivalTime))
                    return "arrivalTime: string expected";
            if (message.departTime != null && message.hasOwnProperty("departTime"))
                if (!$util.isString(message.departTime))
                    return "departTime: string expected";
            return null;
        };

        /**
         * Creates a GroupItems message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.GroupItems
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.GroupItems} GroupItems
         */
        GroupItems.fromObject = function fromObject(object) {
            if (object instanceof $root.model.GroupItems)
                return object;
            var message = new $root.model.GroupItems();
            if (object.day != null)
                message.day = object.day | 0;
            if (object.arrivalTime != null)
                message.arrivalTime = String(object.arrivalTime);
            if (object.departTime != null)
                message.departTime = String(object.departTime);
            return message;
        };

        /**
         * Creates a plain object from a GroupItems message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.GroupItems
         * @static
         * @param {model.GroupItems} message GroupItems
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupItems.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.day = 0;
                object.arrivalTime = "";
                object.departTime = "";
            }
            if (message.day != null && message.hasOwnProperty("day"))
                object.day = message.day;
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                object.arrivalTime = message.arrivalTime;
            if (message.departTime != null && message.hasOwnProperty("departTime"))
                object.departTime = message.departTime;
            return object;
        };

        /**
         * Converts this GroupItems to JSON.
         * @function toJSON
         * @memberof model.GroupItems
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupItems.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupItems;
    })();

    model.xxx = (function() {

        /**
         * Properties of a xxx.
         * @memberof model
         * @interface Ixxx
         * @property {string} groupid xxx groupid
         * @property {Array.<model.IGroupItems>|null} [items] xxx items
         */

        /**
         * Constructs a new xxx.
         * @memberof model
         * @classdesc Represents a xxx.
         * @implements Ixxx
         * @constructor
         * @param {model.Ixxx=} [properties] Properties to set
         */
        function xxx(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * xxx groupid.
         * @member {string} groupid
         * @memberof model.xxx
         * @instance
         */
        xxx.prototype.groupid = "";

        /**
         * xxx items.
         * @member {Array.<model.IGroupItems>} items
         * @memberof model.xxx
         * @instance
         */
        xxx.prototype.items = $util.emptyArray;

        /**
         * Creates a new xxx instance using the specified properties.
         * @function create
         * @memberof model.xxx
         * @static
         * @param {model.Ixxx=} [properties] Properties to set
         * @returns {model.xxx} xxx instance
         */
        xxx.create = function create(properties) {
            return new xxx(properties);
        };

        /**
         * Encodes the specified xxx message. Does not implicitly {@link model.xxx.verify|verify} messages.
         * @function encode
         * @memberof model.xxx
         * @static
         * @param {model.Ixxx} message xxx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        xxx.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupid);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.model.GroupItems.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified xxx message, length delimited. Does not implicitly {@link model.xxx.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.xxx
         * @static
         * @param {model.Ixxx} message xxx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        xxx.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a xxx message from the specified reader or buffer.
         * @function decode
         * @memberof model.xxx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.xxx} xxx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        xxx.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.xxx();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupid = reader.string();
                    break;
                case 2:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.model.GroupItems.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("groupid"))
                throw $util.ProtocolError("missing required 'groupid'", { instance: message });
            return message;
        };

        /**
         * Decodes a xxx message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.xxx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.xxx} xxx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        xxx.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a xxx message.
         * @function verify
         * @memberof model.xxx
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        xxx.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.groupid))
                return "groupid: string expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.model.GroupItems.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a xxx message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.xxx
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.xxx} xxx
         */
        xxx.fromObject = function fromObject(object) {
            if (object instanceof $root.model.xxx)
                return object;
            var message = new $root.model.xxx();
            if (object.groupid != null)
                message.groupid = String(object.groupid);
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".model.xxx.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".model.xxx.items: object expected");
                    message.items[i] = $root.model.GroupItems.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a xxx message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.xxx
         * @static
         * @param {model.xxx} message xxx
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        xxx.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults)
                object.groupid = "";
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.model.GroupItems.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this xxx to JSON.
         * @function toJSON
         * @memberof model.xxx
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        xxx.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return xxx;
    })();

    model.yyy = (function() {

        /**
         * Properties of a yyy.
         * @memberof model
         * @interface Iyyy
         * @property {string|null} [id] yyy id
         * @property {string|null} [content] yyy content
         */

        /**
         * Constructs a new yyy.
         * @memberof model
         * @classdesc Represents a yyy.
         * @implements Iyyy
         * @constructor
         * @param {model.Iyyy=} [properties] Properties to set
         */
        function yyy(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * yyy id.
         * @member {string} id
         * @memberof model.yyy
         * @instance
         */
        yyy.prototype.id = "";

        /**
         * yyy content.
         * @member {string} content
         * @memberof model.yyy
         * @instance
         */
        yyy.prototype.content = "";

        /**
         * Creates a new yyy instance using the specified properties.
         * @function create
         * @memberof model.yyy
         * @static
         * @param {model.Iyyy=} [properties] Properties to set
         * @returns {model.yyy} yyy instance
         */
        yyy.create = function create(properties) {
            return new yyy(properties);
        };

        /**
         * Encodes the specified yyy message. Does not implicitly {@link model.yyy.verify|verify} messages.
         * @function encode
         * @memberof model.yyy
         * @static
         * @param {model.Iyyy} message yyy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        yyy.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified yyy message, length delimited. Does not implicitly {@link model.yyy.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.yyy
         * @static
         * @param {model.Iyyy} message yyy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        yyy.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a yyy message from the specified reader or buffer.
         * @function decode
         * @memberof model.yyy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.yyy} yyy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        yyy.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.yyy();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a yyy message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.yyy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.yyy} yyy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        yyy.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a yyy message.
         * @function verify
         * @memberof model.yyy
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        yyy.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a yyy message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.yyy
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.yyy} yyy
         */
        yyy.fromObject = function fromObject(object) {
            if (object instanceof $root.model.yyy)
                return object;
            var message = new $root.model.yyy();
            if (object.id != null)
                message.id = String(object.id);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a yyy message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.yyy
         * @static
         * @param {model.yyy} message yyy
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        yyy.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.content = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this yyy to JSON.
         * @function toJSON
         * @memberof model.yyy
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        yyy.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return yyy;
    })();

    model.TimelineView = (function() {

        /**
         * Properties of a TimelineView.
         * @memberof model
         * @interface ITimelineView
         * @property {Array.<model.Ixxx>|null} [items] TimelineView items
         * @property {Array.<model.Iyyy>|null} [group] TimelineView group
         */

        /**
         * Constructs a new TimelineView.
         * @memberof model
         * @classdesc Represents a TimelineView.
         * @implements ITimelineView
         * @constructor
         * @param {model.ITimelineView=} [properties] Properties to set
         */
        function TimelineView(properties) {
            this.items = [];
            this.group = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimelineView items.
         * @member {Array.<model.Ixxx>} items
         * @memberof model.TimelineView
         * @instance
         */
        TimelineView.prototype.items = $util.emptyArray;

        /**
         * TimelineView group.
         * @member {Array.<model.Iyyy>} group
         * @memberof model.TimelineView
         * @instance
         */
        TimelineView.prototype.group = $util.emptyArray;

        /**
         * Creates a new TimelineView instance using the specified properties.
         * @function create
         * @memberof model.TimelineView
         * @static
         * @param {model.ITimelineView=} [properties] Properties to set
         * @returns {model.TimelineView} TimelineView instance
         */
        TimelineView.create = function create(properties) {
            return new TimelineView(properties);
        };

        /**
         * Encodes the specified TimelineView message. Does not implicitly {@link model.TimelineView.verify|verify} messages.
         * @function encode
         * @memberof model.TimelineView
         * @static
         * @param {model.ITimelineView} message TimelineView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimelineView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.model.xxx.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.group != null && message.group.length)
                for (var i = 0; i < message.group.length; ++i)
                    $root.model.yyy.encode(message.group[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TimelineView message, length delimited. Does not implicitly {@link model.TimelineView.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.TimelineView
         * @static
         * @param {model.ITimelineView} message TimelineView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimelineView.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimelineView message from the specified reader or buffer.
         * @function decode
         * @memberof model.TimelineView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.TimelineView} TimelineView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimelineView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.TimelineView();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.model.xxx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.group && message.group.length))
                        message.group = [];
                    message.group.push($root.model.yyy.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TimelineView message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.TimelineView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.TimelineView} TimelineView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimelineView.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimelineView message.
         * @function verify
         * @memberof model.TimelineView
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimelineView.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.model.xxx.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.group != null && message.hasOwnProperty("group")) {
                if (!Array.isArray(message.group))
                    return "group: array expected";
                for (var i = 0; i < message.group.length; ++i) {
                    var error = $root.model.yyy.verify(message.group[i]);
                    if (error)
                        return "group." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TimelineView message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.TimelineView
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.TimelineView} TimelineView
         */
        TimelineView.fromObject = function fromObject(object) {
            if (object instanceof $root.model.TimelineView)
                return object;
            var message = new $root.model.TimelineView();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".model.TimelineView.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".model.TimelineView.items: object expected");
                    message.items[i] = $root.model.xxx.fromObject(object.items[i]);
                }
            }
            if (object.group) {
                if (!Array.isArray(object.group))
                    throw TypeError(".model.TimelineView.group: array expected");
                message.group = [];
                for (var i = 0; i < object.group.length; ++i) {
                    if (typeof object.group[i] !== "object")
                        throw TypeError(".model.TimelineView.group: object expected");
                    message.group[i] = $root.model.yyy.fromObject(object.group[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TimelineView message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.TimelineView
         * @static
         * @param {model.TimelineView} message TimelineView
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimelineView.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.items = [];
                object.group = [];
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.model.xxx.toObject(message.items[j], options);
            }
            if (message.group && message.group.length) {
                object.group = [];
                for (var j = 0; j < message.group.length; ++j)
                    object.group[j] = $root.model.yyy.toObject(message.group[j], options);
            }
            return object;
        };

        /**
         * Converts this TimelineView to JSON.
         * @function toJSON
         * @memberof model.TimelineView
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimelineView.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimelineView;
    })();

    model.GroupCount = (function() {

        /**
         * Properties of a GroupCount.
         * @memberof model
         * @interface IGroupCount
         * @property {number|null} [day] GroupCount day
         * @property {number|null} [studid] GroupCount studid
         * @property {string} count GroupCount count
         */

        /**
         * Constructs a new GroupCount.
         * @memberof model
         * @classdesc Represents a GroupCount.
         * @implements IGroupCount
         * @constructor
         * @param {model.IGroupCount=} [properties] Properties to set
         */
        function GroupCount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GroupCount day.
         * @member {number} day
         * @memberof model.GroupCount
         * @instance
         */
        GroupCount.prototype.day = 0;

        /**
         * GroupCount studid.
         * @member {number} studid
         * @memberof model.GroupCount
         * @instance
         */
        GroupCount.prototype.studid = 0;

        /**
         * GroupCount count.
         * @member {string} count
         * @memberof model.GroupCount
         * @instance
         */
        GroupCount.prototype.count = "";

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * GroupCount testOneof.
         * @member {"day"|"studid"|undefined} testOneof
         * @memberof model.GroupCount
         * @instance
         */
        Object.defineProperty(GroupCount.prototype, "testOneof", {
            get: $util.oneOfGetter($oneOfFields = ["day", "studid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GroupCount instance using the specified properties.
         * @function create
         * @memberof model.GroupCount
         * @static
         * @param {model.IGroupCount=} [properties] Properties to set
         * @returns {model.GroupCount} GroupCount instance
         */
        GroupCount.create = function create(properties) {
            return new GroupCount(properties);
        };

        /**
         * Encodes the specified GroupCount message. Does not implicitly {@link model.GroupCount.verify|verify} messages.
         * @function encode
         * @memberof model.GroupCount
         * @static
         * @param {model.IGroupCount} message GroupCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupCount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.day != null && message.hasOwnProperty("day"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.day);
            if (message.studid != null && message.hasOwnProperty("studid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.studid);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.count);
            return writer;
        };

        /**
         * Encodes the specified GroupCount message, length delimited. Does not implicitly {@link model.GroupCount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.GroupCount
         * @static
         * @param {model.IGroupCount} message GroupCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GroupCount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GroupCount message from the specified reader or buffer.
         * @function decode
         * @memberof model.GroupCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.GroupCount} GroupCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupCount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.GroupCount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.day = reader.int32();
                    break;
                case 2:
                    message.studid = reader.int32();
                    break;
                case 3:
                    message.count = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            return message;
        };

        /**
         * Decodes a GroupCount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.GroupCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.GroupCount} GroupCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GroupCount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GroupCount message.
         * @function verify
         * @memberof model.GroupCount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GroupCount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.day != null && message.hasOwnProperty("day")) {
                properties.testOneof = 1;
                if (!$util.isInteger(message.day))
                    return "day: integer expected";
            }
            if (message.studid != null && message.hasOwnProperty("studid")) {
                if (properties.testOneof === 1)
                    return "testOneof: multiple values";
                properties.testOneof = 1;
                if (!$util.isInteger(message.studid))
                    return "studid: integer expected";
            }
            if (!$util.isString(message.count))
                return "count: string expected";
            return null;
        };

        /**
         * Creates a GroupCount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.GroupCount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.GroupCount} GroupCount
         */
        GroupCount.fromObject = function fromObject(object) {
            if (object instanceof $root.model.GroupCount)
                return object;
            var message = new $root.model.GroupCount();
            if (object.day != null)
                message.day = object.day | 0;
            if (object.studid != null)
                message.studid = object.studid | 0;
            if (object.count != null)
                message.count = String(object.count);
            return message;
        };

        /**
         * Creates a plain object from a GroupCount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.GroupCount
         * @static
         * @param {model.GroupCount} message GroupCount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GroupCount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.count = "";
            if (message.day != null && message.hasOwnProperty("day")) {
                object.day = message.day;
                if (options.oneofs)
                    object.testOneof = "day";
            }
            if (message.studid != null && message.hasOwnProperty("studid")) {
                object.studid = message.studid;
                if (options.oneofs)
                    object.testOneof = "studid";
            }
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this GroupCount to JSON.
         * @function toJSON
         * @memberof model.GroupCount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GroupCount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupCount;
    })();

    model.HierarchicalView = (function() {

        /**
         * Properties of a HierarchicalView.
         * @memberof model
         * @interface IHierarchicalView
         * @property {Array.<model.IGroupCount>|null} [hierarchicalV] HierarchicalView hierarchicalV
         */

        /**
         * Constructs a new HierarchicalView.
         * @memberof model
         * @classdesc Represents a HierarchicalView.
         * @implements IHierarchicalView
         * @constructor
         * @param {model.IHierarchicalView=} [properties] Properties to set
         */
        function HierarchicalView(properties) {
            this.hierarchicalV = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HierarchicalView hierarchicalV.
         * @member {Array.<model.IGroupCount>} hierarchicalV
         * @memberof model.HierarchicalView
         * @instance
         */
        HierarchicalView.prototype.hierarchicalV = $util.emptyArray;

        /**
         * Creates a new HierarchicalView instance using the specified properties.
         * @function create
         * @memberof model.HierarchicalView
         * @static
         * @param {model.IHierarchicalView=} [properties] Properties to set
         * @returns {model.HierarchicalView} HierarchicalView instance
         */
        HierarchicalView.create = function create(properties) {
            return new HierarchicalView(properties);
        };

        /**
         * Encodes the specified HierarchicalView message. Does not implicitly {@link model.HierarchicalView.verify|verify} messages.
         * @function encode
         * @memberof model.HierarchicalView
         * @static
         * @param {model.IHierarchicalView} message HierarchicalView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HierarchicalView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hierarchicalV != null && message.hierarchicalV.length)
                for (var i = 0; i < message.hierarchicalV.length; ++i)
                    $root.model.GroupCount.encode(message.hierarchicalV[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HierarchicalView message, length delimited. Does not implicitly {@link model.HierarchicalView.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.HierarchicalView
         * @static
         * @param {model.IHierarchicalView} message HierarchicalView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HierarchicalView.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HierarchicalView message from the specified reader or buffer.
         * @function decode
         * @memberof model.HierarchicalView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.HierarchicalView} HierarchicalView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HierarchicalView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.HierarchicalView();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.hierarchicalV && message.hierarchicalV.length))
                        message.hierarchicalV = [];
                    message.hierarchicalV.push($root.model.GroupCount.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HierarchicalView message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.HierarchicalView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.HierarchicalView} HierarchicalView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HierarchicalView.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HierarchicalView message.
         * @function verify
         * @memberof model.HierarchicalView
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HierarchicalView.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hierarchicalV != null && message.hasOwnProperty("hierarchicalV")) {
                if (!Array.isArray(message.hierarchicalV))
                    return "hierarchicalV: array expected";
                for (var i = 0; i < message.hierarchicalV.length; ++i) {
                    var error = $root.model.GroupCount.verify(message.hierarchicalV[i]);
                    if (error)
                        return "hierarchicalV." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HierarchicalView message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.HierarchicalView
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.HierarchicalView} HierarchicalView
         */
        HierarchicalView.fromObject = function fromObject(object) {
            if (object instanceof $root.model.HierarchicalView)
                return object;
            var message = new $root.model.HierarchicalView();
            if (object.hierarchicalV) {
                if (!Array.isArray(object.hierarchicalV))
                    throw TypeError(".model.HierarchicalView.hierarchicalV: array expected");
                message.hierarchicalV = [];
                for (var i = 0; i < object.hierarchicalV.length; ++i) {
                    if (typeof object.hierarchicalV[i] !== "object")
                        throw TypeError(".model.HierarchicalView.hierarchicalV: object expected");
                    message.hierarchicalV[i] = $root.model.GroupCount.fromObject(object.hierarchicalV[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HierarchicalView message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.HierarchicalView
         * @static
         * @param {model.HierarchicalView} message HierarchicalView
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HierarchicalView.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.hierarchicalV = [];
            if (message.hierarchicalV && message.hierarchicalV.length) {
                object.hierarchicalV = [];
                for (var j = 0; j < message.hierarchicalV.length; ++j)
                    object.hierarchicalV[j] = $root.model.GroupCount.toObject(message.hierarchicalV[j], options);
            }
            return object;
        };

        /**
         * Converts this HierarchicalView to JSON.
         * @function toJSON
         * @memberof model.HierarchicalView
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HierarchicalView.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HierarchicalView;
    })();

    model.TimeDetail = (function() {

        /**
         * Properties of a TimeDetail.
         * @memberof model
         * @interface ITimeDetail
         * @property {number|null} [day] TimeDetail day
         * @property {number|null} [studid] TimeDetail studid
         * @property {string} arrivalTime TimeDetail arrivalTime
         * @property {string} departTime TimeDetail departTime
         */

        /**
         * Constructs a new TimeDetail.
         * @memberof model
         * @classdesc Represents a TimeDetail.
         * @implements ITimeDetail
         * @constructor
         * @param {model.ITimeDetail=} [properties] Properties to set
         */
        function TimeDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimeDetail day.
         * @member {number} day
         * @memberof model.TimeDetail
         * @instance
         */
        TimeDetail.prototype.day = 0;

        /**
         * TimeDetail studid.
         * @member {number} studid
         * @memberof model.TimeDetail
         * @instance
         */
        TimeDetail.prototype.studid = 0;

        /**
         * TimeDetail arrivalTime.
         * @member {string} arrivalTime
         * @memberof model.TimeDetail
         * @instance
         */
        TimeDetail.prototype.arrivalTime = "";

        /**
         * TimeDetail departTime.
         * @member {string} departTime
         * @memberof model.TimeDetail
         * @instance
         */
        TimeDetail.prototype.departTime = "";

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * TimeDetail testTwoof.
         * @member {"day"|"studid"|undefined} testTwoof
         * @memberof model.TimeDetail
         * @instance
         */
        Object.defineProperty(TimeDetail.prototype, "testTwoof", {
            get: $util.oneOfGetter($oneOfFields = ["day", "studid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new TimeDetail instance using the specified properties.
         * @function create
         * @memberof model.TimeDetail
         * @static
         * @param {model.ITimeDetail=} [properties] Properties to set
         * @returns {model.TimeDetail} TimeDetail instance
         */
        TimeDetail.create = function create(properties) {
            return new TimeDetail(properties);
        };

        /**
         * Encodes the specified TimeDetail message. Does not implicitly {@link model.TimeDetail.verify|verify} messages.
         * @function encode
         * @memberof model.TimeDetail
         * @static
         * @param {model.ITimeDetail} message TimeDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.day != null && message.hasOwnProperty("day"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.day);
            if (message.studid != null && message.hasOwnProperty("studid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.studid);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.arrivalTime);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.departTime);
            return writer;
        };

        /**
         * Encodes the specified TimeDetail message, length delimited. Does not implicitly {@link model.TimeDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.TimeDetail
         * @static
         * @param {model.ITimeDetail} message TimeDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimeDetail message from the specified reader or buffer.
         * @function decode
         * @memberof model.TimeDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.TimeDetail} TimeDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.TimeDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.day = reader.int32();
                    break;
                case 2:
                    message.studid = reader.int32();
                    break;
                case 3:
                    message.arrivalTime = reader.string();
                    break;
                case 4:
                    message.departTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("arrivalTime"))
                throw $util.ProtocolError("missing required 'arrivalTime'", { instance: message });
            if (!message.hasOwnProperty("departTime"))
                throw $util.ProtocolError("missing required 'departTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a TimeDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.TimeDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.TimeDetail} TimeDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimeDetail message.
         * @function verify
         * @memberof model.TimeDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimeDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.day != null && message.hasOwnProperty("day")) {
                properties.testTwoof = 1;
                if (!$util.isInteger(message.day))
                    return "day: integer expected";
            }
            if (message.studid != null && message.hasOwnProperty("studid")) {
                if (properties.testTwoof === 1)
                    return "testTwoof: multiple values";
                properties.testTwoof = 1;
                if (!$util.isInteger(message.studid))
                    return "studid: integer expected";
            }
            if (!$util.isString(message.arrivalTime))
                return "arrivalTime: string expected";
            if (!$util.isString(message.departTime))
                return "departTime: string expected";
            return null;
        };

        /**
         * Creates a TimeDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.TimeDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.TimeDetail} TimeDetail
         */
        TimeDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.model.TimeDetail)
                return object;
            var message = new $root.model.TimeDetail();
            if (object.day != null)
                message.day = object.day | 0;
            if (object.studid != null)
                message.studid = object.studid | 0;
            if (object.arrivalTime != null)
                message.arrivalTime = String(object.arrivalTime);
            if (object.departTime != null)
                message.departTime = String(object.departTime);
            return message;
        };

        /**
         * Creates a plain object from a TimeDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.TimeDetail
         * @static
         * @param {model.TimeDetail} message TimeDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimeDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.arrivalTime = "";
                object.departTime = "";
            }
            if (message.day != null && message.hasOwnProperty("day")) {
                object.day = message.day;
                if (options.oneofs)
                    object.testTwoof = "day";
            }
            if (message.studid != null && message.hasOwnProperty("studid")) {
                object.studid = message.studid;
                if (options.oneofs)
                    object.testTwoof = "studid";
            }
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                object.arrivalTime = message.arrivalTime;
            if (message.departTime != null && message.hasOwnProperty("departTime"))
                object.departTime = message.departTime;
            return object;
        };

        /**
         * Converts this TimeDetail to JSON.
         * @function toJSON
         * @memberof model.TimeDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimeDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimeDetail;
    })();

    model.HierarchicalDetailView = (function() {

        /**
         * Properties of a HierarchicalDetailView.
         * @memberof model
         * @interface IHierarchicalDetailView
         * @property {Array.<model.ITimeDetail>|null} [hierarchicalDV] HierarchicalDetailView hierarchicalDV
         */

        /**
         * Constructs a new HierarchicalDetailView.
         * @memberof model
         * @classdesc Represents a HierarchicalDetailView.
         * @implements IHierarchicalDetailView
         * @constructor
         * @param {model.IHierarchicalDetailView=} [properties] Properties to set
         */
        function HierarchicalDetailView(properties) {
            this.hierarchicalDV = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HierarchicalDetailView hierarchicalDV.
         * @member {Array.<model.ITimeDetail>} hierarchicalDV
         * @memberof model.HierarchicalDetailView
         * @instance
         */
        HierarchicalDetailView.prototype.hierarchicalDV = $util.emptyArray;

        /**
         * Creates a new HierarchicalDetailView instance using the specified properties.
         * @function create
         * @memberof model.HierarchicalDetailView
         * @static
         * @param {model.IHierarchicalDetailView=} [properties] Properties to set
         * @returns {model.HierarchicalDetailView} HierarchicalDetailView instance
         */
        HierarchicalDetailView.create = function create(properties) {
            return new HierarchicalDetailView(properties);
        };

        /**
         * Encodes the specified HierarchicalDetailView message. Does not implicitly {@link model.HierarchicalDetailView.verify|verify} messages.
         * @function encode
         * @memberof model.HierarchicalDetailView
         * @static
         * @param {model.IHierarchicalDetailView} message HierarchicalDetailView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HierarchicalDetailView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hierarchicalDV != null && message.hierarchicalDV.length)
                for (var i = 0; i < message.hierarchicalDV.length; ++i)
                    $root.model.TimeDetail.encode(message.hierarchicalDV[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HierarchicalDetailView message, length delimited. Does not implicitly {@link model.HierarchicalDetailView.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.HierarchicalDetailView
         * @static
         * @param {model.IHierarchicalDetailView} message HierarchicalDetailView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HierarchicalDetailView.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HierarchicalDetailView message from the specified reader or buffer.
         * @function decode
         * @memberof model.HierarchicalDetailView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.HierarchicalDetailView} HierarchicalDetailView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HierarchicalDetailView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.HierarchicalDetailView();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.hierarchicalDV && message.hierarchicalDV.length))
                        message.hierarchicalDV = [];
                    message.hierarchicalDV.push($root.model.TimeDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HierarchicalDetailView message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.HierarchicalDetailView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.HierarchicalDetailView} HierarchicalDetailView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HierarchicalDetailView.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HierarchicalDetailView message.
         * @function verify
         * @memberof model.HierarchicalDetailView
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HierarchicalDetailView.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hierarchicalDV != null && message.hasOwnProperty("hierarchicalDV")) {
                if (!Array.isArray(message.hierarchicalDV))
                    return "hierarchicalDV: array expected";
                for (var i = 0; i < message.hierarchicalDV.length; ++i) {
                    var error = $root.model.TimeDetail.verify(message.hierarchicalDV[i]);
                    if (error)
                        return "hierarchicalDV." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HierarchicalDetailView message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.HierarchicalDetailView
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.HierarchicalDetailView} HierarchicalDetailView
         */
        HierarchicalDetailView.fromObject = function fromObject(object) {
            if (object instanceof $root.model.HierarchicalDetailView)
                return object;
            var message = new $root.model.HierarchicalDetailView();
            if (object.hierarchicalDV) {
                if (!Array.isArray(object.hierarchicalDV))
                    throw TypeError(".model.HierarchicalDetailView.hierarchicalDV: array expected");
                message.hierarchicalDV = [];
                for (var i = 0; i < object.hierarchicalDV.length; ++i) {
                    if (typeof object.hierarchicalDV[i] !== "object")
                        throw TypeError(".model.HierarchicalDetailView.hierarchicalDV: object expected");
                    message.hierarchicalDV[i] = $root.model.TimeDetail.fromObject(object.hierarchicalDV[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HierarchicalDetailView message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.HierarchicalDetailView
         * @static
         * @param {model.HierarchicalDetailView} message HierarchicalDetailView
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HierarchicalDetailView.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.hierarchicalDV = [];
            if (message.hierarchicalDV && message.hierarchicalDV.length) {
                object.hierarchicalDV = [];
                for (var j = 0; j < message.hierarchicalDV.length; ++j)
                    object.hierarchicalDV[j] = $root.model.TimeDetail.toObject(message.hierarchicalDV[j], options);
            }
            return object;
        };

        /**
         * Converts this HierarchicalDetailView to JSON.
         * @function toJSON
         * @memberof model.HierarchicalDetailView
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HierarchicalDetailView.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HierarchicalDetailView;
    })();

    return model;
})();

module.exports = $root;
