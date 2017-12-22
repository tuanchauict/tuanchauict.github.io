Una.component('kaas-header', {
    template: `
<page-header
    u:headercls="page-kaas-cover"
    u:leftcls="col-md-6 left"
    u:rightcls="col-md-6 right hidden-xs hidden-sm"
    u:title="The Got It KaaS Platform"
    u:description="While there are some specific expert-based services for specific topics, Got It KaaS is the first platform for all topics. An innovative AI algorithm called ExpertRank™, based on a combination of machine learning and human expertise, creates a real-time global auction for a user’s knowledge-based problem, matching the user with the most relevant expert available  within 30 seconds. The AI algorithm also audits every session and updates the ExpertRank™ based on real-time updates from an expert’s  knowledge-time sessions."
    u:image="imgs/kass-chart@2x.png"
></page-header> 
`
});

Una.component('kaas-benefits', {
    template: `
<section-gray u:cls="">
    <div class="row">
        <div class="col-sm-7 col-md-7 m-b-30">
            <div class="h4 section-heading">KaaS Platform Benefits</div>
            <p class="visible-xs visible-sm m-b-30"><img src="./imgs/kaas-platform-cover@2x.png" width="100%" alt=""></p>
            <p>By rolling out topic after topic using its proprietary AI algorithms, its knowledge data and a service management-based “playbook,” Got It is working on developing partnerships with leaders of cloud-based knowledge worker tools to bring KaaS to over a billion knowledge workers.</p>
            <p>In the longer term, Got It will open up its KaaS  platform to create a growing ecosystem of services that run on the platform. Imagine running a KaaS business on Got It for a topic you are passionate about. And monetizing your passion, too!</p>
            <ul class="list-unstyled m-t-40">
                <li>
                    <a href="https://www.got-it.co/solutions.html"><strong><u>Solutions</u></strong></a>
                </li>
            </ul>
        </div>
        <div class="col-md-4 col-md-offset-1 hidden-xs hidden-sm">
            <p><img src="./imgs/kaas-platform-cover@2x.png" width="100%" alt=""></p>
        </div>
    </div>
</section-gray>
`
});

Una.component('kaas', {
    template: `
<div class="page-wrapper page-gotit-kaas">
    <kaas-header></kaas-header>
    <kaas-benefits></kaas-benefits>
    <rec-purple></rec-purple>

</div>
`
});