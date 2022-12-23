function changeAppleLogo(){
	
	const appleButton = document.getElementById("apple-download-button");
	const appleLogo = document.querySelector(".apple-logo-white");
	
	appleButton.addEventListener("mouseover", function(){
			setTimeout(function(){
				appleLogo.classList.replace("apple-logo-white", "apple-logo-black");
			}, 100);
		});
	
	appleButton.addEventListener("mouseout", function(){
			setTimeout(function(){
				appleLogo.classList.replace("apple-logo-black", "apple-logo-white");
			}, 100);
		});
	
};



changeAppleLogo();