// //import "reflect-metadata";
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Attendance} from "../entity/Attendance";

type HierarchicalViewModel = {day?: number, studid?: number, count: number};

export class HierarchicalViewController {

    private userRepository = getRepository(Attendance);
    
    async getHV(request: Request, response: Response) {	

        var HVdata: HierarchicalViewModel[] = await this.userRepository
                                                        .createQueryBuilder()
                                                        .select([request.query.hflag,'count(*) as count'])
                                                        .groupBy(request.query.hflag)
                                                        .getRawMany();

        response.end(JSON.stringify(HVdata));
    }
}