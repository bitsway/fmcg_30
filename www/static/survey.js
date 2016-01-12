
var mobile_off_flag=0;

function reload_function() {
	location.reload();
}
//-------GET GEO LOCATION
function getLocationInfo() { //location
	$("#wait_image_visit_submit").show()
	$("#visit_submit").hide();
	$("#btn_location").hide();
	
	$("#checkLocation").html(''); 
	$("#checkLocationProfileUpdate").html('');
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocationshom
function onSuccess(position) {
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	$("#lat_p").val(position.coords.latitude);
	$("#long_p").val(position.coords.longitude);
	
	$("#errorChkVSubmit").html('');
	$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	$("#checkLocation").html('Location Confirmed'); 
	$("#checkLocationProfileUpdate").html('Location Confirmed');
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#btn_location").hide();
		
} function onError(error) {
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	
	$("#checkLocation").html('Location not found');
	$("#checkLocationProfileUpdate").html('Location not found');
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#btn_location").show();	
	}

//set confirm page
function set_confirm_page(){
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#btn_location").show();
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	$("#checkLocation").html('');	
}

// -------------- If Not synced, Show login
function first_page(){
	if ((localStorage.synced!='YES')){
		var url = "#login";
		$.mobile.navigate(url);		
	}else{
		var url = "#pageHome";
		$.mobile.navigate(url);		
	}
}

// -------------- visit page show if mobile off 
function cancelVisitPage(){
	localStorage.visit_page=""
	mobile_off_flag=0;
	
	localStorage.visitMarketStr=""
	localStorage.visit_distributor_nameid=""
	localStorage.visit_type=""
	localStorage.scheduled_date="" 
	localStorage.visit_client=""
	
	localStorage.productListStr='';
	localStorage.product_tbl_cart='';
	cancel_cart();
	
	$(".visit_client").html('');
	$("#profile_client_id").val('');
	
	var url = "#pageHome";
	$.mobile.navigate(url);

}

//================= Clear authorization
function clear_autho(){	
	var check_clear=$("input[name='clear_auth_check']:checked").val();
	
	if(check_clear!='Yes'){
		$("#error_login").html("Required Confirm Clear");			
	}else{
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.cid='';
		localStorage.user_id='';
		localStorage.user_pass='';
		localStorage.synccode='';
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	
		localStorage.synced=''
		
		localStorage.client_string=''	
		localStorage.visit_client=''
		localStorage.client_string=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''		
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.delivery_date=''
		
		localStorage.productOrderStr=''
				
		//localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//------
		localStorage.brand_list_string=''
		
		localStorage.visit_page=""
		
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		
		localStorage.productppmStr='';
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		localStorage.productOrder_change=''
		
		localStorage.report_button='';	
		localStorage.market_client=''
		localStorage.menu='';
		localStorage.ppm_string='';
		localStorage.user_type='';
		
		localStorage.saved_data_submit = 0;
		localStorage.visit_save = '';
		localStorage.saved_data_show = '';
		
		localStorage.payment_mode_get='';
		
		var url = "#login";
		$.mobile.navigate(url);	
		location.reload();
	};
}

function get_login() {
	var url = "#login";
	$.mobile.navigate(url);
	}

							
//========================= Longin: Check user
function check_user() {
	
	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	
	//Main
	
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/mrepgh/syncmobile_order_to_delivery_gh/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	
    var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_live_20150502/get_path?CID='+cid +'&HTTPPASS=e99business321cba'
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	var base_url='';
	var photo_url='';
	
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	

		localStorage.client_string=''	
		localStorage.visit_client=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''		
		localStorage.clientProfileStr=''
		
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.delivery_date=''
		
		localStorage.productOrderStr=''
				
		//localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//------
		localStorage.brand_list_string=''
		localStorage.visit_page=""
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		localStorage.market_client=''
		
		
		localStorage.menu='';
													
		localStorage.ppm_string='';
		
		localStorage.user_type='';
		
		localStorage.report_button='';
		
		localStorage.visit_save=''; //Saved visit data
		localStorage.save_visit_limit=0;
		localStorage.saved_data_submit = 0;
		
		localStorage.delivery_date='';
		localStorage.payment_date='';
		localStorage.payment_mode='';
		
		localStorage.payment_mode_get='';
		
		localStorage.visit_location_flag='';
													
		localStorage.delivery_date_flag='';
		localStorage.payment_date_flag='';
		localStorage.payment_mode_flag='';
		
	//-----
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		var url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
		//-----------------
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		//alert(apipath_base_photo_dm);
		$("#loginButton").hide();
		$("#wait_image_login").show();
		
		//----
		$.ajax({
			 type: 'POST',
			 url: apipath_base_photo_dm,
			 success: function(result) {	
			 		
				if (result==''){
					$("#wait_image_login").hide();
					$("#loginButton").show();
					$("#error_login").html('Base URL not available');						
				}else{
					var startIndex=result.indexOf('<start>')
					var endIndex=result.indexOf('<end>')
					
					var urlResult=result.substring(startIndex+7,endIndex);
					
					var resultArray = urlResult.split('<fd>');		
					if(resultArray.length==3){
						base_url=resultArray[0]
						photo_url=resultArray[1]
						photo_submit_url=resultArray[2]
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#error_login").html('Base URL not available');	
						}else{
							//--------------------------
							clear_autho();
							$("#error_login").html("");		
							$("#loginButton").hide();
							$("#wait_image_login").show();
							
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
							
						//	$("#error_login").html(localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
							//http://127.0.0.1:8000/lscmreporting/syncmobile/check_user?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=
							
							$.ajax({
									 type: 'POST',
									 url: localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
									 success: function(result) {
											
											if (result==''){
												$("#wait_image_login").hide();
												$("#loginButton").show();
												$("#error_login").html('Sorry Network not available');
												
											}else{							
												var resultArray = result.split('<SYNCDATA>');			
												if (resultArray[0]=='FAILED'){
													$("#wait_image_login").hide();
													$("#loginButton").show();								
													$("#error_login").html(resultArray[1]);
													
												}else if (resultArray[0]=='SUCCESS'){
													
													localStorage.synccode=resultArray[1];
													localStorage.marketListStr=resultArray[2];
													//alert (resultArray[2]);
													localStorage.productListStr=resultArray[3];
													localStorage.marchandizingItem=resultArray[4];
													localStorage.distributorListStr=resultArray[5];								
													localStorage.brand_list_string=resultArray[6];
													
													localStorage.complain_type_string=resultArray[7];
													localStorage.complain_from_string=resultArray[8];
													localStorage.task_type_string=resultArray[9];
													region_string=resultArray[10];
													localStorage.gift_string=resultArray[11];
													localStorage.clientCat_string=resultArray[12];
													
													localStorage.market_client=resultArray[13];
													
													localStorage.menu=resultArray[14];
													
													localStorage.ppm_string=resultArray[15];
													
													localStorage.user_type=resultArray[16];
													
													localStorage.market_doctor=resultArray[17];
													
													localStorage.save_visit_limit=resultArray[18];
													
													localStorage.visit_location_flag=resultArray[19];
													
													localStorage.delivery_date_flag=resultArray[20];
													localStorage.payment_date_flag=resultArray[21];
													localStorage.payment_mode_flag=resultArray[22];
													
													localStorage.repStr_report=resultArray[23];
													localStorage.marketLevelStr=resultArray[24];
													
												//	==============Set menu start================\
												
												var menuList=localStorage.menu.split('<rd>');
												var menuLength=menuList.length;
												var menu_str=''
												var order_report="No"
												for (var j=0; j < menuLength; j++){
													var single_menu_list = menuList[j].split('<fd>');
													var s_key=single_menu_list[0]
													var s_value=single_menu_list[1]
													if (s_value=='YES'){
															 //alert (s_key);	
															 menu_str=menu_str+'<a id="sub_button" data-role="button" style="height:100px;" onClick="'+s_key+'()" ><img style="padding-top:0px; padding-bottom:0px;" src="'+s_key+'.png"></a>'

														if (s_key=="chemist_visit"){
															 order_report="Yes"															
														}
														
													}
													
												}
												
												localStorage.menu_list=menu_str;
												
												$('#menu_show').empty();
												$('#menu_show').append(localStorage.menu_list).trigger('create');
												
												//=============set menu end================
													
													var productList=localStorage.productListStr.split('<rd>');
													var productLength=productList.length;
													
													//------------ Order Item list								
													
													if (order_report=="Yes"){
														reportListStr='<a data-role="button" onClick="order_detail_report();" >Order Details Report</a>'
														reportListStr+='<a data-role="button" onClick="order_summary_report();" >Order Summary Report</a>'
														reportListStr+='<a data-role="button" onClick="segment_wise_report();" >Segment Wise Report</a>'
														reportListStr+='<a data-role="button" onClick="sku_wise_report();" >SKU Wise Report</a>'
														reportListStr+='<a data-role="button" onClick="freezer_efficiency_report();" >Freezer Efficiency Report</a>'
														localStorage.report_button=reportListStr
													
													}
													$('#order_report_button').empty();
													$('#order_report_button').append(localStorage.report_button).trigger('create');
													
													
													var product_tbl_order='<ul id="item_combo_id_lv" data-role="listview" data-filter="true" data-input="#item_combo_id" data-inset="true" >'
													for (var j=0; j < productLength; j++){
														var productArray2 = productList[j].split('<fd>');
														var product_id2=productArray2[0];	
														var product_name2=productArray2[1];
														var product_price=productArray2[2];
														
														var product_qty='';	
														product_tbl_order=product_tbl_order+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="orderProduct" maxlength="4" onBlur="getOrderData_keyup(\''+product_id2+'\')" type="number" id="order_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="order_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="order_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="order_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>'
														
													}
													product_tbl_order=product_tbl_order+'</ul>';//</table>';
													localStorage.product_tbl_str=product_tbl_order
													
													$("#product_list_tbl").html(localStorage.product_tbl_str);
													
													//==========Combo for report Start
													market_list_combo();
													item_list_combo();
													mpo_list_combo()
													//==========Combo for report End
													
													//--------- Delivery Item List								
													var product_tbl_delevery='<table border="0" id="delevery_tbl" cellpadding="0" cellspacing="0" style="background-color:#F7F7F7; border-radius:5px;">';
													for (var i=0; i < productLength; i++){
														var productArray = productList[i].split('<fd>');
														var product_id=productArray[0];	
														var product_name=productArray[1];
														
														
														product_tbl_delevery+='<tr  style="border-bottom:1px solid #D2EEE9;"><td width="40%" style="text-align:center; padding-left:5px;"><input type="number" id="delivery_qty'+product_id+'" value="" placeholder="0" ><input type="hidden" id="order_id'+product_id+'" value="'+product_id+'" ><input type="hidden" id="delivery_id'+product_id+'" value="'+product_id+'" placeholder="qty" ><input type="hidden" id="delivery_name'+product_id+'" value="'+product_name+'" placeholder="qty" ></td><td width="60%" style="text-align:left;">&nbsp;&nbsp;'+product_name+'</td></tr>';
													}
													product_tbl_delevery+='</table>';								
													localStorage.product_tbl_del_str=product_tbl_delevery
													
													//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													var planMarketList = localStorage.marketListStr.split('<rd>');
													var planMarketListShowLength=planMarketList.length	
													
													//var profileMarketComb='';								
													var unscheduleMarketComb='';
													
													for (var k=0; k < planMarketListShowLength; k++){
														var planMarketValueArray = planMarketList[k].split('<fd>');
														planMarketID=planMarketValueArray[0];
														planMarketName=planMarketValueArray[1];
														marketID=planMarketID
														marketName=planMarketName
														var marketNameID=planMarketName+'|'+planMarketID;
														//alert (marketNameID);
														if(planMarketID!=''){
															unscheduleMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															//profileMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextCProfileLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															}
													}
																					
													localStorage.unschedule_market_cmb_id=unscheduleMarketComb
													//localStorage.market_cmb_list_cp=profileMarketComb;
													
													client_catList();	

													//---------------
													$("#error_login").html('');
													$("#wait_image_login").hide();
													$("#loginButton").show();
													
													//----------------
													localStorage.visit_page=""
													
													
													$("#se_mpo").val(localStorage.user_id);
													//alert (localStorage.user_id); 
													
													//alert (localStorage.ppm_show_1);
																		
													localStorage.synced='YES';
													var url = "#pageHome";
													$.mobile.navigate(url);								
													location.reload();												
													
												}else{
													$("#wait_image_login").hide();
													$("#loginButton").show();
													$("#error_login").html('Network Timeout. Please try again.');							
													}
											}
										  },
									  error: function(result) {					 
										  $("#wait_image_login").hide();
										  $("#loginButton").show();
										  $("#error_login").html('Network Timeout. Please try again.');
										
										  
										  var url = "#login";
										  $.mobile.navigate(url);	
									  }
								  });//end ajax
								}//base url check
						//alert ('nadira');
						//-------------		
					}else{
						$("#wait_image_login").hide();
						$("#loginButton").show();
						$("#error_login").html('Login Failed. Please Check CID, UserID, Password.');	
					}
					
				}
			  },
			  error: function(result) {			  	   
				 // alert ('nadira');
				  $("#wait_image_login").hide();
				  $("#loginButton").show();
				  $("#error_login").html('Network  Timeout. Please Check Internet Connection');	
				
			  }
		});//end ajax
		
		//alert(base_url+','+photo_url+'2');
		
		
		  }//end else	
	}//function

