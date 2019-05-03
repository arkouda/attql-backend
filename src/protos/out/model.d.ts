import * as $protobuf from "protobufjs";
/** Namespace model. */
export namespace model {

    /** Properties of an Attendance. */
    interface IAttendance {

        /** Attendance day */
        day?: (number|null);

        /** Attendance studid */
        studid?: (number|null);

        /** Attendance arrivalTime */
        arrivalTime?: (string|null);

        /** Attendance departTime */
        departTime?: (string|null);
    }

    /** Represents an Attendance. */
    class Attendance implements IAttendance {

        /**
         * Constructs a new Attendance.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IAttendance);

        /** Attendance day. */
        public day: number;

        /** Attendance studid. */
        public studid: number;

        /** Attendance arrivalTime. */
        public arrivalTime: string;

        /** Attendance departTime. */
        public departTime: string;

        /**
         * Creates a new Attendance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attendance instance
         */
        public static create(properties?: model.IAttendance): model.Attendance;

        /**
         * Encodes the specified Attendance message. Does not implicitly {@link model.Attendance.verify|verify} messages.
         * @param message Attendance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IAttendance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attendance message, length delimited. Does not implicitly {@link model.Attendance.verify|verify} messages.
         * @param message Attendance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IAttendance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attendance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attendance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.Attendance;

        /**
         * Decodes an Attendance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attendance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.Attendance;

        /**
         * Verifies an Attendance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Attendance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attendance
         */
        public static fromObject(object: { [k: string]: any }): model.Attendance;

        /**
         * Creates a plain object from an Attendance message. Also converts values to other types if specified.
         * @param message Attendance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.Attendance, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attendance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TabView. */
    interface ITabView {

        /** TabView tabV */
        tabV?: (model.IAttendance[]|null);
    }

    /** Represents a TabView. */
    class TabView implements ITabView {

        /**
         * Constructs a new TabView.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.ITabView);

        /** TabView tabV. */
        public tabV: model.IAttendance[];

        /**
         * Creates a new TabView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TabView instance
         */
        public static create(properties?: model.ITabView): model.TabView;

        /**
         * Encodes the specified TabView message. Does not implicitly {@link model.TabView.verify|verify} messages.
         * @param message TabView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.ITabView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TabView message, length delimited. Does not implicitly {@link model.TabView.verify|verify} messages.
         * @param message TabView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.ITabView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TabView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TabView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.TabView;

        /**
         * Decodes a TabView message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TabView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.TabView;

        /**
         * Verifies a TabView message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TabView message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TabView
         */
        public static fromObject(object: { [k: string]: any }): model.TabView;

        /**
         * Creates a plain object from a TabView message. Also converts values to other types if specified.
         * @param message TabView
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.TabView, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TabView to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupItems. */
    interface IGroupItems {

        /** GroupItems day */
        day?: (number|null);

        /** GroupItems arrivalTime */
        arrivalTime?: (string|null);

        /** GroupItems departTime */
        departTime?: (string|null);
    }

    /** Represents a GroupItems. */
    class GroupItems implements IGroupItems {

        /**
         * Constructs a new GroupItems.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IGroupItems);

        /** GroupItems day. */
        public day: number;

        /** GroupItems arrivalTime. */
        public arrivalTime: string;

        /** GroupItems departTime. */
        public departTime: string;

        /**
         * Creates a new GroupItems instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupItems instance
         */
        public static create(properties?: model.IGroupItems): model.GroupItems;

        /**
         * Encodes the specified GroupItems message. Does not implicitly {@link model.GroupItems.verify|verify} messages.
         * @param message GroupItems message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IGroupItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupItems message, length delimited. Does not implicitly {@link model.GroupItems.verify|verify} messages.
         * @param message GroupItems message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IGroupItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupItems message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.GroupItems;

        /**
         * Decodes a GroupItems message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.GroupItems;

        /**
         * Verifies a GroupItems message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupItems message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupItems
         */
        public static fromObject(object: { [k: string]: any }): model.GroupItems;

        /**
         * Creates a plain object from a GroupItems message. Also converts values to other types if specified.
         * @param message GroupItems
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.GroupItems, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupItems to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a xxx. */
    interface Ixxx {

        /** xxx groupid */
        groupid: string;

        /** xxx items */
        items?: (model.IGroupItems[]|null);
    }

    /** Represents a xxx. */
    class xxx implements Ixxx {

        /**
         * Constructs a new xxx.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.Ixxx);

        /** xxx groupid. */
        public groupid: string;

        /** xxx items. */
        public items: model.IGroupItems[];

        /**
         * Creates a new xxx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns xxx instance
         */
        public static create(properties?: model.Ixxx): model.xxx;

