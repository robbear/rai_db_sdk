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
import ActionResult from './ActionResult';

/**
 * The UpdateActionResult model module.
 * @module model/UpdateActionResult
 * @version 1.1.2
 */
class UpdateActionResult {
    /**
     * Constructs a new <code>UpdateActionResult</code>.
     * @alias module:model/UpdateActionResult
     * @extends module:model/ActionResult
     * @implements module:model/ActionResult
     * @param type {String} 
     */
    constructor(type) { 
        ActionResult.initialize(this, type);
        UpdateActionResult.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>UpdateActionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateActionResult} obj Optional instance to populate.
     * @return {module:model/UpdateActionResult} The populated <code>UpdateActionResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateActionResult();
            ActionResult.constructFromObject(data, obj);
            ActionResult.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement ActionResult interface:
/**
 * @member {String} type
 * @default ''
 */
ActionResult.prototype['type'] = '';




export default UpdateActionResult;
