try {
    let pass = document.getElementById("file_input");
    pass.onchange = function (f) {
        if (pass.value) {
            let file_result = f.target.files[0];

            let reader = new FileReader();

            reader.readAsText(file_result);

            reader.addEventListener('load', function () {
                document.forms.fm.input.textContent = reader.file_result;
            });
        }
    };
} catch(e){
	console.log(e.message);
}

function make(){
	let result = "";
	let is_dowbl = false;
	let input_text = document.forms.fm.input.value;
	
	for(let i = 0; i < input_text.length; i++){
		let input_text_slice = input_text.slice(i, 1+i);
		if(input_text_slice == '"') {
			if(!is_dowbl) is_dowbl = true;
			else if(is_dowbl) is_dowbl = false;
			result = result + '"';
			continue;
		}
		if(is_dowbl){
			let slice_result = input_text_slice.codePointAt(0);
			slice_result = (('0000' + slice_result.toString(16).toUpperCase()).substr(-4));
			slice_result = "\\u" + slice_result;
			result = result + slice_result;
		}
		else {
			result = result + input_text_slice;
		}
	}
	document.forms.fm.output.value = result;
}

function copy() {
	let copyText = document.forms.fm.output.value;
	if(copyText !== "") {
		let copyTarget = document.getElementById("output");
		copyTarget.select();
		document.execCommand("Copy");
		alert("コピーしました( 'ω')");
	}
}

(function($){
    $(function(){
        var bpX = 0;
        var bpY = 0;
        setInterval(function(){
            bpX += 0;
            bpY += +0.5;
            $('body').css('background-position', bpX+'px '+bpY+'px')
        })
    });
})(jQuery);