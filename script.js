
const squareBox = document.getElementById('squareBox')

//button to create sudoku

let applySize = document.getElementById('applySize');

applySize.addEventListener('click', ()=>{
	let horizontalSize = parseInt(document.getElementById('horizontalSize').value);
	let verticalSize = parseInt(document.getElementById('verticalSize').value);
	inputsConstructor(horizontalSize,verticalSize);
});

//board constructor function

function inputsConstructor(horizontalBoard,verticalBoard){
	
	//reset elements
	let squares = []
	let boxes = []
	squareBox.innerHTML = ''
	
	//style of squareBox
	squareBox.style.display='grid';
	squareBox.style.gridTemplateColumns='repeat('+verticalBoard+', 1fr)'


	//create elements
	
	//container Boxes
	
	fragment = document.createDocumentFragment()
	
	for(i=0;i<horizontalBoard*verticalBoard;i++){
	boxes.push(document.createElement('div'))
		boxes[i].classList.add('container')
		//console.log(squareBox.style.width)
		//console.log(squareBox.clientWidth)
		//boxes[i].style.width=parseInt(squareBox.clientWidth/verticalBoard)-4+'px';
		
		//boxes[i].style.height=verticalBoard*41+'px';
		fragment.appendChild(boxes[i]);
	}

		squareBox.appendChild(fragment);


	// individual elements
	for(i=0;i<(horizontalBoard*verticalBoard)**2;i++){
		squares.push(document.createElement('input'));
		squares[i].classList.add('square')
		squares[i].style.width = 87/(horizontalBoard*verticalBoard)+'vmin'
		squares[i].style.height = 87/(horizontalBoard*verticalBoard)+'vmin'
	}
	

	// vertical class added and file color
	let totalElements = 0
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		for(l=0;l<horizontalBoard*verticalBoard;l++){
			squares[totalElements].classList.add('C'+l)
			squares[totalElements].placeholder+='C'+l
			if((i+l)%2==0){
			squares[totalElements].style.background='white';
			}
			else{
			squares[totalElements].style.background='#BFBBFF';
			}
			totalElements++
		}
	}
	

	//horizontal class added
	totalElements = 0
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		for(l=0;l<horizontalBoard*verticalBoard;l++){
			squares[totalElements].classList.add('F'+i)
			squares[totalElements].placeholder+='F'+i
			totalElements++
		}
	}
	
	
	//Box class added for every individual element and all drawn in document

	
	fragment = [];

	for(i=0;i<horizontalBoard*verticalBoard;i++){
	fragment[i]= document.createDocumentFragment()
	}

	totalElements = 0
	for(l=0;l<horizontalBoard;l++){
		for(k=0;k<verticalBoard;k++){
			for(j=0;j<verticalBoard;j++){
				for(i=0;i<horizontalBoard;i++){
				      squares[totalElements].classList.add('B'+(j+l*verticalBoard));
					squares[totalElements].placeholder+='B'+(j+l*verticalBoard);
					
					
				     fragment[j+(l*verticalBoard)].appendChild(squares[totalElements]);		
					totalElements++;
				}
			}
		}
	}
	
	//insert total elements separed by boxes in respective box
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		boxes[i].appendChild(fragment[i])
		boxes[i].style.display='grid';
		boxes[i].style.gridTemplateColumns='repeat('+horizontalBoard+', 1fr)'
	}
	

	// add event listenrer for all elements
	for(i=0;i<squares.length;i++){
		squares[i].addEventListener('input' , color)
		squares[i].addEventListener('click',onClickDeleteText)
	}

	container = document.getElementsByClassName('container')
	
}

function onClickDeleteText(e){
	
	e.target.value = ''
}

//repeated number errors logic

function color(e){
	
	

	horizontal= document.getElementsByClassName(e.target.classList[1])
	vertical = document.getElementsByClassName(e.target.classList[2])
	box = document.getElementsByClassName(e.target.classList[3])
	
	
	searchEquals(e,box)
	searchEquals(e,horizontal)
	searchEquals(e,vertical)
}

function searchEquals(e,direction){
	for(i=0;i<direction.length;i++){
		if(e.target.value == direction[i].value && e.target != direction[i]){
			alert('error in '+e.target.placeholder+' same number at '+direction[i].placeholder)
		}
		else{}
	}
}

//inputsConstructor(3,3)


		console.log(squareBox.clientWidth)

setTimeout(()=>{
	let horizontalSize = parseInt(document.getElementById('horizontalSize').value);
	let verticalSize = parseInt(document.getElementById('verticalSize').value);
	inputsConstructor(horizontalSize,verticalSize);
},0)
