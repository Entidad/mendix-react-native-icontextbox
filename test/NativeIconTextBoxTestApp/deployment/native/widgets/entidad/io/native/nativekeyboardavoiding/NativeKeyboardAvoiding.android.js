import { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { jsx } from 'react/jsx-runtime';

var dist = {};

var common$2 = {};

var hasRequiredCommon$2;

function requireCommon$2 () {
	if (hasRequiredCommon$2) return common$2;
	hasRequiredCommon$2 = 1;

	Object.defineProperty(common$2, "__esModule", {
	  value: true
	});
	common$2.ensure = ensure;
	common$2.partition = partition;
	function ensure(arg, label = "argument") {
	  if (arg === null || arg === undefined) {
	    throw new Error(`Did not expect ${label} to be ${arg}`);
	  }
	  return arg;
	}
	function partition(input, predicate) {
	  return [input.filter(predicate), input.filter(x => !predicate(x))];
	}
	return common$2;
}

var common$1 = {};

var hasRequiredCommon$1;

function requireCommon$1 () {
	if (hasRequiredCommon$1) return common$1;
	hasRequiredCommon$1 = 1;

	Object.defineProperty(common$1, "__esModule", {
	  value: true
	});
	common$1.mergeNativeStyles = mergeNativeStyles;
	common$1.extractStyles = extractStyles;
	function mergeNativeStyles(defaultStyle, overrideStyles) {
	  const styles = [defaultStyle, ...overrideStyles.filter(object => object !== undefined)];
	  return Object.keys(defaultStyle).reduce((flattened, currentKey) => {
	    const styleItems = styles.map(object => object[currentKey]);
	    return Object.assign(Object.assign({}, flattened), {
	      [currentKey]: flattenObjects(styleItems)
	    });
	  }, {});
	}
	function flattenObjects(objects) {
	  return objects.reduce((merged, object) => Object.assign(Object.assign({}, merged), object), {});
	}
	function extractStyles(source, extractionKeys) {
	  if (!source) {
	    return [{}, {}];
	  }
	  return Object.entries(source).reduce(([extracted, rest], [key, value]) => {
	    if (extractionKeys.includes(key)) {
	      extracted[key] = value;
	    } else {
	      rest[key] = value;
	    }
	    return [extracted, rest];
	  }, [{}, {}]);
	}
	return common$1;
}

var common = {};

var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;

	Object.defineProperty(common, "__esModule", {
	  value: true
	});
	common.parseInlineStyle = parseInlineStyle;
	function parseInlineStyle(style = "") {
	  try {
	    return style.split(";").reduce((styleObject, line) => {
	      const pair = line.split(":");
	      if (pair.length === 2) {
	        const name = pair[0].trim().replace(/(-.)/g, match => match[1].toUpperCase());
	        styleObject[name] = pair[1].trim();
	      }
	      return styleObject;
	    }, {});
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	  } catch (_) {
	    return {};
	  }
	}
	return common;
}

var typings = {};

var PageEditor = {};

var hasRequiredPageEditor;

function requirePageEditor () {
	if (hasRequiredPageEditor) return PageEditor;
	hasRequiredPageEditor = 1;

	Object.defineProperty(PageEditor, "__esModule", {
	  value: true
	});
	return PageEditor;
}

var hasRequiredTypings;

function requireTypings () {
	if (hasRequiredTypings) return typings;
	hasRequiredTypings = 1;
	(function (exports) {

		var __createBinding = typings && typings.__createBinding || (Object.create ? function (o, m, k, k2) {
		  if (k2 === undefined) k2 = k;
		  var desc = Object.getOwnPropertyDescriptor(m, k);
		  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		    desc = {
		      enumerable: true,
		      get: function () {
		        return m[k];
		      }
		    };
		  }
		  Object.defineProperty(o, k2, desc);
		} : function (o, m, k, k2) {
		  if (k2 === undefined) k2 = k;
		  o[k2] = m[k];
		});
		var __exportStar = typings && typings.__exportStar || function (m, exports) {
		  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		__exportStar(requirePageEditor(), exports); 
	} (typings));
	return typings;
}

var utils = {};

var PageEditorUtils = {};

var hasRequiredPageEditorUtils;

