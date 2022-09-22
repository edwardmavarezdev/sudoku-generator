

//space to create sudoku
const squareBox = document.getElementById('squareBox')

//space to create numbers buttons
const buttonsBox = document.getElementById('buttons')

//button to create sudoku
let applySize = document.getElementById('applySize');

//size data input
applySize.addEventListener('click',()=>{
	let horizontalSize = parseInt(document.getElementById('horizontalSize').innerHTML);
	let verticalSize = parseInt(document.getElementById('verticalSize').innerHTML);
	
	squareBox.style.display ='';
	buttonsBox.style.display ='';
	size.style.display='none';

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
	let squareBoxSize = 87;
	squareBox.style.width = squareBoxSize+'vmin';
	squareBox.style.height = squareBoxSize+'vmin';

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
		squares[i].style.width = squareBoxSize/(horizontalBoard*verticalBoard)+'vmin'
		squares[i].style.height = squareBoxSize/(horizontalBoard*verticalBoard)+'vmin'
	}
	

	// vertical class added and file color
	let totalElements = 0
	for(i=0;i<horizontalBoard*verticalBoard;i++){
		for(l=0;l<horizontalBoard*verticalBoard;l++){
			squares[totalElements].classList.add('C'+l)
			//squares[totalElements].placeholder+='C'+l
			if((i+l)%2==0){
			squares[totalElements].classList.add('parBackground');
			}
			else{
			squares[totalElements].classList.add('imparBackground');
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
	for(i=0;i<horizontalBoard*verticalBoard+1;i++){
		numbers.push(document.createElement('input'));
		numbers[i].classList.add('number-'+i);
		numbers[i].type='button';
		
		fragment.appendChild(numbers[i]);
	}
		buttonsBox.appendChild(fragment);
	

	// add event listeners for all number Buttons
	// number value definitioN
	let values = ['',1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	for(i=0;i<horizontalBoard*verticalBoard+1;i++){

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


//repeated number errors logic

function error(item){

	horizontal= document.getElementsByClassName(item.classList[1])
	vertical = document.getElementsByClassName(item.classList[3])
	box = document.getElementsByClassName(item.classList[4])
	
	searchEquals(item,box)
	searchEquals(item,horizontal)
	searchEquals(item,vertical)

	//error check
	
	allD=false;

	if(errors.length>0){
		for(i=0;i<errors.length;i++){
			if(item.value == errors[i].value && item != errors[i]){
				
			}else if(item.value != errors[i].value && item != error){allD=true};
			if(allD==true){
				console.log(allD);
				item.style.background='white';
			
				errors = errors.filter(error=>{
					if(error!=item){
						
					}
				})
			}

			/*for(j=0;j<errors.length;j++){
				if(errors[i].value == errors[j].value && errors[i]!=errors[j]){
				
				}
			}*/
		}
	}

}

let errors=[];

function searchEquals(item,direction){
	for(i=0;i<direction.length;i++){
		if(item.value == direction[i].value && item != direction[i] && item.value!=''){
			item.style.background='red';
			direction[i].style.background='red';
			errors.push(item);
			errors.push(direction[i]);
			
			//remove duplicates
			errors = errors.filter(function(item, pos, self) {
 				return self.indexOf(item) == pos;
			})

		}else{}
	}/*
	if(item.classList[2]=='parBackground'){
		item.style.background='white';
	}else{
		item.style.background='#ba9bff';
	}
	let index = errors.indexOf(item);
	if (index > -1){
		errors.splice(index, 1);
	}*/

}

//register errors

//initial state

const size = document.querySelector('.size');

//return to initial state

const selectAgain = document.querySelector('.X');
selectAgain.addEventListener('click',initialState)

function initialState(){
	squareBox.style.display ='none';
	buttonsBox.style.display ='none';
	size.style.display='';
}

initialState()



//change values
//speed
const horizontalNumber = document.getElementById('horizontalSize')
horizontalNumber.innerHTML=3;
let horizontalUp = document.getElementById('horizontalUp');
const horizontalDown = document.getElementById('horizontalDown');




//frequency
const verticalSize = document.getElementById('verticalSize')
verticalSize.innerHTML=3;
const verticalUp = document.getElementById('verticalUp');
const verticalDown = document.getElementById('verticalDown');


//speed Events Buttons
horizontalUp.addEventListener('click',()=>{
        horizontalNumber.innerHTML = parseInt(horizontalNumber.innerHTML)+1;
        changeHorizontal();
});

horizontalDown.addEventListener('click',()=>{
        horizontalNumber.innerHTML = parseInt(horizontalNumber.innerHTML)-1;
        changeHorizontal();
});


//frequency Events Buttons
verticalUp.addEventListener('click',()=>{
        verticalSize.innerHTML = parseInt(verticalSize.innerHTML)+1;
        changeVertical();
});

verticalDown.addEventListener('click',()=>{
        verticalSize.innerHTML = parseInt(verticalSize.innerHTML)-1;
        changeVertical();
});



function changeHorizontal(){

        if(parseInt(horizontalNumber.innerHTML)<1){
                horizontalNumber.innerHTML=1;
        } else if(parseInt(horizontalNumber.innerHTML)>5){
                horizontalNumber.innerHTML=5;
        }else{}
}

function changeVertical(){

        if(parseInt(verticalSize.innerHTML)<1){
                verticalSize.innerHTML=1;
        } else if(parseInt(verticalSize.innerHTML)>5){
                verticalSize.innerHTML=5;
        }else{}
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





setTimeout(()=>{
	let horizontalSize = parseInt(document.getElementById('horizontalSize').value);
	let verticalSize = parseInt(document.getElementById('verticalSize').value);
	inputsConstructor(horizontalSize,verticalSize);
},0)

*/
