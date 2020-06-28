<template>
	<view class="content">
		页面 - 2<br/>
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
import { TestStore } from '../tabbar-1/store';
import { InitDataResponse } from '../tabbar-1/service';
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
