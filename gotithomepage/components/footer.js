Una.component('footer-stats-item', {
    template: `
<li>
    <div class="h2 m-t-0 m-b-0">{{title}}</div>
    <div>{{subtitle}}</div>
</li>`,
    props: ['title', 'subtitle']
});

Una.component('footer-stats-list', {
    template: `
<ul class="list-inline list-statistic pull-left">
    <footer-stats-item u:title="{{item.title}}" u:subtitle="{{item.subtitle}}" u-for="item in stats"/>
</ul>`,
    data: {
        stats: [
            {title: "3.0M", subtitle: "Got It Moments"},
            {title: "4.4*", subtitle: "Average App Store Rating"},
        ]
    }
});

Una.component('footer-download', {
    template: `
<ul class="list-inline list-download">
    <li u-for="item in list"><a href="{{item.url}}" target="_blank" ><img width="140" src="{{item.image}}"/></a></li>
</ul>`,
    data: {
        list: [
            {
                url: 'https://play.google.com/store/apps/details?id=co.gotitapp.android',
                image: 'imgs/icon-play-store@2x.png'
            }, {
                url: 'https://itunes.apple.com/app/apple-store/id797535508?mt=8',
                image: 'imgs/icon-app-store@2x.png'
            }
        ]
    }
});

Una.component('footer-left', {
    template: `
<div class="col-md-7 left">
    <div class="clearfix">
        <div class="footer-logo pull-left">
            <a href="./"><img src="imgs/logo-main-white@2x.png"></img></a>  
        </div>
        <footer-stats-list></footer-stats-list>
    </div>
    <footer-download></footer-download>
    <p>One of the Top 10 Education Apps on the App Store.</p>
</div>
`
});

Una.component('footer-link', {
    template: `<li class="footer-link"><a href="{{url}}">{{title}}</a></li>`,
    props: ['url', 'title']
});

Una.component('footer-links', {
    template: `
<div class="row">
    <div class="col-sm-3">
        <div class="footer-link footer-link--social">
            <a href="https://www.facebook.com/Got-It-Pro-765732513609152/" target="_blank"><img src="./imgs/ic_footer_fb@2x.png" alt="Facebook" width="8"></a>
            <a href="https://twitter.com/got_it_co" target="_blank"><img src="./imgs/ic_footer_tw@2x.png" alt="Twitter" width="18"></a>
        </div>
    </div>
    <div class="col-sm-3" u-for="col in cols">
        
        <ul class="list-unstyled" u-for="item in col">
            <footer-link u:title="{{item.title}}" u:url="{{item.url}}"></footer-link>
        </ul>
    </div>
</div>
`,
    data: {
        cols: [
            [
                {title: 'KaaS Platform', url: './?tab=kaas'},
                {title: 'Solutions', url: './?tab=solutions'},
                {title: 'About', url: './?tab=about'},
            ],
            [
                {title: 'Team', url: './?tab=team'},
                {title: 'Careers', url: './?tab=careers'},
                {title: 'Press', url: 'https://www.got-it.co/press.html'},
                {title: 'Experts', url: './?tab=experts'},
            ],
            [
                {title: 'Contact', url: 'https://www.got-it.co/contact.html'},
                {title: 'Terms', url: 'https://www.got-it.co/terms.html'}
            ]
        ]
    }
});

Una.component('footer-right', {
    template: `
<div class="col-md-5 right">
    <footer-links></footer-links>
    <p class="footer-intro text-regular"><small>Got It is on a mission to change the world of learning and knowledge sharing. Using its advanced Knowledge-as-a-Service platform technology, Got It gives all users—professionals, learners and consumers—a way to access and engage with live experts to help them solve problems, anytime, anywhere via the ease of their mobile phone. Spun out from the YouWeb incubator and backed by the Capricorn Investment Group and Fosun, Got It is led by a proven leadership team and dual-headquartered in the Silicon Valley and Vietnam.</small></p>
</div>    
`
});

Una.component('footer-component', {
    template: `
<footer class="page-footer">
    <div class="container">
        <div class="row">
            <footer-left></footer-left>
            <footer-right></footer-right>
        </div>
        <div class="footer-copyright"><small>© 2017 Got It, Inc. All rights reserved.</small></div>
    </div>    
</footer>
`
});
