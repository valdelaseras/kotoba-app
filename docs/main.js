"use strict";
(self["webpackChunkkotoba_app"] = self["webpackChunkkotoba_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/profile/profile.component */ 7094);
/* harmony import */ var _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/lobby/lobby.component */ 383);
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing/landing.component */ 4711);
/* harmony import */ var _components_exam_exam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/exam/exam.component */ 70);
/* harmony import */ var _components_score_history_score_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/score-history/score-history.component */ 1546);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings/settings.component */ 6577);
/* harmony import */ var _components_score_sheet_score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/score-sheet/score-sheet/score-sheet.component */ 7907);
/* harmony import */ var _route_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-guard */ 5528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const routes = [{
  path: 'login',
  component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent
}, {
  path: 'about',
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}, {
  path: 'profile',
  component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
  canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_8__.LoggedInRouteGuard]
}, {
  path: 'settings',
  component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent,
  canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_8__.LoggedInRouteGuard]
}, {
  path: 'lobby',
  component: _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_2__.LobbyComponent,
  canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_8__.LoggedInRouteGuard]
}, {
  path: 'exam',
  component: _components_exam_exam_component__WEBPACK_IMPORTED_MODULE_4__.ExamComponent,
  canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_8__.LoggedInRouteGuard, _route_guard__WEBPACK_IMPORTED_MODULE_8__.ExamRouteGuard]
}, {
  path: 'score/:timestamp',
  component: _components_score_sheet_score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_7__.ScoreSheetComponent,
  canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_8__.LoggedInRouteGuard]
}, {
  path: 'score-history',
  component: _components_score_history_score_history_component__WEBPACK_IMPORTED_MODULE_5__.ScoreHistoryComponent,
  canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_8__.LoggedInRouteGuard]
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'lobby'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/user/user.service */ 9709);
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/settings/settings.service */ 2304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_decorator_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/decorator/nav/nav.component */ 8212);
/* harmony import */ var _components_decorator_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/decorator/footer/footer.component */ 8273);
/* harmony import */ var _components_decorator_secondary_nav_secondary_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/decorator/secondary-nav/secondary-nav.component */ 4651);








const _c0 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
class AppComponent {
  constructor(router, userService, settingService) {
    this.router = router;
    this.userService = userService;
    this.settingService = settingService;
    this.title = 'kotoba-app';
    this.settings = this.settingService.getSettings();
  }
  ngOnInit() {}
  onLogin() {
    return this.router.url.includes('login');
  }
  onActivate() {
    window.scroll(0, 0);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 10,
  vars: 8,
  consts: [[1, "theme-settings", 3, "ngClass"], [3, "hidden"], ["tabindex", "0", 1, "section"], [1, "section-content"], [1, "grid"], [1, "column"], [3, "activate"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-nav", 1)(2, "app-secondary-nav", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "main")(4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "router-outlet", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_8_listener() {
        return ctx.onActivate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-footer", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](4, _c0, ctx.settings.visualSettings.font, ctx.settings.visualSettings.fontSize, ctx.settings.visualSettings.theme));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.onLogin());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.onLogin());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.onLogin());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_decorator_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _components_decorator_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_decorator_secondary_nav_secondary_nav_component__WEBPACK_IMPORTED_MODULE_4__.SecondaryNavComponent],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFRoaXMgbWlnaHQgYmUgdXNlbGVzcyBub3dcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_decorator_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/decorator/nav/nav.component */ 8212);
/* harmony import */ var _components_decorator_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/decorator/footer/footer.component */ 8273);
/* harmony import */ var _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/lobby/lobby.component */ 383);
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landing/landing.component */ 4711);
/* harmony import */ var _components_exam_exam_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/exam/exam.component */ 70);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ 7094);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/settings/settings.component */ 6577);
/* harmony import */ var _components_score_history_score_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/score-history/score-history.component */ 1546);
/* harmony import */ var _components_decorator_secondary_nav_secondary_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/decorator/secondary-nav/secondary-nav.component */ 4651);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user/user.service */ 9709);
/* harmony import */ var _services_exam_exam_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/exam/exam.service */ 4149);
/* harmony import */ var _services_dataset_data_set_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/dataset/data-set.service */ 5530);
/* harmony import */ var _components_score_sheet_score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/score-sheet/score-sheet/score-sheet.component */ 7907);
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/settings/settings.service */ 2304);
/* harmony import */ var _route_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./route-guard */ 5528);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);


























const components = [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_decorator_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _components_decorator_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_4__.LobbyComponent, _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__.LandingComponent, _components_exam_exam_component__WEBPACK_IMPORTED_MODULE_6__.ExamComponent, _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__.SettingsComponent, _components_score_history_score_history_component__WEBPACK_IMPORTED_MODULE_11__.ScoreHistoryComponent, _components_decorator_secondary_nav_secondary_nav_component__WEBPACK_IMPORTED_MODULE_12__.SecondaryNavComponent, _components_score_sheet_score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_16__.ScoreSheetComponent];
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_13__.UserService, _services_exam_exam_service__WEBPACK_IMPORTED_MODULE_14__.ExamService, _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_17__.SettingsService, _services_dataset_data_set_service__WEBPACK_IMPORTED_MODULE_15__.DataSetService, _route_guard__WEBPACK_IMPORTED_MODULE_18__.ExamRouteGuard, _route_guard__WEBPACK_IMPORTED_MODULE_18__.LoggedInRouteGuard],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.HammerModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_19__.environment.production
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_decorator_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _components_decorator_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_4__.LobbyComponent, _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__.LandingComponent, _components_exam_exam_component__WEBPACK_IMPORTED_MODULE_6__.ExamComponent, _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__.SettingsComponent, _components_score_history_score_history_component__WEBPACK_IMPORTED_MODULE_11__.ScoreHistoryComponent, _components_decorator_secondary_nav_secondary_nav_component__WEBPACK_IMPORTED_MODULE_12__.SecondaryNavComponent, _components_score_sheet_score_sheet_score_sheet_component__WEBPACK_IMPORTED_MODULE_16__.ScoreSheetComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.HammerModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 38,
  vars: 0,
  consts: [["id", "about"], [1, "column"], [1, "content"], [1, "column", "two"], ["href", "https://www.linkedin.com/in/robin-scholtes-488964115/", 1, "highlight"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "div", 3)(7, "div", 2)(8, "fieldset")(9, "legend")(10, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "...the target user group");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Kotoba is intended for anyone who is in the tough process of cramming kana and kanji. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1)(15, "div", 3)(16, "div", 2)(17, "fieldset")(18, "legend")(19, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "...the purpose");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Kotoba is intended to be used as an addition to your regular studies of the language. To put it simply, it is a tool to test how well you have memorized kanji and kana and to help you cram by using the simple method of repetition. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3)(24, "div", 2)(25, "fieldset")(26, "legend")(27, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "...the origin story");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Kotoba is a passion project created by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "me, Robin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Back around 2008 I studied Japanese in college. At the time, we didn't have a lot of great online tools at our disposal to efficiently cram huge lists of words and kanji. We used to get creative and 'abuse' online tools that were intended for other things, and manually typed up all the lists we needed! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " While times and available tools are way different now and lots of great tools exist, I created Kotoba anyway as a passion project once I started learning web development. Kotoba is one of my first projects and is basically a manifestation of what I wish we had back in school ;) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8273:
