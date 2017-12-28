const titles = ['Got It', 'KaaS Platform', 'Solutions', 'About', 'Team', 'Experts', 'Careers'];

const app = new Una({
    el: 'app',
    data: {
        activeTab: (() => {
            let tab = window.location.search.match(/tab=(.+?)(?:&|$)/);
            let index = 0;
            if (tab && tab.length >= 2){
                tab = tab[1];
                const map = {
                    '': 0,
                    'kaas': 1,
                    'solutions': 2,
                    'about': 3,
                    'team': 4,
                    'experts': 5,
                    'careers': 6,
                };
                if (map.hasOwnProperty(tab)) {
                    index = map[tab];
                }
            }
            document.title = titles[index];
            return index;
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
        active: function (index) {
            this.activeTab = index;
            const params = ['', '?tab=kaas', '?tab=solutions', '?tab=about', '?tab=team', '?tab=experts', '?tab=careers'];
            history.pushState({}, titles[index], window.location.pathname + params[index]);
            window.scroll(0, 0);
            document.title= titles[index];
        }
    }
});