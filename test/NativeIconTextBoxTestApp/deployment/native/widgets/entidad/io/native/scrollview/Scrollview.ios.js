import { Component } from 'react';
import { ScrollView } from 'react-native';
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
  container: {},
  label: {
    color: "#F6BB42"
  }
};
class ScrollViewComponent extends Component {
  styles = distExports.mergeNativeStyles(defaultStyle, this.props.style);
  constructor(props) {
    super(props);
    this.cnam = "ScrollViewComponent";
    this.log("constructor:begin");
    this.scrollViewRef = null;
    this.busyScrolling = false;
    this.position = null; //"top";
    this.log("constructor:end");
    this.contentHeight = null;
    this.layoutHeight = null;
  }
  log(v) {
    if (!this.props.debugon) return;
    console.info(`${this.cnam}:${v}`);
  }
  //Shared by the content-change and layout-change paths. Guarded so a scroll already in
  //flight is not interrupted, and released after the same delay used elsewhere.
  autoScrollToEnd() {
    if (this.busyScrolling) return;
    this.busyScrolling = true;
    setTimeout(() => {
      try {
        if (this.scrollViewRef) this.scrollViewRef.scrollToEnd({
          animated: true
        });
      } catch (e) {
        this.log("autoScrollToEnd:error:" + e.toString());
      }
      setTimeout(() => {
        this.busyScrolling = false;
      }, this.props.scrollTimeout);
    }, this.props.scrollTimeout);
  }
  componentDidMount() {
    this.log("componentDidMount:begin");
    if (this.props.autoScroll && !this.busyScrolling) {
      this.busyScrolling = true;
      try {
        this.scrollViewRef.scrollToEnd({
          animated: true
        });
        this.busyScrolling = false;
      } catch (e) {
        this.busyScrolling = false;
      }
    }
    this.log("componentDidMount:end");
  }
  //https://stackoverflow.com/questions/41056761/detect-scrollview-has-reached-the-end
  atTop({
    layoutMeasurement,
    contentOffset,
    contentSize
  }) {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - this.props.scrollRegionThreshold;
  }
  //https://stackoverflow.com/questions/41056761/detect-scrollview-has-reached-the-end
  atBottom({
    layoutMeasurement,
    contentOffset,
    contentSize
  }) {
    //return contentOffset.y==0;
    return contentOffset.y <= this.props.scrollRegionThreshold;
  }
  render() {
    this.log("render:begin");
    this.log("render:end");
    return /*#__PURE__*/jsx(ScrollView, {
      ref: scroll => {
        this.scrollViewRef = scroll;
      },
      style: this.styles.container,
      onLayout: ({
        nativeEvent
      }) => {
        this.log("onLayout:begin");
        const layoutHeight = nativeEvent.layout.height;
        const previousHeight = this.layoutHeight;
        //Tracked on every layout, not just the first. A stale height would leave
        //the widget believing the viewport is still full size once the keyboard
        //has taken part of it.
        this.layoutHeight = layoutHeight;
        //A shrinking viewport - the keyboard opening, a rotation, split screen -
        //leaves the content where it was, so the newest rows slide out of sight.
        //Scrolling back to the end keeps them visible, exactly as arriving
        //content already does.
        if (previousHeight != null && layoutHeight < previousHeight && this.props.autoScroll) {
          this.log("onLayout:viewport shrank from " + previousHeight + " to " + layoutHeight);
          this.autoScrollToEnd();
        }
        setTimeout(() => {
          if (this.contentHeight != null && this.layoutHeight != null && this.contentHeight < this.layoutHeight) {
            this.props.onScrollTop();
            this.props.onScrollBottom();
          }
        }, this.props.scrollTimeout);
        this.log("onLayout:layoutHeight:" + layoutHeight);
        this.log("onLayout:end");
      },
      onScroll: ({
        nativeEvent
      }) => {
        this.log("onScroll:begin");
        try {
          if (this.position !== "top" && this.atTop(nativeEvent)) {
            this.position = "top";
            try {
              this.props.onScrollBottom();
            } catch (e) {
              console.error(e.toString());
            }
          }
          //}else if(this.position!="bottom"&&this.atBottom(nativeEvent)){
          if (this.position !== "bottom" && this.atBottom(nativeEvent)) {
            this.position = "bottom";
            try {
              this.props.onScrollTop();
            } catch (e) {
              console.error(e.toString());
            }
          }
        } catch (e) {
          console.error(e.toString());
        }
        this.log("onScroll:end");
      },
      onContentSizeChange: (contentWidth, contentHeight) => {
        this.log("onContentSizeChange:begin");
        this.log("onContentSizeChange:contentWidth:" + contentWidth);
        this.log("onContentSizeChange:contentHeight:" + contentHeight);
        //todo: timeout
        /*if(this.contentHeight==null)*/
        this.contentHeight = contentHeight;

        //scrollTo
        //return contentOffset.y<=this.props.scrollRegionThreshold;
        //this.log(JSON.stringify(Object.keys(this.scrollViewRef)));//=scroll;
        //["_nativeTag","_children","viewConfig","getScrollResponder","getScrollableNode","getInnerViewNode","getInnerViewRef","getNativeScrollRef","scrollTo","scrollToEnd","flashScrollIndicators","scrollResponderZoomTo","scrollResponderScrollNativeHandleToKeyboard"]
        if (this.props.autoScroll) {
          setTimeout(() => {
            if (!this.busyScrolling) {
              this.busyScrolling = true;
              try {
                this.scrollViewRef.scrollToEnd({
                  animated: true
                });
                //0.0.5
                setTimeout(() => {
                  this.busyScrolling = false;
                }, this.props.scrollTimeout);
              } catch (e) {
                console.error(e.toString());
                //0.0.5
                setTimeout(() => {
                  this.busyScrolling = false;
                }, this.props.scrollTimeout);
              }
              //0.0.5
              try {
                this.props.onAutoScroll();
              } catch (e) {
                console.error(e.toString());
              }
            }
          }, this.props.scrollTimeout);
        }
        this.log("onContentSizeChange:end");
      },
      children: this.props.basicContent
    });
  }
}