/*!*****************************************************************!*\
  !*** ./src/app/components/decorator/footer/footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 30,
  vars: 0,
  consts: [["id", "footer"], [1, "footer-content"], [1, "grid"], [1, "column"], [1, "column", "two"], [1, "content"], [1, "icon-list"], ["href", "https://github.com/valdelaseras/kotoba-app", 1, "icon-link"], ["src", "../../../../assets/logos/github.svg", "alt", "Github logo", "title", "Github", 1, "invert-on-dark-theme"], ["href", "https://www.linkedin.com/in/robin-scholtes-488964115/", 1, "icon-link"], ["src", "../../../../assets/logos/linkedin.svg", "alt", "Linkedin logo", "title", "Linkedin", 1, "invert-on-dark-theme"], ["href", "https://weird.io/en/home", 1, "icon-link"], ["src", "../../../../assets/logos/weird.svg", "alt", "Weird logo", "title", "Weird.io", 1, "invert-on-dark-theme"], ["href", "mailto:robin@weird.io"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Kotoba is a hobby project. It's not a proper and finished product, and more so used right now as a part of my web development portfolio. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " However, if you are a student of Japanese and somehow you found this tool and it is helping you cram, I'm very happy it can be useful to you! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u9811\u5F35\u3063\u3066\u306D! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4)(13, "div", 5)(14, "ul", 6)(15, "li")(16, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul")(25, "li")(26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Feel free to drop me some feedback, ask a question or just to say hi! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "robin@weird.io");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    }
  },
  styles: ["#footer[_ngcontent-%COMP%] {\n  background-color: var(--tertiary-color);\n  display: inline-block;\n  width: 100%;\n  margin-bottom: -20px;\n}\n\na.active[_ngcontent-%COMP%] {\n  color: var(--quaternary-color);\n  font-weight: bold;\n}\n\n.icon-list[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.icon-link[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n@media only screen and (min-width: 1024px) {\n  .icon-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 1rem;\n  }\n  .icon-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kZWNvcmF0b3IvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7RUFBRjtFQUdBO0lBQ0UsZUFBQTtFQURGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICAvL1RPRE86IHRoaXMgaXMgYSB0ZW1wb3JhcnkgZml4LiBmb3Igc29tZSB1bmtub3duIHJlYXNvbiBhcHAtZm9vdGVyIGhhcyBhIGhlaWdodCBvZiAxN3B4XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuXG5hLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uLWxpc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pY29uLWxpbmsgPiBpbWcge1xuICB3aWR0aDogNDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmljb24tbGlzdCA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5cbiAgLmljb24tbGlzdCA+IGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8212:
/*!***********************************************************!*\
  !*** ./src/app/components/decorator/nav/nav.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





class NavComponent {
  constructor(router) {
    this.router = router;
    this.menuIsOpen = false;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)).subscribe(event => {
      this.menuIsOpen = false;
    });
  }
  ngOnInit() {}
  onSwipeRight() {
    if (this.menuIsOpen === true) {
      this.menuIsOpen = false;
    }
  }
}
NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavComponent,
  selectors: [["app-nav"]],
  decls: 35,
  vars: 1,
  consts: [["tabindex", "0", 1, "nav"], [1, "branding-logo"], ["title", "Kotoba", "routerLink", "/lobby", "routerLinkActive", "active"], [1, "bold"], [1, "nav-list", "desktop-only"], ["title", "About", "routerLink", "/about", "routerLinkActive", "active", 1, "nav-link"], ["title", "Profile", "routerLink", "/profile", "routerLinkActive", "active", 1, "nav-link"], [1, "mobile-menu", "mobile-only"], ["type", "checkbox", "id", "nav-checkbox", 1, "nav-checkbox", 3, "ngModel", "ngModelChange"], ["for", "nav-checkbox", 1, "nav-toggle"], [1, "slide-in-menu"], [1, "mobile-nav-list", 3, "swiperight"], ["title", "Lobby", "routerLink", "/lobby", "routerLinkActive", "active", 1, "nav-link"], ["title", "Settings", "routerLink", "/settings", "routerLinkActive", "active", 1, "nav-link"], ["title", "Score history", "routerLink", "/score-history", "routerLinkActive", "active", 1, "nav-link"]],
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u8A00\u8449");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 4)(6, "li")(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li")(10, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NavComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.menuIsOpen = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "span")(16, "span")(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "ul", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("swiperight", function NavComponent_Template_ul_swiperight_19_listener() {
        return ctx.onSwipeRight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li")(21, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Lobby");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li")(24, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li")(27, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li")(30, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Score history");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li")(33, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.menuIsOpen);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  styles: [".nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 70px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  background-color: var(--tertiary-color);\n  z-index: 999;\n}\n\n.branding-logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  margin-left: 1rem;\n}\n\n.branding-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .branding-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .nav-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 0;\n  font-size: 1.5rem;\n  text-decoration: none;\n}\n\n.nav-checkbox[_ngcontent-%COMP%], .nav-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n\n.nav-checkbox[_ngcontent-%COMP%] {\n  height: 28px;\n  width: 35px;\n  visibility: hidden;\n}\n\n.nav-toggle[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.nav-toggle[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  margin-top: 9px;\n}\n\n.nav-toggle[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  width: 35px;\n  height: 3px;\n  background-color: var(--secondary-color);\n  margin-bottom: 6px;\n  transition: all 350ms ease-in-out;\n}\n\n.nav-toggle[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  width: 15px;\n  transform: translateX(20px);\n}\n\n.nav-checkbox[_ngcontent-%COMP%]:checked    + .nav-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  transform: translateX(0px);\n}\n\n.slide-in-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 70px;\n  bottom: 0;\n  left: 100%;\n  right: -100%;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.75);\n  transition: left 50ms ease-in-out, right 50ms ease-in-out;\n}\n\n.nav-checkbox[_ngcontent-%COMP%]:checked    ~ .slide-in-menu[_ngcontent-%COMP%] {\n  left: 0;\n  right: 100%;\n}\n\n.nav-checkbox[_ngcontent-%COMP%]:checked    ~ .slide-in-menu[_ngcontent-%COMP%]   .mobile-nav-list[_ngcontent-%COMP%] {\n  right: 0;\n  left: 25vw;\n}\n\n.mobile-nav-list[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  background-color: var(--tertiary-color);\n  left: 125vw;\n  right: -100vw;\n  bottom: 0;\n  top: 0;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 2rem;\n  margin-top: 0;\n  transition: right 200ms ease-in-out 150ms, left 200ms ease-in-out 150ms;\n}\n\n.mobile-nav-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding-bottom: 1rem;\n  font-size: 1.5rem;\n}\n\n.mobile-nav-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--quaternary-color);\n}\n\n@media only screen and (min-width: 1024px) {\n  .nav[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .branding-logo[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .nav-list[_ngcontent-%COMP%] {\n    margin: 0;\n    height: 40px;\n    width: auto;\n  }\n  .nav-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 1rem;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    color: var(--secondary-color);\n    text-decoration: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kZWNvcmF0b3IvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSx5REFBQTtBQUNGOztBQUdBO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFFBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVFQUFBO0FBQUY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0FBREY7O0FBSUE7RUFDSTtJQUNFLGFBQUE7RUFESjtFQUlFO0lBQ0UsY0FBQTtFQUZKO0VBS0U7SUFDSSxTQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFITjtFQU1FO0lBQ0kscUJBQUE7SUFDQSxlQUFBO0VBSk47RUFPRTtJQUNJLDZCQUFBO0lBQ0EscUJBQUE7RUFMTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uYnJhbmRpbmctbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uYnJhbmRpbmctbG9nbyBhLFxuLmJyYW5kaW5nLWxvZ28gYSBzcGFuLFxuLm5hdi10b2dnbGUgc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2LWNoZWNrYm94LFxuLm5hdi10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG59XG5cbi5uYXYtY2hlY2tib3gge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAzNXB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5uYXYtdG9nZ2xlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LXRvZ2dsZSA+IHNwYW46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG5cbi5uYXYtdG9nZ2xlID4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubmF2LXRvZ2dsZSA+IHNwYW46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdpZHRoOiAxNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG59XG5cbi5uYXYtY2hlY2tib3g6Y2hlY2tlZCArIC5uYXYtdG9nZ2xlIHNwYW46bGFzdC1jaGlsZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xufVxuXG4uc2xpZGUtaW4tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDEwMCU7XG4gIHJpZ2h0OiAtMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC43NSk7XG4gIHRyYW5zaXRpb246IGxlZnQgNTBtcyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgcmlnaHQgNTBtcyBlYXNlLWluLW91dDtcbn1cblxuLm5hdi1jaGVja2JveDpjaGVja2VkIH4gLnNsaWRlLWluLW1lbnUge1xuICBsZWZ0OiAwO1xuICByaWdodDogMTAwJTtcbn1cblxuLm5hdi1jaGVja2JveDpjaGVja2VkIH4gLnNsaWRlLWluLW1lbnUgLm1vYmlsZS1uYXYtbGlzdCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAyNXZ3O1xufVxuXG4ubW9iaWxlLW5hdi1saXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICBsZWZ0OiAxMjV2dztcbiAgcmlnaHQ6IC0xMDB2dztcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDIwMG1zIGVhc2UtaW4tb3V0IDE1MG1zLFxuICAgICAgICAgICAgICBsZWZ0IDIwMG1zIGVhc2UtaW4tb3V0IDE1MG1zO1xufVxuXG4ubW9iaWxlLW5hdi1saXN0ID4gbGkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5tb2JpbGUtbmF2LWxpc3QgPiBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5LWNvbG9yKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDogMTAyNHB4ICkge1xuICAgIC5uYXYge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG5cbiAgICAuYnJhbmRpbmctbG9nbyB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAubmF2LWxpc3Qge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuXG4gICAgLm5hdi1saXN0ID4gbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG5cbiAgICAubmF2LWxpbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4651:
/*!*******************************************************************************!*\
  !*** ./src/app/components/decorator/secondary-nav/secondary-nav.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryNavComponent": () => (/* binding */ SecondaryNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class SecondaryNavComponent {
  constructor(location) {
    this.location = location;
  }
  ngOnInit() {}
  back() {
    this.location.back();
  }
}
SecondaryNavComponent.ɵfac = function SecondaryNavComponent_Factory(t) {
  return new (t || SecondaryNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location));
};
SecondaryNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SecondaryNavComponent,
  selectors: [["app-secondary-nav"]],
  decls: 14,
  vars: 0,
  consts: [[1, "grid"], [1, "column"], [1, "content"], [1, "btn-group"], ["title", "Back", "type", "button", 1, "btn", "btn-secondary", 3, "click"], ["title", "To lobby", "type", "button", "routerLink", "/lobby", "routerLinkActive", "active", 1, "btn", "btn-secondary"], ["title", "To settings", "type", "button", "routerLink", "/settings", "routerLinkActive", "active", 1, "btn", "btn-secondary"]],
  template: function SecondaryNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "ul", 3)(5, "li")(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecondaryNavComponent_Template_button_click_6_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lobby");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  styles: ["nav[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media only screen and (min-width: 1024px) {\n  nav[_ngcontent-%COMP%] {\n    display: inline-block;\n    background-color: var(--primary-color);\n    position: fixed;\n    top: 70px;\n    left: 0;\n    right: 0;\n    box-sizing: border-box;\n    z-index: 999;\n    height: 70px;\n    margin: 0 auto;\n  }\n  .btn-group[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kZWNvcmF0b3Ivc2Vjb25kYXJ5LW5hdi9zZWNvbmRhcnktbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLHNDQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBQ0Y7RUFFQTtJQUNFLFNBQUE7RUFBRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNzBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70:
/*!***************************************************!*\
  !*** ./src/app/components/exam/exam.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamComponent": () => (/* binding */ ExamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_exam_exam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/exam/exam.service */ 4149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function ExamComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.currentQuestion.hint);
  }
}
function ExamComponent_div_24_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This answer is incorrect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ExamComponent_div_24_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One or more answers are incorrect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ExamComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExamComponent_div_24_ng_container_2_Template, 2, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExamComponent_div_24_ng_container_3_Template, 2, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.multipleAnswersGiven() && ctx_r3.numberOfIncorrectAnswers() > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.multipleAnswersGiven() && ctx_r3.numberOfIncorrectAnswers() > 0);
  }
}
class ExamComponent {
  constructor(examService, router) {
    this.examService = examService;
    this.router = router;
    this.givenAnswer = {
      entry: undefined,
      valid: []
    };
    this.attempt = 0;
    this.exam = this.examService.getExam();
    this.currentSettings = this.exam.settings;
    this.allowedRetries = this.getAllowedRetries(this.currentSettings);
  }
  ngOnInit() {
    this.currentQuestion = this.exam.getQuestion();
  }
  onResize() {
    window.scroll(0, 0);
  }
  hasIncorrectAnswers() {
    return this.numberOfIncorrectAnswers() > 0;
  }
  multipleAnswersGiven() {
    return this.givenAnswer.entry.includes(', ');
  }
  numberOfIncorrectAnswers() {
    return this.givenAnswer.valid.filter(valid => !valid).length;
  }
  submitForm() {
    this.givenAnswer.valid = this.exam.answerIsCorrect(this.givenAnswer.entry);
    this.saveGivenAnswerEntry();
    if (!this.hasIncorrectAnswers()) {
      this.resetGivenAnswer();
      this.updateQuestion();
    } else if (this.hasIncorrectAnswers()) {
      this.attempt += 1;
      if (this.attempt === this.allowedRetries) {
        this.resolveQuestionRepeat();
        this.updateQuestion();
      }
    }
  }
  resetGivenAnswer() {
    this.givenAnswer = {
      entry: undefined,
      valid: []
    };
  }
  updateQuestion() {
    if (this.exam.isLastQuestion()) {
      this.examService.saveExam(this.exam);
      this.router.navigate(['score', this.exam.timestamp]);
    } else {
      this.exam.incrementQuestion();
      this.currentQuestion = this.exam.getQuestion();
      this.resetGivenAnswer();
    }
    this.attempt = 0;
  }
  saveGivenAnswerEntry() {
    this.currentQuestion.givenAnswers.push(Object.assign({}, this.givenAnswer));
  }
  // TODO: when refactoring, move this to Exam model
  getAllowedRetries(examSettings) {
    if (examSettings.retry === 'None') {
      return this.allowedRetries = 1;
    } else if (examSettings.retry === 'Once') {
      return this.allowedRetries = 2;
    } else if (examSettings.retry === 'Twice') {
      return this.allowedRetries = 3;
    } else {
      return;
    }
  }
  // TODO: when refactoring, move this to Exam model
  resolveQuestionRepeat() {
    if (this.exam.settings.repeat === 'Repeat until answered correctly') {
      this.exam.appendQuestion(this.currentQuestion);
    }
  }
}
ExamComponent.ɵfac = function ExamComponent_Factory(t) {
  return new (t || ExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_exam_exam_service__WEBPACK_IMPORTED_MODULE_0__.ExamService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ExamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ExamComponent,
  selectors: [["app-exam"]],
  decls: 56,
  vars: 16,
  consts: [["id", "exam", 3, "resize"], [1, "column"], [1, "content"], [1, "column", "two"], ["id", "exam-form", 3, "ngSubmit"], ["examForm", "ngForm"], [1, "form-group"], ["for", "question"], [4, "ngIf"], ["id", "question", "required", "", "name", "answer", "autocomplete", "off", "onInput", "this.value = this.value.toLowerCase()", 3, "ngModel", "placeholder", "ngModelChange"], ["answer", "ngModel"], [1, "column", "info-bar"], ["class", "incorrect-answer", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-main", 3, "disabled"], [1, "stats"], [1, "incorrect-answer"], [1, "invalid-color"]],
  template: function ExamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ExamComponent_Template_div_resize_0_listener() {
        return ctx.onResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "div", 3)(7, "div", 2)(8, "form", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ExamComponent_Template_form_ngSubmit_8_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "fieldset")(12, "legend")(13, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ExamComponent_span_15_Template, 2, 1, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExamComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.givenAnswer.entry = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "titlecase");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11)(20, "div", 3)(21, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ExamComponent_div_24_Template, 4, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3)(28, "div", 2)(29, "fieldset")(30, "legend")(31, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Stats");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ul", 14)(34, "li")(35, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Method");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Correct");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Incorrect");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentQuestion.question);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentQuestion.hint);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.givenAnswer.entry)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 14, ctx.currentQuestion.placeholder));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.attempt, " / ", ctx.allowedRetries || "\u221E", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasIncorrectAnswers());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.pristine || _r0.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.settings.method);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.currentQuestionNumber());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.getQuestions().length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.numberOfCorrectAnswers());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.numberOfIncorrectAnswers());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe],
  styles: ["legend[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  line-height: 1;\n}\n\n@media only screen and (min-width: 1024px) {\n  legend[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\ninput[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background-color: transparent;\n  border-top: transparent;\n  border-left: transparent;\n  border-right: transparent;\n  border-bottom: 1px solid var(--secondary-color);\n  width: 100%;\n}\n\n.stats[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.stats[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\nli[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.incorrect-answer[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.info-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 15px 0;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtL2V4YW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxlQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogTWF5YmUgY29uc2lkZXIgbWFraW5nIHRoaXMgc21hbGxlciBhZnRlciBhbGwuXG4vLyAgSWYgdGhlIGxhYmVsIHdvdWxkIHJlZmxlY3Qgc29tZSBFbmdsaXNoIHdvcmQocyksXG4vLyAgaXQgd291bGQgbG9vayBwcmV0dHkgbWVzc2VkIHVwIGxpa2VseVxubGVnZW5kIGxhYmVsIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgbGVnZW5kIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RhdHMgPiBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5zdGF0cyA+IGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5saSA+IHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbmNvcnJlY3QtYW5zd2VyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pbmZvLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4711:
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.component */ 7143);


class LandingComponent {
  constructor() {}
  ngOnInit() {}
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)();
};
LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-landing"]],
  decls: 11,
  vars: 0,
  consts: [["id", "landing"], [1, "column"], [1, "content"], [1, "font-xxl"], [1, "column", "two"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Kotoba");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 2)(8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Memorize Japanese characters and vocabulary. Let's get cramming! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 383:
/*!*****************************************************!*\
  !*** ./src/app/components/lobby/lobby.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LobbyComponent": () => (/* binding */ LobbyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user/user.service */ 9709);
/* harmony import */ var _services_dataset_data_set_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dataset/data-set.service */ 5530);
/* harmony import */ var _services_exam_exam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/exam/exam.service */ 4149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings/settings.service */ 2304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








function LobbyComponent_div_0_ng_container_15_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LobbyComponent_div_0_ng_container_15_li_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const availableExam_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.selectAvailableExam(availableExam_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const availableExam_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", availableExam_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5.selectedAvailableExam.id === availableExam_r4.id ? "active" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](availableExam_r4.title);
  }
}
function LobbyComponent_div_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LobbyComponent_div_0_ng_container_15_li_1_Template, 3, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const availableExam_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", availableExam_r4.category === "kana");
  }
}
function LobbyComponent_div_0_ng_container_23_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LobbyComponent_div_0_ng_container_23_li_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const availableExam_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.selectAvailableExam(availableExam_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const availableExam_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", availableExam_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", availableExam_r10.dataSets.length === 0)("ngClass", ctx_r11.selectedAvailableExam.id === availableExam_r10.id ? "active" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", availableExam_r10.title, " ");
  }
}
function LobbyComponent_div_0_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LobbyComponent_div_0_ng_container_23_li_1_Template, 3, 4, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const availableExam_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", availableExam_r10.category === "kanji");
  }
}
function LobbyComponent_div_0_div_26_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const retryOption_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", retryOption_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", retryOption_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](retryOption_r19);
  }
}
function LobbyComponent_div_0_div_26_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repeatOption_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", repeatOption_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", repeatOption_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](repeatOption_r20);
  }
}
function LobbyComponent_div_0_div_26_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const method_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", method_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", method_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](method_r21);
  }
}
function LobbyComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LobbyComponent_div_0_div_26_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.submitSelectedExam());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "fieldset")(3, "legend")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " The settings below only affect the current exam. To change your default global settings, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Exam settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 16)(16, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Allowed retries per question");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LobbyComponent_div_0_div_26_Template_select_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.examSettings.retry = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, LobbyComponent_div_0_div_26_option_19_Template, 2, 3, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 16)(21, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Repeat incorrectly answered questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " By default, questions you answered incorrectly will be repeated again at the end of your exam until you answer them correctly. You may also choose to disable this. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LobbyComponent_div_0_div_26_Template_select_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.examSettings.repeat = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, LobbyComponent_div_0_div_26_option_26_Template, 2, 3, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 16)(28, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LobbyComponent_div_0_div_26_Template_select_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.examSettings.method = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, LobbyComponent_div_0_div_26_option_31_Template, 2, 3, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Start Exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r3.selectedAvailableExam.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedAvailableExam.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.examSettings.retry);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.examOptions.retry);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.examSettings.repeat);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.examOptions.repeat);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.examSettings.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.selectedAvailableExam.methods);
  }
}
function LobbyComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 2)(3, "div", 3)(4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Lobby");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2)(7, "div", 4)(8, "div", 2)(9, "div", 3)(10, "fieldset", 5)(11, "legend")(12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Kana");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, LobbyComponent_div_0_ng_container_15_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 2)(17, "div", 3)(18, "fieldset", 5)(19, "legend")(20, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Kanji");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, LobbyComponent_div_0_ng_container_23_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 4)(25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, LobbyComponent_div_0_div_26_Template, 34, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.availableExams);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.availableExams);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.selectedAvailableExam);
  }
}
class LobbyComponent {
  constructor(userService, datasetService, examService, router, settingsService) {
    this.userService = userService;
    this.datasetService = datasetService;
    this.examService = examService;
    this.router = router;
    this.settingsService = settingsService;
    this.examSettings = {
      retry: undefined,
      repeat: undefined,
      method: undefined
    };
    this.currentSettings = this.settingsService.getSettings();
    this.currentUser = this.userService.getCurrentUser();
    this.availableExams = this.datasetService.getAvailableExams();
    this.examOptions = this.settingsService.getExamOptions();
    this.selectAvailableExam(this.availableExams[0]);
    this.examSettings.retry = this.currentSettings.examSettings.retry;
    this.examSettings.repeat = this.currentSettings.examSettings.repeat;
  }
  selectAvailableExam(availableExam) {
    this.selectedAvailableExam = availableExam;
    this.examSettings.method = availableExam.methods[1];
  }
  submitSelectedExam() {
    this.examService.createExam(this.selectedAvailableExam, this.examSettings);
    this.router.navigate(['exam']);
  }
}
LobbyComponent.ɵfac = function LobbyComponent_Factory(t) {
  return new (t || LobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dataset_data_set_service__WEBPACK_IMPORTED_MODULE_1__.DataSetService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_exam_exam_service__WEBPACK_IMPORTED_MODULE_2__.ExamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService));
};
LobbyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LobbyComponent,
  selectors: [["app-lobby"]],
  decls: 1,
  vars: 1,
  consts: [["id", "lobby", 4, "ngIf"], ["id", "lobby"], [1, "column"], [1, "content"], [1, "column", "two"], [1, "reduce-fs-padding"], [1, "btn-group", "vertical"], [4, "ngFor", "ngForOf"], ["class", "selected-exam", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-secondary", 3, "ngClass", "title", "click"], [1, "btn", "btn-secondary", 3, "disabled", "ngClass", "title", "click"], [1, "selected-exam"], [3, "ngSubmit"], [1, "highlight"], ["title", "settings", "routerLink", "/settings", 1, "bold", "highlight"], [1, "form-group"], ["for", "retry-select"], ["id", "retry-select", "name", "retry-setting", 3, "ngModel", "ngModelChange"], [3, "value", "title", 4, "ngFor", "ngForOf"], ["for", "repeat-select"], ["id", "repeat-select", "name", "repeat-setting", 3, "ngModel", "ngModelChange"], ["for", "method-select"], ["id", "method-select", "name", "method-setting", 3, "ngModel", "ngModelChange"], [3, "title", "value", 4, "ngFor", "ngForOf"], ["type", "submit", "title", "Start exam", 1, "btn", "btn-primary", "btn-main"], [3, "value", "title"], [3, "title", "value"]],
  template: function LobbyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LobbyComponent_div_0_Template, 27, 3, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentUser);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: [".selected-exam[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\nbutton[type=submit][_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.reduce-fs-padding[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.btn-group[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  flex: 1 1 33vw;\n  margin: 0.25rem;\n  max-width: calc(50% - 0.5rem);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2JieS9sb2JieS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtZXhhbSBoZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5idXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucmVkdWNlLWZzLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG59XG5cbi5idG4tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYnRuLWdyb3VwID4gbGkge1xuICBmbGV4OiAxIDEgMzN2dztcbiAgbWFyZ2luOiAuMjVyZW07XG4gIG1heC13aWR0aDogY2FsYyg1MCUgLSAuNXJlbSk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user/user.service */ 9709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function LoginComponent_div_8_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Your username is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_8_p_1_Template, 2, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid);
  }
}
class LoginComponent {
  constructor(router, userService) {
    this.router = router;
    this.userService = userService;
    this.user = {
      name: undefined
    };
  }
  ngOnInit() {}
  submitForm() {
    this.saveToLocalStorage(this.user);
    this.userService.setCurrentUser(this.user.name);
    this.router.navigate(['lobby']);
  }
  saveToLocalStorage(user) {
    localStorage.setItem('ktb-username', user.name);
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 9,
  vars: 3,
  consts: [["id", "login-form", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "username-input"], ["name", "username", "id", "username-input", "type", "text", "placeholder", "Your username", "autocomplete", "off", "minlength", "1", "autofocus", "", "required", "", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-main", 3, "disabled"], [4, "ngIf"], ["class", "invalid-color", 4, "ngIf"], [1, "invalid-color"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.user.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.dirty);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["#login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid var(--secondary-color);\n  font-size: 1rem;\n  margin-bottom: 2rem;\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus-within, input[_ngcontent-%COMP%]:active {\n  border-bottom: 1px solid var(--quaternary-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxnREFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dDpob3ZlcixcbmlucHV0OmZvY3VzLFxuaW5wdXQ6Zm9jdXMtd2l0aGluLFxuaW5wdXQ6YWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXF1YXRlcm5hcnktY29sb3IpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7094:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class ProfileComponent {
  constructor(userService) {
    this.userService = userService;
    this.currentUser = this.userService.getCurrentUser();
  }
  ngOnInit() {}
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 19,
  vars: 1,
  consts: [["id", "profile"], [1, "column"], [1, "content"], [1, "column", "two"], ["title", "Settings", "routerLink", "/settings", "routerLinkActive", "active"], ["title", "Score history", "routerLink", "/score-history", "routerLinkActive", "active"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Your profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "div", 3)(7, "div", 2)(8, "fieldset")(9, "legend")(10, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul")(13, "li")(14, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Your score history");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentUser.username);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1546:
/*!*********************************************************************!*\
  !*** ./src/app/components/score-history/score-history.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreHistoryComponent": () => (/* binding */ ScoreHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_exam_exam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/exam/exam.service */ 4149);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function ScoreHistoryComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You don't have an exam history yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/score", a1];
};
function ScoreHistoryComponent_ul_13_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exam_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, exam_r3.timestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", exam_r3.title, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, exam_r3.timestamp, "dd-MM-yyyy hh:mm:ss"), "");
  }
}
function ScoreHistoryComponent_ul_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScoreHistoryComponent_ul_13_li_1_Template, 4, 8, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.exams);
  }
}
class ScoreHistoryComponent {
  constructor(examService) {
    this.examService = examService;
    this.exams = this.examService.getExams();
  }
}
ScoreHistoryComponent.ɵfac = function ScoreHistoryComponent_Factory(t) {
  return new (t || ScoreHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_exam_exam_service__WEBPACK_IMPORTED_MODULE_0__.ExamService));
};
ScoreHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ScoreHistoryComponent,
  selectors: [["app-score-history"]],
  decls: 14,
  vars: 2,
  consts: [["id", "score-history"], [1, "column"], [1, "content"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["title", "", 3, "routerLink"]],
  template: function ScoreHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 1)(3, "div", 2)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Score history");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1)(7, "div", 2)(8, "fieldset")(9, "legend")(10, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Your exams");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ScoreHistoryComponent_p_12_Template, 2, 0, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ScoreHistoryComponent_ul_13_Template, 2, 1, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.exams.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exams.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7907:
