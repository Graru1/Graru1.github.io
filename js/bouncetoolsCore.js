/**
 *  
 *  Original sourcemod plugin by nolem
 *  http://tf2rj.com/forum/index.php?topic=1374
 *  
 *  Author :: Graru1 
 *  
 */

// Server tickrate
var tickRate = 200/3;

// Special starting types (look straight down fire when going at max horizontal speed (240))
var bounceSpecialVel = { stock_uncrouch_stand: { RL_type: "stock", text: "(Stock) Uncrouch Stand", vel:416.319000 },
                         stock_uncrouch_walk_right: { RL_type: "stock", text: "(Stock) Uncrouch Walk Right", vel:445.529510 },
                         stock_uncrouch_walk_left: { RL_type: "stock", text: "(Stock) Uncrouch Walk Left", vel:371.735809 },
                         stock_uncrouch_walk_forward: { RL_type: "stock", text: "(Stock) Uncrouch Walk Forward", vel:395.333770 },
                         stock_uncrouch_walk_backward: { RL_type: "stock", text: "(Stock) Uncrouch Walk Backward", vel:407.481628 },
                         stock_crouch_stand: { RL_type: "stock", text: "(Stock) Crouch Stand", vel:591.277954 },
                         stock_crouch_walk_right: { RL_type: "stock", text: "(Stock) Crouch Walk Right", vel:604.681518 },
                         stock_crouch_walk_left: { RL_type: "stock", text: "(Stock) Crouch Walk Left", vel:576.230224 },
                         stock_crouch_walk_forward: { RL_type: "stock", text: "(Stock) Crouch Walk Forward", vel:600.576538 },
                         stock_crouch_walk_backward: { RL_type: "stock", text: "(Stock) Crouch Walk Backward", vel:579.760192 },
						 
                         stock_uncrouch_forwardright: { RL_type: "stock", text: "(Stock) Uncrouch Forward&Right", vel: 422.117980, note: "[Unreliable]" },
                         stock_uncrouch_forwardleft: { RL_type: "stock", text: "(Stock) Uncrouch Forward&Left", vel: 376.544860, note: "[Unreliable]" },
                         stock_uncrouch_backwardright: { RL_type: "stock", text: "(Stock) Uncrouch Backward&Right", vel: 432.108001, note: "[Unreliable]" },
						 stock_uncrouch_backwardleft: { RL_type: "stock", text: "(Stock) Uncrouch Backward&Left", vel: 382.178863, note: "[Unreliable]" },
                         stock_crouch_forwardright: { RL_type: "stock", text: "(Stock) Crouch Forward&Right", vel: 608.237792, note: "[Unreliable]" },
						 stock_crouch_forwardleft: { RL_type: "stock", text: "(Stock) Crouch Forward&Left", vel: 587.184143, note: "[Unreliable]" },
                         stock_crouch_backwardright: { RL_type: "stock", text: "(Stock) Crouch Backward&Right", vel: 592.537048, note: "[Unreliable]" },
						 stock_crouch_backwardleft: { RL_type: "stock", text: "(Stock) Crouch Backward&Left", vel: 573.305053, note: "[Unreliable]" },
						 
						 
						 
						 original_uncrouch_stand: { RL_type: "original", text: "(Original) Uncrouch Stand", vel:445.986633 },
                         original_uncrouch_walk_leftright: { RL_type: "original", text: "(Original) Uncrouch Walk Left/Right", vel:419.643920 },
                         original_uncrouch_walk_forward: { RL_type: "original", text: "(Original) Uncrouch Walk Forward", vel:413.769744 },
                         original_uncrouch_walk_backward: { RL_type: "original", text: "(Original) Uncrouch Walk Backward", vel:429.627014 },
                         original_crouch_stand: { RL_type: "original", text: "(Original) Crouch Stand", vel:631.863708 },
                         original_crouch_walk_leftright: { RL_type: "original", text: "(Original) Crouch Walk Left/Right", vel:629.907104 },
                         original_crouch_walk_forward: { RL_type: "original", text: "(Original) Crouch Walk Forward", vel:645.275085 },
                         original_crouch_walk_backward: { RL_type: "original", text: "(Original) Crouch Walk Backward", vel:616.712707 },
						 
                         original_uncrouch_forwardleftright: { RL_type: "original", text: "(Original) Uncrouch Forward&Left/Right", vel: 415.439880, note: "[Unreliable]" },
                         original_uncrouch_backwardleftright: { RL_type: "original", text: "(Original) Uncrouch Backward&Left/Right", vel: 424.150573, note: "[Unreliable]" },
                         original_crouch_forwardleftright: { RL_type: "original", text: "(Original) Crouch Forward&Left/Right", vel: 640.437744, note: "[Unreliable]" },
                         original_crouch_backwardleftright: { RL_type: "original", text: "(Original) Crouch Backward&Left/Right", vel: 620.422119, note: "[Unreliable]" },
						 
                        // original_uncrouch_stand: { RL_type: "original", text: "(Original) Uncrouch Stand", vel:445.987030 },
                        // original_uncrouch_walk_leftright: { RL_type: "original", text: "(Original) Uncrouch Walk Left/Right", vel:419.643127 },
                        // original_uncrouch_walk_forward: { RL_type: "original", text: "(Original) Uncrouch Walk Forward", vel:413.770080 },
                        // original_uncrouch_walk_backward: { RL_type: "original", text: "(Original) Uncrouch Walk Backward", vel:429.626434 },
                        // original_crouch_stand: { RL_type: "original", text: "(Original) Crouch Stand", vel:631.862487 },
                        // original_crouch_walk_leftright: { RL_type: "original", text: "(Original) Crouch Walk Left/Right", vel:629.907165 },
                        // original_crouch_walk_forward: { RL_type: "original", text: "(Original) Crouch Walk Forward", vel:645.274536 },
                        // original_crouch_walk_backward: { RL_type: "original", text: "(Original) Crouch Walk Backward", vel:616.711364 },
						
						
						
						 cowmangler_uncrouch_stand: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Stand", vel:429.504943 },
                         cowmangler_uncrouch_walk_right: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Walk Right", vel:442.260009 },
                         cowmangler_uncrouch_walk_left: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Walk Left", vel:388.863159 },
                         cowmangler_uncrouch_walk_forward: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Walk Forward", vel:405.110076 },
                         cowmangler_uncrouch_walk_backward: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Walk Backward", vel:418.827392 },
                         cowmangler_crouch_stand: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Stand", vel:612.280700 },
                         cowmangler_crouch_walk_right: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Walk Right", vel:621.940795 },
                         cowmangler_crouch_walk_left: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Walk Left", vel:600.183776 },
                         cowmangler_crouch_walk_forward: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Walk Forward", vel:623.125061 },
                         cowmangler_crouch_walk_backward: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Walk Backward", vel:599.184509 },
						 
                         cowmangler_uncrouch_forwardright: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Forward&Right", vel: 425.028869, note: "[Unreliable]" },
                         cowmangler_uncrouch_forwardleft: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Forward&Left", vel: 391.511077, note: "[Unreliable]" },
                         cowmangler_uncrouch_backwardright: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Backward&Right", vel: 435.866760, note: "[Unreliable]" },
						 cowmangler_uncrouch_backwardleft: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Backward&Left", vel: 397.972534, note: "[Unreliable]" },
                         cowmangler_crouch_forwardright: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Forward&Right", vel: 627.835876, note: "[Unreliable]" },
						 cowmangler_crouch_forwardleft: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Forward&Left", vel: 611.391357, note: "[Unreliable]" },
                         cowmangler_crouch_backwardright: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Backward&Right", vel: 609.867736, note: "[Unreliable]" },
						 cowmangler_crouch_backwardleft: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Backward&Left", vel: 595.373779, note: "[Unreliable]" },
						 
                        // cowmangler_uncrouch_stand: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Stand", vel:429.504699 },
                        // cowmangler_uncrouch_walk_right: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Walk Right", vel:442.260070 },
                        // cowmangler_uncrouch_walk_left: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Walk Left", vel:388.864471 },
                        // cowmangler_uncrouch_walk_forward: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Walk Forward", vel:405.110443 },
                        // cowmangler_uncrouch_walk_backward: { RL_type: "cowmangler", text: "(Cow Mangler) Uncrouch Walk Backward", vel:418.827087 },
                        // cowmangler_crouch_stand: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Stand", vel:612.282043 },
                        // cowmangler_crouch_walk_right: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Walk Right", vel:621.940307 },
                        // cowmangler_crouch_walk_left: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Walk Left", vel:600.181823 },
                        // cowmangler_crouch_walk_forward: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Walk Forward", vel:623.124084 },
                        // cowmangler_crouch_walk_backward: { RL_type: "cowmangler", text: "(Cow Mangler) Crouch Walk Backward", vel:599.182861 },	
						
						
						
						 cowmanglercharged_uncrouch_stand: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Stand", vel:433.183532 },
                         cowmanglercharged_uncrouch_walk_right: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Walk Right", vel:445.936309 },
                         cowmanglercharged_uncrouch_walk_left: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Walk Left", vel:413.825378 },
                         cowmanglercharged_uncrouch_walk_forward: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Walk Forward", vel:423.834533 },
                         cowmanglercharged_uncrouch_walk_backward: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Walk Backward", vel:430.357269 },
                         cowmanglercharged_crouch_stand: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Stand", vel:620.069274 },
                         cowmanglercharged_crouch_walk_right: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Walk Right", vel:624.288574 },
                         cowmanglercharged_crouch_walk_left: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Walk Left", vel:615.392700 },
                         cowmanglercharged_crouch_walk_forward: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Walk Forward", vel:624.746643 },
                         cowmanglercharged_crouch_walk_backward: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Walk Backward", vel:614.964904 },
						 
                         cowmanglercharged_uncrouch_forwardright: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Forward&Right", vel: 435.759887, note: "[Unreliable]" },
                         cowmanglercharged_uncrouch_forwardleft: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Forward&Left", vel: 415.476013, note: "[Unreliable]" },
                         cowmanglercharged_uncrouch_backwardright: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Backward&Right", vel: 442.140319, note: "[Unreliable]" },
						 cowmanglercharged_uncrouch_backwardleft: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Backward&Left", vel: 419.471618, note: "[Unreliable]" },
                         cowmanglercharged_crouch_forwardright: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Forward&Right", vel: 626.536804, note: "[Unreliable]" },
						 cowmanglercharged_crouch_forwardleft: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Forward&Left", vel: 620.081237, note: "[Unreliable]" },
                         cowmanglercharged_crouch_backwardright: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Backward&Right", vel: 619.456298, note: "[Unreliable]" },
						 cowmanglercharged_crouch_backwardleft: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Backward&Left", vel: 613.319702, note: "[Unreliable]" }
						
                        // cowmanglercharged_uncrouch_stand: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Stand", vel:433.183135 },
                        // cowmanglercharged_uncrouch_walk_right: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Walk Right", vel:445.937408 },
                        // cowmanglercharged_uncrouch_walk_left: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Walk Left", vel:413.827667 },
                        // cowmanglercharged_uncrouch_walk_forward: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Walk Forward", vel:423.834197 },
                        // cowmanglercharged_uncrouch_walk_backward: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Uncrouch Walk Backward", vel:430.357788 },
                        // cowmanglercharged_crouch_stand: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Stand", vel:620.068969 },
                        // cowmanglercharged_crouch_walk_right: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Walk Right", vel:624.288513 },
                        // cowmanglercharged_crouch_walk_left: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Walk Left", vel:615.393249 },
                        // cowmanglercharged_crouch_walk_forward: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Walk Forward", vel:624.745910 },
                        // cowmanglercharged_crouch_walk_backward: { RL_type: "cowmanglercharged", text: "(Cow Mangler Charged) Crouch Walk Backward", vel:614.966674 }						 
                        };

