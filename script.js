const squareBox = document.getElementById('squareBox')

//board constructor
var squares = []
var boxes = []
function inputsConstructor(horizontalBoard,verticalBoard){
	
	//reset elements
	squares = []
	boxes = []
	squareBox.innerHTML = ''

	//create elements
	//container Boxes
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		boxes.push(document.createElement('div'))
		boxes[i].classList.add('container')
		boxes[i].style.width=horizontalBoard*41+'px';
		boxes[i].style.height=verticalBoard*41+'px';
		squareBox.appendChild(boxes[i]);
	}


	// individual elements
	for(i=0;i<(horizontalBoard*verticalBoard)**2;i++){
		squares.push(document.createElement('input'));
		squares[i].classList.add('s')
	}
	

	//squares = document.getElementsByClassName('s')
	

	// vertical class added and color
	let totalElements = 0
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		for(l=0;l<horizontalBoard*verticalBoard;l++){
			squares[totalElements].classList.add('C'+l)
			squares[totalElements].value+='C'+l
			if((i+l)%2==0){
			squares[totalElements].style.background='white';
			}
			else{
			squares[totalElements].style.background='grey';
			}
			totalElements++
		}
	}
	

	//horizontal class added
	totalElements = 0
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		for(l=0;l<horizontalBoard*verticalBoard;l++){
			squares[totalElements].classList.add('F'+i)
			squares[totalElements].value+='F'+i
			totalElements++
		}
	}
	

	//Box Value
	totalElements = 0
	for(l=0;l<horizontalBoard;l++){
		for(k=0;k<verticalBoard;k++){
			for(j=0;j<verticalBoard;j++){
				for(i=0;i<horizontalBoard;i++){
				      squares[totalElements].classList.add('B'+(j+l*verticalBoard));
					squares[totalElements].value+='B'+(j+l*verticalBoard);
					
					boxes[j+(l*verticalBoard)].appendChild(squares[totalElements]);		
					//squares[totalElements]

					totalElements++;
				}
			}
		}
	}

	
	//add elements to document
	
	/*

	for(i=0;i<squares.length;i++){
		if(squares[i].ClassList[3]=='b'+l){
			boxes.push()	
		}
	}
*/

	// add event listenrer for all elements
	for(i=0;i<squares.length;i++){
		squares[i].addEventListener('input' , color)
	}

	container = document.getElementsByClassName('container')
	
	squareBox.style.width=50*horizontalBoard*verticalBoard+'px'
}


//repeated number errors logic




function color(e){
	console.log(e.target)
	horizontal= document.getElementsByClassName(e.target.classList[1])
	vertical = document.getElementsByClassName(e.target.classList[2])
	box = document.getElementsByClassName(e.target.classList[3])
	

	searchEquals(e,horizontal)
	searchEquals(e,vertical)
	searchEquals(e,box)
}

function searchEquals(e,direction){
	for(i=0;i<direction.length;i++){
		if(e.target.value == direction[i].value && e.target != direction[i]){
			console.log('exist other same')
		}
	}
}
inputsConstructor(3,3)