/*!*****************************************************************************!*\
  !*** ./src/app/components/score-sheet/score-sheet/score-sheet.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreSheetComponent": () => (/* binding */ ScoreSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_exam_exam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/exam/exam.service */ 4149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




const _c0 = function (a0) {
  return {
    "incorrect-entry": a0
  };
};
function ScoreSheetComponent_fieldset_8_div_11_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const answer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !answer_r4.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](answer_r4.entry);
  }
}
function ScoreSheetComponent_fieldset_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 6)(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ScoreSheetComponent_fieldset_8_div_11_span_5_Template, 2, 4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r2.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", entry_r2.givenAnswers);
  }
}
function ScoreSheetComponent_fieldset_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fieldset")(1, "legend")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1)(5, "div", 6)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ScoreSheetComponent_fieldset_8_div_11_Template, 6, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.exam.getQuestions());
  }
}
class ScoreSheetComponent {
  constructor(examService, route) {
    this.examService = examService;
    this.route = route;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => this.exam = this.examService.getExam(paramMap.get('timestamp')));
  }
}
ScoreSheetComponent.ɵfac = function ScoreSheetComponent_Factory(t) {
  return new (t || ScoreSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_exam_exam_service__WEBPACK_IMPORTED_MODULE_0__.ExamService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
ScoreSheetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ScoreSheetComponent,
  selectors: [["app-scoresheet"]],
  decls: 69,
  vars: 14,
  consts: [["id", "scoresheet"], [1, "column"], [1, "content"], [1, "column", "two"], [4, "ngIf"], [1, "stats"], [1, "column", "column-mobile", "three"], [1, "column", "column-mobile", "three", "b"], ["class", "column single-entry-item", 4, "ngFor", "ngForOf"], [1, "column", "single-entry-item"], [1, "highlight"], ["class", "entries", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "entries", 3, "ngClass"]],
  template: function ScoreSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Score");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "div", 3)(7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ScoreSheetComponent_fieldset_8_Template, 12, 1, "fieldset", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "div", 2)(11, "fieldset")(12, "legend")(13, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Stats");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 5)(16, "li")(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "div", 1)(21, "div", 3)(22, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li")(29, "div", 3)(30, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 3)(33, "div", 3)(34, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li")(38, "div", 1)(39, "div", 3)(40, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Total questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 3)(43, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li")(46, "div", 1)(47, "div", 3)(48, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Number of correct answers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 3)(51, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "div", 1)(55, "div", 3)(56, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Number of wrong answers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 3)(59, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li")(62, "div", 1)(63, "div", 3)(64, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Total score");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 3)(67, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exam);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.settings.method);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](27, 8, ctx.exam.timestamp, "dd-MM-yyyy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](36, 11, ctx.exam.timestamp, "hh:mm:ss"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.getQuestions().length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.numberOfCorrectAnswers());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.exam.numberOfIncorrectAnswers());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.exam.getScore(), "%");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: ["h3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.single-entry-item[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.entries[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  display: inline-block;\n}\n\n.incorrect-entry[_ngcontent-%COMP%] {\n  color: var(--invalid-color);\n}\n\n.stats[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.stats[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.stats[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY29yZS1zaGVldC9zY29yZS1zaGVldC9zY29yZS1zaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5zaW5nbGUtZW50cnktaXRlbSB7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLmVudHJpZXMge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmluY29ycmVjdC1lbnRyeSB7XG4gIGNvbG9yOiB2YXIoLS1pbnZhbGlkLWNvbG9yKTtcbn1cblxuLnN0YXRzID4gbGkgaDQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdGF0cyA+IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnN0YXRzID4gbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6577:
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/settings/settings.service */ 2304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function SettingsComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const retryOption_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", retryOption_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", retryOption_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultSelected", ctx_r0.currentSettings.examSettings.retry === retryOption_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", retryOption_r5, " ");
  }
}
function SettingsComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repeatOption_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", repeatOption_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", repeatOption_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultSelected", ctx_r1.currentSettings.examSettings.repeat === repeatOption_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", repeatOption_r6, " ");
  }
}
function SettingsComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const themeOption_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", themeOption_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", themeOption_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultSelected", ctx_r2.currentSettings.visualSettings.theme === themeOption_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, themeOption_r7), " ");
  }
}
function SettingsComponent_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fontOption_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", fontOption_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", fontOption_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultSelected", ctx_r3.currentSettings.visualSettings.font === fontOption_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, fontOption_r8), " ");
  }
}
function SettingsComponent_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fontSizeOption_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", fontSizeOption_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", fontSizeOption_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultSelected", ctx_r4.currentSettings.visualSettings.fontSize === fontSizeOption_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, fontSizeOption_r9), " ");
  }
}
class SettingsComponent {
  constructor(settingsService) {
    this.settingsService = settingsService;
    this.currentSettings = this.settingsService.getSettings();
    this.examOptions = this.settingsService.getExamOptions();
    this.visualOptions = this.settingsService.getVisualOptions();
    this.generalOptions = this.settingsService.getGeneralOptions();
  }
  ngOnInit() {}
  updateSettings() {
    this.settingsService.updateSettings(this.currentSettings);
  }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings"]],
  decls: 73,
  vars: 11,
  consts: [["id", "settings"], [1, "column"], [1, "content"], [3, "ngSubmit"], [1, "column", "two"], [1, "form-group"], ["for", "retry-select"], ["name", "retry", "id", "retry-select", 3, "ngModel", "ngModelChange"], [3, "value", "title", "defaultSelected", 4, "ngFor", "ngForOf"], ["for", "repeat-select"], ["name", "repeat", "id", "repeat-select", 3, "ngModel", "ngModelChange"], ["for", "color-selection"], ["name", "theme", "id", "color-selection", 3, "ngModel", "ngModelChange"], ["for", "font-preference"], ["name", "font", "id", "font-preference", 3, "ngModel", "ngModelChange"], ["for", "font-size"], ["name", "font-size", "id", "font-size", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "title", "Save local record of scores", "id", "history-record", "name", "record", 3, "ngModel", "ngModelChange"], ["for", "history-record"], ["type", "submit", 1, "btn", "btn-primary", "btn-main", "submit-confirmation"], [3, "value", "title", "defaultSelected"]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_6_listener() {
        return ctx.updateSettings();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 2)(9, "fieldset")(10, "legend")(11, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Exams");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Incorrect answers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Set your preference on handling incorrectly answered questions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5)(18, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Allowed retries per question");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " The amount of retries allowed before moving on to the next question ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_select_ngModelChange_22_listener($event) {
        return ctx.currentSettings.examSettings.retry = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SettingsComponent_option_23_Template, 2, 4, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5)(25, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Repeat incorrectly answered questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " By default, questions you answered incorrectly will be repeated again at the end of your exam until you answer them correctly. You may also choose to disable this. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_select_ngModelChange_29_listener($event) {
        return ctx.currentSettings.examSettings.repeat = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SettingsComponent_option_30_Template, 2, 4, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4)(32, "div", 2)(33, "fieldset")(34, "legend")(35, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Visual preference");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Theme");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_select_ngModelChange_41_listener($event) {
        return ctx.currentSettings.visualSettings.theme = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, SettingsComponent_option_42_Template, 3, 6, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Text preference");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5)(46, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Font style");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_select_ngModelChange_48_listener($event) {
        return ctx.currentSettings.visualSettings.font = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, SettingsComponent_option_49_Template, 3, 6, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5)(51, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Font size");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_select_ngModelChange_53_listener($event) {
        return ctx.currentSettings.visualSettings.fontSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, SettingsComponent_option_54_Template, 3, 6, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 1)(56, "div", 4)(57, "div", 2)(58, "fieldset")(59, "legend")(60, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "General");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Score history");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 5)(65, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_65_listener($event) {
        return ctx.currentSettings.generalSettings.record = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Keep a local record of your scores");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 1)(69, "div", 4)(70, "div", 2)(71, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currentSettings.examSettings.retry);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.examOptions.retry);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currentSettings.examSettings.repeat);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.examOptions.repeat);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currentSettings.visualSettings.theme);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.visualOptions.theme);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currentSettings.visualSettings.font);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.visualOptions.font);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currentSettings.visualSettings.fontSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.visualOptions.fontSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currentSettings.generalSettings.record);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe],
  styles: ["input[type=checkbox][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[type=submit].btn.btn-primary.btn-main[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBOztFQUVFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPSdjaGVja2JveCddLFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG59XG5cbmlucHV0W3R5cGU9J3RleHQnXSxcbnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b25bdHlwZT0nc3VibWl0J10uYnRuLmJ0bi1wcmltYXJ5LmJ0bi1tYWluIHtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8738:
/*!******************************************!*\
  !*** ./src/app/model/exam/exam.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exam": () => (/* binding */ Exam)
/* harmony export */ });
const PENALTY_WEIGHT = 5;
class Exam {
  constructor(dataSet, settings, title, timestamp, questionnaire) {
    this.currentQuestionIndex = 0;
    this.dataSet = dataSet;
    this.settings = settings;
    this.title = title;
    if (timestamp) {
      this.timestamp = timestamp;
    } else {
      this.timestamp = Date.now().toString(10);
    }
    if (questionnaire) {
      this.questionnaire = questionnaire;
    } else {
      this.initializeQuestionnaire();
    }
  }
  currentQuestionNumber() {
    return this.currentQuestionIndex + 1;
  }
  numberOfCorrectAnswers() {
    let correct = 0;
    this.questionnaire.forEach(examEntry => {
      examEntry.givenAnswers.forEach(givenAnswer => {
        correct += givenAnswer.valid.filter(valid => valid).length;
      });
    });
    return correct;
  }
  numberOfIncorrectAnswers() {
    let numIncorrect = 0;
    this.questionnaire.forEach(examEntry => {
      examEntry.givenAnswers.forEach(givenAnswer => {
        numIncorrect += givenAnswer.valid.filter(valid => !valid).length;
      });
    });
    return numIncorrect;
  }
  getQuestions(validOnly) {
    let answers;
    if (validOnly === true) {
      answers = this.questionnaire.filter(entry => entry.givenAnswers.filter(givenAnswer => givenAnswer.valid).length);
    } else if (validOnly === false) {
      answers = this.questionnaire.filter(entry => !entry.givenAnswers.filter(givenAnswer => givenAnswer.valid).length);
    } else {
      answers = this.questionnaire;
    }
    return answers;
  }
  getScore() {
    const baseScore = 100 - this.getQuestions(false).length / this.getQuestions().length * 100;
    const penalty = this.numberOfIncorrectAnswers() / this.numberOfCorrectAnswers() * 100;
    return Math.round(baseScore - penalty / PENALTY_WEIGHT);
  }
  incrementQuestion() {
    this.currentQuestionIndex++;
  }
  isLastQuestion() {
    return this.currentQuestionIndex === this.questionnaire.length - 1;
  }
  getQuestion() {
    return this.questionnaire[this.currentQuestionIndex];
  }
  answerIsCorrect(answer) {
    const givenAnswers = answer.toLowerCase().replace(/ /g, '').split(',');
    if (givenAnswers.length > this.questionnaire[this.currentQuestionIndex].answers.length) {
      return [false];
    }
    return givenAnswers.map(givenAnswer => this.questionnaire[this.currentQuestionIndex].answers.includes(givenAnswer));
  }
  appendQuestion(question) {
    const repeatedQuestion = Object.assign({}, question);
    repeatedQuestion.givenAnswers = [];
    this.questionnaire.push(repeatedQuestion);
  }
  initializeQuestionnaire() {
    this.questionnaire = this.dataSet.map(this.createQuestion.bind(this));
    this.shuffleOrder(this.questionnaire);
  }
  createQuestion(dataEntry) {
    const question = {
      givenAnswers: []
    };
    switch (this.settings.method) {
      // Hiragana exams
      case 'Hiragana to romaji':
        return Object.assign(question, {
          question: dataEntry[dataEntry.dataSet],
          answers: dataEntry.romaji.kun,
          placeholder: 'Romaji',
          dataSet: dataEntry.dataSet
        });
      case 'Romaji to hiragana':
        return Object.assign(question, {
          question: dataEntry.romaji.kun.join(', '),
          answers: dataEntry.kana.kun,
          placeholder: 'Hiragana',
          dataSet: dataEntry.dataSet
        });
      // TODO: add mixed hiragana
      case 'Katakana to romaji':
        return Object.assign(question, {
          question: dataEntry[dataEntry.dataSet],
          answers: dataEntry.romaji.on,
          placeholder: 'Romaji',
          dataSet: dataEntry.dataSet
        });
      case 'Romaji to katakana':
        return Object.assign(question, {
          question: dataEntry.romaji.on.join(', '),
          answers: dataEntry.kana.on,
          placeholder: 'Katakana',
          dataSet: dataEntry.dataSet
        });
      // TODO: add mixed katakana
      case 'Romaji to kanji':
        return Object.assign(question, {
          question: dataEntry.romaji.kun.join(', '),
          answers: dataEntry.kanji,
          placeholder: 'Kanji',
          dataSet: dataEntry.dataSet,
          hint: dataEntry.english.join(', ')
        });
      // TODO: now only tested on kunyomi which is probably undesirable
      case 'Kanji to romaji':
        return Object.assign(question, {
          question: dataEntry.kanji.join(', '),
          answers: dataEntry.romaji.kun,
          placeholder: 'Kunyomi',
          dataSet: dataEntry.dataSet,
          hint: dataEntry.english.join(', ')
        });
      case 'Kanji to kana - kunyomi':
        return Object.assign(question, {
          question: dataEntry.kanji[0],
          answers: dataEntry.kana.kun,
          placeholder: 'Kunyomi',
          dataSet: dataEntry.dataSet
          // hint: dataEntry.english.join(', ')
        });

      case 'Kanji to kana - onyomi':
        return Object.assign(question, {
          question: dataEntry.kanji[0],
          answers: dataEntry.kana.on,
          placeholder: 'Onyomi',
          dataSet: dataEntry.dataSet
          // hint: dataEntry.english.join(', ')
        });

      case 'Kana to kanji - kunyomi':
        return Object.assign(question, {
          question: dataEntry.kana.kun.join(', '),
          answers: dataEntry.kanji,
          placeholder: 'Kanji',
          dataSet: dataEntry.dataSet
          // hint: dataEntry.english.join(', ')
        });

      case 'Kana to kanji - onyomi':
        return Object.assign(question, {
          question: dataEntry.kana.on.join(', '),
          answers: dataEntry.kanji,
          placeholder: 'Kanji',
          dataSet: dataEntry.dataSet
          // hint: dataEntry.english.join(', ')
        });

      case 'Kanji to English':
        return Object.assign(question, {
          question: dataEntry.kanji[0],
          answers: dataEntry.english,
          placeholder: 'Translation',
          dataSet: dataEntry.dataSet
        });
      case 'English to kanji':
        return Object.assign(question, {
          question: dataEntry.english.join(', '),
          answers: dataEntry.kanji,
          placeholder: 'Kanji',
          dataSet: dataEntry.dataSet
        });
      // TODO: add shuffle all
      // TODO: add shuffle kanji & romaji
    }
  }

