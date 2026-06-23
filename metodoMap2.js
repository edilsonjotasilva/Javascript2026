const cursos= ['JavaScript','Pyton','Java','PHP','Mysql']
	let res = cursos.map((ele,ind)=>{
		// console.log(ele);
		return `<div>${ele}</div>`
	//console.log(`O curso ${ele} se encontra na posição ${ind}`)	
	});

console.log(res)
