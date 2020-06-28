## Uni App for Typescript
### src/main.ts
```
import './libs';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

new App().$mount()
```

### lib 主要为 use component 及 install

## store
### global dynamic store 用于全局
```
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
```

## service
```
import { Service } from '@/libs/vuex';
import { ResponseImpl } from '@/impls/response.impl';

export class InitDataResponse extends ResponseImpl {
    constructor() {
        super();
    }
}

// tslint:disable-next-line:max-classes-per-file
export class TestService extends Service {
    public async count(count: number) {
        // return await this.http.get('', { data });
        console.log('service test');
        return Promise.resolve(count + 1);
    }
}
```

## component 调用 store 和 service
```
<template>
    <view>
        <scroll-view scroll-y class="page">
            <view class="nav-list">
                Home {{count}} ... TestApi {{data}} ...
                <button @click="add">add</button>
            </view>
            <view class="cu-tabbar-height"></view>
        </scroll-view>
    </view>
</template>

<script lang="ts">
import Vue from '@/lib/mixin';
import { Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { HomeStore } from './store';

@Component({
    components: {}
})
export default class extends Vue {

    @State(state => state[HomeStore.id].count)
    public count!: number;

    @State(state => state[HomeStore.id].data)
    public data!: any;

    @Action(HomeStore.action(
        (props: HomeStore) => props.incr
    ))
    public incr!: (props: number) => Promise < number > ;

    @Action(`${HomeStore.id}/test`)
    public test!: () => Promise < any > ;

    public async onLoad() {
        // wx.showLoading();
    }

    public async add() {
        console.log(3333, await this.incr(10));
    }

    public async created() {
        this.setTitle('主页');
        console.log(2222, await this.test());
    }
}
</script>
```

### module store 用于模块间
```
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
```

### 使用
```
<template>
	<view class="content">
		页面 - 1<br/>
		{{title}}<br/>
		App Count: {{gcount}}<br/>
		Test Count: {{tcount}}<br/>
		<u-button @click="addCount">Test Action</u-button>
	</view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Action, State } from 'vuex-class';
import { TestStore } from './store';
import { InitDataResponse } from './service';
import { AppModule } from '@/store/modules/app';

@Component
export default class extends Vue {

	@State(state=> state[TestStore.id].title)
	public title!: string;

	@State(state=> state[TestStore.id].count)
	public tcount!: number;

	public get gcount() {
		return AppModule.count;
	}
	
	@Action(TestStore.action(
		(props: TestStore) => props.addCount
	))
	public addCount!:() => Promise<number>;

    public async onLoad() {
        // await this.init();
    }
}
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
```

## http config
### src/config/http.ts
```
import { UniHttpConfig } from '@/lib/http';

export default <UniHttpConfig>{
    baseURL: 'http地址',
    header: {
        'Content-Type': 'application/json'
    }
};
```

## http BeforeInterceptor
### src/lib/scripts/prototype.ts
```
import Vue from 'vue';
import hconfig from '../../config/http';
import { UniHttp, BeforeInterceptor, UniHttpConfig, UniHttpResponseError, AfterInterceptor, UniHttpResponse } from '../http';

Vue.prototype.$http = UniHttp.use(class implements BeforeInterceptor {
    public success(config: UniHttpConfig) {
        console.log('is global request interceptor 1', config);
        // getToken() && (config.header.token = getToken());
        return config;
    }
    public fail(err: UniHttpResponseError) {
        console.error('is global fail request interceptor: ', err);
        return false;
    }
}).after(class implements AfterInterceptor {
    public success(response: UniHttpResponse, config: UniHttpConfig) {
        console.log('is global response interceptor');

        // 回传数据中没有携带 code
        if (!(response.data && response.data.code)) {
            return response;
        }

        // 用code模拟http状态码
        const code = parseInt(response.data.code);

        // 20x ~ 30x
        if (200 <= code && code < 400) {
            return response;
        } else {
            return Promise.reject(response);
        }
    }
    public fail(err: UniHttpResponseError, config: UniHttpConfig) {
        console.error('is global response fail interceptor');
        console.error('err: ', err)
        console.error('config: ', config)
        const { errMsg, data } = err;

        return Promise.reject({ errMsg, data, config });
    }
}).create(hconfig);


declare module 'vue/types/options' {
    const $http: UniHttp;
}
```
