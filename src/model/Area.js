/**
 * Delve Client SDK
 * This is a Client SDK for Delve API
 *
 * The version of the OpenAPI document: 1.1.2
 * Contact: support@relational.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Point from './Point';

/**
 * The Area model module.
 * @module model/Area
 * @version 1.1.2
 */
class Area {
    /**
     * Constructs a new <code>Area</code>.
     * @alias module:model/Area
     * @param endPoint {module:model/Point} 
     * @param startPoint {module:model/Point} 
     * @param type {module:model/Area.TypeEnum} 
     */
    constructor(endPoint, startPoint, type) { 
        
        Area.initialize(this, endPoint, startPoint, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, endPoint, startPoint, type) { 
        obj['end_point'] = endPoint;
        obj['start_point'] = startPoint;
        obj['type'] = type || 'Area';
    }

    /**
     * Constructs a <code>Area</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Area} obj Optional instance to populate.
     * @return {module:model/Area} The populated <code>Area</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Area();

            if (data.hasOwnProperty('end_point')) {
                obj['end_point'] = Point.constructFromObject(data['end_point']);
            }
            if (data.hasOwnProperty('start_point')) {
                obj['start_point'] = Point.constructFromObject(data['start_point']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Point} end_point
 */
Area.prototype['end_point'] = undefined;

/**
 * @member {module:model/Point} start_point
 */
Area.prototype['start_point'] = undefined;

/**
 * @member {module:model/Area.TypeEnum} type
 * @default 'Area'
 */
Area.prototype['type'] = 'Area';





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Area['TypeEnum'] = {

    /**
     * value: "Area"
     * @const
     */
    "Area": "Area"
};



export default Area;
