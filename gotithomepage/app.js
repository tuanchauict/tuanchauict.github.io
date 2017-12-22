const app = new Una({
    el: 'app',
    data: {
        activeTab: 0,
        tabs: [
            {title: 'Home'},
            {title: 'KaaS Platform'},
            {title: 'Solutions'},
            {title: 'About'},
            {title: 'Team'},
            {title: 'Experts'},
        ]
    },
    methods: {
        active: function(index){
            this.activeTab = index;
        }
    }
});
