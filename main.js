/* 메인 홈페이지 아이콘 숨김을 위한 코드 */






function toggleBtn1() {
  
	// 토글 할 버튼 선택 (btn1)
	const btn1 = document.getElementById('show-popup1');
	const btn2 = document.getElementById('show-popup2');
	const btn3 = document.getElementById('show-popup3');
	const btn4 = document.getElementById('show-popup4');
	const btn5 = document.getElementById('show-popup5');
	const btn6 = document.getElementById('show-popup6');
	const btnmain = document.getElementById('main-button');
	
	
	
	// btn1 숨기기 (visibility: hidden)
	if(btn1.style.visibility !== 'hidden') {
	  btn1.style.visibility = 'hidden';
	  btn2.style.visibility = 'hidden';
	  btn3.style.visibility = 'hidden';
	  btn4.style.visibility = 'hidden';
	  btn5.style.visibility = 'hidden';
	  btn6.style.visibility = 'hidden';
	}
	// btn` 보이기 (visibility: visible)
	else {
	  btn1.style.visibility = 'visible';
	  btn2.style.visibility = 'visible';
	  btn3.style.visibility = 'visible';
	  btn4.style.visibility = 'visible';
	  btn5.style.visibility = 'visible';
	  btn6.style.visibility = 'visible';
	  btnmain.style.visibility = 'hidden';
	}	
  }
  function toggleBtn2() {
  
	const btn11 = document.getElementById('show-popup1');
	const btn22 = document.getElementById('show-popup2');
	const btn33 = document.getElementById('show-popup3');
	const btn44 = document.getElementById('show-popup4');
	const btn55 = document.getElementById('show-popup5');
	const btn66 = document.getElementById('show-popup6');
	const btnmain1 = document.getElementById('main-button');
	
	
	
	// btn1 숨기기 (visibility: hidden)
	if(btnmain1.style.visibility !== 'hidden') {
	  btn11.style.visibility = 'hidden';
	  btn22.style.visibility = 'hidden';
	  btn33.style.visibility = 'hidden';
	  btn44.style.visibility = 'hidden';
	  btn55.style.visibility = 'hidden';
	  btn66.style.visibility = 'hidden';
	  btnmain1.style.visibility = 'visible';
	}
	// btn` 보이기 (visibility: visible)
	else {
		btn11.style.visibility = 'hidden';
		btn22.style.visibility = 'hidden';
		btn33.style.visibility = 'hidden';
		btn44.style.visibility = 'hidden';
		btn55.style.visibility = 'hidden';
		btn66.style.visibility = 'hidden';
	  btnmain1.style.visibility = 'visible';
	}	
  }


/* 갤러리 팝업을 위한 코드 */