  shuffleOrder(questionnaire) {
    for (let i = questionnaire.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * i);
      const shuffledQuestionnaire = questionnaire[i];
      questionnaire[i] = questionnaire[random];
      questionnaire[random] = shuffledQuestionnaire;
    }
  }
}

/***/ }),

/***/ 7453:
/*!******************************************!*\
  !*** ./src/app/model/user/user.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
  constructor(username) {
    this.username = username;
  }
}

/***/ }),

/***/ 5528:
/*!********************************!*\
  !*** ./src/app/route-guard.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamRouteGuard": () => (/* binding */ ExamRouteGuard),
/* harmony export */   "LoggedInRouteGuard": () => (/* binding */ LoggedInRouteGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_exam_exam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/exam/exam.service */ 4149);




class LoggedInRouteGuard {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
  }
  canActivate() {
    const isLoggedIn = this.userService.getCurrentUser() !== undefined;
    if (!isLoggedIn) {
      this.router.navigate(['login']);
    } else {
      return true;
    }
  }
}
LoggedInRouteGuard.ɵfac = function LoggedInRouteGuard_Factory(t) {
  return new (t || LoggedInRouteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
LoggedInRouteGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoggedInRouteGuard,
  factory: LoggedInRouteGuard.ɵfac
});
class ExamRouteGuard {
  constructor(examService, router) {
    this.examService = examService;
    this.router = router;
  }
  canActivate() {
    const examExists = this.examService.getExam() !== undefined;
    if (!examExists) {
      this.router.navigate(['lobby']);
    } else {
      return true;
    }
  }
}
ExamRouteGuard.ɵfac = function ExamRouteGuard_Factory(t) {
  return new (t || ExamRouteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_exam_exam_service__WEBPACK_IMPORTED_MODULE_1__.ExamService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
ExamRouteGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ExamRouteGuard,
  factory: ExamRouteGuard.ɵfac
});

