// //import "reflect-metadata";
import {getRepository, Column} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Attendance} from "../entity/Attendance";
import {model} from "../protos/out/model";
import { print } from "util";

type HierarchicalViewModel = {day?: number, studid?: number, count: number};

export class HierarchicalViewController {

    private entityRepository = getRepository(Attendance);
    
    async getHV(request: Request, response: Response) {	

        var HVdata: HierarchicalViewModel[];
        var hierarchicalViewDataQuery = this.entityRepository.createQueryBuilder()
                                                            .select([request.query.hflag,'count(*) as count'])
                                                            .where("day >= :d", {d: 0})
            if(request.query.rollnoORday_lte) {
                console.log(request.query.rollnoORday_lte);
                hierarchicalViewDataQuery.andWhere(request.query.hflag+' >= :rollnoOrday_lte', {rollnoOrday_lte: parseInt(request.query.rollnoORday_lte)});
            }
            if(request.query.rollnoORday_gte) {
                console.log(request.query.rollnoORday_gte);
                hierarchicalViewDataQuery.andWhere(request.query.hflag+' <= :rollnoOrday_gte', {rollnoOrday_gte: parseInt(request.query.rollnoORday_gte)});
            }
            hierarchicalViewDataQuery.addGroupBy(request.query.hflag);
            if(request.query.count_lte)
                hierarchicalViewDataQuery.having('count('+request.query.hflag+') >= :count_lte', {count_lte: parseInt(request.query.count_lte)});
            if(request.query.count_gte)
                hierarchicalViewDataQuery.andHaving('count('+request.query.hflag+') <= :count_gte', {count_gte: parseInt(request.query.count_gte)});
                                               
        hierarchicalViewDataQuery.printSql()
        HVdata = await hierarchicalViewDataQuery.getRawMany();
                // hierarchicalViewDataQuery.printSql()
        // console.log(JSON.stringify(HVdata));
        //console.log(HVdata)

        const modelObj = model.HierarchicalView;
        let message =  modelObj.fromObject({hierarchicalV: HVdata});
        let buffer : Uint8Array = modelObj.encode(message).finish();
        // console.log(buffer.byteLength);
        response.setHeader("Content-Type", "application/octet-stream");
        response.write(buffer)
        response.end();
        // response.end(JSON.stringify(HVdata));
    }
}