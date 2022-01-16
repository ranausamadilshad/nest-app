import {Controller,Get,Param} from "@nestjs/common";

@Controller("teacher")
export class TeacherController{
@Get()
getTeachers(){
    return "All Teachers"
}

@Get("/:teacherId")
getSingleTeacher(
    @Param("teacherId") teacherId:string
){
    return `Single Teacher ${teacherId}`
}
}