//var images = ["/img/portfolio/1.png", "/img/portfolio/2.png", "/img/portfolio/3.png", "/img/portfolio/4.png", "/img/portfolio/5.png"];
var images = [
	"/img/portfolio/OUEN_1.jpg", "/img/portfolio/OUEN_2.jpg", "/img/portfolio/OUEN_3.jpg",
	"/img/portfolio/OUEN_4.jpg", "/img/portfolio/OUEN_5.jpg", "/img/portfolio/OUEN_6.jpg",
	"/img/portfolio/OUEN_7.jpg", "/img/portfolio/OUEN_8.jpg", "/img/portfolio/OUEN_9.jpg",
	"/img/portfolio/OUEN_10.jpg", "/img/portfolio/OUEN_11.jpg", "/img/portfolio/OUEN_12.jpg",
	"/img/portfolio/ABD_01.jpg", "/img/portfolio/ABD_02.jpg", "/img/portfolio/ABD_03.jpg",
	"/img/portfolio/ABD_04.jpg", "/img/portfolio/ABD_05.jpg", "/img/portfolio/ABD_06.jpg", "/img/portfolio/ABD_07.jpg",
	"img/portfolio/ANONIS_1.jpg", "/img/portfolio/ANONIS_2.jpg", "/img/portfolio/ANONIS_3.jpg", 
	"/img/portfolio/ANONIS_4.jpg", "/img/portfolio/ANONIS_5.jpg", "/img/portfolio/ANONIS_6.jpg", 
	"/img/portfolio/ANONIS_7.jpg", "/img/portfolio/ANONIS_8.jpg", "/img/portfolio/ANONIS_9.jpg", 
	"/img/portfolio/ANONIS_10.jpg", "/img/portfolio/ANONIS_11.jpg", "/img/portfolio/ANONIS_12.jpg", 
	"/img/portfolio/ANONIS_13.jpg", "/img/portfolio/ANONIS_14.jpg", "/img/portfolio/ANONIS_15.jpg", 
	"/img/portfolio/ANONIS_16.jpg", "/img/portfolio/ANONIS_17.jpg", "/img/portfolio/ANONIS_18.jpg", 
	"/img/portfolio/ANONIS_19.jpg", "/img/portfolio/ANONIS_20.jpg", "/img/portfolio/ANONIS_21.jpg", 
	"/img/portfolio/ANONIS_22.jpg", "/img/portfolio/ANONIS_23.jpg", "/img/portfolio/ANONIS_24.jpg", 
	"/img/portfolio/ANONIS_25.jpg", "/img/portfolio/ANONIS_26.jpg", "/img/portfolio/ANONIS_27.jpg", 
	"/img/portfolio/ANONIS_28.jpg", "/img/portfolio/ANONIS_29.jpg", "/img/portfolio/ANONIS_30.jpg", 
	"/img/portfolio/ANONIS_31.jpg", "/img/portfolio/ANONIS_32.jpg", "/img/portfolio/ANONIS_33.jpg", 
	"/img/portfolio/ANONIS_34.jpg", "/img/portfolio/ANONIS_35.jpg", "/img/portfolio/ANONIS_36.jpg", 
	"/img/portfolio/ANONIS_37.jpg", "/img/portfolio/anoco_1.jpg", "/img/portfolio/anoco_2.jpg", 
	"/img/portfolio/anoco_3.jpg", "/img/portfolio/anoco_4.jpg", "/img/portfolio/AYAMORIE_1.jpg", 
	"/img/portfolio/AYAMORIE_2.jpg", "/img/portfolio/AYAMORIE_3.jpg", "/img/portfolio/ZOSUNGA_1.jpg", "/img/portfolio/ZOSUNGA_2.jpg",
    "/img/portfolio/SEIZESEI_1.jpg", "/img/portfolio/SEIZESEI_2.jpg", "/img/portfolio/SEIZESEI_3.jpg", "/img/portfolio/OMO_1.jpg", 
	"/img/portfolio/OMO_2.jpg", "/img/portfolio/OMO_3.jpg", "/img/portfolio/OMO_4.jpg",
    "/img/portfolio/LOTUSYEON_1.jpg", "/img/portfolio/LOTUSYEON_2.jpg", "/img/portfolio/LOTUSYEON_3.jpg", 
	"/img/portfolio/Heinz_1.jpg", "/img/portfolio/Heinz_2.jpg", "/img/portfolio/Roompacker.jpg", "/img/portfolio/66girls.jpg"]

	var filenames = [
		"OUEN_1.jpg", "OUEN_2.jpg", "OUEN_3.jpg", "OUEN_4.jpg", "OUEN_5.jpg", "OUEN_6.jpg",
		"OUEN_7.jpg", "OUEN_8.jpg", "OUEN_9.jpg", "OUEN_10.jpg", "OUEN_11.jpg", "OUEN_12.jpg",
		"ABD_01.jpg", "ABD_02.jpg", "ABD_03.jpg", "ABD_04.jpg", "ABD_05.jpg", "ABD_06.jpg", "ABD_07.jpg",
		"ANONIS_1.jpg", "ANONIS_2.jpg", "ANONIS_3.jpg", "ANONIS_4.jpg", "ANONIS_5.jpg", "ANONIS_6.jpg",
		"ANONIS_7.jpg", "ANONIS_8.jpg", "ANONIS_9.jpg", "ANONIS_10.jpg", "ANONIS_11.jpg", "ANONIS_12.jpg",
		"ANONIS_13.jpg", "ANONIS_14.jpg", "ANONIS_15.jpg", "ANONIS_16.jpg", "ANONIS_17.jpg", "ANONIS_18.jpg",
		"ANONIS_19.jpg", "ANONIS_20.jpg", "ANONIS_21.jpg", "ANONIS_22.jpg", "ANONIS_23.jpg", "ANONIS_24.jpg",
		"ANONIS_25.jpg", "ANONIS_26.jpg", "ANONIS_27.jpg", "ANONIS_28.jpg", "ANONIS_29.jpg", "ANONIS_30.jpg",
		"ANONIS_31.jpg", "ANONIS_32.jpg", "ANONIS_33.jpg", "ANONIS_34.jpg", "ANONIS_35.jpg", "ANONIS_36.jpg",
		"ANONIS_37.jpg", "anoco_1.jpg", "anoco_2.jpg", "anoco_3.jpg", "anoco_4.jpg", "AYAMORIE_1.jpg",
		"AYAMORIE_2.jpg", "AYAMORIE_3.jpg", "ZOSUNGA_1.jpg", "ZOSUNGA_2.jpg", "SEIZESEI_1.jpg", "SEIZESEI_2.jpg",
		"SEIZESEI_3.jpg", "OMO_1.jpg", "OMO_2.jpg", "OMO_3.jpg", "OMO_4.jpg", "LOTUSYEON_1.jpg", "LOTUSYEON_2.jpg",
		"LOTUSYEON_3.jpg", "Heinz_1.jpg", "Heinz_2.jpg", "Roompacker.jpg", "66girls.jpg"
	  ];

