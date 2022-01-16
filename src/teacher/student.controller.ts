import { Controller,Get,Put,Delete } from "@nestjs/common";

@Controller("teacher/:teacherId/student")
export class StudentTeacherController{
@Get()
getStudentTeacher(){
    return "Get All Students from specific Teacher Id"
}
@Get("/:studentId")
getStudentTeacherSingle(){
    return "Get Single Student from Specific Teacher Id"
}
}