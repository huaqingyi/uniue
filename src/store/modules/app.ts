import {
    VuexModule,
    Module,
    Mutation,
    Action,
    getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export enum DeviceType {
    Mobile,
    Desktop,
}

export interface IAppState {
    count: number;
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {

    public count: number;

    constructor(props: any) {
        super(props);
        this.count = 0;
    }

    @Mutation
    private SET_SIZE(count: number) {
        this.count = count;
        return this.count;
    }

    @Action
    public addCount() {
        return this.SET_SIZE(this.count + 1);
    }
}


export const AppModule = getModule(App);
