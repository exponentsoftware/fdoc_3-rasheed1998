
//  ```js
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(students){
let obj_set =[]
for(let value of students){

obj_set.push(Object.assign({"name":value[0],"skills":value[1],"scores":value[2]}))

} 
return obj_set;  
}
// console.log(convertArrayToObject(students))

const student_obj = convertArrayToObject(students)
const newStudent_obj = student_obj
// console.log(newStudent_obj)

function skillvalueadd(skill,value){
let newobj = {}
newobj["skill"] = skill
newobj["value"] = 10
return newobj;
}
let v1 = skillvalueadd("HTM",10)
console.log(v1)
let newstud_arr = []

