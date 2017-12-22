Una.component('solutions-header', {
    template: `
<page-header
    u:headercls="page-solution-cover"
    u:leftcls="col-md-6"
    u:rightcls="col-md-5 col-md-offset-1 hidden-xs hidden-sm"
    u:title="Solutions"
    u:description="We’re empowering every person to trade their knowledge with each other through instant, AI-powered chat sessions. From professionals to students to lifelong learners, Got It users get instant solutions to their knowledge problems -- all within seconds. Over 2.5 million chat sessions have already been held with 20,000 qualified worldwide Experts. By adding new topics each month, we’re growing our Knowledge-as-a-Service (KaaS) to solve every existing knowledge problem."
    u:image="imgs/kaas-benefits@2x.png"
></page-header> 
`
});

Una.component('solution-icon', {
    template: `
<li><img src="{{image.src}}" width="{{width}}"><br/>{{image.title}}</li>
`, props: ['image', 'width']
});

Una.component('solution-info', {
    template: `
<div class="{{information.cls}}">
    <p class="text-center"><img src="{{information.logo}}" height="90" class="img-responsive"></p>
    <div class="h3 m-t-30">{{information.subtitle}}</div>
    <p class="m-t-20">{{information.description}}</p>
    <ul class="list-inline m-t-30 m-b-30">
        <solution-icon u::image="item" u:width="{{information.imageWidth}}" u-for="item in information.images"></solution-icon>
    </ul>
    <a class="btn btn-default {{information.button.cls}}" href="{{information.button.url}}">{{information.button.title}}</a>

</div>    
`, props: ['information'],
});

Una.component('solution-info-container', {
    template: `
<section-gray u:cls="section-solution-intro">
    <div class="row">
        <solution-info u::information="pro"></solution-info>
        <solution-info u::information="study"></solution-info>
    </div>
</section-gray>
`, data: {
        pro: {
            cls: 'col-sm-6 col-md-5 left',
            logo: 'imgs/gotit-pro-logo@2x.png',
            subtitle: 'Work smarter, not harder.',
            description: 'Got It Pro is for professionals in business or technology fields. Professional topics include:',
            button: {
                cls: 'text-primary',
                title: 'Visit Got It Pro',
                url: 'https://www.got-it.co/solutions/pro/spreadsheets'
            },
            imageWidth: 48,
            images: [
                {src: "imgs/icon-excel@2x.png", title: "Excel",},
                {src: "imgs/icon-gsheet@2x.png", title: "Google Sheets",},
            ]
        },
        study: {
            cls: 'col-sm-6 col-md-6 col-md-offset-1 right',
            logo: 'imgs/gotit-study-logo@2x.png',
            subtitle: 'Get smarter, faster.',
            description: 'Got It Study is for all STEM learners - college-bound, college students or post-grad students.',
            button: {
                cls: 'text-info',
                title: 'Visit Got It Study',
                url: 'https://www.got-it.co/solutions/study'
            },
            imageWidth: 22,
            images: [
                {src: "imgs/sub-1@2x.png", title: "Algebra"},
                {src: "imgs/sub-2@2x.png", title: "Geometry",},
                {src: "imgs/sub-3@2x.png", title: "Trigonometry",},
                {src: "imgs/sub-4@2x.png", title: "Calculus",},
                {src: "imgs/sub-5@2x.png", title: "Chemistry",},
                {src: "imgs/sub-6@2x.png", title: "Physics",},
            ]
        }
    }
});

Una.component('solutions-form', {
    template: `
<section-white>
    <div class="h2">Is there a topic you’d like to see on Got It?</div>
    <p class="m-b-40">Please request it below!</p>
    <div class="row">
        <div class="col-md-6">
            <div id="page_message"></div>
            <form id="frm_request_subject" method="POST" action="." class="m-b-30" novalidate="novalidate">
                <div class="form-group form-group-lg">
                    <input class="form-control" type="text" name="name" placeholder="Name (optional)">
                </div>
                <div class="form-group form-group-lg">
                    <input class="form-control" type="text" name="topic" placeholder="Topic" required="" aria-required="true">
                </div>
                <div class="form-group form-group-lg">
                    <textarea class="form-control" rows="5" name="notes" placeholder="Notes" required="" aria-required="true"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" id="submit_request_btn" class="btn btn-lg btn-primary">SEND MESSAGE</button>
                </div>
            </form>
        </div>
    </div>
</section-white>    
`
});

Una.component('solutions', {
    template: `
<div class="page-wrapper page-gotit-solution">
    <solutions-header ></solutions-header>
    <solution-info-container></solution-info-container>
    <solutions-form></solutions-form>
</div>
`
});