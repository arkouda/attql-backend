import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Attendance} from "../entity/Attendance";

type HierarchicalViewDetailModel = {day?: number, studid?: number, arrivalTime: Date, departTime : Date};

export class HierarchicalViewDetailController {

    private entityRepository = getRepository(Attendance);

    async getHVD(request: Request, response: Response) {
        
        var HVDdata: HierarchicalViewDetailModel[];
        if (request.query.hflag == 'day') 
            HVDdata = await this.entityRepository
                                .createQueryBuilder()
                                .select(['studid','arrivalTime','departTime'])
                                .where('day = :d', {d: request.query.day})
                                .getRawMany();
        else
            HVDdata = await this.entityRepository
                                .createQueryBuilder()
                                .select(['day','arrivalTime','departTime'])
                                .where('studid = :s',{s: request.query.studid})
                                .getRawMany();
        response.end(JSON.stringify(HVDdata));
    }
}