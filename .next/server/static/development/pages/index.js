module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ChoosePersona.js":
/*!*************************************!*\
  !*** ./components/ChoosePersona.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // number of random personas to pick from the people collection prop.
// It then uses .map() to create an array of <span> elements for each randomly picked persona and returns the array.

const ChoosePersona = props => {
  const {
    people = [],
    count = 3,
    onSelected = f => f
  } = props;
  const nameBadgeStyles = {
    fontSize: '0.8rem',
    height: 40,
    borderRadius: 20,
    cursor: 'pointer'
  };

  const choosePersona = id => evt => onSelected(id);

  const randomPeople = count => people => {
    const selected = [];
    let i = 0;
    count = Math.max(0, Math.min(count, people.length));

    while (i < count) {
      const index = Math.floor(Math.random() * people.length);
      if (selected.includes(index)) continue;
      ++i && selected.push(index);
    }

    return selected.map(index => {
      const {
        id,
        name
      } = people[index];
      const className = 'd-flex align-items-center text-center text-white bg-secondary font-weight-bold py-2 px-4 mx-1 my-2';
      return __jsx("span", {
        key: index,
        className: className,
        style: nameBadgeStyles,
        title: name,
        onClick: choosePersona(id)
      }, name);
    });
  };

  return __jsx("div", {
    className: "w-100 h-100 px-3 pb-5 d-flex flex-wrap align-items-center align-content-center justify-content-center"
  }, __jsx("span", {
    className: "h3 text-dark text-center py-3 w-100 font-weight-bold"
  }, "Choose your Persona"), randomPeople(count)(people));
};

/* harmony default export */ __webpack_exports__["default"] = (ChoosePersona);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//We are simply using the next/head component to add meta information to the <head> of our pages. 
// We have also added a link to the Bootstrap CDN file to add some default styling to our app.
// We are also setting the page title dynamically from props and rendering the page contents using {props.children}.