function checkBounceWalk(height, walk_type, bounce_type, jumpbug)
{
	var bounce_iscrouched = 0;
	if (typeof(bounce_type) === "undefined") { bounce_type = "UNCROUCHED" }
	if (bounce_type == "UNCROUCHED") {
		bounce_iscrouched = 0;
	} else if (bounce_type == "CROUCHED") {
		bounce_iscrouched = 1;
	}
	
	var walk_iscrouched = 0;
	if (typeof(walk_type) === "undefined") { walk_type = "UNCROUCHED" }
	if (walk_type == "UNCROUCHED") {
		walk_iscrouched = 0;
	} else if (walk_type == "CROUCHED") {
		walk_iscrouched = 20;
	}
	
	var Bounce = 0;
	var jumpvel = 289;
	var grav = -800;
	var offset = 0-walk_iscrouched; //BOUNCE_CROUCH and BOUNCE_CTAPJUMP offset is -20
	var pos = offset+20*bounce_iscrouched;
	var vel = 0.5*(grav/tickRate);
	vel += 0.5*(grav/tickRate);
	
	while ((pos + 50) > -height) {
		
		//console.log("pos: " + pos);
		
		if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
			//console.log("pos: " + pos);
			if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
				//console.log("assigning2 1");
				if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
			} else if ((pos + 50) > -height){
				//console.log("pos2: " + (pos - -height));
				
				pos += vel/tickRate;
				
				vel += grav/tickRate;
				
				if (vel <= -3500) {
					vel = -3500;
				}
				if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
					//console.log("pos: " + pos);
					if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
						//console.log("assigning2 2");
						if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
					} else if ((pos + 50) > -height){
						//console.log("pos2: " + (pos - -height));
						
						pos += vel/tickRate;
						
						vel += grav/tickRate;
						
						if (vel <= -3500) {
							vel = -3500;
						}
						if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
							//console.log("pos: " + pos);
							if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
								//console.log("assigning2 3");
								if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
							} else if ((pos + 50) > -height){
								//console.log("pos2: " + (pos - -height));
								
								pos += vel/tickRate;
								
								vel += grav/tickRate;
								
								if (vel <= -3500) {
									vel = -3500;
								}
								if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
									//console.log("pos: " + pos);
									if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
										//console.log("assigning2 4");
										if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
									}
								} else if (Bounce == 0){
									Bounce = 1;
								}
							}
						} else if (Bounce == 0){
							Bounce = 1;
						}
					}
				} else if (Bounce == 0){
					Bounce = 1;
				}
			} 
			if (Bounce == 0){
				Bounce = 1;
			}
			//console.log("BREAK!!!");
			//console.log("pos2: " + (pos - -height));
			//console.log(Math.ceil(pos) - pos);
			break;
		}
		
		pos += vel/tickRate;
		vel += grav/tickRate;
		
		if (vel <= -3500) {
			vel = -3500;
		}
	}
	
	return Bounce;
}

