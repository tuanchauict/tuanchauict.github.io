Una.component('experts-header', {
    template: `
<header class="page-cover bg-white page-expert-cover">
    <div class="cover-image-wrapper visible-lg visible-md">
        <img src="./imgs/expert-cover@2x.png" alt="" class="cover-image">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-5">
                <h1>Share Your Knowledge.</h1>
                <div class="h3">Become a Got It Expert.</div>
                <p>Earn money on your own time and schedule. Anytime, anywhere! Join our community of over 20,000 experts ready to help people learn better, together.</p>
            </div>
        </div>
    </div>
    <div class="m-t-20 visible-xs visible-sm"><img src="./imgs/expert-cover@2x.png" alt="" class="img-responsive"></div>
</header>
`
});

Una.component('expert-intro-item', {
    template: `
<div class="col-sm-6 col-md-5 {{cls}}">
    <p class="m-b-40"><img src="{{information.logo}}" height="90" class="img-responsive" alt=""></p>
    <p class="m-b-20">{{information.description}}</p>
    <!-- <button class="btn btn-default text-primary" type="button" data-toggle="modal" data-target="#modalProExpert">BECOME A PRO EXPERT</button> -->
    <a href="{{information.btnUrl}}" class="btn btn-default {{information.btnColor}}">{{information.btnText}}</a>
</div>
`, props: ['information', 'cls']
});

Una.component('expert-intro', {
    template: `
<section-gray u:cls="section-expert-intro">
    <div class="row">
        <expert-intro-item u::information="pro" u:cls="left m-b-40"></expert-intro-item>
        <hr class="visible-xs">
        <expert-intro-item u::information="study" u:cls="col-md-offset-2 right"></expert-intro-item>
    </div>
</section-gray>    
`, data: {
        pro: {
            logo: 'imgs/gotit-pro-expert-logo@2x.png',
            description: 'Got It Pro Experts help professionals in business and technology fields learn solutions for spreadsheets, macros, formulas, programming, and more.',
            btnUrl: 'https://expert.excelchat.co/',
            btnColor: 'text-primary',
            btnText: 'BECOME A PRO EXPERT'
        },
        study: {
            logo: 'imgs/gotit-study-expert-logo@2x.png',
            description: 'Got It Study Experts tutor STEM students learning subjects like Algebra, Pre-Calculus, Calculus, Chemistry, and Physics.',
            btnUrl: 'https://www.got-it.co/experts/study',
            btnColor: 'text-info',
            btnText: 'BECOME A STUDY EXPERT'
        }
    }
});

Una.component('experts', {
    template: `
<div class="page-wrapper page-gotit-expert">
    <experts-header></experts-header>
    <expert-intro></expert-intro>
    <rec-purple></rec-purple>
</div>
`
});