/**
 *  
 *  Deal with displaying stuff
 *  
 *  
 */

function m(){
	if(document.getElementById("navItem_bounce").classList.contains("active")){
		//document.getElementById("bounceResultsU").classList.remove("col-lg-12");
		//document.getElementById("divID_Diff_cA_Un").classList.remove("col-lg-12");
		//document.getElementById("specialResultsU").classList.remove("col-lg-12");
		//document.getElementById("bounceResultsU").classList.add("col-lg-6");
		//document.getElementById("divID_Diff_cA_Un").classList.add("col-lg-6");
		//document.getElementById("specialResultsU").classList.add("col-lg-6");
		document.getElementById("cardTitle1U").innerHTML = "Land Uncrouched"
		document.getElementById("cardTitle2U").innerHTML = "Land Uncrouched"
		document.getElementById("cardTitle3U").innerHTML = "Land Uncrouched"
		document.getElementById("cardTitle1C").innerHTML = "Land Crouched"
		document.getElementById("cardTitle2C").innerHTML = "Land Crouched"
		document.getElementById("cardTitle3C").innerHTML = "Land Crouched"
		m_bounce();
	}
	if(document.getElementById("navItem_jumpbug").classList.contains("active")){
		//document.getElementById("bounceResultsU").classList.remove("col-lg-6");
		//document.getElementById("divID_Diff_cA_Un").classList.remove("col-lg-6");
		//document.getElementById("specialResultsU").classList.remove("col-lg-6");
		//document.getElementById("bounceResultsU").classList.add("col-lg-12");
		//document.getElementById("divID_Diff_cA_Un").classList.add("col-lg-12");
		//document.getElementById("specialResultsU").classList.add("col-lg-12");
		document.getElementById("cardTitle1U").innerHTML = "Jumpbug"
		document.getElementById("cardTitle2U").innerHTML = "Jumpbug"
		document.getElementById("cardTitle3U").innerHTML = "Jumpbug"
		document.getElementById("cardTitle1C").innerHTML = "Jumpbugs can't be done crouched"
		document.getElementById("cardTitle2C").innerHTML = "Jumpbugs can't be done crouched"
		document.getElementById("cardTitle3C").innerHTML = "Jumpbugs can't be done crouched"
		m_jumpbug()
	}
}

