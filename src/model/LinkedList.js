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

/**
 * The LinkedList model module.
 * @module model/LinkedList
 * @version 1.1.3
 */
class LinkedList {
    /**
     * Constructs a new <code>LinkedList</code>.
     * @alias module:model/LinkedList
     * @param type {String} 
     */
    constructor(type) { 
        
        LinkedList.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type || '';
    }

    /**
     * Constructs a <code>LinkedList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedList} obj Optional instance to populate.
     * @return {module:model/LinkedList} The populated <code>LinkedList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedList();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 * @default ''
 */
LinkedList.prototype['type'] = '';






export default LinkedList;

