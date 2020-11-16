/**
 * Delve Client SDK
 * This is a Client SDK for Delve API
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: support@relational.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AnyType from './AnyType';
import FrontProblem from './FrontProblem';
import Range from './Range';

/**
 * The ArityMismatchError model module.
 * @module model/ArityMismatchError
 * @version 1.1.3
 */
class ArityMismatchError {
    /**
     * Constructs a new <code>ArityMismatchError</code>.
     * @alias module:model/ArityMismatchError
     * @extends module:model/FrontProblem
     * @implements module:model/FrontProblem
     * @param type {String} 
     */
    constructor(type) { 
        FrontProblem.initialize(this, type);
        ArityMismatchError.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['msg'] = msg || '';
        obj['range'] = range;
    }

    /**
     * Constructs a <code>ArityMismatchError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArityMismatchError} obj Optional instance to populate.
     * @return {module:model/ArityMismatchError} The populated <code>ArityMismatchError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArityMismatchError();
            FrontProblem.constructFromObject(data, obj);
            FrontProblem.constructFromObject(data, obj);

            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('node')) {
                obj['node'] = ApiClient.convertToType(data['node'], AnyType);
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = Range.constructFromObject(data['range']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} msg
 * @default ''
 */
ArityMismatchError.prototype['msg'] = '';

/**
 * @member {module:model/AnyType} node
 */
ArityMismatchError.prototype['node'] = undefined;

/**
 * @member {module:model/Range} range
 */
ArityMismatchError.prototype['range'] = undefined;


// Implement FrontProblem interface:
/**
 * @member {String} type
 * @default ''
 */
FrontProblem.prototype['type'] = '';




export default ArityMismatchError;

