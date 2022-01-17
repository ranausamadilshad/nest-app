import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { students } from '../../db';

@Injectable()
export class ValidStudentMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.studentId;
    const studentExists = students.some((student) => {
      return student.id === studentId;
    });
    if (!studentExists) {
      throw new HttpException('Student does not exist', 400);
    }
    next();
  }
}
