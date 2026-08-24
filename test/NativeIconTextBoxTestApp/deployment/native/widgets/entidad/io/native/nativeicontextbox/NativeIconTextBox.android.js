import { Component } from 'react';
import { StyleSheet, View, Pressable, TextInput } from 'react-native';
import { Icon } from 'mendix/components/native/Icon';
import { jsx, jsxs } from 'react/jsx-runtime';

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

const DEFAULT_ICON_SIZE = 20;
//Slack for font metric rounding, so a single line never reads as grown.
const EXPAND_TOLERANCE = 4;
const defaultStyle = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CED0D3",
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12
  },
  //Merged over container once a multiline field has expanded, so the field can change shape
  //when the icons step aside. Empty by default, which leaves the shape unchanged.
  containerExpanded: {},
  input: {
    flex: 1,
    fontSize: 16,
    color: "#0A1325",
    paddingVertical: 12
  },
  leftIcon: {
    fontSize: DEFAULT_ICON_SIZE,
    color: "#6C717C",
    marginRight: 8
  },
  rightIcon: {
    fontSize: DEFAULT_ICON_SIZE,
    color: "#6C717C",
    marginLeft: 8
  },
  placeholderTextColor: {
    color: "#9DA1A8"
  }
};
class NativeIconTextBoxComponent extends Component {
  styles = distExports.mergeNativeStyles(defaultStyle, this.props.style);
  constructor(props) {
    super(props);
    //text holds what the user has typed since focusing, or null when they have not typed
    //yet. Only once it is set does it take over the display, which keeps a numeric
    //attribute from reformatting mid-edit: typing "1234" into a Decimal would otherwise
    //come back as "1,234" with the cursor thrown to the end.
    //expanded latches once the content grows past one line and only resets when the field
    //empties or loses focus. Recomputing it from the measured height each time would
    //oscillate: hiding the icons widens the input, the text may then fit on one line
    //again, the icons return, and it wraps once more.
    this.state = {
      editing: false,
      text: null,
      expanded: false,
      baseHeight: null
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onContentSizeChange = this.onContentSizeChange.bind(this);
  }
  //The first measurement is the height of a single line, so anything meaningfully taller
  //means the text has wrapped or a newline was entered.
  onContentSizeChange(event) {
    if (!this.props.multiline) return;
    const height = event && event.nativeEvent && event.nativeEvent.contentSize ? event.nativeEvent.contentSize.height : null;
    if (height == null) return;
    const base = this.state.baseHeight == null ? height : Math.min(this.state.baseHeight, height);
    const grown = height > base + EXPAND_TOLERANCE;
    if (base !== this.state.baseHeight || grown && !this.state.expanded) {
      this.setState({
        baseHeight: base,
        expanded: this.state.expanded || grown
      });
    }
  }
  componentDidMount() {
    //A remount - a data view refreshed by the send action, for example - starts collapsed
    //with no transition for componentDidUpdate to report. Publishing here clears a stale
    //true that would otherwise leave an outside control on screen.
    if (this.props.onExpandedChange) this.props.onExpandedChange(this.state.expanded);
  }
  componentDidUpdate(prevProps, prevState) {
    //Collapse when the model empties the value, which is what a send action does. Measured
    //against the attribute rather than what is on screen: the typed text is still held in
    //state at that moment, so the displayed value would not read as empty and the field
    //would stay expanded. Clearing text too lets the emptied attribute show through.
    if (this.state.expanded && (this.props.value == null || this.props.value === "")) {
      this.setState({
        expanded: false,
        text: null
      });
    }
    //Reported from here rather than from each setState, so every route into the state -
    //growing, emptying, blurring - publishes exactly once.
    if (prevState.expanded !== this.state.expanded && this.props.onExpandedChange) {
      this.props.onExpandedChange(this.state.expanded);
    }
  }
  //Which icons survive once the field has expanded.
  iconsHidden() {
    if (!this.props.multiline || !this.state.expanded) return {
      leading: false,
      trailing: false
    };
    const mode = this.props.expandedIcons;
    if (mode == "hideBoth") return {
      leading: true,
      trailing: true
    };
    if (mode == "hideLeading") return {
      leading: true,
      trailing: false
    };
    return {
      leading: false,
      trailing: false
    };
  }
  onFocus() {
    //Deliberately no snapshot of the current value. The field keeps rendering the
    //attribute until the user types, so an On enter action that changes or clears the
    //value is reflected. Capturing the value here would freeze whatever it was before
    //that action ran.
    this.setState({
      editing: true,
      text: null
    });
    if (this.props.onEnter) this.props.onEnter();
  }
  onBlur() {
    //Dropping back to displayValue lets the platform's formatting reappear.
    this.setState({
      editing: false,
      text: null,
      expanded: false
    });
    if (this.props.onLeave) this.props.onLeave();
  }
  onChangeText(text) {
    this.setState({
      text: text
    });
    if (this.props.onChangeText) this.props.onChangeText(text);
  }
  displayed() {
    if (this.state.editing && this.state.text != null) return this.state.text;
    return this.props.value != null ? this.props.value : "";
  }
  //fontSize doubles as the icon size. A fallback keeps the icon visible if a style class
  //supplies the key without one, rather than collapsing it to nothing.
  iconSize(style) {
    const size = style != null ? style.fontSize : undefined;
    return typeof size == "number" && size > 0 ? size : DEFAULT_ICON_SIZE;
  }
  //Spacing belongs on the wrapper, not on the glyph, so it is split off from the style.
  iconSpacing(style) {
    const flat = StyleSheet.flatten(style) || {};
    const {
      fontSize,
      color,
      ...rest
    } = flat;
    return rest;
  }
  renderIcon(icon, style, onClick) {
    if (icon == null) return null;
    const glyph = /*#__PURE__*/jsx(View, {
      style: this.iconSpacing(style),
      children: /*#__PURE__*/jsx(Icon, {
        icon: icon,
        size: this.iconSize(style),
        color: style != null ? style.color : undefined
      })
    });
    //Only tappable when an action is configured, so a decorative icon does not swallow
    //taps meant for the input.
    return onClick != null ? /*#__PURE__*/jsx(Pressable, {
      onPress: onClick,
      children: glyph
    }) : glyph;
  }
  //containerExpanded layers over container while the field is expanded, so a class can, for
  //example, flatten the rounded ends once the icons are out of the way and the text is
  //using the full width.
  containerStyle() {
    if (!this.props.multiline || !this.state.expanded) return this.styles.container;
    return [this.styles.container, this.styles.containerExpanded];
  }
  //Android centres multiline text vertically by default, which leaves the first line adrift
  //in a field that has room to grow. Anchoring to the top makes it fill downwards instead.
  inputStyle() {
    if (!this.props.multiline) return this.styles.input;
    return [this.styles.input, {
      textAlignVertical: "top"
    }];
  }
  render() {
    const hidden = this.iconsHidden();
    return /*#__PURE__*/jsxs(View, {
      style: this.containerStyle(),
      children: [hidden.leading ? null : this.renderIcon(this.props.leftIcon, this.styles.leftIcon, this.props.onLeftIconClick), /*#__PURE__*/jsx(TextInput, {
        style: this.inputStyle(),
        multiline: this.props.multiline,
        keyboardType: this.props.keyboardType || "default",
        value: this.displayed(),
        placeholder: this.props.placeholder,
        placeholderTextColor: this.styles.placeholderTextColor.color,
        editable: this.props.editable,
        onChangeText: this.onChangeText,
        onFocus: this.onFocus,
        onContentSizeChange: this.onContentSizeChange,
        onSubmitEditing: this.props.onSubmit,
        onBlur: this.onBlur,
        returnKeyType: this.props.returnKeyType || "done"
      }), hidden.trailing ? null : this.renderIcon(this.props.rightIcon, this.styles.rightIcon, this.props.onRightIconClick)]
    });
  }
}

const KEYBOARD_TYPES = {
  numberPad: "number-pad",
  decimalPad: "decimal-pad",
  emailAddress: "email-address",
  phonePad: "phone-pad",
  url: "url",
  default: "default"
};
//React Native accepts only five return key names on both platforms. Spanish names are
//accepted as aliases so an enumeration modelled in Spanish maps without a translation step.
const RETURN_KEYS = {
  done: "done",
  listo: "done",
  go: "go",
  ir: "go",
  next: "next",
  siguiente: "next",
  search: "search",
  buscar: "search",
  send: "send",
  enviar: "send"
};
const DEFAULT_RETURN_KEY = "done";
class NativeIconTextBox extends Component {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onExpandedChange = this.onExpandedChange.bind(this);
    this.onLeftIconClick = this.onLeftIconClick.bind(this);
    this.onRightIconClick = this.onRightIconClick.bind(this);
  }
  //An action only runs when it is configured, permitted, and not already running.
  execute(action) {
    if (!action) return;
    if (!action.canExecute || !action.isAuthorized) return;
    if (action.isExecuting && action.disabledDuringExecution) return;
    action.execute();
  }
  onChangeText(text) {
    const value = this.props.value;
    if (!value || value.status != "available" || value.readOnly) return;
    //setTextValue hands the raw text to the attribute's own formatter, so the platform
    //does the parsing and locale handling and raises a validation message when the text
    //does not parse. That is what lets a Decimal or Integer attribute be bound here.
    //The attribute is written before the action runs, so a nanoflow reads the new text.
    value.setTextValue(text);
    this.execute(this.props.onChangeAction);
  }
  onSubmit() {
    this.execute(this.props.onSubmitAction);
  }
  onFocus() {
    this.execute(this.props.onFocusAction);
  }
  //Published so the page can react - typically to swap in a send control once the widget
  //icons have stepped aside. Written only on a real change, so an unchanged value never
  //causes a needless round trip.
  onExpandedChange(expanded) {
    const attr = this.props.expandedAttr;
    if (!attr || attr.status != "available" || attr.readOnly) return;
    if (attr.value === expanded) return;
    attr.setValue(expanded);
  }
  onLeave() {
    this.execute(this.props.onLeaveAction);
  }
  onLeftIconClick() {
    this.execute(this.props.onLeftIconClick);
  }
  onRightIconClick() {
    this.execute(this.props.onRightIconClick);
  }
  //A DynamicValue only carries a value once it reports as available.
  resolve(dynamic) {
    return dynamic != null && dynamic.status == "available" ? dynamic.value : undefined;
  }
  //An Enum attribute arrives as its value name and a String as typed, so both are folded
  //to lower case before matching. Anything unrecognised falls back rather than being
  //handed to the input, which would leave the return key unlabelled. hasOwnProperty keeps
  //inherited names like "constructor" from matching.
  getReturnKeyType() {
    const value = this.resolve(this.props.returnKeyType);
    if (value == null) return DEFAULT_RETURN_KEY;
    const key = String(value).trim().toLowerCase();
    return Object.prototype.hasOwnProperty.call(RETURN_KEYS, key) ? RETURN_KEYS[key] : DEFAULT_RETURN_KEY;
  }
  //hasOwnProperty keeps inherited names like "constructor" from resolving to a function.
  getKeyboardType() {
    const key = this.props.keyboardType;
    return key != null && Object.prototype.hasOwnProperty.call(KEYBOARD_TYPES, key) ? KEYBOARD_TYPES[key] : "default";
  }
  render() {
    const value = this.props.value;
    return /*#__PURE__*/jsx(NativeIconTextBoxComponent, {
      value: value && value.status == "available" ? value.displayValue || "" : "",
      placeholder: this.resolve(this.props.placeholder),
      editable: !(value == null || value.readOnly),
      multiline: this.props.multiline === true,
      keyboardType: this.getKeyboardType(),
      returnKeyType: this.getReturnKeyType(),
      leftIcon: this.resolve(this.props.leftIcon),
      rightIcon: this.resolve(this.props.rightIcon),
      expandedIcons: this.props.expandedIcons || "keep",
      onExpandedChange: this.onExpandedChange,
      onChangeText: this.onChangeText,
      onSubmit: this.onSubmit,
      onLeave: this.onLeave,
      onEnter: this.onFocus,
      onLeftIconClick: this.props.onLeftIconClick ? this.onLeftIconClick : null,
      onRightIconClick: this.props.onRightIconClick ? this.onRightIconClick : null,
      style: this.props.style
    });
  }
}

export { NativeIconTextBox };
