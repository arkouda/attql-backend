// import {UserController} from "./controller/UserController";
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
    action: "all"
},
{
    method: "get",
    route: "/hierarchicalViewDetail",
    controller: HierarchicalViewDetailController,
    action: "all"
}];

// [{
//     method: "get",
//     route: "/users",
//     controller: UserController,
//     action: "all"
// }, {
//     method: "get",
//     route: "/users/:id",
//     controller: UserController,
//     action: "one"
// }, {
//     method: "post",
//     route: "/users",
//     controller: UserController,
//     action: "save"
// }, {
//     method: "delete",
//     route: "/users/:id",
//     controller: UserController,
//     action: "remove"
// }];