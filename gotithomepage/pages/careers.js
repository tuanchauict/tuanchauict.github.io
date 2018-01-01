Una.component('careers-header', {
    template: `
<header class="page-cover page-career-cover">
    <div class="cover-image-wrapper visible-lg visible-md">
        <img src="imgs/career-cover@2x.png" alt="" class="cover-image">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h1>Careers</h1>
                <p>Be part of an intellectually curious and passionate tribe building great products - we’re changing millions of lives worldwide each day. Come join us!</p>

            </div>
        </div>
    </div>
    <img src="imgs/career-cover@2x.png" alt="" class="img-responsive visible-xs visible-sm">
</header>  
`
});

Una.component('career-position-group', {
    template: `
<div class="col-md-3">
    <div class="job-item">
        <p class="item-header h3">{{title}}</p>
        <div class="item-text {{color}}">
            <a class="job-link" href="{{item.url}}" target="_blank" u-for="item in positions">{{item.title}}</a>
        </div>
    </div>
</div>
`, props: ['title', 'color', 'positions']
});

Una.component('career-positions', {
    template: `
<section-gray u:cls="section-job">
    <div class="h4 section-heading">Open Positions</div>
    <div class="row row-flex">
        <career-position-group u-for="item in positions" u:title="{{item.title}}" u:color="{{item.color}}" u::positions="item.items"></career-position-group>
    </div>
    <ul class="list-unstyled m-t-30">
        <li>
            <a href="team.html"><strong><u>Meet our team!</u></strong></a>
        </li>
    </ul>
</section-gray>
`, data: {
        positions: [
            {
                title: 'Operations',
                color: 'ops-team',
                items: [
                    {title: 'Customer Love Representative (US)', url: 'https://jobs.lever.co/gotit/6487dea9-57b0-43db-aa34-020479b5b3c3'},
                    {title: 'Customer Love Representative (VN)', url: 'https://jobs.lever.co/gotit/e25484f3-9c8f-49e1-9e02-117942f4003b'},
                    {title: 'Operations Associate', url: 'https://jobs.lever.co/gotit/c081163c-c77a-42c6-bff0-41d3c4f3a1ca'},
                ]
            }, {
                title: 'Product',
                color: 'product-team',
                items: [
                    {title: 'Head of UX/UI', url: 'https://jobs.lever.co/gotit/34e198d3-894f-4f75-9222-60a7e48ca922'},
                    {title: 'Product Lead', url: 'https://jobs.lever.co/gotit/2e0c90ea-606a-49ef-89f7-d949abd2d6ac'},
                    {title: 'Technical Product Manager', url: 'https://jobs.lever.co/gotit/855ed253-0f79-492b-8cc7-69d05104743c'},
                    {title: 'UI Designer', url: 'https://jobs.lever.co/gotit/bf476689-c871-4807-af78-c31274ee81e0'},
                    {title: 'Design Intern', url: 'https://jobs.lever.co/gotit/1675b6aa-3d34-41f1-bb44-8988a4209ad1'},
                ]
            }, {
                title: 'Engineering',
                color: 'engineering-team',
                items: [
                    {title: 'Android Engineer', url: 'https://jobs.lever.co/gotit/50b84c08-302a-4fd7-a54e-b3697e1b221d'},
                    {title: 'Backend Engineer', url: 'https://jobs.lever.co/gotit/e248ad85-b89d-49c2-933a-6410a5e62a18'},
                    {title: 'HTML CSS Developer', url: 'https://jobs.lever.co/gotit/d6e09f30-b150-4cc2-aeea-c09c401e647b'},
                    {title: 'iOS Engineer', url: 'https://jobs.lever.co/gotit/381f4602-9ae1-43fa-b741-1f036c44cb0a'},
                    {title: 'JavaScript, AngularJS, ReactJS Developer', url: 'https://jobs.lever.co/gotit/b62672b3-4fe2-43f5-a01e-044d0c72fe2a'},
                    {title: 'Senior Test Engineer', url: 'https://jobs.lever.co/gotit/323c28be-69e1-4389-bcc3-624f5f8468fa'},
                    {title: 'Software Engineering Intern', url: 'https://jobs.lever.co/gotit/e5666894-5c9d-4f81-be78-6b74fe63d913'},
                ]
            }, {
                title: 'Growth',
                color: 'product-team',
                items: [
                    {title: 'Head of College Programs', url: 'https://jobs.lever.co/gotit/0eb6069c-76b8-4fc2-80ac-0509fba3512c'},
                    {title: 'Growth Lead', url: 'https://jobs.lever.co/gotit/b4188f0b-0c72-4da2-bf3d-94408ba2a167'},
                ]
            }
        ]
    }
});

Una.component('careers-life-item', {
   template: `
<div class="col-sm-3 {{offset}} m-t-20">
    <img src="{{image}}" height="120" alt="">
    <p class="text-primary m-t-30"><strong>{{title}}</strong></p>
    <p class=" m-t-20">{{description}}</p>
</div>
`, props: ['image', 'title', 'description', 'offset'],
    data: {
       offset: 'col-sm-offset-1'
    }
});

Una.component('careers-life', {
    template: `
<section-gray>
    <div class="h4 section-heading">Life at Got It</div>
    <div class="row">
        <div class="col-md-7">
            <p>At Got It, we know how to work hard and play hard. Join us for Napa trips, bocce ball, happy hours, and much more!</p>
        </div>
    </div>
    <div class="row m-t-30 text-center">
        <careers-life-item u-for="item in benefits" 
            u:offset="{{item.offset}}"
            u:image="{{item.image}}" 
            u:title="{{item.title}}" 
            u:description="{{item.description}}"></careers-life-item>
    </div>
</section-gray>
`, data: {
        benefits: [
            {
                offset: '',
                image: 'imgs/icon-life-1@2x.png',
                title: 'BENEFITS',
                description: 'Got It offers customizable benefits. Pick the plans that are right for you: medical, dental, vision, commuter, FSA and HSA. Plus, enroll in our 401k program.'
            },{
                offset: 'col-sm-offset-1',
                image: 'imgs/icon-life-3@2x.png',
                title: 'FOOD & DRINKS',
                description: 'Daily lunches, snacks galore, and monthly food excursions.'
            },{
                offset: 'col-sm-offset-1',
                image: 'imgs/icon-life-4@2x.png',
                title: 'OUTINGS',
                description: 'Monthly team outings and special celebrations!'
            },
        ]
    }
});

Una.component('careers', {
   template: `
<div class="page-wrapper page-gotit-career">
    <careers-header></careers-header>
    <career-positions></career-positions>
    <div class="career-photo"></div>
    <careers-life></careers-life>
    <rec-purple></rec-purple>
</div>
`
});