function m_bounce()
{
	var h_silly = 0;
	var h_greater = 0;
	var h_else = 0;
	var h_undefined = 0;
	var c_silly = 0;
	var c_greater = 0;
	var c_else = 0;
	var c_undefined = 0;
	var a_range = 0;
	var a_number = 0;
	var wrongInputAngle = 0;
	var wrongInputFloor = 0;
	var wrongInputCeiling = 0;
	var floor_height = document.getElementById("txt_height").value;
	var ceiling_gap = document.getElementById("txt_height_ceiling").value;
	var nearestAngle = document.getElementById("txt_nearestAngle").value;

	document.getElementById("bounceInfo").innerHTML = "";
	document.getElementById("ceilingInfo").innerHTML = "";
	document.getElementById("angleInfo").innerHTML = "";
	document.getElementById("bounceResults_txt").innerHTML = "";
	document.getElementById("bounceTipsU").innerHTML = "";
	document.getElementById("bounceTipsC").innerHTML = "";
	document.getElementById("divID_DiffTitleDescUn").innerHTML = "";
	document.getElementById("divID_DiffTitleDescC").innerHTML = "";
	document.getElementById("divID_DiffTitle_txt").style.display = "";
	//document.getElementById("divID_DiffTitleDesc").innerHTML = "";
	//document.getElementById("divID_specialBounce").innerHTML = "";
	//document.getElementById("divID_biggestDiffTitleDesc").innerHTML = "";
	//document.getElementById("divID_biggestDiffTitle").innerHTML = "";
	document.getElementById("divID_specialTitle_txt").innerHTML = "";
	
	
	// Have you tried turning it off and on again?
	document.getElementById("specialResultsU").style.display = "none";
	document.getElementById("specialResultsC").style.display = "none";
	document.getElementById("bounceInfo").style.display = "none";
	document.getElementById("bounceResults").style.display = "none";
	document.getElementById("bounceResultsU").style.display = "none";
	document.getElementById("bounceResultsC").style.display = "none";
	document.getElementById("ceilingInfo").style.display = "none";
	document.getElementById("angleInfo").style.display = "none";
	document.getElementById("divID_Diff_cA_Un").style.display = "none";
	document.getElementById("divID_Diff_cA_C").style.display = "none";
	document.getElementById("divID_DiffTitle").style.display = "none";
	//document.getElementById("divID_DiffTitleDesc").style.display = "none";
	//document.getElementById("hrID_midway_2").style.display = "none";
	//document.getElementById("hrID_midway_1").style.display = "none";
	//document.getElementById("hrID_midway_0").style.display = "none";
	document.getElementById("divID_specialTitle").style.display = "none";
	//document.getElementById("divID_biggestDiffTitle").style.display = "none";
	
	// Do some checking to make sure input looks ok
	if (!isNaN(floor_height)) {
		if (floor_height > 999999) {
			// Can find higher bounces but it might start to hang
			//document.getElementById("bounceInfo").innerHTML = "@Height Silly..";
			h_silly = 1;
			wrongInputFloor = 1;
			//return 0;
		}
		else if (floor_height < 1) {
			//document.getElementById("bounceInfo").innerHTML = "@Height Enter a height > 1";
			h_greater = 1;
			wrongInputFloor = 1;
			//return 0;
		}
	}
	else {
		//document.getElementById("bounceInfo").innerHTML = "@Height Enter a height > 1";
		h_else = 1;
		//wrongInputFloor = 1;
		//return 0;
	}
	if (typeof floor_height !== "undefined" && floor_height == ''){
		//document.getElementById("bounceInfo").innerHTML = "@Height Enter a height > 1";
		h_undefined = 1;
		wrongInputFloor = 1;
		//console.log("wrongInputFloor = 1;")
		//return 0;
	}
	
	// Do some checking to make sure input looks ok
	if (!isNaN(ceiling_gap)) {
		if (ceiling_gap > 999999) {
			// Can find higher bounces but it might start to hang
			//document.getElementById("ceilingInfo").innerHTML = "@Ceiling Silly..";
			c_silly = 1;
			wrongInputCeiling = 1;
			//return 0;
		}
		else if (ceiling_gap < 63) {
			//document.getElementById("ceilingInfo").innerHTML = "@Ceiling Enter a height > 63";
			c_greater = 1;
			wrongInputCeiling = 1;
			//return 0;
		}
	}
	else {
		//document.getElementById("ceilingInfo").innerHTML = "@Ceiling Enter a height > 63";
		c_else = 1;
		//wrongInputCeiling = 1;
		//return 0;
	}
	if (typeof ceiling_gap !== "undefined" && ceiling_gap == '') {
		//document.getElementById("ceilingInfo").innerHTML = "@Ceiling Enter a height > 63";
		c_undefined = 1;
		wrongInputCeiling = 1;
		//console.log("wrongInputCeiling = 1;")
		//return 0;
	}
	
	
	// Deal with angle bounces
	if (nearestAngle === "") {
		nearestAngle = 60.00;
	}
	if (!isNaN(nearestAngle)) {
		if (nearestAngle < 45 || nearestAngle > 89) {
			//document.getElementById("angleInfo").innerHTML = "@Angle Nearest angle should be 45 < x < 89";
			a_range = 1;
			wrongInputAngle = 1;
			//return 0;
		}
		nearestAngle = parseFloat(nearestAngle);
	}
	else {
		//document.getElementById("angleInfo").innerHTML = "@Angle Nearest angle needs to be a number";
		a_number = 1;
		wrongInputAngle = 1;
		//return 0;
	}
	
//console.log("h_silly:" + h_silly)
//console.log("h_greater:" + h_greater)
//console.log("h_else:" + h_else)
//console.log("h_undefined:" + h_undefined)
//console.log("c_silly:" + c_silly)
//console.log("c_greater:" + c_greater)
//console.log("c_else:" + c_else)
//console.log("c_undefined:" + c_undefined)
//console.log("a_range:" + a_range)
//console.log("a_number:" + a_number)
//console.log("wrongInputAngle:" + wrongInputAngle)
//console.log("wrongInputFloor:" + wrongInputFloor)
//console.log("wrongInputCeiling:" + wrongInputCeiling)
	
	if((wrongInputFloor && wrongInputAngle) || (!wrongInputFloor && wrongInputAngle) || (h_else && c_else) || (wrongInputFloor) && (wrongInputCeiling) || (h_else) && (!wrongInputAngle) || (c_else) || (c_greater) && (!wrongInputFloor) && (!c_undefined)){
		//console.log("wrongInputFloor:" + wrongInputFloor + " wrongInputAngle:" + wrongInputAngle + " h_else:" + h_else + " c_else:" + c_else + " wrongInputFloor:" + wrongInputFloor + " wrongInputCeiling:" + wrongInputCeiling)
		if (h_greater || h_else || h_undefined){
			document.getElementById("bounceInfo").innerHTML = "@Height Enter a height > 1";
			document.getElementById("bounceInfo").style.display = "";
		}else if(h_silly){
			document.getElementById("bounceInfo").innerHTML = "@Height Silly..";
			document.getElementById("bounceInfo").style.display = "";
		};
		if (c_greater || c_else || c_undefined){
			document.getElementById("ceilingInfo").innerHTML = "@Ceiling Enter a height > 63";
			document.getElementById("ceilingInfo").style.display = "";
		}else if(c_silly){
			document.getElementById("ceilingInfo").innerHTML = "@Ceiling Silly..";
			document.getElementById("ceilingInfo").style.display = "";
		};
		if (a_range){
			document.getElementById("angleInfo").innerHTML = "∠ Nearest angle should be 45 < x < 89";
			document.getElementById("angleInfo").style.display = "";
		}else if(a_number){
			document.getElementById("angleInfo").innerHTML = "∠ Nearest angle needs to be a number";
			document.getElementById("angleInfo").style.display = "";
		};
		return 0;
	}
	//console.log("wrongInputFloor:" + wrongInputFloor + " wrongInputAngle:" + wrongInputAngle + " h_else:" + h_else + " c_else:" + c_else)
	
	// 
	var f_h = 0 - floor_height;
	
if (document.getElementById("chk_bouncesCheck").checked && !wrongInputFloor) {
	// Calculate default bounce results
	var walkOutU = "";
	var walkOutC = "";
	var jumpOutU = "";
	var jumpOutC = "";
	var ctapOutU = "";
	var ctapOutC = "";
	var cjumpOutU = "";
	var cjumpOutC = "";
	var cwalkOutU = "";
	var cwalkOutC = "";
	var bounceFound = 0;
	
	var ceilingResult = checkCeilings(ceiling_gap, false);
	var bounceResult = checkBounces(floor_height, false);
	if (ceilingResult[0] == 0 && bounceResult[0] == 0 && !wrongInputFloor) {
		document.getElementById("bounceResults_txt").innerHTML = "No bounce found";
		document.getElementById("bounceResults").style.display = "";
	} else if (!wrongInputFloor) { 
		bounceFound = 1;
		document.getElementById("bounceResults_txt").innerHTML = "This height can be bounced with";
		document.getElementById("bounceResults").style.display = "";
		document.getElementById("bounceResultsU").style.display = "";
		document.getElementById("bounceResultsC").style.display = "";
		if (bounceResult[1] == 1) {walkOutU = "<tr><td class='text-right' style='color:green'>Walk</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Uncrouched</td></tr>"
		}else if (bounceResult[1] == 2) {walkOutU = "<tr><td class='text-right' style='color:#28bbbb'>Walk</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Uncrouched (doublebouncehop)</td></tr>"};
		if (bounceResult[2] == 1) {walkOutC = "<tr><td class='text-right' style='color:green'>Walk</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		if (bounceResult[3] == 1) {jumpOutU = "<tr><td class='text-right' style='color:green'>Jump</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Uncrouched</td></tr>"
		}else if (bounceResult[3] == 2) {jumpOutU = "<tr><td class='text-right' style='color:#28bbbb'>Jump</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Uncrouched (doublebouncehop)</td></tr>"};
		if (bounceResult[4] == 1) {jumpOutC = "<tr><td class='text-right' style='color:green'>Jump</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		if (bounceResult[5] == 1) {ctapOutU = "<tr><td class='text-right' style='color:green'>Ctap</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Uncrouched</td></tr>"
		}else if (bounceResult[5] == 2) {ctapOutU = "<tr><td class='text-right' style='color:#28bbbb'>Ctap</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Uncrouched (doublebouncehop)</td></tr>"};
		if (bounceResult[6] == 1) {ctapOutC = "<tr><td class='text-right' style='color:green'>Ctap</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		if (bounceResult[7] == 1) {cjumpOutU = "<tr><td class='text-right' style='color:green'>Crouch Jump</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Uncrouched</td></tr>"
		}else if (bounceResult[7] == 2) {cjumpOutU = "<tr><td class='text-right' style='color:#28bbbb'>Crouch Jump</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Uncrouched (doublebouncehop)</td></tr>"};
		if (bounceResult[8] == 1) {cjumpOutC = "<tr><td class='text-right' style='color:green'>Crouch Jump</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		if (bounceResult[9] == 1) {cwalkOutU = "<tr><td class='text-right' style='color:green'>Crouch Walk</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Uncrouched</td></tr>"
		}else if (bounceResult[9] == 2) {cwalkOutU = "<tr><td class='text-right' style='color:#28bbbb'>Crouch Walk</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Uncrouched (doublebouncehop)</td></tr>"};
		if (bounceResult[10] == 1) {cwalkOutC = "<tr><td class='text-right' style='color:green'>Crouch Walk</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		document.getElementById("bounceTipsU").innerHTML = (walkOutU) + (jumpOutU) + (ctapOutU) + (cjumpOutU) + (cwalkOutU);
		document.getElementById("bounceTipsC").innerHTML = (walkOutC) + (jumpOutC) + (ctapOutC) + (cjumpOutC) + (cwalkOutC);
	}
	
	//console.log("walkOutU, walkOutC, jumpOutU, jumpOutC, ctapOutU, ctapOutC, cjumpOutU, cjumpOutC, cwalkOutU, cwalkOutC, ceilingOutU, ceilingOutC");
	
	var ceilingOutU = "";
	var ceilingOutC = "";
	var ceilingFound = 0;
	
	if (bounceResult[0] == 0 && ceilingResult[0] == 0 && !wrongInputCeiling) {
		//document.getElementById("ceilingResults").innerHTML = "<h3>No ceilingsmash found</h3>";
		document.getElementById("bounceResults_txt").innerHTML = "No bounce found";
		document.getElementById("bounceResults").style.display = "";
	} else if (!wrongInputCeiling) { 
		ceilingFound = 1;
		//document.getElementById("ceilingResults").innerHTML = "<h3>" + "This height can be ceilingsmashed with:" + "</h3>";
		document.getElementById("bounceResults_txt").innerHTML = "This height can be bounced with";
		document.getElementById("bounceResults").style.display = "";
		document.getElementById("bounceResultsU").style.display = "";
		document.getElementById("bounceResultsC").style.display = "";
		if (ceilingResult[1] == 1) {ceilingOutU = "<tr><td class='text-right' style='color:green'>Ceilingsmash</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Uncrouched</td></tr>"
		}else if (ceilingResult[1] == 2) {ceilingOutU = "<tr><td class='text-right' style='color:#28bbbb'>Ceilingsmash</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Uncrouched (doublebouncehop)</td></tr>"};
		if (ceilingResult[2] == 1) {ceilingOutC = "<tr><td class='text-right' style='color:green'>Ceilingsmash</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		document.getElementById("bounceTipsU").innerHTML += (ceilingOutU);
		document.getElementById("bounceTipsC").innerHTML += (ceilingOutC);
	}
}
	
	if (document.getElementById("chk_angleCheck").checked && !wrongInputFloor) {
		
		//console.log("Calculate results")
		
		// Calculate results
		// Stock
		if (!document.getElementById("rad_stock").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "STOCK", "UNCROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Stock) Uncrouched</td><td id='td_cA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "STOCK", "UNCROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Stock) Uncrouched</td><td id='td_cA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "STOCK", "CROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Stock) Crouched</td><td id='td_cA_ba1_C_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "STOCK", "CROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Stock) Crouched</td><td id='td_cA_ba1_C_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_C").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Original
		if (!document.getElementById("rad_original").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "ORIGINAL", "UNCROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Original) Uncrouched</td><td id='td_cA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "ORIGINAL", "UNCROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Original) Uncrouched</td><td id='td_cA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "ORIGINAL", "CROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Original) Crouched</td><td id='td_cA_ba1_C_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "ORIGINAL", "CROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Original) Crouched</td><td id='td_cA_ba1_C_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_C").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Cowmangler
		if (!document.getElementById("rad_cowmangler").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLER", "UNCROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler) Uncrouched</td><td id='td_cA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLER", "UNCROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler) Uncrouched</td><td id='td_cA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLER", "CROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler) Crouched</td><td id='td_cA_ba1_C_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLER", "CROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler) Crouched</td><td id='td_cA_ba1_C_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_C").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Cowmangler Charged
		if (!document.getElementById("rad_cowmanglercharged").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLERCHARGED", "UNCROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler Charged) Uncrouched</td><td id='td_cA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLERCHARGED", "UNCROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler Charged) Uncrouched</td><td id='td_cA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLERCHARGED", "CROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler Charged) Crouched</td><td id='td_cA_ba1_C_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLERCHARGED", "CROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler Charged) Crouched</td><td id='td_cA_ba1_C_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_C").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
	}
	
