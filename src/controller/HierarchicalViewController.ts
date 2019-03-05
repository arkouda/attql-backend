// //import "reflect-metadata";
// import {Get, Post, QueryParam, Req, Res} from "routing-controllers";
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Attendance} from "../entity/Attendance";

export class HierarchicalViewController {
    
    // @Get("/hierarchicalview")
    // test(@QueryParam("day") day: string, @QueryParam("studid") sid: string,
    //  @Req() request: Request, @Res() response: Response)

    async test(request: Request, response: Response, next: NextFunction) {		
        console.log("asdfghj");
    }
}