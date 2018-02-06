﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaption="Loading";
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#000000";
bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="0";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#000000";
bookConfig.iconColor="#ECF5FB";
bookConfig.pageNumColor="#333333";
bookConfig.iconFontColor="#FFFFFF";
bookConfig.toolbarAlwaysShow="No";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="Hide";
bookConfig.enablePageBack="Show";
bookConfig.ShareButtonVisible="Show";
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="Show";
bookConfig.bookmarkBackground="#000000";
bookConfig.bookmarkFontColor="#CCCCCC";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchFontColor="#FFFFFF";
bookConfig.searchHightlightColor="#FFFF00";
bookConfig.SelectTextButtonVisible="Hide";
bookConfig.PrintButtonVisible="Yes";
bookConfig.BackgroundSoundButtonVisible="Enable";
bookConfig.FlipSound="Enable";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="9";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.minZoomWidth="700";
bookConfig.minZoomHeight="518";
bookConfig.mouseWheelFlip="Yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Hide";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.bgBeginColor="#E2E2E2";
bookConfig.bgEndColor="#E2E2E2";
bookConfig.bgMRotation="90";
bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.6";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="Yes";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#E8E8E8";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.flippingTime="0.3";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.thicknessWidthType="Thinner";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="300";
bookConfig.leftRightPnlShowOption="None";
bookConfig.LinkDownColor="#800080";
bookConfig.LinkAlpha="0.2";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "JLSYmtIGcYgmOFVbqoIGVXkgGLdRkvDBbaujLDTespPMWXpqBJVYriGAXWvmOBQajpMFQRijADeQltLMSdvtNEedmlDHXR52aDDaaF_";
bookConfig.Html5Template = "Metro";
bookConfig.searchTextJS="javascript/search_config.js";
bookConfig.searchPositionJS="javascript/text_position[1].js";
bookConfig.totalPageCount=23;
bookConfig.largePageWidth=630;
bookConfig.largePageHeight=810;
bookConfig.bookTitle="College_Careers_Draft.indd";
bookConfig.normalPath="../files/mobile/";
bookConfig.largePath="../files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.MidBgColor="#a4efdc";
bookConfig.bookmarkCR = "e31cb12f6d9d3b5da20034ab63131b75600b6fbd";
bookConfig.thumbPath="../files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnDownload" : "Download","btnPrint" : "Print","btnSearch" : "Search","btnClearSearch" : "Clear","frmSearchPrompt" : "Clear","btnBookMark" : "Table of content","btnHelp" : "Help","btnHome" : "Home","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnShareEmail" : "Share","btnSocialShare" : "Social Share","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnDragToMove" : "Move by mouse drag","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnGoToHome" : "Return Home","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintCaption" : "Print","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","pnlSearchInputInvalid" : "The search text is too short.","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","btnThumb" : "Thumbnails","lblPages" : "Pages:","lblPagesFound" : "Pages:","lblPageIndex" : "Page","btnAbout" : "About","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove BookMark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","infCopyToClipboard" : "Your browser does not support clipboard. ","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareCaption" : "Share","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Backward","btnPageForward" : "Forward","SelectTextCopy" : "Copy Selected Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock","btnCrop" : "Crop","btnDragButton" : "Drag","btnFlipBook" : "Flip Book","btnSlideMode" : "Slide Mode","btnSinglePageMode" : "Single Page Mode","btnVertical" : "Vertical Mode","btnHotizontal" : "Horizontal Mode","btnClose" : "Close","btnDoublePage" : "Double Page","btnBookStatus" : "Book View","checkBoxInsert" : "Insert Current Page","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "Video Gallery","btnSlideShow" : "Slide Show","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "add to page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "Remove All","tltCursor" : "cursor","tltAddHighlight" : "add highlight","tltAddTexts" : "add texts","tltAddShapes" : "add shapes","tltAddNotes" : "add notes","tltAddImageFile" : "add image file","tltAddSignature" : "add signature","tltAddLine" : "add line","tltAddArrow" : "add arrow","tltAddRect" : "add rect","tltAddEllipse" : "add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just cilck the appropriate button below.","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","btnQRCode" : "Click to scan QR code","btnRotateLeft" : "Rotate Left","btnRotateRight" : "Rotate Right","lblSelectMode" : "Select view mode please.","frmDownloadPreview" : "Preview","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click on the logo to reach the official website of the company.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Switch horizontal and vertical view on mobile devices.","TTActionQuiz_PlayAgain" : "Do you wanna play it again","TTActionQuiz_Ration" : "Your ratio is","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Select Text","btnNote" : "Annotation","btnPhoneNumber" : "Telephone"}];var pageEditor ={"setting":{annoPlaying:"true",shoppingCartHTML:"false",shoppingCartOptinon:{type:"PayPal",paypal:"",method:"POST",sandbox:"false",address:"",theme:"",body:"Hi xxx<br/>   I'm going to buy below product(s):<br/>    $\{shopping\}<br/>Full Name",showPrice:"true",showTime:"true"}},"pageAnnos":[[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118552027",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link9",x:"0.1380952380952381",y:"0.8592592592592593",width:"0.773015873015873",height:"0.06790123456790123",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://my.avid.org/curriculum/chapter2.aspx?id=25957",linkTarget:"_blank"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoHotSpots",annoId:"20186118557196",alpha:"1",location:{tannoName:"hotSpots4",x:"0.2841269841269841",y:"0.4962962962962963",width:"0.03968253968253968",height:"0.030864197530864196",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},hotSpotsURL:"./files/pageConfig/Red Ripple.swf",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionSwfSlide",swfURL:"",winIsAlphaBoolean:"false",targetText:"<TEXTFORMAT LEFTMARGIN=\"2\"><P ALIGN=\"LEFT\"><FONT FACE=\"Arial\" SIZE=\"10\" COLOR=\"#404040\" LETTERSPACING=\"0\" KERNING=\"0\">Quickwrite is a fluency activity where students write nonstop for two to five minutes on a specific top that they are studying.</FONT></P></TEXTFORMAT>",targetType:"Text",outType:"BtnClick",startType:"left",MoveType:"left",windowWidth:"0",windowHeight:"0",targetScale:"2",windowScale:"2",targetWidth:"0",targetHeight:"0",targetRange:"page"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoMovie",annoId:"2018611855867",alpha:"1",prompt:"undefined|",promptTime:"undefined|",moviePlayTriggerEvt:"none",movieStopTriggerEvt:"EVT_PageOffView",replayWhenPlayEventTrigger:"0",location:{tannoName:"movie3",x:"0.022222222222222223",y:"0.7481481481481481",width:"0.24761904761904763",height:"0.1338888888888889",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},cpName:"fbp",className:"com.mobiano.flipbook.movie.TAnnoMovie",url:"https://bcove.video/2EqwuQ8",skinColor:"10066329",skin:"Skin 1",sizeBool:"false",previewUrl:"",isShowTimer:"false"}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoButton",annoId:"20186118558594",alpha:"1",location:{tannoName:"button1",x:"0.6523809523809524",y:"0.2679012345679012",width:"0.2873015873015873",height:"0.08395061728395062",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},highlightsBool:"false",url:"./files/pageConfig/button_watermark01.swf",buttonCaption:"Quiz Yourself!",captionY:"28.72",HRate:"0.040741",Format:{font:"Montserrat",size:"18",bold:"false",italic:"false",color:"16777215"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118556868",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link11",x:"0.13174603174603175",y:"0.8419753086419753",width:"0.7857142857142857",height:"0.08395061728395062",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://my.avid.org/curriculum/chapter2.aspx?id=25958",linkTarget:"_blank"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118556139",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link2",x:"0.7603174603174603",y:"0.0962962962962963",width:"0.05714285714285714",height:"0.04814814814814815",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionShowInformation",width:"530",height:"300",swfURL:"./files/pageConfig/ShowInformation.swf",imgURL:"null",imgBool:"false",imgAddBool:"false",titleText:"",titleColor:"0",titleSize:"18",titleFont:"Arial",bodyText:"<TEXTFORMAT LEFTMARGIN=\"2\"><P ALIGN=\"LEFT\"><FONT FACE=\"Arial\" SIZE=\"12\" COLOR=\"#404040\" LETTERSPACING=\"0\" KERNING=\"0\">This icon shows this is an activity for kindergarten through 3rd grade.</FONT></P></TEXTFORMAT>",bodyAlign:"left",bodyColor:"0",bodySize:"12",bodyFont:"Arial",buttonColor:"0",buttonBgColor:"12632256",buttonName:"Learn More",link:"http://",bgColor1:"15395562",bgColor2:"12632256",bgAngle:"90"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118554733",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link3",x:"0.8222222222222222",y:"0.0962962962962963",width:"0.0530952380952381",height:"0.0495679012345679",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionShowInformation",width:"530",height:"300",swfURL:"./files/pageConfig/ShowInformation.swf",imgURL:"null",imgBool:"false",imgAddBool:"false",titleText:"",titleColor:"0",titleSize:"18",titleFont:"Arial",bodyText:"<TEXTFORMAT LEFTMARGIN=\"2\"><P ALIGN=\"LEFT\"><FONT FACE=\"Arial\" SIZE=\"12\" COLOR=\"#404040\" LETTERSPACING=\"0\" KERNING=\"0\">This activity is appropriate for 4th through 6th graders.</FONT></P></TEXTFORMAT>",bodyAlign:"left",bodyColor:"0",bodySize:"12",bodyFont:"Arial",buttonColor:"0",buttonBgColor:"12632256",buttonName:"Learn More",link:"http://",bgColor1:"15395562",bgColor2:"12632256",bgAngle:"90"}}],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118555413",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link8",x:"0.1349206349206349",y:"0.854320987654321",width:"0.780952380952381",height:"0.07160493827160494",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://my.avid.org/curriculum/chapter2.aspx?id=25959",linkTarget:"_blank"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoHotSpots",annoId:"20186118551626",alpha:"1",location:{tannoName:"hotSpots2",x:"0.6634920634920635",y:"0.08641975308641975",width:"0.06031746031746032",height:"0.04691358024691358",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},hotSpotsURL:"./files/pageConfig/Red Ripple.swf",action:{triggerEventType:"mouseMove",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionSwfSlide",swfURL:"",winIsAlphaBoolean:"false",targetText:"<TEXTFORMAT LEFTMARGIN=\"2\"><P ALIGN=\"LEFT\"><FONT FACE=\"Arial\" SIZE=\"12\" COLOR=\"#404040\" LETTERSPACING=\"0\" KERNING=\"0\">A growth mindset is the idea that an individual believes their talents can be developed (through hard work, good strategies, and input from others)</FONT></P></TEXTFORMAT>",targetType:"Text",outType:"Mouse Out",startType:"right",MoveType:"right",windowWidth:"20",windowHeight:"20",targetScale:"2",windowScale:"3",targetWidth:"0",targetHeight:"0",targetRange:"page"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118551970",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link4",x:"0.7714285714285715",y:"0.27901234567901234",width:"0.08698412698412698",height:"0.01580246913580247",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www",linkTarget:"Blank"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118557337",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link5",x:"0.34444444444444444",y:"0.2938271604938272",width:"0.5152380952380953",height:"0.01580246913580247",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"hewlett.org/uploads/documents/Academic_Mindsets_as_a_Critical",linkTarget:"Blank"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118552644",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link6",x:"0.28888888888888886",y:"0.21975308641975308",width:"0.626984126984127",height:"0.1271604938271605",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.hewlett.org/library/academic-mindsets-as-a-critical-component-of-deeper-learning/",linkTarget:"_blank"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118555614",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link7",x:"0.1349206349206349",y:"0.8530864197530864",width:"0.7777777777777778",height:"0.07407407407407407",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://my.avid.org/curriculum/chapter2.aspx?id=25960",linkTarget:"_blank"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118553206",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link8",x:"0.5031746031746032",y:"0.6839506172839506",width:"0.182282",height:"0.015807",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.mindsetworks.com",linkTarget:"_blank"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118554292",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link3",x:"0.4031746031746032",y:"0.5617283950617284",width:"0.382201",height:"0.015807",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.youtube.com/watch?v=cgLYkV689s4",linkTarget:"_blank"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118552242",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link4",x:"0.4031746031746032",y:"0.608641975308642",width:"0.428125",height:"0.015807",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.bioedonline.org/lessons-and-more/resource",linkTarget:"_blank"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118557486",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link5",x:"0.4031746031746032",y:"0.6567901234567901",width:"0.377312",height:"0.015807",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://faculty.washington.edu/chudler/interr.html",linkTarget:"_blank"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118557183",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link6",x:"0.4936507936507937",y:"0.674074074074074",width:"0.378536",height:"0.015807",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.kizoomlabs.com/products/brain-jump",linkTarget:"_blank"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",annoId:"20186118557069",alpha:"1",overColor:"8388736",downColor:"8388736",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link7",x:"0.4031746031746032",y:"0.7209876543209877",width:"0.45357142857142857",height:"0.030432098765432097",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0",pageWidth:"630",pageHeight:"810"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.deakgroup.com/our-educators/joann-deak-phd/your-fantastic-elastic-brain",linkTarget:"_blank"}}]]}
;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}