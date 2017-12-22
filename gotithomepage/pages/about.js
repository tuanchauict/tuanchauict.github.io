Una.component('about-header', {
    template: `
<page-header
    u:headercls="page-about-cover"
    u:leftcls="col-md-5"
    u:rightcls="col-md-4 col-md-offset-2 hidden-xs hidden-sm"
    u:title="Our Mission"
    u:description="Our mission is simple: to connect and economically empower people everywhere. We’re enabling knowledge to be traded directly between one human being and another through our AI-powered platform."
    u:image="imgs/about-cover@2x.png"
></page-header> 
`
});

Una.component('about-story', {
    template: `
<section-gray u:cls="section-story">
    <div class="h4 section-heading">Our Story</div>
    <div class="row">
        <div class="col-sm-3 col-lg-2">
            <a href="#"><img src="./imgs/founders.jpg" alt="Founders" style="width: 160px;" class="img-circle"></a>
        </div>
        <div class="col-sm-8 col-lg-9">
            <p><em>As co-founders of Got It, we have this vision: enable anyone to get instant, interactive expert help on their knowledge related problem, anytime. This is a different kind of idea for person-to-person interaction in a social world focused more on self-expression and sharing of opinions. We deliver our vision through safe, AI assisted, 10 minute chat sessions with ranked and vetted human experts. You could be a learner, but you could also be an expert, in some topic.</em> <a href="https://www.got-it.co/about-message.html" title=""><strong><u>read more</u></strong></a></p>
        </div>
    </div>
</section-gray>   
`
});

Una.component('about-person', {
    template: `
<div class="{{cls}}">
   <div class="user-item">
        <img src="{{director.image}}" class="img-circle"/>
        <div class="user-item-name">{{director.name}}</div>
        <div class="user-item-position">{{director.position}}</div>
    </div>
</div>   
`, props: ['director', 'cls'],
    data: {
        cls: 'col-sm-15 col-xs-6'
    }
});

Una.component('about-board-directors', {
    template: `
<section-white u:cls="section-director">
    <div class="h4 section-heading">Board of Directors</div>
    <div class="row text-center">
        <about-person u::director="item" u-for="item in directors"></about-person>
    </div>
</section-white>   
`, data: {
        directors: [
            {
                image: 'imgs/hungtran.jpg',
                name: 'Hung Tran, Ph.D.',
                position: 'Founder &amp; CTO'
            }, {
                image: 'imgs/peterrelan.jpg',
                name: 'Peter Relan',
                position: 'Co-founder &amp; CEO'
            }, {
                image: 'imgs/dipendersaluja.jpg',
                name: 'Dipender Saluja',
                position: 'Managing Director Capricorn Investment Group'
            }, {
                image: 'imgs/janefu.jpg',
                name: 'Jane Fu',
                position: 'Kinzon Capital'
            }, {
                image: 'imgs/bradbao.jpg',
                name: 'Brad Bao',
                position: 'Former Tencent Executive'
            },
        ]
    }
});

Una.component('about-investor', {
    template: `
<div class="col-xs-6 col-sm-3">
    <div class="investor-logo"><img src="{{image}}" alt=""></div>
</div>
`, props: ['image']
});

Una.component('about-investors', {
    template: `
<section-gray u:cls="section-investor">
    <div class="h4 section-heading">Investors</div>
    <p class="h3">$10 million in funding from well-known Silicon Valley investors</p>
    <div class="row m-t-40">
        <about-investor u:image="{{item}}" u-for="item in investors"></about-investor>
    </div>
</section-gray>    
`, data: {
        investors: [
            'imgs/investor-you@2x.png',
            'imgs/investor-cap@2x.png',
            'imgs/investor-kin@2x.png',
            'imgs/investor-int@2x.png',
        ]
    }
});

Una.component('about-advisors', {
    template: `
<section-white u:cls="section-advisor">
    <div class="h4 section-heading">Advisors</div>
    <div class="row row-flex text-center">
        <about-person u::director="item" u:cls="col-xs-6 col-md-2" u-for="item in advisors"></about-person>
    </div>
</section-white>   
`, data: {
        advisors: [
            {
                image: 'imgs/edselclark.jpg',
                name: 'Edsel Clark',
                position: '30 years of teaching'
            },
            {
                image: 'imgs/guykawasaki.jpg',
                name: 'Guy Kawasaki',
                position: 'Need we say more'
            },
            {
                image: 'imgs/rohanrelan.jpg',
                name: 'Rohan Relan',
                position: 'ex Google technologist'
            },
            {
                image: 'imgs/davidye.jpg',
                name: 'David Ye',
                position: 'ex Facebook technologist'
            },
            {
                image: 'imgs/jerryheld.jpg',
                name: 'Jerry Held',
                position: 'BOD member MemSQL, NetApp, Informatica'
            },
            {
                image: 'imgs/johnballard.jpg',
                name: 'John Ballard',
                position: 'Business guy, Capricorn Investment Group'
            },
            {
                image: 'imgs/kienpham.jpg',
                name: 'Kien Pham',
                position: 'White House Fellow'
            },
            {
                image: 'imgs/kurtvanlehn.jpg',
                name: 'Kurt Vanlehn',
                position: 'Professor of Education'
            },
            {
                image: 'imgs/leswright.jpg',
                name: 'Les Wright',
                position: '20 IPOs and exits'
            },
            {
                image: 'imgs/monicatran.jpg',
                name: 'Monica Tran',
                position: 'Product champ, Apple, Khan Academy'
            },
            {
                image: 'imgs/rahulsood.jpg',
                name: 'Rahul Sood',
                position: 'xGoogler, Google Apps and Search at Work'
            }
        ]
    }
});

Una.component('about', {
    template: `
<div class="page-wrapper page-gotit-about">
    <about-header></about-header>
    <about-story></about-story>
    <about-board-directors></about-board-directors>
    <about-investors></about-investors>
    <about-advisors></about-advisors>
    <section style="margin-top: -40px; margin-bottom: 30px;">
        <div class="container">
            <ul class="list-unstyled">
                <li class="m-b-10"><a href="https://www.got-it.co/team.html"><strong><u>Meet our team!</u></strong></a></li>
            </ul>
        </div>
    </section>
</div>
`
});