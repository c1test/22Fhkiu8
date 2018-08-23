



/// <reference path='./IListener.ts' />





/// <reference path='./ISubscription.ts' />
/// <reference path='./IListener.ts' />
/// <reference path='./IListenerQueue.ts' />
/// <reference path='./IEventInformation.ts' />
/// <reference path='../Generics/Collections/IHashTable.ts' />

/// <reference path='./ISubscription.ts' />
/// <reference path='./IListener.ts' />
/// <reference path='./IListenerQueue.ts' />
/// <reference path='./IEventInformation.ts' />
/// <reference path='./IEventHub.ts' />
/// <reference path='../Generics/Collections/IHashTable.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        /**
         * An event hub for subscribing to and publishing events.
        */
        var EventHub = (function () {
            function EventHub() {
                this._events = {};
                if (EventHub._instance) {
                    throw new Error('Error: Instantiation failed: Use EventHub.instance() instead of new.');
                }
                EventHub._instance = this;
            }
            EventHub.instance = function () {
                return EventHub._instance;
            };
            /**
             * Subscribe to an event.
             *
             * @param eventName The name of the event to subscribe to.
             * @param listener The listener subscribing to the event.
            */
            EventHub.prototype.subscribe = function (eventName, listener) {
                var _this = this;
                var index;
                if (!this._events.hasOwnProperty(eventName)) {
                    this._events[eventName] = { queue: [] };
                }
                index = this._events[eventName].queue.push(listener) - 1;
                return (function (topic, index) {
                    return {
                        remove: function () {
                            delete _this._events[eventName].queue[index];
                        }
                    };
                })(eventName, index);
            };
            /**
             * Publishes an event.
             *
             * @param eventName The name of the event to subscribe to.
             * @param eventInformation The information to provide all subscribers when the event is published.
            */
            EventHub.prototype.publish = function (eventName, eventInformation) {
                if (!this._events.hasOwnProperty(eventName)) {
                    return;
                }
                this._events[eventName].queue.forEach(function (listener) {
                    if (listener !== void 0) {
                        listener(eventInformation);
                    }
                });
            };
            EventHub._instance = new EventHub();
            return EventHub;
        }());
        Composer.EventHub = EventHub;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='./IAnalyticsProduct.ts' />
///<reference path='./IAnalyticsSearchResults.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='./IAnalyticsCoupon.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));





///<reference path='../../Typings/tsd.d.ts' />
///<reference path='../System/IDisposable.ts' />

///<reference path='../../Typings/tsd.d.ts' />

///<reference path='../../Typings/tsd.d.ts' />

/// <reference path="../../typings/tsd.d.ts" />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../Generics/Collections/IHashTable.ts' />

///<reference path='../../Typings/tsd.d.ts' />



///<reference path='../../Typings/tsd.d.ts' />

///<reference path='../../Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var UIBusyHandle = (function () {
            /*
             * Start the busy state, to be called before the async call
             * @param loadingIndicatorContext JQuery element of what the handler will remove/add class "hidden".
             * @param containerContext JQuery element containing inputs that will be disabled while busy.
             * @param msDelay Number of ms before activating async. If done is called before the end
             *        of the delay, the loadingIndicatorContext will not be shown.
             */
            function UIBusyHandle(loadingIndicatorContext, containerContext, msDelay) {
                this.loadingIndicatorContext = loadingIndicatorContext;
                this.containerContext = containerContext;
                this.startBusy(msDelay);
            }
            /*
             * Ends the busy state, to be called in the then of the async call
             */
            UIBusyHandle.prototype.done = function () {
                this.endBusy();
            };
            UIBusyHandle.prototype.startBusy = function (msDelay) {
                var _this = this;
                this.timeoutHandle = setTimeout(function () {
                    _this.containerContext.find(':input:enabled').addClass('async-busy').prop('disabled', true);
                    _this.loadingIndicatorContext.removeClass('hidden');
                }, msDelay);
            };
            UIBusyHandle.prototype.endBusy = function () {
                clearTimeout(this.timeoutHandle);
                this.loadingIndicatorContext.addClass('hidden');
                this.containerContext.find(':input.async-busy').removeClass('async-busy').prop('disabled', false);
            };
            return UIBusyHandle;
        }());
        Composer.UIBusyHandle = UIBusyHandle;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../Typings/tsd.d.ts' />



/// <reference path='./Mvc/IControllerConfiguration.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        ;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path="../../typings/tsd.d.ts" />
/// <reference path='../Generics/Collections/IHashTable.ts' />
/// <reference path='../Events/IEventHub.ts' />
/// <reference path='./IController.ts' />
/// <reference path='./IControllerContext.ts' />
/// <reference path='./IRegisterActionOptions.ts' />
/// <reference path='./IControllerActionContext.ts' />
///<reference path='../Templating/IComposerTemplates.ts' />
///<reference path='../Templating/IComposerTemplates.ts' />
/// <reference path='../JQueryPlugins/IParsleyJqueryPlugin.ts' />
/// <reference path='../Validation/IParsley.ts' />
/// <reference path='../UI/UIBusyParam.ts' />
/// <reference path='../UI/UIBusyHandle.ts' />
/// <reference path='../IComposerContext.ts' />
/// <reference path='../IComposerConfiguration.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        /**
        * Provides methods that respond to client-side requests.
        */
        var Controller = (function () {
            function Controller(context, eventHub, composerContext, composerConfiguration) {
                this.context = context;
                this.eventHub = eventHub;
                this.composerContext = composerContext;
                this.composerConfiguration = composerConfiguration;
                this._composerEventPostfix = '.composer';
                this._defaultEventsToMonitor = ['click', 'mouseover', 'mouseout', 'contextmenu', 'submit', 'focus', 'blur', 'change']; // 'dblclick'
                if (_.isEmpty(context)) {
                    throw new Error('context is required');
                }
                if (_.isEmpty(eventHub)) {
                    throw new Error('eventHub is required');
                }
                if (_.isEmpty(composerContext)) {
                    throw new Error('composerContext is required');
                }
            }
            Controller.registerAction = function (classToRegisterActionOn, registerActionOptions) {
                var classPrototype = classToRegisterActionOn.prototype;
                if (!Controller.prototype.isPrototypeOf(classPrototype)) {
                    throw new Error('The class you are trying to register the action on is not a controller.');
                }
                if (_.isFunction(registerActionOptions.actionDelegate)) {
                    if (!classPrototype.hasOwnProperty(registerActionOptions.actionName) ||
                        registerActionOptions.overwrite &&
                            classPrototype.hasOwnProperty(registerActionOptions.actionName) &&
                            _.isFunction(classPrototype[registerActionOptions.actionName])) {
                        classPrototype[registerActionOptions.actionName] = registerActionOptions.actionDelegate;
                    }
                    else {
                        throw new Error("You cannot overwrite the action named \"" + registerActionOptions.actionName + "\" without specifying overwrite = true in the registerActionOptions.");
                    }
                }
                else {
                    throw new Error("Unable to register action " + registerActionOptions.actionName + ". The action delegate is not a function.");
                }
            };
            Controller.prototype.initialize = function () {
                if (_.isEmpty(this.eventsToMonitor)) {
                    this.eventsToMonitor = this._defaultEventsToMonitor;
                }
                this.registerDomEvents();
            };
            Controller.prototype.dispose = function () {
                this.unregisterDomEvents();
            };
            Controller.prototype.asyncBusy = function (options) {
                if (options === void 0) { options = {}; }
                options = _.merge({
                    elementContext: this.context.container,
                    containerContext: this.context.container,
                    loadingIndicatorSelector: '.loading-indicator',
                    msDelay: 0
                }, options);
                var loadingIndicatorContext = options.elementContext.find(options.loadingIndicatorSelector);
                var handle = new Composer.UIBusyHandle(loadingIndicatorContext, options.containerContext, options.msDelay);
                return handle;
            };
            /*
             * Prevents a form from submitting.
             * @param context A controller action context.
             */
            Controller.prototype.preventFormSubmit = function (context) {
                context.event.preventDefault();
            };
            Controller.prototype.render = function (templateId, viewModel, parentSelector) {
                var _this = this;
                var container = this.context.container;
                if (!_.isEmpty(parentSelector)) {
                    container = this.context.container.find(parentSelector);
                }
                var elements = container.find("[data-templateid=\"" + templateId + "\"]");
                if (_.isEmpty(elements)) {
                    console.warn("Could not find the template '" + templateId + "' inside its container.", container);
                }
                elements.each(function (index, item) {
                    var renderedTemplate = _this.getRenderedTemplateContents(templateId, viewModel);
                    if (renderedTemplate !== null) {
                        item.outerHTML = renderedTemplate;
                    }
                });
            };
            Controller.prototype.getRenderedTemplateContents = function (templateId, viewModel) {
                var template = Orckestra.Composer.Templates[templateId];
                if (!_.isFunction(template)) {
                    console.error("Template '" + templateId + "' not found in compiled templates.");
                    return null;
                }
                try {
                    return template(viewModel);
                }
                catch (error) {
                    // catch handlebars rendering errors mostly
                    console.error(error.name + ": " + error.message + " in template '" + templateId + "'.", viewModel);
                }
            };
            Controller.prototype.registerFormsForValidation = function (context, customOptions) {
                if (customOptions === void 0) { customOptions = {}; }
                var formValidators = [];
                var options = {
                    trigger: 'focusout change',
                    focus: 'first',
                    errorTemplate: '<li></li>',
                    classHandler: function (fieldInstance) {
                        var handleSelector = fieldInstance.$element.data('parsleyClassHandlerSelector');
                        // returning undefined will make parsley use the default classHandler
                        if (_.isEmpty(handleSelector)) {
                            return undefined;
                        }
                        var classHandler = fieldInstance.$element.closest(handleSelector);
                        return classHandler;
                    }
                };
                _.assign(options, customOptions);
                context.each(function (index, element) {
                    formValidators.push($(element).parsley(options));
                });
                if (customOptions.serverValidationContainer) {
                    this.hideServerValidationMessageOnClientValidation(formValidators, customOptions.serverValidationContainer);
                }
                return formValidators;
            };
            /**
             * Hide any messages from previous server validation
             * when the new form is used to prevent mixing up
             * client side validation message with server side
             * messages.
             *
             * @param formValidators all the parlsey forms to manage
             * @param serverValidationContainer the jQuery selector to find messages to empty
             */
            Controller.prototype.hideServerValidationMessageOnClientValidation = function (formValidators, serverValidationContainer) {
                _.each(formValidators, function (parsley) {
                    parsley.subscribe('parsley:field:validate', function () {
                        parsley.$element.find(serverValidationContainer).empty();
                        _.defer(function () { parsley.unsubscribe('parsley:field:validate'); });
                    });
                });
            };
            Controller.prototype.registerDomEvents = function () {
                var _this = this;
                var parseAction = this.parseAction.bind(this);
                this._unregister = function () {
                    _this.context.container.off(_this._composerEventPostfix, parseAction);
                };
                this.eventsToMonitor.forEach(function (item) {
                    _this.context.container.on("" + item + _this._composerEventPostfix, parseAction);
                });
            };
            Controller.prototype.unregisterDomEvents = function () {
                if (this._unregister !== void 0) {
                    this._unregister();
                }
            };
            Controller.prototype.parseAction = function (e) {
                this.applyControllerAction($(e.target), e);
            };
            Controller.prototype.applyControllerAction = function (context, e) {
                var controllerActions, eventAttribute = "oc-" + e.type, rawActions = context.data(eventAttribute);
                if (_.isEmpty(rawActions)) {
                    if (context.length > 0 && context[0] !== this.context.container[0]) {
                        this.applyControllerAction(context.parent(), e);
                    }
                    return;
                }
                controllerActions = rawActions.replace(/\s+/g, '').split(',');
                this.applyControllerActions(context, e, controllerActions);
            };
            Controller.prototype.applyControllerActions = function (context, e, controllerActions) {
                var _this = this;
                controllerActions.forEach(function (controllerAction) {
                    var controllerActionContext;
                    if (_.isFunction(_this[controllerAction])) {
                        controllerActionContext = {
                            elementContext: context,
                            event: e
                        };
                        _this[controllerAction].apply(_this, [controllerActionContext]);
                    }
                });
            };
            return Controller;
        }());
        Composer.Controller = Controller;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../Typings/tsd.d.ts' />

///<reference path='../../../Typings/tsd.d.ts' />

///<reference path='../../../Typings/tsd.d.ts' />
///<reference path='../Controller.ts' />
///<reference path='../ComposerClient.ts' />
///<reference path='../IControllerActionContext.ts' />
///<reference path='../../Events/IEventInformation.ts' />
///<reference path='ILocalizationProvider.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var LocalizationProvider = (function () {
            function LocalizationProvider() {
                this._localizationTree = {};
                if (LocalizationProvider._instance) {
                    throw new Error('Error: Instantiation failed: Use LocalizationProvider.instance() instead of new.');
                }
                LocalizationProvider._instance = this;
            }
            LocalizationProvider.instance = function () {
                return LocalizationProvider._instance;
            };
            /**
             * Boostrap the localization.
             *
             * This call is responsibly for refreshing all localization
             * to the current page culture
             */
            LocalizationProvider.prototype.initialize = function (composerContext) {
                this._composerContext = composerContext;
                var provider = this;
                var language = this._composerContext.language;
                return Composer.ComposerClient.get('/api/localization/' + language)
                    .then(function (result) {
                    var tree = result;
                    provider._localizationTree = tree;
                });
            };
            /**
             * Get a  localized string
             *
             * @param categoryName The category used to bundle this localization
             * @param keyName The exact key to localize
             * @return the localizedString or null if none found
            */
            LocalizationProvider.prototype.getLocalizedString = function (categoryName, keyName) {
                categoryName = (categoryName || '').toLowerCase();
                var tree = (this._localizationTree || {});
                var categories = (tree.LocalizedCategories || {});
                var category = (categories[categoryName] || {});
                var values = (category.LocalizedValues || {});
                var value = values[keyName];
                return value;
            };
            /*
             * Note: not really protected, this is a Typescript scoped method
             * called from the javascript scoped handlebars helper.
             */
            LocalizationProvider.prototype.handleBarsHelper_localize = function (categoryName, keyName) {
                var value = this.getLocalizedString(categoryName, keyName);
                if (_.isUndefined(value)) {
                    value = '[' + categoryName + '.' + keyName + ']';
                }
                return value;
            };
            /*
             * Note: not really protected, this is a Typescript scoped method
             * called from the javascript scoped handlebars helper.
             */
            LocalizationProvider.prototype.handleBarsHelper_localizeFormat = function (categoryName, keyName, options) {
                var value;
                var format = this.getLocalizedString(categoryName, keyName);
                if (_.isUndefined(format)) {
                    value = '[' + categoryName + '.' + keyName + ']';
                }
                else {
                    value = this.stringFormat(format, options);
                }
                return value;
            };
            /*
             * Note: not really protected, this is a Typescript scoped method
             * called from the javascript scoped handlebars helper.
             */
            LocalizationProvider.prototype.handleBarsHelper_isLocalized = function (categoryName, keyName) {
                var value = this.getLocalizedString(categoryName, keyName);
                if (_.isEmpty(value) || _.isUndefined(value)) {
                    return false;
                }
                return true;
            };
            /*
             * Substitute to String.Format in C#
             * This is a limited version to support numeric placeholders {0} without formatting
             */
            LocalizationProvider.prototype.stringFormat = function (format, options) {
                return format.replace(/\{\s*([^}\s]+)\s*\}/g, function (m, p1, offset, string) {
                    return options[p1] !== void 0 ? options[p1] : p1;
                });
            };
            LocalizationProvider._instance = new LocalizationProvider();
            return LocalizationProvider;
        }());
        Composer.LocalizationProvider = LocalizationProvider;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../Typings/tsd.d.ts' />
///<reference path='./Localization/ILocalizationProvider.ts' />
///<reference path='./Localization/LocalizationProvider.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var ComposerClient = (function () {
            function ComposerClient() {
            }
            ComposerClient.get = function (url, data) {
                return this.sendRequest('GET', url, data);
            };
            ComposerClient.post = function (url, data) {
                return this.sendRequest('POST', url, data);
            };
            ComposerClient.put = function (url, data) {
                return this.sendRequest('PUT', url, data);
            };
            ComposerClient.remove = function (url, data) {
                return this.sendRequest('DELETE', url, data);
            };
            ComposerClient.sendRequest = function (method, url, data) {
                var _this = this;
                var settings = {
                    contentType: 'application/json',
                    dataType: 'json',
                    data: data ? JSON.stringify(data) : null,
                    method: method,
                    url: url,
                    headers: {
                        'Accept-Language': this.getPageCulture()
                    }
                };
                return Q($.ajax(settings)).fail(function (reason) { return _this.onRequestRejected(reason); });
            };
            ComposerClient.getPageCulture = function () {
                var culture = $('html').attr('lang');
                if (!culture) {
                    throw new Error('No lang attribute was found on the <html> element. Please make sure it is included.');
                }
                return culture;
            };
            ComposerClient.onRequestRejected = function (reason) {
                if (reason.readyState === 0) {
                    throw { Errors: [{ LocalizedErrorMessage: this.getAjaxFailedErrorMessage() }] };
                }
                if (reason.readyState === 4 && reason.status === 205) {
                    console.log('Page must be reloaded.');
                    var redirectUrl = this.getReloadUrl();
                    window.location.href = redirectUrl;
                }
                if (reason.readyState === 4 && reason.status === 401) {
                    throw { Errors: [{ LocalizedErrorMessage: this.getUnauthorizedErrorMessage() }] };
                }
                if (reason.readyState === 4 && reason.status === 500 && reason.responseJSON !== null) {
                    throw { Errors: reason.responseJSON.Errors };
                }
                throw reason;
            };
            ComposerClient.getReloadUrl = function () {
                var rawQueryString = window.location.search;
                var value = 'session=expired';
                if (this.doesUrlContainQueryString(rawQueryString, value)) {
                    return window.location.href;
                }
                var splitter = '&';
                if (_.isEmpty(rawQueryString)) {
                    splitter = '/?';
                }
                var qs = "" + rawQueryString + splitter + value;
                var urls = window.location.href.split('?', 2);
                var url = "" + urls[0] + qs;
                return url;
            };
            ComposerClient.doesUrlContainQueryString = function (url, value) {
                var regex = new RegExp('(\\?|\\&)' + value, 'i');
                return regex.test(url);
            };
            ComposerClient.getAjaxFailedErrorMessage = function () {
                return Composer.LocalizationProvider.instance().getLocalizedString('General', 'L_ErrorAjaxFailed');
            };
            ComposerClient.getUnauthorizedErrorMessage = function () {
                return Composer.LocalizationProvider.instance().getLocalizedString('General', 'L_ErrorUnauthorized');
            };
            return ComposerClient;
        }());
        Composer.ComposerClient = ComposerClient;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
///<reference path='IMembershipRepository.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var MembershipRepository = (function () {
            function MembershipRepository() {
            }
            /**
            * Attempt to Log In using Composer API.
            * @param
            */
            MembershipRepository.prototype.login = function (formData, returnUrl) {
                var data = _.extend({ ReturnUrl: returnUrl }, formData);
                return Composer.ComposerClient.post('/api/membership/login', data);
            };
            /**
            * Logout using Composer API.
            * @param
            */
            MembershipRepository.prototype.logout = function (returnUrl, preserveCustomerInfo) {
                if (returnUrl === void 0) { returnUrl = ''; }
                if (preserveCustomerInfo === void 0) { preserveCustomerInfo = false; }
                var data = {
                    ReturnUrl: returnUrl,
                    PreserveCustomerInfo: preserveCustomerInfo
                };
                return Composer.ComposerClient.post('/api/membership/logout', data);
            };
            /**
            * Attempt to register using Composer API.
            * @param
            */
            MembershipRepository.prototype.register = function (formData, returnUrl) {
                var data = _.extend({ ReturnUrl: returnUrl }, formData);
                return Composer.ComposerClient.post('/api/membership/register', data);
            };
            /**
            * Attempt to trigger the forgot password email using Composer API.
            * @param
            */
            MembershipRepository.prototype.forgotPassword = function (formData) {
                var data = _.extend({}, formData);
                return Composer.ComposerClient.post('/api/membership/forgotpassword', data);
            };
            /**
            * Attempt to reset password for the Customer identified by the ticket using Composer API.
            * @param
            */
            MembershipRepository.prototype.resetPassword = function (formData, ticket, returnUrl) {
                var data = _.extend({ ReturnUrl: returnUrl, ticket: ticket }, formData);
                return Composer.ComposerClient.post('/api/membership/resetpassword', data);
            };
            /**
            * Attempt to change the password for the connected Customer using Composer API.
            * @param
            */
            MembershipRepository.prototype.changePassword = function (formData, returnUrl) {
                var data = _.extend({ ReturnUrl: returnUrl }, formData);
                return Composer.ComposerClient.post('/api/membership/changepassword', data);
            };
            /**
             * If the current user is authenticated or not
             */
            MembershipRepository.prototype.isAuthenticated = function () {
                return Composer.ComposerClient.get('/api/membership/isAuthenticated');
            };
            return MembershipRepository;
        }());
        Composer.MembershipRepository = MembershipRepository;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Repositories/MembershipRepository.ts' />
///<reference path='IMembershipService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var MembershipService = (function () {
            function MembershipService(membershipRepository) {
                if (!membershipRepository) {
                    throw new Error('Error: membershipRepository is required');
                }
                this.membershipRepository = membershipRepository;
            }
            /**
            * Attempt to Log In using Composer API.
            * @param
            */
            MembershipService.prototype.login = function (formData, returnUrl) {
                return this.membershipRepository.login(formData, returnUrl);
            };
            /**
            * Logout using Composer API.
            * @param
            */
            MembershipService.prototype.logout = function (returnUrl, preserveCustomerInfo) {
                if (returnUrl === void 0) { returnUrl = ''; }
                if (preserveCustomerInfo === void 0) { preserveCustomerInfo = false; }
                return this.membershipRepository.logout(returnUrl, preserveCustomerInfo);
            };
            /**
            * Attempt to register using Composer API.
            * @param
            */
            MembershipService.prototype.register = function (formData, returnUrl) {
                return this.membershipRepository.register(formData, returnUrl);
            };
            /**
            * Attempt to trigger the forgot password email using Composer API.
            * @param
            */
            MembershipService.prototype.forgotPassword = function (formData) {
                return this.membershipRepository.forgotPassword(formData);
            };
            /**
            * Attempt to reset password for the Customer identified by the ticket using Composer API.
            * @param
            */
            MembershipService.prototype.resetPassword = function (formData, ticket, returnUrl) {
                return this.membershipRepository.resetPassword(formData, ticket, returnUrl);
            };
            /**
            * Attempt to change the password for the connected Customer using Composer API.
            * @param
            */
            MembershipService.prototype.changePassword = function (formData, returnUrl) {
                return this.membershipRepository.changePassword(formData, returnUrl);
            };
            /**
             * If the current user is authenticated or not
             */
            MembershipService.prototype.isAuthenticated = function () {
                var _this = this;
                if (_.isUndefined(this.memoizeIsAuthenticated)) {
                    this.memoizeIsAuthenticated = _.memoize(function (arg) { return _this.isAuthenticatedImpl(); });
                }
                return this.memoizeIsAuthenticated();
            };
            /**
             * If the current user is authenticated or not
             */
            MembershipService.prototype.isAuthenticatedImpl = function () {
                return this.membershipRepository.isAuthenticated();
            };
            return MembershipService;
        }());
        Composer.MembershipService = MembershipService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/jqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='../../../Common/Source/Typescript/MembershipService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        (function (MyAccountEvents) {
            MyAccountEvents[MyAccountEvents["AccountCreated"] = 0] = "AccountCreated";
            MyAccountEvents[MyAccountEvents["AccountUpdated"] = 1] = "AccountUpdated";
            MyAccountEvents[MyAccountEvents["AddressCreated"] = 2] = "AddressCreated";
            MyAccountEvents[MyAccountEvents["AddressUpdated"] = 3] = "AddressUpdated";
            MyAccountEvents[MyAccountEvents["AddressDeleted"] = 4] = "AddressDeleted";
            MyAccountEvents[MyAccountEvents["LoggedIn"] = 5] = "LoggedIn";
            MyAccountEvents[MyAccountEvents["LoggedOut"] = 6] = "LoggedOut";
            MyAccountEvents[MyAccountEvents["PasswordChanged"] = 7] = "PasswordChanged";
            MyAccountEvents[MyAccountEvents["ForgotPasswordInstructionSent"] = 8] = "ForgotPasswordInstructionSent";
        })(Composer.MyAccountEvents || (Composer.MyAccountEvents = {}));
        var MyAccountEvents = Composer.MyAccountEvents;
        ;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI\Source\Typescript\Events\EventHub.ts' />
/// <reference path='./IAnalyticsPlugin.ts' />
/// <reference path='./IAnalyticsOrder.ts' />
/// <reference path='./IAnalyticsTransaction.ts' />
/// <reference path='./IAnalyticsSearchFilters.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Plugins/IPlugin.ts' />
/// <reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/MyAccountEvents.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var AnalyticsPlugin = (function () {
            function AnalyticsPlugin() {
            }
            AnalyticsPlugin.prototype.initialize = function () {
                this.useVariantIdWhenPossible = true;
                this.eventHub = Composer.EventHub.instance();
                this.cacheProvider = Composer.CacheProvider.instance();
                this.registerSubscriptions();
            };
            AnalyticsPlugin.setCheckoutOrigin = function (checkoutOrigin) {
                Composer.CacheProvider.instance().sessionStorage.setItem('analytics.checkoutOrigin', checkoutOrigin);
            };
            AnalyticsPlugin.getCheckoutOrigin = function () {
                return Composer.CacheProvider.instance().sessionStorage.getItem('analytics.checkoutOrigin');
            };
            /**
             * Binds all the events for Analytics
             */
            AnalyticsPlugin.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('lineItemAdding', function (eventInfo) {
                    _this.onLineItemAdding(eventInfo);
                });
                this.eventHub.subscribe('lineItemRemoving', function (eventInfo) {
                    _this.onLineItemRemoving(eventInfo);
                });
                this.eventHub.subscribe('productDetailsRendered', function (eventInfo) {
                    _this.onProductDetailsRendered(eventInfo);
                });
                this.eventHub.subscribe('checkoutStepRendered', function (eventInfo) {
                    _this.onCheckoutStepRendered(eventInfo);
                });
                this.eventHub.subscribe('checkoutNavigationRendered', function (eventInfo) {
                    _this.onCheckoutNavigationRendered(eventInfo);
                });
                this.eventHub.subscribe('CheckoutConfirmation', function (eventInfo) {
                    _this.onCheckoutCompleted(eventInfo);
                });
                this.eventHub.subscribe('searchResultRendered', function (eventInfo) {
                    _this.onSearchResultRendered(eventInfo);
                });
                this.eventHub.subscribe('relatedProductsLoaded', function (eventInfo) {
                    _this.onRelatedProductsLoaded(eventInfo);
                });
                this.eventHub.subscribe('productClick', function (eventInfo) {
                    _this.onProductClick(eventInfo);
                });
                this.eventHub.subscribe('pageNotFound', function (eventInfo) {
                    _this.onPageNotFound(eventInfo);
                });
                this.eventHub.subscribe('wishListLineItemAdding', function (eventInfo) {
                    _this.onWishListLineItemAdding(eventInfo);
                });
                this.eventHub.subscribe('wishListLineItemAddingToCart', function (eventInfo) {
                    _this.onLineItemAdding(eventInfo);
                });
                this.eventHub.subscribe('wishListCopyingShareUrl', function (eventInfo) {
                    _this.onWishListCopingShareUrl(eventInfo);
                });
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedIn], function (eventInfo) {
                    _this.onUserLoggedIn(eventInfo);
                });
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.AccountCreated], function (eventInfo) {
                    _this.onUserCreated(eventInfo);
                });
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.ForgotPasswordInstructionSent], function (eventInfo) {
                    _this.onRecoverPassword(eventInfo);
                });
                this.eventHub.subscribe('noResultsFound', function (eventInfo) {
                    _this.onNoResultsFound(eventInfo);
                });
                this.eventHub.subscribe('searchTermCorrected', function (eventInfo) {
                    _this.onSearchTermCorrected(eventInfo);
                });
                this.eventHub.subscribe('singleCategoryAdded', function (eventInfo) {
                    _this.onSingleFacetChanged(eventInfo);
                });
                this.eventHub.subscribe('singleFacetsChanged', function (eventInfo) {
                    _this.onSingleFacetChanged(eventInfo);
                });
                this.eventHub.subscribe('multiFacetChanged', function (eventInfo) {
                    _this.onMultiFacetChanged(eventInfo);
                });
                this.eventHub.subscribe('sortingChanged', function (eventInfo) {
                    _this.onSortingChanged(eventInfo);
                });
            };
            /**
             * Occurs when a user log in
             */
            AnalyticsPlugin.prototype.onUserLoggedIn = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                this.userLoggedIn('regular', data.ReturnUrl);
            };
            /**
             * Occurs when a user creates an account
             */
            AnalyticsPlugin.prototype.onUserCreated = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                this.userCreated();
            };
            /**
             * Occurs when a user log in
             */
            AnalyticsPlugin.prototype.onRecoverPassword = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                this.recoverPassword();
            };
            AnalyticsPlugin.prototype.onSingleFacetChanged = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var facetKey = data.facetKey;
                if (_.isString(data.facetKey)) {
                    facetKey = data.facetKey.replace('[]', '').toLowerCase();
                    if (facetKey.indexOf('category') !== -1) {
                        facetKey = 'category';
                    }
                }
                ;
                var searchFilters = {
                    facetKey: facetKey,
                    facetValue: data.facetValue,
                    pageType: data.pageType
                };
                this.singleFacetChanged(searchFilters);
            };
            AnalyticsPlugin.prototype.onMultiFacetChanged = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var facetKey = _.isString(data.facetKey) ? data.facetKey.replace('[]', '').toLowerCase() : data.facetKey;
                var searchFilters = {
                    facetKey: facetKey,
                    facetValue: data.facetValue,
                    pageType: data.pageType
                };
                this.multiFacetChanged(searchFilters);
            };
            AnalyticsPlugin.prototype.onSortingChanged = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                this.sortingChanged(data.sortingType, data.pageType);
            };
            /**
             * Occurs when a 404 page loads.
             */
            AnalyticsPlugin.prototype.onPageNotFound = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                this.sendEvent('event', '404 Errors', data.PageUrl, data.ReferrerUrl);
            };
            /**
            * Occurs when a user click on 'Copy Share Url' button
            */
            AnalyticsPlugin.prototype.onWishListCopingShareUrl = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                this.shareWishList(data);
            };
            /**
             * Occurs when a Line Item is being added to the Wish List.
             */
            AnalyticsPlugin.prototype.onWishListLineItemAdding = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var analyticsProduct = {
                    name: data.DisplayName,
                    price: this.trimPrice(data.ListPrice)
                };
                this.addToWishList(analyticsProduct);
            };
            /**
             * Occurs when a Line Item is being added.
             */
            AnalyticsPlugin.prototype.onLineItemAdding = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var analyticsProduct = {
                    name: data.DisplayName,
                    id: data.ProductId,
                    variant: data.Variant,
                    price: this.trimPriceAndUnlocalize(data.ListPrice),
                    quantity: data.Quantity,
                    category: data.CategoryId,
                    brand: data.Brand,
                    list: data.List
                };
                this.addToCart(analyticsProduct, data.List);
            };
            /**
             * Occurs when a Line item is being removed.
             */
            AnalyticsPlugin.prototype.onLineItemRemoving = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var analyticsProduct = {
                    name: data.DisplayName,
                    id: data.ProductId,
                    variant: data.Variant,
                    price: this.trimPriceAndUnlocalize(data.ListPrice),
                    quantity: data.Quantity,
                    category: data.CategoryId,
                    brand: data.Brand
                };
                this.removeFromCart(analyticsProduct, data.List);
            };
            /**
             * Occurs when a product Details is rendered.
             */
            AnalyticsPlugin.prototype.onProductDetailsRendered = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var analyticsProducts = [];
                analyticsProducts.push({
                    name: data.DisplayName,
                    id: data.ProductId,
                    price: this.trimPriceAndUnlocalize(data.ListPrice),
                    brand: data.Brand,
                    category: data.CategoryId,
                    variant: data.Variant
                });
                this.productDetailImpressions(analyticsProducts, 'Detail');
            };
            /**
             *  Occurs when a Checkout Step is rendered.
             */
            AnalyticsPlugin.prototype.onCheckoutStepRendered = function (eventInfo) {
                var _this = this;
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var analyticsProducts = [];
                if (data.Cart) {
                    Q.resolve(data.Cart).then(function (cart) {
                        _.each(cart.LineItemDetailViewModels, function (lineItemDetailViewModel) {
                            var analyticsProduct = {
                                name: lineItemDetailViewModel.ProductSummary.DisplayName,
                                id: lineItemDetailViewModel.ProductId,
                                price: _this.trimPriceAndUnlocalize(lineItemDetailViewModel.ListPrice),
                                quantity: lineItemDetailViewModel.Quantity,
                                category: lineItemDetailViewModel.ProductSummary.CategoryId.replace(/-/g, '/'),
                                variant: _this.buildVariantForLineItem(lineItemDetailViewModel),
                                brand: lineItemDetailViewModel.ProductSummary.Brand
                            };
                            if (_this.useVariantIdWhenPossible && lineItemDetailViewModel.VariantId) {
                                analyticsProduct.id = lineItemDetailViewModel.VariantId;
                            }
                            analyticsProducts.push(analyticsProduct);
                        });
                        var checkoutOrigin = AnalyticsPlugin.getCheckoutOrigin();
                        var transaction = {
                            checkoutOrigin: checkoutOrigin
                        };
                        _this.checkout(data.StepNumber, transaction, analyticsProducts);
                    });
                }
            };
            /**
             * Occurs when a the Checkout Navigation strip is rendered.
             */
            AnalyticsPlugin.prototype.onCheckoutNavigationRendered = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                this.checkoutOption(data.StepNumber);
            };
            /**
             * Occurs when a the Checkout completes, creating an order out of a Cart.
             */
            AnalyticsPlugin.prototype.onCheckoutCompleted = function (eventInfo) {
                var _this = this;
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var order = {
                    id: data.OrderNumber,
                    affiliation: data.Affiliation,
                    revenue: data.Revenu,
                    tax: data.Tax,
                    shipping: data.Shipping,
                    coupon: _.isEmpty(data.Coupons) ? '' : data.Coupons.map(function (c) { return c.CouponCode; }).join(', '),
                    currencyCode: data.BillingCurrency
                };
                var transaction = this.mapAnalyticTransactionFromOrder(data);
                var products = this.mapAnalyticProductsFromLineItems(data);
                var coupons = this.mapAnalyticCouponsFromOrder(data);
                _.each(coupons, function (coupon) {
                    _this.couponsUsed(coupon);
                });
                this.purchase(order, transaction, products);
            };
            /**
             * Occurs when the Search results on a page are rendered.
             */
            AnalyticsPlugin.prototype.onSearchResultRendered = function (eventInfo) {
                var _this = this;
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                if (data.ProductSearchResults.SearchResults.length > 0) {
                    var products = [];
                    _.each(data.ProductSearchResults.SearchResults, function (product, i) {
                        var analyticsProduct = {
                            id: product.ProductId,
                            name: product.DisplayName,
                            price: _this.trimPriceAndUnlocalize(product.Pricing.IsOnSale ? product.Pricing.Price : product.Pricing.ListPrice),
                            brand: product.Brand,
                            category: product.CategoryId,
                            list: data.ListName,
                            position: (i + 1) + (data.MaxItemsPerPage * (data.PageNumber - 1))
                        };
                        products.push(analyticsProduct);
                    });
                    this.productImpressions(products);
                }
                this.sendEvent('event', 'Search Results', 'Rendered', data.ProductSearchResults.Keywords, data.ProductSearchResults.TotalCount);
            };
            /**
             * Occurs when Related Products are loaded.
             */
            AnalyticsPlugin.prototype.onRelatedProductsLoaded = function (eventInfo) {
                var _this = this;
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var products = [];
                _.each(data.Products, function (product, i) {
                    var analyticsProduct = {
                        id: product.ProductId,
                        name: product.DisplayName,
                        price: _this.trimPriceAndUnlocalize(product.Price),
                        brand: product.Brand,
                        list: data.ListName,
                        category: product.CategoryId,
                        position: i + 1
                    };
                    products.push(analyticsProduct);
                });
                this.productImpressions(products);
            };
            /**
             * Occurs when the user clicks on a product.
             */
            AnalyticsPlugin.prototype.onProductClick = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var position = data.Index + 1;
                if (data.MaxItemsPerPage && data.PageNumber) {
                    position = position + (data.MaxItemsPerPage * (parseInt(data.PageNumber, 10) - 1));
                }
                var product = {
                    id: data.Product.ProductId,
                    name: data.Product.DisplayName,
                    price: this.trimPriceAndUnlocalize(data.Product.Price || data.Product.Pricing.Price),
                    brand: data.Product.Brand,
                    category: data.Product.CategoryId,
                    position: position
                };
                var products = [product];
                this.productClick(products, data.ListName);
            };
            /**
             * Occurs when no results were found for a search.
             */
            AnalyticsPlugin.prototype.onNoResultsFound = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                this.noResultsFound(data.Keyword);
            };
            /**
             * Occurs when a search term has been auto corrected during a search.
             */
            AnalyticsPlugin.prototype.onSearchTermCorrected = function (eventInfo) {
                if (!eventInfo) {
                    return;
                }
                var data = eventInfo.data;
                var searchResults = {
                    keywordCorrected: data.KeywordCorrected,
                    keywordEntered: data.KeywordEntered
                };
                this.searchKeywordCorrection(searchResults);
            };
            AnalyticsPlugin.prototype.buildVariantForLineItem = function (lineItem) {
                if (lineItem.VariantId && lineItem.KeyVariantAttributesList) {
                    return this.buildVariantName(lineItem.KeyVariantAttributesList);
                }
                return undefined;
            };
            AnalyticsPlugin.prototype.buildVariantName = function (kvas) {
                var nameParts = [];
                for (var i = 0; i < kvas.length; i++) {
                    var value = kvas[i].OriginalValue;
                    nameParts.push(value);
                }
                return nameParts.join(' ');
            };
            AnalyticsPlugin.prototype.mapAnalyticProductsFromLineItems = function (data) {
                var _this = this;
                var products = [];
                products = _.map(data.LineItems, function (lineItem) {
                    var analyticsProduct = {
                        id: lineItem.ProductId,
                        name: lineItem.Name,
                        price: lineItem.Price,
                        variant: _this.buildVariantForLineItem(lineItem),
                        quantity: lineItem.Quantity,
                        category: lineItem.CategoryId,
                        brand: lineItem.Brand
                    };
                    if (_this.useVariantIdWhenPossible && lineItem.VariantId) {
                        analyticsProduct.id = lineItem.VariantId;
                    }
                    return analyticsProduct;
                });
                return products;
            };
            AnalyticsPlugin.prototype.mapAnalyticCouponsFromOrder = function (data) {
                var coupons = [];
                var billingCurrency = data.BillingCurrency;
                coupons = _.map(data.Coupons, function (coupon) {
                    var analyticsCoupon = {
                        code: coupon.CouponCode,
                        discountAmount: coupon.Amount,
                        currencyCode: billingCurrency,
                        promotionName: coupon.PromotionName
                    };
                    return analyticsCoupon;
                });
                return coupons;
            };
            AnalyticsPlugin.prototype.mapAnalyticTransactionFromOrder = function (data) {
                var checkoutOrigin = AnalyticsPlugin.getCheckoutOrigin();
                var analyticsTransaction = {
                    shippingType: data.ShippingOptions,
                    checkoutOrigin: checkoutOrigin
                };
                return analyticsTransaction;
            };
            //Abstract methods
            AnalyticsPlugin.prototype.userLoggedIn = function (type, source) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.userCreated = function () {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.recoverPassword = function () {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.singleFacetChanged = function (searchFilters) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.multiFacetChanged = function (searchFilters) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.sortingChanged = function (sortingType, pageType) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.productImpressions = function (products) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.productClick = function (product, listName) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.productDetailImpressions = function (products, listName) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.addToCart = function (product, listName) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.addToWishList = function (product) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.removeFromCart = function (product, listName) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.checkout = function (step, transaction, products) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.checkoutOption = function (step) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.purchase = function (order, transaction, products) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.couponsUsed = function (order) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.shareWishList = function (data) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.searchKeywordCorrection = function (data) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.noResultsFound = function (keywordNotFound) {
                console.error('Not implemented Exception');
            };
            /**
             * Send a custom event to the analytics providers with multiples informations concerning the event
             * https://support.google.com/analytics/answer/1033068?hl=en
             * @param {string} eventName - The name of the custom event to send (e.g. productClick)
             * @param {string} category - The name that you supply as a way to group objects that you want to track (e.g. Product)
             * @param {string} action - The name the type of event or interaction you want to track for a particular web object (e.g. Click)
             * @param {string} label - Provide additional information for events that you want to track (e.g. Url of the clicked product)
             * @param {number} value - Use it to assign a numerical value to a tracked page object (e.g. Price of the product)
             */
            AnalyticsPlugin.prototype.sendEvent = function (eventName, category, action, label, value) {
                console.error('Not implemented Exception');
            };
            AnalyticsPlugin.prototype.trimPrice = function (price) {
                if (typeof price === 'number') {
                    return price;
                }
                return price ? parseFloat(price.match(/[\d\.\d]+/i)[0]) : null;
            };
            AnalyticsPlugin.prototype.trimPriceAndUnlocalize = function (price) {
                if (!price || typeof price === 'number') {
                    return price;
                }
                // remove anything that is not a digit, '.' or ','
                price = price.replace(/[^0-9,.]/, '');
                // if price contains a '.' its an English price and you can remove any ','
                if (price.indexOf('.') !== -1) {
                    price = price.replace(',', '');
                }
                else {
                    price = price.replace(',', '.');
                }
                return price ? parseFloat(price.match(/[\d\.\d]+/i)[0]) : null;
            };
            AnalyticsPlugin.prototype.formatDate = function (date) {
                var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
                if (month.length < 2) {
                    month = '0' + month;
                }
                if (day.length < 2) {
                    day = '0' + day;
                }
                return [year, month, day].join('-');
            };
            return AnalyticsPlugin;
        }());
        Composer.AnalyticsPlugin = AnalyticsPlugin;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));



/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
/// <reference path='../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
/// <reference path='./AnalyticsPlugin.ts' />
/// <reference path='./IAnalyticsProduct.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var GoogleAnalyticsPlugin = (function (_super) {
            __extends(GoogleAnalyticsPlugin, _super);
            function GoogleAnalyticsPlugin() {
                _super.apply(this, arguments);
            }
            GoogleAnalyticsPlugin.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                if (!window['dataLayer']) {
                    console.warn('The dataLayer variable does not exists. Have you included the gtm.js script ?');
                    window['dataLayer'] = [];
                }
            };
            GoogleAnalyticsPlugin.prototype.userLoggedIn = function (type, source) {
                dataLayer.push({
                    event: 'accountLogin',
                    loginType: type,
                    loginSource: source
                });
            };
            GoogleAnalyticsPlugin.prototype.userCreated = function () {
                dataLayer.push({
                    event: 'accountCreated'
                });
            };
            GoogleAnalyticsPlugin.prototype.recoverPassword = function () {
                dataLayer.push({
                    event: 'passRecovery'
                });
            };
            GoogleAnalyticsPlugin.prototype.singleFacetChanged = function (searchFilters) {
                dataLayer.push({
                    event: 'filterRefinement',
                    filterName: searchFilters.facetKey,
                    filterValue: searchFilters.facetValue,
                    sectionName: searchFilters.pageType
                });
            };
            GoogleAnalyticsPlugin.prototype.multiFacetChanged = function (searchFilters) {
                dataLayer.push({
                    event: 'filterRefinement',
                    filterName: searchFilters.facetKey,
                    filterValue: searchFilters.facetValue,
                    sectionName: searchFilters.pageType
                });
            };
            GoogleAnalyticsPlugin.prototype.sortingChanged = function (sortingType, pageType) {
                dataLayer.push({
                    event: 'sortingOption',
                    sortingType: sortingType,
                    sectionName: pageType
                });
            };
            GoogleAnalyticsPlugin.prototype.productImpressions = function (products) {
                dataLayer.push({
                    event: 'productImpressions',
                    ecommerce: {
                        impressions: products
                    }
                });
            };
            GoogleAnalyticsPlugin.prototype.productClick = function (products, listName) {
                dataLayer.push({
                    event: 'productClick',
                    ecommerce: {
                        click: {
                            actionField: {
                                list: listName
                            },
                            products: products
                        }
                    }
                });
            };
            GoogleAnalyticsPlugin.prototype.productDetailImpressions = function (products, listName) {
                dataLayer.push({
                    event: 'productDetailImpressions',
                    ecommerce: {
                        detail: {
                            actionField: {
                                list: listName
                            },
                            products: products
                        }
                    }
                });
            };
            GoogleAnalyticsPlugin.prototype.addToCart = function (product, listName) {
                dataLayer.push({
                    event: 'addToCart',
                    ecommerce: {
                        add: {
                            actionField: { list: listName },
                            products: [product]
                        }
                    }
                });
            };
            GoogleAnalyticsPlugin.prototype.addToWishList = function (product) {
                dataLayer.push({
                    'event': 'addToWishList',
                    'productName': product.name,
                    'productPrice': product.price
                });
            };
            GoogleAnalyticsPlugin.prototype.couponsUsed = function (coupon) {
                dataLayer.push({
                    'event': 'checkoutComplete',
                    'couponCode': coupon.code,
                    'discountAmount': coupon.discountAmount
                });
            };
            GoogleAnalyticsPlugin.prototype.shareWishList = function (data) {
                dataLayer.push({
                    'event': 'shareMyWishList'
                });
            };
            GoogleAnalyticsPlugin.prototype.removeFromCart = function (product, listName) {
                dataLayer.push({
                    event: 'removeFromCart',
                    ecommerce: {
                        remove: {
                            actionField: { list: listName },
                            products: [product]
                        }
                    }
                });
            };
            GoogleAnalyticsPlugin.prototype.checkout = function (step, transaction, products) {
                dataLayer.push({
                    event: 'checkout',
                    transaction: transaction,
                    ecommerce: {
                        checkout: {
                            actionField: {
                                step: this.getStepNumber(step)
                            },
                            products: products
                        }
                    }
                });
            };
            GoogleAnalyticsPlugin.prototype.checkoutOption = function (step) {
                dataLayer.push({
                    event: 'checkoutOption',
                    ecommerce: {
                        checkout_option: {
                            actionField: {
                                step: this.getStepNumber(step)
                            }
                        }
                    }
                });
            };
            GoogleAnalyticsPlugin.prototype.purchase = function (order, transaction, products) {
                dataLayer.push({
                    event: 'purchase',
                    transaction: transaction,
                    ecommerce: {
                        purchase: {
                            actionField: order,
                            products: products
                        }
                    }
                });
            };
            GoogleAnalyticsPlugin.prototype.noResultsFound = function (keywordNotFound) {
                dataLayer.push({
                    'event': 'noResults',
                    'keywordEntered': keywordNotFound
                });
            };
            GoogleAnalyticsPlugin.prototype.searchKeywordCorrection = function (searchResults) {
                dataLayer.push({
                    'event': 'keywordCorrection',
                    'keywordCorrected': searchResults.keywordCorrected,
                    'keywordEntered': searchResults.keywordEntered
                });
            };
            GoogleAnalyticsPlugin.prototype.sendEvent = function (eventName, category, action, label, value) {
                dataLayer.push({
                    event: eventName,
                    gaEventCategory: category,
                    gaEventAction: action,
                    gaEventLabel: label,
                    gaEventValue: value
                });
            };
            GoogleAnalyticsPlugin.prototype.getStepNumber = function (step) {
                return step + 1;
            };
            return GoogleAnalyticsPlugin;
        }(Composer.AnalyticsPlugin));
        Composer.GoogleAnalyticsPlugin = GoogleAnalyticsPlugin;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventHub.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var AddToCartNotificationController = (function (_super) {
            __extends(AddToCartNotificationController, _super);
            function AddToCartNotificationController() {
                _super.apply(this, arguments);
            }
            AddToCartNotificationController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            AddToCartNotificationController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('lineItemAddedToCart', function (e) {
                    _this.displayNotification(e);
                });
            };
            AddToCartNotificationController.prototype.displayNotification = function (e) {
                var _this = this;
                var notificationContainer = $(this.context.container), notificationTime = notificationContainer.data('notificationTime'), cart = e.data.Cart;
                if (notificationTime > 0) {
                    this.render('AddToCartNotificationModal', cart);
                    notificationContainer.removeClass('hidden');
                    setTimeout(function () {
                        _this.closeNotification();
                    }, parseInt(notificationTime, 10));
                }
            };
            AddToCartNotificationController.prototype.onClose = function (e) {
                e.event.preventDefault();
                this.closeNotification();
            };
            AddToCartNotificationController.prototype.closeNotification = function () {
                $(this.context.container).addClass('hidden');
            };
            return AddToCartNotificationController;
        }(Composer.Controller));
        Composer.AddToCartNotificationController = AddToCartNotificationController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='./ICachePolicy.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />



var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        (function (CacheError) {
            CacheError[CacheError["NotFound"] = 0] = "NotFound";
            CacheError[CacheError["Expired"] = 1] = "Expired";
        })(Composer.CacheError || (Composer.CacheError = {}));
        var CacheError = Composer.CacheError;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='./ICachePolicy.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='./../Storage/IStorage.ts' />
/// <reference path='./../Storage/IStorageItem.ts' />
/// <reference path='./CacheError.ts' />
/// <reference path='./ICache.ts' />
/// <reference path='./ICacheItem.ts' />
/// <reference path='./ICachePolicy.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var NoExpirationPolicy = {};
        /**
         * This cache uses a client-side storage engine to provide object caching
         */
        var StorageBasedCache = (function () {
            function StorageBasedCache(storage, type) {
                var _this = this;
                if (!storage) {
                    throw new Error('The storage is required');
                }
                if (!type) {
                    throw new Error('The type is required');
                }
                this._type = type;
                this._storage = storage;
                this._storageInitializing =
                    storage.init().then(function () { return storage.initObjectStore(_this._type); });
            }
            StorageBasedCache.prototype.get = function (key) {
                var _this = this;
                if (!key) {
                    throw new Error('The key is required');
                }
                return this._storageInitializing
                    .then(function () { return _this._storage.get(_this._type, key); })
                    .then(function (cacheItem) { return _this.validate(key, cacheItem).then(function () { return cacheItem.value; }); });
            };
            StorageBasedCache.prototype.validate = function (key, item) {
                var _this = this;
                return Q.Promise(function (resolve, reject) {
                    if (_.isNull(item) || _.isNull(item.value)) {
                        reject(Composer.CacheError.NotFound);
                    }
                    else if (_this.isExpired(item)) {
                        _this._storageInitializing
                            .then(function () { return _this._storage.remove(_this._type, key); })
                            .done(function () { return reject(Composer.CacheError.Expired); }, function (reason) { return reject(reason); });
                    }
                    else {
                        item.lastAccessed = new Date().getTime();
                        var storageItem = {
                            id: key,
                            value: item
                        };
                        _this._storageInitializing
                            .then(function () { return _this._storage.set(_this._type, storageItem); })
                            .done(function () { return resolve(void 0); }, function (reason) { return reject(reason); });
                    }
                });
            };
            StorageBasedCache.prototype.isExpired = function (item) {
                var expirationTime, now = new Date().getTime();
                if (item.policy && item.policy.absoluteExpiration) {
                    expirationTime = item.policy.absoluteExpiration;
                }
                else if (item.policy && item.policy.slidingExpiration) {
                    expirationTime = item.lastAccessed + (item.policy.slidingExpiration * 1000);
                }
                else {
                    return false;
                }
                return expirationTime < now;
            };
            StorageBasedCache.prototype.set = function (key, value, policy, type) {
                var _this = this;
                if (!key) {
                    throw new Error('The key is required');
                }
                var typeItem = !type ? this._type : type;
                var cacheItem = {
                    value: value,
                    policy: !policy ? NoExpirationPolicy : policy,
                    lastAccessed: new Date().getTime()
                };
                var storageItem = {
                    id: key,
                    value: cacheItem
                };
                return this._storageInitializing
                    .then(function () { return _this._storage.set(typeItem, storageItem); })
                    .then(function () { return value; });
            };
            StorageBasedCache.prototype.clear = function (key) {
                var _this = this;
                if (!key) {
                    throw new Error('The key is required');
                }
                return this._storageInitializing
                    .then(function () { return _this._storage.remove(_this._type, key); });
            };
            StorageBasedCache.prototype.fullClear = function () {
                var _this = this;
                return this._storageInitializing
                    .then(function () { return _this._storage.fullRemove(_this._type); });
            };
            return StorageBasedCache;
        }());
        Composer.StorageBasedCache = StorageBasedCache;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='./IStorage.ts' />
/// <reference path='./IStorageItem.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var BackingStorage = (function () {
            function BackingStorage(_storage) {
                this._storage = _storage;
                this._isInitialized = false;
                this._initializedObjectStores = {};
            }
            BackingStorage.prototype.init = function () {
                var _this = this;
                return Q.fcall(function () {
                    _this._isInitialized = true;
                });
            };
            BackingStorage.prototype.initObjectStore = function (type) {
                var _this = this;
                if (!type) {
                    throw new Error('The type is required');
                }
                return Q.fcall(function () {
                    if (!_this._isInitialized) {
                        throw new Error('The local storage has not been initialized');
                    }
                    _this.initObjectStoreImpl(type);
                });
            };
            BackingStorage.prototype.initObjectStoreImpl = function (type) {
                var objectStore = this.getObjectStore(type);
                if (!objectStore) {
                    objectStore = {};
                    this.setObjectStore(type, objectStore);
                }
                this._initializedObjectStores[type] = true;
            };
            BackingStorage.prototype.get = function (type, id) {
                var _this = this;
                if (!type) {
                    throw new Error('The type is required');
                }
                if (!id) {
                    throw new Error('The id is required');
                }
                return Q.fcall(function () {
                    if (!_this._isInitialized) {
                        throw new Error('The local storage has not been initialized');
                    }
                    if (!_this._initializedObjectStores[type]) {
                        throw new Error('The object store ' + type + ' has not been initialized');
                    }
                    return _this.getImpl(type, id);
                });
            };
            BackingStorage.prototype.getImpl = function (type, id) {
                var objectStore = this.getObjectStore(type);
                if (objectStore.hasOwnProperty(id)) {
                    return objectStore[id];
                }
                return null;
            };
            BackingStorage.prototype.remove = function (type, id) {
                var _this = this;
                if (!type) {
                    throw new Error('The type is required');
                }
                if (!id) {
                    throw new Error('The id is required');
                }
                return Q.fcall(function () {
                    if (!_this._isInitialized) {
                        throw new Error('The local storage has not been initialized');
                    }
                    if (!_this._initializedObjectStores[type]) {
                        throw new Error('The object store ' + type + ' has not been initialized');
                    }
                    _this.removeImpl(type, id);
                });
            };
            BackingStorage.prototype.fullRemove = function (type) {
                var _this = this;
                if (!type) {
                    throw new Error('The type is required');
                }
                return Q.fcall(function () {
                    if (!_this._isInitialized) {
                        throw new Error('The local storage has not been initialized');
                    }
                    if (!_this._initializedObjectStores[type]) {
                        throw new Error('The object store ' + type + ' has not been initialized');
                    }
                    _this.fullRemoveImpl(type);
                });
            };
            BackingStorage.prototype.removeImpl = function (type, id) {
                var objectStore = this.getObjectStore(type);
                if (objectStore.hasOwnProperty(id)) {
                    delete objectStore[id];
                    this.setObjectStore(type, objectStore);
                }
            };
            BackingStorage.prototype.fullRemoveImpl = function (type) {
                this.setObjectStore(type, null);
            };
            BackingStorage.prototype.set = function (type, item) {
                var _this = this;
                if (!type) {
                    throw new Error('The type is required');
                }
                if (!item) {
                    throw new Error('The item is required');
                }
                if (!item.id) {
                    throw new Error('The item id is required');
                }
                return Q.fcall(function () {
                    if (!_this._isInitialized) {
                        throw new Error('The local storage has not been initialized');
                    }
                    if (!_this._initializedObjectStores[type]) {
                        throw new Error('The object store ' + type + ' has not been initialized');
                    }
                    _this.setImpl(type, item);
                });
            };
            BackingStorage.prototype.setImpl = function (type, item) {
                var objectStore = this.getObjectStore(type);
                objectStore[item.id] = item.value;
                this.setObjectStore(type, objectStore);
            };
            BackingStorage.prototype.getObjectStore = function (type) {
                var objectStoreString = this._storage.getItem(type);
                var objectStore = JSON.parse(objectStoreString);
                return objectStore;
            };
            BackingStorage.prototype.setObjectStore = function (type, objectStore) {
                var objectStoreString = JSON.stringify(objectStore);
                this._storage.setItem(type, objectStoreString);
            };
            return BackingStorage;
        }());
        Composer.BackingStorage = BackingStorage;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        (function (StorageType) {
            StorageType[StorageType["localStorage"] = 0] = "localStorage";
            StorageType[StorageType["sessionStorage"] = 1] = "sessionStorage";
        })(Composer.StorageType || (Composer.StorageType = {}));
        var StorageType = Composer.StorageType;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='./StorageType.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var localStoragePolyFill;
        var sessionStoragePolyFill;
        var StoragePolyfill = (function () {
            function StoragePolyfill() {
            }
            StoragePolyfill.create = function (windowHandle, storageType) {
                var lastStorage, lastStorageKey, storagePolyFill;
                if (storageType === void 0) {
                    throw {
                        name: 'StoragePolyfillException',
                        message: "A storage type must be specified in the storage polyfill create method."
                    };
                }
                switch (storageType) {
                    case Composer.StorageType.localStorage:
                        storagePolyFill = localStoragePolyFill;
                        break;
                    case Composer.StorageType.sessionStorage:
                        storagePolyFill = sessionStoragePolyFill;
                        break;
                }
                if (storagePolyFill !== void 0) {
                    return storagePolyFill;
                }
                function persist(storage) {
                    windowHandle.name = JSON.stringify(storage);
                }
                function getStorageKey(key) {
                    return key.concat(storageType.toString());
                }
                function getStorageApi() {
                    return {
                        clear: function () {
                            var key;
                            Object.keys(storagePolyFill).forEach(function (key) {
                                if (storagePolyFill.hasOwnProperty(key)) {
                                    delete storagePolyFill[key];
                                }
                            });
                            persist(storagePolyFill);
                        },
                        getItem: function (key) {
                            key = getStorageKey(key);
                            return storagePolyFill[key] || null;
                        },
                        key: function (index) {
                            var keys = null;
                            keys = Object.keys(storagePolyFill).filter(function (value, indexToMatch) { return indexToMatch === index; });
                            return keys.length > 0 ? keys[0] : null;
                        },
                        removeItem: function (key) {
                            key = getStorageKey(key);
                            if (key in storagePolyFill && storagePolyFill.hasOwnProperty(key)) {
                                delete storagePolyFill[key];
                                persist(storagePolyFill);
                            }
                        },
                        setItem: function (key, data) {
                            key = getStorageKey(key);
                            storagePolyFill[key] = data;
                            persist(storagePolyFill);
                        },
                        dispose: function () {
                            persist(storagePolyFill);
                        }
                    };
                }
                storagePolyFill = Object.create(getStorageApi());
                if (windowHandle.name !== '') {
                    lastStorage = JSON.parse(windowHandle.name);
                    for (lastStorageKey in lastStorage) {
                        if (lastStorage.hasOwnProperty(lastStorageKey)) {
                            storagePolyFill[lastStorageKey] = lastStorage[lastStorageKey];
                        }
                    }
                }
                switch (storageType) {
                    case Composer.StorageType.localStorage:
                        localStoragePolyFill = storagePolyFill;
                        return localStoragePolyFill;
                    case Composer.StorageType.sessionStorage:
                        sessionStoragePolyFill = storagePolyFill;
                        return sessionStoragePolyFill;
                }
            };
            return StoragePolyfill;
        }());
        Composer.StoragePolyfill = StoragePolyfill;
        ;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='./StoragePolyfill.ts' />
///<reference path='./StorageType.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        //We need to defer the evaluation of the storage since on google chrome / incognito mode,
        //it raise a security error exception / access denied
        function getStorage(storageCallback, storageType, window) {
            var dummyData = '__composer__data__bidon__';
            try {
                var storageToUse = storageCallback();
                if (storageToUse !== void 0) {
                    //Hack to support safari browser / anonymous mode since it support local storage but with a max size of 0kb,
                    //thus we try to insert dummy data to check if it break or not.
                    storageToUse.setItem(dummyData, dummyData);
                    storageToUse.removeItem(dummyData);
                    return storageToUse;
                }
            }
            catch (e) {
                console.log('Storage is not supported or is disabled. window.name will be used instead.');
            }
            return Composer.StoragePolyfill.create(window, storageType);
        }
        Composer.StorageFactory = {
            create: function (storageType, window) {
                switch (storageType) {
                    case Composer.StorageType.localStorage:
                        return getStorage(function () { return window.localStorage; }, storageType, window);
                    case Composer.StorageType.sessionStorage:
                        return getStorage(function () { return window.sessionStorage; }, storageType, window);
                    default:
                        throw {
                            name: 'StorageTypeException',
                            message: "The storage type \"" + storageType + "\" is currently not supported."
                        };
                }
            }
        };
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='./ICache.ts' />
///<reference path='./ICacheProvider.ts' />
///<reference path='./StorageBasedCache.ts' />
///<reference path='../Storage/IStorage.ts' />
///<reference path='../Storage/BackingStorage.ts' />
/// <reference path='../Storage/StorageFactory.ts' />
/// <reference path='../Storage/StorageType.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var CacheProvider = (function () {
            function CacheProvider() {
                this.window = window;
                if (CacheProvider._instance) {
                    throw new Error('Error: Instantiation failed: Use CacheProvider.instance() instead of new.');
                }
                this.defaultCache = this.getDefaultCache();
                this.customCache = this.getCustomCache();
                this.localStorage = this.getLocalStorage();
                this.sessionStorage = this.getSessionStorage();
                CacheProvider._instance = this;
            }
            CacheProvider.instance = function () {
                return CacheProvider._instance;
            };
            CacheProvider.prototype.getCache = function (cacheKey) {
                var backingStorage = this.getLocalStorage();
                return new Composer.StorageBasedCache(new Composer.BackingStorage(backingStorage), cacheKey);
            };
            CacheProvider.prototype.getDefaultCache = function () {
                return this.getCache(CacheProvider.defaultCacheKey);
            };
            CacheProvider.prototype.getCustomCache = function () {
                return this.getCache(CacheProvider.customCacheKey);
            };
            CacheProvider.prototype.getLocalStorage = function () {
                return Composer.StorageFactory.create(Composer.StorageType.localStorage, window);
            };
            CacheProvider.prototype.getSessionStorage = function () {
                return Composer.StorageFactory.create(Composer.StorageType.sessionStorage, window);
            };
            CacheProvider.defaultCacheKey = 'oc-cache';
            CacheProvider.customCacheKey = 'composer-signInHeaderCache';
            CacheProvider._instance = new CacheProvider();
            return CacheProvider;
        }());
        Composer.CacheProvider = CacheProvider;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='./../Mvc/ComposerClient.ts' />
/// <reference path='./ICartRepository.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CartRepository = (function () {
            function CartRepository() {
            }
            CartRepository.prototype.getCart = function () {
                return Composer.ComposerClient.get('/api/cart/getcart');
            };
            CartRepository.prototype.addLineItem = function (productId, variantId, quantity, recurringOrderFrequencyName, recurringOrderProgramName) {
                if (!productId) {
                    throw new Error('The product id is required');
                }
                if (quantity <= 0) {
                    throw new Error('The quantity must be greater than zero');
                }
                var data = {
                    ProductId: productId,
                    VariantId: variantId,
                    Quantity: quantity,
                    RecurringOrderFrequencyName: recurringOrderFrequencyName,
                    RecurringOrderProgramName: recurringOrderProgramName
                };
                return Composer.ComposerClient.post('/api/cart/lineitem', data);
            };
            CartRepository.prototype.updateLineItem = function (lineItemId, quantity, recurringOrderFrequencyName, recurringOrderProgramName) {
                if (!lineItemId) {
                    throw new Error('The line item id is required');
                }
                if (quantity <= 0) {
                    throw new Error('The quantity must be greater than zero');
                }
                var data = {
                    LineItemId: lineItemId,
                    Quantity: quantity,
                    RecurringOrderFrequencyName: recurringOrderFrequencyName,
                    RecurringOrderProgramName: recurringOrderProgramName
                };
                return Composer.ComposerClient.put('/api/cart/lineitem', data);
            };
            CartRepository.prototype.deleteLineItem = function (lineItemId) {
                if (!lineItemId) {
                    throw new Error('The line item id is required');
                }
                var data = {
                    LineItemId: lineItemId
                };
                return Composer.ComposerClient.remove('/api/cart/lineitem', data);
            };
            CartRepository.prototype.updateBillingMethodPostalCode = function (postalCode) {
                if (!postalCode) {
                    throw new Error('The postal code is required');
                }
                var data = {
                    PostalCode: postalCode
                };
                return Composer.ComposerClient.post('/api/cart/billingaddress', data);
            };
            CartRepository.prototype.updateShippingMethodPostalCode = function (postalCode) {
                if (!postalCode) {
                    throw new Error('The postal code is required');
                }
                var data = {
                    PostalCode: postalCode
                };
                return Composer.ComposerClient.post('/api/cart/shippingaddress', data);
            };
            CartRepository.prototype.setCheapestShippingMethod = function () {
                var data = {
                    UseCheapest: true
                };
                return Composer.ComposerClient.post('/api/cart/shippingmethod', data);
            };
            CartRepository.prototype.addCoupon = function (couponCode) {
                if (!couponCode) {
                    throw new Error('The coupon code is required');
                }
                var data = {
                    CouponCode: couponCode
                };
                return Composer.ComposerClient.post('/api/cart/coupon', data);
            };
            CartRepository.prototype.removeCoupon = function (couponCode) {
                if (!couponCode) {
                    throw new Error('The coupon code is required');
                }
                var data = {
                    CouponCode: couponCode
                };
                return Composer.ComposerClient.remove('/api/cart/coupon', data);
            };
            CartRepository.prototype.clean = function () {
                var data = {};
                return Composer.ComposerClient.remove('/api/cart/clean', data);
            };
            CartRepository.prototype.updateCart = function (param) {
                if (!param) {
                    throw new Error('The param is required');
                }
                return Composer.ComposerClient.post('/api/cart/updateCart', param);
            };
            CartRepository.prototype.completeCheckout = function (currentStep) {
                var data = {
                    CurrentStep: currentStep
                };
                return Composer.ComposerClient.post('/api/cart/completecheckout', data);
            };
            return CartRepository;
        }());
        Composer.CartRepository = CartRepository;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Cache/CacheProvider.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Cache/CacheError.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Repositories/CartRepository.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
///<reference path='./ICartService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CartService = (function () {
            function CartService(cartRepository, eventHub) {
                this.cacheKey = 'CartViewModel';
                this.cachePolicy = { slidingExpiration: 300 }; // 5min
                if (!cartRepository) {
                    throw new Error('Error: cartRepository is required');
                }
                if (!eventHub) {
                    throw new Error('Error: eventHub is required');
                }
                this.cacheProvider = Composer.CacheProvider.instance();
                this.cartRepository = cartRepository;
                this.eventHub = eventHub;
            }
            CartService.prototype.getCart = function () {
                var _this = this;
                return this.getCacheCart()
                    .fail(function (reason) {
                    if (_this.canHandle(reason)) {
                        return _this.getFreshCart();
                    }
                    console.error('An error occured while getting the cart from cache.', reason);
                    throw reason;
                });
            };
            CartService.prototype.canHandle = function (reason) {
                return reason === Composer.CacheError.Expired || reason === Composer.CacheError.NotFound;
            };
            CartService.prototype.getFreshCart = function () {
                var _this = this;
                if (!CartService.GettingFreshCart) {
                    CartService.GettingFreshCart = this.cartRepository.getCart()
                        .then(function (cart) { return _this.setCartToCache(cart); });
                }
                // to avoid getting a fresh cart multiple times within a page session
                return CartService.GettingFreshCart
                    .fail(function (reason) {
                    console.error('An error occured while getting a fresh cart.', reason);
                    throw reason;
                });
            };
            CartService.prototype.addLineItem = function (productId, price, variantId, quantity, recurringOrderFrequencyName, recurringOrderProgramName) {
                var _this = this;
                if (quantity === void 0) { quantity = 1; }
                var data = {
                    ProductId: productId,
                    VariantId: variantId,
                    Quantity: quantity,
                    Price: price
                };
                this.eventHub.publish('cartUpdating', { data: data });
                return this.cartRepository.addLineItem(productId, variantId, quantity, recurringOrderFrequencyName, recurringOrderProgramName)
                    .then(function (cart) { return _this.setCartToCache(cart); })
                    .then(function (cart) {
                    var addedToCartData = {
                        Cart: cart,
                        ProductId: productId,
                        VariantId: variantId
                    };
                    _this.eventHub.publish('cartUpdated', { data: cart });
                    _this.eventHub.publish('lineItemAddedToCart', { data: addedToCartData });
                });
            };
            CartService.prototype.updateLineItem = function (lineItemId, quantity, productId, recurringOrderFrequencyName, recurringOrderProgramName) {
                var _this = this;
                var data = {
                    LineItemId: lineItemId,
                    Quantity: quantity,
                    ProductId: productId
                };
                this.eventHub.publish('cartUpdating', { data: data });
                return this.cartRepository.updateLineItem(lineItemId, quantity, recurringOrderFrequencyName, recurringOrderProgramName)
                    .then(function (cart) { return _this.setCartToCache(cart); })
                    .then(function (cart) { return _this.eventHub.publish('cartUpdated', { data: cart }); });
            };
            CartService.prototype.deleteLineItem = function (lineItemId, productId) {
                var _this = this;
                var data = {
                    LineItemId: lineItemId,
                    ProductId: productId
                };
                this.eventHub.publish('cartUpdating', { data: data });
                return this.cartRepository.deleteLineItem(lineItemId)
                    .then(function (cart) { return _this.setCartToCache(cart); })
                    .then(function (cart) { return _this.eventHub.publish('cartUpdated', { data: cart }); });
            };
            CartService.prototype.updateBillingMethodPostalCode = function (postalCode) {
                var _this = this;
                return this.cartRepository.updateBillingMethodPostalCode(postalCode)
                    .then(function (cart) { return _this.setCartToCache(cart); });
            };
            CartService.prototype.updateShippingMethodPostalCode = function (postalCode) {
                var _this = this;
                return this.cartRepository.updateShippingMethodPostalCode(postalCode)
                    .then(function (cart) { return _this.setCartToCache(cart); });
            };
            CartService.prototype.setCheapestShippingMethod = function () {
                var _this = this;
                return this.cartRepository.setCheapestShippingMethod()
                    .then(function (cart) { return _this.setCartToCache(cart); });
            };
            CartService.prototype.addCoupon = function (couponCode) {
                var _this = this;
                return this.cartRepository.addCoupon(couponCode)
                    .then(function (cart) { return _this.setCartToCache(cart); });
            };
            CartService.prototype.removeCoupon = function (couponCode) {
                var _this = this;
                return this.cartRepository.removeCoupon(couponCode)
                    .then(function (cart) { return _this.setCartToCache(cart); });
            };
            CartService.prototype.clean = function () {
                var _this = this;
                return this.cartRepository.clean()
                    .then(function (cart) { return _this.setCartToCache(cart); });
            };
            CartService.prototype.updateCart = function (param) {
                var _this = this;
                return this.cartRepository.updateCart(param)
                    .then(function (result) { return _this.setCartToCache(result.Cart).then(function () { return result; }); });
            };
            CartService.prototype.completeCheckout = function (currentStep) {
                var _this = this;
                return this.cartRepository.completeCheckout(currentStep)
                    .then(function (result) { return _this.setCartToCache(null).then(function () { return result; }); });
            };
            CartService.prototype.invalidateCache = function () {
                return this.cacheProvider.defaultCache.clear(this.cacheKey);
            };
            CartService.prototype.getCacheCart = function () {
                return this.cacheProvider.defaultCache.get(this.cacheKey);
            };
            CartService.prototype.setCartToCache = function (cart) {
                return this.cacheProvider.defaultCache.set(this.cacheKey, cart, this.cachePolicy);
            };
            return CartService;
        }());
        Composer.CartService = CartService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

/// <reference path='../../Typings/tsd.d.ts' />
/// <reference path='./IError.ts' />

/// <reference path='../../Typings/tsd.d.ts' />
/// <reference path='./IError.ts' />

/// <reference path='../../Typings/tsd.d.ts' />
/// <reference path='./IErrorCollection.ts' />
/// <reference path='./IError.ts' />
/// <reference path='./IErrorHandler.ts' />
/// <reference path='../Mvc/Localization/LocalizationProvider.ts' />
/// <reference path='../Events/EventHub.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ErrorHandler = (function () {
            function ErrorHandler() {
            }
            ErrorHandler.instance = function () {
                var instance = new ErrorHandler();
                var memoize = function () { return instance; };
                ErrorHandler.instance = memoize;
                return memoize();
            };
            /**
             * Will output the error to the user.
             * @param {IError} error Error to display.
             */
            ErrorHandler.prototype.outputError = function (error) {
                this.publishGenericErrorEvent(error);
            };
            /**
             * Will localize an error based on its code and will display it
             * to the user.
             * @param {string} errorCode Error code to localize.
             */
            ErrorHandler.prototype.outputErrorFromCode = function (errorCode) {
                var error = this.createErrorFromCode(errorCode);
                this.publishGenericErrorEvent(error);
            };
            ErrorHandler.prototype.createErrorFromCode = function (errorCode) {
                var localization = Composer.LocalizationProvider.instance().getLocalizedString('Errors', "L_" + errorCode);
                var error = {
                    ErrorCode: errorCode,
                    LocalizedErrorMessage: localization
                };
                return error;
            };
            /**
             * Removes all errors from the current page.
             */
            ErrorHandler.prototype.removeErrors = function () {
                this.publishGenericErrorEvent();
            };
            ErrorHandler.prototype.publishGenericErrorEvent = function (error) {
                var errorColl = this.createErrorCollection(error);
                Composer.EventHub.instance().publish('GeneralErrorOccured', {
                    data: errorColl
                });
            };
            ErrorHandler.prototype.createErrorCollection = function (error) {
                var errorCollection = {
                    Errors: []
                };
                if (error) {
                    errorCollection.Errors.push(error);
                }
                return errorCollection;
            };
            return ErrorHandler;
        }());
        Composer.ErrorHandler = ErrorHandler;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Repositories/CartRepository.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/ErrorHandling/ErrorHandler.ts' />
///<reference path='CartService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var FullCartController = (function (_super) {
            __extends(FullCartController, _super);
            function FullCartController() {
                _super.apply(this, arguments);
                this.source = 'Checkout';
                this.loaded = false;
                this.cartService = new Composer.CartService(new Composer.CartRepository(), this.eventHub);
            }
            FullCartController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
                this.loadCart();
            };
            FullCartController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('cartUpdated', function (e) { return _this.onCartUpdated(e.data); });
            };
            FullCartController.prototype.onCartUpdated = function (cart) {
                this.render('CartContent', cart);
                Composer.ErrorHandler.instance().removeErrors();
            };
            FullCartController.prototype.loadCart = function () {
                var _this = this;
                this.cartService.getFreshCart()
                    .then(function (cart) {
                    if (_this.loaded) {
                        return cart;
                    }
                    var e = {
                        data: {
                            Cart: cart,
                            StepNumber: _this.context.viewModel.CurrentStep
                        }
                    };
                    _this.eventHub.publish('checkoutStepRendered', e);
                    return cart;
                })
                    .done(function (cart) {
                    _this.eventHub.publish('cartUpdated', { data: cart });
                    _this.loaded = true;
                }, function (reason) { return _this.loadCartFailed(reason); });
            };
            FullCartController.prototype.loadCartFailed = function (reason) {
                console.error('Error while loading the cart.', reason);
                this.context.container.find('.js-loading').hide();
                Composer.ErrorHandler.instance().outputErrorFromCode('LoadCartFailed');
            };
            FullCartController.prototype.updateLineItem = function (actionContext) {
                var _this = this;
                if (!this.debounceUpdateLineItem) {
                    this.debounceUpdateLineItem =
                        _.debounce(function (args) {
                            return _this.executeLineItemUpdate(args);
                        }, 300);
                }
                var context = actionContext.elementContext;
                context.closest('.cart-row').addClass('is-loading');
                var lineItemId = context.data('lineitemid');
                var productId = context.attr('data-productid');
                var action = context.data('action');
                var quantity = parseInt(context.data('quantity'), 10);
                var tmpQuantity = context.data('tmp-qte') ? parseInt(context.data('tmp-qte'), 10) : null;
                var updatedQuantity = this.updateQuantity(action, tmpQuantity ? tmpQuantity : quantity);
                var recurringOrderFrequencyName = context.data('recurringorderfrequencyname');
                var recurringOrderProgramName = context.data('recurringorderprogramname');
                context.data('tmp-qte', updatedQuantity);
                var args = {
                    context: context,
                    lineItemId: lineItemId,
                    originalQuantity: quantity,
                    updatedQuantity: updatedQuantity,
                    productId: productId,
                    recurringOrderFrequencyName: recurringOrderFrequencyName,
                    recurringOrderProgramName: recurringOrderProgramName
                };
                if (quantity !== updatedQuantity) {
                    //use only debouced function when incrementing/decrementing quantity
                    this.debounceUpdateLineItem(args);
                }
                else {
                    this.executeLineItemUpdate(args);
                }
            };
            FullCartController.prototype.executeLineItemUpdate = function (args) {
                var _this = this;
                this.cartService.getCart().then(function (cart) {
                    var lineItem = _.find(cart.LineItemDetailViewModels, function (li) { return li.Id === args.lineItemId; });
                    if (_this.isUpdateRequired(args, lineItem)) {
                        var delta = args.updatedQuantity - lineItem.Quantity;
                        var positiveDelta = delta < 0 ? delta * -1 : delta;
                        var data = _this.getLineItemDataForAnalytics(lineItem, positiveDelta);
                        if (delta !== 0) {
                            var eventName = (delta > 0) ? 'lineItemAdding' : 'lineItemRemoving';
                            _this.eventHub.publish(eventName, { data: data });
                        }
                        args.context.removeData('tmp-qte');
                        args.context.data('quantity', args.updatedQuantity);
                        return _this.cartService.updateLineItem(args.lineItemId, args.updatedQuantity, args.productId, args.recurringOrderFrequencyName === '' ? null : args.recurringOrderFrequencyName, args.recurringOrderProgramName);
                    }
                    else {
                        _this.render('CartContent', cart);
                        return cart;
                    }
                }).fail(function (reason) { return _this.lineItemUpdateFailed(args.context, reason); });
            };
            FullCartController.prototype.isUpdateRequired = function (updateLineItemArgs, lineItem) {
                if (!lineItem) {
                    return false;
                }
                var shouldUpdateQuantity = updateLineItemArgs.updatedQuantity - lineItem.Quantity !== 0;
                var shouldUpdateRecurringFrequency = updateLineItemArgs.recurringOrderFrequencyName !== lineItem.RecurringOrderFrequencyName;
                var shouldUpdateRecurringProgram = updateLineItemArgs.recurringOrderProgramName !== lineItem.RecurringOrderProgramName;
                return shouldUpdateQuantity || shouldUpdateRecurringFrequency || shouldUpdateRecurringProgram;
            };
            FullCartController.prototype.lineItemUpdateFailed = function (context, reason) {
                console.error('Error while updating line item quantity.', reason);
                context.closest('.cart-row').removeClass('is-loading');
                Composer.ErrorHandler.instance().outputErrorFromCode('LineItemUpdateFailed');
            };
            FullCartController.prototype.getLineItemDataForAnalytics = function (lineItem, quantity) {
                var data = {
                    List: this.source,
                    DisplayName: lineItem.ProductSummary.DisplayName,
                    ProductId: lineItem.ProductId,
                    ListPrice: lineItem.ListPrice,
                    Brand: lineItem.ProductSummary.Brand,
                    CategoryId: lineItem.ProductSummary.CategoryId,
                    Variant: undefined,
                    Quantity: quantity
                };
                if (lineItem.VariantId && lineItem.KeyVariantAttributesList) {
                    data.Variant = this.buildVariantName(lineItem.KeyVariantAttributesList);
                }
                return data;
            };
            FullCartController.prototype.updateQuantity = function (action, quantity) {
                if (!action) {
                    return quantity;
                }
                switch (action.toUpperCase()) {
                    case 'INCREMENT':
                        quantity++;
                        break;
                    case 'DECREMENT':
                        quantity--;
                        if (quantity < 1) {
                            quantity = 1;
                        }
                        break;
                }
                return quantity;
            };
            FullCartController.prototype.deleteLineItem = function (actionContext) {
                var _this = this;
                var context = actionContext.elementContext;
                var lineItemId = context.data('lineitemid');
                var productId = context.attr('data-productid');
                context.closest('.cart-row').addClass('is-loading');
                this.cartService.getCart()
                    .then(function (cart) {
                    var lineItem = _.find(cart.LineItemDetailViewModels, function (li) { return li.Id === lineItemId; });
                    var data = _this.getLineItemDataForAnalytics(lineItem, lineItem.Quantity);
                    _this.eventHub.publish('lineItemRemoving', { data: data });
                    return _this.cartService.deleteLineItem(lineItemId, productId);
                }).fail(function (reason) { return _this.onLineItemDeleteFailed(context, reason); });
            };
            FullCartController.prototype.onLineItemDeleteFailed = function (context, reason) {
                console.error('Error while deleting line item.', reason);
                context.closest('.cart-row').removeClass('is-loading');
                Composer.ErrorHandler.instance().outputErrorFromCode('LineItemDeleteFailed');
            };
            FullCartController.prototype.buildVariantName = function (kvas) {
                var nameParts = [];
                for (var i = 0; i < kvas.length; i++) {
                    var value = kvas[i].OriginalValue;
                    nameParts.push(value);
                }
                return nameParts.join(' ');
            };
            return FullCartController;
        }(Orckestra.Composer.Controller));
        Composer.FullCartController = FullCartController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var ShippingMethodService = (function () {
            function ShippingMethodService() {
            }
            /**
            * Return a Promise which returns the ShippingMethods available for the cart.
            */
            ShippingMethodService.prototype.getShippingMethods = function () {
                return Composer.ComposerClient.get('/api/cart/shippingmethods');
            };
            return ShippingMethodService;
        }());
        Composer.ShippingMethodService = ShippingMethodService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='./IRegionService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var RegionService = (function () {
            function RegionService() {
            }
            RegionService.prototype.getRegions = function () {
                var _this = this;
                if (_.isUndefined(this._memoizeGetRegions)) {
                    this._memoizeGetRegions = _.memoize(function (arg) { return _this.getRegionsImpl(); });
                }
                return this._memoizeGetRegions();
            };
            RegionService.prototype.getRegionsImpl = function () {
                return Composer.ComposerClient.get('/api/address/regions');
            };
            return RegionService;
        }());
        Composer.RegionService = RegionService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/MembershipService.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/ErrorHandling/ErrorHandler.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Repositories/CartRepository.ts' />
///<reference path='../../../CheckoutShippingMethod/source/Typescript/ShippingMethodService.ts' />
///<reference path='../../../CartSummary/Source/Typescript/CartService.ts' />
///<reference path='./IBaseCheckoutController.ts' />
///<reference path='./RegionService.ts' />
///<reference path='./ICheckoutService.ts' />
///<reference path='./ICheckoutContext.ts' />
///<reference path='./IRegisterOptions.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CheckoutService = (function () {
            function CheckoutService() {
                this.orderConfirmationCacheKey = 'orderConfirmationCacheKey';
                this.orderCacheKey = 'orderCacheKey';
                this.registeredControllers = {};
                if (CheckoutService.instance) {
                    throw new Error('Instantiation failed: Use CheckoutService.instance() instead of new.');
                }
                this.eventHub = Composer.EventHub.instance();
                this.window = window;
                this.allControllersReady = Q.defer();
                this.cacheProvider = Composer.CacheProvider.instance();
                this.cartService = new Composer.CartService(new Composer.CartRepository(), this.eventHub);
                this.membershipService = new Composer.MembershipService(new Composer.MembershipRepository());
                this.regionService = new Composer.RegionService();
                this.shippingMethodService = new Composer.ShippingMethodService();
                this.registerAllControllersInitialized();
                CheckoutService.instance = this;
            }
            CheckoutService.getInstance = function () {
                if (!CheckoutService.instance) {
                    CheckoutService.instance = new CheckoutService();
                }
                ;
                return CheckoutService.instance;
            };
            CheckoutService.prototype.registerAllControllersInitialized = function () {
                var _this = this;
                this.eventHub.subscribe('allControllersInitialized', function () {
                    _this.initialize();
                });
            };
            CheckoutService.prototype.initialize = function () {
                var _this = this;
                var authenticatedPromise = this.membershipService.isAuthenticated();
                var getCartPromise = this.getCart();
                var regionsPromise = this.regionService.getRegions();
                var shippingMethodsPromise = this.shippingMethodService.getShippingMethods();
                Q.all([authenticatedPromise, getCartPromise, regionsPromise, shippingMethodsPromise])
                    .spread(function (authVm, cartVm, regionsVm, shippingMethodsVm) {
                    var results = {
                        authenticationViewModel: authVm,
                        cartViewModel: cartVm,
                        regionsViewModel: regionsVm,
                        shippingMethodsViewModel: shippingMethodsVm
                    };
                    return _this.renderControllers(results);
                })
                    .then(function () {
                    _this.allControllersReady.resolve(true);
                })
                    .fail(function (reason) {
                    console.error('Error while initializing CheckoutService.', reason);
                    Composer.ErrorHandler.instance().outputErrorFromCode('CheckoutRenderFailed');
                });
            };
            CheckoutService.prototype.registerController = function (controller) {
                var _this = this;
                if (this.allControllersReady.promise.isPending()) {
                    this.allControllersReady.resolve(false);
                }
                this.allControllersReady.promise
                    .then(function (allControllersReady) {
                    if (allControllersReady) {
                        throw new Error('Too late to register all controllers are ready.');
                    }
                    else {
                        var controllerName = controller.viewModelName;
                        _this.registeredControllers[controllerName] = controller;
                    }
                });
            };
            CheckoutService.prototype.unregisterController = function (controllerName) {
                delete this.registeredControllers[controllerName];
            };
            CheckoutService.prototype.renderControllers = function (checkoutContext) {
                var controllerInstance, renderDataPromises = [];
                for (var controllerName in this.registeredControllers) {
                    if (this.registeredControllers.hasOwnProperty(controllerName)) {
                        controllerInstance = this.registeredControllers[controllerName];
                        renderDataPromises.push(controllerInstance.renderData(checkoutContext));
                    }
                }
                return Q.all(renderDataPromises);
            };
            CheckoutService.prototype.updatePostalCode = function (postalCode) {
                return this.cartService.updateBillingMethodPostalCode(postalCode);
            };
            CheckoutService.prototype.invalidateCache = function () {
                return this.cartService.invalidateCache();
            };
            CheckoutService.prototype.getCart = function () {
                var _this = this;
                if (!_.isNumber(CheckoutService.checkoutStep)) {
                    throw new Error('CheckoutService.checkoutStep has not been set or is not a number.');
                }
                return this.invalidateCache()
                    .then(function () { return _this.cartService.getCart(); })
                    .then(function (cart) {
                    return _this.handleCheckoutSecurity(cart, CheckoutService.checkoutStep);
                })
                    .fail(function (reason) {
                    _this.handleError(reason);
                });
            };
            CheckoutService.prototype.updateCart = function () {
                var _this = this;
                this.allControllersReady.promise
                    .then(function (allControllersReady) {
                    if (!allControllersReady) {
                        throw new Error('All registered controllers are not ready.');
                    }
                });
                if (!_.isNumber(CheckoutService.checkoutStep)) {
                    throw new Error('CheckoutService.checkoutStep has not been set or is not a number.');
                }
                var emptyVm = {
                    CurrentStep: CheckoutService.checkoutStep,
                    UpdatedCart: {}
                };
                return this.buildCartUpdateViewModel(emptyVm)
                    .then(function (vm) { return _this.cartService.updateCart(vm); });
            };
            CheckoutService.prototype.completeCheckout = function () {
                var _this = this;
                if (!_.isNumber(CheckoutService.checkoutStep)) {
                    throw new Error('CheckoutService.checkoutStep has not been set or is not a number.');
                }
                var emptyVm = {
                    CurrentStep: CheckoutService.checkoutStep,
                    UpdatedCart: {}
                };
                return this.buildCartUpdateViewModel(emptyVm)
                    .then(function (vm) {
                    if (_.isEmpty(vm.UpdatedCart)) {
                        console.log('No modification required to the cart.');
                        return vm;
                    }
                    return _this.cartService.updateCart(vm);
                })
                    .then(function (result) {
                    if (result && result.HasErrors) {
                        throw new Error('Error while updating the cart. Complete Checkout will not complete.');
                    }
                    console.log('Publishing the cart!');
                    return _this.cartService.completeCheckout(CheckoutService.checkoutStep);
                });
            };
            CheckoutService.prototype.buildCartUpdateViewModel = function (vm) {
                var _this = this;
                var validationPromise;
                var viewModelUpdatePromise;
                validationPromise = Q(vm).then(function (vm) {
                    return _this.getCartValidation(vm);
                });
                viewModelUpdatePromise = validationPromise.then(function (vm) {
                    return _this.getCartUpdateViewModel(vm);
                });
                return viewModelUpdatePromise;
            };
            CheckoutService.prototype.getCartValidation = function (vm) {
                var validationPromise = this.collectValidationPromises();
                var promise = validationPromise.then(function (results) {
                    console.log('Aggregrating all validation results');
                    var hasFailedValidation = _.any(results, function (r) { return !r; });
                    if (hasFailedValidation) {
                        throw new Error('There were validation errors.');
                    }
                    return vm;
                });
                return promise;
            };
            CheckoutService.prototype.getCartUpdateViewModel = function (vm) {
                var updateModelPromise = this.collectUpdateModelPromises();
                var promise = updateModelPromise.then(function (updates) {
                    console.log('Aggregating all ViewModel updates.');
                    _.each(updates, function (update) {
                        if (update) {
                            var keys = _.keys(update);
                            _.each(keys, function (key) {
                                vm.UpdatedCart[key] = update[key];
                            });
                        }
                    });
                    return vm;
                });
                return promise;
            };
            CheckoutService.prototype.collectValidationPromises = function () {
                var promises = [];
                var controllerInstance;
                var controllerOptions;
                for (var controllerName in this.registeredControllers) {
                    if (this.registeredControllers.hasOwnProperty(controllerName)) {
                        controllerInstance = this.registeredControllers[controllerName];
                        promises.push(controllerInstance.getValidationPromise());
                    }
                }
                return Q.all(promises);
            };
            CheckoutService.prototype.collectUpdateModelPromises = function () {
                var promises = [];
                var controllerInstance;
                var controllerOptions;
                for (var controllerName in this.registeredControllers) {
                    if (this.registeredControllers.hasOwnProperty(controllerName)) {
                        controllerInstance = this.registeredControllers[controllerName];
                        promises.push(controllerInstance.getUpdateModelPromise());
                    }
                }
                return Q.all(promises);
            };
            CheckoutService.prototype.handleCheckoutSecurity = function (cart, targetedStep) {
                var lastStep = cart.OrderSummary.CheckoutRedirectAction.LastCheckoutStep;
                var redirectUrl = cart.OrderSummary.CheckoutRedirectAction.RedirectUrl;
                if (targetedStep > lastStep) {
                    this.window.location.href = redirectUrl;
                }
                return cart;
            };
            CheckoutService.prototype.handleError = function (reason) {
                console.error('Unable to retrieve the cart for the checkout', reason);
                throw reason;
            };
            CheckoutService.prototype.setOrderConfirmationToCache = function (orderConfirmationviewModel) {
                this.cacheProvider.defaultCache.set(this.orderConfirmationCacheKey, orderConfirmationviewModel).done();
            };
            CheckoutService.prototype.getOrderConfirmationFromCache = function () {
                return this.cacheProvider.defaultCache.get(this.orderConfirmationCacheKey);
            };
            CheckoutService.prototype.clearOrderConfirmationFromCache = function () {
                this.cacheProvider.defaultCache.clear(this.orderConfirmationCacheKey).done();
            };
            CheckoutService.prototype.setOrderToCache = function (orderConfirmationviewModel) {
                this.cacheProvider.defaultCache.set(this.orderCacheKey, orderConfirmationviewModel).done();
            };
            return CheckoutService;
        }());
        Composer.CheckoutService = CheckoutService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/JQueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/ErrorHandling/ErrorHandler.ts' />
///<reference path='CheckoutService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var BaseCheckoutController = (function (_super) {
            __extends(BaseCheckoutController, _super);
            function BaseCheckoutController() {
                _super.apply(this, arguments);
                this.debounceTimeout = 300;
            }
            BaseCheckoutController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.checkoutService = Composer.CheckoutService.getInstance();
                this.registerController();
            };
            BaseCheckoutController.prototype.registerController = function () {
                this.checkoutService.registerController(this);
            };
            BaseCheckoutController.prototype.unregisterController = function () {
                this.checkoutService.unregisterController(this.viewModelName);
            };
            BaseCheckoutController.prototype.renderData = function (checkoutContext) {
                throw new Error('Method not implemented');
            };
            BaseCheckoutController.prototype.getValidationPromise = function () {
                var _this = this;
                return Q.fcall(function () { return _this.isValidForUpdate(); });
            };
            BaseCheckoutController.prototype.getUpdateModelPromise = function () {
                var _this = this;
                return Q.fcall(function () {
                    var vm = {};
                    vm[_this.viewModelName] = _this.getViewModelUpdated();
                    return vm;
                });
            };
            BaseCheckoutController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe(this.viewModelName + "Rendered", function () {
                    _this.formInstances = _this.registerFormsForValidation($('form', _this.context.container));
                });
            };
            BaseCheckoutController.prototype.getViewModelUpdated = function () {
                var formContext = $('form', this.context.container), viewModel = formContext.serializeObject();
                return JSON.stringify(viewModel);
            };
            BaseCheckoutController.prototype.isValidForUpdate = function () {
                var isValidForUpdate = _.all(this.formInstances, function (formInstance) { return formInstance.validate(undefined, true); });
                return isValidForUpdate;
            };
            BaseCheckoutController.prototype.onRenderDataFailed = function (reason) {
                this.removeLoading();
                console.error("Failed rendering the control in charge of '" + this.viewModelName + "'.", reason);
                Composer.ErrorHandler.instance().outputErrorFromCode('CheckoutRenderFailed');
            };
            BaseCheckoutController.prototype.removeLoading = function () {
                this.context.container.find('.js-loading').hide();
            };
            return BaseCheckoutController;
        }(Orckestra.Composer.Controller));
        Composer.BaseCheckoutController = BaseCheckoutController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var BillingAddressCheckoutController = (function (_super) {
            __extends(BillingAddressCheckoutController, _super);
            function BillingAddressCheckoutController() {
                _super.apply(this, arguments);
            }
            BillingAddressCheckoutController.prototype.initialize = function () {
                this.viewModelName = 'BillingAddress';
                _super.prototype.initialize.call(this);
            };
            BillingAddressCheckoutController.prototype.changeUseShippingAddress = function () {
                this.setBillingAddressFormVisibility();
                this.setBillingAddressFormValidation();
            };
            BillingAddressCheckoutController.prototype.renderData = function (checkoutContext) {
                var _this = this;
                return Q.fcall(function () {
                    if (checkoutContext.authenticationViewModel.IsAuthenticated) {
                        _this.renderAuthenticated(checkoutContext);
                    }
                    else {
                        _this.renderUnauthenticated(checkoutContext);
                    }
                    ;
                });
            };
            BillingAddressCheckoutController.prototype.renderAuthenticated = function (checkoutContext) {
                this.unregisterController();
                this.render(this.viewModelName, checkoutContext.authenticationViewModel);
            };
            BillingAddressCheckoutController.prototype.renderUnauthenticated = function (checkoutContext) {
                this.registerSubscriptions();
                this.render(this.viewModelName, checkoutContext.cartViewModel);
                this.render('AddressRegionPicker', {
                    Regions: checkoutContext.regionsViewModel,
                    SelectedRegion: this.getRegionCode(checkoutContext.cartViewModel)
                });
                this.eventHub.publish(this.viewModelName + "Rendered", checkoutContext.cartViewModel);
            };
            BillingAddressCheckoutController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe(this.viewModelName + "Rendered", function () { return _this.onRendered(); });
            };
            BillingAddressCheckoutController.prototype.renderDataFailed = function (reason) {
                console.error('Failed to render Billing Address control', reason);
                this.context.container.find('.js-loading').hide();
                //TODO: Error handling
            };
            BillingAddressCheckoutController.prototype.getRegionCode = function (cart) {
                if (cart.Payment === undefined ||
                    cart.Payment.BillingAddress === undefined ||
                    cart.Payment.BillingAddress.RegionCode === undefined ||
                    cart.Payment.BillingAddress.UseShippingAddress) {
                    return '';
                }
                return cart.Payment.BillingAddress.RegionCode;
            };
            BillingAddressCheckoutController.prototype.onRendered = function () {
                var _this = this;
                var useShippingAddress = this.useShippingAddress();
                this.eventHub.subscribe('postalCodeChanged', function (e) { return _this.onPostalCodeChanged(useShippingAddress, e.data); });
                this.formInstances = this.registerFormsForValidation(this.getVisibleForms());
            };
            BillingAddressCheckoutController.prototype.useShippingAddress = function () {
                return $(this.context.container).find('input[name=UseShippingAddress]:checked').val() === 'true';
            };
            BillingAddressCheckoutController.prototype.onPostalCodeChanged = function (useShippingAddress, cart) {
                if (!useShippingAddress) {
                    return;
                }
                var postalCode = cart.ShippingAddress.PostalCode;
                this.checkoutService.updatePostalCode(postalCode).done();
            };
            BillingAddressCheckoutController.prototype.getVisibleForms = function () {
                var visibleForms = $('form', this.context.container).not('form:has(.hide)');
                return visibleForms;
            };
            BillingAddressCheckoutController.prototype.setBillingAddressFormVisibility = function () {
                var useShippingAddress = this.useShippingAddress();
                if (useShippingAddress) {
                    $('#BillingAddressContent').addClass('hide');
                }
                else {
                    $('#BillingAddressContent').removeClass('hide');
                }
            };
            BillingAddressCheckoutController.prototype.setBillingAddressFormValidation = function () {
                var useShippingAddress = this.useShippingAddress();
                var isValidationEnabled = this.isBillingAddressFormValidationEnabled();
                if (useShippingAddress) {
                    if (isValidationEnabled) {
                        this.disableBillingAddressFormValidation();
                    }
                }
                else {
                    if (!isValidationEnabled) {
                        this.enableBillingAddressFormValidation();
                    }
                }
            };
            BillingAddressCheckoutController.prototype.isBillingAddressFormValidationEnabled = function () {
                var _this = this;
                return _.some(this.formInstances, function (formInstance) {
                    return _this.isBillingAddressFormInstance(formInstance);
                });
            };
            BillingAddressCheckoutController.prototype.disableBillingAddressFormValidation = function () {
                var _this = this;
                var formInstance = _.find(this.formInstances, function (formInstance) {
                    return _this.isBillingAddressFormInstance(formInstance);
                });
                formInstance.destroy();
                _.remove(this.formInstances, function (formInstance) {
                    return _this.isBillingAddressFormInstance(formInstance);
                });
            };
            BillingAddressCheckoutController.prototype.isBillingAddressFormInstance = function (formInstance) {
                return formInstance.$element.is('form#BillingAddress');
            };
            BillingAddressCheckoutController.prototype.enableBillingAddressFormValidation = function () {
                this.formInstances = this.formInstances.concat(this.registerFormsForValidation($('form#BillingAddress')));
            };
            return BillingAddressCheckoutController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.BillingAddressCheckoutController = BillingAddressCheckoutController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='./ICustomerRepository.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CustomerRepository = (function () {
            function CustomerRepository() {
            }
            /**
            * Attempt to register using Composer API.
            * @param
            */
            CustomerRepository.prototype.updateAccount = function (formData, returnUrl) {
                var data = _.extend({ ReturnUrl: returnUrl }, formData);
                return Composer.ComposerClient.post('/api/customer/update', data);
            };
            /**
            * Get the customer addresses.
            */
            CustomerRepository.prototype.getAddresses = function () {
                return Composer.ComposerClient.get('/api/customer/addresses');
            };
            /**
            * Create a new customer address
            * @param
            */
            CustomerRepository.prototype.createAddress = function (formData, returnUrl) {
                var data = _.extend({ ReturnUrl: returnUrl }, formData);
                return Composer.ComposerClient.post('/api/customer/addresses', data);
            };
            /**
            * Update a customer address
            * @param
            */
            CustomerRepository.prototype.updateAddress = function (formData, addressId, returnUrl) {
                var data = _.extend({ ReturnUrl: returnUrl }, formData);
                return Composer.ComposerClient.post('/api/customer/addresses/' + addressId, data);
            };
            /**
            * Delete a customer address
            * @param
            */
            CustomerRepository.prototype.deleteAddress = function (addressId, returnUrl) {
                var data = { ReturnUrl: returnUrl };
                return Composer.ComposerClient.remove('/api/customer/addresses/' + addressId, data);
            };
            /**
            * Set default address for a customer
            * @param
            */
            CustomerRepository.prototype.setDefaultAddress = function (addressId, returnUrl) {
                var data = { ReturnUrl: returnUrl };
                return Composer.ComposerClient.post('/api/customer/setdefaultaddress/' + addressId, data);
            };
            return CustomerRepository;
        }());
        Composer.CustomerRepository = CustomerRepository;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Repositories/CustomerRepository.ts' />
///<reference path='ICustomerService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CustomerService = (function () {
            function CustomerService(customerRepository) {
                if (!customerRepository) {
                    throw new Error('Error: customerRepository is required');
                }
                this.customerRepository = customerRepository;
            }
            /**
            * Attempt to register using Composer API.
            * @param
            */
            CustomerService.prototype.updateAccount = function (formData, returnUrl) {
                return this.customerRepository.updateAccount(formData, returnUrl);
            };
            /**
            * Get the customer addresses.
            */
            CustomerService.prototype.getAddresses = function () {
                var _this = this;
                if (_.isUndefined(this.memoizeGetAdresses)) {
                    this.memoizeGetAdresses = _.memoize(function (arg) { return _this.getAddressesImpl(); });
                }
                return this.memoizeGetAdresses();
            };
            CustomerService.prototype.getAddressesImpl = function () {
                return this.customerRepository.getAddresses();
            };
            /**
            * Create a new customer address
            * @param
            */
            CustomerService.prototype.createAddress = function (formData, returnUrl) {
                return this.customerRepository.createAddress(formData, returnUrl);
            };
            /**
            * Update a customer address
            * @param
            */
            CustomerService.prototype.updateAddress = function (formData, addressId, returnUrl) {
                return this.customerRepository.updateAddress(formData, addressId, returnUrl);
            };
            /**
            * Delete a customer address
            * @param
            */
            CustomerService.prototype.deleteAddress = function (addressId, returnUrl) {
                return this.customerRepository.deleteAddress(addressId, returnUrl);
            };
            /**
            * Set default address for a customer
            * @param
            */
            CustomerService.prototype.setDefaultAddress = function (addressId, returnUrl) {
                return this.customerRepository.setDefaultAddress(addressId, returnUrl);
            };
            return CustomerService;
        }());
        Composer.CustomerService = CustomerService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/jqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='../../../Common/Source/Typescript/MembershipService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        (function (MyAccountStatus) {
            MyAccountStatus[MyAccountStatus["Success"] = 0] = "Success";
            MyAccountStatus[MyAccountStatus["InvalidTicket"] = 1] = "InvalidTicket";
            MyAccountStatus[MyAccountStatus["DuplicateEmail"] = 2] = "DuplicateEmail";
            MyAccountStatus[MyAccountStatus["DuplicateUserName"] = 3] = "DuplicateUserName";
            MyAccountStatus[MyAccountStatus["InvalidQuestion"] = 4] = "InvalidQuestion";
            MyAccountStatus[MyAccountStatus["InvalidPassword"] = 5] = "InvalidPassword";
            MyAccountStatus[MyAccountStatus["InvalidPasswordAnswer"] = 6] = "InvalidPasswordAnswer";
            MyAccountStatus[MyAccountStatus["InvalidEmail"] = 7] = "InvalidEmail";
            MyAccountStatus[MyAccountStatus["Failed"] = 8] = "Failed";
            MyAccountStatus[MyAccountStatus["UserRejected"] = 9] = "UserRejected";
            MyAccountStatus[MyAccountStatus["RequiresApproval"] = 10] = "RequiresApproval";
            MyAccountStatus[MyAccountStatus["AjaxFailed"] = 11] = "AjaxFailed";
        })(Composer.MyAccountStatus || (Composer.MyAccountStatus = {}));
        var MyAccountStatus = Composer.MyAccountStatus;
        ;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));



///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/CustomerService.ts' />
///<reference path='../../../CheckoutCommon/Source/Typescript/AddressDto.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var BillingAddressRegisteredCheckoutService = (function () {
            function BillingAddressRegisteredCheckoutService(customerService) {
                this.customerService = customerService;
            }
            /**
            * Get the customer addresses. The selected billing address is taken from the cart by default.
            * If no address has been set in the cart, the selected billing address corresponds to the preferred address.
            */
            BillingAddressRegisteredCheckoutService.prototype.getBillingAddresses = function (cart) {
                var _this = this;
                if (!cart) {
                    throw new Error('The cart is required');
                }
                return this.customerService.getAddresses()
                    .then(function (addresses) {
                    addresses.AddressesLoaded = true;
                    addresses.SelectedBillingAddressId = _this.getSelectedBillingAddressId(cart, addresses);
                    return addresses;
                });
            };
            BillingAddressRegisteredCheckoutService.prototype.getSelectedBillingAddressId = function (cart, addressList) {
                if (this.isBillingAddressFromCartValid(cart, addressList)) {
                    return cart.Payment.BillingAddress.AddressBookId;
                }
                return this.getPreferredBillingAddressId(addressList);
            };
            BillingAddressRegisteredCheckoutService.prototype.isBillingAddressFromCartValid = function (cart, addressList) {
                if (cart.Payment === undefined) {
                    return false;
                }
                if (cart.Payment.BillingAddress === undefined) {
                    return false;
                }
                return _.any(addressList.Addresses, function (address) { return address.Id === cart.Payment.BillingAddress.AddressBookId; });
            };
            BillingAddressRegisteredCheckoutService.prototype.getPreferredBillingAddressId = function (addressList) {
                var preferredBillingAddress = _.find(addressList.Addresses, function (address) { return address.IsPreferredBilling; });
                return preferredBillingAddress === undefined ? undefined : preferredBillingAddress.Id;
            };
            return BillingAddressRegisteredCheckoutService;
        }());
        Composer.BillingAddressRegisteredCheckoutService = BillingAddressRegisteredCheckoutService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var UIModal = (function () {
            function UIModal(window, modalContextSelector, confirmAction, sender) {
                var _this = this;
                this.openModal = function (event) {
                    _this.modalContext = $(_this.modalContextSelector);
                    _this.confirmDeferred = Q.defer();
                    _this.modalContext.on('shown.bs.modal', function (event) {
                        $('[data-dismiss]', event.target).focus();
                    });
                    _this.modalContext.on('hide.bs.modal', function (event) {
                        $(event.target).off('shown.bs.modal hide.bs.modal');
                        if (_this.confirmDeferred.promise.isPending()) {
                            _this.confirmDeferred.resolve(false);
                        }
                    });
                    _this.modalContext.modal('show');
                    _this.confirmDeferred.promise
                        .then(function (value) {
                        _this.modalContext.modal('hide');
                        if (value) {
                            return _this.confirmAction.call(_this.sender, event);
                        }
                    })
                        .done(null, function (error) {
                        console.log(error);
                    });
                };
                this.confirmAction = confirmAction;
                this.modalContextSelector = modalContextSelector;
                this.window = window;
                this.sender = sender;
                this.registerDomEvents();
            }
            UIModal.prototype.registerDomEvents = function () {
                $(this.window.document).on('click', '.modal--confirm', this.confirmModal.bind(this));
                $(this.window.document).on('click', '.modal--cancel', this.cancelModal.bind(this));
            };
            UIModal.prototype.unregisterDomEvents = function () {
                $(this.window.document).off('click', '.modal--confirm', this.confirmModal);
                $(this.window.document).off('click', '.modal--cancel', this.cancelModal);
            };
            UIModal.prototype.confirmModal = function () {
                this.confirmDeferred.resolve(true);
            };
            UIModal.prototype.cancelModal = function () {
                this.confirmDeferred.resolve(false);
            };
            UIModal.prototype.dispose = function () {
                this.unregisterDomEvents();
            };
            return UIModal;
        }());
        Composer.UIModal = UIModal;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/CustomerService.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/MyAccountStatus.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
///<reference path='./BillingAddressRegisteredCheckoutService.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/UI/UIModal.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var BillingAddressRegisteredCheckoutController = (function (_super) {
            __extends(BillingAddressRegisteredCheckoutController, _super);
            function BillingAddressRegisteredCheckoutController() {
                _super.apply(this, arguments);
                this.debounceChangeBillingMethod = _.debounce(this.changeBillingAddressImpl, 500, { 'leading': true });
                this.modalElementSelector = '#confirmationModal';
                this.customerService = new Composer.CustomerService(new Composer.CustomerRepository());
                this.billingAddressRegisteredCheckoutService = new Composer.BillingAddressRegisteredCheckoutService(this.customerService);
            }
            BillingAddressRegisteredCheckoutController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.viewModelName = 'BillingAddressRegistered';
                this.uiModal = new Composer.UIModal(window, this.modalElementSelector, this.deleteAddress, this);
            };
            BillingAddressRegisteredCheckoutController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe(this.viewModelName + "Rendered", function (e) { return _this.onRendered(e); });
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressDeleted], function (e) { return _this.onAddressDeleted(e); });
            };
            BillingAddressRegisteredCheckoutController.prototype.renderData = function (checkoutContext) {
                if (checkoutContext.authenticationViewModel.IsAuthenticated) {
                    return this.renderAuthenticated(checkoutContext);
                }
                else {
                    this.renderUnauthenticated(checkoutContext);
                }
            };
            BillingAddressRegisteredCheckoutController.prototype.renderUnauthenticated = function (checkoutContext) {
                this.unregisterController();
                this.render(this.viewModelName, checkoutContext.authenticationViewModel);
            };
            BillingAddressRegisteredCheckoutController.prototype.renderAuthenticated = function (checkoutContext) {
                var _this = this;
                this.registerSubscriptions();
                this.render(this.viewModelName, { IsAuthenticated: true });
                return this.billingAddressRegisteredCheckoutService.getBillingAddresses(checkoutContext.cartViewModel)
                    .then(function (billingAdressesVm) {
                    _this.render(_this.viewModelName, checkoutContext.cartViewModel);
                    _this.render('BillingRegisteredAddresses', billingAdressesVm);
                })
                    .fail(function (reason) { return _this.handleError(reason); })
                    .fin(function () { return _this.eventHub.publish(_this.viewModelName + "Rendered", checkoutContext.cartViewModel); });
            };
            BillingAddressRegisteredCheckoutController.prototype.onRendered = function (e) {
                var _this = this;
                this.formInstances = this.registerFormsForValidation($('#RegisteredBillingAddress', this.context.container));
                var selectedBillingAddressId = $(this.context.container).find('input[name=BillingAddressId]:checked').val();
                if (!selectedBillingAddressId) {
                    return;
                }
                this.checkoutService.getCart()
                    .then(function (cart) {
                    if (selectedBillingAddressId !== cart.Payment.BillingAddress.AddressBookId) {
                        _this.debounceChangeBillingMethod();
                    }
                })
                    .fail(function (reason) { return _this.handleError(reason); });
            };
            BillingAddressRegisteredCheckoutController.prototype.setSelectedBillingAddress = function () {
                var _this = this;
                var selectedBillingAddressId = $(this.context.container).find('input[name=BillingAddressId]:checked').val();
                if (!selectedBillingAddressId) {
                    return;
                }
                this.checkoutService.getCart()
                    .done(function (cart) {
                    if (selectedBillingAddressId !== cart.Payment.BillingAddress.AddressBookId) {
                        _this.debounceChangeBillingMethod();
                    }
                });
            };
            BillingAddressRegisteredCheckoutController.prototype.changeBillingAddress = function (actionContext) {
                this.debounceChangeBillingMethod();
            };
            BillingAddressRegisteredCheckoutController.prototype.changeBillingAddressImpl = function () {
                var _this = this;
                this.checkoutService.updateCart()
                    .done(function (result) {
                    if (result.HasErrors) {
                        throw new Error('The updated cart contains errors');
                    }
                }, function (reason) { return _this.handleError(reason); });
            };
            /**
             * Requires the element in action context to have a data-address-id.
             */
            BillingAddressRegisteredCheckoutController.prototype.deleteAddress = function (event) {
                var _this = this;
                var element = $(event.target);
                var $addressListItem = element.closest('[data-address-id]');
                var addressId = $addressListItem.data('address-id');
                var busy = this.asyncBusy({ elementContext: element, containerContext: $addressListItem });
                return this.customerService.deleteAddress(addressId, '')
                    .then(function (result) {
                    _this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressDeleted], { data: addressId });
                })
                    .fail(function () { return _this.renderFailedForm(Composer.MyAccountStatus[Composer.MyAccountStatus.AjaxFailed]); })
                    .fin(function () { return busy.done(); });
            };
            BillingAddressRegisteredCheckoutController.prototype.deleteAddressConfirm = function (actionContext) {
                this.uiModal.openModal(actionContext.event);
            };
            BillingAddressRegisteredCheckoutController.prototype.onAddressDeleted = function (e) {
                var addressId = e.data;
                var $addressListItem = $(this.context.container).find('[data-address-id=' + addressId + ']');
                $addressListItem.remove();
            };
            BillingAddressRegisteredCheckoutController.prototype.useShippingAddress = function () {
                var useShippingAddress = $(this.context.container).find('input[name=UseShippingAddress]:checked').val() === 'true';
                return useShippingAddress;
            };
            BillingAddressRegisteredCheckoutController.prototype.getVisibleForms = function () {
                var visibleForms = $('form', this.context.container).not('form:has(.hide)');
                return visibleForms;
            };
            BillingAddressRegisteredCheckoutController.prototype.changeUseShippingAddress = function () {
                this.setBillingAddressFormVisibility();
                this.setBillingAddressFormValidation();
                this.setSelectedBillingAddress();
            };
            BillingAddressRegisteredCheckoutController.prototype.setBillingAddressFormVisibility = function () {
                var useShippingAddress = this.useShippingAddress();
                if (useShippingAddress) {
                    $('#BillingAddressContent').addClass('hide');
                }
                else {
                    $('#BillingAddressContent').removeClass('hide');
                }
            };
            BillingAddressRegisteredCheckoutController.prototype.setBillingAddressFormValidation = function () {
                var useShippingAddress = this.useShippingAddress();
                var isValidationEnabled = this.isBillingAddressFormValidationEnabled();
                if (useShippingAddress) {
                    if (isValidationEnabled) {
                        this.disableBillingAddressFormValidation();
                    }
                }
                else {
                    if (!isValidationEnabled) {
                        this.enableBillingAddressFormValidation();
                    }
                }
            };
            BillingAddressRegisteredCheckoutController.prototype.isBillingAddressFormValidationEnabled = function () {
                var _this = this;
                return _.some(this.formInstances, function (formInstance) {
                    return _this.isBillingAddressFormInstance(formInstance);
                });
            };
            BillingAddressRegisteredCheckoutController.prototype.disableBillingAddressFormValidation = function () {
                var _this = this;
                var formInstance = _.find(this.formInstances, function (formInstance) {
                    return _this.isBillingAddressFormInstance(formInstance);
                });
                formInstance.destroy();
                _.remove(this.formInstances, function (formInstance) {
                    return _this.isBillingAddressFormInstance(formInstance);
                });
            };
            BillingAddressRegisteredCheckoutController.prototype.isBillingAddressFormInstance = function (formInstance) {
                var isBillingAddressFormInstance = formInstance.$element.is('form#BillingAddressRegistered');
                return isBillingAddressFormInstance;
            };
            BillingAddressRegisteredCheckoutController.prototype.enableBillingAddressFormValidation = function () {
                this.formInstances = this.formInstances.concat(this.registerFormsForValidation($('form#BillingAddressRegistered')));
            };
            BillingAddressRegisteredCheckoutController.prototype.renderFailedForm = function (status) {
                //TODO
            };
            BillingAddressRegisteredCheckoutController.prototype.handleError = function (reason) {
                this.eventHub.publish('cartUpdatingFailed', null);
                console.error('The user changed the billing address, but an error occured when updating the preferred billing address', reason);
            };
            return BillingAddressRegisteredCheckoutController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.BillingAddressRegisteredCheckoutController = BillingAddressRegisteredCheckoutController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CheckoutNavigationController = (function (_super) {
            __extends(CheckoutNavigationController, _super);
            function CheckoutNavigationController() {
                _super.apply(this, arguments);
                this.currentStep = null;
            }
            CheckoutNavigationController.prototype.initialize = function () {
                this.viewModelName = 'checkoutNavigation';
                _super.prototype.initialize.call(this);
                this.checkoutService = Composer.CheckoutService.getInstance();
                this.currentStep = _.findWhere(this.context.viewModel.Steps, { IsActive: true });
                this.renderData();
            };
            CheckoutNavigationController.prototype.renderData = function () {
                var _this = this;
                return Q.fcall(function () {
                    _this.eventHub.publish('checkoutStepRendered', {
                        data: {
                            StepNumber: _this.currentStep.StepNumber,
                            Cart: _this.checkoutService.getCart()
                        }
                    });
                });
            };
            return CheckoutNavigationController;
        }(Orckestra.Composer.Controller));
        Composer.CheckoutNavigationController = CheckoutNavigationController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='./ICheckoutGetCartPromiseFailureHandler.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));



var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/IEventHub.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/IUpdatePaymentOptions.ts' />
///<reference path='./IGetPaymentMethodsOptions' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var PaymentProvider = (function () {
            function PaymentProvider(window, eventHub) {
                this.window = window;
                this.eventHub = eventHub;
            }
            PaymentProvider.prototype.getCurrentPaymentMethod = function () {
                return this._currentPaymentMethod;
            };
            /**
            * Return a Promise which returns an array of Payment Methods.
            */
            PaymentProvider.prototype.getPaymentMethods = function (getPaymentMethodOptions) {
                return Composer.ComposerClient.post('/api/payment/paymentmethods', getPaymentMethodOptions);
            };
            PaymentProvider.prototype.updatePaymentMethod = function (request) {
                var _this = this;
                return Composer.ComposerClient.put('/api/payment/paymentmethod', request)
                    .then(function (payload) {
                    _this._currentPaymentMethod = request;
                    return payload;
                });
            };
            return PaymentProvider;
        }());
        Composer.PaymentProvider = PaymentProvider;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.Cart.UI/CheckoutCommon/Source/TypeScript/BaseCheckoutController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CheckoutCompleteController = (function (_super) {
            __extends(CheckoutCompleteController, _super);
            function CheckoutCompleteController() {
                _super.apply(this, arguments);
            }
            CheckoutCompleteController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.viewModelName = 'CompleteCheckout';
            };
            CheckoutCompleteController.prototype.renderData = function (checkoutContext) {
                return Q(this.render('CheckoutComplete', checkoutContext.cartViewModel));
            };
            return CheckoutCompleteController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.CheckoutCompleteController = CheckoutCompleteController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var GuestCustomerInfoCheckoutController = (function (_super) {
            __extends(GuestCustomerInfoCheckoutController, _super);
            function GuestCustomerInfoCheckoutController() {
                _super.apply(this, arguments);
            }
            GuestCustomerInfoCheckoutController.prototype.initialize = function () {
                this.viewModelName = 'GuestCustomerInfo';
                _super.prototype.initialize.call(this);
            };
            GuestCustomerInfoCheckoutController.prototype.renderData = function (checkoutContext) {
                var _this = this;
                return Q.fcall(function () {
                    if (checkoutContext.authenticationViewModel.IsAuthenticated) {
                        _this.renderAuthenticated(checkoutContext);
                    }
                    else {
                        _this.renderUnauthenticated(checkoutContext);
                    }
                });
            };
            GuestCustomerInfoCheckoutController.prototype.renderAuthenticated = function (checkoutContext) {
                this.unregisterController();
                this.render(this.viewModelName, checkoutContext.authenticationViewModel);
            };
            GuestCustomerInfoCheckoutController.prototype.renderUnauthenticated = function (checkoutContext) {
                this.registerSubscriptions();
                this.render(this.viewModelName, checkoutContext.cartViewModel);
                this.eventHub.publish(this.viewModelName + "Rendered", null);
            };
            return GuestCustomerInfoCheckoutController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.GuestCustomerInfoCheckoutController = GuestCustomerInfoCheckoutController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CheckoutOrderConfirmationController = (function (_super) {
            __extends(CheckoutOrderConfirmationController, _super);
            function CheckoutOrderConfirmationController() {
                _super.apply(this, arguments);
                this.orderConfirmationCacheKey = 'orderConfirmationCacheKey';
                this.orderCacheKey = 'orderCacheKey';
            }
            CheckoutOrderConfirmationController.prototype.initialize = function () {
                var _this = this;
                _super.prototype.initialize.call(this);
                this.cacheProvider = Composer.CacheProvider.instance();
                this.cacheProvider.defaultCache.get(this.orderCacheKey)
                    .then(function (result) {
                    _this.eventHub.publish('CheckoutConfirmation', { data: result });
                    _this.cacheProvider.defaultCache.clear(_this.orderCacheKey).done();
                })
                    .fail(function (reason) {
                    console.error('Unable to retrieve order number from cache, attempt to redirect.');
                });
                this.cacheProvider.defaultCache.get(this.orderConfirmationCacheKey)
                    .then(function (result) {
                    var orderConfirmationviewModel = {
                        OrderNumber: result.OrderNumber,
                        CustomerEmail: result.CustomerEmail
                    };
                    if (orderConfirmationviewModel !== undefined) {
                        _this.render('CheckoutOrderConfirmation', orderConfirmationviewModel);
                        _this.eventHub.publish('checkoutStepRendered', {
                            data: { StepNumber: _this.context.viewModel.CurrentStep }
                        });
                    }
                    else {
                        console.error('Order was placed but it is not possible to retrieve order number from cache.');
                    }
                })
                    .fail(function (reason) {
                    console.error('Unable to retrieve order number from cache, attempt to redirect.');
                    var redirectUrl = _this.context.viewModel.RedirectUrl;
                    if (redirectUrl) {
                        window.location.href = redirectUrl;
                    }
                    else {
                        console.error('Redirect url was not detected.');
                    }
                });
            };
            return CheckoutOrderConfirmationController;
        }(Orckestra.Composer.Controller));
        Composer.CheckoutOrderConfirmationController = CheckoutOrderConfirmationController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CheckoutOrderSummaryController = (function (_super) {
            __extends(CheckoutOrderSummaryController, _super);
            function CheckoutOrderSummaryController() {
                _super.apply(this, arguments);
            }
            CheckoutOrderSummaryController.prototype.initialize = function () {
                this.viewModelName = 'CheckoutOrderSummary';
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
                Composer.CheckoutService.checkoutStep = this.context.viewModel.CurrentStep;
            };
            CheckoutOrderSummaryController.prototype.registerSubscriptions = function () {
                var _this = this;
                _super.prototype.registerSubscriptions.call(this);
                var handle;
                this.eventHub.subscribe('cartUpdating', function () {
                    clearTimeout(handle);
                    handle = setTimeout(function () { return _this.renderLoading(); }, 300);
                });
                this.eventHub.subscribe('cartUpdatingFailed', function () {
                    clearTimeout(handle);
                    _this.reRender();
                });
                this.eventHub.subscribe('cartUpdated', function (e) {
                    clearTimeout(handle);
                    e.data.LoadCheckoutOrderSummary = true;
                    _this.render(_this.viewModelName, e.data);
                });
            };
            CheckoutOrderSummaryController.prototype.renderData = function (checkoutContext) {
                var _this = this;
                return Q.fcall(function () {
                    checkoutContext.cartViewModel.LoadCheckoutOrderSummary = true;
                    _this.render(_this.viewModelName, checkoutContext.cartViewModel);
                });
            };
            CheckoutOrderSummaryController.prototype.reRender = function () {
                var _this = this;
                this.renderLoading();
                this.checkoutService.getCart()
                    .then(function (cartVm) {
                    cartVm.LoadCheckoutOrderSummary = true;
                    _this.render(_this.viewModelName, cartVm);
                })
                    .fail(function (reason) { return _this.onRenderDataFailed(reason); });
            };
            CheckoutOrderSummaryController.prototype.renderLoading = function () {
                return this.render(this.viewModelName, { LoadCheckoutOrderSummary: true, GettingCart: true });
            };
            /**
             *  Update the cart.
             *  If errors are returned, it stay in the same page.
             *  If there is no errors it moves to the next step.
             */
            CheckoutOrderSummaryController.prototype.nextStep = function (actionContext) {
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                Composer.ErrorHandler.instance().removeErrors();
                this.checkoutService.updateCart()
                    .then(function (result) {
                    if (result.HasErrors === false) {
                        window.location.href = result.NextStepUrl;
                    }
                    else {
                        console.error('Error while updating the cart');
                        busy.done();
                    }
                })
                    .fail(function (reason) {
                    console.error('Error on checkout submit.', reason);
                    Composer.ErrorHandler.instance().outputErrorFromCode('CheckoutNextStepFailed');
                    busy.done();
                });
            };
            return CheckoutOrderSummaryController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.CheckoutOrderSummaryController = CheckoutOrderSummaryController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CompleteCheckoutOrderSummaryController = (function (_super) {
            __extends(CompleteCheckoutOrderSummaryController, _super);
            function CompleteCheckoutOrderSummaryController() {
                _super.apply(this, arguments);
            }
            CompleteCheckoutOrderSummaryController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.viewModelName = 'CompleteCheckoutOrderSummary';
                Composer.CheckoutService.checkoutStep = this.context.viewModel.CurrentStep;
                this.registerSubscriptions();
            };
            CompleteCheckoutOrderSummaryController.prototype.renderData = function (checkoutContext) {
                return Q(this.render(this.viewModelName, checkoutContext.cartViewModel));
            };
            /**
            *  complete Checkout
            *  If errors are returned, it stays in the same page.
            *  If there is no errors it moves to the next step.
            */
            CompleteCheckoutOrderSummaryController.prototype.nextStep = function (actionContext) {
                var _this = this;
                var busy = this.asyncBusy();
                this.checkoutService.completeCheckout()
                    .then(function (result) {
                    if (_.isEmpty(result.OrderNumber)) {
                        throw {
                            message: 'We could not complete the order because the order number is empty',
                            data: result
                        };
                    }
                    _this.eventHub.publish('checkoutCompleted', { data: result });
                    _this.checkoutService.setOrderToCache(result);
                    return result;
                })
                    .then(function (result) {
                    var orderConfirmationviewModel = {
                        OrderNumber: result.OrderNumber,
                        CustomerEmail: result.CustomerEmail
                    };
                    _this.checkoutService.setOrderConfirmationToCache(orderConfirmationviewModel);
                    if (result.NextStepUrl) {
                        window.location.href = result.NextStepUrl;
                    }
                })
                    .fail(function (reason) {
                    console.error('An error occurred while completing the checkout.', reason);
                    Composer.ErrorHandler.instance().outputErrorFromCode('CompleteCheckoutFailed');
                    busy.done();
                });
            };
            CompleteCheckoutOrderSummaryController.prototype.registerSubscriptions = function () {
                var _this = this;
                _super.prototype.registerSubscriptions.call(this);
                var handle;
                this.eventHub.subscribe('cartUpdating', function () {
                    clearTimeout(handle);
                    handle = setTimeout(function () { return _this.renderLoading(); }, 300);
                });
                this.eventHub.subscribe('cartUpdatingFailed', function () {
                    clearTimeout(handle);
                    _this.reRender();
                });
                this.eventHub.subscribe('cartUpdated', function (e) {
                    clearTimeout(handle);
                    e.data.GettingCart = false;
                    _this.render(_this.viewModelName, e.data);
                });
            };
            CompleteCheckoutOrderSummaryController.prototype.renderLoading = function () {
                var loadingViewModel = { GettingCart: true };
                return this.render(this.viewModelName, loadingViewModel);
            };
            CompleteCheckoutOrderSummaryController.prototype.reRender = function () {
                var _this = this;
                this.renderLoading();
                this.checkoutService
                    .getCart()
                    .then(function (cartVm) { return _this.render(_this.viewModelName, cartVm); })
                    .fail(function (reason) { return _this.onRenderDataFailed(reason); });
            };
            return CompleteCheckoutOrderSummaryController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.CompleteCheckoutOrderSummaryController = CompleteCheckoutOrderSummaryController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />



///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/System/IDisposable.ts' />
///<reference path='../ViewModels/IActivePaymentViewModel.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var BaseCheckoutPaymentProvider = (function () {
            function BaseCheckoutPaymentProvider(window, eventHub, providerType, providerName) {
                this._providerType = providerType;
                this._providerName = providerName;
                this._window = window;
                this._eventHub = eventHub;
            }
            Object.defineProperty(BaseCheckoutPaymentProvider.prototype, "providerType", {
                /**
                 * Obtains the underlying type of the Payment Provider.
                 * @return {string} Type of the Payment Provider.
                 */
                get: function () {
                    return this._providerType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BaseCheckoutPaymentProvider.prototype, "providerName", {
                /**
                 * Obtains the name of the Payment Provider.
                 * @return {string} Name of the Payment provider.
                 */
                get: function () {
                    return this._providerName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BaseCheckoutPaymentProvider.prototype, "window", {
                get: function () {
                    return this._window;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Method called to get a promise for payment validation.
             * Returns a promise of boolean. The return boolean needs to be false for validation error,
             * or true if valid.
             * @return {Q.Promise<boolean>} Promise that will be executed when we validate the payment control.
             */
            BaseCheckoutPaymentProvider.prototype.validatePayment = function (activePaymentVM) {
                throw new Error('This Payment Provider does not implement the "validatePayment" method.');
            };
            /**
             * Method called to get a promise when payment will submit.
             * @return {Q.Promise<any>} Promise that will be executed when to cart is about the be updated.
             */
            BaseCheckoutPaymentProvider.prototype.submitPayment = function (activePaymentVM) {
                throw new Error('This Payment Provider does not implement the "submitPayment" method.');
            };
            /**
             * Gets the container for the Payment Provider.
             * @return {JQuery} jQuery object.
             */
            BaseCheckoutPaymentProvider.prototype.getForm = function () {
                var form = $('#PaymentForm');
                if (!form || _.isEmpty(form)) {
                    throw new Error('Could not find the element PaymentForm on this page.');
                }
                return form;
            };
            BaseCheckoutPaymentProvider.prototype.dispose = function () {
                //Nothing to do here.
            };
            return BaseCheckoutPaymentProvider;
        }());
        Composer.BaseCheckoutPaymentProvider = BaseCheckoutPaymentProvider;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../ViewModels/IPaymentMethodViewModel.ts' />

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
///<reference path='../Providers/BaseCheckoutPaymentProvider.ts' />
///<reference path='../Repositories/IPaymentRepository.ts' />
///<reference path='./IPaymentService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var PaymentService = (function () {
            function PaymentService(eventHub, paymentRepository) {
                this.eventHub = eventHub;
                this.paymentRepository = paymentRepository;
            }
            /**
             * Return a list of acceptable payment providers details with labels
             * @param  {providers: Array<string>}      Array of provider names.
             * @return {Array<IPaymentMethodViewModel} List of payment provider details
             */
            PaymentService.prototype.getPaymentMethods = function (providers) {
                return this.paymentRepository.getPaymentMethods(providers);
            };
            /**
             * Return the active payment for the active cart
             * @return {IActivePaymentViewModel} Active payment for the active cart.
             */
            PaymentService.prototype.getActivePayment = function () {
                return this.paymentRepository.getActivePayment();
            };
            PaymentService.prototype.removePaymentMethod = function (paymentMethodId, paymentProviderName) {
                return this.paymentRepository.removePaymentMethod(paymentMethodId, paymentProviderName);
            };
            PaymentService.prototype.setPaymentMethod = function (request) {
                return this.paymentRepository.setPaymentMethod(request);
            };
            return PaymentService;
        }());
        Composer.PaymentService = PaymentService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='./IPaymentMethodViewModel.ts' />
///<reference path='./IActivePaymentViewModel.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));



///<reference path='IPaymentProfileListItemViewModel.ts' />

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path="IPaymentRepository.ts" />
///<reference path="../ViewModels/IPaymentViewModel.ts" />
///<reference path="../ViewModels/IActivePaymentViewModel.ts" />
///<reference path="../ViewModels/IPaymentProfileListViewModel.ts" />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var PaymentRepository = (function () {
            function PaymentRepository() {
            }
            /**
             * Return a list of saved payment methods for a specified array of payment provider names
             * @param  {providers: Array<string>}       Array of provider names.
             * @return {Array<IPaymentMethodViewModel>} Instance of the provider.
             */
            PaymentRepository.prototype.getPaymentMethods = function (providers) {
                return Composer.ComposerClient.post('/api/payment/paymentmethods', { Providers: providers });
            };
            /**
             * Return the active payment for the active cart
             * @return {IActivePaymentViewModel} Active payment for the active cart.
             */
            PaymentRepository.prototype.getActivePayment = function () {
                return Composer.ComposerClient.get('/api/payment/activepayment');
            };
            PaymentRepository.prototype.removePaymentMethod = function (paymentMethodId, paymentProviderName) {
                return Composer.ComposerClient.remove('/api/payment/removemethod', {
                    PaymentMethodId: paymentMethodId,
                    PaymentProviderName: paymentProviderName
                });
            };
            PaymentRepository.prototype.setPaymentMethod = function (request) {
                return Composer.ComposerClient.put('/api/payment/paymentMethod', request);
            };
            return PaymentRepository;
        }());
        Composer.PaymentRepository = PaymentRepository;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../../Composer.UI/Source/Typescript/Events/IEventHub.ts' />
/// <reference path='./BaseCheckoutPaymentProvider.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CheckoutPaymentProviderFactory = (function () {
            function CheckoutPaymentProviderFactory(window, eventHub) {
                this._eventHub = eventHub;
                this._window = window;
            }
            /**
             * Determines if the Checkout Payment Provider exists or not.
             * @param  {string}  providerType Type of the provider.
             * @return {boolean}              True if the provider exists in the Orckestra.Composer namespace.
             */
            CheckoutPaymentProviderFactory.prototype.hasProvider = function (providerType) {
                if (Orckestra.Composer[providerType]) {
                    return true;
                }
                return false;
            };
            /**
             * Gets an instance of a Checkout Payment provider. If the provider does not exists, throws an
             * error.
             * @param  {string}                   providerType                  Type of the provider.
             * @param  {string}                   providerName                  Name of the provider.
             * @return {ICheckoutPaymentProvider}                               Instance of the provider.
             */
            CheckoutPaymentProviderFactory.prototype.getInstance = function (providerType, providerName) {
                if (this.hasProvider(providerType)) {
                    var Clazz = Orckestra.Composer[providerType];
                    var instance = new Clazz(this._window, providerName, this._eventHub);
                    return instance;
                }
                throw new Error('Unable to find a class named "' + providerType + '".');
            };
            return CheckoutPaymentProviderFactory;
        }());
        Composer.CheckoutPaymentProviderFactory = CheckoutPaymentProviderFactory;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='Services/IPaymentService.ts' />
///<reference path='Services/PaymentService.ts' />
///<reference path='Repositories/PaymentRepository.ts' />
///<reference path='Providers/BaseCheckoutPaymentProvider.ts' />
///<reference path='Providers/CheckoutPaymentProviderFactory.ts' />
///<reference path='ViewModels/IPaymentViewModel.ts' />
///<reference path='ViewModels/IActivePaymentViewModel.ts' />
///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/ErrorHandling/ErrorHandler.ts' />
///<reference path='../../../../Composer.Cart.UI/CheckoutCommon/Source/TypeScript/CheckoutService.ts' />
///<reference path='../../../../Composer.Cart.UI/CheckoutCommon/Source/TypeScript/BaseCheckoutController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CheckoutPaymentController = (function (_super) {
            __extends(CheckoutPaymentController, _super);
            function CheckoutPaymentController() {
                _super.apply(this, arguments);
                /**
                 * this prevents changing payment method more than once per click
                 * this happens when "new credit card" is selected since we need to
                 * listen for both click and change events to handle both when we
                 * change to new credit card or when new CC is already selected and
                 * we want to come back to the new CC screen
                 */
                this.debounceChangePaymentMethod = _.debounce(this.executeChangePaymentMethod, 300);
            }
            CheckoutPaymentController.prototype.initialize = function () {
                var _this = this;
                _super.prototype.initialize.call(this);
                this._window = window;
                this.viewModelName = 'CheckoutPayment';
                this.paymentService = new Composer.PaymentService(this.eventHub, new Composer.PaymentRepository());
                this.paymentProviders = this.getPaymentProviders();
                this.eventHub.subscribe('paymentMethodsUpdated', function (_) { return _this.renderData(); });
                this.registerSubscriptions();
            };
            CheckoutPaymentController.prototype.selectCreditCardPaymentMethod = function () {
                if (this.viewModel.CreditCardPaymentMethod) {
                    // If a saved credit card is available select the first one
                    if (this.viewModel.SavedCreditCards.length > 0) {
                        this.payWithSavedCreditCard();
                    }
                    else {
                        this.payWithCreditCard();
                    }
                }
            };
            //TODO is it used ?
            CheckoutPaymentController.prototype.payWithSavedCreditCard = function () {
                var provider = _.first(this.viewModel.SavedCreditCards);
                this.changePaymentMethodInternal(provider.Id, provider.PaymentProviderName);
            };
            //TODO is it used ?
            CheckoutPaymentController.prototype.payWithCreditCard = function () {
                var provider = this.viewModel.CreditCardPaymentMethod;
                this.changePaymentMethodInternal(provider.Id, provider.PaymentProviderName);
            };
            CheckoutPaymentController.prototype.changePaymentMethodInternal = function (activeMethodId, paymentProviderName, paymentType) {
                this.viewModel.IsProviderLoading = true;
                this._busyHandler = _super.prototype.asyncBusy.call(this, { elementContext: $(document), containerContext: $(document) });
                this.debounceChangePaymentMethod({ activeMethodId: activeMethodId, paymentProviderName: paymentProviderName, paymentType: paymentType });
            };
            CheckoutPaymentController.prototype.changePaymentMethod = function (actionContext) {
                var activeMethodId = actionContext.elementContext.data('payment-id');
                var paymentProviderName = actionContext.elementContext.data('payment-provider');
                var paymentType = actionContext.elementContext.data('payment-type');
                this.changePaymentMethodInternal(activeMethodId, paymentProviderName, paymentType);
            };
            CheckoutPaymentController.prototype.executeChangePaymentMethod = function (args) {
                var _this = this;
                var activeMethodId = args.activeMethodId, paymentProviderName = args.paymentProviderName, paymentType = args.paymentType;
                this.setPaymentMethod(this.viewModel.PaymentId, activeMethodId, paymentProviderName, paymentType)
                    .then(function (_) { return _this.checkoutService.getCart(); })
                    .then(function (cart) { return _this.eventHub.publish('cartUpdated', { data: cart }); })
                    .fin(function () {
                    _this.viewModel.IsProviderLoading = false;
                    _this.releaseBusyHandler();
                    _this.renderView();
                    _this.formInstances = _this.registerFormsForValidation(_this.context.container.find('form'));
                });
            };
            CheckoutPaymentController.prototype.renderData = function () {
                var _this = this;
                return this.paymentService
                    .getPaymentMethods(_.map(this.paymentProviders, function (p) { return p.providerName; }))
                    .then(function (vm) {
                    if (!vm) {
                        throw new Error('No viewModel received');
                    }
                    if (_.isEmpty(vm.PaymentMethods)) {
                        throw new Error('No payment method was found.');
                    }
                    _this.viewModel = vm;
                    if (_this.viewModel.ActivePaymentViewModel) {
                        _this.activePaymentProvider = _this.findPaymentProviderByType(vm.ActivePaymentViewModel.ProviderType);
                        return _this.viewModel;
                    }
                    else {
                        var defaultPaymentMethod = _this.findDefaultPaymentMethod(vm.PaymentMethods);
                        // only set the payment method if we found an appropriate default payment method
                        if (!!defaultPaymentMethod) {
                            // If we don't already have an active payment selected
                            // we found a defaultPaymentMethod (either the default or the only one)
                            // there is always going to be at least one (default provider + saved payment methods)
                            return _this.setPaymentMethod(vm.PaymentId, defaultPaymentMethod.Id, defaultPaymentMethod.PaymentProviderName, defaultPaymentMethod.PaymentType);
                        }
                    }
                })
                    .then(function (vm) {
                    _this.renderView();
                    _this.formInstances = _this.registerFormsForValidation(_this.context.container.find('form'));
                })
                    .fail(function (reason) {
                    _this.onInitializePaymentMethodFailed(reason);
                });
            };
            CheckoutPaymentController.prototype.getValidationPromise = function () {
                if (!this.activePaymentProvider || !this.viewModel.ActivePaymentViewModel) {
                    return Q(false);
                }
                if (!this.isValidForUpdate()) {
                    return Q(false);
                }
                return this.activePaymentProvider
                    .validatePayment(this.viewModel.ActivePaymentViewModel);
            };
            CheckoutPaymentController.prototype.getUpdateModelPromise = function () {
                var _this = this;
                return Q.fcall(function () {
                    console.log('Committing payment information.');
                    return _this.activePaymentProvider.submitPayment(_this.viewModel.ActivePaymentViewModel);
                });
            };
            CheckoutPaymentController.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                _.each(this.paymentProviders, function (p) { return p.dispose(); });
            };
            CheckoutPaymentController.prototype.findDefaultPaymentMethod = function (paymentMethods) {
                var defaultPaymentMethod = _.find(paymentMethods, function (paymentMethod) { return paymentMethod.Default && paymentMethod.IsValid; });
                if (!!defaultPaymentMethod) {
                    return defaultPaymentMethod;
                }
                else {
                    return _.find(paymentMethods, function (paymentMethod) { return paymentMethod.IsValid; });
                }
                //return null;
            };
            CheckoutPaymentController.prototype.onInitializePaymentMethodFailed = function (reason) {
                _super.prototype.removeLoading.call(this);
                console.error('Error while retrieving payment methods', reason);
                Composer.ErrorHandler.instance().outputErrorFromCode('CheckoutRenderFailed');
            };
            CheckoutPaymentController.prototype.renderView = function () {
                this.render(this.viewModelName, this.viewModel);
            };
            CheckoutPaymentController.prototype.setPaymentMethod = function (paymentId, activeMethodId, paymentProviderName, paymentType) {
                var _this = this;
                return this.paymentService.setPaymentMethod({
                    PaymentId: paymentId,
                    PaymentProviderName: paymentProviderName,
                    PaymentMethodId: activeMethodId,
                    PaymentType: paymentType,
                    Providers: _.map(this.paymentProviders, function (p) { return p.providerName; })
                })
                    .then(function (paymentViewModel) {
                    _this.activePaymentProvider = _this.findPaymentProviderByType(paymentViewModel.ActivePaymentViewModel.ProviderType);
                    _this.viewModel = paymentViewModel;
                    Composer.ErrorHandler.instance().removeErrors();
                    return paymentViewModel;
                })
                    .fail(function (reason) {
                    _this.onChangePaymentMethodFailed(reason);
                });
            };
            CheckoutPaymentController.prototype.onChangePaymentMethodFailed = function (reason) {
                if (this.viewModel) {
                    this.viewModel.ActivePaymentViewModel = null;
                    this.viewModel.IsLoading = false;
                }
                console.error('Error while changing the payment method.', reason);
                Composer.ErrorHandler.instance().outputErrorFromCode('PaymentMethodChangeFailed');
            };
            CheckoutPaymentController.prototype.findPaymentProviderByType = function (providerType) {
                var provider = _.find(this.paymentProviders, function (provider) {
                    return provider.providerType === providerType;
                });
                if (!provider) {
                    throw new Error('Unable to resove any payment provider named "' + providerType + '"');
                }
                return provider;
            };
            CheckoutPaymentController.prototype.getPaymentProviders = function () {
                if (_.isEmpty(this.context.viewModel.PaymentProviders)) {
                    console.error('No payment provider was found in the Context.');
                }
                var factory = new Composer.CheckoutPaymentProviderFactory(this._window, this.eventHub);
                var providers = [];
                _.each(this.context.viewModel.PaymentProviders, function (vm) {
                    var provider = factory.getInstance(vm.ProviderType, vm.ProviderName);
                    providers.push(provider);
                });
                return providers;
            };
            CheckoutPaymentController.prototype.releaseBusyHandler = function () {
                if (this._busyHandler) {
                    this._busyHandler.done();
                    this._busyHandler = null;
                }
            };
            return CheckoutPaymentController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.CheckoutPaymentController = CheckoutPaymentController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/CustomerService.ts' />
///<reference path='../../../CheckoutCommon/Source/Typescript/AddressDto.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var ShippingAddressRegisteredService = (function () {
            function ShippingAddressRegisteredService(customerService) {
                this.customerService = customerService;
            }
            /**
           * Get the customer addresses. The selected shipping address is taken from the cart by default.
           * If no address has been set in the cart, the selected shipping address corresponds to the preferred address.
           */
            ShippingAddressRegisteredService.prototype.getShippingAddresses = function (cart) {
                var _this = this;
                if (!cart) {
                    throw new Error('The cart is required');
                }
                return this.customerService.getAddresses()
                    .then(function (addresses) {
                    addresses.AddressesLoaded = true;
                    addresses.SelectedShippingAddressId = _this.getSelectedShippingAddressId(cart, addresses);
                    return addresses;
                });
            };
            ShippingAddressRegisteredService.prototype.getSelectedShippingAddressId = function (cart, addressList) {
                if (this.isShippingAddressFromCartValid(cart, addressList)) {
                    return cart.ShippingAddress.AddressBookId;
                }
                return this.getPreferredShippingAddressId(addressList);
            };
            ShippingAddressRegisteredService.prototype.isShippingAddressFromCartValid = function (cart, addressList) {
                if (cart.ShippingAddress === undefined) {
                    return false;
                }
                return _.any(addressList.Addresses, function (address) { return address.Id === cart.ShippingAddress.AddressBookId; });
            };
            ShippingAddressRegisteredService.prototype.getPreferredShippingAddressId = function (addressList) {
                var preferredShippingAddress = _.find(addressList.Addresses, function (address) { return address.IsPreferredShipping; });
                return preferredShippingAddress === undefined ? undefined : preferredShippingAddress.Id;
            };
            return ShippingAddressRegisteredService;
        }());
        Composer.ShippingAddressRegisteredService = ShippingAddressRegisteredService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Repositories/CustomerRepository.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/CustomerService.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/MyAccountStatus.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
///<reference path='ShippingAddressRegisteredService.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/UI/UIModal.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var ShippingAddressRegisteredController = (function (_super) {
            __extends(ShippingAddressRegisteredController, _super);
            function ShippingAddressRegisteredController() {
                _super.apply(this, arguments);
                this.debounceChangeShippingMethod = _.debounce(this.changeShippingAddressImpl, 500, { 'leading': true });
                this.customerService = new Composer.CustomerService(new Composer.CustomerRepository());
                this.shippingAddressRegisteredService = new Composer.ShippingAddressRegisteredService(this.customerService);
            }
            ShippingAddressRegisteredController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.viewModelName = 'ShippingAddressRegistered';
                this.deleteModalElementSelector = '#confirmationModal';
                this.uiModal = new Composer.UIModal(window, this.deleteModalElementSelector, this.deleteAddress, this);
            };
            ShippingAddressRegisteredController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe(this.viewModelName + "Rendered", function (e) { return _this.onRendered(e); });
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressDeleted], function (e) { return _this.onAddressDeleted(e); });
            };
            ShippingAddressRegisteredController.prototype.renderData = function (checkoutContext) {
                var _this = this;
                if (checkoutContext.authenticationViewModel.IsAuthenticated) {
                    this.registerSubscriptions();
                    this.render(this.viewModelName, { IsAuthenticated: true, GettingCart: true });
                    return this.shippingAddressRegisteredService.getShippingAddresses(checkoutContext.cartViewModel)
                        .then(function (shippingAdressesVm) {
                        _this.render(_this.viewModelName, checkoutContext.cartViewModel);
                        _this.render('RegisteredAddresses', shippingAdressesVm);
                    })
                        .fail(function (reason) { return _this.handleError(reason); })
                        .fin(function () { return _this.eventHub.publish(_this.viewModelName + "Rendered", checkoutContext.cartViewModel); });
                }
                else {
                    this.unregisterController();
                    this.render(this.viewModelName, checkoutContext.authenticationViewModel);
                }
            };
            ShippingAddressRegisteredController.prototype.onRendered = function (e) {
                var _this = this;
                this.formInstances = this.registerFormsForValidation($('#RegisteredShippingAddress', this.context.container));
                var selectedShippingAddressId = $(this.context.container).find('input[name=ShippingAddressId]:checked').val();
                if (!selectedShippingAddressId) {
                    return;
                }
                this.checkoutService.getCart()
                    .done(function (cart) {
                    if (selectedShippingAddressId !== cart.ShippingAddress.AddressBookId) {
                        _this.debounceChangeShippingMethod();
                    }
                });
            };
            ShippingAddressRegisteredController.prototype.onAddressDeleted = function (e) {
                var addressId = e.data;
                var $addressListItem = $(this.context.container).find('[data-address-id=' + addressId + ']');
                $addressListItem.remove();
            };
            ShippingAddressRegisteredController.prototype.changeShippingAddress = function (actionContext) {
                this.debounceChangeShippingMethod();
            };
            ShippingAddressRegisteredController.prototype.changeShippingAddressImpl = function () {
                var _this = this;
                this.eventHub.publish('cartUpdating', null);
                this.checkoutService.updateCart()
                    .done(function (result) {
                    if (result.HasErrors) {
                        throw new Error('The updated cart contains errors');
                    }
                    _this.eventHub.publish('cartUpdated', { data: result.Cart });
                }, function (reason) { return _this.handleError(reason); });
            };
            ShippingAddressRegisteredController.prototype.deleteAddressConfirm = function (actionContext) {
                this.uiModal.openModal(actionContext.event);
            };
            ShippingAddressRegisteredController.prototype.deleteAddress = function (event) {
                var _this = this;
                var element = $(event.target);
                var $addressListItem = element.closest('[data-address-id]');
                var addressId = $addressListItem.data('address-id');
                var busy = this.asyncBusy({ elementContext: element, containerContext: $addressListItem });
                return this.customerService.deleteAddress(addressId, '')
                    .then(function (result) {
                    _this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressDeleted], { data: addressId });
                })
                    .fail(function () { return _this.renderFailedForm(Composer.MyAccountStatus[Composer.MyAccountStatus.AjaxFailed]); })
                    .fin(function () { return busy.done(); });
            };
            ShippingAddressRegisteredController.prototype.renderFailedForm = function (status) {
                //TODO
            };
            ShippingAddressRegisteredController.prototype.handleError = function (reason) {
                this.eventHub.publish('cartUpdatingFailed', null);
                console.error('The user changed the shipping address, but we were unable to estimate shipping dynamically', reason);
            };
            return ShippingAddressRegisteredController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.ShippingAddressRegisteredController = ShippingAddressRegisteredController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/IEventHub.ts' />
///<reference path='../../../../Composer.Cart.UI/CartSummary/Source/Typescript/CartService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var ShippingAddressCheckoutService = (function () {
            function ShippingAddressCheckoutService(cartService, eventHub) {
                if (!cartService) {
                    throw new Error('Error: cartService is required');
                }
                if (!eventHub) {
                    throw new Error('Error: eventHub is required');
                }
                this.cartService = cartService;
                this.eventHub = eventHub;
            }
            ShippingAddressCheckoutService.prototype.setCheapestShippingMethodUsing = function (postalCode) {
                var _this = this;
                this.eventHub.publish('cartUpdating', null);
                return this.cartService.updateShippingMethodPostalCode(postalCode)
                    .then(function () { return _this.cartService.setCheapestShippingMethod(); })
                    .then(function () { return _this.cartService.getCart(); })
                    .then(function (cart) {
                    _this.eventHub.publish('cartUpdated', { data: cart });
                    _this.eventHub.publish('postalCodeChanged', { data: cart });
                })
                    .fail(function (reason) { return _this.handleError(reason); });
            };
            ShippingAddressCheckoutService.prototype.handleError = function (reason) {
                console.error('The user changed the postal code, ' +
                    'but we were unable to update the cart dynamically and estimate shipping fees', reason);
                this.eventHub.publish('cartUpdatingFailed', null);
            };
            return ShippingAddressCheckoutService;
        }());
        Composer.ShippingAddressCheckoutService = ShippingAddressCheckoutService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
///<reference path='../../../CartSummary/Source/Typescript/CartService.ts' />
///<reference path='ShippingAddressCheckoutService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ShippingAddressCheckoutController = (function (_super) {
            __extends(ShippingAddressCheckoutController, _super);
            function ShippingAddressCheckoutController() {
                _super.apply(this, arguments);
                this.shippingAddressCheckoutService = new Composer.ShippingAddressCheckoutService(new Composer.CartService(new Composer.CartRepository(), this.eventHub), this.eventHub);
            }
            ShippingAddressCheckoutController.prototype.initialize = function () {
                this.viewModelName = 'ShippingAddress';
                _super.prototype.initialize.call(this);
            };
            ShippingAddressCheckoutController.prototype.renderData = function (checkoutContext) {
                var _this = this;
                return Q.fcall(function () {
                    if (checkoutContext.authenticationViewModel.IsAuthenticated) {
                        _this.unregisterController();
                        _this.render(_this.viewModelName, checkoutContext.authenticationViewModel);
                    }
                    else {
                        _this.registerSubscriptions();
                        _this.render(_this.viewModelName, checkoutContext.cartViewModel);
                        _this.render('AddressRegionPicker', {
                            Regions: checkoutContext.regionsViewModel,
                            SelectedRegion: _this.getRegionCode(checkoutContext.cartViewModel)
                        });
                        _this.eventHub.publish(_this.viewModelName + "Rendered", checkoutContext.cartViewModel);
                    }
                });
            };
            ShippingAddressCheckoutController.prototype.getRegionCode = function (cart) {
                if (cart.ShippingAddress === undefined || cart.ShippingAddress.RegionCode === undefined) {
                    return '';
                }
                return cart.ShippingAddress.RegionCode;
            };
            ShippingAddressCheckoutController.prototype.changePostalCode = function (actionContext) {
                var context = actionContext.elementContext;
                context.val(context.val().toUpperCase());
                if (!this.isValidForUpdate()) {
                    return;
                }
                var postalCode = context.val();
                this.shippingAddressCheckoutService.setCheapestShippingMethodUsing(postalCode).done();
            };
            return ShippingAddressCheckoutController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.ShippingAddressCheckoutController = ShippingAddressCheckoutController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../CheckoutCommon/source/Typescript/BaseCheckoutController.ts' />
///<reference path='ShippingMethodService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ShippingMethodCheckoutController = (function (_super) {
            __extends(ShippingMethodCheckoutController, _super);
            function ShippingMethodCheckoutController() {
                _super.apply(this, arguments);
                this.debounceMethodSelected = _.debounce(this.methodSelectedImpl, 500, { 'leading': true });
            }
            ShippingMethodCheckoutController.prototype.initialize = function () {
                this.viewModelName = 'ShippingMethod';
                _super.prototype.initialize.call(this);
            };
            ShippingMethodCheckoutController.prototype.renderData = function (checkoutContext) {
                var _this = this;
                return Q.fcall(function () {
                    var selectedShippingMethodName = '';
                    if (!_.isUndefined(checkoutContext.cartViewModel.ShippingMethod)) {
                        selectedShippingMethodName = checkoutContext.cartViewModel.ShippingMethod.Name;
                        checkoutContext.shippingMethodsViewModel.ShippingMethods.forEach(function (shippingMethod) {
                            if (shippingMethod.Name === selectedShippingMethodName) {
                                checkoutContext.shippingMethodsViewModel.SelectedShippingProviderId = shippingMethod.ShippingProviderId;
                            }
                        });
                    }
                    _this.render(_this.viewModelName, {
                        Methods: checkoutContext.shippingMethodsViewModel,
                        SelectedMethod: selectedShippingMethodName,
                        HasMethods: !_.isEmpty(checkoutContext.shippingMethodsViewModel.ShippingMethods)
                    });
                    _this.eventHub.publish(_this.viewModelName + "Rendered", null);
                });
            };
            ShippingMethodCheckoutController.prototype.methodSelected = function (actionContext) {
                Composer.ErrorHandler.instance().removeErrors();
                this.debounceMethodSelected(actionContext);
            };
            ShippingMethodCheckoutController.prototype.methodSelectedImpl = function (actionContext) {
                var _this = this;
                this.eventHub.publish('cartUpdating', null);
                this.updateShippingProviderId(actionContext)
                    .then(function () { return _this.checkoutService.updateCart(); })
                    .then(function (result) {
                    if (result.HasErrors) {
                        throw new Error('The updated cart contains errors');
                    }
                    _this.eventHub.publish('cartUpdated', { data: result.Cart });
                })
                    .fail(function (reason) { return _this.handleError(reason); });
            };
            ShippingMethodCheckoutController.prototype.updateShippingProviderId = function (actionContext) {
                return Q.fcall(function () {
                    var shippingProviderId = actionContext.elementContext.data('shipping-provider-id');
                    $('#ShippingProviderId').val(shippingProviderId.toString());
                });
            };
            ShippingMethodCheckoutController.prototype.handleError = function (reason) {
                this.eventHub.publish('cartUpdatingFailed', null);
                console.error('The user changed the shipping method, but we were unable to update the cart dynamically', reason);
                Composer.ErrorHandler.instance().outputErrorFromCode('ShippingMethodUpdateFailed');
            };
            return ShippingMethodCheckoutController;
        }(Orckestra.Composer.BaseCheckoutController));
        Composer.ShippingMethodCheckoutController = ShippingMethodCheckoutController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
///<reference path='../../../../Composer.Cart.UI/CartSummary/Source/Typescript/CartService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CouponService = (function () {
            function CouponService(cartService, eventHub) {
                if (!cartService) {
                    throw new Error('Error: cartService is required');
                }
                if (!eventHub) {
                    throw new Error('Error: eventHub is required');
                }
                this.cartService = cartService;
                this.eventHub = eventHub;
            }
            /**
            * Adds a coupon using the Composer API.
            * @param couponCode Code of the Coupon to add through the API.
            */
            CouponService.prototype.addCoupon = function (couponCode) {
                var _this = this;
                var data = {
                    CouponCode: couponCode
                };
                this.eventHub.publish('couponUpdating', { data: data });
                return this.cartService.addCoupon(couponCode)
                    .then(function () { return _this.cartService.getCart(); })
                    .then(function (cart) {
                    _this.eventHub.publish('cartUpdated', { data: cart });
                    _this.publishCouponUpdatedEvent(cart, true);
                }, function (reason) {
                    console.error('Error while adding coupon', reason);
                    _this.publishCouponUpdatedEvent(undefined, false);
                });
            };
            /**
             * Removes a coupon using the Composer API
             * @param {String} couponCode Code of the coupon to remove.
             */
            CouponService.prototype.removeCoupon = function (couponCode) {
                var _this = this;
                var data = {
                    CouponCode: couponCode
                };
                return this.cartService.removeCoupon(couponCode)
                    .then(function () { return _this.cartService.getCart(); })
                    .then(function (cart) {
                    _this.eventHub.publish('cartUpdated', { data: cart });
                    _this.publishCouponUpdatedEvent(cart, true);
                }, function (reason) { return _this.publishCouponUpdatedEvent(undefined, false); });
            };
            CouponService.prototype.publishCouponUpdatedEvent = function (result, isSuccess) {
                this.eventHub.publish('couponUpdated', { data: result });
            };
            return CouponService;
        }());
        Composer.CouponService = CouponService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Repositories/CartRepository.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/JQueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='./CouponService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        /**
         * Controller for the Coupons section.
         */
        var CouponController = (function (_super) {
            __extends(CouponController, _super);
            function CouponController() {
                _super.apply(this, arguments);
                this.couponService = new Composer.CouponService(new Composer.CartService(new Composer.CartRepository(), this.eventHub), this.eventHub);
                this.isFirstLoad = true;
            }
            CouponController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            /**
             * Registers events on the eventHub.
             */
            CouponController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('cartUpdated', function (eventInfo) {
                    var cart = eventInfo.data;
                    _this.render(_this.isFirstLoad || _.isEmpty(cart) || cart.IsCartEmpty ? 'CouponsSummary' : 'Coupons', cart);
                    _this.isFirstLoad = false;
                });
                this.eventHub.subscribe('couponUpdated', function (e) {
                    _this.onCouponUpdated(e.data);
                });
            };
            /**
             * Event triggered when adding a coupon.
             * @param {IControllerActionContext} actionContext - Event context.
             */
            CouponController.prototype.applyCoupon = function (actionContext) {
                actionContext.event.preventDefault();
                var formData = actionContext.elementContext.serializeObject();
                if (_.isEmpty(formData.couponCode)) {
                    console.log('The coupon code may not be null');
                    return;
                }
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext, msDelay: 300 });
                this.couponService.addCoupon(formData.couponCode)
                    .done(function () { return busy.done(); });
            };
            /**
             * Event triggered when removing a coupon.
             * @param {IControllerActionContext} actionContext - Event context.
             */
            CouponController.prototype.removeCoupon = function (actionContext) {
                var couponCode = actionContext.elementContext.data('couponcode');
                if (_.isEmpty(couponCode)) {
                    console.log('The coupon code may not be null');
                    return;
                }
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this.couponService.removeCoupon(couponCode.toString())
                    .done(function () { return busy.done(); });
            };
            /**
             * Event handler for coupon updated. Fires even if request fails.
             * @param {any} viewModel - ViewModel received by the request. May be undefined if the request failed.
             */
            CouponController.prototype.onCouponUpdated = function (viewModel) {
                var formElement = this.getCouponForm();
                var hasErrorMessage = (!viewModel) || _.some(viewModel.Coupons.Messages, function (m) { return m.Level === 'danger'; });
                if (!hasErrorMessage) {
                    formElement.trigger('reset');
                }
            };
            /**
             * Gets the coupon form handled by this Controller.
             * @return {JQuery} JQuery element matching the first form.
             */
            CouponController.prototype.getCouponForm = function () {
                var forms = $(this.context.container).find('form:first');
                return forms;
            };
            return CouponController;
        }(Orckestra.Composer.Controller));
        Composer.CouponController = CouponController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='./IGetOrderDetailsUrlRequest.ts' />
///<reference path='./IGuestOrderDetailsViewModel.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/IEventHub.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/ComposerClient.ts' />
///<reference path='./IFindOrderService.ts' />
///<reference path='./IGetOrderDetailsUrlRequest.ts' />
///<reference path='./IGuestOrderDetailsViewModel.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var FindOrderService = (function () {
            function FindOrderService(eventHub) {
                this.eventHub = eventHub;
            }
            FindOrderService.prototype.getOrderDetailsUrl = function (req) {
                var _this = this;
                var promise = Composer.ComposerClient.post('/api/order/url', req)
                    .then(function (vm) {
                    _this.eventHub.publish('orderDetailsUrlUpdated', {
                        data: vm
                    });
                    return vm;
                });
                return promise;
            };
            return FindOrderService;
        }());
        Composer.FindOrderService = FindOrderService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/jqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='./IFindOrderService.ts' />
///<reference path='./FindOrderService.ts' />
///<reference path='./IGetOrderDetailsUrlRequest.ts' />
///<reference path='./IGuestOrderDetailsViewModel.ts' />
///<reference path='./IFindMyOrderViewModel.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var FindMyOrderController = (function (_super) {
            __extends(FindMyOrderController, _super);
            function FindMyOrderController() {
                _super.apply(this, arguments);
            }
            FindMyOrderController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerFormsForValidation(this.context.container.find('form'));
                this.findOrderService = new Composer.FindOrderService(this.eventHub);
            };
            FindMyOrderController.prototype.getWindow = function () {
                return window;
            };
            FindMyOrderController.prototype.onFindMyOrder = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var busy = this.asyncBusy();
                var request = actionContext.elementContext.serializeObject();
                this.findOrderAsync(request)
                    .then(function (vm) {
                    _this.getWindow().location.href = vm.Url;
                })
                    .fail(function (reason) {
                    busy.done();
                    if (reason.status && reason.status === 404) {
                        _this.handleOrderNotFound(reason, request);
                    }
                    else {
                        console.error(reason);
                    }
                });
            };
            FindMyOrderController.prototype.findOrderAsync = function (request) {
                return this.findOrderService.getOrderDetailsUrl(request);
            };
            FindMyOrderController.prototype.handleOrderNotFound = function (reason, request) {
                var vm = {
                    Email: request.Email,
                    OrderNumber: request.OrderNumber,
                    OrderNotFound: true
                };
                this.render('FindMyOrder', vm);
            };
            return FindMyOrderController;
        }(Orckestra.Composer.Controller));
        Composer.FindMyOrderController = FindMyOrderController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../Typings/tsd.d.ts' />

///<reference path='../../Typings/tsd.d.ts' />
///<reference path='./IScheduledCallback.ts' />
///<reference path='./EventHub.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        /**
         * Class in charge of scheduling multiple calls to an event.
         * This class is a multiton. Please use the instance() method to get an instance.
         */
        var EventScheduler = (function () {
            /**
             * Constructor. Should be used for testing purposes and inside the multiton only.
             * @param eventName The name of the event to subscribe to.
             */
            function EventScheduler(eventName) {
                var _this = this;
                var instance = EventScheduler.instances[eventName];
                if (instance) {
                    throw new Error('Error: Instantiation failed: Use EventScheduler.instance(eventName: string) instead of new.');
                }
                this.eventName = eventName;
                this.onEventCallbacks = [];
                Composer.EventHub.instance().subscribe(this.eventName, function (e) { return _this.trigger(e.data); });
            }
            /**
             * Get an instance of the EventScheduler for a specific event.
             * @param eventName The name of the event to listen to.
             */
            EventScheduler.instance = function (eventName) {
                var instance = EventScheduler.instances[eventName];
                if (!instance) {
                    instance = new EventScheduler(eventName);
                    EventScheduler.instances[eventName] = instance;
                }
                return instance;
            };
            /**
             * Subscribes a callback to the EventScheduler.
             * @param callback Function to call when the event arises. Must return a promise.
             */
            EventScheduler.prototype.subscribe = function (callback) {
                this.onEventCallbacks.push(callback);
            };
            /**
             * Sets the callback method that will be invoked after all the others are done executing.
             * @param postEventCallback Function to call when all other callbacks have been executed.
             */
            EventScheduler.prototype.setPostEventCallback = function (postEventCallback) {
                this.postEventCallback = postEventCallback;
            };
            EventScheduler.prototype.trigger = function (data) {
                var _this = this;
                var promise = this.triggerCallbacks(data);
                promise
                    .then(function (data) { return _this.triggerPostEvent(data); })
                    .done(function () { return console.log("Event '" + _this.eventName + "' fulfilled by the Event Schedule successfully."); }, function (reason) { return _this.onError(reason); });
            };
            EventScheduler.prototype.triggerCallbacks = function (data) {
                var promise;
                if (_.isEmpty(this.onEventCallbacks)) {
                    promise = Q(data);
                }
                else {
                    var promises = _.map(this.onEventCallbacks, function (callback) { return callback(data); });
                    promise = Q.all(promises)
                        .then(function (values) {
                        return data;
                    });
                }
                return promise;
            };
            EventScheduler.prototype.triggerPostEvent = function (data) {
                var promise;
                if (this.postEventCallback) {
                    promise = this.postEventCallback(data);
                }
                else {
                    promise = Q(data);
                }
                return promise;
            };
            /**
             * Gets invoked when an error occurs while executing the promises chain.
             */
            EventScheduler.prototype.onError = function (reason) {
                console.error("An error occured while processing the event '" + this.eventName + "' with the EventScheduler.", reason);
            };
            EventScheduler.instances = {};
            return EventScheduler;
        }());
        Composer.EventScheduler = EventScheduler;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventScheduler.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Repositories/CartRepository.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventHub.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/IEventInformation.ts' />
///<reference path='../../../CartSummary/Source/Typescript/CartService.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/MyAccountEvents.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var MiniCartController = (function (_super) {
            __extends(MiniCartController, _super);
            function MiniCartController() {
                _super.apply(this, arguments);
                this.cartService = new Composer.CartService(new Composer.CartRepository(), this.eventHub);
            }
            MiniCartController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.initializeMiniCartQuantity();
                this.registerSubscriptions();
            };
            MiniCartController.prototype.initializeMiniCartQuantity = function () {
                var _this = this;
                this.cartService.getCart()
                    .done(function (cart) {
                    if (!_.isEmpty(cart)) {
                        _this.renderCart(cart);
                    }
                });
            };
            MiniCartController.prototype.registerSubscriptions = function () {
                var _this = this;
                var loggedInScheduler = Composer.EventScheduler.instance(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedIn]);
                var loggedOutScheduler = Composer.EventScheduler.instance(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedOut]);
                this.eventHub.subscribe('cartUpdated', function (e) { return _this.onCartUpdated(e); });
                loggedOutScheduler.subscribe(function (e) { return _this.onRefreshUser(e); });
                loggedInScheduler.subscribe(function (e) { return _this.onRefreshUser(e); });
            };
            MiniCartController.prototype.onCartUpdated = function (e) {
                var cart = e.data;
                this.renderCart(cart);
            };
            MiniCartController.prototype.onRefreshUser = function (e) {
                return this.cartService.invalidateCache();
            };
            MiniCartController.prototype.renderCart = function (cart) {
                var viewModel = (_.isEmpty(cart) || cart.TotalQuantity === 0) ? {} : cart;
                this.render('MinicartQuantity', viewModel);
            };
            MiniCartController.prototype.onError = function (reason) {
                console.error("An error occured while rendering the cart with the MiniCartController.", reason);
            };
            return MiniCartController;
        }(Orckestra.Composer.Controller));
        Composer.MiniCartController = MiniCartController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventScheduler.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Repositories/CartRepository.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventHub.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/IEventInformation.ts' />
///<reference path='../../../../Composer.Analytics.UI/Analytics/Source/Typescript/GoogleAnalyticsPlugin.ts' />
///<reference path='../../../CartSummary/Source/Typescript/CartService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var MiniCartSummaryController = (function (_super) {
            __extends(MiniCartSummaryController, _super);
            function MiniCartSummaryController() {
                _super.apply(this, arguments);
                this.cartService = new Composer.CartService(new Composer.CartRepository(), this.eventHub);
                this.cacheProvider = Composer.CacheProvider.instance();
            }
            MiniCartSummaryController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.initializeMiniCartSummary();
                this.registerSubscriptions();
            };
            MiniCartSummaryController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('cartUpdated', function (e) {
                    _this.renderMiniCart(e.data);
                });
                this.eventHub.subscribe('lineItemAddedToCart', function (e) {
                    _this.displayMiniCart(e);
                });
                this.eventHub.subscribe('languageSwitched', function (e) {
                    _this.invalidateCart(e);
                });
            };
            MiniCartSummaryController.prototype.invalidateCart = function (e) {
                this.cartService.invalidateCache();
                this.initializeMiniCartSummary();
            };
            MiniCartSummaryController.prototype.displayMiniCart = function (e) {
                var miniCartContainer = $(this.context.container);
                var notificationTime = parseInt(miniCartContainer.data('notificationTime'), 10);
                var scrollToLineItemKey = e.data.ProductId + '-' + (e.data.VariantId || '');
                if (notificationTime > 0) {
                    miniCartContainer.addClass('displayMiniCart');
                    // Scroll to added item
                    $('.minicart-summary-products', miniCartContainer).stop().animate({
                        scrollTop: $('[data-lineitem-id="' + scrollToLineItemKey + '"]', miniCartContainer).position().top
                    }, 1000);
                    setTimeout(function () {
                        miniCartContainer.removeClass('displayMiniCart');
                    }, notificationTime);
                }
            };
            MiniCartSummaryController.prototype.onCloseMiniCart = function (e) {
                var miniCartContainer = $(this.context.container);
                miniCartContainer.addClass('hidden');
                setTimeout(function () {
                    miniCartContainer.removeClass('hidden');
                }, 500);
            };
            MiniCartSummaryController.prototype.onCheckout = function (actionContext) {
                // Set origin of checkout that we will be used in AnalyticsPlugin
                Composer.AnalyticsPlugin.setCheckoutOrigin('Mini Cart Checkout');
            };
            MiniCartSummaryController.prototype.initializeMiniCartSummary = function () {
                var _this = this;
                var busy = this.asyncBusy({ containerContext: this.context.container });
                this.cartService.getCart().done(function (cart) {
                    if (!_.isEmpty(cart)) {
                        _this.renderMiniCart(cart);
                    }
                    busy.done();
                });
            };
            MiniCartSummaryController.prototype.renderMiniCart = function (cart) {
                this.render('MinicartSummary', cart);
            };
            return MiniCartSummaryController;
        }(Orckestra.Composer.Controller));
        Composer.MiniCartSummaryController = MiniCartSummaryController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path="../../../CheckoutPayment/source/Typescript/ViewModels/IActivePaymentViewModel.ts" />



'use strict';

///<reference path='./ICreateVaultTokenOptions.ts' />
///<reference path='./ISetDefaultCustomerPaymentMethodViewModel.ts' />
///<reference path='./IMonerisAddVaultProfileViewModel.ts' />
///<reference path='../../../CheckoutPayment/source/Typescript/ViewModels/IPaymentMethodViewModel.ts' />
///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var MonerisPaymentService = (function () {
            function MonerisPaymentService() {
            }
            /**
             * Adds a token from Moneris to the current payment.
             * @param  {ICreateVaultTokenOptions} request Request to add the Vault Token.
             * @return {Q.Promise<any>}                   Promise of the AJAX request.
             */
            MonerisPaymentService.prototype.addCreditCard = function (request) {
                return Composer.ComposerClient.post('/api/vaultprofile/addprofile', request);
            };
            MonerisPaymentService.prototype.setDefaultCustomerPaymentMethod = function (request) {
                return Composer.ComposerClient.put('/api/cart/setdefaultpaymentmethod', request);
            };
            MonerisPaymentService.prototype.removePaymentMethod = function (paymentMethodId, paymentProviderName) {
                return Composer.ComposerClient.remove('/api/payment/removemethod', {
                    PaymentMethodId: paymentMethodId,
                    PaymentProviderName: paymentProviderName
                });
            };
            return MonerisPaymentService;
        }());
        Composer.MonerisPaymentService = MonerisPaymentService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../MonerisPaymentService.ts' />
///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.Cart.UI/CheckoutPayment/Source/Typescript/ViewModels/IActivePaymentViewModel.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var BaseSpecializedMonerisCanadaPaymentProvider = (function () {
            function BaseSpecializedMonerisCanadaPaymentProvider(window, paymentService, eventHub) {
                this._window = window;
                this._paymentService = paymentService;
                this._eventHub = eventHub;
            }
            /**
             * Register event handlers for dom events
             */
            BaseSpecializedMonerisCanadaPaymentProvider.prototype.registerDomEvents = function () {
                // do nothing
            };
            /**
             * Unregister event handlers for dom events
             */
            BaseSpecializedMonerisCanadaPaymentProvider.prototype.unregisterDomEvents = function () {
                // do nothing
            };
            /**
             * Method called to get a promise for payment validation.
             * Returns a promise of boolean. The return boolean needs to be false for validation error,
             * or true if valid.
             * @param   {IActivePaymentViewModel}   The current active payment view model
             * @return  {Q.Promise<boolean>}        Promise that will be executed when we validate the payment control.
             */
            BaseSpecializedMonerisCanadaPaymentProvider.prototype.validatePayment = function (activePaymentVM) {
                return Q(true);
            };
            /**
             * Add the temporary token to the vault profile of the user
             * @param   {IActivePaymentViewModel}   The current active payment view model
             * @return  {Q.Promise<any>}            The object is the updated properties of the cart used in CheckoutService.updateCart()
             */
            BaseSpecializedMonerisCanadaPaymentProvider.prototype.addVaultProfileToken = function (activePaymentVM) {
                return Q({});
            };
            return BaseSpecializedMonerisCanadaPaymentProvider;
        }());
        Composer.BaseSpecializedMonerisCanadaPaymentProvider = BaseSpecializedMonerisCanadaPaymentProvider;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='BaseSpecializedMonerisCanadaPaymentProvider.ts' />
///<reference path='../MonerisPaymentService.ts' />
///<reference path='../IMonerisResponseData.ts' />
///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/JQueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/ErrorHandling/ErrorHandler.ts' />
///<reference path='../../../../../Composer.Cart.UI/CheckoutPayment/Source/Typescript/ViewModels/IActivePaymentViewModel.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CreditCardMonerisCanadaPaymentProvider = (function (_super) {
            __extends(CreditCardMonerisCanadaPaymentProvider, _super);
            function CreditCardMonerisCanadaPaymentProvider(window, paymentService, eventHub) {
                _super.call(this, window, paymentService, eventHub);
            }
            /**
             * Register event handlers for dom events
             */
            CreditCardMonerisCanadaPaymentProvider.prototype.registerDomEvents = function () {
                $(this._window).on('message.composer', this.handleMessageResponse.bind(this));
            };
            /**
             * Unregister event handlers for dom events
             */
            CreditCardMonerisCanadaPaymentProvider.prototype.unregisterDomEvents = function () {
                $(this._window).off('message.composer', this.handleMessageResponse);
            };
            /**
             * Method called to get a promise for payment validation.
             * Returns a promise of boolean. The return boolean needs to be false for validation error,
             * or true if valid.
             * @param   {IActivePaymentViewModel}   The current active payment view model
             * @return  {Q.Promise<boolean>}        Promise that will be executed when we validate the payment control.
             */
            CreditCardMonerisCanadaPaymentProvider.prototype.validatePayment = function (activePaymentVM) {
                var _this = this;
                return Q
                    .fcall(function () { return _this.collectAndValidateFormData(); })
                    .then(function (_) {
                    _this.hideAllMonerisErrors();
                    _this._validationDefer = Q.defer();
                    _this._validationDefer.promise
                        .then(function (monerisRes) {
                        _this._validationDefer = null;
                        if (!monerisRes.dataKey) {
                            throw new Error('Moneris did not return a dataKey.');
                        }
                        _this._monerisResponseData = monerisRes;
                        return true;
                    });
                    if (_this._monerisResponseData) {
                        _this._validationDefer.resolve(_this._monerisResponseData);
                    }
                    else {
                        _this.getMonerisIFrame().contentWindow.postMessage('', activePaymentVM.CapturePaymentUrl);
                    }
                    return _this._validationDefer.promise;
                });
            };
            CreditCardMonerisCanadaPaymentProvider.prototype.validateMonerisIFrame = function (vm) {
                var _this = this;
                var monerisFrame = this.getMonerisIFrame();
                var monerisContentWindow = monerisFrame.contentWindow;
                var promise;
                this.hideAllMonerisErrors();
                this._validationDefer = Q.defer();
                promise = this._validationDefer.promise
                    .then(function (monerisRes) {
                    _this._validationDefer = null;
                    if (!monerisRes.dataKey) {
                        throw new Error('Moneris did not return a dataKey.');
                    }
                    _this._monerisResponseData = monerisRes;
                    return true;
                });
                if (this._monerisResponseData) {
                    this._validationDefer.resolve(this._monerisResponseData);
                }
                else {
                    monerisContentWindow.postMessage('', vm.CapturePaymentUrl);
                }
                return this._validationDefer.promise;
            };
            /**
             * Add the temporary token to the vault profile of the user
             * @param   {IActivePaymentViewModel}   The current active payment view model
             * @return  {Q.Promise<any>}            The object is the updated properties of the cart used in CheckoutService.updateCart()
             */
            CreditCardMonerisCanadaPaymentProvider.prototype.addVaultProfileToken = function (activePaymentVM) {
                var _this = this;
                if (!activePaymentVM.ShouldCapturePayment) {
                    return Q({});
                }
                var formData = this.collectAndValidateFormData();
                var request = {
                    CardHolderName: formData.cardholder,
                    CreatePaymentProfile: formData.createPaymentProfile,
                    VaultTokenId: this._monerisResponseData.dataKey,
                    PaymentId: activePaymentVM.Id,
                    PaymentProviderName: activePaymentVM.ProviderName
                };
                console.log('Adding Moneris payment information.');
                return this._paymentService
                    .addCreditCard(request)
                    .then(function (result) {
                    if (!result.Success) {
                        _this._monerisResponseData = null;
                        throw new Error("Moneris: Could not add the credit card to the payment:\n                                                (" + result.ErrorCode + ") " + result.ErrorMessage);
                    }
                    activePaymentVM.ShouldCapturePayment = false;
                    return {};
                });
            };
            CreditCardMonerisCanadaPaymentProvider.prototype.handleMessageResponse = function (e) {
                var monerisEvent = e.originalEvent;
                var msgData = monerisEvent.data;
                var responseData = JSON.parse(monerisEvent.data);
                if (responseData.errorMessage && !_.isEmpty(responseData.errorMessage)) {
                    this.handleMonerisError(monerisEvent, responseData);
                }
                else {
                    this.handleMonerisSuccess(responseData);
                }
            };
            CreditCardMonerisCanadaPaymentProvider.prototype.handleMonerisSuccess = function (responseData) {
                if (!this._validationDefer) {
                    throw new Error('Received Moneris success response, but no validation defer was found.');
                }
                this._validationDefer.resolve(responseData);
            };
            CreditCardMonerisCanadaPaymentProvider.prototype.handleMonerisError = function (monerisEvent, responseData) {
                var errorMsg = monerisEvent.origin + " SENT (" + responseData.responseCode + ") " + responseData.dataKey + "\n            - " + responseData.errorMessage;
                this.showMonerisErrors(responseData.responseCode);
                if (this._validationDefer) {
                    this._validationDefer.reject(new Error(errorMsg));
                }
                else {
                    console.error(errorMsg, responseData);
                }
            };
            CreditCardMonerisCanadaPaymentProvider.prototype.showMonerisErrors = function (errorCodes) {
                var shouldShowGeneral = false;
                _.each(errorCodes, function (code) {
                    var errorNode = $("#monerisError" + code);
                    if (_.isEmpty(errorNode)) {
                        shouldShowGeneral = true;
                    }
                    errorNode.removeClass('hide');
                });
                if (shouldShowGeneral) {
                    $('#monerisErrorGeneral').removeClass('hide');
                }
            };
            CreditCardMonerisCanadaPaymentProvider.prototype.collectAndValidateFormData = function () {
                var form = this.getForm();
                var formData = this._formData || form.serializeObject();
                if (!formData.cardholder) {
                    throw new Error('The form does not contain a field named "cardholder". This is required.');
                }
                return formData;
            };
            CreditCardMonerisCanadaPaymentProvider.prototype.getMonerisIFrame = function () {
                var frames = $('#monerisFrame');
                if (_.isEmpty(frames)) {
                    throw new Error('Cannot find monerisFrame DOM element');
                }
                return frames[0];
            };
            CreditCardMonerisCanadaPaymentProvider.prototype.hideAllMonerisErrors = function () {
                this.getForm()
                    .find('.parsley-errors-list>.parsley-required')
                    .addClass('hide');
                $('#monerisErrorGeneral').addClass('hide');
            };
            /**
             * Gets the container for the Payment Provider.
             * @return {JQuery} jQuery object.
             */
            CreditCardMonerisCanadaPaymentProvider.prototype.getForm = function () {
                var form = $('#PaymentForm');
                if (!form || _.isEmpty(form)) {
                    throw new Error('Could not find the element PaymentForm on this page.');
                }
                return form;
            };
            return CreditCardMonerisCanadaPaymentProvider;
        }(Composer.BaseSpecializedMonerisCanadaPaymentProvider));
        Composer.CreditCardMonerisCanadaPaymentProvider = CreditCardMonerisCanadaPaymentProvider;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='BaseSpecializedMonerisCanadaPaymentProvider.ts' />
///<reference path='../MonerisPaymentService.ts' />
///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/ErrorHandling/ErrorHandler.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/UI/UIModal.ts' />
///<reference path='../../../../../Composer.Cart.UI/CheckoutPayment/Source/Typescript/ViewModels/IActivePaymentViewModel.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var SavedCreditCardMonerisCanadaPaymentProvider = (function (_super) {
            __extends(SavedCreditCardMonerisCanadaPaymentProvider, _super);
            function SavedCreditCardMonerisCanadaPaymentProvider(window, paymentService, eventHub) {
                _super.call(this, window, paymentService, eventHub);
                this._deleteModalElementSelector = '#confirmationModal';
                this._uiModal = new Composer.UIModal(window, this._deleteModalElementSelector, this.deleteCart, this);
            }
            /**
             * Register event handlers for dom events
             */
            SavedCreditCardMonerisCanadaPaymentProvider.prototype.registerDomEvents = function () {
                $(this._window.document).on('click', '.moneris--deletecard', this._uiModal.openModal);
            };
            /**
             * Unregister event handlers for dom events
             */
            SavedCreditCardMonerisCanadaPaymentProvider.prototype.unregisterDomEvents = function () {
                $(this._window.document).off('click', '.moneris--deletecard', this._uiModal.openModal);
            };
            /**
             * Method called to get a promise for payment validation.
             * Returns a promise of boolean. The return boolean needs to be false for validation error,
             * or true if valid.
             * @param   {IActivePaymentViewModel}   The current active payment view model
             * @return  {Q.Promise<boolean>}        Promise that will be executed when we validate the payment control.
             */
            SavedCreditCardMonerisCanadaPaymentProvider.prototype.validatePayment = function (activePaymentVM) {
                // Considering the credit card was already added we do not need to run additional validations
                return Q(true);
            };
            /**
             * Add the temporary token to the vault profile of the user
             * @param   {IActivePaymentViewModel}   The current active payment view model
             * @return  {Q.Promise<any>}            The object is the updated properties of the cart used in CheckoutService.updateCart()
             */
            SavedCreditCardMonerisCanadaPaymentProvider.prototype.addVaultProfileToken = function (activePaymentVM) {
                // no need to add the payment method to the vault
                return Q({});
            };
            SavedCreditCardMonerisCanadaPaymentProvider.prototype.deleteCart = function (event) {
                var _this = this;
                var element = $(event.target);
                var paymentMethodId = element.data('payment-id');
                var paymentProviderName = element.data('payment-provider');
                //TODO : To replace with async busy from controller when change inheritance with controller.
                this._busyHandler = new Composer.UIBusyHandle($(document), $(document), 0);
                // TODO: publish valid event
                return this._paymentService
                    .removePaymentMethod(paymentMethodId, paymentProviderName)
                    .then(function () { return _this._eventHub.publish('paymentMethodsUpdated', null); })
                    .fail(function (reason) { return Composer.ErrorHandler.instance().outputError(reason); })
                    .fin(function () {
                    _this.releaseBusyHandler();
                });
            };
            SavedCreditCardMonerisCanadaPaymentProvider.prototype.releaseBusyHandler = function () {
                if (this._busyHandler) {
                    this._busyHandler.done();
                    this._busyHandler = null;
                }
            };
            return SavedCreditCardMonerisCanadaPaymentProvider;
        }(Composer.BaseSpecializedMonerisCanadaPaymentProvider));
        Composer.SavedCreditCardMonerisCanadaPaymentProvider = SavedCreditCardMonerisCanadaPaymentProvider;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='./ICreateVaultTokenOptions.ts' />
///<reference path='./IMonerisResponseData.ts' />
///<reference path='./MonerisPaymentService.ts' />
///<reference path='./Providers/BaseSpecializedMonerisCanadaPaymentProvider.ts' />
///<reference path='./Providers/CreditCardMonerisCanadaPaymentProvider.ts' />
///<reference path='./Providers/SavedCreditCardMonerisCanadaPaymentProvider.ts' />
///<reference path='../../../CheckoutPayment/Source/Typescript/Providers/BaseCheckoutPaymentProvider.ts' />
///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/IEventHub.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/JQueryPlugins/ISerializeObjectJqueryPlugin.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var MonerisCanadaPaymentProvider = (function (_super) {
            __extends(MonerisCanadaPaymentProvider, _super);
            function MonerisCanadaPaymentProvider(window, providerName, eventHub) {
                _super.call(this, window, eventHub, 'MonerisCanadaPaymentProvider', providerName);
                this._monerisPaymentService = new Composer.MonerisPaymentService();
                this.registerSpecializedProviders();
                this.registerDomEvents();
            }
            Object.defineProperty(MonerisCanadaPaymentProvider.prototype, "providers", {
                get: function () {
                    return this._providers;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Method called to get a promise for payment validation.
             * Returns a promise of boolean. The return boolean needs to be false for validation error,
             * or true if valid.
             * @return {Q.Promise<boolean>} Promise that will be executed when we validate the payment control.
             */
            MonerisCanadaPaymentProvider.prototype.validatePayment = function (activePaymentVM) {
                return this.getProvider(activePaymentVM.PaymentMethodType).validatePayment(activePaymentVM);
            };
            MonerisCanadaPaymentProvider.prototype.submitPayment = function (activePaymentVM) {
                return this.getProvider(activePaymentVM.PaymentMethodType)
                    .addVaultProfileToken(activePaymentVM);
            };
            MonerisCanadaPaymentProvider.prototype.dispose = function () {
                this.unregisterDomEvents();
            };
            MonerisCanadaPaymentProvider.prototype.setDefaultCustomerPaymentMethod = function (activePaymentVM) {
                return this._monerisPaymentService
                    .setDefaultCustomerPaymentMethod({
                    PaymentMethodId: activePaymentVM.Id,
                    PaymentProviderName: activePaymentVM.ProviderName
                });
            };
            MonerisCanadaPaymentProvider.prototype.registerSpecializedProviders = function () {
                this._providers = {
                    'SavedCreditCard': new Composer.SavedCreditCardMonerisCanadaPaymentProvider(this.window, this._monerisPaymentService, this._eventHub),
                    'CreditCard': new Composer.CreditCardMonerisCanadaPaymentProvider(this.window, this._monerisPaymentService, this._eventHub)
                };
            };
            MonerisCanadaPaymentProvider.prototype.registerDomEvents = function () {
                _.forEach(this.providers, function (p) { return p.registerDomEvents(); });
            };
            MonerisCanadaPaymentProvider.prototype.unregisterDomEvents = function () {
                _.forEach(this.providers, function (p) { return p.unregisterDomEvents(); });
            };
            MonerisCanadaPaymentProvider.prototype.getProvider = function (providerName) {
                if (!this.providers[providerName]) {
                    throw new Error('Provider not found');
                }
                return this.providers[providerName];
            };
            return MonerisCanadaPaymentProvider;
        }(Composer.BaseCheckoutPaymentProvider));
        Composer.MonerisCanadaPaymentProvider = MonerisCanadaPaymentProvider;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/IEventHub.ts' />
///<reference path='../../../CheckoutPayment/Source/Typescript/ViewModels/IActivePaymentViewModel.ts' />
///<reference path='../../../CheckoutPayment/source/Typescript/Providers/BaseCheckoutPaymentProvider.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var OnSitePOSPaymentProvider = (function (_super) {
            __extends(OnSitePOSPaymentProvider, _super);
            function OnSitePOSPaymentProvider(window, providerName, eventHub) {
                _super.call(this, window, eventHub, 'OnSitePOSPaymentProvider', providerName);
            }
            /**
             * Method called to get a promise for payment validation.
             * Returns a promise of boolean. The return boolean needs to be false for validation error,
             * or true if valid.
             * @return {Q.Promise<boolean>} Promise that will be executed when we validate the payment control.
             */
            OnSitePOSPaymentProvider.prototype.validatePayment = function (activeVM) {
                return Q(true);
            };
            /**
             * Method called to get a promise when payment will submit.
             * @return {Q.Promise<any>} Promise that will be executed when to cart is about the be updated.
             */
            OnSitePOSPaymentProvider.prototype.submitPayment = function (activeVM) {
                return Q({});
            };
            return OnSitePOSPaymentProvider;
        }(Composer.BaseCheckoutPaymentProvider));
        Composer.OnSitePOSPaymentProvider = OnSitePOSPaymentProvider;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/JqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var OrderDetailsController = (function (_super) {
            __extends(OrderDetailsController, _super);
            function OrderDetailsController() {
                _super.apply(this, arguments);
            }
            OrderDetailsController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
            };
            return OrderDetailsController;
        }(Composer.Controller));
        Composer.OrderDetailsController = OrderDetailsController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));



///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../Parameters/IGetOrderParameters' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var OrderService = (function () {
            function OrderService() {
            }
            OrderService.prototype.getPastOrders = function (options) {
                if (options === void 0) { options = { page: 1 }; }
                return Composer.ComposerClient.post('/api/order/past-orders', options);
            };
            OrderService.prototype.getCurrentOrders = function (options) {
                if (options === void 0) { options = { page: 1 }; }
                return Composer.ComposerClient.post('/api/order/current-orders', options);
            };
            return OrderService;
        }());
        Composer.OrderService = OrderService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/JqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='./Services/OrderService' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var CurrentOrdersController = (function (_super) {
            __extends(CurrentOrdersController, _super);
            function CurrentOrdersController() {
                _super.apply(this, arguments);
                this.orderService = new Composer.OrderService();
            }
            CurrentOrdersController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.getCurrentOrders();
            };
            CurrentOrdersController.prototype.getOrders = function (context) {
                var page = context.elementContext.data('page');
                context.event.preventDefault();
                this.getCurrentOrders({
                    page: page
                });
            };
            CurrentOrdersController.prototype.getCurrentOrders = function (param) {
                var _this = this;
                var busyHandle = this.asyncBusy();
                this.orderService.getCurrentOrders(param)
                    .done(function (viewModel) {
                    _this.render('CurrentOrders', viewModel);
                    if (!_.isEmpty(viewModel)) {
                        _this.render('OrderHistoryPagination', viewModel.Pagination);
                    }
                    busyHandle.done();
                }, function (reason) {
                    console.error(reason);
                    busyHandle.done();
                });
            };
            return CurrentOrdersController;
        }(Composer.Controller));
        Composer.CurrentOrdersController = CurrentOrdersController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/JqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='./Services/OrderService' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var PastOrdersController = (function (_super) {
            __extends(PastOrdersController, _super);
            function PastOrdersController() {
                _super.apply(this, arguments);
                this.orderService = new Composer.OrderService();
            }
            PastOrdersController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.getPastOrders();
            };
            PastOrdersController.prototype.getOrders = function (context) {
                var page = context.elementContext.data('page');
                context.event.preventDefault();
                this.getPastOrders({ page: page });
            };
            PastOrdersController.prototype.getPastOrders = function (param) {
                var _this = this;
                var busyHandle = this.asyncBusy();
                this.orderService.getPastOrders(param)
                    .done(function (viewModel) {
                    _this.render('PastOrders', viewModel);
                    if (!_.isEmpty(viewModel)) {
                        _this.render('OrderHistoryPagination', viewModel.Pagination);
                    }
                    busyHandle.done();
                }, function (reason) {
                    console.error(reason);
                    busyHandle.done();
                });
            };
            return PastOrdersController;
        }(Composer.Controller));
        Composer.PastOrdersController = PastOrdersController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
///<reference path='../../../../Composer.Cart.UI/CartSummary/Source/Typescript/CartService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var OrderSummaryService = (function () {
            function OrderSummaryService(cartService, eventHub) {
                if (!cartService) {
                    throw new Error('Error: cartService is required');
                }
                if (!eventHub) {
                    throw new Error('Error: eventHub is required');
                }
                this.cartService = cartService;
                this.eventHub = eventHub;
            }
            OrderSummaryService.prototype.setCheapestShippingMethodUsing = function (postalCode) {
                var _this = this;
                this.eventHub.publish('cartUpdating', { data: { PostalCode: postalCode } });
                return this.cartService.updateShippingMethodPostalCode(postalCode)
                    .then(function () { return _this.cartService.setCheapestShippingMethod(); })
                    .then(function () { return _this.cartService.getCart(); })
                    .then(function (cart) { return _this.eventHub.publish('cartUpdated', { data: cart }); })
                    .fail(function (reason) {
                    console.error('Error while updating the shipping method using the postal code', reason);
                    throw reason;
                });
            };
            OrderSummaryService.prototype.cleanCart = function () {
                return this.cartService.clean();
            };
            return OrderSummaryService;
        }());
        Composer.OrderSummaryService = OrderSummaryService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Repositories/CartRepository.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/JQueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/ErrorHandling/ErrorHandler.ts' />
///<reference path='../../../../Composer.Analytics.UI/Analytics/Source/Typescript/GoogleAnalyticsPlugin.ts' />
///<reference path='../../../CartSummary/Source/Typescript/CartService.ts' />
///<reference path='OrderSummaryService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var OrderSummaryController = (function (_super) {
            __extends(OrderSummaryController, _super);
            function OrderSummaryController() {
                _super.apply(this, arguments);
                this.cacheProvider = Composer.CacheProvider.instance();
                this.cartService = new Composer.CartService(new Composer.CartRepository(), this.eventHub);
                this.orderSummaryService = new Composer.OrderSummaryService(this.cartService, this.eventHub);
            }
            OrderSummaryController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            OrderSummaryController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('cartUpdated', function (e) { return _this.render('OrderSummary', e.data); });
            };
            OrderSummaryController.prototype.openModal = function (actionContext) {
                var _this = this;
                this.postalCodeModal = $('#postalCodeModal');
                this.postalCodeInput = $('#postalCode');
                this.clearForm();
                //Due to how HTML5 defines its semantics, the autofocus HTML attribute has no effect in Bootstrap modals
                //http://getbootstrap.com/javascript/#modals
                this.postalCodeModal.on('shown.bs.modal', function () {
                    _this.postalCodeInput.focus();
                });
                this.postalCodeModal.modal('show');
            };
            OrderSummaryController.prototype.clearForm = function () {
                this.postalCodeInput.val('');
                this.render('EstimateShippingValidationForm', { PostalCodeMalformed: false, PostalCodeEmpty: false });
                return;
            };
            OrderSummaryController.prototype.closeModal = function (actionContext) {
                this.postalCodeModal.modal('hide');
                this.postalCodeModal.off('shown.bs.modal');
            };
            OrderSummaryController.prototype.estimateShipping = function (actionContext) {
                var _this = this;
                var formContext = actionContext.elementContext, formValues = formContext.serializeObject(), postalCode = formValues.postalCode.toUpperCase(), postalCodePattern = formContext.data('regex'), postalCodeRegexPattern = new RegExp(postalCodePattern.toString()), result = postalCodeRegexPattern.test(postalCode), busyHandle;
                actionContext.event.preventDefault();
                if (!result) {
                    if (postalCode === '') {
                        return this.render('EstimateShippingValidationForm', { PostalCodeEmpty: true });
                    }
                    else {
                        return this.render('EstimateShippingValidationForm', { PostalCodeMalformed: true, PostalCode: formValues.postalCode });
                    }
                }
                busyHandle = this.asyncBusy();
                this.orderSummaryService.setCheapestShippingMethodUsing(postalCode)
                    .then(function (data) {
                    _this.closeModal(actionContext);
                    return data;
                }, function (reason) {
                    Composer.ErrorHandler.instance().outputErrorFromCode('PostalCodeUpdateFailed');
                })
                    .fin(function () { return busyHandle.done(); });
            };
            OrderSummaryController.prototype.proceedToCheckout = function (actionContext) {
                var nextStepUrl = actionContext.elementContext.data('nextstepurl').toString();
                if (!nextStepUrl) {
                    throw 'No next step Url was defined.';
                }
                Composer.AnalyticsPlugin.setCheckoutOrigin('Checkout');
                var busy = this.asyncBusy();
                this.orderSummaryService.cleanCart().done(function () {
                    window.location.href = nextStepUrl;
                }, function (reason) {
                    console.error('Error while proceeding to Checkout', reason);
                    Composer.ErrorHandler.instance().outputErrorFromCode('ProceedToCheckoutFailed');
                    busy.done();
                });
            };
            return OrderSummaryController;
        }(Orckestra.Composer.Controller));
        Composer.OrderSummaryController = OrderSummaryController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/Typescript/Cache/CacheError.ts' />
/// <reference path='../../../../Composer.UI/Source/Typescript/Cache/ICache.ts' />
/// <reference path='../../../../Composer.UI/Source/Typescript/Cache/ICachePolicy.ts' />
/// <reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
/// <reference path='./IWishListRepository.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var WishListRepository = (function () {
            function WishListRepository() {
            }
            WishListRepository.prototype.getWishList = function () {
                return Composer.ComposerClient.get('/api/wishlist/getwishlist');
            };
            WishListRepository.prototype.getWishListSummary = function () {
                return Composer.ComposerClient.get('/api/wishlist/getwishlistsummary');
            };
            WishListRepository.prototype.addLineItem = function (productId, variantId, quantity) {
                if (!productId) {
                    throw new Error('The product id is required');
                }
                if (quantity <= 0) {
                    throw new Error('The quantity must be greater than zero');
                }
                var data = {
                    ProductId: productId,
                    VariantId: variantId,
                    Quantity: quantity
                };
                return Composer.ComposerClient.post('/api/wishlist/lineitem', data);
            };
            WishListRepository.prototype.deleteLineItem = function (lineItemId) {
                if (!lineItemId) {
                    throw new Error('The line item id is required');
                }
                var data = {
                    LineItemId: lineItemId
                };
                return Composer.ComposerClient.remove('/api/wishlist/lineitem', data);
            };
            return WishListRepository;
        }());
        Composer.WishListRepository = WishListRepository;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventScheduler.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/jqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../Common/Source/Typescript/MembershipService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var AccountHeaderController = (function (_super) {
            __extends(AccountHeaderController, _super);
            function AccountHeaderController() {
                _super.apply(this, arguments);
                this.membershipService = new Composer.MembershipService(new Composer.MembershipRepository());
            }
            AccountHeaderController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            AccountHeaderController.prototype.registerSubscriptions = function () {
                var _this = this;
                var scheduler = Composer.EventScheduler.instance(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedOut]);
                scheduler.setPostEventCallback(function (data) { return _this.onLoggedOut(data); });
            };
            AccountHeaderController.prototype.onLoggedOut = function (data) {
                var promise = Q.fcall(function () {
                    var newLocation = decodeURIComponent(data.ReturnUrl) || window.location.href;
                    window.location.replace(newLocation);
                });
                return promise;
            };
            AccountHeaderController.prototype.fullLogout = function (actionContext) {
                var _this = this;
                var returnUrlQueryString = 'ReturnUrl=';
                var returnUrl = '';
                actionContext.event.preventDefault();
                if (window.location.href.indexOf(returnUrlQueryString) > -1) {
                    returnUrl = window.location.href.substring(window.location.href.indexOf(returnUrlQueryString)
                        + returnUrlQueryString.length);
                }
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this.membershipService.logout(returnUrl, false)
                    .then(function (result) { return _this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedOut], { data: result }); })
                    .fin(function () { return busy.done(); })
                    .done();
            };
            return AccountHeaderController;
        }(Orckestra.Composer.Controller));
        Composer.AccountHeaderController = AccountHeaderController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/jqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var MyAccountController = (function (_super) {
            __extends(MyAccountController, _super);
            function MyAccountController() {
                _super.apply(this, arguments);
            }
            MyAccountController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
            };
            MyAccountController.prototype.getFormData = function (actionContext) {
                return actionContext.elementContext.serializeObject();
            };
            MyAccountController.prototype.renderFormErrorMessages = function (reason) {
                this.render('FormErrorMessages', reason);
                this.context.container.find('input[type="password"]').val('');
                this.registerFormsForValidation(this.context.container.find('form'), {
                    serverValidationContainer: '[data-templateid="FormErrorMessages"]'
                });
            };
            return MyAccountController;
        }(Orckestra.Composer.Controller));
        Composer.MyAccountController = MyAccountController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/jqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='../../../Common/Source/Typescript/CustomerService.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountStatus.ts' />
///<reference path='../../../MyAccount/Source/Typescript/MyAccountController.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/UI/UIModal.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        //TODO refactor modal : create a generic modal service
        var AddressListController = (function (_super) {
            __extends(AddressListController, _super);
            function AddressListController() {
                _super.apply(this, arguments);
                this.deleteModalElementSelector = '#confirmationModal';
                this.customerService = new Composer.CustomerService(new Composer.CustomerRepository());
            }
            AddressListController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.uiModal = new Composer.UIModal(window, this.deleteModalElementSelector, this.deleteAddress, this);
                this.registerSubscriptions();
            };
            AddressListController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressDeleted], function (e) { return _this.onAddressDeleted(e); });
            };
            AddressListController.prototype.onAddressDeleted = function (e) {
                var result = e.data;
                var $container = result.$container;
                $container.remove();
            };
            /**
            * Requires the element in action context to have a data-address-id.
            */
            AddressListController.prototype.setDefaultAddress = function (actionContext) {
                var $addressListItem = $(actionContext.elementContext).closest('[data-address-id]');
                var addressId = $addressListItem.data('address-id');
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext, containerContext: $addressListItem });
                this.customerService.setDefaultAddress(addressId.toString(), '')
                    .then(function (result) { return location.reload(); }, function (reason) { return console.error(reason); })
                    .fin(function () { return busy.done(); })
                    .done();
            };
            /**
            * Requires the element in action context to have a data-address-id.
            */
            AddressListController.prototype.deleteAddress = function (event) {
                var _this = this;
                var element = $(event.target);
                var $addressListItem = element.closest('[data-address-id]');
                var addressId = $addressListItem.data('address-id');
                var busy = this.asyncBusy({ elementContext: element, containerContext: $addressListItem });
                this.customerService.deleteAddress(addressId, '')
                    .then(function (result) { return _this.onDeleteAddressFulfilled(result, $addressListItem); }, function (reason) { return console.error(reason); })
                    .fin(function () { return busy.done(); })
                    .done();
            };
            AddressListController.prototype.onDeleteAddressFulfilled = function (result, $addressListItem) {
                var data = {
                    result: result,
                    $container: $addressListItem
                };
                this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressDeleted], { data: data });
            };
            AddressListController.prototype.deleteAddressConfirm = function (actionContext) {
                this.uiModal.openModal(actionContext.event);
            };
            return AddressListController;
        }(Orckestra.Composer.MyAccountController));
        Composer.AddressListController = AddressListController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../Common/Source/Typescript/MembershipService.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../MyAccount/Source/Typescript/MyAccountController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ChangePasswordController = (function (_super) {
            __extends(ChangePasswordController, _super);
            function ChangePasswordController() {
                _super.apply(this, arguments);
                this.membershipService = new Composer.MembershipService(new Composer.MembershipRepository());
            }
            ChangePasswordController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            ChangePasswordController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.registerFormsForValidation(this.context.container.find('form'));
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.PasswordChanged], function (e) { return _this.onPasswordChanged(e); });
            };
            ChangePasswordController.prototype.onPasswordChanged = function (e) {
                var result = e.data;
                if (result.ReturnUrl) {
                    window.location.replace(decodeURIComponent(result.ReturnUrl));
                }
                else {
                    this.render('ChangePassword', result);
                    this.registerFormsForValidation(this.context.container.find('form'), {
                        serverValidationContainer: '[data-templateid="ChangePasswordSuccessful"]'
                    });
                }
            };
            /**
             * Event triggered when submitting the change password form.
             * @param {IControllerActionContext} actionContext - Event context.
             */
            ChangePasswordController.prototype.changePassword = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var formData = this.getFormData(actionContext);
                var returnUrlQueryString = 'ReturnUrl=';
                var returnUrl = '';
                if (window.location.href.indexOf(returnUrlQueryString) > -1) {
                    returnUrl = window.location.href.substring(window.location.href.indexOf(returnUrlQueryString)
                        + returnUrlQueryString.length);
                }
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this.membershipService.changePassword(formData, returnUrl)
                    .then(function (result) { return _this.onChangePasswordFulfilled(result); }, function (reason) { return _this.renderFormErrorMessages(reason); })
                    .fin(function () { return busy.done(); })
                    .done();
            };
            ChangePasswordController.prototype.onChangePasswordFulfilled = function (result) {
                this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.PasswordChanged], { data: result });
            };
            return ChangePasswordController;
        }(Orckestra.Composer.MyAccountController));
        Composer.ChangePasswordController = ChangePasswordController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        Composer.urlHelper = {
            getURLParameter: function (url, name) {
                return decodeURIComponent((new RegExp('[?|&]' + name
                    + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ''])[1].replace(/\+/g, '%20')) || null;
            }
        };
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Utils/UrlHelper.ts' />
///<reference path='../../../Common/Source/Typescript/MembershipService.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountStatus.ts' />
///<reference path='../../../MyAccount/Source/Typescript/MyAccountController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var CreateAccountController = (function (_super) {
            __extends(CreateAccountController, _super);
            function CreateAccountController() {
                _super.apply(this, arguments);
                this.membershipService = new Composer.MembershipService(new Composer.MembershipRepository());
            }
            CreateAccountController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            CreateAccountController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.registerFormsForValidation(this.context.container.find('form'));
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.AccountCreated], function (e) { return _this.onAccountCreated(e); });
            };
            CreateAccountController.prototype.onAccountCreated = function (e) {
                var result = e.data;
                if (result.ReturnUrl) {
                    window.location.replace(decodeURIComponent(result.ReturnUrl));
                }
                else {
                    this.render('CreateAccount', result);
                }
            };
            CreateAccountController.prototype.createAccount = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var formData = this.getFormData(actionContext);
                var returnUrlQueryString = 'ReturnUrl=';
                var returnUrl = '';
                if (window.location.href.indexOf(returnUrlQueryString) > -1) {
                    returnUrl = Composer.urlHelper.getURLParameter(location.search, 'ReturnUrl');
                }
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this.membershipService.register(formData, returnUrl)
                    .then(function (result) { return _this.onRegisterFulfilled(result); }, function (reason) { return _this.renderFormErrorMessages(reason); })
                    .fin(function () { return busy.done(); })
                    .done();
            };
            CreateAccountController.prototype.onRegisterFulfilled = function (result) {
                this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.AccountCreated], { data: result });
                if (result.Status === Composer.MyAccountStatus[Composer.MyAccountStatus.Success]) {
                    this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedIn], { data: result });
                }
            };
            return CreateAccountController;
        }(Orckestra.Composer.MyAccountController));
        Composer.CreateAccountController = CreateAccountController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/jqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Utils/UrlHelper.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/JQueryPlugins/IParsleyJqueryPlugin.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Validation/IParsley.ts' />
///<reference path='../../../Common/Source/Typescript/CustomerService.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../MyAccount/Source/Typescript/MyAccountController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var EditAddressController = (function (_super) {
            __extends(EditAddressController, _super);
            function EditAddressController() {
                _super.apply(this, arguments);
                this.customerService = new Composer.CustomerService(new Composer.CustomerRepository());
            }
            EditAddressController.prototype.initialize = function () {
                var _this = this;
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
                var busy = this.asyncBusy({ msDelay: 300, loadingIndicatorSelector: '.loading-indicator-regions' });
                Composer.ComposerClient.get('/api/address/regions')
                    .then(function (regions) { return _this.rebuildRegionSelector(regions); })
                    .done(function () { return busy.done(); });
            };
            EditAddressController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.registerFormsForValidation(this.context.container.find('form'));
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressCreated], function (e) { return _this.onAddressCreatedOrUpdated(e); });
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressUpdated], function (e) { return _this.onAddressCreatedOrUpdated(e); });
            };
            EditAddressController.prototype.onAddressCreatedOrUpdated = function (e) {
                var result = e.data;
                if (result.ReturnUrl) {
                    window.location.replace(decodeURIComponent(result.ReturnUrl));
                }
                else {
                    this.render('EditAddress', result);
                    this.registerFormsForValidation(this.context.container.find('form'), {
                        serverValidationContainer: '[data-templateid="FormErrorMessages"]'
                    });
                }
            };
            /**
             * Rerender the region selector, keeping the currently selected value
             */
            EditAddressController.prototype.rebuildRegionSelector = function (regions) {
                var selectedRegion = this.context.container.find('[data-templateid="AddressRegionPicker"]').val();
                this.render('AddressRegionPicker', { Regions: regions, SelectedRegion: selectedRegion });
            };
            EditAddressController.prototype.adjustPostalCode = function (actionContext) {
                actionContext.elementContext.val(actionContext.elementContext.val().toUpperCase());
                _.all(this._formInstances, function (formInstance) { return formInstance.validate('shipping-based-on', true); });
            };
            EditAddressController.prototype.createAddress = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var formData = this.getFormData(actionContext);
                var returnUrlQueryString = 'ReturnUrl=';
                var returnUrl = '';
                if (window.location.href.indexOf(returnUrlQueryString) > -1) {
                    returnUrl = Composer.urlHelper.getURLParameter(location.search, 'ReturnUrl');
                }
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this.customerService.createAddress(formData, returnUrl)
                    .then(function (result) { return _this.onCreateAddressFulfilled(result); }, function (reason) { return _this.renderFormErrorMessages(reason); })
                    .fin(function () { return busy.done(); })
                    .done();
            };
            EditAddressController.prototype.onCreateAddressFulfilled = function (result) {
                this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressCreated], { data: result });
            };
            EditAddressController.prototype.updateAddress = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var formData = this.getFormData(actionContext);
                var addressId = this.context.container.find('[data-address-id]').data('address-id').toString();
                var returnUrlQueryString = 'ReturnUrl=';
                var returnUrl = '';
                if (window.location.href.indexOf(returnUrlQueryString) > -1) {
                    returnUrl = Composer.urlHelper.getURLParameter(location.search, 'ReturnUrl');
                }
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this.customerService.updateAddress(formData, addressId, returnUrl)
                    .then(function (result) { return _this.onUpdateAddressFulfilled(result); }, function (reason) { return _this.renderFormErrorMessages(reason); })
                    .fin(function () { return busy.done(); })
                    .done();
            };
            EditAddressController.prototype.onUpdateAddressFulfilled = function (result) {
                this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.AddressUpdated], { data: result });
            };
            return EditAddressController;
        }(Orckestra.Composer.MyAccountController));
        Composer.EditAddressController = EditAddressController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../Common/Source/Typescript/MembershipService.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountStatus.ts' />
///<reference path='../../../MyAccount/Source/Typescript/MyAccountController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ForgotPasswordController = (function (_super) {
            __extends(ForgotPasswordController, _super);
            function ForgotPasswordController() {
                _super.apply(this, arguments);
                this.membershipService = new Composer.MembershipService(new Composer.MembershipRepository());
            }
            ForgotPasswordController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            ForgotPasswordController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.registerFormsForValidation(this.context.container.find('form'));
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.ForgotPasswordInstructionSent], function (e) { return _this.onForgotPasswordInstructionSent(e); });
            };
            ForgotPasswordController.prototype.onForgotPasswordInstructionSent = function (e) {
                var result = e.data;
                if (result.ReturnUrl) {
                    window.location.replace(decodeURIComponent(result.ReturnUrl));
                }
                else {
                    this.render('ForgotPassword', result);
                }
            };
            /**
             * Event triggered when submitting the forgot password form.
             * @param {IControllerActionContext} actionContext - Event context.
             */
            ForgotPasswordController.prototype.forgotPassword = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var formData = this.getFormData(actionContext);
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this.membershipService.forgotPassword(formData)
                    .then(function (result) { return _this.onForgotPasswordFulfilled(result); }, function (reason) { return _this.renderFormErrorMessages(reason); })
                    .fin(function () { return busy.done(); })
                    .done();
            };
            ForgotPasswordController.prototype.onForgotPasswordFulfilled = function (result) {
                this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.ForgotPasswordInstructionSent], { data: result });
            };
            return ForgotPasswordController;
        }(Orckestra.Composer.MyAccountController));
        Composer.ForgotPasswordController = ForgotPasswordController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/jqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
///<reference path='../../../Common/Source/Typescript/MembershipService.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../MyAccount/Source/Typescript/MyAccountController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var NewPasswordController = (function (_super) {
            __extends(NewPasswordController, _super);
            function NewPasswordController() {
                _super.apply(this, arguments);
                this.membershipService = new Composer.MembershipService(new Composer.MembershipRepository());
            }
            NewPasswordController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            NewPasswordController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.registerFormsForValidation(this.context.container.find('form'));
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.PasswordChanged], function (e) { return _this.onPasswordChanged(e); });
            };
            NewPasswordController.prototype.onPasswordChanged = function (e) {
                var result = e.data;
                if (result.ReturnUrl) {
                    window.location.replace(decodeURIComponent(result.ReturnUrl));
                }
                else {
                    this.render('NewPassword', result);
                }
            };
            /**
             * Event triggered when submitting the new password form.
             * @param {IControllerActionContext} actionContext - Event context.
             */
            NewPasswordController.prototype.newPassword = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var formData = this.getFormData(actionContext);
                var returnUrlQueryString = 'ReturnUrl=';
                var ticketQueryString = 'ticket=';
                var returnUrl = '';
                var ticket = '';
                if (window.location.href.indexOf(returnUrlQueryString) > -1) {
                    returnUrl = window.location.href.substring(window.location.href.indexOf(returnUrlQueryString)
                        + returnUrlQueryString.length);
                }
                if (window.location.href.indexOf(ticketQueryString) > -1) {
                    ticket = window.location.href.substring(window.location.href.indexOf(ticketQueryString)
                        + ticketQueryString.length);
                }
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this.membershipService.resetPassword(formData, ticket, returnUrl)
                    .then(function (result) { return _this.onResetPasswordFulfilled(result); }, function (reason) { return _this.renderFormErrorMessages(reason); })
                    .fin(function () { return busy.done(); })
                    .done();
            };
            NewPasswordController.prototype.onResetPasswordFulfilled = function (result) {
                this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.PasswordChanged], { data: result });
            };
            return NewPasswordController;
        }(Orckestra.Composer.MyAccountController));
        Composer.NewPasswordController = NewPasswordController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventScheduler.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Cache/CacheProvider.ts' />
///<reference path='../../../Common/Source/Typescript/MembershipService.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountStatus.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        /**
         * Controller for the Coupons section.
         */
        var ReturningCustomerController = (function (_super) {
            __extends(ReturningCustomerController, _super);
            function ReturningCustomerController() {
                _super.apply(this, arguments);
                this.membershipService = new Composer.MembershipService(new Composer.MembershipRepository());
                this.cacheProvider = Composer.CacheProvider.instance();
            }
            ReturningCustomerController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            ReturningCustomerController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.registerFormsForValidation(this.context.container.find('form'));
                var scheduler = Composer.EventScheduler.instance(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedIn]);
                scheduler.setPostEventCallback(function (data) { return _this.onLoggedIn(data); });
            };
            ReturningCustomerController.prototype.onLoggedIn = function (data) {
                var _this = this;
                var promise = Q.fcall(function () {
                    if (data.ReturnUrl) {
                        window.location.replace(decodeURIComponent(data.ReturnUrl));
                    }
                    else {
                        _this.render('ReturningCustomer', data);
                        _this.registerFormsForValidation(_this.context.container.find('form'), {
                            serverValidationContainer: '[data-templateid="ReturningCustomerFormsServerValidations"]'
                        });
                    }
                });
                return promise;
            };
            /**
             * Event triggered when submitting the login form.
             * @param {IControllerActionContext} actionContext - Event context.
             */
            ReturningCustomerController.prototype.login = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var busy = this.asyncBusy();
                this.loginImpl(actionContext)
                    .then(function (result) { return _this.onLoginFulfilled(result, busy); })
                    .fail(function (reason) { return _this.onLoginRejected(reason, busy); })
                    .done();
            };
            ReturningCustomerController.prototype.loginImpl = function (actionContext) {
                var formData = actionContext.elementContext.serializeObject();
                var href = window.location.href;
                var returnUrlKey = 'ReturnUrl=';
                var returnUrl = href.indexOf(returnUrlKey) > -1 ? href.substring(href.indexOf(returnUrlKey) + returnUrlKey.length) : '';
                return this.membershipService.login(formData, returnUrl);
            };
            ReturningCustomerController.prototype.onLoginFulfilled = function (result, busy) {
                if (result.Status === Composer.MyAccountStatus[Composer.MyAccountStatus.Success]) {
                    this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedIn], { data: result });
                    this.cacheProvider.defaultCache.set('customerId', null).done();
                }
                else {
                    this.renderFailedForm(result.Status);
                    busy.done();
                }
            };
            ReturningCustomerController.prototype.onLoginRejected = function (reason, busy) {
                var errorCode = Composer.MyAccountStatus[Composer.MyAccountStatus.AjaxFailed];
                if (reason && reason.Errors && reason.Errors[0] && reason.Errors[0].ErrorCode) {
                    errorCode = reason.Errors[0].ErrorCode;
                }
                this.renderFailedForm(errorCode);
                busy.done();
            };
            /**
             * Render the template for message failures
             * Register Format validation to hide those server message on client interaction
             * Reset potentially unsafe fields
             */
            ReturningCustomerController.prototype.renderFailedForm = function (status) {
                this.render('ReturningCustomerFormsServerValidations', { Status: status });
                this.context.container.find('input[type="password"]').val('');
                this.registerFormsForValidation(this.context.container.find('form'), {
                    serverValidationContainer: '[data-templateid="ReturningCustomerFormsServerValidations"]'
                });
            };
            return ReturningCustomerController;
        }(Orckestra.Composer.Controller));
        Composer.ReturningCustomerController = ReturningCustomerController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='./../Mvc/ComposerClient.ts' />
/// <reference path='./ISignInHeaderRepository.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var SignInHeaderRepository = (function () {
            function SignInHeaderRepository() {
            }
            SignInHeaderRepository.prototype.getSignInHeader = function (param) {
                return Composer.ComposerClient.get('/api/membership/signin');
            };
            return SignInHeaderRepository;
        }());
        Composer.SignInHeaderRepository = SignInHeaderRepository;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Repositories/SignInHeaderRepository.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Cache/CacheProvider.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var SignInHeaderService = (function () {
            function SignInHeaderService(signInHeaderRepository) {
                this.cacheKey = 'SignInHeaderViewModel';
                this.cachePolicy = { slidingExpiration: 300 }; // 5min
                if (!signInHeaderRepository) {
                    throw new Error('Error: signInHeaderRepository is required');
                }
                this.cacheProvider = Composer.CacheProvider.instance();
                this.signInHeaderRepository = signInHeaderRepository;
            }
            SignInHeaderService.prototype.getSignInHeader = function (param) {
                var _this = this;
                return this.getSignInHeaderFromCache(param)
                    .fail(function (reason) {
                    if (_this.canHandle(reason)) {
                        return _this.getFreshSignInHeader(param);
                    }
                    throw reason;
                });
            };
            SignInHeaderService.prototype.canHandle = function (reason) {
                return reason === Composer.CacheError.Expired || reason === Composer.CacheError.NotFound;
            };
            SignInHeaderService.prototype.getFreshSignInHeader = function (param) {
                var _this = this;
                return this.signInHeaderRepository.getSignInHeader(param)
                    .then(function (cart) { return _this.setSignInHeaderToCache(param, cart); });
            };
            SignInHeaderService.prototype.buildSignedInCacheKey = function (param) {
                return this.cacheKey + '.' + param.cultureInfo + '.' + param.isAuthenticated + '.' + param.encryptedCustomerId;
            };
            SignInHeaderService.prototype.invalidateCache = function () {
                return this.cacheProvider.customCache.fullClear();
            };
            SignInHeaderService.prototype.getSignInHeaderFromCache = function (param) {
                var composedKey = this.buildSignedInCacheKey(param);
                return this.cacheProvider.customCache.get(composedKey);
            };
            SignInHeaderService.prototype.setSignInHeaderToCache = function (param, cart) {
                var composedKey = this.buildSignedInCacheKey(param);
                return this.cacheProvider.customCache.set(composedKey, cart, this.cachePolicy);
            };
            return SignInHeaderService;
        }());
        Composer.SignInHeaderService = SignInHeaderService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventScheduler.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='./SignInHeaderService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var SignInHeaderController = (function (_super) {
            __extends(SignInHeaderController, _super);
            function SignInHeaderController() {
                _super.apply(this, arguments);
                this.signInHeaderService = new Composer.SignInHeaderService(new Composer.SignInHeaderRepository());
            }
            SignInHeaderController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.initializeSignInHeader();
                this.registerSubscriptions();
            };
            SignInHeaderController.prototype.initializeSignInHeader = function () {
                var _this = this;
                var cultureInfo = $('html').attr('lang');
                var param = { cultureInfo: cultureInfo };
                this.signInHeaderService.getSignInHeader(param)
                    .then(function (signInHeader) { return _this.render('SignInHeader', signInHeader); });
            };
            SignInHeaderController.prototype.registerSubscriptions = function () {
                var _this = this;
                var loggedInScheduler = Composer.EventScheduler.instance(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedIn]);
                var loggedOutScheduler = Composer.EventScheduler.instance(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedOut]);
                loggedOutScheduler.subscribe(function (e) { return _this.onLoggedOut(e); });
                loggedInScheduler.subscribe(function (e) { return _this.onLoggedIn(e); });
            };
            SignInHeaderController.prototype.onLoggedOut = function (e) {
                return this.signInHeaderService.invalidateCache();
            };
            SignInHeaderController.prototype.onLoggedIn = function (e) {
                return this.signInHeaderService.invalidateCache();
            };
            return SignInHeaderController;
        }(Orckestra.Composer.Controller));
        Composer.SignInHeaderController = SignInHeaderController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Utils/UrlHelper.ts' />
///<reference path='../../../Common/Source/Typescript/CustomerService.ts' />
///<reference path='../../../SignInHeader/Source/Typescript/SignInHeaderService.ts' />
///<reference path='../../../Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../MyAccount/Source/Typescript/MyAccountController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var UpdateAccountController = (function (_super) {
            __extends(UpdateAccountController, _super);
            function UpdateAccountController() {
                _super.apply(this, arguments);
                this.customerService = new Composer.CustomerService(new Composer.CustomerRepository());
                this.signInHeaderService = new Composer.SignInHeaderService(new Composer.SignInHeaderRepository());
            }
            UpdateAccountController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            UpdateAccountController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.registerFormsForValidation(this.context.container.find('form'));
                this.eventHub.subscribe(Composer.MyAccountEvents[Composer.MyAccountEvents.AccountUpdated], function (e) { return _this.onAccountUpdated(e); });
            };
            UpdateAccountController.prototype.onAccountUpdated = function (e) {
                var result = e.data;
                if (result.ReturnUrl) {
                    window.location.replace(decodeURIComponent(result.ReturnUrl));
                }
                else {
                    this.render('UpdateAccount', result);
                    this.registerFormsForValidation(this.context.container.find('form'), {
                        serverValidationContainer: '[data-templateid="UpdateAccountSuccessful"]'
                    });
                }
            };
            UpdateAccountController.prototype.enableSubmitButton = function (actionContext) {
                $('#UpdateAccountSubmit').prop('disabled', false);
            };
            UpdateAccountController.prototype.updateAccount = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var formData = this.getFormData(actionContext);
                var returnUrlQueryString = 'ReturnUrl=';
                var returnUrl = '';
                if (window.location.href.indexOf(returnUrlQueryString) > -1) {
                    returnUrl = Composer.urlHelper.getURLParameter(location.search, 'ReturnUrl');
                }
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this.customerService.updateAccount(formData, returnUrl)
                    .then(function (result) {
                    _this.signInHeaderService.invalidateCache();
                    return result;
                })
                    .then(function (result) { return _this.onUpdateAccountFulfilled(result); })
                    .fail(function (reason) {
                    console.error('Error updating the account.', reason);
                    _this.renderFormErrorMessages(reason);
                })
                    .fin(function () { return busy.done(); });
            };
            UpdateAccountController.prototype.onUpdateAccountFulfilled = function (result) {
                this.eventHub.publish(Composer.MyAccountEvents[Composer.MyAccountEvents.AccountUpdated], { data: result });
                return Q(result);
            };
            return UpdateAccountController;
        }(Orckestra.Composer.MyAccountController));
        Composer.UpdateAccountController = UpdateAccountController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../../Composer.UI/Source/TypeScript/Cache/CacheProvider.ts' />
///<reference path='../../../../../Composer.UI/Source/TypeScript/Cache/CacheError.ts' />
///<reference path='../IWishListRepository.ts' />
///<reference path='./IWishListService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var WishListService = (function () {
            function WishListService(wishListRepository, eventHub) {
                this.cacheKey = 'WishListSummaryViewModel';
                this.cachePolicy = { slidingExpiration: 300 }; // 5min
                if (!wishListRepository) {
                    throw new Error('Error: wishListRepository is required');
                }
                if (!eventHub) {
                    throw new Error('Error: eventHub is required');
                }
                this.wishListRepository = wishListRepository;
                this.cacheProvider = Composer.CacheProvider.instance();
                this.eventHub = eventHub;
            }
            WishListService.prototype.getWishListSummary = function () {
                var _this = this;
                return this.getCacheWishListSummary()
                    .fail(function (reason) {
                    if (_this.canHandle(reason)) {
                        return _this.getFreshWishListSummary();
                    }
                    console.error('An error occured while getting the wishList from cache.', reason);
                    throw reason;
                });
            };
            WishListService.prototype.getFreshWishListSummary = function () {
                var _this = this;
                if (!WishListService.GettingFreshWishListSummary) {
                    WishListService.GettingFreshWishListSummary =
                        this.wishListRepository.getWishListSummary().then(function (wishList) { return _this.setWishListToCache(wishList); });
                }
                // to avoid getting a fresh wishlist multiple times within a page session
                return WishListService.GettingFreshWishListSummary
                    .fail(function (reason) {
                    console.error('An error occured while getting a fresh wish list.', reason);
                    throw reason;
                });
            };
            WishListService.prototype.getSignInUrl = function () {
                return this.getWishListSummary()
                    .then(function (wishList) {
                    return wishList.SignInUrl;
                });
            };
            WishListService.prototype.getLineItem = function (productId, variantId) {
                return this.getWishListSummary().then(function (wishList) {
                    if (wishList && wishList.Items) {
                        return wishList.Items.filter(function (it) { return it.ProductId === productId && it.VariantId === variantId; })[0];
                    }
                    return null;
                });
            };
            WishListService.prototype.addLineItem = function (productId, variantId, quantity) {
                var _this = this;
                if (quantity === void 0) { quantity = 1; }
                var data = {
                    ProductId: productId,
                    VariantId: variantId,
                    Quantity: quantity
                };
                this.eventHub.publish('wishListUpdating', { data: data });
                return this.wishListRepository.addLineItem(productId, variantId, quantity)
                    .then(function (wishList) { return _this.setWishListToCache(wishList); })
                    .then(function (wishList) {
                    _this.eventHub.publish('wishListUpdated', { data: wishList });
                    return wishList;
                })
                    .fail(function (reason) {
                    _this.clearCache();
                    throw reason;
                });
            };
            WishListService.prototype.removeLineItem = function (lineItemId) {
                var _this = this;
                var data = {
                    LineItemId: lineItemId
                };
                this.eventHub.publish('wishListUpdating', { data: data });
                return this.wishListRepository.deleteLineItem(lineItemId)
                    .then(function (wishList) { return _this.setWishListToCache(wishList); })
                    .then(function (wishList) {
                    _this.eventHub.publish('wishListUpdated', { data: wishList });
                    return wishList;
                })
                    .fail(function (reason) {
                    _this.clearCache();
                    throw reason;
                });
            };
            WishListService.prototype.clearCache = function () {
                return this.cacheProvider.defaultCache.clear(this.cacheKey);
            };
            WishListService.prototype.getCacheWishListSummary = function () {
                return this.cacheProvider.defaultCache.get(this.cacheKey);
            };
            WishListService.prototype.setWishListToCache = function (wishList) {
                return this.cacheProvider.defaultCache.set(this.cacheKey, wishList, this.cachePolicy);
            };
            WishListService.prototype.canHandle = function (reason) {
                return reason === Composer.CacheError.Expired || reason === Composer.CacheError.NotFound;
            };
            return WishListService;
        }());
        Composer.WishListService = WishListService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.Cart.UI/WishList/Source/Typescript/WishListRepository.ts' />
///<reference path='../../../../Composer.Cart.UI/WishList/Source/Typescript/Services/WishListService.ts' />
///<reference path='../../../../Composer.Cart.UI/CartSummary/Source/Typescript/CartService.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Repositories/CartRepository.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var WishListController = (function (_super) {
            __extends(WishListController, _super);
            function WishListController() {
                _super.apply(this, arguments);
                this._wishListService = new Composer.WishListService(new Composer.WishListRepository(), this.eventHub);
                this._cartService = new Composer.CartService(new Composer.CartRepository(), this.eventHub);
            }
            WishListController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
            };
            WishListController.prototype.addToCart = function (actionContext) {
                var context = actionContext.elementContext;
                var container = context.closest('.wishlist-tile');
                var productId = context.data('productid');
                var price = context.data('price');
                var brand = context.data('brand');
                var variantId = context.data('variantid');
                var variant = context.data('variant');
                var name = context.data('name');
                var category = context.data('category');
                this.eventHub.publish('wishListLineItemAddingToCart', {
                    data: this.getProductDataForAnalytics(productId, variant, name, price, brand, category)
                });
                container.addClass('is-loading');
                this._cartService.addLineItem(productId, price, variantId, 1)
                    .fin(function () { return container.removeClass('is-loading'); });
            };
            WishListController.prototype.getListNameForAnalytics = function () {
                throw new Error('ListName not defined for this controller');
            };
            WishListController.prototype.getProductDataForAnalytics = function (productId, variant, displayName, price, brand, category) {
                var data = {
                    List: this.getListNameForAnalytics(),
                    ProductId: productId,
                    Variant: variant,
                    DisplayName: displayName,
                    ListPrice: price,
                    Brand: brand,
                    CategoryId: category,
                    Quantity: 1
                };
                return data;
            };
            return WishListController;
        }(Orckestra.Composer.Controller));
        Composer.WishListController = WishListController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='./WishListController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var MyWishListController = (function (_super) {
            __extends(MyWishListController, _super);
            function MyWishListController() {
                _super.apply(this, arguments);
            }
            MyWishListController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            MyWishListController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('wishListUpdated', function (e) { return _this.onWishListUpdated(e); });
            };
            MyWishListController.prototype.copyShareUrl = function (actionContext) {
                var shareUrl = $('#txtShareUrl');
                var succeed;
                shareUrl.focus().select();
                try {
                    succeed = document.execCommand('copy');
                }
                catch (e) {
                    succeed = false;
                }
                this.eventHub.publish('wishListCopyingShareUrl', {
                    data: {}
                });
                return succeed;
            };
            MyWishListController.prototype.deleteLineItem = function (actionContext) {
                var context = actionContext.elementContext;
                var lineItemId = context.data('lineitemid');
                var container = context.closest('.wishlist-tile');
                container.addClass('is-loading');
                this._wishListService.removeLineItem(lineItemId)
                    .then(function (wishList) {
                    container.parent().remove();
                })
                    .fin(function () {
                    container.removeClass('is-loading');
                });
            };
            MyWishListController.prototype.onWishListUpdated = function (e) {
                this.renderWishListQuantity(e.data);
                if (e.data.TotalQuantity === 0) {
                    this.context.window.location.reload();
                }
            };
            MyWishListController.prototype.renderWishListQuantity = function (wishList) {
                this.render('WishListQuantity', wishList);
            };
            MyWishListController.prototype.getListNameForAnalytics = function () {
                return 'My Wish List';
            };
            return MyWishListController;
        }(Orckestra.Composer.WishListController));
        Composer.MyWishListController = MyWishListController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventScheduler.ts' />
///<reference path='../../../../Composer.Cart.UI/WishList/Source/TypeScript/WishListRepository.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventHub.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/IEventInformation.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/Typescript/MyAccountEvents.ts' />
///<reference path='../../../../Composer.Cart.UI/WishList/Source/Typescript/Services/WishListService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var WishListInHeaderController = (function (_super) {
            __extends(WishListInHeaderController, _super);
            function WishListInHeaderController() {
                _super.apply(this, arguments);
                this._wishListService = new Composer.WishListService(new Composer.WishListRepository(), this.eventHub);
            }
            WishListInHeaderController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.initializeWishListQuantity();
                this.registerSubscriptions();
            };
            WishListInHeaderController.prototype.initializeWishListQuantity = function () {
                var _this = this;
                if (!this.context.viewModel.IsAuthenticated) {
                    this._wishListService.clearCache();
                }
                this._wishListService.getWishListSummary()
                    .done(function (wishList) {
                    if (!_.isEmpty(wishList)) {
                        _this.renderWishList(wishList);
                    }
                });
            };
            WishListInHeaderController.prototype.registerSubscriptions = function () {
                var _this = this;
                var loggedInScheduler = Composer.EventScheduler.instance(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedIn]);
                var loggedOutScheduler = Composer.EventScheduler.instance(Composer.MyAccountEvents[Composer.MyAccountEvents.LoggedOut]);
                this.eventHub.subscribe('wishListUpdated', function (e) { return _this.onWishListUpdated(e); });
                loggedOutScheduler.subscribe(function (e) { return _this.onRefreshUser(e); });
                loggedInScheduler.subscribe(function (e) { return _this.onRefreshUser(e); });
            };
            WishListInHeaderController.prototype.onWishListUpdated = function (e) {
                var wishList = e.data;
                this.renderWishList(wishList);
            };
            WishListInHeaderController.prototype.onRefreshUser = function (e) {
                return this._wishListService.clearCache();
            };
            WishListInHeaderController.prototype.renderWishList = function (wishList) {
                this.render('WishListQuantity', wishList);
            };
            WishListInHeaderController.prototype.onError = function (reason) {
                console.error("An error occured while rendering the wishList with the WishListInHeader.", reason);
            };
            return WishListInHeaderController;
        }(Orckestra.Composer.Controller));
        Composer.WishListInHeaderController = WishListInHeaderController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.Cart.UI/WishList/Source/Typescript/WishListRepository.ts' />
///<reference path='../../../../Composer.Cart.UI/WishList/Source/Typescript/Services/WishListService.ts' />
///<reference path='../../../../Composer.Cart.UI/CartSummary/Source/Typescript/CartService.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Repositories/CartRepository.ts' />
///<reference path='../../../WishList/Source/Typescript/WishListController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var SharedWishListController = (function (_super) {
            __extends(SharedWishListController, _super);
            function SharedWishListController() {
                _super.apply(this, arguments);
            }
            SharedWishListController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
            };
            SharedWishListController.prototype.getListNameForAnalytics = function () {
                return 'Shared Wish List';
            };
            return SharedWishListController;
        }(Orckestra.Composer.WishListController));
        Composer.SharedWishListController = SharedWishListController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var ProductIdentifierDto = (function () {
            function ProductIdentifierDto(ProductId, VariantId) {
                this.ProductId = ProductId;
                this.VariantId = VariantId;
            }
            return ProductIdentifierDto;
        }());
        Composer.ProductIdentifierDto = ProductIdentifierDto;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../RelatedProducts/Source/TypeScript/ProductIdentifierDto.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='./IInventoryService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var InventoryService = (function () {
            function InventoryService() {
            }
            InventoryService.prototype.isAvailableToSell = function (sku) {
                var _this = this;
                if (!sku) {
                    throw new Error('The sku is required');
                }
                if (!this._memoizeIsAvailableToSell) {
                    this._memoizeIsAvailableToSell = _.memoize(function (arg) { return _this.isAvailableToSellImpl(arg); });
                }
                return this._memoizeIsAvailableToSell(sku);
            };
            InventoryService.prototype.isAvailableToSellImpl = function (sku) {
                var data = { skus: [sku] };
                return Composer.ComposerClient.post('/api/inventory/findInventoryItems', data)
                    .then(function (availableSkus) { return _.contains(availableSkus, sku); });
            };
            return InventoryService;
        }());
        Composer.InventoryService = InventoryService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../RelatedProducts/Source/TypeScript/ProductIdentifierDto.ts' />

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/IControllerContext.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        //
        //Isolated logic, this class rebuild the keyVariantAttributeItems array
        //as expected by KvaItems.hbs
        //TODO: Instancier dans productService (passer dans le constructeur)
        var KeyVariantAttributeItemsBuilder = (function () {
            //Passer viewModel
            function KeyVariantAttributeItemsBuilder(context) {
                if (!context) {
                    throw new Error('Error: context is required');
                }
                if (!context.viewModel) {
                    throw new Error('Error: context.viewModel is required');
                }
                this.context = context;
            }
            //Find possible kva value states bases on the given selection
            //
            //<returns>
            // KeyVariantAttributeItem ViewModel ready for render
            //</returns>
            KeyVariantAttributeItemsBuilder.prototype.BuildKeyVariantAttributeItemsFor = function (selectedKvas) {
                selectedKvas = selectedKvas || {};
                //Get the last known KvaState and use it as a starting point
                var keyVariantAttributeItems = this.context.viewModel.keyVariantAttributeItems || [];
                //Initiate
                var reverseKvaLookup = this.InitiateKVAStateFor(keyVariantAttributeItems, selectedKvas);
                //Find
                var reachableVariants = this.FindReachableVariantsFrom(keyVariantAttributeItems, selectedKvas);
                //Enable
                this.EnableKVAState(reverseKvaLookup, reachableVariants, selectedKvas);
                //Memoize the KvaState for later
                this.context.viewModel.keyVariantAttributeItems = keyVariantAttributeItems;
                //
                return keyVariantAttributeItems;
            };
            //Toggle the Selected state and Disable everything
            //After this initial state, the KVAs will either be
            // Selected or Disable
            //
            //<returns>
            //  A Lookup of all KVA for later easy access using
            //  lookup[propertyName][value]
            //</returns>
            KeyVariantAttributeItemsBuilder.prototype.InitiateKVAStateFor = function (keyVariantAttributeItems, selectedKvas) {
                var reverseLookup = {};
                _.each(keyVariantAttributeItems, function (kva) {
                    var propertyName = kva.PropertyName;
                    var selectedValue = selectedKvas[propertyName];
                    reverseLookup[propertyName] = {};
                    _.each(kva.Values, function (val) {
                        val.Selected = val.Value === selectedValue;
                        val.Disabled = true;
                        reverseLookup[propertyName][val.Value] = val;
                    });
                });
                return reverseLookup;
            };
            //Find all reachable variants from the given configuration
            //Those are variant that could possibly be reach by changing
            //one and only one KVA value
            //<returns>
            //  An array of Variants with all their properties
            //</returns>
            KeyVariantAttributeItemsBuilder.prototype.FindReachableVariantsFrom = function (keyVariantAttributeItems, selectedKvas) {
                var allVariants = (this.context.viewModel.allVariants || {});
                var possibleVariantsLookup = {};
                //Changing Selection
                _.each(selectedKvas, function (value, propertyName) {
                    var possibleMove = _.omit(selectedKvas, propertyName);
                    var v = _.each(_.filter(allVariants, { Kvas: possibleMove }), function (variant) {
                        possibleVariantsLookup[variant.Id] = variant;
                    });
                });
                //
                var variants = _.mapValues(possibleVariantsLookup, _.identity);
                return variants;
            };
            //Enable the KVAs based on the reachable variants
            //Using the reverse lookkup for faster access
            KeyVariantAttributeItemsBuilder.prototype.EnableKVAState = function (reverseKvaLookup, reachableVariants, selectedKvas) {
                //Enable reachable states
                _.each(reachableVariants, function (variant, variantId) {
                    _.each(variant.Kvas, function (value, propertyName) {
                        var kva = reverseKvaLookup[propertyName] || [];
                        var val = kva[value] || {};
                        val.Disabled = false;
                    });
                });
                //If the current selection match nothing, disable it.
                var selectedVariant = _.find(reachableVariants, { Kvas: selectedKvas });
                if (!selectedVariant) {
                    _.each(selectedKvas, function (value, propertyName) {
                        var kva = reverseKvaLookup[propertyName] || [];
                        var val = kva[value] || {};
                        val.Disabled = true;
                    });
                }
            };
            return KeyVariantAttributeItemsBuilder;
        }());
        Composer.KeyVariantAttributeItemsBuilder = KeyVariantAttributeItemsBuilder;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/IControllerContext.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
///<reference path='../../../RelatedProducts/Source/TypeScript/ProductIdentifierDto.ts' />
///<reference path='./IProductService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var ProductService = (function () {
            function ProductService(eventHub, context) {
                if (!eventHub) {
                    throw new Error('Error: eventHub is required');
                }
                if (!context) {
                    throw new Error('Error: context is required');
                }
                if (!context.viewModel) {
                    throw new Error('Error: context.viewModel is required');
                }
                this.eventHub = eventHub;
                this.context = context;
            }
            ProductService.prototype.showQuickView = function () {
                $('#addToCartModal').modal('show');
            };
            ProductService.prototype.closeQuickView = function () {
                $('#addToCartModal').modal('hide');
            };
            ProductService.prototype.selectImage = function (clickedImageIndex, concern) {
                // find currently selected image and set selected to false
                var index = _.findIndex(this.context.viewModel.Images, { Selected: true });
                if (index > -1) {
                    this.context.viewModel.Images[index].Selected = false;
                }
                this.context.viewModel.Images[clickedImageIndex].Selected = true;
                this.context.viewModel.SelectedImage.ImageUrl = this.context.viewModel.Images[clickedImageIndex].ImageUrl;
                this.eventHub.publish(concern + 'ImagesChanged', { data: this.context.viewModel });
            };
            ProductService.prototype.calculatePrice = function (productId, concern) {
                var _this = this;
                var data = { products: [productId] };
                return Composer.ComposerClient.post('/api/product/calculatePrices', data)
                    .then(function (result) {
                    var details = _this.context.viewModel;
                    var mainResult = _.find(result.ProductPrices, { ProductId: productId });
                    //TODO extend all other products on the page (if any)
                    //Extend the product details
                    _.extend(details, mainResult);
                    if (result && result.Currency) {
                        details.Currency = result.Currency;
                    }
                    //Extend the variants
                    var allVariants = _this.context.viewModel.allVariants;
                    _.each(mainResult.VariantPrices, function (variantPrice) {
                        var variant = _.find(allVariants, { Id: variantPrice.VariantId });
                        _.extend(variant, variantPrice);
                        if (variant !== undefined && variant.Id === details.displayedVariantId) {
                            _.extend(details, variant);
                        }
                    });
                    _this.eventHub.publish(concern + 'PricesChanged', { data: details });
                    _this.eventHub.publish(concern + 'PriceCalculated', { data: details });
                });
            };
            /*
             * Return the ViewModel of the Selected Variant.
             * If no variants are available,
             *    it returns the ViewModel of the Product
             * If no variant is selected (aka the KVA selection binds to an unavailable variant)
             *    it returns a None Buyable ViewModel
             */
            ProductService.prototype.getSelectedVariantViewModel = function () {
                var selectedVariantId = this.context.viewModel.selectedVariantId;
                var displayedVariantId = this.context.viewModel.displayedVariantId;
                if (!displayedVariantId) {
                    //This is mostlikely a product
                    return this.context.viewModel;
                }
                else if (selectedVariantId === displayedVariantId) {
                    //This is mostlikely a variant
                    return this.getVariant(selectedVariantId);
                }
                return {
                    'IsAvailableToSell': false
                };
            };
            // TODO (SAM) : getVariant and updateSelectedKvasWith shouldn't be in this file.
            //              They're more suited to a Controller or a helper class.
            //Get the Variant for the given id
            //<param name="variantId">The variant id to find</param>
            //<returns>KeyVariantAttributeItem ViewModel ready for render</returns>
            ProductService.prototype.getVariant = function (variantId) {
                var allVariants = this.context.viewModel.allVariants;
                var variant = _.find(allVariants, { Id: variantId });
                return variant;
            };
            ProductService.prototype.updateSelectedKvasWith = function (selectionsToAdd, concern) {
                var allVariants = this.context.viewModel.allVariants;
                var initialSelectedKvas = this.context.viewModel.selectedKvas || {};
                var initialSelectedVariantId = this.context.viewModel.selectedVariantId;
                var initialDisplayedVariantId = this.context.viewModel.displayedVariantId;
                //Update current selection
                var selectedKvas = _.merge(initialSelectedKvas, selectionsToAdd);
                //Find possible matches
                var variants = _.filter(allVariants, { Kvas: selectedKvas });
                if (variants && variants.length === 1) {
                    //Exactly one variant found, let's update the detail to display it.
                    var variant = variants[0];
                    this.context.viewModel.selectedKvas = _.clone(variant.Kvas);
                    this.context.viewModel.selectedVariantId = variant.Id;
                    this.context.viewModel.displayedVariantId = variant.Id;
                }
                else {
                    //More than one possibile variants, let's not assume any selected ones.
                    this.context.viewModel.selectedKvas = selectedKvas;
                    this.context.viewModel.selectedVariantId = null;
                }
                //Superseed the product details with the selection variant details
                _.extend(this.context.viewModel, this.getSelectedVariantViewModel());
                this.buildKeyVariantAttributeItems(concern);
                if (initialDisplayedVariantId !== this.context.viewModel.displayedVariantId) {
                    this.eventHub.publish(concern + 'DisplayedVariantIdChanged', {
                        data: {
                            initialDisplayedVariantId: initialDisplayedVariantId,
                            displayVariantId: this.context.viewModel.displayedVariantId,
                            selectedSku: this.context.viewModel.Sku
                        }
                    });
                }
                if (initialSelectedVariantId !== this.context.viewModel.selectedVariantId) {
                    this.eventHub.publish(concern + 'SelectedVariantIdChanged', {
                        data: {
                            initialSelectedVariantId: initialSelectedVariantId,
                            selectedVariantId: this.context.viewModel.selectedVariantId,
                            selectedSku: this.context.viewModel.Sku
                        }
                    });
                }
                this.eventHub.publish(concern + 'ImagesChanged', { data: this.context.viewModel });
                //I think this publish is unnecessary because it calculate the price after on a API server call
                this.eventHub.publish(concern + 'PricesChanged', { data: this.context.viewModel });
            };
            ProductService.prototype.getRelatedProducts = function (relatedProductIdentifiers) {
                return Composer.ComposerClient.post('/api/product/relatedProducts', relatedProductIdentifiers);
            };
            ProductService.prototype.loadQuickBuyProduct = function (productId, variantId, concern, source) {
                var _this = this;
                var data = {
                    ProductId: productId,
                    VariantId: variantId
                };
                return Composer.ComposerClient.post('/api/product/variantSelection', data)
                    .then(function (quickBuyProductViewModel) {
                    _this.eventHub.publish(concern + 'QuickBuyLoaded', { data: quickBuyProductViewModel, source: source });
                    return quickBuyProductViewModel;
                }).fail(function (reason) {
                    console.error('Failed loading the ProductQuickView', reason);
                    throw reason;
                });
            };
            ProductService.prototype.findInventoryItems = function (viewModel, concern) {
                var _this = this;
                var selectedSku = viewModel.Sku, skus;
                if (_.isEmpty(viewModel.allVariants)) {
                    skus = [viewModel.Sku];
                }
                else {
                    skus = _.pluck(viewModel.allVariants, 'Sku');
                }
                var data = { skus: skus };
                return Composer.ComposerClient.post('/api/inventory/findInventoryItems', data)
                    .then(function (skusAvailableToSell) {
                    var isAvailableToSell = _.include(skusAvailableToSell, selectedSku) && viewModel.IsAvailableToSell;
                    _this.eventHub.publish(concern + 'InventoryRetrieved', { data: isAvailableToSell });
                });
            };
            ProductService.prototype.productAvailableToSell = function (selectedSku, productAvailableToSell, productIsAvailableToSell) {
                return _.include(productAvailableToSell, selectedSku) && productIsAvailableToSell;
            };
            ProductService.prototype.buildKeyVariantAttributeItems = function (concern) {
                var selectedKvas = this.context.viewModel.selectedKvas;
                var builder = new Orckestra.Composer.KeyVariantAttributeItemsBuilder(this.context);
                var keyVariantAttributeItems = builder.BuildKeyVariantAttributeItemsFor(selectedKvas);
                this.eventHub.publish(concern + 'SelectedKvasChanged', { data: keyVariantAttributeItems });
            };
            ProductService.prototype.replaceHistory = function () {
                var variantId = this.context.viewModel.selectedVariantId;
                //Variant selection is not valid use last valid
                if (variantId === null) {
                    return;
                }
                var fullPathArray = window.location.pathname.split('/').filter(Boolean);
                var shortPathArray = fullPathArray.slice(0, 3);
                shortPathArray.push(variantId);
                var builtPath = window.location.protocol
                    + '//'
                    + window.location.host
                    + this.buildUrlPath(shortPathArray);
                history.replaceState({}, null, builtPath);
            };
            ProductService.prototype.buildUrlPath = function (pathArray) {
                var newPathname = '';
                for (var i = 0; i < pathArray.length; i++) {
                    newPathname += '/';
                    newPathname += pathArray[i];
                }
                return newPathname;
            };
            return ProductService;
        }());
        Composer.ProductService = ProductService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        /**
          * Module helper to format string value using the Overture convertion rules.
          */
        var ProductFormatter = (function () {
            function ProductFormatter() {
            }
            /**
             * convert a ProductProperty string value into the right strongly typed variable.
             *
             *     formatter.convertToStronglyTyped(actionContext.elementContext.val(), 'Decimal');
             *
             * @param strValue         The ProductProperty value to convert
             * @param propertyDataType the ProductProperty.DataType to induce the type
             */
            ProductFormatter.prototype.convertToStronglyTyped = function (strValue, propertyDataType) {
                var value;
                if (propertyDataType === 'Decimal') {
                    value = parseFloat(strValue);
                }
                else if (propertyDataType === 'Number') {
                    value = parseInt(strValue, 10);
                }
                else if (propertyDataType === 'Boolean') {
                    value = (strValue === 'true');
                }
                else if (propertyDataType === 'Text') {
                    value = strValue + '';
                }
                else if (propertyDataType === 'Lookup') {
                    value = strValue + '';
                }
                else {
                    value = strValue;
                }
                return value;
            };
            return ProductFormatter;
        }());
        Composer.ProductFormatter = ProductFormatter;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.Cart.UI/CartSummary/Source/Typescript/CartService.ts' />
///<reference path='../../../../Composer.Cart.UI/WishList/Source/Typescript/Services/WishListService.ts' />
///<reference path='../../../../Composer.Cart.UI/WishList/Source/TypeScript/WishListRepository.ts' />
///<reference path='../../../../Composer.MyAccount.UI/Common/Source/TypeScript/MembershipService.ts' />
///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Repositories/CartRepository.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/IEventInformation.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/UI/UIBusyHandle.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/ErrorHandling/ErrorHandler.ts' />
///<reference path='InventoryService.ts' />
///<reference path='ProductService.ts' />
///<reference path='ProductFormatter.ts' />
///<reference path='KeyVariantAttributeItemsBuilder.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ProductController = (function (_super) {
            __extends(ProductController, _super);
            function ProductController() {
                _super.apply(this, arguments);
                this.inventoryService = new Composer.InventoryService();
                this.productService = new Composer.ProductService(this.eventHub, this.context);
                this.cartService = new Composer.CartService(new Composer.CartRepository(), this.eventHub);
                this._wishListService = new Composer.WishListService(new Composer.WishListRepository(), this.eventHub);
                this._membershipService = new Composer.MembershipService(new Composer.MembershipRepository());
            }
            ProductController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
            };
            ProductController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe(this.concern + 'SelectedVariantIdChanged', function (e) { return _this.onSelectedVariantIdChanged(e); });
                this.eventHub.subscribe(this.concern + 'SelectedKvasChanged', function (e) { return _this.onSelectedKvasChanged(e); });
                this.eventHub.subscribe(this.concern + 'ImagesChanged', function (e) { return _this.onImagesChanged(e); });
                this.eventHub.subscribe(this.concern + 'PricesChanged', function (e) { return _this.onPricesChanged(e); });
            };
            ProductController.prototype.onSelectedVariantIdChanged = function (e) {
                return;
            };
            ProductController.prototype.onSelectedKvasChanged = function (e) {
                return;
            };
            ProductController.prototype.onImagesChanged = function (e) {
                return;
            };
            ProductController.prototype.onPricesChanged = function (e) {
                return;
            };
            ProductController.prototype.renderData = function () {
                var quantity = this.getCurrentQuantity();
                var renderTasks = [];
                if (this.isProductWithVariants() && this.isSelectedVariantUnavailable()) {
                    renderTasks.push(this.renderUnavailableQuantity(quantity));
                    renderTasks.push(this.renderUnavailableAddToCart());
                }
                else {
                    renderTasks.push(this.renderAvailableQuantity(quantity));
                    renderTasks.push(this.renderAvailableAddToCart());
                }
                renderTasks.push(this.renderAddToWishList());
                return Q.all(renderTasks);
            };
            ProductController.prototype.isProductWithVariants = function () {
                return $.isArray(this.context.viewModel.allVariants);
            };
            ProductController.prototype.isSelectedVariantUnavailable = function () {
                return !this.context.viewModel.selectedVariantId;
            };
            ProductController.prototype.renderUnavailableQuantity = function (quantity) {
                var _this = this;
                return Q.fcall(function () { return _this.render('ProductQuantity', { Quantity: quantity, Disabled: true }); });
            };
            ProductController.prototype.renderAvailableQuantity = function (quantity) {
                var _this = this;
                return this.inventoryService
                    .isAvailableToSell(this.context.viewModel.Sku)
                    .then(function (result) { return _this.render('ProductQuantity', { Quantity: quantity, Disabled: !result }); });
            };
            ProductController.prototype.renderAddToWishList = function () {
                var _this = this;
                var vm = this.context.viewModel;
                this.render('AddToWishList', { Loaded: false });
                if (this.isProductWithVariants() && this.isSelectedVariantUnavailable()) {
                    return;
                }
                return this._wishListService.getLineItem(vm.productId, vm.selectedVariantId)
                    .then(function (result) {
                    if (result) {
                        _this.render('AddToWishList', { Loaded: true, IsInWishList: true, Id: result.Id });
                    }
                    else {
                        _this.render('AddToWishList', { Loaded: true, IsInWishList: false });
                    }
                });
            };
            ProductController.prototype.renderUnavailableAddToCart = function () {
                return;
            };
            ProductController.prototype.renderAvailableAddToCart = function () {
                return;
            };
            ProductController.prototype.decrementQuantity = function (actionContext) {
                var quantity = this.getCurrentQuantity();
                quantity.Value--;
                actionContext.event.preventDefault();
                this.renderAvailableQuantity(quantity).done();
            };
            ProductController.prototype.incrementQuantity = function (actionContext) {
                var quantity = this.getCurrentQuantity();
                quantity.Value++;
                actionContext.event.preventDefault();
                this.renderAvailableQuantity(quantity).done();
            };
            ProductController.prototype.changeQuantity = function (actionContext) {
                var quantity = this.getCurrentQuantity();
                var newValue = parseInt(actionContext.elementContext.val(), 10);
                if (isFinite(newValue)) {
                    quantity.Value = Math.max(Math.min(newValue, quantity.Max), quantity.Min); // constraint newvalue to max and min.
                }
                this.renderAvailableQuantity(quantity).done();
            };
            ProductController.prototype.addLineItemToWishList = function (actionContext) {
                var _this = this;
                this._membershipService.isAuthenticated().then(function (result) {
                    if (result.IsAuthenticated) {
                        var vm = _this.context.viewModel;
                        var busy = _this.asyncBusy({ elementContext: actionContext.elementContext });
                        var analyticData = {
                            DisplayName: vm.DisplayName,
                            ListPrice: vm.ListPrice
                        };
                        _this.eventHub.publish('wishListLineItemAdding', {
                            data: analyticData
                        });
                        _this._wishListService.addLineItem(vm.productId, vm.selectedVariantId).then(function (data) {
                            var lineItem = data.Items.filter(function (it) { return it.ProductId === vm.productId && it.VariantId === vm.selectedVariantId; })[0];
                            _this.render('AddToWishList', { Loaded: true, IsInWishList: true, Id: lineItem.Id });
                        }).fin(function () { return busy.done(); });
                    }
                    else {
                        _this.redirectToSignInBeforeAddToWishList();
                    }
                });
            };
            ProductController.prototype.removeLineItemToWishList = function (actionContext) {
                var _this = this;
                this._membershipService.isAuthenticated().then(function (result) {
                    if (result.IsAuthenticated) {
                        var id = actionContext.elementContext.data('id');
                        var busy = _this.asyncBusy({ elementContext: actionContext.elementContext });
                        _this._wishListService.removeLineItem(id).then(function (data) {
                            _this.render('AddToWishList', { Loaded: true, IsInWishList: false });
                        }).fin(function () { return busy.done(); });
                    }
                    else {
                        _this.redirectToSignInBeforeAddToWishList();
                    }
                });
            };
            ProductController.prototype.redirectToSignInBeforeAddToWishList = function () {
                var _this = this;
                this._wishListService.getSignInUrl().then(function (signInUrl) {
                    _this._wishListService.clearCache();
                    _this.context.window.location.href = signInUrl + '?ReturnUrl=' + _this.context.window.location.href;
                });
            };
            ProductController.prototype.addLineItem = function (actionContext) {
                var _this = this;
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                var quantity = this.getCurrentQuantity();
                var vm = this.context.viewModel;
                var variant = _.find(vm.allVariants, function (v) { return v.Id === vm.selectedVariantId; });
                var data = this.getProductDataForAnalytics(vm);
                data.Quantity = quantity.Value ? quantity.Value : 1;
                if (variant) {
                    var variantData = this.getVariantDataForAnalytics(variant);
                    _.extend(data, variantData);
                }
                this.eventHub.publish('lineItemAdding', {
                    data: data
                });
                this.addLineItemImpl(vm.productId, vm.ListPrice, vm.selectedVariantId, quantity)
                    .then(function (data) {
                    _this.onAddLineItemSuccess(data);
                    actionContext.elementContext.focus();
                    return data;
                }, function (reason) {
                    _this.onAddLineItemFailed(reason);
                    actionContext.elementContext.focus();
                    throw reason;
                })
                    .then(function (data) { return _this.completeAddLineItem(quantity); })
                    .fin(function () { return busy.done(); });
            };
            ProductController.prototype.onAddLineItemSuccess = function (data) {
                Composer.ErrorHandler.instance().removeErrors();
            };
            ProductController.prototype.onAddLineItemFailed = function (reason) {
                console.error('Error on adding line item', reason);
                Composer.ErrorHandler.instance().outputErrorFromCode('AddToCartFailed');
            };
            ProductController.prototype.getCurrentQuantity = function () {
                var element = $(this.context.container).find('[name="product-quantity"]');
                return {
                    Min: parseInt(element.data('quantityMin'), 10),
                    Max: parseInt(element.data('quantityMax'), 10),
                    Value: parseInt(element.data('quantity'), 10)
                };
            };
            ProductController.prototype.addLineItemImpl = function (productId, price, variantId, quantity) {
                return this.cartService.addLineItem(productId, price, variantId, quantity.Value);
            };
            ProductController.prototype.completeAddLineItem = function (quantityAdded) {
                return;
            };
            ProductController.prototype.selectImage = function (actionContext) {
                actionContext.event.preventDefault();
                var clickedImageIndex = actionContext.elementContext.data('index');
                this.productService.selectImage(clickedImageIndex, this.concern);
            };
            ProductController.prototype.selectKva = function (actionContext) {
                var selectionsToAdd = {};
                var propertyName = actionContext.elementContext.parents('[data-propertyname]').data('propertyname');
                var propertyDataType = actionContext.elementContext.parents('[data-propertydatatype]').data('propertydatatype');
                var formatter = new Orckestra.Composer.ProductFormatter();
                var value = formatter.convertToStronglyTyped(actionContext.elementContext.val(), propertyDataType);
                selectionsToAdd[propertyName] = value;
                this.productService.updateSelectedKvasWith(selectionsToAdd, this.concern);
            };
            ProductController.prototype.calculatePrice = function () {
                return this.productService.calculatePrice(this.context.viewModel.productId, this.concern);
            };
            ProductController.prototype.getProductDataForAnalytics = function (vm) {
                var productId = (vm.productId) ? vm.productId : vm.ProductId;
                var data = {
                    List: this.getListNameForAnalytics(),
                    ProductId: productId,
                    DisplayName: vm.DisplayName,
                    ListPrice: vm.ListPrice,
                    Brand: vm.Brand,
                    CategoryId: vm.CategoryId
                };
                return data;
            };
            ProductController.prototype.getListNameForAnalytics = function () {
                throw new Error('ListName not defined for this controller');
            };
            ProductController.prototype.getVariantDataForAnalytics = function (variant) {
                var variantName = this.buildVariantName(variant.Kvas);
                var data = {
                    Variant: variantName,
                    Name: variant.DisplayName ? variant.DisplayName : undefined,
                    ListPrice: variant.ListPrice
                };
                return data;
            };
            ProductController.prototype.buildVariantName = function (kvas) {
                var keys = Object.keys(kvas).sort();
                var nameParts = [];
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    var value = kvas[key];
                    nameParts.push(value);
                }
                return nameParts.join(' ');
            };
            return ProductController;
        }(Orckestra.Composer.Controller));
        Composer.ProductController = ProductController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../Product/Source/Typescript/ProductController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ProductDetailController = (function (_super) {
            __extends(ProductDetailController, _super);
            function ProductDetailController() {
                _super.apply(this, arguments);
                this._concern = 'productDetail';
            }
            ProductDetailController.prototype.initialize = function () {
                var _this = this;
                _super.prototype.initialize.call(this);
                this.productService.updateSelectedKvasWith(this.context.viewModel.selectedKvas, this._concern);
                var priceDisplayBusy = this.asyncBusy({
                    msDelay: 300,
                    loadingIndicatorSelector: '.loading-indicator-pricediscount'
                });
                var addToCartBusy = this.asyncBusy({
                    msDelay: 300,
                    loadingIndicatorSelector: '.loading-indicator-inventory'
                });
                Q.when(this.calculatePrice()).done(function () {
                    priceDisplayBusy.done();
                    _this.notifyAnalyticsOfProductDetailsImpression();
                });
                Q.when(this.renderData()).done(function () { return addToCartBusy.done(); });
            };
            ProductDetailController.prototype.getListNameForAnalytics = function () {
                return 'Detail';
            };
            ProductDetailController.prototype.notifyAnalyticsOfProductDetailsImpression = function () {
                var vm = this.context.viewModel;
                var variant = _.find(vm.allVariants, function (v) { return v.Id === vm.selectedVariantId; });
                var data = this.getProductDataForAnalytics(vm);
                if (variant) {
                    var variantData = this.getVariantDataForAnalytics(variant);
                    _.extend(data, variantData);
                }
                this.publishProductImpressionEvent(data);
            };
            ProductDetailController.prototype.publishProductImpressionEvent = function (data) {
                this.eventHub.publish('productDetailsRendered', {
                    data: data
                });
            };
            ProductDetailController.prototype.onSelectedVariantIdChanged = function (e) {
                this.renderData().done();
            };
            ProductDetailController.prototype.onSelectedKvasChanged = function (e) {
                this.render('KvaItems', { KeyVariantAttributeItems: e.data });
            };
            ProductDetailController.prototype.onImagesChanged = function (e) {
                if (this.isProductWithVariants() && this.isSelectedVariantUnavailable()) {
                    this.render('ProductImages', this.getUnavailableProductImages(e));
                }
                else {
                    this.render('ProductImages', e.data);
                }
            };
            ProductDetailController.prototype.getUnavailableProductImages = function (e) {
                var fallbackImageUrl = e.data.FallbackImageUrl;
                var image = {
                    ThumbnailUrl: fallbackImageUrl,
                    ImageUrl: fallbackImageUrl,
                    Selected: true
                };
                var vm = {
                    DisplayName: e.data.DisplayName,
                    Images: [image],
                    SelectedImage: {
                        ImageUrl: fallbackImageUrl
                    }
                };
                return vm;
            };
            ProductDetailController.prototype.onPricesChanged = function (e) {
                if (this.isProductWithVariants() && this.isSelectedVariantUnavailable()) {
                    this.render('PriceDiscount', null);
                }
                else {
                    this.render('PriceDiscount', e.data);
                }
            };
            ProductDetailController.prototype.renderUnavailableAddToCart = function () {
                var _this = this;
                return Q.fcall(function () { return _this.render('AddToCartProductDetail', { IsUnavailable: true }); });
            };
            ProductDetailController.prototype.renderAvailableAddToCart = function () {
                var _this = this;
                var sku = this.context.viewModel.Sku;
                return this.inventoryService.isAvailableToSell(sku)
                    .then(function (result) { return _this.render('AddToCartProductDetail', { IsAvailableToSell: result }); });
            };
            ProductDetailController.prototype.selectKva = function (actionContext) {
                _super.prototype.selectKva.call(this, actionContext);
                //IE8 check
                if (history) {
                    this.productService.replaceHistory();
                }
            };
            ProductDetailController.prototype.completeAddLineItem = function (quantityAdded) {
                var quantity = {
                    Min: quantityAdded.Min,
                    Max: quantityAdded.Max,
                    Value: quantityAdded.Min
                };
                return this.renderAvailableQuantity(quantity);
            };
            return ProductDetailController;
        }(Orckestra.Composer.ProductController));
        Composer.ProductDetailController = ProductDetailController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../Product/Source/Typescript/ProductController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ProductZoomController = (function (_super) {
            __extends(ProductZoomController, _super);
            function ProductZoomController() {
                _super.apply(this, arguments);
            }
            ProductZoomController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.initZoom();
            };
            ProductZoomController.prototype.openZoom = function (event) {
                var context$ = $(event.target), index = parseInt($('.js-thumbnail.active').attr('data-index'), 10);
                $('.js-zoom-thumbnail').eq(index).click();
                event.preventDefault();
                $('.modal-fullscreen').modal();
            };
            ProductZoomController.prototype.changeZoomedImage = function (event) {
                var context$ = $(event.target), largeImage = document.querySelector('.js-zoom-image'), selector = event.target.tagName, // Clicked HTML element
                $largeImage = $(largeImage);
                if (selector.toLocaleLowerCase() !== 'a') {
                    context$ = context$.parent();
                }
                $('.js-zoom-thumbnail').removeClass('active');
                context$.addClass('active');
                $largeImage.attr('src', context$.attr('data-image'));
            };
            ProductZoomController.prototype.errorZoomedImage = function (event) {
                var $element = $(event.target), fallbackImageUrl = $element.attr('data-fallback-image-url');
                $element.attr('src', fallbackImageUrl);
            };
            ProductZoomController.prototype.initZoom = function () {
                var _this = this;
                $(document).on('click', '.js-zoom', function (event) { return _this.openZoom(event); });
                $(document).on('click', '.js-zoom-thumbnail', function (event) { return _this.changeZoomedImage(event); });
                $('.js-zoom-image').on('error', function (event) { return _this.errorZoomedImage(event); });
                // Select first thumbnail
                $('.js-zoom-thumbnail').eq(0).click();
            };
            return ProductZoomController;
        }(Orckestra.Composer.ProductController));
        Composer.ProductZoomController = ProductZoomController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));



///<reference path='./IFacet.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='./IFacet.ts' />
/// <reference path='./ISelectedFacet.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Generics/Collections/IHashtable.ts' />
/// <reference path='./ISearchCriteriaOptions.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var SearchCriteria = (function () {
            function SearchCriteria(eventHub, _window) {
                this.eventHub = eventHub;
                this._window = _window;
                this._facetRegistry = {};
                this.keywords = '';
                this.page = 1;
                this.sortBy = '';
                this.sortDirection = '';
                this.selectedFacets = {};
            }
            SearchCriteria.prototype.initialize = function (options) {
                this._facetRegistry = options.facetRegistry;
                this.correctedSearchTerm = options.correctedSearchTerm;
                this.loadFromQuerystring(this._window.location.search);
            };
            SearchCriteria.prototype.loadFromQuerystring = function (querystring) {
                this.loadNonFacetCriteria(querystring);
                this.loadFacetCriteria(querystring);
            };
            SearchCriteria.prototype.toQuerystring = function () {
                var queryBuilder = [], facetKey, facetIndex = 1, facetValue, selectedFacets = this.selectedFacets;
                if (!_.isEmpty(this.keywords) ||
                    !_.isEmpty(this.sortBy) ||
                    !_.isEmpty(this.sortDirection) ||
                    !_.isEmpty(this.page) && this.page > 1 ||
                    !_.isEmpty(this.selectedFacets)) {
                    queryBuilder.push('?');
                }
                if (!_.isEmpty(this.keywords) || !_.isEmpty(this.correctedSearchTerm)) {
                    queryBuilder.push('keywords=');
                    var keyword = _.isEmpty(this.correctedSearchTerm) ? this.keywords : this.correctedSearchTerm;
                    queryBuilder.push(this.encodeQuerystringValue(keyword));
                }
                if (!_.isEmpty(this.sortBy)) {
                    queryBuilder.push('&sortBy=');
                    queryBuilder.push(this.encodeQuerystringValue(this.sortBy));
                }
                if (!_.isEmpty(this.sortDirection)) {
                    queryBuilder.push('&sortDirection=');
                    queryBuilder.push(this.encodeQuerystringValue(this.sortDirection));
                }
                if (!_.isEmpty(this.page) && this.page > 1) {
                    queryBuilder.push('&page=');
                    queryBuilder.push(this.page.toString());
                }
                for (facetKey in selectedFacets) {
                    if (selectedFacets.hasOwnProperty(facetKey)) {
                        facetValue = selectedFacets[facetKey];
                        queryBuilder.push('&');
                        queryBuilder.push(SearchCriteria.facetFieldNameKeyPrefix);
                        queryBuilder.push(facetIndex.toString());
                        queryBuilder.push('=');
                        queryBuilder.push(this.encodeQuerystringValue(facetKey));
                        queryBuilder.push('&');
                        queryBuilder.push(SearchCriteria.facetValueKeyPrefix);
                        queryBuilder.push(facetIndex.toString());
                        queryBuilder.push('=');
                        queryBuilder.push(this.encodeQuerystringValue(_.isArray(facetValue) ? facetValue.join('|') : facetValue));
                        facetIndex++;
                    }
                }
                return queryBuilder.join('');
            };
            SearchCriteria.prototype.clearFacets = function () {
                this.resetPaging();
                this.selectedFacets = {};
            };
            SearchCriteria.prototype.addSingleFacet = function (facetKey, facetValue) {
                this.selectedFacets[facetKey] = facetValue;
            };
            SearchCriteria.prototype.updateMultiFacets = function (facets) {
                var _this = this;
                var facetKey, facetValues;
                this.resetPaging();
                this.clearSelectedMultiFacets();
                for (facetKey in facets) {
                    if (facets.hasOwnProperty(facetKey)) {
                        this.selectedFacets[facetKey] = [];
                        facetValues = (typeof facets[facetKey] === 'string' ?
                            [facets[facetKey]] : facets[facetKey]);
                        facetValues.forEach(function (value, index, array) {
                            _this.selectedFacets[facetKey].push(value);
                        });
                    }
                }
            };
            SearchCriteria.prototype.removeFacet = function (facetToRemove) {
                var facet;
                this.resetPaging();
                if (this.selectedFacets.hasOwnProperty(facetToRemove.facetFieldName)) {
                    facet = this.getSelectedFacetsArray(facetToRemove.facetFieldName);
                    if (facetToRemove.facetType.toLowerCase() === 'range') {
                        facet.selectedValues = undefined;
                    }
                    else {
                        // to string in case facetValue is a number
                        facet.selectedValues = _.without(facet.selectedValues, facetToRemove.facetValue.toString());
                    }
                    this.setSelectedFacet(facet);
                }
            };
            SearchCriteria.prototype.getSelectedFacetsArray = function (facetFieldName) {
                var isSelectedFacetArray;
                var selectedFacet = this.selectedFacets[facetFieldName];
                var selectedFacetArray;
                if (_.isArray(selectedFacet)) {
                    isSelectedFacetArray = true;
                    selectedFacetArray = selectedFacet;
                }
                else if (_.isString(selectedFacet)) {
                    isSelectedFacetArray = false;
                    selectedFacetArray = selectedFacet.split('|');
                }
                else {
                    throw new Error("The selected facet " + facetFieldName + " is not an array or a string");
                }
                return {
                    facetFieldName: facetFieldName,
                    selectedValues: selectedFacetArray,
                    isFacetArray: isSelectedFacetArray
                };
            };
            SearchCriteria.prototype.setSelectedFacet = function (selectedFacet) {
                var facetStr = '';
                if (_.isEmpty(selectedFacet.selectedValues)) {
                    delete this.selectedFacets[selectedFacet.facetFieldName];
                }
                else {
                    if (selectedFacet.isFacetArray) {
                        this.selectedFacets[selectedFacet.facetFieldName] = selectedFacet.selectedValues;
                    }
                    else {
                        _.each(selectedFacet.selectedValues, function (v) {
                            if (!_.isEmpty(facetStr)) {
                                facetStr = facetStr + '|';
                            }
                            facetStr = facetStr + v;
                        });
                        this.selectedFacets[selectedFacet.facetFieldName] = facetStr;
                    }
                }
            };
            SearchCriteria.prototype.clearSelectedMultiFacets = function () {
                var _this = this;
                var selectedFacets = this.selectedFacets, facetKey, facetKeysToDelete = [];
                for (facetKey in selectedFacets) {
                    if (selectedFacets.hasOwnProperty(facetKey) && this._facetRegistry[facetKey] === 'multiselect') {
                        facetKeysToDelete.push(facetKey);
                    }
                }
                facetKeysToDelete.forEach(function (facetKey) {
                    delete _this.selectedFacets[facetKey];
                });
            };
            SearchCriteria.prototype.resetPaging = function () {
                this.page = 1;
            };
            SearchCriteria.prototype.loadFacetCriteria = function (querystring) {
                var _this = this;
                // TODO: Don't need to loop over querystring again. Should
                // be processing this in the same loop as the non-facet criteria.
                var facetFieldName, facetValue, key, keys = {}, keyValues = {};
                if (querystring.length === 0) {
                    return;
                }
                querystring.substring(1).split('&').forEach(function (value, index, array) {
                    var keyValue = value.split('='), keyFound, valueFound;
                    if (keyValue.length === 2) {
                        keyFound = keyValue[0].toLowerCase();
                        valueFound = _this.decodeQuerystringValue(keyValue[1]);
                        if (keyFound.indexOf(SearchCriteria.facetFieldNameKeyPrefix) === 0) {
                            keys[keyFound.replace(SearchCriteria.facetFieldNameKeyPrefix, '')] = valueFound;
                        }
                        if (keyFound.indexOf(SearchCriteria.facetValueKeyPrefix) === 0) {
                            keyValues[keyFound.replace(SearchCriteria.facetValueKeyPrefix, '')] = valueFound;
                        }
                    }
                });
                for (key in keys) {
                    if (keys.hasOwnProperty(key)) {
                        facetFieldName = this.decodeQuerystringValue(keys[key]);
                        if (keyValues.hasOwnProperty(key)) {
                            facetValue = this.decodeQuerystringValue(keyValues[key]);
                            switch (this._facetRegistry[facetFieldName]) {
                                case 'multiselect':
                                    this.selectedFacets[facetFieldName] = facetValue.split('|');
                                    break;
                                default:
                                    this.selectedFacets[facetFieldName] = facetValue;
                                    break;
                            }
                        }
                    }
                }
            };
            SearchCriteria.prototype.loadNonFacetCriteria = function (querystring) {
                var _this = this;
                if (querystring.length === 0) {
                    return;
                }
                querystring.substring(1).split('&').forEach(function (value, index, array) {
                    var keyValue = value.split('='), keyFound, valueFound;
                    if (keyValue.length === 2) {
                        keyFound = keyValue[0].toUpperCase();
                        valueFound = _this.decodeQuerystringValue((keyValue[1] + ''));
                        switch (keyFound) {
                            case 'KEYWORDS':
                                _this.keywords = valueFound;
                                break;
                            case 'SORTBY':
                                _this.sortBy = valueFound;
                                break;
                            case 'SORTDIRECTION':
                                _this.sortDirection = valueFound;
                                break;
                            case 'PAGE':
                                _this.page = parseInt(valueFound, 10);
                                break;
                            default:
                                break;
                        }
                    }
                });
            };
            SearchCriteria.prototype.encodeQuerystringValue = function (valueToEncode) {
                return encodeURIComponent(valueToEncode).replace(/%20/g, '+');
            };
            SearchCriteria.prototype.decodeQuerystringValue = function (valueToDecode) {
                return decodeURIComponent(valueToDecode).replace(/\+/g, ' ');
            };
            SearchCriteria.facetFieldNameKeyPrefix = 'fn';
            SearchCriteria.facetValueKeyPrefix = 'fv';
            return SearchCriteria;
        }());
        Composer.SearchCriteria = SearchCriteria;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../../Composer.UI/Source/TypeScript/Events/IEventInformation.ts' />
/// <reference path='../../../../../Composer.UI/Source/TypeScript/Generics/Collections/IHashtable.ts' />
/// <reference path='../ISearchCriteriaOptions.ts' />



/// <reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../../Composer.UI/Source/TypeScript/Events/IEventHub.ts' />
/// <reference path='../../../../../Composer.UI/Source/TypeScript/Events/IEventInformation.ts' />
/// <reference path='../SearchCriteria.ts' />
/// <reference path='./ISearchService.ts' />
/// <reference path='../IFacet.ts' />
/// <reference path='../ISingleSelectCategory.ts' />
///
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        // TODO: Decouple window object from search service.
        var SearchService = (function () {
            function SearchService(_eventHub, _window) {
                this._eventHub = _eventHub;
                this._window = _window;
                this._baseSearchUrl = window.location.href.replace(window.location.search, '');
                this._baseUrl = this._baseSearchUrl.replace(window.location.pathname, '');
                this._facetRegistry = {};
                this._searchCriteria = new Composer.SearchCriteria(_eventHub, _window);
            }
            /**
             * Initializes the search service.
             *
             * param facetRegistry Facets available to the search service.
             */
            SearchService.prototype.initialize = function (options) {
                this.registerSubscriptions();
                this._searchCriteria.initialize(options);
            };
            SearchService.prototype.singleFacetsChanged = function (eventInformation) {
                var facetKey = eventInformation.data.facetKey, facetValue = eventInformation.data.facetValue;
                this._searchCriteria.addSingleFacet(facetKey, facetValue);
                this.search();
            };
            SearchService.prototype.sortingChanged = function (eventInformation) {
                var dataUrl = eventInformation.data.url;
                this._window.location.href = dataUrl;
            };
            SearchService.prototype.getSelectedFacets = function () {
                return this._searchCriteria.selectedFacets;
            };
            SearchService.prototype.multiFacetChanged = function (eventInformation) {
                this._searchCriteria.updateMultiFacets(eventInformation.data.filter);
                this.search();
            };
            SearchService.prototype.clearFacets = function (eventInformation) {
                var landingPageUrl = eventInformation.data.landingPageUrl;
                this._searchCriteria.clearFacets();
                if (landingPageUrl) {
                    this._baseSearchUrl = landingPageUrl;
                }
                this.search();
            };
            SearchService.prototype.removeFacet = function (eventInformation) {
                var facet = eventInformation.data;
                this._searchCriteria.removeFacet(facet);
                if (facet.facetLandingPageUrl && facet.facetType === 'SingleSelect') {
                    this._baseSearchUrl = facet.facetLandingPageUrl;
                }
                this.search();
            };
            SearchService.prototype.addSingleSelectCategory = function (eventInformation) {
                var singleSelectCategory = eventInformation.data;
                this._baseSearchUrl = singleSelectCategory.categoryUrl;
                this.search();
            };
            SearchService.prototype.registerSubscriptions = function () {
                this._eventHub.subscribe('sortingChanged', this.sortingChanged.bind(this));
                this._eventHub.subscribe('singleFacetsChanged', this.singleFacetsChanged.bind(this));
                this._eventHub.subscribe('multiFacetChanged', this.multiFacetChanged.bind(this));
                this._eventHub.subscribe('facetsCleared', this.clearFacets.bind(this));
                this._eventHub.subscribe('facetRemoved', this.removeFacet.bind(this));
                this._eventHub.subscribe('singleCategoryAdded', this.addSingleSelectCategory.bind(this));
            };
            SearchService.prototype.search = function () {
                this._window.location.href = this._baseSearchUrl + this._searchCriteria.toQuerystring();
            };
            return SearchService;
        }());
        Composer.SearchService = SearchService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../../Composer.UI/Source/TypeScript/JqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
/// <reference path='../../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='../../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
///<reference path='../../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='../../../../../Composer.UI/Source/TypeScript/Events/IEventHub.ts' />
/// <reference path='../../../../../Composer.UI/Source/TypeScript/System/IDisposable.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var SliderService = (function () {
            function SliderService(context, eventHub) {
                this.context = context;
                this.eventHub = eventHub;
                this.context = context;
            }
            SliderService.prototype.initialize = function (selectedValues) {
                this.applyButtonContext = this.context.find(':submit');
                this.mapData(this.context.data());
                this.initializeSlider(selectedValues);
            };
            SliderService.prototype.dispose = function () {
                this.sliderInstance.destroy();
            };
            SliderService.prototype.mapData = function (containerData) {
                this.step = containerData.step || 1;
                this.maxLabel = containerData.maxLabel;
                this.maxValue = containerData.max;
                this.minValue = containerData.min;
                this.facetFieldName = containerData.facetfieldname;
            };
            SliderService.prototype.dirtied = function () {
                this.applyButtonContext.prop('disabled', false);
            };
            /**
             * Formatting for the formatted values of the slider. When getting.
             */
            SliderService.prototype.formatFrom = function (value) {
                if (this.maxLabel && value === this.maxLabel) {
                    value = this.maxValue;
                }
                return value;
            };
            /**
             * Formatting for the formatted values of the slider. When setting.
             */
            SliderService.prototype.formatTo = function (value) {
                value = parseInt(value, 10) || 0;
                if (this.maxLabel && value === this.maxValue) {
                    value = this.maxLabel;
                }
                return value;
            };
            SliderService.prototype.initializeSlider = function (facetData) {
                var _this = this;
                var sliderElement = this.context.find('.range').get(0);
                var defaultRange = [this.minValue, this.maxValue];
                var startRange = defaultRange;
                var selectedRange;
                var lowerRangeContext = this.context.find('.js-lowerValue');
                var upperRangeContext = this.context.find('.js-higherValue');
                // TODO handle array or not array
                if (facetData) {
                    selectedRange = facetData.split('|');
                    startRange = defaultRange.map(function (value, index) {
                        return selectedRange[index] ? selectedRange[index] : defaultRange[index];
                    });
                }
                this.sliderInstance = this.createSlider(startRange, sliderElement);
                this.sliderInstance.on('set', function (values, handle) {
                    _this.dirtied();
                });
                this.sliderInstance.on('update', function (values, handle) {
                    lowerRangeContext.val(values[0]);
                    upperRangeContext.val(values[1]);
                });
                lowerRangeContext.on('keyup', function (event) { return _this.dirtied(); });
                upperRangeContext.on('keyup', function (event) { return _this.dirtied(); });
                lowerRangeContext.on('blur', function (event) { return _this.sliderInstance.set([$(event.target).val(), null]); });
                upperRangeContext.on('blur', function (event) { return _this.sliderInstance.set([null, $(event.target).val()]); });
            };
            SliderService.prototype.createSlider = function (startRange, sliderElement) {
                var _this = this;
                noUiSlider.create(sliderElement, {
                    start: startRange,
                    connect: true,
                    margin: this.step,
                    step: this.step,
                    range: {
                        'min': this.minValue,
                        'max': this.maxValue
                    },
                    format: {
                        to: function (value) { return _this.formatTo(value); },
                        from: function (value) { return _this.formatFrom(value); }
                    }
                });
                return sliderElement.noUiSlider;
            };
            SliderService.prototype.getKey = function () {
                return this.facetFieldName;
            };
            SliderService.prototype.getValues = function () {
                var values = this.sliderInstance.get();
                if (values[1] === this.maxLabel) {
                    values[1] = undefined;
                }
                return values;
            };
            return SliderService;
        }());
        Composer.SliderService = SliderService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var UrlHelper = (function () {
            function UrlHelper() {
            }
            UrlHelper.resolvePageType = function () {
                if (window.location.href.indexOf('keywords') !== -1) {
                    return 'search';
                }
                else {
                    return 'browse';
                }
            };
            return UrlHelper;
        }());
        Composer.UrlHelper = UrlHelper;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/JqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
/// <reference path='./Services/SearchService.ts' />
/// <reference path='./Services/ISearchService.ts' />
/// <reference path='./Services/SliderService.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='./UrlHelper.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var FacetSearchController = (function (_super) {
            __extends(FacetSearchController, _super);
            function FacetSearchController() {
                _super.apply(this, arguments);
                this._debounceTimeout = 500;
                this.sliderServicesInstances = {};
            }
            FacetSearchController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.initializeServices();
            };
            FacetSearchController.prototype.multiFacetChanged = function (actionContext) {
                var _this = this;
                if (!_.isEmpty(this._debounceHandle)) {
                    this._debounceHandle.cancel();
                }
                var anchorContext = actionContext.elementContext, facetFieldName = anchorContext.attr('name'), facetValue = anchorContext.attr('value');
                this._debounceHandle = _.debounce(function () {
                    _this.eventHub.publish('multiFacetChanged', {
                        data: {
                            facetKey: facetFieldName,
                            facetValue: facetValue,
                            pageType: Composer.UrlHelper.resolvePageType(),
                            filter: $('form[name="searchFacets"]', _this.context.container).serializeObject()
                        }
                    });
                }, 250);
                this._debounceHandle();
            };
            FacetSearchController.prototype.dispose = function () {
                var _this = this;
                _super.prototype.dispose.call(this);
                Object.keys(this.sliderServicesInstances).forEach(function (sliderServiceKey) { return _this.sliderServicesInstances[sliderServiceKey].dispose(); });
            };
            FacetSearchController.prototype.singleFacetChanged = function (actionContext) {
                var anchorContext = actionContext.elementContext, facetFieldName = anchorContext.data('facetfieldname'), facetValue = anchorContext.data('facetvalue'), facets = {};
                actionContext.event.preventDefault();
                actionContext.event.stopPropagation();
                this.eventHub.publish('singleFacetsChanged', {
                    data: {
                        facetKey: facetFieldName,
                        facetValue: facetValue,
                        pageType: Composer.UrlHelper.resolvePageType()
                    }
                });
            };
            FacetSearchController.prototype.toggleFacetList = function (actionContext) {
                actionContext.event.preventDefault();
                var buttonContext = actionContext.elementContext, label = buttonContext.html(), showMoreLabel = buttonContext.data('label-showmore'), showLessLabel = buttonContext.data('label-showless');
                buttonContext.html(label === showMoreLabel ? showLessLabel : showMoreLabel);
            };
            FacetSearchController.prototype.refineByRange = function (actionContext) {
                actionContext.event.preventDefault();
                var container = actionContext.elementContext.closest('[data-facetfieldname]');
                var sliderServiceInstance = this.sliderServicesInstances[container.data('facetfieldname')];
                var values = sliderServiceInstance.getValues();
                var key = sliderServiceInstance.getKey();
                this.eventHub.publish('singleFacetsChanged', {
                    data: {
                        facetKey: key,
                        facetValue: values.join('|')
                    }
                });
            };
            FacetSearchController.prototype.initializeServices = function () {
                var _this = this;
                var selectedFacets;
                var correctedSearchTerm = this.context.container.attr('data-corrected-search-term');
                this._searchService = new Composer.SearchService(this.eventHub, window);
                this._searchService.initialize({
                    facetRegistry: this.buildFacetRegistry(),
                    correctedSearchTerm: correctedSearchTerm
                });
                selectedFacets = this._searchService.getSelectedFacets();
                this.context.container.find('[data-facettype="Range"]').each(function (index, element) {
                    var facetFieldName = $(element).data('facetfieldname');
                    var serviceInstance = new Composer.SliderService($(element), _this.eventHub);
                    serviceInstance.initialize(selectedFacets[facetFieldName]);
                    _this.sliderServicesInstances[facetFieldName] = serviceInstance;
                });
            };
            FacetSearchController.prototype.buildFacetRegistry = function () {
                var facetRegistry = {};
                $('[data-facettype]', this.context.container)
                    .add($('#selectedFacets [data-facetfieldname]', this.context.container))
                    .each(function (index, item) {
                    var facetType, facetFieldName, facetGroup = $(item);
                    facetFieldName = facetGroup.data('facetfieldname');
                    facetType = facetGroup.data('facettype').toLowerCase();
                    facetRegistry[facetFieldName] = facetType;
                });
                return facetRegistry;
            };
            return FacetSearchController;
        }(Orckestra.Composer.Controller));
        Composer.FacetSearchController = FacetSearchController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/JqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
/// <reference path='./Services/SearchService.ts' />
/// <reference path='./Services/ISearchService.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var ProductSearchController = (function (_super) {
            __extends(ProductSearchController, _super);
            function ProductSearchController() {
                _super.apply(this, arguments);
                this._debounceTimeout = 500;
            }
            ProductSearchController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.initializeSearchService();
            };
            ProductSearchController.prototype.multiFacetChanged = function (actionContext) {
                var _this = this;
                if (!_.isEmpty(this._debounceHandle)) {
                    this._debounceHandle.cancel();
                }
                var anchorContext = actionContext.elementContext, facetFieldName = anchorContext.attr('name'), facetValue = anchorContext.attr('value');
                this._debounceHandle = _.debounce(function () {
                    _this.eventHub.publish('multiFacetChanged', {
                        data: {
                            facetKey: facetFieldName,
                            facetValue: facetValue,
                            pageType: 'browse',
                            filter: $('form[name="searchFacets"]', _this.context.container).serializeObject()
                        }
                    });
                }, 250);
                this._debounceHandle();
            };
            ProductSearchController.prototype.singleFacetChanged = function (actionContext) {
                var anchorContext = actionContext.elementContext, facetFieldName = anchorContext.data('facetfieldname'), facetValue = anchorContext.data('facetvalue'), facets = {};
                actionContext.event.preventDefault();
                actionContext.event.stopPropagation();
                this.eventHub.publish('singleFacetsChanged', {
                    data: {
                        facetKey: facetFieldName,
                        facetValue: facetValue,
                        pageType: 'browse'
                    }
                });
            };
            ProductSearchController.prototype.removeSelectedFacet = function (actionContext) {
                var removeFacetButton = actionContext.elementContext;
                actionContext.event.preventDefault();
                actionContext.event.stopPropagation();
                this.eventHub.publish('facetRemoved', {
                    data: {
                        facetFieldName: removeFacetButton.data('facetfieldname'),
                        facetValue: removeFacetButton.data('facetvalue'),
                        facetType: removeFacetButton.data('facettype')
                    }
                });
            };
            ProductSearchController.prototype.clearSelectedFacets = function (actionContext) {
                actionContext.event.preventDefault();
                actionContext.event.stopPropagation();
                this.eventHub.publish('facetsCleared', null);
            };
            ProductSearchController.prototype.initializeSearchService = function () {
                this._searchService = new Composer.SearchService(this.eventHub, window);
                this._searchService.initialize({
                    facetRegistry: this.buildFacetRegistry()
                });
            };
            ProductSearchController.prototype.buildFacetRegistry = function () {
                var facetRegistry = {};
                $('[data-facettype]', this.context.container)
                    .add($('#selectedFacets [data-facetfieldname]', this.context.container))
                    .each(function (index, item) {
                    var facetType, facetFieldName, facetGroup = $(item);
                    facetFieldName = facetGroup.data('facetfieldname');
                    facetType = facetGroup.data('facettype').toLowerCase();
                    facetRegistry[facetFieldName] = facetType;
                });
                return facetRegistry;
            };
            return ProductSearchController;
        }(Orckestra.Composer.Controller));
        Composer.ProductSearchController = ProductSearchController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.Product.UI/Product/Source/TypeScript/ProductController.ts' />
///<reference path='IQuickViewController.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var QuickViewController = (function (_super) {
            __extends(QuickViewController, _super);
            function QuickViewController() {
                _super.apply(this, arguments);
                this.concern = 'productSearch';
            }
            QuickViewController.prototype.initialize = function () {
                this.setConcernWithContext();
                _super.prototype.initialize.call(this);
            };
            QuickViewController.prototype.setConcernWithContext = function () {
                var contextualConcern = this.context.container.closest('[data-concern]').data('concern');
                if (contextualConcern) {
                    this.concern = contextualConcern;
                }
            };
            QuickViewController.prototype.registerSubscriptions = function () {
                var _this = this;
                _super.prototype.registerSubscriptions.call(this);
                this.eventHub.subscribe(this.concern + 'QuickBuyLoaded', function (e) { return _this.onQuickBuyLoaded(e); });
            };
            QuickViewController.prototype.onQuickBuyLoaded = function (e) {
                var _this = this;
                this.render('ProductQuickView', e.data);
                this.productService.showQuickView();
                this.context.viewModel = JSON.parse(e.data['JsonContext'] || '{}');
                this.context.viewModel.source = e.source;
                this.setVariantId(this.context.viewModel.displayedVariantId);
                var priceDisplayBusy = this.asyncBusy({
                    msDelay: 300,
                    loadingIndicatorSelector: '.loading-indicator-pricediscount'
                });
                var addToCartBusy = this.asyncBusy({
                    msDelay: 300,
                    loadingIndicatorSelector: '.loading-indicator-inventory'
                });
                var promise = Q.all([this.calculatePrice(), this.renderData()])
                    .then(function () {
                    Composer.ErrorHandler.instance().removeErrors();
                }, function (reason) { return _this.onLoadingFailed(reason); })
                    .fin(function () {
                    priceDisplayBusy.done();
                    addToCartBusy.done();
                });
            };
            QuickViewController.prototype.onLoadingFailed = function (reason) {
                console.error('Failed loading the Product Quick View');
                Composer.ErrorHandler.instance().outputErrorFromCode('QuickViewLoadFailed');
            };
            QuickViewController.prototype.setVariantId = function (variantId) {
                var variant = (this.productService.getVariant(variantId) || {});
                this.productService.updateSelectedKvasWith(variant.Kvas, this.concern);
            };
            QuickViewController.prototype.onSelectedVariantIdChanged = function (e) {
                var _this = this;
                this.renderData()
                    .then(function () { return _this.onSelectedVariantIdChangedSuccess(); }, function (reason) { return _this.onSelectedVariantIdChangedFailed(reason); })
                    .done();
            };
            QuickViewController.prototype.onSelectedVariantIdChangedSuccess = function () {
                Composer.ErrorHandler.instance().removeErrors();
            };
            QuickViewController.prototype.onSelectedVariantIdChangedFailed = function (reason) {
                console.error('Error while changing the selected variant.', reason);
                this.renderUnavailableAddToCart();
                this.renderUnavailableQuantity(this.getCurrentQuantity());
                Composer.ErrorHandler.instance().outputErrorFromCode('SelectedVariantChangeFailed');
            };
            QuickViewController.prototype.onSelectedKvasChanged = function (e) {
                this.render('ProductQuickViewKvaItems', { KeyVariantAttributeItems: e.data });
            };
            QuickViewController.prototype.onImagesChanged = function (e) {
                if (this.isProductWithVariants() && this.isSelectedVariantUnavailable()) {
                    this.render('MainImageContent', this.getUnavailableMainImageContent(e));
                }
                else {
                    this.render('MainImageContent', e.data);
                }
            };
            QuickViewController.prototype.getUnavailableMainImageContent = function (e) {
                return {
                    DisplayName: e.data.DisplayName,
                    SelectedImage: {
                        ImageUrl: e.data.FallbackImageUrl
                    }
                };
            };
            QuickViewController.prototype.onPricesChanged = function (e) {
                if (this.isProductWithVariants() && this.isSelectedVariantUnavailable()) {
                    this.render('PriceDiscount', null);
                }
                else {
                    this.render('PriceDiscount', e.data);
                }
            };
            QuickViewController.prototype.renderUnavailableAddToCart = function () {
                var _this = this;
                return Q.fcall(function () { return _this.render('AddToCartQuickView', { IsUnavailable: true }); });
            };
            QuickViewController.prototype.renderAvailableAddToCart = function () {
                var _this = this;
                return this.inventoryService
                    .isAvailableToSell(this.context.viewModel.Sku)
                    .then(function (result) { return _this.render('AddToCartQuickView', { IsAvailableToSell: result }); });
            };
            QuickViewController.prototype.completeAddLineItem = function (quantityAdded) {
                var _this = this;
                return Q.fcall(function () { return _this.productService.closeQuickView(); });
            };
            QuickViewController.prototype.getListNameForAnalytics = function () {
                return this.context.viewModel.source;
            };
            return QuickViewController;
        }(Orckestra.Composer.ProductController));
        Composer.QuickViewController = QuickViewController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/JqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/ErrorHandling/ErrorHandler.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Repositories/CartRepository.ts' />
/// <reference path='../../../../Composer.Cart.UI/CartSummary/Source/TypeScript/CartService.ts' />
/// <reference path='../../../Product/Source/TypeScript/ProductService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var SearchResultsController = (function (_super) {
            __extends(SearchResultsController, _super);
            function SearchResultsController() {
                _super.apply(this, arguments);
                this.cartService = new Composer.CartService(new Composer.CartRepository(), this.eventHub);
                this.productService = new Composer.ProductService(this.eventHub, this.context);
            }
            SearchResultsController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.currentPage = this.getCurrentPage();
                this.eventHub.publish('searchResultRendered', {
                    data: {
                        ProductSearchResults: this.context.viewModel.ProductSearchResults,
                        ListName: this.context.viewModel.ListName,
                        PageNumber: this.currentPage.DisplayName,
                        MaxItemsPerPage: this.context.viewModel.MaxItemsPerPage
                    } });
            };
            SearchResultsController.prototype.getCurrentPage = function () {
                return _.find(this.context.viewModel.ProductSearchResults.Pagination.Pages, { IsCurrentPage: true }) || {};
            };
            SearchResultsController.prototype.addToCart = function (actionContext) {
                var _this = this;
                var productContext = $(actionContext.elementContext).closest('[data-product-id]');
                var hasVariants = productContext.data('hasVariants');
                //Do not use .data since it may parse the id as a number.
                var productId = productContext.attr('data-product-id');
                var variantId = productContext.attr('data-product-variant-id');
                var product = _.find(this.context.viewModel.ProductSearchResults.SearchResults, function (product) {
                    if (_.isEmpty(variantId)) {
                        return product.ProductId === productId;
                    }
                    else {
                        return product.ProductId === productId && product.VariantId === variantId;
                    }
                });
                var price = product.Pricing.IsOnSale ? product.Pricing.Price : product.Pricing.ListPrice;
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext, containerContext: productContext });
                if (hasVariants === 'True') {
                    this.productService.loadQuickBuyProduct(productId, variantId, 'productSearch', this.context.viewModel.ListName)
                        .then(function (data) {
                        Composer.ErrorHandler.instance().removeErrors();
                        return data;
                    }, function (reason) { return _this.onAddToCartFailed(reason); })
                        .fin(function () { return busy.done(); });
                }
                else {
                    var productData = this.getProductDataForAnalytics(productId, price);
                    this.eventHub.publish('lineItemAdding', { data: productData });
                    this.cartService.addLineItem(productId, '' + price)
                        .then(function (data) {
                        Composer.ErrorHandler.instance().removeErrors();
                        return data;
                    }, function (reason) { return _this.onAddToCartFailed(reason); })
                        .fin(function () { return busy.done(); });
                }
            };
            SearchResultsController.prototype.onAddToCartFailed = function (reason) {
                console.error('Error on adding item to cart', reason);
                Composer.ErrorHandler.instance().outputErrorFromCode('AddToCartFailed');
            };
            SearchResultsController.prototype.searchProductClick = function (actionContext) {
                var index = actionContext.elementContext.data('index');
                var productId = actionContext.elementContext.data('productid').toString();
                var product = _.find(this.context.viewModel.ProductSearchResults.SearchResults, { ProductId: productId });
                this.eventHub.publish('productClick', { data: {
                        Product: product,
                        ListName: this.context.viewModel.ListName,
                        Index: index,
                        PageNumber: this.currentPage.DisplayName,
                        MaxItemsPerPage: this.context.viewModel.MaxItemsPerPage
                    } });
            };
            SearchResultsController.prototype.pagerPageChanged = function (actionContext) {
                this.context.window.location.href = actionContext.elementContext.val();
            };
            SearchResultsController.prototype.getProductDataForAnalytics = function (productId, price) {
                var results = this.context.viewModel.ProductSearchResults.SearchResults;
                var vm = _.find(results, function (r) { return r.ProductId === productId; });
                if (!vm) {
                    throw new Error("Could not find a product with the ID '" + productId + "'.");
                }
                var data = {
                    List: this.context.viewModel.ListName,
                    ProductId: vm.ProductId,
                    DisplayName: vm.DisplayName,
                    ListPrice: price,
                    Brand: vm.Brand,
                    CategoryId: vm.CategoryId,
                    Quantity: 1
                };
                return data;
            };
            return SearchResultsController;
        }(Orckestra.Composer.Controller));
        Composer.SearchResultsController = SearchResultsController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var SearchSummaryController = (function (_super) {
            __extends(SearchSummaryController, _super);
            function SearchSummaryController() {
                _super.apply(this, arguments);
            }
            SearchSummaryController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                var productSearchResults = this.context.viewModel.ProductSearchResults;
                if (productSearchResults.TotalCount === 0 && productSearchResults.Keywords) {
                    this.eventHub.publish('noResultsFound', {
                        data: {
                            Keyword: productSearchResults.Keywords,
                            ListName: this.context.viewModel.ListName,
                        } });
                }
                if (!_.isEmpty(productSearchResults.CorrectedSearchTerms)
                    && productSearchResults.Keywords
                    && productSearchResults.TotalCount !== 0) {
                    this.eventHub.publish('searchTermCorrected', {
                        data: {
                            ProductSearchResults: productSearchResults,
                            KeywordEntered: productSearchResults.Keywords,
                            KeywordCorrected: productSearchResults.CorrectedSearchTerms,
                            ListName: this.context.viewModel.ListName,
                        } });
                }
            };
            return SearchSummaryController;
        }(Orckestra.Composer.Controller));
        Composer.SearchSummaryController = SearchSummaryController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/JqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
/// <reference path='./Services/SearchService.ts' />
/// <reference path='./Services/ISearchService.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='./UrlHelper.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var SelectedFacetSearchController = (function (_super) {
            __extends(SelectedFacetSearchController, _super);
            function SelectedFacetSearchController() {
                _super.apply(this, arguments);
            }
            SelectedFacetSearchController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
            };
            SelectedFacetSearchController.prototype.removeSelectedFacet = function (actionContext) {
                var removeFacetButton = actionContext.elementContext;
                actionContext.event.preventDefault();
                actionContext.event.stopPropagation();
                this.eventHub.publish('facetRemoved', {
                    data: {
                        facetFieldName: removeFacetButton.data('facetfieldname'),
                        facetValue: removeFacetButton.data('facetvalue'),
                        facetType: removeFacetButton.data('facettype'),
                        facetLandingPageUrl: removeFacetButton.data('facetlandingpageurl')
                    }
                });
            };
            SelectedFacetSearchController.prototype.clearSelectedFacets = function (actionContext) {
                var clearFacetsButton = actionContext.elementContext;
                actionContext.event.preventDefault();
                actionContext.event.stopPropagation();
                this.eventHub.publish('facetsCleared', {
                    data: { landingPageUrl: clearFacetsButton.data('landingpageurl') }
                });
            };
            SelectedFacetSearchController.prototype.addSingleSelectCategory = function (actionContext) {
                var singleSelectCategory = actionContext.elementContext, anchorContext = actionContext.elementContext, facetFieldName = anchorContext.data('facetfieldname'), facetValue = anchorContext.data('facetvalue');
                actionContext.event.preventDefault();
                actionContext.event.stopPropagation();
                this.eventHub.publish('singleCategoryAdded', {
                    data: {
                        categoryUrl: singleSelectCategory.data('categoryurl'),
                        facetKey: facetFieldName,
                        facetValue: facetValue,
                        pageType: Composer.UrlHelper.resolvePageType()
                    }
                });
            };
            return SelectedFacetSearchController;
        }(Orckestra.Composer.Controller));
        Composer.SelectedFacetSearchController = SelectedFacetSearchController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/JqueryPlugins/ISerializeObjectJqueryPlugin.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerContext.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
/// <reference path='./UrlHelper.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var SortBySearchController = (function (_super) {
            __extends(SortBySearchController, _super);
            function SortBySearchController() {
                _super.apply(this, arguments);
            }
            SortBySearchController.prototype.sortingChanged = function (actionContext) {
                var anchorContext = actionContext.elementContext, dataSortingType = anchorContext.data('sorting'), dataUrl = anchorContext.data('url'), resolvePageType = Composer.UrlHelper.resolvePageType();
                actionContext.event.preventDefault();
                actionContext.event.stopPropagation();
                this.eventHub.publish('sortingChanged', {
                    data: {
                        sortingType: dataSortingType,
                        pageType: resolvePageType,
                        url: dataUrl
                    }
                });
            };
            return SortBySearchController;
        }(Orckestra.Composer.Controller));
        Composer.SortBySearchController = SortBySearchController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var ProductSpecificationsService = (function () {
            function ProductSpecificationsService() {
            }
            ProductSpecificationsService.prototype.getProductSpecifications = function (productId, variantId) {
                if (!productId) {
                    throw new Error('The product id is required');
                }
                if (!this.memoizeProductSpecifications) {
                    this.memoizeProductSpecifications =
                        _.memoize(this.getProductSpecificationsImpl, function (productId, variantId) { return variantId; });
                }
                return this.memoizeProductSpecifications(productId, variantId);
            };
            ProductSpecificationsService.prototype.getProductSpecificationsImpl = function (productId, variantId) {
                var data = { productId: productId, variantId: variantId };
                return Composer.ComposerClient.post('/api/product/specifications', data);
            };
            return ProductSpecificationsService;
        }());
        Composer.ProductSpecificationsService = ProductSpecificationsService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/IEventInformation.ts' />
///<reference path='ProductSpecificationsService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ProductSpecificationsController = (function (_super) {
            __extends(ProductSpecificationsController, _super);
            function ProductSpecificationsController() {
                _super.apply(this, arguments);
                this.service = new Composer.ProductSpecificationsService();
            }
            ProductSpecificationsController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
                this.renderData(this.context.viewModel.variantId);
            };
            ProductSpecificationsController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('productDetailSelectedVariantIdChanged', function (e) { return _this.renderData(e.data.selectedVariantId); });
            };
            ProductSpecificationsController.prototype.renderData = function (variantId) {
                var _this = this;
                var handle = setTimeout(function () { return _this.render('Attributes', { IsLoading: true }); }, 300);
                this.getProductSpecifications(variantId)
                    .done(function (result) {
                    clearTimeout(handle);
                    _this.render('Attributes', result);
                    _this.eventHub.publish('productSpecificationsChanged', result);
                }, function (reason) { return _this.handleError(reason); });
            };
            ProductSpecificationsController.prototype.getProductSpecifications = function (variantId) {
                var productId = this.context.viewModel.productId;
                return this.service.getProductSpecifications(productId, variantId);
            };
            ProductSpecificationsController.prototype.handleError = function (reason) {
                console.error('The selected variant changed, ' +
                    'but we were unable to get the product specifications associated with that variant', reason);
            };
            return ProductSpecificationsController;
        }(Orckestra.Composer.Controller));
        Composer.ProductSpecificationsController = ProductSpecificationsController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));



/// <reference path='../../Typings/tsd.d.ts' />
/// <reference path='./IPlugin.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Events/EventHub.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var SlickCarouselPlugin = (function () {
            function SlickCarouselPlugin() {
            }
            SlickCarouselPlugin.prototype.initialize = function (window, document) {
                this.subscriptEvents();
                this.initSlick();
            };
            ;
            SlickCarouselPlugin.prototype.initSlick = function () {
                $.each($('.js-slick-carousel'), function (index, element) {
                    var slickInstance = $(element);
                    var slickOptions = {
                        arrows: true,
                        responsive: [{
                                dots: false,
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    infinite: true
                                }
                            }]
                    };
                    if (!$(slickInstance).hasClass('slick-initialized')) {
                        if (slickInstance.data('slick').mobileCarousel) {
                            var nbSlideToShow = slickInstance.data('slick').mobileSlidesToShow;
                            nbSlideToShow = (nbSlideToShow) ? nbSlideToShow : 2;
                            var nbSlideToScroll = slickInstance.data('slick').mobileSlidesToScroll;
                            nbSlideToScroll = (nbSlideToScroll) ? nbSlideToScroll : 2;
                            slickOptions.responsive.push({
                                breakpoint: 768,
                                arrows: false,
                                settings: {
                                    slidesToShow: nbSlideToShow,
                                    slidesToScroll: nbSlideToScroll,
                                    dots: true,
                                    infinite: true
                                }
                            });
                        }
                        else {
                            slickOptions.responsive.push({
                                breakpoint: 768,
                                arrows: false,
                                settings: 'unslick' // destroys slick
                            });
                        }
                        slickInstance.slick(slickOptions);
                    }
                });
            };
            ;
            SlickCarouselPlugin.prototype.subscriptEvents = function () {
                var _this = this;
                var self = this;
                $(window).on('resize', function () {
                    if ($(window).width() > 768) {
                        _this.initSlick();
                    }
                });
                Composer.EventHub.instance().subscribe('iniCarousel', function (data) {
                    _this.initSlick();
                });
            };
            return SlickCarouselPlugin;
        }());
        Composer.SlickCarouselPlugin = SlickCarouselPlugin;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path='../../../../Composer.Product.UI/Product/Source/TypeScript/ProductController.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Plugins/SlickCarouselPlugin.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var RelatedProductController = (function (_super) {
            __extends(RelatedProductController, _super);
            function RelatedProductController() {
                _super.apply(this, arguments);
                this.concern = 'relatedProduct';
                this.source = 'Related Products';
            }
            RelatedProductController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.getRelatedProducts();
            };
            RelatedProductController.prototype.getRelatedProducts = function () {
                var _this = this;
                var vm = this.context.viewModel;
                var identifiers = vm.ProductIdentifiers;
                this.productService.getRelatedProducts(identifiers)
                    .then(function (data) {
                    _this.products = data.Products;
                    //Need to map parent items to child item since handlebar doesnt seem to support
                    //partial parameters or path properly while it suppose to. Maybe an update of handlebar could solve the issue
                    //(3.01 right now).
                    vm.Products = _.each(data.Products, function (lineItem) {
                        lineItem.DisplayAddToCart = vm.DisplayAddToCart;
                        lineItem.DisplayPrices = vm.DisplayPrices;
                    });
                    _this.render('RelatedProducts', vm);
                    _this.eventHub.publish('iniCarousel', vm);
                    return vm;
                })
                    .then(function (vm) {
                    if (vm && vm.Products && vm.Products.length > 0) {
                        _this.eventHub.publish('relatedProductsLoaded', {
                            data: {
                                ListName: _this.getPageSource(),
                                Products: vm.Products
                            }
                        });
                    }
                })
                    .then(function (vm) { return _this.onGetRelatedProductsSuccess(vm); }, function (reason) { return _this.onGetRelatedProductsFailed(reason); });
            };
            RelatedProductController.prototype.onGetRelatedProductsSuccess = function (vm) {
                //Hook for other projects
            };
            RelatedProductController.prototype.onGetRelatedProductsFailed = function (reason) {
                console.error('Failed loading the related products', reason);
            };
            RelatedProductController.prototype.getPageSource = function () {
                return 'Related Products';
            };
            RelatedProductController.prototype.getListNameForAnalytics = function () {
                return 'Related Products';
            };
            RelatedProductController.prototype.onLoadingFailed = function (reason) {
                console.error('Failed loading the Related Product View');
                Composer.ErrorHandler.instance().outputErrorFromCode('RelatedProductLoadFailed');
            };
            RelatedProductController.prototype.addToCart = function (actionContext) {
                var productContext = $(actionContext.elementContext).closest('[data-product-id]');
                var hasVariants = productContext.data('hasVariants');
                var productId = productContext.attr('data-product-id');
                var variantId = productContext.attr('data-product-variant-id');
                var price = productContext.data('price');
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext, containerContext: productContext });
                var promise;
                if (hasVariants) {
                    promise = this.addVariantProductToCart(productId, variantId, price);
                }
                else {
                    promise = this.addNonVariantProductToCart(productId, price);
                }
                promise.fin(function () { return busy.done(); });
            };
            /**
             * Occurs when adding a product to the cart that happens to have variants.
             */
            RelatedProductController.prototype.addVariantProductToCart = function (productId, variantId, price) {
                var _this = this;
                var promise = this.productService.loadQuickBuyProduct(productId, variantId, this.concern, this.source);
                promise.fail(function (reason) { return _this.onLoadingFailed(reason); });
                return promise;
            };
            /**
             * Occurs when adding a product to the cart that has no variant.
             */
            RelatedProductController.prototype.addNonVariantProductToCart = function (productId, price) {
                var _this = this;
                var vm = this.getProductViewModel(productId);
                if (vm) {
                    var quantity = this.getCurrentQuantity();
                    var data = this.getProductDataForAnalytics(vm);
                    data.Quantity = quantity.Value ? quantity.Value : 1;
                    this.eventHub.publish('lineItemAdding', {
                        data: data
                    });
                }
                var promise = this.cartService.addLineItem(productId, price)
                    .then(function (vm) { return _this.onAddLineItemSuccess(vm); }, function (reason) { return _this.onAddLineItemFailed(reason); });
                return promise;
            };
            RelatedProductController.prototype.getProductViewModel = function (productId) {
                var productVM = _.find(this.products, function (p) {
                    return p.ProductId === productId;
                });
                if (!productVM) {
                    console.warn("Could not find the product with ID of " + productId + " within related products.\n                    This will cause the product to not be reported to Analytics.");
                }
                return productVM;
            };
            RelatedProductController.prototype.getCurrentQuantity = function () {
                return {
                    Min: 1,
                    Max: 1,
                    Value: 1
                };
            };
            RelatedProductController.prototype.relatedProductsClick = function (actionContext) {
                var index = actionContext.elementContext.data('index');
                var productId = actionContext.elementContext.data('productid').toString();
                var product = _.find(this.products, { ProductId: productId });
                this.eventHub.publish('productClick', { data: {
                        Product: product,
                        ListName: 'Related Products',
                        Index: index
                    } });
            };
            return RelatedProductController;
        }(Orckestra.Composer.ProductController));
        Composer.RelatedProductController = RelatedProductController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var GeoLocationService = (function () {
            function GeoLocationService() {
                this._browserGeolocation = navigator.geolocation;
                this._geocoder = new google.maps.Geocoder();
            }
            GeoLocationService.prototype.geolocate = function () {
                var _this = this;
                if (this._browserGeolocation) {
                    return this.getCurrentLocation()
                        .catch(function (reason) {
                        console.log(reason);
                        return _this._currenctLocation;
                    });
                }
                return null;
            };
            GeoLocationService.prototype.getCurrentLocation = function () {
                var _this = this;
                var deferred = Q.defer();
                this._browserGeolocation.getCurrentPosition(function (pos) {
                    _this._currenctLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                    deferred.resolve(_this._currenctLocation);
                }, function () { deferred.reject('problems to get current location'); });
                return deferred.promise;
            };
            GeoLocationService.prototype.getAddtressByLocation = function (location) {
                var deferred = Q.defer();
                this._geocoder.geocode({ location: location }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        deferred.resolve(results[0].formatted_address);
                    }
                    else {
                        deferred.resolve('');
                    }
                });
                return deferred.promise;
            };
            GeoLocationService.prototype.getLocationByAddress = function (address) {
                var deferred = Q.defer();
                this._geocoder.geocode({ address: address }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        var location = results[0].geometry.location;
                        deferred.resolve(location);
                    }
                    else {
                        deferred.resolve(null);
                        console.log('Location not resolved by Google ' + address);
                    }
                });
                return deferred.promise;
            };
            /// By default render with default value for ViewModel.GoogleDirectionsLink (direction with Empty Start Point), 
            /// and when User Accept his Current Location, just in async task update HREF attributes and attach current location coordinates.
            /// We do not update the ViewModel before rendering, as we need to wait for User Input
            GeoLocationService.prototype.updateDirectionLinksWithLatLngSourceAddress = function (container, sourceLocation) {
                var _this = this;
                if (!sourceLocation) {
                    return;
                }
                var ctaDirs = container.find('.ctaGoogleDir');
                ctaDirs.each(function (ind, ctaDir) {
                    var href = $(ctaDir).attr('href');
                    if (href.indexOf('saddr') === -1) {
                        $(ctaDir).attr('href', _this.getDirectionLatLngSourceAddress(href, sourceLocation));
                    }
                });
            };
            GeoLocationService.prototype.getDirectionLatLngSourceAddress = function (baseUrl, sourceLocation) {
                return baseUrl + "&saddr=" + sourceLocation.lat() + "," + sourceLocation.lng();
            };
            return GeoLocationService;
        }());
        Composer.GeoLocationService = GeoLocationService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='../../../StoreLocator/Source/TypeScript/Services/GeoLocationService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var StoresDirectoryController = (function (_super) {
            __extends(StoresDirectoryController, _super);
            function StoresDirectoryController() {
                _super.apply(this, arguments);
                this._geoService = new Composer.GeoLocationService();
            }
            StoresDirectoryController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.initializeSearchBox();
                this.setGoogleDirectionLinks();
            };
            StoresDirectoryController.prototype.initializeSearchBox = function () {
                var input = this.context.container.find('#storeDirectorySearchInput')[0];
                this._searchBox = new google.maps.places.SearchBox(input);
            };
            // Action on Click on locator icon in search box
            StoresDirectoryController.prototype.currentLocationAction = function (actionContext) {
                actionContext.event.preventDefault();
                this.context.container.find('form').submit();
            };
            StoresDirectoryController.prototype.setGoogleDirectionLinks = function () {
                var _this = this;
                return this._geoService.geolocate().then(function (location) {
                    _this._geoService.updateDirectionLinksWithLatLngSourceAddress(_this.context.container, location);
                });
            };
            return StoresDirectoryController;
        }(Composer.Controller));
        Composer.StoresDirectoryController = StoresDirectoryController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var GetStoresInventoryParam = (function () {
            function GetStoresInventoryParam() {
            }
            return GetStoresInventoryParam;
        }());
        Composer.GetStoresInventoryParam = GetStoresInventoryParam;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='./GetStoresInventoryParam.ts' />

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Mvc/IControllerContext.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
///<reference path='./IStoreInventoryService.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var StoreInventoryService = (function () {
            function StoreInventoryService() {
            }
            StoreInventoryService.prototype.getStoresInventory = function (param) {
                return Composer.ComposerClient.post('/api/storeinventory/storesinventory', param);
            };
            StoreInventoryService.prototype.getDefaultAddress = function () {
                return Composer.ComposerClient.get('/api/customer/getdefaultaddress');
            };
            StoreInventoryService.prototype.getSkuSelection = function (productId) {
                var data = {
                    ProductId: productId
                };
                return Composer.ComposerClient.post('/api/product/variantSelection', data);
            };
            return StoreInventoryService;
        }());
        Composer.StoreInventoryService = StoreInventoryService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='./Services/StoreInventoryService.ts' />
///<reference path='../../../StoreLocator/Source/TypeScript/Services/GeoLocationService.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Cache/CacheProvider.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var StoreInventoryController = (function (_super) {
            __extends(StoreInventoryController, _super);
            function StoreInventoryController() {
                _super.apply(this, arguments);
                this._concern = 'StoreInventory_';
                this._service = new Composer.StoreInventoryService();
                this._geoService = new Composer.GeoLocationService();
                this._searchPointAddressCacheKey = 'StoreLocatorSearchAddress';
                this.cache = Composer.CacheProvider.instance().defaultCache;
                this._getCurrentLocation = Q.defer();
            }
            StoreInventoryController.prototype.getCurrentLocation = function () {
                return this._getCurrentLocation.promise;
            };
            StoreInventoryController.prototype.initialize = function () {
                var _this = this;
                var getDefaultsTasks = [];
                var getDefaultAddressTask;
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
                this.initSearchBox();
                this.getDataFromContextViewModel();
                if (!this._selectedSku && this._productId) {
                    getDefaultsTasks.push(this._service.getSkuSelection(this._productId).then(function (result) {
                        _this._selectedSku = result.Sku;
                    }));
                }
                getDefaultsTasks.push(this.getDefaultAddress());
                Q.all(getDefaultsTasks).then(function () {
                    _this.getStoresInventory();
                }).fail(function (reason) { return console.log(_this._concern + reason); });
                this._geoService.geolocate().then(function (location) {
                    _this._getCurrentLocation.resolve(location);
                }, function (reason) { return _this._getCurrentLocation.resolve(null); });
            };
            StoreInventoryController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('productDetailSelectedVariantIdChanged', function (e) { return _this.onSelectedVariantIdChanged(e); });
                this.eventHub.subscribe('inventorySearchPointChanged', function (e) { return _this.searchPointChanged(e); });
                this.context.window.addEventListener('hashchange', function () { return _this.onHashChanged(); });
            };
            StoreInventoryController.prototype.getDataFromContextViewModel = function () {
                this._selectedSku = this.context.viewModel.selectedSku;
                this._isAuthenticated = this.context.viewModel.isAuthenticated;
                this._pageSize = this.context.viewModel.pageSize;
                this._productId = this.context.viewModel.productId;
            };
            StoreInventoryController.prototype.initSearchBox = function () {
                var _this = this;
                this._searchBoxJQ = this.context.container.find('input[name="storeInventorySearchInput"]');
                this._searchBox = new google.maps.places.SearchBox(this._searchBoxJQ[0]);
                this._searchBox.addListener('places_changed', function () {
                    var places = _this._searchBox.getPlaces();
                    if (places && places.length && places[0].geometry) {
                        _this.eventHub.publish('inventorySearchPointChanged', { data: places[0].geometry.location });
                    }
                });
            };
            StoreInventoryController.prototype.searchPointChanged = function (e) {
                this._searchPoint = e.data;
                this.cache.set(this._searchPointAddressCacheKey, this._searchBoxJQ.val());
                this.getStoresInventory();
            };
            StoreInventoryController.prototype.onSelectedVariantIdChanged = function (e) {
                this._selectedSku = e.data.selectedSku;
                this.getStoresInventory();
            };
            StoreInventoryController.prototype.onHashChanged = function () {
                var _this = this;
                if (location.hash === '#storeinventory' && !this._searchPoint) {
                    this.getCurrentLocation()
                        .then(function (currentLocation) {
                        if (currentLocation) {
                            _this._searchPoint = currentLocation;
                            _this.getStoresInventory();
                            _this._geoService.getAddtressByLocation(currentLocation).then(function (result) {
                                _this.cache.set(_this._searchPointAddressCacheKey, result);
                                _this._searchBoxJQ.val(result);
                            });
                        }
                    });
                }
            };
            StoreInventoryController.prototype.getStoresInventory = function () {
                var _this = this;
                var debounceHandle;
                if (this._selectedSku) {
                    debounceHandle = _.debounce(function () { return _this.render('StoreInventoryList', { IsLoading: true }); }, 300);
                    return this._service.getStoresInventory(this.getStoresInventoryParam())
                        .then(function (result) {
                        debounceHandle.cancel();
                        _this.render('StoreInventoryList', result);
                        _this.setGoogleDirectionLinks();
                    })
                        .fail(function (reason) { return console.log(reason); });
                }
            };
            StoreInventoryController.prototype.nextPage = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                var page = actionContext.elementContext.data('page');
                var busy = this.asyncBusy({ elementContext: actionContext.elementContext });
                this._service.getStoresInventory(this.getStoresInventoryParam(page))
                    .then(function (result) {
                    var target = actionContext.elementContext[0].parentElement;
                    var targetHtml = _this.getRenderedTemplateContents('StoreInventoryList', result);
                    busy.done();
                    $(target).replaceWith(targetHtml).stop().fadeIn();
                    _this.setGoogleDirectionLinks();
                })
                    .fail(function (reason) { return console.log(reason); });
            };
            StoreInventoryController.prototype.setGoogleDirectionLinks = function () {
                var _this = this;
                return this.getCurrentLocation().then(function (location) {
                    _this._geoService.updateDirectionLinksWithLatLngSourceAddress(_this.context.container, location);
                });
            };
            StoreInventoryController.prototype.getStoresInventoryParam = function (page) {
                if (page === void 0) { page = 1; }
                var param = new Composer.GetStoresInventoryParam();
                param.Sku = this._selectedSku;
                param.SearchPoint = this._searchPoint;
                param.Page = page;
                param.Pagesize = this._pageSize;
                return param;
            };
            StoreInventoryController.prototype.getDefaultAddress = function () {
                var _this = this;
                // try get address from local storage
                return this.cache.get(this._searchPointAddressCacheKey)
                    .then(function (cachedAddr) {
                    _this._searchBoxJQ.val(cachedAddr);
                    return _this._geoService.getLocationByAddress(cachedAddr);
                }, function (reason) {
                    // try get customer default delivery address
                    if (_this._isAuthenticated) {
                        return _this._service.getDefaultAddress()
                            .then(function (defaultAddr) {
                            var formattedAddress = defaultAddr.City + ", " + defaultAddr.RegionCode + " " + defaultAddr.PostalCode + ", " + defaultAddr.CountryCode;
                            _this._searchBoxJQ.val(formattedAddress);
                            return _this._geoService.getLocationByAddress(formattedAddress);
                        });
                    }
                })
                    .then(function (locationByAddress) {
                    _this._searchPoint = locationByAddress;
                });
            };
            return StoreInventoryController;
        }(Composer.Controller));
        Composer.StoreInventoryController = StoreInventoryController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));



///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/Typings/googlemaps/google.maps.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var Marker = (function () {
            function Marker(marker) {
                this._value = marker;
            }
            Object.defineProperty(Marker.prototype, "key", {
                get: function () {
                    return this._key;
                },
                set: function (key) {
                    this._key = key;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Marker.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (marker) {
                    this._value = marker;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Marker.prototype, "storeNumber", {
                get: function () {
                    return this._storeNumber;
                },
                set: function (value) {
                    this._storeNumber = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Marker.prototype, "isCluster", {
                get: function () {
                    return this._isCluster;
                },
                set: function (value) {
                    this._isCluster = value;
                },
                enumerable: true,
                configurable: true
            });
            Marker.prototype.setMap = function (map) {
                this._value.setMap(map);
            };
            Marker.prototype.setPosition = function (position) {
                this._value.setPosition(position);
            };
            return Marker;
        }());
        Composer.Marker = Marker;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='./Marker.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var MarkerPool = (function () {
            function MarkerPool(map, onMarkerCreate) {
                this.markers = [];
                this.indexedMarkersByKey = {};
                this._map = map;
                this._onMarkerCreate = onMarkerCreate;
            }
            MarkerPool.prototype.getMarkers = function () {
                return this.markers;
            };
            MarkerPool.prototype.get = function (isCluster) {
                if (isCluster === void 0) { isCluster = false; }
                var marker = isCluster ? this.createClusterMarker() : this.createMarker();
                marker.isCluster = isCluster;
                this._onMarkerCreate(marker);
                this.markers.push(marker);
                return marker;
            };
            MarkerPool.prototype.getExisting = function (key) {
                return this.indexedMarkersByKey[key];
            };
            MarkerPool.prototype.index = function (marker) {
                this.indexedMarkersByKey[marker.key] = marker;
            };
            MarkerPool.prototype.hasClusters = function () {
                for (var i = 0; i < this.markers.length; i++) {
                    if (this.markers[i] && this.markers[i].isCluster) {
                        return true;
                    }
                }
                return false;
            };
            MarkerPool.prototype.createMarker = function () {
                var marker = new MarkerWithLabel({
                    map: this._map,
                    labelInBackground: false,
                    labelClass: 'store-marker',
                    icon: '/UI.Package/Images/map/marker.png',
                    labelAnchor: new google.maps.Point(12, 42),
                    labelVisible: false
                });
                return new Composer.Marker(marker);
            };
            MarkerPool.prototype.createClusterMarker = function () {
                var marker = new MarkerWithLabel({
                    map: this._map,
                    labelInBackground: false,
                    labelClass: 'store-cluster-marker',
                    icon: '/UI.Package/Images/map/cluster.png',
                    labelAnchor: new google.maps.Point(12, 30),
                    labelVisible: false
                });
                return new Composer.Marker(marker);
            };
            MarkerPool.prototype.releaseAll = function () {
                for (var i = 0; i < this.markers.length; i++) {
                    if (this.markers[i]) {
                        this.markers[i].setMap(null);
                    }
                }
                delete this.markers;
                this.markers = [];
                this.indexedMarkersByKey = {};
            };
            MarkerPool.prototype.releaseByIndex = function (index) {
                var marker = this.indexedMarkersByKey[index];
                if (marker) {
                    delete this.indexedMarkersByKey[index];
                    marker.setMap(null);
                    delete this.markers[this.markers.indexOf(marker)];
                }
            };
            MarkerPool.prototype.releaseClusters = function () {
                var _this = this;
                this.markers.forEach(function (mr) {
                    if (mr.isCluster) {
                        _this.releaseByIndex(mr.key);
                    }
                });
            };
            MarkerPool.prototype.releaseMarkersByIds = function (iscluster, id) {
                var _this = this;
                if (!iscluster) {
                    this.markers.forEach(function (mr) {
                        if (mr && mr.isCluster && mr.storeNumber.indexOf(id) >= 0) {
                            _this.releaseByIndex(mr.key);
                            return;
                        }
                    });
                }
                else {
                    this.markers.forEach(function (mr) {
                        if (mr && !mr.isCluster && id.indexOf(mr.storeNumber) >= 0) {
                            _this.releaseByIndex(mr.key);
                            return;
                        }
                    });
                }
            };
            return MarkerPool;
        }());
        Composer.MarkerPool = MarkerPool;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Generics/Collections/IHashtable.ts' />
///<reference path='IMapOptions.ts' />
///<reference path='./MarkerPool.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var MapService = (function () {
            function MapService(eventHub) {
                this._mapInitialized = Q.defer();
                this._mapIdle = Q.defer();
                this._mapDragEnded = Q.defer();
                this.eventHub = eventHub;
            }
            MapService.prototype.initialize = function (mapOptions) {
                var _this = this;
                this._map = new google.maps.Map(mapOptions.mapCanvas, mapOptions.options);
                this._informationWindow = new google.maps.InfoWindow({ maxWidth: mapOptions.infoWindowMaxWidth });
                this._markerPool = new Composer.MarkerPool(this._map, function (marker) { _this.onNewMarkerCreated(marker); });
                this.setProjectionOverlay();
                google.maps.event.addListener(this._map, 'click', function () { return _this._informationWindow.close(); });
                google.maps.event.addListener(this._map, 'zoom_changed', function () { return _this._markerPool.releaseClusters(); });
                google.maps.event.addListener(this._map, 'bounds_changed', function () {
                    _this.mapDragEnded()
                        .then(function () {
                        _this.eventHub.publish('mapBoundsUpdated', { data: _this._map.getBounds() });
                    });
                });
                google.maps.event.addListener(this._map, 'idle', function () {
                    _this._mapIdle.resolve(_this);
                });
                google.maps.event.addListener(this._map, 'dragstart', function () {
                    _this._mapDragEnded = Q.defer();
                });
                google.maps.event.addListener(this._map, 'dragend', function () {
                    _this._mapDragEnded.resolve(_this);
                });
                this._mapInitialized.resolve(this);
                this._mapDragEnded.resolve(this);
            };
            MapService.prototype.setProjectionOverlay = function () {
                this._projectionOverlay = new google.maps.OverlayView();
                this._projectionOverlay.draw = function name() {
                    //
                };
                this._projectionOverlay.setMap(this._map);
            };
            MapService.prototype.getMap = function () {
                return this._map;
            };
            MapService.prototype.getInformationWindow = function () {
                return this._informationWindow;
            };
            MapService.prototype.getBounds = function (markerPadding) {
                var bounds = this._map.getBounds();
                if (markerPadding) {
                    var tr = new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
                    var bl = new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
                    var projection = this._projectionOverlay.getProjection();
                    if (projection) {
                        var trPix = projection.fromLatLngToDivPixel(tr);
                        var blPix = projection.fromLatLngToDivPixel(bl);
                        blPix.y = blPix.y + markerPadding;
                        trPix.y = trPix.y + markerPadding;
                        var sw = projection.fromDivPixelToLatLng(blPix);
                        var ne = projection.fromDivPixelToLatLng(trPix);
                        return new google.maps.LatLngBounds(sw, ne);
                    }
                }
                return bounds;
            };
            MapService.prototype.getZoom = function () {
                return this._map.getZoom();
            };
            MapService.prototype.onNewMarkerCreated = function (marker) {
                var _this = this;
                if (!marker) {
                    return;
                }
                if (marker.isCluster) {
                    google.maps.event.addListener(marker.value, 'click', function () {
                        _this.eventHub.publish('clusterClick', { data: marker });
                    });
                }
                else {
                    google.maps.event.addListener(marker.value, 'click', function () {
                        _this.eventHub.publish('markerClick', { data: marker });
                    });
                }
            };
            MapService.prototype.mapInitialized = function () {
                return this._mapInitialized.promise;
            };
            MapService.prototype.mapIdle = function () {
                return this._mapIdle.promise;
            };
            MapService.prototype.mapDragEnded = function () {
                return this._mapDragEnded.promise;
            };
            MapService.prototype.centerMap = function (storeBounds) {
                var _this = this;
                if (storeBounds != null) {
                    this.mapIdle().then(function () {
                        var southWest = new google.maps.LatLng(storeBounds.SouthWest.Lat, storeBounds.SouthWest.Lng);
                        var northEast = new google.maps.LatLng(storeBounds.NorthEast.Lat, storeBounds.NorthEast.Lng);
                        var bounds = new google.maps.LatLngBounds(southWest, northEast);
                        _this._map.fitBounds(bounds);
                        _this._mapIdle = Q.defer();
                    });
                }
            };
            MapService.prototype.openInformationWindow = function (content, anchor) {
                this._informationWindow.setContent(content);
                this._informationWindow.open(this._map, anchor);
            };
            MapService.prototype.setLocationInMap = function (point, zoomLevel) {
                var _this = this;
                if (zoomLevel === void 0) { zoomLevel = 11; }
                this.mapIdle().then(function () {
                    _this._map.setCenter(point);
                    _this._map.setZoom(zoomLevel);
                    _this._mapIdle = Q.defer();
                });
            };
            MapService.prototype.extendBounds = function (point1, point2) {
                var _this = this;
                this.mapIdle().then(function () {
                    var bounds = new google.maps.LatLngBounds();
                    bounds.extend(point1);
                    bounds.extend(point2);
                    _this._map.fitBounds(bounds);
                    _this._map.setCenter(bounds.getCenter());
                    _this._mapIdle = Q.defer();
                });
            };
            MapService.prototype.createMarkerOnMap = function (location, title) {
                return new google.maps.Marker({
                    position: location,
                    map: this._map,
                    title: title,
                    icon: 'https://maps.google.com/mapfiles/marker_orange.png'
                });
            };
            MapService.prototype.setMarkers = function (markerInfos, isSearch) {
                if (isSearch === void 0) { isSearch = false; }
                var curZoom = this.getZoom();
                var action = this._prevZoom === curZoom ? 'PAN' : this._prevZoom < curZoom ? 'ZOOM_IN' : 'ZOOM_OUT';
                if (!this._markerPool.hasClusters() && action === 'ZOOM_IN') {
                    this._markerPool.releaseAll();
                }
                if (isSearch) {
                    this._markerPool.releaseAll();
                }
                this._prevZoom = curZoom;
                this.transformResult(markerInfos, this._markerPool, action)
                    .then(function (newMarkers) {
                    newMarkers.forEach(function (m) {
                        m.value.labelVisible = true;
                    });
                });
            };
            MapService.prototype.transformResult = function (result, markerPool, action) {
                var deferred = Q.defer();
                var markers = [];
                function buildMarker(m) {
                    var key = m.Center.Lat + '-' + m.Center.Lng;
                    var marker = null;
                    var isCluster = m.ItemsCount > 1;
                    markerPool.releaseMarkersByIds(isCluster, m.StoreNumber);
                    marker = markerPool.getExisting(key);
                    if (!marker) {
                        marker = markerPool.get(isCluster);
                        var position = new google.maps.LatLng(m.Center.Lat, m.Center.Lng);
                        marker.value.setPosition(position);
                        marker.value.labelContent = (!isCluster ? m.SearchIndex : m.ItemsCount);
                        marker.key = key;
                        marker.storeNumber = m.StoreNumber;
                        marker.isCluster = isCluster;
                        markerPool.index(marker);
                        markers.push(marker);
                    }
                    marker.value.labelContent = (!isCluster ? m.SearchIndex : m.ItemsCount); //update search index;
                }
                for (var i = 0; i < result.length; i++) {
                    var ma = result[i];
                    buildMarker(ma);
                }
                deferred.resolve(markers);
                return deferred.promise;
            };
            return MapService;
        }());
        Composer.MapService = MapService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='./Services/GeoLocationService.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var StoreDetailsController = (function (_super) {
            __extends(StoreDetailsController, _super);
            function StoreDetailsController() {
                _super.apply(this, arguments);
                this._geoService = new Composer.GeoLocationService();
            }
            StoreDetailsController.prototype.initialize = function () {
                var _this = this;
                _super.prototype.initialize.call(this);
                var center = new google.maps.LatLng(this.context.viewModel.latitude, this.context.viewModel.longitude);
                var mapOptions = {
                    center: center,
                    zoom: this.context.viewModel.zoom ? this.context.viewModel.zoom : 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    panControl: false,
                    keyboardShortcuts: false,
                    scaleControl: false,
                    scrollwheel: false,
                    zoomControl: false,
                    draggable: false,
                    streetViewControl: false,
                    overviewMapControl: false,
                    overviewMapControlOptions: { opened: false },
                    disableDefaultUI: true
                };
                this._map = new google.maps.Map(this.context.container.find("#map")[0], mapOptions);
                this._marker = new google.maps.Marker({
                    position: center,
                    map: this._map,
                    icon: '/UI.Package/Images/map/marker-default.png'
                });
                this.context.window.addEventListener('resize', function () { return _this._map.setCenter(_this._marker.getPosition()); });
                this.setGoogleDirectionLink();
            };
            StoreDetailsController.prototype.setGoogleDirectionLink = function () {
                var _this = this;
                this._geoService.geolocate().then(function (location) {
                    _this._geoService.updateDirectionLinksWithLatLngSourceAddress(_this.context.container, location);
                });
            };
            return StoreDetailsController;
        }(Composer.Controller));
        Composer.StoreDetailsController = StoreDetailsController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />

var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var StoreLocatorEndPointUrls = (function () {
            function StoreLocatorEndPointUrls() {
            }
            StoreLocatorEndPointUrls.GetStoresEndPointUrl = '/api/storelocator/stores';
            StoreLocatorEndPointUrls.GetStoreEndPointUrl = '/api/storelocator/store';
            StoreLocatorEndPointUrls.GetMapConfigurationEndPointUrl = '/api/storelocator/mapconfiguration';
            StoreLocatorEndPointUrls.GetMarkersEndPointUrl = '/api/storelocator/markers';
            return StoreLocatorEndPointUrls;
        }());
        Composer.StoreLocatorEndPointUrls = StoreLocatorEndPointUrls;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Mvc/IControllerContext.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Mvc/ComposerClient.ts' />
///<reference path='../../../../../Composer.UI/Source/Typescript/Events/EventHub.ts' />
///<reference path='./IStoreLocatorService.ts' />
///<reference path='./StoreLocatorEndPointUrls.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var StoreLocatorService = (function () {
            function StoreLocatorService() {
            }
            StoreLocatorService.prototype.getStore = function (storeNumber) {
                if (!storeNumber) {
                    throw new Error('The Store Number is required');
                }
                if (!this.memoizeStore) {
                    this.memoizeStore =
                        _.memoize(this.getStoreImpl, function (storeNumber) { return storeNumber; });
                }
                return this.memoizeStore(storeNumber);
            };
            StoreLocatorService.prototype.getStoreImpl = function (storeNumber) {
                var data = { StoreNumber: storeNumber };
                return Composer.ComposerClient.post(Composer.StoreLocatorEndPointUrls.GetStoreEndPointUrl, data);
            };
            StoreLocatorService.prototype.getStores = function (southWest, northEast, searchPoint, page, pageSize) {
                var data = {
                    page: page,
                    pageSize: pageSize,
                    mapBounds: {
                        southWest: southWest,
                        northEast: northEast
                    },
                    searchPoint: searchPoint
                };
                return Composer.ComposerClient.post(Composer.StoreLocatorEndPointUrls.GetStoresEndPointUrl, data);
            };
            StoreLocatorService.prototype.getMapConfiguration = function () {
                return Composer.ComposerClient.get(Composer.StoreLocatorEndPointUrls.GetMapConfigurationEndPointUrl);
            };
            StoreLocatorService.prototype.getMarkers = function (southWest, northEast, zoomLevel, searchPoint, isSearch, pageSize) {
                var data = {
                    zoomLevel: zoomLevel,
                    mapBounds: {
                        southWest: southWest,
                        northEast: northEast
                    },
                    searchPoint: searchPoint,
                    isSearch: isSearch,
                    pageSize: pageSize
                };
                return Composer.ComposerClient.post(Composer.StoreLocatorEndPointUrls.GetMarkersEndPointUrl, data);
            };
            return StoreLocatorService;
        }());
        Composer.StoreLocatorService = StoreLocatorService;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        var StoreLocatorHistoryState = (function () {
            function StoreLocatorHistoryState() {
            }
            return StoreLocatorHistoryState;
        }());
        Composer.StoreLocatorHistoryState = StoreLocatorHistoryState;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../../Composer.UI/Source/Typings/tsd.d.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/Controller.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Mvc/IControllerActionContext.ts' />
///<reference path='./Services/StoreLocatorService.ts' />
///<reference path='./MapService.ts' />
///<reference path='./Services/GeoLocationService.ts' />
///<reference path='./IStoreLocatorInitializationOptions.ts' />
///<reference path='./IMapOptions.ts' />
///<reference path='./StoreLocatorHistoryState.ts' />
///<reference path='../../../../Composer.UI/Source/TypeScript/Cache/CacheProvider.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var StoreLocatorController = (function (_super) {
            __extends(StoreLocatorController, _super);
            function StoreLocatorController() {
                _super.apply(this, arguments);
                this._storeLocatorService = new Composer.StoreLocatorService();
                this._geoService = new Composer.GeoLocationService();
                this._mapService = new Composer.MapService(this.eventHub);
                this._isRestoreListPaging = false;
                this._searchPointAddressCacheKey = 'StoreLocatorSearchAddress';
                this.cache = Composer.CacheProvider.instance().defaultCache;
                this._isSearch = false;
                this._getCurrentLocation = Q.defer();
            }
            StoreLocatorController.prototype.getCurrentLocation = function () {
                return this._getCurrentLocation.promise;
            };
            StoreLocatorController.prototype.initialize = function (options) {
                var _this = this;
                if (options === void 0) { options = {
                    mapId: 'map',
                    coordinates: { Lat: -33.8688, Lng: 151.2195 },
                    showNearestStoreInfo: true
                }; }
                _super.prototype.initialize.call(this);
                this.registerSubscriptions();
                this.initSearchBox();
                this._storeLocatorOptions = options;
                // get current location
                this._geoService.geolocate().then(function (location) {
                    _this._getCurrentLocation.resolve(location);
                }, function (reason) { return _this._getCurrentLocation.resolve(null); });
                // first check if address is posted from other page.
                var postedAddress = this._searchBoxJQ.val();
                if (!postedAddress) {
                    // then check history state
                    this.parseHistoryState();
                    // then if any entered address saved in local storage
                    this.cache.get(this._searchPointAddressCacheKey)
                        .then(function (cachedAddr) {
                        postedAddress = cachedAddr;
                        _this._searchBoxJQ.val(cachedAddr);
                    });
                }
                this._storeLocatorService.getMapConfiguration()
                    .then(function (configuration) {
                    var mapOptions = _this.getMapOptions();
                    if (configuration.ZoomLevel) {
                        _this._storeLocatorOptions.zoomLevel = configuration.ZoomLevel;
                    }
                    if (configuration.MarkerPadding) {
                        _this._storeLocatorOptions.markerPadding = configuration.MarkerPadding;
                    }
                    _this._mapService.initialize(mapOptions);
                    if (!_this._historyState) {
                        _this._mapService.centerMap(configuration.Bounds);
                    }
                    _this.searchBoxSetBounds(configuration.Bounds);
                    return _this._mapService.mapInitialized();
                })
                    .then(function (mapservice) {
                    if (_this._historyState) {
                        _this.restoreMapFromHistoryState();
                        return null;
                    }
                    if (postedAddress) {
                        return _this._geoService.getLocationByAddress(postedAddress);
                    }
                    else {
                        return _this.getCurrentLocation();
                    }
                })
                    .then(function (currentLocation) {
                    if (currentLocation) {
                        _this.eventHub.publish('searchPointChanged', { data: currentLocation });
                    }
                })
                    .fail(function (reason) { return _this.handlePromiseFail('StoreLocator Initialize', reason); });
            };
            StoreLocatorController.prototype.registerSubscriptions = function () {
                var _this = this;
                this.eventHub.subscribe('mapBoundsUpdated', function (e) { return _this.onMapBoundsUpdated(e.data, _this._isSearch); });
                this.eventHub.subscribe('searchPointChanged', function (e) { return _this.setSearchLocationInMap(e.data); });
                this.eventHub.subscribe('markerClick', function (e) { return _this.onMarkerClick(e.data); });
                this.eventHub.subscribe('clusterClick', function (e) { return _this.onClusterClick(e.data); });
            };
            StoreLocatorController.prototype.initSearchBox = function () {
                this._searchBoxJQ = this.context.container.find('input[name="storeLocatorSearchInput"]');
                this._searchBox = new google.maps.places.SearchBox(this._searchBoxJQ[0]);
                this.searchBoxOnPlacesChanged();
                this.searchBoxOnEnterPressed();
            };
            StoreLocatorController.prototype.searchBoxOnPlacesChanged = function () {
                var _this = this;
                this._searchBox.addListener('places_changed', function () {
                    clearTimeout(_this._enterPressedTimer);
                    var places = _this._searchBox.getPlaces();
                    if (places && places.length && places[0].geometry) {
                        _this.eventHub.publish('searchPointChanged', { data: places[0].geometry.location });
                    }
                });
            };
            StoreLocatorController.prototype.searchBoxOnEnterPressed = function () {
                var _this = this;
                this._searchBoxJQ.on('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                        _this._enterPressedTimer = setTimeout(function () {
                            if (_this._searchPoint) {
                                _this.setSearchLocationInMap(_this._searchPoint);
                            }
                        }, 750);
                    }
                });
            };
            StoreLocatorController.prototype.getMapOptions = function () {
                var mapCenter = new google.maps.LatLng(this._storeLocatorOptions.coordinates.Lat, this._storeLocatorOptions.coordinates.Lng);
                var mapOptions = {
                    mapCanvas: this.context.container.find("#" + this._storeLocatorOptions.mapId)[0],
                    infoWindowMaxWidth: 450,
                    options: {
                        center: this._historyState ? this._historyState.point : mapCenter,
                        zoom: this._historyState ? this._historyState.zoom : 1,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        panControl: false,
                        keyboardShortcuts: true,
                        scaleControl: false,
                        scrollwheel: false,
                        zoomControl: true,
                        streetViewControl: false,
                        overviewMapControl: true,
                        overviewMapControlOptions: { opened: false }
                    }
                };
                return mapOptions;
            };
            StoreLocatorController.prototype.searchBoxSetBounds = function (bounds) {
                var southWest = new google.maps.LatLng(bounds.SouthWest.Lat, bounds.SouthWest.Lng);
                var northEast = new google.maps.LatLng(bounds.NorthEast.Lat, bounds.NorthEast.Lng);
                bounds = new google.maps.LatLngBounds(southWest, northEast);
                this._searchBox.setBounds(bounds);
            };
            StoreLocatorController.prototype.onMapBoundsUpdated = function (data, isSearch) {
                var _this = this;
                clearTimeout(this._timer);
                this._timer = setTimeout(function () {
                    _this.updateMarkers(data, isSearch);
                }, 750);
            };
            StoreLocatorController.prototype.onMarkerClick = function (marker) {
                var _this = this;
                if (marker != null && marker.storeNumber) {
                    this._storeLocatorService.getStore(marker.storeNumber)
                        .then(function (store) {
                        _this.getCurrentLocation().then(function (location) {
                            if (location) {
                                store.GoogleDirectionsLink = _this._geoService.getDirectionLatLngSourceAddress(store.GoogleDirectionsLink, location);
                            }
                            var content = _this.getRenderedTemplateContents('StoreMapMarkerInfo', store);
                            _this._mapService.openInformationWindow(content, marker.value);
                        });
                    })
                        .fail(function (reason) { return _this.handlePromiseFail('StoreLocator OnMarkerClick', reason); });
                }
            };
            StoreLocatorController.prototype.onClusterClick = function (marker) {
                this._mapService.getInformationWindow().close();
                this._mapService.getMap().panTo(marker.value.getPosition());
                marker.value.setMap(null);
                this._mapService.getMap().setZoom(this._mapService.getMap().getZoom() + 1);
            };
            StoreLocatorController.prototype.updateMarkers = function (data, isSearch) {
                var _this = this;
                if (isSearch === void 0) { isSearch = false; }
                var mapBounds = this._mapService.getBounds(this._storeLocatorOptions.markerPadding);
                var zoomLevel = this._mapService.getZoom();
                var searchPoint = this._searchPoint;
                var pageSize = this._isRestoreListPaging ? this._historyState.page * this.context.viewModel.pageSize : this.context.viewModel.pageSize;
                this._storeLocatorService.getMarkers(mapBounds.getSouthWest(), mapBounds.getNorthEast(), zoomLevel, searchPoint, isSearch, pageSize)
                    .then(function (result) {
                    if (result.Lat && result.Lng) {
                        _this._mapService.extendBounds(searchPoint, new google.maps.LatLng(result.Lat, result.Lng));
                    }
                    else {
                        _this._mapService.setMarkers(result.Markers, isSearch);
                        if (_this._isRestoreListPaging && result.NextPage) {
                            result.NextPage.Page = _this._historyState.page + 1;
                        }
                        _this.renderStoresList(result, null);
                        if (_this._isRestoreListPaging && _this._historyState.pos) {
                            $('html, body').animate({
                                scrollTop: _this._historyState.pos
                            }, 500);
                            _this.historyPushState(null, null, null, null, 0);
                        }
                        _this._isRestoreListPaging = false;
                        if (_this._storeLocatorOptions.showNearestStoreInfo && result.Stores) {
                            var firstStore = result.Stores[0];
                            if (firstStore && firstStore.SearchIndex === 1) {
                                _this.setNearestStoreInfo(firstStore.DestinationToSearchPoint);
                            }
                        }
                    }
                    _this.historyPushState(1, searchPoint, zoomLevel, _this._mapService.getBounds().getCenter());
                    _this._isSearch = false;
                })
                    .fail(function (reason) { return _this.handlePromiseFail('StoreLocator UpdateMarkers getMarkers', reason); });
            };
            StoreLocatorController.prototype.setSearchLocationInMap = function (point, zoomLevel) {
                if (zoomLevel === void 0) { zoomLevel = this._storeLocatorOptions.zoomLevel; }
                this._searchPoint = point;
                this.createSearchPoitMarker();
                this._isSearch = true;
                this.cache.set(this._searchPointAddressCacheKey, this._searchBoxJQ.val());
                this._mapService.setLocationInMap(point, zoomLevel);
            };
            StoreLocatorController.prototype.createSearchPoitMarker = function () {
                var title = this._searchBoxJQ.val();
                if (this._searchPointMarker == null) {
                    this._searchPointMarker = this._mapService.createMarkerOnMap(this._searchPoint, title);
                }
                else {
                    this._searchPointMarker.setPosition(this._searchPoint);
                    this._searchPointMarker.setTitle(title);
                }
            };
            // Action on Click on locator icon in search box
            StoreLocatorController.prototype.currentLocationAction = function (actionContext) {
                var _this = this;
                actionContext.event.preventDefault();
                this._geoService.geolocate()
                    .then(function (currentLocation) {
                    _this.eventHub.publish('searchPointChanged', { data: currentLocation });
                    return _this._geoService.getAddtressByLocation(currentLocation);
                })
                    .then(function (address) {
                    _this._searchBoxJQ.val(address);
                    _this._searchPointMarker.setTitle(address);
                })
                    .fail(function (reason) { return _this.handlePromiseFail('StoreLocator CurrentLocationAction', reason); });
            };
            // Next Page Action
            StoreLocatorController.prototype.nextPage = function (actionContext) {
                var page = actionContext.elementContext.data('page');
                this.getStoresForPage(page, this.context.viewModel.pageSize, actionContext.elementContext);
                actionContext.event.preventDefault();
            };
            // Remember element position in history
            StoreLocatorController.prototype.rememberPosition = function (actionContext) {
                var position = $(document).scrollTop();
                this.historyPushState(null, null, null, null, position);
            };
            StoreLocatorController.prototype.setNearestStoreInfo = function (info) {
                var nearestInfoPanel = $('#store-locator-nearest');
                if (!$('#nearestInfo').length) {
                    nearestInfoPanel.html(nearestInfoPanel.html().replace('{0}', '<strong id=\'nearestInfo\'></strong>'));
                }
                $('#nearestInfo').html(info);
                nearestInfoPanel.removeClass('hide');
            };
            StoreLocatorController.prototype.getStoresForPage = function (page, pageSize, element) {
                var _this = this;
                var mapBounds = this._mapService.getBounds(this._storeLocatorOptions.markerPadding);
                var searchPoint = this._searchPoint;
                var busy = this.asyncBusy({ elementContext: element });
                this._storeLocatorService.getStores(mapBounds.getSouthWest(), mapBounds.getNorthEast(), searchPoint, page, pageSize)
                    .then(function (stores) {
                    busy.done();
                    _this.renderStoresList(stores, element[0].parentElement);
                });
                this.historyPushState(page);
            };
            StoreLocatorController.prototype.renderStoresList = function (stores, target) {
                var listHtml = this.getRenderedTemplateContents('StoresList', stores);
                if (target == null) {
                    var $list = $('#storesList').html('').stop().fadeOut();
                    $list.html(listHtml).stop().fadeIn();
                }
                else {
                    var position = $(target).offset().top + $(document).scrollTop();
                    $(target).replaceWith(listHtml).stop().fadeIn();
                    $('html, body').animate({
                        scrollTop: position
                    }, 500);
                }
                this.setGoogleDirectionLinks();
            };
            StoreLocatorController.prototype.setGoogleDirectionLinks = function () {
                var _this = this;
                return this.getCurrentLocation().then(function (location) {
                    _this._geoService.updateDirectionLinksWithLatLngSourceAddress(_this.context.container, location);
                });
            };
            StoreLocatorController.prototype.historyPushState = function (page, point, zoom, center, elementPos) {
                if (!this._historyState) {
                    this._historyState = new Composer.StoreLocatorHistoryState();
                }
                if (page) {
                    this._historyState.page = page;
                }
                if (point) {
                    this._historyState.point = point;
                }
                if (zoom) {
                    this._historyState.zoom = zoom;
                }
                if (center) {
                    this._historyState.center = center;
                }
                if (elementPos >= 0) {
                    this._historyState.pos = elementPos;
                }
                if (this._historyState.point) {
                    var obj = {
                        'p_lat': this._historyState.point.lat(),
                        'p_lng': this._historyState.point.lng(),
                        'page': this._historyState.page,
                        'zoom': this._historyState.zoom,
                        'c_lat': this._historyState.center.lat(),
                        'c_lng': this._historyState.center.lng(),
                        'pos': this._historyState.pos
                    };
                    if (history.state) {
                        history.replaceState(obj, null, null);
                    }
                    else {
                        history.pushState(obj, null, null);
                    }
                }
            };
            StoreLocatorController.prototype.parseHistoryState = function () {
                if (history.state) {
                    this._historyState = new Composer.StoreLocatorHistoryState();
                    if (history.state.p_lat && history.state.p_lng) {
                        this._historyState.point = new google.maps.LatLng(history.state.p_lat, history.state.p_lng);
                    }
                    if (history.state.c_lat && history.state.c_lng) {
                        this._historyState.center = new google.maps.LatLng(history.state.c_lat, history.state.c_lng);
                    }
                    this._historyState.zoom = history.state.zoom;
                    this._historyState.page = history.state.page;
                    this._historyState.pos = history.state.pos;
                }
            };
            StoreLocatorController.prototype.restoreMapFromHistoryState = function () {
                console.log('Restore data from history state');
                this._searchPoint = this._historyState.point;
                this.createSearchPoitMarker();
                if (this._historyState.center) {
                    this._mapService.getMap().setCenter(this._historyState.center);
                }
                if (this._historyState.page > 1) {
                    this._isRestoreListPaging = true;
                }
            };
            StoreLocatorController.prototype.handlePromiseFail = function (title, reason) {
                console.log(title + ': ' + reason);
            };
            return StoreLocatorController;
        }(Composer.Controller));
        Composer.StoreLocatorController = StoreLocatorController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../Typings/tsd.d.ts' />
Handlebars.registerHelper('escape', function (options) {
    var innerContent = options.fn(this);
    var escapedContent = _.escape(innerContent);
    return new Handlebars.SafeString(escapedContent);
});

///<reference path='../../../Typings/tsd.d.ts' />
Handlebars.registerHelper('if_eq', function (left, right, options) {
    if (left === right) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
});

///<reference path='../../../Typings/tsd.d.ts' />
Handlebars.registerHelper('if_exists', function (value, options) {
    if (typeof value !== 'undefined') {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
});

///<reference path='../../../Typings/tsd.d.ts' />
Handlebars.registerHelper('if_gt', function (left, right, options) {
    if (left > right) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
});

///<reference path='../../../Typings/tsd.d.ts' />
Handlebars.registerHelper('if_gte', function (left, right, options) {
    if (left >= right) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
});

///<reference path='../../../Typings/tsd.d.ts' />
Handlebars.registerHelper('if_lt', function (left, right, options) {
    if (left < right) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
});

///<reference path='../../../Typings/tsd.d.ts' />
Handlebars.registerHelper('if_lte', function (left, right, options) {
    if (left <= right) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
});

///<reference path='../../../Typings/tsd.d.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../../Typings/tsd.d.ts' />
///<reference path='./IHandlebarsLocalization.ts' />
Handlebars.registerHelper('if_localized', function (categoryName, keyName, options) {
    if (Handlebars.localizationProvider.handleBarsHelper_isLocalized(categoryName, keyName)) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
});

///<reference path='../../../Typings/tsd.d.ts' />
Handlebars.registerHelper('if_neq', function (left, right, options) {
    if (left !== right) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
});

///<reference path='../../../Typings/tsd.d.ts' />
///<reference path='./IHandlebarsLocalization.ts' />
Handlebars.registerHelper('localizeFormat', function (categoryName, keyName) {
    var args = [];
    if (arguments.length > 2) {
        args = Array.prototype.slice.call(arguments, 2);
    }
    var value = Handlebars.localizationProvider
        .handleBarsHelper_localizeFormat(categoryName, keyName, args);
    return new Handlebars.SafeString(value);
});

///<reference path='../../../Typings/tsd.d.ts' />
///<reference path='./IHandlebarsLocalization.ts' />
Handlebars.registerHelper('localize', function (categoryName, keyName) {
    var value = Handlebars.localizationProvider.handleBarsHelper_localize(categoryName, keyName);
    return new Handlebars.SafeString(value);
});

//TODO: Custom errors and not being able to inherit from Error
// module Orckestra.Composer {
//     export class ControllerAlreadyRegisteredException implements Error {
//         public name = 'ControllerAlreadyRegisteredException';
//         constructor(public message: string = 'The controller has already been registered.') {
//         }
//     }
// }

//TODO: Custom errors and not being able to inherit from Error
// module Orckestra.Composer {
//     export class MissingControllerDispatcherNameException implements Error {
//         public name = 'MissingControllerDispatcherNameException';
//         constructor(public message: string = 'A name is required to create a controller dispatcher.') {
//         }
//     }
// }

///<reference path='../Generics/Collections/IHashTable.ts' />
///<reference path='./IController.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ControllerRegistry = (function () {
            function ControllerRegistry() {
                if (ControllerRegistry._instance === void 0) {
                    ControllerRegistry._instance = this;
                }
                return ControllerRegistry._instance;
            }
            ControllerRegistry.prototype.isRegistered = function (controllerName) {
                return ControllerRegistry._registry.hasOwnProperty(controllerName);
            };
            ControllerRegistry.prototype.retrieveController = function (controllerName) {
                if (!this.isRegistered(controllerName)) {
                    throw new Error('Unable to unregister the controller ' + controllerName + ' because it does not exist in the registry');
                }
                return ControllerRegistry._registry[controllerName];
            };
            ControllerRegistry.prototype.register = function (controllerName, controller) {
                if (this.isRegistered(controllerName)) {
                    throw new Error('The controller ' + controllerName + ' is already registered.');
                }
                ControllerRegistry._registry[controllerName] = controller;
            };
            ControllerRegistry.prototype.unregister = function (controllerName) {
                var unregisteredController; // IController;
                if (!this.isRegistered(controllerName)) {
                    throw new Error('Unable to unregister the controller ' + controllerName + ' because it does not exist in the registry');
                }
                delete ControllerRegistry._registry[controllerName];
                return unregisteredController;
            };
            ControllerRegistry._registry = {}; //IHashTable<IController> = {};
            return ControllerRegistry;
        }());
        Composer.ControllerRegistry = ControllerRegistry;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../Typings/tsd.d.ts' />
///<reference path='./IControllerContext.ts' />
///<reference path='../Events/IEventHub.ts' />
///<reference path='../IComposerContext.ts' />
///<reference path='../IComposerConfiguration.ts' />

/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./IController.ts" />
/// <reference path="./ControllerRegistry.ts" />
/// <reference path="./ICreateControllerOptions.ts" />
/// <reference path="../Cache/ICache.ts" />
/// <reference path="../Events/IEventHub.ts" />
/// <reference path="../IComposerContext.ts" />
/// <reference path="../IComposerConfiguration.ts" />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        /**
        * Factory for creating controllers.
        */
        var ControllerFactory = (function () {
            function ControllerFactory() {
            }
            /**
            * Creates and returns an instance of a controller.
            */
            ControllerFactory.createController = function (options) {
                var controllerConstructor = ControllerFactory._controllerRegistry.retrieveController(options.controllerName);
                return new controllerConstructor(options.context, options.eventHub, options.composerContext, options.composerConfiguration);
            };
            ControllerFactory._controllerRegistry = new Orckestra.Composer.ControllerRegistry();
            return ControllerFactory;
        }());
        Composer.ControllerFactory = ControllerFactory;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));



///<reference path='../Typings/tsd.d.ts' />
///<reference path='./IComposerContext.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ComposerContext = (function () {
            function ComposerContext() {
                this.language = (function () {
                    return document.getElementsByTagName('html')[0].getAttribute('lang');
                })();
            }
            return ComposerContext;
        }());
        Composer.ComposerContext = ComposerContext;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../Typings/tsd.d.ts' />
///<reference path='./Mvc/ControllerRegistry.ts' />
///<reference path='./Mvc/ControllerFactory.ts' />
///<reference path='./Templating/IComposerTemplates.ts' />
///<reference path='./Templating/IComposerTemplates.ts' />
///<reference path='./Mvc/Localization/LocalizationProvider.ts' />
///<reference path='./Mvc/Localization/ILocalizationProvider.ts' />
///<reference path='./Validation/IParsleyValidator.ts' />
///<reference path='./ComposerContext.ts' />
///<reference path='./IComposerConfiguration.ts' />
///<reference path='./Mvc/IControllerConfiguration.ts' />
///<reference path='./Plugins/IPlugin.ts' />
///<reference path='../Typescript/Events/EventHub.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
        function loadPlugins(plugins, window, document) {
            if (!_.isEmpty(plugins)) {
                plugins.forEach(function (rawPluginName) {
                    var pluginName = rawPluginName + "Plugin", plugin;
                    if (Orckestra.Composer.hasOwnProperty(pluginName) && _.isFunction(Orckestra.Composer[pluginName])) {
                        plugin = Object.create(Orckestra.Composer[pluginName]).prototype;
                        plugin.initialize(window, document);
                    }
                });
            }
        }
        function loadControllers(controllerRegistry, controllers) {
            if (!_.isEmpty(controllers)) {
                controllers.forEach(function (controllerConfiguration) {
                    controllerRegistry.register(controllerConfiguration.name, controllerConfiguration.controller);
                });
            }
        }
        function raiseLanguageSwitchEventIfNeeded(cacheProvider, eventHub) {
            var cacheKey = 'languageSwitchEvent';
            return cacheProvider.defaultCache.get(cacheKey).then(function (value) {
                eventHub.publish('languageSwitched', null);
                cacheProvider.defaultCache.clear(cacheKey);
            });
        }
        Composer.bootstrap = function (window, document, composerConfiguration) {
            var controllerRegistry = new Orckestra.Composer.ControllerRegistry(), controller, eventHub = Orckestra.Composer.EventHub.instance(), cacheProvider = Composer.CacheProvider.instance(), localizationProvider = Orckestra.Composer.LocalizationProvider.instance(), composerContext = new Composer.ComposerContext();
            // TODO: Need a better solution that <any>.
            Handlebars.partials = Orckestra.Composer.Templates;
            Handlebars.localizationProvider = localizationProvider;
            localizationProvider.initialize(composerContext).fail(function () {
                console.log('Failed to initialize the localization provider');
            }).then(function () {
                var blades = $('[data-oc-controller]'), controllers = [];
                loadPlugins(composerConfiguration.plugins, window, document);
                loadControllers(controllerRegistry, composerConfiguration.controllers);
                // Need a better query selector as this one is shit
                blades.each(function (index, item) {
                    var bladeName = item.getAttribute('data-oc-controller'), context;
                    if (controllerRegistry.isRegistered(bladeName)) {
                        context = {
                            container: $(item),
                            dataItemId: item.getAttribute('data-item-id'),
                            templateName: bladeName,
                            viewModel: JSON.parse(item.getAttribute('data-context') || '{}'),
                            window: window
                        };
                        controller = Orckestra.Composer.ControllerFactory.createController({
                            controllerName: bladeName,
                            context: context,
                            eventHub: eventHub,
                            composerContext: composerContext,
                            composerConfiguration: composerConfiguration
                        });
                        controller.initialize();
                        controllers.push(controller);
                    }
                });
                eventHub.publish('allControllersInitialized', null);
                raiseLanguageSwitchEventIfNeeded(cacheProvider, eventHub);
                /**
                 * This part of the code is mostly created to clean up dom events
                 * it was created to workaround a bug with IE8 that had memory leaks
                 * when a circular reference was made with a dom element (ie event + update of the dom element)
                 * see : http://com.hemiola.com/2009/11/23/memory-leaks-in-ie8/
                 * and : http://stackoverflow.com/questions/3083196/in-internet-explorer-why-does-memory-leak-stay-even-when-navigating-away-from
                 */
                $(window).on('beforeunload', function () {
                    controllers.forEach(function (controller) { return controller.dispose(); });
                });
            }).done();
        };
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../Typings/tsd.d.ts' />

///<reference path='../../Typings/tsd.d.ts' />
///<reference path='../Mvc/Controller.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var SearchBoxController = (function (_super) {
            __extends(SearchBoxController, _super);
            function SearchBoxController() {
                _super.apply(this, arguments);
            }
            SearchBoxController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.registerFormsForValidation(this.context.container.find('form'));
            };
            return SearchBoxController;
        }(Composer.Controller));
        Composer.SearchBoxController = SearchBoxController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../Typings/tsd.d.ts' />
///<reference path='../Mvc/Controller.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var PageNotFoundAnalyticsController = (function (_super) {
            __extends(PageNotFoundAnalyticsController, _super);
            function PageNotFoundAnalyticsController() {
                _super.apply(this, arguments);
            }
            PageNotFoundAnalyticsController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                var pageUrl = decodeURIComponent(Composer.urlHelper.getURLParameter(window.location.href, 'errorpath'));
                if (!pageUrl || pageUrl === 'null') {
                    pageUrl = window.location.href;
                }
                this.eventHub.publish('pageNotFound', { data: { PageUrl: pageUrl, ReferrerUrl: document.referrer } });
            };
            return PageNotFoundAnalyticsController;
        }(Composer.Controller));
        Composer.PageNotFoundAnalyticsController = PageNotFoundAnalyticsController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../Typings/tsd.d.ts' />
///<reference path='../Mvc/Controller.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var LanguageSwitchController = (function (_super) {
            __extends(LanguageSwitchController, _super);
            function LanguageSwitchController() {
                _super.apply(this, arguments);
                this.languageSwitchEvent = 'languageSwitchEvent';
            }
            LanguageSwitchController.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.cacheProvider = Composer.CacheProvider.instance();
            };
            LanguageSwitchController.prototype.onLanguageSwitch = function () {
                this.cacheProvider.defaultCache.set(this.languageSwitchEvent, true);
            };
            return LanguageSwitchController;
        }(Composer.Controller));
        Composer.LanguageSwitchController = LanguageSwitchController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../Typings/tsd.d.ts' />
/// <reference path='../Mvc/Controller.ts' />
/// <reference path='./IErrorCollection.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ErrorController = (function (_super) {
            __extends(ErrorController, _super);
            function ErrorController() {
                _super.apply(this, arguments);
            }
            ErrorController.prototype.initialize = function () {
                this.subscribeToEvents();
            };
            ErrorController.prototype.subscribeToEvents = function () {
                var _this = this;
                this.eventHub.subscribe('GeneralErrorOccured', function (eventInfo) { return _this.handleGeneralError(eventInfo.data, eventInfo.source); });
            };
            ErrorController.prototype.handleGeneralError = function (errors, source) {
                var errorCodes = _.map(errors.Errors, 'ErrorCode').sort();
                var lastErrorCodes = this.lastErrorCodes ? this.lastErrorCodes : [];
                var isMatch = _.isEqual(errorCodes, lastErrorCodes);
                if (!isMatch) {
                    this.lastErrorCodes = errorCodes;
                    this.render('FormErrorMessages', errors);
                }
                //TODO: Force a scroll?
            };
            return ErrorController;
        }(Composer.Controller));
        Composer.ErrorController = ErrorController;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../Typings/tsd.d.ts' />
///<reference path='./Bootstrap.ts' />
///<reference path='./JQueryPlugins/IPopOverJqueryPlugin.ts' />
///<reference path='./IComposerConfiguration.ts' />
///<reference path='./Controller/SearchBoxController.ts' />
///<reference path='./Controller/PageNotFoundAnalyticsController.ts' />
///<reference path='./Controller/LanguageSwitchController.ts' />
///<reference path='../../../Composer.Product.UI/ProductSearch/Source/TypeScript/SortBySearchController.ts' />
///<reference path='../../../Composer.Product.UI/ProductSearch/Source/TypeScript/FacetSearchController.ts' />
///<reference path='../../../Composer.Product.UI/ProductSearch/Source/TypeScript/SearchResultsController.ts' />
///<reference path='../../../Composer.Product.UI/ProductSearch/Source/TypeScript/SearchSummaryController.ts' />
///<reference path='../../../Composer.Product.UI/ProductSearch/Source/TypeScript/QuickViewController.ts' />
///<reference path='../../../Composer.Product.UI/ProductSearch/Source/TypeScript/SelectedFacetSearchController.ts' />
///<reference path='../../../Composer.Cart.UI/AddToCartNotification/Source/TypeScript/AddToCartNotificationController.ts' />
///<reference path='../../../Composer.Cart.UI/CartSummary/Source/TypeScript/FullCartController.ts' />
///<reference path='../../../Composer.Cart.UI/MiniCart/Source/TypeScript/MiniCartController.ts' />
///<reference path='../../../Composer.Cart.UI/MiniCart/Source/TypeScript/MiniCartSummaryController.ts' />
///<reference path='../../../Composer.Cart.UI/Coupons/Source/Typescript/CouponController.ts' />
///<reference path='../../../Composer.Product.UI/ProductDetail/Source/TypeScript/ProductDetailController.ts' />
///<reference path='../../../Composer.Product.UI/RelatedProducts/Source/TypeScript/RelatedProductsController.ts' />
///<reference path='../../../Composer.Product.UI/ProductSpecification/Source/TypeScript/ProductSpecificationsController.ts' />
///<reference path='../../../Composer.Cart.UI/OrderSummary/Source/TypeScript/OrderSummaryController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutGuestCustomerInfo/Source/TypeScript/GuestCustomerInfoCheckoutController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutShippingAddress/Source/TypeScript/ShippingAddressCheckoutController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutShippingMethod/Source/TypeScript/ShippingMethodCheckoutController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutBillingAddress/Source/TypeScript/BillingAddressCheckoutController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutBillingAddressRegistered/Source/TypeScript/BillingAddressRegisteredCheckoutController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutOrderConfirmation/Source/TypeScript/CheckoutOrderConfirmationController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutComplete/Source/TypeScript/CheckoutCompleteController.ts' />
///<reference path='../../../Composer.MyAccount.UI/AddressList/Source/TypeScript/AddressListController.ts' />
///<reference path='../../../Composer.MyAccount.UI/ChangePassword/Source/TypeScript/ChangePasswordController.ts' />
///<reference path='../../../Composer.MyAccount.UI/CreateAccount/Source/TypeScript/CreateAccountController.ts' />
///<reference path='../../../Composer.MyAccount.UI/EditAddress/Source/TypeScript/EditAddressController.ts' />
///<reference path='../../../Composer.MyAccount.UI/ForgotPassword/Source/TypeScript/ForgotPasswordController.ts' />
///<reference path='../../../Composer.MyAccount.UI/AccountHeader/Source/TypeScript/AccountHeaderController.ts' />
///<reference path='../../../Composer.MyAccount.UI/UpdateAccount/Source/TypeScript/UpdateAccountController.ts' />
///<reference path='../../../Composer.MyAccount.UI/NewPassword/Source/TypeScript/NewPasswordController.ts' />
///<reference path='../../../Composer.MyAccount.UI/ReturningCustomer/Source/TypeScript/ReturningCustomerController.ts' />
///<reference path='../../../Composer.MyAccount.UI/WishList/Source/TypeScript/MyWishListController.ts' />
///<reference path='../../../Composer.MyAccount.UI/WishListShared/Source/TypeScript/SharedWishListController.ts' />
///<reference path='../../../Composer.MyAccount.UI/WishList/Source/TypeScript/WishListInHeaderController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutShippingAddressRegistered/Source/TypeScript/ShippingAddressRegisteredController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutOrderSummary/Source/TypeScript/CheckoutOrderSummaryController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutOrderSummary/Source/TypeScript/CompleteCheckoutOrderSummaryController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutPayment/Source/TypeScript/CheckoutPaymentController.ts' />
///<reference path='../../../Composer.Cart.UI/CheckoutCommon/Source/TypeScript/CheckoutNavigationController.ts' />
///<reference path='../../../Composer.MyAccount.UI/SignInHeader/Source/TypeScript/SignInHeaderController.ts' />
///<reference path='../../../Composer.MyAccount.UI/MyAccount/Source/TypeScript/MyAccountController.ts' />
///<reference path='../../../Composer.Cart.UI/OrderHistory/Source/TypeScript/CurrentOrdersController.ts' />
///<reference path='../../../Composer.Cart.UI/OrderHistory/Source/TypeScript/PastOrdersController.ts' />
///<reference path='../../../Composer.Cart.UI/OrderDetails/Source/TypeScript/OrderDetailsController.ts' />
///<reference path='../../../Composer.Cart.UI/FindMyOrder/Source/TypeScript/FindMyOrderController.ts' />
///<reference path='./ErrorHandling/ErrorController.ts' />
///<reference path='../../../Composer.Store.UI/StoreLocator/Source/TypeScript/StoreLocatorController.ts' />
///<reference path='../../../Composer.Store.UI/StoreLocator/Source/TypeScript/StoreDetailsController.ts' />
///<reference path='../../../Composer.Store.UI/StoreDirectory/Source/TypeScript/StoresDirectoryController.ts' />
///<reference path='../../../Composer.Store.UI/StoreInventory/Source/TypeScript/StoreInventoryController.ts' />
(function () {
    'use strict';
    // This file is currently used for the composer team so that we can deploy and hook into
    // our client-side code, but the starter site that ships, will ship with an App.ts
    // that will look like this.
    $(document).ready(function () {
        var composerConfiguration = {
            plugins: [
                'AntiIFrameClickJacking',
                'ComposerValidationLocalization',
                'HelpBubbles',
                'StickyAffix',
                'SlickCarousel',
                'FocusElement',
                'GoogleAnalytics'
            ],
            controllers: [
                { name: 'General.ErrorController', controller: Orckestra.Composer.ErrorController },
                { name: 'General.SearchBox', controller: Orckestra.Composer.SearchBoxController },
                { name: 'General.LanguageSwitch', controller: Orckestra.Composer.LanguageSwitchController },
                { name: 'Cart.FullCart', controller: Orckestra.Composer.FullCartController },
                { name: 'Cart.OrderSummary', controller: Orckestra.Composer.OrderSummaryController },
                { name: 'Cart.MiniCart', controller: Orckestra.Composer.MiniCartController },
                { name: 'Cart.MiniCartSummary', controller: Orckestra.Composer.MiniCartSummaryController },
                { name: 'Cart.Coupons', controller: Orckestra.Composer.CouponController },
                { name: 'Cart.AddToCartNotification', controller: Orckestra.Composer.AddToCartNotificationController },
                { name: 'Product.SortBySearch', controller: Orckestra.Composer.SortBySearchController },
                { name: 'Product.FacetSearch', controller: Orckestra.Composer.FacetSearchController },
                { name: 'Product.ProductDetail', controller: Orckestra.Composer.ProductDetailController },
                { name: 'Product.RelatedProducts', controller: Orckestra.Composer.RelatedProductController },
                { name: 'Product.SearchResults', controller: Orckestra.Composer.SearchResultsController },
                { name: 'Product.SearchSummary', controller: Orckestra.Composer.SearchSummaryController },
                { name: 'Product.QuickView', controller: Orckestra.Composer.QuickViewController },
                { name: 'Product.SelectedSearchFacets', controller: Orckestra.Composer.SelectedFacetSearchController },
                { name: 'Product.ProductSpecifications', controller: Orckestra.Composer.ProductSpecificationsController },
                { name: 'Product.ProductZoom', controller: Orckestra.Composer.ProductZoomController },
                { name: 'Checkout.GuestCustomerInfo', controller: Orckestra.Composer.GuestCustomerInfoCheckoutController },
                { name: 'Checkout.ShippingAddress', controller: Orckestra.Composer.ShippingAddressCheckoutController },
                { name: 'Checkout.ShippingAddressRegistered', controller: Orckestra.Composer.ShippingAddressRegisteredController },
                { name: 'Checkout.ShippingMethod', controller: Orckestra.Composer.ShippingMethodCheckoutController },
                { name: 'Checkout.OrderSummary', controller: Orckestra.Composer.CheckoutOrderSummaryController },
                { name: 'Checkout.CompleteOrderSummary', controller: Orckestra.Composer.CompleteCheckoutOrderSummaryController },
                { name: 'Checkout.CheckoutComplete', controller: Orckestra.Composer.CheckoutCompleteController },
                { name: 'Checkout.CheckoutOrderConfirmation', controller: Orckestra.Composer.CheckoutOrderConfirmationController },
                { name: 'Checkout.BillingAddress', controller: Orckestra.Composer.BillingAddressCheckoutController },
                { name: 'Checkout.BillingAddressRegistered', controller: Orckestra.Composer.BillingAddressRegisteredCheckoutController },
                { name: 'Checkout.Payment', controller: Orckestra.Composer.CheckoutPaymentController },
                { name: 'Checkout.Navigation', controller: Orckestra.Composer.CheckoutNavigationController },
                { name: 'MyAccount.AddressList', controller: Orckestra.Composer.AddressListController },
                { name: 'MyAccount.ChangePassword', controller: Orckestra.Composer.ChangePasswordController },
                { name: 'MyAccount.CreateAccount', controller: Orckestra.Composer.CreateAccountController },
                { name: 'MyAccount.EditAddress', controller: Orckestra.Composer.EditAddressController },
                { name: 'MyAccount.ForgotPassword', controller: Orckestra.Composer.ForgotPasswordController },
                { name: 'MyAccount.AccountHeader', controller: Orckestra.Composer.AccountHeaderController },
                { name: 'MyAccount.UpdateAccount', controller: Orckestra.Composer.UpdateAccountController },
                { name: 'MyAccount.NewPassword', controller: Orckestra.Composer.NewPasswordController },
                { name: 'MyAccount.ReturningCustomer', controller: Orckestra.Composer.ReturningCustomerController },
                { name: 'MyAccount.SignInHeader', controller: Orckestra.Composer.SignInHeaderController },
                { name: 'MyAccount.MyAccountMenu', controller: Orckestra.Composer.MyAccountController },
                { name: 'MyAccount.MyWishList', controller: Orckestra.Composer.MyWishListController },
                { name: 'MyAccount.SharedWishList', controller: Orckestra.Composer.SharedWishListController },
                { name: 'MyAccount.WishListInHeader', controller: Orckestra.Composer.WishListInHeaderController },
                { name: 'Orders.CurrentOrders', controller: Orckestra.Composer.CurrentOrdersController },
                { name: 'Orders.PastOrders', controller: Orckestra.Composer.PastOrdersController },
                { name: 'Orders.OrderDetails', controller: Orckestra.Composer.OrderDetailsController },
                { name: 'Orders.FindMyOrder', controller: Orckestra.Composer.FindMyOrderController },
                { name: 'Store.Locator', controller: Orckestra.Composer.StoreLocatorController },
                { name: 'Store.Details', controller: Orckestra.Composer.StoreDetailsController },
                { name: 'Store.Directory', controller: Orckestra.Composer.StoresDirectoryController },
                { name: 'Store.Inventory', controller: Orckestra.Composer.StoreInventoryController },
                { name: 'PageNotFound.Analytics', controller: Orckestra.Composer.PageNotFoundAnalyticsController }
            ]
        };
        Orckestra.Composer.bootstrap(window, document, composerConfiguration);
    });
})();

/// <reference path='./IPlugin.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var AntiIFrameClickJackingPlugin = (function () {
            function AntiIFrameClickJackingPlugin() {
            }
            AntiIFrameClickJackingPlugin.prototype.initialize = function (window, document) {
                if (this.getOrigin(window.self) !== this.getOrigin(window.top)) {
                    console.warn('This site cannot be hosted in an iFrame. Redirecting.');
                    window.top.location.href = window.self.location.href;
                }
            };
            AntiIFrameClickJackingPlugin.prototype.getOrigin = function (window) {
                var origin;
                if (!window.location['origin']) {
                    window.location['origin'] = window.location.protocol + '//' + window.location.host;
                }
                origin = window.location['origin'];
                return origin;
            };
            return AntiIFrameClickJackingPlugin;
        }());
        Composer.AntiIFrameClickJackingPlugin = AntiIFrameClickJackingPlugin;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='../../Typings/tsd.d.ts' />
/// <reference path='../Validation/IParsleyValidator.ts' />
/// <reference path='../ComposerContext.ts' />
/// <reference path='./IPlugin.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var ComposerValidationLocalizationPlugin = (function () {
            function ComposerValidationLocalizationPlugin() {
            }
            ComposerValidationLocalizationPlugin.prototype.initialize = function (window, document) {
                var locale, parlseyConfig = window.ParsleyConfig, parsleyLocaleMessages = JSON.parse(Orckestra.Composer.Templates['GlobalValidation']()), composerContext = new Composer.ComposerContext();
                locale = composerContext.language;
                if (_.isEmpty(locale)) {
                    throw new Error('The locale has not been set');
                }
                window.ParsleyConfig = window.ParsleyConfig || {};
                window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};
                window.ParsleyConfig.i18n[locale] =
                    jQuery.extend(window.ParsleyConfig.i18n[locale] || {}, parsleyLocaleMessages);
                // If file is loaded after Parsley main file, auto-load locale
                if (window.ParsleyValidator !== void 0) {
                    window.ParsleyValidator.addCatalog(locale, window.ParsleyConfig.i18n[locale], true);
                    window.ParsleyValidator.setLocale(locale);
                }
                this.defineValidators(window.ParsleyValidator);
            };
            ComposerValidationLocalizationPlugin.prototype.defineValidators = function (parsleyValidator) {
                var regex = /^(?!(.|\n)*<[a-z!\/?])(?!(.|\n)*&#)(.|\n)*$/i;
                parsleyValidator.addValidator('antixss', function (value, requirement) {
                    var isReq;
                    if (_.isString(requirement)) {
                        isReq = requirement.toLowerCase() === 'true';
                    }
                    else {
                        isReq = !!requirement;
                    }
                    var isValid = !isReq || regex.test(value);
                    return isValid;
                });
                //en: 'This field contains invalid characters.',
                //fr: 'Ce champ contient des caractères invalides.'
            };
            return ComposerValidationLocalizationPlugin;
        }());
        Composer.ComposerValidationLocalizationPlugin = ComposerValidationLocalizationPlugin;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='./IPlugin.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var FocusElementPlugin = (function () {
            function FocusElementPlugin() {
            }
            FocusElementPlugin.prototype.initialize = function (window, document) {
                /**
                 * On click, scroll to field and focus in it.
                 */
                $('body', document).on('click', '[data-focus-element]', function (e) {
                    var target = $(this).data('focus-element');
                    $('body, html').scrollTop($(target).offset().top - 20);
                    $(target).focus();
                    e.preventDefault();
                });
            };
            return FocusElementPlugin;
        }());
        Composer.FocusElementPlugin = FocusElementPlugin;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='./IPlugin.ts' />
/// <reference path='../JQueryPlugins/IPopOverJqueryPlugin.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var HelpBubblesPlugin = (function () {
            function HelpBubblesPlugin() {
            }
            HelpBubblesPlugin.prototype.initialize = function (window, document) {
                /**
                 * Will calculate if there is enough space for the popover on the right
                 * else will put it in the bottom.
                 */
                function popoverPlacement(popover, triggeringElement) {
                    var triggeringElementWidth = $(triggeringElement).outerWidth();
                    var placement = 'bottom';
                    // we will consider that if the trrigering element can't be doubled
                    // we won't have enough space to display the popover on the right
                    if ((window.innerWidth - triggeringElementWidth) > triggeringElementWidth) {
                        placement = 'right';
                    }
                    return placement;
                }
                //  As discussed with Sam, this is in the app.ts for now. Because we don't have a strategy
                //  yet for generic presentation/plugins javascript.
                //  Pop over initialization.
                $('body').popover({
                    html: true,
                    placement: popoverPlacement,
                    selector: '[data-toggle=popover]',
                    trigger: 'focus',
                    content: function () {
                        return $('#popover-content').html();
                    }
                });
                /**
                 * Needs the select block of a same group to have data-parent defined
                 * OR that they be in the same form.
                 */
                $('body').on('change', '.select-block', function () {
                    var input = $(this).find('.input');
                    var type = input.attr('type');
                    var name = input.attr('name');
                    // if checkbox check current state of prop
                    if (type === 'checkbox') {
                        if (input.prop('checked')) {
                            $(this).addClass('active');
                        }
                        else {
                            $(this).removeClass('active');
                        }
                    }
                    if (type === 'radio') {
                        var parentSelector = $(this).data('parent');
                        var parentElement;
                        if (parentSelector) {
                            parentElement = input.closest(parentSelector);
                        }
                        else {
                            // if no parent specified, default to form and fallback to body
                            parentElement = input.closest('form');
                            if (parentElement.length === 0) {
                                parentElement = $('body');
                            }
                        }
                        parentElement
                            .find('.select-block:has(:radio[name="' + name + '"])')
                            .removeClass('active');
                        $(this).addClass('active');
                    }
                });
            };
            return HelpBubblesPlugin;
        }());
        Composer.HelpBubblesPlugin = HelpBubblesPlugin;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

/// <reference path='../../Typings/tsd.d.ts' />
/// <reference path='./IPlugin.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        var StickyAffixPlugin = (function () {
            function StickyAffixPlugin() {
            }
            StickyAffixPlugin.prototype.initialize = function (window, document) {
                $('[data-sticky-top]').each(function () {
                    var stickyOffset = $(this).data('sticky-top-offset');
                    stickyOffset = stickyOffset ? stickyOffset : 0;
                    $(this).affix({
                        offset: {
                            top: function (element) {
                                return $(element).parent().offset().top - stickyOffset;
                            }
                        }
                    });
                });
            };
            return StickyAffixPlugin;
        }());
        Composer.StickyAffixPlugin = StickyAffixPlugin;
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));

///<reference path='./IControllerActionContext.ts' />
var Orckestra;
(function (Orckestra) {
    var Composer;
    (function (Composer) {
        'use strict';
    })(Composer = Orckestra.Composer || (Orckestra.Composer = {}));
})(Orckestra || (Orckestra = {}));
