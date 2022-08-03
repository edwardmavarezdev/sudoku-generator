
const squareBox = document.getElementById('squareBox')

//board constructor function

function inputsConstructor(horizontalBoard,verticalBoard){
	
	//reset elements
	let squares = []
	let boxes = []
	squareBox.innerHTML = ''
	squareBox.style.width=parseInt(document.getElementsByTagName('body')[0].clientWidth*0.9+'px');
		//60*horizontalBoard*verticalBoard+'px';
	////create elements
	
	//container Boxes
	
	fragment = document.createDocumentFragment()
	
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		boxes.push(document.createElement('div'))
		boxes[i].classList.add('container')
		//console.log(squareBox.style.width)
		//console.log(squareBox.clientWidth)
		boxes[i].style.width=parseInt(squareBox.clientWidth/verticalBoard)-4+'px';
		
		//boxes[i].style.height=verticalBoard*41+'px';
		fragment.appendChild(boxes[i]);
	}

		squareBox.appendChild(fragment);


	// individual elements
	for(i=0;i<(horizontalBoard*verticalBoard)**2;i++){
		squares.push(document.createElement('input'));
		squares[i].classList.add('square')
		squares[i].style.width =squareBox.children[0].clientWidth/horizontalBoard+'px'
		squares[i].style.height =squareBox.children[0].clientWidth/horizontalBoard+'px'
	}
	

	// vertical class added and file color
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
					squares[totalElements].value+='B'+(j+l*verticalBoard);
					
					
				     fragment[j+(l*verticalBoard)].appendChild(squares[totalElements]);		
					totalElements++;
				}
			}
		}
	}
	
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		boxes[i].appendChild(fragment[i])
	}

	// add event listenrer for all elements
	for(i=0;i<squares.length;i++){
		squares[i].addEventListener('input' , color)
	}

	container = document.getElementsByClassName('container')
	
}


//repeated number errors logic

function color(e){
	console.log(e.target)
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
			console.log('exist other same')
		}
	}
}

//inputsConstructor(3,3)


		console.log(squareBox.clientWidth)

inputsConstructor(3,3)