function checkBounceJump(height, bounce_type, jumpbug)
{
	var bounce_iscrouched = 0;
	if (typeof(bounce_type) === "undefined") { bounce_type = "UNCROUCHED" }
	if (bounce_type == "UNCROUCHED") {
		bounce_iscrouched = 0;
	} else if (bounce_type == "CROUCHED") {
		bounce_iscrouched = 1;
	}
	
	var Bounce = 0;
	var jumpvel = 289;
	var grav = -800;
	var offset = 0; //BOUNCE_CROUCH and BOUNCE_CTAPJUMP offset is -20
	var pos = offset+20*bounce_iscrouched;
	var vel = 0.5*(grav/tickRate)+jumpvel;
	vel += 0.5*(grav/tickRate);
	
	while ((pos + 50) > -height) {
		
		//console.log("pos: " + pos);
		
		if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
			//console.log("pos: " + pos);
			if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
				//console.log("assigning2 1");
				if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
			} else if ((pos + 50) > -height){
				//console.log("pos2: " + (pos - -height));
				
				pos += vel/tickRate;
				
				vel += grav/tickRate;
				
				if (vel <= -3500) {
					vel = -3500;
				}
				if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
					//console.log("pos: " + pos);
					if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
						//console.log("assigning2 2");
						if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
					} else if ((pos + 50) > -height){
						//console.log("pos2: " + (pos - -height));
						
						pos += vel/tickRate;
						
						vel += grav/tickRate;
						
						if (vel <= -3500) {
							vel = -3500;
						}
						if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
							//console.log("pos: " + pos);
							if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
								//console.log("assigning2 3");
								if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
							} else if ((pos + 50) > -height){
								//console.log("pos2: " + (pos - -height));
								
								pos += vel/tickRate;
								
								vel += grav/tickRate;
								
								if (vel <= -3500) {
									vel = -3500;
								}
								if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
									//console.log("pos: " + pos);
									if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
										//console.log("assigning2 4");
										if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
									}
								} else if (Bounce == 0){
									Bounce = 1;
								}
							}
						} else if (Bounce == 0){
							Bounce = 1;
						}
					}
				} else if (Bounce == 0){
					Bounce = 1;
				}
			} 
			if (Bounce == 0){
				Bounce = 1;
			}
			//console.log("BREAK!!!");
			//console.log("pos2: " + (pos - -height));
			//console.log(Math.ceil(pos) - pos);
			break;
		}
		
		pos += vel/tickRate;
		vel += grav/tickRate;
		
		if (vel <= -3500) {
			vel = -3500;
		}
	}
	
	return Bounce;
}

