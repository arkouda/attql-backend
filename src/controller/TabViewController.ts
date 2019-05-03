import { getRepository, SelectQueryBuilder } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Attendance } from "../entity/Attendance";
import { model } from "../protos/out/model";

export class TabViewController {

    private entityRepository = getRepository(Attendance);

    async getTabView(request: Request, response: Response) {
        var tabViewData: Attendance[];
        var tabViewDataQuery: SelectQueryBuilder<Attendance> = this.entityRepository
            .createQueryBuilder("a")
            .where("a.day >= :d", { d: 0 });
        if (request.query.rollno_gte)
            tabViewDataQuery.andWhere('a.studid >= :rollno_gte', { rollno_gte: parseInt(request.query.rollno_gte) });
        if (request.query.rollno_lte)
            tabViewDataQuery.andWhere('a.studid <= :rollno_lte', { rollno_lte: parseInt(request.query.rollno_lte) });
        if (request.query.day_gte)
            tabViewDataQuery.andWhere('a.day >= :day_gte', { day_gte: parseInt(request.query.day_gte) });
        if (request.query.day_lte)
            tabViewDataQuery.andWhere('a.day <= :day_lte', { day_lte: parseInt(request.query.day_lte) });
        if (request.query.arrivaltime_gte)
            tabViewDataQuery.andWhere('a.arrivalTime >= :arrivaltime_gte', { arrivaltime_gte: request.query.arrivaltime_gte });
        if (request.query.arrivaltime_lte)
            tabViewDataQuery.andWhere('a.arrivalTime <= :arrivaltime_lte', { arrivaltime_lte: request.query.arrivaltime_lte });
        if (request.query.departuretime_gte)
            tabViewDataQuery.andWhere('a.departTime >= :departuretime_gte', { departuretime_gte: request.query.departuretime_gte });
        if (request.query.departuretime_lte)
            tabViewDataQuery.andWhere('a.departTime <= :departuretime_lte', { departuretime_lte: request.query.departuretime_lte });
        tabViewDataQuery.limit(parseInt(request.query.limit)).offset(parseInt(request.query.offset));
        tabViewData = await tabViewDataQuery.getMany();

        const modelObj = model.TabView;
        let message = modelObj.fromObject({ tabV: tabViewData });
        let buffer: Uint8Array = modelObj.encode(message).finish();
        // console.log(buffer.byteLength);
        response.setHeader("Content-Type", "application/octet-stream");
        response.write(buffer)
        response.end();
    }
}