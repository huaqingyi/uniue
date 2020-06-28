import { Action, Mutation } from 'vuex-module-decorators';
import { VuexModule, Module } from '@/libs/vuex';
import { TestService, InitDataResponse } from './service';
import store from '@/store';

@Module({ store })
export class TestStore extends VuexModule {
    public static id: string;
    public static action: (callback: (model: any) => any) => string;

    public title: string;
    public count: number;

    public service: TestService;

    constructor(state: TestStore) {
        super(state);
        this.service = new TestService();
        this.title = 'Hello World ...';
        this.count = 0;
    }

    @Action({ commit: 'addCountSuccess' })
    public async addCount() {
        console.log('action count');
        return await this.service.count(this.count);
    }

    @Mutation
    public async addCountSuccess(count: number) {
        this.count = count;
    }
}