function checkBounceCJump(height, bounce_type, jumpbug)
{
	var bounce_iscrouched = 0;
	if (typeof(bounce_type) === "undefined") { bounce_type = "UNCROUCHED" }
	if (bounce_type == "UNCROUCHED") {
		bounce_iscrouched = 0;
	} else if (bounce_type == "CROUCHED") {
		bounce_iscrouched = 1;
	}
	
	var Bounce = 0;
	var jumpvel = 289;
	var grav = -800;
	var offset = 0; //BOUNCE_CROUCH and BOUNCE_CTAPJUMP offset is -20
	var pos = offset+20*bounce_iscrouched;
	var vel = jumpvel;
	vel += 0.5*(grav/tickRate);
	
	while ((pos + 50) > -height) {
		
		//console.log("pos: " + pos);
		
		if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
			//console.log("pos: " + pos);
			if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
				//console.log("assigning2 1");
				if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
			} else if ((pos + 50) > -height){
				//console.log("pos2: " + (pos - -height));
				
				pos += vel/tickRate;
				
				vel += grav/tickRate;
				
				if (vel <= -3500) {
					vel = -3500;
				}
				if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
					//console.log("pos: " + pos);
					if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
						//console.log("assigning2 2");
						if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
					} else if ((pos + 50) > -height){
						//console.log("pos2: " + (pos - -height));
						
						pos += vel/tickRate;
						
						vel += grav/tickRate;
						
						if (vel <= -3500) {
							vel = -3500;
						}
						if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
							//console.log("pos: " + pos);
							if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
								//console.log("assigning2 3");
								if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
							} else if ((pos + 50) > -height){
								//console.log("pos2: " + (pos - -height));
								
								pos += vel/tickRate;
								
								vel += grav/tickRate;
								
								if (vel <= -3500) {
									vel = -3500;
								}
								if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
									//console.log("pos: " + pos);
									if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
										//console.log("assigning2 4");
										if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
									}
								} else if (Bounce == 0){
									Bounce = 1;
								}
							}
						} else if (Bounce == 0){
							Bounce = 1;
						}
					}
				} else if (Bounce == 0){
					Bounce = 1;
				}
			} 
			if (Bounce == 0){
				Bounce = 1;
			}
			//console.log("BREAK!!!");
			//console.log("pos2: " + (pos - -height));
			//console.log(Math.ceil(pos) - pos);
			break;
		}
		
		pos += vel/tickRate;
		vel += grav/tickRate;
		
		if (vel <= -3500) {
			vel = -3500;
		}
	}
	
	return Bounce;
}