if (document.getElementById("chk_angleCheck").checked && !wrongInputFloor) {
		
		//console.log("Calculate results")
		
		// Calculate results
		// Stock
		if (!document.getElementById("rad_stock").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateOptimalAngle(floor_height, "STOCK", "UNCROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Stock) Uncrouched</td><td id='td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "STOCK", "UNCROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Stock) Uncrouched</td><td id='td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_C").innerHTML = ba1;
						document.getElementById("td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "STOCK", "CROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Stock) Crouched</td><td id='cr_td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "STOCK", "CROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Stock) Crouched</td><td id='cr_td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_C").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Original
		if (!document.getElementById("rad_original").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateOptimalAngle(floor_height, "ORIGINAL", "UNCROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Original) Uncrouched</td><td id='td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "ORIGINAL", "UNCROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Original) Uncrouched</td><td id='td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_C").innerHTML = ba1;
						document.getElementById("td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "ORIGINAL", "CROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Original) Crouched</td><td id='cr_td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "ORIGINAL", "CROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Original) Crouched</td><td id='cr_td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_C").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Cowmangler
		if (!document.getElementById("rad_cowmangler").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLER", "UNCROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler) Uncrouched</td><td id='td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLER", "UNCROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler) Uncrouched</td><td id='td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_C").innerHTML = ba1;
						document.getElementById("td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLER", "CROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler) Crouched</td><td id='cr_td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLER", "CROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler) Crouched</td><td id='cr_td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_C").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Cowmangler Charged
		if (!document.getElementById("rad_cowmanglercharged").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLERCHARGED", "UNCROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler Charged) Uncrouched</td><td id='td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLERCHARGED", "UNCROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler Charged) Uncrouched</td><td id='td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_C").innerHTML = ba1;
						document.getElementById("td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLERCHARGED", "CROUCHED", "UNCROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler Charged) Crouched</td><td id='cr_td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLERCHARGED", "CROUCHED", "CROUCHED", false);
					if (bounceAngleResult[0] == 0) {
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angled bounce found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Crouched
						//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
						document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler Charged) Crouched</td><td id='cr_td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_C").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Angled Bounces";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
	}
	
	// Deal with "special" start bounce types
	if (document.getElementById("chk_specialCheck").checked && !wrongInputFloor) {
	
		// Enable Display
		document.getElementById("divID_specialTitle").style.display = "";
		document.getElementById("divID_specialTitle_txt").innerHTML = "Special Start";
		
		var specialFound = 0;
		var specialDisplayUn = "";
		var specialDisplayC = "";
		
		if (!document.getElementById("rad_stock").classList.contains("invert-active")) {
			var rl_type = "stock";
		} else if (!document.getElementById("rad_original").classList.contains("invert-active")) {
			var rl_type = "original";
		} else if (!document.getElementById("rad_cowmangler").classList.contains("invert-active")) {
			var rl_type = "cowmangler";
		} else if (!document.getElementById("rad_cowmanglercharged").classList.contains("invert-active")) {
			var rl_type = "cowmanglercharged";
		}
		
		for (var specialType in bounceSpecialVel) {
			if (bounceSpecialVel.hasOwnProperty(specialType)) {
				if (findSpecialBounce(f_h, specialType, "UNCROUCHED", false)) {
					if(bounceSpecialVel[specialType]["RL_type"] == rl_type) {
						//specialDisplay += bounceSpecialVel[specialType]['text'] + " -&gt; " + "Land Uncrouched ";
						//specialDisplayUn +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Uncrouched</td></tr>"
						if (typeof(bounceSpecialVel[specialType]["note"] ) !== "undefined") {
						//	specialDisplay += bounceSpecialVel[specialType]["note"];
							specialDisplayUn +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Uncrouched " + bounceSpecialVel[specialType]["note"] + "</td></tr>"
						}else{
							specialDisplayUn +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Uncrouched</td></tr>"
						}
						//specialDisplay += "<br />\n";
						specialFound = 1;
					}
				}
				else if (findSpecialBounce(f_h, specialType, "CROUCHED", false)) {
					if(bounceSpecialVel[specialType]["RL_type"] == rl_type) {
						//specialDisplay += bounceSpecialVel[specialType]["text"] + " -&gt; " + "Land Crouched ";
						//specialDisplayC +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"
						if (typeof(bounceSpecialVel[specialType]["note"] ) !== "undefined") {
						//	specialDisplay += bounceSpecialVel[specialType]["note"];
							specialDisplayC +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched " + bounceSpecialVel[specialType]["note"] + "</td></tr>"
						}else{
							specialDisplayC +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"
						}
						//specialDisplay += "<br />\n";
						specialFound = 1;
					}
				}
			}
		}
		
		if (specialFound) {
			//document.getElementById("divID_specialBounce").innerHTML = specialDisplay;
			document.getElementById("bounceTipsSpecialU").innerHTML = specialDisplayUn;
			document.getElementById("bounceTipsSpecialC").innerHTML = specialDisplayC;
			document.getElementById("specialResultsU").style.display = "";
			document.getElementById("specialResultsC").style.display = "";
		} else {
			document.getElementById("divID_specialTitle_txt").innerHTML = "No special start found";
		}
	}
}

function m_jumpbug()
{
	var h_silly = 0;
	var h_greater = 0;
	var h_else = 0;
	var h_undefined = 0;
	var c_silly = 0;
	var c_greater = 0;
	var c_else = 0;
	var c_undefined = 0;
	var a_range = 0;
	var a_number = 0;
	var wrongInputAngle = 0;
	var wrongInputFloor = 0;
	var wrongInputCeiling = 0;
	var floor_height = document.getElementById("txt_height").value;
	var ceiling_gap = document.getElementById("txt_height_ceiling").value;
	var nearestAngle = document.getElementById("txt_nearestAngle").value;

	document.getElementById("bounceInfo").innerHTML = "";
	document.getElementById("ceilingInfo").innerHTML = "";
	document.getElementById("angleInfo").innerHTML = "";
	document.getElementById("bounceResults_txt").innerHTML = "";
	document.getElementById("bounceTipsU").innerHTML = "";
	document.getElementById("bounceTipsC").innerHTML = "";
	document.getElementById("divID_DiffTitleDescUn").innerHTML = "";
	document.getElementById("divID_DiffTitleDescC").innerHTML = "";
	document.getElementById("divID_DiffTitle_txt").style.display = "";
	//document.getElementById("divID_DiffTitleDesc").innerHTML = "";
	//document.getElementById("divID_specialBounce").innerHTML = "";
	//document.getElementById("divID_biggestDiffTitleDesc").innerHTML = "";
	//document.getElementById("divID_biggestDiffTitle").innerHTML = "";
	document.getElementById("divID_specialTitle_txt").innerHTML = "";
	
	
	// Have you tried turning it off and on again?
	document.getElementById("specialResultsU").style.display = "none";
	document.getElementById("specialResultsC").style.display = "none";
	document.getElementById("bounceInfo").style.display = "none";
	document.getElementById("bounceResults").style.display = "none";
	document.getElementById("bounceResultsU").style.display = "none";
	document.getElementById("bounceResultsC").style.display = "none";
	document.getElementById("ceilingInfo").style.display = "none";
	document.getElementById("angleInfo").style.display = "none";
	document.getElementById("divID_Diff_cA_Un").style.display = "none";
	document.getElementById("divID_Diff_cA_C").style.display = "none";
	document.getElementById("divID_DiffTitle").style.display = "none";
	//document.getElementById("divID_DiffTitleDesc").style.display = "none";
	//document.getElementById("hrID_midway_2").style.display = "none";
	//document.getElementById("hrID_midway_1").style.display = "none";
	//document.getElementById("hrID_midway_0").style.display = "none";
	document.getElementById("divID_specialTitle").style.display = "none";
	//document.getElementById("divID_biggestDiffTitle").style.display = "none";
	
	// Do some checking to make sure input looks ok
	if (!isNaN(floor_height)) {
		if (floor_height > 999999) {
			// Can find higher bounces but it might start to hang
			//document.getElementById("bounceInfo").innerHTML = "@Height Silly..";
			h_silly = 1;
			wrongInputFloor = 1;
			//return 0;
		}
		else if (floor_height < 1) {
			//document.getElementById("bounceInfo").innerHTML = "@Height Enter a height > 1";
			h_greater = 1;
			wrongInputFloor = 1;
			//return 0;
		}
	}
	else {
		//document.getElementById("bounceInfo").innerHTML = "@Height Enter a height > 1";
		h_else = 1;
		//wrongInputFloor = 1;
		//return 0;
	}
	if (typeof floor_height !== "undefined" && floor_height == ''){
		//document.getElementById("bounceInfo").innerHTML = "@Height Enter a height > 1";
		h_undefined = 1;
		wrongInputFloor = 1;
		//console.log("wrongInputFloor = 1;")
		//return 0;
	}
	
	// Do some checking to make sure input looks ok
	if (!isNaN(ceiling_gap)) {
		if (ceiling_gap > 999999) {
			// Can find higher bounces but it might start to hang
			//document.getElementById("ceilingInfo").innerHTML = "@Ceiling Silly..";
			c_silly = 1;
			wrongInputCeiling = 1;
			//return 0;
		}
		else if (ceiling_gap < 63) {
			//document.getElementById("ceilingInfo").innerHTML = "@Ceiling Enter a height > 63";
			c_greater = 1;
			wrongInputCeiling = 1;
			//return 0;
		}
	}
	else {
		//document.getElementById("ceilingInfo").innerHTML = "@Ceiling Enter a height > 63";
		c_else = 1;
		//wrongInputCeiling = 1;
		//return 0;
	}
	if (typeof ceiling_gap !== "undefined" && ceiling_gap == '') {
		//document.getElementById("ceilingInfo").innerHTML = "@Ceiling Enter a height > 63";
		c_undefined = 1;
		wrongInputCeiling = 1;
		//console.log("wrongInputCeiling = 1;")
		//return 0;
	}
	
	
	// Deal with angle bounces
	if (nearestAngle === "") {
		nearestAngle = 60.00;
	}
	if (!isNaN(nearestAngle)) {
		if (nearestAngle < 45 || nearestAngle > 89) {
			//document.getElementById("angleInfo").innerHTML = "@Angle Nearest angle should be 45 < x < 89";
			a_range = 1;
			wrongInputAngle = 1;
			//return 0;
		}
		nearestAngle = parseFloat(nearestAngle);
	}
	else {
		//document.getElementById("angleInfo").innerHTML = "@Angle Nearest angle needs to be a number";
		a_number = 1;
		wrongInputAngle = 1;
		//return 0;
	}
	
//console.log("h_silly:" + h_silly)
//console.log("h_greater:" + h_greater)
//console.log("h_else:" + h_else)
//console.log("h_undefined:" + h_undefined)
//console.log("c_silly:" + c_silly)
//console.log("c_greater:" + c_greater)
//console.log("c_else:" + c_else)
//console.log("c_undefined:" + c_undefined)
//console.log("a_range:" + a_range)
//console.log("a_number:" + a_number)
//console.log("wrongInputAngle:" + wrongInputAngle)
//console.log("wrongInputFloor:" + wrongInputFloor)
//console.log("wrongInputCeiling:" + wrongInputCeiling)
	
	if((wrongInputFloor && wrongInputAngle) || (!wrongInputFloor && wrongInputAngle) || (h_else && c_else) || (wrongInputFloor) && (wrongInputCeiling) || (h_else) && (!wrongInputAngle) || (c_else) || (c_greater) && (!wrongInputFloor) && (!c_undefined)){
		//console.log("wrongInputFloor:" + wrongInputFloor + " wrongInputAngle:" + wrongInputAngle + " h_else:" + h_else + " c_else:" + c_else + " wrongInputFloor:" + wrongInputFloor + " wrongInputCeiling:" + wrongInputCeiling)
		if (h_greater || h_else || h_undefined){
			document.getElementById("bounceInfo").innerHTML = "@Height Enter a height > 1";
			document.getElementById("bounceInfo").style.display = "";
		}else if(h_silly){
			document.getElementById("bounceInfo").innerHTML = "@Height Silly..";
			document.getElementById("bounceInfo").style.display = "";
		};
		if (c_greater || c_else || c_undefined){
			document.getElementById("ceilingInfo").innerHTML = "@Ceiling Enter a height > 63";
			document.getElementById("ceilingInfo").style.display = "";
		}else if(c_silly){
			document.getElementById("ceilingInfo").innerHTML = "@Ceiling Silly..";
			document.getElementById("ceilingInfo").style.display = "";
		};
		if (a_range){
			document.getElementById("angleInfo").innerHTML = "∠ Nearest angle should be 45 < x < 89";
			document.getElementById("angleInfo").style.display = "";
		}else if(a_number){
			document.getElementById("angleInfo").innerHTML = "∠ Nearest angle needs to be a number";
			document.getElementById("angleInfo").style.display = "";
		};
		return 0;
	}
	//console.log("wrongInputFloor:" + wrongInputFloor + " wrongInputAngle:" + wrongInputAngle + " h_else:" + h_else + " c_else:" + c_else)
	
	// 
	var f_h = 0 - floor_height;
	
if (document.getElementById("chk_bouncesCheck").checked && !wrongInputFloor) {
	// Calculate default bounce results
	var walkOutU = "";
	var walkOutC = "";
	var jumpOutU = "";
	var jumpOutC = "";
	var ctapOutU = "";
	var ctapOutC = "";
	var cjumpOutU = "";
	var cjumpOutC = "";
	var cwalkOutU = "";
	var cwalkOutC = "";
	var bounceFound = 0;
	
	var ceilingResult = checkCeilings(ceiling_gap, true);
	var bounceResult = checkBounces(floor_height, true);
	if (ceilingResult[0] == 0 && bounceResult[0] == 0 && !wrongInputFloor) {
		document.getElementById("bounceResults_txt").innerHTML = "No jumpbug found";
		document.getElementById("bounceResults").style.display = "";
	} else if (!wrongInputFloor) { 
		bounceFound = 1;
		document.getElementById("bounceResults_txt").innerHTML = "This height can be jumpbugged with";
		document.getElementById("bounceResults").style.display = "";
		document.getElementById("bounceResultsU").style.display = "";
		document.getElementById("bounceResultsC").style.display = "";
		if (bounceResult[1] == 1) {walkOutU = "<tr><td class='text-right' style='color:green'>Walk</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Jumpbug</td></tr>"
		}else if (bounceResult[1] == 2) {walkOutU = "<tr><td class='text-right' style='color:#28bbbb'>Walk</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Jumpbug (doublebouncehop)</td></tr>"};
		//if (bounceResult[2] == 1) {walkOutC = "<tr><td class='text-right' style='color:green'>Walk</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		if (bounceResult[3] == 1) {jumpOutU = "<tr><td class='text-right' style='color:green'>Jump</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Jumpbug</td></tr>"
		}else if (bounceResult[3] == 2) {jumpOutU = "<tr><td class='text-right' style='color:#28bbbb'>Jump</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Jumpbug (doublebouncehop)</td></tr>"};
		//if (bounceResult[4] == 1) {jumpOutC = "<tr><td class='text-right' style='color:green'>Jump</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		if (bounceResult[5] == 1) {ctapOutU = "<tr><td class='text-right' style='color:green'>Ctap</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Jumpbug</td></tr>"
		}else if (bounceResult[5] == 2) {ctapOutU = "<tr><td class='text-right' style='color:#28bbbb'>Ctap</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Jumpbug (doublebouncehop)</td></tr>"};
		//if (bounceResult[6] == 1) {ctapOutC = "<tr><td class='text-right' style='color:green'>Ctap</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		if (bounceResult[7] == 1) {cjumpOutU = "<tr><td class='text-right' style='color:green'>Crouch Jump</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Jumpbug</td></tr>"
		}else if (bounceResult[7] == 2) {cjumpOutU = "<tr><td class='text-right' style='color:#28bbbb'>Crouch Jump</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Jumpbug (doublebouncehop)</td></tr>"};
		//if (bounceResult[8] == 1) {cjumpOutC = "<tr><td class='text-right' style='color:green'>Crouch Jump</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		if (bounceResult[9] == 1) {cwalkOutU = "<tr><td class='text-right' style='color:green'>Crouch Walk</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Jumpbug</td></tr>"
		}else if (bounceResult[9] == 2) {cwalkOutU = "<tr><td class='text-right' style='color:#28bbbb'>Crouch Walk</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Jumpbug (doublebouncehop)</td></tr>"};
		//if (bounceResult[10] == 1) {cwalkOutC = "<tr><td class='text-right' style='color:green'>Crouch Walk</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		document.getElementById("bounceTipsU").innerHTML = (walkOutU) + (jumpOutU) + (ctapOutU) + (cjumpOutU) + (cwalkOutU);
		//document.getElementById("bounceTipsC").innerHTML = (walkOutC) + (jumpOutC) + (ctapOutC) + (cjumpOutC) + (cwalkOutC);
	}
	
	//console.log("walkOutU, walkOutC, jumpOutU, jumpOutC, ctapOutU, ctapOutC, cjumpOutU, cjumpOutC, cwalkOutU, cwalkOutC, ceilingOutU, ceilingOutC");
	
	var ceilingOutU = "";
	var ceilingOutC = "";
	var ceilingFound = 0;
	
	if (bounceResult[0] == 0 && ceilingResult[0] == 0 && !wrongInputCeiling) {
		//document.getElementById("ceilingResults").innerHTML = "<h3>No ceilingsmash found</h3>";
		document.getElementById("bounceResults_txt").innerHTML = "No jumpbug found";
		document.getElementById("bounceResults").style.display = "";
	} else if (!wrongInputCeiling) { 
		ceilingFound = 1;
		//document.getElementById("ceilingResults").innerHTML = "<h3>" + "This height can be ceilingsmashed with:" + "</h3>";
		document.getElementById("bounceResults_txt").innerHTML = "This height can be jumpbugged with";
		document.getElementById("bounceResults").style.display = "";
		document.getElementById("bounceResultsU").style.display = "";
		document.getElementById("bounceResultsC").style.display = "";
		if (ceilingResult[1] == 1) {ceilingOutU = "<tr><td class='text-right' style='color:green'>Ceilingsmash</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Jumpbug</td></tr>"
		}else if (ceilingResult[1] == 2) {ceilingOutU = "<tr><td class='text-right' style='color:#28bbbb'>Ceilingsmash</td><td style='width: 46px; color:#28bbbb'> -&gt; </td><td class='text-left' style='color:#28bbbb'>Jumpbug (doublebouncehop)</td></tr>"};
		//if (ceilingResult[2] == 1) {ceilingOutC = "<tr><td class='text-right' style='color:green'>Ceilingsmash</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"};
		document.getElementById("bounceTipsU").innerHTML += (ceilingOutU);
		//document.getElementById("bounceTipsC").innerHTML += (ceilingOutC);
	}
}
	
	if (document.getElementById("chk_angleCheck").checked && !wrongInputFloor) {
		
		//console.log("Calculate results")
		
		// Calculate results
		// Stock
		if (!document.getElementById("rad_stock").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "STOCK", "UNCROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angled bounce found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Stock) Uncrouched</td><td id='td_cA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "STOCK", "UNCROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Stock) Uncrouched</td><td id='td_cA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_cA_ba1_C").innerHTML = ba1;
					//	document.getElementById("td_cA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "STOCK", "CROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Stock) Crouched</td><td id='td_cA_ba1_C_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "STOCK", "CROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Stock) Crouched</td><td id='td_cA_ba1_C_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_cA_ba1_C_C").innerHTML = ba1;
					//	document.getElementById("td_cA_ba2_C_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Original
		if (!document.getElementById("rad_original").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "ORIGINAL", "UNCROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Original) Uncrouched</td><td id='td_cA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "ORIGINAL", "UNCROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Original) Uncrouched</td><td id='td_cA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_cA_ba1_C").innerHTML = ba1;
					//	document.getElementById("td_cA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "ORIGINAL", "CROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Original) Crouched</td><td id='td_cA_ba1_C_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "ORIGINAL", "CROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Original) Crouched</td><td id='td_cA_ba1_C_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_cA_ba1_C_C").innerHTML = ba1;
					//	document.getElementById("td_cA_ba2_C_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Cowmangler
		if (!document.getElementById("rad_cowmangler").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLER", "UNCROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler) Uncrouched</td><td id='td_cA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLER", "UNCROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler) Uncrouched</td><td id='td_cA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_cA_ba1_C").innerHTML = ba1;
					//	document.getElementById("td_cA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLER", "CROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler) Crouched</td><td id='td_cA_ba1_C_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLER", "CROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler) Crouched</td><td id='td_cA_ba1_C_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_cA_ba1_C_C").innerHTML = ba1;
					//	document.getElementById("td_cA_ba2_C_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Cowmangler Charged
		if (!document.getElementById("rad_cowmanglercharged").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLERCHARGED", "UNCROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler Charged) Uncrouched</td><td id='td_cA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLERCHARGED", "UNCROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler Charged) Uncrouched</td><td id='td_cA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_cA_ba1_C").innerHTML = ba1;
					//	document.getElementById("td_cA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLERCHARGED", "CROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler Charged) Crouched</td><td id='td_cA_ba1_C_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_cA_ba1_C_Un").innerHTML = ba1;
						document.getElementById("td_cA_ba2_C_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateAngle(floor_height, nearestAngle, "COWMANGLERCHARGED", "CROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Custom Angle (Cow Mangler Charged) Crouched</td><td id='td_cA_ba1_C_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_cA_ba2_C_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_cA_ba1_C_C").innerHTML = ba1;
					//	document.getElementById("td_cA_ba2_C_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
	}
	
if (document.getElementById("chk_angleCheck").checked && !wrongInputFloor) {
		
		//console.log("Calculate results")
		
		// Calculate results
		// Stock
		if (!document.getElementById("rad_stock").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateOptimalAngle(floor_height, "STOCK", "UNCROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Stock) Uncrouched</td><td id='td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "STOCK", "UNCROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Stock) Uncrouched</td><td id='td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_bA_ba1_C").innerHTML = ba1;
					//	document.getElementById("td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "STOCK", "CROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Stock) Crouched</td><td id='cr_td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "STOCK", "CROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Stock) Crouched</td><td id='cr_td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("cr_td_bA_ba1_C").innerHTML = ba1;
					//	document.getElementById("cr_td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Original
		if (!document.getElementById("rad_original").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateOptimalAngle(floor_height, "ORIGINAL", "UNCROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Original) Uncrouched</td><td id='td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "ORIGINAL", "UNCROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Original) Uncrouched</td><td id='td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_bA_ba1_C").innerHTML = ba1;
					//	document.getElementById("td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "ORIGINAL", "CROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Original) Crouched</td><td id='cr_td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "ORIGINAL", "CROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Original) Crouched</td><td id='cr_td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("cr_td_bA_ba1_C").innerHTML = ba1;
					//	document.getElementById("cr_td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Cowmangler
		if (!document.getElementById("rad_cowmangler").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLER", "UNCROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler) Uncrouched</td><td id='td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLER", "UNCROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler) Uncrouched</td><td id='td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_bA_ba1_C").innerHTML = ba1;
					//	document.getElementById("td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLER", "CROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler) Crouched</td><td id='cr_td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLER", "CROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler) Crouched</td><td id='cr_td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("cr_td_bA_ba1_C").innerHTML = ba1;
					//	document.getElementById("cr_td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
		// Cowmangler Charged
		if (!document.getElementById("rad_cowmanglercharged").classList.contains("invert-active")) {
			//console.log("rad_stock")
				//console.log("rad_startUn")
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLERCHARGED", "UNCROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler Charged) Uncrouched</td><td id='td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLERCHARGED", "UNCROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler Charged) Uncrouched</td><td id='td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("td_bA_ba1_C").innerHTML = ba1;
					//	document.getElementById("td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLERCHARGED", "CROUCHED", "UNCROUCHED", true);
					if (bounceAngleResult[0] == 0) {
						//console.log("No angeled jumpbug found")
						document.getElementById("divID_DiffTitle").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_Un").style.display = "none";
					} else { 
						//console.log("Angeled bounce found")
						var ba1 = bounceAngleResult[0];
						var ba2 = bounceAngleResult[1];
						// Land Uncrouched
						//document.getElementById("divID_DiffTitleDescUn").style.display = "inline";
						document.getElementById("divID_DiffTitleDescUn").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler Charged) Crouched</td><td id='cr_td_bA_ba1_Un' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_Un' class='text-left' style='color:green'>(ba2)</td></tr>";
						document.getElementById("cr_td_bA_ba1_Un").innerHTML = ba1;
						document.getElementById("cr_td_bA_ba2_Un").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_Un").style.display = "";
						document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
						document.getElementById("divID_DiffTitle").style.display = "";
					}
				
					var bounceAngleResult = calculateOptimalAngle(floor_height, "COWMANGLERCHARGED", "CROUCHED", "CROUCHED", true);
					if (bounceAngleResult[0] == 0) {
					//	document.getElementById("divID_DiffTitle").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "No angeled jumpbug found";
						document.getElementById("divID_Diff_cA_C").style.display = "none";
					} else {
					//	var ba1 = bounceAngleResult[0];
					//	var ba2 = bounceAngleResult[1];
					//	// Land Crouched
					//	//document.getElementById("divID_DiffTitleDesc").style.display = "inline";
					//	document.getElementById("divID_DiffTitleDescC").innerHTML += "<tr><td class='text-right' style='color:green'>Biggest Angle (Cow Mangler Charged) Crouched</td><td id='cr_td_bA_ba1_C' class='text-center' style='width: 46px; color:green'>(ba1)</td><td id='cr_td_bA_ba2_C' class='text-left' style='color:green'>(ba2)</td></tr>";
					//	document.getElementById("cr_td_bA_ba1_C").innerHTML = ba1;
					//	document.getElementById("cr_td_bA_ba2_C").innerHTML = ba2;
						document.getElementById("divID_Diff_cA_C").style.display = "";
					//	document.getElementById("divID_DiffTitle_txt").innerHTML = "Jumpbugs";
					//	document.getElementById("divID_DiffTitle").style.display = "";
					}
		}
	}
	
	// Deal with "special" start bounce types
	if (document.getElementById("chk_specialCheck").checked && !wrongInputFloor) {
	
		// Enable Display
		document.getElementById("divID_specialTitle").style.display = "";
		document.getElementById("divID_specialTitle_txt").innerHTML = "Special Start";
		
		var specialFound = 0;
		var specialDisplayUn = "";
		var specialDisplayC = "";
		
		if (!document.getElementById("rad_stock").classList.contains("invert-active")) {
			var rl_type = "stock";
		} else if (!document.getElementById("rad_original").classList.contains("invert-active")) {
			var rl_type = "original";
		} else if (!document.getElementById("rad_cowmangler").classList.contains("invert-active")) {
			var rl_type = "cowmangler";
		} else if (!document.getElementById("rad_cowmanglercharged").classList.contains("invert-active")) {
			var rl_type = "cowmanglercharged";
		}
		
		for (var specialType in bounceSpecialVel) {
			if (bounceSpecialVel.hasOwnProperty(specialType)) {
				if (findSpecialBounce(f_h, specialType, "UNCROUCHED", true)) {
					if(bounceSpecialVel[specialType]["RL_type"] == rl_type) {
						//specialDisplay += bounceSpecialVel[specialType]['text'] + " -&gt; " + "Land Uncrouched ";
						//specialDisplayUn +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Jumpbug</td></tr>"
						if (typeof(bounceSpecialVel[specialType]["note"] ) !== "undefined") {
						//	specialDisplay += bounceSpecialVel[specialType]["note"];
							specialDisplayUn +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Jumpbug " + bounceSpecialVel[specialType]["note"] + "</td></tr>"
						}else{
							specialDisplayUn +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Jumpbug</td></tr>"
						}
						//specialDisplay += "<br />\n";
						specialFound = 1;
					}
				}
				//else if (findSpecialBounce(f_h, specialType, "CROUCHED", true)) {
				//	if(bounceSpecialVel[specialType]["RL_type"] == rl_type) {
				//		//specialDisplay += bounceSpecialVel[specialType]["text"] + " -&gt; " + "Land Crouched ";
				//		//specialDisplayC +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"
				//		if (typeof(bounceSpecialVel[specialType]["note"] ) !== "undefined") {
				//		//	specialDisplay += bounceSpecialVel[specialType]["note"];
				//			specialDisplayC +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched " + bounceSpecialVel[specialType]["note"] + "</td></tr>"
				//		}else{
				//			specialDisplayC +="<tr><td class='text-right' style='color:green'>" + (bounceSpecialVel[specialType]['text']) + "</td><td style='width: 46px; color:green'> -&gt; </td><td class='text-left' style='color:green'>Crouched</td></tr>"
				//		}
				//		//specialDisplay += "<br />\n";
				//		specialFound = 1;
				//	}
				//}
			}
		}
		
		if (specialFound) {
			//document.getElementById("divID_specialBounce").innerHTML = specialDisplay;
			document.getElementById("bounceTipsSpecialU").innerHTML = specialDisplayUn;
			//document.getElementById("bounceTipsSpecialC").innerHTML = specialDisplayC;
			document.getElementById("specialResultsU").style.display = "";
			document.getElementById("specialResultsC").style.display = "";
		} else {
			document.getElementById("divID_specialTitle_txt").innerHTML = "No special start found";
		}
	}
}