function getOtherOutlet(){	
	if (mobile_off_flag==1){
		mobile_off_flag=0;
		
		var url = "#pageHome";
		$.mobile.navigate(url);
		
	}else{
		var visit_type=localStorage.visit_type;
		//alert(visit_type);
		if (visit_type=="Scheduled"){
			var url = "#page_scheduled";
			$.mobile.navigate(url);
			
		}else if(visit_type=="Unscheduled"){
			var url = "#page_market_ret";
			$.mobile.navigate(url);
		};
	};
}

//------------------------------Unsheduled visit: market
function addMarketList() {
	$("#unschedule_market_combo_id").val('');
	var unschedule_market_combo_list=localStorage.unschedule_market_cmb_id;
	//---
	var unschedule_market_combo_ob=$('#unschedule_market_combo_id_lv');
	unschedule_market_combo_ob.empty()
	unschedule_market_combo_ob.append(unschedule_market_combo_list);
	
	//-------	
	var url = "#page_market";
	$.mobile.navigate(url);
	unschedule_market_combo_ob.listview("refresh");
}

//--------------------------------- Unsheduled visit: Client list by market id

function marketNextLV(lvalue) {	
	$("#unschedule_market_combo_id").val(lvalue);	
	if (localStorage.user_type=='rep'){
		marketNext();	
	}else{
		marketNext_sup();	
	}
}

function marketNext(){
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			var catType=$("#catCombo").val();
			
			//===========================Get market client list Start============================
			market_list=localStorage.market_client;
			if (market_list.indexOf(market_Id)==-1){
					$("#err_market_next").text("Sorry Network not available");	
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
			}else{					
					var resultArray_0 = market_list.split('<'+market_Id+'>');	
					var resultArray_1 = resultArray_0[1].split('</'+market_Id+'>');	
					var m_client_string = resultArray_1[0];	
					
					if 	(m_client_string=='Retailer not available'){
						$("#err_market_next").text("Retailer not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();						
					}else{
						//----------------						
						var visit_type="Unscheduled";
						var scheduled_date="";
						
						marketLevelList=localStorage.marketLevelStr
						var resultMarketArray_0 = marketLevelList.split('<'+market_Id+'>');	
						var resultMarketArray_1 = resultMarketArray_0[1].split('</'+market_Id+'>');	
						var market_level_string = resultMarketArray_1[0];	
						var market_levelValueArray = market_level_string.split('<fd>');
						var marketRegion=market_levelValueArray[1]
						var marketArea=market_levelValueArray[2]
						var marketTerritory=market_levelValueArray[3]
						var marketDistribID=market_levelValueArray[4]
						var marketDistribName=market_levelValueArray[5]
						
						//-----------------------------------									
						var mClientList = m_client_string.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							var mClientCat=mClientValueArray[2];
							//alert (catType);
							
							if(mClientID!=''){
								if (catType!=''){
									if (catType==mClientCat){
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									}	
								}else{
									unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
								}	
							}
						 }
					
					var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
					
					unscheduled_m_client_combo_ob.empty()
					unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
													
					$(".market").html(market_name);								
					$(".visit_type").html(visit_type);								
					$(".s_date").html(scheduled_date);
									
					$(".cp_region").html(marketRegion);								
					$(".cp_area").html(marketArea);								
					$(".cp_territory").html(marketTerritory);
					$(".cp_market").html(market_name);
					$(".cp_distributor").html(marketDistribName+'|'+marketDistribID);
					
					$("#cpnew_market").val(market_Id);	
					$("#cpnew_distributor_id").val(marketDistribID);
					$("#cpnew_distributor_name").val(marketDistribName);
					
					localStorage.visit_type=visit_type
					localStorage.scheduled_date=scheduled_date
					
					//-----------------------------------
					$("#err_market_next").text("");
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
					
					//------- 
										
					var url = "#page_market_ret";	
					$.mobile.navigate(url);
					unscheduled_m_client_combo_ob.listview("refresh");
				}
			}//end else
			//============================Get market client list end===============================
		}			
}

function marketNext_sup() {
	$("#unscheduled_m_client_combo_id").val('');	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
	}
	else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
				
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			var catType=$("#catCombo").val();
			
			//===========================Get market client list Start============================
			
			// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType,
				 success: function(result) {
						
						//alert(result);
						if (result==''){
							$("#err_retailer_next").html('Sorry Network not available');
							$("#btn_schedule_ret").show();
							$("#wait_image_schedule_ret").hide();
			
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#err_market_next").text("Retailer not available");	
								$("#wait_image_unschedule_market").hide();		
								$("#btn_unschedule_market").show();
							}
							else if (resultArray[0]=='SUCCESS'){
								var market_levelValueArray = resultArray[1].split('<fd>');
								
								localStorage.market_client=resultArray[2];
								
								var	m_client_string=localStorage.market_client;
			
								var visit_type="Unscheduled";
								var scheduled_date="";										
								//-----------------------------------
								var mClientList = m_client_string.split('<rd>');
								var mClientListShowLength=mClientList.length
								var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
								var unscheduled_m_client_list=''
								for (var i=0; i < mClientListShowLength; i++){
										var mClientValueArray = mClientList[i].split('<fd>');
										var mClientID=mClientValueArray[0];
										var mClientName=mClientValueArray[1];
										var mClientCat=mClientValueArray[2];										
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									}
								var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');						
								var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');							
								unscheduled_m_client_combo_ob.empty()
								unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
							
//								--------------------------
								$(".market").html(market_name);								
								$(".visit_type").html(visit_type);								
								$(".s_date").html(scheduled_date);								
								localStorage.visit_type=visit_type
								localStorage.scheduled_date=scheduled_date
								
								var marketRegion=market_levelValueArray[1]
								var marketArea=market_levelValueArray[2]
								var marketTerritory=market_levelValueArray[3]
								var marketDistribID=market_levelValueArray[4]
								var marketDistribName=market_levelValueArray[5]
								
								$(".cp_region").html(marketRegion);								
								$(".cp_area").html(marketArea);								
								$(".cp_territory").html(marketTerritory);
								$(".cp_market").html(market_name);
								$(".cp_distributor").html(marketDistribName+'|'+marketDistribID);
								
								$("#cpnew_market").val(market_Id);	
								$("#cpnew_distributor_id").val(marketDistribID);
								$("#cpnew_distributor_name").val(marketDistribName);
								
								//-----------------------------------
								$("#err_market_next").text("");
								$("#wait_image_unschedule_market").hide();		
								$("#btn_unschedule_market").show();
								
								//------- 
								
								var url = "#page_market_ret";	
								$.mobile.navigate(url);
								
								unscheduled_m_client_combo_ob.listview("refresh");									
								} //else if
								
						} //else
						
					  },
				  error: function(result) {			  
					 $("#err_retailer_next").html('Sorry Network not available');
					 $("#btn_schedule_ret").show();
					 $("#wait_image_schedule_ret").hide();
				  }
			 });//end ajax
			
		}	//Market required else		
}

//--------------------------------- Unsheduled visit: retailer next
function marketRetailerNextLV(lvalue) {
	$("#unscheduled_m_client_combo_id").val(lvalue);	
	marketRetailerNext();
}

function marketRetailerNext() {
	$("#err_m_retailer_next").text("");
	visit_client=$("#unscheduled_m_client_combo_id").val();		

	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
		}else{	
			visitClientId_list=visit_client.split('|')
			var visitClientId=visit_client.replace(visitClientId_list[0]+"|","");
			
			var visitClientID=visit_client.split('|')[1];
			
			if (localStorage.visit_client !=visitClientID ){
				cancel_cart();

			}
			
			$(".visit_client").html(visit_client);
			//$("#profile_client_id").val(visit_client);
			
			localStorage.visit_client_show=visit_client
			localStorage.visit_client=visit_client.split('|')[1]
			
			localStorage.visit_page="YES"
			//--------
			$("#err_m_retailer_next").text("");
			$("#wait_image_unschedule_market_ret").hide();		
			$("#btn_unschedule_market_ret").show();
			
			if (localStorage.visit_location_flag!='YES'){
				$("#visit_location").hide();
				$("#visit_submit").show();
				
			}
			if (localStorage.delivery_date_flag!='YES'){
				$("#delivery_date_div").hide();
			}
			if (localStorage.payment_date_flag!='YES'){
				$("#payment_date_div").hide();
			}
			if (localStorage.payment_mode_flag!='YES'){
				$("#payment_mode_div").hide();
			}
			
			var url = "#page_visit";
			$.mobile.navigate(url);
		
		}
}





//--------------------------------- Order: Show order from home

function getOrder_load(){	
	var orderProductList=localStorage.productOrderStr.split('<rd>');
	var orderProductLength=orderProductList.length;
	for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
		if(orderProductIdQtyList.length==2){
			var orderProductId=orderProductIdQtyList[0];
			var orderProductQty=orderProductIdQtyList[1];		
			$("#order_qty"+orderProductId).val(orderProductQty);
		}		
	}	
}
function getOrder(){	
	$("#errorChkVSubmit").html('');
	var url = "#page_order";	
	$.mobile.navigate(url);	

}

//--------------------------------- Order: Set Order data
function getOrderData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#order_qty"+product_id).val().replace('.','').substring(0,4);
	$("#order_qty"+product_id).val(pqty);
	
	
	var productOrderStr=localStorage.productOrderStr
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			//alert (productOrderStr)
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
					if (orderProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
							}		
							
					}
					
				}
			}
			
		}
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					}
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					}
					
				}
			}
		}
	
		localStorage.productOrderStr=productOrderStr
	}
		
	//	------------------------------------------------------
	
	}
function getOrderData(){	
	//alert (localStorage.productOrderStr);
	if (localStorage.productOrderStr!=''){
		cart_data();
		var url = "#page_cart";	
		$.mobile.navigate(url);	
	}
	else{		
		var url = "#page_visit";	
		$.mobile.navigate(url);
	}	
}

function replace_special_char(string_value){
	var real_value=string_value.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	return real_value;
}

//-----VISIT SUBMIT
function visitSubmit(){	
	$("#errorChkVSubmit").text("");
	//alert (localStorage.visit_client);
	visitClientId=localStorage.visit_client
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	marketInfoStr=''
	productOrderStr=localStorage.productOrderStr
	marchandizingInfoStr=''
	photoRequired=''
	
	campaign_str=''
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback

	
	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);

	//localStorage.payment_mode_get=$("input[name=payment_mode]:checked").val()
	var payment_mode_get=$("input:radio[name='paymentMode']:checked").val();
	localStorage.payment_mode_get=payment_mode_get;
	var delivery_date=$("#delivery_date").val()
	localStorage.delivery_date=delivery_date;
	
	var payment_date=$("#payment_date").val()
	localStorage.payment_date=payment_date;
	
	
	//alert (localStorage.payment_mode_get);
	var visit_location_error_flag=0;
	
	if (localStorage.visit_location=='YES'){
		if (lat=='' || lat==0 || longitude=='' || longitude==0){
			visit_location_error_flag=1;
			$("#errorChkVSubmit").html('Location not Confirmed');	
			$("#btn_location").show();	
			$("#visit_submit").hide();	
		}
	}
	
	if  ((photoRequired=='Yes') && (lscPhoto=='') && (visit_location_error_flag==0)){
		$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
	}else{
		var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';	
			
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit").html('Invalid Visit Type');
				}else{
					$("#visit_submit").hide();
					$("#wait_image_visit_submit").show();		
					
					//// ajax-------
					//alert (localStorage.payment_mode);
					$.ajax({
						 type: 'POST',
						 url: localStorage.base_url+'visitSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode_get+'&chemist_feedback='+chemist_feedback+'&delivery_date='+localStorage.delivery_date+'&payment_date='+localStorage.payment_date,
						 success: function(result) {
								
								//alert(result);
								if (result==''){					
									$("#errorChkVSubmit").html('Sorry Network not available');
									$("#wait_image_visit_submit").hide();
									$("#visit_submit").show();									
								}else{					
									var resultArray = result.split('<SYNCDATA>');			
									if (resultArray[0]=='FAILED'){						
										$("#errorChkVSubmit").html(resultArray[1]);
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();	
									}else if (resultArray[0]=='SUCCESS'){
										//alert (resultArray[0])
										//-----------
										localStorage.visit_client=''									
										localStorage.productOrderStr='';																				
										localStorage.visit_page="";										
										localStorage.show_total="";										
										$("#chemist_feedback").val('')
										
										//-------------
										// Clear localStorage
											
										localStorage.productOrderStr='';
										cancel_cart();
										if (localStorage.saved_data_submit==1)	{
											var visit_save=localStorage.visit_save;
											var saved_data_show=localStorage.saved_data_show;
											var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")
											localStorage.visit_save=visit_save_data;
											//alert (" replace from saved data");
										}
										
										//--------------------------------------------------------
										$(".visit_client").html('');
										
										$("#errorChkVSubmit").html('');
										$("#lat").val('');
										$("#longitude").val('');
										$("#lscPhoto").val('');
										document.getElementById('myImage').src = '';
										
										$("#lat_p").val('');
										$("#long_p").val('');								
										
										$("#checkLocation").html('');
										$("#checkLocationProfileUpdate").html('');
										
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();
										
										$("#product_total_last").html('');
										$("#product_list_tbl_cart").html('');
										$("#product_total_cart").html('');
										$("#item_combo_id").val('Search');
										
										//--
										$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
										
										$("#btn_location").show();	
										$("#visit_submit").hide();
										$("#checkLocation").hide('');	
										
										var url = "#page_confirm_visit_success";										
										$.mobile.navigate(url);
										
																				
									}else{						
										$("#errorChkVSubmit").html('Network Timeout. Please try again.');
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();								
										}
								}
							  },
						  error: function(result) {			  
								$("#errorChkVSubmit").html('Network Timeout. Please try again.');
								$("#wait_image_visit_submit").hide();
								$("#visit_submit").show();	
						  }
					 });//end ajax	
				}
			}
		}//Photo check if
  }