function requirePageEditorUtils () {
	if (hasRequiredPageEditorUtils) return PageEditorUtils;
	hasRequiredPageEditorUtils = 1;

	Object.defineProperty(PageEditorUtils, "__esModule", {
	  value: true
	});
	PageEditorUtils.hidePropertyIn = hidePropertyIn;
	PageEditorUtils.hidePropertiesIn = hidePropertiesIn;
	PageEditorUtils.hideNestedPropertiesIn = hideNestedPropertiesIn;
	PageEditorUtils.changePropertyIn = changePropertyIn;
	PageEditorUtils.transformGroupsIntoTabs = transformGroupsIntoTabs;
	PageEditorUtils.moveProperty = moveProperty;
	function hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKey) {
	  modifyProperty((_, index, container) => container.splice(index, 1), propertyGroups, key, nestedPropIndex, nestedPropKey);
	}
	function hidePropertiesIn(propertyGroups, _value, keys) {
	  keys.forEach(key => modifyProperty((_, index, container) => container.splice(index, 1), propertyGroups, key, undefined, undefined));
	}
	function hideNestedPropertiesIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKeys) {
	  nestedPropKeys.forEach(nestedKey => hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedKey));
	}
	function changePropertyIn(propertyGroups, _value, modify, key, nestedPropIndex, nestedPropKey) {
	  modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey);
	}
	function transformGroupsIntoTabs(properties) {
	  const groups = [];
	  properties.forEach(property => {
	    if (property.propertyGroups) {
	      groups.push(...property.propertyGroups);
	      property.propertyGroups = [];
	    }
	  });
	  properties.push(...groups);
	}
	function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
	  propertyGroups.forEach(propGroup => {
	    var _a;
	    if (propGroup.propertyGroups) {
	      modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
	    }
	    (_a = propGroup.properties) === null || _a === void 0 ? void 0 : _a.forEach((prop, index, array) => {
	      if (prop.key === key) {
	        if (nestedPropIndex === undefined || nestedPropKey === undefined) {
	          modify(prop, index, array);
	        } else if (prop.objects) {
	          modifyProperty(modify, prop.objects[nestedPropIndex].properties, nestedPropKey);
	        } else if (prop.properties) {
	          modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
	        }
	      }
	    });
	  });
	}
	function moveProperty(fromIndex, toIndex, properties) {
	  if (fromIndex >= 0 && toIndex >= 0 && fromIndex < properties.length && toIndex < properties.length && fromIndex !== toIndex) {
	    properties.splice(toIndex, 0, ...properties.splice(fromIndex, 1));
	  }
	}
	return PageEditorUtils;
}

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports) {

		var __createBinding = utils && utils.__createBinding || (Object.create ? function (o, m, k, k2) {
		  if (k2 === undefined) k2 = k;
		  var desc = Object.getOwnPropertyDescriptor(m, k);
		  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		    desc = {
		      enumerable: true,
		      get: function () {
		        return m[k];
		      }
		    };
		  }
		  Object.defineProperty(o, k2, desc);
		} : function (o, m, k, k2) {
		  if (k2 === undefined) k2 = k;
		  o[k2] = m[k];
		});
		var __exportStar = utils && utils.__exportStar || function (m, exports) {
		  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		__exportStar(requirePageEditorUtils(), exports); 
	} (utils));
	return utils;
}

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	(function (exports) {

		var __createBinding = dist && dist.__createBinding || (Object.create ? function (o, m, k, k2) {
		  if (k2 === undefined) k2 = k;
		  var desc = Object.getOwnPropertyDescriptor(m, k);
		  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		    desc = {
		      enumerable: true,
		      get: function () {
		        return m[k];
		      }
		    };
		  }
		  Object.defineProperty(o, k2, desc);
		} : function (o, m, k, k2) {
		  if (k2 === undefined) k2 = k;
		  o[k2] = m[k];
		});
		var __exportStar = dist && dist.__exportStar || function (m, exports) {
		  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		__exportStar(requireCommon$2(), exports);
		__exportStar(requireCommon$1(), exports);
		__exportStar(requireCommon(), exports);
		__exportStar(requireTypings(), exports);
		__exportStar(requireUtils(), exports); 
	} (dist));
	return dist;
}

var distExports = requireDist();

const defaultStyle = {
  //flex:1 so the widget fills the page and has room to give back to the keyboard. Without
  //it the wrapper collapses to the height of its content and nothing moves.
  container: {
    flex: 1
  }
};
class NativeKeyboardAvoiding extends Component {
  styles = distExports.mergeNativeStyles(defaultStyle, this.props.style);
  //Android resizes its own window for the keyboard, so adjusting here as well would move the
  //content twice. Passing no behavior leaves the wrapper inert on that platform.
  behavior() {
    return this.props.applyOnAndroid ? this.props.behavior || "padding" : undefined;
  }
  render() {
    return /*#__PURE__*/jsx(KeyboardAvoidingView, {
      style: this.styles.container,
      behavior: this.behavior(),
      keyboardVerticalOffset: this.props.offset || 0,
      children: this.props.content
    });
  }
}

export { NativeKeyboardAvoiding };
