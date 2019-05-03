import { HierarchicalViewController } from "./controller/HierarchicalViewController";
import { HierarchicalViewDetailController } from "./controller/HierarchicalViewDetailController";
import { TabViewController } from "./controller/TabViewController";
import { TimelineViewController } from "./controller/TimelineViewController";
import { AddRecordController } from "./controller/AddRecordController";

export const Routes = [{
    method: "get",
    route: "/hierarchicalView",
    controller: HierarchicalViewController,
    action: "getHV"
},
{
    method: "get",
    route: "/tabView",
    controller: TabViewController,
    action: "getTabView"
},
{
    method: "get",
    route: "/hierarchicalViewDetail",
    controller: HierarchicalViewDetailController,
    action: "getHVD"
},
{
    method: "get",
    route: "/timelineView",
    controller: TimelineViewController,
    action: "getTimeline"
},
{
    method: "get",
    route: "/addRecord",
    controller: AddRecordController,
    action: "addRecord"
}];