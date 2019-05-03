import { getRepository, SelectQueryBuilder } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Attendance } from "../entity/Attendance";
import { model } from "../protos/out/model";

type uniqueStudidModel = {ID: number};

export class TimelineViewController {

    private entityRepository = getRepository(Attendance);

    async getTimeline(request: Request, response: Response) {
        var timelineViewData: Attendance[];
        var offset: number = (request.query.page - 1) * request.query.limit;
        var studidsForPageObj: uniqueStudidModel[] = await this.entityRepository
                                                .createQueryBuilder()
                                                .select('DISTINCT studid', 'ID')
                                                .orderBy('studid')
                                                .limit(request.query.limit)
                                                .offset(offset)
                                                .getRawMany();
        var studidsForPage: number[] = [];
        studidsForPageObj.forEach((studidRow: uniqueStudidModel) => {studidsForPage.push(studidRow.ID);});
        var timelineViewDataQuery: SelectQueryBuilder<Attendance> = this.entityRepository
            .createQueryBuilder("a")
            .where("a.day >= :d", { d: 0 });
        if (request.query.dayFrom && request.query.dayFrom && request.query.page && request.query.limit) {
            timelineViewDataQuery.andWhere('a.day >= :dayLimit_gte', { dayLimit_gte: request.query.dayFrom });
            timelineViewDataQuery.andWhere('a.day <= :dayLimit_lte', { dayLimit_lte: request.query.dayTo });
            timelineViewDataQuery.andWhere('a.studid IN (:studidList)', { studidList: studidsForPage});
        }
        // timelineViewDataQuery.andWhere('a.studid <= 10');
        var group: object = {};
        var items: object = {};
        timelineViewData = await timelineViewDataQuery.getMany();
        timelineViewData.forEach((item: Attendance) => {
            if (!group.hasOwnProperty(item.studid)) {
                items[item.studid] = [];
                group[item.studid] = 0;
            }
            items[item.studid].push({ day: item.day, arrivalTime: item.arrivalTime, departTime: item.departTime });
        });
        var groupFinal: object[] = [];
        Object.keys(group).forEach((item: string) => {
            groupFinal.push({ id: item, content: "Student " + item });
        });
        var itemsFinal: object[] = [];
        Object.keys(items).forEach((key) => {
            itemsFinal.push({groupid: key, items: items[key]})
        });
        
        const modelObj = model.TimelineView;
        let message =  modelObj.fromObject({items: itemsFinal, group: groupFinal });
        let buffer : Uint8Array = modelObj.encode(message).finish();
        console.log(buffer.byteLength);
        response.setHeader("Content-Type", "application/octet-stream");
        response.write(buffer)
        response.end();
        // response.end(JSON.stringify({ items: itemsFinal, group: groupFinal }));
    }
}