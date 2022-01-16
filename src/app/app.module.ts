import { Module } from '@nestjs/common';
import { TeacherController } from '../teacher/teacher.controller';
import { StudentController} from "../student/student.controller"
import { StudentTeacherController } from '../teacher/student.controller';


@Module({
  imports: [],
  controllers:[StudentController,TeacherController,StudentTeacherController]
})
export class AppModule {}