        /**
         * Encodes the specified xxx message. Does not implicitly {@link model.xxx.verify|verify} messages.
         * @param message xxx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.Ixxx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified xxx message, length delimited. Does not implicitly {@link model.xxx.verify|verify} messages.
         * @param message xxx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.Ixxx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a xxx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns xxx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.xxx;

        /**
         * Decodes a xxx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns xxx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.xxx;

        /**
         * Verifies a xxx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a xxx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns xxx
         */
        public static fromObject(object: { [k: string]: any }): model.xxx;

        /**
         * Creates a plain object from a xxx message. Also converts values to other types if specified.
         * @param message xxx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.xxx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this xxx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a yyy. */
    interface Iyyy {

        /** yyy id */
        id?: (string|null);

        /** yyy content */
        content?: (string|null);
    }

    /** Represents a yyy. */
    class yyy implements Iyyy {

        /**
         * Constructs a new yyy.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.Iyyy);

        /** yyy id. */
        public id: string;

        /** yyy content. */
        public content: string;

        /**
         * Creates a new yyy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yyy instance
         */
        public static create(properties?: model.Iyyy): model.yyy;

        /**
         * Encodes the specified yyy message. Does not implicitly {@link model.yyy.verify|verify} messages.
         * @param message yyy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.Iyyy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified yyy message, length delimited. Does not implicitly {@link model.yyy.verify|verify} messages.
         * @param message yyy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.Iyyy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a yyy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yyy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.yyy;

        /**
         * Decodes a yyy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yyy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.yyy;

        /**
         * Verifies a yyy message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a yyy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns yyy
         */
        public static fromObject(object: { [k: string]: any }): model.yyy;

        /**
         * Creates a plain object from a yyy message. Also converts values to other types if specified.
         * @param message yyy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.yyy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this yyy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimelineView. */
    interface ITimelineView {

        /** TimelineView items */
        items?: (model.Ixxx[]|null);

        /** TimelineView group */
        group?: (model.Iyyy[]|null);
    }

    /** Represents a TimelineView. */
    class TimelineView implements ITimelineView {

        /**
         * Constructs a new TimelineView.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.ITimelineView);

        /** TimelineView items. */
        public items: model.Ixxx[];

        /** TimelineView group. */
        public group: model.Iyyy[];

        /**
         * Creates a new TimelineView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimelineView instance
         */
        public static create(properties?: model.ITimelineView): model.TimelineView;

        /**
         * Encodes the specified TimelineView message. Does not implicitly {@link model.TimelineView.verify|verify} messages.
         * @param message TimelineView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.ITimelineView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimelineView message, length delimited. Does not implicitly {@link model.TimelineView.verify|verify} messages.
         * @param message TimelineView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.ITimelineView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimelineView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimelineView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.TimelineView;

        /**
         * Decodes a TimelineView message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimelineView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.TimelineView;

        /**
         * Verifies a TimelineView message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimelineView message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimelineView
         */
        public static fromObject(object: { [k: string]: any }): model.TimelineView;

        /**
         * Creates a plain object from a TimelineView message. Also converts values to other types if specified.
         * @param message TimelineView
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.TimelineView, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimelineView to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupCount. */
    interface IGroupCount {

        /** GroupCount day */
        day?: (number|null);

        /** GroupCount studid */
        studid?: (number|null);

        /** GroupCount count */
        count: string;
    }

    /** Represents a GroupCount. */
    class GroupCount implements IGroupCount {

        /**
         * Constructs a new GroupCount.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IGroupCount);

        /** GroupCount day. */
        public day: number;

        /** GroupCount studid. */
        public studid: number;

        /** GroupCount count. */
        public count: string;

        /** GroupCount testOneof. */
        public testOneof?: ("day"|"studid");

        /**
         * Creates a new GroupCount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupCount instance
         */
        public static create(properties?: model.IGroupCount): model.GroupCount;

        /**
         * Encodes the specified GroupCount message. Does not implicitly {@link model.GroupCount.verify|verify} messages.
         * @param message GroupCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IGroupCount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupCount message, length delimited. Does not implicitly {@link model.GroupCount.verify|verify} messages.
         * @param message GroupCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IGroupCount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupCount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.GroupCount;

        /**
         * Decodes a GroupCount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.GroupCount;

        /**
         * Verifies a GroupCount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupCount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupCount
         */
        public static fromObject(object: { [k: string]: any }): model.GroupCount;

        /**
         * Creates a plain object from a GroupCount message. Also converts values to other types if specified.
         * @param message GroupCount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.GroupCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupCount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HierarchicalView. */
    interface IHierarchicalView {

        /** HierarchicalView hierarchicalV */
        hierarchicalV?: (model.IGroupCount[]|null);
    }

