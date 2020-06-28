import { VuexModule as VxModule, Module as VModule } from 'vuex-module-decorators';
import { Module as Mod, Store } from 'vuex';
import { map, merge } from 'lodash';
import { Service } from './service';
import { ModuleOptions } from 'vuex-module-decorators/dist/types/moduleoptions';

export type TLFServiceClass<V> = (new (...args: any[]) => V & Service) & typeof Service;

// tslint:disable-next-line:ban-types
export function Module<S>(options: { store: Store<any> }): ClassDecorator;
export function Module<S>(options: any & Mod<S, any>): any {
    if (options.store) {
        return (module: any) => {
            if (!(module as any).id) {
                (module as any).id = Number(
                    Math.random().toString().substring(3, 10) +
                    Date.now(),
                ).toString(36);
            }

            (module as any).keys = {};
            map(merge({}, module.actions, module.mutations, module.getters), (o, i) => {
                (module as any).keys[i] = i;
            });
            options.store.registerModule(module.id, VModule({ namespaced: true })(module));
        };
    } else {
        if (!(options as any).id) {
            (options as any).id = Number(
                Math.random().toString().substring(3, 10) +
                Date.now(),
            ).toString(36);
        }

        (options as any).keys = {};
        map(merge({}, options.actions, options.mutations, options.getters), (o, i) => {
            (options as any).keys[i] = i;
        });
        VModule({ namespaced: true })(options);
    }
}

export class VuexModule<S = ThisType<any>, R = any> extends VxModule {
    public static id: string;
    public static keys: { [x: string]: string };
    // tslint:disable-next-line:ban-types
    public static action(callback: (model: any & VuexModule) => Function) {
        return `${this.id}/${callback(this.keys)}`;
    }
}
