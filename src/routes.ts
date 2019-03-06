import {HierarchicalViewController} from "./controller/HierarchicalViewController";
import {HierarchicalViewDetailController} from "./controller/HierarchicalViewDetailController";
import {TabViewController} from "./controller/TabViewController";

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
}];