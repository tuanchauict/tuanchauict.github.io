Una.component('home-header', {
    template: `
<header class="page-cover page-home-cover">
    <div class="container">
        <div class="row">
            <div class="col-md-7 col-md-push-5">
                <div class="cover-image-wrapper visible-md visible-lg">
                    <iframe src="./imgs/world_animation.html" class="cover-image"></iframe>
                </div>
            </div>
            <div class="col-md-5 col-md-pull-7">
                <h1>Empowering the World’s Brainpower using AI</h1>
        
                <div class="m-t-20 visible-xs visible-sm">
                    <img src="./imgs/map@2x.png" alt="The map" class="cover-image">
                </div>
                <p class="h3 text-regular">Why?</p>
                <p>Brainpower is available from millions of knowledgeable experts, but there has never been a way to gain access to Knowledge-as-a-Service - instant-on-demand, affordable one-to-one chat sessions, anytime. Key AI innovations now make it possible.</p>
                <!-- <p>More importantly, Got It provides a way for anyone to monetize their knowledge and time.</p> -->
            </div>
            <a href="#" class="see-more"></a>
        </div>
    </div>
</header>    
`
});

Una.component('home-investor-logo', {
    template: `
<section class="section-investor-logo">
    <div class="container">
        <ul class="list-inline m-b-0 clearfix">
            <li u-for="item in investors"><span><img src="imgs/{{item}}"></span></li>
        </ul>
    </div>
</section>
`, data: {
        investors: ['company2@2x.png', 'company3@2x.png', 'company4@2x.png', 'company5@2x.png', 'company6@2x.png',]
    }
});

Una.component('home-use-kaas', {
    template: `
<section-white u:cls="section-use-kaas">
    <div class="row">
        <div class="col-md-7 m-b-30 hidden-xs hidden-sm">
            <figure><img src="./imgs/kass-chart@2x.png" width="100%" alt=""></figure>
        </div>
        <div class="col-md-5">
            <div class="h4 section-heading m-b-30">How KaaS works</div>
            <p class="visible-xs visible-sm m-b-40"><img src="./imgs/kass-chart@2x.png" width="100%" alt=""></p>
            <p class="m-t-0">KaaS is delivered on-demand via a “knowledge-time” unit: a 10- or 20-minute chat session in which a user with a knowledge problem is connected immediately with a domain expert at a set price. And like many other services, KaaS guarantees a solution to your knowledge-based problem.</p>
        </div>
    </div>
</section-white>
`
});

Una.component('home-why-kaas', {
    template: `
<section-gray u:cls="section-why-kaas">
    <div class="h4 section-heading">Why KaaS?</div>
    <div class="row">
        <div class="col-md-7 col-md-push-5 left m-b-30">
            <figure class="text-center">
                <img src="./imgs/kaas-intro@2x.png" alt=""><br>
                <figcaption class="m-t-30">One Billion Knowledge Workers</figcaption>
            </figure>
        </div>
        <div class="col-md-5 col-md-pull-7 right">
            <p class="m-t-0">In recent years, technologies such as IaaS (Information as a Service), PaaS (Platform as a Service) and SaaS (Software as a Service) have made millions of technical professionals and businesses more productive. Yet even with all of these solutions, there remains a gap, as users of these services search for immediate answers to time-sensitive knowledge problems, often with inadequate results.
            </p>
            <p>By filling that gap, KaaS can be used to make all one billion users of IaaS, PaaS and SaaS even more productive.</p>
            <div class="m-t-40">
                <a href="https://www.got-it.co/kaas.html"><strong><u>More about KaaS</u></strong></a>
            </div>
        </div>
    </div>
</section-gray>    
`
});

Una.component('home', {
    template: `
<div class="page-wrapper page-gotit-home">
    <home-header></home-header>
    <home-investor-logo></home-investor-logo>
    <home-use-kaas></home-use-kaas>
    <home-why-kaas></home-why-kaas>
</div>
`
});