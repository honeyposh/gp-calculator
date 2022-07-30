	



function displayPointFronUnitAndScore(){
	for(let i=0;i<score.length;i++){
		let scores=score[i].value
		let gradePoint;
			if(scores){
			if(scores < 40){
				grade[i].value="F"
				gradePoint=0
			}else if(scores < 45){
				grade[i].value="E"
		 		gradePoint=1
			}else if(scores < 50){
				grade[i].value="D"
				gradePoint=2
			}else if(scores < 60){
				grade[i].value="C"
		 		gradePoint=3
			}else if(scores < 70){
				grade[i].value="B"
				gradePoint=4
			}else if(scores <= 100){
				grade[i].value="A"
		 		gradePoint=5
			}
			point[i].value=gradePoint*unit[i].value
		}		
	}
						
}



function calculate(){
	let totalUnit=0
	let totalPoint=0
for(let i=0;i<score.length;i++){
		let scores=score[i].value
		let gradePoint;
			if(scores){
			if(scores < 40){
				grade[i].value="F"
				gradePoint=0
			}else if(scores < 45){
				grade[i].value="E"
				gradePoint=1
		 		
			}else if(scores < 50){
				grade[i].value="D"
				gradePoint=2
				
			}else if(scores < 60){
				grade[i].value="C"
				gradePoint=3
		 		
			}else if(scores < 70){
				grade[i].value="B"
				gradePoint=4
				
			}else if(scores <= 100){
				grade[i].value="A"
		 		gradePoint=5
			}
			point[i].value=gradePoint*unit[i].value
			totalPoint+=parseInt(point[i].value)
			totalUnit+=parseInt(unit[i].value)
}
		
}
	points.innerHTML=totalPoint;
	units.innerHTML=totalUnit;
	gpa.innerHTML=Math.round((totalPoint/totalUnit)*100)/100


}