import { Controller,Get, Param } from "@nestjs/common";

@Controller("teacher/:teacherId/student")
export class StudentTeacherController{
@Get()
getStudentTeacher(
    @Param("teacherId") teacherId:string
){
    return `Get All Students from specific Teacher Id ${teacherId}`
}
@Get("/:studentId")
getStudentTeacherSingle(
    @Param("studentId") studentId:string,
    @Param("teacherId") teacherId:string

){
    return `Get Single Student from Specific Teacher Id ${teacherId} and student Id ${studentId}`
}
}