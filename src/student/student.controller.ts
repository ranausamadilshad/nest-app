import { Controller,Get, Post, Put,Patch,Delete, Param, Body} from "@nestjs/common";


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
createStudents(
    @Body() body
){
    return `Post Request Students with data ${JSON.stringify(body)}`
}

@Put("/:studentId")
updateStudent(
    @Param("studentId") studentId:string,
    @Body() body
){
    return `Update Students By Id ${studentId} with data ${body} `
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