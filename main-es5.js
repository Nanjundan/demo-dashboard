function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/mis-dashboard-builder/fesm2015/mis-dashboard-builder.js": function distMisDashboardBuilderFesm2015MisDashboardBuilderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MisDashboardBuilderComponent", function () {
      return MisDashboardBuilderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MisDashboardBuilderModule", function () {
      return MisDashboardBuilderModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MisDashboardBuilderService", function () {
      return MisDashboardBuilderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "../../node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "../../node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_item_series__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/item-series */
    "../../node_modules/highcharts/modules/item-series.js");
    /* harmony import */


    var highcharts_modules_item_series__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_item_series__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! mis-design-system/multi-select-v2 */
    "../../node_modules/mis-design-system/__ivy_ngcc__/multi-select-v2/fesm2015/mis-design-system-multi-select-v2.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var MisDashboardBuilderService = function MisDashboardBuilderService() {
      _classCallCheck(this, MisDashboardBuilderService);
    };

    MisDashboardBuilderService.ɵfac = function MisDashboardBuilderService_Factory(t) {
      return new (t || MisDashboardBuilderService)();
    };

    MisDashboardBuilderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: MisDashboardBuilderService,
      factory: MisDashboardBuilderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MisDashboardBuilderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    var _c0 = function _c0(a0, a1) {
      return {
        "width": a0,
        "height": a1
      };
    };

    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent(self) {
        _classCallCheck(this, LoaderComponent);

        this.self = self;
        this.width = 100;
        this.height = 100;
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.width = this.self.nativeElement.offsetParent.clientWidth;
          this.height = this.self.nativeElement.offsetParent.clientHeight;
        }
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], 2));
    };

    LoaderComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: LoaderComponent,
      selectors: [["lib-loader"]],
      decls: 3,
      vars: 5,
      consts: [[1, "loader-wrapper"], [1, "spinner-wrapper"], [1, "html-spinner"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "div", 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(2, _c0, ctx.width + "px", ctx.height + "px"));
        }
      },
      styles: [".loader-wrapper[_ngcontent-%COMP%]{position:relative;left:0;right:0;top:0;bottom:0;z-index:300;width:100%;height:100%}.spinner-wrapper[_ngcontent-%COMP%]{position:absolute;left:calc(50% - 15px);transform:translateX(-50%);top:calc(50% - 15px)}.html-spinner[_ngcontent-%COMP%]{width:30px;height:30px;border:8px solid #fff;border-top:6px solid #086cd1;border-radius:50%;transition-property:transform;transition-duration:1.2s;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes rotate{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes rotate{from{transform:rotate(0)}to{transform:rotate(360deg)}}"]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-loader',
          templateUrl: './loader.component.html',
          styleUrls: ['./loader.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      }, null);
    })();

    var _c0$1 = function _c0$1(a0, a1) {
      return {
        "top": a0,
        "left": a1
      };
    };

    var FilterWrapperComponent = /*#__PURE__*/function () {
      function FilterWrapperComponent(componentFactoryResolver, viewContainerRef) {
        _classCallCheck(this, FilterWrapperComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.xPos = 0;
        this.yPos = 0;
      }

      _createClass(FilterWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.moveElement();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "moveElement",
        value: function moveElement() {
          var ele = document.getElementById(this.placeHolderId);

          if (ele) {
            this.xPos = ele.getBoundingClientRect().x;
            this.yPos = ele.getBoundingClientRect().y;
          }
        }
      }]);

      return FilterWrapperComponent;
    }();

    FilterWrapperComponent.ɵfac = function FilterWrapperComponent_Factory(t) {
      return new (t || FilterWrapperComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    FilterWrapperComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: FilterWrapperComponent,
      selectors: [["lib-filter-wrapper"]],
      inputs: {
        placeHolderId: "placeHolderId",
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 6,
      consts: [[2, "position", "absolute"], [3, "data"]],
      template: function FilterWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "mis-multi-select-v2", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(3, _c0$1, ctx.yPos + "px", ctx.xPos + "px"));
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("data", ctx.data);
        }
      },
      directives: [mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_4__["MultiSelectV2Component"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FilterWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-filter-wrapper',
          templateUrl: './filter-wrapper.component.html',
          styleUrls: ['./filter-wrapper.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, {
        placeHolderId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
      }

      _createClass(HttpService, [{
        key: "getChartData",
        value: function getChartData(endpoint, filters) {
          return this.http.post("".concat(endpoint), filters, {
            headers: this.headers
          }); //return this.http.get(`${endpoint}`);  
        }
      }, {
        key: "getFilterData",
        value: function getFilterData(endpoint, filters) {
          return this.http.get("".concat(endpoint));
        }
      }, {
        key: "getFiles",
        value: function getFiles(endPoint, responseType) {
          if (responseType) return this.http.get(endPoint, {
            'responseType': responseType
          });else return this.http.get(endPoint);
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    HttpService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();

    var DataService = function DataService() {
      _classCallCheck(this, DataService);

      this.filtersData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](undefined);
      this.selectedFiltersData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](undefined);
    };

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };

    DataService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();

    var LoaderAnchorDirective = /*#__PURE__*/function () {
      function LoaderAnchorDirective(componentFactoryResolver, viewContainerRef) {
        _classCallCheck(this, LoaderAnchorDirective);

        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
      }

      _createClass(LoaderAnchorDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createComponent();
        }
      }, {
        key: "createComponent",
        value: function createComponent() {
          var cmpFactoryResolver = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
          this.viewContainerRef.clear();
          this.ref = this.viewContainerRef.createComponent(cmpFactoryResolver); // this.initiateComponent();
        }
      }]);

      return LoaderAnchorDirective;
    }();

    LoaderAnchorDirective.ɵfac = function LoaderAnchorDirective_Factory(t) {
      return new (t || LoaderAnchorDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    LoaderAnchorDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: LoaderAnchorDirective,
      selectors: [["", "libLoaderAnchor", ""]]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LoaderAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[libLoaderAnchor]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();

    var SafeHtmlPipe = /*#__PURE__*/function () {
      function SafeHtmlPipe(sanitized) {
        _classCallCheck(this, SafeHtmlPipe);

        this.sanitized = sanitized;
      }

      _createClass(SafeHtmlPipe, [{
        key: "transform",
        value: function transform(value) {
          return this.sanitized.bypassSecurityTrustHtml(value);
        }
      }]);

      return SafeHtmlPipe;
    }();

    SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]));
    };

    SafeHtmlPipe.ɵpipe = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"])({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeHtml'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
        }];
      }, null);
    })();

    var _c0$2 = function _c0$2(a0, a1) {
      return {
        "width": a0,
        "height": a1
      };
    };

    function MisDashboardBuilderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "safeHtml");
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(5, _c0$2, ctx_r0.width + "px", ctx_r0.height + "px"));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("innerHTML", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 3, ctx_r0.template), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function MisDashboardBuilderComponent_ng_template_1_ng_template_1_Template(rf, ctx) {}

    function MisDashboardBuilderComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, MisDashboardBuilderComponent_ng_template_1_ng_template_1_Template, 0, 0, "ng-template", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(2, _c0$2, ctx_r2.width + "px", ctx_r2.height + "px"));
      }
    }

    highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    highcharts_modules_item_series__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_1__);

    var MisDashboardBuilderComponent = /*#__PURE__*/function () {
      function MisDashboardBuilderComponent(componentFactoryResolver, viewContainerRef, appRef, injector, httpService, dataStore, self) {
        _classCallCheck(this, MisDashboardBuilderComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.appRef = appRef;
        this.injector = injector;
        this.httpService = httpService;
        this.dataStore = dataStore;
        this.self = self;
        this.template = undefined;
        this.width = 100;
        this.height = 100;
        this.filtersLib = {};
        this.selectedFilters = {};
      }

      _createClass(MisDashboardBuilderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this = this;

          if (changes && this.configuration && this.template) {
            setTimeout(function () {
              _this.startDashboardPlotting();
            }, 100);
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.width = this.self.nativeElement.offsetParent.clientWidth;
          this.height = this.self.nativeElement.offsetParent.clientHeight;
        }
        /**
         * Method to plot dashboard
         */

      }, {
        key: "startDashboardPlotting",
        value: function startDashboardPlotting() {
          var _this2 = this;

          if (this.configuration.filters) this.getFiltersData(this.configuration.filters);
          if (this.configuration.sections) this.getDataAndReplaceEndpoints(this.configuration.sections);else if (this.configuration.charts) this.getDataAndReplaceEndpoints([this.configuration]);
          this.dataStore.selectedFiltersData.subscribe(function (data) {
            if (data && data.values && data.filterName) {
              _this2.selectFilter(data.values, data.filterName);
            }
          });
        }
      }, {
        key: "plotChart",
        value: function plotChart(id, config) {
          setTimeout(function () {
            Object(highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"])(id, config);
          }, 200);
        }
      }, {
        key: "plotTiles",
        value: function plotTiles(cardData) {
          for (var card in cardData) {
            var allNodes = document.querySelectorAll('#' + card);
            allNodes[0].innerHTML = cardData[card]['value'];
          }
        }
      }, {
        key: "selectFilter",
        value: function selectFilter(values, filterName) {
          this.selectedFilters[filterName] = values;
          this.getDataAndReplaceEndpoints(this.configuration.charts);
        }
      }, {
        key: "getFiltersData",
        value: function getFiltersData(filters) {
          var _this3 = this;

          filters.forEach(function (filter) {
            if (filter.apiEndpoint) {
              _this3.httpService.getFilterData(filter.apiEndpoint).subscribe(function (data) {
                data = data.map(function (i) {
                  return {
                    label: i[filter['displayKey']],
                    value: i[filter['displayId']]
                  };
                });

                var cmpFactoryResolver = _this3.componentFactoryResolver.resolveComponentFactory(FilterWrapperComponent);

                var ref = _this3.viewContainerRef.createComponent(cmpFactoryResolver);

                ref.instance.placeHolderId = filter['identifier'];
                ref.instance.data = data;
                _this3.filtersLib[filter['identifier']] = data;

                _this3.dataStore.filtersData.next(_this3.filtersLib);

                _this3.selectedFilters[filter['identifier']] = [];
              });
            }
          });
        }
      }, {
        key: "getDataAndPlot",
        value: function getDataAndPlot(config) {
          var _this4 = this;

          var filters = this.filters ? this.filters : this.selectedFilters;
          this.httpService.getChartData(config.apiEndpoint, filters).subscribe(function (data) {
            config['series'] = data;

            _this4.plotChart(config['identifier'], config);
          });
        }
      }, {
        key: "addLoaderForId",
        value: function addLoaderForId(id) {
          var ele = document.getElementById(id);
          var compFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
          var component = compFactory.create(this.viewContainerRef.injector, null, ele); // let component = compFactory.create(this.injector, [], ele);
          // this.appRef.attachView(component.hostView);
        }
      }, {
        key: "getDataAndReplaceEndpoints",
        value: function getDataAndReplaceEndpoints(sections) {
          var _this5 = this;

          sections.forEach(function (section) {
            if (section.charts) _this5.plotCharts(section.charts);
            if (section.cards) _this5.mapCardValues(section.cards);
          });
        }
      }, {
        key: "mapCardValues",
        value: function mapCardValues(cards) {
          var _this6 = this;

          this.httpService.getChartData(cards).subscribe(function (data) {
            if (data) {
              setTimeout(function () {
                _this6.plotTiles(data);
              }, 2000);
            }
          });
        }
      }, {
        key: "plotCharts",
        value: function plotCharts(charts) {
          var _this7 = this;

          charts.forEach(function (config) {
            if (config.apiEndpoint) {
              _this7.addLoaderForId(config['identifier']);

              _this7.getDataAndPlot(config);

              if (config.enablePolling) {
                setInterval(function () {
                  _this7.getDataAndPlot(config);
                }, config.enablePolling);
              }
            } else if (config.series) {
              _this7.plotChart(config['identifier'], config);
            }
          });
        } //ToDo Generate xAxis labels automatically from api response

      }, {
        key: "addXAxisData",
        value: function addXAxisData() {}
      }]);

      return MisDashboardBuilderComponent;
    }();

    MisDashboardBuilderComponent.ɵfac = function MisDashboardBuilderComponent_Factory(t) {
      return new (t || MisDashboardBuilderComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(HttpService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(DataService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], 2));
    };

    MisDashboardBuilderComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: MisDashboardBuilderComponent,
      selectors: [["lib-mis-dashboard-builder"]],
      inputs: {
        template: "template",
        configuration: "configuration",
        filters: "filters"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [["style", "position: relative;", 3, "innerHTML", "style", 4, "ngIf", "ngIfElse"], ["loader", ""], [2, "position", "relative", 3, "innerHTML"], ["id", "loaders"], ["libLoaderAnchor", ""]],
      template: function MisDashboardBuilderComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, MisDashboardBuilderComponent_div_0_Template, 2, 8, "div", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, MisDashboardBuilderComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(2);

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.template)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], LoaderAnchorDirective],
      pipes: [SafeHtmlPipe],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MisDashboardBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-mis-dashboard-builder',
          templateUrl: './mis-dashboard-builder.component.html',
          styleUrls: ['./mis-dashboard-builder.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: HttpService
        }, {
          type: DataService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      }, {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        configuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var FilterAnchorDirective = /*#__PURE__*/function () {
      function FilterAnchorDirective(componentFactoryResolver, viewContainerRef, dataStore) {
        _classCallCheck(this, FilterAnchorDirective);

        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.dataStore = dataStore;
        this.data = [];
        this.selected = [];
        this.width = '160px';
        this.label = '';
      }

      _createClass(FilterAnchorDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.createComponent();
          this.dataStore.filtersData.subscribe(function (values) {
            if (values && values[_this8.id]) {
              _this8.data = values[_this8.id];

              _this8.setData();
            }
          });
        }
      }, {
        key: "createComponent",
        value: function createComponent() {
          var cmpFactoryResolver = this.componentFactoryResolver.resolveComponentFactory(mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_4__["MultiSelectV2Component"]);
          this.viewContainerRef.clear();
          var ele = document.getElementById('officeFilter');
          var injector;
          this.ref = this.viewContainerRef.createComponent(cmpFactoryResolver, 0, injector, [[ele]]); //this.initiateComponent();
        }
      }, {
        key: "initiateComponent",
        value: function initiateComponent() {
          var _this9 = this;

          this.ref.instance.showSelectedCount = true;
          this.ref.instance.width = this.width;
          this.ref.instance.label = this.label;

          if (!this.subscription) {
            this.subscription = this.ref.instance.onChange.subscribe(function (values) {
              _this9.selected = values;

              _this9.dataStore.selectedFiltersData.next({
                filterName: _this9.id,
                values: values
              });

              _this9.setData();
            });
          }
        }
      }, {
        key: "setData",
        value: function setData() {
          this.ref.instance.data = this.data ? this.data : [];
          this.ref.instance.selectedItems = this.selected;
        }
      }]);

      return FilterAnchorDirective;
    }();

    FilterAnchorDirective.ɵfac = function FilterAnchorDirective_Factory(t) {
      return new (t || FilterAnchorDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(DataService));
    };

    FilterAnchorDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: FilterAnchorDirective,
      selectors: [["", "appFilterAnchor", ""]],
      inputs: {
        id: "id",
        width: "width",
        label: "label"
      }
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(FilterAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appFilterAnchor]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: DataService
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var MisDashboardBuilderModule = function MisDashboardBuilderModule() {
      _classCallCheck(this, MisDashboardBuilderModule);
    };

    MisDashboardBuilderModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: MisDashboardBuilderModule
    });
    MisDashboardBuilderModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function MisDashboardBuilderModule_Factory(t) {
        return new (t || MisDashboardBuilderModule)();
      },
      providers: [HttpService, DataService],
      imports: [[mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_4__["MultiSelectV2Module"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(MisDashboardBuilderModule, {
        declarations: [MisDashboardBuilderComponent, FilterAnchorDirective, SafeHtmlPipe, LoaderComponent, LoaderAnchorDirective, FilterWrapperComponent],
        imports: [mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_4__["MultiSelectV2Module"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
        exports: [MisDashboardBuilderComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MisDashboardBuilderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [MisDashboardBuilderComponent, FilterAnchorDirective, SafeHtmlPipe, LoaderComponent, LoaderAnchorDirective, FilterWrapperComponent],
          imports: [mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_4__["MultiSelectV2Module"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
          exports: [MisDashboardBuilderComponent],
          providers: [HttpService, DataService]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of mis-dashboard-builder
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=mis-dashboard-builder.js.map

    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var mis_dashboard_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! mis-dashboard-builder */
    "../../dist/mis-dashboard-builder/fesm2015/mis-dashboard-builder.js");

    function AppComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-mis-dashboard-builder", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", ctx_r0.dashboardTemplate)("configuration", ctx_r0.dashboardConfig);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(http) {
        _classCallCheck(this, AppComponent);

        this.http = http;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.http.downloadFile('../assets/configuration/seat_allocation_by_office_and_floor_config').subscribe(function (data) {
            _this10.dashboardConfig = data;
          });
          this.http.downloadFile('../assets/template/seat_allocation_by_office_and_floor_template').subscribe(function (data) {
            _this10.dashboardTemplate = data;
          }, function (err) {
            _this10.dashboardTemplate = err.error.text;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 1,
      consts: [["style", "width: 100%; height: 100vh;", 4, "ngIf"], [2, "width", "100%", "height", "100vh"], [3, "template", "configuration"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dashboardTemplate && ctx.dashboardConfig);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], mis_dashboard_builder__WEBPACK_IMPORTED_MODULE_3__["MisDashboardBuilderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9taXMtcHJldmlldy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var mis_dashboard_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! mis-dashboard-builder */
    "../../dist/mis-dashboard-builder/fesm2015/mis-dashboard-builder.js");
    /* harmony import */


    var mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! mis-design-system/multi-select-v2 */
    "../../node_modules/mis-design-system/__ivy_ngcc__/multi-select-v2/fesm2015/mis-design-system-multi-select-v2.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_6__["MultiSelectV2Module"], mis_dashboard_builder__WEBPACK_IMPORTED_MODULE_5__["MisDashboardBuilderModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_6__["MultiSelectV2Module"], mis_dashboard_builder__WEBPACK_IMPORTED_MODULE_5__["MisDashboardBuilderModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], mis_design_system_multi_select_v2__WEBPACK_IMPORTED_MODULE_6__["MultiSelectV2Module"], mis_dashboard_builder__WEBPACK_IMPORTED_MODULE_5__["MisDashboardBuilderModule"]],
          providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/http.service.ts": function srcAppHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
      }

      _createClass(HttpService, [{
        key: "downloadFile",
        value: function downloadFile(url) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Content-Type": "text/plain",
            responseType: 'text'
          });
          return this.http.get(url, {
            headers: headers
          });
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/nanjundan/git/mis-library/projects/mis-preview/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map