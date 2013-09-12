/**
 * Renders an object as formatted HTML
 *
 * @param {Object} obj
 * @return {String} html
 * @api public
 */

function htmlStringify(obj, fromRecur) {

	var tag = (fromRecur) ? 'span' : 'div';
	var nextLevel = (fromRecur || 0) + 1;
	
	// strings
	if (typeof obj == 'string') {
		return '<' + tag + ' style="color: #0e4889; cursor: default;">"' + obj + '"</' + tag + '>';
	}
	// booleans, null and undefined
	else if (typeof obj == 'boolean' || obj === null || obj === undefined) {
		return '<' + tag + '><em style="color: #06624b; cursor: default;">' + obj + '</em></' + tag + '>';
	}
	// numbers
	else if (typeof obj == 'number') {
		return '<' + tag + ' style="color: #ca000a; cursor: default;">' + obj + '</' + tag + '>';
	}
	// dates
	else if (Object.prototype.toString.call(obj) == '[object Date]') {
		return '<' + tag + ' style="color: #009f7b; cursor: default;">' + obj + '</' + tag + '>';
	}
	// arrays
	else if (Array.isArray(obj)) {
		
		var rtn = '<' + tag + ' style="color: #666; cursor: default;">Array: [';
		
		if (!obj.length) {
			return rtn + ']</' + tag + '>';
		}
		
		rtn += '</' + tag + '><div style="padding-left: 20px;">';
		
		for (var i = 0; i < obj.length; i++) {
			rtn += '<span></span>' + htmlStringify(obj[i], nextLevel); // give the DOM structure has as many elements as an object, for collapse behaviour
			if (i < obj.length - 1) {
				rtn += ', <br>';
			}
		}
	
		return rtn + '</div><' + tag + ' style="color: #666">]</' + tag + '>';
		
	}
	// objects
	else if (obj && typeof obj == 'object') {
		
		var rtn = '',
			len = Object.keys(obj).length;
	
		if (fromRecur && !len) {
			return '<' + tag + ' style="color: #999; cursor: default;">Object: {}</' + tag + '>';
		}
		
		if (fromRecur) {
			rtn += '<' + tag + ' style="color: #0b89b6">Object: {</' + tag + '><div class="_stringify_recur _stringify_recur_level_' + fromRecur + '" style="padding-left: 20px;">';
		}
		
		for (var key in obj) {
			if (typeof obj[key] != 'function') {
				rtn += '<div><span style="padding-right: 5px; cursor: default;">' +key + ':</span>' + htmlStringify(obj[key], nextLevel) + '</div>';
			}
		}
		
		if (fromRecur) {
			rtn += '</div><' + tag + ' style="color: #0b89b6; cursor: default;">}</' + tag + '>';
		}
		
		return rtn;
		
	}

	return '';

}

exports = module.exports = htmlStringify;