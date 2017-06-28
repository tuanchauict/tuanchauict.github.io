var appData = {
    a: '1'
};

Vue.use(Sortable);


var app = new Vue({
    el: '#app',
    data: function(){
        var  md = new MobileDetect(window.navigator.userAgent);
        var stockIds = localStorage.getItem('stockIds');

        return {
            mobile: (md.os() === 'iOS' && md.mobile() !== 'iPad') || (md.os() == 'AndroidOS'),
            stocks: [
                {
                    id: 'HAG',
                    name: 'Hoang Anh Gia Lai'
                },{
                    id: 'MBB',
                    name: 'Ngan Hang Quan Doi'
                }
            ]
        }
    },
    method: {
        onSortUpdate: function(event){

        }
    }
});