//------------------- new Client Profile
function newClientRegistration() {
	$(".error_new_client_reg").html('');
	$("#btn_new_registration").show();
	$("#wait_image_new_registration").hide();
	
	$("#cpnew_name").val('')
	$("#cpnew_address").val('')
	$("#cpnew_owner").val('')
	$("#cpnew_owner_contact").val('')
	$("#cpnew_key_contact_person").val('')
	$("#cpnew_key_contact_number").val('')
	//----
	$("#cpnew_freezer_no").val('')
	$("#cpnew_expected_business").val('')
	$("#cpnew_igloo_freezer_qty").val('')
	$("#cpnew_igloo_monthly_business").val('')
	$("#cpnew_polar_freezer_qty").val('')
	$("#cpnew_polar_monthly_business").val('')
	$("#cpnew_bellissimo_freezer_qty").val('')
	$("#cpnew_bellissimo_monthly_business").val('')
	$("#cpnew_kwality_freezer_qty").val('')
	$("#cpnew_kwality_monthly_business").val('')
	$("#cpnew_own_freezer_qty").val('')
	$("#cpnew_own_monthly_business").val('')
	$("#cpnew_other_freezer_qty").val('')
	$("#cpnew_other_monthly_business").val('')
	$("#cpnew_bloop_signature").val('')
	$("#cpnew_shop_identifier").val('')
	$("#cpnew_other_merchandising").val('')
	
	//-------
	var url = "#page_new_client";
	$.mobile.navigate(url);
}
function newClientRegistrationSubmit() {
	$(".error_new_client_reg").html('');
	
	//must
	var cpnew_market=$("#cpnew_market").val()
	var cpnew_distributor_id=$("#cpnew_distributor_id").val()
	var cpnew_distributor_name=$("#cpnew_distributor_name").val()
	
	var cpnew_name=$("#cpnew_name").val()
	var cpnew_address=$("#cpnew_address").val()
	var cpnew_owner=$("#cpnew_owner").val()
	var cpnew_owner_contact=$("#cpnew_owner_contact").val()
	var cpnew_key_contact_person=$("#cpnew_key_contact_person").val()
	var cpnew_key_contact_number=$("#cpnew_key_contact_number").val()
	//----
	
	var cpnew_freezer_no=$("#cpnew_freezer_no").val()
	var cpnew_expected_business=$("#cpnew_expected_business").val()
	var cpnew_igloo_freezer_qty=$("#cpnew_igloo_freezer_qty").val()
	var cpnew_igloo_monthly_business=$("#cpnew_igloo_monthly_business").val()
	var cpnew_polar_freezer_qty=$("#cpnew_polar_freezer_qty").val()
	var cpnew_polar_monthly_business=$("#cpnew_polar_monthly_business").val()
	var cpnew_bellissimo_freezer_qty=$("#cpnew_bellissimo_freezer_qty").val()
	var cpnew_bellissimo_monthly_business=$("#cpnew_bellissimo_monthly_business").val()
	var cpnew_kwality_freezer_qty=$("#cpnew_kwality_freezer_qty").val()
	var cpnew_kwality_monthly_business=$("#cpnew_kwality_monthly_business").val()
	var cpnew_own_freezer_qty=$("#cpnew_own_freezer_qty").val()
	var cpnew_own_monthly_business=$("#cpnew_own_monthly_business").val()
	var cpnew_other_freezer_qty=$("#cpnew_other_freezer_qty").val()
	var cpnew_other_monthly_business=$("#cpnew_other_monthly_business").val()
	var cpnew_bloop_signature=$("#cpnew_bloop_signature").val()
	var cpnew_shop_identifier=$("#cpnew_shop_identifier").val()
	var cpnew_other_merchandising=$("#cpnew_other_merchandising").val()
	
	//------
	if (cpnew_owner_contact=='' || cpnew_owner_contact==undefined){
		cpnew_owner_contact=0
	}else{
		try{
			cpnew_owner_contact=eval(cpnew_owner_contact)
		}catch(e){
			cpnew_owner_contact=0
			}
		}
	if (cpnew_key_contact_number=='' || cpnew_key_contact_number==undefined){
		cpnew_key_contact_number=0
	}else{
		try{
			cpnew_key_contact_number=eval(cpnew_key_contact_number)
		}catch(e){
			cpnew_key_contact_number=0
			}
		}
	
	//---
	if (cpnew_freezer_no=='' || cpnew_freezer_no==undefined){
		cpnew_freezer_no=''
		}
	if (cpnew_expected_business=='' || cpnew_expected_business==undefined){
		cpnew_expected_business=0
	}else{
		try{
			cpnew_expected_business=eval(cpnew_expected_business)
		}catch(e){
			cpnew_expected_business=0
			}
		}
	//-----
	if (cpnew_igloo_freezer_qty=='' || cpnew_igloo_freezer_qty==undefined){
		cpnew_igloo_freezer_qty=0
	}else{
		try{
			cpnew_igloo_freezer_qty=eval(cpnew_igloo_freezer_qty)
		}catch(e){
			cpnew_igloo_freezer_qty=0
			}
		}
	if (cpnew_igloo_monthly_business=='' || cpnew_igloo_monthly_business==undefined){
		cpnew_igloo_monthly_business=0
	}else{
		try{
			cpnew_igloo_monthly_business=eval(cpnew_igloo_monthly_business)
		}catch(e){
			cpnew_igloo_monthly_business=0
			}
		}
	//-----
	if (cpnew_polar_freezer_qty=='' || cpnew_polar_freezer_qty==undefined){
		cpnew_polar_freezer_qty=0
	}else{
		try{
			cpnew_polar_freezer_qty=eval(cpnew_polar_freezer_qty)
		}catch(e){
			cpnew_polar_freezer_qty=0
			}
		}
	if (cpnew_polar_monthly_business=='' || cpnew_polar_monthly_business==undefined){
		cpnew_polar_monthly_business=0
	}else{
		try{
			cpnew_polar_monthly_business=eval(cpnew_polar_monthly_business)
		}catch(e){
			cpnew_polar_monthly_business=0
			}
		}
	//-----
	if (cpnew_bellissimo_freezer_qty=='' || cpnew_bellissimo_freezer_qty==undefined){
		cpnew_bellissimo_freezer_qty=0
	}else{
		try{
			cpnew_bellissimo_freezer_qty=eval(cpnew_bellissimo_freezer_qty)
		}catch(e){
			cpnew_bellissimo_freezer_qty=0
			}
		}
	if (cpnew_bellissimo_monthly_business=='' || cpnew_bellissimo_monthly_business==undefined){
		cpnew_bellissimo_monthly_business=0
	}else{
		try{
			cpnew_bellissimo_monthly_business=eval(cpnew_bellissimo_monthly_business)
		}catch(e){
			cpnew_bellissimo_monthly_business=0
			}
		}
	//-----
	if (cpnew_kwality_freezer_qty=='' || cpnew_kwality_freezer_qty==undefined){
		cpnew_kwality_freezer_qty=0
	}else{
		try{
			cpnew_kwality_freezer_qty=eval(cpnew_kwality_freezer_qty)
		}catch(e){
			cpnew_kwality_freezer_qty=0
			}
		}
	if (cpnew_kwality_monthly_business=='' || cpnew_kwality_monthly_business==undefined){
		cpnew_kwality_monthly_business=0
	}else{
		try{
			cpnew_kwality_monthly_business=eval(cpnew_kwality_monthly_business)
		}catch(e){
			cpnew_kwality_monthly_business=0
			}
		}
	//-----
	if (cpnew_own_freezer_qty=='' || cpnew_own_freezer_qty==undefined){
		cpnew_own_freezer_qty=0
	}else{
		try{
			cpnew_own_freezer_qty=eval(cpnew_own_freezer_qty)
		}catch(e){
			cpnew_own_freezer_qty=0
			}
		}
	if (cpnew_own_monthly_business=='' || cpnew_own_monthly_business==undefined){
		cpnew_own_monthly_business=0
	}else{
		try{
			cpnew_own_monthly_business=eval(cpnew_own_monthly_business)
		}catch(e){
			cpnew_own_monthly_business=0
			}
		}
	//-----
	if (cpnew_other_freezer_qty=='' || cpnew_other_freezer_qty==undefined){
		cpnew_other_freezer_qty=0
	}else{
		try{
			cpnew_other_freezer_qty=eval(cpnew_other_freezer_qty)
		}catch(e){
			cpnew_other_freezer_qty=0
			}
		}
	if (cpnew_other_monthly_business=='' || cpnew_other_monthly_business==undefined){
		cpnew_other_monthly_business=0
	}else{
		try{
			cpnew_other_monthly_business=eval(cpnew_other_monthly_business)
		}catch(e){
			cpnew_other_monthly_business=0
			}
		}
	//-----
	if (cpnew_bloop_signature=='' || cpnew_bloop_signature==undefined){
		cpnew_bloop_signature=''
		}
	if (cpnew_shop_identifier=='' || cpnew_shop_identifier==undefined){
		cpnew_shop_identifier=''
		}
	if (cpnew_other_merchandising=='' || cpnew_other_merchandising==undefined){
		cpnew_other_merchandising=''
		}
	
	//------------------
	if (cpnew_market=='' || cpnew_distributor_id=='' || cpnew_distributor_name==''){
		$(".error_new_client_reg").html('Marke or Distributor not available');
	}else if(cpnew_name==''){
		$(".error_new_client_reg").html('Required Outlet Name');
	}else if(cpnew_address==''){
		$(".error_new_client_reg").html('Required Outlet Address');
	}else if(cpnew_owner==''){
		$(".error_new_client_reg").html('Required Owner Name');
	}else if(cpnew_owner_contact=='' || cpnew_owner_contact==0){
		$(".error_new_client_reg").html('Required Valid Owner Contact Number');
	}else if(cpnew_key_contact_person==''){
		$(".error_new_client_reg").html('Required Key Contact Person');
	}else if(cpnew_key_contact_number=='' || cpnew_key_contact_number==0){
		$(".error_new_client_reg").html('Required Valid Key Contact Number');
	}else{
		lat=0
		longitude=0
		
		/*cpnew_market,cpnew_distributor_id,cpnew_distributor_name,cpnew_name,cpnew_address,cpnew_owner,cpnew_owner_contact,
		cpnew_key_contact_person,cpnew_key_contact_number,cpnew_freezer_no,cpnew_expected_business,
		cpnew_igloo_freezer_qty,cpnew_igloo_monthly_business,cpnew_polar_freezer_qty,cpnew_polar_monthly_business,cpnew_bellissimo_freezer_qty,
		cpnew_bellissimo_monthly_business,cpnew_kwality_freezer_qty,cpnew_kwality_monthly_business,cpnew_own_freezer_qty,
		cpnew_own_monthly_business,cpnew_other_freezer_qty,cpnew_other_monthly_business,cpnew_bloop_signature,cpnew_shop_identifier,cpnew_other_merchandising*/
		
		$("#btn_new_registration").hide();
		$("#wait_image_new_registration").show();		
		
		clientAddStr=cpnew_market+'<fd>'+cpnew_distributor_id+'<fd>'+cpnew_distributor_name+'<fd>'+cpnew_name+'<fd>'+cpnew_address+'<fd>'+cpnew_owner+'<fd>'+cpnew_owner_contact+'<fd>'+
		cpnew_key_contact_person+'<fd>'+cpnew_key_contact_number+'<fd>'+cpnew_freezer_no+'<fd>'+cpnew_expected_business+'<fd>'+
		cpnew_igloo_freezer_qty+'<fd>'+cpnew_igloo_monthly_business+'<fd>'+cpnew_polar_freezer_qty+'<fd>'+cpnew_polar_monthly_business+'<fd>'+cpnew_bellissimo_freezer_qty+'<fd>'+
		cpnew_bellissimo_monthly_business+'<fd>'+cpnew_kwality_freezer_qty+'<fd>'+cpnew_kwality_monthly_business+'<fd>'+cpnew_own_freezer_qty+'<fd>'+
		cpnew_own_monthly_business+'<fd>'+cpnew_other_freezer_qty+'<fd>'+cpnew_other_monthly_business+'<fd>'+cpnew_bloop_signature+'<fd>'+cpnew_shop_identifier+'<fd>'+cpnew_other_merchandising
		
		//alert(localStorage.base_url+'newOutletRegistration?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_data='+encodeURIComponent(clientAddStr)+'&lat='+lat+'&long='+longitude)
		// ajax-------
		$.ajax({
			 type: 'POST',
			 url: localStorage.base_url+'newOutletRegistration?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_data='+encodeURIComponent(clientAddStr)+'&lat='+lat+'&long='+longitude,
			 success: function(result) {
					if (result==''){					
						$(".error_new_client_reg").html('Sorry Network not available');
						$("#wait_image_new_registration").hide();		
						$("#btn_new_registration").show();
						
					}else{					
						var resultArray = result.split('<SYNCDATA>');			
						if (resultArray[0]=='FAILED'){
							$(".error_new_client_reg").html(resultArray[1]);					
							$("#wait_image_new_registration").hide();		
							$("#btn_new_registration").show();
							
						}else if (resultArray[0]=='SUCCESS'){								
							//-----------
							
							clientAddStr=''
							$("#lat_p").val('');
							$("#long_p").val('');								
							/*$("#lscPhotoProfile").val('');
							document.getElementById('myImageProfile').src = '';*/
							
							$("#lat").val('');
							$("#longitude").val('');
														
							$(".error_new_client_reg").html(resultArray[1]);
							$("#wait_image_new_registration").hide();		
							
							//----							
						}else{						
							$(".error_new_client_reg").html('Network Timeout. Please try again.');
							$("#wait_image_new_registration").hide();		
							$("#btn_new_registration").show();
							}
					}
				  },
			  error: function(result) {
				  $(".error_new_client_reg").html('Network Timeout. Please try again.');
				  $("#wait_image_new_registration").hide();		
				  $("#btn_new_registration").show();
			  }
		 });//end ajax
	}
}


