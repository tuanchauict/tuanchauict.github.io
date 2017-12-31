(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1,0,10,true).p("EghXABoQPtkrOKgnQLUggJ1CGQHCBhFkCpQBvA0BaA3");
	this.shape.setTransform(-16.4,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231,-28.2,429.1,50.2);


(lib.Tween47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(4,1).p("Egh4ABTQPtkrOKgoQLUgfJ1CGQHBBgFlCpQBvA1BZA2IBDAs");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.8,-28.2,437.8,56.6);


(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape.setTransform(103.8,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_1.setTransform(99.3,-4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBAvQgGgFAAgLIAAg0IgPAAIAAgLIAPAAIAAgUIAOAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQADADAFAAIAGgBIAAAMIgLABQgKAAgDgGg");
	this.shape_2.setTransform(90.3,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAgQgLgMABgUIAAAAQAAgMAEgKQAGgKAIgFQAJgGAKAAQARAAALAMQALAMgBATIAAABQABAMgFAKQgFAKgJAFQgIAGgMAAQgQAAgLgMgAgRgWQgGAIAAAPQAAAOAGAJQAHAIAKAAQALAAAGgJQAHgIAAgPQAAgOgHgIQgGgJgLAAQgJAAgIAJg");
	this.shape_3.setTransform(83.4,-3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUA0QgLgHgGgLQgGgMAAgRIAAgJQAAgZAMgOQAMgPAVAAQASAAALAKQALAJACAQIgPAAQgEgWgXAAQgOAAgIALQgIAKAAAUIAAAIQAAAUAJALQAJAMAOAAQAIAAAHgCQAGgCAEgFIAAgaIgaAAIAAgLIApAAIAAApQgGAJgKAEQgLADgNAAQgNABgLgHg");
	this.shape_4.setTransform(73.3,-4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5AC9C0").s().p("AiFCaIisAAQgxAAAAgtIAAk3QAAgtAxAAIJjAAQAxAAABAtIAAE3QgBAtgxAAIjQAAIhyBeg");
	this.shape_5.setTransform(88.3,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAvQgEgFAAgLIAAg0IgQAAIAAgLIAQAAIAAgUIANAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQACADAFAAIAHgBIAAAMIgLABQgJAAgFgGg");
	this.shape_6.setTransform(104.4,-6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_7.setTransform(99.9,-7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAvQgEgFAAgLIAAg0IgQAAIAAgLIAQAAIAAgUIANAAIAAAUIAQAAIAAALIgQAAIAAA0QAAAFACACQACADAFAAIAHgBIAAAMIgLABQgJAAgFgGg");
	this.shape_8.setTransform(90.9,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAgQgLgMAAgUIAAAAQAAgMAEgKQAFgKAJgFQAJgGAKAAQARAAALAMQAKAMAAATIAAABQAAAMgEAKQgFAKgJAFQgJAGgLAAQgQAAgKgMgAgQgWQgHAIAAAPQAAAOAHAJQAGAIAKAAQALAAAHgJQAGgIAAgPQAAgOgGgIQgHgJgLAAQgJAAgHAJg");
	this.shape_9.setTransform(84,-5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUA0QgLgHgGgMQgGgMAAgQIAAgIQAAgaAMgOQAMgOAVAAQASAAALAJQALAJACARIgPAAQgEgXgXAAQgOAAgIAKQgIALAAAUIAAAJQAAASAJAMQAJAMAOAAQAIgBAHgCQAGgCAEgEIAAgZIgaAAIAAgNIApAAIAAAqQgGAIgKAEQgLAFgNAAQgNgBgLgGg");
	this.shape_10.setTransform(73.9,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.7,-25.7,71.1,49.6);


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AyWDwICihWQDUhmD9hPQMqkCOQA4");
	this.shape.setTransform(-216.5,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-18.9,237,50);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AsQpVIBdB9QB9CcCgCZQIAHnKnES");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.4,-60.7,159,121.5);


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AwiGzQCBhtChhjQIBk7Uila");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.9,-44.4,213.8,89);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AnqlfIA8BNQBRBdBmBcQFEEiGeCX");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-36.1,100.2,72.3);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AwApZIAaAnQAkAyAvA3QCVCxDLCjQKIILOsDE");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-61.2,207.1,122.4);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AseisICHA+QCtBKC6A6QJTC6H8gq");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-18.3,161.8,36.7);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("A2tmiIA0AnQBDAxBTA1QEJCpE6CIQPsG0Rigy");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.3,-42.9,292.8,85.8);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AbuGmQo1girVh7Q2rj1smm5");
	this.shape.setTransform(-0.3,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.6,-45.3,356.7,86.4);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AWDjFQl3CLocBwQw3Dis7iB");
	this.shape.setTransform(-37,0,0.815,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-20.7,232,41.6);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("Aq+CtIB1gCQCVgICigaQIHhSHKjj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-18.3,142.6,36.7);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AJLC3QiKgRjYg3QmvhumEi3");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-19.3,119.5,38.7);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AieoHIE9QP");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-53,33.8,106.1);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(1,1).p("AltpoIAIA+QAMBOAUBTQBAEHB5DLQBrC0DRDIQBqBkBUBA");
	this.shape.setTransform(-34.5,-3.2,1.144,1.403,0,-20.6,-29.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,-64.3,135.3,122.3);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("AnrIUIAAwnIPXAAIAAQng");
	this.shape.setTransform(336.5,124.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(287.3,71.7,98.5,106.4), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("AkAEBIAAoBIIBAAIAAIBg");
	this.shape.setTransform(767.4,319.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(741.7,293.4,51.4,51.4), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("AlDDRIAAmhIKHAAIAAGhg");
	this.shape.setTransform(865.6,334.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(833.2,313.6,64.9,41.8), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("ApHHRIAAuhISPAAIAAOhg");
	this.shape.setTransform(831.9,394.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(773.5,348.3,116.8,92.9), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("AjZEUIAAonIGzAAIAAIng");
	this.shape.setTransform(726.9,348);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(705.1,320.4,43.7,55.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("EgioATYMAAAgmvMBFRAAAMAAAAmvg");
	this.shape.setTransform(612.8,195.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(391.2,71.7,443.3,248.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("AilCmIAAlLIFKAAIAAFLg");
	this.shape.setTransform(265.3,108.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(248.7,92,33.1,33.1), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("AiDD8IAAn3IEHAAIAAH3g");
	this.shape.setTransform(522.8,407.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(509.6,382,26.4,50.4), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("AuBOpIAA9QIcCAAIAAdQg");
	this.shape.setTransform(458.8,342.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(369,249,179.5,187.3), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4332C9").s().p("A3VfzMAAAg/lMAurAAAMAAAA/lg");
	this.shape.setTransform(208.4,268.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(59,65,298.9,407), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAAA1Ig6AlIAShDIg2grIBGgEIAYhBIAZBBIBGAEIg2ArIASBDg");
	mask_1.setTransform(14.5,14);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FADA38").s().p("AiQCMIAAkXIEhAAIAAEXg");
	this.shape_1.setTransform(14.5,14);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(5,5,19.1,18.1), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhwfB9oMAAAj7PMDg/AAAMAAAD7Pg");
	mask.setTransform(720,804);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5AC9C0").ss(15.6).p("AAACwQBJAAAzg0QAzgzAAhJQAAhIgzgzQgzg0hJAAQhIAAgzA0QgzAzAABIQAABJAzAzQA0A0BHAAg");
	this.shape.setTransform(1268.4,434);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(1243.1,408.7,50.6,50.7), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhwfB9oMAAAj7PMDg/AAAMAAAD7Pg");
	mask_1.setTransform(720,804);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7B8QgzgzAAhJQAAhIAzgzQAzg0BIAAQBJAAAzA0QAzAzAABIQAABJgzAzQgzA0hJAAQhHAAg0g0g");
	this.shape_1.setTransform(1268.4,434);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(1250.9,416.5,35.1,35.2), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EhwfB9oMAAAj7PMDg/AAAMAAAD7Pg");
	mask_2.setTransform(720,804);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5AC9C0").s().p("AkHEJIAAoRIIPAAIAAIRg");
	this.shape_2.setTransform(1268.4,434.1);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(1242,407.6,52.8,53), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhwfB9oMAAAj7PMDg/AAAMAAAD7Pg");
	mask_1.setTransform(720,804);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6459E2").ss(23.4).p("AAAELQBvAABOhOQBOhOAAhvQAAhuhOhOQhOhOhvAAQhtAAhOBOQhOBOAABuQAABvBOBOQBOBOBtAAg");
	this.shape_1.setTransform(1239.2,403.8);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(1200.9,365.4,76.6,76.7), null);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EhwfB9oMAAAj7PMDg/AAAMAAAD7Pg");
	mask_2.setTransform(720,804);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai8C9QhNhPAAhuQAAhtBNhPQBPhOBtAAQBuAABOBOQBOBPAABtQAABuhOBPQhOBOhuAAQhtAAhPhOg");
	this.shape_2.setTransform(1239.2,403.8);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, new cjs.Rectangle(1212.6,377.1,53.3,53.4), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EhwfB9oMAAAj7PMDg/AAAMAAAD7Pg");
	mask_3.setTransform(720,804);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6459E2").s().p("Al2F4IAArvILtAAIAALvg");
	this.shape_3.setTransform(1239.9,404.4);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(1202.4,366.9,75,75.1), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhwfB9oMAAAj7PMDg/AAAMAAAD7Pg");
	mask.setTransform(720,804);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C1").s().p("AiBCqIAAlTIEDAAIAAFTg");
	this.shape.setTransform(1012.8,818.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(999.9,801.5,25.9,34), null);


(lib.ClipGroup_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhwfB9oMAAAj7PMDg/AAAMAAAD7Pg");
	mask.setTransform(720,804);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmIHDIAAuFIMRAAIAAOFg");
	this.shape.setTransform(1012.8,819.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_1, new cjs.Rectangle(973.5,774.2,78.7,90.1), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask.setTransform(18,18);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBCIAFiIIB+AFIgFCHg");
	this.shape.setTransform(23.3,17.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(16.8,10.8,13.2,14.1), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask.setTransform(18,18);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2190").s().p("Ah6BqIAIjbIDtAIIgIDbg");
	this.shape.setTransform(17.4,13.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(5.1,2,24.5,22.8), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask.setTransform(18,18);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6DAEE").s().p("AhFAzIAFhpICGAEIgEBpg");
	this.shape.setTransform(16.1,22.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(9.1,16.8,13.9,11.1), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask.setTransform(18,18);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6DAEE").s().p("AhABIIAFiTIB8AFIgGCSg");
	this.shape.setTransform(15.2,18.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(8.7,10.6,13,15.2), null);


(lib.ClipGroup_15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask_1.setTransform(18,18);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhzCCIAJkMIDeAIIgJEMg");
	this.shape_1.setTransform(17.3,16.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_1, new cjs.Rectangle(5.7,3,23.2,27.7), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask.setTransform(18,18);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhEBNIAAiZICJAAIAACZg");
	this.shape.setTransform(15.5,28.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(8.7,20.9,13.7,15.1), null);


(lib.ClipGroup_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask_1.setTransform(18,18);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5AC9C0").s().p("AhHBQIAAifICPAAIAACfg");
	this.shape_1.setTransform(19.4,28.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_1, new cjs.Rectangle(12.2,20.5,14.4,15.6), null);


(lib.ClipGroup_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask_1.setTransform(18,18);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTBqIAAjTICnAAIAADTg");
	this.shape_1.setTransform(17.7,23.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_1, new cjs.Rectangle(9.3,13.3,16.8,21.2), null);


(lib.ClipGroup_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask_1.setTransform(23,23);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6453E5").s().p("AjjDkIAAnHIHHAAIAAHHg");
	this.shape_1.setTransform(22.8,22.8);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_1, new cjs.Rectangle(5,5,36,36), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask.setTransform(22.2,18);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2190").s().p("AjXB6IAAjzIGvAAIAADzg");
	this.shape.setTransform(21.6,34.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(4.2,22,36,14.1), null);


(lib.ClipGroup_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask_2.setTransform(18,18);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6DAEE").s().p("AhZBDIAAiFICzAAIAACFg");
	this.shape_2.setTransform(17.2,24.2);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_2, new cjs.Rectangle(8.2,17.6,17.9,13.3), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizC0IAAlnIFnAAIAAFng");
	mask.setTransform(19,19);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4332C9").ss(2).p("AAACyQBKAAA0g0QA0g0AAhKQAAhJg0g0Qg0g0hKAAQhJAAg0A0Qg0A0AABJQAABKA0A0QA0A0BJAAg");
	this.shape.setTransform(18.8,18.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(1,1,36,36), null);


(lib.ClipGroup_20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_1.setTransform(21,21);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5AC9C0").s().p("AiKBOIAEiiIERAHIgECig");
	this.shape_1.setTransform(19.5,18.6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_1, new cjs.Rectangle(5.6,10.1,27.8,17), null);


(lib.ClipGroup_18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_1.setTransform(21,21);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2190").s().p("AhDBFIAFiOICCAFIgFCOg");
	this.shape_1.setTransform(27.9,21);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_1, new cjs.Rectangle(21.1,13.6,13.7,14.8), null);


(lib.ClipGroup_17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_1.setTransform(21,21);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4332C9").s().p("AhIA2IAEhwICNAFIgEBwg");
	this.shape_1.setTransform(19.2,26.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_1, new cjs.Rectangle(11.9,20.2,14.6,11.8), null);


(lib.ClipGroup_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_1.setTransform(21,21);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4332C9").s().p("AhEBKIAGiYICDAFIgFCYg");
	this.shape_1.setTransform(18.4,21.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_1, new cjs.Rectangle(11.5,13.3,13.8,15.8), null);


(lib.ClipGroup_15_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_2.setTransform(21,21);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2190").s().p("AiCCUIALkwID6AJIgLEwg");
	this.shape_2.setTransform(20.7,20.1);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_2, new cjs.Rectangle(7.6,4.4,26.2,31.4), null);


(lib.ClipGroup_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_1.setTransform(21,21);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4332C9").s().p("AhfBGIAAiLIC/AAIAACLg");
	this.shape_1.setTransform(20.3,29.2);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_1, new cjs.Rectangle(10.7,22.3,19.3,13.9), null);


(lib.ClipGroup_13_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_2.setTransform(21,21);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9FAFA").s().p("AhHBSIAAijICPAAIAACjg");
	this.shape_2.setTransform(18.3,34.4);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_2, new cjs.Rectangle(11.1,26.2,14.5,15.8), null);


(lib.ClipGroup_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_2.setTransform(21,21);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9FAFA").s().p("AhKBVIAAipICVAAIAACpg");
	this.shape_2.setTransform(22.9,34.2);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_2, new cjs.Rectangle(15.4,25.7,15.1,16.3), null);


(lib.ClipGroup_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_2.setTransform(26,26);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6453E5").s().p("AkDEEIAAoHIIHAAIAAIHg");
	this.shape_2.setTransform(26,26);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_2, new cjs.Rectangle(5,5,42,42), null);


(lib.ClipGroup_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_1.setTransform(21,21);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2190").s().p("AhZByIAAjiICzAAIAADig");
	this.shape_1.setTransform(20.9,28.6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_2, new cjs.Rectangle(11.9,17.3,18,22.7), null);


(lib.ClipGroup_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_3.setTransform(25,21);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6DAEE").s().p("Aj1CHIAAkNIHrAAIAAENg");
	this.shape_3.setTransform(24.6,40.9);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_3, new cjs.Rectangle(4,27.5,42,14.6), null);


(lib.ClipGroup_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjRDSIAAmjIGjAAIAAGjg");
	mask_1.setTransform(22,22);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4332C9").ss(2).p("AAADSQBXAAA9g+QA+g9AAhXQAAhWg+g9Qg9g+hXAAQhWAAg9A+Qg+A9AABWQAABXA+A9QA9A+BWAAg");
	this.shape_1.setTransform(22,22);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_2, new cjs.Rectangle(1,1,42,42), null);


(lib.ClipGroup_18_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_2.setTransform(19.5,19.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BFIAAiJIB/AAIAACJg");
	this.shape_2.setTransform(26.1,18.5);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_2, new cjs.Rectangle(19.7,11.6,12.8,13.8), null);


(lib.ClipGroup_16_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_2.setTransform(19.5,19.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4332C9").s().p("AhDA3IAAhsICHAAIAABsg");
	this.shape_2.setTransform(18.7,23.1);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_2, new cjs.Rectangle(11.9,17.6,13.7,10.9), null);


(lib.ClipGroup_15_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_3.setTransform(19.5,19.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6DAEE").s().p("AhzhFIDkgDIADCOIjkADg");
	this.shape_3.setTransform(18.5,18.3);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_3, new cjs.Rectangle(6.9,11,23.2,14.7), null);


(lib.ClipGroup_14_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_2.setTransform(19.5,19.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6DAEE").s().p("Ag6BHIAAiOIB1AAIAACOg");
	this.shape_2.setTransform(18,19.2);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_2, new cjs.Rectangle(12.1,12,11.9,14.3), null);


(lib.ClipGroup_13_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_3.setTransform(19.5,19.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah0B4IAAjvIDpAAIAADvg");
	this.shape_3.setTransform(19.7,19.3);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_3, new cjs.Rectangle(8,7.3,23.4,24.1), null);


(lib.ClipGroup_12_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_3.setTransform(19.5,19.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6DAEE").s().p("AhRA+IAAh8ICjAAIAAB8g");
	this.shape_3.setTransform(20.1,25.8);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_3, new cjs.Rectangle(11.9,19.6,16.4,12.5), null);


(lib.ClipGroup_11_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_3.setTransform(19.5,19.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSBVIAAipIClAAIAACpg");
	this.shape_3.setTransform(20,27.4);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_3, new cjs.Rectangle(11.7,18.9,16.6,17), null);


(lib.ClipGroup_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_1.setTransform(24.5,24.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6453E5").s().p("AjyDzIAAnlIHlAAIAAHlg");
	this.shape_1.setTransform(24.3,24.3);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_1, new cjs.Rectangle(5,5,39,39), null);


(lib.ClipGroup_6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_2.setTransform(19.8,19.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC1EBA").s().p("AjMBxIAAjhIGZAAIAADhg");
	this.shape_2.setTransform(20.5,34.4);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_3, new cjs.Rectangle(0.3,23.1,39,16), null);


(lib.ClipGroup_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_4.setTransform(19.5,19.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F1990").s().p("AiSCQIAAkgIElAAIAAEgg");
	this.shape_4.setTransform(18.4,17.6);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_4, new cjs.Rectangle(3.7,3.2,29.4,28.9), null);


(lib.ClipGroup_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjCDDIAAmFIGFAAIAAGFg");
	mask_2.setTransform(20.5,20.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4332C9").ss(2).p("AAADBQBQAAA4g5QA5g4AAhQQAAhPg5g4Qg4g5hQAAQhPAAg4A5Qg5A4AABPQAABQA5A4QA4A5BPAAg");
	this.shape_2.setTransform(20.3,20.3);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_3, new cjs.Rectangle(1,1,39,39), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_4.setTransform(473.5,268.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4332C9").ss(2).p("AAADBQBQAAA4g5QA5g4AAhQQAAhPg5g4Qg4g5hQAAQhOAAg5A5Qg5A4AABPQAABQA5A4QA5A5BOAAg");
	this.shape_4.setTransform(487.3,124.3);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(467,104,40.5,41.6), null);


(lib.ClipGroup_17_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_2.setTransform(17.5,17.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BDIAAiFIB8AAIAACFg");
	this.shape_2.setTransform(23.5,16.7);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_2, new cjs.Rectangle(17.2,10,12.5,13.4), null);


(lib.ClipGroup_15_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_4.setTransform(17.5,17.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4332C9").s().p("AhCA3IAAhtICFAAIAABtg");
	this.shape_4.setTransform(17.1,21.1);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_4, new cjs.Rectangle(10.5,15.6,13.3,11.1), null);


(lib.ClipGroup_14_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_3.setTransform(17.5,17.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6DAEE").s().p("Ag6BCIAAiDIB1AAIAACDg");
	this.shape_3.setTransform(16.2,17.8);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_3, new cjs.Rectangle(10.3,11.3,11.8,13.2), null);


(lib.ClipGroup_13_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_4.setTransform(17.5,17.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhsB1IAAjpIDZAAIAADpg");
	this.shape_4.setTransform(17.6,17.7);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_4, new cjs.Rectangle(6.7,6,21.9,23.4), null);


(lib.ClipGroup_12_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_4.setTransform(17.5,17.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6DAEE").s().p("AhVBDIAAiGICqAAIAACGg");
	this.shape_4.setTransform(17.9,23.4);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_4, new cjs.Rectangle(9.3,16.6,17.1,13.5), null);


(lib.ClipGroup_11_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_4.setTransform(17.5,17.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSBUIAAinIClAAIAACng");
	this.shape_4.setTransform(18,24.9);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_4, new cjs.Rectangle(9.7,16.5,16.6,16.9), null);


(lib.ClipGroup_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_2.setTransform(18.3,17.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5AC9C0").s().p("Ai8BnIAAjNIF5AAIAADNg");
	this.shape_2.setTransform(18.9,31.6);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_2, new cjs.Rectangle(0.8,21.4,35,13.7), null);


(lib.ClipGroup_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_1.setTransform(22.5,22.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6453E5").s().p("AjeDfIAAm9IG9AAIAAG9g");
	this.shape_1.setTransform(22.3,22.3);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_1, new cjs.Rectangle(5,5.1,35,35), null);


(lib.ClipGroup_5_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_5.setTransform(17.5,17.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6DAEE").s().p("Ah9CmIAAlLID7AAIAAFLg");
	this.shape_5.setTransform(17.5,18.7);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_5, new cjs.Rectangle(4.9,2.1,25.3,33), null);


(lib.ClipGroup_4_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_3.setTransform(18.5,18.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4332C9").ss(2).p("AAACtQBIAAAzgyQAyg0AAhHQAAhHgygzQgzgyhIAAQhHAAgzAyQgyAzAABHQAABHAyA0QAzAyBHAAg");
	this.shape_3.setTransform(18.3,18.3);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_4, new cjs.Rectangle(1,1,35,35), null);


(lib.ClipGroup_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask.setTransform(17.5,17.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhphBIDQgEIADCHIjQAEg");
	this.shape.setTransform(15,16.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, new cjs.Rectangle(4.5,9.9,21.1,14), null);


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask.setTransform(17.5,17.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABCIAFiHIB8AEIgECHg");
	this.shape.setTransform(22.7,17.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(16.2,10.3,13.1,14), null);


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask.setTransform(17.5,17.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2190").s().p("Ah7BpIAIjZIDvAIIgIDZg");
	this.shape.setTransform(16.5,13.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(4.2,1.8,24.7,22.7), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask.setTransform(17.5,17.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6DAEE").s().p("AhEAzIAEhpICFAEIgDBqg");
	this.shape.setTransform(15.7,21.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(8.8,15.9,13.8,11.1), null);


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask.setTransform(17.5,17.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6DAEE").s().p("Ag+BEIAFiLIB4AEIgFCLg");
	this.shape.setTransform(14.9,17.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(8.6,10.6,12.6,14.4), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask.setTransform(17.5,17.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhxB+IAJkCIDaAHIgJECg");
	this.shape.setTransform(16.8,16.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(5.4,2.8,22.9,26.7), null);


(lib.ClipGroup_20_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_2.setTransform(17.5,17.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6DAEE").s().p("AhDBNIAAiYICHAAIAACYg");
	this.shape_2.setTransform(15.1,27.8);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_2, new cjs.Rectangle(8.3,20.2,13.7,14.9), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask.setTransform(17.5,17.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6DAEE").s().p("AhUBBIAAiBICpAAIAACBg");
	this.shape.setTransform(17.1,23.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(8.6,17,17,13), null);


(lib.ClipGroup_18_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_3.setTransform(17.5,17.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6DAEE").s().p("AhGBPIAAidICNAAIAACdg");
	this.shape_3.setTransform(18.9,27.7);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_3, new cjs.Rectangle(11.8,19.8,14.2,15.3), null);


(lib.ClipGroup_17_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_3.setTransform(17.5,17.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSBpIAAjQIClAAIAADQg");
	this.shape_3.setTransform(17.2,23.2);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_3, new cjs.Rectangle(8.9,12.8,16.6,20.9), null);


(lib.ClipGroup_16_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_3.setTransform(22.5,22.6);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6453E5").s().p("AjeDfIAAm9IG9AAIAAG9g");
	this.shape_3.setTransform(22.3,22.3);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_3, new cjs.Rectangle(5,5.1,35,35), null);


(lib.ClipGroup_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_2.setTransform(17.5,17.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC1EBA").s().p("Ag0A0IAAhnIBpAAIAABng");
	this.shape_2.setTransform(17,33.1);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_2, new cjs.Rectangle(11.7,27.9,10.5,7.1), null);


(lib.ClipGroup_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask.setTransform(17.5,17.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC1EBA").s().p("Ag0A0IAAhnIBpAAIAABng");
	this.shape.setTransform(17,31.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_1, new cjs.Rectangle(11.7,26.5,10.5,8.6), null);


(lib.ClipGroup_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_1.setTransform(17.5,17.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC1EBA").s().p("Ag0A0IAAhnIBpAAIAABng");
	this.shape_1.setTransform(17,30.2);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_2, new cjs.Rectangle(11.7,25,10.5,10), null);


(lib.ClipGroup_6_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_3.setTransform(17.5,17.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2F2190").p("AAghFQA2ARAYAMQANAGAKAJQAIAHAIAfQAFASAHAnIlCAAQAHglADgPQAFgbAIgHQANgLAMgHQAbgPA1gRg");
	this.shape_3.setTransform(17.1,33.2);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_4, new cjs.Rectangle(0,25.2,34.5,9.8), null);


(lib.ClipGroup_5_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_6.setTransform(21.6,17.5);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjTB4IAAjvIGmAAIAADvg");
	this.shape_6.setTransform(21.2,33.2);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_6, new cjs.Rectangle(4.1,21.2,35,13.8), null);


(lib.ClipGroup_4_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiuCvIAAldIFdAAIAAFdg");
	mask_4.setTransform(18.5,18.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4332C9").ss(2).p("AAACtQBIAAAzgyQAyg0AAhHQAAhHgygzQgzgyhIAAQhHAAgzAyQgyAzAABHQAABHAyA0QAzAyBHAAg");
	this.shape_4.setTransform(18.3,18.3);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_5, new cjs.Rectangle(1,1,35,35), null);


(lib.ClipGroup_19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_1.setTransform(30,34.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBcIAAi3IChAAIAAC3g");
	this.shape_1.setTransform(45.1,24);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_1, new cjs.Rectangle(37,14.8,16.3,18.5), null);


(lib.ClipGroup_17_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_4.setTransform(30,34.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6DAEE").s().p("AhaA8IAAh3IC1AAIAAB3g");
	this.shape_4.setTransform(28.6,34.2);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_4, new cjs.Rectangle(19.5,28.3,18.2,12), null);


(lib.ClipGroup_16_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_4.setTransform(30,34.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FC1EBA").s().p("AjHBmIACjOIGNADIgCDOg");
	this.shape_4.setTransform(27.7,23);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_4, new cjs.Rectangle(7.7,12.5,40,21), null);


(lib.ClipGroup_15_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_5.setTransform(30,34.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6DAEE").s().p("AhHBiIAAjDICPAAIAADDg");
	this.shape_5.setTransform(26.9,25.4);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_5, new cjs.Rectangle(19.8,15.6,14.4,19.7), null);


(lib.ClipGroup_14_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_4.setTransform(30,34.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5AC9C0").s().p("Ah7BsIAtj7IDKAkIgsD7g");
	this.shape_4.setTransform(35.1,49.6);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_4, new cjs.Rectangle(22.7,35.2,24.9,28.9), null);


(lib.ClipGroup_13_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_5.setTransform(30,34.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5AC9C0").s().p("AhdB6IAAjzIC7AAIAADzg");
	this.shape_5.setTransform(26.4,49.9);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_5, new cjs.Rectangle(17,37.7,18.8,24.4), null);


(lib.ClipGroup_12_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_5.setTransform(30,34.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5AC9C0").s().p("Ag4CTIAAklIBxAAIAAElg");
	this.shape_5.setTransform(30.2,60.2);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_5, new cjs.Rectangle(24.5,45.5,11.4,23.5), null);


(lib.ClipGroup_6_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_4.setTransform(30,34.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjHDRIAAmhIGPAAIAAGhg");
	this.shape_4.setTransform(30.7,25.7);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_5, new cjs.Rectangle(10.7,4.9,40.1,41.8), null);


(lib.ClipGroup_5_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_7.setTransform(30,34.5);

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6DAEE").s().p("Ah3BKIAAiTIDvAAIAACTg");
	this.shape_7.setTransform(29.2,40.5);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_7, new cjs.Rectangle(17.2,33.1,24,14.9), null);


(lib.ClipGroup_4_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_5.setTransform(30,34.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah7B7IAAj0ID3AAIAAD0g");
	this.shape_5.setTransform(31.4,43.4);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_6, new cjs.Rectangle(19,31.1,24.8,24.5), null);


(lib.ClipGroup_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_3.setTransform(38,34.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2190").s().p("AmNDTIAAmlIMbAAIAAGlg");
	this.shape_3.setTransform(39.8,58.6);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_3, new cjs.Rectangle(8,37.6,60,31.5), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkrFZIAAqxIJXAAIAAKxg");
	mask_1.setTransform(31.9,39.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F1990").s().p("AkmFUIAAqnIJNAAIAAKng");
	this.shape_1.setTransform(29.5,34);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(1.9,5,57.1,63.1), null);


(lib.ClipGroup_185 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(307.1,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_185, new cjs.Rectangle(297.8,193.1,18.6,18.7), null);


(lib.ClipGroup_183 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(512.2,322.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_183, new cjs.Rectangle(502.9,313.6,18.6,18.7), null);


(lib.ClipGroup_182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(240.7,311.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_182, new cjs.Rectangle(231.4,302,18.7,18.6), null);


(lib.ClipGroup_181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhcBeIAAi7IC5AAIAAC7g");
	this.shape.setTransform(240.7,298.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_181, new cjs.Rectangle(231.4,289.5,18.7,18.7), null);


(lib.ClipGroup_180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(480.4,218.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_180, new cjs.Rectangle(471.1,209.5,18.7,18.7), null);


(lib.ClipGroup_179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(160.8,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_179, new cjs.Rectangle(151.5,242.3,18.7,18.6), null);


(lib.ClipGroup_178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(173.3,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_178, new cjs.Rectangle(164,242.3,18.7,18.6), null);


(lib.ClipGroup_177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(184.9,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_177, new cjs.Rectangle(175.5,242.3,18.7,18.6), null);


(lib.ClipGroup_176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(209.9,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_176, new cjs.Rectangle(200.6,242.3,18.6,18.6), null);


(lib.ClipGroup_175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(197.4,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_175, new cjs.Rectangle(188.1,242.3,18.6,18.6), null);


(lib.ClipGroup_174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(160.8,239.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_174, new cjs.Rectangle(151.5,229.7,18.7,18.7), null);


(lib.ClipGroup_173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(173.3,239.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_173, new cjs.Rectangle(164,229.7,18.7,18.7), null);


(lib.ClipGroup_172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(221.4,239.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_172, new cjs.Rectangle(212.1,229.7,18.7,18.7), null);


(lib.ClipGroup_171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(246.5,239.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_171, new cjs.Rectangle(237.2,229.7,18.7,18.7), null);


(lib.ClipGroup_170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBeIAAi6IC6AAIAAC6g");
	this.shape.setTransform(148.3,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_170, new cjs.Rectangle(138.9,218.2,18.7,18.7), null);


(lib.ClipGroup_169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(173.3,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_169, new cjs.Rectangle(164,218.2,18.7,18.7), null);


(lib.ClipGroup_168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(209.9,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_168, new cjs.Rectangle(200.6,205.7,18.6,18.7), null);


(lib.ClipGroup_167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(221.4,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_167, new cjs.Rectangle(212.1,205.7,18.7,18.7), null);


(lib.ClipGroup_166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(258,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_166, new cjs.Rectangle(248.7,205.7,18.7,18.7), null);


(lib.ClipGroup_165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBeIAAi7IC6AAIAAC7g");
	this.shape.setTransform(652.8,203.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_165, new cjs.Rectangle(643.4,194.1,18.7,18.7), null);


(lib.ClipGroup_164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(652.8,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_164, new cjs.Rectangle(643.4,205.7,18.7,18.7), null);


(lib.ClipGroup_163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(641.2,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_163, new cjs.Rectangle(631.9,205.7,18.7,18.7), null);


(lib.ClipGroup_162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(641.2,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_162, new cjs.Rectangle(631.9,218.2,18.7,18.7), null);


(lib.ClipGroup_161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(628.7,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_161, new cjs.Rectangle(619.4,218.2,18.6,18.7), null);


(lib.ClipGroup_160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(628.7,240);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_160, new cjs.Rectangle(619.4,230.7,18.6,18.7), null);


(lib.ClipGroup_159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(616.2,240);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_159, new cjs.Rectangle(606.9,230.7,18.6,18.7), null);


(lib.ClipGroup_158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi6IC6AAIAAC6g");
	this.shape.setTransform(652.8,288.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_158, new cjs.Rectangle(643.4,278.9,18.7,18.7), null);


(lib.ClipGroup_157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(641.2,288.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_157, new cjs.Rectangle(631.9,278.9,18.7,18.7), null);


(lib.ClipGroup_156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBeIAAi7IC6AAIAAC7g");
	this.shape.setTransform(652.8,276.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_156, new cjs.Rectangle(643.4,267.3,18.7,18.7), null);


(lib.ClipGroup_155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBeIAAi7IC5AAIAAC7g");
	this.shape.setTransform(641.2,276.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_155, new cjs.Rectangle(631.9,267.3,18.7,18.7), null);


(lib.ClipGroup_154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBeIAAi7IC5AAIAAC7g");
	this.shape.setTransform(628.7,276.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_154, new cjs.Rectangle(619.4,267.3,18.6,18.7), null);


(lib.ClipGroup_153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(665.3,264.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_153, new cjs.Rectangle(656,254.8,18.6,18.6), null);


(lib.ClipGroup_152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(652.8,264.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_152, new cjs.Rectangle(643.4,254.8,18.7,18.6), null);


(lib.ClipGroup_151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(641.2,264.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_151, new cjs.Rectangle(631.9,254.8,18.7,18.6), null);


(lib.ClipGroup_150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(628.7,264.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_150, new cjs.Rectangle(619.4,254.8,18.6,18.6), null);


(lib.ClipGroup_149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(665.3,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_149, new cjs.Rectangle(656,242.3,18.6,18.6), null);


(lib.ClipGroup_148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(652.8,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_148, new cjs.Rectangle(643.4,242.3,18.7,18.6), null);


(lib.ClipGroup_147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(628.7,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_147, new cjs.Rectangle(619.4,242.3,18.6,18.6), null);


(lib.ClipGroup_146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(616.2,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_146, new cjs.Rectangle(606.9,242.3,18.6,18.6), null);


(lib.ClipGroup_145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(523.7,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_145, new cjs.Rectangle(514.4,242.3,18.6,18.6), null);


(lib.ClipGroup_144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(451.5,189.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_144, new cjs.Rectangle(442.2,180.6,18.7,18.7), null);


(lib.ClipGroup_143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(460.2,198.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_143, new cjs.Rectangle(450.9,189.3,18.6,18.7), null);


(lib.ClipGroup_142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(406.3,272.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_142, new cjs.Rectangle(397,263.5,18.7,18.7), null);


(lib.ClipGroup_141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(512.2,322.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_141, new cjs.Rectangle(502.9,313.6,18.6,18.7), null);


(lib.ClipGroup_140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(240.7,311.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_140, new cjs.Rectangle(231.4,302,18.7,18.6), null);


(lib.ClipGroup_139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBeIAAi7IC5AAIAAC7g");
	this.shape.setTransform(240.7,298.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_139, new cjs.Rectangle(231.4,289.5,18.7,18.7), null);


(lib.ClipGroup_138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(460.2,132.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_138, new cjs.Rectangle(450.9,122.8,18.6,18.7), null);


(lib.ClipGroup_137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(480.4,218.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_137, new cjs.Rectangle(471.1,209.5,18.7,18.7), null);


(lib.ClipGroup_136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(160.8,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_136, new cjs.Rectangle(151.5,242.3,18.7,18.6), null);


(lib.ClipGroup_135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(173.3,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_135, new cjs.Rectangle(164,242.3,18.7,18.6), null);


(lib.ClipGroup_134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(184.9,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_134, new cjs.Rectangle(175.5,242.3,18.7,18.6), null);


(lib.ClipGroup_133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(209.9,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_133, new cjs.Rectangle(200.6,242.3,18.6,18.6), null);


(lib.ClipGroup_132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(197.4,251.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_132, new cjs.Rectangle(188.1,242.3,18.6,18.6), null);


(lib.ClipGroup_131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(160.8,239.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_131, new cjs.Rectangle(151.5,229.7,18.7,18.7), null);


(lib.ClipGroup_130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(173.3,239.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_130, new cjs.Rectangle(164,229.7,18.7,18.7), null);


(lib.ClipGroup_129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(197.4,239.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_129, new cjs.Rectangle(188.1,229.7,18.6,18.7), null);


(lib.ClipGroup_128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(221.4,239.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_128, new cjs.Rectangle(212.1,229.7,18.7,18.7), null);


(lib.ClipGroup_127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape.setTransform(246.5,239.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_127, new cjs.Rectangle(237.2,229.7,18.7,18.7), null);


(lib.ClipGroup_126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBeIAAi6IC6AAIAAC6g");
	this.shape.setTransform(148.3,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_126, new cjs.Rectangle(138.9,218.2,18.7,18.7), null);


(lib.ClipGroup_125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBeIAAi6IC6AAIAAC6g");
	this.shape.setTransform(148.3,178.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_125, new cjs.Rectangle(138.9,169,18.7,18.7), null);


(lib.ClipGroup_124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(160.8,178.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_124, new cjs.Rectangle(151.5,169,18.7,18.7), null);


(lib.ClipGroup_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(148.3,190.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60, new cjs.Rectangle(138.9,181.6,18.7,18.6), null);


(lib.ClipGroup_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(148.3,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_59, new cjs.Rectangle(138.9,193.1,18.7,18.7), null);


(lib.ClipGroup_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(160.8,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_58, new cjs.Rectangle(151.5,193.1,18.7,18.7), null);


(lib.ClipGroup_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(160.8,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_57, new cjs.Rectangle(151.5,205.7,18.7,18.7), null);


(lib.ClipGroup_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(173.3,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56, new cjs.Rectangle(164,218.2,18.7,18.7), null);


(lib.ClipGroup_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(173.3,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_55, new cjs.Rectangle(164,193.1,18.7,18.7), null);


(lib.ClipGroup_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(173.3,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_54, new cjs.Rectangle(164,205.7,18.7,18.7), null);


(lib.ClipGroup_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBeIAAi6IC6AAIAAC6g");
	this.shape.setTransform(184.9,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_53, new cjs.Rectangle(175.5,218.2,18.7,18.7), null);


(lib.ClipGroup_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(197.4,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52, new cjs.Rectangle(188.1,205.7,18.6,18.7), null);


(lib.ClipGroup_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(209.9,190.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51, new cjs.Rectangle(200.6,181.6,18.6,18.6), null);


(lib.ClipGroup_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(221.4,190.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50, new cjs.Rectangle(212.1,181.6,18.7,18.6), null);


(lib.ClipGroup_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(234,190.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49, new cjs.Rectangle(224.6,181.6,18.7,18.6), null);


(lib.ClipGroup_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(209.9,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_48, new cjs.Rectangle(200.6,193.1,18.6,18.7), null);


(lib.ClipGroup_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(209.9,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47, new cjs.Rectangle(200.6,205.7,18.6,18.7), null);


(lib.ClipGroup_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(221.4,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46, new cjs.Rectangle(212.1,218.2,18.7,18.7), null);


(lib.ClipGroup_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(221.4,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45, new cjs.Rectangle(212.1,205.7,18.7,18.7), null);


(lib.ClipGroup_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(234,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44, new cjs.Rectangle(224.6,218.2,18.7,18.7), null);


(lib.ClipGroup_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(234,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43, new cjs.Rectangle(224.6,193.1,18.7,18.7), null);


(lib.ClipGroup_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(246.5,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42, new cjs.Rectangle(237.2,218.2,18.7,18.7), null);


(lib.ClipGroup_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(246.5,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(237.2,193.1,18.7,18.7), null);


(lib.ClipGroup_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(258,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40, new cjs.Rectangle(248.7,193.1,18.7,18.7), null);


(lib.ClipGroup_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(258,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(248.7,205.7,18.7,18.7), null);


(lib.ClipGroup_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBeIAAi6IC6AAIAAC6g");
	this.shape.setTransform(270.6,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, new cjs.Rectangle(261.2,218.2,18.7,18.7), null);


(lib.ClipGroup_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(270.6,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(261.2,193.1,18.7,18.7), null);


(lib.ClipGroup_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBdIAAi5IC6AAIAAC5g");
	this.shape.setTransform(270.6,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36, new cjs.Rectangle(261.2,205.7,18.7,18.7), null);


(lib.ClipGroup_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(283.1,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35, new cjs.Rectangle(273.8,218.2,18.6,18.7), null);


(lib.ClipGroup_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(283.1,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34, new cjs.Rectangle(273.8,193.1,18.6,18.7), null);


(lib.ClipGroup_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(294.6,202.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33, new cjs.Rectangle(285.3,193.1,18.6,18.7), null);


(lib.ClipGroup_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(283.1,215);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32, new cjs.Rectangle(273.8,205.7,18.6,18.7), null);


(lib.ClipGroup_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape.setTransform(294.6,227.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, new cjs.Rectangle(285.3,218.2,18.6,18.7), null);


(lib.ClipGroup_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBeIAAi6IC7AAIAAC6g");
	this.shape.setTransform(158.9,118.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, new cjs.Rectangle(149.5,109.3,18.7,18.7), null);


(lib.ClipGroup_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(418.8,169.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, new cjs.Rectangle(409.5,160.4,18.7,18.7), null);


(lib.ClipGroup_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(429.4,169.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28, new cjs.Rectangle(420.1,160.4,18.6,18.7), null);


(lib.ClipGroup_27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_1.setTransform(473.5,268.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_1.setTransform(418.8,159.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_1, new cjs.Rectangle(409.5,149.8,18.7,18.7), null);


(lib.ClipGroup_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask.setTransform(473.5,268.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape.setTransform(429.4,159.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(420.1,149.8,18.6,18.7), null);


(lib.ClipGroup_25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_1.setTransform(473.5,268.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5AC9C0").s().p("AhcBeIAAi7IC6AAIAAC7g");
	this.shape_1.setTransform(652.8,203.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_1, new cjs.Rectangle(643.4,194.1,18.7,18.7), null);


(lib.ClipGroup_24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_1.setTransform(473.5,268.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape_1.setTransform(652.8,215);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_1, new cjs.Rectangle(643.4,205.7,18.7,18.7), null);


(lib.ClipGroup_23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_1.setTransform(473.5,268.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_1.setTransform(641.2,215);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_1, new cjs.Rectangle(631.9,205.7,18.7,18.7), null);


(lib.ClipGroup_22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_1.setTransform(473.5,268.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5AC9C0").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape_1.setTransform(641.2,227.5);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_1, new cjs.Rectangle(631.9,218.2,18.7,18.7), null);


(lib.ClipGroup_21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_1.setTransform(473.5,268.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5AC9C0").s().p("AhcBeIAAi6IC5AAIAAC6g");
	this.shape_1.setTransform(628.7,227.5);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_1, new cjs.Rectangle(619.4,218.2,18.6,18.7), null);


(lib.ClipGroup_18_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_4.setTransform(473.5,268.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_4.setTransform(628.7,240);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_4, new cjs.Rectangle(619.4,230.7,18.6,18.7), null);


(lib.ClipGroup_17_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_5.setTransform(473.5,268.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_5.setTransform(616.2,240);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_5, new cjs.Rectangle(606.9,230.7,18.6,18.7), null);


(lib.ClipGroup_16_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_5.setTransform(473.5,268.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5AC9C0").s().p("AhcBdIAAi6IC6AAIAAC6g");
	this.shape_5.setTransform(652.8,288.2);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_5, new cjs.Rectangle(643.4,278.9,18.7,18.7), null);


(lib.ClipGroup_15_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_6.setTransform(473.5,268.5);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5AC9C0").s().p("AhcBdIAAi6IC5AAIAAC6g");
	this.shape_6.setTransform(641.2,288.2);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_6, new cjs.Rectangle(631.9,278.9,18.7,18.7), null);


(lib.ClipGroup_14_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_5.setTransform(473.5,268.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5AC9C0").s().p("AhcBeIAAi7IC6AAIAAC7g");
	this.shape_5.setTransform(652.8,276.7);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_5, new cjs.Rectangle(643.4,267.3,18.7,18.7), null);


(lib.ClipGroup_13_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_6.setTransform(473.5,268.5);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5AC9C0").s().p("AhcBeIAAi7IC5AAIAAC7g");
	this.shape_6.setTransform(641.2,276.7);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_6, new cjs.Rectangle(631.9,267.3,18.7,18.7), null);


(lib.ClipGroup_12_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_6.setTransform(473.5,268.5);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5AC9C0").s().p("AhcBeIAAi7IC5AAIAAC7g");
	this.shape_6.setTransform(628.7,276.7);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_6, new cjs.Rectangle(619.4,267.3,18.6,18.7), null);


(lib.ClipGroup_11_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_5.setTransform(473.5,268.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_5.setTransform(665.3,264.1);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_5, new cjs.Rectangle(656,254.8,18.6,18.6), null);


(lib.ClipGroup_10_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_3.setTransform(473.5,268.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape_3.setTransform(652.8,264.1);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_3, new cjs.Rectangle(643.4,254.8,18.7,18.6), null);


(lib.ClipGroup_9_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_3.setTransform(473.5,268.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_3.setTransform(641.2,264.1);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_3, new cjs.Rectangle(631.9,254.8,18.7,18.6), null);


(lib.ClipGroup_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_1.setTransform(473.5,268.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_1.setTransform(628.7,264.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_2, new cjs.Rectangle(619.4,254.8,18.6,18.6), null);


(lib.ClipGroup_7_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_2.setTransform(473.5,268.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_2.setTransform(665.3,251.6);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_3, new cjs.Rectangle(656,242.3,18.6,18.6), null);


(lib.ClipGroup_6_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_5.setTransform(473.5,268.5);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC6AAIAAC5g");
	this.shape_5.setTransform(652.8,251.6);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_6, new cjs.Rectangle(643.4,242.3,18.7,18.6), null);


(lib.ClipGroup_5_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_8.setTransform(473.5,268.5);

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5AC9C0").s().p("AhcBdIAAi5IC5AAIAAC5g");
	this.shape_8.setTransform(628.7,251.6);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_8, new cjs.Rectangle(619.4,242.3,18.6,18.6), null);


(lib.circke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6453E5").s().p("AkxEyQh+h/gBizQABiyB+iAQB/h+CyAAQCzAAB/B+QB+CAAACyQAAC0h+B+Qh/B/izAAQiyAAh/h/g");
	this.shape.setTransform(43.3,43.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circke, new cjs.Rectangle(0,0,86.5,86.6), null);


(lib.ClipGroup_14_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AhCHiIl4l7IAApIIN1AAIAAFrIliFjIAAD1g");
	mask_6.setTransform(336.5,124.9);

	// Layer 3
	this.instance = new lib.ClipGroup_15();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_6, new cjs.Rectangle(292.3,76.7,88.5,96.4), null);


(lib.ClipGroup_9_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("ALUfBIjsjtIAAsaIi1AAIidifIAAl5IisitIimAAIoFoFIAAjmIjQjRIAAi+IEPkQIAAjWImwAAIh4B5Ij5j5IAAikIEwkxIEkAAIBHBHILnAAIGTGVIAAB8IjkDjIAADNIFiAAIAAihIFWAAIEPEPIAAFLIjMDNIk7AAIAACdIn3AAIAAFSIKFAAIHPHQID5AAIAAGAIjWDYIAAChImEGFIAAC2g");
	mask_4.setTransform(208.4,268.5);

	// Layer 3
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_4, new cjs.Rectangle(64,70,288.9,397), null);


(lib.ClipGroup_8_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AFMN2ImAmCIAAn0IoGAAIkUkUIAAmkIC6i+IKuAAIJAJEIDJAAIAtAtIiICIIhiAAIAAFmIi9C9IAAHQg");
	mask_2.setTransform(458.8,342.7);

	// Layer 3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_3, new cjs.Rectangle(374,254,169.5,177.3), null);


(lib.ClipGroup_7_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhRjJICjAAIAADsIijCng");
	mask_3.setTransform(522.8,407.2);

	// Layer 3
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_4, new cjs.Rectangle(514.6,387,16.4,40.4), null);


(lib.ClipGroup_6_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AhyhzIDmAAIAADng");
	mask_6.setTransform(265.3,108.5);

	// Layer 3
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_7, new cjs.Rectangle(253.7,97,23.1,23.1), null);


(lib.ClipGroup_5_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AiKJzIjWAAIkrErIoToTIlDAAIAAiGIjQjRIhKBLIAADNIl6AAIAAmpIExAAIjfjfIDVjXICdCeIg7A7IBHBHICWiWIjkjkIFalbIJ1AAIDcjdINYAAIDBDCIX6AAICrCsIirCsIAAFBIjWjVIAAh5Ii/DAIlRAAIAAD8IEwAAICJCJIAAEaIibCbIAAENIinioIiDCDIAABlIC5C5IjxDyIlXlYImkGkg");
	mask_9.setTransform(612.8,195.7);

	// Layer 3
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_9, new cjs.Rectangle(396.2,76.7,433.3,238.1), null);


(lib.ClipGroup_4_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AiogBIAAjgIFRFTIhwBwg");
	mask_6.setTransform(726.9,348);

	// Layer 3
	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_7, new cjs.Rectangle(710.1,325.4,33.7,45.3), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABoGeIiAiBIn9AAIAAkMIEIkGIBmAAICnioIB4AAIAABgIBgAAIBghgIA/AAIAADJICfCfIAACsIknEng");
	mask.setTransform(831.9,394.7);

	// Layer 3
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(778.5,353.3,106.8,82.9), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABhA9IjWAAIAAg9IicieIE4AAIDrDsIhQBRg");
	mask.setTransform(865.6,334.5);

	// Layer 3
	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(838.2,318.6,54.9,31.8), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjOAiIDwjwICtCsIjwDxg");
	mask.setTransform(767.4,319.1);

	// Layer 3
	this.instance = new lib.ClipGroup_13();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(746.7,298.4,41.4,41.4), null);


(lib.ClipGroup_4_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("Ah7B8QgzgzAAhJQAAhIAzgzQAzg0BIAAQBJAAAzA0QAzAzAABIQAABJgzAzQgzA0hJAAQhHAAg0g0g");
	mask_7.setTransform(1268.4,434);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_8, new cjs.Rectangle(1250.9,416.5,35.1,35.2), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AAHBaQAPAAAPgFIAwByQgUAIgQAEIgCAAIAAAAIgCAAIAAABIgDAAIAAAAIgDAAIAAABIgDAAIgCAAIgBAAIgaACgAhZDGIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAAAIAAAAQgTgKgRgOIAAAAIAAAAIgBAAIAAgBIAAAAIAAAAIgBAAIAAgBIgBAAIAAAAIAAAAIAAgBIgBAAIAAAAIAAAAIAAgBIgBAAIAAAAIAAAAIgOgOIBahfQAMAMAPAGIgyB9gAA7A7QALgKAHgQIB8AxIgCAGIAAAAIgBABIAAAAIAAABIAAABIgBAAIAAACQgSAhgZAYgAjHBVIAAgCIAAAAIAAgBIgBgBIAAgBIAAAAIAAgBQgNgiAAgnIB8AAQAAARAGAOIhzAwgABVgkIBygwIAAABIABAAIAAABIAAAAQAOAlAAAmIh7ACQgBgRgFgOgAjIhSIABgDIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABAAIAAgBQARggAZgYIBgBbQgMAKgHARgAAhhMIAxh9IAKAEIAAAAIABABIAAAAIAAAAIABAAIAAABIABAAIAAABIABAAIAAAAIABAAIAAABQAZANATASIABABIABAAIAAAAIAGAHIhaBgQgLgMgPgGgAhTjHQAKgFAOgDIAAgBIABAAIABAAIACAAIAAAAIACAAIAAgBIACAAIAAAAIADAAIAAgBIABAAIABAAIADAAIABgBIACAAIAAAAIADAAIAAgBIADAAIAAAAIAEAAIAAgBIAFAAIABgBIAGAAIAAAAIANAAIAAB8QgQABgPAFg");
	mask_2.setTransform(1268.4,434.1);

	// Layer 3
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(1247,412.6,42.8,43), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ah7B8QgzgzAAhJQAAhIAzgzQAzg0BIAAQBJAAAzA0QAzAzAABIQAABJgzAzQgzA0hJAAQhHAAg0g0g");
	mask_1.setTransform(1268.4,434);

	// Layer 3
	this.instance = new lib.ClipGroup_3_1();
	this.instance.parent = this;
	this.instance.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(1250.9,416.5,35.1,35.2), null);


(lib.ClipGroup_4_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("Ai8C9QhNhPAAhuQAAhtBNhPQBPhOBtAAQBuAABOBOQBOBPAABtQAABuhOBPQhOBOhuAAQhtAAhPhOg");
	mask_8.setTransform(1239.2,403.8);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_9, new cjs.Rectangle(1212.6,377.1,53.3,53.4), null);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AAKCJQAYAAAWgJIBICvQgbAKgbAGIgCAAIgEABIgBAAIgBABIgCAAIgBAAIgDAAIAAABIgDAAIAAAAIgDAAIgCABIgCAAIAAAAIgBAAQgUADgSAAgAiIEsIgBAAIAAAAIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIAAAAIAAAAIgBAAIAAgBIgBAAQgcgOgagVIAAgBIAAAAIAAAAIgBAAIAAgBIAAAAIgBAAIgBAAIAAgBIAAAAIAAAAIgBAAIAAgBIAAAAIAAAAIgBAAIAAgBIgBAAIAAAAIAAAAIAAgBIAAAAIAAAAIgBAAIAAgBIAAAAIAAAAIgBAAIgBgCIgBAAIgUgTICKiRQASATAVAJIhLC9gABYBaQATgTAKgWIC8BMIgEAJIAAAAIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIgBACQgaAygnAlgAkuB/IAAAAIAAgBIAAAAIAAgBIgBAAIAAgCIAAAAIAAgBIgBAAIAAgBQgUg1AAg6IC8AAQAAAZAJAVIivBIgACAg3ICthIIABAAIAAABIAAAAIAAABIABABIAAAAQAVA2ABA8Ii8ABQAAgYgJgWgAkwh8IACgHIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABAAIAAgBIAAgBIAAAAIABAAIAAgBIAAgBQAZgvAogmICQCJQgSASgLAXgAAxh0IBLi9IAOAHIABAAIABAAIAAABIABAAIAAAAIABAAIAAABIABAAIAAAAIABAAIAAABIABAAIAAAAIABAAIAAABIABAAIAAAAQAmAVAdAbIAAABIACAAIAAABIAAAAIAAAAIALAKIiJCSQgTgSgWgKgAh/kuIAkgMIABAAIABgBIABAAIACAAIAAAAIAAgBIACAAIAAAAIACAAIABgBIACAAIAAAAIACAAIAAgBIACAAIAAAAIACAAIABgBIAAAAIACAAIADAAIAAgBIACAAIABAAIADAAIAAgBIADAAIAAAAIACAAIADgBIACAAIAAAAIABAAIADgBIADAAIACAAIADAAIABgBIAGAAIABAAIAJAAIAAgBIANAAIAAC9QgZAAgWAJg");
	mask_3.setTransform(1239.9,404.4);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, new cjs.Rectangle(1207.4,371.9,65,65.1), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ai8C9QhNhPAAhuQAAhtBNhPQBPhOBtAAQBuAABOBOQBOBPAABtQAABuhOBPQhOBOhuAAQhtAAhPhOg");
	mask_2.setTransform(1239.2,403.8);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_3_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(1212.6,377.1,53.3,53.4), null);


(lib.ClipGroup_8_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgaB4IAAgwIAuAAIAAAwgAgWA0IAAgPQABgPAEgJQAFgJAGgGIALgMIAMgKQAGgFADgGQAEgGgBgJQAAgOgHgIQgIgHgNAAQgIAAgGADQgEACgGAHQgEAGgCAIIgCARIgwAAQAAgSAGgPQAFgPALgLQAJgKAQgHQAQgHAQAAQAXAAAOAFQAOAGALAMQAKAKAEALQAEAKAAALQAAARgEAJQgEAKgGAIQgIAIgGADIgNAKQgHAGgFAGQgFAGgBALIAAAMg");
	mask_3.setTransform(1012.8,818.5);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_4, new cjs.Rectangle(1004.9,806.5,15.9,24), null);


(lib.ClipGroup_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlWDIIAAmPIFWjJIFXDJIAAGPIlXDJg");
	mask_1.setTransform(1012.8,819.3);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_7_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_1, new cjs.Rectangle(978.5,779.2,68.7,80.1), null);


(lib.ClipGroup_19_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgCASQgLAAAAgUQABgGAEgFQADgEAFAAQAFAAAEAEQAEAEAAAHQAAAGgFAHQgGAHgEAAIAAAAg");
	mask_2.setTransform(23.4,17.8);

	// Layer 3
	this.instance = new lib.ClipGroup_20();
	this.instance.parent = this;
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_2, new cjs.Rectangle(22,16,2.7,3.7), null);


(lib.ClipGroup_10_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AkfEgIAAo/II/AAIAAI/gAh9h9Qg0A0AABJQAABKA0A0QA0A0BJAAQBKAAA0g0QA0g0AAhKQAAhJg0g0Qg0g0hKAAQhJAAg0A0g");
	mask_4.setTransform(28.8,28.8);

	// Layer 3
	this.instance = new lib.ClipGroup_4_1();
	this.instance.parent = this;
	this.instance.setTransform(28.8,28.8,1,1,0,0,0,18.8,18.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_4, new cjs.Rectangle(10,10,37.6,37.6), null);


(lib.ClipGroup_9_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgcAHIgKgIIADgFIBJgKIABAFQgdAbgQAAIgBABQgKAAgLgKg");
	mask_5.setTransform(17.2,24.2);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_5_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18,18,1,1,0,0,0,18,18);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_5, new cjs.Rectangle(13.2,22.6,7.9,3.3), null);


(lib.ClipGroup_8_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AilBIIAKg2QAFgbAJgHQANgMAMgGQAcgQA3gSIBCgDQA4ARAZANQANAGAKAJQAJAIAIAfIAMA7g");
	mask_4.setTransform(21.6,34.1);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_6_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.6,23.2,1,1,0,0,0,21.6,23.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_5, new cjs.Rectangle(5,27,33.3,14.3), null);


(lib.ClipGroup_7_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AghApIAAgUIAMgwQAAgcAbAAQAcAAAAAcIAABEQgOAPgUAAQgTAAgOgPg");
	mask_4.setTransform(17.7,23.9);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_12_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18,18,1,1,0,0,0,18,18);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_5, new cjs.Rectangle(14.3,18.3,6.8,11.1), null);


(lib.ClipGroup_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVAGIAngjIAEASIgUApg");
	mask.setTransform(19.4,28.4);

	// Layer 3
	this.instance = new lib.ClipGroup_13_1();
	this.instance.parent = this;
	this.instance.setTransform(18,18.2,1,1,0,0,0,18,18.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0, new cjs.Rectangle(17.2,25.5,4.4,5.9), null);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSgLIAFgPIAgAeIgWAXg");
	mask.setTransform(15.5,28.6);

	// Layer 3
	this.instance = new lib.ClipGroup_14();
	this.instance.parent = this;
	this.instance.setTransform(18,18.2,1,1,0,0,0,18,18.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(13.7,25.9,3.7,5.4), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AggBTQgWgFgGhGQgDgbAJgYQAPgmApgCQA/gDgEBcQgBARgEANQgDAIgIAQQgGAMgaAHQgQAFgOAAQgIAAgHgBg");
	mask.setTransform(17.3,16.8);

	// Layer 3
	this.instance = new lib.ClipGroup_15_1();
	this.instance.parent = this;
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(11.1,8.4,12.3,16.9), null);


(lib.ClipGroup_3_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgLATQgEgJAVghIAAABIgEAQQgDAMgGAMIATADQgIADgEAAQgIAAgDgFg");
	mask_1.setTransform(15.1,18.2);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18,18,1,1,0,0,0,18,18);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_1, new cjs.Rectangle(13.9,15.8,2.5,4.8), null);


(lib.ClipGroup_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgNACQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAiAAQgSAFgJAAIgEgBg");
	mask_1.setTransform(16.1,22.4);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18,18,1,1,0,0,0,18,18);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_1, new cjs.Rectangle(14.3,22.1,3.6,0.5), null);


(lib.ClipGroup_1_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ag+gZQAOgQAhgLQApgOAXAVQARADADAXQACASgFASQgEAMgIANQgHAKgDABQgCABAAgbQAAgcgBgDQgBAEgFAAQgHAAgPgFQgPgIgIgBQgNgDgNAEQgTAFgGAeQgBAEADAPQABAMgCAGQgQhFAOgPg");
	mask_2.setTransform(17.4,13.3);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18,18,1,1,0,0,0,18,18);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_2, new cjs.Rectangle(10.5,7.4,13.9,11.7), null);


(lib.ClipGroup_19_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AAsAhQgTgBgKgTIgFgNQgDgIgHAAQgGAAgDAHIgEANQgKAUgUgCIgDAAQgQgBgHgIQgGgGgBgLIgDgPQgBgEgDgBQgDgCAAgGIABgEIAEgCQAKgDAcACIADABIAVAEIATAEIARgDIAYgDIADAAQALgBAMACQAMABADABIAEACIABAEQABAGgEACQgDABgBAEIgCAOQgCAMgGAFQgHAHgQABgAAsgYQgXAAgGAJQgFAHAHAPQAGAPAIAEQAGADAHAAQAUABAHgMQAEgJAAgMQABgOgGgEQgGgEgNAAIgHABgAg7gbQgHABgDABQgFAEAAANQABANAEAJQAGAMAUABQAJAAAEgDQAJgEAGgOQAGgOgFgIQgGgJgXgCIgIAAIgIAAg");
	mask_3.setTransform(19.5,18.5);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_20_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21,21,1,1,0,0,0,21,21);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_3, new cjs.Rectangle(10.8,15.3,17.3,6.6), null);


(lib.ClipGroup_10_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ak/FAIAAp/IJ/AAIAAJ/gAiTiTQg+A9AABWQAABXA+A9QA9A+BWAAQBXAAA9g+QA+g9AAhXQAAhWg+g9Qg9g+hXAAQhWAAg9A+g");
	mask_5.setTransform(32,32);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_4_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,31.7,1,1,0,0,0,21.9,21.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_5, new cjs.Rectangle(10,9.5,44,44.5), null);


(lib.ClipGroup_9_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AjDBUIAMg/QAHggAJgIQATgPALgHQAhgSBBgVIBOgDQBBATAeAPQAPAIANAKQAKAJAJAmQAGAWAJAug");
	mask_6.setTransform(24.6,40.9);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_5_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.6,27.2,1,1,0,0,0,24.6,27.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_6, new cjs.Rectangle(5,32.5,39.2,16.9), null);


(lib.ClipGroup_8_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgnAvIAAgXIAOg3QABggAgAAQAgAAAAAgIAABOQgRARgXAAQgXAAgQgRg");
	mask_5.setTransform(20.9,28.6);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_6_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21,21,1,1,0,0,0,21,21);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_6, new cjs.Rectangle(16.9,22.2,8,12.8), null);


(lib.ClipGroup_7_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgYAHIAtgpIAEAVIgXAwg");
	mask_5.setTransform(22.9,34.2);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_12_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21,21.4,1,1,0,0,0,21,21.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_6, new cjs.Rectangle(20.4,30.7,5,7), null);


(lib.ClipGroup_6_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgVgOIAGgRIAlAkIgZAbg");
	mask_1.setTransform(18.3,34.4);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_13_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21,21.3,1,1,0,0,0,21,21.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0_1, new cjs.Rectangle(16.1,31.2,4.4,6.4), null);


(lib.ClipGroup_5_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AghAJIgMgLIAEgFIBWgMIABAGQgjAfgSABIgBABQgLAAgOgLg");
	mask_1.setTransform(20.3,29.2);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_14_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21,21,1,1,0,0,0,21,21);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_1, new cjs.Rectangle(15.7,27.3,9.2,3.9), null);


(lib.ClipGroup_4_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgiBlQgQgEgNglQgJgcgCgZQgDghALgaQARguAxgDQBMgEAABOQAAAIgEAKIgDAOQgBAVgDALQgCAJgIAPQgIAPgdAPQgWALgSAAQgGAAgGgBg");
	mask_1.setTransform(20.7,20.1);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_15_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21,21,1,1,0,0,0,21,21);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_1, new cjs.Rectangle(13.2,9.9,15.2,20.4), null);


(lib.ClipGroup_3_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgOAWQgFgKAPgeIAEgHQAAAKgEAOIgFAOQgBAFADACQAEAEATgDQgOAFgHAAQgHAAgCgEg");
	mask_2.setTransform(18.4,21.1);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_16_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21,21,1,1,0,0,0,21,21);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_2, new cjs.Rectangle(16.8,18.5,3.3,5.3), null);


(lib.ClipGroup_2_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgHAGIgHgCQgDgBgCgDQgCgCACgCIAogBIgGAEIgNAFIgIACIgBAAg");
	mask_2.setTransform(19.2,26.1);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_17_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21,21,1,1,0,0,0,21,21);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_2, new cjs.Rectangle(17.1,25.6,4.1,1.1), null);


(lib.ClipGroup_1_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgDAWQgGgBgEgIQgCgHAAgIQAAgIAEgFQAFgGAGABQAHAAAEAFQAFAFAAAIQgBAHgGAIQgGAJgGAAIAAAAg");
	mask_3.setTransform(27.9,20.9);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_18_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21,21,1,1,0,0,0,21,21);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_3, new cjs.Rectangle(26.4,18.8,3.1,4.3), null);


(lib.ClipGroup_17_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgLALQgCgGAAgGQAAgHADgFQAEgFAGAAQAFAAAFAEQAEAFAAAHQAAAFgGAIQgFAIgFAAQgGAAgDgIg");
	mask_6.setTransform(26.1,18.5);

	// Layer 3
	this.instance = new lib.ClipGroup_18_2();
	this.instance.parent = this;
	this.instance.setTransform(19.5,19.5,1,1,0,0,0,19.5,19.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_6, new cjs.Rectangle(24.7,16.6,2.8,3.8), null);


(lib.ClipGroup_9_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AkuEuIAApcIJcAAIAAJcgAiHiHQg4A4gBBPQABBQA4A4QA4A4BPABQBQgBA4g4QA4g4ABhQQgBhPg4g4Qg4g4hQgBQhPABg4A4g");
	mask_7.setTransform(30.3,30.3);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_4_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(30.2,30.8,1,1,0,0,0,20.2,20.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_7, new cjs.Rectangle(10,10,40.5,41.6), null);


(lib.ClipGroup_8_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgHBcQgUAAglgRIgggSQAQgSAIgQIAJg4QAIgoAjgIQAHgNAgABQAkABAVAcQASAbADApQACAugXAXQgVAUgaACIgkgDg");
	mask_6.setTransform(18.4,17.6);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_5_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19.5,19.5,1,1,0,0,0,19.5,19.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_7, new cjs.Rectangle(8.7,8.2,19.4,18.9), null);


(lib.ClipGroup_7_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AiaA/QAAhFAggOQAagMAvgSQAMgIADgEIAgABIAgABIADAGIAPAMQAMAIAUAGQAaAHAMAGQAbAPAHAXQADAKAAAeg");
	mask_6.setTransform(20.5,34.4);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_6_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(20.4,22.9,1,1,0,0,0,20.4,22.9);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_7, new cjs.Rectangle(5,28.1,31,12.7), null);


(lib.ClipGroup_6_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AAAAjQgUgDgMgaIAHgUIA6gUIAAAtQgNAYgSAAIgCAAg");
	mask_2.setTransform(20,27.4);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_11_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.5,19.5,1,1,0,0,0,19.5,19.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0_2, new cjs.Rectangle(16.7,23.9,6.6,7), null);


(lib.ClipGroup_5_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgcACQgGgKAFAAIAxgBIAMgCQgEAGgHAFQgOANgOAAQgPAAgGgLg");
	mask_2.setTransform(20.1,25.8);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_12_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.5,19.5,1,1,0,0,0,19.5,19.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_2, new cjs.Rectangle(16.9,24.6,6.5,2.5), null);


(lib.ClipGroup_4_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgOBGQgZgCgOggQgKgVgCgYQgCgOAJgLQAJgLAJABQAsAEANgQQADgDACgIQAAgBABAAQAAgBABAAQAAgBABABQAAAAABAAQANAIAKANQANARAAARQAAAMAEACQACAAgGAOQgYA5gtAAIgHgBg");
	mask_2.setTransform(19.6,19.3);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_13_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.5,19.5,1,1,0,0,0,19.5,19.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_2, new cjs.Rectangle(13,12.3,13.3,14.1), null);


(lib.ClipGroup_3_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgIARQgEgIAQgdIAAAAQAAADgDAMIgGAWIAPACQgHACgDAAQgGAAgCgEg");
	mask_3.setTransform(18,19.1);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_14_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.5,19.5,1,1,0,0,0,19.5,19.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_3, new cjs.Rectangle(17,17,1.9,4.3), null);


(lib.ClipGroup_2_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgjAWQgUgBgCgQIgCgJQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgCAAAAgFQAAgDAEgBQAIgDAUABIACAAIAeAEQAJAAAWgFIACAAQARgCALACQADABAAADQABAFgDABQAAAAgBAAQAAAAAAABQgBAAAAABQAAABgBABIgCAJQgCAQgVACIgCAAQgJAAgHgFIgGgIIgDgIQgCgFgFAAQgEAAgDAFIgDAJQgIANgOAAgAgzgOQgFACABAKQAAAIADAGQAFAIAPAAQAEAAAFgCQAHgDAFgLQAEgJgEgFQgDgGgSgBQgPAAgEADgAAhgSQgSABgEAGQgEAGAFAJQAEAKAGADQAFACAFgBQAPAAAFgIQADgHABgIQAAgJgEgCQgCgCgJAAIgIAAg");
	mask_3.setTransform(18.5,18.3);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_15_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.5,19.5,1,1,0,0,0,19.5,19.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_3, new cjs.Rectangle(12,16.1,12.9,4.4), null);


(lib.ClipGroup_1_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgNAEQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIAQAAIASgBQgTAHgJAAIgDAAg");
	mask_4.setTransform(18.7,23);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_16_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19.5,19.5,1,1,0,0,0,19.5,19.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_4, new cjs.Rectangle(16.9,22.6,3.7,0.9), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AktEvIAApdIJcAAIAAJdgAiHiHQg4A4gBBPQABBQA4A4QA4A4BPAAQBQAAA4g4QA4g4ABhQQgBhPg4g4Qg4g4hQAAQhPAAg4A4g");
	mask_1.setTransform(487.3,124.3);

	// Layer 3
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(457,94,60.5,60.5), null);


(lib.ClipGroup_16_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgJALQgCgGAAgGQgBgGAEgFQAEgEAEAAQAFAAADAEQAEAEAAAFQAAAGgEAHQgFAHgEAAQgFAAgDgGg");
	mask_6.setTransform(23.5,16.7);

	// Layer 3
	this.instance = new lib.ClipGroup_17_2();
	this.instance.parent = this;
	this.instance.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_6, new cjs.Rectangle(22.2,15,2.5,3.4), null);


(lib.ClipGroup_8_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AkaEbIAAo1II1AAIAAI1gAh6h6QgyAzAABHQAABIAyAzQAzAyBHAAQBIAAAzgyQAygzAAhIQAAhHgygzQgzgyhIAAQhHAAgzAyg");
	mask_7.setTransform(28.3,28.3);

	// Layer 3
	this.instance_5 = new lib.ClipGroup_4_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(28.3,29.1,1,1,0,0,0,18.3,19.1);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_8, new cjs.Rectangle(10,10,36.6,38.3), null);


(lib.ClipGroup_7_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgDB0QgtAAgShIIgKhIQAAgQAHgSQAMgkAhgIQAGgLAbADQAfADASAZQAUAcgCAmQgBAhgRAwQgFAPgEAYQgIAQgpAAIgDAAg");
	mask_7.setTransform(17.5,18.6);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_5_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.5,17.6,1,1,0,0,0,17.5,17.6);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_8, new cjs.Rectangle(9.9,7.1,15.3,23.2), null);


(lib.ClipGroup_6_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AiKA1QAAgVALgZQAOgbATgJQAbgNAagHIAKgCQAQgCAVACQAYABAOAGIAfALQARAGAOAIQAYAOAGAVQADAJAAAcg");
	mask_7.setTransform(18.9,31.6);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_10_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.9,20.9,1,1,0,0,0,18.9,20.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_8, new cjs.Rectangle(5,26.4,27.9,10.5), null);


(lib.ClipGroup_5_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgGAiQgLgCgPgRIAJgfIA0gRIAEA0QgWAPgNAAIgEAAg");
	mask_3.setTransform(18,24.9);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_11_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_3, new cjs.Rectangle(14.7,21.5,6.6,6.9), null);


(lib.ClipGroup_4_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgYAJIgKgJIAAgBIBGgPIgQAQQgRASgKAAQgGAAgLgJg");
	mask_3.setTransform(17.9,23.4);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_12_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_3, new cjs.Rectangle(14.3,21.6,7.1,3.5), null);


(lib.ClipGroup_3_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgPBCQgSgEgNggQgJgWgDgUQgBgMAIgKQAIgKAIABQAoADALgOIAIgMIAHAFQAEAEAEAHQAEAHACAKIADAKQABACAEAAQAEgBgBAFQAAAMADAAIgFALQgKAWgTATQgTAUgQAAIgFgBg");
	mask_4.setTransform(17.6,17.7);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_13_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_4, new cjs.Rectangle(11.7,11.1,11.8,13.3), null);


(lib.ClipGroup_2_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgHANQgDgFANgXIAAABQABABgDAJQgCAKgEAGIAOACQgHACgDAAQgEAAgCgDg");
	mask_4.setTransform(16.2,17.8);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_14_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_4, new cjs.Rectangle(15.4,16.3,1.7,3.2), null);


(lib.ClipGroup_1_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgMAFQgCAAgBgEQgBgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQABgBANAAIARgBQgSAJgIAAIgDAAg");
	mask_5.setTransform(17.1,21.1);

	// Layer 3
	this.instance_5 = new lib.ClipGroup_15_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_5, new cjs.Rectangle(15.5,20.6,3.3,1.1), null);


(lib.ClipGroup_26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgbASQgQgBgEgNQgDgKgBgBQgBAAAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABgBQAJgCAOABIACAAIANACIAMACIALgCIAPgDIACAAQAOgBAJACQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIgCAHQgCAOgQABIgCAAQgMABgHgLIgDgHQgCgFgFABQgDAAgCAEIgCAHQgEALgOAAgAgrgMQgDACABAIQAAAGADAFQAEAHANAAQADAAAFgCQAFgCAEgJQADgHgDgFQgFgFgOAAIgGAAQgHAAgDACgAAcgPQgPABgDAFQgDAEAEAIQAEAIAGADIAIABQAMAAAEgHQADgFAAgHQgBgHgDgCQgDgCgHAAIgGAAg");
	mask_1.setTransform(15,16.8);

	// Layer 3
	this.instance = new lib.ClipGroup_27();
	this.instance.parent = this;
	this.instance.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_1, new cjs.Rectangle(9.6,15,10.9,3.7), null);


(lib.ClipGroup_15_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AkaEbIAAo1II1AAIAAI1gAh6h6QgyAzAABHQAABIAyAzQAzAyBHAAQBIAAAzgyQAygzAAhIQAAhHgygzQgzgyhIAAQhHAAgzAyg");
	mask_7.setTransform(28.3,28.3);

	// Layer 3
	this.instance = new lib.ClipGroup_4_5();
	this.instance.parent = this;
	this.instance.setTransform(28.3,29.1,1,1,0,0,0,18.3,19.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_7, new cjs.Rectangle(10,10,36.6,38.3), null);


(lib.ClipGroup_14_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AigBHIgCgCQACgGACgMIADgRQAHgrAKgIIAIgHQAIgGAJgFQAegQAygQIBCgDQAvAPAWAJQATAIANAMQALAJALA3IAHAfIgBACg");
	mask_7.setTransform(21.1,33.2);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_5_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.2,22.6,1,1,0,0,0,21.2,22.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_7, new cjs.Rectangle(4.9,26.1,32.6,14.2), null);


(lib.ClipGroup_13_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AkFCqIAAlTIIKAAIAAFTgAChBGIgLg5QgJgfgHgHQgLgJgNgGQgYgMg2gRIhBADQg1ARgbAPQgLAHgNALQgJAHgFAbIgKA0IFCAAIAAAAg");
	mask_7.setTransform(26.2,33.2);

	// Layer 3
	this.instance = new lib.ClipGroup_6_4();
	this.instance.parent = this;
	this.instance.setTransform(26.5,20.4,1,1,0,0,0,17.4,20.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_7, new cjs.Rectangle(9,16.2,35.2,24.7), null);


(lib.ClipGroup_12_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	mask_7.setTransform(17,30.2);

	// Layer 3
	this.instance = new lib.ClipGroup_7_2();
	this.instance.parent = this;
	this.instance.setTransform(17.5,17.7,1,1,0,0,0,17.5,17.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_7, new cjs.Rectangle(16.7,30,0.5,0.4), null);


(lib.ClipGroup_11_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	mask_6.setTransform(17,31.7);

	// Layer 3
	this.instance = new lib.ClipGroup_8_1();
	this.instance.parent = this;
	this.instance.setTransform(17.5,18.4,1,1,0,0,0,17.5,18.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_6, new cjs.Rectangle(16.7,31.5,0.5,0.4), null);


(lib.ClipGroup_10_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	mask_6.setTransform(17,33.1);

	// Layer 3
	this.instance_2 = new lib.ClipGroup_9_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.5,19.2,1,1,0,0,0,17.5,19.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_6, new cjs.Rectangle(16.7,32.9,0.5,0.5), null);


(lib.ClipGroup_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AggAoIAAgTIAMgvQAAgbAagBQAbABAAAbIAABCQgNAOgUAAQgSAAgOgOg");
	mask.setTransform(17.2,23.2);

	// Layer 3
	this.instance = new lib.ClipGroup_17_3();
	this.instance.parent = this;
	this.instance.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_0, new cjs.Rectangle(13.9,17.8,6.6,10.9), null);


(lib.ClipGroup_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUAGIAlgiIAEARIgTAog");
	mask.setTransform(18.9,27.7);

	// Layer 3
	this.instance = new lib.ClipGroup_18_3();
	this.instance.parent = this;
	this.instance.setTransform(17.5,17.8,1,1,0,0,0,17.5,17.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0, new cjs.Rectangle(16.8,24.8,4.2,5.8), null);


(lib.ClipGroup_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAHIgJgHIADgEIBBgKIABAEQgbAYgOABIgBAAQgIAAgKgIg");
	mask.setTransform(17.1,23.4);

	// Layer 3
	this.instance = new lib.ClipGroup_19();
	this.instance.parent = this;
	this.instance.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0, new cjs.Rectangle(13.6,22,7,2.9), null);


(lib.ClipGroup_6_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgRgLIAEgPIAfAeIgVAWg");
	mask_3.setTransform(15.1,27.8);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_20_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.5,17.7,1,1,0,0,0,17.5,17.7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0_3, new cjs.Rectangle(13.3,25.2,3.6,5.3), null);


(lib.ClipGroup_5_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AggBOQgVgEgFg/QgDgbAJgXQAPglAngCQA+gDgEBaQgBAQgGANQgBAFgIAOQgFAJgaAIQgSAFgOAAIgNgBg");
	mask_4.setTransform(16.8,16.1);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_4, new cjs.Rectangle(10.9,8.2,12,15.9), null);


(lib.ClipGroup_4_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgJARQgCgFAEgPQAFgQADAAQACAAgEALQgEANAAAKIAPACQgIADgEAAQgFAAgCgDg");
	mask_4.setTransform(14.9,17.8);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_4, new cjs.Rectangle(13.8,15.8,2.1,4), null);


(lib.ClipGroup_3_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgNACQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBIAgAAQgRAFgJAAIgEgBg");
	mask_5.setTransform(15.7,21.5);

	// Layer 3
	this.instance_5 = new lib.ClipGroup_23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_5, new cjs.Rectangle(14,21.2,3.4,0.6), null);


(lib.ClipGroup_2_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AhAAQQgIgsAIgJIAEACQAFAEAOgGIAogRQAZgIAOAOQARACAJAZQAJAVgFAPQgFASgQARQgBABgBgaQAAgcgBgCQgBAEgFAAQgHABgOgHQgRgHgGgBQgMgDgNAEQgSAFgHAcQgBAFADAMIAAAWQgFgUgFgWg");
	mask_5.setTransform(16.5,13.1);

	// Layer 3
	this.instance_5 = new lib.ClipGroup_24();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_5, new cjs.Rectangle(9.6,7.3,13.9,11.6), null);


(lib.ClipGroup_1_0_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgCASQgFAAgDgHQgCgGAAgHQABgGADgEQAEgFAEAAQAGABAEAEQAEAEgBAGQAAAGgFAHQgGAHgEAAIAAAAg");
	mask_6.setTransform(22.7,17.3);

	// Layer 3
	this.instance_6 = new lib.ClipGroup_25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_6, new cjs.Rectangle(21.5,15.5,2.6,3.6), null);


(lib.ClipGroup_18_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgZAaQgFgNAAgRQAAgQAIgKQAIgMANAAQANAAAKAKQAJAKAAAOQAAAPgMASQgNARgMABQgMAAgHgRg");
	mask_5.setTransform(45.1,24);

	// Layer 3
	this.instance = new lib.ClipGroup_19_1();
	this.instance.parent = this;
	this.instance.setTransform(30,34.5,1,1,0,0,0,30,34.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_5, new cjs.Rectangle(42,19.8,6.3,8.5), null);


(lib.ClipGroup_11_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AASEiQiIAAhSgxQglgWgGgYQgGgaAegUQAQgLAHgSQAJgZgNgZQgNgbAIgYQAFgQAfgvQALgQAHgmIAOhDQAXhTBOgSQARgdBEAHQBPAIAtBAQAmA1ACA9QACA6AOAQIADADQATAYgIAgQgHAfgSAGQgRAFgHAdQgIAdAKASQAfA0gqAqQgvAvh2AAIgCAAg");
	mask_7.setTransform(29.5,34);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.9,37,1,1,0,0,0,30.9,37);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_7, new cjs.Rectangle(5,5,49,58.1), null);


(lib.ClipGroup_10_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AlbCgQAAhEAKgrQARhDAtgWQAhgPBCgXQA8gXAHgDQAKgGAMgTIASgcQAAgBBFAAQBEAAABgBQAGAIAAASQAFAUAdAVQAZAVAvANQA5ARAaAOQA8AjARA5QAGAYABBHg");
	mask_7.setTransform(39.8,58.6);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_3_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(39.8,39.8,1,1,0,0,0,39.8,39.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_7, new cjs.Rectangle(5,42.6,69.6,32.1), null);


(lib.ClipGroup_9_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AgBBIQgugFgag3IAPgqICEgpIAABfQgcAwgpAAIgGAAg");
	mask_8.setTransform(31.4,43.3);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_4_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(30,34.5,1,1,0,0,0,30,34.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_8, new cjs.Rectangle(24,36.1,14.8,14.5), null);


(lib.ClipGroup_8_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AgsADIgZgVIAAgFICLAAIAAAEQgLALgPAKQgdAWgPAAQgPAAgdgVg");
	mask_8.setTransform(29.2,40.5);

	// Layer 3
	this.instance_6 = new lib.ClipGroup_5_7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(30,34.5,1,1,0,0,0,30,34.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_9, new cjs.Rectangle(22.2,38.1,14,4.9), null);


(lib.ClipGroup_7_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AghCeQg3gFghhJQgUgugHg4QgEgeAUgZQAUgYAVABQBlAIAcgkQAGgIAGgQQADgIAGAEIAPALQAKAJALAUQAKASAGAXQAFAWACADQADAEAKAAQAIAAAAAMQAAAcAKAEQAEACgOAgQg3B+hmAAIgPAAg");
	mask_8.setTransform(30.6,25.8);

	// Layer 3
	this.instance_5 = new lib.ClipGroup_6_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(30,34.5,1,1,0,0,0,30,34.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_9, new cjs.Rectangle(15.7,9.9,30,31.7), null);


(lib.ClipGroup_6_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgGBhIAAjBIANAAIAADBg");
	mask_4.setTransform(30.2,60.2);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_12_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(30,37.4,1,1,0,0,0,30,37.4);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0_4, new cjs.Rectangle(29.5,50.5,1.4,19.4), null);


(lib.ClipGroup_5_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgrgaIAVgtIA/BMQACADABAHIg0A5g");
	mask_5.setTransform(26.4,49.9);

	// Layer 3
	this.instance_5 = new lib.ClipGroup_13_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(30,34.5,1,1,0,0,0,30,34.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_5, new cjs.Rectangle(22,42.7,8.8,14.4), null);


(lib.ClipGroup_4_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ag3AIIBehSIARA3IhABeg");
	mask_5.setTransform(35.2,49.9);

	// Layer 3
	this.instance_5 = new lib.ClipGroup_14_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(30,34.5,1,1,0,0,0,30,34.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_5, new cjs.Rectangle(29.5,42.4,11.3,15), null);


(lib.ClipGroup_3_0_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgTAnQgIgRAjhFIAAABQABAHgGAZQgHAbgJAYIAjAEQgQAHgJAAQgLAAgFgJg");
	mask_6.setTransform(26.9,25.4);

	// Layer 3
	this.instance_6 = new lib.ClipGroup_15_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(30,34.5,1,1,0,0,0,30,34.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_6, new cjs.Rectangle(24.8,20.6,4.4,9.6), null);


(lib.ClipGroup_2_0_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AAkApQgHgHgGgNQgEgRgDgHQgFgMgLAAQgMAAgFAMIgJAYQgSAgghAAIgGAAQgbgDgMgMQgJgKgDgTIgDgZQgCgIgEgCQgGgCABgLIACgHIAHgDQAFgCAUgBQAXgCARABIAFABQAOABAbAGIAcAGQALAAAYgFQAagGAKgBIAFAAQARgBAXABQAUACAFACIAHADQABACAAAFQAAALgGACQgEACgCAHIgGAaQgEATgKAKQgMAMgcACIgEAAIgCAAQgVAAgOgNgABMgtQgnACgLAPQgKANAKAZQAJAZAPAIQAJAFAOAAQAOAAANgFQANgGAFgKQAJgPABgWQACgXgJgGQgFgDgMgCIgVgBIgHAAgAh3gpQgJAGgBAXQAAAWAHAQQAFAKANAGQAMAFAPAAQANAAAJgFQAPgHAMgaQALgZgIgNQgLgPgngCIgNAAQgXAAgIAFg");
	mask_6.setTransform(27.7,23);

	// Layer 3
	this.instance_6 = new lib.ClipGroup_16_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(30,34.5,1,1,0,0,0,30,34.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_6, new cjs.Rectangle(12.8,17.6,29.8,10.8), null);


(lib.ClipGroup_1_0_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgfAJQgGgBgCgGQgCgFADgDQADgBAiAAIAqgCQgsATgVAAIgHgBg");
	mask_7.setTransform(28.6,34.2);

	// Layer 3
	this.instance_7 = new lib.ClipGroup_17_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(30,34.5,1,1,0,0,0,30,34.5);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_7, new cjs.Rectangle(24.5,33.3,8.2,2), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AliGGIAAsLILFAAIAAMLg");
	mask_2.setTransform(40.5,41);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_18_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38,39.5,1,1,0,0,0,30,34.5);

	this.instance_2 = new lib.ClipGroup_1_0_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38,39.5,1,1,0,0,0,30,34.5);

	this.instance_3 = new lib.ClipGroup_2_0_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(38,39.5,1,1,0,0,0,30,34.5);

	this.instance_4 = new lib.ClipGroup_3_0_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(38,39.5,1,1,0,0,0,30,34.5);

	this.instance_5 = new lib.ClipGroup_4_0_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(38,39.5,1,1,0,0,0,30,34.5);

	this.instance_6 = new lib.ClipGroup_5_0_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(38,39.5,1,1,0,0,0,30,34.5);

	this.instance_7 = new lib.ClipGroup_6_0_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(38,42.4,1,1,0,0,0,30,37.4);

	this.instance_8 = new lib.ClipGroup_7_9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(38,39.5,1,1,0,0,0,30,34.5);

	this.instance_9 = new lib.ClipGroup_8_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(38,39.5,1,1,0,0,0,30,34.5);

	this.instance_10 = new lib.ClipGroup_9_8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(38,39.5,1,1,0,0,0,30,34.5);

	this.instance_11 = new lib.ClipGroup_10_7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(39.8,44.8,1,1,0,0,0,39.8,39.8);

	this.instance_12 = new lib.ClipGroup_11_7();
	this.instance_12.parent = this;
	this.instance_12.setTransform(37,37,1,1,0,0,0,30.9,37);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(5,2,71,78), null);


(lib.ClipGroup_184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARgBQASABANANQAMAMAAARQAAASgMANQgNANgSAAQgRAAgMgNg");
	mask.setTransform(307.1,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_185();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_184, new cjs.Rectangle(302.8,198.1,8.6,8.7), null);


(lib.ClipGroup_116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_5_8();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_116, new cjs.Rectangle(624.4,247.3,8.6,8.7), null);


(lib.ClipGroup_115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_6_6();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_115, new cjs.Rectangle(648.4,247.3,8.7,8.7), null);


(lib.ClipGroup_114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(665.3,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_7_3();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_114, new cjs.Rectangle(661,247.3,8.6,8.7), null);


(lib.ClipGroup_113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,264.1);

	// Layer 3
	this.instance = new lib.ClipGroup_8_2();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_113, new cjs.Rectangle(624.4,259.8,8.6,8.6), null);


(lib.ClipGroup_112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(641.2,264.1);

	// Layer 3
	this.instance = new lib.ClipGroup_9_3();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_112, new cjs.Rectangle(636.9,259.8,8.7,8.6), null);


(lib.ClipGroup_111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,264.1);

	// Layer 3
	this.instance = new lib.ClipGroup_10_3();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_111, new cjs.Rectangle(648.4,259.8,8.7,8.6), null);


(lib.ClipGroup_110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(665.3,264.1);

	// Layer 3
	this.instance = new lib.ClipGroup_11_5();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_110, new cjs.Rectangle(661,259.8,8.6,8.6), null);


(lib.ClipGroup_109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,276.7);

	// Layer 3
	this.instance = new lib.ClipGroup_12_6();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_109, new cjs.Rectangle(624.4,272.3,8.6,8.7), null);


(lib.ClipGroup_108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(641.2,276.7);

	// Layer 3
	this.instance = new lib.ClipGroup_13_6();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_108, new cjs.Rectangle(636.9,272.3,8.7,8.7), null);


(lib.ClipGroup_107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,276.7);

	// Layer 3
	this.instance = new lib.ClipGroup_14_5();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_107, new cjs.Rectangle(648.4,272.3,8.7,8.7), null);


(lib.ClipGroup_106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgNARABQASgBANANQANANAAARQAAASgNANQgNANgSAAQgRAAgMgNg");
	mask.setTransform(641.2,288.2);

	// Layer 3
	this.instance = new lib.ClipGroup_15_6();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_106, new cjs.Rectangle(636.9,283.9,8.7,8.7), null);


(lib.ClipGroup_105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgNARABQASgBANANQAMANAAARQAAASgMANQgNANgSAAQgRAAgMgNg");
	mask.setTransform(652.8,288.2);

	// Layer 3
	this.instance = new lib.ClipGroup_16_5();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_105, new cjs.Rectangle(648.4,283.9,8.7,8.7), null);


(lib.ClipGroup_104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(616.2,240);

	// Layer 3
	this.instance = new lib.ClipGroup_17_5();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_104, new cjs.Rectangle(611.9,235.7,8.6,8.7), null);


(lib.ClipGroup_103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,240);

	// Layer 3
	this.instance = new lib.ClipGroup_18_4();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_103, new cjs.Rectangle(624.4,235.7,8.6,8.7), null);


(lib.ClipGroup_100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_21_1();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_100, new cjs.Rectangle(624.4,223.2,8.6,8.7), null);


(lib.ClipGroup_99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgOARAAQASAAANAOQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(641.2,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_22_1();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_99, new cjs.Rectangle(636.9,223.2,8.7,8.7), null);


(lib.ClipGroup_98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(641.2,215);

	// Layer 3
	this.instance = new lib.ClipGroup_23_1();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_98, new cjs.Rectangle(636.9,210.7,8.7,8.7), null);


(lib.ClipGroup_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,215);

	// Layer 3
	this.instance = new lib.ClipGroup_24_1();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_97, new cjs.Rectangle(648.4,210.7,8.7,8.7), null);


(lib.ClipGroup_96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,203.4);

	// Layer 3
	this.instance = new lib.ClipGroup_25_1();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_96, new cjs.Rectangle(648.4,199.1,8.7,8.7), null);


(lib.ClipGroup_95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(429.4,159.1);

	// Layer 3
	this.instance = new lib.ClipGroup_26();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_95, new cjs.Rectangle(425.1,154.8,8.6,8.7), null);


(lib.ClipGroup_94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(418.8,159.1);

	// Layer 3
	this.instance = new lib.ClipGroup_27_1();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_94, new cjs.Rectangle(414.5,154.8,8.7,8.7), null);


(lib.ClipGroup_93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(429.4,169.7);

	// Layer 3
	this.instance = new lib.ClipGroup_28();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_93, new cjs.Rectangle(425.1,165.4,8.6,8.7), null);


(lib.ClipGroup_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(418.8,169.7);

	// Layer 3
	this.instance = new lib.ClipGroup_29();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_92, new cjs.Rectangle(414.5,165.4,8.7,8.7), null);


(lib.ClipGroup_91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(158.9,118.6);

	// Layer 3
	this.instance = new lib.ClipGroup_30();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_91, new cjs.Rectangle(154.5,114.3,8.7,8.7), null);


(lib.ClipGroup_90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(294.6,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_31();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_90, new cjs.Rectangle(290.3,223.2,8.6,8.7), null);


(lib.ClipGroup_89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(283.1,215);

	// Layer 3
	this.instance = new lib.ClipGroup_32();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_89, new cjs.Rectangle(278.8,210.7,8.6,8.7), null);


(lib.ClipGroup_88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARgBQASABANANQAMAMAAARQAAASgMANQgNANgSAAQgRAAgNgNg");
	mask.setTransform(294.6,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_33();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_88, new cjs.Rectangle(290.3,198.1,8.6,8.7), null);


(lib.ClipGroup_87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARgBQASABANANQAMAMAAARQAAASgMANQgNANgSAAQgRAAgNgNg");
	mask.setTransform(283.1,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_34();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_87, new cjs.Rectangle(278.8,198.1,8.6,8.7), null);


(lib.ClipGroup_86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(283.1,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_35();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_86, new cjs.Rectangle(278.8,223.2,8.6,8.7), null);


(lib.ClipGroup_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgNgNABgSQgBgRANgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(270.6,215);

	// Layer 3
	this.instance = new lib.ClipGroup_36();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_85, new cjs.Rectangle(266.2,210.7,8.7,8.7), null);


(lib.ClipGroup_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgNgNABgSQgBgRANgMQANgNARgBQASABANANQAMAMAAARQAAASgMANQgNANgSAAQgRAAgNgNg");
	mask.setTransform(270.6,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_37();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_84, new cjs.Rectangle(266.2,198.1,8.7,8.7), null);


(lib.ClipGroup_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgNgNABgSQgBgRANgMQANgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(270.6,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_38();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_83, new cjs.Rectangle(266.2,223.2,8.7,8.7), null);


(lib.ClipGroup_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(258,215);

	// Layer 3
	this.instance = new lib.ClipGroup_39();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_82, new cjs.Rectangle(253.7,210.7,8.7,8.7), null);


(lib.ClipGroup_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARgBQASABANANQAMAMAAARQAAASgMANQgNANgSAAQgRAAgMgNg");
	mask.setTransform(258,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_40();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_81, new cjs.Rectangle(253.7,198.1,8.7,8.7), null);


(lib.ClipGroup_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARgBQASABANANQAMAMAAARQAAASgMANQgNANgSAAQgRAAgNgNg");
	mask.setTransform(246.5,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_41();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_80, new cjs.Rectangle(242.2,198.1,8.7,8.7), null);


(lib.ClipGroup_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(246.5,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_42();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_79, new cjs.Rectangle(242.2,223.2,8.7,8.7), null);


(lib.ClipGroup_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgNARgBQASABANANQANAMAAARQAAASgNANQgNANgSAAQgRAAgMgNg");
	mask.setTransform(234,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_43();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_78, new cjs.Rectangle(229.6,198.1,8.7,8.7), null);


(lib.ClipGroup_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgOARAAQASAAANAOQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(234,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_44();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_77, new cjs.Rectangle(229.6,223.2,8.7,8.7), null);


(lib.ClipGroup_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(221.4,215);

	// Layer 3
	this.instance = new lib.ClipGroup_45();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_76, new cjs.Rectangle(217.1,210.7,8.7,8.7), null);


(lib.ClipGroup_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(221.4,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_46();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_75, new cjs.Rectangle(217.1,223.2,8.7,8.7), null);


(lib.ClipGroup_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(209.9,215);

	// Layer 3
	this.instance = new lib.ClipGroup_47();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_74, new cjs.Rectangle(205.6,210.7,8.6,8.7), null);


(lib.ClipGroup_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARgBQASABANANQAMAMAAARQAAASgMANQgNANgSAAQgRAAgMgNg");
	mask.setTransform(209.9,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_48();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_73, new cjs.Rectangle(205.6,198.1,8.6,8.7), null);


(lib.ClipGroup_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(234,190.9);

	// Layer 3
	this.instance = new lib.ClipGroup_49();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_72, new cjs.Rectangle(229.6,186.6,8.7,8.6), null);


(lib.ClipGroup_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(221.4,190.9);

	// Layer 3
	this.instance = new lib.ClipGroup_50();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_71, new cjs.Rectangle(217.1,186.6,8.7,8.6), null);


(lib.ClipGroup_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(209.9,190.9);

	// Layer 3
	this.instance = new lib.ClipGroup_51();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_70, new cjs.Rectangle(205.6,186.6,8.6,8.6), null);


(lib.ClipGroup_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(197.4,215);

	// Layer 3
	this.instance = new lib.ClipGroup_52();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_69, new cjs.Rectangle(193.1,210.7,8.6,8.7), null);


(lib.ClipGroup_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(184.9,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_53();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_68, new cjs.Rectangle(180.5,223.2,8.7,8.7), null);


(lib.ClipGroup_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(173.3,215);

	// Layer 3
	this.instance = new lib.ClipGroup_54();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_67, new cjs.Rectangle(169,210.7,8.7,8.7), null);


(lib.ClipGroup_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgNARgBQASABANANQANAMAAARQAAASgNANQgNANgSAAQgRAAgMgNg");
	mask.setTransform(173.3,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_55();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_66, new cjs.Rectangle(169,198.1,8.7,8.7), null);


(lib.ClipGroup_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgOARAAQASAAANAOQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(173.3,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_56();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_65, new cjs.Rectangle(169,223.2,8.7,8.7), null);


(lib.ClipGroup_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(160.8,215);

	// Layer 3
	this.instance = new lib.ClipGroup_57();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_64, new cjs.Rectangle(156.5,210.7,8.7,8.7), null);


(lib.ClipGroup_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARgBQASABANANQAMAMAAARQAAASgMANQgNANgSAAQgRAAgNgNg");
	mask.setTransform(160.8,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_58();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_63, new cjs.Rectangle(156.5,198.1,8.7,8.7), null);


(lib.ClipGroup_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgNgNABgSQgBgRANgMQANgNARgBQASABANANQANAMAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	mask.setTransform(148.3,202.5);

	// Layer 3
	this.instance = new lib.ClipGroup_59();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_62, new cjs.Rectangle(143.9,198.1,8.7,8.7), null);


(lib.ClipGroup_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgNgNABgSQgBgRANgMQANgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(148.3,190.9);

	// Layer 3
	this.instance = new lib.ClipGroup_60();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_61, new cjs.Rectangle(143.9,186.6,8.7,8.6), null);


(lib.ClipGroup_60_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(160.8,178.4);

	// Layer 3
	this.instance = new lib.ClipGroup_124();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60_0, new cjs.Rectangle(156.5,174,8.7,8.7), null);


(lib.ClipGroup_59_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgNgNABgSQgBgRANgMQANgOARAAQASAAANAOQANAMAAARQAAASgNANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(148.3,178.4);

	// Layer 3
	this.instance = new lib.ClipGroup_125();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_59_0, new cjs.Rectangle(143.9,174,8.7,8.7), null);


(lib.ClipGroup_58_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgNgNABgSQgBgRANgMQANgOARAAQASAAANAOQANAMAAARQAAASgNANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(148.3,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_126();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_58_0, new cjs.Rectangle(143.9,223.2,8.7,8.7), null);


(lib.ClipGroup_57_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgNARABQASgBANANQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(246.5,239.1);

	// Layer 3
	this.instance = new lib.ClipGroup_127();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_57_0, new cjs.Rectangle(242.2,234.7,8.7,8.7), null);


(lib.ClipGroup_56_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgNARABQASgBANANQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(221.4,239.1);

	// Layer 3
	this.instance = new lib.ClipGroup_128();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56_0, new cjs.Rectangle(217.1,234.7,8.7,8.7), null);


(lib.ClipGroup_55_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgNARABQASgBANANQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(197.4,239.1);

	// Layer 3
	this.instance = new lib.ClipGroup_129();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_55_0, new cjs.Rectangle(193.1,234.7,8.6,8.7), null);


(lib.ClipGroup_54_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgNARABQASgBANANQANANAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(173.3,239.1);

	// Layer 3
	this.instance = new lib.ClipGroup_130();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_54_0, new cjs.Rectangle(169,234.7,8.7,8.7), null);


(lib.ClipGroup_53_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgNARABQASgBANANQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(160.8,239.1);

	// Layer 3
	this.instance = new lib.ClipGroup_131();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_53_0, new cjs.Rectangle(156.5,234.7,8.7,8.7), null);


(lib.ClipGroup_52_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(197.4,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_132();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52_0, new cjs.Rectangle(193.1,247.3,8.6,8.7), null);


(lib.ClipGroup_51_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(209.9,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_133();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51_0, new cjs.Rectangle(205.6,247.3,8.6,8.7), null);


(lib.ClipGroup_50_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(184.9,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_134();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50_0, new cjs.Rectangle(180.5,247.3,8.7,8.7), null);


(lib.ClipGroup_49_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(173.3,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_135();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49_0, new cjs.Rectangle(169,247.3,8.7,8.7), null);


(lib.ClipGroup_48_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(160.8,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_136();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_48_0, new cjs.Rectangle(156.5,247.3,8.7,8.7), null);


(lib.ClipGroup_47_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(480.4,218.8);

	// Layer 3
	this.instance = new lib.ClipGroup_137();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47_0, new cjs.Rectangle(476.1,214.5,8.7,8.7), null);


(lib.ClipGroup_46_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(460.2,132.1);

	// Layer 3
	this.instance = new lib.ClipGroup_138();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46_0, new cjs.Rectangle(455.9,127.8,8.6,8.7), null);


(lib.ClipGroup_45_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(240.7,298.8);

	// Layer 3
	this.instance = new lib.ClipGroup_139();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45_0, new cjs.Rectangle(236.4,294.5,8.7,8.7), null);


(lib.ClipGroup_44_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(240.7,311.3);

	// Layer 3
	this.instance = new lib.ClipGroup_140();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44_0, new cjs.Rectangle(236.4,307,8.7,8.6), null);


(lib.ClipGroup_43_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(512.2,322.9);

	// Layer 3
	this.instance = new lib.ClipGroup_141();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43_0, new cjs.Rectangle(507.9,318.6,8.6,8.7), null);


(lib.ClipGroup_42_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(406.3,272.8);

	// Layer 3
	this.instance = new lib.ClipGroup_142();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42_0, new cjs.Rectangle(402,268.5,8.7,8.7), null);


(lib.ClipGroup_41_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(460.2,198.6);

	// Layer 3
	this.instance = new lib.ClipGroup_143();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41_0, new cjs.Rectangle(455.9,194.3,8.6,8.7), null);


(lib.ClipGroup_40_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(451.5,189.9);

	// Layer 3
	this.instance = new lib.ClipGroup_144();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40_0, new cjs.Rectangle(447.2,185.6,8.7,8.7), null);


(lib.ClipGroup_39_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(523.7,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_145();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39_0, new cjs.Rectangle(519.4,247.3,8.6,8.7), null);


(lib.ClipGroup_38_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(616.2,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_146();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38_0, new cjs.Rectangle(611.9,247.3,8.6,8.7), null);


(lib.ClipGroup_37_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_147();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37_0, new cjs.Rectangle(624.4,247.3,8.6,8.7), null);


(lib.ClipGroup_36_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_148();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36_0, new cjs.Rectangle(648.4,247.3,8.7,8.7), null);


(lib.ClipGroup_35_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(665.3,251.6);

	// Layer 3
	this.instance = new lib.ClipGroup_149();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35_0, new cjs.Rectangle(661,247.3,8.6,8.7), null);


(lib.ClipGroup_34_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,264.1);

	// Layer 3
	this.instance = new lib.ClipGroup_150();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34_0, new cjs.Rectangle(624.4,259.8,8.6,8.6), null);


(lib.ClipGroup_33_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(641.2,264.1);

	// Layer 3
	this.instance = new lib.ClipGroup_151();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33_0, new cjs.Rectangle(636.9,259.8,8.7,8.6), null);


(lib.ClipGroup_32_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,264.1);

	// Layer 3
	this.instance = new lib.ClipGroup_152();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32_0, new cjs.Rectangle(648.4,259.8,8.7,8.6), null);


(lib.ClipGroup_31_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(665.3,264.1);

	// Layer 3
	this.instance = new lib.ClipGroup_153();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31_0, new cjs.Rectangle(661,259.8,8.6,8.6), null);


(lib.ClipGroup_30_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,276.7);

	// Layer 3
	this.instance = new lib.ClipGroup_154();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_0, new cjs.Rectangle(624.4,272.3,8.6,8.7), null);


(lib.ClipGroup_29_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(641.2,276.7);

	// Layer 3
	this.instance = new lib.ClipGroup_155();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_0, new cjs.Rectangle(636.9,272.3,8.7,8.7), null);


(lib.ClipGroup_28_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,276.7);

	// Layer 3
	this.instance = new lib.ClipGroup_156();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_0, new cjs.Rectangle(648.4,272.3,8.7,8.7), null);


(lib.ClipGroup_27_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgNARABQASgBANANQANANAAARQAAASgNANQgNANgSAAQgRAAgMgNg");
	mask.setTransform(641.2,288.2);

	// Layer 3
	this.instance = new lib.ClipGroup_157();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_0, new cjs.Rectangle(636.9,283.9,8.7,8.7), null);


(lib.ClipGroup_26_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgNARABQASgBANANQAMANAAARQAAASgMANQgNANgSAAQgRAAgMgNg");
	mask.setTransform(652.8,288.2);

	// Layer 3
	this.instance = new lib.ClipGroup_158();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_0, new cjs.Rectangle(648.4,283.9,8.7,8.7), null);


(lib.ClipGroup_25_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(616.2,240);

	// Layer 3
	this.instance = new lib.ClipGroup_159();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_0, new cjs.Rectangle(611.9,235.7,8.6,8.7), null);


(lib.ClipGroup_24_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,240);

	// Layer 3
	this.instance = new lib.ClipGroup_160();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_0, new cjs.Rectangle(624.4,235.7,8.6,8.7), null);


(lib.ClipGroup_23_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(628.7,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_161();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_0, new cjs.Rectangle(624.4,223.2,8.6,8.7), null);


(lib.ClipGroup_22_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgOARAAQASAAANAOQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(641.2,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_162();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_0, new cjs.Rectangle(636.9,223.2,8.7,8.7), null);


(lib.ClipGroup_21_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(641.2,215);

	// Layer 3
	this.instance = new lib.ClipGroup_163();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_0, new cjs.Rectangle(636.9,210.7,8.7,8.7), null);


(lib.ClipGroup_20_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,215);

	// Layer 3
	this.instance = new lib.ClipGroup_164();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_0, new cjs.Rectangle(648.4,210.7,8.7,8.7), null);


(lib.ClipGroup_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(652.8,203.4);

	// Layer 3
	this.instance = new lib.ClipGroup_165();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_0, new cjs.Rectangle(648.4,199.1,8.7,8.7), null);


(lib.ClipGroup_18_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(258,215);

	// Layer 3
	this.instance = new lib.ClipGroup_166();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_0, new cjs.Rectangle(253.7,210.7,8.7,8.7), null);


(lib.ClipGroup_17_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(221.4,215);

	// Layer 3
	this.instance = new lib.ClipGroup_167();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_0, new cjs.Rectangle(217.1,210.7,8.7,8.7), null);


(lib.ClipGroup_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(209.9,215);

	// Layer 3
	this.instance = new lib.ClipGroup_168();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_0, new cjs.Rectangle(205.6,210.7,8.6,8.7), null);


(lib.ClipGroup_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgOARAAQASAAANAOQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(173.3,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_169();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_0, new cjs.Rectangle(169,223.2,8.7,8.7), null);


(lib.ClipGroup_14_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgNgNABgSQgBgRANgMQANgOARAAQASAAANAOQANAMAAARQAAASgNANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(148.3,227.5);

	// Layer 3
	this.instance = new lib.ClipGroup_170();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_0, new cjs.Rectangle(143.9,223.2,8.7,8.7), null);


(lib.ClipGroup_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgNARABQASgBANANQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(246.5,239.1);

	// Layer 3
	this.instance = new lib.ClipGroup_171();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_0, new cjs.Rectangle(242.2,234.7,8.7,8.7), null);


(lib.ClipGroup_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNAAgSQAAgRANgNQAMgNARABQASgBANANQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(221.4,239.1);

	// Layer 3
	this.instance = new lib.ClipGroup_172();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_0, new cjs.Rectangle(217.1,234.7,8.7,8.7), null);


(lib.ClipGroup_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgNARABQASgBANANQANANAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask.setTransform(173.3,239.1);

	// Layer 3
	this.instance = new lib.ClipGroup_173();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_0, new cjs.Rectangle(169,234.7,8.7,8.7), null);


(lib.ClipGroup_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeAfQgMgNAAgSQAAgRAMgNQANgNARABQASgBANANQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask.setTransform(160.8,239.1);

	// Layer 3
	this.instance = new lib.ClipGroup_174();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_0, new cjs.Rectangle(156.5,234.7,8.7,8.7), null);


(lib.ClipGroup_9_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask_1.setTransform(197.4,251.6);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_175();
	this.instance_1.parent = this;
	this.instance_1.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_0_1, new cjs.Rectangle(193.1,247.3,8.6,8.7), null);


(lib.ClipGroup_8_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask_1.setTransform(209.9,251.6);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_176();
	this.instance_1.parent = this;
	this.instance_1.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0_1, new cjs.Rectangle(205.6,247.3,8.6,8.7), null);


(lib.ClipGroup_7_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask_1.setTransform(184.9,251.6);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_177();
	this.instance_1.parent = this;
	this.instance_1.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0_1, new cjs.Rectangle(180.5,247.3,8.7,8.7), null);


(lib.ClipGroup_6_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask_5.setTransform(173.3,251.6);

	// Layer 3
	this.instance_5 = new lib.ClipGroup_178();
	this.instance_5.parent = this;
	this.instance_5.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0_5, new cjs.Rectangle(169,247.3,8.7,8.7), null);


(lib.ClipGroup_5_0_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask_6.setTransform(160.8,251.6);

	// Layer 3
	this.instance_6 = new lib.ClipGroup_179();
	this.instance_6.parent = this;
	this.instance_6.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_6, new cjs.Rectangle(156.5,247.3,8.7,8.7), null);


(lib.ClipGroup_4_0_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgdAfQgOgNAAgSQAAgRAOgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	mask_6.setTransform(480.4,218.8);

	// Layer 3
	this.instance_6 = new lib.ClipGroup_180();
	this.instance_6.parent = this;
	this.instance_6.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_6, new cjs.Rectangle(476.1,214.5,8.7,8.7), null);


(lib.ClipGroup_3_0_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgdAfQgNgNgBgSQABgRANgNQAMgMARAAQASAAANAMQANANAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask_7.setTransform(240.7,298.8);

	// Layer 3
	this.instance_7 = new lib.ClipGroup_181();
	this.instance_7.parent = this;
	this.instance_7.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_7, new cjs.Rectangle(236.4,294.5,8.7,8.7), null);


(lib.ClipGroup_2_0_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgdAfQgNgNgBgSQABgRANgMQAMgNARAAQASAAANANQANAMAAARQAAASgNANQgNAMgSAAQgRAAgMgMg");
	mask_7.setTransform(240.7,311.3);

	// Layer 3
	this.instance_7 = new lib.ClipGroup_182();
	this.instance_7.parent = this;
	this.instance_7.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_7, new cjs.Rectangle(236.4,307,8.7,8.6), null);


(lib.ClipGroup_1_0_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AgeAfQgMgNAAgSQAAgRAMgMQANgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	mask_8.setTransform(512.2,322.9);

	// Layer 3
	this.instance_8 = new lib.ClipGroup_183();
	this.instance_8.parent = this;
	this.instance_8.setTransform(473.4,268.4,1,1,0,0,0,473.4,268.4);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_8, new cjs.Rectangle(507.9,318.6,8.6,8.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4332C9").ss(1.5,1,1).p("ACDAaIkFAAIAAgzIEFAA");
	this.shape.setTransform(34,53.4,0.47,0.47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4332C9").ss(1.5,1,1).p("AiCgZIEFAAIAAAzIkFAA");
	this.shape_1.setTransform(34,55.9,0.47,0.47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4332C9").ss(1.5,1,1).p("ACDAaIkFAAIAAgzIEFAA");
	this.shape_2.setTransform(34,58.4,0.47,0.47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4332C9").ss(1.5,1,1).p("AiCgZIEFAAIAAAzIkFAA");
	this.shape_3.setTransform(34,60.8,0.47,0.47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4332C9").ss(1.5,1,1).p("ACDAaIkFAAIAAgzIEFAA");
	this.shape_4.setTransform(34,63.3,0.47,0.47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4332C9").ss(2,1,1).p("Ag6gdIB0A7");
	this.shape_5.setTransform(34,40.1,0.47,0.47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4332C9").ss(2,1,1).p("AAACKIAAkT");
	this.shape_6.setTransform(36.8,45.7,0.47,0.47);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4332C9").ss(2,1,1).p("AAACdIAAk5");
	this.shape_7.setTransform(31.3,44.8,0.47,0.47);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6CPIAAkdIB1A8IAADhg");
	this.shape_8.setTransform(34,45.4,0.47,0.47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4332C9").ss(2).p("AA3CZQAAgmAJgLQAPgKAOgOQAmgmAAg1QAAg2gmgnQgmgmg3AAQg1AAgnAmQgmAmAAA3QAAA1AmAmQANAOAPAKQAJALAAAm");
	this.shape_9.setTransform(34,36.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5AC9C0").s().p("Ah2E7QAAhQgSgXQgggWgcgdQhRhSgBhyQAAh0BShRQBShSByAAQB0AABRBSQBSBSAABzQAABzhSBRIAAAAQgcAdggAWQgTAXAABQg");
	this.shape_10.setTransform(34,37.4,0.47,0.47);

	this.instance = new lib.ClipGroup_1_0_1();
	this.instance.parent = this;
	this.instance.setTransform(-198.7,29.9,0.796,0.796,0,0,0,720.1,803.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-772.1,-610.2,1146.5,1280.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_8_4();
	this.instance.parent = this;
	this.instance.setTransform(-572.7,24.2,2.133,2.133,0,0,0,720,803.9);

	this.instance_1 = new lib.ClipGroup_1_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-240.9,40.1,1,1,0,0,0,720,804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-2108.5,-1690.5,3071.5,3429.9), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AmdGfIAAs9IM7AAIAAM9gAiWiXQg/A/AABYQAABZA/A/QA+A/BYAAQBZAAA/g/QA+g/AAhZQAAhYg+g/Qg/g/hZAAQhYAAg+A/gAhfBhQgogoAAg5QAAg4AogoQAogoA3AAQA5AAAoAoQAoAoAAA4QAAA5goAoQgoAog5AAQg3AAgogog");
	mask_3.setTransform(1268.4,434);

	// Layer 3
	this.instance_13 = new lib.ClipGroup_0_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(1227,392.6,82.8,82.9), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AoMINIAAwaIQZAAIAAQagAjljlQhfBgAACFQAACHBfBfQBgBfCFABQCHgBBfhfQBfhfAAiHQAAiFhfhgQhfhgiHAAQiFAAhgBggAiSCUQg9g9AAhXQAAhVA9g+QA9g8BVgBQBWABA9A8QA9A+AABVQAABXg9A9Qg9A9hWAAQhVAAg9g9g");
	mask_4.setTransform(1239.2,403.8);

	// Layer 3
	this.instance_14 = new lib.ClipGroup_0_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(720,804,1,1,0,0,0,720,804);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(1186.7,351.2,105,105.1), null);


(lib.ClipGroup_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AkXEYIAAovIIvAAIAAIvg");
	mask_4.setTransform(29,29);

	// Layer 3
	this.instance = new lib.ClipGroup_19_2();
	this.instance.parent = this;
	this.instance.setTransform(29,29,1,1,0,0,0,18,18);

	this.instance_1 = new lib.ClipGroup_1_0_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29,29,1,1,0,0,0,18,18);

	this.instance_2 = new lib.ClipGroup_2_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29,29,1,1,0,0,0,18,18);

	this.instance_3 = new lib.ClipGroup_3_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29,29,1,1,0,0,0,18,18);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(29,29,1,1,0,0,0,18,18);

	this.instance_5 = new lib.ClipGroup_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(29,29.2,1,1,0,0,0,18,18.2);

	this.instance_6 = new lib.ClipGroup_6_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(29,29.2,1,1,0,0,0,18,18.2);

	this.instance_7 = new lib.ClipGroup_7_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(29,29,1,1,0,0,0,18,18);

	this.instance_8 = new lib.ClipGroup_8_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(28.5,34.2,1,1,0,0,0,21.6,23.2);

	this.instance_9 = new lib.ClipGroup_9_5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(29,29,1,1,0,0,0,18,18);

	this.instance_10 = new lib.ClipGroup_10_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(28.8,28.8,1,1,0,0,0,28.8,28.8);

	this.instance_11 = new lib.ClipGroup_11_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(28.8,28.8,1,1,0,0,0,22.8,22.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_4, new cjs.Rectangle(1,1,56,56), null);


(lib.ClipGroup_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ak1E2IAAprIJrAAIAAJrg");
	mask_5.setTransform(32,32);

	// Layer 3
	this.instance_12 = new lib.ClipGroup_19_3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(32,32,1,1,0,0,0,21,21);

	this.instance_13 = new lib.ClipGroup_1_0_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(32,32,1,1,0,0,0,21,21);

	this.instance_14 = new lib.ClipGroup_2_0_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(32,32,1,1,0,0,0,21,21);

	this.instance_15 = new lib.ClipGroup_3_0_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(32,32,1,1,0,0,0,21,21);

	this.instance_16 = new lib.ClipGroup_4_0_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(32,32,1,1,0,0,0,21,21);

	this.instance_17 = new lib.ClipGroup_5_0_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(32,32,1,1,0,0,0,21,21);

	this.instance_18 = new lib.ClipGroup_6_0_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(32,32.3,1,1,0,0,0,21,21.3);

	this.instance_19 = new lib.ClipGroup_7_6();
	this.instance_19.parent = this;
	this.instance_19.setTransform(32,32.4,1,1,0,0,0,21,21.4);

	this.instance_20 = new lib.ClipGroup_8_6();
	this.instance_20.parent = this;
	this.instance_20.setTransform(32,32,1,1,0,0,0,21,21);

	this.instance_21 = new lib.ClipGroup_9_6();
	this.instance_21.parent = this;
	this.instance_21.setTransform(31.7,38.2,1,1,0,0,0,24.6,27.2);

	this.instance_22 = new lib.ClipGroup_10_5();
	this.instance_22.parent = this;
	this.instance_22.setTransform(31.9,31.9,1,1,0,0,0,31.9,31.9);

	this.instance_23 = new lib.ClipGroup_11_2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(31.9,31.9,1,1,0,0,0,25.9,25.9);

	var maskedShapeInstanceList = [this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_5, new cjs.Rectangle(1,1,62,62), null);


(lib.ClipGroup_3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AkmEnIAApNIJNAAIAAJNg");
	mask_6.setTransform(30.5,30.5);

	// Layer 3
	this.instance_24 = new lib.ClipGroup_17_6();
	this.instance_24.parent = this;
	this.instance_24.setTransform(30.5,30.5,1,1,0,0,0,19.5,19.5);

	this.instance_25 = new lib.ClipGroup_1_0_4();
	this.instance_25.parent = this;
	this.instance_25.setTransform(30.5,30.5,1,1,0,0,0,19.5,19.5);

	this.instance_26 = new lib.ClipGroup_2_0_3();
	this.instance_26.parent = this;
	this.instance_26.setTransform(30.5,30.5,1,1,0,0,0,19.5,19.5);

	this.instance_27 = new lib.ClipGroup_3_0_3();
	this.instance_27.parent = this;
	this.instance_27.setTransform(30.5,30.5,1,1,0,0,0,19.5,19.5);

	this.instance_28 = new lib.ClipGroup_4_0_2();
	this.instance_28.parent = this;
	this.instance_28.setTransform(30.5,30.5,1,1,0,0,0,19.5,19.5);

	this.instance_29 = new lib.ClipGroup_5_0_2();
	this.instance_29.parent = this;
	this.instance_29.setTransform(30.5,30.5,1,1,0,0,0,19.5,19.5);

	this.instance_30 = new lib.ClipGroup_6_0_2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(30.5,30.5,1,1,0,0,0,19.5,19.5);

	this.instance_31 = new lib.ClipGroup_7_7();
	this.instance_31.parent = this;
	this.instance_31.setTransform(31.1,33.9,1,1,0,0,0,20.4,22.9);

	this.instance_32 = new lib.ClipGroup_8_7();
	this.instance_32.parent = this;
	this.instance_32.setTransform(30.5,30.5,1,1,0,0,0,19.5,19.5);

	this.instance_33 = new lib.ClipGroup_9_7();
	this.instance_33.parent = this;
	this.instance_33.setTransform(30.2,30.2,1,1,0,0,0,30.2,30.2);

	this.instance_34 = new lib.ClipGroup_10_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(30.2,30.2,1,1,0,0,0,24.2,24.2);

	var maskedShapeInstanceList = [this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_6, new cjs.Rectangle(1,1,59,59), null);


(lib.ClipGroup_3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AkSETIAAolIIlAAIAAIlg");
	mask_7.setTransform(28.5,28.5);

	// Layer 3
	this.instance_35 = new lib.ClipGroup_16_6();
	this.instance_35.parent = this;
	this.instance_35.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_36 = new lib.ClipGroup_1_0_5();
	this.instance_36.parent = this;
	this.instance_36.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_37 = new lib.ClipGroup_2_0_4();
	this.instance_37.parent = this;
	this.instance_37.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_38 = new lib.ClipGroup_3_0_4();
	this.instance_38.parent = this;
	this.instance_38.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_39 = new lib.ClipGroup_4_0_3();
	this.instance_39.parent = this;
	this.instance_39.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_40 = new lib.ClipGroup_5_0_3();
	this.instance_40.parent = this;
	this.instance_40.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_41 = new lib.ClipGroup_6_8();
	this.instance_41.parent = this;
	this.instance_41.setTransform(29.1,31.9,1,1,0,0,0,18.9,20.9);

	this.instance_42 = new lib.ClipGroup_7_8();
	this.instance_42.parent = this;
	this.instance_42.setTransform(28.5,28.6,1,1,0,0,0,17.5,17.6);

	this.instance_43 = new lib.ClipGroup_8_8();
	this.instance_43.parent = this;
	this.instance_43.setTransform(28.3,28.3,1,1,0,0,0,28.3,28.3);

	this.instance_44 = new lib.ClipGroup_9_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(28.3,28.3,1,1,0,0,0,22.3,22.3);

	var maskedShapeInstanceList = [this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_7, new cjs.Rectangle(1,1,55,55), null);


(lib.ClipGroup_3_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AkSEYIAAovIIlAAIAAIvg");
	mask_8.setTransform(28.5,29);

	// Layer 3
	this.instance_45 = new lib.ClipGroup_26_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_46 = new lib.ClipGroup_1_0_6();
	this.instance_46.parent = this;
	this.instance_46.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_47 = new lib.ClipGroup_2_0_5();
	this.instance_47.parent = this;
	this.instance_47.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_48 = new lib.ClipGroup_3_0_5();
	this.instance_48.parent = this;
	this.instance_48.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_49 = new lib.ClipGroup_4_0_4();
	this.instance_49.parent = this;
	this.instance_49.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_50 = new lib.ClipGroup_5_0_4();
	this.instance_50.parent = this;
	this.instance_50.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_51 = new lib.ClipGroup_6_0_3();
	this.instance_51.parent = this;
	this.instance_51.setTransform(28.5,28.7,1,1,0,0,0,17.5,17.7);

	this.instance_52 = new lib.ClipGroup_7_0();
	this.instance_52.parent = this;
	this.instance_52.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_53 = new lib.ClipGroup_8_0();
	this.instance_53.parent = this;
	this.instance_53.setTransform(28.5,28.8,1,1,0,0,0,17.5,17.8);

	this.instance_54 = new lib.ClipGroup_9_0();
	this.instance_54.parent = this;
	this.instance_54.setTransform(28.5,28.5,1,1,0,0,0,17.5,17.5);

	this.instance_55 = new lib.ClipGroup_10_6();
	this.instance_55.parent = this;
	this.instance_55.setTransform(28.5,30.2,1,1,0,0,0,17.5,19.2);

	this.instance_56 = new lib.ClipGroup_11_6();
	this.instance_56.parent = this;
	this.instance_56.setTransform(28.5,29.4,1,1,0,0,0,17.5,18.4);

	this.instance_57 = new lib.ClipGroup_12_7();
	this.instance_57.parent = this;
	this.instance_57.setTransform(28.5,28.7,1,1,0,0,0,17.5,17.7);

	this.instance_58 = new lib.ClipGroup_13_7();
	this.instance_58.parent = this;
	this.instance_58.setTransform(28.1,36.1,1,1,0,0,0,26.2,25.1);

	this.instance_59 = new lib.ClipGroup_14_7();
	this.instance_59.parent = this;
	this.instance_59.setTransform(28.1,33.6,1,1,0,0,0,21.2,22.6);

	this.instance_60 = new lib.ClipGroup_15_7();
	this.instance_60.parent = this;
	this.instance_60.setTransform(28.3,28.3,1,1,0,0,0,28.3,28.3);

	this.instance_61 = new lib.ClipGroup_16_3();
	this.instance_61.parent = this;
	this.instance_61.setTransform(28.3,28.3,1,1,0,0,0,22.3,22.3);

	var maskedShapeInstanceList = [this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_8, new cjs.Rectangle(1,1,55,56), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1_2();
	this.instance.parent = this;
	this.instance.setTransform(39.8,42.3,1,1,0,0,0,39.8,42.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,79.6,84.7), null);


(lib.ClipGroup_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_3.setTransform(473.5,268.5);

	// Layer 3
	this.instance_2 = new lib.Group();
	this.instance_2.parent = this;
	this.instance_2.setTransform(189.3,216,1,1,0,0,0,39.8,42.3);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, new cjs.Rectangle(149.5,173.7,79.6,84.7), null);


(lib.ClipGroup_101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4332C9").ss(2).p("AAAGxQCzAAB/h/QB/h/AAizQAAizh/h/Qh/h+izAAQiyAAh/B+Qh/B/AACzQAACzB/B/QB/B/CyAAg");
	this.shape_5.setTransform(187.3,204.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AkxEyQh+h/gBizQABiyB+iAQB/h+CyAAQCzAAB/B+QB+CAAACyQAAC0h+B+Qh/B/izAAQiyAAh/h/g");
	mask_5.setTransform(187.3,204.3);

	// Layer 3
	this.instance = new lib.ClipGroup_0_3();
	this.instance.parent = this;
	this.instance.setTransform(473.4,268.5,1,1,0,0,0,473.4,268.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.circke();
	this.instance_1.parent = this;
	this.instance_1.setTransform(187.2,204.3,1,1,0,0,0,43.2,43.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_101, new cjs.Rectangle(136,153,106,106), null);


(lib.Tween50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_4_9();
	this.instance.parent = this;
	this.instance.setTransform(-519.8,399.6,1,1,0,0,0,720,804);

	this.instance_1 = new lib.ClipGroup_1_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-519.8,399.6,1,1,0,0,0,720,804);

	this.instance_2 = new lib.ClipGroup_2_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-519.8,399.6,1,1,0,0,0,720,804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1239.8,-404.4,1439.9,1607.9);


(lib.Tween49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_4_8();
	this.instance.parent = this;
	this.instance.setTransform(-548.3,370,1,1,0,0,0,720,804);

	this.instance_1 = new lib.ClipGroup_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-548.3,370,1,1,0,0,0,720,804);

	this.instance_2 = new lib.ClipGroup_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-548.3,370,1,1,0,0,0,720,804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1268.3,-434,1439.9,1608);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.ClipGroup_3_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.8,28.8,1,1,0,0,0,28.8,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,57.6,57.6), null);


(lib.ClipGroup_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_4.setTransform(473.5,268.5);

	// Layer 3
	this.instance_2 = new lib.Group_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(639.8,204.8,1,1,0,0,0,28.8,28.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_4, new cjs.Rectangle(611,176,57.5,57.6), null);


(lib.ClipGroup_0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4332C9").p("AAAGxQCzAAB/h/QB/h/AAizQAAizh/h/Qh/h+izAAQiyAAh/B+Qh/B/AACzQAACzB/B/QB/B/CyAAg");
	this.shape_1.setTransform(476.6,269,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ah9B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAg0g0g");
	mask_4.setTransform(476.8,268.8);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_2_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(477,269,1,1,0,0,0,640,205);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 1 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EAh5AVlQg0g0AAhKQAAhKA0g0QA0g0BKAAQBKAAA0A0QA0A0AABKQAABKg0A0Qg0A0hKAAQhKAAg0g0g");
	mask_5.setTransform(247.3,143.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, new cjs.Rectangle(458,250.4,37.2,37.3), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.ClipGroup_3_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31.9,32.6,1,1,0,0,0,31.9,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,64,65.4), null);


(lib.ClipGroup_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_5.setTransform(473.5,268.5);

	// Layer 3
	this.instance_3 = new lib.Group_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(513.9,322.6,1,1,0,0,0,31.9,32.6);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_5, new cjs.Rectangle(482,290,64,65.4), null);


(lib.ClipGroup_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4332C9").ss(2).p("AAAGxQCzAAB/h/QB/h/AAizQAAizh/h/Qh/h+izAAQiyAAh/B+Qh/B/AACzQAACzB/B/QB/B/CyAAg");
	this.shape_2.setTransform(513.8,322.3,0.492,0.492);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AiTCUQg+g9AAhXQAAhWA+g9QA9g+BWAAQBXAAA9A+QA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+g");
	mask_6.setTransform(514,322);

	// Layer 3
	this.instance_4 = new lib.ClipGroup_2_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_5, new cjs.Rectangle(491.5,300,44.5,45.1), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.ClipGroup_3_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(30.2,30.2,1,1,0,0,0,30.2,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,60.5,60.5), null);


(lib.ClipGroup_2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_6.setTransform(473.5,268.5);

	// Layer 3
	this.instance_4 = new lib.Group_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(487.2,124.2,1,1,0,0,0,30.2,30.2);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_6, new cjs.Rectangle(457,94,60.5,60.5), null);


(lib.ClipGroup_0_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AiHCIQg4g4gBhQQABhPA4g4QA4g4BPAAQBQAAA4A4QA4A4ABBPQgBBQg4A4Qg4A4hQAAQhPAAg4g4g");
	mask_7.setTransform(487.3,124.3);

	// Layer 3
	this.instance_5 = new lib.ClipGroup_2_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_6, new cjs.Rectangle(468,105,38.5,38.5), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.ClipGroup_3_7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(28.3,28.3,1,1,0,0,0,28.3,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,56.6,56.6), null);


(lib.ClipGroup_2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_7.setTransform(473.5,268.5);

	// Layer 3
	this.instance_5 = new lib.Group_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(468.3,187.3,1,1,0,0,0,28.3,28.3);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_7, new cjs.Rectangle(440,159,56.6,56.6), null);


(lib.ClipGroup_0_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("Ah6B6QgygzAAhHQAAhGAygzQA0gzBGAAQBIAAAyAzQAzAzAABGQAABHgzAzQgyAzhIAAQhGAAg0gzg");
	mask_8.setTransform(468.3,187.3);

	// Layer 3
	this.instance_6 = new lib.ClipGroup_2_7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_7, new cjs.Rectangle(451,170,34.6,34.6), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_5 = new lib.ClipGroup_3_8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(28.3,30.6,1,1,0,0,0,28.3,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,56.6,61.2), null);


(lib.ClipGroup_2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("EhJ+Ap9MAAAhT5MCT9AAAMAAABT5g");
	mask_8.setTransform(473.5,268.5);

	// Layer 3
	this.instance_6 = new lib.Group_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(273.3,324.6,1,1,0,0,0,28.3,30.6);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_8, new cjs.Rectangle(245,294,56.6,61.1), null);


(lib.ClipGroup_0_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4332C9").p("AAAGxQCzAAB/h/QB/h/AAizQAAizh/h/Qh/h+izAAQiyAAh/B+Qh/B/AACzQAACzB/B/QB/B/CyAAg");
	this.shape_3.setTransform(272.7,322.4,0.402,0.402);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("Ah5B6QgzgzAAhHQAAhGAzg0QAygyBHAAQBIAAAzAyQAyA0AABGQAABHgyAzQgzAzhIAAQhHAAgygzg");
	mask_9.setTransform(273.3,322.3);

	// Layer 3
	this.instance_7 = new lib.ClipGroup_2_8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(473.5,268.5,1,1,0,0,0,473.5,268.5);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_8, new cjs.Rectangle(254.4,304,36.8,36.9), null);


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0_6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,487.2,124.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.7,144.3,1,1,0,0,0,473.5,268.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492.2,-129.2,960,550);


// stage content:
(lib.world_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubble2
	this.instance = new lib.Tween40("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(605.1,111.3,0.253,0.253,0,0,0,88.2,-0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({regX:88.3,scaleX:1.61,scaleY:1.61,y:111.4},7).to({regX:88.2,scaleX:1.22,scaleY:1.22,x:605},4).to({startPosition:0},13).to({startPosition:0},6).to({scaleX:1.44,scaleY:1.44},4).to({regX:88.4,regY:-1,scaleX:0.21,scaleY:0.21,x:605.1,y:111.2},5).to({_off:true},1).wait(186));

	// expert-5
	this.instance_1 = new lib.ClipGroup_0_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(595.6,220.6,0.231,0.231,0,0,0,473.4,268.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({regY:268.5,scaleX:1.6,scaleY:1.6,x:595.5},6).to({regX:473.5,scaleX:1,scaleY:1,x:595.6},3).wait(24).to({regX:473.4,regY:268.4,scaleX:2.38,scaleY:2.38,x:595.4,y:196.2},13).wait(12).to({x:595.5,y:196.3},48).to({x:595.4,y:196.2},121).to({scaleX:0.49,scaleY:0.49,x:595.2},7).to({_off:true},1).wait(36));

	// exp-4
	this.instance_2 = new lib.ClipGroup_0_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(354.3,232.9,0.218,0.218,0,0,0,514.8,326.5);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({regX:514.5,regY:326.3,scaleX:1.18,scaleY:1.18,x:354.2,y:232.8},9).to({regX:514.6,regY:326.4,scaleX:0.83,scaleY:0.83,x:354.3,y:232.9},5).wait(29).to({alpha:0},10).to({_off:true},1).wait(220));

	// exp-3
	this.instance_3 = new lib.Tween41("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(413.6,83.6,0.249,0.249);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({regX:0.1,scaleX:1.78,scaleY:1.78,x:413.8},9).to({regX:0,scaleX:1,scaleY:1,x:413.6},5).to({startPosition:0},32).to({startPosition:0},5).to({alpha:0},10).to({_off:true},1).wait(217));

	// exp-2
	this.instance_4 = new lib.ClipGroup_0_7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(404.1,143.1,0.415,0.415,0,0,0,467.9,186.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).to({regX:467.8,regY:186.8,scaleX:1.63,scaleY:1.63,x:404,y:143.2},9).to({regX:467.9,scaleX:1.01,scaleY:1.01,x:404.1,y:143.1},5).wait(29).to({alpha:0},10).to({_off:true},1).wait(222));

	// exp-1
	this.instance_5 = new lib.ClipGroup_0_8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(193.1,262.6,0.306,0.306,0,0,0,273.2,325.8);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({scaleX:1.66,scaleY:1.66,y:262.9},8).to({regX:273.3,scaleX:1,scaleY:1,x:193.2,y:262.8},5).wait(43).to({alpha:0},10).to({_off:true},1).wait(215));

	// user
	this.instance_6 = new lib.ClipGroup_101();
	this.instance_6.parent = this;
	this.instance_6.setTransform(154.6,179.4,0.246,0.246,0,0,0,187.2,204.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({scaleX:1.23,scaleY:1.23,y:179.3},6).to({regY:204.3,scaleX:1,scaleY:1,x:154.5,y:179.4},2).wait(243).to({regX:187.1,regY:204.2,scaleX:0.12,scaleY:0.12,x:154.6},8).to({_off:true},1).wait(35));

	// <Clip Group>
	this.instance_7 = new lib.ClipGroup_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(183.9,182.6,0.667,0.667,0,0,0,14.6,14);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(246).to({_off:false},0).to({y:115.1},8).to({y:120.6},3).wait(8).to({alpha:0},8).to({_off:true},11).wait(27));

	// Base Design
	this.instance_8 = new lib.ClipGroup_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(168.9,182.6,0.667,0.667,0,0,0,14.6,14);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(239).to({_off:false},0).to({y:115.1},8).to({y:120.6},3).wait(15).to({alpha:0},8).to({_off:true},11).wait(27));

	// <Clip Group>
	this.instance_9 = new lib.ClipGroup_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(154.2,182.6,0.667,0.667,0,0,0,14.6,14);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(233).to({_off:false},0).to({y:115.1},8).to({y:120.6},3).wait(21).to({alpha:0},8).to({_off:true},11).wait(27));

	// <Clip Group>
	this.instance_10 = new lib.ClipGroup_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(140,182.6,0.667,0.667,0,0,0,14.6,14);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(227).to({_off:false},0).to({y:115.1},8).to({y:120.6},3).wait(27).to({alpha:0},8).to({_off:true},11).wait(27));

	// <Clip Group>
	this.instance_11 = new lib.ClipGroup_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(124.9,182.6,0.667,0.667,0,0,0,14.7,14);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(222).to({_off:false},0).to({y:115.1},8).to({y:120.6},3).wait(32).to({alpha:0},8).to({_off:true},11).wait(27));

	// Layer 35
	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(599.8,194.2,0.667,0.634,0,0,0,34.2,40.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(183).to({_off:false},0).to({regX:34.3,regY:40.1,scaleX:1,scaleY:1,x:604.5,y:91.1},6).to({y:102.4},4).wait(5).to({x:152.6,y:89.9},15).to({y:69.9},3).to({y:178.1},5).to({_off:true},1).wait(89));

	// Layer 1
	this.instance_13 = new lib.Tween49("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(620.8,210.8,0.73,0.73);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(146).to({_off:false},0).to({x:614.6,y:115.4},5).to({x:615.9,y:126.3},4).to({rotation:-90,x:616},19).to({y:115.5},3).to({y:204},6).to({_off:true},1).wait(127));

	// Layer 1
	this.instance_14 = new lib.Tween50("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(589.9,198.9,0.73,0.73);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(146).to({_off:false},0).to({x:583.7,y:103.5},5).to({x:585,y:114.4},4).to({rotation:-90,y:114.5},19).to({rotation:-450,y:103.7},3).to({y:192.1},6).to({_off:true},1).wait(127));

	// Layer 1
	this.instance_15 = new lib.Symbol3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(152,185.2,0.258,0.258,0,0,0,51.6,54.5);
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,12);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(25).to({_off:false},0).to({regY:54.6,scaleX:0.63,scaleY:0.63,x:152.1,y:75},5).to({regX:51.5,regY:54.5,x:152,y:98.9},2).to({regX:51.6,regY:54.6,y:99},32).to({regX:51.5,regY:54.5,y:98.9},65).to({x:601.4,y:119.8},6).to({y:108.8},4).to({x:602.6,y:198.5},4).to({_off:true},1).wait(167));

	// Layer 1
	this.instance_16 = new lib.Tween47("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(380.9,182.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},0).to({alpha:1},10).to({startPosition:0},197).to({startPosition:0},1).to({alpha:0},7).to({_off:true},8).wait(28));

	// Layer 34
	this.instance_17 = new lib.Tween48("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(396.9,184);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(37).to({_off:false},0).to({alpha:1},8).to({startPosition:0},25).to({_off:true},1).wait(240));

	// <Clip Group>_184
	this.instance_18 = new lib.ClipGroup_184();
	this.instance_18.parent = this;
	this.instance_18.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(5).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},5).wait(1));

	// <Clip Group>_1_0
	this.instance_19 = new lib.ClipGroup_1_0_8();
	this.instance_19.parent = this;
	this.instance_19.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_2_0
	this.instance_20 = new lib.ClipGroup_2_0_7();
	this.instance_20.parent = this;
	this.instance_20.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(11).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:0},3).to({alpha:1},6).to({alpha:0},6).to({_off:true},11).wait(1));

	// <Clip Group>_3_0
	this.instance_21 = new lib.ClipGroup_3_0_7();
	this.instance_21.parent = this;
	this.instance_21.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(2).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:1},1).wait(6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},2).wait(1));

	// <Clip Group>_4_0
	this.instance_22 = new lib.ClipGroup_4_0_6();
	this.instance_22.parent = this;
	this.instance_22.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({alpha:0},14).to({alpha:1},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:1},1).wait(6).to({alpha:0},6).to({alpha:1},14).wait(1));

	// <Clip Group>_5_0
	this.instance_23 = new lib.ClipGroup_5_0_6();
	this.instance_23.parent = this;
	this.instance_23.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(11).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:0},3).to({alpha:1},6).to({alpha:0},6).to({_off:true},11).wait(1));

	// <Clip Group>_6_0
	this.instance_24 = new lib.ClipGroup_6_0_5();
	this.instance_24.parent = this;
	this.instance_24.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_7_0
	this.instance_25 = new lib.ClipGroup_7_0_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(4).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.672},4).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:1},4).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},4).wait(1));

	// <Clip Group>_8_0
	this.instance_26 = new lib.ClipGroup_8_0_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_9_0
	this.instance_27 = new lib.ClipGroup_9_0_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(16).to({_off:false},0).to({alpha:1},6).to({alpha:0.672},4).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:1},4).to({alpha:0},6).to({_off:true},16).wait(1));

	// <Clip Group>_10_0
	this.instance_28 = new lib.ClipGroup_10_0();
	this.instance_28.parent = this;
	this.instance_28.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_11_0
	this.instance_29 = new lib.ClipGroup_11_0();
	this.instance_29.parent = this;
	this.instance_29.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(4).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.672},4).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:1},4).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},4).wait(1));

	// <Clip Group>_12_0
	this.instance_30 = new lib.ClipGroup_12_0();
	this.instance_30.parent = this;
	this.instance_30.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_13_0
	this.instance_31 = new lib.ClipGroup_13_0();
	this.instance_31.parent = this;
	this.instance_31.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(10).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:0.328},4).to({alpha:0.129},12).wait(245).to({alpha:0.328},1).to({alpha:0},4).to({alpha:1},6).to({alpha:0},6).to({_off:true},10).wait(1));

	// <Clip Group>_14_0
	this.instance_32 = new lib.ClipGroup_14_0();
	this.instance_32.parent = this;
	this.instance_32.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_15_0
	this.instance_33 = new lib.ClipGroup_15_0();
	this.instance_33.parent = this;
	this.instance_33.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(7).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.172},1).to({alpha:0.129},12).wait(245).to({alpha:0.172},1).to({alpha:1},1).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},7).wait(1));

	// <Clip Group>_16_0
	this.instance_34 = new lib.ClipGroup_16_0();
	this.instance_34.parent = this;
	this.instance_34.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_17_0
	this.instance_35 = new lib.ClipGroup_17_0();
	this.instance_35.parent = this;
	this.instance_35.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.328},2).to({alpha:0.129},12).wait(245).to({alpha:0.328},1).to({alpha:1},2).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).wait(1));

	// <Clip Group>_18_0
	this.instance_36 = new lib.ClipGroup_18_0();
	this.instance_36.parent = this;
	this.instance_36.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_19_0
	this.instance_37 = new lib.ClipGroup_19_0();
	this.instance_37.parent = this;
	this.instance_37.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(3).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.828},5).to({alpha:0.129},12).wait(245).to({alpha:0.828},1).to({alpha:1},5).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},3).wait(1));

	// <Clip Group>_20_0
	this.instance_38 = new lib.ClipGroup_20_0();
	this.instance_38.parent = this;
	this.instance_38.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(8).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:0},1).wait(6).to({alpha:1},6).to({alpha:0},6).to({_off:true},8).wait(1));

	// <Clip Group>_21_0
	this.instance_39 = new lib.ClipGroup_21_0();
	this.instance_39.parent = this;
	this.instance_39.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(3).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.828},5).to({alpha:0.129},12).wait(245).to({alpha:0.828},1).to({alpha:1},5).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},3).wait(1));

	// <Clip Group>_22_0
	this.instance_40 = new lib.ClipGroup_22_0();
	this.instance_40.parent = this;
	this.instance_40.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(3).to({_off:false},0).to({alpha:1},3).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},3).to({_off:true},3).wait(1));

	// <Clip Group>_23_0
	this.instance_41 = new lib.ClipGroup_23_0();
	this.instance_41.parent = this;
	this.instance_41.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_24_0
	this.instance_42 = new lib.ClipGroup_24_0();
	this.instance_42.parent = this;
	this.instance_42.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(2).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:1},1).wait(6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},2).wait(1));

	// <Clip Group>_25_0
	this.instance_43 = new lib.ClipGroup_25_0();
	this.instance_43.parent = this;
	this.instance_43.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_26_0
	this.instance_44 = new lib.ClipGroup_26_0();
	this.instance_44.parent = this;
	this.instance_44.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(5).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},5).wait(1));

	// <Clip Group>_27_0
	this.instance_45 = new lib.ClipGroup_27_0();
	this.instance_45.parent = this;
	this.instance_45.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(3).to({_off:false},0).to({alpha:1},5).to({alpha:0},4).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},4).to({alpha:0},5).to({_off:true},3).wait(1));

	// <Clip Group>_28_0
	this.instance_46 = new lib.ClipGroup_28_0();
	this.instance_46.parent = this;
	this.instance_46.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({alpha:0},8).to({alpha:1},6).to({alpha:0},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:0},1).wait(6).to({alpha:1},6).to({alpha:0},6).to({alpha:1},8).wait(1));

	// <Clip Group>_29_0
	this.instance_47 = new lib.ClipGroup_29_0();
	this.instance_47.parent = this;
	this.instance_47.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_47.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_30_0
	this.instance_48 = new lib.ClipGroup_30_0();
	this.instance_48.parent = this;
	this.instance_48.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(5).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},5).wait(1));

	// <Clip Group>_31_0
	this.instance_49 = new lib.ClipGroup_31_0();
	this.instance_49.parent = this;
	this.instance_49.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({alpha:0},15).to({alpha:1},6).to({alpha:0.828},5).to({alpha:0.129},12).wait(245).to({alpha:0.828},1).to({alpha:1},5).to({alpha:0},6).to({alpha:1},15).wait(1));

	// <Clip Group>_32_0
	this.instance_50 = new lib.ClipGroup_32_0();
	this.instance_50.parent = this;
	this.instance_50.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_50.alpha = 0;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(3).to({_off:false},0).to({alpha:1},3).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},3).to({_off:true},3).wait(1));

	// <Clip Group>_33_0
	this.instance_51 = new lib.ClipGroup_33_0();
	this.instance_51.parent = this;
	this.instance_51.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_51.alpha = 0;
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(8).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:0},1).wait(6).to({alpha:1},6).to({alpha:0},6).to({_off:true},8).wait(1));

	// <Clip Group>_34_0
	this.instance_52 = new lib.ClipGroup_34_0();
	this.instance_52.parent = this;
	this.instance_52.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_52.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_35_0
	this.instance_53 = new lib.ClipGroup_35_0();
	this.instance_53.parent = this;
	this.instance_53.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_53.alpha = 0;
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(8).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:0},1).wait(6).to({alpha:1},6).to({alpha:0},6).to({_off:true},8).wait(1));

	// <Clip Group>_36_0
	this.instance_54 = new lib.ClipGroup_36_0();
	this.instance_54.parent = this;
	this.instance_54.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_54.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_37_0
	this.instance_55 = new lib.ClipGroup_37_0();
	this.instance_55.parent = this;
	this.instance_55.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_55.alpha = 0;
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(13).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:0.828},1).to({alpha:0.129},12).wait(245).to({alpha:0.828},1).to({alpha:0},1).to({alpha:1},6).to({alpha:0},6).to({_off:true},13).wait(1));

	// <Clip Group>_38_0
	this.instance_56 = new lib.ClipGroup_38_0();
	this.instance_56.parent = this;
	this.instance_56.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_56.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_39_0
	this.instance_57 = new lib.ClipGroup_39_0();
	this.instance_57.parent = this;
	this.instance_57.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_57.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_40_0
	this.instance_58 = new lib.ClipGroup_40_0();
	this.instance_58.parent = this;
	this.instance_58.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_58.alpha = 0;
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(4).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.672},4).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:1},4).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},4).wait(1));

	// <Clip Group>_41_0
	this.instance_59 = new lib.ClipGroup_41_0();
	this.instance_59.parent = this;
	this.instance_59.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_59.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_42_0
	this.instance_60 = new lib.ClipGroup_42_0();
	this.instance_60.parent = this;
	this.instance_60.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(5).to({_off:false},0).to({alpha:0},12).to({alpha:1},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},6).to({alpha:1},12).to({_off:true},5).wait(1));

	// <Clip Group>_43_0
	this.instance_61 = new lib.ClipGroup_43_0();
	this.instance_61.parent = this;
	this.instance_61.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_61.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_44_0
	this.instance_62 = new lib.ClipGroup_44_0();
	this.instance_62.parent = this;
	this.instance_62.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_62.alpha = 0;
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(7).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.172},1).to({alpha:0.129},12).wait(245).to({alpha:0.172},1).to({alpha:1},1).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},7).wait(1));

	// <Clip Group>_45_0
	this.instance_63 = new lib.ClipGroup_45_0();
	this.instance_63.parent = this;
	this.instance_63.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_63.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_46_0
	this.instance_64 = new lib.ClipGroup_46_0();
	this.instance_64.parent = this;
	this.instance_64.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.328},2).to({alpha:0.129},12).wait(245).to({alpha:0.328},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_47_0
	this.instance_65 = new lib.ClipGroup_47_0();
	this.instance_65.parent = this;
	this.instance_65.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).to({alpha:0},6).to({alpha:1},12).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},12).to({alpha:1},6).wait(1));

	// <Clip Group>_48_0
	this.instance_66 = new lib.ClipGroup_48_0();
	this.instance_66.parent = this;
	this.instance_66.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_66.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_49_0
	this.instance_67 = new lib.ClipGroup_49_0();
	this.instance_67.parent = this;
	this.instance_67.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_67.alpha = 0;
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(3).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.828},5).to({alpha:0.129},12).wait(245).to({alpha:0.828},1).to({alpha:1},5).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},3).wait(1));

	// <Clip Group>_50_0
	this.instance_68 = new lib.ClipGroup_50_0();
	this.instance_68.parent = this;
	this.instance_68.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_68.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_51_0
	this.instance_69 = new lib.ClipGroup_51_0();
	this.instance_69.parent = this;
	this.instance_69.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_69).to({alpha:0},8).to({alpha:1},6).to({alpha:0},10).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},10).to({alpha:0},6).to({alpha:1},8).wait(1));

	// <Clip Group>_52_0
	this.instance_70 = new lib.ClipGroup_52_0();
	this.instance_70.parent = this;
	this.instance_70.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_70.alpha = 0;
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(6).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.328},2).to({alpha:0.129},12).wait(245).to({alpha:0.328},1).to({alpha:1},2).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},6).wait(1));

	// <Clip Group>_53_0
	this.instance_71 = new lib.ClipGroup_53_0();
	this.instance_71.parent = this;
	this.instance_71.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_71.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_54_0
	this.instance_72 = new lib.ClipGroup_54_0();
	this.instance_72.parent = this;
	this.instance_72.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_72.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_55_0
	this.instance_73 = new lib.ClipGroup_55_0();
	this.instance_73.parent = this;
	this.instance_73.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_73.alpha = 0;
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(13).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:0.828},1).to({alpha:0.129},12).wait(245).to({alpha:0.828},1).to({alpha:0},1).to({alpha:1},6).to({alpha:0},6).to({_off:true},13).wait(1));

	// <Clip Group>_56_0
	this.instance_74 = new lib.ClipGroup_56_0();
	this.instance_74.parent = this;
	this.instance_74.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_74.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_57_0
	this.instance_75 = new lib.ClipGroup_57_0();
	this.instance_75.parent = this;
	this.instance_75.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_75).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_58_0
	this.instance_76 = new lib.ClipGroup_58_0();
	this.instance_76.parent = this;
	this.instance_76.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_76.alpha = 0;
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(7).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.172},1).to({alpha:0.129},12).wait(245).to({alpha:0.172},1).to({alpha:1},1).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},7).wait(1));

	// <Clip Group>_59_0
	this.instance_77 = new lib.ClipGroup_59_0();
	this.instance_77.parent = this;
	this.instance_77.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_77.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_60_0
	this.instance_78 = new lib.ClipGroup_60_0();
	this.instance_78.parent = this;
	this.instance_78.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_78.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).to({alpha:1},6).to({alpha:0},3).to({alpha:1},6).to({alpha:0},6).to({alpha:0.172},5).to({alpha:0.129},12).wait(245).to({alpha:0.172},1).to({alpha:0},5).to({alpha:1},6).to({alpha:0},6).to({alpha:1},3).to({alpha:0},6).wait(1));

	// <Clip Group>_61
	this.instance_79 = new lib.ClipGroup_61();
	this.instance_79.parent = this;
	this.instance_79.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_79.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_62
	this.instance_80 = new lib.ClipGroup_62();
	this.instance_80.parent = this;
	this.instance_80.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_80.alpha = 0;
	this.instance_80._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(7).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.172},1).to({alpha:0.129},12).wait(245).to({alpha:0.172},1).to({alpha:1},1).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},7).wait(1));

	// <Clip Group>_63
	this.instance_81 = new lib.ClipGroup_63();
	this.instance_81.parent = this;
	this.instance_81.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_81.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_81).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_64
	this.instance_82 = new lib.ClipGroup_64();
	this.instance_82.parent = this;
	this.instance_82.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_82).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_65
	this.instance_83 = new lib.ClipGroup_65();
	this.instance_83.parent = this;
	this.instance_83.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_83.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_66
	this.instance_84 = new lib.ClipGroup_66();
	this.instance_84.parent = this;
	this.instance_84.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_84.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_67
	this.instance_85 = new lib.ClipGroup_67();
	this.instance_85.parent = this;
	this.instance_85.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_85.alpha = 0;
	this.instance_85._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(5).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},5).wait(1));

	// <Clip Group>_68
	this.instance_86 = new lib.ClipGroup_68();
	this.instance_86.parent = this;
	this.instance_86.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_86.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_86).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_69
	this.instance_87 = new lib.ClipGroup_69();
	this.instance_87.parent = this;
	this.instance_87.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_87.alpha = 0;
	this.instance_87._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(10).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:0.328},4).to({alpha:0.129},12).wait(245).to({alpha:0.328},1).to({alpha:0},4).to({alpha:1},6).to({alpha:0},6).to({_off:true},10).wait(1));

	// <Clip Group>_70
	this.instance_88 = new lib.ClipGroup_70();
	this.instance_88.parent = this;
	this.instance_88.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_88.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_88).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_71
	this.instance_89 = new lib.ClipGroup_71();
	this.instance_89.parent = this;
	this.instance_89.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_89.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_89).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_72
	this.instance_90 = new lib.ClipGroup_72();
	this.instance_90.parent = this;
	this.instance_90.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_90.alpha = 0;
	this.instance_90._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(5).to({_off:false},0).to({alpha:1},5).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},2).to({alpha:0},5).to({_off:true},5).wait(1));

	// <Clip Group>_73
	this.instance_91 = new lib.ClipGroup_73();
	this.instance_91.parent = this;
	this.instance_91.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_91.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_91).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_74
	this.instance_92 = new lib.ClipGroup_74();
	this.instance_92.parent = this;
	this.instance_92.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_92.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_92).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_75
	this.instance_93 = new lib.ClipGroup_75();
	this.instance_93.parent = this;
	this.instance_93.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_93.alpha = 0;
	this.instance_93._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(5).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},5).wait(1));

	// <Clip Group>_76
	this.instance_94 = new lib.ClipGroup_76();
	this.instance_94.parent = this;
	this.instance_94.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_94).to({alpha:0},17).to({alpha:1},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},6).to({alpha:1},17).wait(1));

	// <Clip Group>_77
	this.instance_95 = new lib.ClipGroup_77();
	this.instance_95.parent = this;
	this.instance_95.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_95.alpha = 0;
	this.instance_95._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(5).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},5).wait(1));

	// <Clip Group>_78
	this.instance_96 = new lib.ClipGroup_78();
	this.instance_96.parent = this;
	this.instance_96.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_96.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_96).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_79
	this.instance_97 = new lib.ClipGroup_79();
	this.instance_97.parent = this;
	this.instance_97.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_97.alpha = 0;
	this.instance_97._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(13).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:0.828},1).to({alpha:0.129},12).wait(245).to({alpha:0.828},1).to({alpha:0},1).to({alpha:1},6).to({alpha:0},6).to({_off:true},13).wait(1));

	// <Clip Group>_80
	this.instance_98 = new lib.ClipGroup_80();
	this.instance_98.parent = this;
	this.instance_98.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_98.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_98).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_81
	this.instance_99 = new lib.ClipGroup_81();
	this.instance_99.parent = this;
	this.instance_99.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_99).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_82
	this.instance_100 = new lib.ClipGroup_82();
	this.instance_100.parent = this;
	this.instance_100.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_100.alpha = 0;
	this.instance_100._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(9).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:0.172},5).to({alpha:0.129},12).wait(245).to({alpha:0.172},1).to({alpha:0},5).to({alpha:1},6).to({alpha:0},6).to({_off:true},9).wait(1));

	// <Clip Group>_83
	this.instance_101 = new lib.ClipGroup_83();
	this.instance_101.parent = this;
	this.instance_101.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_101.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_101).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_84
	this.instance_102 = new lib.ClipGroup_84();
	this.instance_102.parent = this;
	this.instance_102.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_102.alpha = 0;
	this.instance_102._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(5).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},5).wait(1));

	// <Clip Group>_85
	this.instance_103 = new lib.ClipGroup_85();
	this.instance_103.parent = this;
	this.instance_103.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_103).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_86
	this.instance_104 = new lib.ClipGroup_86();
	this.instance_104.parent = this;
	this.instance_104.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_104.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_104).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_87
	this.instance_105 = new lib.ClipGroup_87();
	this.instance_105.parent = this;
	this.instance_105.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_105.alpha = 0;
	this.instance_105._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_105).wait(9).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:0.172},5).to({alpha:0.129},12).wait(245).to({alpha:0.172},1).to({alpha:0},5).to({alpha:1},6).to({alpha:0},6).to({_off:true},9).wait(1));

	// <Clip Group>_88
	this.instance_106 = new lib.ClipGroup_88();
	this.instance_106.parent = this;
	this.instance_106.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_106.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_106).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_89
	this.instance_107 = new lib.ClipGroup_89();
	this.instance_107.parent = this;
	this.instance_107.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_107.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_107).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_90
	this.instance_108 = new lib.ClipGroup_90();
	this.instance_108.parent = this;
	this.instance_108.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_108.alpha = 0;
	this.instance_108._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_108).wait(16).to({_off:false},0).to({alpha:1},6).to({alpha:0.672},4).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:1},4).to({alpha:0},6).to({_off:true},16).wait(1));

	// <Clip Group>_91
	this.instance_109 = new lib.ClipGroup_91();
	this.instance_109.parent = this;
	this.instance_109.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_109.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_109).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_92
	this.instance_110 = new lib.ClipGroup_92();
	this.instance_110.parent = this;
	this.instance_110.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_110).to({alpha:0},6).to({alpha:1},12).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},12).to({alpha:1},6).wait(1));

	// <Clip Group>_93
	this.instance_111 = new lib.ClipGroup_93();
	this.instance_111.parent = this;
	this.instance_111.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_111.alpha = 0;
	this.instance_111._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_111).wait(8).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:0},1).wait(6).to({alpha:1},6).to({alpha:0},6).to({_off:true},8).wait(1));

	// <Clip Group>_94
	this.instance_112 = new lib.ClipGroup_94();
	this.instance_112.parent = this;
	this.instance_112.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_112.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_112).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_95
	this.instance_113 = new lib.ClipGroup_95();
	this.instance_113.parent = this;
	this.instance_113.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_113).to({alpha:0},8).to({alpha:1},10).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},10).to({alpha:1},8).wait(1));

	// <Clip Group>_96
	this.instance_114 = new lib.ClipGroup_96();
	this.instance_114.parent = this;
	this.instance_114.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_114.alpha = 0;
	this.instance_114._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_114).wait(14).to({_off:false},0).to({alpha:1},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:1},1).wait(6).to({alpha:0},6).to({_off:true},14).wait(1));

	// <Clip Group>_97
	this.instance_115 = new lib.ClipGroup_97();
	this.instance_115.parent = this;
	this.instance_115.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_115.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_115).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_98
	this.instance_116 = new lib.ClipGroup_98();
	this.instance_116.parent = this;
	this.instance_116.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_116.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_116).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_99
	this.instance_117 = new lib.ClipGroup_99();
	this.instance_117.parent = this;
	this.instance_117.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_117.alpha = 0;
	this.instance_117._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_117).wait(4).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.672},4).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:1},4).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},4).wait(1));

	// <Clip Group>_100
	this.instance_118 = new lib.ClipGroup_100();
	this.instance_118.parent = this;
	this.instance_118.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_118.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_118).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_103
	this.instance_119 = new lib.ClipGroup_103();
	this.instance_119.parent = this;
	this.instance_119.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_119.alpha = 0;
	this.instance_119._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_119).wait(14).to({_off:false},0).to({alpha:1},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:1},1).wait(6).to({alpha:0},6).to({_off:true},14).wait(1));

	// <Clip Group>_104
	this.instance_120 = new lib.ClipGroup_104();
	this.instance_120.parent = this;
	this.instance_120.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_120.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_120).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_105
	this.instance_121 = new lib.ClipGroup_105();
	this.instance_121.parent = this;
	this.instance_121.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_121._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_121).wait(5).to({_off:false},0).to({alpha:0},10).to({alpha:1},8).to({alpha:0.5},3).to({alpha:0.129},12).wait(245).to({alpha:0.5},1).to({alpha:1},3).to({alpha:0},8).to({alpha:1},10).to({_off:true},5).wait(1));

	// <Clip Group>_106
	this.instance_122 = new lib.ClipGroup_106();
	this.instance_122.parent = this;
	this.instance_122.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_122.alpha = 0;
	this.instance_122._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_122).wait(4).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.672},4).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:1},4).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},4).wait(1));

	// <Clip Group>_107
	this.instance_123 = new lib.ClipGroup_107();
	this.instance_123.parent = this;
	this.instance_123.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_123).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_108
	this.instance_124 = new lib.ClipGroup_108();
	this.instance_124.parent = this;
	this.instance_124.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_124.alpha = 0;
	this.instance_124._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_124).wait(8).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:0},1).wait(6).to({alpha:1},6).to({alpha:0},6).to({_off:true},8).wait(1));

	// <Clip Group>_109
	this.instance_125 = new lib.ClipGroup_109();
	this.instance_125.parent = this;
	this.instance_125.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_125).to({alpha:0},12).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},12).wait(1));

	// <Clip Group>_110
	this.instance_126 = new lib.ClipGroup_110();
	this.instance_126.parent = this;
	this.instance_126.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_126.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_126).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_111
	this.instance_127 = new lib.ClipGroup_111();
	this.instance_127.parent = this;
	this.instance_127.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_127.alpha = 0;
	this.instance_127._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_127).wait(3).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.828},5).to({alpha:0.129},12).wait(245).to({alpha:0.828},1).to({alpha:1},5).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},3).wait(1));

	// <Clip Group>_112
	this.instance_128 = new lib.ClipGroup_112();
	this.instance_128.parent = this;
	this.instance_128.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_128.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_128).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_113
	this.instance_129 = new lib.ClipGroup_113();
	this.instance_129.parent = this;
	this.instance_129.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_129.alpha = 0;
	this.instance_129._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_129).wait(7).to({_off:false},0).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0.172},1).to({alpha:0.129},12).wait(245).to({alpha:0.172},1).to({alpha:1},1).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({_off:true},7).wait(1));

	// <Clip Group>_114
	this.instance_130 = new lib.ClipGroup_114();
	this.instance_130.parent = this;
	this.instance_130.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_130.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_130).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).to({alpha:0.672},2).to({alpha:0.129},12).wait(245).to({alpha:0.672},1).to({alpha:0},2).to({alpha:1},6).to({alpha:0},6).to({alpha:1},6).to({alpha:0},6).wait(1));

	// <Clip Group>_115
	this.instance_131 = new lib.ClipGroup_115();
	this.instance_131.parent = this;
	this.instance_131.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_131.alpha = 0;
	this.instance_131._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_131).wait(14).to({_off:false},0).to({alpha:1},6).wait(6).to({alpha:0.129},12).wait(245).to({alpha:1},1).wait(6).to({alpha:0},6).to({_off:true},14).wait(1));

	// Layer 200
	this.instance_132 = new lib.ClipGroup_116();
	this.instance_132.parent = this;
	this.instance_132.setTransform(659.8,381,1,1,0,0,0,473.4,268.4);

	this.instance_133 = new lib.ClipGroup_116();
	this.instance_133.parent = this;
	this.instance_133.setTransform(295.3,180.9,1,1,0,0,0,473.4,268.4);

	this.instance_134 = new lib.ClipGroup_116();
	this.instance_134.parent = this;
	this.instance_134.setTransform(434,260.8,1,1,0,0,0,473.4,268.4);

	this.instance_135 = new lib.ClipGroup_116();
	this.instance_135.parent = this;
	this.instance_135.setTransform(523.8,261,1,1,0,0,0,473.4,268.4);

	this.instance_136 = new lib.ClipGroup_116();
	this.instance_136.parent = this;
	this.instance_136.setTransform(445.6,261,1,1,0,0,0,473.4,268.4);

	this.instance_137 = new lib.ClipGroup_115();
	this.instance_137.parent = this;
	this.instance_137.setTransform(421.5,224.2,1,1,0,0,0,473.4,268.4);
	this.instance_137.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132}]}).to({state:[]},92).to({state:[{t:this.instance_137}]},191).to({state:[]},1).wait(27));

	// Layer 199
	this.instance_138 = new lib.ClipGroup_116();
	this.instance_138.parent = this;
	this.instance_138.setTransform(305,294,1,1,0,0,0,473.4,268.4);

	this.instance_139 = new lib.ClipGroup_116();
	this.instance_139.parent = this;
	this.instance_139.setTransform(295.3,180.9,1,1,0,0,0,473.4,268.4);

	this.instance_140 = new lib.ClipGroup_116();
	this.instance_140.parent = this;
	this.instance_140.setTransform(434,260.8,1,1,0,0,0,473.4,268.4);

	this.instance_141 = new lib.ClipGroup_116();
	this.instance_141.parent = this;
	this.instance_141.setTransform(523.8,261,1,1,0,0,0,473.4,268.4);

	this.instance_142 = new lib.ClipGroup_116();
	this.instance_142.parent = this;
	this.instance_142.setTransform(445.6,261,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_138,p:{x:305,y:294}}]}).to({state:[]},92).to({state:[{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138,p:{x:659.8,y:381}}]},191).to({state:[]},1).wait(27));

	// Layer 198
	this.instance_143 = new lib.ClipGroup_116();
	this.instance_143.parent = this;
	this.instance_143.setTransform(101.2,175.1,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_143).to({_off:true},92).wait(191).to({_off:false,x:305,y:294},0).to({_off:true},1).wait(27));

	// Layer 13
	this.instance_144 = new lib.Tween21("synched",0);
	this.instance_144.parent = this;
	this.instance_144.setTransform(679.1,243.1,1,1,0,0,0,-101.1,-63.4);
	this.instance_144.alpha = 0;

	this.instance_145 = new lib.ClipGroup_116();
	this.instance_145.parent = this;
	this.instance_145.setTransform(101.2,175.1,1,1,0,0,0,473.4,268.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_144}]}).to({state:[{t:this.instance_144}]},7).to({state:[{t:this.instance_144}]},61).to({state:[{t:this.instance_144}]},22).to({state:[{t:this.instance_145}]},1).to({state:[]},1).to({state:[]},192).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_144).to({alpha:1},7).to({startPosition:0},61).to({alpha:0},22).to({_off:true,regX:473.4,regY:268.4,x:101.2,y:175.1,alpha:1,mode:"independent"},1).wait(220));

	// Layer 15
	this.instance_146 = new lib.Tween25("synched",0);
	this.instance_146.parent = this;
	this.instance_146.setTransform(460.3,274.4,1,1,0,0,0,14.7,46.9);
	this.instance_146.alpha = 0;
	this.instance_146._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_146).wait(11).to({_off:false},0).to({alpha:1},7).to({startPosition:0},50).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 17
	this.instance_147 = new lib.Tween27("synched",0);
	this.instance_147.parent = this;
	this.instance_147.setTransform(467.2,208.2,1,1,0,0,0,-63.6,-18.3);
	this.instance_147.alpha = 0;
	this.instance_147._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_147).wait(23).to({_off:false},0).to({alpha:1},7).to({startPosition:0},38).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 18
	this.instance_148 = new lib.Tween28("synched",0);
	this.instance_148.parent = this;
	this.instance_148.setTransform(531.8,262.2);
	this.instance_148.alpha = 0;
	this.instance_148._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_148).wait(35).to({_off:false},0).to({alpha:1},6).to({startPosition:0},27).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 20
	this.instance_149 = new lib.Tween29("synched",0);
	this.instance_149.parent = this;
	this.instance_149.setTransform(460.3,274.4,1,1,0,0,0,-142.2,9.8);
	this.instance_149._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_149).wait(25).to({_off:false},0).to({startPosition:0},43).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 22
	this.instance_150 = new lib.Tween30("synched",0);
	this.instance_150.parent = this;
	this.instance_150.setTransform(460.3,274.4,1,1,0,0,0,-178.8,-49.5);
	this.instance_150.alpha = 0;
	this.instance_150._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_150).wait(49).to({_off:false},0).to({alpha:1},7).to({startPosition:0},12).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 24
	this.instance_151 = new lib.Tween32("synched",0);
	this.instance_151.parent = this;
	this.instance_151.setTransform(139.9,215.6,0.185,0.507,0,0,0,-141.8,-38.2);
	this.instance_151.alpha = 0;
	this.instance_151._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_151).wait(29).to({_off:false},0).to({alpha:1},7).to({startPosition:0},32).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 25
	this.instance_152 = new lib.Tween32("synched",0);
	this.instance_152.parent = this;
	this.instance_152.setTransform(173.9,199.2,1,1,0,0,0,-142.2,-38.4);
	this.instance_152.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_152).to({alpha:1},7).to({startPosition:0},61).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 27
	this.instance_153 = new lib.Tween33("synched",0);
	this.instance_153.parent = this;
	this.instance_153.setTransform(190.2,194.9,1,1,0,0,0,-84.5,-18.2);
	this.instance_153.alpha = 0;
	this.instance_153._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_153).wait(41).to({_off:false},0).to({alpha:1},7).to({startPosition:0},20).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 28
	this.instance_154 = new lib.ClipGroup_116();
	this.instance_154.parent = this;
	this.instance_154.setTransform(201.7,246.3,1,1,0,0,0,473.4,268.4);
	this.instance_154.alpha = 0;

	this.instance_155 = new lib.Tween34("synched",0);
	this.instance_155.parent = this;
	this.instance_155.setTransform(247,162.6,1,1,0,0,0,-111.9,-56.7);
	this.instance_155.alpha = 0;
	this.instance_155._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_155},{t:this.instance_154}]},5).to({state:[{t:this.instance_155}]},7).to({state:[{t:this.instance_155}]},56).to({state:[{t:this.instance_155}]},22).to({state:[]},220).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_155).wait(5).to({_off:false},0).wait(7).to({alpha:1},0).to({startPosition:0},56).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 29
	this.instance_156 = new lib.Tween35("synched",0);
	this.instance_156.parent = this;
	this.instance_156.setTransform(256.4,159.2,1,1,0,0,0,-49.1,-35.1);
	this.instance_156.alpha = 0;
	this.instance_156._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_156).wait(29).to({_off:false},0).to({alpha:1},8).to({startPosition:0},31).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 31
	this.instance_157 = new lib.Tween36("synched",0);
	this.instance_157.parent = this;
	this.instance_157.setTransform(201.9,176.2,1,1,0,0,0,-100.2,44.6);
	this.instance_157.alpha = 0;
	this.instance_157._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_157).wait(44).to({_off:false},0).to({y:176,alpha:1},7).to({startPosition:0},17).to({y:173.4,alpha:0},22).to({_off:true},220).wait(1));

	// Layer 32
	this.instance_158 = new lib.Tween38("synched",0);
	this.instance_158.parent = this;
	this.instance_158.setTransform(412.6,92.3,1,1,0,0,0,-74.4,-55.2);
	this.instance_158.alpha = 0;
	this.instance_158._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_158).wait(56).to({_off:false},0).to({alpha:1},8).to({startPosition:0},4).to({alpha:0},22).to({_off:true},220).wait(1));

	// Layer 33
	this.instance_159 = new lib.Tween39("synched",0);
	this.instance_159.parent = this;
	this.instance_159.setTransform(408.5,151.4,1,1,0,0,0,-90.5,-10.1);
	this.instance_159.alpha = 0;
	this.instance_159._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_159).wait(36).to({_off:false},0).to({alpha:1},8).to({startPosition:0},24).to({alpha:0},22).to({_off:true},220).wait(1));

	// map
	this.instance_160 = new lib.ClipGroup_14_6();
	this.instance_160.parent = this;
	this.instance_160.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_161 = new lib.ClipGroup_1_0();
	this.instance_161.parent = this;
	this.instance_161.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_162 = new lib.ClipGroup_2_0();
	this.instance_162.parent = this;
	this.instance_162.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_163 = new lib.ClipGroup_3_0();
	this.instance_163.parent = this;
	this.instance_163.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_164 = new lib.ClipGroup_4_7();
	this.instance_164.parent = this;
	this.instance_164.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_165 = new lib.ClipGroup_5_9();
	this.instance_165.parent = this;
	this.instance_165.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_166 = new lib.ClipGroup_6_7();
	this.instance_166.parent = this;
	this.instance_166.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_167 = new lib.ClipGroup_7_4();
	this.instance_167.parent = this;
	this.instance_167.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_168 = new lib.ClipGroup_8_3();
	this.instance_168.parent = this;
	this.instance_168.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_169 = new lib.ClipGroup_9_4();
	this.instance_169.parent = this;
	this.instance_169.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160}]}).to({state:[]},310).wait(1));

	// map
	this.instance_170 = new lib.ClipGroup_14_6();
	this.instance_170.parent = this;
	this.instance_170.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_171 = new lib.ClipGroup_1_0();
	this.instance_171.parent = this;
	this.instance_171.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_172 = new lib.ClipGroup_2_0();
	this.instance_172.parent = this;
	this.instance_172.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_173 = new lib.ClipGroup_3_0();
	this.instance_173.parent = this;
	this.instance_173.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_174 = new lib.ClipGroup_4_7();
	this.instance_174.parent = this;
	this.instance_174.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_175 = new lib.ClipGroup_5_9();
	this.instance_175.parent = this;
	this.instance_175.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_176 = new lib.ClipGroup_6_7();
	this.instance_176.parent = this;
	this.instance_176.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_177 = new lib.ClipGroup_7_4();
	this.instance_177.parent = this;
	this.instance_177.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_178 = new lib.ClipGroup_8_3();
	this.instance_178.parent = this;
	this.instance_178.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.instance_179 = new lib.ClipGroup_9_4();
	this.instance_179.parent = this;
	this.instance_179.setTransform(419.5,226.5,1,1,0,0,0,473.5,268.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170}]},310).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.3,138.7,1505.6,742.8);
// library properties:
lib.properties = {
	width: 853,
	height: 464,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;