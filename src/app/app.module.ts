import { Module } from '@nestjs/common';
import { TeacherController } from '../teacher/teacher.controller';
import { StudentController} from "../student/student.controller"
import { StudentTeacherController } from '../teacher/student.controller';
import { StudentService } from '../student/student.service';


@Module({
  imports: [],
  controllers:[StudentController,TeacherController,StudentTeacherController],
  providers:[StudentService]
})
export class AppModule {}


