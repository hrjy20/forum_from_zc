import { AdminLayouts } from "@/layouts/index";

export const routerMap = [{
    path: "/",
    redirect: "/home",
    component: AdminLayouts,
    children: [
        {
            path: "/home",
            name: "home",
            component: () => import("@/views/home/home"),
            // meta: {
            //   title: "单位列表",
            // },
        },
    ]
}]

export const routerList = [...routerMap]