/***/ }),

/***/ 5530:
/*!******************************************************!*\
  !*** ./src/app/services/dataset/data-set.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSetService": () => (/* binding */ DataSetService)
/* harmony export */ });
/* harmony import */ var _datasets_available_exams_available_exams_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../datasets/available-exams/available-exams.json */ 9424);
/* harmony import */ var _datasets_kana_hiragana_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../datasets/kana/hiragana.json */ 6570);
/* harmony import */ var _datasets_kana_katakana_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../datasets/kana/katakana.json */ 7229);
/* harmony import */ var _datasets_kanji_kanjiN5_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../datasets/kanji/kanjiN5.json */ 2597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class DataSetService {
  constructor() {}
  getAvailableExams() {
    return _datasets_available_exams_available_exams_json__WEBPACK_IMPORTED_MODULE_0__;
  }
  getDataSet(name) {
    let dataSet;
    switch (name) {
      case DATA_SET_NAME.HIRAGANA:
        dataSet = _datasets_kana_hiragana_json__WEBPACK_IMPORTED_MODULE_1__;
        break;
      case DATA_SET_NAME.KATAKANA:
        dataSet = _datasets_kana_katakana_json__WEBPACK_IMPORTED_MODULE_2__;
        break;
      case DATA_SET_NAME.KANJIN5:
        dataSet = _datasets_kanji_kanjiN5_json__WEBPACK_IMPORTED_MODULE_3__;
        break;
    }
    return dataSet.map(dataEntry => Object.assign(Object.assign({}, dataEntry), {
      dataSet: name
    }));
  }
}
DataSetService.ɵfac = function DataSetService_Factory(t) {
  return new (t || DataSetService)();
};
DataSetService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: DataSetService,
  factory: DataSetService.ɵfac,
  providedIn: 'root'
});
var DATA_SET_NAME;
(function (DATA_SET_NAME) {
  DATA_SET_NAME["HIRAGANA"] = "hiragana";
  DATA_SET_NAME["KATAKANA"] = "katakana";
  DATA_SET_NAME["KANJIN5"] = "kanjiN5";
})(DATA_SET_NAME || (DATA_SET_NAME = {}));

/***/ }),

/***/ 4149:
/*!***********************************************!*\
  !*** ./src/app/services/exam/exam.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamService": () => (/* binding */ ExamService)
/* harmony export */ });
/* harmony import */ var _model_exam_exam_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/exam/exam.model */ 8738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _dataset_data_set_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataset/data-set.service */ 5530);



class ExamService {
  constructor(datasetService) {
    this.datasetService = datasetService;
    this.retrieveExamRecords();
  }
  createExam(selectedExam, settings) {
    const dataSet = [];
    for (const dataSetName of selectedExam.dataSets) {
      dataSet.push(...this.datasetService.getDataSet(dataSetName));
    }
    this.currentExam = new _model_exam_exam_model__WEBPACK_IMPORTED_MODULE_0__.Exam(dataSet, settings, selectedExam.title);
  }
  getExam(timestamp) {
    if (timestamp) {
      return this.previousExams.find(exam => exam.timestamp === timestamp);
    } else {
      return this.currentExam;
    }
  }
  getExams() {
    return this.previousExams;
  }
  saveExam(exam) {
    this.previousExams.push(exam);
    localStorage.setItem('ktb-exam-record', JSON.stringify(this.previousExams));
  }
  retrieveExamRecords() {
    const examRecords = JSON.parse(localStorage.getItem('ktb-exam-record')) || [];
    this.previousExams = examRecords.map(({
      dataSet,
      settings,
      title,
      timestamp,
      questionnaire
    }) => new _model_exam_exam_model__WEBPACK_IMPORTED_MODULE_0__.Exam(dataSet, settings, title, timestamp, questionnaire)) || [];
  }
}
ExamService.ɵfac = function ExamService_Factory(t) {
  return new (t || ExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dataset_data_set_service__WEBPACK_IMPORTED_MODULE_1__.DataSetService));
};
ExamService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ExamService,
  factory: ExamService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2304:
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SettingsService {
  constructor() {
    this.retrieveStoredSettings();
  }
  retrieveStoredSettings() {
    const settings = JSON.parse(localStorage.getItem('ktb-settings'));
    if (settings) {
      this.settings = settings;
    } else {
      this.settings = {
        examSettings: {
          retry: 'Twice',
          repeat: 'Repeat until answered correctly'
        },
        generalSettings: {
          record: true
        },
        visualSettings: {
          theme: 'dark-theme',
          font: 'helvetica',
          fontSize: 'normal'
        }
      };
      this.updateSettings(this.settings);
    }
  }
  getSettings() {
    return this.settings;
  }
  updateSettings(settings) {
    Object.assign(this.settings, settings);
    localStorage.setItem('ktb-settings', JSON.stringify(this.settings));
  }
  getExamOptions() {
    return {
      retry: ['None', 'Once', 'Twice', 'Infinite retries'],
      repeat: ['Repeat until answered correctly', 'Never repeat']
    };
  }
  getVisualOptions() {
    return {
      theme: ['dark-theme', 'light-theme'],
      font: ['helvetica', 'montserrat', 'comfortaa'],
      fontSize: ['normal', 'large', 'xl']
    };
  }
  getGeneralOptions() {
    return {
      record: [true, false]
    };
  }
}
SettingsService.ɵfac = function SettingsService_Factory(t) {
  return new (t || SettingsService)();
};
SettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SettingsService,
  factory: SettingsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9709:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _model_user_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/user/user.model */ 7453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class UserService {
  constructor() {
    this.retrieveCurrentUser();
  }
  retrieveCurrentUser() {
    const username = localStorage.getItem('ktb-username');
    if (username) {
      this.currentUser = new _model_user_user_model__WEBPACK_IMPORTED_MODULE_0__.User(username);
    }
  }
  getCurrentUser() {
    return this.currentUser;
  }
  setCurrentUser(username) {
    this.currentUser = new _model_user_user_model__WEBPACK_IMPORTED_MODULE_0__.User(username);
  }
}
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)();
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 9424:
/*!***********************************************************!*\
  !*** ./src/datasets/available-exams/available-exams.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":0,"category":"kana","title":"Hiragana","description":"Test your hiragana knowledge","dataSets":["hiragana"],"methods":["Romaji to hiragana","Hiragana to romaji","Shuffle"]},{"id":1,"category":"kana","title":"Katakana","description":"Test your katakana knowledge","dataSets":["katakana"],"methods":["Romaji to katakana","Katakana to romaji","Shuffle"]},{"id":2,"category":"kana","title":"All kana","description":"Test your kana knowledge by mixing katakana and hiragana","dataSets":["hiragana","katakana"],"methods":["Romaji to kana","Kana to romaji","Shuffle"]},{"id":3,"category":"kanji","title":"Kanji N5","description":"Kanji N5","dataSets":["kanjiN5"],"methods":["Kanji to romaji","Romaji to kanji","Kanji to English","English to kanji","Kanji to kana - kunyomi","Kanji to kana - onyomi","Kana to kanji - kunyomi","Kana to kanji - onyomi","Shuffle kanji & romaji","Shuffle all"]},{"id":4,"category":"kanji","title":"Kanji N4","description":"Kanji N4","dataSets":[],"methods":["Kanji to romaji","Romaji to kanji","Kanji to English","English to kanji","Kanji to kana - kunyomi","Kanji to kana - onyomi","Kana to kanji - kunyomi","Kana to kanji - onyomi","Shuffle kanji & romaji","Shuffle all"]},{"id":5,"category":"kanji","title":"Kanji N3","description":"Kanji N3","dataSets":[],"methods":["Kanji to romaji","Romaji to kanji","Kanji to English","English to kanji","Kanji to kana - kunyomi","Kanji to kana - onyomi","Kana to kanji - kunyomi","Kana to kanji - onyomi","Shuffle kanji & romaji","Shuffle all"]},{"id":6,"category":"kanji","title":"Kanji N2","description":"Kanji N2","dataSets":[],"methods":["Kanji to romaji","Romaji to kanji","Kanji to English","English to kanji","Kanji to kana - kunyomi","Kanji to kana - onyomi","Kana to kanji - kunyomi","Kana to kanji - onyomi","Shuffle kanji & romaji","Shuffle all"]},{"id":7,"category":"kanji","title":"Kanji N1","description":"Kanji N1","dataSets":[],"methods":["Kanji to romaji","Romaji to kanji","Kanji to English","English to kanji","Kanji to kana - kunyomi","Kanji to kana - onyomi","Kana to kanji - kunyomi","Kana to kanji - onyomi","Shuffle kanji & romaji","Shuffle all"]},{"id":8,"category":"kanji","title":"All kanji","description":"Kanji N5 to N1","dataSets":[],"methods":["Kanji to romaji","Romaji to kanji","Kanji to English","English to kanji","Kanji to kana - kunyomi","Kanji to kana - onyomi","Kana to kanji - kunyomi","Kana to kanji - onyomi","Shuffle kanji & romaji","Shuffle all"]}]');

/***/ }),

