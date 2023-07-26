// Description:

//Write a JS program that allows you to controle classroom attendance.
//Use array destructuring  tachniques!

// Solution:

function getStudents(classroom) {
	let {hasTeachingAssistant, classList} = classroom;
	let teacher , teachingAssistant, students;

	if(hasTeachingAssistant){
		[teacher,teachingAssistant, ...students] = classList;
	}else{
		[teacher, ...students] = classList;
	}
	return students;
}


//Example:
// console.log(
// getStudents({
// 	hasTeachingAssistant:false,
// 	classList:["Amel","Akram","Amine","Ahlem","Firas"]
// })
// 	)

// ===> (4)['Akram', 'Amine', 'Ahlem', 'Firas']