function checkBounceCtap(height, bounce_type, jumpbug)
{
	var bounce_iscrouched = 0;
	if (typeof(bounce_type) === "undefined") { bounce_type = "UNCROUCHED" }
	if (bounce_type == "UNCROUCHED") {
		bounce_iscrouched = 0;
	} else if (bounce_type == "CROUCHED") {
		bounce_iscrouched = 1;
	}
	
	var Bounce = 0;
	var jumpvel = 289;
	var grav = -800;
	var offset = -20; //BOUNCE_CROUCH and BOUNCE_CTAPJUMP offset is -20
	var pos = offset+20*bounce_iscrouched;
	var vel = jumpvel;
	vel += 0.5*(grav/tickRate);
	
	while ((pos + 50) > -height) {
		
		//console.log("pos: " + pos);
		
		if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
			//console.log("pos: " + pos);
			if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
				//console.log("assigning2 1");
				if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
			} else if ((pos + 50) > -height){
				//console.log("pos2: " + (pos - -height));
				
				pos += vel/tickRate;
				
				vel += grav/tickRate;
				
				if (vel <= -3500) {
					vel = -3500;
				}
				if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
					//console.log("pos: " + pos);
					if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
						//console.log("assigning2 2");
						if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
					} else if ((pos + 50) > -height){
						//console.log("pos2: " + (pos - -height));
						
						pos += vel/tickRate;
						
						vel += grav/tickRate;
						
						if (vel <= -3500) {
							vel = -3500;
						}
						if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
							//console.log("pos: " + pos);
							if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
								//console.log("assigning2 3");
								if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
							} else if ((pos + 50) > -height){
								//console.log("pos2: " + (pos - -height));
								
								pos += vel/tickRate;
								
								vel += grav/tickRate;
								
								if (vel <= -3500) {
									vel = -3500;
								}
								if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
									//console.log("pos: " + pos);
									if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
										//console.log("assigning2 4");
										if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
									}
								} else if (Bounce == 0){
									Bounce = 1;
								}
							}
						} else if (Bounce == 0){
							Bounce = 1;
						}
					}
				} else if (Bounce == 0){
					Bounce = 1;
				}
			} 
			if (Bounce == 0){
				Bounce = 1;
			}
			//console.log("BREAK!!!");
			//console.log("pos2: " + (pos - -height));
			//console.log(Math.ceil(pos) - pos);
			break;
		}
		
		pos += vel/tickRate;
		vel += grav/tickRate;
		
		if (vel <= -3500) {
			vel = -3500;
		}
	}
	
	return Bounce;
}