//--------------------------------- Client Profile: Client list by market id

function marketRetailerNextCProfile() {
	$("#myerror").html("");
	$("#wait_image_visit_submit").hide();
	$("#btn_update_client").show();
	
	$(".errorProfileUpdate").html('');
	$("#wait_image_profile_update").hide();
	$("#btn_profile_update").show();
	
	var clientId=localStorage.visit_client;		
	
	if(clientId=='' || clientId==0){
		$("#myerror").text("Outlet not available");
	}else{		
		
		$("#wait_image_visit_submit").show();		
		
		/*$("#btn_outlet_info").hide();
		$("#btn_outlet_update").hide();
		$("#btn_last_visit").hide();*/
		 
		//alert(localStorage.base_url+'getClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId)
		// ajax-------
		$.ajax({
			 type: 'POST',
			 url: localStorage.base_url+'getClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId,
			 success: function(result) {
					
					//alert(result);
					if (result==''){					
						$("#myerror").text('Sorry Network not available');
						$("#wait_image_visit_submit").hide();
						/*$("#btn_outlet_info").show();
						$("#btn_outlet_update").show();
						$("#btn_last_visit").show();*/
						
					}else{					
						var resultArray = result.split('<SYNCDATA>');			
						if (resultArray[0]=='FAILED'){						
							$("#myerror").html(resultArray[1]);
							$("#wait_image_visit_submit").hide();
							/*$("#btn_outlet_info").show();
							$("#btn_outlet_update").show();
							$("#btn_last_visit").show();*/
						
						}else if (resultArray[0]=='SUCCESS'){															
							var clientProfileStr=resultArray[1];							
							var clientProfileList=clientProfileStr.split('<fd>')
							
							/*0 client_id + '<fd>1' + cp_name + '<fd>2' + cp_address + '<fd>3' + cp_owner + '<fd>4' + cp_owner_contact + '<fd>5' + cp_key_contact_person + '<fd>6' + cp_key_contact_number + '<fd>7' + cp_freezer_no + '<fd>8' + cp_expected_business + '<fd>9' + cp_igloo_freezer_qty + '<fd>' + \
                10 cp_igloo_monthly_business + '<fd>11' + cp_polar_freezer_qty + '<fd>12' + cp_polar_monthly_business + '<fd>13' + cp_bellissimo_freezer_qty + '<fd>14' + cp_bellissimo_monthly_business + '<fd>15' + cp_kwality_freezer_qty + '<fd>16' + cp_kwality_monthly_business + \
                '<fd>17' + cp_own_freezer_qty + '<fd>18' + cp_own_monthly_business + '<fd>19' + cp_other_freezer_qty + '<fd>20' + cp_other_monthly_business + '<fd>21' + cp_bloop_signature + '<fd>22' + cp_shop_identifier + '<fd>23' + cp_other_merchandising*/
							
							$("#cp_id").val(clientProfileList[0])							
							$("#cp_name").val(clientProfileList[1])
							$("#cp_address").val(clientProfileList[2])
							$("#cp_owner").val(clientProfileList[3])
							$("#cp_owner_contact").val(clientProfileList[4])
							$("#cp_key_contact_person").val(clientProfileList[5])
							$("#cp_key_contact_number").val(clientProfileList[6])
							
							//----
							$("#cp_freezer_no").val(clientProfileList[7])
							$("#cp_expected_business").val(clientProfileList[8])
							$("#cp_igloo_freezer_qty").val(clientProfileList[9])
							$("#cp_igloo_monthly_business").val(clientProfileList[10])
							$("#cp_polar_freezer_qty").val(clientProfileList[11])
							$("#cp_polar_monthly_business").val(clientProfileList[12])
							$("#cp_bellissimo_freezer_qty").val(clientProfileList[13])
							$("#cp_bellissimo_monthly_business").val(clientProfileList[14])
							$("#cp_kwality_freezer_qty").val(clientProfileList[15])
							$("#cp_kwality_monthly_business").val(clientProfileList[16])
							$("#cp_own_freezer_qty").val(clientProfileList[17])
							$("#cp_own_monthly_business").val(clientProfileList[18])
							$("#cp_other_freezer_qty").val(clientProfileList[19])
							$("#cp_other_monthly_business").val(clientProfileList[20])
							$("#cp_bloop_signature").val(clientProfileList[21])
							$("#cp_shop_identifier").val(clientProfileList[22])
							$("#cp_other_merchandising").val(clientProfileList[23])						
							
							//--------------------------------							
							$("#wait_image_visit_submit").hide();
							$("#btn_update_client").show();
							
							var url = "#page_update_client";
							$.mobile.navigate(url);
												
							//------------------------------------------							
						}else{						
							$("#myerror").html('Network Timeout. Please try again.');	
							$("#wait_image_visit_submit").hide();		
							/*$("#btn_outlet_info").show();
							$("#btn_outlet_update").show();
							$("#btn_last_visit").show();	*/				
							}
						}
				  },
			  error: function(result) {			  
					  $("#myerror").html('Network Timeout. Please try again.');
					  $("#wait_image_visit_submit").hide();		
					  /*$("#btn_outlet_info").show();
					  $("#btn_outlet_update").show();
					  $("#btn_last_visit").show();*/
			  }
		 });//end ajax	
	}
}