/***/ 6570:
/*!*****************************************!*\
  !*** ./src/datasets/kana/hiragana.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"hiragana":"あ","romaji":{"kun":["a"]},"kana":{"kun":["あ"]}},{"hiragana":"い","romaji":{"kun":["i"]},"kana":{"kun":["い"]}},{"hiragana":"う","romaji":{"kun":["u"]},"kana":{"kun":["う"]}},{"hiragana":"え","romaji":{"kun":["e"]},"kana":{"kun":["え"]}},{"hiragana":"お","romaji":{"kun":["o"]},"kana":{"kun":["お"]}},{"hiragana":"か","romaji":{"kun":["ka"]},"kana":{"kun":["か"]}},{"hiragana":"き","romaji":{"kun":["ki"]},"kana":{"kun":["き"]}},{"hiragana":"く","romaji":{"kun":["ku"]},"kana":{"kun":["く"]}},{"hiragana":"け","romaji":{"kun":["ke"]},"kana":{"kun":["け"]}},{"hiragana":"こ","romaji":{"kun":["ko"]},"kana":{"kun":["こ"]}},{"hiragana":"さ","romaji":{"kun":["sa"]},"kana":{"kun":["さ"]}},{"hiragana":"し","romaji":{"kun":["shi"]},"kana":{"kun":["し"]}},{"hiragana":"す","romaji":{"kun":["su"]},"kana":{"kun":["す"]}},{"hiragana":"せ","romaji":{"kun":["se"]},"kana":{"kun":["せ"]}},{"hiragana":"そ","romaji":{"kun":["so"]},"kana":{"kun":["そ"]}},{"hiragana":"た","romaji":{"kun":["ta"]},"kana":{"kun":["た"]}},{"hiragana":"ち","romaji":{"kun":["chi"]},"kana":{"kun":["ち"]}},{"hiragana":"つ","romaji":{"kun":["tsu"]},"kana":{"kun":["つ"]}},{"hiragana":"て","romaji":{"kun":["te"]},"kana":{"kun":["て"]}},{"hiragana":"と","romaji":{"kun":["to"]},"kana":{"kun":["と"]}},{"hiragana":"な","romaji":{"kun":["na"]},"kana":{"kun":["な"]}},{"hiragana":"に","romaji":{"kun":["ni"]},"kana":{"kun":["に"]}},{"hiragana":"ぬ","romaji":{"kun":["nu"]},"kana":{"kun":["ぬ"]}},{"hiragana":"ね","romaji":{"kun":["ne"]},"kana":{"kun":["ね"]}},{"hiragana":"の","romaji":{"kun":["no"]},"kana":{"kun":["の"]}},{"hiragana":"は","romaji":{"kun":["ha"]},"kana":{"kun":["は"]}},{"hiragana":"ひ","romaji":{"kun":["hi"]},"kana":{"kun":["ひ"]}},{"hiragana":"ふ","romaji":{"kun":["fu"]},"kana":{"kun":["ふ"]}},{"hiragana":"へ","romaji":{"kun":["he"]},"kana":{"kun":["へ"]}},{"hiragana":"ほ","romaji":{"kun":["ho"]},"kana":{"kun":["ほ"]}},{"hiragana":"ま","romaji":{"kun":["ma"]},"kana":{"kun":["ま"]}},{"hiragana":"み","romaji":{"kun":["mi"]},"kana":{"kun":["み"]}},{"hiragana":"む","romaji":{"kun":["mu"]},"kana":{"kun":["む"]}},{"hiragana":"め","romaji":{"kun":["me"]},"kana":{"kun":["め"]}},{"hiragana":"も","romaji":{"kun":["mo"]},"kana":{"kun":["も"]}},{"hiragana":"や","romaji":{"kun":["ya"]},"kana":{"kun":["や"]}},{"hiragana":"ゆ","romaji":{"kun":["yu"]},"kana":{"kun":["ゆ"]}},{"hiragana":"よ","romaji":{"kun":["yo"]},"kana":{"kun":["よ"]}},{"hiragana":"ら","romaji":{"kun":["ra"]},"kana":{"kun":["ら"]}},{"hiragana":"り","romaji":{"kun":["ri"]},"kana":{"kun":["り"]}},{"hiragana":"る","romaji":{"kun":["ru"]},"kana":{"kun":["る"]}},{"hiragana":"れ","romaji":{"kun":["re"]},"kana":{"kun":["れ"]}},{"hiragana":"ろ","romaji":{"kun":["ro"]},"kana":{"kun":["ろ"]}},{"hiragana":"わ","romaji":{"kun":["wa"]},"kana":{"kun":["わ"]}},{"hiragana":"を","romaji":{"kun":["wo"]},"kana":{"kun":["を"]}},{"hiragana":"ん","romaji":{"kun":["n"]},"kana":{"kun":["ん"]}},{"hiragana":"が","romaji":{"kun":["ga"]},"kana":{"kun":["が"]}},{"hiragana":"ぎ","romaji":{"kun":["gi"]},"kana":{"kun":["ぎ"]}},{"hiragana":"ぐ","romaji":{"kun":["gu"]},"kana":{"kun":["ぐ"]}},{"hiragana":"げ","romaji":{"kun":["ge"]},"kana":{"kun":["げ"]}},{"hiragana":"ご","romaji":{"kun":["go"]},"kana":{"kun":["ご"]}},{"hiragana":"ざ","romaji":{"kun":["za"]},"kana":{"kun":["ざ"]}},{"hiragana":"じ","romaji":{"kun":["ji"]},"kana":{"kun":["じ"]}},{"hiragana":"ず","romaji":{"kun":["zu"]},"kana":{"kun":["ず"]}},{"hiragana":"ぜ","romaji":{"kun":["ze"]},"kana":{"kun":["ぜ"]}},{"hiragana":"ぞ","romaji":{"kun":["zo"]},"kana":{"kun":["ぞ"]}},{"hiragana":"だ","romaji":{"kun":["da"]},"kana":{"kun":["だ"]}},{"hiragana":"ぢ","romaji":{"kun":["ji"]},"kana":{"kun":["ぢ"]}},{"hiragana":"づ","romaji":{"kun":["zu"]},"kana":{"kun":["づ"]}},{"hiragana":"で","romaji":{"kun":["de"]},"kana":{"kun":["で"]}},{"hiragana":"ど","romaji":{"kun":["do"]},"kana":{"kun":["ど"]}},{"hiragana":"ば","romaji":{"kun":["ba"]},"kana":{"kun":["ば"]}},{"hiragana":"び","romaji":{"kun":["bi"]},"kana":{"kun":["び"]}},{"hiragana":"ぶ","romaji":{"kun":["bu"]},"kana":{"kun":["ぶ"]}},{"hiragana":"べ","romaji":{"kun":["be"]},"kana":{"kun":["べ"]}},{"hiragana":"ぼ","romaji":{"kun":["bo"]},"kana":{"kun":["ぼ"]}},{"hiragana":"ぱ","romaji":{"kun":["pa"]},"kana":{"kun":["ぱ"]}},{"hiragana":"ぴ","romaji":{"kun":["pi"]},"kana":{"kun":["ぴ"]}},{"hiragana":"ぷ","romaji":{"kun":["pu"]},"kana":{"kun":["ぷ"]}},{"hiragana":"ぺ","romaji":{"kun":["pe"]},"kana":{"kun":["ぺ"]}},{"hiragana":"ぽ","romaji":{"kun":["po"]},"kana":{"kun":["ぽ"]}},{"hiragana":"きゃ","romaji":{"kun":["kya"]},"kana":{"kun":["きゃ"]}},{"hiragana":"きゅ","romaji":{"kun":["kyu"]},"kana":{"kun":["きゅ"]}},{"hiragana":"きょ","romaji":{"kun":["kyo"]},"kana":{"kun":["きょ"]}},{"hiragana":"しゃ","romaji":{"kun":["sha"]},"kana":{"kun":["しゃ"]}},{"hiragana":"しゅ","romaji":{"kun":["shu"]},"kana":{"kun":["しゅ"]}},{"hiragana":"しょ","romaji":{"kun":["sho"]},"kana":{"kun":["しょ"]}},{"hiragana":"ちゃ","romaji":{"kun":["cha"]},"kana":{"kun":["ちゃ"]}},{"hiragana":"ちゅ","romaji":{"kun":["chu"]},"kana":{"kun":["ちゅ"]}},{"hiragana":"ちょ","romaji":{"kun":["cho"]},"kana":{"kun":["ちょ"]}},{"hiragana":"にゃ","romaji":{"kun":["nya"]},"kana":{"kun":["にゃ"]}},{"hiragana":"にゅ","romaji":{"kun":["nyu"]},"kana":{"kun":["にゅ"]}},{"hiragana":"にょ","romaji":{"kun":["nyo"]},"kana":{"kun":["にょ"]}},{"hiragana":"ひゃ","romaji":{"kun":["hya"]},"kana":{"kun":["ひゃ"]}},{"hiragana":"ひゅ","romaji":{"kun":["hyu"]},"kana":{"kun":["ひゅ"]}},{"hiragana":"ひょ","romaji":{"kun":["hyo"]},"kana":{"kun":["ひょ"]}},{"hiragana":"みゃ","romaji":{"kun":["mya"]},"kana":{"kun":["みゃ"]}},{"hiragana":"みゅ","romaji":{"kun":["myu"]},"kana":{"kun":["みゅ"]}},{"hiragana":"みょ","romaji":{"kun":["myo"]},"kana":{"kun":["みょ"]}},{"hiragana":"りゃ","romaji":{"kun":["rya"]},"kana":{"kun":["りゃ"]}},{"hiragana":"りゅ","romaji":{"kun":["ryu"]},"kana":{"kun":["りゅ"]}},{"hiragana":"りょ","romaji":{"kun":["ryo"]},"kana":{"kun":["りょ"]}},{"hiragana":"ぎゃ","romaji":{"kun":["gya"]},"kana":{"kun":["ぎゃ"]}},{"hiragana":"ぎゅ","romaji":{"kun":["gyu"]},"kana":{"kun":["ぎゅ"]}},{"hiragana":"ぎょ","romaji":{"kun":["gyo"]},"kana":{"kun":["ぎょ"]}},{"hiragana":"じゃ","romaji":{"kun":["ja"]},"kana":{"kun":["じゃ"]}},{"hiragana":"じゅ","romaji":{"kun":["ju"]},"kana":{"kun":["じゅ"]}},{"hiragana":"じょ","romaji":{"kun":["jo"]},"kana":{"kun":["じょ"]}},{"hiragana":"びゃ","romaji":{"kun":["bya"]},"kana":{"kun":["びゃ"]}},{"hiragana":"びゅ","romaji":{"kun":["byu"]},"kana":{"kun":["びゅ"]}},{"hiragana":"びょ","romaji":{"kun":["byo"]},"kana":{"kun":["びょ"]}},{"hiragana":"ぴゃ","romaji":{"kun":["pya"]},"kana":{"kun":["ぴゃ"]}},{"hiragana":"ぴゅ","romaji":{"kun":["pyu"]},"kana":{"kun":["ぴゅ"]}},{"hiragana":"ぴょ","romaji":{"kun":["pyo"]},"kana":{"kun":["ぴょ"]}}]');

/***/ }),

/***/ 7229:
/*!*****************************************!*\
  !*** ./src/datasets/kana/katakana.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"katakana":"ア","romaji":{"on":["a"]},"kana":{"on":["ア"]}},{"katakana":"イ","romaji":{"on":["i"]},"kana":{"on":["イ"]}},{"katakana":"ウ","romaji":{"on":["u"]},"kana":{"on":["ウ"]}},{"katakana":"エ","romaji":{"on":["e"]},"kana":{"on":["エ"]}},{"katakana":"オ","romaji":{"on":["o"]},"kana":{"on":["オ"]}},{"katakana":"カ","romaji":{"on":["ka"]},"kana":{"on":["カ"]}},{"katakana":"キ","romaji":{"on":["ki"]},"kana":{"on":["キ"]}},{"katakana":"ク","romaji":{"on":["ku"]},"kana":{"on":["ク"]}},{"katakana":"ケ","romaji":{"on":["ke"]},"kana":{"on":["ケ"]}},{"katakana":"コ","romaji":{"on":["ko"]},"kana":{"on":["コ"]}},{"katakana":"サ","romaji":{"on":["sa"]},"kana":{"on":["サ"]}},{"katakana":"シ","romaji":{"on":["shi"]},"kana":{"on":["シ"]}},{"katakana":"ス","romaji":{"on":["su"]},"kana":{"on":["ス"]}},{"katakana":"セ","romaji":{"on":["se"]},"kana":{"on":["セ"]}},{"katakana":"ソ","romaji":{"on":["so"]},"kana":{"on":["ソ"]}},{"katakana":"タ","romaji":{"on":["ta"]},"kana":{"on":["タ"]}},{"katakana":"チ","romaji":{"on":["chi"]},"kana":{"on":["チ"]}},{"katakana":"ツ","romaji":{"on":["tsu"]},"kana":{"on":["ツ"]}},{"katakana":"テ","romaji":{"on":["te"]},"kana":{"on":["テ"]}},{"katakana":"ト","romaji":{"on":["to"]},"kana":{"on":["ト"]}},{"katakana":"ナ","romaji":{"on":["na"]},"kana":{"on":["ナ"]}},{"katakana":"ニ","romaji":{"on":["ni"]},"kana":{"on":["ニ"]}},{"katakana":"ヌ","romaji":{"on":["nu"]},"kana":{"on":["ヌ"]}},{"katakana":"ネ","romaji":{"on":["ne"]},"kana":{"on":["ネ"]}},{"katakana":"ノ","romaji":{"on":["no"]},"kana":{"on":["ノ"]}},{"katakana":"ハ","romaji":{"on":["ha"]},"kana":{"on":["ハ"]}},{"katakana":"ヒ","romaji":{"on":["hi"]},"kana":{"on":["ヒ"]}},{"katakana":"フ","romaji":{"on":["fu"]},"kana":{"on":["フ"]}},{"katakana":"ヘ","romaji":{"on":["he"]},"kana":{"on":["ヘ"]}},{"katakana":"ホ","romaji":{"on":["ho"]},"kana":{"on":["ホ"]}},{"katakana":"マ","romaji":{"on":["ma"]},"kana":{"on":["マ"]}},{"katakana":"ミ","romaji":{"on":["mi"]},"kana":{"on":["ミ"]}},{"katakana":"ム","romaji":{"on":["mu"]},"kana":{"on":["ム"]}},{"katakana":"メ","romaji":{"on":["me"]},"kana":{"on":["メ"]}},{"katakana":"モ","romaji":{"on":["mo"]},"kana":{"on":["モ"]}},{"katakana":"ヤ","romaji":{"on":["ya"]},"kana":{"on":["ヤ"]}},{"katakana":"ユ","romaji":{"on":["yu"]},"kana":{"on":["ユ"]}},{"katakana":"ヨ","romaji":{"on":["yo"]},"kana":{"on":["ヨ"]}},{"katakana":"ラ","romaji":{"on":["ra"]},"kana":{"on":["ラ"]}},{"katakana":"リ","romaji":{"on":["ri"]},"kana":{"on":["リ"]}},{"katakana":"ル","romaji":{"on":["ru"]},"kana":{"on":["ル"]}},{"katakana":"レ","romaji":{"on":["re"]},"kana":{"on":["レ"]}},{"katakana":"ロ","romaji":{"on":["ro"]},"kana":{"on":["ロ"]}},{"katakana":"ワ","romaji":{"on":["wa"]},"kana":{"on":["ワ"]}},{"katakana":"ヲ","romaji":{"on":["wo"]},"kana":{"on":["ヲ"]}},{"katakana":"ン","romaji":{"on":["n"]},"kana":{"on":["ン"]}},{"katakana":"ガ","romaji":{"on":["ga"]},"kana":{"on":["ガ"]}},{"katakana":"ギ","romaji":{"on":["gi"]},"kana":{"on":["ギ"]}},{"katakana":"グ","romaji":{"on":["gu"]},"kana":{"on":["グ"]}},{"katakana":"ゲ","romaji":{"on":["ge"]},"kana":{"on":["ゲ"]}},{"katakana":"ゴ","romaji":{"on":["go"]},"kana":{"on":["ゴ"]}},{"katakana":"ザ","romaji":{"on":["za"]},"kana":{"on":["ザ"]}},{"katakana":"ジ","romaji":{"on":["ji"]},"kana":{"on":["ジ"]}},{"katakana":"ズ","romaji":{"on":["zu"]},"kana":{"on":["ズ"]}},{"katakana":"ゼ","romaji":{"on":["ze"]},"kana":{"on":["ゼ"]}},{"katakana":"ゾ","romaji":{"on":["zo"]},"kana":{"on":["ゾ"]}},{"katakana":"ダ","romaji":{"on":["da"]},"kana":{"on":["ダ"]}},{"katakana":"ジ","romaji":{"on":["ji"]},"kana":{"on":["ジ"]}},{"katakana":"ズ","romaji":{"on":["zu"]},"kana":{"on":["ズ"]}},{"katakana":"デ","romaji":{"on":["de"]},"kana":{"on":["デ"]}},{"katakana":"ド","romaji":{"on":["do"]},"kana":{"on":["ド"]}},{"katakana":"バ","romaji":{"on":["ba"]},"kana":{"on":["バ"]}},{"katakana":"ビ","romaji":{"on":["bi"]},"kana":{"on":["ビ"]}},{"katakana":"ブ","romaji":{"on":["bu"]},"kana":{"on":["ブ"]}},{"katakana":"ベ","romaji":{"on":["be"]},"kana":{"on":["ベ"]}},{"katakana":"ボ","romaji":{"on":["bo"]},"kana":{"on":["ボ"]}},{"katakana":"パ","romaji":{"on":["pa"]},"kana":{"on":["パ"]}},{"katakana":"ピ","romaji":{"on":["pi"]},"kana":{"on":["ピ"]}},{"katakana":"プ","romaji":{"on":["pu"]},"kana":{"on":["プ"]}},{"katakana":"ペ","romaji":{"on":["pe"]},"kana":{"on":["ペ"]}},{"katakana":"ポ","romaji":{"on":["po"]},"kana":{"on":["ポ"]}},{"katakana":"キャ","romaji":{"on":["kya"]},"kana":{"on":["キャ"]}},{"katakana":"キュ","romaji":{"on":["kyu"]},"kana":{"on":["キュ"]}},{"katakana":"キョ","romaji":{"on":["kyo"]},"kana":{"on":["キョ"]}},{"katakana":"シャ","romaji":{"on":["sha"]},"kana":{"on":["シャ"]}},{"katakana":"シュ","romaji":{"on":["shu"]},"kana":{"on":["シュ"]}},{"katakana":"ショ","romaji":{"on":["sho"]},"kana":{"on":["ショ"]}},{"katakana":"チャ","romaji":{"on":["cha"]},"kana":{"on":["チャ"]}},{"katakana":"チュ","romaji":{"on":["chu"]},"kana":{"on":["チュ"]}},{"katakana":"チョ","romaji":{"on":["cho"]},"kana":{"on":["チョ"]}},{"katakana":"ニャ","romaji":{"on":["nya"]},"kana":{"on":["ニャ"]}},{"katakana":"ニュ","romaji":{"on":["nyu"]},"kana":{"on":["ニュ"]}},{"katakana":"ニョ","romaji":{"on":["nyo"]},"kana":{"on":["ニョ"]}},{"katakana":"ヒャ","romaji":{"on":["hya"]},"kana":{"on":["ヒャ"]}},{"katakana":"ヒュ","romaji":{"on":["hyu"]},"kana":{"on":["ヒュ"]}},{"katakana":"ヒョ","romaji":{"on":["hyo"]},"kana":{"on":["ヒョ"]}},{"katakana":"ミャ","romaji":{"on":["mya"]},"kana":{"on":["ミャ"]}},{"katakana":"ミュ","romaji":{"on":["myu"]},"kana":{"on":["ミュ"]}},{"katakana":"ミョ","romaji":{"on":["myo"]},"kana":{"on":["ミョ"]}},{"katakana":"リャ","romaji":{"on":["rya"]},"kana":{"on":["リャ"]}},{"katakana":"リュ","romaji":{"on":["ryu"]},"kana":{"on":["リュ"]}},{"katakana":"リョ","romaji":{"on":["ryo"]},"kana":{"on":["リョ"]}},{"katakana":"ギャ","romaji":{"on":["gya"]},"kana":{"on":["ギャ"]}},{"katakana":"ギュ","romaji":{"on":["gyu"]},"kana":{"on":["ギュ"]}},{"katakana":"ギョ","romaji":{"on":["gyo"]},"kana":{"on":["ギョ"]}},{"katakana":"ジャ","romaji":{"on":["ja"]},"kana":{"on":["ジャ"]}},{"katakana":"ジュ","romaji":{"on":["ju"]},"kana":{"on":["ジュ"]}},{"katakana":"ジョ","romaji":{"on":["jo"]},"kana":{"on":["ジョ"]}},{"katakana":"ビャ","romaji":{"on":["bya"]},"kana":{"on":["ビャ"]}},{"katakana":"ビュ","romaji":{"on":["byu"]},"kana":{"on":["ビュ"]}},{"katakana":"ビョ","romaji":{"on":["byo"]},"kana":{"on":["ビョ"]}},{"katakana":"ピャ","romaji":{"on":["pya"]},"kana":{"on":["ピャ"]}},{"katakana":"ピュ","romaji":{"on":["pyu"]},"kana":{"on":["ピュ"]}},{"katakana":"ピョ","romaji":{"on":["pyo"]},"kana":{"on":["ピョ"]}}]');

/***/ }),