function checkBounces(height, jumpbug)
{
	//    checkBounceWalk(height, walk_type, bounce_type, jumpbug)
	//    checkBounceJump(height, bounce_type, jumpbug)
	//    checkBounceCJump(height, bounce_type, jumpbug)
	//    checkBounceCtap(height, bounce_type, jumpbug)
	//    checkBounceCeiling(height, bounce_type, jumpbug)
	
	var walkOutU = 0;
	var jumpOutU = 0;
	var ctapOutU = 0;
	var cjumpOutU = 0;
	var cwalkOutU = 0;
	var walkOutC = 0;
	var jumpOutC = 0;
	var ctapOutC = 0;
	var cjumpOutC = 0;
	var cwalkOutC = 0;
	var ceilingOutU = 0;
	var ceilingOutC = 0;
	var Bounces = [0, walkOutU, walkOutC, jumpOutU, jumpOutC, ctapOutU, ctapOutC, cjumpOutU, cjumpOutC, cwalkOutU, cwalkOutC, 0];
	
	if (checkBounceWalk(height, "UNCROUCHED", "UNCROUCHED", jumpbug) == 1 || checkBounceWalk(height, "UNCROUCHED", "UNCROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[11] = 1; //   Jumpbug
		if (checkBounceWalk(height, "UNCROUCHED", "UNCROUCHED", jumpbug) == 1){Bounces[1] = 1;}else if (checkBounceWalk(height, "UNCROUCHED", "UNCROUCHED", jumpbug) == 2){Bounces[1] = 2;} //    walkOutU
	}
	if (checkBounceWalk(height, "UNCROUCHED", "CROUCHED", jumpbug) == 1 || checkBounceWalk(height, "UNCROUCHED", "CROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[2] = 1; //    walkOutC
	}
	if (checkBounceJump(height, "UNCROUCHED", jumpbug) == 1 || checkBounceJump(height, "UNCROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[11] = 1; //   Jumpbug
		if (checkBounceJump(height, "UNCROUCHED", jumpbug) == 1){Bounces[3] = 1;}else if (checkBounceJump(height, "UNCROUCHED", jumpbug) == 2){Bounces[3] = 2;} //    jumpOutU
	}
	if (checkBounceJump(height, "CROUCHED", jumpbug) == 1 || checkBounceJump(height, "CROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[4] = 1; //    jumpOutC
	}
	if (checkBounceCtap(height, "UNCROUCHED", jumpbug) == 1 || checkBounceCtap(height, "UNCROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[11] = 1; //   Jumpbug
		if (checkBounceCtap(height, "UNCROUCHED", jumpbug) == 1){Bounces[5] = 1;}else if (checkBounceCtap(height, "UNCROUCHED", jumpbug) == 2){Bounces[5] = 2;} //    ctapOutU
	}
	if (checkBounceCtap(height, "CROUCHED", jumpbug) == 1 || checkBounceCtap(height, "CROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[6] = 1; //    ctapOutC
	}
	if (checkBounceCJump(height, "UNCROUCHED", jumpbug) == 1 || checkBounceCJump(height, "UNCROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[11] = 1; //   Jumpbug
		if (checkBounceCJump(height, "UNCROUCHED", jumpbug) == 1){Bounces[7] = 1;}else if (checkBounceCJump(height, "UNCROUCHED", jumpbug) == 2){Bounces[7] = 2;} //    cjumpOutU
	}
	if (checkBounceCJump(height, "CROUCHED", jumpbug) == 1 || checkBounceCJump(height, "CROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[8] = 1; //    cjumpOutC
	}
	if (checkBounceWalk(height, "CROUCHED", "UNCROUCHED", jumpbug) == 1 || checkBounceWalk(height, "CROUCHED", "UNCROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[11] = 1; //   Jumpbug
		if (checkBounceWalk(height, "CROUCHED", "UNCROUCHED", jumpbug) == 1){Bounces[9] = 1;}else if (checkBounceWalk(height, "CROUCHED", "UNCROUCHED", jumpbug) == 2){Bounces[9] = 2;} //    cwalkOutU
	}
	if (checkBounceWalk(height, "CROUCHED", "CROUCHED", jumpbug) == 1 || checkBounceWalk(height, "CROUCHED", "CROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[10] = 1; //    cwalkOutC
	}
	//console.log("walkOutU, walkOutC, jumpOutU, jumpOutC, ctapOutU, ctapOutC, cjumpOutU, cjumpOutC, cwalkOutU, cwalkOutC");
	return Bounces;
}

function checkCeilings(height, jumpbug)
{
	//    checkBounceWalk(height, walk_type, bounce_type, jumpbug)
	//    checkBounceJump(height, bounce_type, jumpbug)
	//    checkBounceCJump(height, bounce_type, jumpbug)
	//    checkBounceCtap(height, bounce_type, jumpbug)
	//    checkBounceCeiling(height, bounce_type, jumpbug)
	
	var ceilingOutU = 0;
	var ceilingOutC = 0;
	var Bounces = [0, ceilingOutU, ceilingOutC, 0];
	
	if (checkBounceCeiling(height, "UNCROUCHED", jumpbug) == 1 || checkBounceCeiling(height, "UNCROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[3] = 1; //Jumpbug
		if (checkBounceCeiling(height, "UNCROUCHED", jumpbug) == 1){Bounces[1] = 1;}else if (checkBounceCeiling(height, "UNCROUCHED", jumpbug) == 2){Bounces[1] = 2;} //    ceilingOutU
	}
	if (checkBounceCeiling(height, "CROUCHED", jumpbug) == 1 || checkBounceCeiling(height, "CROUCHED", jumpbug) == 2){
		Bounces[0] = 1;
		Bounces[2] = 1; //    ceilingOutC
	}
	//console.log("ceilingOutU, ceilingOutC");
	return Bounces;
}

function checkBounceCeiling(height, bounce_type, jumpbug)
{
	var bounce_iscrouched = 0;
	if (typeof(bounce_type) === "undefined") { bounce_type = "UNCROUCHED" }
	if (bounce_type == "UNCROUCHED") {
		bounce_iscrouched = 0;
	} else if (bounce_type == "CROUCHED") {
		bounce_iscrouched = 1;
	}
	
	var Bounce = 0;
	var jumpvel = 289;
	var grav = -800;
	var offset = -82; //BOUNCE_CROUCH = -20 and BOUNCE_CTAPJUMP = -82 offset
	var pos = offset+20*bounce_iscrouched;
	var vel = 0.5*(grav/tickRate);
	vel += 0.5*(grav/tickRate);
	
	while ((pos + 50) > -height) {
		
		//console.log("pos: " + pos);
		//console.log("pos2: " + (pos - -height));

		if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
			//console.log("pos: " + pos);
			if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
				//console.log("assigning2 1");
				if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
			} else if ((pos + 50) > -height){
				//console.log("pos2: " + (pos - -height));
				
				pos += vel/tickRate;
				
				vel += grav/tickRate;
				
				if (vel <= -3500) {
					vel = -3500;
				}
				if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
					if (Bounce == 0){
						Bounce = 1
					}
					//console.log("pos: " + pos);
					if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
						//console.log("assigning2 2");
						if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
					} else if ((pos + 50) > -height){
						//console.log("pos2: " + (pos - -height));
						
						pos += vel/tickRate;
						
						vel += grav/tickRate;
						
						if (vel <= -3500) {
							vel = -3500;
						}
						if (2 > (pos - -height) && (pos - -height) > 1*!jumpbug) {
							//console.log("pos: " + pos);
							if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
								//console.log("assigning2 3");
								if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
							} else if ((pos + 50) > -height){
								//console.log("pos2: " + (pos - -height));
								
								pos += vel/tickRate;
								
								vel += grav/tickRate;
								
								if (vel <= -3500) {
									vel = -3500;
								}
								if (1.999 > (pos - -height) && (pos - -height) >= 1*!jumpbug) {
									//console.log("pos: " + pos);
									if (0.705078 <= (Math.ceil(pos) - pos) && (Math.ceil(pos) - pos) <= 0.999999){
										//console.log("assigning2 4");
										if (!bounce_iscrouched){Bounce = 2;}else{Bounce = 1;};
									}
								} else if (Bounce == 0){
									Bounce = 1;
								}
							}
						} else if (Bounce == 0){
							Bounce = 1;
						}
					}
				} else if (Bounce == 0){
					Bounce = 1;
				}
			} 
			if (Bounce == 0){
				Bounce = 1;
			}
			//console.log("BREAK!!!");
			//console.log("pos2: " + (pos - -height));
			//console.log(Math.ceil(pos) - pos);
			break;
		}
		
		pos += vel/tickRate;
		vel += grav/tickRate;
		
		if (vel <= -3500) {
			vel = -3500;
		}
	}
	
	return Bounce;
}

// nolem's checkBounce function
function checkBounce(height, floor_height, velocity, b_type, jumpbug)
{
	if (typeof(b_type) === "undefined") { b_type = "UNCROUCHED" }
	
	var grav = 0.18
	var vel = 0;
	var bounce = 0;
	var pos = height;
	
	if (b_type == "CROUCHED") {
		pos += 20;
	}
	
	if (velocity == 0) {
		vel = 0.18;
	}
	else {
		vel = 0.09 + velocity / tickRate;
	}
	
	while ((pos + 50) > floor_height) {
		
		vel -= grav;
		
		if (vel <= -52.5) {
			vel = -52.5;
		}
		
		pos += vel;
		
		if (1.98 > (pos-floor_height) && (pos - floor_height) > 0.99*!jumpbug) {
			bounce = 1;
			break;
		}
	}
	
	return bounce;
}

function calculateAngle(floor_height, nearestAngle, rl_type, s_type, l_type, jumpbug)
{
	if (typeof(nearestAngle) === "undefined") { nearestAngle = 60.0 }
	if (typeof(rl_type) === "undefined") { rl_type = "STOCK" }
	if (typeof(s_type) === "undefined") { s_type = "UNCROUCHED" }
	if (typeof(l_type) === "undefined") { l_type = "UNCROUCHED" }
	
	var angleOut = [0.0, 0.0];
	var angleOutFinal = [0.0, 0.0];
	var f_h = 0-floor_height;
	
	var bounceL = 0;
	var bounceVarianceL = 1;
	
	var tempVariance = 0.01;
	var resultsOffset = 0.01;
	
	if (nearestAngle < 45 || nearestAngle > 89) {
		var tempAngle = 45.0;
	}
	else {
		var tempAngle = nearestAngle;
	}
	
	while (!bounceL) {
		var vel1 = calculateVel(tempAngle, rl_type, s_type);
		var vel2 = vel1 - 12.0
		
		var height = (((vel1 + vel2) / 2) / tickRate);
		
		if (s_type == "CROUCHED") { height -= 20 }
		
		if (checkBounce(height, f_h, vel2, l_type, jumpbug)) {
			bounceL = 1;
			angleOut[0] = tempAngle;
			if (tempAngle > 89) {
				return [0, 0];
			}
			
			// Once the angle is found check angle +0.01 to see what range you can use and still bounce
			while (bounceVarianceL) {
				
				var verVel1 = calculateVel((tempAngle + tempVariance), rl_type, s_type);
				var verVel2 = verVel1 - 12.0
		
				var verHeight = (((verVel1 + verVel2) / 2) / tickRate);
				
				if (s_type == "CROUCHED") { verHeight -= 20 }
				
				if (checkBounce(verHeight, f_h, verVel2, l_type, jumpbug)) {
					angleOut[1] = tempVariance;
					tempVariance += 0.01;
				}
				else {
					bounceVarianceL = 0;
					if (tempAngle+tempVariance > 89 && tempAngle < 89) {
						angleOut[1] = 89-tempAngle;
					}
					if ((tempAngle + resultsOffset) > 89) {
						return [0, 0];
					}
					angleOutFinal[0] = Math.round((angleOut[0] + resultsOffset) * 1000 ) / 1000;
					angleOutFinal[1] = Math.round((angleOut[0] + angleOut[1]) * 1000 ) / 1000;
					break;
				}
			}
			break;
		}
		else {
			tempAngle += 0.01;
		}
		// Stop it from going forever
		if (tempAngle > 89) {
			return [0, 0];
		}
	}
	return angleOutFinal;
}

function calculateOptimalAngle(floor_height, rl_type, s_type, l_type, jumpbug)
{
	if (typeof(rl_type) === "undefined") { rl_type = "STOCK" }
	if (typeof(s_type) === "undefined") { s_type = "UNCROUCHED" }
	if (typeof(l_type) === "undefined") { l_type = "UNCROUCHED" }
	
	var optimalAngleOut = [];
	var optimalAngleOutFinal = [];
	var f_h = 0-floor_height;
	
	var bounceL = 0;
	var bounceVarianceL = 1;
	
	var tempVariance = 0.01;
	
	var tempAngle = 45.0; //45 || nearestAngle > 89
	
	while (!bounceL) {
		//console.log("tempAngle" + tempAngle);
		tempVariance = 0.01;
		var vel1 = calculateVel((tempAngle+tempVariance-0.01), rl_type, s_type);
		var vel2 = vel1 - 12.0
		
		var height = (((vel1 + vel2) / 2) / tickRate);
		
		if (s_type == "CROUCHED") { height -= 20 }
		
		if (checkBounce(height, f_h, vel2, l_type, jumpbug)) {
			bounceL = 1;
			
			optimalAngleOut.push(Math.round( (tempAngle + 0.01)*1000 )/1000);
			
			// Once the angle is found check angle +0.01 to see what range you can use and still bounce
			while (bounceVarianceL) {
				if (tempAngle > 89){
					break;
				}
				//console.log("tempVariance" + tempVariance);
				var verVel1 = calculateVel((tempAngle + tempVariance), rl_type, s_type);
				var verVel2 = verVel1 - 12.0
		
				var verHeight = (((verVel1 + verVel2) / 2) / tickRate);
				
				if (s_type == "CROUCHED") { verHeight -= 20 }
				
				if (checkBounce(verHeight, f_h, verVel2, l_type, jumpbug)) {
					tempVariance += 0.01;
				}
				else {
					optimalAngleOut.push(Math.round( (tempAngle + tempVariance - 0.01)*1000)/1000);
					bounceVarianceL = 0;
					bounceL = 0;
					tempAngle += tempVariance;
					break;
				}
			}
		}
		else if (tempAngle < 89){
			tempAngle += 0.01;
		} else {
			break;
		}
		if (tempAngle <= 89) {
			bounceVarianceL = 1;
		}
		// Stop it from going forever
		if (tempAngle > 89) {
			if (optimalAngleOut.length < 2){
				return [0, 0];
			}
		}
	}
	
	//once all angle pairs are found find pair with biggest difference
	var optimalAngleOutDiff = 0.0;
	var optimalAngleOut0;
	var optimalAngleOut1;
	var i = 0;
	while (i <= optimalAngleOut.length-1) {
		if ((optimalAngleOut[i+1] - optimalAngleOut[i])>optimalAngleOutDiff){
			 optimalAngleOut0 = i;
			 optimalAngleOut1 = i+1;
			 optimalAngleOutDiff = optimalAngleOut[optimalAngleOut1] - optimalAngleOut[optimalAngleOut0];
		}
		//console.log("Out0: " + optimalAngleOut[optimalAngleOut0]);
		//console.log("Out1: " + optimalAngleOut[optimalAngleOut1]);
		//console.log("Diff: " + optimalAngleOutDiff);
		i += 2;
		if (i > optimalAngleOut.length-1){
			break;
		}
	}
	optimalAngleOut0 = optimalAngleOut[optimalAngleOut0];
	optimalAngleOut1 = optimalAngleOut[optimalAngleOut1];
	
	if (optimalAngleOut1 > 89.0) {optimalAngleOut1 = 89.0}
	//console.log(optimalAngleOut0);
	//console.log(optimalAngleOut1);
	
	optimalAngleOutFinal.push(optimalAngleOut0);
	optimalAngleOutFinal.push(optimalAngleOut1);
	
	return optimalAngleOutFinal;
}

function calculateVel(angle, rl_type, s_type)
{
	var SCALE;
	var HEIGHT;
	var VIEW;
	var U;
	var R;
	var RADIUS;
	// Use some complexe formula made by ILDPRUT

	if (s_type == "UNCROUCHED") {
		SCALE = 1; 		// 1  if standing UNCROUCHED and 82/55 if crouching CROUCHED
		HEIGHT = 82; 	// 82 if standing UNCROUCHED and 62    if crouching CROUCHED
		VIEW = 68;		// 68 if standing UNCROUCHED and 45    if crouching CROUCHED
		U = -3;			// -3 if standing UNCROUCHED and 8     if crouching CROUCHED
	}
	else if (s_type == "CROUCHED") {
		SCALE = 82/55; 	// 1  if standing UNCROUCHED and 82/55 if crouching CROUCHED
		HEIGHT = 62; 	// 82 if standing UNCROUCHED and 62    if crouching CROUCHED
		VIEW = 45;		// 68 if standing UNCROUCHED and 45    if crouching CROUCHED
		U = 8;			// -3 if standing UNCROUCHED and 8     if crouching CROUCHED
	};
	if (rl_type == "STOCK") {
		R = 12;			// 12 if Stock	0 if Original	8 if Mangler
	}
	else if (rl_type == "ORIGINAL") {
		R = 0;			// 12 if Stock	0 if Original	8 if Mangler
	}
	else if (rl_type == "COWMANGLER" || rl_type == "COWMANGLERCHARGED") {
		R = 8;			// 12 if Stock	0 if Original	8 if Mangler
	};
	if (rl_type == "STOCK" || rl_type == "ORIGINAL" || rl_type == "COWMANGLER") {
		RADIUS = 121;		// 121 if not charged and 160.9299926757812 if charged
	} else if (rl_type == "COWMANGLERCHARGED") {
		RADIUS = 160.9299926757812;		// 121 if not charged and 160.9299926757812 if charged
	}

	var L2 = 1 / Math.pow( (2*U*Math.cos(angle*Math.PI/180)+3953*Math.sin(angle*Math.PI/180)) , 2 ) 
			 * (
				   Math.pow( (3953*VIEW+4000*U*Math.cos(angle*Math.PI/180)) , 2 ) 
				 + Math.pow( (-2*R*(VIEW-2000*Math.sin(angle*Math.PI/180))) , 2 ) 
				 + Math.pow( (-2*U*(VIEW-2000*Math.sin(angle*Math.PI/180))) , 2 )
			   ) 
			  - Math.pow( VIEW , 2 );
			  
	var velocity = ( 900*SCALE * ( 1 - ( Math.sqrt(L2+1)/(2*RADIUS) ) ) * ( (HEIGHT/2)+9 )  
				) / (
				 Math.sqrt( Math.pow(HEIGHT , 2)+4*L2+36*HEIGHT+324 )
				);
	return velocity;
}

function findSpecialBounce(floor_height, sb_type, l_type, jumpbug)
{
	if (typeof(l_type) === "undefined") { l_type = "UNCROUCHED" }
	
	var vel1 = bounceSpecialVel[sb_type]["vel"];
	var vel2 = vel1 - 12.0;

	var height = (((vel1 + vel2) / 2) / tickRate);
	
	// Check to see if the start is crouched or uncrouched
	if (sb_type.indexOf("uncrouch") === -1) {
		height -= 20;
	}
	
	return checkBounce(height, floor_height, vel2, l_type)
}
