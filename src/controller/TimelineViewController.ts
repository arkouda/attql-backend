import { getRepository, SelectQueryBuilder } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Attendance } from "../entity/Attendance";

export class TimelineViewController {

    private entityRepository = getRepository(Attendance);

    async getTimeline(request: Request, response: Response) {
        var timelineViewData: Attendance[];
        var timelineViewDataQuery: SelectQueryBuilder<Attendance> = this.entityRepository
            .createQueryBuilder("a")
            .where("a.day >= :d", { d: 0 });
        if (request.query.dayLimit && request.query.page) {
            timelineViewDataQuery.andWhere('a.day >= :dayLimit_gte', { dayLimit_gte: (parseInt(request.query.page) - 1) * parseInt(request.query.dayLimit) });
            timelineViewDataQuery.andWhere('a.day <= :dayLimit_lte', { dayLimit_lte: (parseInt(request.query.page)) * parseInt(request.query.dayLimit) });
        }
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
        response.end(JSON.stringify({ items: itemsFinal, group: groupFinal }));
    }
}