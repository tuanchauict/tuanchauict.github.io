const app = new Una({
    el: 'app',
    data: {
        activeTab: (() => {
            let tab = window.location.search.match(/tab=(.+?)(?:&|$)/);
            if (!tab || tab.length < 2){
                return 0
            }
            tab = tab[1];
            const map = {
                '': 0,
                'kaas': 1,
                'solutions': 2,
                'about': 3,
                'team': 4,
                'experts': 5,
            };
            if (map.hasOwnProperty(tab)) {
                return map[tab];
            }
            return 0;
        })(),
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
            const map = {
                0: '',
                1: '?tab=kaas',
                2: '?tab=solutions',
                3: '?tab=about',
                4: '?tab=team',
                5: '?tab=experts',
            };

            history.pushState({}, null, window.location.pathname + map[index]);

        }
    }
});
