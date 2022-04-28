const counter = document.getElementById('counter');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const restablecer = document.getElementById('reset');

let i=0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sum (){
	i++;
	counter.textContent=i;
	showReset();
}

function res(){
	i--;
	counter.textContent=i;
	showReset();
}

function reset(){
	i=0
	counter.textContent="00";
	showReset();
}

function showReset(){
	if (i!=0){
		restablecer.classList.remove('fadeOut');
		restablecer.classList.add('fadeIn');
		restablecer.style.display="";
	}else{
		restablecer.classList.add('fadeOut');
		sleep(500).then(()=>{
			restablecer.classList.remove('fadeIn');
			restablecer.style.display="none";
		});
	}
}

showReset();
console.log("%cVersión 1.0.0\n%cCódigo fuente: https://github.com/GJZ26/Contador.js","color: rgb(11, 0, 160);","font-style: italic;")

sumar.addEventListener('click',sum);
restar.addEventListener('click',res);
restablecer.addEventListener('click',reset);