/// <reference path="./tsd.d.ts" />
declare module Orckestra.Composer {
    /**
     * A hook that allows a listener to unsubscribe from an event.
     */
    interface ISubscription {
        /**
         * Removes a listener from an event.
         */
        remove(): void;
    }
}

declare module Orckestra.Composer {
    /**
     * A listener that can subscribe to an event.
    */
    interface IListener {
        /**
         * Signature for a listener that is subscribed to an event.
        */
        (eventInformation: IEventInformation): void;
    }
}

declare module Orckestra.Composer {
    interface IListenerQueue {
        queue: IListener[];
    }
}

declare module Orckestra.Composer {
    /**
     * Information that an event publishes to its subscribers.
    */
    interface IEventInformation {
        /**
         * The data that an event is publishing to its subscribers.
        */
        data: any;
        /**
         * Source from which the data originates. (Optional)
         * @type {string}
         */
        source?: string;
    }
}

declare module Orckestra.Composer {
    interface IHashTable<T> {
        [key: string]: T;
    }
}

declare module Orckestra.Composer {
    /**
     * An event hub for subscribing to and publishing events.
    */
    interface IEventHub {
        /**
         * Subscribe to an event.
         *
         * @param eventName The name of the event to subscribe to.
         * @param listener The listener subscribing to the event.
        */
        subscribe(eventName: string, listener: IListener): ISubscription;
        /**
         * Publishes an event.
         *
         * @param eventName The name of the event to subscribe to.
         * @param eventInformation The information to provide all subscribers when the event is published.
        */
        publish(eventName: string, eventInformation: IEventInformation): void;
    }
}

declare module Orckestra.Composer {
    /**
     * An event hub for subscribing to and publishing events.
    */
    class EventHub implements Orckestra.Composer.IEventHub {
        private _events;
        private static _instance;
        static instance(): Orckestra.Composer.IEventHub;
        constructor();
        /**
         * Subscribe to an event.
         *
         * @param eventName The name of the event to subscribe to.
         * @param listener The listener subscribing to the event.
        */
        subscribe(eventName: string, listener: IListener): ISubscription;
        /**
         * Publishes an event.
         *
         * @param eventName The name of the event to subscribe to.
         * @param eventInformation The information to provide all subscribers when the event is published.
        */
        publish(eventName: string, eventInformation: IEventInformation): void;
    }
}

declare module Orckestra.Composer {
    interface IAnalyticsProduct {
        id?: string;
        name?: string;
        price?: number;
        brand?: string;
        category?: string;
        variant?: string;
        quantity?: number;
        position?: number;
        list?: string;
    }
}

declare module Orckestra.Composer {
    interface IAnalyticsSearchResults {
        ProductSearchResults?: any;
        keywordEntered?: string;
        keywordCorrected?: string;
    }
}

declare module Orckestra.Composer {
    interface IAnalyticsPlugin {
        productImpressions(products: IAnalyticsProduct[]): void;
        productClick(product: IAnalyticsProduct, listName: string): void;
        productDetailImpressions(products: IAnalyticsProduct[], listName: string): void;
        addToCart(product: IAnalyticsProduct, listName: string): void;
        removeFromCart(product: IAnalyticsProduct, listName: string): void;
        checkout(step: number, transaction: IAnalyticsTransaction, products: IAnalyticsProduct[]): void;
        checkoutOption(step: number): void;
        searchKeywordCorrection(searchResults: IAnalyticsSearchResults): void;
        noResultsFound(keywordNotFound: string): void;
        couponsUsed(order: IAnalyticsCoupon): void;
        purchase(order: IAnalyticsOrder, transaction: IAnalyticsTransaction, products: IAnalyticsProduct[]): void;
        sendEvent(eventName: string, category: string, action: string, label?: string, value?: number): void;
        userLoggedIn(type: string, source: string): void;
        userCreated(): void;
        recoverPassword(): void;
    }
}

declare module Orckestra.Composer {
    interface IAnalyticsCoupon {
        code?: string;
        discountAmount?: string;
        currencyCode?: string;
        promotionName?: string;
    }
}

declare module Orckestra.Composer {
    interface IAnalyticsOrder {
        id?: string;
        affiliation?: string;
        revenue?: string;
        tax?: string;
        shipping?: string;
        currencyCode?: string;
        coupon?: string;
    }
}

declare module Orckestra.Composer {
    interface IAnalyticsTransaction {
        shippingType?: string;
        checkoutOrigin?: string;
    }
}

declare module Orckestra.Composer {
    interface IAnalyticsSearchFilters {
        facetKey?: string;
        facetValue?: string;
        pageType?: string;
    }
}

declare module Orckestra.Composer {
    interface IPlugin {
        initialize(window: Window, document: HTMLDocument): void;
    }
}

declare module Orckestra.Composer {
    /**
     * Provides a mechanism for releasing any resources.
     */
    interface IDisposable {
        dispose(): void;
    }
}

declare module Orckestra.Composer {
    interface IController extends IDisposable {
        initialize(): void;
        dispose(): void;
    }
}

declare module Orckestra.Composer {
    interface IControllerContext {
        templateName: string;
        dataItemId: string;
        container: JQuery;
        viewModel: any;
        window: Window;
    }
}

declare module Orckestra.Composer {
    interface IRegisterActionOptions {
        actionName: string;
        actionDelegate: Function;
        overwrite?: boolean;
    }
}

declare module Orckestra.Composer {
    /**
    * All the contextual information required for an action to execute.
    */
    interface IControllerActionContext {
        /**
        * A DOM element requesting the action to execute.
        */
        elementContext: JQuery;
        /**
        * A DOM event that triggers the action to execute.
        */
        event: JQueryEventObject;
    }
}

declare module Orckestra.Composer {
    interface IComposerTemplates {
        Templates: IHashTable<Function>;
    }
}

declare module Orckestra.Composer {
    interface IParsleyJqueryPlugin extends JQuery {
        parsley(options?: any): any;
    }
}

declare module Orckestra.Composer {
    interface IParsley {
        isValid(group?: any, force?: boolean): boolean;
        validate(group?: any, force?: boolean): boolean;
        destroy(): void;
    }
}

declare module Orckestra.Composer {
    interface UIBusyParam {
        callback?: Function;
        elementContext?: JQuery;
        containerContext?: JQuery;
        loadingIndicatorSelector?: string;
        msDelay?: number;
    }
}

declare module Orckestra.Composer {
    class UIBusyHandle {
        protected loadingIndicatorContext: JQuery;
        protected containerContext: JQuery;
        protected timeoutHandle: any;
        constructor(loadingIndicatorContext: JQuery, containerContext: JQuery, msDelay: number);
        done(): void;
        private startBusy(msDelay);
        private endBusy();
    }
}

declare module Orckestra.Composer {
    interface IComposerContext {
        language: string;
    }
}

declare module Orckestra.Composer {
    interface IControllerConfiguration {
        name: string;
        controller: any;
    }
}

declare module Orckestra.Composer {
    interface IComposerConfiguration {
        plugins?: string[];
        paymentProvider?: {
            name: string;
            origin: string;
            profileId: string;
        };
        controllers: IControllerConfiguration[];
    }
}

declare module Orckestra.Composer {
    /**
    * Provides methods that respond to client-side requests.
    */
    class Controller implements IController {
        protected context: IControllerContext;
        protected eventHub: IEventHub;
        protected composerContext: IComposerContext;
        protected composerConfiguration: IComposerConfiguration;
        private _composerEventPostfix;
        private _defaultEventsToMonitor;
        private _unregister;
        protected eventsToMonitor: string[];
        constructor(context: IControllerContext, eventHub: IEventHub, composerContext: IComposerContext, composerConfiguration: IComposerConfiguration);
        static registerAction(classToRegisterActionOn: any, registerActionOptions: IRegisterActionOptions): void;
        initialize(): void;
        dispose(): void;
        asyncBusy(options?: UIBusyParam): UIBusyHandle;
        preventFormSubmit(context: IControllerActionContext): void;
        protected render(templateId: string, viewModel: any, parentSelector?: string): void;
        protected getRenderedTemplateContents(templateId: string, viewModel: any): string;
        protected registerFormsForValidation(context: JQuery, customOptions?: any): Orckestra.Composer.IParsley[];
        /**
         * Hide any messages from previous server validation
         * when the new form is used to prevent mixing up
         * client side validation message with server side
         * messages.
         *
         * @param formValidators all the parlsey forms to manage
         * @param serverValidationContainer the jQuery selector to find messages to empty
         */
        private hideServerValidationMessageOnClientValidation(formValidators, serverValidationContainer);
        private registerDomEvents();
        private unregisterDomEvents();
        private parseAction(e);
        private applyControllerAction(context, e);
        private applyControllerActions(context, e, controllerActions);
    }
}

declare module Orckestra.Composer {
    interface ISerializeObjectJqueryPlugin extends JQuery {
        serializeObject(): any;
    }
}

declare module Orckestra.Composer {
    /**
     * Localization Provider for accessing localized string
    */
    interface ILocalizationProvider {
        /**
         * Boostrap the localization.
         */
        initialize(composerContext: IComposerContext): Q.Promise<any>;
        /**
         * Get a  localized string
         *
         * @param categoryName The category used to bundle this localization
         * @param keyName The exact key to localize
         * @return the localizedString or null if none found
        */
        getLocalizedString(categoryName: string, keyName: string): string;
    }
}

declare module Orckestra.Composer {
    class LocalizationProvider implements Orckestra.Composer.ILocalizationProvider {
        private static _instance;
        private _localizationTree;
        private _composerContext;
        static instance(): Orckestra.Composer.ILocalizationProvider;
        constructor();
        /**
         * Boostrap the localization.
         *
         * This call is responsibly for refreshing all localization
         * to the current page culture
         */
        initialize(composerContext: IComposerContext): Q.Promise<any>;
        /**
         * Get a  localized string
         *
         * @param categoryName The category used to bundle this localization
         * @param keyName The exact key to localize
         * @return the localizedString or null if none found
        */
        getLocalizedString(categoryName: string, keyName: string): any;
        protected handleBarsHelper_localize(categoryName: string, keyName: string): any;
        protected handleBarsHelper_localizeFormat(categoryName: string, keyName: string, options: any[]): any;
        protected handleBarsHelper_isLocalized(categoryName: string, keyName: string): boolean;
        private stringFormat(format, options);
    }
}

declare module Orckestra.Composer {
    class ComposerClient {
        static get(url: string, data?: any): Q.Promise<any>;
        static post(url: string, data: any): Q.Promise<any>;
        static put(url: string, data: any): Q.Promise<any>;
        static remove(url: string, data: any): Q.Promise<any>;
        private static sendRequest(method, url, data?);
        private static getPageCulture();
        private static onRequestRejected(reason);
        private static getReloadUrl();
        private static doesUrlContainQueryString(url, value);
        private static getAjaxFailedErrorMessage();
        private static getUnauthorizedErrorMessage();
    }
}

