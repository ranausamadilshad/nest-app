import { Controller,Get, Post, Put,Patch,Delete, Param} from "@nestjs/common";


@Controller('students')
export class StudentController{
@Get()
getStudents(){
    return "All students data"
}
// @Get("/:studentId")
// getStudentsById(
//   @Param() params:{studentId:string}  
// ){
//     const {studentId}=params;
//     return `Get Single Student By ${studentId}`
// }

@Get("/:studentId")
getStudentsById(
  @Param("studentId") studentId:string  
){
    return `Get Single Student By ${studentId}`
}


@Post()
createStudents(){
    return "Post Request Students"
}

@Put("/:studentId")
updateStudent(){
    return "Update Students By Id Put Request"
}

@Patch("/:studentId")
updateStudentPost(){
    return "Update Student By Id Post"
}
@Delete("/:studentId")
deleteStudent(){
    return "Delete Student"
}
}