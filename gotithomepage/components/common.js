Una.component('page-header', {
    template: `
<header class="page-cover bg-white {{headercls}}">
    <div class="container">
        <div class="row">
            <div class="{{leftcls}}">
                <h1>{{title}}</h1>
                <content></content>
                <p class="visible-xs visible-sm m-b-30"><img src="{{image}}" width="100%"></p>
                <p>{{description}}</p>
            </div>
            <div class="{{rightcls}}">
                <div class="cover-image-wrapper">
                    <img src="{{image}}" width="100%" class="cover-image m-t-30">
                </div>
            </div>
        </div>
    </div>
</header>
`, props: ['title', 'description', 'image', 'leftcls', 'rightcls', 'headercls'],
});

Una.component('section-white', {
    template: `
<section class="section-gotit {{cls}} bg-white">
    <div class="container"><content></content></div>
</section>
`, props: ['cls'],
    data: {
        cls: ''
    }
});

Una.component('section-gray', {
    template: `
<section class="section-gotit {{cls}} bg-gray-lighter">
    <div class="container"><content></content></div>
</section>    
`, props: ['cls'],
    data: {
        cls: ''
    }
});

Una.component('rec-purple', {
    template: `<div class="rec-purple bg-gray-lighter"><img src="./imgs/rec-purple.png"></div>`
});