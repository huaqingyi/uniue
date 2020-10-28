<script lang="ts">
    import Vue from 'vue';
    import store from './store';
    
    export default Vue.extend({
        mpType: 'app',
        store,
        onLaunch() {
            console.log('App Launch');

            setTimeout(() => {
                uni.setTabBarBadge({
                    index: 1,
                    text: '31'
                });
                uni.showTabBarRedDot({
                    index: 3
                });
            }, 1000);
        },
        onShow() {
            console.log('App Show');
        },
        onHide() {
            console.log('App Hide');
        }
    });
</script>

<style lang="scss">
    /*每个页面公共css */
    @import 'uview-ui/index.scss';
</style>