//--------------------------Client profile: Profile Submit
function profileUpdate(){
	$(".errorProfileUpdate").html('');
	
	var clientUpdateStr=''
	
	//must
	var cp_id=$("#cp_id").val()
	var cp_name=$("#cp_name").val()
	var cp_address=$("#cp_address").val()
	var cp_owner=$("#cp_owner").val()
	var cp_owner_contact=$("#cp_owner_contact").val()
	var cp_key_contact_person=$("#cp_key_contact_person").val()
	var cp_key_contact_number=$("#cp_key_contact_number").val()
	//----
	
	var cp_freezer_no=$("#cp_freezer_no").val()
	var cp_expected_business=$("#cp_expected_business").val()
	var cp_igloo_freezer_qty=$("#cp_igloo_freezer_qty").val()
	var cp_igloo_monthly_business=$("#cp_igloo_monthly_business").val()
	var cp_polar_freezer_qty=$("#cp_polar_freezer_qty").val()
	var cp_polar_monthly_business=$("#cp_polar_monthly_business").val()
	var cp_bellissimo_freezer_qty=$("#cp_bellissimo_freezer_qty").val()
	var cp_bellissimo_monthly_business=$("#cp_bellissimo_monthly_business").val()
	var cp_kwality_freezer_qty=$("#cp_kwality_freezer_qty").val()
	var cp_kwality_monthly_business=$("#cp_kwality_monthly_business").val()
	var cp_own_freezer_qty=$("#cp_own_freezer_qty").val()
	var cp_own_monthly_business=$("#cp_own_monthly_business").val()
	var cp_other_freezer_qty=$("#cp_other_freezer_qty").val()
	var cp_other_monthly_business=$("#cp_other_monthly_business").val()
	var cp_bloop_signature=$("#cp_bloop_signature").val()
	var cp_shop_identifier=$("#cp_shop_identifier").val()
	var cp_other_merchandising=$("#cp_other_merchandising").val()
	
	//------
	if (cp_owner_contact=='' || cp_owner_contact==undefined){
		cp_owner_contact=0
	}else{
		try{
			cp_owner_contact=eval(cp_owner_contact)
		}catch(e){
			cp_owner_contact=0
			}
		}
	if (cp_key_contact_number=='' || cp_key_contact_number==undefined){
		cp_key_contact_number=0
	}else{
		try{
			cp_key_contact_number=eval(cp_key_contact_number)
		}catch(e){
			cp_key_contact_number=0
			}
		}
	
	//---
	if (cp_freezer_no=='' || cp_freezer_no==undefined){
		cp_freezer_no=''
		}
	if (cp_expected_business=='' || cp_expected_business==undefined){
		cp_expected_business=0
	}else{
		try{
			cp_expected_business=eval(cp_expected_business)
		}catch(e){
			cp_expected_business=0
			}
		}
	//-----
	if (cp_igloo_freezer_qty=='' || cp_igloo_freezer_qty==undefined){
		cp_igloo_freezer_qty=0
	}else{
		try{
			cp_igloo_freezer_qty=eval(cp_igloo_freezer_qty)
		}catch(e){
			cp_igloo_freezer_qty=0
			}
		}
	if (cp_igloo_monthly_business=='' || cp_igloo_monthly_business==undefined){
		cp_igloo_monthly_business=0
	}else{
		try{
			cp_igloo_monthly_business=eval(cp_igloo_monthly_business)
		}catch(e){
			cp_igloo_monthly_business=0
			}
		}
	//-----
	if (cp_polar_freezer_qty=='' || cp_polar_freezer_qty==undefined){
		cp_polar_freezer_qty=0
	}else{
		try{
			cp_polar_freezer_qty=eval(cp_polar_freezer_qty)
		}catch(e){
			cp_polar_freezer_qty=0
			}
		}
	if (cp_polar_monthly_business=='' || cp_polar_monthly_business==undefined){
		cp_polar_monthly_business=0
	}else{
		try{
			cp_polar_monthly_business=eval(cp_polar_monthly_business)
		}catch(e){
			cp_polar_monthly_business=0
			}
		}
	//-----
	if (cp_bellissimo_freezer_qty=='' || cp_bellissimo_freezer_qty==undefined){
		cp_bellissimo_freezer_qty=0
	}else{
		try{
			cp_bellissimo_freezer_qty=eval(cp_bellissimo_freezer_qty)
		}catch(e){
			cp_bellissimo_freezer_qty=0
			}
		}
	if (cp_bellissimo_monthly_business=='' || cp_bellissimo_monthly_business==undefined){
		cp_bellissimo_monthly_business=0
	}else{
		try{
			cp_bellissimo_monthly_business=eval(cp_bellissimo_monthly_business)
		}catch(e){
			cp_bellissimo_monthly_business=0
			}
		}
	//-----
	if (cp_kwality_freezer_qty=='' || cp_kwality_freezer_qty==undefined){
		cp_kwality_freezer_qty=0
	}else{
		try{
			cp_kwality_freezer_qty=eval(cp_kwality_freezer_qty)
		}catch(e){
			cp_kwality_freezer_qty=0
			}
		}
	if (cp_kwality_monthly_business=='' || cp_kwality_monthly_business==undefined){
		cp_kwality_monthly_business=0
	}else{
		try{
			cp_kwality_monthly_business=eval(cp_kwality_monthly_business)
		}catch(e){
			cp_kwality_monthly_business=0
			}
		}
	//-----
	if (cp_own_freezer_qty=='' || cp_own_freezer_qty==undefined){
		cp_own_freezer_qty=0
	}else{
		try{
			cp_own_freezer_qty=eval(cp_own_freezer_qty)
		}catch(e){
			cp_own_freezer_qty=0
			}
		}
	if (cp_own_monthly_business=='' || cp_own_monthly_business==undefined){
		cp_own_monthly_business=0
	}else{
		try{
			cp_own_monthly_business=eval(cp_own_monthly_business)
		}catch(e){
			cp_own_monthly_business=0
			}
		}
	//-----
	if (cp_other_freezer_qty=='' || cp_other_freezer_qty==undefined){
		cp_other_freezer_qty=0
	}else{
		try{
			cp_other_freezer_qty=eval(cp_other_freezer_qty)
		}catch(e){
			cp_other_freezer_qty=0
			}
		}
	if (cp_other_monthly_business=='' || cp_other_monthly_business==undefined){
		cp_other_monthly_business=0
	}else{
		try{
			cp_other_monthly_business=eval(cp_other_monthly_business)
		}catch(e){
			cp_other_monthly_business=0
			}
		}
	
	//-----
	if (cp_bloop_signature=='' || cp_bloop_signature==undefined){
		cp_bloop_signature=''
		}
	if (cp_shop_identifier=='' || cp_shop_identifier==undefined){
		cp_shop_identifier=''
		}
	if (cp_other_merchandising=='' || cp_other_merchandising==undefined){
		cp_other_merchandising=''
		}
	
	//------------------
	if (cp_id==''){
		$(".errorProfileUpdate").html('Outlet not available');
	}else if(cp_name==''){
		$(".errorProfileUpdate").html('Required Outlet Name');
	}else if(cp_address==''){
		$(".errorProfileUpdate").html('Required Outlet Address');
	}else if(cp_owner==''){
		$(".errorProfileUpdate").html('Required Owner Name');
	}else if(cp_owner_contact=='' || cp_owner_contact==0){
		$(".errorProfileUpdate").html('Required Valid Owner Contact Number');
	}else if(cp_key_contact_person==''){
		$(".errorProfileUpdate").html('Required Key Contact Person');
	}else if(cp_key_contact_number=='' || cp_key_contact_number==0){
		$(".errorProfileUpdate").html('Required Valid Key Contact Number');
	}else{
		lat=0
		longitude=0
		
		/*cp_id,cp_name,cp_address,cp_owner,cp_owner_contact,
		cp_key_contact_person,cp_key_contact_number,cp_freezer_no,cp_expected_business,
		cp_igloo_freezer_qty,cp_igloo_monthly_business,cp_polar_freezer_qty,cp_polar_monthly_business,cp_bellissimo_freezer_qty,
		cp_bellissimo_monthly_business,cp_kwality_freezer_qty,cp_kwality_monthly_business,cp_own_freezer_qty,
		cp_own_monthly_business,cp_other_freezer_qty,cp_other_monthly_business,cp_bloop_signature,cp_shop_identifier,cp_other_merchandising*/
		
		$("#btn_profile_update").hide();
		$("#wait_image_profile_update").show();		
		
		clientAddStr=cp_id+'<fd>'+cp_name+'<fd>'+cp_address+'<fd>'+cp_owner+'<fd>'+cp_owner_contact+'<fd>'+
		cp_key_contact_person+'<fd>'+cp_key_contact_number+'<fd>'+cp_freezer_no+'<fd>'+cp_expected_business+'<fd>'+
		cp_igloo_freezer_qty+'<fd>'+cp_igloo_monthly_business+'<fd>'+cp_polar_freezer_qty+'<fd>'+cp_polar_monthly_business+'<fd>'+cp_bellissimo_freezer_qty+'<fd>'+
		cp_bellissimo_monthly_business+'<fd>'+cp_kwality_freezer_qty+'<fd>'+cp_kwality_monthly_business+'<fd>'+cp_own_freezer_qty+'<fd>'+
		cp_own_monthly_business+'<fd>'+cp_other_freezer_qty+'<fd>'+cp_other_monthly_business+'<fd>'+cp_bloop_signature+'<fd>'+cp_shop_identifier+'<fd>'+cp_other_merchandising
		
		//alert(localStorage.base_url+'updateClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_data='+encodeURIComponent(clientAddStr)+'&lat='+lat+'&long='+longitude)
		
		// ajax-------
		$.ajax({
			 type: 'POST',
			 url: localStorage.base_url+'updateClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_data='+encodeURIComponent(clientAddStr)+'&lat='+lat+'&long='+longitude,
			 success: function(result) {
					if (result==''){					
						$(".errorProfileUpdate").html('Sorry Network not available');
						$("#wait_image_profile_update").hide();		
						$("#btn_profile_update").show();						
					}else{					
						var resultArray = result.split('<SYNCDATA>');			
						if (resultArray[0]=='FAILED'){
							$(".errorProfileUpdate").html(resultArray[1]);					
							$("#wait_image_profile_update").hide();		
							$("#btn_profile_update").show();
							
						}else if (resultArray[0]=='SUCCESS'){								
							//-----------
							
							clientAddStr=''
							$("#lat_p").val('');
							$("#long_p").val('');								
							
							$("#lat").val('');
							$("#longitude").val('');
							
							$(".errorProfileUpdate").html(resultArray[1]);
							$("#wait_image_profile_update").hide();		
							
							//----							
						}else{						
							$(".errorProfileUpdate").html('Network Timeout. Please try again.');
							$("#wait_image_profile_update").hide();		
							$("#btn_profile_update").show();
							}
					}
				  },
			  error: function(result) {
				  $(".errorProfileUpdate").html('Network Timeout. Please try again.');
				  $("#wait_image_profile_update").hide();		
				  $("#btn_profile_update").show();
			  }
		 });//end ajax
	}	
}


//-------------------------- Visit Report: Show
/*function getVisitReportPage(){
	$("#err_visit_rpt").html('');	
	$("#wait_image_visit_report").hide();		
	
	$("#tbl_visit_rpt_show_campaign").empty();
	$("#tbl_visit_rpt_show_stock").empty();
	$("#tbl_visit_rpt_show_sales").empty();
	
	$("#ChartDivRetStock").empty();
	$("#retailerStock").val('');
	
	var url = "#page_visit_rpt";			
	$.mobile.navigate(url);
}*/

/*
function visitReport(){
	$("#err_visit_rpt").html('');	
	$("#wait_image_visit_report").show();		
	
	$("#tbl_visit_rpt_show_campaign").empty();
	$("#tbl_visit_rpt_show_stock").empty();
	$("#tbl_visit_rpt_show_sales").empty();
	
	$("#ChartDivRetStock").empty();
	$("#retailerStock").val('');
	
	visit_client=localStorage.visit_client	
	clientId=visit_client.split('-')[1]
	
	//alert(localStorage.base_url+'getVisitReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId)
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'getVisitReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId,
		 success: function(result) {
				
				//alert(result);
				if (result==''){					
					$("#err_visit_rpt").html('Sorry Network not available');
					$("#wait_image_visit_report").hide();
	
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#err_visit_rpt").html(resultArray[1]);
						$("#wait_image_visit_report").hide();
						
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						$("#wait_image_visit_report").hide();
						
						var campaignData=resultArray[1]
						var stockData=resultArray[2]
						var marketInfoStockList=resultArray[3]
						var deliverySalesList=eval(resultArray[4])
						
						
						//------------------------
						var salesStrData='<tr ><td colspan="2" ><b>LSC Sales:</b></td></tr>'
                		salesStrData+='<tr style="font-weight:bold; text-shadow:none; color:#408080;" ><td >Month</td><td >Qty</td></tr>'
                		
						var deliverySalesListLength=deliverySalesList.length;						
						for (i=0; i < deliverySalesListLength; i++){
							var salesDictData=deliverySalesList[i];
							
							var month=salesDictData['Month']
							var qty=salesDictData['Qty']
							
							salesStrData+='<tr style="font-size:11px;"><td >'+month+'</td><td >'+qty+'</td></tr>'
							
							//alert(month+','+qty);
							}
												
						$("#tbl_visit_rpt_show_campaign").append(campaignData).trigger('create');						
						$("#tbl_visit_rpt_show_stock").append(stockData).trigger('create');
						$("#retailerStock").val(marketInfoStockList);
						
						$("#tbl_visit_rpt_show_sales").append(salesStrData).trigger('create');
						
						loadChart();
						//----
												
					}else{						
						$("#err_visit_rpt").html('Network Timeout. Please try again.');
						$("#wait_image_visit_report").hide();
						}
				}
			  },
		  error: function(result) {			  
			  $("#err_visit_rpt").html('Network Timeout. Please try again.');
			  $("#wait_image_visit_report").hide();
		  }
	 });//end ajax	
	
  }*/

//---------------------- Exit Application
function exit() {	
	navigator.app.exitApp();
}


//--------------------Item Search Start----------------
function search_item() {	
	var p_name=$("#item_search").val();
	
	vfinal=p_name.toUpperCase()
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (var j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#order_qty"+product_id).focus().select();
			$("#item_search").val('');
			return;
		}
				
	}
	
}

//--------------------cart Start----------------
function cart_data() {		
	if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		var product_tbl_cart_str='<ul  data-role="listview">';
		var total_value=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				var product_name=$("#order_name"+orderProductId).val(); 
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;
				
				product_tbl_cart_str=product_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input  type="number" id="cart_qty'+orderProductId+'"  onBlur="getCartData_keyup(\''+orderProductId+'\')" value="'+orderProductQty+'" placeholder="0"> </td><td  style="text-align:left;">'+ product_name.toUpperCase()+'</td></tr>'+'</table>'+'</li>'

				}
		
		}
		product_tbl_cart_str=product_tbl_cart_str+'</ul>';		
		
		
		localStorage.product_tbl_cart=product_tbl_cart_str;//+'</table>';
		localStorage.total_value=total_value.toFixed(2);
		$('#product_list_tbl_cart').empty();
		$('#product_list_tbl_cart').append(localStorage.product_tbl_cart).trigger('create');
		
		var show_total="Total Order Amount: "+localStorage.total_value + " BDT"
		localStorage.show_total=show_total;
		
		
		$("#product_total_cart").html(localStorage.show_total);
		$("#product_total_last").html(localStorage.show_total);
		$("#order_total_show").html(localStorage.show_total);
		
	}
	else{
		
		var url = "#page_order";	
		$.mobile.navigate(url);
	}
	
}

//==============================================
function getCartData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#cart_qty"+product_id).val().replace('.','').substring(0,4);
	$("#cart_qty"+product_id).val(pqty);
	
	
	$("#order_qty"+product_id).val(pqty);
	var productOrderStr=localStorage.productOrderStr
	
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
				var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
				//	alert (productOrderStr.indexOf(product_id));
					//alert (orderProductList[j]);
					if (orderProductId==pid){
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							if(productOrderStr.indexOf('<rd>')>0){
								productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							}
							else{
								productOrderStr=productOrderStr.replace(orderProductList[j], "")
							 }
								//alert (productOrderStr);
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					} //if (orderProductLength>1){
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					} //if (orderProductLength==1
				
				} //if (orderProductId==pid)
					
					
					
				}//if(orderProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productOrderStr=productOrderStr
		
		//================price===========
		if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		var total_value=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				
				
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;

				
				
				}
		
		}
		
		
		
		//alert (total_value)
		localStorage.total_value=total_value.toFixed(2);
		
		$("#product_total_cart").html("Total Order Amount: "+localStorage.total_value + " BDT");
		$("#product_total_last").html("Total Order Amount: "+localStorage.total_value + " BDT");

	}
		
		
//		==================================
	}

//----------------------cart end----------------

function payment_mode(){
	var payment_mode=($("input:radio[name='payment_mode']:checked").val())
	
	var url = "#page_visit";
	$.mobile.navigate(url);
	localStorage.payment_mode=payment_mode
}

function cancel_cart() {
	$(".orderProduct").val('');
	
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	$("#order_total_show").html('');
	$("#chemist_feedback").val('');
	
	$("#item_combo_id").val('');
	
	
	
	localStorage.productOrderStr='';
	$("#product_list_tbl_cart").html("");
	var url = "#page_visit";	
	$.mobile.navigate(url);
}

//=========================

function clear_mgs(){
	$("#error_login").html('');
	$("#error_login").html('');	
	$("#err_retailer_date_next").html('');	
	$("#err_retailer_next").html('');
	$("#err_market_next").html('');
	$("#errorChkVSubmit").html('');
	$("#err_market_next_cp").html('');
	$("#err_m_retailer_next_cp").html('');
	$("#err_distributor").html('');
	$("#error_del_submit").html('');
	$("#err_p_market").html('');
	$("#err_plan_visit").html('');
	$("#err_visit_rpt").html('');
	$("#error_complain").html('');
	$("#error_complain_page").html('');
	$("#error_task_page").html('');
	$("#error_task_list").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_m_retailer_next_cp").html('');
	$("#err_market_next").html('');
	$("#errorChkVSubmit").html('');
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	
	
	
}

