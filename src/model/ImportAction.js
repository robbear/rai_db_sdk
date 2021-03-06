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
import Action from './Action';
import Relation from './Relation';

/**
 * The ImportAction model module.
 * @module model/ImportAction
 * @version 1.1.3
 */
class ImportAction {
    /**
     * Constructs a new <code>ImportAction</code>.
     * @alias module:model/ImportAction
     * @extends module:model/Action
     * @implements module:model/Action
     * @param type {String} 
     */
    constructor(type) { 
        Action.initialize(this, type);
        ImportAction.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>ImportAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportAction} obj Optional instance to populate.
     * @return {module:model/ImportAction} The populated <code>ImportAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportAction();
            Action.constructFromObject(data, obj);
            Action.constructFromObject(data, obj);

            if (data.hasOwnProperty('inputs')) {
                obj['inputs'] = ApiClient.convertToType(data['inputs'], [Relation]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Relation>} inputs
 */
ImportAction.prototype['inputs'] = undefined;


// Implement Action interface:
/**
 * @member {String} type
 * @default ''
 */
Action.prototype['type'] = '';




export default ImportAction;