const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  charSet: "utf-8"
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
  integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
  crossOrigin: "anonymous"
}), __jsx("title", null, props.pageTitle || 'Realtime Geofencing')), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapContainer */ "./components/MapContainer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const API_KEY = "AIzaSyAgzVff0WKF6C_mLqGQWF209f9MLvN_iDA";
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry`;

class Map extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const containerStyles = {
      height: '100%',
      width: '100%',
      position: 'relative'
    }; // Form the MAP_URL using the API_KEY of the GoogleMaps app we created earlier for our application. 
    // We also render the MapContainer passing in the MAP_URL.
    // The MapContainer component contains the map and other visual elements such as markers and shape regions

    return __jsx(_MapContainer__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      googleMapURL: MAP_URL,
      loadingElement: __jsx("div", {
        style: containerStyles
      }),
      containerElement: __jsx("div", {
        style: containerStyles
      }),
      mapElement: __jsx("div", {
        style: containerStyles
      })
    }, this.props));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/MapContainer.js":
/*!************************************!*\
  !*** ./components/MapContainer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _UserMarker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserMarker */ "./components/UserMarker.js");
/* harmony import */ var _PersonMarker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PersonMarker */ "./components/PersonMarker.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







class MapContainer extends react__WEBPACK_IMPORTED_MODULE_9__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "withinRegion", (position, radius) => {
      const to = new google.maps.LatLng(position.lat, position.lng);
      const distance = google.maps.geometry.spherical.computeDistanceBetween;
      return point => {
        const from = new google.maps.LatLng(point.lat, point.lng);
        return distance(from, to) <= radius;
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "analyzeRegion", (position, radius) => people => {
      const {
        onRegionFiltered = f => f
      } = this.props;
      const withinRegion = this.withinRegion(position, radius);
      const mappedPeople = people.map(person => {
        const {
          position
        } = person || {};
        const within = withinRegion(position);
        return _objectSpread({}, person, {
          within
        });
      });
      onRegionFiltered(mappedPeople);
    });
  }

  componentDidMount() {
    const {
      person: {
        id,
        position
      },
      radius,
      people = [],
      channel = null
    } = this.props;
    const mapContext = this.map.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
    const setMapCenter = mapContext.setCenter.bind(mapContext);
    let {
      lat,
      lng
    } = position;
    channel && channel.bind('transit', ({
      person = {},
      people
    }) => {
      const {
        id: $id,
        position: $position
      } = person;
      const isUser = id === $id;
      const center = isUser ? $position : position;
      isUser && setMapCenter(center);
      this.analyzeRegion(center, radius)(people);
    });
    this.positionUpdate = setInterval(() => {
      lat = lat + Math.random() * 0.001;
      lng = lng + Math.random() * 0.001;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(`/transit/${id}`, {
        lat,
        lng
      });
    }, 10000);
    this.analyzeRegion(position, radius)(people);
  }

  componentWillUnmount() {
    clearInterval(this.positionUpdate);
  } // Here we render the GoogleMap component passing the position of the current user as the center prop. 
  // We loop through the people collection received by the MapComponent and render different types of makers based on the person.


  render() {
    const {
      person: {
        id,
        position
      },
      radius,
      people,
      channel
    } = this.props; // ref will give us access to the underlying google.maps.Map instance, which we will need later to update the map properties.
    // We use UserMarker for the currently active user and the PersonMarker for other people.
    // We also pass the radius, person and channel props to the marker components. 
    // The channel prop contains a reference to the current Pusher channel subscription.
    // For the PersonMarker component, we pass in the currently active user to the user prop.
    // We also pass in an inverted version of the withinRegion() method to the withinRegion prop.

    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMap"], {
      ref: elem => this.map = elem,
      zoom: 15,
      center: position
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, people.map((person, index) => {
      const props = {
        key: index,
        radius,
        person,
        channel
      };

      const withinRegion = point => (position, radius) => this.withinRegion(position, radius)(point);

      return person.id === id ? __jsx(_UserMarker__WEBPACK_IMPORTED_MODULE_11__["default"], props) : __jsx(_PersonMarker__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
        user: this.props.person,
        withinRegion: withinRegion
      }, props));
    })));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["withGoogleMap"])(MapContainer)));

/***/ }),

/***/ "./components/NearbyFriends.js":
/*!*************************************!*\
  !*** ./components/NearbyFriends.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const BLACK_MARKER = 'https://i.imgur.com/8dOrls4.png?2';
const GREEN_MARKER = 'https://i.imgur.com/9v6uW8U.png';

class NearbyFriends extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      people: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "updatePeople", people => this.setState({
      people
    }));
  }

  render() {
    const {
      people
    } = this.state;
    const {
      person: {
        name,
        id
      }
    } = this.props;
    const nameBadgeStyles = {
      fontSize: '0.8rem',
      height: 40,
      borderRadius: 20,
      cursor: 'pointer'
    };

    const showPeople = (filterFn, marker) => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, people.filter(filterFn).map((person, index) => {
        if (person.id === id) return null;
        return __jsx("div", {
          key: index,
          className: "d-flex border-bottom border-gray w-100 px-4 py-3 font-weight-bold text-secondary align-items-center"
        }, __jsx("div", {
          className: "pl-2",
          style: {
            width: 30,
            height: 30
          }
        }, __jsx("img", {
          src: marker,
          className: "img-fluid",
          alt: "marker"
        })), __jsx("span", {
          className: "pl-3"
        }, person.name));
      }));
    };

    return id && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
      className: "border-bottom border-gray w-100 px-2 d-flex align-items-center bg-white justify-content-between",
      style: {
        height: 90
      }
    }, __jsx("span", {
      className: "h4 text-dark mb-0 mx-4 font-weight-bold"
    }, "Nearby Friends"), __jsx("span", {
      className: "d-flex align-items-center text-center text-white bg-primary font-weight-bold py-2 px-4 mx-4",
      style: nameBadgeStyles,
      title: name
    }, name)), __jsx("div", {
      className: "w-100 d-flex flex-wrap align-items-start align-content-start position-relative",
      style: {
        height: 'calc(100% - 90px)',
        overflowY: 'auto'
      }
    }, showPeople(person => person.within, GREEN_MARKER), showPeople(person => !person.within, BLACK_MARKER)));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (NearbyFriends);

/***/ }),

/***/ "./components/PersonMarker.js":
/*!************************************!*\
  !*** ./components/PersonMarker.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BLACK_MARKER = 'https://i.imgur.com/8dOrls4.png?2';
const GREEN_MARKER = 'https://i.imgur.com/9v6uW8U.png'; // The PersonMarker component stores the position of the person in the position property of the component’s state 
// and the position of the current active user in the userPosition property of the state.

class PersonMarker extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    const {
      user: {
        id: userID,
        position: userPosition
      },
      person: {
        id = null,
        position = null
      },
      channel = null
    } = this.props;
    this.id = id;
    this.userID = userID;
    this.channel = channel;
    this.state = {
      position,
      userPosition
    };
  } // we bind to the transit event on the Pusher channel, and update the state with the new position of the person or currently active user. 
  // We update the state’s position when the person’s position changes, and the userPosition when the currently active user’s position changes.


  componentDidMount() {
    this.channel && this.channel.bind('transit', ({
      person = {}
    }) => {
      const {
        id,
        position
      } = person;
      id === this.id && this.setState({
        position
      });
      id === this.userID && this.setState({
        userPosition: position
      });
    });
  } // withinRegion() method received as prop to check if the person is within the defined circular region of the currently active user. 
  // We then conditionally render a green marker icon if the person is within the region, otherwise, we render a black icon.


  render() {
    const {
      position,
      userPosition
    } = this.state;
    const {
      person: {
        name
      },
      radius,
      withinRegion = f => f
    } = this.props;
    const within = !!withinRegion(position)(userPosition, radius);
    const MARKER_SIZE = new google.maps.Size(25, 35);
    const MARKER_ICON = within ? GREEN_MARKER : BLACK_MARKER;
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      position: position,
      title: name,
      options: {
        icon: {
          url: MARKER_ICON,
          scaledSize: MARKER_SIZE
        }
      }
    });
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (PersonMarker);

/***/ }),

/***/ "./components/UserMarker.js":
/*!**********************************!*\
  !*** ./components/UserMarker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // The UserMarker component stores the position of the current active user in the position property of the component’s state.

class UserMarker extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    const {
      person: {
        id = null,
        position = null
      },
      channel = null
    } = this.props;
    this.id = id;
    this.channel = channel;
    this.state = {
      position
    };
  } // we bind to the transit event on the Pusher channel, and update the state with the new position of the user. 
  // We only update the state when the current user’s position changes.


  componentDidMount() {
    this.channel && this.channel.bind('transit', ({
      person = {}
    }) => {
      const {
        id,
        position
      } = person;
      id === this.id && this.setState({
        position
      });
    });
  } // we render a red marker icon for the currently active user by setting the MARKER_ICON constant as the marker icon URL.
  // We also render a Circle region using the user’s current position as center and the radius received as prop.


  render() {
    const {
      radius
    } = this.props;
    const {
      position
    } = this.state;
    const regionOptions = {
      fillOpacity: 0.1,
      strokeWidth: 1,
      strokeOpacity: 0.2
    };
    const MARKER_SIZE = new google.maps.Size(50, 70);
    const MARKER_ICON = 'https://i.imgur.com/Rhv5xQh.png';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      position: position,
      title: "You",
      options: {
        icon: {
          url: MARKER_ICON,
          scaledSize: MARKER_SIZE
        }
      }
    }), __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Circle"], {
      center: position,
      radius: radius,
      options: regionOptions
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (UserMarker);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ChoosePersona__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ChoosePersona */ "./components/ChoosePersona.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _components_NearbyFriends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NearbyFriends */ "./components/NearbyFriends.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class IndexPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      id: null,
      people: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "endConnection", () => {
      this.pusher.disconnect();
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/offline/${this.state.id}`);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "personaSelected", id => {
      this.setState({
        id
      });
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/online/${id}`);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "regionFiltered", people => this.nearby.updatePeople(people));
  }

  // This happens before mounting occurs and called before render
  componentWillMount() {
    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_3___default.a("2aa2d66cb1c2a891216b", {
      cluster: "us2",
      encrypted: true
    });
    this.channel = this.pusher.subscribe('map-geofencing');
  } // fetch the people collection from the server by making a GET HTTP request using axios to the /people endpoint.
  // We then update the state with the people collection gotten from the response.


  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/people').then(({
      data
    }) => {
      const {
        people = []
      } = data;
      this.setState({
        people
      });
    });
    window.onbeforeunload = this.endConnection;
  }

  componentWillUnmount() {
    this.endConnection();
  }

  render() {
    const {
      id,
      people
    } = this.state;
    const person = people.find(person => person.id === id) || {};
    const peopleOffline = people.filter(person => !person.online);
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      pageTitle: "Realtime Geofencing"
    }, __jsx("main", {
      className: "container-fluid position-absolute h-100 bg-light"
    }, id ? __jsx("div", {
      className: "row position-absolute w-100 h-100"
    }, __jsx("section", {
      className: "col-md-9 px-0 border-right border-gray position-relative h-100"
    }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_6__["default"], {
      person: person,
      radius: 1000,
      people: people,
      channel: this.channel,
      onRegionFiltered: this.regionFiltered
    })), __jsx("section", {
      className: "col-md-3 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0"
    }, __jsx(_components_NearbyFriends__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ref: elem => this.nearby = elem,
      person: person
    }))) : __jsx(_components_ChoosePersona__WEBPACK_IMPORTED_MODULE_5__["default"], {
      count: 5,
      people: peopleOffline,
      onSelected: this.personaSelected
    })));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(IndexPage, null));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fatimaaltaf/lighthouse/google_api/realtime-geofencing-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map