class Scrollview extends Component {
  constructor(props) {
    super(props);
    this.cnam = "Scrollview";
    this.log("constructor:begin");
    this.onAutoScroll = this.onAutoScroll.bind(this);
    this.onScrollBottom = this.onScrollBottom.bind(this);
    this.onScrollTop = this.onScrollTop.bind(this);
    this.log("constructor:end");
  }
  log(v) {
    if (!this.props.debugon) return;
    console.info(`${this.cnam}:${v}`);
  }
  componentDidMount() {
    this.log("componentDidMount:beg");
    this.log("componentDidMount:end");
  }
  componentDidUpdate(prvprops, prvstate) {
    this.log("componentDidUpdate:beg");
    this.log("componentDidUpdate:end");
  }
  onAutoScroll() {
    this.log("onAutoScroll:beg");
    if (this.props.onAutoScroll) {
      if (this.props.onAutoScroll.canExecute && this.props.onAutoScroll.isAuthorized && !(this.props.onAutoScroll.isExecuting && this.props.onAutoScroll.disabledDuringExecution)) {
        this.props.onAutoScroll.execute();
      }
    }
    this.log("onAutoScroll:end");
  }
  onScrollBottom() {
    this.log("onScrollBottom:beg");
    if (this.props.onScrollBottom) {
      if (this.props.onScrollBottom.canExecute && this.props.onScrollBottom.isAuthorized && !(this.props.onScrollBottom.isExecuting && this.props.onScrollBottom.disabledDuringExecution)) {
        this.props.onScrollBottom.execute();
      }
    }
    this.log("onScrollBottom:end");
  }
  onScrollTop() {
    this.log("onScrollTop:beg");
    if (this.props.onScrollTop) {
      if (this.props.onScrollTop.canExecute && this.props.onScrollTop.isAuthorized && !(this.props.onScrollTop.isExecuting && this.props.onScrollTop.disabledDuringExecution)) {
        this.props.onScrollTop.execute();
      }
    }
    this.log("onScrollTop:end");
  }
  render() {
    this.log("render:beg");
    this.log("render:end");
    return /*#__PURE__*/jsx(ScrollViewComponent, {
      style: this.props.style,
      basicContent: this.props.basicContent,
      scrollTimeout: this.props.scrollTimeout,
      autoScroll: this.props.autoScroll,
      onAutoScroll: this.onAutoScroll,
      onScrollBottom: this.onScrollBottom,
      onScrollTop: this.onScrollTop,
      scrollRegionThreshold: this.props.scrollRegionThreshold,
      debugon: this.props.debugon
    });
  }
}

export { Scrollview };
