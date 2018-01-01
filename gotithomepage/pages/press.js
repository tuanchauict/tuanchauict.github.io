Una.component('press-header', {
   template: `
<header class="page-cover page-press-cover">
     <div class="container" style="position:relative;">
         <p class="h2 text-white">See what’s going on with Got It - <br class="visible-md visible-lg">stay in the loop</p>
     </div>
 </header>   
`
});

Una.component('press-tabs', {
   template: `
<div></div>
`
});

Una.component('press', {
   template: `
<div class="page-wrapper page-gotit-press">
   <div class="fake-navbar"></div>
   <press-header></press-header>
</div>  
`
});