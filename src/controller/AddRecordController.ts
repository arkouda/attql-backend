import { getRepository } from "typeorm";
import { Attendance } from "../entity/Attendance";
import { Request, Response } from "express";

export class AddRecordController {

    private entityRepository = getRepository(Attendance);

    async addRecord(request: Request, response: Response) {
        try {
            const newRecord: Attendance[] = await this.entityRepository.create(request.query);
            await this.entityRepository.save(newRecord);
            response.end(JSON.stringify({ status: 200 }));
        } catch (error) {
            console.error(error);
            response.end(JSON.stringify({ status: 401, error: error }));
        }
    }
}