declare module Orckestra.Composer {
    interface IMembershipRepository {
        /**
        * Attempt to Log In using Composer API.
        * @param
        */
        login(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Logout using Composer API.
        * @param
        */
        logout(returnUrl: string, preserveCustomerInfo: boolean): Q.Promise<any>;
        /**
        * Attempt to register using Composer API.
        * @param
        */
        register(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Attempt to trigger the forgot password email using Composer API.
        * @param
        */
        forgotPassword(formData: any): Q.Promise<any>;
        /**
        * Attempt to reset password for the Customer identified by the ticket using Composer API.
        * @param
        */
        resetPassword(formData: any, ticket: string, returnUrl: string): Q.Promise<any>;
        /**
        * Attempt to change the password for the connected Customer using Composer API.
        * @param
        */
        changePassword(formData: any, returnUrl: string): Q.Promise<any>;
        /**
         * If the current user is authenticated or not
         */
        isAuthenticated(): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class MembershipRepository implements IMembershipRepository {
        /**
        * Attempt to Log In using Composer API.
        * @param
        */
        login(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Logout using Composer API.
        * @param
        */
        logout(returnUrl?: string, preserveCustomerInfo?: boolean): Q.Promise<any>;
        /**
        * Attempt to register using Composer API.
        * @param
        */
        register(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Attempt to trigger the forgot password email using Composer API.
        * @param
        */
        forgotPassword(formData: any): Q.Promise<any>;
        /**
        * Attempt to reset password for the Customer identified by the ticket using Composer API.
        * @param
        */
        resetPassword(formData: any, ticket: string, returnUrl: string): Q.Promise<any>;
        /**
        * Attempt to change the password for the connected Customer using Composer API.
        * @param
        */
        changePassword(formData: any, returnUrl: string): Q.Promise<any>;
        /**
         * If the current user is authenticated or not
         */
        isAuthenticated(): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    interface IMembershipService {
        /**
        * Attempt to Log In using Composer API.
        * @param
        */
        login(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Logout using Composer API.
        * @param
        */
        logout(returnUrl: string, preserveCustomerInfo: boolean): Q.Promise<any>;
        /**
        * Attempt to register using Composer API.
        * @param
        */
        register(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Attempt to trigger the forgot password email using Composer API.
        * @param
        */
        forgotPassword(formData: any): Q.Promise<any>;
        /**
        * Attempt to reset password for the Customer identified by the ticket using Composer API.
        * @param
        */
        resetPassword(formData: any, ticket: string, returnUrl: string): Q.Promise<any>;
        /**
        * Attempt to change the password for the connected Customer using Composer API.
        * @param
        */
        changePassword(formData: any, returnUrl: string): Q.Promise<any>;
        /**
         * If the current user is authenticated or not
         */
        isAuthenticated(): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class MembershipService implements IMembershipService {
        protected memoizeIsAuthenticated: Function;
        protected membershipRepository: IMembershipRepository;
        constructor(membershipRepository: IMembershipRepository);
        /**
        * Attempt to Log In using Composer API.
        * @param
        */
        login(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Logout using Composer API.
        * @param
        */
        logout(returnUrl?: string, preserveCustomerInfo?: boolean): Q.Promise<any>;
        /**
        * Attempt to register using Composer API.
        * @param
        */
        register(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Attempt to trigger the forgot password email using Composer API.
        * @param
        */
        forgotPassword(formData: any): Q.Promise<any>;
        /**
        * Attempt to reset password for the Customer identified by the ticket using Composer API.
        * @param
        */
        resetPassword(formData: any, ticket: string, returnUrl: string): Q.Promise<any>;
        /**
        * Attempt to change the password for the connected Customer using Composer API.
        * @param
        */
        changePassword(formData: any, returnUrl: string): Q.Promise<any>;
        /**
         * If the current user is authenticated or not
         */
        isAuthenticated(): Q.Promise<any>;
        /**
         * If the current user is authenticated or not
         */
        protected isAuthenticatedImpl(): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    enum MyAccountEvents {
        AccountCreated = 0,
        AccountUpdated = 1,
        AddressCreated = 2,
        AddressUpdated = 3,
        AddressDeleted = 4,
        LoggedIn = 5,
        LoggedOut = 6,
        PasswordChanged = 7,
        ForgotPasswordInstructionSent = 8,
    }
}

declare module Orckestra.Composer {
    class AnalyticsPlugin implements IAnalyticsPlugin, IPlugin {
        protected cacheProvider: ICacheProvider;
        protected eventHub: IEventHub;
        protected useVariantIdWhenPossible: boolean;
        initialize(): void;
        static setCheckoutOrigin(checkoutOrigin: string): void;
        static getCheckoutOrigin(): string;
        /**
         * Binds all the events for Analytics
         */
        registerSubscriptions(): void;
        /**
         * Occurs when a user log in
         */
        protected onUserLoggedIn(eventInfo: IEventInformation): void;
        /**
         * Occurs when a user creates an account
         */
        protected onUserCreated(eventInfo: IEventInformation): void;
        /**
         * Occurs when a user log in
         */
        protected onRecoverPassword(eventInfo: IEventInformation): void;
        protected onSingleFacetChanged(eventInfo: IEventInformation): void;
        protected onMultiFacetChanged(eventInfo: IEventInformation): void;
        protected onSortingChanged(eventInfo: IEventInformation): void;
        /**
         * Occurs when a 404 page loads.
         */
        protected onPageNotFound(eventInfo: IEventInformation): void;
        /**
        * Occurs when a user click on 'Copy Share Url' button
        */
        protected onWishListCopingShareUrl(eventInfo: IEventInformation): void;
        /**
         * Occurs when a Line Item is being added to the Wish List.
         */
        protected onWishListLineItemAdding(eventInfo: IEventInformation): void;
        /**
         * Occurs when a Line Item is being added.
         */
        protected onLineItemAdding(eventInfo: IEventInformation): void;
        /**
         * Occurs when a Line item is being removed.
         */
        protected onLineItemRemoving(eventInfo: IEventInformation): void;
        /**
         * Occurs when a product Details is rendered.
         */
        protected onProductDetailsRendered(eventInfo: IEventInformation): void;
        /**
         *  Occurs when a Checkout Step is rendered.
         */
        protected onCheckoutStepRendered(eventInfo: IEventInformation): void;
        /**
         * Occurs when a the Checkout Navigation strip is rendered.
         */
        protected onCheckoutNavigationRendered(eventInfo: IEventInformation): void;
        /**
         * Occurs when a the Checkout completes, creating an order out of a Cart.
         */
        protected onCheckoutCompleted(eventInfo: IEventInformation): void;
        /**
         * Occurs when the Search results on a page are rendered.
         */
        protected onSearchResultRendered(eventInfo: IEventInformation): void;
        /**
         * Occurs when Related Products are loaded.
         */
        protected onRelatedProductsLoaded(eventInfo: IEventInformation): void;
        /**
         * Occurs when the user clicks on a product.
         */
        protected onProductClick(eventInfo: IEventInformation): void;
        /**
         * Occurs when no results were found for a search.
         */
        protected onNoResultsFound(eventInfo: IEventInformation): void;
        /**
         * Occurs when a search term has been auto corrected during a search.
         */
        protected onSearchTermCorrected(eventInfo: IEventInformation): void;
        protected buildVariantForLineItem(lineItem: any): string;
        protected buildVariantName(kvas: any[]): string;
        protected mapAnalyticProductsFromLineItems(data: any): IAnalyticsProduct[];
        protected mapAnalyticCouponsFromOrder(data: any): IAnalyticsCoupon[];
        protected mapAnalyticTransactionFromOrder(data: any): IAnalyticsTransaction;
        userLoggedIn(type: string, source: string): void;
        userCreated(): void;
        recoverPassword(): void;
        singleFacetChanged(searchFilters: IAnalyticsSearchFilters): void;
        multiFacetChanged(searchFilters: IAnalyticsSearchFilters): void;
        sortingChanged(sortingType: string, pageType: string): void;
        productImpressions(products: IAnalyticsProduct[]): void;
        productClick(product: IAnalyticsProduct, listName: string): void;
        productDetailImpressions(products: IAnalyticsProduct[], listName: string): void;
        addToCart(product: IAnalyticsProduct, listName: string): void;
        addToWishList(product: IAnalyticsProduct): void;
        removeFromCart(product: IAnalyticsProduct, listName: string): void;
        checkout(step: number, transaction: IAnalyticsTransaction, products: IAnalyticsProduct[]): void;
        checkoutOption(step: number): void;
        purchase(order: IAnalyticsOrder, transaction: IAnalyticsTransaction, products: IAnalyticsProduct[]): void;
        couponsUsed(order: IAnalyticsCoupon): void;
        shareWishList(data: any): void;
        searchKeywordCorrection(data: IAnalyticsSearchResults): void;
        noResultsFound(keywordNotFound: string): void;
        /**
         * Send a custom event to the analytics providers with multiples informations concerning the event
         * https://support.google.com/analytics/answer/1033068?hl=en
         * @param {string} eventName - The name of the custom event to send (e.g. productClick)
         * @param {string} category - The name that you supply as a way to group objects that you want to track (e.g. Product)
         * @param {string} action - The name the type of event or interaction you want to track for a particular web object (e.g. Click)
         * @param {string} label - Provide additional information for events that you want to track (e.g. Url of the clicked product)
         * @param {number} value - Use it to assign a numerical value to a tracked page object (e.g. Price of the product)
         */
        sendEvent(eventName: string, category: string, action: string, label?: string, value?: number): void;
        trimPrice(price: any): number;
        trimPriceAndUnlocalize(price: any): any;
        formatDate(date: any): string;
    }
}


declare var dataLayer: any;
declare var ga: any;
declare module Orckestra.Composer {
    class GoogleAnalyticsPlugin extends AnalyticsPlugin {
        initialize(): void;
        userLoggedIn(type: string, source: string): void;
        userCreated(): void;
        recoverPassword(): void;
        singleFacetChanged(searchFilters: IAnalyticsSearchFilters): void;
        multiFacetChanged(searchFilters: IAnalyticsSearchFilters): void;
        sortingChanged(sortingType: string, pageType: string): void;
        productImpressions(products: IAnalyticsProduct[]): void;
        productClick(products: IAnalyticsProduct[], listName: string): void;
        productDetailImpressions(products: IAnalyticsProduct[], listName: string): void;
        addToCart(product: IAnalyticsProduct, listName: string): void;
        addToWishList(product: IAnalyticsProduct): void;
        couponsUsed(coupon: IAnalyticsCoupon): void;
        shareWishList(data: any): void;
        removeFromCart(product: IAnalyticsProduct, listName: string): void;
        checkout(step: number, transaction: IAnalyticsTransaction, products: IAnalyticsProduct[]): void;
        checkoutOption(step: number): void;
        purchase(order: IAnalyticsOrder, transaction: IAnalyticsTransaction, products: IAnalyticsProduct[]): void;
        noResultsFound(keywordNotFound: string): void;
        searchKeywordCorrection(searchResults: IAnalyticsSearchResults): void;
        sendEvent(eventName: string, category: string, action: string, label?: string, value?: number): void;
        private getStepNumber(step);
    }
}

declare module Orckestra.Composer {
    class AddToCartNotificationController extends Controller {
        initialize(): void;
        private registerSubscriptions();
        displayNotification(e: IEventInformation): void;
        onClose(e: IControllerActionContext): void;
        private closeNotification();
    }
}

declare module Orckestra.Composer {
    /**
     * Represents a set of eviction and expiration details for a specific cache entry.
    */
    interface ICachePolicy {
        /**
         * The number of milliseconds since 1970/01/01 corresponding to the time when the cache entry should expire.
         */
        absoluteExpiration?: number;
        /**
         * Represents the seconds since the last cache access after which the cache entry should expire.
         */
        slidingExpiration?: number;
    }
}

declare module Orckestra.Composer {
    /**
     * Represents an object cache and provides services for accessing the cache.
    */
    interface ICache {
        /**
         * If an entry with the given key is found, the promise will be fulfilled with the cached value.
         * If an entry with the given key is found but the value is null, the promise will be rejected.
         * If an entry with the given key is not found, the promise will be rejected.
         * If the entry is expired, the promise will be rejected.
         */
        get<T>(key: string): Q.Promise<T>;
        /**
         * This will handle adding and editing a cache entry, which will never expire.
         * On success, the promise will be fulfilled with the newly cached value.
         */
        set<T>(key: string, value: T): Q.Promise<T>;
        /**
         * This will handle adding and editing an entry in the cache.
         * The entry will expire according to the given policy.
         * On success, the promise will be fulfilled with the newly cached value.
         */
        set<T>(key: string, value: T, policy: ICachePolicy): Q.Promise<T>;
        /**
         * Clear the cache for the specified key
         * On success, the promise will return void
         */
        clear(key: string): Q.Promise<void>;
        /**
         * Clear the cache for the specified type
         * On success, the promise will return void
         */
        fullClear(): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    interface ICacheProvider {
        defaultCache: ICache;
        customCache: ICache;
        localStorage: Storage;
        sessionStorage: Storage;
    }
}

declare module Orckestra.Composer {
    /**
     * Defines a storage engine API capable of performing all the basic CRUD operations.
     * The API operates on Javascript objects, and all objects are stored according to their defined type.
     *
     * This API has been designed in such a way that the underlying storage engine could be any of those offered by popular browsers,
     * such as LocalStorage, SessionStorage, and IndexedDB
    */
    interface IStorage {
        /**
         * The client must call this to initialize the storage engine before using it.
         * If the storage engine initializes successfully, the promise will be fulfilled.
         * The promise will be rejected if the storage engine cannot be used.
         * It should be possible to call this method multiple times, and the same result will be returned each time.
         */
        init(): Q.Promise<void>;
        /**
         * The client must call this to initialize the object store associated with a specific object type.
         * If the storage engine supports the object type, the promise will be fulfilled.
         * The promise will be rejected if the object type cannot be stored.
         * It should be possible to call this method multiple times, and the same result will be returned each time.
         */
        initObjectStore(type: string): Q.Promise<void>;
        /**
         * If an object with a specific id for a specific type is found, the promise will be fulfilled with that object.
         * If no object is found, the promise will be fulfilled with a null object.
         */
        get<T>(type: string, id: string): Q.Promise<T>;
        /**
         * This will remove an object with a specific id for a specific type.
         * If no object is found, the promise will be fulfilled.
         * If an object is found and removed, the promise will be fulfilled.
         */
        remove(type: string, id: string): Q.Promise<void>;
        /**
         * This will remove the specific type
         * If no type is found, the promise will be fulfilled.
         * If a type is found and removed, the promise will be fulfilled.
         */
        fullRemove(type: string): Q.Promise<void>;
        /**
         * This will handle adding and updating objects of a specific type.
         * On success, the promise will be fulfilled.
         */
        set<T>(type: string, item: IStorageItem<T>): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    interface IStorageItem<T> {
        /**
         * The unique identifier of the object stored or to be stored.
         */
        id: string;
        /**
         * The object stored or to be stored.
         */
        value: T;
    }
}

declare module Orckestra.Composer {
    enum CacheError {
        NotFound = 0,
        Expired = 1,
    }
}

declare module Orckestra.Composer {
    interface ICacheItem<T> {
        /**
         * Represents the value to be cached.
         */
        value: T;
        /**
         * Represents a set of eviction and expiration details for a specific cache entry.
         */
        policy: ICachePolicy;
        /**
         * The number of milliseconds since 1970/01/01 corresponding to the time the cache item was last accessed.
         */
        lastAccessed: number;
    }
}

declare module Orckestra.Composer {
    /**
     * This cache uses a client-side storage engine to provide object caching
     */
    class StorageBasedCache implements Orckestra.Composer.ICache {
        private _storageInitializing;
        private _storage;
        private _type;
        constructor(storage: IStorage, type: string);
        get<T>(key: string): Q.Promise<T>;
        private validate<T>(key, item);
        private isExpired<T>(item);
        set<T>(key: string, value: T, policy?: ICachePolicy, type?: string): Q.Promise<T>;
        clear(key: string): Q.Promise<void>;
        fullClear(): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    class BackingStorage implements Orckestra.Composer.IStorage {
        private _storage;
        private _isInitialized;
        private _initializedObjectStores;
        constructor(_storage: Storage);
        init(): Q.Promise<void>;
        initObjectStore(type: string): Q.Promise<void>;
        private initObjectStoreImpl(type);
        get<T>(type: string, id: string): Q.Promise<T>;
        private getImpl<T>(type, id);
        remove(type: string, id: string): Q.Promise<void>;
        fullRemove(type: string): Q.Promise<void>;
        private removeImpl(type, id);
        private fullRemoveImpl(type);
        set<T>(type: string, item: IStorageItem<T>): Q.Promise<void>;
        private setImpl<T>(type, item);
        private getObjectStore(type);
        private setObjectStore(type, objectStore);
    }
}

declare module Orckestra.Composer {
    enum StorageType {
        localStorage = 0,
        sessionStorage = 1,
    }
}

declare module Orckestra.Composer {
    class StoragePolyfill {
        static create(windowHandle: Window, storageType: StorageType): Storage;
    }
}

declare module Orckestra.Composer {
    var StorageFactory: {
        create: (storageType: StorageType, window: Window) => Storage;
    };
}

declare module Orckestra.Composer {
    class CacheProvider implements ICacheProvider {
        private static defaultCacheKey;
        private static customCacheKey;
        private static _instance;
        window: Window;
        defaultCache: ICache;
        customCache: ICache;
        localStorage: Storage;
        sessionStorage: Storage;
        static instance(): Orckestra.Composer.ICacheProvider;
        constructor();
        getCache(cacheKey: string): StorageBasedCache;
        getDefaultCache(): ICache;
        getCustomCache(): ICache;
        private getLocalStorage();
        private getSessionStorage();
    }
}

declare module Orckestra.Composer {
    /**
     * Separates the logic that retrieves the data and maps it to the entity model from the application services that acts on the model.
    */
    interface ICartRepository {
        /**
         * Get the cart of the current customer.
         */
        getCart(): Q.Promise<any>;
        /**
         * Add a line item to the cart of the current customer.
         */
        addLineItem(productId: string, variantId: string, quantity: number, recurringOrderFrequencyName?: string, recurringOrderProgramName?: string): Q.Promise<any>;
        /**
         * Update the quantity of a line item in the cart of the current customer.
         */
        updateLineItem(lineItemId: string, quantity: number, recurringOrderFrequencyName?: string, recurringOrderProgramName?: string): Q.Promise<any>;
        /**
         * Delete a line item from the cart of the current customer.
         */
        deleteLineItem(lineItemId: string): Q.Promise<any>;
        /**
         * Update the postal code of the billing method in cart of the current customer.
         */
        updateBillingMethodPostalCode(postalCode: string): Q.Promise<any>;
        /**
         * Update the postal code of the shipping method in cart of the current customer.
         */
        updateShippingMethodPostalCode(postalCode: string): Q.Promise<any>;
        /**
         * Set the cheapest shipping method in cart of the current customer.
         */
        setCheapestShippingMethod(): Q.Promise<any>;
        /**
         * Add a coupon to the cart of the current customer.
         */
        addCoupon(couponCode: string): Q.Promise<any>;
        /**
         * Remove a coupon from the cart of the current customer.
         */
        removeCoupon(couponCode: string): Q.Promise<any>;
        /**
         * Cleans the cart of invalid line items.
         */
        clean(): Q.Promise<any>;
        /**
         * Update the cart of the current customer.
         */
        updateCart(param: any): Q.Promise<IUpdateCartResult>;
        /**
         * Complete the checkout, thereby clearing every item in the cart of the current customer.
         */
        completeCheckout(currentStep: number): Q.Promise<ICompleteCheckoutResult>;
    }
    interface IUpdateCartResult {
        HasErrors: boolean;
        NextStepUrl: string;
        Cart: any;
    }
    interface ICompleteCheckoutResult {
        OrderNumber: string;
        CustomerEmail: string;
        NextStepUrl: string;
    }
}

declare module Orckestra.Composer {
    class CartRepository implements ICartRepository {
        getCart(): Q.Promise<any>;
        addLineItem(productId: string, variantId: string, quantity: number, recurringOrderFrequencyName?: string, recurringOrderProgramName?: string): Q.Promise<any>;
        updateLineItem(lineItemId: string, quantity: number, recurringOrderFrequencyName?: string, recurringOrderProgramName?: string): Q.Promise<any>;
        deleteLineItem(lineItemId: string): Q.Promise<any>;
        updateBillingMethodPostalCode(postalCode: string): Q.Promise<any>;
        updateShippingMethodPostalCode(postalCode: string): Q.Promise<any>;
        setCheapestShippingMethod(): Q.Promise<any>;
        addCoupon(couponCode: string): Q.Promise<any>;
        removeCoupon(couponCode: string): Q.Promise<any>;
        clean(): Q.Promise<any>;
        updateCart(param: any): Q.Promise<IUpdateCartResult>;
        completeCheckout(currentStep: number): Q.Promise<ICompleteCheckoutResult>;
    }
}

declare module Orckestra.Composer {
    /**
     * Separates the logic that retrieves the data and maps it to the entity model from the application services that acts on the model.
    */
    interface ICartService {
        /**
         * Get the cart of the current customer.
         */
        getCart(): Q.Promise<any>;
        /**
        * Get the cart of the current customer.
        * This forces the repository to get a fresh cart from Composer,
        * because the cart will contain different property values for each checkout step.
        */
        getFreshCart(): Q.Promise<any>;
        /**
         * Add a line item to the cart of the current customer.
         */
        addLineItem(productId: string, price: string, variantId: string, quantity: number, recurringOrderFrequencyName?: string, recurringOrderProgramName?: string): Q.Promise<any>;
        /**
         * Update the quantity of a line item in the cart of the current customer.
         */
        updateLineItem(lineItemId: string, quantity: number, productId: string, recurringOrderFrequencyName?: string, recurringOrderProgramName?: string): Q.Promise<any>;
        /**
         * Delete a line item from the cart of the current customer.
         */
        deleteLineItem(lineItemId: string, productId: string): Q.Promise<any>;
        /**
         * Update the postal code of the billing method in cart of the current customer.
         */
        updateBillingMethodPostalCode(postalCode: string): Q.Promise<void>;
        /**
         * Update the postal code of the shipping method in cart of the current customer.
         */
        updateShippingMethodPostalCode(postalCode: string): Q.Promise<void>;
        /**
         * Set the cheapest shipping method in cart of the current customer.
         */
        setCheapestShippingMethod(): Q.Promise<void>;
        /**
         * Add a coupon to the cart of the current customer.
         */
        addCoupon(couponCode: string): Q.Promise<void>;
        /**
         * Remove a coupon from the cart of the current customer.
         */
        removeCoupon(couponCode: string): Q.Promise<void>;
        /**
         * Cleans the cart of invalid line items.
         */
        clean(): Q.Promise<void>;
        /**
         * Update the cart of the current customer.
         */
        updateCart(param: any): Q.Promise<IUpdateCartResult>;
        /**
         * Complete the checkout, thereby clearing every item in the cart of the current customer.
         */
        completeCheckout(currentStep: number): Q.Promise<ICompleteCheckoutResult>;
        /**
         * Clear the Cart cache
         */
        invalidateCache(): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    class CartService implements ICartService {
        private static GettingFreshCart;
        private cacheKey;
        private cachePolicy;
        private cacheProvider;
        private cartRepository;
        private eventHub;
        constructor(cartRepository: ICartRepository, eventHub: IEventHub);
        getCart(): Q.Promise<any>;
        private canHandle(reason);
        getFreshCart(): Q.Promise<any>;
        addLineItem(productId: string, price: string, variantId?: string, quantity?: number, recurringOrderFrequencyName?: string, recurringOrderProgramName?: string): Q.Promise<any>;
        updateLineItem(lineItemId: string, quantity: number, productId: string, recurringOrderFrequencyName?: string, recurringOrderProgramName?: string): Q.Promise<any>;
        deleteLineItem(lineItemId: string, productId: string): Q.Promise<any>;
        updateBillingMethodPostalCode(postalCode: string): Q.Promise<any>;
        updateShippingMethodPostalCode(postalCode: string): Q.Promise<any>;
        setCheapestShippingMethod(): Q.Promise<any>;
        addCoupon(couponCode: string): Q.Promise<any>;
        removeCoupon(couponCode: string): Q.Promise<any>;
        clean(): Q.Promise<any>;
        updateCart(param: any): Q.Promise<IUpdateCartResult>;
        completeCheckout(currentStep: number): Q.Promise<ICompleteCheckoutResult>;
        invalidateCache(): Q.Promise<void>;
        protected getCacheCart(): Q.Promise<any>;
        protected setCartToCache(cart: any): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    interface IError {
        ErrorCode: string;
        LocalizedErrorMessage: string;
    }
}

declare module Orckestra.Composer {
    interface IErrorCollection {
        Errors: IError[];
    }
}

declare module Orckestra.Composer {
    interface IErrorHandler {
        /**
         * Will output the error to the user.
         * @param {IError} error Error to display.
         */
        outputError(error: IError): void;
        /**
         * Will localize an error based on its code and will display it
         * to the user.
         * @param {string} errorCode Error code to localize.
         */
        outputErrorFromCode(errorCode: string): void;
        /**
         * Removes all errors from the current page.
         */
        removeErrors(): void;
    }
}

declare module Orckestra.Composer {
    class ErrorHandler implements IErrorHandler {
        static instance(): IErrorHandler;
        /**
         * Will output the error to the user.
         * @param {IError} error Error to display.
         */
        outputError(error: IError): void;
        /**
         * Will localize an error based on its code and will display it
         * to the user.
         * @param {string} errorCode Error code to localize.
         */
        outputErrorFromCode(errorCode: string): void;
        protected createErrorFromCode(errorCode: string): IError;
        /**
         * Removes all errors from the current page.
         */
        removeErrors(): void;
        protected publishGenericErrorEvent(error?: IError): void;
        protected createErrorCollection(error?: IError): IErrorCollection;
    }
}

declare module Orckestra.Composer {
    class FullCartController extends Orckestra.Composer.Controller {
        protected source: string;
        private debounceUpdateLineItem;
        private loaded;
        private cartService;
        initialize(): void;
        private registerSubscriptions();
        protected onCartUpdated(cart: any): void;
        private loadCart();
        protected loadCartFailed(reason: any): void;
        updateLineItem(actionContext: IControllerActionContext): void;
        protected executeLineItemUpdate(args: any): void;
        protected isUpdateRequired(updateLineItemArgs: any, lineItem: any): boolean;
        protected lineItemUpdateFailed(context: JQuery, reason: any): void;
        protected getLineItemDataForAnalytics(lineItem: any, quantity: number): any;
        updateQuantity(action: string, quantity: number): number;
        deleteLineItem(actionContext: IControllerActionContext): void;
        protected onLineItemDeleteFailed(context: JQuery, reason: any): void;
        protected buildVariantName(kvas: any[]): string;
    }
}

declare module Orckestra.Composer {
    class ShippingMethodService {
        /**
        * Return a Promise which returns the ShippingMethods available for the cart.
        */
        getShippingMethods(): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    interface IBaseCheckoutController extends IController {
        viewModelName: string;
        unregisterController(): any;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
        getValidationPromise(): Q.Promise<boolean>;
        getUpdateModelPromise(): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    interface IRegionService {
        /**
         * Return a Promise which returns an array of region.
         */
        getRegions(): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class RegionService implements IRegionService {
        private _memoizeGetRegions;
        getRegions(): Q.Promise<any>;
        private getRegionsImpl();
    }
}

declare module Orckestra.Composer {
    interface ICheckoutService {
        registerController(controller: IController): any;
        unregisterController(controllerName: string): any;
        getCart(): Q.Promise<any>;
        updateCart(): Q.Promise<IUpdateCartResult>;
        completeCheckout(): Q.Promise<ICompleteCheckoutResult>;
        updatePostalCode(postalCode: string): Q.Promise<void>;
        invalidateCache(): Q.Promise<void>;
        setOrderConfirmationToCache(orderConfirmationviewModel: any): void;
        getOrderConfirmationFromCache(): Q.Promise<any>;
        clearOrderConfirmationFromCache(): void;
        setOrderToCache(orderConfirmationviewModel: any): void;
    }
}

declare module Orckestra.Composer {
    interface ICheckoutContext {
        authenticationViewModel: IAuthenticationViewModel;
        cartViewModel: any;
        regionsViewModel: any;
        shippingMethodsViewModel: any;
    }
    interface IAuthenticationViewModel {
        IsAuthenticated: boolean;
    }
    interface ICartViewModel {
        IsAuthenticated: boolean;
    }
}

declare module Orckestra.Composer {
    interface IValidationCallback {
        (): Q.Promise<boolean>;
    }
    interface IUpdateCallback {
        (): Q.Promise<any>;
    }
    interface IRegisterOptions {
        validationCallback: Function;
        updateCallback: Function;
    }
    interface IRegisterControlOptions extends IRegisterOptions {
        isReady: boolean;
    }
}

declare module Orckestra.Composer {
    class CheckoutService implements ICheckoutService {
        private static instance;
        static checkoutStep: number;
        private orderConfirmationCacheKey;
        private orderCacheKey;
        private window;
        private eventHub;
        private registeredControllers;
        private allControllersReady;
        private cacheProvider;
        protected cartService: ICartService;
        protected membershipService: IMembershipService;
        protected regionService: IRegionService;
        protected shippingMethodService: ShippingMethodService;
        static getInstance(): ICheckoutService;
        constructor();
        protected registerAllControllersInitialized(): void;
        private initialize();
        registerController(controller: IBaseCheckoutController): void;
        unregisterController(controllerName: string): void;
        renderControllers(checkoutContext: ICheckoutContext): Q.Promise<void[]>;
        updatePostalCode(postalCode: string): Q.Promise<void>;
        invalidateCache(): Q.Promise<void>;
        getCart(): Q.Promise<any>;
        updateCart(): Q.Promise<IUpdateCartResult>;
        completeCheckout(): Q.Promise<ICompleteCheckoutResult>;
        private buildCartUpdateViewModel(vm);
        private getCartValidation(vm);
        private getCartUpdateViewModel(vm);
        private collectValidationPromises();
        private collectUpdateModelPromises();
        private handleCheckoutSecurity(cart, targetedStep);
        private handleError(reason);
        setOrderConfirmationToCache(orderConfirmationviewModel: any): void;
        getOrderConfirmationFromCache(): Q.Promise<any>;
        clearOrderConfirmationFromCache(): void;
        setOrderToCache(orderConfirmationviewModel: any): void;
    }
}

declare module Orckestra.Composer {
    class BaseCheckoutController extends Orckestra.Composer.Controller implements Orckestra.Composer.IBaseCheckoutController {
        protected debounceHandle: any;
        protected debounceTimeout: number;
        protected formInstances: IParsley[];
        protected checkoutService: ICheckoutService;
        viewModelName: string;
        initialize(): void;
        protected registerController(): void;
        unregisterController(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<any>;
        getValidationPromise(): Q.Promise<boolean>;
        getUpdateModelPromise(): Q.Promise<any>;
        protected registerSubscriptions(): void;
        protected getViewModelUpdated(): string;
        protected isValidForUpdate(): boolean;
        protected onRenderDataFailed(reason: any): void;
        protected removeLoading(): void;
    }
}

declare module Orckestra.Composer {
    class BillingAddressCheckoutController extends Orckestra.Composer.BaseCheckoutController {
        initialize(): void;
        changeUseShippingAddress(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
        protected renderAuthenticated(checkoutContext: ICheckoutContext): void;
        protected renderUnauthenticated(checkoutContext: ICheckoutContext): void;
        protected registerSubscriptions(): void;
        protected renderDataFailed(reason: any): void;
        private getRegionCode(cart);
        private onRendered();
        private useShippingAddress();
        private onPostalCodeChanged(useShippingAddress, cart);
        private getVisibleForms();
        private setBillingAddressFormVisibility();
        private setBillingAddressFormValidation();
        private isBillingAddressFormValidationEnabled();
        private disableBillingAddressFormValidation();
        private isBillingAddressFormInstance(formInstance);
        private enableBillingAddressFormValidation();
    }
}

declare module Orckestra.Composer {
    interface ICustomerRepository {
        /**
        * Attempt to register using Composer API.
        * @param
        */
        updateAccount(formData: any, returnUrl: string): Q.Promise<any>;
        /**
         * Get the customer addresses.
         */
        getAddresses(): Q.Promise<any>;
        /**
        * Create a new customer address
        * @param
        */
        createAddress(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Update a customer address
        * @param
        */
        updateAddress(formData: any, addressId: string, returnUrl: string): Q.Promise<any>;
        /**
        * Delete a customer address
        * @param
        */
        deleteAddress(addressId: JQuery, returnUrl: string): Q.Promise<any>;
        /**
        * Set default address for a customer
        * @param
        */
        setDefaultAddress(addressId: string, returnUrl: string): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class CustomerRepository implements ICustomerRepository {
        /**
        * Attempt to register using Composer API.
        * @param
        */
        updateAccount(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Get the customer addresses.
        */
        getAddresses(): Q.Promise<any>;
        /**
        * Create a new customer address
        * @param
        */
        createAddress(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Update a customer address
        * @param
        */
        updateAddress(formData: any, addressId: string, returnUrl: string): Q.Promise<any>;
        /**
        * Delete a customer address
        * @param
        */
        deleteAddress(addressId: JQuery, returnUrl: string): Q.Promise<any>;
        /**
        * Set default address for a customer
        * @param
        */
        setDefaultAddress(addressId: string, returnUrl: string): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    interface ICustomerService {
        /**
        * Attempt to register using Composer API.
        * @param
        */
        updateAccount(formData: any, returnUrl: string): Q.Promise<any>;
        /**
         * Get the customer addresses.
         */
        getAddresses(): Q.Promise<any>;
        /**
        * Create a new customer address
        * @param
        */
        createAddress(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Update a customer address
        * @param
        */
        updateAddress(formData: any, addressId: string, returnUrl: string): Q.Promise<any>;
        /**
        * Delete a customer address
        * @param
        */
        deleteAddress(addressId: JQuery, returnUrl: string): Q.Promise<any>;
        /**
        * Set default address for a customer
        * @param
        */
        setDefaultAddress(addressId: string, returnUrl: string): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class CustomerService implements ICustomerService {
        private memoizeGetAdresses;
        protected customerRepository: ICustomerRepository;
        constructor(customerRepository: ICustomerRepository);
        /**
        * Attempt to register using Composer API.
        * @param
        */
        updateAccount(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Get the customer addresses.
        */
        getAddresses(): Q.Promise<any>;
        private getAddressesImpl();
        /**
        * Create a new customer address
        * @param
        */
        createAddress(formData: any, returnUrl: string): Q.Promise<any>;
        /**
        * Update a customer address
        * @param
        */
        updateAddress(formData: any, addressId: string, returnUrl: string): Q.Promise<any>;
        /**
        * Delete a customer address
        * @param
        */
        deleteAddress(addressId: JQuery, returnUrl: string): Q.Promise<any>;
        /**
        * Set default address for a customer
        * @param
        */
        setDefaultAddress(addressId: string, returnUrl: string): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    enum MyAccountStatus {
        Success = 0,
        InvalidTicket = 1,
        DuplicateEmail = 2,
        DuplicateUserName = 3,
        InvalidQuestion = 4,
        InvalidPassword = 5,
        InvalidPasswordAnswer = 6,
        InvalidEmail = 7,
        Failed = 8,
        UserRejected = 9,
        RequiresApproval = 10,
        AjaxFailed = 11,
    }
}

interface AddressDto {
    Id: string;
    IsPreferredShipping: boolean;
    IsPreferredBilling: boolean;
}

declare module Orckestra.Composer {
    class BillingAddressRegisteredCheckoutService {
        protected customerService: ICustomerService;
        constructor(customerService: ICustomerService);
        /**
        * Get the customer addresses. The selected billing address is taken from the cart by default.
        * If no address has been set in the cart, the selected billing address corresponds to the preferred address.
        */
        getBillingAddresses(cart: any): Q.Promise<any>;
        getSelectedBillingAddressId(cart: any, addressList: any): string;
        private isBillingAddressFromCartValid(cart, addressList);
        private getPreferredBillingAddressId(addressList);
    }
}

declare module Orckestra.Composer {
    class UIModal {
        private modalContext;
        private confirmDeferred;
        private confirmAction;
        private window;
        private sender;
        private modalContextSelector;
        constructor(window: Window, modalContextSelector: string, confirmAction: any, sender: any);
        private registerDomEvents();
        private unregisterDomEvents();
        openModal: (event: JQueryEventObject) => void;
        confirmModal(): void;
        cancelModal(): void;
        dispose(): void;
    }
}

declare module Orckestra.Composer {
    class BillingAddressRegisteredCheckoutController extends Orckestra.Composer.BaseCheckoutController {
        protected debounceChangeBillingMethod: Function;
        protected modalElementSelector: string;
        private uiModal;
        protected customerService: ICustomerService;
        protected billingAddressRegisteredCheckoutService: BillingAddressRegisteredCheckoutService;
        initialize(): void;
        protected registerSubscriptions(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
        protected renderUnauthenticated(checkoutContext: ICheckoutContext): void;
        protected renderAuthenticated(checkoutContext: ICheckoutContext): Q.Promise<any>;
        protected onRendered(e: IEventInformation): void;
        protected setSelectedBillingAddress(): void;
        changeBillingAddress(actionContext: IControllerActionContext): void;
        protected changeBillingAddressImpl(): void;
        /**
         * Requires the element in action context to have a data-address-id.
         */
        protected deleteAddress(event: JQueryEventObject): Q.Promise<void>;
        deleteAddressConfirm(actionContext: IControllerActionContext): void;
        private onAddressDeleted(e);
        private useShippingAddress();
        private getVisibleForms();
        changeUseShippingAddress(): void;
        private setBillingAddressFormVisibility();
        private setBillingAddressFormValidation();
        private isBillingAddressFormValidationEnabled();
        private disableBillingAddressFormValidation();
        private isBillingAddressFormInstance(formInstance);
        private enableBillingAddressFormValidation();
        private renderFailedForm(status);
        protected handleError(reason: any): void;
    }
}

declare module Orckestra.Composer {
    class CheckoutNavigationController extends Orckestra.Composer.Controller {
        protected currentStep: any;
        protected viewModelName: string;
        protected checkoutService: ICheckoutService;
        initialize(): void;
        renderData(): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    /**
     * Signature for error handler of the checkout get cart promise.
     */
    interface ICheckoutGetCartPromiseFailureHandler {
        (error: any): void;
    }
}

declare module Orckestra.Composer {
    /**
     * @param {number} targetedStep The current checkout step.
     * @param {ICheckoutGetCartPromiseFailureHandler} failureHandler Handles failure of the AJAX request. This handler will only
     * @param {boolean} forceGet If true, forces the get of a new promise instead of the cached one.
     *                          be called if this is the first call.
     */
    interface ICheckoutGetCartPromiseParam {
        targetedStep: number;
        forceGet?: boolean;
    }
}

declare module Orckestra.Composer {
    interface IGetPaymentMethodsOptions {
        Providers: string[];
    }
}

declare module Orckestra.Composer {
    interface IUpdatePaymentOptions {
        PaymentId: string;
        PaymentProviderName: string;
        PaymentMethodId: string;
    }
}

declare module Orckestra.Composer {
    class PaymentProvider {
        protected window: Window;
        protected eventHub: IEventHub;
        protected _currentPaymentMethod: IUpdatePaymentOptions;
        getCurrentPaymentMethod(): IUpdatePaymentOptions;
        constructor(window: Window, eventHub: IEventHub);
        /**
        * Return a Promise which returns an array of Payment Methods.
        */
        getPaymentMethods(getPaymentMethodOptions: IGetPaymentMethodsOptions): Q.Promise<any>;
        updatePaymentMethod(request: IUpdatePaymentOptions): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class CheckoutCompleteController extends Orckestra.Composer.BaseCheckoutController {
        initialize(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    class GuestCustomerInfoCheckoutController extends Orckestra.Composer.BaseCheckoutController {
        initialize(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
        protected renderAuthenticated(checkoutContext: ICheckoutContext): void;
        protected renderUnauthenticated(checkoutContext: ICheckoutContext): void;
    }
}

declare module Orckestra.Composer {
    class CheckoutOrderConfirmationController extends Orckestra.Composer.Controller {
        private cacheProvider;
        private orderConfirmationCacheKey;
        private orderCacheKey;
        initialize(): void;
    }
}

declare module Orckestra.Composer {
    class CheckoutOrderSummaryController extends Orckestra.Composer.BaseCheckoutController {
        initialize(): void;
        protected registerSubscriptions(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
        private reRender();
        private renderLoading();
        /**
         *  Update the cart.
         *  If errors are returned, it stay in the same page.
         *  If there is no errors it moves to the next step.
         */
        nextStep(actionContext: IControllerActionContext): void;
    }
}

declare module Orckestra.Composer {
    class CompleteCheckoutOrderSummaryController extends Orckestra.Composer.BaseCheckoutController {
        initialize(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
        /**
        *  complete Checkout
        *  If errors are returned, it stays in the same page.
        *  If there is no errors it moves to the next step.
        */
        nextStep(actionContext: IControllerActionContext): void;
        protected registerSubscriptions(): void;
        private renderLoading();
        private reRender();
    }
}

declare module Orckestra.Composer {
    interface IPaymentService {
        /**
         * Return a list of saved payment methods for a specified array of payment provider names
         * @param  {providers: Array<string>}       Array of provider names.
         * @return {Array<IPaymentMethodViewModel>} Instance of the provider.
         */
        getPaymentMethods(providers: Array<string>): Q.Promise<IPaymentViewModel>;
        /**
         * Return the active payment for the active cart
         * @return {IActivePaymentViewModel} Active payment for the active cart.
         */
        getActivePayment(): Q.Promise<IActivePaymentViewModel>;
        removePaymentMethod(paymentMethodId: string, paymentProviderName: string): Q.Promise<void>;
        setPaymentMethod(request: any): Q.Promise<IPaymentViewModel>;
    }
}

declare module Orckestra.Composer {
    interface IActivePaymentViewModel {
        Id: string;
        PaymentMethodType: string;
        ShouldCapturePayment: boolean;
        CapturePaymentUrl: string;
        PaymentStatus: string;
        ProviderType: string;
        ProviderName: string;
        CanSavePaymentMethod: boolean;
    }
}

declare module Orckestra.Composer {
    class BaseCheckoutPaymentProvider implements Orckestra.Composer.IDisposable {
        protected _providerType: string;
        protected _providerName: string;
        protected _eventHub: IEventHub;
        /**
         * This property is injected for unit test purposes
         */
        private _window;
        constructor(window: Window, eventHub: IEventHub, providerType: string, providerName: string);
        /**
         * Obtains the underlying type of the Payment Provider.
         * @return {string} Type of the Payment Provider.
         */
        providerType: string;
        /**
         * Obtains the name of the Payment Provider.
         * @return {string} Name of the Payment provider.
         */
        providerName: string;
        protected window: Window;
        /**
         * Method called to get a promise for payment validation.
         * Returns a promise of boolean. The return boolean needs to be false for validation error,
         * or true if valid.
         * @return {Q.Promise<boolean>} Promise that will be executed when we validate the payment control.
         */
        validatePayment(activePaymentVM: IActivePaymentViewModel): Q.Promise<boolean>;
        /**
         * Method called to get a promise when payment will submit.
         * @return {Q.Promise<any>} Promise that will be executed when to cart is about the be updated.
         */
        submitPayment(activePaymentVM: IActivePaymentViewModel): Q.Promise<any>;
        /**
         * Gets the container for the Payment Provider.
         * @return {JQuery} jQuery object.
         */
        protected getForm(): JQuery;
        dispose(): void;
    }
}

declare module Orckestra.Composer {
    interface IPaymentMethodViewModel {
        Id: string;
        PaymentProviderName: string;
        DisplayName: string;
        IsSelected: boolean;
        JsonContext: any;
        PaymentType: string;
        Default: boolean;
        IsValid: boolean;
    }
}

declare module Orckestra.Composer {
    interface IPaymentRepository {
        /**
         * Return a list of saved payment methods for a specified array of payment provider names
         * @param  {providers: Array<string>}       Array of provider names.
         * @return {Array<IPaymentMethodViewModel>} Instance of the provider.
         */
        getPaymentMethods(providers: Array<string>): Q.Promise<IPaymentViewModel>;
        /**
         * Return the active payment for the active cart
         * @return {IActivePaymentViewModel} Active payment for the active cart.
         */
        getActivePayment(): Q.Promise<IActivePaymentViewModel>;
        removePaymentMethod(paymentMethodId: string, paymentProviderName: string): Q.Promise<void>;
        setPaymentMethod(request: any): Q.Promise<IPaymentViewModel>;
    }
}

declare module Orckestra.Composer {
    class PaymentService implements IPaymentService {
        private eventHub;
        private paymentRepository;
        constructor(eventHub: IEventHub, paymentRepository: IPaymentRepository);
        /**
         * Return a list of acceptable payment providers details with labels
         * @param  {providers: Array<string>}      Array of provider names.
         * @return {Array<IPaymentMethodViewModel} List of payment provider details
         */
        getPaymentMethods(providers: Array<string>): Q.Promise<IPaymentViewModel>;
        /**
         * Return the active payment for the active cart
         * @return {IActivePaymentViewModel} Active payment for the active cart.
         */
        getActivePayment(): Q.Promise<IActivePaymentViewModel>;
        removePaymentMethod(paymentMethodId: string, paymentProviderName: string): Q.Promise<void>;
        setPaymentMethod(request: any): Q.Promise<IPaymentViewModel>;
    }
}

declare module Orckestra.Composer {
    interface IPaymentViewModel {
        PaymentId: string;
        PaymentMethods: Array<IPaymentMethodViewModel>;
        UponReceptionPaymentMethodViewModels: Array<IPaymentMethodViewModel>;
        OnlinePaymentMethodViewModels: Array<IPaymentMethodViewModel>;
        CreditCardPaymentMethod: IPaymentMethodViewModel;
        SavedCreditCards: Array<IPaymentMethodViewModel>;
        IsSavedCreditCardSelected: boolean;
        IsLoading: boolean;
        IsProviderLoading: boolean;
        ActivePaymentViewModel: IActivePaymentViewModel;
    }
}

declare module Orckestra.Composer {
    interface IPaymentProfileListItemViewModel {
        ScopeId: string;
        ProviderName: string;
        PaymentProfileId: string;
        ExternalIds: string;
    }
}

declare module Orckestra.Composer {
    interface IPaymentProfileListViewModel {
        PaymentProfiles: Array<IPaymentProfileListItemViewModel>;
    }
}

declare module Orckestra.Composer {
    class PaymentRepository implements IPaymentRepository {
        /**
         * Return a list of saved payment methods for a specified array of payment provider names
         * @param  {providers: Array<string>}       Array of provider names.
         * @return {Array<IPaymentMethodViewModel>} Instance of the provider.
         */
        getPaymentMethods(providers: Array<string>): Q.Promise<IPaymentViewModel>;
        /**
         * Return the active payment for the active cart
         * @return {IActivePaymentViewModel} Active payment for the active cart.
         */
        getActivePayment(): Q.Promise<IActivePaymentViewModel>;
        removePaymentMethod(paymentMethodId: string, paymentProviderName: string): Q.Promise<void>;
        setPaymentMethod(request: any): Q.Promise<IPaymentViewModel>;
    }
}

declare module Orckestra.Composer {
    class CheckoutPaymentProviderFactory {
        private _eventHub;
        private _window;
        constructor(window: Window, eventHub: IEventHub);
        /**
         * Determines if the Checkout Payment Provider exists or not.
         * @param  {string}  providerType Type of the provider.
         * @return {boolean}              True if the provider exists in the Orckestra.Composer namespace.
         */
        hasProvider(providerType: string): boolean;
        /**
         * Gets an instance of a Checkout Payment provider. If the provider does not exists, throws an
         * error.
         * @param  {string}                   providerType                  Type of the provider.
         * @param  {string}                   providerName                  Name of the provider.
         * @return {ICheckoutPaymentProvider}                               Instance of the provider.
         */
        getInstance(providerType: string, providerName: string): BaseCheckoutPaymentProvider;
    }
}

declare module Orckestra.Composer {
    class CheckoutPaymentController extends Orckestra.Composer.BaseCheckoutController {
        protected paymentProviders: Array<BaseCheckoutPaymentProvider>;
        protected activePaymentProvider: BaseCheckoutPaymentProvider;
        /**
         * this prevents changing payment method more than once per click
         * this happens when "new credit card" is selected since we need to
         * listen for both click and change events to handle both when we
         * change to new credit card or when new CC is already selected and
         * we want to come back to the new CC screen
         */
        protected debounceChangePaymentMethod: (args: {
            activeMethodId: string;
            paymentProviderName: string;
            paymentType: string;
        }) => void;
        paymentService: IPaymentService;
        protected viewModel: IPaymentViewModel;
        protected _window: Window;
        protected _busyHandler: UIBusyHandle;
        initialize(): void;
        selectCreditCardPaymentMethod(): void;
        payWithSavedCreditCard(): void;
        payWithCreditCard(): void;
        changePaymentMethodInternal(activeMethodId: string, paymentProviderName: string, paymentType?: string): void;
        changePaymentMethod(actionContext: IControllerActionContext): void;
        protected executeChangePaymentMethod(args: {
            activeMethodId: string;
            paymentProviderName: string;
            paymentType: string;
        }): void;
        renderData(): Q.Promise<void>;
        getValidationPromise(): Q.Promise<boolean>;
        getUpdateModelPromise(): Q.Promise<any>;
        dispose(): void;
        protected findDefaultPaymentMethod(paymentMethods: Array<IPaymentMethodViewModel>): IPaymentMethodViewModel;
        protected onInitializePaymentMethodFailed(reason: any): void;
        protected renderView(): void;
        protected setPaymentMethod(paymentId: string, activeMethodId: string, paymentProviderName: string, paymentType: string): Q.Promise<any>;
        protected onChangePaymentMethodFailed(reason: any): void;
        protected findPaymentProviderByType(providerType: string): BaseCheckoutPaymentProvider;
        protected getPaymentProviders(): Array<BaseCheckoutPaymentProvider>;
        protected releaseBusyHandler(): void;
    }
}

declare module Orckestra.Composer {
    class ShippingAddressRegisteredService {
        protected customerService: ICustomerService;
        constructor(customerService: ICustomerService);
        /**
       * Get the customer addresses. The selected shipping address is taken from the cart by default.
       * If no address has been set in the cart, the selected shipping address corresponds to the preferred address.
       */
        getShippingAddresses(cart: any): Q.Promise<any>;
        getSelectedShippingAddressId(cart: any, addressList: any): string;
        private isShippingAddressFromCartValid(cart, addressList);
        private getPreferredShippingAddressId(addressList);
    }
}

declare module Orckestra.Composer {
    class ShippingAddressRegisteredController extends Orckestra.Composer.BaseCheckoutController {
        private uiModal;
        protected debounceChangeShippingMethod: Function;
        protected deleteModalElementSelector: string;
        protected customerService: ICustomerService;
        protected shippingAddressRegisteredService: ShippingAddressRegisteredService;
        initialize(): void;
        protected registerSubscriptions(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
        private onRendered(e);
        private onAddressDeleted(e);
        changeShippingAddress(actionContext: IControllerActionContext): void;
        private changeShippingAddressImpl();
        deleteAddressConfirm(actionContext: IControllerActionContext): void;
        private deleteAddress(event);
        private renderFailedForm(status);
        private handleError(reason);
    }
}

declare module Orckestra.Composer {
    class ShippingAddressCheckoutService {
        private cartService;
        private eventHub;
        constructor(cartService: ICartService, eventHub: IEventHub);
        setCheapestShippingMethodUsing(postalCode: string): Q.Promise<void>;
        private handleError(reason);
    }
}

declare module Orckestra.Composer {
    class ShippingAddressCheckoutController extends Orckestra.Composer.BaseCheckoutController {
        protected shippingAddressCheckoutService: ShippingAddressCheckoutService;
        initialize(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
        private getRegionCode(cart);
        changePostalCode(actionContext: IControllerActionContext): void;
    }
}

declare module Orckestra.Composer {
    class ShippingMethodCheckoutController extends Orckestra.Composer.BaseCheckoutController {
        protected debounceMethodSelected: Function;
        initialize(): void;
        renderData(checkoutContext: ICheckoutContext): Q.Promise<void>;
        methodSelected(actionContext: IControllerActionContext): void;
        private methodSelectedImpl(actionContext);
        private updateShippingProviderId(actionContext);
        protected handleError(reason: any): void;
    }
}

declare module Orckestra.Composer {
    class CouponService {
        private cartService;
        private eventHub;
        constructor(cartService: ICartService, eventHub: IEventHub);
        /**
        * Adds a coupon using the Composer API.
        * @param couponCode Code of the Coupon to add through the API.
        */
        addCoupon(couponCode: string): Q.Promise<void>;
        /**
         * Removes a coupon using the Composer API
         * @param {String} couponCode Code of the coupon to remove.
         */
        removeCoupon(couponCode: string): Q.Promise<void>;
        private publishCouponUpdatedEvent(result, isSuccess);
    }
}

declare module Orckestra.Composer {
    /**
     * Controller for the Coupons section.
     */
    class CouponController extends Orckestra.Composer.Controller {
        private couponService;
        private isFirstLoad;
        initialize(): void;
        /**
         * Registers events on the eventHub.
         */
        private registerSubscriptions();
        /**
         * Event triggered when adding a coupon.
         * @param {IControllerActionContext} actionContext - Event context.
         */
        applyCoupon(actionContext: IControllerActionContext): void;
        /**
         * Event triggered when removing a coupon.
         * @param {IControllerActionContext} actionContext - Event context.
         */
        removeCoupon(actionContext: IControllerActionContext): void;
        /**
         * Event handler for coupon updated. Fires even if request fails.
         * @param {any} viewModel - ViewModel received by the request. May be undefined if the request failed.
         */
        private onCouponUpdated(viewModel);
        /**
         * Gets the coupon form handled by this Controller.
         * @return {JQuery} JQuery element matching the first form.
         */
        private getCouponForm();
    }
}

declare module Orckestra.Composer {
    interface IGetOrderDetailsUrlRequest {
        OrderNumber: string;
        Email: string;
    }
}

declare module Orckestra.Composer {
    interface IGuestOrderDetailsViewModel {
        Url: string;
    }
}

declare module Orckestra.Composer {
    interface IFindOrderService {
        getOrderDetailsUrl(req: IGetOrderDetailsUrlRequest): Q.Promise<IGuestOrderDetailsViewModel>;
    }
}

declare module Orckestra.Composer {
    class FindOrderService implements IFindOrderService {
        private eventHub;
        constructor(eventHub: IEventHub);
        getOrderDetailsUrl(req: IGetOrderDetailsUrlRequest): Q.Promise<IGuestOrderDetailsViewModel>;
    }
}

declare module Orckestra.Composer {
    interface IFindMyOrderViewModel {
        OrderNumber: string;
        Email: string;
        OrderNotFound: boolean;
    }
}

declare module Orckestra.Composer {
    class FindMyOrderController extends Orckestra.Composer.Controller {
        private findOrderService;
        initialize(): void;
        getWindow(): Window;
        onFindMyOrder(actionContext: IControllerActionContext): void;
        private findOrderAsync(request);
        private handleOrderNotFound(reason, request);
    }
}

declare module Orckestra.Composer {
    interface IScheduledCallback {
        (data: any): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    /**
     * Class in charge of scheduling multiple calls to an event.
     * This class is a multiton. Please use the instance() method to get an instance.
     */
    class EventScheduler {
        private static instances;
        private eventName;
        private onEventCallbacks;
        private postEventCallback;
        /**
         * Get an instance of the EventScheduler for a specific event.
         * @param eventName The name of the event to listen to.
         */
        static instance(eventName: string): EventScheduler;
        /**
         * Constructor. Should be used for testing purposes and inside the multiton only.
         * @param eventName The name of the event to subscribe to.
         */
        constructor(eventName: string);
        /**
         * Subscribes a callback to the EventScheduler.
         * @param callback Function to call when the event arises. Must return a promise.
         */
        subscribe(callback: IScheduledCallback): void;
        /**
         * Sets the callback method that will be invoked after all the others are done executing.
         * @param postEventCallback Function to call when all other callbacks have been executed.
         */
        setPostEventCallback(postEventCallback: IScheduledCallback): void;
        private trigger(data);
        private triggerCallbacks(data);
        private triggerPostEvent(data);
        /**
         * Gets invoked when an error occurs while executing the promises chain.
         */
        protected onError(reason: any): void;
    }
}

declare module Orckestra.Composer {
    class MiniCartController extends Orckestra.Composer.Controller {
        private cartService;
        initialize(): void;
        private initializeMiniCartQuantity();
        protected registerSubscriptions(): void;
        protected onCartUpdated(e: IEventInformation): void;
        protected onRefreshUser(e: IEventInformation): Q.Promise<any>;
        protected renderCart(cart: any): void;
        protected onError(reason: any): void;
    }
}

declare module Orckestra.Composer {
    class MiniCartSummaryController extends Orckestra.Composer.Controller {
        private cartService;
        private cacheProvider;
        initialize(): void;
        private registerSubscriptions();
        private invalidateCart(e);
        private displayMiniCart(e);
        private onCloseMiniCart(e);
        protected onCheckout(actionContext: IControllerActionContext): void;
        protected initializeMiniCartSummary(): void;
        protected renderMiniCart(cart: any): void;
    }
}

declare module Orckestra.Composer {
    interface ICreateVaultTokenOptions {
        CardHolderName: string;
        VaultTokenId: string;
        PaymentId: string;
        CreatePaymentProfile: boolean;
        PaymentProviderName: string;
    }
}

declare module Orckestra.Composer {
    interface IMonerisAddVaultProfileViewModel {
        /**
         * Determines if the request was successful.
         */
        Success: boolean;
        /**
         * Code of the error.
         */
        ErrorCode: string;
        /**
         * Message given with the error.
         */
        ErrorMessage: string;
        /**
         * Active Payment ViewModel.
         */
        ActivePaymentViewModel: IActivePaymentViewModel;
    }
}

declare module Orckestra.Composer {
    interface IMonerisResponseData {
        responseCode: string[];
        dataKey: string;
        errorMessage: string;
    }
}

declare module Orckestra.Composer {
    interface ISetDefaultCustomerPaymentMethodViewModel {
        PaymentProviderName: string;
        PaymentMethodId: string;
    }
}

declare module Orckestra.Composer {
    class MonerisPaymentService {
        /**
         * Adds a token from Moneris to the current payment.
         * @param  {ICreateVaultTokenOptions} request Request to add the Vault Token.
         * @return {Q.Promise<any>}                   Promise of the AJAX request.
         */
        addCreditCard(request: ICreateVaultTokenOptions): Q.Promise<IMonerisAddVaultProfileViewModel>;
        setDefaultCustomerPaymentMethod(request: ISetDefaultCustomerPaymentMethodViewModel): Q.Promise<IPaymentMethodViewModel>;
        removePaymentMethod(paymentMethodId: string, paymentProviderName: string): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    type BaseMonerisCanadaPaymentProviderCollection = {
        [type: string]: BaseSpecializedMonerisCanadaPaymentProvider;
    };
    class BaseSpecializedMonerisCanadaPaymentProvider {
        /**
         * Injected property for specs
         */
        protected _window: Window;
        protected _paymentService: MonerisPaymentService;
        protected _eventHub: IEventHub;
        constructor(window: Window, paymentService: MonerisPaymentService, eventHub: IEventHub);
        /**
         * Register event handlers for dom events
         */
        registerDomEvents(): void;
        /**
         * Unregister event handlers for dom events
         */
        unregisterDomEvents(): void;
        /**
         * Method called to get a promise for payment validation.
         * Returns a promise of boolean. The return boolean needs to be false for validation error,
         * or true if valid.
         * @param   {IActivePaymentViewModel}   The current active payment view model
         * @return  {Q.Promise<boolean>}        Promise that will be executed when we validate the payment control.
         */
        validatePayment(activePaymentVM: IActivePaymentViewModel): Q.Promise<boolean>;
        /**
         * Add the temporary token to the vault profile of the user
         * @param   {IActivePaymentViewModel}   The current active payment view model
         * @return  {Q.Promise<any>}            The object is the updated properties of the cart used in CheckoutService.updateCart()
         */
        addVaultProfileToken(activePaymentVM: IActivePaymentViewModel): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class CreditCardMonerisCanadaPaymentProvider extends BaseSpecializedMonerisCanadaPaymentProvider {
        private _validationDefer;
        /**
         * This property has to be public for the specs to work
         */
        _monerisResponseData: IMonerisResponseData;
        /**
         * This property is only there to inject test data by the specs
         * it has to be public
         */
        _formData: any;
        constructor(window: Window, paymentService: MonerisPaymentService, eventHub: IEventHub);
        /**
         * Register event handlers for dom events
         */
        registerDomEvents(): void;
        /**
         * Unregister event handlers for dom events
         */
        unregisterDomEvents(): void;
        /**
         * Method called to get a promise for payment validation.
         * Returns a promise of boolean. The return boolean needs to be false for validation error,
         * or true if valid.
         * @param   {IActivePaymentViewModel}   The current active payment view model
         * @return  {Q.Promise<boolean>}        Promise that will be executed when we validate the payment control.
         */
        validatePayment(activePaymentVM: IActivePaymentViewModel): Q.Promise<boolean>;
        private validateMonerisIFrame(vm);
        /**
         * Add the temporary token to the vault profile of the user
         * @param   {IActivePaymentViewModel}   The current active payment view model
         * @return  {Q.Promise<any>}            The object is the updated properties of the cart used in CheckoutService.updateCart()
         */
        addVaultProfileToken(activePaymentVM: IActivePaymentViewModel): Q.Promise<any>;
        private handleMessageResponse(e);
        private handleMonerisSuccess(responseData);
        private handleMonerisError(monerisEvent, responseData);
        private showMonerisErrors(errorCodes);
        private collectAndValidateFormData();
        private getMonerisIFrame();
        private hideAllMonerisErrors();
        /**
         * Gets the container for the Payment Provider.
         * @return {JQuery} jQuery object.
         */
        private getForm();
    }
}

declare module Orckestra.Composer {
    class SavedCreditCardMonerisCanadaPaymentProvider extends BaseSpecializedMonerisCanadaPaymentProvider {
        private _deleteModalElementSelector;
        private _busyHandler;
        private _uiModal;
        constructor(window: Window, paymentService: MonerisPaymentService, eventHub: IEventHub);
        /**
         * Register event handlers for dom events
         */
        registerDomEvents(): void;
        /**
         * Unregister event handlers for dom events
         */
        unregisterDomEvents(): void;
        /**
         * Method called to get a promise for payment validation.
         * Returns a promise of boolean. The return boolean needs to be false for validation error,
         * or true if valid.
         * @param   {IActivePaymentViewModel}   The current active payment view model
         * @return  {Q.Promise<boolean>}        Promise that will be executed when we validate the payment control.
         */
        validatePayment(activePaymentVM: IActivePaymentViewModel): Q.Promise<boolean>;
        /**
         * Add the temporary token to the vault profile of the user
         * @param   {IActivePaymentViewModel}   The current active payment view model
         * @return  {Q.Promise<any>}            The object is the updated properties of the cart used in CheckoutService.updateCart()
         */
        addVaultProfileToken(activePaymentVM: IActivePaymentViewModel): Q.Promise<any>;
        protected deleteCart(event: JQueryEventObject): Q.Promise<void>;
        protected releaseBusyHandler(): void;
    }
}

declare module Orckestra.Composer {
    class MonerisCanadaPaymentProvider extends BaseCheckoutPaymentProvider {
        private _validationDefer;
        private _monerisPaymentService;
        private _providers;
        constructor(window: Window, providerName: string, eventHub: IEventHub);
        providers: BaseMonerisCanadaPaymentProviderCollection;
        /**
         * Method called to get a promise for payment validation.
         * Returns a promise of boolean. The return boolean needs to be false for validation error,
         * or true if valid.
         * @return {Q.Promise<boolean>} Promise that will be executed when we validate the payment control.
         */
        validatePayment(activePaymentVM: IActivePaymentViewModel): Q.Promise<boolean>;
        submitPayment(activePaymentVM: IActivePaymentViewModel): Q.Promise<any>;
        dispose(): void;
        protected setDefaultCustomerPaymentMethod(activePaymentVM: IActivePaymentViewModel): Q.Promise<IPaymentMethodViewModel>;
        protected registerSpecializedProviders(): void;
        protected registerDomEvents(): void;
        protected unregisterDomEvents(): void;
        protected getProvider(providerName: string): BaseSpecializedMonerisCanadaPaymentProvider;
    }
}

declare module Orckestra.Composer {
    class OnSitePOSPaymentProvider extends BaseCheckoutPaymentProvider {
        constructor(window: Window, providerName: string, eventHub: IEventHub);
        /**
         * Method called to get a promise for payment validation.
         * Returns a promise of boolean. The return boolean needs to be false for validation error,
         * or true if valid.
         * @return {Q.Promise<boolean>} Promise that will be executed when we validate the payment control.
         */
        validatePayment(activeVM: IActivePaymentViewModel): Q.Promise<boolean>;
        /**
         * Method called to get a promise when payment will submit.
         * @return {Q.Promise<any>} Promise that will be executed when to cart is about the be updated.
         */
        submitPayment(activeVM: IActivePaymentViewModel): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class OrderDetailsController extends Controller {
        initialize(): void;
    }
}

declare module Orckestra.Composer {
    interface IGetOrderParameters {
        page: number;
    }
}

declare module Orckestra.Composer {
    class OrderService {
        getPastOrders(options?: IGetOrderParameters): Q.Promise<any>;
        getCurrentOrders(options?: IGetOrderParameters): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class CurrentOrdersController extends Controller {
        protected orderService: OrderService;
        initialize(): void;
        getOrders(context: IControllerActionContext): void;
        private getCurrentOrders(param?);
    }
}

declare module Orckestra.Composer {
    class PastOrdersController extends Controller {
        protected orderService: OrderService;
        initialize(): void;
        getOrders(context: IControllerActionContext): void;
        private getPastOrders(param?);
    }
}

declare module Orckestra.Composer {
    class OrderSummaryService {
        private cartService;
        private eventHub;
        constructor(cartService: ICartService, eventHub: IEventHub);
        setCheapestShippingMethodUsing(postalCode: string): Q.Promise<void>;
        cleanCart(): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    class OrderSummaryController extends Orckestra.Composer.Controller {
        private cacheProvider;
        private cartService;
        private orderSummaryService;
        private postalCodeModal;
        private postalCodeInput;
        initialize(): void;
        private registerSubscriptions();
        openModal(actionContext: IControllerActionContext): void;
        private clearForm();
        private closeModal(actionContext);
        estimateShipping(actionContext: IControllerActionContext): void;
        proceedToCheckout(actionContext: IControllerActionContext): void;
    }
}

declare module Orckestra.Composer {
    /**
     * Separates the logic that retrieves the data and maps it to the entity model from the application services that acts on the model.
    */
    interface IWishListRepository {
        /**
         * Get the lightweight wishList of the current customer.
         */
        getWishListSummary(): Q.Promise<any>;
        /**
         * Get the wishList of the current customer.
         */
        getWishList(): Q.Promise<any>;
        /**
         * Add a line item to the wishList of the current customer.
         */
        addLineItem(productId: string, variantId: string, quantity: number): Q.Promise<void>;
        /**
         * Delete a line item from the wishList of the current customer.
         */
        deleteLineItem(lineItemId: string): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    class WishListRepository implements Orckestra.Composer.IWishListRepository {
        getWishList(): Q.Promise<any>;
        getWishListSummary(): Q.Promise<any>;
        addLineItem(productId: string, variantId: string, quantity: number): Q.Promise<void>;
        deleteLineItem(lineItemId: string): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    class AccountHeaderController extends Orckestra.Composer.Controller {
        protected membershipService: IMembershipService;
        initialize(): void;
        protected registerSubscriptions(): void;
        private onLoggedOut(data);
        fullLogout(actionContext: IControllerActionContext): void;
    }
}

declare module Orckestra.Composer {
    class MyAccountController extends Orckestra.Composer.Controller {
        initialize(): void;
        protected getFormData(actionContext: IControllerActionContext): any;
        protected renderFormErrorMessages(reason: any): void;
    }
}

declare module Orckestra.Composer {
    class AddressListController extends Orckestra.Composer.MyAccountController {
        private deleteModalElementSelector;
        private uiModal;
        protected customerService: ICustomerService;
        initialize(): void;
        protected registerSubscriptions(): void;
        private onAddressDeleted(e);
        /**
        * Requires the element in action context to have a data-address-id.
        */
        setDefaultAddress(actionContext: IControllerActionContext): void;
        /**
        * Requires the element in action context to have a data-address-id.
        */
        deleteAddress(event: JQueryEventObject): void;
        private onDeleteAddressFulfilled(result, $addressListItem);
        deleteAddressConfirm(actionContext: IControllerActionContext): void;
    }
}

declare module Orckestra.Composer {
    class ChangePasswordController extends Orckestra.Composer.MyAccountController {
        protected membershipService: IMembershipService;
        initialize(): void;
        protected registerSubscriptions(): void;
        private onPasswordChanged(e);
        /**
         * Event triggered when submitting the change password form.
         * @param {IControllerActionContext} actionContext - Event context.
         */
        changePassword(actionContext: IControllerActionContext): void;
        private onChangePasswordFulfilled(result);
    }
}

declare module Orckestra.Composer {
    var urlHelper: {
        getURLParameter: (url: any, name: any) => string;
    };
}

declare module Orckestra.Composer {
    class CreateAccountController extends Orckestra.Composer.MyAccountController {
        protected membershipService: IMembershipService;
        initialize(): void;
        protected registerSubscriptions(): void;
        private onAccountCreated(e);
        createAccount(actionContext: IControllerActionContext): void;
        private onRegisterFulfilled(result);
    }
}

declare module Orckestra.Composer {
    class EditAddressController extends Orckestra.Composer.MyAccountController {
        protected _formInstances: IParsley[];
        protected customerService: ICustomerService;
        initialize(): void;
        protected registerSubscriptions(): void;
        private onAddressCreatedOrUpdated(e);
        /**
         * Rerender the region selector, keeping the currently selected value
         */
        private rebuildRegionSelector(regions);
        adjustPostalCode(actionContext: IControllerActionContext): void;
        createAddress(actionContext: IControllerActionContext): void;
        private onCreateAddressFulfilled(result);
        updateAddress(actionContext: IControllerActionContext): void;
        private onUpdateAddressFulfilled(result);
    }
}

declare module Orckestra.Composer {
    class ForgotPasswordController extends Orckestra.Composer.MyAccountController {
        protected membershipService: IMembershipService;
        initialize(): void;
        protected registerSubscriptions(): void;
        private onForgotPasswordInstructionSent(e);
        /**
         * Event triggered when submitting the forgot password form.
         * @param {IControllerActionContext} actionContext - Event context.
         */
        forgotPassword(actionContext: IControllerActionContext): void;
        private onForgotPasswordFulfilled(result);
    }
}

declare module Orckestra.Composer {
    class NewPasswordController extends Orckestra.Composer.MyAccountController {
        protected membershipService: IMembershipService;
        initialize(): void;
        protected registerSubscriptions(): void;
        private onPasswordChanged(e);
        /**
         * Event triggered when submitting the new password form.
         * @param {IControllerActionContext} actionContext - Event context.
         */
        newPassword(actionContext: IControllerActionContext): void;
        private onResetPasswordFulfilled(result);
    }
}

declare module Orckestra.Composer {
    /**
     * Controller for the Coupons section.
     */
    class ReturningCustomerController extends Orckestra.Composer.Controller {
        protected membershipService: IMembershipService;
        protected cacheProvider: ICacheProvider;
        initialize(): void;
        protected registerSubscriptions(): void;
        private onLoggedIn(data);
        /**
         * Event triggered when submitting the login form.
         * @param {IControllerActionContext} actionContext - Event context.
         */
        login(actionContext: IControllerActionContext): void;
        private loginImpl(actionContext);
        private onLoginFulfilled(result, busy);
        private onLoginRejected(reason, busy);
        /**
         * Render the template for message failures
         * Register Format validation to hide those server message on client interaction
         * Reset potentially unsafe fields
         */
        private renderFailedForm(status);
    }
}

declare module Orckestra.Composer {
    /**
     * Separates the logic that retrieves the data and maps it to the entity model from the application services that acts on the model.
    */
    interface ISignInHeaderRepository {
        /**
         * Get the SignInHeader
         */
        getSignInHeader(param: any): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class SignInHeaderRepository implements Orckestra.Composer.ISignInHeaderRepository {
        getSignInHeader(param: any): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class SignInHeaderService {
        private cacheKey;
        private cachePolicy;
        private cacheProvider;
        private signInHeaderRepository;
        constructor(signInHeaderRepository: ISignInHeaderRepository);
        getSignInHeader(param: any): Q.Promise<any>;
        private canHandle(reason);
        getFreshSignInHeader(param: any): Q.Promise<any>;
        buildSignedInCacheKey(param: any): string;
        invalidateCache(): Q.Promise<void>;
        private getSignInHeaderFromCache(param);
        private setSignInHeaderToCache(param, cart);
    }
}

declare module Orckestra.Composer {
    class SignInHeaderController extends Orckestra.Composer.Controller {
        protected signInHeaderService: SignInHeaderService;
        initialize(): void;
        private initializeSignInHeader();
        protected registerSubscriptions(): void;
        protected onLoggedOut(e: IEventInformation): Q.Promise<any>;
        protected onLoggedIn(e: IEventInformation): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class UpdateAccountController extends Orckestra.Composer.MyAccountController {
        protected customerService: ICustomerService;
        protected signInHeaderService: SignInHeaderService;
        initialize(): void;
        protected registerSubscriptions(): void;
        private onAccountUpdated(e);
        enableSubmitButton(actionContext: IControllerActionContext): void;
        updateAccount(actionContext: IControllerActionContext): void;
        protected onUpdateAccountFulfilled(result: any): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    interface IWishListService {
        addLineItem(productId: string, variantId?: string): Q.Promise<any>;
        removeLineItem(lineItemId: string): Q.Promise<any>;
        getWishListSummary(): Q.Promise<any>;
        clearCache(): any;
    }
}

declare module Orckestra.Composer {
    class WishListService implements IWishListService {
        private static GettingFreshWishListSummary;
        private wishListRepository;
        private cacheKey;
        private cachePolicy;
        private cacheProvider;
        private eventHub;
        constructor(wishListRepository: IWishListRepository, eventHub: IEventHub);
        getWishListSummary(): Q.Promise<any>;
        getFreshWishListSummary(): Q.Promise<any>;
        getSignInUrl(): Q.Promise<any>;
        getLineItem(productId: string, variantId?: string): Q.Promise<any>;
        addLineItem(productId: string, variantId?: string, quantity?: number): Q.Promise<any>;
        removeLineItem(lineItemId: string): Q.Promise<any>;
        clearCache(): Q.Promise<void>;
        protected getCacheWishListSummary(): Q.Promise<any>;
        protected setWishListToCache(wishList: any): Q.Promise<any>;
        private canHandle(reason);
    }
}

declare module Orckestra.Composer {
    class WishListController extends Orckestra.Composer.Controller {
        protected _wishListService: IWishListService;
        protected _cartService: CartService;
        initialize(): void;
        addToCart(actionContext: IControllerActionContext): void;
        protected getListNameForAnalytics(): string;
        protected getProductDataForAnalytics(productId: any, variant: any, displayName: any, price: any, brand: any, category: any): any;
    }
}

declare module Orckestra.Composer {
    class MyWishListController extends Orckestra.Composer.WishListController {
        initialize(): void;
        protected registerSubscriptions(): void;
        copyShareUrl(actionContext: IControllerActionContext): any;
        deleteLineItem(actionContext: IControllerActionContext): void;
        protected onWishListUpdated(e: IEventInformation): void;
        protected renderWishListQuantity(wishList: any): void;
        protected getListNameForAnalytics(): string;
    }
}

declare module Orckestra.Composer {
    class WishListInHeaderController extends Orckestra.Composer.Controller {
        private _wishListService;
        initialize(): void;
        private initializeWishListQuantity();
        protected registerSubscriptions(): void;
        protected onWishListUpdated(e: IEventInformation): void;
        protected onRefreshUser(e: IEventInformation): Q.Promise<any>;
        protected renderWishList(wishList: any): void;
        protected onError(reason: any): void;
    }
}

declare module Orckestra.Composer {
    class SharedWishListController extends Orckestra.Composer.WishListController {
        initialize(): void;
        protected getListNameForAnalytics(): string;
    }
}

declare module Orckestra.Composer {
    class ProductIdentifierDto {
        ProductId: string;
        VariantId: string;
        constructor(ProductId: string, VariantId: string);
    }
}

declare module Orckestra.Composer {
    interface IInventoryService {
        isAvailableToSell(sku: string): Q.Promise<boolean>;
    }
}

declare module Orckestra.Composer {
    class InventoryService implements IInventoryService {
        private _memoizeIsAvailableToSell;
        isAvailableToSell(sku: string): Q.Promise<boolean>;
        private isAvailableToSellImpl(sku);
    }
}

declare module Orckestra.Composer {
    interface IProductService {
        calculatePrice(productId: string, concern: string): any;
        getSelectedVariantViewModel(): any;
        getVariant(variantId: string): any;
        updateSelectedKvasWith(selectionsToAdd: any, concern: string): any;
        getRelatedProducts(relatedProductIdentifiers: ProductIdentifierDto[]): any;
        loadQuickBuyProduct(productId: string, variantId: string, concern: string, source: string): any;
        findInventoryItems(viewModel: any, concern: string): any;
        buildUrlPath(pathArray: string[]): string;
    }
}

declare module Orckestra.Composer {
    class KeyVariantAttributeItemsBuilder {
        private context;
        constructor(context: Orckestra.Composer.IControllerContext);
        BuildKeyVariantAttributeItemsFor(selectedKvas: any): any;
        private InitiateKVAStateFor(keyVariantAttributeItems, selectedKvas);
        private FindReachableVariantsFrom(keyVariantAttributeItems, selectedKvas);
        private EnableKVAState(reverseKvaLookup, reachableVariants, selectedKvas);
    }
}

declare module Orckestra.Composer {
    class ProductService implements IProductService {
        private eventHub;
        private context;
        constructor(eventHub: IEventHub, context: Orckestra.Composer.IControllerContext);
        showQuickView(): void;
        closeQuickView(): void;
        selectImage(clickedImageIndex: number, concern: string): void;
        calculatePrice(productId: string, concern: string): Q.Promise<void>;
        getSelectedVariantViewModel(): any;
        getVariant(variantId: string): any;
        updateSelectedKvasWith(selectionsToAdd: any, concern: string): void;
        getRelatedProducts(relatedProductIdentifiers: ProductIdentifierDto[]): Q.Promise<any>;
        loadQuickBuyProduct(productId: string, variantId: string, concern: string, source: string): Q.Promise<any>;
        findInventoryItems(viewModel: any, concern: string): Q.Promise<void>;
        productAvailableToSell(selectedSku: string, productAvailableToSell: string[], productIsAvailableToSell: boolean): boolean;
        private buildKeyVariantAttributeItems(concern);
        replaceHistory(): void;
        buildUrlPath(pathArray: string[]): string;
    }
}

declare module Orckestra.Composer {
    /**
      * Module helper to format string value using the Overture convertion rules.
      */
    class ProductFormatter {
        /**
         * convert a ProductProperty string value into the right strongly typed variable.
         *
         *     formatter.convertToStronglyTyped(actionContext.elementContext.val(), 'Decimal');
         *
         * @param strValue         The ProductProperty value to convert
         * @param propertyDataType the ProductProperty.DataType to induce the type
         */
        convertToStronglyTyped(strValue: string, propertyDataType: string): any;
    }
}

declare module Orckestra.Composer {
    class ProductController extends Orckestra.Composer.Controller {
        protected inventoryService: InventoryService;
        protected productService: ProductService;
        protected cartService: CartService;
        protected _wishListService: WishListService;
        protected _membershipService: IMembershipService;
        protected concern: string;
        initialize(): void;
        protected registerSubscriptions(): void;
        protected onSelectedVariantIdChanged(e: IEventInformation): void;
        protected onSelectedKvasChanged(e: IEventInformation): void;
        protected onImagesChanged(e: IEventInformation): void;
        protected onPricesChanged(e: IEventInformation): void;
        protected renderData(): Q.Promise<void[]>;
        protected isProductWithVariants(): boolean;
        protected isSelectedVariantUnavailable(): boolean;
        protected renderUnavailableQuantity(quantity: any): Q.Promise<void>;
        protected renderAvailableQuantity(quantity: any): Q.Promise<void>;
        protected renderAddToWishList(): Q.Promise<void>;
        protected renderUnavailableAddToCart(): Q.Promise<void>;
        protected renderAvailableAddToCart(): Q.Promise<void>;
        decrementQuantity(actionContext: IControllerActionContext): void;
        incrementQuantity(actionContext: IControllerActionContext): void;
        changeQuantity(actionContext: IControllerActionContext): void;
        addLineItemToWishList(actionContext: IControllerActionContext): void;
        removeLineItemToWishList(actionContext: IControllerActionContext): void;
        protected redirectToSignInBeforeAddToWishList(): void;
        addLineItem(actionContext: IControllerActionContext): void;
        protected onAddLineItemSuccess(data: any): void;
        protected onAddLineItemFailed(reason: any): void;
        protected getCurrentQuantity(): {
            Min: number;
            Max: number;
            Value: number;
        };
        private addLineItemImpl(productId, price, variantId, quantity);
        protected completeAddLineItem(quantityAdded: any): Q.Promise<void>;
        selectImage(actionContext: IControllerActionContext): void;
        selectKva(actionContext: IControllerActionContext): void;
        protected calculatePrice(): Q.Promise<any>;
        protected getProductDataForAnalytics(vm: any): any;
        protected getListNameForAnalytics(): string;
        protected getVariantDataForAnalytics(variant: any): any;
        protected buildVariantName(kvas: any): string;
    }
}

declare module Orckestra.Composer {
    class ProductDetailController extends Orckestra.Composer.ProductController {
        protected _concern: string;
        initialize(): void;
        protected getListNameForAnalytics(): string;
        protected notifyAnalyticsOfProductDetailsImpression(): void;
        protected publishProductImpressionEvent(data: any): void;
        protected onSelectedVariantIdChanged(e: IEventInformation): void;
        protected onSelectedKvasChanged(e: IEventInformation): void;
        protected onImagesChanged(e: IEventInformation): void;
        private getUnavailableProductImages(e);
        protected onPricesChanged(e: IEventInformation): void;
        protected renderUnavailableAddToCart(): Q.Promise<void>;
        protected renderAvailableAddToCart(): Q.Promise<void>;
        selectKva(actionContext: IControllerActionContext): void;
        protected completeAddLineItem(quantityAdded: any): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    class ProductZoomController extends Orckestra.Composer.ProductController {
        initialize(): void;
        protected openZoom(event: JQueryEventObject): void;
        protected changeZoomedImage(event: JQueryEventObject): void;
        protected errorZoomedImage(event: JQueryEventObject): void;
        protected initZoom(): void;
    }
}

declare module Orckestra.Composer {
    interface IFacet {
        isArray: boolean;
        facetFieldName: string;
        facetValue: string;
        facetType: string;
        facetLandingPageUrl: string;
    }
}

declare module Orckestra.Composer {
    interface ISelectedFacet {
        facetFieldName: string;
        selectedValues: string[];
        isFacetArray: boolean;
    }
}

declare module Orckestra.Composer {
    interface ISearchCriteriaOptions {
        facetRegistry: IHashTable<string>;
        correctedSearchTerm?: string;
    }
}

declare module Orckestra.Composer {
    class SearchCriteria {
        private eventHub;
        private _window;
        private static facetFieldNameKeyPrefix;
        private static facetValueKeyPrefix;
        private _facetRegistry;
        keywords: string;
        correctedSearchTerm: string;
        page: number;
        sortBy: string;
        sortDirection: string;
        selectedFacets: IHashTable<string | string[]>;
        constructor(eventHub: any, _window: Window);
        initialize(options: ISearchCriteriaOptions): void;
        loadFromQuerystring(querystring: string): void;
        toQuerystring(): string;
        clearFacets(): void;
        addSingleFacet(facetKey: string, facetValue: string): void;
        updateMultiFacets(facets: IHashTable<string | string[]>): void;
        removeFacet(facetToRemove: Orckestra.Composer.IFacet): void;
        private getSelectedFacetsArray(facetFieldName);
        private setSelectedFacet(selectedFacet);
        private clearSelectedMultiFacets();
        private resetPaging();
        private loadFacetCriteria(querystring);
        private loadNonFacetCriteria(querystring);
        private encodeQuerystringValue(valueToEncode);
        private decodeQuerystringValue(valueToDecode);
    }
}

declare module Orckestra.Composer {
    interface ISearchService {
        initialize(options: ISearchCriteriaOptions): any;
        singleFacetsChanged(eventInformation: IEventInformation): any;
        multiFacetChanged(eventInformation: IEventInformation): any;
        clearFacets(eventInformation: IEventInformation): any;
        removeFacet(eventInformation: IEventInformation): any;
        getSelectedFacets(): IHashTable<string | string[]>;
    }
}

declare module Orckestra.Composer {
    interface ISingleSelectCategory {
        isArray: boolean;
        categoryUrl: string;
    }
}

declare module Orckestra.Composer {
    class SearchService implements ISearchService {
        private _eventHub;
        private _window;
        private _searchCriteria;
        private _baseSearchUrl;
        private _baseUrl;
        private _facetRegistry;
        constructor(_eventHub: IEventHub, _window: Window);
        /**
         * Initializes the search service.
         *
         * param facetRegistry Facets available to the search service.
         */
        initialize(options: ISearchCriteriaOptions): void;
        singleFacetsChanged(eventInformation: IEventInformation): void;
        sortingChanged(eventInformation: IEventInformation): void;
        getSelectedFacets(): IHashTable<string | string[]>;
        multiFacetChanged(eventInformation: IEventInformation): void;
        clearFacets(eventInformation: IEventInformation): void;
        removeFacet(eventInformation: IEventInformation): void;
        addSingleSelectCategory(eventInformation: IEventInformation): void;
        private registerSubscriptions();
        private search();
    }
}

declare module Orckestra.Composer {
    class SliderService implements IDisposable {
        private context;
        protected eventHub: IEventHub;
        private sliderInstance;
        private facetFieldName;
        private maxLabel;
        private maxValue;
        private minValue;
        private step;
        private applyButtonContext;
        constructor(context: JQuery, eventHub: IEventHub);
        initialize(selectedValues: any): void;
        dispose(): void;
        protected mapData(containerData: any): void;
        dirtied(): void;
        /**
         * Formatting for the formatted values of the slider. When getting.
         */
        formatFrom(value: any): any;
        /**
         * Formatting for the formatted values of the slider. When setting.
         */
        formatTo(value: any): any;
        private initializeSlider(facetData);
        private createSlider(startRange, sliderElement);
        getKey(): string;
        getValues(): any[];
    }
}

declare module Orckestra.Composer {
    class UrlHelper {
        static resolvePageType(): string;
    }
}

declare module Orckestra.Composer {
    class FacetSearchController extends Orckestra.Composer.Controller {
        private _debounceHandle;
        private _debounceTimeout;
        private _searchService;
        private sliderService;
        private sliderServicesInstances;
        initialize(): void;
        multiFacetChanged(actionContext: IControllerActionContext): void;
        dispose(): void;
        singleFacetChanged(actionContext: IControllerActionContext): void;
        toggleFacetList(actionContext: IControllerActionContext): void;
        refineByRange(actionContext: IControllerActionContext): void;
        private initializeServices();
        private buildFacetRegistry();
    }
}

declare module Orckestra.Composer {
    interface IQuickViewController {
        selectImage(actionContext: IControllerActionContext): void;
        addLineItem(actionContext: IControllerActionContext): void;
        selectKva(actionContext: IControllerActionContext): void;
    }
}

declare module Orckestra.Composer {
    class ProductSearchController extends Orckestra.Composer.Controller {
        private _debounceHandle;
        private _debounceTimeout;
        private _searchService;
        initialize(): void;
        multiFacetChanged(actionContext: IControllerActionContext): void;
        singleFacetChanged(actionContext: IControllerActionContext): void;
        removeSelectedFacet(actionContext: IControllerActionContext): void;
        clearSelectedFacets(actionContext: IControllerActionContext): void;
        private initializeSearchService();
        private buildFacetRegistry();
    }
}

declare module Orckestra.Composer {
    class QuickViewController extends Orckestra.Composer.ProductController implements Orckestra.Composer.IQuickViewController {
        protected concern: string;
        initialize(): void;
        protected setConcernWithContext(): void;
        protected registerSubscriptions(): void;
        protected onQuickBuyLoaded(e: IEventInformation): void;
        protected onLoadingFailed(reason: any): void;
        private setVariantId(variantId);
        protected onSelectedVariantIdChanged(e: IEventInformation): void;
        protected onSelectedVariantIdChangedSuccess(): void;
        protected onSelectedVariantIdChangedFailed(reason: any): void;
        protected onSelectedKvasChanged(e: IEventInformation): void;
        protected onImagesChanged(e: IEventInformation): void;
        private getUnavailableMainImageContent(e);
        protected onPricesChanged(e: IEventInformation): void;
        protected renderUnavailableAddToCart(): Q.Promise<void>;
        protected renderAvailableAddToCart(): Q.Promise<void>;
        protected completeAddLineItem(quantityAdded: any): Q.Promise<void>;
        protected getListNameForAnalytics(): string;
    }
}

declare module Orckestra.Composer {
    class SearchResultsController extends Orckestra.Composer.Controller {
        protected cartService: CartService;
        protected productService: ProductService;
        protected currentPage: any;
        initialize(): void;
        private getCurrentPage();
        addToCart(actionContext: IControllerActionContext): void;
        protected onAddToCartFailed(reason: any): void;
        searchProductClick(actionContext: IControllerActionContext): void;
        pagerPageChanged(actionContext: IControllerActionContext): void;
        protected getProductDataForAnalytics(productId: string, price: any): any;
    }
}

declare module Orckestra.Composer {
    class SearchSummaryController extends Orckestra.Composer.Controller {
        initialize(): void;
    }
}

declare module Orckestra.Composer {
    class SelectedFacetSearchController extends Orckestra.Composer.Controller {
        initialize(): void;
        removeSelectedFacet(actionContext: IControllerActionContext): void;
        clearSelectedFacets(actionContext: IControllerActionContext): void;
        addSingleSelectCategory(actionContext: IControllerActionContext): void;
    }
}

declare module Orckestra.Composer {
    class SortBySearchController extends Orckestra.Composer.Controller {
        sortingChanged(actionContext: IControllerActionContext): void;
    }
}

declare module Orckestra.Composer {
    class ProductSpecificationsService {
        private memoizeProductSpecifications;
        getProductSpecifications(productId: string, variantId: string): Q.Promise<any>;
        private getProductSpecificationsImpl(productId, variantId);
    }
}

declare module Orckestra.Composer {
    class ProductSpecificationsController extends Orckestra.Composer.Controller {
        private service;
        initialize(): void;
        private registerSubscriptions();
        private renderData(variantId);
        private getProductSpecifications(variantId);
        private handleError(reason);
    }
}


declare module Orckestra.Composer {
    class SlickCarouselPlugin implements IPlugin {
        initialize(window: Window, document: HTMLDocument): void;
        initSlick(): void;
        private subscriptEvents();
    }
}

declare module Orckestra.Composer {
    class RelatedProductController extends Orckestra.Composer.ProductController {
        protected concern: string;
        private source;
        private products;
        initialize(): void;
        private getRelatedProducts();
        protected onGetRelatedProductsSuccess(vm: any): void;
        protected onGetRelatedProductsFailed(reason: any): void;
        protected getPageSource(): string;
        protected getListNameForAnalytics(): string;
        protected onLoadingFailed(reason: any): void;
        addToCart(actionContext: IControllerActionContext): void;
        /**
         * Occurs when adding a product to the cart that happens to have variants.
         */
        protected addVariantProductToCart(productId: string, variantId: string, price: string): Q.Promise<any>;
        /**
         * Occurs when adding a product to the cart that has no variant.
         */
        protected addNonVariantProductToCart(productId: string, price: string): Q.Promise<any>;
        protected getProductViewModel(productId: string): any;
        protected getCurrentQuantity(): any;
        relatedProductsClick(actionContext: IControllerActionContext): void;
    }
}

declare module Orckestra.Composer {
    class GeoLocationService {
        private _browserGeolocation;
        private _geocoder;
        private _currenctLocation;
        constructor();
        geolocate(): Q.Promise<any>;
        getCurrentLocation(): Q.Promise<google.maps.LatLng>;
        getAddtressByLocation(location: google.maps.LatLng): Q.Promise<string>;
        getLocationByAddress(address: string): Q.Promise<google.maps.LatLng>;
        updateDirectionLinksWithLatLngSourceAddress(container: JQuery, sourceLocation: google.maps.LatLng): void;
        getDirectionLatLngSourceAddress(baseUrl: string, sourceLocation: google.maps.LatLng): string;
    }
}

declare module Orckestra.Composer {
    class StoresDirectoryController extends Controller {
        protected _geoService: GeoLocationService;
        private _searchBox;
        initialize(): void;
        protected initializeSearchBox(): void;
        currentLocationAction(actionContext: IControllerActionContext): void;
        protected setGoogleDirectionLinks(): Q.Promise<void>;
    }
}

declare module Orckestra.Composer {
    class GetStoresInventoryParam {
        Sku: string;
        SearchPoint: google.maps.LatLng;
        Page: number;
        Pagesize: number;
    }
}

declare module Orckestra.Composer {
    interface IStoreInventoryService {
        getStoresInventory(param: GetStoresInventoryParam): Q.Promise<any>;
        getDefaultAddress(): Q.Promise<any>;
        getSkuSelection(productId: string): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class StoreInventoryService implements IStoreInventoryService {
        getStoresInventory(param: GetStoresInventoryParam): Q.Promise<any>;
        getDefaultAddress(): Q.Promise<any>;
        getSkuSelection(productId: string): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class StoreInventoryController extends Controller {
        protected _concern: string;
        protected _service: IStoreInventoryService;
        protected _geoService: GeoLocationService;
        protected _searchPointAddressCacheKey: string;
        protected cache: ICache;
        private _searchBox;
        private _searchBoxJQ;
        private _searchPoint;
        private _selectedSku;
        private _isAuthenticated;
        private _pageSize;
        private _productId;
        private _getCurrentLocation;
        getCurrentLocation(): Q.Promise<google.maps.LatLng>;
        initialize(): void;
        private registerSubscriptions();
        private getDataFromContextViewModel();
        protected initSearchBox(): void;
        protected searchPointChanged(e: IEventInformation): void;
        protected onSelectedVariantIdChanged(e: IEventInformation): void;
        protected onHashChanged(): void;
        protected getStoresInventory(): Q.Promise<any>;
        protected nextPage(actionContext: IControllerActionContext): void;
        protected setGoogleDirectionLinks(): Q.Promise<any>;
        protected getStoresInventoryParam(page?: number): GetStoresInventoryParam;
        protected getDefaultAddress(): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    interface IMapOptions {
        mapCanvas: HTMLElement;
        options: google.maps.MapOptions;
        infoWindowMaxWidth?: number;
    }
}

declare module Orckestra.Composer {
    interface IStoreLocatorInitializationOptions {
        mapId: string;
        coordinates: {
            Lat: number;
            Lng: number;
        };
        showNearestStoreInfo: boolean;
        zoomLevel?: number;
        markerPadding?: number;
    }
}

declare module Orckestra.Composer {
    class Marker {
        private _key;
        private _value;
        private _storeNumber;
        private _isCluster;
        constructor(marker: MarkerWithLabel);
        key: any;
        value: MarkerWithLabel;
        storeNumber: string;
        isCluster: boolean;
        setMap(map: any): void;
        setPosition(position: google.maps.LatLng): void;
    }
}

declare module Orckestra.Composer {
    class MarkerPool {
        private markers;
        private indexedMarkersByKey;
        private _map;
        private _onMarkerCreate;
        constructor(map: google.maps.Map, onMarkerCreate: any);
        getMarkers(): any;
        get(isCluster?: boolean): Marker;
        getExisting(key: any): any;
        index(marker: Marker): void;
        hasClusters(): boolean;
        protected createMarker(): Marker;
        protected createClusterMarker(): Marker;
        releaseAll(): void;
        releaseByIndex(index: string): void;
        releaseClusters(): void;
        releaseMarkersByIds(iscluster: boolean, id: string): void;
    }
}

declare module Orckestra.Composer {
    class MapService {
        private eventHub;
        private _map;
        private _markerPool;
        private _prevZoom;
        private _currentLocationMarker;
        private _informationWindow;
        private _projectionOverlay;
        private _mapInitialized;
        private _mapIdle;
        private _mapDragEnded;
        constructor(eventHub: IEventHub);
        initialize(mapOptions: IMapOptions): void;
        private setProjectionOverlay();
        getMap(): google.maps.Map;
        getInformationWindow(): google.maps.InfoWindow;
        getBounds(markerPadding?: number): google.maps.LatLngBounds;
        getZoom(): number;
        onNewMarkerCreated(marker: Marker): void;
        mapInitialized(): Q.Promise<MapService>;
        mapIdle(): Q.Promise<MapService>;
        mapDragEnded(): Q.Promise<MapService>;
        centerMap(storeBounds: any): void;
        openInformationWindow(content: any, anchor?: any): void;
        setLocationInMap(point: google.maps.LatLng, zoomLevel?: number): void;
        extendBounds(point1: google.maps.LatLng, point2: google.maps.LatLng): void;
        createMarkerOnMap(location: google.maps.LatLng, title: string): google.maps.Marker;
        setMarkers(markerInfos: any[], isSearch?: boolean): void;
        private transformResult(result, markerPool, action);
    }
}

declare module Orckestra.Composer {
    class StoreDetailsController extends Controller {
        protected _geoService: GeoLocationService;
        private _map;
        private _marker;
        initialize(): void;
        protected setGoogleDirectionLink(): void;
    }
}

declare module Orckestra.Composer {
    interface IStoreLocatorService {
        getMapConfiguration(): Q.Promise<any>;
        getStore(storeNumber: string): Q.Promise<any>;
        getStores(southWest: google.maps.LatLng, northEast: google.maps.LatLng, searchPoint: google.maps.LatLng, page: number, pageSize: number): Q.Promise<any>;
        getMarkers(southWest: google.maps.LatLng, northEast: google.maps.LatLng, zoomLevel: number, searchPoint: google.maps.LatLng, isSearch: boolean, pageSize: number): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class StoreLocatorEndPointUrls {
        static GetStoresEndPointUrl: string;
        static GetStoreEndPointUrl: string;
        static GetMapConfigurationEndPointUrl: string;
        static GetMarkersEndPointUrl: string;
    }
}

declare module Orckestra.Composer {
    class StoreLocatorService implements IStoreLocatorService {
        private memoizeStore;
        getStore(storeNumber: string): Q.Promise<any>;
        private getStoreImpl(storeNumber);
        getStores(southWest: google.maps.LatLng, northEast: google.maps.LatLng, searchPoint: google.maps.LatLng, page: number, pageSize: number): Q.Promise<any>;
        getMapConfiguration(): Q.Promise<any>;
        getMarkers(southWest: google.maps.LatLng, northEast: google.maps.LatLng, zoomLevel: number, searchPoint: google.maps.LatLng, isSearch: boolean, pageSize: number): Q.Promise<any>;
    }
}

declare module Orckestra.Composer {
    class StoreLocatorHistoryState {
        point: google.maps.LatLng;
        page: number;
        zoom: number;
        center: google.maps.LatLng;
        pos: number;
    }
}

declare module Orckestra.Composer {
    class StoreLocatorController extends Controller {
        protected _storeLocatorService: IStoreLocatorService;
        protected _geoService: GeoLocationService;
        protected _mapService: MapService;
        protected _storeLocatorOptions: IStoreLocatorInitializationOptions;
        protected _historyState: StoreLocatorHistoryState;
        protected _isRestoreListPaging: boolean;
        protected _searchPointAddressCacheKey: string;
        protected cache: ICache;
        private _searchBox;
        private _searchBoxJQ;
        private _searchPoint;
        private _searchPointMarker;
        private _isSearch;
        private _timer;
        private _enterPressedTimer;
        private _getCurrentLocation;
        getCurrentLocation(): Q.Promise<google.maps.LatLng>;
        initialize(options?: IStoreLocatorInitializationOptions): void;
        private registerSubscriptions();
        private initSearchBox();
        private searchBoxOnPlacesChanged();
        private searchBoxOnEnterPressed();
        protected getMapOptions(): IMapOptions;
        private searchBoxSetBounds(bounds);
        protected onMapBoundsUpdated(data?: any, isSearch?: boolean): void;
        protected onMarkerClick(marker?: Marker): void;
        protected onClusterClick(marker?: Marker): void;
        protected updateMarkers(data?: any, isSearch?: boolean): void;
        private setSearchLocationInMap(point, zoomLevel?);
        private createSearchPoitMarker();
        currentLocationAction(actionContext: IControllerActionContext): void;
        nextPage(actionContext: IControllerActionContext): void;
        rememberPosition(actionContext: IControllerActionContext): void;
        protected setNearestStoreInfo(info: string): void;
        protected getStoresForPage(page: number, pageSize?: number, element?: any): void;
        protected renderStoresList(stores: any, target: HTMLElement): void;
        protected setGoogleDirectionLinks(): Q.Promise<any>;
        protected historyPushState(page: number, point?: google.maps.LatLng, zoom?: number, center?: google.maps.LatLng, elementPos?: number): void;
        protected parseHistoryState(): void;
        protected restoreMapFromHistoryState(): void;
        protected handlePromiseFail(title: string, reason: any): void;
    }
}








declare module Orckestra.Composer {
    interface IHandlebarsLocalization extends HandlebarsStatic {
        localizationProvider: {
            handleBarsHelper_localizeFormat(categoryName: string, keyName: string, args: any): string;
            handleBarsHelper_localize(categoryName: string, keyName: string): string;
            handleBarsHelper_isLocalized(categoryName: string, keyName: string): boolean;
        };
    }
}







declare module Orckestra.Composer {
    class ControllerRegistry {
        private static _instance;
        private static _registry;
        constructor();
        isRegistered(controllerName: any): boolean;
        retrieveController(controllerName: string): any;
        register(controllerName: string, controller: any): void;
        unregister(controllerName: string): any;
    }
}

declare module Orckestra.Composer {
    interface ICreateControllerOptions {
        controllerName: string;
        context: Orckestra.Composer.IControllerContext;
        eventHub: Orckestra.Composer.IEventHub;
        composerContext: IComposerContext;
        composerConfiguration: IComposerConfiguration;
    }
}

declare module Orckestra.Composer {
    /**
    * Factory for creating controllers.
    */
    class ControllerFactory {
        private static _controllerRegistry;
        /**
        * Creates and returns an instance of a controller.
        */
        static createController(options: ICreateControllerOptions): IController;
    }
}

interface IParsleyValidator extends Window {
    ParsleyValidator: any;
    ParsleyConfig: any;
}

declare module Orckestra.Composer {
    class ComposerContext implements IComposerContext {
        language: string;
    }
}

declare module Orckestra.Composer {
    var bootstrap: (window: Window, document: HTMLDocument, composerConfiguration: IComposerConfiguration) => void;
}

declare module Orckestra.Composer {
    interface IPopOverJqueryPlugin extends JQuery {
        popover(options?: any): any;
    }
}

declare module Orckestra.Composer {
    class SearchBoxController extends Controller {
        initialize(): void;
    }
}

declare module Orckestra.Composer {
    class PageNotFoundAnalyticsController extends Controller {
        initialize(): void;
    }
}

declare module Orckestra.Composer {
    class LanguageSwitchController extends Controller {
        private languageSwitchEvent;
        private cacheProvider;
        initialize(): void;
        onLanguageSwitch(): void;
    }
}

declare module Orckestra.Composer {
    class ErrorController extends Controller {
        private lastErrorCodes;
        initialize(): void;
        protected subscribeToEvents(): void;
        protected handleGeneralError(errors: IErrorCollection, source: string): void;
    }
}


declare module Orckestra.Composer {
    class AntiIFrameClickJackingPlugin implements IPlugin {
        initialize(window: Window, document: HTMLDocument): void;
        private getOrigin(window);
    }
}

declare module Orckestra.Composer {
    class ComposerValidationLocalizationPlugin implements IPlugin {
        initialize(window: Window, document: HTMLDocument): void;
        protected defineValidators(parsleyValidator: any): void;
    }
}

declare module Orckestra.Composer {
    class FocusElementPlugin implements IPlugin {
        initialize(window: Window, document: HTMLDocument): void;
    }
}

declare module Orckestra.Composer {
    class HelpBubblesPlugin implements IPlugin {
        initialize(window: Window, document: HTMLDocument): void;
    }
}

declare module Orckestra.Composer {
    class StickyAffixPlugin implements IPlugin {
        initialize(window: Window, document: HTMLDocument): void;
    }
}

declare module Orckestra.Composer {
    /**
    * Signature for executing a function that requires a controller action context.
    */
    interface IControllerActionSignature {
        (options: Composer.IControllerActionContext): void;
    }
}
