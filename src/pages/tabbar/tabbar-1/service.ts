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