var currentImageIndex;

document.querySelectorAll(".thumbnail").forEach(function(thumbnail, index) {
	thumbnail.addEventListener("click", function() {
		currentImageIndex = index;
		showPopup();
		showImage();
	});
});

document.querySelector("#prev-button").addEventListener("click", function() {
	currentImageIndex--;
	if (currentImageIndex < 0) {
		currentImageIndex = images.length - 1;
	}
	showImage();
});

document.querySelector("#next-button").addEventListener("click", function() {
	currentImageIndex++;
	if (currentImageIndex >= images.length) {
		currentImageIndex = 0;
	}
	showImage();
});

document.querySelector("#close-button").addEventListener("click", function() {
	hidePopup();
});


function hidePopup() {
	document.querySelector("#popup").style.display = "none";
}

function showImage() {
	var imageElement = document.querySelector("#image");
	var filenameElement = document.querySelector("#filename");
  
	imageElement.src = images[currentImageIndex];
	filenameElement.textContent = filenames[currentImageIndex];
  }
  
  function showPopup() {
	var popupElement = document.querySelector("#popup");
	popupElement.style.display = "flex";
  }



/* 비디오 팝업을 위한 코드 */

function openVideo1() {
	var videoUrl = "https://www.youtube.com/embed/epTzfG_GKE0";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo2() {
	var videoUrl = "https://www.youtube.com/embed/U5g2GPWwaAg";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo3() {
	var videoUrl = "https://www.youtube.com/embed/j568VCRMsRc";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo4() {
	var videoUrl = "https://www.youtube.com/embed/Fm5DBnH5Mn8";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo5() {
	var videoUrl = "https://www.youtube.com/embed/FVQYucflUl8";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo6() {
	var videoUrl = "https://www.youtube.com/embed/XpfPaOQ2kI0";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo7() {
	var videoUrl = "https://www.youtube.com/embed/7eklYNSwVcg";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo8() {
	var videoUrl = "https://www.youtube.com/embed/C-rJlzWIXIo";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo9() {
	var videoUrl = "https://www.youtube.com/embed/Y6-_bO1d3yQ";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo10() {
	var videoUrl = "https://www.youtube.com/embed/p-GB2dT1jsk";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo11() {
	var videoUrl = "https://www.youtube.com/embed/exqOqh45NiY";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo12() {
	var videoUrl = "https://www.youtube.com/embed/cjhtdG73dJ8";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo13() {
	var videoUrl = "https://www.youtube.com/embed/rPdv2s6ytbM";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo14() {
	var videoUrl = "https://www.youtube.com/embed/oixrSecaTRY";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo15() {
	var videoUrl = "https://www.youtube.com/embed/6N5pQBK4U3M";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  
  function openVideo16() {
	var videoUrl = "https://www.youtube.com/embed/qrSGixFDE0Y";

	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "block";
	videoPlayer.src = videoUrl;
  }
  
  

  function closeVideo() {
	var popup = document.getElementById("videoPopup");
	var videoPlayer = document.getElementById("videoPlayer");
  
	popup.style.display = "none";
	videoPlayer.src = "";
  }

  /* */