/***/ 2597:
/*!*****************************************!*\
  !*** ./src/datasets/kanji/kanjiN5.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"kanji":["安","安い","安らか"],"romaji":{"kun":["yasu","yasui","yasuraka"],"on":["an"]},"kana":{"kun":["やす","やすい"],"on":["アン"]},"english":["cheap","peaceful","low","quiet","rested","contented","peaceful","relax"]},{"kanji":["一","一つ"],"romaji":{"kun":["hito","hitotsu"],"on":["ichi","itsu"]},"kana":{"kun":["ひと","ひとつ"],"on":["イチ","イツ"]},"english":["one"]},{"kanji":["飲","飲む"],"romaji":{"kun":["no","nomu"],"on":["in"]},"kana":{"kun":["の","のむ"],"on":["イン"]},"english":["drink"]},{"kanji":["右"],"romaji":{"kun":["migi"],"on":["u","yuu"]},"kana":{"kun":["みぎ"],"on":["ウ","ユウ"]},"english":["right"]},{"kanji":["雨"],"romaji":{"kun":["ame"],"on":["u"]},"kana":{"kun":["あめ"],"on":["ウ"]},"english":["rain"]},{"kanji":["駅"],"romaji":{"kun":[],"on":["eki"]},"kana":{"kun":[""],"on":["エキ"]},"english":["station"]},{"kanji":["円"],"romaji":{"kun":["maru","marui"],"on":["en"]},"kana":{"kun":["まる","まるい"],"on":["エン"]},"english":["yen","circle"]},{"kanji":["火"],"romaji":{"kun":["hi","ho"],"on":["ka"]},"kana":{"kun":["ひ","ほ"],"on":["カ"]},"english":["fire"]},{"kanji":["花"],"romaji":{"kun":["hana"],"on":["ka"]},"kana":{"kun":["はな"],"on":["カ"]},"english":["flower"]},{"kanji":["下","下る","下ろす","下げる"],"romaji":{"kun":["shita","shimo","moto","kudaru","orosu","sageru"],"on":["ka","ge"]},"kana":{"kun":["した","しも","もと","くだる","おろす","さげる"],"on":["カ","ゲ"]},"english":["down","under","lower"]},{"kanji":["何"],"romaji":{"kun":["nani","nan","nashi"],"on":["ka"]},"kana":{"kun":["なに","なし"],"on":["カ"]},"english":["what","how"]},{"kanji":["会","会う"],"romaji":{"kun":["a","au"],"on":["kai","e"]},"kana":{"kun":["あ","あう"],"on":["カイ","エ"]},"english":["meet","society"]},{"kanji":["外","外す"],"romaji":{"kun":["soto","hoka","hazu","hazusu"],"on":["gai","ge"]},"kana":{"kun":["そと","ほか","はず","はずす"],"on":["ガイ","ゲ"]},"english":["outside"]},{"kanji":["学","学ぶ"],"romaji":{"kun":["mana","manabu"],"on":["gaku"]},"kana":{"kun":["まな","まなぶ"],"on":["ガク"]},"english":["study","learning"]},{"kanji":["間"],"romaji":{"kun":["aida","ma"],"on":["kan","ken"]},"kana":{"kun":["あいだ","ま"],"on":["カン","ケン"]},"english":["interval","between","space"]},{"kanji":["気"],"romaji":{"kun":["ke"],"on":["ki"]},"kana":{"kun":["け"],"on":["キ"]},"english":["gas","spirit","mind"]},{"kanji":["九","九つ"],"romaji":{"kun":["kokono","kokonotsu"],"on":["kyuu","ku"]},"kana":{"kun":["ここの","ここのつ"],"on":["キュウ","ク"]},"english":["nine"]},{"kanji":["休","休む"],"romaji":{"kun":["yasu","yasumu"],"on":["kyuu"]},"kana":{"kun":["やす","やすむ"],"on":["キュウ"]},"english":["rest"]},{"kanji":["魚"],"romaji":{"kun":["sakana","uo"],"on":["gyo"]},"kana":{"kun":["さかな","うお"],"on":["ギョ"]},"english":["fish"]},{"kanji":["金"],"romaji":{"kun":["kana","kane"],"on":["kin","kon"]},"kana":{"kun":["かな","かね"],"on":["キン","コン"]},"english":["money","gold"]},{"kanji":["空","空く","空ける"],"romaji":{"kun":["sora","kara","a","aku","akeru"],"on":["kuu"]},"kana":{"kun":["そら","から","あ","あく","あける"],"on":["クウ"]},"english":["sky","air","empty"]},{"kanji":["月"],"romaji":{"kun":["getsu","tsuki"],"on":["getsu"]},"kana":{"kun":["げつ","つき"],"on":["ゲツ"]},"english":["moon","month"]},{"kanji":["見","見る"],"romaji":{"kun":["ken","mi","miru"],"on":["ken"]},"kana":{"kun":["けん","み","みる"],"on":["ケン"]},"english":["see"]},{"kanji":["言","言う"],"romaji":{"kun":["i","iu","koto"],"on":["gen","gon"]},"kana":{"kun":["い","いう","こと"],"on":["ゲン","ゴン"]},"english":["say","speech"]},{"kanji":["古","古い","古す"],"romaji":{"kun":["furu","furui","furusu"],"on":["ko"]},"kana":{"kun":["ふる","ふるい","ふるす"],"on":["コ"]},"english":["old"]},{"kanji":["五","五つ"],"romaji":{"kun":["itsu","itsutsu"],"on":["go"]},"kana":{"kun":["いつ","いつつ"],"on":["ゴ"]},"english":["five"]},{"kanji":["後","後ろ","後れる"],"romaji":{"kun":["nochi","ushi","ushiro","ato","oku","okureru"],"on":["go","gou"]},"kana":{"kun":["のち","うし","うしろ","あと","おく","おくれる"],"on":["ゴ","ゴウ"]},"english":["after"]},{"kanji":["午"],"romaji":{"kun":[],"on":["go"]},"kana":{"kun":[""],"on":["ゴ"]},"english":["noon"]},{"kanji":["語","語る","語らう"],"romaji":{"kun":["kata","kataru","katarau"],"on":["go"]},"kana":{"kun":["かた","かたる","かたらう"],"on":["ゴ"]},"english":["language","word","tell"]},{"kanji":["校"],"romaji":{"kun":[],"on":["kou"]},"kana":{"kun":[],"on":["コウ"]},"english":["school","collate"]},{"kanji":["口"],"romaji":{"kun":["kuchi"],"on":["kou"]},"kana":{"kun":["くち"],"on":["コウ"]},"english":["mouth"]},{"kanji":["行","行く","行う"],"romaji":{"kun":["i","iku","yu","yuku","okona","okonau"],"on":["kou"]},"kana":{"kun":["い","いく","ゆ","ゆく","おこな","おこなう"],"on":["コウ"]},"english":["go","act","line"]},{"kanji":["高","高い","高まる","高める"],"romaji":{"kun":["taka","takai","takameru","takamaru"],"on":["kou"]},"kana":{"kun":["たか","たかい","たかまる","たかめる"],"on":["コウ",""]},"english":["high"]},{"kanji":["国"],"romaji":{"kun":["kuni"],"on":["koku"]},"kana":{"kun":["くに"],"on":["コク"]},"english":["country","nation"]},{"kanji":["今"],"romaji":{"kun":["ima"],"on":["kon"]},"kana":{"kun":["いま"],"on":["コン"]},"english":["now","this"]},{"kanji":["左"],"romaji":{"kun":["hidari"],"on":["sa"]},"kana":{"kun":["ひだり"],"on":["サ"]},"english":["left"]},{"kanji":["三","三つ"],"romaji":{"kun":["mi","mitsu","mittsu"],"on":["san"]},"kana":{"kun":["み","みつ","みっつ"],"on":["サン"]},"english":["three"]},{"kanji":["山"],"romaji":{"kun":["yama"],"on":["san"]},"kana":{"kun":["やま"],"on":["サン"]},"english":["mountain"]},{"kanji":["四","四つ"],"romaji":{"kun":["yo","yon","yottsu","yotsu"],"on":["shi"]},"kana":{"kun":["よ","よん","よっつ","よつ"],"on":["シ"]},"english":["four"]},{"kanji":["子"],"romaji":{"kun":["ko"],"on":["shi"]},"kana":{"kun":["こ"],"on":["シ"]},"english":["tiny thing","child"]},{"kanji":["耳"],"romaji":{"kun":["mimi"],"on":["ji"]},"kana":{"kun":["みみ"],"on":["ジ"]},"english":["ear"]},{"kanji":["時"],"romaji":{"kun":["toki"],"on":["ji"]},"kana":{"kun":["とき"],"on":["ジ"]},"english":["time"]},{"kanji":["七","七つ"],"romaji":{"kun":["nana","nanatsu","nano"],"on":["shichi"]},"kana":{"kun":["なな","ななつ","なの"],"on":["シチ"]},"english":["seven"]},{"kanji":["車"],"romaji":{"kun":["kuruma"],"on":["sha"]},"kana":{"kun":["くるま"],"on":["シャ"]},"english":["vehicle","wheel","car","automobile"]},{"kanji":["社"],"romaji":{"kun":["yashiro"],"on":["sha"]},"kana":{"kun":["やしろ"],"on":["シャ"]},"english":["company","society"]},{"kanji":["手"],"romaji":{"kun":["te","ta"],"on":["shu"]},"kana":{"kun":["て","た"],"on":["シュ"]},"english":["hand","person"]},{"kanji":["週"],"romaji":{"kun":[],"on":["shuu"]},"kana":{"kun":[],"on":["シュウ"]},"english":["week"]},{"kanji":["十"],"romaji":{"kun":["too","to"],"on":["juu"]},"kana":{"kun":["とお","と"],"on":["ジュウ","ジッ"]},"english":["ten"]},{"kanji":["出","出る","出す"],"romaji":{"kun":["de","deru","dasu"],"on":["shutsu","sui"]},"kana":{"kun":["で","でる","だす"],"on":["シュツ","スイ"]},"english":["go out","put out"]},{"kanji":["書","書く"],"romaji":{"kun":["ka","kaku"],"on":["sho"]},"kana":{"kun":["か","かく"],"on":["ショ"]},"english":["write","book"]},{"kanji":["女"],"romaji":{"kun":["onna","me"],"on":["nyo","nyou","jo"]},"kana":{"kun":["おんな","め"],"on":["ニョ","ニョウ","ジョ"]},"english":["woman"]},{"kanji":["小","小さい"],"romaji":{"kun":["chii","chiisai","ko","o"],"on":["shou"]},"kana":{"kun":["ちい","ちいさい","こ","お"],"on":["ショウ"]},"english":["small"]},{"kanji":["少","少ない","少し"],"romaji":{"kun":["suku","sukunai","suko","sukoshi"],"on":["shou"]},"kana":{"kun":["すく","すくない","すこ","すこし"],"on":["ショウ"]},"english":["little"]},{"kanji":["上","上げる","上る"],"romaji":{"kun":["ue","uwa","kami","a","ageru","nobo","noboru"],"on":["jou","shou"]},"kana":{"kun":["うえ","うわ","かみ","あ","あげる","のぼ","のぼる"],"on":["ジョウ","ショウ"]},"english":["up","above"]},{"kanji":["食","食べる","食らう","食う"],"romaji":{"kun":["ta","taberu","ku","kurau","kuu"],"on":["shoku"]},"kana":{"kun":["た","たべる","く","くらう","くう"],"on":["ショク"]},"english":["eat","food"]},{"kanji":["新","新しい","新た"],"romaji":{"kun":["atara","atarashii","ara","arata","nii"],"on":["shin"]},"kana":{"kun":["あたら","あたらしい","あら","あらた","にい"],"on":["シン"]},"english":["new"]},{"kanji":["人"],"romaji":{"kun":["hito"],"on":["jin","nin"]},"kana":{"kun":["ひと"],"on":["ジン","ニン"]},"english":["human being","person"]},{"kanji":["水"],"romaji":{"kun":["mizu"],"on":["sui"]},"kana":{"kun":["みず"],"on":["スイ"]},"english":["water"]},{"kanji":["生","生きる","生る","生う","生える"],"romaji":{"kun":["i","ikiru","u","umaru","o","ou","ha","haeru","ki","nama"],"on":["sei","shuu"]},"kana":{"kun":["い","いきる","う","うまる","お","おう","は","はえる","き","なま"],"on":["セイ","シュウ"]},"english":["life","birth"]},{"kanji":["西"],"romaji":{"kun":["nishi"],"on":["sei"]},"kana":{"kun":["にし"],"on":["セイ"]},"english":["west"]},{"kanji":["川"],"romaji":{"kun":["kawa"],"on":["sen"]},"kana":{"kun":["かわ"],"on":["セン"]},"english":["river"]},{"kanji":["千"],"romaji":{"kun":["chi"],"on":["sen"]},"kana":{"kun":["ち"],"on":["セン"]},"english":["thousand"]},{"kanji":["先"],"romaji":{"kun":["saki"],"on":["sen"]},"kana":{"kun":["さき"],"on":["セン"]},"english":["previous","former","earlier","preceding","prior"]},{"kanji":["前"],"romaji":{"kun":["mae"],"on":["zen"]},"kana":{"kun":["まえ"],"on":["ゼン"]},"english":["before","front"]},{"kanji":["足","足りる","足す","足る"],"romaji":{"kun":["ashi","ta","tariru","taru","tasu"],"on":["soku"]},"kana":{"kun":["あし","た","たりる","たる","たす"],"on":["ソク"]},"english":["foot","suffice"]},{"kanji":["多","多い"],"romaji":{"kun":["oo","ooi"],"on":["ta"]},"kana":{"kun":["おお","おおい"],"on":["タ"]},"english":["many"]},{"kanji":["大","大きい","大いに"],"romaji":{"kun":["oo","ookii","ooini"],"on":["dai"]},"kana":{"kun":["おお","おおきい","おおいに"],"on":["ダイ"]},"english":["big","university","large"]},{"kanji":["男"],"romaji":{"kun":["otoko"],"on":["dan"]},"kana":{"kun":["おとこ"],"on":["ダン"]},"english":["man"]},{"kanji":["中"],"romaji":{"kun":["naka"],"on":["chuu","juu"]},"kana":{"kun":["なか"],"on":["チュウ","ジュウ"]},"english":["middle","in"]},{"kanji":["長","長い"],"romaji":{"kun":["naga","nagai"],"on":["chou"]},"kana":{"kun":["なが","ながい"],"on":["チョウ"]},"english":["long","chief"]},{"kanji":["天"],"romaji":{"kun":["ame","ama"],"on":["ten"]},"kana":{"kun":["あめ","あま"],"on":["テン"]},"english":["heaven"]},{"kanji":["店"],"romaji":{"kun":["mise"],"on":["ten"]},"kana":{"kun":["みせ"],"on":["テン"]},"english":["shop"]},{"kanji":["電"],"romaji":{"kun":[],"on":["den"]},"kana":{"kun":[],"on":["デン"]},"english":["electricity"]},{"kanji":["土"],"romaji":{"kun":["tsuchi"],"on":["do"]},"kana":{"kun":["つち"],"on":["ド"]},"english":["soil","earth","dirt","ground"]},{"kanji":["東"],"romaji":{"kun":["higashi"],"on":["tou"]},"kana":{"kun":["ひがし"],"on":["トウ"]},"english":["east"]},{"kanji":["道"],"romaji":{"kun":["michi"],"on":["dou"]},"kana":{"kun":["みち"],"on":["ドウ"]},"english":["way","path","road"]},{"kanji":["読","読む"],"romaji":{"kun":["yo","yomu"],"on":["toku"]},"kana":{"kun":["よ","よむ"],"on":["トク"]},"english":["read"]},{"kanji":["南"],"romaji":{"kun":["minami"],"on":["nan"]},"kana":{"kun":["みなみ"],"on":["ナン"]},"english":["south"]},{"kanji":["二","二つ"],"romaji":{"kun":["futa","futatsu"],"on":["ni"]},"kana":{"kun":["ふた","ふたつ"],"on":["ニ"]},"english":["two"]},{"kanji":["日"],"romaji":{"kun":["hi","ka"],"on":["nichi","ji"]},"kana":{"kun":["ひ","か"],"on":["ニチ","ジツ"]},"english":["day","sun"]},{"kanji":["入","入る","入れる"],"romaji":{"kun":["i","iru","ireru","hai","hairu"],"on":["chuu"]},"kana":{"kun":["い","いる","いれる","はい","はいる"],"on":["チュウ"]},"english":["enter","put in"]},{"kanji":["年"],"romaji":{"kun":["toshi"],"on":["nen"]},"kana":{"kun":["とし"],"on":["ネン"]},"english":["year"]},{"kanji":["買","買う"],"romaji":{"kun":["ka","kau"],"on":["bai"]},"kana":{"kun":["か","かう"],"on":["バイ"]},"english":["buy"]},{"kanji":["白","白い"],"romaji":{"kun":["shiro","shiroi","shira"],"on":["haku"]},"kana":{"kun":["しろ","しろい","しら"],"on":["ハク"]},"english":["white"]},{"kanji":["八","八つ"],"romaji":{"kun":["ya","yattsu","ya","you"],"on":["hachi"]},"kana":{"kun":["や","やっつ","やっ","よう"],"on":["ハチ"]},"english":["eight"]},{"kanji":["半","半ば"],"romaji":{"kun":["naka","nakaba"],"on":["han"]},"kana":{"kun":["なか","なかば"],"on":["ハン"]},"english":["half"]},{"kanji":["百"],"romaji":{"kun":[],"on":["hyaku"]},"kana":{"kun":[],"on":["ヒャク"]},"english":["hundred"]},{"kanji":["父"],"romaji":{"kun":["chichi"],"on":["fu"]},"kana":{"kun":["ちち"],"on":["フ"]},"english":["father"]},{"kanji":["分","分ける","分かれる","分かる","分かつ"],"romaji":{"kun":["wa","wakeru","wakareru","wakaru","wakatsu"],"on":["bun","fun","bu"]},"kana":{"kun":["わ","わける","わかれる","わかる","わかつ"],"on":["ブン","フン","ブ"]},"english":["divide","part","minute"]},{"kanji":["聞","聞く","聞こえる"],"romaji":{"kun":["ki","kiku","kikoeru"],"on":["bun","mon"]},"kana":{"kun":["き","きく","きこえる"],"on":["ブン","モン"]},"english":["hear"]},{"kanji":["母"],"romaji":{"kun":["haha"],"on":["bo"]},"kana":{"kun":["はは"],"on":["ボ"]},"english":["mother"]},{"kanji":["北"],"romaji":{"kun":["kita"],"on":["hoku"]},"kana":{"kun":["きた"],"on":["ホク"]},"english":["north"]},{"kanji":["木"],"romaji":{"kun":["ki","ko"],"on":["boku"]},"kana":{"kun":["き","こ"],"on":["ボク"]},"english":["tree","wood"]},{"kanji":["本"],"romaji":{"kun":["moto"],"on":["hon"]},"kana":{"kun":["もと"],"on":["ホン"]},"english":["basis","book","this"]},{"kanji":["毎"],"romaji":{"kun":[],"on":["mai"]},"kana":{"kun":[],"on":["マイ"]},"english":["every"]},{"kanji":["万"],"romaji":{"kun":[],"on":["man","ban"]},"kana":{"kun":[],"on":["マン","バン"]},"english":["ten thousand"]},{"kanji":["名"],"romaji":{"kun":["na"],"on":["mei","nyou"]},"kana":{"kun":["な"],"on":["メイ","ニョウ"]},"english":["name"]},{"kanji":["目"],"romaji":{"kun":["me","ma"],"on":["moku"]},"kana":{"kun":["め","ま"],"on":["モク"]},"english":["eye","item"]},{"kanji":["友"],"romaji":{"kun":["tomo"],"on":["yuu"]},"kana":{"kun":["とも"],"on":["ユウ"]},"english":["friend"]},{"kanji":["来","来る","来た","来る","来す"],"romaji":{"kun":["ku","kuru","kita","kitaru","kitasu"],"on":["rai"]},"kana":{"kun":["く","くる","きた","きたる","きたす"],"on":["ライ"]},"english":["come"]},{"kanji":["立","立つ","立てる"],"romaji":{"kun":["ta","tatsu","tateru"],"on":["ritsu","ryuu"]},"kana":{"kun":["た","たつ","たてる"],"on":["リツ","リュウ"]},"english":["stand","establish"]},{"kanji":["六","六つ"],"romaji":{"kun":["mu","mutsu","muttsu","mui"],"on":["roku"]},"kana":{"kun":["む","むつ","むっつ","むい"],"on":["ロク"]},"english":["six"]},{"kanji":["話","話す"],"romaji":{"kun":["hana","hanasu","hanashi"],"on":["wa"]},"kana":{"kun":["はな","はなす","はなし"],"on":["ワ"]},"english":["speak","talk"]}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map