function client_catList() {	
	$('#catCombo').empty();
	var catArray=localStorage.clientCat_string.split('<rd>')	
	var ob = $("#catCombo");
	var ob_profile = $("#catCombo_profile");
	var value="";
	//var text="Category";
	
	
	for (var p=0; p<catArray.length; p++){
		var catId = catArray[p];
		ob.prepend("<option value='"+ catId+"'>" + catId + "</option>");
		ob_profile.prepend("<option value='"+ catId+"'>" + catId + "</option>");
		}	
	
	
	ob.prepend("<option value=''>All</option>");
	ob_profile.prepend("<option value=''>All</option>");
	
	ob.prepend("<option value=''>Category</option>");
	ob_profile.prepend("<option value=''>Category</option>");
}




//=========================Menu functions Start=================

function chemist_visit() {
	$("#ret_cat").show();
	$("#d_visit").html("Outlet");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Outlet </font>');
	
	
	
	$("#btn_location").show();
	$("#visit_submit").hide();
	$("#checkLocation").html('');
	
	
	localStorage.doctor_flag=0;
	localStorage.visit_page="NO";
	addMarketList();
	localStorage.saved_data_submit=0;
	
}
function saved_visit() {
	localStorage.saved_data_submit=0;
	var url = "#page_saved_visit";
	$.mobile.navigate(url);
	getvisitSave_data();
}
function chemist_profile() {
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Chemist</font>');
	localStorage.doctor_flag=0;
	
	
	localStorage.saved_data_submit=0;
	addMarketListCp();
	
	
}