function toggle_chkBox(chkBoxID)
{
	if (document.getElementById(chkBoxID).checked) {
		document.getElementById(chkBoxID).checked = false;
		if (chkBoxID == "chk_bouncesCheck"){
			document.getElementById("bounceResults").style.display = "none";
			document.getElementById("bounceResultsU").style.display = "none";
			document.getElementById("bounceResultsC").style.display = "none";
		}
	}
	else {
		document.getElementById(chkBoxID).checked = true;
		if (chkBoxID == "chk_bouncesCheck"){
			document.getElementById("bounceResults").style.display = "";
			document.getElementById("bounceResultsU").style.display = "";
			document.getElementById("bounceResultsC").style.display = "";
		}
	}
	
	
	
	
	
	//document.getElementById("divID_specialTitle_txt").innerHTML = "";
	//document.getElementById("chk_bouncesCheck").checked
	//document.getElementById("bounceResults_txt").style.display = "none";
}

function set_launcher(setLauncherID)
{
	document.getElementById("rad_stock").classList.add("invert-active");
	document.getElementById("rad_original").classList.add("invert-active");
	document.getElementById("rad_cowmangler").classList.add("invert-active");
	document.getElementById("rad_cowmanglercharged").classList.add("invert-active");
	document.getElementById(setLauncherID).classList.remove("invert-active");
	m();
}

function pageNavi(pageNaviID)
{
	if (pageNaviID == "navLink_jumpbug"){
		document.getElementById(pageNaviID).classList.add("active,pl-2,pr-2");
		document.getElementById("navItem_jumpbug").classList.add("active");
		document.getElementById("navLink_bounce").classList.remove("active,pl-2,pr-2");
		document.getElementById("navItem_bounce").classList.remove("active");
		m();
	}
	if (pageNaviID == "navLink_bounce"){
		document.getElementById(pageNaviID).classList.add("active,pl-2,pr-2");
		document.getElementById("navItem_bounce").classList.add("active");
		document.getElementById("navLink_jumpbug").classList.remove("active,pl-2,pr-2");
		document.getElementById("navItem_jumpbug").classList.remove("active");
		m();
	}
}

// Check textboxes to see if enter was pressed, then call m
//function checkEnterPress(keypressed)
//{
//	if (keypressed.keyCode == 13) {
//		m();
//	}
//	return false;
//}

