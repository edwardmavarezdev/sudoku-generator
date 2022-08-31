

//space to create sudoku
const squareBox = document.getElementById('squareBox')

//space to create numbers buttons
const buttonsBox = document.getElementById('buttons')

//button to create sudoku
let applySize = document.getElementById('applySize');

//size data input
applySize.addEventListener('click', ()=>{
	let horizontalSize = parseInt(document.getElementById('horizontalSize').value);
	let verticalSize = parseInt(document.getElementById('verticalSize').value);
	inputsConstructor(horizontalSize,verticalSize);
});



//board constructor function

function inputsConstructor(horizontalBoard,verticalBoard){
	
	////sudoku

	//reset container of numbers and sudoku
	squareBox.innerHTML = '';
	buttonsBox.innerHTML = '';
	
	//style of squareBox
	squareBox.style.display='grid';
	squareBox.style.gridTemplateColumns='repeat('+verticalBoard+', 1fr)'


	//create elements
	
	//reset fragment
	fragment = document.createDocumentFragment()
	
	//reset boxes
	let boxes = [];
	
	//container Boxes
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		boxes.push(document.createElement('div'))
		boxes[i].classList.add('container')
		
		fragment.appendChild(boxes[i]);
	}
		squareBox.appendChild(fragment);


	//reset squares	
	let squares = [];

	// individual elements
	for(i=0;i<(horizontalBoard*verticalBoard)**2;i++){
		squares.push(document.createElement('input'));
		squares[i].type=('button')
		squares[i].classList.add('square')
		squares[i].style.width = 87/(horizontalBoard*verticalBoard)+'vmin'
		squares[i].style.height = 87/(horizontalBoard*verticalBoard)+'vmin'
	}
	

	// vertical class added and file color
	let totalElements = 0
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		for(l=0;l<horizontalBoard*verticalBoard;l++){
			squares[totalElements].classList.add('C'+l)
			//squares[totalElements].placeholder+='C'+l
			if((i+l)%2==0){
			squares[totalElements].style.background='white';
			}
			else{
			squares[totalElements].style.background='#ba9bff';
			}
					
			totalElements++
		}
	}
	

	//horizontal class added
	totalElements = 0
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		for(l=0;l<horizontalBoard*verticalBoard;l++){
			squares[totalElements].classList.add('F'+i)
			//squares[totalElements].placeholder+='F'+i
			totalElements++
		}
	}
	
	//reset fragment for use
	fragment = document.createDocumentFragment();
	
	//Box class added for every individual element and all drawn in document
	for(i=0;i<horizontalBoard*verticalBoard;i++){
	fragment[i]= document.createDocumentFragment()
	}

	totalElements = 0
	for(l=0;l<horizontalBoard;l++){
		for(k=0;k<verticalBoard;k++){
			for(j=0;j<verticalBoard;j++){
				for(i=0;i<horizontalBoard;i++){
					squares[totalElements].classList.add('B'+(j+l*verticalBoard));
					//squares[totalElements].placeholder+='B'+(j+l*verticalBoard);
					
					
				    fragment[j+(l*verticalBoard)].appendChild(squares[totalElements]);		
					totalElements++;
				}
			}
		}
	}
	
	//insert total elements separed by boxes
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		boxes[i].appendChild(fragment[i])
		boxes[i].style.display='grid';
		boxes[i].style.gridTemplateColumns='repeat('+horizontalBoard+', 1fr)'
	
	}
	//define classCapture
	classCapture=null;

	// add event listeners for all elements in sudoku
	for(i=0;i<squares.length;i++){
		squares[i].addEventListener('input' , error)
		squares[i].addEventListener('click',onClickDeleteText)

		squares[i].addEventListener('focus',(e)=>{
			e.target.style.backgroundImage='linear-gradient(#ff8,#ff8)';
			classCapture = e.target
		});
			
		squares[i].addEventListener('blur',(e)=>{
			e.target.style.backgroundImage='';
		});
	}

	////buttons
	
	//reset fragment for use
	fragment = document.createDocumentFragment();

	//reset numbers
	let numbers = [];

	//create buttons
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		numbers.push(document.createElement('input'));
		numbers[i].classList.add('number-'+i);
		numbers[i].type='button';
		
		fragment.appendChild(numbers[i]);
	}
		buttonsBox.appendChild(fragment);
	

	// add event listeners for all number Buttons
	// number value definition
	let values = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	for(i=0;i<horizontalBoard*verticalBoard;i++){

		buttonsBox.children[i].value=values[i];
		buttonsBox.children[i].addEventListener('click',(e)=>{
			if(classCapture!=null){
				classCapture.value = e.target.value;
				classCapture.focus();
				setTimeout(()=>{error(classCapture)},10);
			}
		});
	}


}

function onClickDeleteText(e){
	
	e.target.value = ''
}

//repeated number errors logic

function error(e){

	horizontal= document.getElementsByClassName(e.classList[1])
	vertical = document.getElementsByClassName(e.classList[2])
	box = document.getElementsByClassName(e.classList[3])
	
	searchEquals(e,box)
	searchEquals(e,horizontal)
	searchEquals(e,vertical)
}

function searchEquals(e,direction){
	for(i=0;i<direction.length;i++){
		if(e.value == direction[i].value && e != direction[i]){
			alert('error in '+e.placeholder+' same number at '+direction[i].placeholder)
		}
		else{}
	}
}
/*

// buttons functionality
const n1 = document.getElementById('N1');
const n2 = document.getElementById('N2');

n1.addEventListener('click',()=>{
	classCapture.value ='1';
	classCapture.focus();
	setTimeout(()=>{error(classCapture)},10);
})




/*
setTimeout(()=>{
	let horizontalSize = parseInt(document.getElementById('horizontalSize').value);
	let verticalSize = parseInt(document.getElementById('verticalSize').value);
	inputsConstructor(horizontalSize,verticalSize);
},0)*/