function market_list_combo() {	
	$('#se_market').empty();
	var marketArray=localStorage.marketListStr.split('<rd>')	
	var ob = $("#se_market");
	var value="";
	for (var p=0; p<marketArray.length; p++){
		market_single=marketArray[p].split('<fd>')
		var marketId = market_single[0];
		var marketName = market_single[1];
		ob.prepend("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
		}	
	ob.prepend("<option value=''>Market</option>");
}


function item_list_combo() {	
	$('#se_item').empty();
	var productArray=localStorage.productListStr.split('<rd>')	
	var ob = $("#se_item");
	var value="";
	
	for (var p=0; p<productArray.length; p++){
		product_single=productArray[p].split('<fd>')
		var item_id = product_single[0];
		var name = product_single[1];
		ob.prepend("<option value='"+ item_id+"'>" + name+"-"+item_id + "</option>");
		}	
	ob.prepend("<option value=''>Item</option>");
}

function mpo_list_combo() {	
	$('#se_mpo').empty();
	var ob = $("#se_mpo");
	var user_type=localStorage.user_type;
	//alert (user_type);
	if (user_type=='rep'){
		ob.prepend("<option value='"+ localStorage.user_id +"'>" + localStorage.user_id + "</option>");
	}
	
	

}



//=========================Menu functions End=================

$(document).on("pagecreate", "#page_order", function(){    
//$("item_combo_id").keyup(function(){
    $("#item_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch);
});

function startsWithSearch( idx, searchValue ) {
    
	var ret = false;
    if (searchValue && searchValue.length > 0){        
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
    return ret;
}

//------------Market
/*$(document).on("pagecreate", "#page_market", function(){    
	$("#unschedule_market_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_market);
});

function startsWithSearch_market( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5 ){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} */

//------------Chemist
/*$(document).on("pagecreate", "#page_market_ret", function(){    
	$("#unscheduled_m_client_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_ret);
});

function startsWithSearch_ret( idx, searchValue ) {
	var ret = false;
	//alert (searchValue);
    if (searchValue && searchValue.length > 0){ 
        var text = $(this).text().toUpperCase();
		
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5){
			ret = true; //filter this one out
        }
    } 
    return ret;
} 
*/



//==============================html script==========================

$(document).ready(function(){
	
	//=====Set menu============
	$('#menu_show').empty();
	$('#menu_show').append(localStorage.menu_list).trigger('create');
	//===========Set menu end========										
											
											
	$("#wait_image_login").hide();
	$("#loginButton").show();
	
	$("#wait_image_schedule_date").hide();		
	$("#btn_schedule_date").show();
	
	$("#wait_image_schedule_ret").hide();		
	$("#btn_schedule_ret").show();
	
	$("#wait_image_unschedule_market").hide();		
	$("#btn_unschedule_market").show();
	
	$("#wait_image_ret").hide();	
	$("#wait_image_unschedule_market_ret").hide();		
	$("#btn_unschedule_market_ret").show();
	
	$("#wait_image_visit_submit").hide();		
	$("#visit_submit").show();
	
	$("#wait_image_profile_market").hide();		
	$("#btn_profile_market").show();
	
	$("#wait_image_profile_market_ret").hide();		
	$("#btn_profile_market_ret").show();
	
	$("#wait_image_profile_update").hide();		
	$("#btn_profile_update").show();
	
	$("#wait_image_visit_report").hide();
	
	$("#error_rpt").html('');
	$("#order_report_button").show();
	$("#wait_image_rpt").hide();
	
	client_catList();
	first_page();
	
	//Set report combo 
	market_list_combo();
	item_list_combo();
	mpo_list_combo()
	$("#se_mpo").val(localStorage.user_id);
	
	
	$("#product_list_tbl").html(localStorage.product_tbl_str);
	$("#del_product_list_tbl").html(localStorage.product_tbl_del_str);
	
	$("#sch_date").val(localStorage.search_date);
	
	
	//reports();
	
	
	$('#order_report_button').empty();
	$('#order_report_button').append(localStorage.report_button).trigger('create');
	
	//Set total 
	$("#product_total_cart").html(localStorage.show_total);
	$("#product_total_last").html(localStorage.show_total);
	
	
	//------	
	if ((localStorage.doctor_flag==1) && (localStorage.visit_page=="YES")){		
		$(".market").html(localStorage.visit_market_show);
		$(".visit_client").html(localStorage.visit_client_show);	
	}
	
	//================== Redirect to visit page
	if ((localStorage.doctor_flag==0) &&(localStorage.visit_page=="YES")){
		$("#sch_date").val(localStorage.scheduled_date);
		
		$(".market").html(localStorage.visit_market_show);
		$(".visit_distributor").html(localStorage.visit_distributor_nameid);
		$(".visit_type").html(localStorage.visit_type);								
		$(".s_date").html(localStorage.scheduled_date);
		$(".visit_client").html(localStorage.visit_client_show);
		mobile_off_flag=1;
		
		getOrder_load();	
	}
	
});

//  ============== Schedule Client Combo===========
$.mobile.document.on( "listviewcreate", "#schedule_client_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#schedule_client_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#schedule_client_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#schedule_client_combo_id-dialog", function( e ) {
	var form = $( "#schedule_client_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#schedule_client_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


//------------------------------------- Unschedule market combo -----------------------------

$.mobile.document.on( "listviewcreate", "#unschedule_market_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#unschedule_market_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#unschedule_market_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#unschedule_market_combo_id-dialog", function( e ) {
	var form = $( "#unschedule_market_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#unschedule_market_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});	

//-----------------  Unschedule Market Client/retailer list
$.mobile.document.on( "listviewcreate", "#unscheduled_m_client_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#unscheduled_m_client_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#unscheduled_m_client_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#unscheduled_m_client_combo_id-dialog", function( e ) {
	var form = $( "#unscheduled_m_client_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#unscheduled_m_client_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


//-------------------------------------Delivery Distributor Combo list -----------------------------

$.mobile.document.on( "listviewcreate", "#delivery_distributor_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#delivery_distributor_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#delivery_distributor_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#delivery_distributor_cmb_id-dialog", function( e ) {
	var form = $( "#delivery_distributor_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#delivery_distributor_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});

//------------------------------------- visit plan market -----------------------------
$.mobile.document.on( "listviewcreate", "#visit_market_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#visit_market_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#visit_market_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#visit_market_cmb_id-dialog", function( e ) {
	var form = $( "#visit_market_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#visit_market_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});

//------------------------------------- visit plan client/ retailer -----------------------------

$.mobile.document.on( "listviewcreate", "#visit_plan_client_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#visit_plan_client_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#visit_plan_client_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#visit_plan_client_cmb_id-dialog", function(  e ) {
	var form = $( "#visit_plan_client_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#visit_plan_client_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
	

//------------------------------------- marchandizing Item  -----------------------------

$.mobile.document.on( "listviewcreate", "#marchandizing_item_id-menu", function( e ) {
	var input,
		listbox = $( "#marchandizing_item_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#marchandizing_item_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#marchandizing_item_id-dialog", function( e ) {
	var form = $( "#marchandizing_item_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#marchandizing_item_id-listbox" );
	form 
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


////----------------------------Set Market Combo---------
$.mobile.document
.on( "listviewcreate", "#se_market-menu", function( e ) {
	var input,
		listbox = $( "#se_market-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='marketSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_market-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_market-dialog", function( e ) {
	var form = $( "#se_market-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_market-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


////----------------------------Set Item Combo---------
$.mobile.document
.on( "listviewcreate", "#se_item-menu", function( e ) {
	var input,
		listbox = $( "#se_item-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='itemSearch' data-type='search'></input></br>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_item-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_item-dialog", function( e ) {
	var form = $( "#se_item-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_item-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


//================================== Report
function reports() {
	$("#error_rpt").html('');
	$("#order_report_button").show();
	$("#wait_image_rpt").hide();
	//---------------------------
	
	var market_combo='<option value="All" >All</option>';
	var marketListStr =localStorage.marketListStr
	var marketArray=marketListStr.split('<rd>')
	for (var p=0; p<marketArray.length; p++){
		market_single=marketArray[p].split('<fd>')		
        market_combo=market_combo+'<option value="'+market_single[0]+'" >'+market_single[0]+' | '+market_single	[1]+'</option>'
	}	
	//------
	var rpt_market_ob=$("#rpt_market");
	rpt_market_ob.empty();
	rpt_market_ob.append(market_combo);
	rpt_market_ob.selectedIndex = 0;	
	//------
	
	var rep_combo='';	
	if (localStorage.user_type=='sup'){
		rep_combo+='<option value="All" >All</option>';
	};
	var repStr_report =localStorage.repStr_report
	var repStrArray=repStr_report.split('<rd>')
	var start_flag=0
	for (var r=0; r<repStrArray.length; r++){
		rep_single=repStrArray[r].split('<fd>')
		if (start_flag==0){
        	rep_combo=rep_combo+'<option selected="selected" value="'+rep_single[0]+'" >'+rep_single[0]+' | '+rep_single[1]+'</option>'
			start_flag=1;
		}else{
			rep_combo=rep_combo+'<option value="'+rep_single[0]+'" >'+rep_single[0]+' | '+rep_single[1]+'</option>'
		}
	}
	
	//------
	var rpt_rep_ob=$("#rpt_rep");
	rpt_rep_ob.empty();
	rpt_rep_ob.append(rep_combo);
	rpt_rep_ob.selectedIndex = 0;	
	
	//--------------------------
	/*if (localStorage.user_type=='rep'){
		$('#rpt_date_from').html('From');
		$('#rpt_date_to').show();		
	}else if (localStorage.user_type=='sup'){
		$('#rpt_date_from').html('Date');		
		$('#rpt_date_to').hide();
	}*/
	
	var url = "#page_reports";
	$.mobile.navigate(url);
	
	//-----------------
	rpt_market_ob.selectmenu("refresh");
	rpt_rep_ob.selectmenu("refresh");
}

//========================Detail Report============
function order_detail_report() {
	$("#error_rpt").html("");
	$("#order_report_button").hide();
	$("#wait_image_rpt").show();
	//---------------------------
	
	// Blank all div
	$("#show_rpt_market").html("");
	$("#show_rpt_rep").html("");
	$("#show_rpt_date").html("");
	
	//------------------ Get filter value
	var rpt_market=$("#rpt_market ").val();
	var rpt_rep=$("#rpt_rep").val();
	
	var rpt_month_from=$("#rpt_month_from").val();
	var rpt_day_from=$("#rpt_day_from").val();
	
	var rpt_month_to=$("#rpt_month_to").val();
	var rpt_day_to=$("#rpt_day_to").val();
	
	if (rpt_market==""){
		rpt_market="All"
	}
	if (rpt_rep==""){
		rpt_rep="All"
	}
	
	var from_month_day=rpt_month_from+'-'+rpt_day_from;
	var to_month_day=rpt_month_to+'-'+rpt_day_to;
	
	//alert(localStorage.base_url+'report_order_details?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day);
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'report_order_details?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day,
		 success: function(result) {
				//alert (result);
				if (result==''){
					$("#error_rpt").html('Sorry Network not available');
					$("#order_report_button").show();
					$("#wait_image_rpt").hide();
				}else{
					var resultArray = result.split('<SYNCDATA>');
					if (resultArray[0]=='FAILED'){
						$("#error_rpt").html(resultArray[1]);
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
					}else if (resultArray[0]=='SUCCESS'){
						var market_string=resultArray[1];
						var rep_string=resultArray[2];
						var fromDate_string=resultArray[3];
						var toDate_string=resultArray[4];
						var report_string=resultArray[5];
						
						//------------------------ Show filter value
						$("#show_rpt_market").html("Market &nbsp;&nbsp;&nbsp;&nbsp;:"+market_string);
						$("#show_rpt_rep").html("Rep &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+rep_string);
						
						/*if (localStorage.user_type=='sup'){
							$("#show_rpt_date").html("Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:" +fromDate_string);
						}else{
							$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						}*/
						
						$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						
						$("#report_header").html('Order Details Report');
						
						//-----------------												
						var dataList=report_string.split('<rd>');
						var dataListLength=dataList.length;
						
						//------------------------
						//0 str(recNo)+'<fd>1'+str(order_date)+'<fd>2'+str(sl)+'<fd>3'+str(item_name)+'<fd>4'+str(quantity)+'<fd>5'+str(itemTotal)+'<fd>6'+str(client_name)+'<fd>7'+str(depot_name)+'<fd>8'+str(freezer_info)+'<fd>9'+str(rep_name)
						var reportStrData='<tr style="font-size:13px;font-weight:bold; text-shadow:none; color:#408080;" ><td >SL</td><td >Date</td><td >Order No</td><td>SKU</td><td>Qty</td><td>Amount</td><td>Retailer</td><td>Freezer No</td><td>Distributor</td><td>SR</td></tr>'
						for (i=0; i < dataListLength; i++){
							var dataDetailList=dataList[i].split('<fd>');
							
							reportStrData+='<tr style="font-size:11px;border-color:#4E9A9A;"><td style="border-color:#4E9A9A;"><b>'+dataDetailList[0]+'</b></td><td style="border-color:#4E9A9A;">'+dataDetailList[1]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[2]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[3]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[4]+'</td><td style="border-color:#4E9A9A;text-align:right">'+dataDetailList[5]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[6]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[8]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[7]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[9]+'</td></tr>'
							}
						
						$("#tbl_rpt_show_details").empty()
						$("#tbl_rpt_show_details").append(reportStrData).trigger('create');
						
						//-----								
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						
						var url = "#page_report_show";
						$.mobile.navigate(url);	

					}else{						
						$("#error_rpt").html('Network Timeout. Please try again.');
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						}
				}
			  },
		  error: function(result) {	
				$("#error_rpt").html('Network Timeout. Please try again.');		  
				$("#order_report_button").show();
				$("#wait_image_rpt").hide();  
		  }
	 });//end ajax	
}

function order_summary_report() {
	$("#error_rpt").html("");
	$("#order_report_button").hide();
	$("#wait_image_rpt").show();
	//---------------------------
	
	// Blank all div
	$("#show_rpt_market").html("");
	$("#show_rpt_rep").html("");
	$("#show_rpt_date").html("");
	
	//------------------ Get filter value
	var rpt_market=$("#rpt_market ").val();
	var rpt_rep=$("#rpt_rep").val();
	
	var rpt_month_from=$("#rpt_month_from").val();
	var rpt_day_from=$("#rpt_day_from").val();
	
	var rpt_month_to=$("#rpt_month_to").val();
	var rpt_day_to=$("#rpt_day_to").val();
	
	if (rpt_market==""){
		rpt_market="All"
	}
	if (rpt_rep==""){
		rpt_rep="All"
	}
	
	var from_month_day=rpt_month_from+'-'+rpt_day_from;
	var to_month_day=rpt_month_to+'-'+rpt_day_to;
	
	//alert(localStorage.base_url+'report_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day);
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'report_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day,
		 success: function(result) {
				//alert (result);
				if (result==''){
					$("#error_rpt").html('Sorry Network not available');
					$("#order_report_button").show();
					$("#wait_image_rpt").hide();
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_rpt").html(resultArray[1]);								
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
					}else if (resultArray[0]=='SUCCESS'){						
						var market_string=resultArray[1];
						var rep_string=resultArray[2];
						var fromDate_string=resultArray[3];
						var toDate_string=resultArray[4];
						var report_string=resultArray[5];
						
						//------------------------ Show filter value
						$("#show_rpt_market").html("Market &nbsp;&nbsp;&nbsp;&nbsp;:"+market_string);
						$("#show_rpt_rep").html("Rep &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+rep_string);
						
						/*if (localStorage.user_type=='sup'){
							$("#show_rpt_date").html("Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:" +fromDate_string);
						}else{
							$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						}*/
						
						$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						
						$("#report_header").html("Order Summary Report");
						
						//-----------------												
						var dataList=report_string.split('<rd>');
						var dataListLength=dataList.length;
						
						//------------------------
						//0 str(recNo)+'<fd>1'+str(order_date)+'<fd>2'+str(visitCountH)+'<fd>3'+str(orderCount)+'<fd>4'+str(orderAmt)
						var reportStrData='<tr style="font-size:13px;font-weight:bold; text-shadow:none; color:#408080;" ><td >SL</td><td >Date</td><td >Visit</td><td>Total Order Count</td><td style="text-align:right">Amount</tr>'
						for (i=0; i < dataListLength; i++){
							var dataDetailList=dataList[i].split('<fd>');
							
							reportStrData+='<tr style="font-size:11px;border-color:#4E9A9A;"><td style="border-color:#4E9A9A;"><b>'+dataDetailList[0]+'</b></td><td style="border-color:#4E9A9A;">'+dataDetailList[1]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[2]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[3]+'</td><td style="border-color:#4E9A9A;text-align:right">'+dataDetailList[4]+'</td></tr>'
							}
						
						$("#tbl_rpt_show_details").empty()
						$("#tbl_rpt_show_details").append(reportStrData).trigger('create');
						
						//-----								
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						
						var url = "#page_report_show";
						$.mobile.navigate(url);	

					}else{						
						$("#error_rpt").html('Network Timeout, error:1. Please try again.');
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						}
				}
			  },
		  error: function(result) {	
				$("#error_rpt").html('Network Timeout, error:2. Please try again.');		  
				$("#order_report_button").show();
				$("#wait_image_rpt").hide();  
		  }
	 });//end ajax	
}

function segment_wise_report() {
	$("#error_rpt").html("");
	$("#order_report_button").hide();
	$("#wait_image_rpt").show();
	//---------------------------
	
	// Blank all div
	$("#show_rpt_market").html("");
	$("#show_rpt_rep").html("");
	$("#show_rpt_date").html("");
	
	//------------------ Get filter value
	var rpt_market=$("#rpt_market ").val();
	var rpt_rep=$("#rpt_rep").val();
	
	var rpt_month_from=$("#rpt_month_from").val();
	var rpt_day_from=$("#rpt_day_from").val();
	
	var rpt_month_to=$("#rpt_month_to").val();
	var rpt_day_to=$("#rpt_day_to").val();
	
	if (rpt_market==""){
		rpt_market="All"
	}
	if (rpt_rep==""){
		rpt_rep="All"
	}
	
	var from_month_day=rpt_month_from+'-'+rpt_day_from;
	var to_month_day=rpt_month_to+'-'+rpt_day_to;
	
	//alert(localStorage.base_url+'report_segment_wise_order?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day);
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'report_segment_wise_order?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day,
		 success: function(result) {
				//alert (result);
				if (result==''){
					$("#error_rpt").html('Sorry Network not available');
					$("#order_report_button").show();
					$("#wait_image_rpt").hide();
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_rpt").html(resultArray[1]);								
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
					}else if (resultArray[0]=='SUCCESS'){						
						var market_string=resultArray[1];
						var rep_string=resultArray[2];
						var fromDate_string=resultArray[3];
						var toDate_string=resultArray[4];
						var report_string=resultArray[5];
						
						//------------------------ Show filter value
						$("#show_rpt_market").html("Market &nbsp;&nbsp;&nbsp;&nbsp;:"+market_string);
						$("#show_rpt_rep").html("Rep &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+rep_string);
						
						/*if (localStorage.user_type=='sup'){
							$("#show_rpt_date").html("Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:" +fromDate_string);
						}else{
							$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						}*/
						$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						
						$("#report_header").html("Segment Wise Report");
						
						//-----------------												
						var dataList=report_string.split('<rd>');
						var dataListLength=dataList.length;
						
						//------------------------
						//0 str(recNo)+'<fd>1'+str(order_date)+'<fd>2'+str(category_idD)+'<fd>3'+str(orderCount)+'<fd>4'+str(qtyD)+'<fd>5'+str(totalAmtD)+'<fd>6'+str(client_nameD)+'<fd>7'+str(depot_nameD)+'<fd>8'+str(rep_nameD)
						var reportStrData='<tr style="font-size:13px;font-weight:bold; text-shadow:none; color:#408080;" ><td >SL No</td><td >Date</td><td >Segment</td><td>Total Order Count</td><td>Qty</td><td style="text-align:right">Amount</td><td>Retailer Name</td><td>Distributor Name</td><td>SR Name</td></tr>'
						for (i=0; i < dataListLength; i++){
							var dataDetailList=dataList[i].split('<fd>');
							
							reportStrData+='<tr style="font-size:11px;border-color:#4E9A9A;"><td style="border-color:#4E9A9A;"><b>'+dataDetailList[0]+'</b></td><td style="border-color:#4E9A9A;">'+dataDetailList[1]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[2]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[3]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[4]+'</td><td style="border-color:#4E9A9A;text-align:right">'+dataDetailList[5]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[6]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[7]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[8]+'</td></tr>'
							}
						
						$("#tbl_rpt_show_details").empty()
						$("#tbl_rpt_show_details").append(reportStrData).trigger('create');
						
						//-----								
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						
						var url = "#page_report_show";
						$.mobile.navigate(url);	

					}else{						
						$("#error_rpt").html('Network Timeout, error:1. Please try again.');
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						}
				}
			  },
		  error: function(result) {	
				$("#error_rpt").html('Network Timeout, error:2. Please try again.');		  
				$("#order_report_button").show();
				$("#wait_image_rpt").hide();  
		  }
	 });//end ajax	
}


function sku_wise_report() {
	$("#error_rpt").html("");
	$("#order_report_button").hide();
	$("#wait_image_rpt").show();
	//---------------------------
	
	// Blank all div
	$("#show_rpt_market").html("");
	$("#show_rpt_rep").html("");
	$("#show_rpt_date").html("");
	
	//------------------ Get filter value
	var rpt_market=$("#rpt_market ").val();
	var rpt_rep=$("#rpt_rep").val();
	
	var rpt_month_from=$("#rpt_month_from").val();
	var rpt_day_from=$("#rpt_day_from").val();
	
	var rpt_month_to=$("#rpt_month_to").val();
	var rpt_day_to=$("#rpt_day_to").val();
	
	if (rpt_market==""){
		rpt_market="All"
	}
	if (rpt_rep==""){
		rpt_rep="All"
	}
	
	var from_month_day=rpt_month_from+'-'+rpt_day_from;
	var to_month_day=rpt_month_to+'-'+rpt_day_to;
	
	//alert(localStorage.base_url+'report_sku_wise_order?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day);
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'report_sku_wise_order?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day,
		 success: function(result) {
				//alert (result);
				if (result==''){
					$("#error_rpt").html('Sorry Network not available');
					$("#order_report_button").show();
					$("#wait_image_rpt").hide();
				}else{
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_rpt").html(resultArray[1]);								
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
					}else if (resultArray[0]=='SUCCESS'){						
						var market_string=resultArray[1];
						var rep_string=resultArray[2];
						var fromDate_string=resultArray[3];
						var toDate_string=resultArray[4];
						var report_string=resultArray[5];
						
						//------------------------ Show filter value
						$("#show_rpt_market").html("Market &nbsp;&nbsp;&nbsp;&nbsp;:"+market_string);
						$("#show_rpt_rep").html("Rep &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+rep_string);
						
						/*if (localStorage.user_type=='sup'){
							$("#show_rpt_date").html("Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:" +fromDate_string);
						}
						else{
							$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						}*/
						$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						
						$("#report_header").html("SKU Wise Report");
						
						//-----------------												
						var dataList=report_string.split('<rd>');
						var dataListLength=dataList.length;
						
						//------------------------
						//0 str(recNo)+'<fd>1'+str(order_date)+'<fd>2'+str(category_idD)+'<fd>3'+str(orderCount)+'<fd>4'+str(qtyD)+'<fd>5'+str(totalAmtD)+'<fd>6'+str(client_nameD)+'<fd>7'+str(depot_nameD)+'<fd>8'+str(rep_nameD)
						var reportStrData='<tr style="font-size:13px;font-weight:bold; text-shadow:none; color:#408080;" ><td >SL No</td><td >Date</td><td >SKU</td><td>Total Order Count</td><td>Qty</td><td style="text-align:right">Amount</td><td>Retailer Name</td><td>Distributor Name</td><td>SR Name</td></tr>'
						for (i=0; i < dataListLength; i++){
							var dataDetailList=dataList[i].split('<fd>');
							
							reportStrData+='<tr style="font-size:11px;border-color:#4E9A9A;"><td style="border-color:#4E9A9A;"><b>'+dataDetailList[0]+'</b></td><td style="border-color:#4E9A9A;">'+dataDetailList[1]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[2]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[3]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[4]+'</td><td style="border-color:#4E9A9A;text-align:right">'+dataDetailList[5]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[6]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[7]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[8]+'</td></tr>'
							}
						
						$("#tbl_rpt_show_details").empty()
						$("#tbl_rpt_show_details").append(reportStrData).trigger('create');
						
						//-----								
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						
						var url = "#page_report_show";
						$.mobile.navigate(url);	

					}else{						
						$("#error_rpt").html('Network Timeout, error:1. Please try again.');
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						}
				}
			  },
		  error: function(result) {	
				$("#error_rpt").html('Network Timeout, error:2. Please try again.');		  
				$("#order_report_button").show();
				$("#wait_image_rpt").hide();  
		  }
	 });//end ajax	
}

function freezer_efficiency_report() {
	$("#error_rpt").html("");
	$("#order_report_button").hide();
	$("#wait_image_rpt").show();
	//---------------------------
	
	// Blank all div
	$("#show_rpt_market").html("");
	$("#show_rpt_rep").html("");
	$("#show_rpt_date").html("");
	
	//------------------ Get filter value
	var rpt_market=$("#rpt_market ").val();
	var rpt_rep=$("#rpt_rep").val();
	
	var rpt_month_from=$("#rpt_month_from").val();
	var rpt_day_from=$("#rpt_day_from").val();
	
	var rpt_month_to=$("#rpt_month_to").val();
	var rpt_day_to=$("#rpt_day_to").val();
	
	if (rpt_market==""){
		rpt_market="All"
	}
	if (rpt_rep==""){
		rpt_rep="All"
	}
	
	var from_month_day=rpt_month_from+'-'+rpt_day_from;
	var to_month_day=rpt_month_to+'-'+rpt_day_to;
	
	//alert(localStorage.base_url+'report_freezer_efficiency_order?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day);
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'report_freezer_efficiency_order?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&user_type='+localStorage.user_type+'&market_id='+rpt_market+'&rep_id_rpt='+rpt_rep+'&from_month_day='+from_month_day+'&to_month_day='+to_month_day,
		 success: function(result) {
				//alert (result);
				if (result==''){
					$("#error_rpt").html('Sorry Network not available');
					$("#order_report_button").show();
					$("#wait_image_rpt").hide();
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_rpt").html(resultArray[1]);								
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
					}else if (resultArray[0]=='SUCCESS'){						
						var market_string=resultArray[1];
						var rep_string=resultArray[2];
						var fromDate_string=resultArray[3];
						var toDate_string=resultArray[4];
						var report_string=resultArray[5];
						
						//------------------------ Show filter value
						$("#show_rpt_market").html("Market &nbsp;&nbsp;&nbsp;&nbsp;:"+market_string);
						$("#show_rpt_rep").html("Rep &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+rep_string);
						
						/*if (localStorage.user_type=='sup'){
							$("#show_rpt_date").html("Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:" +fromDate_string);
						}else{
							$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						}*/
						$("#show_rpt_date").html("DateFrom:" +fromDate_string+"</br>DateTo &nbsp;&nbsp;&nbsp;&nbsp;:" +toDate_string);
						
						$("#report_header").html("Freezer Efficiency Report");
						
						//-----------------												
						var dataList=report_string.split('<rd>');
						var dataListLength=dataList.length;
						
						//------------------------
						//0 str(asmName)+'<fd>1'+str(tseName)+'<fd>2'+str(repName)+'<fd>3'+str(depotName)+'<fd>4'+str(retailerCount)+'<fd>5'+str(freezerCount)+'<fd>6'+str(totalAmt)+'<fd>7'+str(salesPerFreezer)
						var reportStrData='<tr style="font-size:13px;font-weight:bold; text-shadow:none; color:#408080;" ><td >ASM</td><td >TSE</td><td >SR</td><td>DB Name</td><td>No. of Retailer</td><td >No. of Freezer</td><td>Sales Till Date</td><td>Sales/ Freezer</td></tr>'
						for (i=0; i < dataListLength; i++){
							var dataDetailList=dataList[i].split('<fd>');
							
							reportStrData+='<tr style="font-size:11px;border-color:#4E9A9A;"><td style="border-color:#4E9A9A;">'+dataDetailList[0]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[1]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[2]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[3]+'</td><td style="border-color:#4E9A9A;">'+dataDetailList[4]+'</td><td style="border-color:#4E9A9A">'+dataDetailList[5]+'</td><td style="border-color:#4E9A9A;text-align:right">'+dataDetailList[6]+'</td><td style="border-color:#4E9A9A;text-align:right">'+dataDetailList[7]+'</td></tr>'
							}
						
						$("#tbl_rpt_show_details").empty()
						$("#tbl_rpt_show_details").append(reportStrData).trigger('create');
						
						//-----								
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						
						var url = "#page_report_show";
						$.mobile.navigate(url);	

					}else{						
						$("#error_rpt").html('Network Timeout, error:1. Please try again.');
						$("#order_report_button").show();
						$("#wait_image_rpt").hide();
						}
				}
			  },
		  error: function(result) {	
				$("#error_rpt").html('Network Timeout, error:2. Please try again.');		  
				$("#order_report_button").show();
				$("#wait_image_rpt").hide();  
		  }
	 });//end ajax	
}

//-----------------------------Visit Save Start
function visitSave(){
	// alert ("NNNN");
	$("#errorChkVSubmit").text("");
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');


	visitClientId=localStorage.visit_client
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	marketInfoStr=''
	productOrderStr=localStorage.productOrderStr
	marchandizingInfoStr=''
	photoRequired=''
	
	campaign_str=''
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback

	
	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);

	localStorage.payment_mode=$("#payment_mode").val();
	if (photoRequired=='Yes' && lscPhoto==''){
		$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
	}else{
		var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
		
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit").html('Invalid Visit Type');
				}else{
					$("#visit_submit").hide();
					$("#wait_image_visit_submit").show();		
					//alert (localStorage.productOrderStr);
					
					//$("#err_save_visit").text(visitClientId+'<fd>'+visit_type+'<fd>'+scheduled_date+'<fd>'+marketInfoStr+'<fd>'+productOrderStr+'<fd>'+marchandizingInfoStr+'<fd>'+campaign_str+'<fd>'+lat+'<fd>'+longitude+'<fd>'+imageName+'<fd>'+localStorage.payment_mode+'<fd>'+chemist_feedback+'<rd>')
					
													
				var save_data = localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show+'<fdfd>'+visitClientId+'<fdfd>'+visit_type+'<fdfd>'+scheduled_date+'<fdfd>'+marketInfoStr+'<fdfd>'+productOrderStr+'<fdfd>'+marchandizingInfoStr+'<fdfd>'+campaign_str+'<fdfd>'+lat+'<fdfd>'+longitude+'<fdfd>'+imageName+'<fdfd>'+localStorage.payment_mode+'<fdfd>'+chemist_feedback+'<rdrd>';	
													//-----------
							
			// Save data edit========================
			if (localStorage.saved_data_submit==1){
				var visit_save=localStorage.visit_save;
				var saved_data_show=localStorage.saved_data_show;
				var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>",save_data)
				//localStorage.visit_save=visit_save_data;
				localStorage.visit_save=visit_save_data
				after_save_data();
				
			}
			else{
				if (saved_dataArray.length-1 < parseInt(localStorage.save_visit_limit) ){
					localStorage.visit_save=localStorage.visit_save+save_data
					after_save_data();
				}
				else{
					alert ("Your Saved limit is " +localStorage.save_visit_limit );
				}
			}
			
					var url = "#page_confirm_visit_success";	
					$.mobile.navigate(url);
													
																							
			
			
			}
		}
	
	
	}//end saved data limit
	
}

function after_save_data(){
	localStorage.visit_client=''
	
	localStorage.productOrderStr='';
	
	localStorage.visit_page="";
	
	localStorage.show_total="";
	
	$("#chemist_feedback").val('')
			

	//-------------
	// Clear localStorage
		
	localStorage.productOrderStr='';
	cancel_cart();
		

	//--------------------------------------------------------
	$(".visit_client").html('');
	
	$("#errorChkVSubmit").html('');
	$("#lat").val('');
	$("#longitude").val('');
	$("#lscPhoto").val('');
	document.getElementById('myImage').src = '';
	
	$("#lat_p").val('');
	$("#long_p").val('');								
	
	$("#checkLocation").html('');
	$("#checkLocationProfileUpdate").html('');
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	
	$("#product_total_last").html('');
	$("#product_list_tbl_cart").html('');
	$("#product_total_cart").html('');
	$("#item_combo_id").val('Search');
	
	//--
	$("#visit_success").html('</br></br>'+'</br>Saved Successfully');
	
	$("#btn_location").show();	
	$("#visit_submit").hide();
	$("#checkLocation").hide('');
	
}


//================== Show saved visit
function getvisitSave_data(){
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');
	
	var saved_data_list="";
	
	//alert (saved_dataArray.length)
	for (var i=0; i < saved_dataArray.length -1 ; i++){
		var visit_market_show = saved_dataArray[i].split('<fdfd>')[0];
		var visit_client_show = saved_dataArray[i].split('<fdfd>')[1];
		
		localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show
			
	   saved_data_list=saved_data_list+'<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="set_save_data('+i+')"  ><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+visit_client_show+'( '+visit_market_show+' )'+'</font></a></li>'
	  // alert (client_id);
														
	}
	var saved_visit=$('#saved_visit');
	
	saved_visit.empty()
	saved_visit.append(saved_data_list);
	saved_visit.listview("refresh");
	//alert (client_id)												
}

function set_save_data(i){
	cancel_cart();
	var visit_save=localStorage.visit_save
	var saved_data_show =visit_save.split('<rdrd>')[i];
	localStorage.saved_data_show = saved_data_show;
	
	
	var saved_data_show_array=saved_data_show.split('<fdfd>')
	
	var market_name = saved_data_show_array[0];
	var visit_client = saved_data_show_array[1];
	
	var visitClientId = saved_data_show_array[2];
	var visit_type = saved_data_show_array[3];
	var scheduled_date = saved_data_show_array[4];
	var marketInfoStr = saved_data_show_array[5];
	var productOrderStr = saved_data_show_array[6];
	var marchandizingInfoStr = saved_data_show_array[7];
	var campaign_str = saved_data_show_array[8];
	var lat = saved_data_show_array[9];
	var longitude = saved_data_show_array[10];
	var imageName = saved_data_show_array[11];
	var payment_mode = saved_data_show_array[12];
	var chemist_feedback = saved_data_show_array[13];
	
	localStorage.visit_market_show=market_name
	var market_Id=market_name.split('|')[1];

	localStorage.visit_client_show=visit_client
	localStorage.visit_client=visitClientId
	
	localStorage.productOrderStr=productOrderStr
	$("#chemist_feedback").val(chemist_feedback);
	
	$(".market").html(market_name);								
	$(".visit_type").html(visit_type);								
	$(".s_date").html(scheduled_date);
	$(".visit_client").html(visit_client);
	
	getOrder_load();
	cart_data();
	
	if (localStorage.visit_location_flag!='YES'){
		//alert (localStorage.visit_location);
		$("#visit_location").hide();
		$("#visit_submit").show();
		
	}
	if (localStorage.delivery_date_flag!='YES'){
		$("#delivery_date_div").hide();
	}
	if (localStorage.payment_date_flag!='YES'){
		$("#payment_date_div").hide();
	}
	if (localStorage.payment_mode_flag!='YES'){
		$("#payment_mode_div").hide();
	}
	
	localStorage.saved_data_submit=1;
	
	if (localStorage.productOrderStr==""){
		var url = "#page_visit";
	}
	else{
		var url = "#page_cart";	
	}
	$.mobile.navigate(url);	
	
}


//====================info button=========

function showInfo(){
//$("#errorChkVSubmit").text(localStorage.base_url+'showInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	//alert (localStorage.visit_client);
	$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'showInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,
				 success: function(result) {
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){							
								$("#showInfo").html("<div width='70%'>"+resultArray[1]+"</div>");
								var url = "#page_show_info";	
								$.mobile.navigate(url);	
								
								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
				  }
			 });//end ajax
	
}
//====================Last Visit=========

function lastVisit(){
	//$("#errorChkVSubmit").text(localStorage.base_url+'lastVisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	//alert (localStorage.base_url+'lastVisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'lastVisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,
				 success: function(result) {
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
								//alert ("sfdg");						
								var result_string=resultArray[1];
 								
								$("#lastVisit").html("<div width='70%'>"+resultArray[1]+"</div>");
								
								var url = "#page_last_visit";	
								$.mobile.navigate(url);	
								
								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
				  }
			 });//end ajax
	
}