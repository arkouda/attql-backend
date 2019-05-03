// //import "reflect-metadata";
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Attendance} from "../entity/Attendance";
import {model} from "../protos/out/model";

type HierarchicalViewModel = {day?: number, studid?: number, count: number};

export class HierarchicalViewController {

    private entityRepository = getRepository(Attendance);
    
    async getHV(request: Request, response: Response) {	

        var HVdata: HierarchicalViewModel[] = await this.entityRepository
                                                        .createQueryBuilder()
                                                        .select([request.query.hflag,'count(*) as count'])
                                                        .groupBy(request.query.hflag)
                                                        .getRawMany();

        console.log(JSON.stringify(HVdata));

        const modelObj = model.HierarchicalView;
        let message =  modelObj.fromObject({hierarchicalV: HVdata});
        let buffer : Uint8Array = modelObj.encode(message).finish();
        console.log(buffer.byteLength);
        response.setHeader("Content-Type", "application/octet-stream");
        response.write(buffer)
        response.end();
        // response.end(JSON.stringify(HVdata));
    }
}