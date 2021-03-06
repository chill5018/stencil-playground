export interface InputProps extends Object {
    modelValue: string | boolean;
}
interface ComponentOptions {
    modelProp?: string;
    modelUpdateEvent?: string | string[];
    externalModelUpdateEvent?: string;
}
/**
* Create a callback to define a Vue component wrapper around a Web Component.
*
* @prop name - The component tag name (i.e. `ion-button`)
* @prop componentProps - An array of properties on the
* component. These usually match up with the @Prop definitions
* in each component's TSX file.
* @prop componentOptions - An object that defines additional
* options for the component such as router or v-model
* integrations.
*/
export declare const defineContainer: <Props>(name: string, componentProps?: string[], componentOptions?: ComponentOptions) => import("vue").DefineComponent<Props & InputProps, object, {}, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Props & InputProps>>, import("vue").ExtractDefaultPropTypes<Props & InputProps>>;
export {};
