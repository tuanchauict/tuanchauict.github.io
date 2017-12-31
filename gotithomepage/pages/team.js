Una.component('team-header', {
    template: `
<header class="page-cover bg-white page-team-cover">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h1 class="h1">Meet Our Team</h1>
                <p class="visible-xs visible-sm"><img src="./imgs/team-cover@2x.png" alt="" class="img-responsive"></p>
                <p class="m-t-20">At Got It, we’re an intellectually curious group that loves to think big, work hard, and get stuff done all while have a blast doing it. We’re hugely passionate about solving hard problems while building innovative products that delight our users. <span class="text-regular">Come join us!</span></p>
            </div>
            <div class="col-md-6 col-md-offset-1 hidden-xs hidden-sm">
                <div class="cover-image-wrapper">
                    <img src="./imgs/team-cover@2x.png" alt="" class="cover-image">
                </div>
            </div>
        </div>
    </div>
</header>
`
});

Una.component('team-position', {
    template: `
<div class="col-md-4">
    <div class="job-item">
        <p class="item-header h3">{{information.title}}</p>
        <div class="item-text {{information.color}} m-t-20">
            <p><strong>{{information.subtitle}}</strong></p>
            <p class="job-description" style="height: 266px;">{{information.description}}</p>
            <div class=""><a href="{{information.url}}" target="_blank">READ MORE</a></div>
        </div>
    </div>
</div>
`, props: ['information']
});

Una.component('team-positions', {
    template: `
<section-gray u:cls="section-job">
    <div class="h4 section-heading">Open Positions</div>
    <div class="row row-flex">
        <team-position u::information="operations"></team-position>
        <team-position u::information="product"></team-position>
        <team-position u::information="growth"></team-position>
    </div>
    <ul class="list-unstyled m-t-30">
        <li>
            <a href="https://www.got-it.co/careers.html#op"><strong><u>More positions</u></strong></a>
        </li>
    </ul>
</section-gray>

`, data: {
        operations: {
            title: 'Operations',
            subtitle: 'Ops Director',
            description: 'Looking for an exceptional operations leader to own holistic Study Expert management and build world class service delivery. Perfect for the intellectually curious that have built high performing teams and navigated unique operational challenges in the past.',
            color: 'ops-team',
            url: 'https://jobs.lever.co/gotit/60a8b2de-ee9c-4cfd-87b4-d3d4397a1bd5'
        },
        product: {
            title: 'Product',
            subtitle: 'Product Lead',
            description: `Got It is a growing venture backed startup developing an on demand platform for knowledge. Got It enables anyone to get instant, interactive expert help on their knowledge related problem, anytime.
In our first vertical, education, we have an extremely well defined product market fit; in fact the Got It Mobile app is one of the top apps in Apple App Store Education. And now we are looking to expand to other verticals with the goal to connect 7 billion human brains.
Got It is looking for a talented Product Manager to join our small team of ex Googler, Lyft, GREE, Apple, Oracle, etc. to help turn our vision to reality.`,
            color: 'product-team',
            url: 'https://jobs.lever.co/gotit/2e0c90ea-606a-49ef-89f7-d949abd2d6ac'
        },
        growth: {
            title: 'Growth',
            subtitle: 'Growth Lead',
            description: 'Got It! Is looking for a talented growth lead to help build our customer acquisition efforts across our Got It Pro verticals. As the Growth Lead, you will drive the non paid, and paid user acquisition programs within Got It Pro, helping to define and launch all acquisition strategies (product, user acquisition and marketing/push notifications) that help drive our ambitious growth goals. If you thrive in environments where you play a central role in solving strategic growth problems, Got It is the place for you.',
            color: 'engineering-team',
            url: 'https://jobs.lever.co/gotit/b4188f0b-0c72-4da2-bf3d-94408ba2a167'
        }
    }
});

Una.component('team', {
    template: `
<div class="page-wrapper page-gotit-team">
    <team-header></team-header>
    <team-positions></team-positions>
    <!--<div style="height:190px; background: url('imgs/connect-illustration@2x.png') center bottom no-repeat; background-size:100%;"></div>-->

</div>
`
});