    /** Represents a HierarchicalView. */
    class HierarchicalView implements IHierarchicalView {

        /**
         * Constructs a new HierarchicalView.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IHierarchicalView);

        /** HierarchicalView hierarchicalV. */
        public hierarchicalV: model.IGroupCount[];

        /**
         * Creates a new HierarchicalView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HierarchicalView instance
         */
        public static create(properties?: model.IHierarchicalView): model.HierarchicalView;

        /**
         * Encodes the specified HierarchicalView message. Does not implicitly {@link model.HierarchicalView.verify|verify} messages.
         * @param message HierarchicalView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IHierarchicalView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HierarchicalView message, length delimited. Does not implicitly {@link model.HierarchicalView.verify|verify} messages.
         * @param message HierarchicalView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IHierarchicalView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HierarchicalView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HierarchicalView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.HierarchicalView;

        /**
         * Decodes a HierarchicalView message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HierarchicalView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.HierarchicalView;

        /**
         * Verifies a HierarchicalView message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HierarchicalView message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HierarchicalView
         */
        public static fromObject(object: { [k: string]: any }): model.HierarchicalView;

        /**
         * Creates a plain object from a HierarchicalView message. Also converts values to other types if specified.
         * @param message HierarchicalView
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.HierarchicalView, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HierarchicalView to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimeDetail. */
    interface ITimeDetail {

        /** TimeDetail day */
        day?: (number|null);

        /** TimeDetail studid */
        studid?: (number|null);

        /** TimeDetail arrivalTime */
        arrivalTime: string;

        /** TimeDetail departTime */
        departTime: string;
    }

    /** Represents a TimeDetail. */
    class TimeDetail implements ITimeDetail {

        /**
         * Constructs a new TimeDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.ITimeDetail);

        /** TimeDetail day. */
        public day: number;

        /** TimeDetail studid. */
        public studid: number;

        /** TimeDetail arrivalTime. */
        public arrivalTime: string;

        /** TimeDetail departTime. */
        public departTime: string;

        /** TimeDetail testTwoof. */
        public testTwoof?: ("day"|"studid");

        /**
         * Creates a new TimeDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeDetail instance
         */
        public static create(properties?: model.ITimeDetail): model.TimeDetail;

        /**
         * Encodes the specified TimeDetail message. Does not implicitly {@link model.TimeDetail.verify|verify} messages.
         * @param message TimeDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.ITimeDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeDetail message, length delimited. Does not implicitly {@link model.TimeDetail.verify|verify} messages.
         * @param message TimeDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.ITimeDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.TimeDetail;

        /**
         * Decodes a TimeDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.TimeDetail;

        /**
         * Verifies a TimeDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeDetail
         */
        public static fromObject(object: { [k: string]: any }): model.TimeDetail;

        /**
         * Creates a plain object from a TimeDetail message. Also converts values to other types if specified.
         * @param message TimeDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.TimeDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HierarchicalDetailView. */
    interface IHierarchicalDetailView {

        /** HierarchicalDetailView hierarchicalDV */
        hierarchicalDV?: (model.ITimeDetail[]|null);
    }

    /** Represents a HierarchicalDetailView. */
    class HierarchicalDetailView implements IHierarchicalDetailView {

        /**
         * Constructs a new HierarchicalDetailView.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IHierarchicalDetailView);

        /** HierarchicalDetailView hierarchicalDV. */
        public hierarchicalDV: model.ITimeDetail[];

        /**
         * Creates a new HierarchicalDetailView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HierarchicalDetailView instance
         */
        public static create(properties?: model.IHierarchicalDetailView): model.HierarchicalDetailView;

        /**
         * Encodes the specified HierarchicalDetailView message. Does not implicitly {@link model.HierarchicalDetailView.verify|verify} messages.
         * @param message HierarchicalDetailView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IHierarchicalDetailView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HierarchicalDetailView message, length delimited. Does not implicitly {@link model.HierarchicalDetailView.verify|verify} messages.
         * @param message HierarchicalDetailView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IHierarchicalDetailView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HierarchicalDetailView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HierarchicalDetailView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.HierarchicalDetailView;

        /**
         * Decodes a HierarchicalDetailView message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HierarchicalDetailView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.HierarchicalDetailView;

        /**
         * Verifies a HierarchicalDetailView message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HierarchicalDetailView message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HierarchicalDetailView
         */
        public static fromObject(object: { [k: string]: any }): model.HierarchicalDetailView;

        /**
         * Creates a plain object from a HierarchicalDetailView message. Also converts values to other types if specified.
         * @param message HierarchicalDetailView
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.HierarchicalDetailView, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HierarchicalDetailView to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
