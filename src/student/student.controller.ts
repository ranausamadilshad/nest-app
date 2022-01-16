import { Controller,Get, Post, Put,Patch,Delete} from "@nestjs/common";


@Controller('students')
export class StudentController{
@Get()
getStudents(){
    return "All students data"
}
@Get("/:studentId")
getStudentsById(){
    return "Get Single Student By ID"
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